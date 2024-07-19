import type { CourseProps } from "./types";
import { CourseIds } from "./constants";
import { ProgramIds } from "../programs/constants";
import {
    PUBLIC_COURSE_PRICE_DL4CV,
    PUBLIC_COURSE_REGISTER_URL_DL4CV,
    PUBLIC_HOSTNAME,
} from "$env/static/public";
import { routerPath } from "$lib/utils/constants";

export const dataCourseDL4CV = (): CourseProps => {
    const id = CourseIds.dl4cv;
    return {
        id,
        title: "Deep Learning for Computer Vision",
        shortTitle: "DL4CV",
        price: Number.parseInt(PUBLIC_COURSE_PRICE_DL4CV),
        studyTypes: ["online", "selfPaced"],

        programId: ProgramIds.public_training,

        registerUrl: PUBLIC_COURSE_REGISTER_URL_DL4CV,

        learningOutcomes: [
            "Biết cách xây dựng và biến đổi các mô hình có sẵn để giải quyết bài toán riêng của mình",
            "Hiểu được các khái niệm quan trọng về các kiến trúc DCNN phổ biến và ưu nhược điểm của chúng",
            "Học được cách sử dụng các thư viện tốt nhất và phổ biến nhất khi lập trình xây dựng mô hình AI",
        ],

        experienceRequirement: [
            "Sử dụng thành thạo ngôn ngữ Python",
            "Sử dụng tốt các thư viện liên quan đến xử lý ma trận và xử lý dữ liệu như numpy và pandas",
            "Các phương pháp trích xuất đặc trưng và biểu diễn dữ liệu để máy tính hiểu",
            "Hiểu biết cơ bản về Đại Số Tuyến Tính (Linear Algebra) và Toán Giải Tích (Calculus)",
        ],
        whoShouldJoin: [
            `đã biết *xây dựng* & *huấn luyện* các mô hình AI nền tảng (tương đương khoá [ML4AI](${PUBLIC_HOSTNAME}${routerPath.courseId(CourseIds.ml4ai)}) của CoTAI)`,
            "muốn đào sâu về chuyên ngành Thị giác máy tính (Computer Vision) cho AI",
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

        description: `*Học sâu* (Deep Learning) là nhánh quan trọng nhất của ngành Học máy, chuyên phát triển các mạng nơ-ron nhân tạo học siêu hiệu quả với dữ liệu lớn. DL4CV (Deep Learning for Computer Vision) là khoá học *chuyên* về các mô hình Học sâu nền tảng cho ngành *Thị giác máy tính* để phát hiện, phân loại và khoanh vùng các vật thể qua cameras, giúp AI "nhìn thấy" được (ví dụ xe tự lái & robots tự hành.)
    
    Khoá học gồm 3 chủ đề chính: 1-\`DCNNs\`, 2-\`Vision Transformers\`, 3-\`Object Detection & Segmentation\`, được chia thành nhiều buổi, mỗi buổi bao gồm lý thuyết cô đọng, bài lab thực hành, bài lab về nhà, review & quiz. Dự án cuối khóa là cơ hội để học viên áp dụng các kiến thức & kỹ năng đã học vào xây dựng & triển khai một dự án AI ứng dụng thực tế. Khoá học dành cho các học viên đã hoàn thành hoặc có kiến thức tương đương với khóa ML4AI của CoTAI.`,
        components: [],

        curriculum: [
            {
                title: "S1. Review: PyTorch & Advanced Training Techniques",
                details: {
                    content: `Ôn tập lại về cách sử dụng thư viện PyTorch cũng như cách tạo và huấn luyện mô hình AI.`,
                },
            },
            {
                title: "S2. The history of DCNNs: How to go deeper?",
                details: {
                    content: `Học về các kiến trúc DCNN tiêu biểu: **AlexNet**, **VGG**, **Inception**, **ResNet**. Từ đó hiểu được các thành phần chính của một mô hình và trả lời được câu hỏi "Làm thế nào để tạo ra Deep Neural Network?"`,
                },
            },
            {
                title: "S3. The history of DCNNs: From Depth to Efficiency",
                details: {
                    content: `Học về các kiến trúc DCNN tiêu biểu: **MobileNet series**, **EfficientNet series**, **Squeeze-and-Excitation Module**, **GhostNet**, **RepVGG**. Từ đó trả lời được câu hỏi "Cần cải tiến những thành phần nào để mô hình DCNN vừa nhẹ nhưng vẫn chính xác?"`,
                },
            },
            {
                title: "S4. The history of DCNNs: From Low-resolution to High-resolution & Object Segmentation",
                details: {
                    content: `"Các mô hình DCNN được huấn luyện cho bài toán Classification, cần cải tiến những thành phần nào để tạo ra mô hình cho bài toán Object Segmentation?" Học về các kiến trúc Decoder tiêu biểu **FCN**, **UNet**, **FPN**, **PSPNet**, **PAN-Net**, **DeepLab** cùng các hàm Loss và Metric mới cho Segmentation.`,
                },
            },
            {
                title: "S5. Object Detection",
                details: {
                    content: `Bài toán Object Detection có thể được gói gọn trong các khái niệm sau: **Grids**, **Anchor Boxes**, **Muti-scales Predictions** và **"Multi-stages detection"**. Ngoài ra học viên cũng được học về chuỗi mô hình Object Detection nổi tiếng nhất **YOLO** (You Only ~~Live~~ Look Once).`,
                },
            },
            {
                title: "S6. Visual Attention & Transformers",
                details: {
                    content: `Học về **Cơ chế Tập Trung Quan Sát** (Attention Mechanism) để ép mô hình nhìn vào các vùng quan trọng trong ảnh để có thể đưa ra dự đoán tốt hơn.
    
    Sau đó, ta tạm gác Computer Vision và CNN lại để tìm hiểu về kiến trúc **hot và phổ biến nhất mọi thời đại** (tất nhiên là cho đến hiện tại) của ngành Deep Learning là **Transformer**.`,
                },
            },
            {
                title: "S7. Transformer in Computer Vision & ViT (Vision Transformer)",
                details: {
                    content: `Thuật toán Convolution không phải là hoàn hảo. Ở buổi này, học viên sẽ được học về các nhược điểm của kiến trúc CNN, từ đó thấy được "ta có thể thay thế Convolution bằng Transformer".`,
                },
            },
            {
                title: "S8. Transformer in Object Detection & Segmentation",
                details: {
                    content: `"Chỉ dùng ViT thôi là chưa đủ, ta vẫn cần Convolution". Ở buổi này, học viên sẽ được học về các dạng kiến trúc kết hợp cả Convolution và Transformer để giải quyết 2 bài toán phổ biến **Object Segmentation** và **Object Detection**`,
                },
            },
            {
                title: "S9. Modern ConvNets",
                details: {
                    content: `"Kiến trúc ViT rất hay, liệu ta có thể thay đổi thuật toán Convolution để bắt chước ViT?". Sau khoảng thời gian bị thất sủng, các kiến trúc dùng Convolution đã quay trở lại. Ở buổi học này, học viên sẽ được học về 2 kiến trúc tiêu biểu đánh dấu sự "comeback mạnh mẽ" của thuật toán Convolution đó là **ConvNext** và **RepLKNet**.`,
                },
            },
            {
                title: "S10. Báo cáo dự án",
                details: {
                    content: "Học viên trình bày về dự án cuối khóa của mình",
                },
            },
        ],
    };
};
