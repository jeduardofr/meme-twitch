import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./validation";
import useSound, { SoundForm, ThumbnailType } from "../../hooks/sound.hook";
import Input from "../../components/input";
import Select from "../../components/select";
import Button from "../../components/button";

type FormProps = {
    defaultValues?: SoundForm;
    onSubmit: (data: SoundForm) => void;
};

function Form({ defaultValues, onSubmit }: FormProps) {
    const { register, handleSubmit, errors, getValues, reset } = useForm<
        SoundForm
    >({
        resolver: yupResolver(schema),
        defaultValues
    });
    const [type, setType] = useState<ThumbnailType>(defaultValues.type);

    return (
        <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
            <Input
                ref={register}
                name="keyword"
                id="keyword"
                placeholder="keyword"
                errors={errors.keyword}
                icon="key"
            />

            <div className="mt-4"></div>
            <Input
                ref={register}
                name="author"
                id="author"
                placeholder="author"
                errors={errors.author}
                icon="crown"
            />

            <div className="mt-4"></div>
            <Input
                ref={register}
                name="audio"
                id="audio"
                placeholder="audio"
                type="file"
                errors={errors.audio}
                icon="volume-up"
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
                <Button text="Guardar" icon="save" />
            </div>
        </form>
    );
}

export default Form;
