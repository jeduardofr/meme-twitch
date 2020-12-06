import React from "react";
import clsx from "clsx";

type TitleProps = React.DetailedHTMLProps<
    React.BaseHTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
> & {
    className?: string;
};

function Title({ className, children, ...props }: TitleProps) {
    return (
        <h1
            className={clsx("text-5xl text-light-purple font-bold", className)}
            {...props}
        >
            {children}
        </h1>
    );
}

export default Title;
