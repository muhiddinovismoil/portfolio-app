import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";

export const Footer = () => {
    return (
        <footer className="border-t border-border/40 bg-background/80 backdrop-blur">
            <div className="container flex flex-col-reverse md:flex-row items-center justify-between gap-4 py-6 text-center md:text-left">
                <span className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} muhiddinov-dev. All rights
                    reserved.
                </span>

                <div className="flex items-center justify-center md:justify-end gap-4">
                    <a
                        href="https://github.com/muhiddinovismoil"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-muted transition-colors"
                    >
                        <Github className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                    </a>
                    <a
                        href="https://linkedin.com/in/ismoil-mukhiddinov-748564340"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-muted transition-colors"
                    >
                        <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                    </a>
                    <a
                        href="mailto:your@email.com"
                        aria-label="Email"
                        className="p-2 rounded-full hover:bg-muted transition-colors"
                    >
                        <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                    </a>
                </div>
            </div>
        </footer>
    );
};
