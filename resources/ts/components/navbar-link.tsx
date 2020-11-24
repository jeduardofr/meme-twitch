import React from "react";
import clsx from "clsx";
import { Link, LinkProps } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type Props = {
    text: string;
    to: string;
    icon: IconProp;
    selected: boolean;
} & LinkProps;

function NavbarLink({ text, to, icon, selected, ...props }: Props) {
    return (
        <Link
            {...props}
            to={to}
            className={clsx(
                "flex flex-row space-x-2 font-bold text-sm px-2 py-2 md:rounded-l-md",
                {
                    "bg-yellow text-blue": selected,
                    "text-white": !selected
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
