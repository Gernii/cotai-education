import type { CourseProps } from "./types";
import { CourseIds } from "./constants";
import { ProgramIds } from "../programs/constants";
import {
    PUBLIC_COURSE_PRICE_ML4AI,
    PUBLIC_COURSE_REGISTER_URL_ML4AI,
    PUBLIC_HOSTNAME,
} from "$env/static/public";
import CurriculumML4AI1 from "$lib/assets/images/course/ml4ai/1.jpg?imagetools";
import CurriculumML4AI2 from "$lib/assets/images/course/ml4ai/2.jpg?imagetools";
import CurriculumML4AI3 from "$lib/assets/images/course/ml4ai/3.jpg?imagetools";
import CurriculumML4AI4 from "$lib/assets/images/course/ml4ai/4.jpg?imagetools";
import CurriculumML4AI6 from "$lib/assets/images/course/ml4ai/6.jpg?imagetools";
import CurriculumML4AI7 from "$lib/assets/images/course/ml4ai/7.jpg?imagetools";
import CurriculumML4AI8 from "$lib/assets/images/course/ml4ai/8.jpg?imagetools";
import CurriculumML4AI9 from "$lib/assets/images/course/ml4ai/9.jpg?imagetools";
import CurriculumML4AI10 from "$lib/assets/images/course/ml4ai/10.jpg?imagetools";
import CurriculumML4AI11 from "$lib/assets/images/course/ml4ai/11.jpg?imagetools";
import CurriculumExam from "$lib/assets/images/course/exam.jpg?imagetools";
import CurriculumProjectReport from "$lib/assets/images/course/project-report.jpg?imagetools";
import { routerPath } from "$lib/utils/constants";
import { SkillTypes } from "$lib/features/skill-icons/constant";

export const dataCourseML4AI = (): CourseProps => {
    const id = CourseIds.ml4ai;
    return {
        id,
        title: "Machine Learning for AI",
        shortTitle: "ML4AI",
        price: Number.parseInt(PUBLIC_COURSE_PRICE_ML4AI),
        studyTypes: ["online", "selfPaced"],
        nextCourseId: CourseIds.dl4ai,
        hideCurriculumImages: true,

        programId: ProgramIds.public_training,

        registerUrl: PUBLIC_COURSE_REGISTER_URL_ML4AI,

        learningOutcomes: [
            "Nắm vững quy trình & kỹ năng xử lý dữ liệu",
            "Biết cách khai thác các tài nguyên nguồn mở để sáng tạo các ứng dụng AI",
            "Thành thạo xây dựng, huấn luyện, đánh giá & cải thiện mô hình AI với PyTorch",
        ],

        experienceRequirement: [
            "Sử dụng tốt Python",
            "Có kiến thức về Đại Số Tuyến Tính (Linear Algebra) và Toán Giải Tích (Calculus)",
            "Biết sử dụng thư viện Python: numpy và pandas",
        ],
        whoShouldJoin: [
            `đã biết *lập trình* Toán ma trận (tương đương khoá [MC4AI](${PUBLIC_HOSTNAME}${routerPath.courseId(CourseIds.mc4ai)}) của CoTAI)`,
            "muốn xây dựng và huấn luyện AI thành thạo như một kỹ sư",
        ],
        skills: [
            SkillTypes.python,
            SkillTypes.numpy,
            SkillTypes.pandas,
            SkillTypes.scikitLearn,
            SkillTypes.keras,
            SkillTypes.matplotlib,
            SkillTypes.plotly,
            SkillTypes.streamlit,
            SkillTypes.pillow,
            SkillTypes.opencv,
            SkillTypes.github,
            SkillTypes.markdown,
            SkillTypes.latex,
        ],
        archives: [
            {
                title: "Hiểu biết về dữ liệu",
                description:
                    "Học cách thu thập, xử lý và phân tích dữ liệu, giúp họ hiểu rõ nguồn gốc và ý nghĩa của dữ liệu trong các bài toán AI",
            },
            {
                title: "Sử dụng thư viện PyTorch để xây dựng và huấn luyện mô hình AI",
                description:
                    "Biết cách xây dựng, huấn luyện và tinh chỉnh các mô hình học máy (Machine Learning) và mạng neuron (Neural Networks) để giải quyết các vấn đề thực tiễn",
            },
            {
                title: "Ứng dụng thực tế",
                description:
                    "Áp dụng các kỹ thuật và mô hình AI vào các lĩnh vực thực tế như nhận diện hình ảnh, xử lý ngôn ngữ tự nhiên, hệ thống gợi ý và dự đoán",
            },
            {
                title: "Đánh giá và cải thiện mô hình",
                description:
                    "Các kiểu dữ liệu cơ bản, các cấu trúc lệnh, hàm phổ biến nhất của Python. Các kỹ thuật lập trình cơ bản thường được sử dụng trong AI",
            },
            {
                title: "Phát triển tư duy logic và kỹ năng giải quyết vấn đề",
                description:
                    "Các bài tập thực hành và dự án cuối khóa giúp học viên rèn luyện tư duy logic và khả năng giải quyết các vấn đề phức tạp",
            },
            {
                title: "Phát triễn kỹ năng lập trình",
                description:
                    "Phát triển kỹ năng lập trình, đặc biệt là với ngôn ngữ Python, một trong những ngôn ngữ phổ biến nhất trong lĩnh vực AI và học máy",
            },
        ],
        description: `*Học máy* (Machine Learning) là bộ công cụ để ta xây dựng các "hàm trí tuệ", tạo nên "kiến thức & kỹ năng" cho AI từ dữ liệu. Đây cũng chính là mục tiêu của khóa học ML4AI: giúp học viên nắm vững các nguyên lý cốt lõi & mô hình nền tảng của ngành Học máy cho hầu hết các bài toán AI. Khoá học dành cho các học viên đã hoàn thành khóa MC4AI của CoTAI hoặc có kiến thức & kỹ năng *lập trình Toán cho AI* tương đương (cần làm bài kiểm tra đầu vào).`,
        descriptionMore: `🔥 Phương pháp đào tạo tăng tốc *nhanh thành tài* Accelerated Mastery của CoTAI giúp cô đọng cả một ngành học xuống thành một khoá ngắn hạn *hiệu quả cao*, với 6 chủ đề chính:
- 1️⃣ Representations (feature extraction): trích xuất đặc trưng biểu diễn thành toạ độ nhúng. 
- 2️⃣ Evaluation (metrics & losses): các chuẩn đánh giá mô hình và hàm lỗi.
- 3️⃣ Search (optimize/train/learn): huấn luyện mô hình, tối ưu tham số.
- 4️⃣ Linear & nonlinear predictors (regression, classification, clustering): Các mô hình dự đoán tuyến tính & phi tuyến cho các bài toán cơ sở như dự báo giá trị, phân loại, gom nhóm.
- 5️⃣ CNNs & RNNs: Các mạng tích chập & mạng hồi quy biểu diễn dữ liệu chuỗi trong không gian & thời gian.
- 6️⃣ Decision-making: Các bài toán suy luận, lên kế hoạch & ra quyết định bằng hệ khuyến nghị (RecSys), mô hình rừng cây quyết định (Decision Tree & Forest), mô hình Markov (MDP) và học tăng cường (Reinforcement Learning)`,

        components: [],

        curriculum: [
            {
                title: "S1. Representation",
                images: [CurriculumML4AI1],

                details: {
                    content: `- Học cách biểu diễn kiến thức, khái niệm trong cuộc sống bằng những con số (vector) để đưa vào máy tính.
    - Bài tập ứng dụng: 
      - Hệ thống "Nhận diện khuôn mặt"
      - Game: tìm từ có cùng ngữ nghĩa trong tiếng Anh.
      - Mô hình AI tạo sinh ảnh khuôn mặt mới.`,
                },
            },
            {
                title: "S2. Linear Predictor",
                images: [CurriculumML4AI2],

                details: {
                    content: `- Học về nguyên lý để tạo ra các mô hình AI cơ bản nhất - **mô hình tuyến tính** - để dự báo / phân loại.
    - Bài tập ứng dụng: 
      - Mô hình AI nhận diện và khoanh vùng chó, mèo.
      - Mô hình AI nhận dạng chữ số viết tay.`,
                },
            },
            {
                title: "S3. Multi-Layer Perceptron (MLP)",
                images: [CurriculumML4AI3],
                details: {
                    content: `- Học về mạng neuron nhân tạo: một loại mô hình mô phỏng cách não người xử lý thông tin và là nền tảng của các mô hình học sâu (Deep Learning).
    - Bài tập ứng dụng: 
      - Case Study: Phân tích lỗi sai của mô hình khi dự đoán.
      - Thông qua **mô hình AI tái tạo chữ viết tay**, từ đó tìm hiểu và trả lời câu hỏi "Liệu mô hình AI có thật sự hiểu được hình ảnh?"`,
                },
            },
            {
                title: "S4. Training Loss & Evaluation Metrics → Optimization",
                images: [CurriculumML4AI4],

                details: {
                    content: `- Hiểu cách máy tính và con người đánh giá chất lượng của các mô hình AI, từ đó hiểu được khái niệm "học - learning" trong Machine Learning.
    - Bài tập ứng dụng:
      - Mô hình AI đánh giá bình luận tiếng Anh của khách hàng.`,
                },
            },
            {
                title: "S5. Kiểm tra giữa kỳ",
                images: [CurriculumExam],

                details: {
                    content: `- Ôn tập và đánh giá kiến thức học được.
    - Bài tập ứng dụng:
      - Mô hình AI dự báo nhân viên nghỉ việc.
      - Case Study: Phân tích dữ liệu hình ảnh bằng AI.`,
                },
            },
            {
                title: "S6. Convolutional Neural Networks (CNNs)",
                images: [CurriculumML4AI6],

                details: {
                    content: `- Học về mạng neuron tích chập, một loại mô hình đặc biệt hiệu quả trong việc xử lý hình ảnh.
    - Bài tập ứng dụng:
      - Mô hình AI phát hiện vết nứt trên bê tông.
      - Mô hình AI phân loại lá cây bị bệnh.
      - Mô hình AI nhận diện bàn tay con người → phát hiện thủ ngữ.`,
                },
            },
            {
                title: "S7. Recurrent Neural Networks (RNNs)",
                images: [CurriculumML4AI7],

                details: {
                    content: `- Học về mạng neuron hồi quy, mô hình hiệu quả trong việc xử lý các dữ liệu tuần tự như chuỗi văn bản, âm thanh.
    - Bài tập ứng dụng:
      - Mô hình AI đánh giá bình luận tiếng Việt.`,
                },
            },
            {
                title: "S8. Recommender Systems",
                images: [CurriculumML4AI8],

                details: {
                    content: `- Học về hệ thống gợi ý, mô hình giúp đề xuất sản phẩm, dịch vụ dựa trên sở thích và hành vi của người dùng.
    - Bài tập ứng dụng:
      - Mô hình AI gợi ý phim / sách cho người dùng.`,
                },
            },
            {
                title: "S9. Decision Trees",
                images: [CurriculumML4AI9],

                details: {
                    content: `- Học về mô hình "Cây quyết định" để đưa ra dự báo và cách diễn giải "luồng quyết định" của mô hình
    - Bài tập ứng dụng:
      - Mô hình AI phát hiện lý do nhân viên nghỉ việc.
      - Mô hình AI tối ưu chi phí quảng cáo.`,
                },
            },
            {
                title: "S10. Markov Decision Process (MDP) Planning",
                images: [CurriculumML4AI10],

                details: {
                    content: `- Học về quy trình Markov, giúp AI có khả năng lập kế hoạch.
    - Bài tập ứng dụng:
      - AI tự chơi game đơn giản.`,
                },
            },
            {
                title: "S11. Reinforcement Q-Learning",
                images: [CurriculumML4AI11],

                details: {
                    content: `- Học về thuật toán Q-Learning, một phương pháp giúp máy tính tự học và đưa ra quyết định dựa vào dữ liệu.
    - Bài tập ứng dụng:
      - AI chơi game FlappyBird.
      - AI chơi game Taxi đón khách.`,
                },
            },
            {
                title: "S12. Kiểm tra cuối kỳ",
                images: [CurriculumExam],

                details: {
                    content: "Ôn tập và đánh giá kiến thức toàn khóa học",
                },
            },
            {
                title: "S13. Báo cáo dự án",
                images: [CurriculumProjectReport],

                details: {
                    content: "Học viên trình bày về dự án cuối khóa của mình",
                },
            },
        ],
    };
};
