import React from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useMedia from "use-media";
import { Transition } from "@headlessui/react";
import clsx from "clsx";
import NavbarLink, { Props as LinkProps } from "../components/navbar-link";
import Profile from "../ui/profile";
import useMenu from "../hooks/menu.hook";
import useUser from "../hooks/user.hook";
import { useStoreState, useStoreActions } from "../hooks/store.hook";

const links: Omit<LinkProps, "selected">[] = [
    { to: "/", text: "Inicio", icon: "home" },
    { to: "/categories", text: "Categorías", icon: "tags" },
    { to: "/sounds", text: "Trending", icon: "crosshairs" },
    { to: "/sounds/form", text: "CrearSonido", icon: "plus-circle" }
];

function Sidebar() {
    const { isSignedIn } = useStoreState(state => state.auth);
    const { setToken, setIsSignedIn } = useStoreActions(state => state.auth);
    const isLargerThanMd = useMedia({ minWidth: "768px" });
    const location = useLocation();
    const { open, setOpen } = useMenu();
    const { signOut } = useUser();

    return (
        <nav className="w-full bg-blue md:min-h-with-gap rounded-t-xl md:rounded-tr-3xl md:w-64">
            <div className="px-4 mt-4 text-right md:hidden">
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
                            className="fixed top-0 right-0 mt-4 mr-4 text-white focus:text-yellow"
                            onClick={() => setOpen(false)}
                        >
                            <FontAwesomeIcon icon="times" size="2x" />
                        </button>
                    )}
                </li>
                <li className="px-4 py-3 mt-4 text-xs font-bold tracking-widest uppercase text-grey">
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
                {isSignedIn && (
                    <li>
                        <NavbarLink
                            to="/profile"
                            text="Perfil"
                            icon={"home"}
                            selected={"/profile" === location.pathname}
                        />
                    </li>
                )}
                <li>
                    {isSignedIn ? (
                        <NavbarLink
                            to="/sign-out"
                            text="Cerrar Sesión"
                            icon={"sign-out-alt"}
                            selected={"/sign-out" === location.pathname}
                            onClick={e => {
                                e.preventDefault();
                                signOut().then(() => {
                                    setToken("");
                                    setIsSignedIn(false);
                                });
                            }}
                        />
                    ) : (
                        <NavbarLink
                            to="/sign-in"
                            text="Iniciar Sesión"
                            icon={"sign-out-alt"}
                            selected={"/sign-in" === location.pathname}
                        />
                    )}
                </li>
            </Transition>
        </nav>
    );
}

export default Sidebar;
