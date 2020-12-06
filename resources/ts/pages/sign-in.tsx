import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../components/input";
import Button from "../components/button";
import Title from "../components/title";
import useAuth, { SignInForm } from "../hooks/auth.hook";
import useError from "../hooks/error.hook";

const schema = yup.object().shape({
    email: yup.string().required("El correo electrónico es obligatorio"),
    password: yup.string().required("La contraseña es obligatorio")
});

function SignIn() {
    const { register, handleSubmit, errors, setError } = useForm<SignInForm>({
        resolver: yupResolver(schema)
    });
    const { signIn } = useAuth();
    const { setFormErrors } = useError();
    const history = useHistory();

    async function onSubmit(data: SignInForm) {
        try {
            await signIn(data);
            history.push("/profile");
        } catch (err) {
            setFormErrors(err.response.data, setError);
        }
    }

    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <Title>Iniciar Sesión</Title>
            <form className="mt-8 w-md" onSubmit={handleSubmit(onSubmit)}>
                <Input
                    ref={register}
                    label="Correo Electrónico"
                    name="email"
                    id="email"
                    type="email"
                    placeholder="tu.correo@gmail.com"
                    errors={errors.email}
                    icon="pencil-alt"
                />
                <br />
                <Input
                    label="Contraseña"
                    ref={register}
                    name="password"
                    id="password"
                    type="password"
                    placeholder="algoseguro"
                    errors={errors.password}
                    icon="pencil-alt"
                />
                <div className="text-right mt-4">
                    <Button text="Ingresar" />
                </div>
            </form>
        </div>
    );
}

export default SignIn;
