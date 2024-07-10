import { parseMarkdownToHTML } from "$lib/utils/parse-markdown-to-json.server";
import type { StudentProjectProps } from "./types";

export const dataStudentProjects: StudentProjectProps[] = [
    {
        id: "1",
        title: "Project 1 with long title that will not be truncated",
        description: parseMarkdownToHTML(`- Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            
- Eos ab porro, quialaborum quidem repellendus beatae! Itaque voluptate doloribus praesentium quasi,ic harum veniam accusantium assumenda numquam laboriosam ipsum quas quisquam,temporibus unde corrupti magni odio iure? Esse, laboriosam voluptate? Ipsa natusdicta incidunt, doloribus eaque alias impedit modi et.`),
        members: ["Lê Ngô Đức Anh"],
        externalLinks: [
            { title: "Demo", url: "https://link1.com" },
            { title: "Slide", url: "https://link2.com" },
        ],
        demoId: "wjfuB8Xjhc4",
        className: "MC4AI - 2023",
    },
    {
        id: "2",
        title: "Project 2",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nulla accusantium consectetur corporis odit a debitis nisi facilis est quam?",
        members: ["Ngô Quốc Hưng", "Lê Nguyễn Thanh Huy", "Lê Văn A"],
        demoId: "wjfuB8Xjhc4",
        className: "MC4AI - 2023",
    },
    {
        id: "3",
        title: "Project 3 with medium title",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
        members: ["Ngô Quốc Hưng", "Lê Nguyễn Thanh Huy", "Lê Văn A"],
        className: "MC4AI - 2023",
    },
    {
        id: "4",
        title: "Project 1 with long title that will not be truncated",
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos ab porro, quialaborum quidem repellendus beatae! Itaque voluptate doloribus praesentium quasi,ic harum veniam accusantium assumenda numquam laboriosam ipsum quas quisquam,temporibus unde corrupti magni odio iure? Esse, laboriosam voluptate? Ipsa natusdicta incidunt, doloribus eaque alias impedit modi et.",
        members: ["Lê Ngô Đức Anh"],
        externalLinks: [
            { title: "Demo", url: "https://link1.com" },
            { title: "Slide", url: "https://link2.com" },
        ],
        demoId: "wjfuB8Xjhc4",
        className: "MC4AI - 2023",
    },
    {
        id: "5",
        title: "Project 1 with long title that will not be truncated",
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos ab porro, quialaborum quidem repellendus beatae! Itaque voluptate doloribus praesentium quasi,ic harum veniam accusantium assumenda numquam laboriosam ipsum quas quisquam,temporibus unde corrupti magni odio iure? Esse, laboriosam voluptate? Ipsa natusdicta incidunt, doloribus eaque alias impedit modi et.",
        members: ["Lê Ngô Đức Anh"],
        externalLinks: [
            { title: "Demo", url: "https://link1.com" },
            { title: "Slide", url: "https://link2.com" },
        ],
        demoId: "wjfuB8Xjhc4",
        className: "MC4AI - 2023",
    },
    {
        id: "6",
        title: "Project 1 with long title that will not be truncated",
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos ab porro, quialaborum quidem repellendus beatae! Itaque voluptate doloribus praesentium quasi,ic harum veniam accusantium assumenda numquam laboriosam ipsum quas quisquam,temporibus unde corrupti magni odio iure? Esse, laboriosam voluptate? Ipsa natusdicta incidunt, doloribus eaque alias impedit modi et.",
        members: ["Lê Ngô Đức Anh"],
        externalLinks: [
            { title: "Demo", url: "https://link1.com" },
            { title: "Slide", url: "https://link2.com" },
        ],
        demoId: "wjfuB8Xjhc4",
        className: "MC4AI - 2023",
    },
    {
        id: "7",
        title: "Project 1 with long title that will not be truncated",
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos ab porro, quialaborum quidem repellendus beatae! Itaque voluptate doloribus praesentium quasi,ic harum veniam accusantium assumenda numquam laboriosam ipsum quas quisquam,temporibus unde corrupti magni odio iure? Esse, laboriosam voluptate? Ipsa natusdicta incidunt, doloribus eaque alias impedit modi et.",
        members: ["Lê Ngô Đức Anh"],
        externalLinks: [
            { title: "Demo", url: "https://link1.com" },
            { title: "Slide", url: "https://link2.com" },
        ],
        demoId: "wjfuB8Xjhc4",
        className: "MC4AI - 2023",
    },
];
