import { Metadata } from "next";
import { generateBaseMetadata } from "@/lib/metadata";
import { Hero, About, Skills, Contacts, Projects } from "./_components";

export const metadata: Metadata = generateBaseMetadata(
    "Ismoil Mukhiddinov | Full-Stack Developer - Portfolio & Projects",
    "Discover my portfolio showcasing full-stack web development projects using Node.js, React.js, Next.js, and more. Expert in API design, frontend development, and modern technologies."
);

export default function Home() {
    return (
        <section className="py-12 sm:py-20 lg:py-32">
            <div className="container mx-auto px-4 ">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contacts />
            </div>
        </section>
    );
}
