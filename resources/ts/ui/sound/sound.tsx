import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useSound, { Sound } from "../../hooks/sound.hook";

type Props = {
    sound: Sound;
};

function Sound({ sound }: Props) {
    return (
        <div>
            <div className="w-40 rounded-tr-3xl rounded-bl-3xl rounded-tl-lg rounded-br-lg cursor-pointer">
                <div
                    className="w-40 h-40 bg-cover rounded-tr-3xl rounded-bl-3xl rounded-tl-lg rounded-br-lg relative"
                    style={{
                        backgroundImage: `url(${sound.thumbnailUrl}`
                    }}
                >
                    <div className="opacity-0 hover:opacity-75 bg-opacity-50 z-20 absolute inset-0 flex items-center justify-center bg-black rounded-tr-3xl rounded-bl-3xl rounded-tl-lg rounded-br-lg">
                        <FontAwesomeIcon
                            className="text-white mr-2"
                            icon="play-circle"
                            size="4x"
                        />
                    </div>
                </div>
            </div>
            <div>
                {/* Keyword */}
                <div className="flex flex-row items-center">
                    <FontAwesomeIcon
                        className="text-white mr-2"
                        icon="key"
                        size="1x"
                    />
                    {/* <span className="text-white text-xl">Helloudar</span> */}
                    <span className="text-white text-xl">{sound.keyword}</span>
                </div>
                {/* Author */}
                <div className="flex flex-row items-center">
                    <FontAwesomeIcon
                        className="text-white mr-2 text-xs"
                        icon="crown"
                    />
                    {/* <span className="text-white text-sm">AzzuBanana</span> */}
                    <span className="text-white text-sm">{sound.author}</span>
                </div>
            </div>
        </div>
    );
}

export default Sound;
