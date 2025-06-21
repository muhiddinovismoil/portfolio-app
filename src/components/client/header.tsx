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
            <header className="pt-[34px] relative z-50 md:pt-[45px] xl:pt-[60px]">
                <div className="container">
                    <div className="flex pl-[26px] justify-between pr-[27px] items-center">
                        <Link href={"/"} onClick={() => setMenuOpen(false)}>
                            <Image
                                className="md:w-[161px] md:h-[21px]"
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
                        <div className="flex gap-[29px] md:gap-[53px] items-center">
                            <div className="hidden md:gap-[55px] lg:gap-[65px] md:flex">
                                <Link
                                    href={"/about"}
                                    className="text-[17px] font-medium"
                                >
                                    About me
                                </Link>
                                <Link
                                    href={"/projects"}
                                    className="text-[17px] font-medium"
                                >
                                    Projects
                                </Link>
                                <Link
                                    href={"/education"}
                                    className="text-[17px] font-medium"
                                >
                                    Education
                                </Link>
                                <Link
                                    href={"/contacts"}
                                    className="text-[17px] font-medium"
                                >
                                    Contact
                                </Link>
                            </div>
                            <div
                                onClick={() =>
                                    setTheme(
                                        theme === "dark" ? "light" : "dark"
                                    )
                                }
                            >
                                <Image
                                    className="cursor-pointer md:w-[20px] md:h-[20px]"
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
                        onClick={() => setMenuOpen(false)}
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
                                    className="font-medium text-[17px]"
                                    href="/about"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    About me
                                </Link>
                                <Link
                                    className="font-medium text-[17px]"
                                    href="/projects"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Projects
                                </Link>
                                <Link
                                    className="font-medium text-[17px]"
                                    href="/education"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Education
                                </Link>
                                <Link
                                    className="font-medium text-[17px]"
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
