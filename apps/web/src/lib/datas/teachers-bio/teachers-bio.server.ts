import type { TeacherBioProps } from "./types";
import NgoQuocHungAvatar from "$lib/assets/profiles/NgoQuocHung.jpg?imagetools";
import LeNguyenThanhHuyAvatar from "$lib/assets/profiles/LeNguyenThanhHuy.jpg?imagetools";
import CaoHoangTungAvatar from "$lib/assets/profiles/CaoHoangTung.jpg?imagetools";
import HoangGiangAvatar from "$lib/assets/profiles/HoangGiang.jpg?imagetools";
import NguyenQuynhMaiAvatar from "$lib/assets/profiles/NguyenQuynhMai.jpg?imagetools";
import NguyenTruongThinhAvatar from "$lib/assets/profiles/NguyenTruongThinh.jpg?imagetools";
import NguyenVanPhiAvatar from "$lib/assets/profiles/NguyenVanPhi.jpg?imagetools";
import NguyenVietHaAvatar from "$lib/assets/profiles/NguyenVietHa.jpg?imagetools";
import { parseMarkdownToHTML } from "$lib/utils/parse-markdown-to-json.server";

export const dataTeachersBio = (): TeacherBioProps[] => [
    {
        role: "CoTAI founder/CEO & Academic Director",
        avatar: NgoQuocHungAvatar,
        name: "Ngô Quốc Hưng",
        details: parseMarkdownToHTML(
            `Trình độ: sau tiến sĩ ngành AI/Robotics
            
Kinh nghiệm giảng dạy: 20 năm đào tạo kỹ sư & hướng dẫn nghiên cứu sinh ngành AI/Robotics tại ĐH Bách Khoa HCM, ĐH KyungHee Hàn Quốc, Viện IDSIA Thuỵ Sỹ, ĐH Stuttgart Đức, và CoTAI.

Năng lực & thành tựu nổi bật: 
  - Kiến trúc sư trưởng xây dựng chương trình đào tạo tăng tốc thành tài Accelerated Mastery in AI của CoTAI (2019-2024)
  - Đã trực tiếp đào tạo hơn 4000 học viên tại CoTAI, một số học viên hiện là kỹ sư & chuyên gia AI tại Vingroup BigData, Tiktok Bytedance, You, Meta, là founders của các AI startups, và là nghiên cứu sinh các viện/ĐH lớn trên khắp thế giới.
  - [Một số thành tựu khác](https://gem.cot.ai/bio)`,
        ),
    },
    {
        role: "Kỹ sư AI của CoTAI",
        avatar: LeNguyenThanhHuyAvatar,
        name: "Lê Nguyễn Thanh Huy",
        details: parseMarkdownToHTML(`Trình độ: Kỹ sư chuyên ngành phần mềm, (ĐH Văn Lang 2018)

Kinh nghiệm giảng dạy: 4 năm đào tạo AI (Học máy & học sâu qua lập trình dự án, triển khai tích hợp hệ thống) tại CoTAI

Năng lực & thành tựu nổi bật: 
  - Kỹ sư nghiên cứu & phát triển chính, trực tiếp triển khai thành công nhiều dự án AI lớn cho các khách hàng của CoTAI ví dụ Khả Kim, Canawan, Gambaru/Gianty, GlobalCare.
  - Tham gia xây dựng giáo trình đào tạo cùng CoTAI từ các kinh nghiệm dự án thực tế (2020--2024)
  - Trực tiếp xây dựng hệ thống BackEnd của startup Go2Joy (2016--2018)`),
    },
    {
        role: "Kỹ sư AI của CoTAI",
        avatar: NguyenVietHaAvatar,
        name: "Nguyễn Việt Hà",
        details: parseMarkdownToHTML(`Trình độ: Kỹ sư Khoa học máy tính chuyên ngành phần mềm (ĐH KHTN 2007)

Kinh nghiệm giảng dạy: 3 năm đào tạo giải thuật & lập trình, Toán mô hình, và AI/Học máy tại CoTAI

Năng lực & thành tựu nổi bật: 
  - Tham gia xây dựng giáo trình đào tạo cùng CoTAI từ các kinh nghiệm dự án thực tế (2021–2024)
  - Hơn 12 năm kinh nghiệm lập trình viên cao cấp về Java tại MECORP (2014–2020), VIVOO (2011–2014), GAMELOFT (2008–2010)`),
    },
    {
        role: "Trưởng lab xử lý giọng nói, viện Bigdata tập đoàn Vingroup",
        avatar: NguyenTruongThinhAvatar,
        name: "Nguyễn Trường Thịnh",
        details: parseMarkdownToHTML(`Trình độ: Thạc sĩ Khoa học máy tính chuyên ngành AI (ĐH Stuttgart 2019)

Kinh nghiệm giảng dạy: 4 năm đào tạo về AI, Học máy & học sâu nhận dạng giọng nói tại CoTAI

Năng lực & thành tựu nổi bật: 
  - Chuyên gia AI nhận dạng giọng nói tại Vingroup Bigdata Institute từ 9/2019 đến nay, trực tiếp phát triển trợ lý ảo Vivi (dùng cho Vinfast & Vinhomes).
  - Lập trình hệ thống tự động điều hướng tháp năng lượng mặt trời tại The German Aerospace Center (6/2016--8/2019)`),
    },
    {
        role: "Giảng viên nghiên cứu tại AI Lab thuộc ĐH Công Nghệ UET Hà Nội",
        avatar: NguyenVanPhiAvatar,
        name: "Nguyễn Văn Phi",
        details: parseMarkdownToHTML(`Trình độ: Thạc sĩ Khoa học máy tính chuyên ngành AI (ĐH UET 2023)

Kinh nghiệm giảng dạy: 5 năm giảng dạy giải thuật & lập trình tại Khoa máy tính ĐH UET & đào tạo AI/Học máy tại CoTAI.

Năng lực & thành tựu nổi bật:
  - Chuyên gia nghiên cứu xử lý ảnh y tế (siêu âm tim Echocardiography) tại AI Lab ĐH UET (2021 đến nay) & VinUni-Illinois Smart Health Center (3/2023 đến nay)
  - Xây dựng và chuyển giao hệ thống AI xử lý thoại tự động hoá bán hàng online trong thương mại điện tử cho khách hàng của CoTAI (3/2020 đến 3/2021)`),
    },
    {
        role: "Kỹ sư AI cao cấp tại công ty Tiktok/Bytedance Singapore",
        avatar: HoangGiangAvatar,
        name: "Hoàng Giang",
        details: parseMarkdownToHTML(`Trình độ: Kỹ sư Khoa học máy tính chuyên ngành AI (ĐH Công nghệ UET Hà Nội 2020)

Kinh nghiệm giảng dạy: 5 năm đào tạo về giải thuật, lập trình AI/Học máy & học sâu xử lý ảnh tại CoTAI.

Năng lực & thành tựu nổi bật: 
  - Nhiều năm kinh nghiệm tối ưu ứng dụng AI chạy trên thiết bị biên tại AI Lab Samsung SDS & viện Vingroup BigData
  - Luận văn xuất sắc về tối ưu giải thuật xử lý ảnh y tế, AI Lab ĐH UET.`),
    },
    {
        role: "Chuyên viên cấp cao về Khoa học dữ liệu tại MoMo",
        avatar: NguyenQuynhMaiAvatar,
        name: "Nguyễn Quỳnh Mai",
        details: parseMarkdownToHTML(`Trình độ: Thạc sĩ ngành Công nghệ thông tin (NAIST Japan 2019)

Kinh nghiệm giảng dạy: 4 năm đào tạo về AI/Học máy tại CoTAI

Năng lực & thành tựu nổi bật: Nhiều năm kinh nghiệm nghiên cứu phát triển AI xử lý ngôn ngữ tự nhiên tại MoMo (2/2022 đến nay) và viện Vingroup Bigdata (11/2019 đến 2/2022).`),
    },
    {
        role: "Kiến trúc sư giải pháp cloud AI tại Amazon AWS",
        avatar: CaoHoangTungAvatar,
        name: "Cao Hoàng Tùng",
        details: parseMarkdownToHTML(`Trình độ: Kỹ sư Công nghệ thông tin chuyên ngành AI (ĐH Công nghệ UET Hà Nội 2023)

Kinh nghiệm giảng dạy: 3 năm đào tạo về giải thuật & lập trình AI/Học máy tại CoTAI.

Năng lực & thành tựu nổi bật: 
  - Tham gia dự án AI xử lý giọng nói và văn bản tại viện Vingroup Bigdata (5/2020 đến 9/2021), và AI Lab UET (7/2022 đến 6/2023)
  - Xây dựng hệ thống phát hiện trang web lừa đảo (phishing). Trình bày tại hội nghị Blackhat (USA'23, Asia'20).`),
    },
];
