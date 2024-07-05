export const dataCoursePython4AI = {
    id: "Python4AI",
    title: "Python AI",

    register_url: "https://go.cot.ai/091023",

    thumbnail: "/images/logo/CoTAI-Ver0-320.png",

    who_should_join: [
        "Học sinh THPT & sinh viên các ngành muốn làm lập trình viên AI hoặc xin học bổng du học & nghiên cứu (được viết thư giới thiệu.)",
        'Người đi làm muốn phát triển nghề nghiệp chuyên môn với công nghệ AI, lập trình viên muốn nhanh chóng "nâng cấp" năng lực lập trình AI.',
    ],
    skills: ["python", "opencv", "pillow", "streamlit"],
    archives: [
        {
            title: "Kỹ năng lập trình cơ bản",
            description:
                "Các kiểu dữ liệu cơ bản, các cấu trúc lệnh, hàm phổ biến nhất của Python. Các kỹ thuật lập trình cơ bản thường được sử dụng trong AI",
        },
        {
            title: "Trải nghiệm các thư viện xử lý AI",
            description: "OpenCV, Pillow, DeepFace",
        },
        {
            title: "Tạo một ứng dụng web hoàn chỉnh",
            description:
                "Áp dụng kiến thức lập trình Python vào việc xây dựng ứng dụng web thông qua Streamlit, một framework phổ biến cho việc xây dựng ứng dụng web với Python.",
        },
    ],
    description:
        "Khoá học cung cấp các kiến thức lập trình cơ bản nhất như biến, kiểu dữ liệu, toán tử, câu lệnh điều kiện, vòng lặp, các thuật toán, kỹ thuật lập trình ... giúp cho học viên có thể giải quyết những bài toán từ cơ bản như Tính chu vi, diện tích hình tròn, Giải phương trình bậc nhất, bậc hai ... đến nâng cao như Xử lý ảnh số (thay đổi màu sắc, vẽ hình, cắt vùng ảnh ...), hoặc xây dựng một website có ứng dụng công nghệ AI & có link chạy thực trên Internet",
    experience_requirement: [
        "Các kỹ năng sử dụng máy tính cơ bản: truy cập file, folder, cách cài đặt phần mềm, sử dụng internet",
        "Kiến thức toán cơ bản: hình học cơ bản, giải phương trình bậc 1,2",
    ],
    components: [],

    curriculum: [
        {
            title: "Nhập môn lập trình Python",
            hidden: false,
            classes_countable: true,
            details: {
                hidden: false,

                content: `- Các lệnh: print, input
- Các kiểu dữ liệu: Integer, Float, String, None
- Các toán tử: +,-,*,/,//,%
- Ép kiểu`,
            },
        },
        {
            title: "Câu lệnh điều kiện",
            hidden: false,
            classes_countable: true,
            details: {
                hidden: false,

                content: `- Kiểu dữ liệu Boolean
- Biểu thức điều kiện
- Các cú pháp câu lệnh điều kiện`,
            },
        },
        {
            title: "Các kiểu dữ liệu List, Tuple, Dictionary",
            hidden: false,
            classes_countable: true,
            details: {
                hidden: false,

                content: `- List: khởi tạo, các hàm thông dụng, truy cập phần tử, slicing
- Dictionary: khởi tạo, truy cập phần tử
- Tuple: khởi tạo, các hàm thông dụng, truy cập phần tử, slicing`,
            },
        },
        {
            title: "Vòng lặp",
            hidden: false,
            classes_countable: true,
            details: {
                hidden: false,

                content: `- Vòng lặp for
    - Lặp qua giá trị
    - Lặp qua vị trí
    - Kỹ thuật List Comprehension
- Vòng lặp while
- Vòng lặp lồng nhau`,
            },
        },
        {
            title: "Hàm & Các kỹ thuật lập trình cơ bản",
            hidden: false,
            classes_countable: true,
            details: {
                hidden: false,

                content: `- Cú pháp tạo & gọi hàm
- Các kỹ thuật lập trình: Cờ hiệu, Lính canh, Cộng dồn`,
            },
        },
        {
            title: "Kiểm tra giữa kỳ",
            hidden: false,
            classes_countable: true,
        },
        {
            title: "Kiểu dữ liệu String & Class",
            hidden: false,
            classes_countable: true,
            details: {
                hidden: false,

                content: `- String: các hàm thông dụng, slicing, mã ASCII
- Class: định nghĩa class, tạo & sử dụng object`,
            },
        },
        {
            title: "Xử lý file & 2D List",
            hidden: false,
            classes_countable: true,
            details: {
                hidden: false,

                content: `- Mở & đọc file text
- Xử lý ma trận: input, truy cập dòng, cột, phần tử
- Khái niệm ảnh grayscale`,
            },
        },
        {
            title: "Xử lý ảnh với Pillow & OpenCV",
            hidden: false,
            classes_countable: true,
            details: {
                hidden: false,

                content: `- Khái niệm ảnh màu
- Pillow: đọc, ghi file ảnh & các thao tác xử lý cơ bản
- OpenCV:
    - Đọc, ghi file ảnh
    - Chuyển đổi hệ màu, zoom ảnh, cắt ảnh
    - Vẽ hình lên ảnh
    - Truy cập pixel`,
            },
        },
        {
            title: "Lập trình web với Streamlit",
            hidden: false,
            classes_countable: true,
            details: {
                hidden: false,

                content: `- Hiển thị văn bản, trạng thái
- Hiển thị các nút bấm, ô chọn, ...
- Sắp xếp trang web (layout)
- Deploy trang web lên internet`,
            },
        },
        {
            title: "Thi cuối kỳ",
            hidden: false,
            classes_countable: true,
        },
    ],
};
