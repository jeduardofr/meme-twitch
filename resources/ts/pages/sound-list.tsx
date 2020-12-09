import React from "react";
import Title from "../components/title";
import Audio from "../ui/sound/sound";
import useSound from "../hooks/sound.hook";
import Spinner from "../components/spinner";

function SoundList() {
    const { data, error } = useSound();

    if (error) return <p>Error</p>;
    if (!data) return <Spinner />;

    return (
        <div className="mt-4 mx-4 w-full">
            <Title>Trending</Title>
            <div className="grid grid-cols-12 gap-6 w-full mt-4">
                {data.map(sound => (
                    <Audio key={sound.id} sound={sound} />
                ))}
            </div>
        </div>
    );
}

export default SoundList;
