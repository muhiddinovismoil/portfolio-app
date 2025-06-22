"use client";
import { ImageI } from "@/types";
import dynamic from "next/dynamic";

const IconDynamic = dynamic(
    () =>
        import("@/components/client/ui/icon-dark-light").then(
            (mod) => mod.IconClient
        ),
    {
        ssr: false,
    }
);
export const CustomIcon = ({ iconDark, iconLight, w, h }: ImageI) => {
    return (
        <IconDynamic iconDark={iconDark} iconLight={iconLight} w={w} h={h} />
    );
};
