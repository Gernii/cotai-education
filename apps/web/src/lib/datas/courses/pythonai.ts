import type { CourseProps } from "./types";
import CurriculumPython1 from "$lib/assets/images/course/python/1.jpg?imagetools";
import CurriculumPython2 from "$lib/assets/images/course/python/2.jpg?imagetools";
import CurriculumPython3 from "$lib/assets/images/course/python/3.jpg?imagetools";
import CurriculumPython4 from "$lib/assets/images/course/python/4.jpg?imagetools";
import CurriculumPython5 from "$lib/assets/images/course/python/5.jpg?imagetools";
import CurriculumPython7 from "$lib/assets/images/course/python/7.jpg?imagetools";
import CurriculumPython8 from "$lib/assets/images/course/python/8.jpg?imagetools";
import CurriculumPython9 from "$lib/assets/images/course/python/9.jpg?imagetools";
import CurriculumPython10Video from "$lib/assets/images/course/python/10.mp4";
import CurriculumExam from "$lib/assets/images/course/exam.jpg?imagetools";
import { CourseIds } from "./constants";
import { ProgramIds } from "../programs/constants";
import {
    PUBLIC_COURSE_PRICE_PYTHON_AI,
    PUBLIC_COURSE_REGISTER_URL_PYTHON_AI,
} from "$env/static/public";
import { SkillTypes } from "$lib/features/skill-icons/constant";

export const dataCoursePythonAI = (): CourseProps => ({
    id: CourseIds.pythonai,
    title: "Python Coding with AI",
    shortTitle: "PythonAI",
    price: Number.parseInt(PUBLIC_COURSE_PRICE_PYTHON_AI),
    studyTypes: ["online", "selfPaced"],
    registerUrl: PUBLIC_COURSE_REGISTER_URL_PYTHON_AI,
    nextCourseId: CourseIds.mc4ai,
    programId: ProgramIds.public_training,

    whoShouldJoin: ["muốn *bắt đầu học lập trình* để được đắm mình vào lĩnh vực AI"],
    learningOutcomes: [
        "Kỹ năng lập trình cơ bản",
        "Làm quen với AI qua việc xây dựng ứng dụng",
        "Hiện thực hóa ý tưởng bằng Website",
        "Biết cách cài đặt và sử dụng các thư viện hỗ trợ trong Python",
    ],

    skills: [
        SkillTypes.python,
        SkillTypes.streamlit,
        SkillTypes.pillow,
        SkillTypes.opencv,
        SkillTypes.github,
        SkillTypes.markdown,
        SkillTypes.latex,
    ],
    archives: [
        {
            title: "Kỹ năng lập trình cơ bản",
            description:
                "Các kiểu dữ liệu cơ bản, các cấu trúc lệnh, hàm phổ biến nhất của Python. Các kỹ thuật lập trình cơ bản thường được sử dụng trong AI",
        },
        {
            title: "Trải nghiệm các thư viện xử lý AI",
            description: "OpenCV, Pillow, DeepFace",
        },
        {
            title: "Tạo một ứng dụng web hoàn chỉnh",
            description:
                "Áp dụng kiến thức lập trình Python vào việc xây dựng ứng dụng web thông qua Streamlit, một framework phổ biến cho việc xây dựng ứng dụng web với Python.",
        },
    ],
    description: `Khóa học PythonAI giúp các bạn học sinh, sinh viên & người đi làm ở *mọi ngành* có thể nhanh chóng hiểu lập trình Python *qua tương tác với AI*.`,
    descriptionMore: `👉 Bạn chưa biết lập trình? Đừng lo, khóa học sẽ cung cấp kiến thức nền tảng về Python, cần thiết cho việc thực hành các giải thuật và triển khai các ứng dụng AI ở các lớp kế tiếp trong lộ trình.

👉 Bạn cảm thấy lập trình thật khó & học lâu? Khoá học PythonAI được CoTAI dày công thiết kế chính là để giúp học viên xoá bỏ nỗi lo này!

- Thông qua tương tác với các ứng dụng AI mới nhất

- Trực quan hoá tối đa (visualizations) qua giao diện web

- Kết hợp hài hoà các câu lệnh cơ bản & bậc cao (API calls)

- Chỉ tập trung vào những nội dung cốt lõi để lập trình AI`,
    experienceRequirement: ["abs"],
    components: [],

    curriculum: [
        {
            title: "S1. Biểu diễn dữ liệu và tính toán",

            images: [CurriculumPython1],
            details: {
                content: `Tìm hiểu về khái niệm đầu tiên cũng là quan trọng nhất trong lập trình: sử dụng \`Biến\` - Variables để lưu trữ dữ liệu. 
- Biểu diễn dữ liệu bằng \`Biến\` (Variable)
- Các kiểu dữ liệu phổ biến: \`Số\` và \`Chuỗi ký tự\` (String)
- Các phép toán số học trên kiểu dữ liệu số`,
            },
        },
        {
            title: `S2. Biểu diễn "điều kiện Đúng / Sai"`,
            images: [CurriculumPython2],

            details: {
                content: `Làm thế nào để điều khiển máy tính ra quyết định dựa trên các điều kiện khác nhau? 

- Kiểu dữ liệu nhị phân \`Đúng / Sai\` (Boolean)
- Các phép toán so sánh
- Khối lệnh \`kiểm tra điều kiện\` (if - elseif - else)`,
            },
        },
        {
            title: `S3. Lưu trữ và quản lý nhiều dữ liệu với \`Cấu trúc dữ liệu\``,
            images: [CurriculumPython3],

            details: {
                content: `Làm thế nào để lưu trữ danh sách tên của tất cả học sinh trong lớp chỉ bằng 1 biến? Làm thế nào để thêm / xóa / sửa học sinh mới trong danh sách trên?
- 3 cấu trúc dữ liệu cơ bản List, Tuple, Dictionary
- Thao tác CRUD (Create - Read - Update - Delete) khi sử dụng "Cấu trúc dữ liệu"`,
            },
        },
        {
            title: `S4. Sử dụng \`Vòng lặp\``,
            images: [CurriculumPython4],

            details: {
                content: `Làm thế nào để bắt máy tính thực hiện 1 công việc lặp đi lặp lại nhiều lần?
- Định nghĩa vòng lặp để thực hiện 1 công việc nhiều lần
- Sự kết hợp giữa \`Vòng lặp\` và \`Cấu trúc dữ liệu\`
- Kỹ thuật List Comprehension, "vũ khí lợi hại" của Python`,
            },
        },
        {
            title: `S5. \`Hàm\` (function) và các kỹ thuật lập trình cơ bản`,
            images: [CurriculumPython5],

            details: {
                content: `Làm thế nào để lập trình như một lập trình viên thực thụ?
- Kỹ thuật "gom nhóm" để tái sử dụng và làm đẹp code thông qua \`Hàm\` (function)
- Sử dụng \`Vòng lặp\` trong \`Hàm\`
- Các kỹ thuật lập trình cơ bản: Đặt cờ hiệu, Đặt lính canh, Cộng dồn
- Kỹ thuật "Bác bảo vệ gác cổng" (Security Guard / Early Return) khi viết \`Hàm\``,
            },
        },
        {
            title: "S6. Kiểm tra giữa khóa",
            images: [CurriculumExam],
        },
        {
            title: `S7. Sử dụng \`Class\``,
            images: [CurriculumPython7],

            details: {
                content: `Tự định nghĩa kiểu dữ liệu của riêng bạn.
- Khái niệm \`lớp Class\` và \`Object\` trong lập trình
- Sử dụng \`Class\` để "trừu tượng hóa" quy trình xử lý`,
            },
        },

        {
            title: "S8. Thao tác với tập tin và Mảng 2 chiều (2D List)",
            images: [CurriculumPython8],

            details: {
                content: `- Lưu trữ dữ liệu từ biến vào các tập tin trong máy tính
- Nạp dữ liệu từ các tập tin vào lại chương trình
- Mảng 2 chiều và khái niệm \`ma trận\` trong toán
- Lập trình các phép toán ma trận trên mảng 2 chiều
- Khái niệm "ảnh xám" (grayscale image)`,
            },
        },
        {
            title: "S9. Xử lý ảnh",
            images: [CurriculumPython9],

            details: {
                content: `- Khái niệm "ảnh màu" (RGB color image)
- Thao tác với dữ liệu ảnh bằng thư viện: \`Pillow\` và \`OpenCV\``,
            },
        },
        {
            title: "S10. Lập trình Website với `Streamlit`",
            videos: [CurriculumPython10Video],

            details: {
                content: `- Hiển thị văn bản trên Website
- Hiển thị các thành phần giao diện (UI Components) như nút bấm, ô chọn...
- Thay đổi bố cục (layout) của Website
- Triển khai Website lên Internet`,
            },
        },
        {
            title: "S11. Kiểm tra cuối khóa",
            images: [CurriculumExam],
        },
    ],
});
