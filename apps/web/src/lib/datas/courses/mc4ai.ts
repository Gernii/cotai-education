import type { CourseProps } from "./types";
import { CourseIds } from "./constants";
import { ProgramIds } from "../programs/constants";
import {
    PUBLIC_COURSE_PRICE_MC4AI,
    PUBLIC_COURSE_REGISTER_URL_MC4AI,
    PUBLIC_HOSTNAME,
} from "$env/static/public";
import { routerPath } from "$lib/utils/constants";
import { SkillTypes } from "$lib/features/skill-icons/constant";

export const dataCourseMC4AI = (): CourseProps => {
    const id = CourseIds.mc4ai;
    return {
        id,
        title: "Math Coding for AI",
        shortTitle: "MC4AI",
        price: Number.parseInt(PUBLIC_COURSE_PRICE_MC4AI),
        studyTypes: ["online", "selfPaced"],
        nextCourseId: CourseIds.ml4ai,

        programId: ProgramIds.public_training,

        registerUrl: PUBLIC_COURSE_REGISTER_URL_MC4AI,

        learningOutcomes: [
            "Trải nghiệm quá trình làm Dự án cuối khóa capstone project",
            "Sử dụng thành thạo các thư viện Phân tích dữ liệu phổ biến",
            "Hiểu sâu và có thể tự lập trình được các mô hình AI cơ bản",
            'Sẵn sàng để "đắm mình vào Học máy" (Machine Learning)',
        ],

        experienceRequirement: [],
        whoShouldJoin: [
            `đã biết lập trình Python cơ bản (tương đương khoá [PythonAI](${PUBLIC_HOSTNAME}${routerPath.courseId(CourseIds.pythonai)}) của CoTAI)`,
            "muốn ôn luyện *Toán ma trận* qua *Phân tích dữ liệu* để được đắm mình vào lĩnh vực AI",
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
                title: "Sử dụng thành thạo các thư viện AI phổ biến",
                description:
                    "NumPy, Pandas, Matplotlib, Scikit-learn, TensorFlow & Keras, Plotly. Các thư viện AI phổ biến nhất, được sử dụng rộng rãi trong các dự án AI hiện nay",
            },
            {
                title: "Hiểu & cài đặt được các thuật toán AI cơ bản",
                description: " Gradient Descent, KNN, KMeans",
            },
            {
                title: "Hiểu & nắm vững các mô hình AI tuyến tính",
                description: "Linear, Losgistic, Softmax Regression",
            },
            {
                title: "Có thể tạo một ứng dụng AI hoàn chỉnh",
                description: "Áp dụng kiến thức lập trình AI vào việc xây dựng ứng dụng AI",
            },
        ],

        description: `Khóa học MC4AI cung cấp *một cách trực quan* các kiến thức **Toán** *cốt lõi* để học viên bắt đầu lập trình dự án AI & *Phân tích dữ liệu* qua các giải thuật và thư viện Python. Khoá học dành cho các học viên đã biết Python cơ bản (cần bài kiểm tra đầu vào) hoặc đã hoàn thành khoá \`PythonAI\` của CoTAI.`,
        descriptionMore: `👉 Bạn luôn mang một nỗi sợ môn Toán? Hãy an tâm! Trung tâm tài năng CoTAI đã miệt mài biên soạn để khoá học "Lập trình nền tảng Toán cho AI" được trực quan dễ hiểu, ngay cả với học sinh THPT. 
        
💡 Bí quyết rất đơn giản: để các bạn "vọc" thật nhiều với dữ liệu thực tế! Từ hình ảnh, âm thanh, văn bản và số liệu.
- Xử lý, tính toán, biến đổi và hiển thị các mảng dữ liệu thực tế 👉 hiểu ngay về ma trận và đại số tuyến tính cho AI.
- Mô phỏng & sinh mẫu, đưa ra dự đoán qua các mô hình học máy cơ bản 👉 hiểu ngay về xác suất & “niềm tin”, về các mô hình dự đoán của AI.
- Thiết kế ứng dụng mới có tích hợp các mô hình AI với đặc trưng huấn luyện sẵn (pre-trained models) 👉 thoả sức thực hành phát triển các dự án phân tích dữ liệu (Data Analysis)`,
        components: [],

        curriculum: [
            {
                title: "S1. Đại số tuyến tính & Numpy cơ bản",
                details: {
                    content: `Đại số tuyến tính là nền tảng tính toán để xây dựng nên các mô hình AI. 
Ở buổi học này, bạn sẽ được làm quen với các phép toán phổ biến nhất trong Đại số tuyến tính thông qua việc sử dụng thư viện \`numpy\` như tính toán song song, phép nhân 2 ma trận, phép đo khoảng cách giữa 2 \`vector\`.`,
                },
            },
            {
                title: "S2. Các hàm thông dụng của Numpy & Matplotlib",
                details: {
                    content: `"A Chart is Worth A Thousand Words". Một đồ thị có thể mô tả thay cho cả ngàn lời nói.
Trong Python ta có thể dễ dàng vẽ đồ thị bằng thư viện \`matplotlib\`. Ngoài ra buổi học này còn cung cấp cho bạn cách sử dụng các hàm phổ biến trong thư viện \`numpy\`.`,
                },
            },
            {
                title: "S3. Dữ liệu dạng bảng `tabular data` & Phân tích dữ liệu",
                details: {
                    content: `Nền tảng của Phân tích dữ liệu đến từ việc quản lý và "hiểu" dữ liệu dạng bảng. 
Ở buổi này, bạn sẽ khám phá cách xử lý và thao tác dữ liệu trong các bảng tính thông qua thư viện \`pandas\`. Qua đó, bạn sẽ được trải nghiệm quá trình phân tích dữ liệu, từ việc lọc, sắp xếp, đến tính toán và tổng hợp thông tin, nhằm rút ra những kết luận quan trọng "insights" từ dữ liệu. Ngoài ra, bạn còn được học cách sử dụng thư viện vẽ đồ thị "xịn xò" hơn, đó là \`plotly\`.`,
                },
            },
            {
                title: "S4. Đạo hàm, `Gradient` & thuật toán `Gradient Descent`",
                details: {
                    content: `Bạn có tin không: hầu hết các mô hình AI thông minh hiện nay đã được huấn luyện dựa trên một khái niệm Toán cơ bản ở bậc THPT! 😲
- Khái niệm đạo hàm & Gradient
- Thuật toán Gradient Descent (nguyên lý, chi tiết cài đặt)`,
                },
            },
            {
                title: "S5. Xác suất & Phân phối xác suất",
                details: {
                    content: `Hôm nay bạn nghĩ khả năng bao nhiêu % sẽ mưa? Làm sao để máy tính mô tả "niềm tin" này?
- Khái niệm xác suất & ứng dụng trong AI
- Khái niệm phân phối xác suất, các phân phối thông dụng & cách giả lập bằng Numpy: Phân phối Bernoulli, Categorical, phân phối đều & phân phối chuẩn`,
                },
            },
            {
                title: "S6. Kiểm tra giữa khóa & đăng ký dự án",
            },
            {
                title: "S7. Thuật toán kNN & kMeans",
                details: {
                    content: `Ở buổi này, bạn sẽ hiểu về ứng dụng của phép đo *khoảng cách* (distance) như là mức độ giống nhau \`similarity\` thông qua 2 thuật toán AI đầu tiên: $k$ điểm gần nhất \`kNN\` ($k$ nearest neighbors) và $k$ điểm trọng tâm \`kMeans\`. Bên cạnh đó, bạn còn được học về cách sử dụng thư viện \`sklearn\` - 1 trong những thư viện phổ biến nhất về "Học máy" \`Machine Learning\`.`,
                },
            },
            {
                title: "S8, S9, S10. Mô hình tuyến tính `linear models`",
                details: {
                    content: `Chỉ cần cung cấp dữ liệu, AI có thể học ra cách dự đoán giá trị (như điểm số, doanh thu, nhiệt độ ngày mai, ...) hoặc phân loại nhãn (bình luận tích cực / tiêu cực, ảnh đầu vào chứa con gì, ...).

Chuỗi 3 bài học Sessions 8, 9, 10 sẽ giúp bạn thành thạo cách tạo ra các mô hình AI đơn giản nhất, đó là mô hình "phẳng, tuyến tính" \`linear models\`. Ngoài ra, bạn còn được học cách sử dụng thư viện \`Keras\` ("deep learning for human", theo như lời giới thiệu của tác giả.):

- S8. Mô hình dự đoán giá trị \`Linear Regression\`
- S9. Mô hình phân loại nhị phân (2 nhãn) \`Logistic (Sigmoid) Regression\`
- S10. Mô hình phân loại nhiều nhãn \`Softmax Regression\``,
                },
            },
            {
                title: "S11. Thuật toán `Gradient Descent` cho các mô hình tuyến tính",
                details: {
                    content: `- Lý thuyết toán của mô hình \`Linear Regression\`
- Chi tiết cài đặt thuật toán \`GD\`
- Kỹ thuật \`Normalize\`
- Thuật toán \`SGD\` & \`Mini-batch GD\``,
                },
            },
            {
                title: "S12. Kiểm tra cuối khóa",
            },
            {
                title: "S13. Báo cáo dự án",
            },
        ],
    };
};
