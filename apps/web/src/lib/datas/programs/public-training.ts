import { CourseIds } from "../courses/healpers";
import type { ProgramProps } from "./types";

export const dataProgramPublicTraining = (): ProgramProps => ({
    id: "public-training",
    title: "Public training",
    hidden: false,
    courses: [CourseIds.python4ai, CourseIds.mc4ai, CourseIds.ml4ai, CourseIds.dl4ai],
    coursesHighlighted: [CourseIds.python4ai, CourseIds.mc4ai, CourseIds.ml4ai, CourseIds.dl4ai],
    coursesRoadmap: [CourseIds.python4ai, CourseIds.mc4ai, CourseIds.ml4ai, CourseIds.dl4ai],
    targets: ["student", "developer"],
    description: `- Kiến thức AI từ nền tảng đến công nghệ mới nhất, được khái quát và hệ thống trực quan dễ hiểu.
- Kỹ năng lập trình, huấn luyện, tinh chỉnh, triển khai AI. Thực hành qua nhiều bài tập và ứng dụng AI đa dạng thú vị.
- Tự làm các ứng dụng AI yêu thích dưới sự hướng dẫn của kỹ sư CoTAI và cơ hội tham gia dự án, phát triển sản phẩm & nghiên cứu chuyên sâu.
- Khoá học ngắn hạn 12 buổi × 120 phút bài giảng (kèm 60–120 phút tự thực hành) mỗi buổi. Học viên được kiểm tra đầu vào để đăng ký lớp phù hợp.`,
    components: [],
});
