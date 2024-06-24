import type { PagesResponse } from "@repo/types-bridge";

import type { CourseProps } from "$lib/pages/admin/courses/types";

export const load = () => {
    const courses = async (): Promise<PagesResponse<CourseProps>> => {
        return {
            data: [
                {
                    id: "1",
                    title: "Title 1",
                    thumbnail: "https://picsum.photos/200/300",
                },
                {
                    id: "2",
                    title: "Title 2",
                    thumbnail: "https://picsum.photos/200/300",
                },
                {
                    id: "3",
                    title: "Title 3",
                    thumbnail: "https://picsum.photos/200/300",
                },
                {
                    id: "4",
                    title: "Title 4",
                    thumbnail: "https://picsum.photos/200/300",
                },
                {
                    id: "5",
                    title: "Title 5",
                    thumbnail: "https://picsum.photos/200/300",
                },
                {
                    id: "6",
                    title: "Title 6",
                    thumbnail: "https://picsum.photos/200/300",
                },
                {
                    id: "7",
                    title: "Title 7",
                    thumbnail: "https://picsum.photos/200/300",
                },
                {
                    id: "8",
                    title: "Title 8",
                    thumbnail: "https://picsum.photos/200/300",
                },
                {
                    id: "9",
                    title: "Title 9",
                    thumbnail: "https://picsum.photos/200/300",
                },
                {
                    id: "10",
                    title: "Title 10",
                    thumbnail: "https://picsum.photos/200/300",
                },
            ],
            current_page: 1,
            total_pages: 3,
        };
    };

    return {
        streamed: {
            courses: courses(),
        },
    };
};
