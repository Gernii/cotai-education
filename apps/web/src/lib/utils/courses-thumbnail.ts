import CourseThumbnailMathCodeAIPicture from "$lib/assets/images/course-thumbnail-math-code-ai.jpg?imagetools";
import CourseThumbnailPythonAIPicture from "$lib/assets/images/course-thumbnail-python-ai.jpg?imagetools";
import CourseThumbnailDefaultPicture from "$lib/assets/images/course-thumbnail-default.png?imagetools";
import CourseThumbnailDeepLearingPicture from "$lib/assets/images/course-thumbnail-deep-learning.jpg?imagetools";
import CourseThumbnailMachineLearingPicture from "$lib/assets/images/course-thumbnail-machine-learing.jpg?imagetools";

import { coursesIdDeprecated, type CourseIdDeprecated } from "./constants";
import { coursesList, type CourseId } from "$lib/datas/courses/healpers";

export const coursesThumbnailDeprecated = (id: CourseIdDeprecated) => {
    const thumbnails = new Map<string, ImgMeta[] | ImgMeta>([
        [coursesIdDeprecated[1], CourseThumbnailDeepLearingPicture],
        [coursesIdDeprecated[2], CourseThumbnailPythonAIPicture],
        [coursesIdDeprecated[3], CourseThumbnailMathCodeAIPicture],
        [coursesIdDeprecated[4], CourseThumbnailMachineLearingPicture],
    ]);

    const img = thumbnails.get(id) ?? CourseThumbnailDefaultPicture;

    return Array.isArray(img) ? img : [img];
};

export const coursesThumbnail = (id: CourseId) => {
    const thumbnails = new Map<string, ImgMeta[] | ImgMeta>([
        [coursesList[0], CourseThumbnailPythonAIPicture],
        [coursesList[1], CourseThumbnailMathCodeAIPicture],
        [coursesList[2], CourseThumbnailMachineLearingPicture],
        [coursesList[3], CourseThumbnailDeepLearingPicture],
    ]);

    const img = thumbnails.get(id) ?? CourseThumbnailDefaultPicture;

    return Array.isArray(img) ? img : [img];
};
