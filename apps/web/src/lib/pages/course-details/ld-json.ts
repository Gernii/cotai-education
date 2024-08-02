import { PUBLIC_HOSTNAME } from "$env/static/public";
import { getSkillName } from "$lib/features/skill-icons";
import { routerPath } from "$lib/utils/constants";
import type { CourseDetailsPageDataProps } from "./types";
import CertDefaltTemplate from "$lib/assets/images/certs/template.jpg?imagetools";
import * as m from "$i18n/messages";
import type { Thing, WithContext } from "schema-dts";

export const getCourseLdJson = (
    course: CourseDetailsPageDataProps,
    images: string[],
): WithContext<Thing> => {
    const skillsName = course.skills.reduce((prev, skill) => {
        const skillName = getSkillName(skill);
        if (skillName) {
            prev.push(skillName);
        }

        return prev;
    }, [] as string[]);
    return {
        "@context": "https://schema.org",
        "@id": `${PUBLIC_HOSTNAME}${routerPath.courseId(course.id)}`,
        "@type": "Course",
        name: course.title,
        url: `${PUBLIC_HOSTNAME}${routerPath.courseId(course.id)}`,
        description: course.descriptionRaw,
        publisher: {
            "@type": "Organization",
            name: m.siteName(),
            url: PUBLIC_HOSTNAME,
        },
        provider: {
            "@type": "Organization",
            name: m.siteName(),
            url: PUBLIC_HOSTNAME,
        },
        image: images,
        ...(course.price && {
            offers: [
                {
                    "@type": "Offer",
                    category: "Paid",
                    priceCurrency: "VND",
                    price: course.price,
                },
            ],
        }),
        // totalHistoricalEnrollment: 12345,
        // datePublished: "2024-03-21",
        // educationalLevel: "Advanced",
        about: skillsName,
        teaches: course.learningOutcomes,
        // financialAidEligible: "Scholarship Available",
        // availableLanguage: ["vie"],
        inLanguage: "vi",
        // syllabusSections: [
        //     {
        //         "@type": "Syllabus",
        //         name: "Memory Allocation",
        //         description:
        //             "Learn how memory is allocated when creating C++ variables.",
        //         timeRequired: "PT6H",
        //     },
        //     {
        //         "@type": "Syllabus",
        //         name: "C++ Pointers",
        //         description:
        //             "Learn what a C++ pointer is and when they are used.",
        //         timeRequired: "PT11H",
        //     },
        // ],

        // coursePrerequisites: [
        //     "Basic understanding of C++ up to arrays and functions.",
        //     "https://www.example.com/beginnerCpp",
        // ],
        educationalCredentialAwarded: [
            {
                "@type": "EducationalOccupationalCredential",
                name: m.sunny_formal_kitten_tickle({ name: course.title }),
                url: `${PUBLIC_HOSTNAME}${(CertDefaltTemplate as ImgMeta).img.src}`,
                credentialCategory: "Certificate",
                offers: [
                    {
                        "@type": "Offer",
                        category: "Free",
                    },
                ],
            },
        ],
        // video: {
        //     "@type": "VideoObject",
        //     name: "Video name",
        //     description: "A video previewing this course.",
        //     uploadDate: "2024-03-28T08:00:00+08:00",
        //     contentUrl: "www.example.come/mp4",
        //     thumbnailUrl: "www.example.com/thumbnailurl.jpg",
        // },
        hasCourseInstance: [
            {
                // Online self-paced course that takes 2 days to complete.
                "@type": "CourseInstance",
                courseMode: "Online",
                courseWorkload: "P1M",
                name: course.title,
            },
        ],
    };
};
