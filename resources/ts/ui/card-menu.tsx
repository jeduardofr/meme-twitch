import React from "react";
import { Menu, Transition } from "@headlessui/react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type CardMenuProps = {
    onEdit: (event: React.MouseEvent) => void;
    onRemove: (event: React.MouseEvent) => void;
};

function CardMenu({ onEdit, onRemove }: CardMenuProps) {
    return (
        <div className="absolute top-0 right-0 mt-2 mr-2 z-30">
            <Menu>
                {({ open }) => (
                    <>
                        <Menu.Button className="inline-flex justify-center w-full p-1 text-sm font-medium transition duration-150 ease-in-out">
                            <FontAwesomeIcon
                                icon="ellipsis-v"
                                className="text-white hover:text-light-purple"
                            />
                        </Menu.Button>
                        <Transition
                            show={open}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items
                                static
                                className="absolute right-0 w-32 mt-2 origin-top-right bg-blue-dark rounded-md shadow-lg outline-none"
                            >
                                <div className="py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                onClick={onEdit}
                                                className={clsx(
                                                    "flex items-center w-full px-4 py-2 text-sm leading-5 text-left space-x-2",
                                                    {
                                                        "bg-blue text-white": active,
                                                        "text-white": !active
                                                    }
                                                )}
                                            >
                                                <FontAwesomeIcon icon="pencil-alt" />
                                                <span>Editar</span>
                                            </a>
                                        )}
                                    </Menu.Item>

                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                onClick={onRemove}
                                                className={clsx(
                                                    "flex items-center w-full px-4 py-2 text-sm leading-5 text-left space-x-2 hover:cursor-pointer",
                                                    {
                                                        "bg-blue text-white": active,
                                                        "text-white": !active
                                                    }
                                                )}
                                            >
                                                <FontAwesomeIcon icon="trash" />
                                                <span>Eliminar</span>
                                            </a>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </>
                )}
            </Menu>
        </div>
    );
}

export default CardMenu;
