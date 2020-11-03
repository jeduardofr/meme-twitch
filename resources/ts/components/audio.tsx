import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Audio() {
    return (
        <div>
            <div className="bg-black w-40 rounded-tr-3xl rounded-bl-3xl rounded-tl-lg rounded-br-lg">
                <div
                    className="w-40 h-40 bg-cover opacity-75 rounded-tr-3xl rounded-bl-3xl rounded-tl-lg cursor-pointer rounded-br-lg hover:opacity-50"
                    style={{
                        backgroundImage:
                            "url(http://memetwitch.test/storage/images/362b8c8a-383b-4c08-a220-5636e139f54d.jpeg)"
                    }}
                ></div>
            </div>

            <div>
                {/* Keyword */}
                <div className="flex flex-row items-center">
                    <FontAwesomeIcon
                        className="text-white mr-2"
                        icon="key"
                        size="1x"
                    />
                    <span className="text-white text-xl">Helloudar</span>
                </div>
                {/* Author */}
                <div className="flex flex-row items-center">
                    <FontAwesomeIcon
                        className="text-white mr-2 text-xs"
                        icon="crown"
                    />
                    <span className="text-white text-sm">AzzuBanana</span>
                </div>
            </div>
        </div>
    );
}

export default Audio;
