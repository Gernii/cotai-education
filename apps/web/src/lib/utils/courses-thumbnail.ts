import CourseThumbnailMathCodeAIPicture from '$lib/assets/images/course-thumbnail-math-code-ai.jpg?imagetools';
import CourseThumbnailPythonAIPicture from '$lib/assets/images/course-thumbnail-python-ai.jpg?imagetools';
import CourseThumbnailDefaultPicture from '$lib/assets/images/course-thumbnail-default.png?imagetools';
import CourseThumbnailDeepLearingPicture from '$lib/assets/images/course-thumbnail-deep-learning.jpg?imagetools';
import CourseThumbnailMachineLearingPicture from '$lib/assets/images/course-thumbnail-machine-learing.jpg?imagetools';

import { coursesId, type CourseId } from './constants';

export const coursesThumbnail = (id: CourseId) => {
	const thumbnails = new Map<string, ImgMeta[] | ImgMeta>([
		[coursesId[1], CourseThumbnailDeepLearingPicture],
		[coursesId[2], CourseThumbnailPythonAIPicture],
		[coursesId[3], CourseThumbnailMathCodeAIPicture],
		[coursesId[4], CourseThumbnailMachineLearingPicture]
	]);

	const img = thumbnails.get(id) ?? CourseThumbnailDefaultPicture;

	return !(img instanceof Array) ? [img] : img;
};
