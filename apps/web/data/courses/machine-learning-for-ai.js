const course = {
	title: 'Machine learning for AI',

	'register-url': 'https://go.cot.ai/091023',

	thumbnail: '/images/logo/CoTAI-Ver0-320.png',

	'experience-requirement': [],
	'who-should-join': [
		'Học sinh THPT & sinh viên các ngành muốn làm lập trình viên AI hoặc xin học bổng du học & nghiên cứu (được viết thư giới thiệu.)',
		'Người đi làm muốn phát triển nghề nghiệp chuyên môn với công nghệ AI, lập trình viên muốn nhanh chóng "nâng cấp" năng lực lập trình AI.'
	],
	skills: [],
	archives: [],
	description: `Dành cho các học viên đã hoàn thành (hoặc có kiến thức tương đương) khóa MathCoding4AI. Khóa học dạy về các mô hình nền tảng của ngành học máy (Machine Learning) cho hầu hết các bài toán AI:

  - Representation (feature extractions): trích xuất đặc trưng biểu diễn thành toạ độ nhúng.
  - Evaluation (metrics & losses): các chuẩn đánh giá mô hình và hàm lỗi.
  - Search (optimization): tối ưu tham số, huấn luyện mô hình.
  - Linear & Nonlinear Predictors (regression, classification, clustering): Các mô hình dự đoán tuyến tính & phi tuyến cho các bài toán cơ sở như dự báo giá trị, phân loại, gom nhóm.
  - CNNs & RNNs: Các mạng tích chập & mạng hồi quy biểu diễn dữ liệu chuỗi trong không gian & thời gian.
  - MDP Planning & Reinforcement Learning: Các bài toán suy luận, lên kế hoạch & ra quyết định bằng mô hình Markov và học tăng cường.
  - Thực hành phát triển dự án tích hợp AI thành ứng dụng thực tế.
	
Học viên sẽ sử dụng framework phổ biến PyTorch thay vì TF/Keras như ở khoá MC4AI. Học viên có thể tự tin làm các dự án Data Science & AI khai thác các mô hình & đặc trưng huấn luyện sẵn (pretrained embeddings) có [rất nhiều ở các nguồn mở](https://github.com/topics/pretrained-models) sau khi hoàn thành khoá học.`,
	components: [],

	curriculum: [
		{
			title: 'Representations: Feature extraction & embedding coordinates',
			hidden: false,
			'classes-countable': true
		},
		{
			title:
				'All about linear predictors (linear/logistic/softmax regression, SVM, perceptron, etc.)',
			hidden: false,
			'classes-countable': true
		},
		{
			title: 'Linear decision making in RecSys & Banditsa',
			hidden: false,
			'classes-countable': true
		},
		{
			title:
				'All about nonlinear predictors (decision trees & forest, kernel machines, MLPs, etc.)',
			hidden: false,
			'classes-countable': true
		},
		{
			title: 'Evaluations: Common metrics and loss functions',
			hidden: false,
			'classes-countable': true
		},
		{
			title:
				'Search: Gradient-based optimization & training (over/underfitting, regularization, and generalization)',
			hidden: false,
			'classes-countable': true
		},
		{
			title: 'Mid-term exam & capstone project checkpoint',
			hidden: false,
			'classes-countable': true
		},
		{
			title: 'All about CNNs',
			hidden: false,
			'classes-countable': true
		},
		{
			title: 'All about RNNs (LSTM, GRU, etc.)',
			hidden: false,
			'classes-countable': true
		},
		{
			title: 'Sequential decision making: MDP Planning',
			hidden: false,
			'classes-countable': true
		},
		{
			title: 'Sequential decision making: Reinforcement Q-Learning.',
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
