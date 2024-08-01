const t = {
    "@context": "http://schema.org",
    "@graph": [
        {
            "@type": "BreadcrumbList",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    item: { name: "Browse", "@id": "https://www.coursera.org/browse" },
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    item: {
                        name: "Data Science",
                        "@id": "https://www.coursera.org/browse/data-science",
                    },
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    item: {
                        name: "Data Analysis",
                        "@id": "https://www.coursera.org/browse/data-science/data-analysis#specialization",
                    },
                },
            ],
        },
        {
            "@id": "https://www.coursera.org/professional-certificates/google-data-analytics#specialization",
            "@type": "Course",
            name: "Google Data Analytics",
            url: "https://www.coursera.org/professional-certificates/google-data-analytics",
            About: { "@type": "Thing", name: [], subjectOf: "Google Data Analytics" },
            description:
                "Offered by Google. Get on the fast track to a career in Data Analytics. In this certificate program, you'll learn in-demand skills at your ... Enroll for free.",
            provider: {
                "@id": "https://www.coursera.org/google#institution",
                "@type": "CollegeOrUniversity",
                name: "Google",
                url: "https://www.coursera.org/google",
                sameAs: "https://grow.google/certificates/#?modal_active=none",
            },
            image: "https://d15cw65ipctsrr.cloudfront.net/41/4d3d7c05fb42729c9d90352e072ca3/1060x596_GCC-photos_Karrim.png",
            offers: { "@type": "Offer", category: "Subscription" },
            hasCourseInstance: {
                "@type": "CourseInstance",
                courseMode: "Online",
                courseWorkload: "P6M",
            },
            educationalCredentialAwarded: "Coursera Certificate",
            isAccessibleForFree: "http://schema.org/True",
            inLanguage: "en",
            timeRequired: "P6M",
            hasPart: [
                {
                    "@id": "https://www.coursera.org/learn/foundations-data#mooc",
                    "@type": "Course",
                    name: "Foundations: Data, Data, Everywhere",
                    description:
                        "Offered by Google. This is the first course in the Google Data Analytics Certificate. Organizations of all kinds need data analysts to help ... Enroll for free.",
                    provider: {
                        "@id": "https://www.coursera.org/google#institution",
                        "@type": "CollegeOrUniversity",
                        name: "Google",
                        url: "https://www.coursera.org/google",
                        sameAs: "https://grow.google/certificates/#?modal_active=none",
                    },
                },
                {
                    "@id": "https://www.coursera.org/learn/ask-questions-make-decisions#mooc",
                    "@type": "Course",
                    name: "Ask Questions to Make Data-Driven Decisions",
                    description:
                        "Offered by Google. This is the second course in the Google Data Analytics Certificate. You’ll build on your understanding of the topics that ... Enroll for free.",
                    provider: {
                        "@id": "https://www.coursera.org/google#institution",
                        "@type": "CollegeOrUniversity",
                        name: "Google",
                        url: "https://www.coursera.org/google",
                        sameAs: "https://grow.google/certificates/#?modal_active=none",
                    },
                },
                {
                    "@id": "https://www.coursera.org/learn/data-preparation#mooc",
                    "@type": "Course",
                    name: "Prepare Data for Exploration",
                    description:
                        "Offered by Google. This is the third course in the Google Data Analytics Certificate. As you continue to build on your understanding of the ... Enroll for free.",
                    provider: {
                        "@id": "https://www.coursera.org/google#institution",
                        "@type": "CollegeOrUniversity",
                        name: "Google",
                        url: "https://www.coursera.org/google",
                        sameAs: "https://grow.google/certificates/#?modal_active=none",
                    },
                },
                {
                    "@id": "https://www.coursera.org/learn/process-data#mooc",
                    "@type": "Course",
                    name: "Process Data from Dirty to Clean",
                    description:
                        "Offered by Google. This is the fourth course in the Google Data Analytics Certificate. In this course, you’ll continue to build your ... Enroll for free.",
                    provider: {
                        "@id": "https://www.coursera.org/google#institution",
                        "@type": "CollegeOrUniversity",
                        name: "Google",
                        url: "https://www.coursera.org/google",
                        sameAs: "https://grow.google/certificates/#?modal_active=none",
                    },
                },
                {
                    "@id": "https://www.coursera.org/learn/analyze-data#mooc",
                    "@type": "Course",
                    name: "Analyze Data to Answer Questions",
                    description:
                        "Offered by Google. This is the fifth course in the Google Data Analytics Certificate. In this course, you’ll explore what it means to ... Enroll for free.",
                    provider: {
                        "@id": "https://www.coursera.org/google#institution",
                        "@type": "CollegeOrUniversity",
                        name: "Google",
                        url: "https://www.coursera.org/google",
                        sameAs: "https://grow.google/certificates/#?modal_active=none",
                    },
                },
                {
                    "@id": "https://www.coursera.org/learn/visualize-data#mooc",
                    "@type": "Course",
                    name: "Share Data Through the Art of Visualization",
                    description:
                        "Offered by Google. This is the sixth course in the Google Data Analytics Certificate. You’ll learn how to visualize and present your data ... Enroll for free.",
                    provider: {
                        "@id": "https://www.coursera.org/google#institution",
                        "@type": "CollegeOrUniversity",
                        name: "Google",
                        url: "https://www.coursera.org/google",
                        sameAs: "https://grow.google/certificates/#?modal_active=none",
                    },
                },
                {
                    "@id": "https://www.coursera.org/learn/data-analysis-r#mooc",
                    "@type": "Course",
                    name: "Data Analysis with R Programming",
                    description:
                        "Offered by Google. This course is the seventh course in the Google Data Analytics Certificate. In this course, you’ll learn about the ... Enroll for free.",
                    provider: {
                        "@id": "https://www.coursera.org/google#institution",
                        "@type": "CollegeOrUniversity",
                        name: "Google",
                        url: "https://www.coursera.org/google",
                        sameAs: "https://grow.google/certificates/#?modal_active=none",
                    },
                },
                {
                    "@id": "https://www.coursera.org/learn/google-data-analytics-capstone#mooc",
                    "@type": "Course",
                    name: "Google Data Analytics Capstone: Complete a Case Study",
                    description:
                        "Offered by Google. This course is the eighth and final course in the Google Data Analytics Certificate. You’ll have the opportunity to ... Enroll for free.",
                    provider: {
                        "@id": "https://www.coursera.org/google#institution",
                        "@type": "CollegeOrUniversity",
                        name: "Google",
                        url: "https://www.coursera.org/google",
                        sameAs: "https://grow.google/certificates/#?modal_active=none",
                    },
                },
            ],
            educationalLevel: "Beginner",
            aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: 4.764743374374988,
                bestRating: 5,
                ratingCount: 139171,
            },
        },
    ],
};

const e = {
    "@context": "https://schema.org/",
    "@type": "Course",
    publisher: {
        "@type": "Organization",
        name: "Coursera",
        url: "https://www.coursera.org",
    },
    financialAidEligible: "Financial Aid available for eligible students.",
    educationalCredentialAwarded: {
        "@type": "EducationalOccupationalCredential",
        name: "Coursera Certificate",
    },
    "@id": "https://www.coursera.org/learn/foundations-data",
    name: "Foundations: Data, Data, Everywhere",
    description:
        "This is the first course in the Google Data Analytics Certificate. Organizations of all kinds need data analysts to help them improve their processes, identify opportunities and trends, launch new products, and make thoughtful decisions. In this course, you’ll be introduced to the world of data analytics through hands-on curriculum developed by Google. The material shared covers plenty of key data analytics topics, and it’s designed to give you an overview of what’s to come in the Google Data An",
    image: [
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/f0/0de6bb70944a20bdfe0b8b4301b91e/Foundations-Data-Data-Everywhere.png",
    ],
    about: ["Spreadsheet", "Data Analysis", "SQL", "Data Visualization", "Data Cleansing"],
    teaches: [
        "Define and explain key concepts involved in data analytics including data, data analysis, and data ecosystems.",
        "Conduct an analytical thinking self assessment giving specific examples of the application of analytical thinking.",
        "Discuss the role of spreadsheets, query languages, and data visualization tools in data analytics.",
        "Describe the role of a data analyst with specific reference to jobs.",
    ],
    offers: {
        "@type": "Offer",
        category: "Subscription",
    },
    aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: 4.799371943572144,
        bestRating: 5,
        ratingCount: 102857,
    },
    provider: {
        "@type": "Organization",
        name: "Google",
        url: "https://grow.google/certificates/#?modal_active=none",
    },
    educationalLevel: "Beginner",
    totalHistoricalEnrollment: 2674018,
    inLanguage: "en",
    availableLanguage: ["ar", "de", "es", "fr", "id", "ja", "ko", "pt", "ro"],
    syllabusSections: [
        {
            "@type": "Syllabus",
            name: "Introducing data analytics and analytical thinking",
            description:
                "Data helps us make decisions in both everyday life and in business. In this part of the course, you’ll learn how data analysts use a variety of tools and skills to inform those decisions. You’ll also get to know more about this course and the overall program expectations.",
            timeRequired: "PT6H34M42S",
        },
        {
            "@type": "Syllabus",
            name: "The wonderful world of data",
            description:
                "In this part of the course, you'll learn about the data life cycle and data analysis process. They are both relevant to your work in this program and on the job. You’ll also be introduced to applications that help guide data through the data analysis process.",
            timeRequired: "PT3H19M54S",
        },
        {
            "@type": "Syllabus",
            name: "Set up your data analytics toolbox",
            description:
                "Spreadsheets, query languages, and data visualization tools are all a big part of a data analyst’s job. In this part of the course, you’ll learn the basic concepts to use them for data analysis. You’ll also understand how they work through interesting examples.",
            timeRequired: "PT4H30M21S",
        },
        {
            "@type": "Syllabus",
            name: "Become a fair and impactful data professional",
            description:
                "In this part of the course, you’ll examine different types of businesses and the jobs and tasks that analysts do for them. You’ll also learn how a Google Data Analytics Certificate will help you meet many of the requirements for an analyst position with these organizations.",
            timeRequired: "PT3H44M14S",
        },
    ],
    coursePrerequisites: [
        "No prior experience with spreadsheets or data analytics required. All you need is high school level math and curiosity about how things work. ",
        "",
    ],
    review: [
        {
            "@type": "Review",
            author: {
                "@type": "Person",
                name: "DA",
            },
            datePublished: "2021-10-08T00:00:00.000Z",
            reviewBody:
                "Very good course, giving beginners an overview of various aspects of data analysis, as well as having data analysts share their experiences, which is a great way for learners to get to know the field.",
            reviewRating: {
                "@type": "Rating",
                bestRating: "5",
                ratingValue: 5,
            },
        },
        {
            "@type": "Review",
            author: {
                "@type": "Person",
                name: "KW",
            },
            datePublished: "2021-06-25T00:00:00.000Z",
            reviewBody:
                "Awesome class. Found out why I'm always analytical about things in my personal life and the critical thinking that this provides. I love it and hopefully this will help me land my dream job at Google!",
            reviewRating: {
                "@type": "Rating",
                bestRating: "5",
                ratingValue: 5,
            },
        },
        {
            "@type": "Review",
            author: {
                "@type": "Person",
                name: "TV",
            },
            datePublished: "2022-07-01T00:00:00.000Z",
            reviewBody:
                "I found this course to be very user friendly. I was at well I was able to follow along. I did have doubts in myself when starting, but the instructor kept me engaged and eager to learn more. Thank you",
            reviewRating: {
                "@type": "Rating",
                bestRating: "5",
                ratingValue: 5,
            },
        },
        {
            "@type": "Review",
            author: {
                "@type": "Person",
                name: "SC",
            },
            datePublished: "2022-05-14T00:00:00.000Z",
            reviewBody:
                "I really love how they explain concepts about data, share experience , easy to understand and improved my foundation about data. The assignments and quizzes really helped me in undestanding the course",
            reviewRating: {
                "@type": "Rating",
                bestRating: "5",
                ratingValue: 5,
            },
        },
        {
            "@type": "Review",
            author: {
                "@type": "Person",
                name: "PB",
            },
            datePublished: "2021-03-22T00:00:00.000Z",
            reviewBody:
                "The course was really insightful. Knowing tools is not enough, understanding the business scenario and then applying technical knowledge to solve any problem is what a data analyst is expected to do.",
            reviewRating: {
                "@type": "Rating",
                bestRating: "5",
                ratingValue: 5,
            },
        },
    ],
    hasCourseInstance: [
        {
            "@type": "CourseInstance",
            courseMode: "Online",
            courseWorkload: "PT18H9M11S",
            instructor: {
                "@type": "Person",
                name: "Google Career Certificates",
                image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/61/36584e2633455296817e987d653e8d/500x500_Google.jpg",
            },
        },
    ],
};

const ad = {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": "https://www.edx.org/executive-education/the-london-school-of-economics-and-political-science-mba-essentials",
    name: "MBA Essentials",
    offers: [
        { "@type": "Offer", category: "Partially Free" },
        { "@type": "Offer", category: "Paid", price: null, priceCurrency: "USD" },
    ],
    url: "https://www.edx.org/executive-education/the-london-school-of-economics-and-political-science-mba-essentials",
    about: [
        "Mechanics",
        "Leadership",
        "Master Of Business Administration (MBA)",
        "Blobs",
        "Finance",
        "Political Sciences",
        "Ruby On Rails",
        "Business Acumen",
        "Influencing Skills",
        "Financial Analysis",
        "Marketing Strategies",
        "Business Concepts",
        "Economics",
    ],
    educationalCredentialAwarded: {
        "@type": "EducationalOccupationalCredential",
        name: "edX Certificate",
        url: "https://www.edx.org/verified-certificate",
        credentialCategory: "Certificate",
        offers: [{ "@type": "Offer", priceCurrency: "USD", price: null }],
    },
    educationalLevel: "Beginner",
    isAccessibleForFree: true,
    inLanguage: "en",
    availableLanguage: "en",
    timeRequired: "W10",
    description:
        "Build a toolkit of key strategic, managerial, and leadership skills for business.",
    provider: [
        { "@type": "CollegeOrUniversity", name: "LSE", url: "https://www.edx.org/school/lse" },
    ],
    hasCourseInstance: [
        {
            "@type": "CourseInstance",
            instructor: [],
            name: "MBA Essentials",
            courseMode: "Online",
            courseSchedule: {
                "@type": "Schedule",
                duration: "PT10H",
                repeatFrequency: "Weekly",
                repeatCount: 10,
                startDate: "2024-09-11T00:00:00Z",
                endDate: "2024-11-17T00:00:00Z",
            },
        },
    ],
    publisher: { "@type": "Organization", name: "edX", url: "edx.org" },
    image: [
        "https://prod-discovery.edx-cdn.org/media/course/image/b3f587fc-0cee-4dbd-8bac-b2687731a40d-2c9e7b77bbab.small.jpg",
    ],
    teaches: [
        "On completion of this course, you’ll gain:A stronger understanding of the three core pillars of business. Learn how the strategic environment, financial toolkit, and the human element can enhance your organisation’s strategic competitive advantage. Technical business and finance skills for understanding, analysing, and optimising business operations. Insights into human behaviour and influence that can be used to expand your influence internally and externally. Enhanced managerial competency and confidence in your move to strategic, influential business leadership, including the tools for professional career development. Unlimited access to edX’s Career Engagement Network, offering you exclusive resources and events to support your professional journey and drive your career forward.",
    ],
    totalHistoricalEnrollment: 31,
    coursePrerequisites: [],
    video: {
        "@type": "VideoObject",
        name: "MBA Essentials",
        contentUrl:
            "https://www.youtube.com/embed/videoseries?list=PL3i9SKphOUN-S-2InRJ-6VXeTs9rTM8xG",
    },
};

const c = {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": "https://www.edx.org/learn/computer-science/harvard-university-cs50-s-introduction-to-computer-science",
    name: "CS50's Introduction to Computer Science",
    offers: [
        { "@type": "Offer", category: "Partially Free" },
        { "@type": "Offer", category: "Paid", price: "219.00", priceCurrency: "USD" },
    ],
    url: "https://www.edx.org/learn/computer-science/harvard-university-cs50-s-introduction-to-computer-science",
    about: [
        "HyperText Markup Language (HTML)",
        "Data Structures",
        "Finance",
        "Cascading Style Sheets (CSS)",
        "Computer Science",
        "Resource Management",
        "Algorithms",
        "JavaScript (Programming Language)",
        "Forensic Sciences",
        "SQL (Programming Language)",
        "Cryptography",
        "Python (Programming Language)",
        "C (Programming Language)",
        "Security Software",
    ],
    educationalLevel: "Beginner",
    isAccessibleForFree: true,
    inLanguage: "en",
    availableLanguage: "en",
    timeRequired: "W12",
    description:
        "An introduction to the intellectual enterprises of computer science and the art of programming.",
    provider: [
        {
            "@type": "CollegeOrUniversity",
            name: "Harvard University",
            url: "https://www.edx.org/school/harvardx",
        },
    ],
    hasCourseInstance: [
        {
            "@type": "CourseInstance",
            instructor: [
                {
                    "@type": "Person",
                    name: "David J. Malan",
                    description:
                        "Gordon McKay Professor of the Practice of Computer Science • Harvard University",
                    image: "https://prod-discovery.edx-cdn.org/media/people/profile_images/1752b28e-8ac9-40a0-b468-326e03cafdd4-fbb503634b91.jpg",
                },
                {
                    "@type": "Person",
                    name: "Doug Lloyd",
                    description: "Senior Preceptor in Computer Science • Harvard University",
                    image: "https://prod-discovery.edx-cdn.org/media/people/profile_images/bc8ebc13-d0a3-406d-a486-8abaf599f4f2-e4bb91efd038.jpg",
                },
                {
                    "@type": "Person",
                    name: "Brian Yu",
                    description: "Senior Preceptor in Computer Science • Harvard University",
                    image: "https://prod-discovery.edx-cdn.org/media/people/profile_images/0a4f3eeb-93aa-4db9-956b-236dc9a1f65e-3f9866938764.png",
                },
            ],
            name: "CS50's Introduction to Computer Science",
            courseMode: "Online",
            courseSchedule: {
                "@type": "Schedule",
                duration: "PT12H",
                repeatFrequency: "Weekly",
                repeatCount: 12,
                startDate: "2024-08-01T03:41:11.038Z",
                endDate: "2024-12-31T23:59:00Z",
            },
        },
    ],
    publisher: { "@type": "Organization", name: "edX", url: "edx.org" },
    image: [
        "https://prod-discovery.edx-cdn.org/media/course/image/da1b2400-322b-459b-97b0-0c557f05d017-a3d1899c3344.small.png",
    ],
    teaches: [
        "A broad and robust understanding of computer science and programming",
        "How to think algorithmically and solve programming problems efficiently",
        "Concepts like abstraction, algorithms, data structures, encapsulation, resource management, security, software engineering, and web development",
        "Familiarity in a number of languages, including C, Python, SQL, and JavaScript plus CSS and HTML",
        "How to engage with a vibrant community of like-minded learners from all levels of experience",
        "How to develop and present a final programming project to your peers",
    ],
    totalHistoricalEnrollment: 6003798,
    coursePrerequisites: ["None."],
    video: {
        "@type": "VideoObject",
        name: "CS50's Introduction to Computer Science",
        contentUrl: "https://www.youtube.com/watch?v=ib4NNsp2qW4",
        thumbnailUrl: "https://www.edx.org/sites/default/files/course/image/featured-card/cs50.jpg",
    },
};

const my = {
    "@context": "https://schema.org",
    "@id": "http://localhost:3000/courses/dl4nlp",
    "@type": "Course",
    name: "Deep Learning for Natural Language Processing",
    url: "http://localhost:3000/courses/dl4nlp",
    publisher: { "@type": "Organization", name: "CoTAI Education", url: "http://localhost:3000" },
    provider: { "@type": "Organization", name: "CoTAI Education", url: "http://localhost:3000" },
    image: ["http://localhost:3000/@imagetools/d379f716f83871f63aed4c9993c86ee875612e3d"],
    offers: [{ "@type": "Offer", category: "Paid", priceCurrency: "VND", price: 7000000 }],
    about: [
        "Python",
        "Pytorch",
        "Numpy",
        "Pandas",
        "Scikit-learn",
        "Keras",
        "Matplotlib",
        "Plotly",
        "Pillow",
        "Albumentations",
        "TorchMetrics",
        "Transformers",
        "PaddlePaddle",
        "MMCV",
        "ONNX",
        "OpenVINO",
        "Github",
        "Markdown",
        "Latex",
    ],
    teaches: [
        "Hiểu được các khái niệm quan trọng về các kiến trúc `Transformers` phổ biến trong ngành NLP và ưu nhược điểm của chúng",
        "Học được cách sử dụng các thư viện tốt nhất và phổ biến nhất khi lập trình xây dựng mô hình AI xử lý ngôn ngữ",
        "Biết cách xây dựng và biến đổi các mô hình có sẵn để giải quyết bài toán riêng của mình",
        "Biết cách chuyển đổi (convert) mô hình để tăng tốc độ phục vụ khi làm sản phẩm",
        "Đủ năng lực đọc hiểu các bài báo nghiên cứu chuyên ngành để tự cập nhật kiến thức chuyên môn",
    ],
    financialAidEligible: "Scholarship Available",
    inLanguage: "vi",
    availableLanguage: ["vie"],
    educationalCredentialAwarded: [
        {
            "@type": "EducationalOccupationalCredential",
            name: "Chứng nhận Deep Learning for Natural Language Processing",
            url: "http://localhost:3000/@imagetools/9e9b2bb07d871a6385f675d9e769cfbc50b95dcf",
            credentialCategory: "Certificate",
            offers: [{ "@type": "Offer", category: "Free" }],
        },
    ],
    hasCourseInstance: [
        {
            "@type": "CourseInstance",
            courseMode: "Online",
            courseWorkload: "P2D",
            name: "Deep Learning for Natural Language Processing",
        },
    ],
};
