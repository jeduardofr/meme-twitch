import React from "react";
import { useLocation } from "react-router-dom";
import Link, { Props as LinkProps } from "../components/link";

const links: Omit<LinkProps, "selected">[] = [
    { to: "/", text: "Inicio", icon: "home" },
    { to: "/categories", text: "Categorías", icon: "tags" },
    { to: "/sign-in", text: "Iniciar Sesión", icon: "sign-out-alt" }
];

function Navigation() {
    const location = useLocation();

    return (
        <nav className="w-64">
            <ul className="space-y-4">
                {links.map(link => {
                    return (
                        <li key={link.to}>
                            <Link
                                to={link.to}
                                text={link.text}
                                icon={link.icon}
                                selected={link.to === location.pathname}
                            />
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default Navigation;
