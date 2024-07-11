import { CourseIds } from "../courses/constants";
import type { ReviewProps } from "./types";
import ChauLeQuanAvatar from "$lib/assets/images/reviews/ChauLeQuan.png?imagetools";
import TranBaoTienAvatar from "$lib/assets/images/reviews/TranBaoTien.jpg?imagetools";
import YamashitaTriAnAvatar from "$lib/assets/images/reviews/YamashitaTriAn.png?imagetools";
import NguyenPhamNhatQuangAvatar from "$lib/assets/images/reviews/NguyenPhamNhatQuang.jpg?imagetools";
import NguyenLyThanhTaiAvatar from "$lib/assets/images/reviews/NguyenLyThanhTai.png?imagetools";
import NguyenLeQuocBaoAvatar from "$lib/assets/images/reviews/NguyenLeQuocBao.jpg?imagetools";
import LePhucKhangAvatar from "$lib/assets/images/reviews/LePhucKhang.png?imagetools";

export const dataReviews: ReviewProps[] = [
    {
        avatar: NguyenLeQuocBaoAvatar,
        className: CourseIds.ml4ai,
        year: 2023,
        name: "Nguyễn Lê Quốc Bảo",
        review: "Thầy Hưng thầy Huy ơi, nhóm em sau chung kêt Steamhacks đã có những giải sau đây: Giải đội có UI & Ux tốt nhất và giải cá nhân hacker xuất sắc nhất giải đấu. Em và các thành viên trong team thật sự rất biết ơn và chân thành cảm ơn hai thầy đã giới thiệu cuộc thi và hướng dẫn team em từ tận vòng 1 đến bây giờ. Nếu không nhờ những công sức đó và chỉ dẫn cần thiết đó thì team đã không có được thành quả như bây giờ",
    },

    {
        avatar: TranBaoTienAvatar,
        className: CourseIds.mc4ai,
        year: 2023,
        name: "Trần Bảo Tiên",
        review: "Đây là lần đầu em học một ngôn ngữ máy tính nào đó một cách nghiêm túc. Em thật sự rất vui vì em học tốt và theo kịp bài. Thầy giảng cũng rất dễ hiểu và em Quốc Bảo (TA) cũng giúp em rất nhiều khi em thắc mắc",
    },
    {
        avatar: NguyenLyThanhTaiAvatar,
        className: CourseIds.mc4ai,
        year: 2023,
        name: "Nguyễn Lý Thành Tài",
        review: "Em thấy có mục project rất thú vị. Em cũng thấy được sức mạnh của các thư viện trong Python và khó hơn hẳn so với khoá trước (PythonAI) 😂, cụ thể khoá trước em mất gần 20p để hoàn thành HW nhưng khoá này em mất gần 2 tiếng mới có thể hoàn thành :)))))))))))",
    },
    {
        avatar: YamashitaTriAnAvatar,
        className: CourseIds.dl4ai,
        year: 2022,
        name: "Yamashita Tri Ân",
        review: "Em đã học hỏi được rất nhiều thứ và những kiến thức đó sẽ làm một bàn đạp vững chắc của em sau này. Em xin cảm ơn các thầy và các anh trong đội ngủ giảng dạy đã giúp đỡ em trong thời gian qua",
    },
    {
        avatar: LePhucKhangAvatar,
        className: CourseIds.ml4ai,
        year: 2022,
        name: "Lê Phúc Khang",
        review: "Em cảm thấy tâm đắc nhất là khi em được biết rất nhiều về những loại model trong Machine learning và đã phần nào ứng dụng được vào điều em muốn làm",
    },
    {
        avatar: ChauLeQuanAvatar,
        className: CourseIds.mc4ai,
        year: 2021,
        name: "Châu Lệ Quân",
        review: "Dear Thầy Hưng, I’m so happy to inform you about my application result. After waiting for so long, I finally win a 100% scholarship to study AI at FPT university. I believe that your recommendation letter has played a critical role in helping me get such a great result. I won’t take it for granted and will try my best not to disappoint your expectation. Words just can’t explain how I feel grateful right now. Thank you so much 💝",
    },
    {
        avatar: NguyenPhamNhatQuangAvatar,
        className: CourseIds.ml4ai,
        year: 2021,
        name: "Nguyễn Phạm Nhật Quang",
        review: "Sau hai năm học chương trình AI4HighSchool và cơ hội thực tập và làm việc tại CoTAI, em cảm thấy mình đã học được rất nhiều thứ. Những kiến thức và kinh nghiệm em tích lũy được đã giúp em ứng tuyển thành công vào Student Team phát triển xe tự hành & vào DeepNeuron DL team tại trường Monash. Em xin dành lời cảm ơn đặc biệt đến anh Huy đã hướng dẫn em trong suốt kì thực tập hè tại CoTAI Startup Studio",
    },
];
