import React, { useState, useEffect } from "react";
import useSound, { SoundForm, ThumbnailType } from "../hooks/sound.hook";
import { useParams, useHistory } from "react-router-dom";
import Form from "../ui/sound/form";
import Spinner from "../components/spinner";

function SoundForm() {
    const params = useParams<{ id: string | null }>();
    const history = useHistory();
    const { data, createSound, updateSound } = useSound();

    const [loading, setLoading] = useState(true);
    const [defaultValues, setDefaultValues] = useState({} as SoundForm);

    useEffect(() => {
        if (!data) return;

        if (params.id) {
            const sound = data.find(c => c.id === parseInt(params.id, 10));
            // sound not found
            if (!sound) {
                history.push("/sounds");
                return;
            }

            const { keyword, author, audioUrl, thumbnailMimeType, thumbnailUrl } = sound;

            setDefaultValues({
                keyword,
                author,
                audio: null,
                url: thumbnailUrl,
                file: null,
                type: (thumbnailMimeType ? "url" : "file") as ThumbnailType,
                categories: []
            });
        } else {
            setDefaultValues({
                keyword: "",
                author: "",
                url: "",
                audio: null,
                file: null,
                type: "url",
                categories: []
            });
        }
        setLoading(false);
    }, [data]);

    function onSubmit(data: SoundForm) {
        console.log(data);
        if (params.id) {
            updateSound(parseInt(params.id, 10), data);
        } else {
            createSound(data);
        }
        history.push("/sounds");
    }

    if (loading) return <Spinner />;

    return (
        <div className="w-full px-8">
            <h1 className="text-5xl text-light-purple font-bold mt-4">
                {params.id ? "Editar" : "Agregar"} Sonido
            </h1>

            <Form onSubmit={onSubmit} defaultValues={defaultValues} />
        </div>
    );
}

export default SoundForm;
