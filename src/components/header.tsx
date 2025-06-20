"use client";
import dynamic from "next/dynamic";

const HeaderDynamic = dynamic(
    () => import("./client/header").then((mod) => mod.ClientHeader),
    {
        ssr: false,
    }
);
export const Header = () => {
    return <HeaderDynamic />;
};
