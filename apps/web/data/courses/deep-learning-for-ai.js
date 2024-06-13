const course = {
	title: 'Deep learning for AI',

	'register-url': 'https://go.cot.ai/091023',

	thumbnail: '/images/logo/CoTAI-Ver0-320.png',

	'experience-requirement': [],
	'who-should-join': [
		'Học sinh THPT & sinh viên các ngành muốn làm lập trình viên AI hoặc xin học bổng du học & nghiên cứu (được viết thư giới thiệu.)',
		'Người đi làm muốn phát triển nghề nghiệp chuyên môn với công nghệ AI, lập trình viên muốn nhanh chóng "nâng cấp" năng lực lập trình AI.'
	],
	skills: [],
	archives: [],

	description: `Dành cho các học viên đã hoàn thành (hoặc có kiến thức tương đương) khóa MachineLearning4AI. Khoá học tập trung vào:

  - Các nguyên lý & kiến trúc mô hình nền tảng (principles & backbone architectures/models) của ngành học sâu (Deep Learning) cho các bài toán AI biểu diễn và sinh khái niệm, dự báo nhận dạng và ra quyết định từ hình ảnh, ngôn ngữ, âm thanh, số liệu.
  - Các thư viện & mô hình học sâu huấn luyện sẵn (DL frameworks & pretrained models) tiêu biểu nhất, giúp học viên nhanh chóng thực hành để nắm bắt kiến thức kỹ năng.
  - Thu thập dữ liệu thực tế để tinh chỉnh mô hình và triển khai thành các ứng dụng demo (dùng Gradio & Streamlit).
	
Sau khi trực tiếp thực hành (hands-on) việc xây dựng triển khai các ứng dụng mẫu đa dạng cùng các nguyên lý hoạt động, học viên có thể tự khám phá các mô hình học sâu mã mở mới nhất (SOTA). Từ đó học viên có thể tự tin chọn tiếp các đề tài yêu thích để tham gia [nghiên cứu chuyên sâu hoặc phát triển dự án AI](https://gem.cot.ai/s/YU3hkfDCd) cùng Trung tâm tài năng CoTAI.`,
	components: [],

	curriculum: [
		{
			title: 'All about DCNNs',
			hidden: false,
			'classes-countable': true
		},
		{
			title: 'DL for Visual Understanding',
			hidden: false,
			'classes-countable': true
		},
		{
			title: 'All about Language Models (word embeddings, attentions & Transformers, BERTs, etc.)',
			hidden: false,
			'classes-countable': true
		},
		{
			title: 'DL for Language Understanding',
			hidden: false,
			'classes-countable': true
		},
		{
			title: 'DL for Audio',
			hidden: false,
			'classes-countable': true
		},
		{
			title: 'Mid-term exam & capstone project checkpoint',
			hidden: false,
			'classes-countable': true
		},
		{
			title: 'DL for Speech',
			hidden: false,
			'classes-countable': true
		},
		{
			title: 'Deep Reinforcement Learning (DRL)',
			hidden: false,
			'classes-countable': true
		},
		{
			title: 'DRL for Robotics & Games',
			hidden: false,
			'classes-countable': true
		},
		{
			title: 'Deep Generative Models & Creative AI',
			hidden: false,
			'classes-countable': true
		},
		{
			title: 'DL for Machine Reasoning',
			hidden: false,
			'classes-countable': true
		},
		{
			title: 'Final exam',
			hidden: false,
			'classes-countable': true
		},
		{
			title: 'Capstone project presentations',
			hidden: false,
			'classes-countable': true
		}
	]
};

console.log(JSON.stringify(course));
