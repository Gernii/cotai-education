const course = {
	title: 'Face Attendance System On Cloud And Edge',

	'register-url': '',

	thumbnail: '/images/logo/CoTAI-Ver0-320.png',

	description: `Khóa học sẽ giúp học viên hiểu được cách thức để triển khai hệ thông Face recognition thành 1 ứng dụng điểm danh sử dụng khuôn mặt. 

Khóa học phù hợp với các học viên đã biết sử dụng các thư viện và framework Machine learning, deep learning như Pytorch, Tensorflow, Scikit-learn

Khóa học sẽ hướng dẫn học viên tối ưu hóa mô hình face detection, face recognition để chạy thuần CPU, sau đó deploy model AI lên server, embedded system, serverless. 

Ngoài ra khóa học sẽ giúp xây dựng hệ thống sử dụng relational database, serverless backend và thiết kế API trên cloud

Xây dựng ứng dụng UI và nút trên Raspberry Pi bằng Python`,

	archives: [
		{
			title: 'Làm việc với các mô hình AI nổi tiếng',
			description:
				'Các bạn sẽ được giới thiệu và sử dụng các framework, thư viện và các mô hình AI nổi tiếng về nhận diện khuôn mặt'
		},
		{
			title: 'Tối ưu model AI cho production',
			description:
				'Khóa học sẽ hướng dẫn học viên tối ưu hóa mô hình face detection, face recognition để chạy thuần CPU, sau đó triển khai mô AI lên hệ thống đám mây AWS, hệ thống nhúng Raspberry Pi, Serverless'
		},
		{
			title: 'Xây dựng hệ thống backend cho ứng dụng điểm danh bằng khuôn mặt',
			description:
				'Thiết kế hệ thống serverless backend, API trên cloud kết hợp với Relational Database'
		},
		{
			title: 'Xây dựng ứng dụng trên mạch nhúng Raspberry Pi',
			description: `- Tối ưu hóa mô hình để chạy trên Raspberry Pi, tối ưu camera để phù hợp với môi trường thiếu sáng
- Hạn chế giật lag và FPS thấp bằng xử lý đa luồng AI/Camera trong Python`
		}
	],
	components: [],

	curriculum: [
		{
			title: 'Giới thiệu tổng quan',

			hidden: false,

			'classes-countable': true,
			details: {
				hidden: true,

				content: `- Giới thiệu về face recognition
- Các ứng dụng thực tế
- Luồng xử lý của face recognition
	- Face Detection
	- Landmarks Detection
	- Feature Extraction
	- Embedding Search
- Giới thiệu Mediapipe`
			}
		},
		{
			title: 'Setup môi trường và giải thích chi tiết sâu vào luồng xử lý của face recognition',

			hidden: false,

			'classes-countable': true,

			details: {
				hidden: true,

				content: `- Setup môi trường code trên máy tính
- Anaconda & Python
- Thư viện:
	- Pytorch
	- Numpy
	- OpenCV
	- Pillow
	- Onnxruntime
	- Scikit-learn
	- Openvino
- Lý thuyết về Face detection và landmark detection
- Face alignment
- Tại sao phải căn chỉnh khuôn mặt?
- Cách để căn chỉnh khuôn mặt
- Face embedding:
- Giải thích ngắn gọn về trích xuất đặc trưng 
- Embedding search
- Thuật toán KD-Tree
- Thuật toán Ball-Tree
- Faiss`
			}
		},
		{
			title: 'Thực hành làm ứng dụng face recognition bằng repo Insightface',

			hidden: false,

			'classes-countable': true,

			details: {
				hidden: true,

				content: `- Dùng opensource Insightface để xây dựng ứng dụng face recognition
- Sử dụng thuật toán Ball-Tree để search embedding
- Làm database khuôn mặt bằng nhiều khuôn mặt khác nhau`
			}
		},
		{
			title: 'Thực hành làm ứng dụng face recognition bằng repo Insightface',

			hidden: false,

			'classes-countable': true,

			details: {
				hidden: true,

				content: `- Giải thích về các runtime (CPU Arm, CPU Intel, NPU, GPU)
- Khi nào thì sử dụng Openvino hoặc Onnxruntime hoặc Pytorch? 
- Chạy mô hình Onnx và Openvino.`
			}
		},
		{
			title: 'Tối ưu mô hình quantize từ FP16 -> INT8',

			hidden: false,

			'classes-countable': true,

			details: {
				hidden: true,

				content: `- Vì sao cần phải quantize model?
- Hướng dẫn quantize model sang INT8
- So sánh mô hình FP16 và INT8:
	- Kích thước file
	- Độ chính xác
	- Tốc độ chạy`
			}
		},
		{
			title: 'Xây dựng pipeline hoàn chỉnh cho face recognition',

			hidden: false,

			'classes-countable': true,

			details: {
				hidden: true,

				content: `- Xử lý tấm hình từ webcam cho mô hình Face detection 
- Sử dụng Face detection để nhận diện khuôn mặt
- Xử lý cắt hình cho Face embedding
- Search embedding trong database khuôn mặt`
			}
		},
		{
			title: 'Làm hệ thống backend, API, Database',

			hidden: false,

			'classes-countable': true,

			details: {
				hidden: true,

				content: `- Cài đặt và sử dụng PostgreSQL 
- Hướng dẫn làm Backend và API đơn giản bằng Python
- Liên kết database với Backend để ghi và nhận dữ liệu`
			}
		},
		{
			title: 'Làm hệ thống backend, API, Database',

			hidden: false,

			'classes-countable': true,

			details: {
				hidden: true,

				content: `- Thiết kế backend theo kiến trúc N-layered
- Cấu trúc thư mục và dự án, git
- Hướng dẫn làm các API dựa theo bản thiết kế hệ thống`
			}
		},
		{
			title: 'Làm hệ thống serverless và deploy lên AWS',

			hidden: false,

			'classes-countable': true,

			details: {
				hidden: true,

				content: `- Giới thiệu về serverless và AWS cloud service
- Framework quản lý và deploy serverless
- Làm serverless API đơn giản trên AWS`
			}
		},
		{
			title: 'Làm hệ thống serverless và deploy lên AWS',

			hidden: false,

			'classes-countable': true,

			details: {
				hidden: true,

				content: `- Hướng dẫn làm serverless AI service cho hệ thống điểm danh khuôn mặt
- Chuyển đổi hệ thống backend truyền thống thành serverless`
			}
		},
		{
			title: 'Làm hệ thống serverless và deploy lên AWS',

			hidden: false,

			'classes-countable': true,

			details: {
				hidden: true,

				content: `- Tìm hiểu về MQTT thay thế cho API truyền thống.
- Tạo broker và cách nhận message để xử lý trên AWS`
			}
		},
		{
			title: 'Làm hệ thống Face attendance trên Raspberry Pi',

			hidden: false,

			'classes-countable': true,

			details: {
				hidden: true,

				content: `- Giới thiệu về Raspberry Pi.
- Hướng dẫn setup và build thư viện cho Raspberry Pi
- Cài đặt và sử dụng Python để giao tiếp với camera CSI`
			}
		},
		{
			title: 'Làm hệ thống Face attendance trên Raspberry Pi',

			hidden: false,

			'classes-countable': true,

			details: {
				hidden: true,

				content: `- Chạy các mô hình AI face trên Raspberry Pi
- Tích hợp camera CSI và chạy face recognition 
- Giới thiệu thư viện làm UI bằng Python`
			}
		},
		{
			title: 'Làm hệ thống Face attendance trên Raspberry Pi',

			hidden: false,

			'classes-countable': true,

			details: {
				hidden: true,

				content: `- Làm UI đơn giản để lấy mẫu khuôn mặt và điểm danh
- Tích hợp MQTT vào để gửi dữ liệu điểm danh lên database`
			}
		},
		{
			title: 'Làm hệ thống Face attendance trên Raspberry Pi',

			hidden: false,

			'classes-countable': true,

			details: {
				hidden: true,

				content: `- Xử lý đa luồng cho AI để tăng trải nghiệm người dùng
- Giải thích về các tham số cho camera của Picamera
- Tối ưu camera để có thể hoạt động trong cả môi trường sáng và tối`
			}
		}
	]
};

console.log(JSON.stringify(course));
