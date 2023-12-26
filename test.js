const a = {
	programs: {
		'ai-for-highschool': {
			title: 'Ai for highschool',

			hidden: true,

			courses: ['math-code', 'math-code-2', 'math-code-2', 'math-code-2'],

			'courses-highlight': [
				'math-code',
				'math-code-2',
				'math-code',
				'math-code-2',
				'math-code-2',
				'math-code-2',
				'math-code-2'
			],
			'courses-roadmap': ['math-code', 'math-code-2', 'math-code-2', 'math-code-2', 'math-code-2'],

			targets: ['student', 'developer', 'all'],

			description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.

Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
			components: [
				{
					type: 0,

					title: 'Vì sao nên học',

					image: 'https://i.imgur.com/uAfO3SL.jpeg',

					background: true,
					hidden: false,
					description: `$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$

$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$

==marked==

==marked==

::: warning
hello
:::

# H1
#### h4
$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$

$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$

==marked==

==marked==

::: warning
hello
:::

xyz

abc
- Lorem Ipsum is simply dummy text of the printing and typesetting industry.
- Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
	- hell
	- hi
		- essasdasdas
		- els`
				},
				{
					type: 1,

					title: 'Lợi ích',

					image: 'https://i.imgur.com/uAfO3SL.jpeg',

					background: false,

					hidden: false,

					description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque in, numquam eos assumenda, similique error iusto sint repellendus nulla repellat perspiciatis, nesciunt iure deleniti quam nihil. Nesciunt exercitationem accusantium dolorum vero quidem ut non minus amet ab reprehenderit quisquam tempora eos aliquid reiciendis quibusdam nemo corporis illum alias eaque modi, libero temporibus a excepturi. Pariatur dolore tempore autem enim cum sapiente. Rem error magnam unde, fuga voluptatibus earum reprehenderit voluptate. Incidunt, voluptas? Incidunt nisi dolorum aliquid harum voluptatibus soluta voluptate fugiat quos itaque aspernatur ipsum non ex deleniti, in accusantium. Fuga quae, molestias distinctio a deleniti sint incidunt. Ea, unde.`
				}
			]
		},
		'ai-for-highschool-2': {
			title: 'Ai for highschool 2',

			hidden: false,

			'other-courses': ['math-code'],

			'courses-highlight': ['math-code'],

			roadmap: ['math-code', 'math-code', 'math-code', 'math-code'],

			targets: ['student', 'developer', 'all'],

			description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.

Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
`
		}
	}
};

const course = {
	title: 'Image Search & Retrieval Project Based Training',

	// price: 1000000,

	// 'register-url': 'https://i.imgur.com/uAfO3SL.jpeg',

	thumbnail: 'https://i.imgur.com/uAfO3SL.jpeg',

	description: `This course aims to provide learners with a comprehensive understanding of Image Similarity Search. By utilizing a top-down approach, the course will enable learners to:

1.  **Research-Oriented Learning**: Develop the ability to independently research and gather relevant resources, including: debugging code, case studies and existing solutions in the field of image similarity search. 
2.  **System Design Based on Real-Life Requirements**: Learn to design robust and efficient image similarity search systems tailored to real-life requirements.
3.  **Hands-On Development with Pretrained Models**: Gain practical experience in coding and developing their own image similarity search systems using pretrained models. `,
	components: [
		{
			type: 0,

			title: 'Course Information',

			image: 'https://i.imgur.com/uAfO3SL.jpeg',

			background: true,

			hidden: false,

			description: `- Learning method: Online 100%, self-paced with videos
- Resources:
	- Intel CPU 10th or above
	- NVIDIA GPU with at least 6GB of VRAM (much more VRAM is good to have)
	- Ubuntu OS or Windows Subsystem Linux
- Usecases: image, video, text, tabular, document/webpage, user/item profile, multi-modality`
		},
		{
			type: 0,

			title: 'Prerequisite',

			image: 'https://i.imgur.com/uAfO3SL.jpeg',

			background: false,

			hidden: false,

			description: `At least 1 year of experience in using Python in works (self-works / company works)
- Writen OOP code
- Basic Backend understanding

Familiar with:
1. Numpy
	- Tensor operations
4. OpenCV / Pillow
	- Image operations
4. Simple Machine Learning concepts, such as:
	- Similarity measure
	- K-Means
	- K-NN

Optional: participant could include self-projects or related certificates to prove their capabilities.`
		},
		{
			type: 0,

			title: 'Learning Outcomes',

			image: 'https://i.imgur.com/uAfO3SL.jpeg',

			background: false,

			hidden: false,

			description: `By the end of this course, learners will be able to:
1. **Understand the Core Concepts**: Gain a solid grasp of the underlying algorithms and techniques used in image similarity search, including feature extraction, dimensionality reduction, distance metrics and vector search.
2. **Implement MVPs (minimum viable products) using Pretrained Models**: Develop practical skills in implementing image similarity search solutions by utilizing pretrained models. This will include learning how to integrate these models into their systems, customize them for specific tasks, and optimize them for better performance.`
		},
		{
			type: 0,

			title: "Skills you'll practice",

			image: 'https://i.imgur.com/uAfO3SL.jpeg',

			background: false,

			hidden: false,

			description: `\`Python Programming\` \`OOP\` \`Deep Learning Inference\` \`Docker\``
		},
		{
			type: 0,

			title: 'Who should join?',

			image: 'https://i.imgur.com/uAfO3SL.jpeg',

			background: false,

			hidden: false,

			description: `- New AI Learner
- Students that already completed CoTAI's PythonAI & MC4AI
- Software Engineers who want to leverage their knowledge in AI`
		}
	],

	curriculum: [
		{
			title: 'Essential Concepts Recap',

			hidden: false,

			'classes-countable': true,
			details: {
				hidden: false,

				content: `- Vector & Matrix
- Feature
- Tensor operations with \`numpy\` \`torch\`
- Similarity / Distance metrics
- Image operations with \`OpenCV\` \`Pillow\``
			}
		},
		{
			title: 'Introduction to Search & Retrieval',

			hidden: false,

			'classes-countable': true,

			details: {
				hidden: false,

				content: `- The concept behind Search & Retrieval
- Applications of Search & Retrieval`
			}
		},
		{
			title: 'Search & Retrieval approaches (1)',

			hidden: false,

			'classes-countable': true,

			details: {
				hidden: false,

				content: `Traditional approaches:
- Hashing methods
- Locally Sensitive Hasing methods 
- Feature Descriptors`
			}
		},
		{
			title: 'Search & Retrieval approaches (2)',

			hidden: false,

			'classes-countable': true,

			details: {
				hidden: false,

				content: `Feature Extraction with Deep Learning`
			}
		},
		{
			title: 'DataLoader',

			hidden: false,

			'classes-countable': true,

			details: {
				hidden: false,

				content: `Faster data pipeline with \`DataLoader\``
			}
		},
		{
			title: 'Introduction to Vector Search (1)',

			hidden: false,

			'classes-countable': true,

			details: {
				hidden: false,

				content: `K-Means vs. K-NN`
			}
		},
		{
			title: 'Speed up your Deep Learning Model',

			hidden: false,

			'classes-countable': true,

			details: {
				hidden: false,

				content: `- Accelerate your model inference speed with ONNX Runtime.
- Batch Processing`
			}
		},
		{
			title: 'Milestone 1',

			hidden: false,

			'classes-countable': true,

			details: {
				hidden: false,

				content: `Implement an Image Deduplication System by applying the knowledge you've acquired up to this point`
			}
		},
		{
			title: 'Search & Retrieval approaches (3)',

			hidden: false,

			'classes-countable': true,

			details: {
				hidden: false,

				content: `Leverage your knowledge by examining the solutions that ranked 1st, 2nd, and 3rd in the Meta Image Similarity Contest`
			}
		},
		{
			title: 'Search & Retrieval approaches (4)',

			hidden: false,

			'classes-countable': true,

			details: {
				hidden: false,

				content: `Computer Vision Foundation Models`
			}
		},
		{
			title: 'Introduction to Vector Search (2)',

			hidden: false,

			'classes-countable': true,

			details: {
				hidden: false,

				content: `Vector Database vs. Vector Search Library`
			}
		},
		{
			title: 'Design an Inference System',

			hidden: false,

			'classes-countable': true,

			details: {
				hidden: false,

				content: `- GRPC
- Triton Inference Server
- Docker`
			}
		},
		{
			title: 'Reflection',

			hidden: false,

			'classes-countable': true,

			details: {
				hidden: false,

				content: `The end is near. Before tackling Capstone Project, we will walkthrough the whole course again.`
			}
		},
		{
			title: 'Capstone Project',

			hidden: false,

			'classes-countable': true,

			details: {
				hidden: false,

				content: `Extend your work from Milestone 1`
			}
		}
	]
};

console.log(JSON.stringify(course));
