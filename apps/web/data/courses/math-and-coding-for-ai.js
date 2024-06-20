const course = {
	title: 'Math & coding for AI',

	'register-url': 'https://go.cot.ai/091023',

	thumbnail: '/images/logo/CoTAI-Ver0-320.png',

	'experience-requirement': ['Đã hoàn thành khoá PythonAI'],
	'who-should-join': [
		'Học sinh THPT & sinh viên các ngành muốn làm lập trình viên AI hoặc xin học bổng du học & nghiên cứu (được viết thư giới thiệu.)',
		'Người đi làm muốn phát triển nghề nghiệp chuyên môn với công nghệ AI, lập trình viên muốn nhanh chóng "nâng cấp" năng lực lập trình AI.'
	],
	skills: [],
	archives: [
		{
			title: 'Sử dụng thành thạo các thư viện AI phổ biến',
			description:
				'NumPy, Pandas, Matplotlib, Scikit-learn, TensorFlow & Keras, Plotly. Các thư viện AI phổ biến nhất, được sử dụng rộng rãi trong các dự án AI hiện nay'
		},
		{
			title: 'Hiểu & cài đặt được các thuật toán AI cơ bản',
			description: ' Gradient Descent, KNN, KMeans'
		},
		{
			title: 'Hiểu & nắm vững các mô hình AI tuyến tính',
			description: 'Linear, Losgistic, Softmax Regression'
		},
		{
			title: 'Có thể tạo một ứng dụng AI hoàn chỉnh',
			description: 'Áp dụng kiến thức lập trình AI vào việc xây dựng ứng dụng AI'
		}
	],

	description: `Dành cho các học viên đã biết lập trình Python cơ bản, hoặc đã hoàn thành khoá PythonAI - Learn Python Coding with AI của CoTAI. Khóa học MC4AI cung cấp các kiến thức Toán cốt lõi để bắt đầu các khóa học AI chuyên sâu qua các giải thuật và thư viện Python (NumPy, Pandas, Matplotlib, Scikit-learn, TensorFlow & Keras, Plotly):

  - Xử lý, tính toán, biến đổi, hiển thị các mảng dữ liệu cho hình ảnh, văn bản, số liệu, etc.
  - Mô phỏng & sinh mẫu, xác suất & “niềm tin” khi đưa ra dự đoán và các mô hình học máy (Machine Learning) cơ bản.
  - Thực hành phát triển dự án phân tích dữ liệu (Data Analysis) sử dụng các mô hình & đặc trưng huấn luyện sẵn.`,
	components: [],

	curriculum: [
		{
			title: 'Linear Algebra & Numpy',
			hidden: false,
			'classes-countable': true
		},
		{
			title: 'Common Numpy functions & Matplotlib',
			hidden: false,
			'classes-countable': true
		},
		{
			title: 'Pandas & Data Engineering',
			hidden: false,
			'classes-countable': true
		},
		{
			title: 'KMeans Clustering & KNN Classifier',
			hidden: false,
			'classes-countable': true
		},
		{
			title: 'Basic Probability, Sampling & Generation',
			hidden: false,
			'classes-countable': true
		},
		{
			title: 'Mid-term exam',
			hidden: false,
			'classes-countable': true
		},
		{
			title: 'Derivatives, Gradient Descent & Plotly',
			hidden: false,
			'classes-countable': true
		},
		{
			title: 'Linear Regression',
			hidden: false,
			'classes-countable': true
		},
		{
			title: 'Binary Linear Classifiers',
			hidden: false,
			'classes-countable': true
		},
		{
			title: 'Multiclass Linear Classifiers',
			hidden: false,
			'classes-countable': true
		},
		{
			title: 'Introduction to PyTorch & reimplementations',
			hidden: false,
			'classes-countable': true
		},
		{
			title: 'Final Exam',
			hidden: false,
			'classes-countable': true
		},
		{
			title: 'Project presentation',
			hidden: false,
			'classes-countable': true
		}
	]
};

console.log(JSON.stringify(course));
