"use client";
import React from "react";
import { useTheme } from "next-themes";
import { ImageI } from "@/types";

export const IconClient = ({ iconDark, iconLight }: ImageI) => {
    const { theme } = useTheme();
    return (
        <img
            src={theme === "dark" ? iconDark : iconLight}
            alt="icon-dark -- icon light"
        />
    );
};
