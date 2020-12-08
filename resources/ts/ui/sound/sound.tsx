import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useSound, { Sound } from "../../hooks/sound.hook";
import CardMenu from "../card-menu";
import { useHistory } from "react-router-dom";

type Props = {
    sound: Sound;
};

function Sound({ sound }: Props) {
    const { deleteSound } = useSound();
    const history = useHistory();

    function onEdit() {
        history.push(`/sounds/form/${sound.id}`);
    }

    function onRemove() {
        deleteSound(sound.id);
    }

    return (
        <div className="col-span-6 sm:col-span-4 lg:col-span-3 xl:col-span-2">
            <div className="  rounded-tr-3xl rounded-bl-3xl rounded-tl-lg rounded-br-lg cursor-pointer relative">
                <div
                    className="square bg-cover rounded-tr-3xl rounded-bl-3xl rounded-tl-lg rounded-br-lg relative"
                    style={{
                        backgroundImage: `url(${sound.thumbnailUrl}`
                    }}
                >
                    <CardMenu onEdit={onEdit} onRemove={onRemove} />
                    <div className="opacity-0 hover:opacity-75 bg-opacity-50 z-20 absolute inset-0 flex items-center justify-center bg-black rounded-tr-3xl rounded-bl-3xl rounded-tl-lg rounded-br-lg">
                        <button>
                            <FontAwesomeIcon
                                className="text-white mr-2"
                                icon="play-circle"
                                size="4x"
                            />
                        </button>
                    </div>
                </div>
            </div>
            <div>
                {/* Keyword */}
                <div className="flex flex-row items-center space-x-2">
                    <FontAwesomeIcon
                        className="text-white"
                        icon="key"
                        size="1x"
                    />
                    {/* <span className="text-white text-xl">Helloudar</span> */}
                    <span className="text-white text-base">
                        {sound.keyword}
                    </span>
                </div>
                {/* Author */}
                <div className="flex flex-row items-center space-x-2">
                    <FontAwesomeIcon
                        className="text-white text-xs"
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
