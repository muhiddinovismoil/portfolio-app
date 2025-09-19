import React from "react";
import clsx from "clsx";

interface TypographyProps extends React.PropsWithChildren {
    className?: string;
}

export function TypographyH1({ children, className }: TypographyProps) {
    return (
        <h1
            className={clsx(
                "scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance",
                className
            )}
        >
            {children}
        </h1>
    );
}

export function TypographyH2({ children, className }: TypographyProps) {
    return (
        <h2
            className={clsx(
                "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
                className
            )}
        >
            {children}
        </h2>
    );
}
export function TypographyP({ children, className }: TypographyProps) {
    return (
        <p className={clsx("leading-5 [&:not(:first-child)]:mt-4", className)}>
            {children}
        </p>
    );
}
