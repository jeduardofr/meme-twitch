import React from "react";
import { FieldError } from "react-hook-form";

type InputProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> & {
    label: string;
    errors: FieldError;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ id, label, errors, ...props }, ref) => (
        <div>
            <label className="text-snow block" htmlFor={id}>
                {label}
            </label>
            <input
                className="bg-independence text-snow focus:outline-none rounded-md py-2 px-4 mt-2"
                id={id}
                ref={ref}
                {...props}
            />
            {errors && <span>{errors.message}</span>}
        </div>
    )
);

export default Input;
