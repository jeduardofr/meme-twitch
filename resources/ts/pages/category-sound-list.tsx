import React from "react";
import { useParams } from "react-router-dom";
import useCategorySound from "../hooks/categorySound.hook";
import Audio from "../ui/sound/sound";

function CategorySoundList() {
    const { id } = useParams<{ id: string | null }>();
    const { data, error } = useCategorySound(parseInt(id));

    if (error) return <p>Error</p>;
    if (!data) return <p>Loading</p>;

    return (
        <div className="px-8 w-full">
            <h1 className="mt-4 text-light-purple text-5xl font-bold">{data.name}</h1>
            <div className="grid grid-cols-12 gap-6 w-full mt-4">
                {data.sounds.map(sound => (
                    <Audio key={sound.id} sound={sound} />
                ))}
            </div>
        </div>
    );
}

export default CategorySoundList;
