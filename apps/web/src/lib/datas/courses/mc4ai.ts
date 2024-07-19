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
            'Sẵn sàng để "đắm mình vào Học máy (Machine Learning)"',
            'Trải nghiệm quá trình làm "Đồ án môn học" capstone project',
            "Sử dụng thành thạo các thư viện Phân tích dữ liệu phổ biến",
            "Hiểu sâu và có thể tự lập trình được các thuật toán AI phổ biến",
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
        descriptionMore: `👉 Bạn luôn mang một nỗi sợ môn Toán? Hãy an tâm! Trung tâm tài năng CoTAI đã miệt mài biên soạn để khoá học "Lập trình nền tảng Toán cho AI" được trực quan dễ hiểu, ngay cả với học sinh THPT. 💡 Bí quyết rất đơn giản: để các bạn "vọc" thật nhiều với dữ liệu thực tế! Từ hình ảnh, văn bản, đến số liệu kinh doanh.
- 🔥 Xử lý, tính toán, biến đổi, hiển thị các mảng dữ liệu thực 👉 hiểu ngay về ma trận và đại số tuyến tính cho AI.
- 🔥 Mô phỏng & sinh mẫu, đưa ra dự đoán qua các mô hình học máy cơ bản 👉 hiểu ngay về xác suất & “niềm tin”, về các mô hình dự đoán của AI.
- 🔥 Thiết kế ứng dụng mới có tích hợp các mô hình AI với đặc trưng huấn luyện sẵn (pre-trained models) 👉 thoả sức thực hành phát triển các dự án phân tích dữ liệu (Data Analysis)`,
        components: [],

        curriculum: [
            {
                title: "S1. Đại số tuyến tính & Numpy cơ bản",
                details: {
                    content: `- Các khái niệm cơ bản của Đại số tuyến tính: Vector, Ma trận
    - Cơ bản về thư viện Numpy:
      - Khởi tạo nd array
      - Truy cập phần tử, hàng, cột, slicing
      - Shape, reshape, transpose, dot product, element-wise operators`,
                },
            },
            {
                title: "S2. Các hàm thông dụng của Numpy & Matplotlib",
                details: {
                    content: `- Các hàm Numpy: sum, mean, min, max, argmin, argmax; concatenate, where, filter
    - Matplotlib: Hàm scatter & plot`,
                },
            },
            {
                title: "S3. Pandas & Phân tích dữ liệu",
                details: {
                    content: `- Pandas: Tạo & xử lý Dataframe: truy cập hàng, cột, filter; Các hàm map & apply
    - Các kỹ thuật phân tích dữ liệu: Đọc, làm sạch, tổng hợp dữ liệu & vẽ đồ thị`,
                },
            },
            {
                title: "S4. Thuật toán Gradient Descent & Plotly",
                details: {
                    content: `- Khái niệm đạo hàm & Gradient
    - Thuật toán Gradient Descent (nguyên lý, chi tiết cài đặt)
    - Thư viện Plotly:
      - Module express: hàm scatter_3d
      - Module graph_objects: hàm Scatter3d & Surface`,
                },
            },
            {
                title: "S5. Xác suất & Phân phối xác suất",
                details: {
                    content: `- Khái niệm xác suất & ứng dụng trong AI
    - Khái niệm phân phối xác suất, các phân phối thông dụng & cách giả lập bằng Numpy: Phân phối Bernoulli, Categorical, phân phối đều & phân phối chuẩn`,
                },
            },
            {
                title: "S6. kiểm tra giữa kỳ & đăng ký dự án",
            },
            {
                title: "S7. Thuật toán kNN & kMeans",
                details: {
                    content: `- Thuật toán kNN:
      - Nguyên lý & chi tiết cài đặt với Numpy
      - Áp dụng kNN bằng thư viện Scikit-learn
    - Thuật toán kMeans:
      - Nguyên lý & chi tiết cài đặt với Numpy
      - Áp dụng kMeans bằng thư viện Scikit-learn`,
                },
            },
            {
                title: "S8. Mô hình Linear Regression",
                details: {
                    content: `- Giới thiệu bài toán Regression
    - Mô hình Linear Regression
    - MSE Loss
    - Áp dụng mô hình Linear Regression bằng các thư viện Scikit-learn & Keras`,
                },
            },
            {
                title: "S9. Mô hình Logistic Regression",
                details: {
                    content: `- Hàm Sigmoid & bài toán Binary Classification
    - Mô hình Logistic Regression & Binary Cross-Entropy Loss
    - Áp dụng mô hình Logistic Regression bằng các thư viện Scikit-learn & Keras`,
                },
            },
            {
                title: "S10. Mô hình Softmax Regression",
                details: {
                    content: `- Hàm Softmax & Cross-Entropy
    - Giới thiệu bài toán Multi-class Classification & mô hình Softmax Regression
    - Categorical Cross-Entropy Loss
    - Áp dụng mô hình Softmax Regression bằng thư viện Keras`,
                },
            },
            {
                title: "S11: Thuật toán Gradient Descent cho các mô hình tuyến tính",
                details: {
                    content: `- Lý thuyết toán của mô hình Linear Regression
    - Chi tiết cài đặt thuật toán GD
    - Kỹ thuật Normalize
    - Thuật toán SGD & Mini-batch GD`,
                },
            },
            {
                title: "S12. Thi cuối kỳ",
            },
            {
                title: "S13. Báo cáo dự án",
            },
        ],
    };
};
