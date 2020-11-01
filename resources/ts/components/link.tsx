import React from "react";
import clsx from "clsx";
import { Link as BaseLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface Props {
    text: string;
    to: string;
    icon: IconProp;
    selected: boolean;
}

function Link({ text, to, icon, selected }: Props) {
    return (
        <BaseLink
            to={to}
            className={clsx(
                "flex flex-row space-x-2 hover:text-blue-green font-medium",
                {
                    "text-snow": !selected,
                    "text-blue-green": selected
                }
            )}
        >
            <div className="w-6 text-center">
                <FontAwesomeIcon icon={icon} />
            </div>
            <span>{text}</span>
        </BaseLink>
    );
}

export default Link;
