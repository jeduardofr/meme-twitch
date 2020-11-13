import React from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useMedia from "use-media";
import { Transition } from "@headlessui/react";
import clsx from "clsx";
import NavbarLink, { Props as LinkProps } from "../components/navbar-link";
import Profile from "../ui/profile";
import useMenu from "../hooks/menu.hook";

const links: Omit<LinkProps, "selected">[] = [
    { to: "/", text: "Inicio", icon: "home" },
    { to: "/categories", text: "Categorías", icon: "tags" },
    { to: "/sounds", text: "Trending", icon: "crosshairs" },
    { to: "/sign-in", text: "Iniciar Sesión", icon: "sign-out-alt" }
];

function Sidebar() {
    const isLargerThanMd = useMedia({ minWidth: "768px" });
    const location = useLocation();
    const { open, setOpen } = useMenu();

    return (
        <nav className="bg-blue md:min-h-with-gap rounded-t-xl md:rounded-tr-3xl w-full md:w-64">
            <div className="px-4 text-right md:hidden mt-4">
                <button
                    onClick={() => setOpen(!open)}
                    className="text-white focus:text-yellow"
                >
                    <FontAwesomeIcon icon="bars" size="2x" />
                </button>
            </div>

            <Transition
                show={open || isLargerThanMd}
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                as="ul"
                className={clsx({
                    "fixed inset-0 bg-blue z-40 h-screen overflow-y-auto": !isLargerThanMd
                })}
            >
                <li className="relative flex justify-center md:justify-end">
                    <div
                        className={clsx("relative", {
                            square: isLargerThanMd,
                            "w-32 h-32 mt-4": !isLargerThanMd
                        })}
                    >
                        <Profile />
                    </div>
                    {!isLargerThanMd && (
                        <button
                            className="text-white focus:text-yellow fixed top-0 right-0 mt-4 mr-4"
                            onClick={() => setOpen(false)}
                        >
                            <FontAwesomeIcon icon="times" size="2x" />
                        </button>
                    )}
                </li>
                <li className="mt-4 px-4 text-grey font-bold text-xs uppercase tracking-widest py-3">
                    Opciones
                </li>
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
            </Transition>
        </nav>
    );
}

export default Sidebar;
