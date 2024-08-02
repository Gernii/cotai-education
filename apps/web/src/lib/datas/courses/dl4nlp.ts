import type { CourseProps } from "./types";
import { CourseIds } from "./constants";
import { ProgramIds } from "../programs/constants";
import {
    PUBLIC_COURSE_PRICE_DL4NLP,
    PUBLIC_COURSE_REGISTER_URL_DL4NLP,
    PUBLIC_HOSTNAME,
} from "$env/static/public";
import { routerPath } from "$lib/utils/constants";
import { SkillTypes } from "$lib/features/skill-icons/constant";

export const dataCourseDL4NLP = (): CourseProps => {
    const id = CourseIds.dl4nlp;
    return {
        id,
        title: "Deep Learning for Natural Language Processing",
        shortTitle: "DL4NLP",
        price: Number.parseInt(PUBLIC_COURSE_PRICE_DL4NLP),
        studyTypes: ["online", "selfPaced"],

        programId: ProgramIds.public_training,

        registerUrl: PUBLIC_COURSE_REGISTER_URL_DL4NLP,

        learningOutcomes: [
            "Hiểu được các khái niệm quan trọng về các kiến trúc `Transformers` phổ biến trong ngành NLP và ưu nhược điểm của chúng",
            "Học được cách sử dụng các thư viện tốt nhất và phổ biến nhất khi lập trình xây dựng mô hình AI xử lý ngôn ngữ",
            "Biết cách xây dựng và biến đổi các mô hình có sẵn để giải quyết bài toán riêng của mình",
            "Biết cách chuyển đổi (convert) mô hình để tăng tốc độ phục vụ khi làm sản phẩm",
            "Đủ năng lực đọc hiểu các bài báo nghiên cứu chuyên ngành để tự cập nhật kiến thức chuyên môn",
        ],

        experienceRequirement: [
            "Sử dụng thành thạo ngôn ngữ Python",
            "Sử dụng tốt các thư viện liên quan đến xử lý ma trận và xử lý dữ liệu như numpy và pandas",
            "Các phương pháp trích xuất đặc trưng và biểu diễn dữ liệu để máy tính hiểu",
            "Hiểu biết cơ bản về Đại Số Tuyến Tính (Linear Algebra) và Toán Giải Tích (Calculus)",
        ],
        whoShouldJoin: [
            `đã biết *xây dựng* & *huấn luyện* các mô hình AI nền tảng (tương đương khoá [ML4AI](${PUBLIC_HOSTNAME}${routerPath.courseId(CourseIds.ml4ai)}) của CoTAI)`,
            "muốn đào sâu về chuyên ngành Xử lý ngôn ngữ tự nhiên (NLP) cho AI",
        ],
        skills: [
            SkillTypes.python,
            SkillTypes.pytorch,
            SkillTypes.numpy,
            SkillTypes.pandas,
            SkillTypes.scikitLearn,
            SkillTypes.keras,
            SkillTypes.matplotlib,
            SkillTypes.plotly,
            SkillTypes.pillow,
            SkillTypes.albumentations,
            SkillTypes.torchmetrics,
            SkillTypes.transformers,
            SkillTypes.paddlepaddle,
            SkillTypes.mmcv,
            SkillTypes.onnx,
            SkillTypes.openvino,
            SkillTypes.github,
            SkillTypes.markdown,
            SkillTypes.latex,
        ],
        archives: [
            {
                title: "Hiểu biết về các kiến trúc CNN bhổ biến",
                description:
                    "Hiểu được các khái niệm quan trọng về các kiến trúc CNN phổ biến và ưu nhược điểm của chúng",
            },
            {
                title: "Xây dựng và tùy biến mô hình để giải quyết bài toán riêng",
                description:
                    "Biết cách xây dựng và biến đổi các mô hình có sẵn để giải quyết bài toán riêng của mình",
            },
            {
                title: "Sử dụng hiệu quả các thư viện và phổ biến về lập trình AI",
                description:
                    "Học được cách sử dụng các thư viện tốt nhất và phổ biến nhất khi lập trình xây dựng mô hình AI",
            },
        ],

        description: `*Học sâu* (Deep Learning) là nhánh quan trọng nhất của ngành Học máy, chuyên phát triển các mạng neuron nhân tạo học siêu hiệu quả với dữ liệu lớn. DL4NLP (Deep Learning for Natural Language Proessing) là khoá học *chuyên* về các mô hình Học sâu nền tảng cho ngành *Xử lý ngôn ngữ tự nhiên* để xử lý văn bản (như phân loại, tóm tắt, trích xuất, truy vấn, hỏi đáp, hội thoại...), giúp AI "trò chuyện" như người (ví dụ ChatGPT.)`,
        descriptionMore: `Khoá học gồm 3 chủ đề chính: 1-\`Transformers\`, 2-\`Language Models\`, 3-\`NLP Tasks\`, được chia thành nhiều buổi, mỗi buổi bao gồm lý thuyết cô đọng, bài lab thực hành, bài lab về nhà, review & quiz. Dự án cuối khóa là cơ hội để học viên áp dụng các kiến thức & kỹ năng đã học vào xây dựng & triển khai một dự án AI ứng dụng thực tế.`,
        components: [],

        curriculum: [
            {
                title: "S1. Ôn nhanh PyTorch & các kỹ thuật huấn luyện nâng cao",
            },
            {
                title: "S2. Ôn nhanh biểu diễn câu từ (RNN / LSTM / GRU & Vector embedding)",
            },
            {
                title: "S3. Từ mạng neuron hồi qui `RNNs` qua `Transformers`",
            },
            {
                title: "S4. Hệ sinh thái `HuggingFace`",
            },
            {
                title: "S5. Mô hình ngôn ngữ huấn luyện sẵn: `Encoder` (`BERT`), `Decoder` (`GPT`)",
            },
            {
                title: "S6. Mô hình ngôn ngữ huấn luyện sẵn: `Encoder-Decoder` (`BART`, `T5`)",
            },
            {
                title: "S7. Từ mô hình huấn luyện sẵn đến ứng dụng đầu cuối",
            },
            {
                title: "S8. Các kỹ thuật nâng cao để tối ưu hiệu suất mô hình ngôn ngữ",
            },
            {
                title: "S9. Mô hình ngôn ngữ trong dự án thực tế",
            },
            {
                title: "S10. Báo cáo dự án",
            },
        ],
    };
};
