import React from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useMedia from "use-media";
import NavbarLink, { Props as LinkProps } from "../components/navbar-link";
import useMenu from "../hooks/menu.hook";
import clsx from "clsx";

const links: Omit<LinkProps, "selected">[] = [
    { to: "/", text: "Inicio", icon: "home" },
    { to: "/categories", text: "Categorías", icon: "tags" },
    { to: "/sign-in", text: "Iniciar Sesión", icon: "sign-out-alt" }
];

function Navigation() {
    const isLargerThanMd = useMedia({ minWidth: "768px" });
    const location = useLocation();
    const { open, setOpen } = useMenu();

    return (
        <nav className="w-full md:w-64">
            <div className="px-4 text-right md:hidden">
                <button
                    onClick={() => setOpen(!open)}
                    className={clsx({
                        "text-snow": !open,
                        "text-blue-green": open
                    })}
                >
                    <FontAwesomeIcon icon="bars" size="2x" />
                </button>
            </div>
            {(open || isLargerThanMd) && (
                <ul className="space-y-4">
                    {links.map(link => {
                        return (
                            <li key={link.to}>
                                <NavbarLink
                                    to={link.to}
                                    text={link.text}
                                    icon={link.icon}
                                    selected={link.to === location.pathname}
                                />
                            </li>
                        );
                    })}
                </ul>
            )}
        </nav>
    );
}

export default Navigation;
