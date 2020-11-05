import { IconProp } from "@fortawesome/fontawesome-svg-core";
import clsx from "clsx";
import React from "react";
import { FieldError } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type InputProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> & {
    errors: FieldError;
    icon: IconProp;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ id, icon, errors, ...props }, ref) => (
        <div className="flex flex-1 flex-col">
            <div className="flex flex-row w-full">
                <input
                    className={clsx(
                        "form-input block w-full border-none bg-independence text-white focus:outline-none rounded-l-md  py-2 px-4 flex-1 rounded-r-none",
                        {
                            "border-mikado-yellow border": errors
                        }
                    )}
                    ref={ref}
                    {...props}
                />
                <div className="bg-mikado-yellow text-independence rounded-r-md flex justify-center items-center px-3">
                    <FontAwesomeIcon icon={icon} />
                </div>
            </div>
            {errors && (
                <p className="text-white text-sm font-medium mt-2">
                    {errors.message}
                </p>
            )}
        </div>
    )
);

export default Input;
