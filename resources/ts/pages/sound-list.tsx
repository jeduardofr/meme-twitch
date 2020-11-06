import React from "react";
import Title from "../components/title";
import Audio from "../ui/sound/sound";
import useSound from "../hooks/sound.hook";

function SoundList() {
    const { data, error } = useSound();

    if (error) return <p>Error</p>;
    if (!data) return <p>Loading</p>;

    return (
        <div className="mt-4 px-8">
            <Title>Miedo</Title>
            <div className="grid grid-cols-5 gap-6 w-full mt-4">
                {data.map(sound => (
                    <Audio key={sound.id} sound={sound} />
                ))}
            </div>
        </div>
    );
}

export default SoundList;
