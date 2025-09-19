import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TypographyH2, TypographyP } from "@/components/ui/typography";
import { Mail, Phone, Send } from "lucide-react";
import Link from "next/link";
import React from "react";

export const Contacts = () => {
    return (
        <div id="contacts" className="pt-[125px] flex flex-col gap-[60px]">
            <div className="flex flex-col justify-center items-center gap-5 text-center px-4">
                <Badge variant="secondary" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Contacts
                </Badge>
                <TypographyH2 className="text-3xl md:text-4xl font-bold">
                    Get in Touch
                </TypographyH2>
                <TypographyP className="text-muted-foreground max-w-2xl text-md">
                    Feel free to reach out for collaborations or just a friendly
                    chat.
                </TypographyP>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 justify-items-center px-4 md:px-22">
                <div className="w-full max-w-[300px] flex flex-col items-center border rounded-xl p-6 pb-8 shadow-sm hover:shadow-md transition">
                    <TypographyP className="font-semibold">Email</TypographyP>
                    <p className="text-muted-foreground text-center mt-2">
                        mukhiddinovvismoil@gmail.com
                    </p>
                    <Button className="mt-4" variant={"outline"}>
                        <Link
                            href={"mailto:mukhiddinovvismoil@gmail.com"}
                            className="flex items-center gap-2"
                        >
                            Send Mail
                            <Mail className="w-4 h-4 mr-2" />
                        </Link>
                    </Button>
                </div>

                <div className="w-full max-w-[300px] flex flex-col items-center border rounded-xl p-6 pb-8 shadow-sm hover:shadow-md transition">
                    <TypographyP className="font-semibold">
                        Telegram
                    </TypographyP>
                    <p className="text-muted-foreground text-center mt-2">
                        @mukhiddinov_ismoil
                    </p>
                    <Button className="mt-4" variant={"outline"}>
                        <Link
                            href={"https://t.me/mukhiddinov_ismoil"}
                            target="_blank"
                            className="flex items-center gap-2"
                        >
                            Message
                            <Send className="w-4 h-4 mr-2" />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};
