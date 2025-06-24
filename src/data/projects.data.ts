import { ProjectI } from "./types";

export const ProjectData: ProjectI[] = [
    {
        id: "project-1",
        title: "Cho'ntak bot",
        liveLink: "disabled",
        githubLink: "https://github.com/muhiddinovismoil/chontak_bot",
        description:
            "This Telegram bot works like a smart note-taking assistant but for everything. You can save texts, images, videos, GIFs, stickers, music, voice messages, locations, and more. Just send your content with a keyword, and later retrieve it using inline queries or by searching with that keyword (note: the keyword is not a password). It’s a clone of the official version",
        technoIcons: [
            "/project/typescript.png",
            "/project/nodejs.png",
            "/project/nestjs.png",
        ],
    },
    {
        id: "project-2",
        title: "Gadgets bot",
        liveLink: "disabled",
        githubLink: "https://github.com/muhiddinovismoil/gadgets_bot",
        description:
            "A Telegram bot for buying and selling gadgets like Android - IOS, Laptop - PC. Users fill out a short form with pictures or with videos about their device, and upon confirmation, the listing is sent to an admin channel. Once approved, it gets published to the main channel for others to view.",
        technoIcons: [
            "/project/typescript.png",
            "/project/nodejs.png",
            "/project/nestjs.png",
        ],
    },
    {
        id: "project-3",
        title: "Nasiya App",
        liveLink: "disabled",
        githubLink: "https://github.com/muhiddinovismoil/nasiyasavdo_team2",
        description:
            "A backend API built exclusively for product sellers to manage halal installment (nasiya) sales with their most frequent customers. It works like a personal note-keeping system where sellers can record products, track customer payments, and monitor all transactions with monthly statistics. The app helps organize and simplify the pay-later selling process in a fair, transparent and securable way.",
        technoIcons: [
            "/project/typescript.png",
            "/project/nodejs.png",
            "/project/nestjs.png",
        ],
    },
    {
        id: "project-4",
        title: "Puzzle Game 15",
        liveLink: "disabled",
        githubLink: "https://github.com/muhiddinovismoil/15PuzzleGame",
        description:
            "A classic 15 Puzzle game built using Python and PyQt5. The goal is to arrange numbers from 1 to 15 in the correct order by sliding the tiles within a 4x4 grid. The game also tracks how many moves (chances) the player takes to solve the puzzle, helping users evaluate their solving efficiency. This project showcases GUI development with PyQt5 and logic implementation for interactive gameplay.",
        technoIcons: ["/project/python.png", "/project/pyqt.png"],
    },
];
