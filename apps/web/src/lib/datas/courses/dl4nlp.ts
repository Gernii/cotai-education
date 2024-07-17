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

    description: `Khóa học được thiết kế theo tiêu chí "dễ học, dễ đọc, dễ hiểu", cung cấp cho học viên cái nhìn toàn diện về lịch sử phát triển của "mạng nơ-ron tích chập - Convolutional Neural Network".
- Lịch sử ra đời và sự phát triển của các mô hình học sâu (Deep Learning).
- Các thủ thuật để tạo ra mô hình học sâu nhưng có thể vận hành tốt trên điện thoại thông minh và mạch nhúng.
- Các mô hình học sâu về Thị Giác Máy Tính - Computer Vision mới và tốt nhất hiện nay.
- Áp dụng các mô hình vào thực tiễn thông qua 2 bài toán chính của ngành thị giác máy tính: Phân đoạn vật thể (Object Segmentation) và Phát hiện vật thể (Object Detection).
- Phát triển tư duy logic và kỹ năng giải quyết vấn đề thông qua các bài tập thực hành và Dự án cuối khóa (Capstone Project).
 
Ngoài ra Dự án cuối khóa là cơ hội để học viên áp dụng các kiến thức & kỹ năng đã học vào xây dựng & triển khai một dự án AI ứng dụng thực tế.`,
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
