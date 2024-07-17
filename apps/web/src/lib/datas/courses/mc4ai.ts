import type { CourseProps } from "./types";
import { CourseIds } from "./constants";
import { ProgramIds } from "../programs/constants";
import { PUBLIC_COURSE_PRICE_MC4AI, PUBLIC_COURSE_REGISTER_URL_MC4AI } from "$env/static/public";

export const dataCourseMC4AI = (): CourseProps => ({
    id: CourseIds.mc4ai,
    title: "Math Coding for AI",
    shortTitle: "MC4AI",
    price: Number.parseInt(PUBLIC_COURSE_PRICE_MC4AI),
    studyTypes: ["online", "selfPaced"],
    nextCourseId: CourseIds.ml4ai,

    programId: ProgramIds.public_training,

    registerUrl: PUBLIC_COURSE_REGISTER_URL_MC4AI,

    experienceRequirement: ["Đã hoàn thành khoá PythonAI"],
    whoShouldJoin: [
        "Học sinh THPT & sinh viên các ngành muốn làm lập trình viên AI hoặc xin học bổng du học & nghiên cứu (được viết thư giới thiệu.)",
        'Người đi làm muốn phát triển nghề nghiệp chuyên môn với công nghệ AI, lập trình viên muốn nhanh chóng "nâng cấp" năng lực lập trình AI.',
    ],
    skills: ["python", "numpy", "matplotlib", "plotly", "pandas", "scikit-learn", "keras"],
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

    description:
        "Khoá học cung cấp các kiến thức Toán nền tảng cho AI như đạo hàm, gradient, đại số tuyến tính, xác suất thống kê, các kỹ năng sử dụng các thư viện AI phổ biến nhất như NumPy, Matplotlib, Plotly, Scikit-learn, Keras ... cùng các thuật toán AI cơ bản nhất như Gradient Descent, kNN, kMeans, Linear Regression ... giúp cho học viên có thể xây dựng một ứng dụng AI hoàn chỉnh, giải quyết được những bài toán thực tế như Phân tích dữ liệu, Dự báo doanh thu, Phân đoạn ảnh, Nhận dạng gương mặt, chữ viết ...",
    components: [],

    curriculum: [
        {
            title: "S1. Đại số tuyến tính & Numpy cơ bản",
            details: {
                content: `Các khái niệm cơ bản của Đại số tuyến tính: Vector, Ma trận

Cơ bản về thư viện Numpy:
- Khởi tạo nd array
- Truy cập phần tử, hàng, cột, slicing
- Shape, reshape, transpose, dot product, element-wise operators`,
            },
        },
        {
            title: "S2. Các hàm thông dụng của Numpy & Matplotlib",
            details: {
                content: `Các hàm Numpy: sum, mean, min, max, argmin, argmax; concatenate, where, filter

Matplotlib: Hàm scatter & plot`,
            },
        },
        {
            title: "S3. Pandas & Phân tích dữ liệu",
            details: {
                content: `Pandas: Tạo & xử lý Dataframe: truy cập hàng, cột, filter; Các hàm map & apply

Các kỹ thuật phân tích dữ liệu: Đọc, làm sạch, tổng hợp dữ liệu & vẽ đồ thị`,
            },
        },
        {
            title: "S4. Thuật toán Gradient Descent & Plotly",
            details: {
                content: `Khái niệm đạo hàm & Gradient

Thuật toán Gradient Descent (nguyên lý, chi tiết cài đặt)

Thư viện Plotly:
- Module express: hàm scatter_3d
- Module graph_objects: hàm Scatter3d & Surface`,
            },
        },
        {
            title: "S5. Xác suất & Phân phối xác suất",
            details: {
                content: `Khái niệm xác suất & ứng dụng trong AI

Khái niệm phân phối xác suất, các phân phối thông dụng & cách giả lập bằng Numpy: Phân phối Bernoulli, Categorical, phân phối đều & phân phối chuẩn`,
            },
        },
        {
            title: "S6. kiểm tra giữa kỳ & đăng ký dự án",
        },
        {
            title: "S7. Thuật toán kNN & kMeans",
            details: {
                content: `Thuật toán kNN:
- Nguyên lý & chi tiết cài đặt với Numpy
- Áp dụng kNN bằng thư viện Scikit-learn

Thuật toán kMeans:
- Nguyên lý & chi tiết cài đặt với Numpy
- Áp dụng kMeans bằng thư viện Scikit-learn`,
            },
        },
        {
            title: "S8. Mô hình Linear Regression",
            details: {
                content: `Giới thiệu bài toán Regression

Mô hình Linear Regression

MSE Loss

Áp dụng mô hình Linear Regression bằng các thư viện Scikit-learn & Keras`,
            },
        },
        {
            title: "S9. Mô hình Logistic Regression",
            details: {
                content: `Hàm Sigmoid & bài toán Binary Classification

Mô hình Logistic Regression & Binary Cross-Entropy Loss

Áp dụng mô hình Logistic Regression bằng các thư viện Scikit-learn & Keras`,
            },
        },
        {
            title: "S10. Mô hình Softmax Regression",
            details: {
                content: `Hàm Softmax & Cross-Entropy

Giới thiệu bài toán Multi-class Classification & mô hình Softmax Regression

Categorical Cross-Entropy Loss

Áp dụng mô hình Softmax Regression bằng thư viện Keras`,
            },
        },
        {
            title: "S11: Thuật toán Gradient Descent cho các mô hình tuyến tính",
            details: {
                content: `Lý thuyết toán của mô hình Linear Regression

Chi tiết cài đặt thuật toán GD

Kỹ thuật Normalize

Thuật toán SGD & Mini-batch GD`,
            },
        },
        {
            title: "S12. Thi cuối kỳ",
        },
        {
            title: "S13. Báo cáo dự án",
        },
    ],
});
