import type { CourseIds } from "../courses/constants";

export interface ReviewProps {
    avatar?: ImgMeta | ImgMeta[];
    className: CourseIds;
    year: number;
    name: string;
    review: string;
}
