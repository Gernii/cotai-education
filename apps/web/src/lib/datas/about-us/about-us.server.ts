import { parseMarkdownToHTML } from "$lib/utils/parse-markdown-to-json.server";

export const aboutUsData = {
    visionAndMissionDescription: parseMarkdownToHTML(`Kể từ khi thành lập vào tháng 9/2019, CoTAI luôn hướng tới mục tiêu trở thành một hệ sinh thái hàng đầu trong lĩnh vực đào tạo, nghiên cứu và ứng dụng Trí tuệ nhân tạo (AI) tại Việt Nam và trên toàn thế giới.

CoTAI tập trung vào ba mảng chính để thực hiện tầm nhìn của mình:

1. **CoTAI Education**: Đào tạo nhân tài AI theo cả hai hướng nghiên cứu khoa học và phát triển sản phẩm, nhằm tạo ra nguồn nhân lực AI trình độ thế giới.
2. **CoTAI Solutions**: Cung cấp dịch vụ gia công phần mềm (fullstack AI R&D outsourcing) và phát triển các giải pháp công nghệ AI riêng (white label) cho khách hàng doanh nghiệp.
3. **CoTAI Startup Studio**: Phát triển các sản phẩm và dịch vụ AI độc quyền, đồng thời hỗ trợ thành lập các công ty khởi nghiệp công nghệ, góp phần tạo nên một hệ sinh thái đổi mới sáng tạo.`),
    ourPride: {
        subtitle: parseMarkdownToHTML(`**Đào tạo tăng tốc thành tài accelerated mastery in AI**`),
        main: parseMarkdownToHTML(
            `Chương trình đào tạo nhân tài AI được đội ngũ CoTAI chắt lọc tinh gọn & cập nhật thường xuyên suốt nhiều năm, giúp học viên nắm bắt một cách hiệu quả các nguyên lý cốt lõi cùng công nghệ AI mới nhất để nhanh chóng thực chiến. Nội dung đào tạo được xây dựng từ các dự án và sản phẩm AI ứng dụng thực tế do CoTAI phát triển, do chính đội ngũ kỹ sư tâm huyết của CoTAI trực tiếp giảng dạy, giúp học viên kế thừa các tinh hoa để “đi tắt đón đầu” trên tinh thần thực học thực làm.`,
        ),
        sub: [
            parseMarkdownToHTML(
                `CoTAI tự hào có chương trình chuyên sâu đầu tiên & duy nhất của Việt Nam được chính thức triển khai tại trường THPT chuyên Lê Hồng Phong HCM từ năm 2019 đến nay. Học sinh của chương trình đạt nhiều giải thưởng uy tín như giải nhì ISEF quốc tế (lần đầu tiên trong lịch sử!), giải nhất STEAM Hacks toàn quốc... 🏆🎉`,
            ),
            parseMarkdownToHTML(
                `Ngoài việc trở thành kỹ sư trụ cột phát triển các dự án và sản phẩm của CoTAI, các học viên đã tốt nghiệp hiện còn đang làm việc tại các công ty lớn như Meta AI (Facebook, UK), TikTok AI Singapore, You, Vingroup BigData, và các viện nghiên cứu lớn như TU Darmstadt, KAIST...`,
            ),
        ],
    },
    payForward: parseMarkdownToHTML(
        `Đội ngũ CoTAI luôn xem việc đồng hành cùng sự phát triển của học viên là một sứ mệnh cao cả! Học viên được tạo điều kiện tối đa để có cơ hội tham gia các cuộc thi  trải nghiệm, các nhóm nghiên cứu phát triển, thực tập & giảng dạy, cũng như tuyển dụng & cộng tác viên (làm dự án từ xa) trong mạng lưới chuyên gia và khởi nghiệp của CoTAI Startup Studio. `,
    ),
};
