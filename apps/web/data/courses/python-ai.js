const course = {
	title: 'Python AI',

	'register-url': 'https://go.cot.ai/091023',

	thumbnail: '/images/logo/CoTAI-Ver0-320.png',

	'experience-requirement': [],
	'who-should-join': [
		'Học sinh THPT & sinh viên các ngành muốn làm lập trình viên AI hoặc xin học bổng du học & nghiên cứu (được viết thư giới thiệu.)',
		'Người đi làm muốn phát triển nghề nghiệp chuyên môn với công nghệ AI, lập trình viên muốn nhanh chóng "nâng cấp" năng lực lập trình AI.'
	],
	skills: [],
	archives: [
		{
			title: 'Kỹ năng lập trình cơ bản',
			description:
				'Các kiểu dữ liệu cơ bản, các cấu trúc lệnh, hàm phổ biến nhất của Python. Các kỹ thuật lập trình cơ bản thường được sử dụng trong AI'
		},
		{
			title: 'Trải nghiệm các thư viện xử lý AI',
			description: 'OpenCV, Pillow, DeepFace'
		},
		{
			title: 'Tạo một ứng dụng web hoàn chỉnh',
			description:
				'Áp dụng kiến thức lập trình Python vào việc xây dựng ứng dụng web thông qua Streamlit, một framework phổ biến cho việc xây dựng ứng dụng web với Python.'
		}
	],
	description: `Học lập trình Python cơ bản thông qua tương tác với AI. Lưu ý: Học viên không cần học qua lớp AI4ALL.

Khoá học cung cấp các kiến thức và kỹ năng lập trình Python cần thiết cho việc thực hành các giải thuật và triển khai các ứng dụng AI ở các lớp tiếp theo của chương trình Public Training: từ kiểu dữ liệu, câu lệnh, vòng lặp, chuỗi, containers cho đến cấu trúc dự án và thiết kế giao diện.`,
	'experience-requirement': [
		'Các kỹ năng sử dụng máy tính cơ bản: truy cập file, folder, cách cài đặt phần mềm, sử dụng internet',
		'Kiến thức toán cơ bản: hình học cơ bản, giải phương trình bậc 1,2'
	],
	components: [],

	curriculum: [
		{
			title: 'Introduction to Python in Google Colab',
			hidden: false,
			'classes-countable': true
		},
		{
			title: 'Conditional statement & debug',
			hidden: false,
			'classes-countable': true
		},
		{
			title: 'Python built-in Containers',
			hidden: false,
			'classes-countable': true
		},
		{
			title: 'Loop: For, While, Break & Continue, Nested',
			hidden: false,
			'classes-countable': true
		},
		{
			title: 'Basic programming techniques',
			hidden: false,
			'classes-countable': true
		},
		{
			title: 'Mid-term Exam',
			hidden: false,
			'classes-countable': true
		},
		{
			title: 'Operations on String: Regex, Read/Write File',
			hidden: false,
			'classes-countable': true
		},
		{
			title: 'Class & Algorithms (e.g., Sort)',
			hidden: false,
			'classes-countable': true
		},
		{
			title: '2D list, Module, Package',
			hidden: false,
			'classes-countable': true
		},
		{
			title: 'Application Framework Streamlit',
			hidden: false,
			'classes-countable': true
		},
		{
			title: 'Final Exam',
			hidden: false,
			'classes-countable': true
		}
	]
};
console.log(JSON.stringify(course));
