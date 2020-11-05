import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type ButtonProps = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
> & {
    icon: IconProp | null;
    text: string;
};

function Button({ text, icon, ...props }: ButtonProps) {
    return (
        <button
            {...props}
            className="bg-yellow hover:bg-yellow-400 focus:bg-yellow px-6 py-2 text-blue rounded-md font-bold space-x-2 shadow-lg hover"
        >
            <span>{text}</span>
            {icon && <FontAwesomeIcon className="text-lg" icon={icon} />}
        </button>
    );
}

export default Button;
