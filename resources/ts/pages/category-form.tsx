import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../ui/category/validation";
import useCategory, {
    CategoryForm,
    ThumbnailType
} from "../hooks/category.hook";
import Input from "../components/input";
import Select from "../components/select";
import Button from "../components/button";

type FormProps = { defaultValues?: CategoryForm };

function Form({ defaultValues = { type: "url" } as CategoryForm }: FormProps) {
    const { register, handleSubmit, errors, getValues, reset } = useForm<
        CategoryForm
    >({
        resolver: yupResolver(schema),
        defaultValues
    });
    const { createCategory } = useCategory();
    const [type, setType] = useState<ThumbnailType>("url");

    function onSubmit(data: CategoryForm) {
        createCategory(data);
        reset({});
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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
                        onChange={() => setType(getValues("type"))}
                    />
                </div>
                {type === "url" && (
                    <Input
                        ref={register}
                        name="url"
                        id="url"
                        placeholder="URL de imagen"
                        errors={errors.url}
                        icon="image"
                    />
                )}
                {type === "file" && (
                    <Input
                        ref={register}
                        name="file"
                        id="file"
                        placeholder="Archivo"
                        type="file"
                        errors={errors.file}
                        icon="image"
                    />
                )}
            </div>
            <div className="text-right mt-4">
                <Button text="Agregar" icon="plus-circle" />
            </div>
        </form>
    );
}

export default Form;
