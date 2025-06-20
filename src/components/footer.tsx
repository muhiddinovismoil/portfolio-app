"use client";
import dynamic from "next/dynamic";

const FooterDynamic = dynamic(
    () => import("./client/footer").then((mod) => mod.ClientFooter),
    {
        ssr: false,
    }
);

export const Footer = () => {
    return <FooterDynamic />;
};
