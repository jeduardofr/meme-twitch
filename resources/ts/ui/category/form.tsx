import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./validation";
import useCategory, { CategoryForm, ThumbnailType } from "../../hooks/category.hook";
import Input from "../../components/input";
import Button from "../../components/button";
import ImagePreviewer from "../../components/image-previewer";

type FormProps = {
    defaultValues?: CategoryForm;
    onSubmit: (data: CategoryForm) => void;
};

function Form({ defaultValues, onSubmit }: FormProps) {
    const { register, handleSubmit, errors, getValues, reset } = useForm<CategoryForm>({
        resolver: yupResolver(schema),
        defaultValues
    });
    const [type, setType] = useState<ThumbnailType>(defaultValues.type);
    const [file, setFile] = useState<FileList | string | null>(null);

    function onImageChange(field: string) {
        setFile(getValues(field));
    }

    function onRadioChange() {
        setType(getValues("type"));
        setFile(null);
    }

    return (
        <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
            <Input
                label="Nombre"
                ref={register}
                name="name"
                id="name"
                placeholder="Comedia, Fedelobo, Risa"
                errors={errors.name}
                icon="pencil-alt"
            />
            <div className="mt-4">
                <div className="flex flex-row space-x-8">
                    <div className="flex flex-row space-x-2 items-center">
                        <input
                            type="radio"
                            name="type"
                            id="url-option"
                            ref={register}
                            value="url"
                            onChange={onRadioChange}
                        />
                        <label className="text-white font-bold" htmlFor="url-option">
                            URL
                        </label>
                    </div>
                    <div className="flex flex-row space-x-2 items-center">
                        <input
                            type="radio"
                            name="type"
                            ref={register}
                            value="file"
                            id="file-option"
                            onChange={onRadioChange}
                        />
                        <label className="text-white font-bold" htmlFor="file-option">
                            Archivo local
                        </label>
                    </div>
                </div>
                <div className="mt-4 flex flex-row space-x-4 max-w-screen-md">
                    <div className="flex-1">
                        {type === "url" && (
                            <Input
                                ref={register}
                                name="url"
                                id="url"
                                label="Dirección URL"
                                placeholder="https://placekitten.com/g/200/300"
                                errors={errors.url}
                                onChange={() => onImageChange("url")}
                                icon="image"
                            />
                        )}
                        {type === "file" && (
                            <div className="w-full">
                                <label
                                    htmlFor="file"
                                    className="border-2 border-dashed p-4 border-white flex flex-col justify-center items-center w-full hover:border-opacity-50 transition duration-75 cursor-pointer"
                                >
                                    <img src="/images/dropzone.png" />
                                    {file === null && (
                                        <p className="text-white">No archivo seleccionado</p>
                                    )}
                                    {file !== null && (
                                        <p className="text-white">{(file as FileList)[0].name}</p>
                                    )}
                                </label>
                                {errors.file && errors.file.message}
                                <input
                                    className="w-0 h-0 absolute oveflow-hidden opacity-0"
                                    style={{ zIndex: -1 }}
                                    ref={register}
                                    name="file"
                                    id="file"
                                    type="file"
                                    onChange={() => onImageChange("file")}
                                />
                            </div>
                        )}
                    </div>
                    <ImagePreviewer file={file} />
                </div>
            </div>

            <div className="text-right mt-4">
                <Button text="Guardar" icon="save" />
            </div>
        </form>
    );
}

export default Form;
