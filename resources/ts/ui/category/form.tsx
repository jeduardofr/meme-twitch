import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useCategory, {
    CategoryForm as BaseCategoryForm
} from "../../hooks/category.hook";
import Input from "../../components/input";
import Select from "../../components/select";
import Button from "../../components/button";

const schema = yup.object().shape({
    name: yup.string().required("El nombre es obligatorio"),
    url: yup.string().required("La URL es obligatoria")
});

type CategoryForm = {
    type: "url" | "file";
} & BaseCategoryForm;

type FormProps = { defaultValues?: CategoryForm };

function Form({ defaultValues = { type: "url" } as CategoryForm }: FormProps) {
    const { register, handleSubmit, errors } = useForm<CategoryForm>({
        resolver: yupResolver(schema),
        defaultValues
    });
    const { createCategory } = useCategory();

    return (
        <form onSubmit={handleSubmit(d => console.log(d))}>
            <Input
                ref={register}
                name="name"
                id="name"
                placeholder="Nombre"
                errors={errors.name}
                icon="pencil-alt"
            />
            <div className="flex flex-col md:flex-row mt-4 space-y-4 md:space-x-4 md:space-y-0">
                <div>
                    <Select
                        name="type"
                        ref={register}
                        options={[
                            { label: "URL", value: "url" },
                            { label: "Imagen local", value: "file" }
                        ]}
                    />
                </div>
                <Input
                    ref={register}
                    name="url"
                    id="url"
                    placeholder="URL de imagen"
                    errors={errors.url}
                    icon="image"
                />
            </div>
            <div className="text-right mt-4">
                <Button text="Agregar" icon="plus-circle" />
            </div>
        </form>
    );
}

export default Form;
