import { Hero, About, Skills, Contacts, Projects } from "./_components";

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
