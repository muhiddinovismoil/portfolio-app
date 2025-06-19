"use client";
import { useTheme } from "next-themes";

export default function Home() {
    const { theme, setTheme } = useTheme();
    return (
        <main>
            <section className="flex gap-[20px]">
                <button
                    onClick={() => setTheme("light")}
                    className="bg-white text-black"
                >
                    Light Mode
                </button>
                <button
                    onClick={() => setTheme("dark")}
                    className="bg-white text-black"
                >
                    Dark Mode
                </button>
            </section>
        </main>
    );
}
