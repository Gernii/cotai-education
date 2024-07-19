import { parseMarkdownToHTML } from "$lib/utils/parse-markdown-to-json.server";
import type { StudentProjectProps } from "./types";

export const dataStudentProjects = (): StudentProjectProps[] => [
    {
        id: "6",
        title: "Công cụ AI nhận diện chữ viết tay (Latin & Nhật)",
        description: `Web nhận diện chữ Latin và chữ Nhật viết tay.`,

        externalLinks: [
            { title: "Github", url: "https://github.com/mentallyderanged/mc4aiproject" },
        ],
        members: ["Quang Vũ"],
        className: "MC4AI 2024",
        demoId: "PmSnFf-jc6M",
    },
    {
        id: "1",
        title: "AI tool for English learning",
        members: ["Quốc Bảo"],
        description: `Web app giúp tăng cường học tiếng Anh với 2 chức năng translator và spelling. Một số thư viện sử dụng: Pillow, pytesseract, pdf2image, googletrans, streamlit-drawable-canvas, opencv-python…`,
        externalLinks: [{ title: "Github", url: "https://github.com/kyle-paul/final-project" }],
        demoId: "USx-8hVU5cw",
        className: "MC4AI 2023",
    },
    {
        id: "2",
        title: "COVID-19 Pandemic Simulation",
        members: ["Phước Khang", "Gia Bảo"],
        description: `Web mô phỏng tình trạng nhiễm COVID dựa theo một số tình huống và thông số giả định. Một số thư viện sử dụng: streamlit, streamlit-autorefresh, numpy, matplotlib.`,
        externalLinks: [
            { title: "Github", url: "https://github.com/123khg/mc4ai-Covid-Simulation" },
        ],

        demoId: "-AWL5ogw_H0",
        className: "MC4AI 2023",
    },
    {
        id: "3",
        title: "Phân tích điểm và xem điểm bằng login mật khẩu/ khuôn mặt",
        description: `Web phân tích điểm thi và xem điểm bằng chức năng login với mật khẩu hoặc khuôn mặt. Một số thư viện sử dụng: plotly, scikit-learn, streamlit, supabase (database), pandas, pillow, face_recognition (dlib, Cmake).`,

        externalLinks: [
            { title: "Github", url: "https://github.com/FubuGold/mc4ai-project-hahaha-fbk" },
        ],
        members: ["Thành Tài", "Gia Huy"],
        className: "MC4AI - 2023",
        demoId: "qLRqG-jUVn8",
    },
    {
        id: "4",
        title: "Hệ thống phát hiện xe hơi đậu trước nhà & phát cảnh báo",
        description: `Chức năng nhận diện xe hơi đậu trước nhà và phát cảnh báo. 
        
Một số thư viện sử dụng: OpenCV, torch, torchvision, Pillow, tqdm.`,

        externalLinks: [
            { title: "Github", url: "https://github.com/giaphu39/mc4ai-project-checkcar" },
        ],
        members: ["Gia Phú", "Đông Quân", "Nam Khánh"],
        className: "MC4AI 2023",
        demoId: "wVjxxWFER4o",
    },
    {
        id: "5",
        title: "Hệ thống phát hiện xe hơi đậu trước nhà & phát cảnh báo",
        description: `Chức năng nhận diện xe hơi đậu trước nhà và phát cảnh báo. 
        
Một số thư viện sử dụng: OpenCV, torch, torchvision, Pillow, tqdm.`,

        externalLinks: [{ title: "Github", url: "https://github.com/huypham2403/mc4ai-project" }],
        members: ["Tường Huy"],
        className: "MC4AI 2023",
        demoId: "wVjxxWFER4o",
    },
    {
        id: "8",
        title: "ML4AI Selective Projects",
        description: `- Phúc Khang, Quang Tuấn - [hand gesture recognition](https://github.com/Reimangod/FINAL-PROJECT/tree/main)
- Anh Tú - [Fruit classification](https://github.com/NgATu/Fruit-Classifier) 
- Lệ Quân, Duy Tiến - [Car evaluation web app](https://github.com/Alexeanred/Car-Evaluation-Web-App) 
- Anh Dương, Quang minh - [Flower classification](https://github.com/QMjnh/ML4AI_CAPSTONE_FlowersClassification)
- Vũ Uy, Huy Giáp - [Upscale images](https://github.com/ziap/srcnn)`,

        members: [],
        className: "ML4AI 2022",
        demoId: "8qE4_CW_bws",
    },
    {
        id: "7",
        title: "DL4AI Selective Projects",
        description: `- Thiên Phú - [Essay assistant](https://github.com/PaulTr27/vietnamese_essay_identifier)
- Công Thịnh, Hoàng Phúc, Quỳnh Nga - [Beauty moments synthesis](https://github.com/MeowwMeoww/BeautyMomentSynthesis)
- Tri Ân - [Translation app](https://github.com/trian-ctrn/envitranslate)
- Hoàng Tú, Nhật Quang - [Manga translator](https://github.com/tuchau1404/manga_translate)
- Gia Huy - [Emotion music recommendation](https://github.com/huyg1108/music-recommender)`,

        members: [],
        className: "DL4AI 2022",
        demoId: "1mYFgDp6sIU",
    },
];

export const getDataStudentProjects = (): StudentProjectProps[] => {
    const studentProjects = dataStudentProjects();

    const parsedStudentProjects = studentProjects.map((studentProject) => {
        return {
            ...studentProject,
            description: studentProject.description
                ? parseMarkdownToHTML(studentProject.description)
                : undefined,
        };
    });

    return parsedStudentProjects;
};
