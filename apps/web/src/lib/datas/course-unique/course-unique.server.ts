import { parseMarkdownToHTML } from "$lib/utils/parse-markdown-to-json.server";
import type { DataCourseUnique } from "./types";

// Hardcode 6 course unique items
export const dataCourseUnique = (): DataCourseUnique => [
    {
        title: `Học từ làm dự án
        
& với chuyên gia`,
        icon: "💪",
    },
    {
        title: `Giáo trình

đặc sắc công phu`,
        icon: "📚",
    },
    {
        title: `Tích hợp nhiều 
        
năng lực & giá trị`,
        icon: "🎉",
    },
    {
        title: `"Bảo chứng" 

về uy tín & chất lượng`,
        icon: "🏆",
    },
    {
        title: `Tăng tốc thành tài 
        
*Accelerated Mastery*`,
        icon: "🍊",
    },
    {
        title: `Văn hoá tiếp nối 
        
"pay-forward"`,
        icon: "🎁",
    },
];

export const getDataCourseUnique = () => {
    const data = dataCourseUnique();
    const parsedData = data.map((item) => {
        return {
            title: parseMarkdownToHTML(item.title),
            icon: item.icon,
        };
    });
    return parsedData as DataCourseUnique;
};
