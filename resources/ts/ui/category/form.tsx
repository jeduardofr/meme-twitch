import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useCategory, { CategoryForm } from "../../hooks/category.hook";
import Input from "../../components/input";

const schema = yup.object().shape({
    name: yup.string().required(),
    url: yup.string().required()
});

function Form() {
    const { register, handleSubmit, errors } = useForm<CategoryForm>({
        resolver: yupResolver(schema)
    });
    const { createCategory } = useCategory();

    return (
        <form onSubmit={handleSubmit(d => console.log(d))}>
            <Input
                ref={register}
                name="name"
                id="name"
                placeholder="Nombre"
                label="Nombre"
                errors={errors.name}
            />
            <Input
                ref={register}
                name="url"
                id="url"
                placeholder="URL de imagen"
                label="URL"
                errors={errors.url}
            />
            <input type="submit" value="Agregar" />
        </form>
    );
}

export default Form;
