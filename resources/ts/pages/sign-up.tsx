import React from "react";
import { useForm } from "react-hook-form";
import { useHistory, Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../components/input";
import Button from "../components/button";
import Title from "../components/title";
import useAuth, { SignUpForm } from "../hooks/auth.hook";
import useError from "../hooks/error.hook";

const schema = yup.object().shape({
    name: yup.string().required("El nombre es obligatorio"),
    email: yup.string().required("El correo electrónico es obligatorio"),
    password: yup.string().required("La contraseña es obligatorio")
});

function SignUp() {
    const { register, handleSubmit, errors, setError } = useForm<SignUpForm>({
        resolver: yupResolver(schema)
    });
    const { signUp } = useAuth();
    const { setFormErrors } = useError();
    const history = useHistory();

    async function onSubmit(data: SignUpForm) {
        try {
            await signUp(data);
            history.push("/sign-in");
        } catch (err) {
            setFormErrors(err.response.data, setError);
        }
    }

    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <Title>Crear cuenta</Title>
            <form className="mt-8 max-w-md" onSubmit={handleSubmit(onSubmit)}>
                <Input
                    ref={register}
                    label="Nombre"
                    name="name"
                    id="name"
                    type="name"
                    placeholder="John Doe"
                    errors={errors.name}
                    icon="pencil-alt"
                />
                <br />
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
                <br />
                <Input
                    label="Confirmación de contraseña"
                    ref={register}
                    name="password_confirmation"
                    id="password_confirmation"
                    type="password"
                    placeholder="algoseguro"
                    errors={errors.password_confirmation}
                    icon="pencil-alt"
                />
                <div className="mt-8 flex flex-col justify-end">
                    <Link
                        className="mb-2 text-sm text-right text-light-purple hover:underline transition duration-100"
                        to="/sign-in"
                    >
                        ¿Ya tienes una cuenta?
                    </Link>
                    <Button text="Registrarme" />
                </div>
            </form>
        </div>
    );
}

export default SignUp;
