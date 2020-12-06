import React from "react";
import clsx from "clsx";
import { FieldError } from "react-hook-form";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type InputProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> & {
    errors: FieldError;
    icon: IconProp;
    label?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ id, label, icon, errors, ...props }, ref) => (
        <div className="flex flex-1 flex-col">
            <div className="w-full space-y-2">
                {label && (
                    <label className="text-white font-bold" htmlFor={id}>
                        {label}
                    </label>
                )}
                <input
                    className={clsx(
                        "w-full bg-blue-dark border-2 focus:outline-none rounded-md py-2 px-4 text-white placeholder-gray-50",
                        {
                            "focus:ring-2 focus:ring-light-purple border-blue-dark": !errors,
                            "focus:ring-1 focus:ring-pink border-pink": errors
                        }
                    )}
                    id={id}
                    ref={ref}
                    {...props}
                />
                {/* <div className="bg-yellow text-blue rounded-r-md flex justify-center items-center px-3">
                    <FontAwesomeIcon icon={icon} />
                </div> */}
            </div>
            {errors && <p className="text-white text-sm font-medium mt-2">{errors.message}</p>}
        </div>
    )
);

export default Input;
