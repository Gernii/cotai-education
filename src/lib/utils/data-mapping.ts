import type {
	CourseProps,
	CourseResponsesProps,
	CurriculumProps,
	CurriculumResponsesProps,
	ProgramProps,
	ProgramResponsesProps
} from './types/data';

export const courseMappingData = (course: CourseResponsesProps): CourseProps => {
	const mappedCourse = {
		...course,
		registerUrl: course['register-url'],
		curriculum: course.curriculum.map((curriculum) => curriculumMappingData(curriculum))
	};

	return mappedCourse;
};

export const curriculumMappingData = (curriculum: CurriculumResponsesProps): CurriculumProps => {
	const mappedCurriculum = {
		...curriculum,
		classesCountable: curriculum['classes-countable']
	};

	return mappedCurriculum;
};

export const programMappingData = (program: ProgramResponsesProps): ProgramProps => {
	const mappedProgram = {
		...program,
		coursesHighlighted: program['courses-highlighted'],
		coursesRoadmap: program['courses-roadmap']
	};

	return mappedProgram;
};
