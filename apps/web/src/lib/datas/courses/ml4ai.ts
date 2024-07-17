import type { CourseProps } from "./types";
import { CourseIds } from "./constants";
import { ProgramIds } from "../programs/constants";
import { PUBLIC_COURSE_PRICE_ML4AI, PUBLIC_COURSE_REGISTER_URL_ML4AI } from "$env/static/public";

export const dataCourseML4AI = (): CourseProps => ({
    id: CourseIds.ml4ai,
    title: "Machine Learning for AI",
    shortTitle: "ML4AI",
    price: Number.parseInt(PUBLIC_COURSE_PRICE_ML4AI),
    studyTypes: ["online", "selfPaced"],
    nextCourseId: CourseIds.dl4ai,

    programId: ProgramIds.public_training,

    registerUrl: PUBLIC_COURSE_REGISTER_URL_ML4AI,

    experienceRequirement: [
        "Sử dụng tốt Python",
        "Có kiến thức về Đại Số Tuyến Tính (Linear Algebra) và Toán Giải Tích (Calculus)",
        "Biết sử dụng thư viện Python: numpy và pandas",
    ],
    whoShouldJoin: [
        "Các bạn học sinh / sinh viên từ cấp Trung Học Phổ Thông trở lên muốn tìm hiểu và đắm mình vào lĩnh vực AI",
        'Các bạn lập trình viên muốn "nâng cấp" bản thân để bắt kịp với xu hướng phát triển cực nhanh của lĩnh vực AI',
    ],
    skills: [],
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
    description: `Khóa học được thiết kế theo tiêu chí "dễ học, dễ đọc, dễ hiểu", cung cấp cho học viên những kiến thức cơ bản về trí tuệ nhân tạo (AI) và học máy (Machine Learning). Khóa học giúp học viên:
- Hiểu rõ cách máy tính xử lý và phân tích dữ liệu.
- Nắm vững các khái niệm và thuật toán cơ bản trong học máy.
- Áp dụng các mô hình học máy vào thực tiễn, từ dự đoán xu hướng đến phân loại hình ảnh.
- Phát triển tư duy logic và kỹ năng giải quyết vấn đề thông qua các bài tập thực hành.

Với nội dung phong phú và phương pháp giảng dạy thân thiện, khóa học ML4AI không chỉ là bước khởi đầu tuyệt vời cho các bạn trẻ muốn khám phá thế giới AI, mà còn là công cụ hữu ích để phụ huynh định hướng và khuyến khích con em mình theo đuổi lĩnh vực công nghệ đầy triển vọng này.`,
    components: [],

    curriculum: [
        {
            title: "S1. Representation",
            details: {
                content: `Học cách biểu diễn kiến thức, khái niệm trong cuộc sống bằng những con số (vector) để đưa vào máy tính.

Bài tập ứng dụng: 
- Hệ thống "Nhận diện khuôn mặt"
- Game: tìm từ có cùng ngữ nghĩa trong tiếng Anh.
- Mô hình AI tạo sinh ảnh khuôn mặt mới.`,
            },
        },
        {
            title: "S2. Linear Predictor",
            details: {
                content: `Học về nguyên lý để tạo ra các mô hình AI cơ bản nhất - **mô hình tuyến tính** - để dự báo / phân loại.

Bài tập ứng dụng: 
- Mô hình AI nhận diện và khoanh vùng chó, mèo.
- Mô hình AI nhận dạng chữ số viết tay.`,
            },
        },
        {
            title: "S3. Multi-Layer Perceptron (MLP)",
            details: {
                content: `Học về mạng neuron nhân tạo: một loại mô hình mô phỏng cách não người xử lý thông tin và là nền tảng của các mô hình học sâu (Deep Learning).

Bài tập ứng dụng: 
- Case Study: Phân tích lỗi sai của mô hình khi dự đoán.
- Thông qua **mô hình AI tái tạo chữ viết tay**, từ đó tìm hiểu và trả lời câu hỏi "Liệu mô hình AI có thật sự hiểu được hình ảnh?"`,
            },
        },
        {
            title: "S4. Training Loss & Evaluation Metrics → Optimization",
            details: {
                content: `Hiểu cách máy tính và con người đánh giá chất lượng của các mô hình AI, từ đó hiểu được khái niệm "học - learning" trong Machine Learning.

Bài tập ứng dụng:
- Mô hình AI đánh giá bình luận tiếng Anh của khách hàng.`,
            },
        },
        {
            title: "S5. Kiểm tra giữa kỳ",
            details: {
                content: `Ôn tập và đánh giá kiến thức học được.

Bài tập ứng dụng:
- Mô hình AI dự báo nhân viên nghỉ việc.
- Case Study: Phân tích dữ liệu hình ảnh bằng AI.`,
            },
        },
        {
            title: "S6. Convolutional Neural Networks (CNNs)",
            details: {
                content: `Học về mạng neuron tích chập, một loại mô hình đặc biệt hiệu quả trong việc xử lý hình ảnh.

Bài tập ứng dụng:
- Mô hình AI phát hiện vết nứt trên bê tông.
- Mô hình AI phân loại lá cây bị bệnh.
- Mô hình AI nhận diện bàn tay con người → phát hiện thủ ngữ.`,
            },
        },
        {
            title: "S7. Recurrent Neural Networks (RNNs)",
            details: {
                content: `Học về mạng neuron hồi quy, mô hình hiệu quả trong việc xử lý các dữ liệu tuần tự như chuỗi văn bản, âm thanh.

Bài tập ứng dụng:
- Mô hình AI đánh giá bình luận tiếng Việt.`,
            },
        },
        {
            title: "S8. Recommender Systems",
            details: {
                content: `Học về hệ thống gợi ý, mô hình giúp đề xuất sản phẩm, dịch vụ dựa trên sở thích và hành vi của người dùng.

Bài tập ứng dụng:
- Mô hình AI gợi ý phim / sách cho người dùng.`,
            },
        },
        {
            title: "S9. Decision Trees",
            details: {
                content: `Học về mô hình "Cây quyết định" để đưa ra dự báo và cách diễn giải "luồng quyết định" của mô hình

Bài tập ứng dụng:
- Mô hình AI phát hiện lý do nhân viên nghỉ việc.
- Mô hình AI tối ưu chi phí quảng cáo.`,
            },
        },
        {
            title: "S10. Markov Decision Process (MDP) Planning",
            details: {
                content: `Học về quy trình Markov, giúp AI có khả năng lập kế hoạch.

Bài tập ứng dụng:
- AI tự chơi game đơn giản.`,
            },
        },
        {
            title: "S11. Reinforcement Q-Learning",
            details: {
                content: `Học về thuật toán Q-Learning, một phương pháp giúp máy tính tự học và đưa ra quyết định dựa vào dữ liệu.

Bài tập ứng dụng:
- AI chơi game FlappyBird.
- AI chơi game Taxi đón khách.`,
            },
        },
        {
            title: "S12. Kiểm tra cuối kỳ",
            details: {
                content: "Ôn tập và đánh giá kiến thức toàn khóa học",
            },
        },
        {
            title: "S13. Báo cáo dự án",
            details: {
                content: "Học viên trình bày về dự án cuối khóa của mình",
            },
        },
    ],
});
