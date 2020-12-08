import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import Spinner from "./spinner";

type Props = {
    file: FileList | string | null;
    className?: string;
};

function ImagePreviewer({ file = null, className }: Props) {
    const [loading, setLoading] = useState(false);
    const imageRef = useRef(null);

    useEffect(() => {
        if (file === null) return;

        setLoading(true);
        if (file instanceof FileList) {
            const reader = new FileReader();
            reader.onload = function(e) {
                imageRef.current.src = e.target.result;
                setLoading(false);
            };
            reader.readAsDataURL(file[0]);
        }

        if (typeof file === "string" && file.length > 0) {
            imageRef.current.src = file;
            setLoading(false);
        } else {
            setLoading(false);
        }
    }, [file]);

    return (
        <div className="h-32 w-32 border-2 border-dashed border-white rounded-md relative overflow">
            {(file === null || file.length === 0) && (
                <p className="text-white text-center absolute inset-0 flex justify-center items-center">
                    Imagen no seleccionada
                </p>
            )}
            {loading && (
                <p className="absolute inset-0 flex justify-center items-center">
                    <Spinner />
                </p>
            )}
            <img
                className={clsx({
                    "w-full h-full object-cover": file !== null && !loading,
                    "opacity-0": file === null || loading || file.length === 0
                })}
                ref={imageRef}
            />
        </div>
    );
}

export default ImagePreviewer;
