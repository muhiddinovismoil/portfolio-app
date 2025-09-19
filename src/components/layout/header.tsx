"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DialogTitle } from "@radix-ui/react-dialog";
import { LucideCode2, Menu } from "lucide-react";

const navLinks = [
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contacts", href: "#contacts", id: "contacts" },
];

export const Header = () => {
    const [open, setOpen] = useState(false);

    const handleClose = () => setOpen(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur">
            <div className="container flex h-16 items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-2 font-bold text-lg"
                >
                    <span>muhiddinov-dev</span>
                    <LucideCode2 size={20} />
                </Link>

                {/* Desktop menu */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    {navLinks.map((link) => (
                        <Link
                            key={link.id}
                            href={link.href}
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <Button variant="outline" className="hidden md:inline-flex">
                        <a href="#contacts">Contact me</a>
                    </Button>

                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="md:hidden"
                            >
                                <Menu />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[250px]">
                            <DialogTitle className="sr-only">
                                Navigation
                            </DialogTitle>
                            <nav className="flex flex-col px-[20px] gap-6 mt-8">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.id}
                                        href={link.href}
                                        onClick={handleClose}
                                        className="text-lg font-medium text-muted-foreground hover:text-foreground"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <Button variant="outline" onClick={handleClose}>
                                    <a href="#contacts">Contact me</a>
                                </Button>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};
