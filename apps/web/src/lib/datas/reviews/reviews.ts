import { CourseIds } from "../courses/constants";
import type { ReviewProps } from "./types";
import ChauLeQuanAvatar from "$lib/assets/images/reviews/ChauLeQuan.png?imagetools";
import TranBaoTienAvatar from "$lib/assets/images/reviews/TranBaoTien.jpg?imagetools";

export const dataReviews: ReviewProps[] = [
    {
        avatar: ChauLeQuanAvatar,
        className: CourseIds.mc4ai,
        year: 2021,
        name: "Châu Lệ Quân",
        review: "Dear Thầy Hưng, I’m so happy to inform you about my application result. After waiting for so long, I finally win a 100% scholarship to study AI at FPT university. I believe that your recommendation letter has played a critical role in helping me get such a great result. I won’t take it for granted and will try my best not to disappoint your expectation. Words just can’t explain how I feel grateful right now. Thank you so much 💝",
    },
    {
        avatar: TranBaoTienAvatar,
        className: CourseIds.mc4ai,
        year: 2021,
        name: "Trần Bảo Tiên",
        review: "Đây là lần đầu em học một ngôn ngữ máy tính nào đó một cách nghiêm túc. Em thật sự rất vui vì em học tốt và theo kịp bài. Thầy giảng cũng rất dễ hiểu và em Quốc Bảo (TA) cũng giúp em rất nhiều khi em thắc mắc.",
    },
    {
        avatar: TranBaoTienAvatar,
        className: CourseIds.mc4ai,
        year: 2021,
        name: "Trần Bảo Tiên",
        review: "Đây là lần đầu em học một ngôn ngữ máy tính nào đó một cách nghiêm túc. Em thật sự rất vui vì em học tốt và theo kịp bài. Thầy giảng cũng rất dễ hiểu và em Quốc Bảo (TA) cũng giúp em rất nhiều khi em thắc mắc.",
    },
    {
        avatar: TranBaoTienAvatar,
        className: CourseIds.mc4ai,
        year: 2021,
        name: "Trần Bảo Tiên",
        review: "Đây là lần đầu em học một ngôn ngữ máy tính nào đó một cách nghiêm túc. Em thật sự rất vui vì em học tốt và theo kịp bài. Thầy giảng cũng rất dễ hiểu và em Quốc Bảo (TA) cũng giúp em rất nhiều khi em thắc mắc.",
    },
];
