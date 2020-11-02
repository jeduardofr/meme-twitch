import React from "react";

type Option = {
    label: React.ReactNode;
    value: string | number | string[];
};

type SelectProps = React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
> & { options: Option[] };

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
    ({ options, ...props }, ref) => (
        <select
            className="form-select block w-full border-none bg-independence rounded-md text-snow px-4 py-2"
            ref={ref}
            {...props}
        >
            {options.map(({ label, value }, id) => (
                <option key={id} value={value}>
                    {label}
                </option>
            ))}
        </select>
    )
);

export default Select;
