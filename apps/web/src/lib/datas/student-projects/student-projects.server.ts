import { parseMarkdownToHTML } from "$lib/utils/parse-markdown-to-json.server";
import type { StudentProjectProps } from "./types";

export const dataStudentProjects = (): StudentProjectProps[] => [
    {
        id: "1",
        title: "AI tool for English learning",
        members: ["Quốc Bảo"],
        description: parseMarkdownToHTML(
            `Web app giúp tăng cường học tiếng Anh với 2 chức năng translator và spelling. Một số thư viện sử dụng: Pillow, pytesseract, pdf2image, googletrans, streamlit-drawable-canvas, opencv-python…`,
        ),
        externalLinks: [{ title: "Github", url: "https://github.com/kyle-paul/final-project" }],
        demoId: "USx-8hVU5cw",
        className: "MC4AI 2023",
    },
    {
        id: "2",
        title: "Epidemic Simulation",
        members: ["Phước Khang", "Gia Bảo"],
        externalLinks: [
            { title: "Github", url: "https://github.com/123khg/mc4ai-Covid-Simulation" },
        ],

        demoId: "-AWL5ogw_H0",
        className: "MC4AI 2023",
    },
    {
        id: "3",
        title: "Phân tích điểm và xem điểm bằng login mật khẩu/ khuôn mặt",
        externalLinks: [
            { title: "Github", url: "https://github.com/FubuGold/mc4ai-project-hahaha-fbk" },
        ],
        members: ["Thành Tài", "Gia Huy"],
        className: "MC4AI - 2023",
        demoId: "qLRqG-jUVn8",
    },
    {
        id: "4",
        title: "Hệ thống phát hiện xe hơi đậu trước nhà",
        externalLinks: [
            { title: "Github", url: "https://github.com/giaphu39/mc4ai-project-checkcar" },
        ],
        members: ["Gia Phú", "Đông Quân", "Nam Khánh"],
        className: "MC4AI 2023",
        demoId: "wVjxxWFER4o",
    },
    {
        id: "5",
        title: "Hệ thống phát hiện xe hơi đậu trước nhà",
        externalLinks: [{ title: "Github", url: "https://github.com/huypham2403/mc4ai-project" }],
        members: ["Tường Huy"],
        className: "MC4AI 2023",
        demoId: "wVjxxWFER4o",
    },
    {
        id: "6",
        title: "Công cụ nhận diện chữ viết tay (Latin & Nhật)",
        externalLinks: [
            { title: "Github", url: "https://github.com/mentallyderanged/mc4aiproject" },
        ],
        members: ["Quang Vũ"],
        className: "MC4AI 2024",
        demoId: "PmSnFf-jc6M",
    },
];
