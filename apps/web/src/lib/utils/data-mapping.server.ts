import type {
	ComponentDataProps,
	ComponentDataResponseProps
} from '$lib/components/ui/component-data';

import { parseMarkdownToHTML } from './parse-markdown-to-json.server';
import type {
	CourseProps,
	CourseResponseProps,
	CurriculumProps,
	CurriculumResponseProps,
	ProgramProps,
	ProgramResponseProps
} from './types/data';

export const courseMappingData = (course: CourseResponseProps): CourseProps => {
	const mappedCourse: CourseProps = {
		...course,
		registerUrl: course['register-url'],
		curriculum: course.curriculum.map((curriculum) => curriculumMappingData(curriculum)),
		description: course.description ? parseMarkdownToHTML(course.description) : undefined,
		components: course.components.map((component) => componentDataMappingData(component))
	};

	return mappedCourse;
};

export const curriculumMappingData = (curriculum: CurriculumResponseProps): CurriculumProps => {
	const curriculumDetails: CurriculumProps['details'] = curriculum.details
		? {
				hidden: curriculum.details.hidden,
				content: curriculum.details.content
					? parseMarkdownToHTML(curriculum.details.content)
					: undefined
			}
		: undefined;

	const mappedCurriculum: CurriculumProps = {
		classesCountable: curriculum['classes-countable'],
		hidden: curriculum.hidden,
		title: curriculum.title,
		details: curriculumDetails
	};

	return mappedCurriculum;
};

export const programMappingData = (program: ProgramResponseProps): ProgramProps => {
	const mappedProgram = {
		...program,
		coursesHighlighted: program['courses-highlighted'],
		coursesRoadmap: program['courses-roadmap'],
		components: program.components.map((component) => componentDataMappingData(component))
	};

	return mappedProgram;
};

export const componentDataMappingData = (
	componentData: ComponentDataResponseProps
): ComponentDataProps => {
	const mappedComponentData: ComponentDataProps = {
		type: componentData.type,
		title: componentData.title,
		image: componentData.image,
		background: componentData.background,
		hidden: componentData.hidden,
		description: componentData.description
			? parseMarkdownToHTML(componentData.description)
			: undefined
	};

	return mappedComponentData;
};
