import React from "react";
import Audio from "../ui/sound/sound";
import useSound from "../hooks/sound.hook";

function SoundList() {
    const { data, error } = useSound();

    if (error) return <p>Error</p>;
    if (!data) return <p>Loading</p>;

    return (
        <div className="p-10">
            {/* classname */}
            <h1 className="text-5xl text-snow font-bold">Miedo</h1>
            <div className="grid grid-cols-5 gap-6 w-full mt-4">
                {data.map(sound => (
                    <Audio key={sound.id} sound={sound} />
                ))}
            </div>
        </div>
    );
}

export default SoundList;
