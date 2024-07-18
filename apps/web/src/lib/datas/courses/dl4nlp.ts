import type { CourseProps } from "./types";
import { CourseIds } from "./constants";
import { ProgramIds } from "../programs/constants";
import { PUBLIC_COURSE_PRICE_DL4NLP, PUBLIC_COURSE_REGISTER_URL_DL4NLP } from "$env/static/public";

export const dataCourseDL4NLP = (): CourseProps => ({
    id: CourseIds.dl4nlp,
    title: "Deep Learning for Natural Language Processing",
    shortTitle: "DL4NLP",
    price: Number.parseInt(PUBLIC_COURSE_PRICE_DL4NLP),
    studyTypes: ["online", "selfPaced"],

    programId: ProgramIds.public_training,

    registerUrl: PUBLIC_COURSE_REGISTER_URL_DL4NLP,

    learningOutcomes: [
        "Biết cách xây dựng và biến đổi các mô hình có sẵn để giải quyết bài toán riêng của mình",
        "Học được cách sử dụng các thư viện tốt nhất và phổ biến nhất khi lập trình xây dựng mô hình AI",
        "Hiểu được các khái niệm quan trọng về các kiến trúc Transformers phổ biến và ưu nhược điểm của chúng",
    ],

    experienceRequirement: [
        "Sử dụng thành thạo ngôn ngữ Python",
        "Sử dụng tốt các thư viện liên quan đến xử lý ma trận và xử lý dữ liệu như numpy và pandas",
        "Các phương pháp trích xuất đặc trưng và biểu diễn dữ liệu để máy tính hiểu",
        "Hiểu biết cơ bản về Đại Số Tuyến Tính (Linear Algebra) và Toán Giải Tích (Calculus)",
    ],
    whoShouldJoin: [
        "Các bạn học sinh / sinh viên từ cấp Trung Học Phổ Thông trở lên muốn tìm hiểu và đắm mình vào lĩnh vực AI",
        'Các bạn lập trình viên muốn "nâng cấp" bản thân để bắt kịp với xu hướng phát triển cực nhanh của lĩnh vực AI',
    ],
    skills: [
        "python",
        "math",
        "numpy",
        "scikit-learn",
        "pytorch",
        "torchmetrics",
        "timm",
        "torchseg",
        "mmdetection",
        "transformers",
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

    description: `Học sâu (Deep Learning) là nhánh quan trọng nhất của ngành Học máy, chuyên phát triển các mạng nơ-ron nhân tạo học siêu hiệu quả với dữ liệu lớn. DL4NLP (Deep Learning for Natural Language Proessing) là khoá học chuyên về các mô hình Học sâu nền tảng cho ngành *Xử lý ngôn ngữ tự nhiên* để xử lý văn bản (như text classification, summarization, extraction/retrieval, Q&A, etc.), giúp AI "nói chuyện" như người (ví dụ ChatGPT.)

Khoá học gồm 3 chủ đề chính: 1-\`Transformers\`, 2-\`Language Models\`, 3-\`NLP Tasks\`, được chia thành nhiều buổi, mỗi buổi bao gồm lý thuyết cô đọng, bài lab thực hành, bài lab về nhà, review & quiz. Dự án cuối khóa là cơ hội để học viên áp dụng các kiến thức & kỹ năng đã học vào xây dựng & triển khai một dự án AI ứng dụng thực tế. Khoá học dành cho các học viên đã hoàn thành hoặc có kiến thức tương đương với khóa ML4AI của CoTAI.
`,
    components: [],

    curriculum: [
        {
            title: "S1. Review*: PyTorch & Advanced Training Techniques",
        },
        {
            title: "S2. Review: Word / Sentence Representation (RNN / LSTM / GRU & Embedding)",
        },
        {
            title: "S3. From RNNs to Transformers",
        },
        {
            title: "S4. HuggingFace Eco-system",
        },
        {
            title: "S5. Pretrained Language Models: Encoder (BERT), Decoder (GPT)",
        },
        {
            title: "S6 Pretrained Language Models: Encoder-Decoder (BART, T5)",
        },
        {
            title: "S7. From Pretrained Models to Downstream Tasks",
        },
        {
            title: "S8. Advanced Techniques to Optimize Language Models",
        },
        {
            title: "S9. Language Models in Production",
        },
        {
            title: "S10. Capstone Project Presentation",
        },
    ],
});
