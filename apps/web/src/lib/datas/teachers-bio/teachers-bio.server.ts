import type { TeacherBioProps } from "./types";
import NgoQuocHungAvatar from "$lib/assets/profiles/ngo-quoc-hung.jpg?imagetools";
import LeNguyenThanhHuyAvatar from "$lib/assets/profiles/le-nguyen-thanh-huy.jpg?imagetools";
import { parseMarkdownToHTML } from "$lib/utils/parse-markdown-to-json.server";

export const dataTeachersBio: TeacherBioProps[] = [
    {
        role: "Giám đốc Học vấn",
        avatar: NgoQuocHungAvatar,
        name: "Ngô Quốc Hưng",
        details: parseMarkdownToHTML(
            "- Giám đốc và sáng lập Trung tâm tài năng & khởi nghiệp CoTAI\n- Từng là giám đốc AI công ty AINovation (2018-2019)\n- Giảng viên nghiên cứu AI & Robotics ở Lab của giáo sư Marc Toussaint Đại học Stuttgart (Đức, 2015-2018)\n- Nghiên cứu sinh Tiến sỹ cùng giáo sư Juergen Schmidhuber ở viện IDSIA (Thuỵ Sỹ, 2010-2015)\n- Thủ khoa khoa Điện Đại học Bách Khoa HCM (1997-2002, hạng 1/530).",
        ),
    },
    {
        role: "Giáo viên AI",
        avatar: LeNguyenThanhHuyAvatar,
        name: "Lê Nguyễn Thanh Huy",
    },
    {
        role: "Giáo viên AI",
        avatar: LeNguyenThanhHuyAvatar,
        name: "Lê Nguyễn Thanh Huy",
    },
    {
        role: "Giáo viên AI",
        avatar: LeNguyenThanhHuyAvatar,
        name: "Lê Nguyễn Thanh Huy",
    },
];
