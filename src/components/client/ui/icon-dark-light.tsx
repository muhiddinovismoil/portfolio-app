"use client";
import React from "react";
import { useTheme } from "next-themes";
import { ImageI } from "@/types";
import Image from "next/image";

export const IconClient = ({
    iconDark = "",
    iconLight = "",
    w,
    h,
    className,
}: ImageI) => {
    const { theme } = useTheme();
    return (
        <Image
            width={w}
            height={h}
            className={className}
            src={theme === "dark" ? iconDark : iconLight}
            alt="icon-dark -- icon light"
        />
    );
};
