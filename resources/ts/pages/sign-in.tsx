import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../components/input";
import Button from "../components/button";
import Title from "../components/title";
import { useStoreActions } from "../hooks/store.hook";
import useAuth, { SignInForm } from "../hooks/auth.hook";

const schema = yup.object().shape({
    email: yup.string().required("El correo electrónico es obligatorio"),
    password: yup.string().required("La contraseña es obligatorio")
});

function SignIn() {
    const {
        register,
        handleSubmit,
        errors,
        setError,
        getValues,
        reset
    } = useForm<SignInForm>({
        resolver: yupResolver(schema)
    });
    const { signIn } = useAuth();

    async function onSubmit(data: SignInForm) {
        const res = await signIn(data);
    }

    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <Title>Iniciar Sesión</Title>
            <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
                <Input
                    ref={register}
                    name="email"
                    id="email"
                    type="email"
                    placeholder="Correo"
                    errors={errors.email}
                    icon="pencil-alt"
                />
                <br />
                <Input
                    ref={register}
                    name="password"
                    id="password"
                    type="password"
                    placeholder="Contraseña"
                    errors={errors.password}
                    icon="pencil-alt"
                />
                <div className="text-right mt-4">
                    <Button text="Guardar" icon="save" />
                </div>
            </form>
        </div>
    );
}

export default SignIn;
