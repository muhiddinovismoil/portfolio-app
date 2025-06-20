"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export const ClientHeader = () => {
    const { theme, setTheme } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <>
            <header className="pt-[32px] relative z-50">
                <div className="container">
                    <div className="flex pl-[26px] justify-between pr-[27px] items-center">
                        <Link href={"/"} onClick={() => setMenuOpen(false)}>
                            <Image
                                src={
                                    theme === "dark"
                                        ? "/logo/mobile.light.svg"
                                        : "/logo/mobile.dark.svg"
                                }
                                alt="dark svg"
                                width={133}
                                height={16}
                            />
                        </Link>
                        <div className="flex gap-[29px] items-center">
                            <div className="hidden gap-[65px] md:flex">
                                <Link href={"/about"}>About me</Link>
                                <Link href={"/projects"}>Projects</Link>
                                <Link href={"/education"}>Education</Link>
                                <Link href={"/contacts"}>Contact</Link>
                            </div>
                            <div
                                onClick={() =>
                                    setTheme(
                                        theme === "dark" ? "light" : "dark"
                                    )
                                }
                            >
                                <Image
                                    className="cursor-pointer"
                                    width={18}
                                    height={19}
                                    src={
                                        theme === "dark"
                                            ? "/light-mode.svg"
                                            : "/dark-mode.svg"
                                    }
                                    alt="theme switcher"
                                />
                            </div>
                            <div
                                className="cursor-pointer md:hidden"
                                onClick={() => setMenuOpen(!menuOpen)}
                            >
                                {!menuOpen ? (
                                    <Image
                                        width={24}
                                        height={24}
                                        src={
                                            theme === "dark"
                                                ? "/menu-bar.light.svg"
                                                : "/menu-bar.dark.svg"
                                        }
                                        alt="Burger-menu bar"
                                    />
                                ) : (
                                    <Image
                                        width={24}
                                        height={24}
                                        src={
                                            theme === "dark"
                                                ? "/close.light.svg"
                                                : "/close.dark.svg"
                                        }
                                        alt="Close burger menu"
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                {menuOpen && (
                    <div
                        className="md:hidden absolute top-[95px] left-0 w-full z-40"
                        style={{
                            height: "calc(100vh - 95px)",
                        }}
                    >
                        <div
                            className="w-full h-full flex justify-center"
                            style={{
                                backgroundColor:
                                    theme === "dark"
                                        ? "rgba(0, 0, 0, 0.9)"
                                        : "rgba(255, 255, 255, 0.9)",
                            }}
                        >
                            <div className="flex flex-col items-center mt-[165px] gap-[60px]">
                                <Link
                                    href="/about"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    About me
                                </Link>
                                <Link
                                    href="/projects"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Projects
                                </Link>
                                <Link
                                    href="/education"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Education
                                </Link>
                                <Link
                                    href="/contacts"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </header>
        </>
    );
};
