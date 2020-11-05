import React from "react";

type InputProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> & {
    text: string;
};

const Radio = React.forwardRef<HTMLInputElement, InputProps>(
    ({ text, id, ...props }, ref) => (
        <div>
            <label htmlFor={id} className="text-white">
                {text}
            </label>
            <input ref={ref} {...props} />
        </div>
    )
);

export default Radio;
