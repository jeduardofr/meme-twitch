import React from "react";

function Audio() {
    return (
        <div>
            <div className="bg-black w-40 rounded-tr-3xl rounded-bl-3xl rounded-tl-lg rounded-br-lg">
                <div
                    className="w-40 h-40 bg-cover opacity-75 rounded-tr-3xl rounded-bl-3xl rounded-tl-lg rounded-br-lg"
                    style={{
                        backgroundImage:
                            "url(http://memetwitch.test/storage/images/362b8c8a-383b-4c08-a220-5636e139f54d.jpeg)"
                    }}
                ></div>
            </div>

            <div>
                <p className="text-white">-Hellouda</p>
                <p className="text-white">AzzuBanana</p>
            </div>
        </div>
    );
}

export default Audio;
