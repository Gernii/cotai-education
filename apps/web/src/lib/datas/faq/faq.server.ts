import { parseMarkdownToHTML } from "$lib/utils/parse-markdown-to-json.server";
import { FAQShowLocation, type FAQProps } from "./types";

export const dataFAQs = (): FAQProps[] => [
    {
        title: "Làm sao để đăng ký khóa học?",
        show: [FAQShowLocation.course],
        content: parseMarkdownToHTML(
            `Nếu đã xác định khóa học phù hợp, bạn có thể đăng ký lớp trực tiếp tại [form](https://go.cot.ai/091023).

Nếu có chút phân vân và cần được tư vấn khóa học, bạn có thể đăng ký hẹn tư vấn theo link [này](/#register-form).

Nếu bạn đã học trước lập trình hoặc Machine Learning, bạn sẽ được sắp xếp để làm bài (online) *đánh giá năng lực đầu vào* cho khoá học mong muốn.`,
        ),
    },
    {
        title: "Trong các bước đăng ký, đánh giá kiến thức nền sẽ được thực hiện ra sao? Có bắt buộc không?",
        show: [FAQShowLocation.course],
        content: parseMarkdownToHTML(`Kiểm tra đánh giá kiến thức nền được thực hiện khi bạn đăng ký các khóa học từ MathCoding4AI trở lên, nhằm giúp xác nhận sự phù hợp để việc học tập của bạn đạt hiệu quả cao nhất.

Kiểm tra được thực hiện online qua Zoom, gồm câu hỏi viết trên nền tảng Aharium và câu hỏi phỏng vấn.`),
    },
    {
        title: "Học sinh THCS có tham gia khóa học được không?",
        content: parseMarkdownToHTML(
            `Chương trình được thiết kế phù hợp nhất cho học sinh THPT trở lên. Các em học sinh THCS có thể tham khảo [tại đây](https://gem.cot.ai/python) để bắt đầu tự học lập trình Python.`,
        ),
    },
    {
        title: "Nếu không phải làm việc trong lĩnh vực CNTT thì có phù hợp để tham gia chương trình không?",
        content: parseMarkdownToHTML(`Chỉ cần bạn xác định được mục tiêu học tập cụ thể, CoTAI tin là có thể giúp bạn vượt qua các rào cản khi tiếp cận với kiến thức thuộc lĩnh vực mới.

Trong thời đại này, việc học để hiểu và làm chủ công nghệ AI, đặc biệt là khai thác sử dụng các tài nguyên miễn phí & nguồn mở, là *kỹ năng được săn đón hàng đầu* trong hầu hết mọi lĩnh vực.

Thực tế còn cho thấy với năng lực AI kết hợp *chuyên môn riêng* của mình, học viên sẽ có nhiều lợi thế cạnh tranh hơn trong công việc.`),
    },
    {
        title: "Người chưa từng học lập trình có phù hợp để học không?",
        show: [FAQShowLocation.course],
        content: parseMarkdownToHTML(
            `Chương trình được thiết kế cho cả người mới bắt đầu & chưa biết lập trình ("from zero") có thể nhanh chóng "đắm mình vào lập trình qua tương tác với AI". Cụ thể khóa [Python Coding with AI](/courses/pythonai) là hoàn toàn phù hợp với bạn.`,
        ),
    },
    {
        title: "Các hoạt động ngoại khóa dành cho học viên là gì?",
        content: parseMarkdownToHTML(`Học viên có thể đăng ký thực tập ([internships](https://www.facebook.com/cotaivn/posts/pfbid03XLd3D6hWUFe1aS1Xo7PrCCET391rYRUXyymN7czG2hJ6eNPDDnp5JxVVRdxyc7rl)) tại Trung tâm CoTAI, tham gia các [dự án R&D](https://gem.cot.ai/p/QdbsJWs2EagcJ_CCy-i2Q) phát triển sản phẩm AI và cả các cơ hội khởi nghiệp.

Các nhóm nghiên cứu (research/study groups) chuyên sâu nhằm sớm phát hiện và nuôi dưỡng nhân tài AI do Trung tâm CoTAI tổ chức & được hướng dẫn từ xa bởi các chuyên gia (expert researchers) trong mạng lưới của CoTAI như GS. [Truyền Trần](https://www.facebook.com/tranthetruyen) (ĐH [Deakin](https://scholar.google.com/citations?user=zvspVLwAAAAJ)), GS. [Ngô Anh Viên](https://scholar.google.com/citations?user=xk1gsM8AAAAJ) (BCAI), GS. [Lê Viết Đức](https://scholar.google.com/citations?user=Zgwx0zAAAAAJ) (ĐH Twente), GS. [Tân Nguyễn](https://vnexpress.net/bo-hoc-y-khoa-tro-thanh-giao-su-dai-hoc-top-8-the-gioi-4649054.html) (ĐH [SNU](https://scholar.google.com/citations?user=OizOh88AAAAJ)), GS. [Hồ Quốc Tuấn](https://www.facebook.com/tuanqho) (ĐH [Bristol](https://www.bristol.ac.uk/people/person/Quoc%20Tuan-Ho-908ea753-f956-4425-a775-c436f41007d8/)), TS. [Tiệp Lê](https://scholar.google.com/citations?user=3RV_GAwAAAAJ) (Intel), TS. [Thư Nguyễn](https://scholar.google.com/citations?user=roRYYZoAAAAJ) (Meta), TS. [Nhật Võ](https://patents.justia.com/assignee/sensen-networks-group-pty-ltd) (Sensen), [An Lê](https://www.facebook.com/an.thai.le97) ([TU Darmstadt](https://scholar.google.com/citations?user=k0r0tfUAAAAJ))...

Ngoài ra các em học sinh THPT còn được hướng dẫn tham gia các cuộc thi nghiên cứu khoa học, đổi mới sáng tạo và khởi nghiệp (có ứng dụng AI)  cấp quốc gia và quốc tế để có những trải nghiệm vô cùng thú vị, như hội nghị AI đầu ngành [NeurIPS](https://neurips.cc/Conferences/2024/CallforHighSchoolProjects), hội thi [Tin học trẻ Toàn quốc](https://tinhoctre.vn), cuộc thi [ViSEF](https://vi.wikipedia.org/wiki/Cu%E1%BB%99c_thi_khoa_h%E1%BB%8Dc_k%E1%BB%B9_thu%E1%BA%ADt_c%E1%BA%A5p_qu%E1%BB%91c_gia_(Vi%E1%BB%87t_Nam)) & [ISEF](https://en.wikipedia.org/wiki/International_Science_and_Engineering_Fair), cuộc thi mô hình Toán [VIASM Math Modeling VM2C](https://vm2c.viasm.edu.vn/), các cuộc thi [WAICY](https://www.waicy.org), [STEAM Hack](https://sites.google.com/steamforvietnam.org/steamhacks23/) & [AI Challenge](https://aichallenge.hochiminhcity.gov.vn/), các trại hè Toán & khoa học [PiMA](https://www.facebook.com/pima.vn) & [MaSSP](https://www.facebook.com/masspvn/).`),
    },
    {
        title: "CoTAI là viết tắt của chữ gì?",
        content: parseMarkdownToHTML(
            `CoTAI là viết tắt của \`Center of Talent in AI\` và theo cách nói tiếng Việt thì có thể đọc thành "Có Tài" 😉 Đây cũng là niềm tin của đội ngũ CoTAI: phương pháp và môi trường đào tạo phù hợp sẽ giúp tài năng của *tất cả chúng ta* được phát triển rực rỡ, nếu quyết tâm theo đuổi.`,
        ),
    },
    {
        title: "Thời gian để hoàn thành toàn bộ lộ trình 5 lớp là bao lâu? Làm sao để học trong thời gian ngắn nhất?",
        show: [FAQShowLocation.course],
        content: parseMarkdownToHTML(`Với tốc độ trung bình 1 bài học mỗi tuần và mỗi khóa gồm 12 bài học thì thời gian hoàn thành toàn bộ lộ trình tương đương khoảng 60 tuần (14 tháng).

Bạn có thể tăng tốc với hình thức học self-paced (vài bài mỗi tuần), ví dụ mỗi tuần học 2 bài thì khoảng 7 tháng là hoàn thành.`),
    },
    {
        title: "Sau khi hoàn thành toàn bộ lộ trình, học viên có thể làm được gì? Hoặc nên học thêm chương trình gì sau đó?",
        show: [FAQShowLocation.course],
        content: parseMarkdownToHTML(`Các học viên của chương trình sau khi "nâng cấp" năng lực AI đã được tuyển dụng làm kỹ sư AI & Khoa học dữ liệu ở các công ty Việt Nam và quốc tế, hoặc tự mở công ty khởi nghiệp. Một số học viên vừa thích làm sản phẩm vừa đam mê giảng dạy AI đã tham gia CoTAI. Nhiều học viên được công ty cử đi học đã về áp dụng công nghệ AI cho chính công ty chủ quản.

Sau khi hoàn thành lộ trình 5 khoá học, học viên có thể đăng ký khoá học chuyên sâu MathAIR về Toán cho *nghiên cứu* AI & Robotics, hoặc các khoá học ngắn hạn chuyên *làm sản phẩm* AI, và cả tham gia các hoạt động ngoại khoá.`),
    },
    {
        title: "Thanh toán học phí bằng cách nào?",
        content: parseMarkdownToHTML(
            `Học viên thanh toán bằng cách chuyển khoản theo "Hướng dẫn học phí" được gửi kèm email "Xác nhận ghi danh khóa học".`,
        ),
    },
    {
        title: "Các hình thức học tập khác thì mức học phí có khác nhau không?",
        content: parseMarkdownToHTML(
            `Các mức học phí là như nhau vì mỗi hình thức học tập đều có những ưu điểm riêng.`,
        ),
    },
    {
        title: "Thông tin về Quỹ học bổng CoTAI",
        content: parseMarkdownToHTML(
            `1. Đối tượng: Dành cho học sinh & sinh viên diện chính sách, gia cảnh khó khăn, tình nguyện viên & trợ giảng của CoTAI.
2. Điều kiện: đã hoàn thành xuất sắc khóa lập trình AI tại CoTAI và đang đăng ký khoá tiếp theo.
3. Hồ sơ: Học viên cần trình bày nguyện vọng, kết quả học tập khóa AI gần nhất, giấy xác nhận của địa phương hoặc của trường.
4. Mức học bổng được xét từ 20% đến 30% học phí của khóa đang đăng ký học.`,
        ),
    },
    {
        title: "Các hình thức học tập khác nhau như thế nào?",
        content: parseMarkdownToHTML(`|                            | Zoom online | Self-paced | Onsite |
| -                          | -           | - |- |
| Bài giảng                  | Trực tuyến bằng Zoom     | Trực tuyến bằng Video lectures     | Trực tiếp tại lớp |
| Hệ thống học liệu          | Aharium platform | Aharium platform | Aharium platform |
| Kênh trao đổi và cộng đồng | CoTAI Discord server (qua tin nhắn và cuộc gọi ngắn)      |CoTAI Discord server (qua tin nhắn và cuộc gọi ngắn)|CoTAI Discord server (qua tin nhắn và cuộc gọi ngắn)|
| Lịch học                   | Cố định 1 hoặc 2 buổi/tuần     | - Linh động tự chủ<br>- Có thể học nhanh (nhiều bài mỗi tuần)     | Cố định 1 hoặc 2 buổi/tuần |
| Đối tượng phù hợp          | - Quen & thích học online tại nhà để tiết kiệm thời gian đi lại<br>- Thích tham gia thảo luận trực tiếp trong suốt bài giảng<br>- Muốn học với lịch cố định hàng tuần     | - Quen & thích học online tại nhà để tiết kiệm thời gian đi lại<br>- Muốn hoàn thành bài học theo tốc độ riêng phù hợp với bản thân<br>- Thích học theo lịch cá nhân (nhanh chậm không phụ thuộc vào lớp)     |- Thích đến lớp để được gặp bạn bè & giảng viên<br>- Thích trực tiếp nghe giảng, tương tác và thảo luận<br>- Muốn học với lịch cố định hàng tuần`),
    },
    {
        title: "Chương trình được giảng dạy bằng ngôn ngữ gì?",
        content: parseMarkdownToHTML(
            `Tất cả các buổi học sẽ sử dụng tiếng Việt để giao tiếp giữa giảng viên và học viên. Tuy nhiên, các từ ngữ chuyên ngành sẽ không được Việt hoá toàn bộ. Học viên cần nắm được các từ khoá tiếng Anh cơ bản.`,
        ),
    },

    {
        title: "Làm sao để được hỗ trợ về Thư giới thiệu (LoR: Letter of Recommendation) cho hồ sơ xin học bổng du học & hồ sơ xin việc?",
        content: parseMarkdownToHTML(
            `Học viên được khuyến khích trao đổi trực tiếp với giảng viên *sớm* để ngoài LoR còn được tư vấn hướng nghiệp trong lĩnh vực công nghệ. Học viên cần sớm lên "chiến lược" xây dựng hồ sơ năng lực (profile building) với chi tiết các dự án (portfolio) để có quyết tâm học nhanh thành tài ngay từ bây giờ.`,
        ),
    },
    {
        title: "Trợ giúp thêm",
        content: parseMarkdownToHTML(
            `Nếu có câu hỏi khác, CoTAI rất sẵn sàng hỗ trợ bạn qua email contact@cot.ai, hoặc phone/zalo 081 550 3467.`,
        ),
    },
];
