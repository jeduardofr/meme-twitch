import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface Props {
    text: string;
    to: string;
    icon: IconProp;
    selected: boolean;
}

function NavbarLink({ text, to, icon, selected }: Props) {
    return (
        <Link
            to={to}
            className={clsx(
                "flex flex-row space-x-2 font-medium text-snow p-2 rounded-lg",
                {
                    "bg-mikado-yellow text-space-cadet": selected
                }
            )}
        >
            <div className="w-6 text-center">
                <FontAwesomeIcon icon={icon} />
            </div>
            <span>{text}</span>
        </Link>
    );
}

export default NavbarLink;
