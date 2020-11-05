import React from "react";

type TitleProps = React.DetailedHTMLProps<
    React.BaseHTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
>;

function Title({ children, ...props }: TitleProps) {
    return (
        <h1 className="text-5xl text-light-purple font-bold" {...props}>
            {children}
        </h1>
    );
}

export default Title;
