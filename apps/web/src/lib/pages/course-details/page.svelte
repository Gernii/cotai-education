<script lang="ts">
    import { page } from "$app/stores";

    import { Curriculum } from "./curriculum";
    import { WhoShouldJoin } from "./who-should-join";
    import { OtherCourses } from "./other-courses";
    import { FAQ } from "./fag";
    import { Certs } from "./certs";
    import { Hero } from "./hero";
    import { CourseUnique } from "./course-unique";

    import { RegisterGuide } from "$lib/features/register-guide";
    import { RegisterForm } from "$lib/features/register-form";
    import { Reviews } from "$lib/features/reviews";
    import { TeachersBio } from "$lib/features/teachers-bio";
    import { RegisterEnd } from "$lib/features/register-end";
    import type { StudentProjectProps } from "$lib/datas/student-projects/types";
    import { StudentProjects } from "$lib/features/student-projects";
    import type { DataCourseUnique } from "$lib/datas/course-unique/types";
    $: studentProjects = $page.data.studentProjects as StudentProjectProps[];
    $: courseUnique = $page.data.courseUnique as DataCourseUnique;
</script>

<Hero />
<CourseUnique {courseUnique} />
<WhoShouldJoin />
<!-- <ExperienceRequirement /> -->
<!-- <LearningOutcomes /> -->
<!-- <Components /> -->
<Curriculum />
<Certs />

<StudentProjects projects={studentProjects} />

<OtherCourses />

<Reviews />
<TeachersBio />

<FAQ />

<RegisterGuide />
<RegisterForm />
<RegisterEnd />
