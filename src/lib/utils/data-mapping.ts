import type {
	CourseProps,
	CourseResponseProps,
	CurriculumProps,
	CurriculumResponseProps,
	ProgramProps,
	ProgramResponseProps
} from './types/data';

export const courseMappingData = (course: CourseResponseProps): CourseProps => {
	const mappedCourse = {
		...course,
		registerUrl: course['register-url'],
		curriculum: course.curriculum.map((curriculum) => curriculumMappingData(curriculum))
	};

	return mappedCourse;
};

export const curriculumMappingData = (curriculum: CurriculumResponseProps): CurriculumProps => {
	const mappedCurriculum = {
		...curriculum,
		classesCountable: curriculum['classes-countable']
	};

	return mappedCurriculum;
};

export const programMappingData = (program: ProgramResponseProps): ProgramProps => {
	const mappedProgram = {
		...program,
		coursesHighlighted: program['courses-highlighted'],
		coursesRoadmap: program['courses-roadmap']
	};

	return mappedProgram;
};
