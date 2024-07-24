import CourseThumbnailMC4AIPicture from "$lib/assets/images/course-thumbnail/mc4ai.jpg?imagetools";
import CourseThumbnailPythonAIPicture from "$lib/assets/images/course-thumbnail/pythonai.jpg?imagetools";
import CourseThumbnailDefaultPicture from "$lib/assets/images/course-thumbnail-default.png?imagetools";
import CourseThumbnailDL4CVPicture from "$lib/assets/images/course-thumbnail/dl4cv.jpg?imagetools";
import CourseThumbnailDL4NLPPicture from "$lib/assets/images/course-thumbnail/dl4nlp.jpg?imagetools";
import CourseThumbnailML4AIPicture from "$lib/assets/images/course-thumbnail/ml4ai.jpg?imagetools";
import CourseBlurThumbnailMC4AIPicture from "$lib/assets/images/course-thumbnail/mc4ai.jpg?lqip";
import CourseBlurThumbnailPythonAIPicture from "$lib/assets/images/course-thumbnail/pythonai.jpg?lqip";
import CourseBlurThumbnailDefaultPicture from "$lib/assets/images/course-thumbnail-default.png?lqip";
import CourseBlurThumbnailDL4CVPicture from "$lib/assets/images/course-thumbnail/dl4cv.jpg?lqip";
import CourseBlurThumbnailDL4NLPPicture from "$lib/assets/images/course-thumbnail/dl4nlp.jpg?lqip";
import CourseBlurThumbnailML4AIPicture from "$lib/assets/images/course-thumbnail/ml4ai.jpg?lqip";

import { coursesIdDeprecated, type CourseIdDeprecated } from "./constants";
import { CourseIds } from "$lib/datas/courses/constants";

// TODO: Remove deprecated
export const coursesThumbnailDeprecated = (id: CourseIdDeprecated) => {
    const thumbnails = new Map<string, ImgMeta[] | ImgMeta>([
        [coursesIdDeprecated[1], CourseThumbnailDL4CVPicture],
        [coursesIdDeprecated[2], CourseThumbnailPythonAIPicture],
        [coursesIdDeprecated[3], CourseThumbnailMC4AIPicture],
        [coursesIdDeprecated[4], CourseThumbnailML4AIPicture],
    ]);

    const img = thumbnails.get(id) ?? CourseThumbnailDefaultPicture;

    return Array.isArray(img) ? img : [img];
};

const thumbnails = new Map<string, ImgMeta[] | ImgMeta>([
    [CourseIds.pythonai, CourseThumbnailPythonAIPicture],
    [CourseIds.mc4ai, CourseThumbnailMC4AIPicture],
    [CourseIds.ml4ai, CourseThumbnailML4AIPicture],
    [CourseIds.dl4cv, CourseThumbnailDL4CVPicture],
    [CourseIds.dl4nlp, CourseThumbnailDL4NLPPicture],
]);

export const coursesThumbnail = (id: CourseIds) => {
    const img = thumbnails.get(id) ?? CourseThumbnailDefaultPicture;

    return Array.isArray(img) ? img : [img];
};

const blurThumbnails = new Map<string, ImgBlur>([
    [CourseIds.pythonai, CourseBlurThumbnailPythonAIPicture],
    [CourseIds.mc4ai, CourseBlurThumbnailMC4AIPicture],
    [CourseIds.ml4ai, CourseBlurThumbnailML4AIPicture],
    [CourseIds.dl4cv, CourseBlurThumbnailDL4CVPicture],
    [CourseIds.dl4nlp, CourseBlurThumbnailDL4NLPPicture],
]);

export const coursesBlurThumbnail = (id: CourseIds) => {
    const img = blurThumbnails.get(id) ?? CourseBlurThumbnailDefaultPicture;

    return img;
};
