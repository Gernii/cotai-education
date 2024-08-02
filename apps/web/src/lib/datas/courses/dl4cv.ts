import type { CourseProps } from "./types";
import { CourseIds } from "./constants";
import { ProgramIds } from "../programs/constants";
import {
    PUBLIC_COURSE_PRICE_DL4CV,
    PUBLIC_COURSE_REGISTER_URL_DL4CV,
    PUBLIC_HOSTNAME,
} from "$env/static/public";
import { routerPath } from "$lib/utils/constants";
import { SkillTypes } from "$lib/features/skill-icons/constant";

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
            "Hiểu được các khái niệm quan trọng về các kiến trúc học sâu xử lý thị giác phổ biến (DCNNs & ViT) và ưu nhược điểm của chúng",
            "Học được cách sử dụng các thư viện tốt nhất và phổ biến nhất khi lập trình xây dựng mô hình AI",
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
            "muốn đào sâu về chuyên ngành Thị giác máy tính (Computer Vision) cho AI",
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
            SkillTypes.streamlit,
            SkillTypes.pillow,
            SkillTypes.albumentations,
            SkillTypes.torchmetrics,
            SkillTypes.surprise,
            SkillTypes.interpret,
            SkillTypes.xgboost,
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

        description: `*Học sâu* (Deep Learning) là nhánh quan trọng nhất của ngành Học máy, chuyên phát triển các mạng nơ-ron nhân tạo học siêu hiệu quả với dữ liệu lớn. DL4CV (Deep Learning for Computer Vision) là khoá học *chuyên* về các mô hình Học sâu nền tảng cho ngành *Thị giác máy tính* để phát hiện, phân loại và khoanh vùng các vật thể qua cameras, giúp AI "nhìn thấy" được (ví dụ xe tự lái & robots tự hành.)`,
        descriptionMore: `Khoá học gồm 3 chủ đề chính: 1-\`DCNNs\`, 2-\`Vision Transformers\`, 3-\`Object Detection & Segmentation\`, được chia thành nhiều buổi, mỗi buổi bao gồm lý thuyết cô đọng, bài lab thực hành, bài lab về nhà, review & quiz. Dự án cuối khóa là cơ hội để học viên áp dụng các kiến thức & kỹ năng đã học vào xây dựng & triển khai một dự án AI ứng dụng thực tế.`,
        components: [],

        curriculum: [
            {
                title: "S1. Ôn nhanh PyTorch & các kỹ thuật huấn luyện nâng cao",
                details: {
                    content: `Ôn tập lại về cách sử dụng thư viện PyTorch cũng như cách tạo và huấn luyện mô hình AI.`,
                },
            },
            {
                title: "S2. Lược sử mạng tích chập DCNNs: Làm sao tăng số lớp?",
                details: {
                    content: `Học về các kiến trúc DCNNs tiêu biểu: **AlexNet**, **VGG**, **Inception**, **ResNet**. Từ đó hiểu được các thành phần chính của một mô hình và trả lời được câu hỏi "Làm thế nào để tạo ra mạng neuron học sâu?"`,
                },
            },
            {
                title: "S3. Lược sử mạng tích chập DCNNs: Cải thiện hiệu suất",
                details: {
                    content: `Học về các kiến trúc DCNN tiêu biểu qua chuỗi các mô hình **MobileNet** & **EfficientNet**, **Squeeze-and-Excitation Module**, **GhostNet**. Từ đó trả lời được câu hỏi "Cần cải tiến những thành phần nào để mô hình DCNN vừa nhẹ nhưng vẫn chính xác?"`,
                },
            },
            {
                title: "S4. Lược sử mạng tích chập DCNNs: Độ phân giải và khoanh vùng vật trong ảnh",
                details: {
                    content: `"Các mô hình DCNN được huấn luyện cho bài toán nhận dạng & phân loại *ảnh*, cần cải tiến những thành phần nào để tạo ra mô hình cho bài toán *khoanh vùng vật* trong ảnh \`Object Segmentation\`?" Học về các kiến trúc bộ giải mã \`Decoder\` tiêu biểu **FCN**, **UNet**, **FPN**, **PSPNet**, **PAN-Net**, **DeepLab** cùng các hàm lỗi và chuẩn đánh giá mới cho bài toán khoanh vùng vật trong ảnh.`,
                },
            },
            {
                title: "S5. Phát hiện vật trong ảnh `object detection`",
                details: {
                    content: `Bài toán \`object detection\` có thể được gói gọn trong các kỹ thuật sau: **Grids**, **Anchor Boxes**, **Muti-scales Predictions** và **"Multi-stages detection"**. Ngoài ra học viên cũng được học về chuỗi mô hình \`object detection\` nổi tiếng nhất **YOLO** (You Only ~~Live~~ Look Once).`,
                },
            },
            {
                title: "S6. Cơ chế tập trung `visual attention` & `Transformers`",
                details: {
                    content: `Học về *cơ chế tập trung quan sát* để ép mô hình "nhìn" vào các vùng quan trọng trong ảnh để có thể đưa ra dự đoán tốt hơn.
Sau đó, ta tạm gác DCNN lại để tìm hiểu về kiến trúc **"hot" và phổ biến nhất** (tất nhiên là cho đến thời điểm hiện tại) của ngành học sâu \`Deep Learning\`, đó là **Transformer**.`,
                },
            },
            {
                title: "S7. `Transformer` trong bài toán Thị giác máy tính & `ViT` (`Vision Transformer`)",
                details: {
                    content: `Thuật toán tích chập không phải là hoàn hảo. Ở buổi này, học viên sẽ được học về các nhược điểm của kiến trúc CNN, từ đó thấy được *ta có thể thay thế CNN bằng Transformer*.`,
                },
            },
            {
                title: "S8. `Transformer` cho bài toán phát hiện và khoanh vùng vật trong ảnh",
                details: {
                    content: `Chỉ dùng \`ViT\` thôi là chưa đủ, ta vẫn cần các lõi tích chập \`convolution\`. Ở buổi này, học viên sẽ được học về các dạng kiến trúc kết hợp cả \`convolution\` và \`Transformer\` để giải quyết 2 bài toán nền tảng & phổ biến của ngành Thị giác máy tính là phát hiện và khoanh vùng vật trong ảnh.`,
                },
            },
            {
                title: "S9. Mạng `ConvNets` hiện đại",
                details: {
                    content: `Kiến trúc \`ViT\` rất hay, liệu ta có thể thay đổi thuật toán \`convolution\` để bắt chước \`ViT\`? Sau khoảng thời gian bị thất sủng, các kiến trúc dùng \`convolution\` đã quay trở lại. Ở buổi học này, học viên sẽ được học về 2 kiến trúc tiêu biểu đánh dấu sự "trở lại mạnh mẽ" của thuật toán \`convolution\` đó là **ConvNext** và **RepLKNet**.`,
                },
            },
            {
                title: "S10. Báo cáo dự án",
            },
        ],
    };
};
