import React, { useState } from "react";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./validation";
import useSound, { SoundForm, ThumbnailType } from "../../hooks/sound.hook";
import Input from "../../components/input";
import Select from "../../components/select";
import Button from "../../components/button";

import ImagePreviewer from "../../components/image-previewer";

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
    const [file, setFile] = useState<FileList | string | null>(
        defaultValues.url.length > 0 ? defaultValues.url : null
    );

    function onImageChange(field: string) {
        // @@@ Find a proper fix to this error.
        // The errors appears when we select a file for the first time (or after
        // change the type of file to upload) and we try to change that file for
        // another one, the actual value it's not different therefore the preview
        // and the dropzone doesn't seem to detect any change. I suspect this is
        // due to memory reasons, since the DOM only holds one instance of FileList
        // and for that reason React can't detect any change.
        if (field === "file") {
            setFile(null);
            setTimeout(() => setFile(getValues(field)), 1);
        } else setFile(getValues(field));
    }

    function onRadioChange() {
        setType(getValues("type"));
        setFile(null);
    }

    return (
        <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
            <Input
                label = "Keyword"
                ref={register}
                name="keyword"
                id="keyword"
                placeholder="Keyword"
                errors={errors.keyword}
                icon="key"
            />


            <div className="mt-4"></div>
            <Input
                label = "Autor"
                ref={register}
                name="author"
                id="author"
                placeholder="Messi, Rubius, Rey Misterio"
                errors={errors.author}
                icon="crown"
            />

            <div className="mt-4"></div>

            {/* Subir archivos */}
            <Input
                ref={register}
                name="audio"
                id="audio"
                placeholder="audio"
                type="file"
                errors={errors.audio}
                icon="volume-up"
            />

            
            {/* <div className="w-full">
                <label
                    htmlFor="file"
                    className={clsx(
                        "border-2 border-dashed p-4 flex flex-col justify-center items-center w-full hover:border-opacity-50 transition duration-75 cursor-pointer",
                        {
                            "border-white": !errors.file,
                            "border-pink": errors.file
                        }
                    )}
                >
                    <img src="/images/audio.png" width="70px"/>
                    {file === null && (
                        <p className="text-white">No hay audio seleccionado</p>
                    )}
                    {file !== null && (
                        <p className="text-white">{(file as FileList)[0].name}</p>
                    )}
                    {errors.file && (
                        <span className="text-white">{errors.file.message}</span>
                    )}
                </label>
                <input
                    className="w-0 h-0 absolute oveflow-hidden opacity-0"
                    style={{ zIndex: -1 }}
                    ref={register}
                    name="sound"
                    id="file"
                    type="file"
                    onChange={() => onImageChange("file")}
                />
            </div> */}


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
                                    className={clsx(
                                        "border-2 border-dashed p-4 flex flex-col justify-center items-center w-full hover:border-opacity-50 transition duration-75 cursor-pointer",
                                        {
                                            "border-white": !errors.file,
                                            "border-pink": errors.file
                                        }
                                    )}
                                >
                                    <img src="/images/dropzone.png" />
                                    {file === null && (
                                        <p className="text-white">No archivo seleccionado</p>
                                    )}
                                    {file !== null && (
                                        <p className="text-white">{(file as FileList)[0].name}</p>
                                    )}
                                    {errors.file && (
                                        <span className="text-white">{errors.file.message}</span>
                                    )}
                                </label>
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
