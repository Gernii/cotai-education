<script lang="ts">
    import { page } from "$app/stores";

    import Components from "./components.svelte";
    import { Curriculum } from "./curriculum";
    import { ExperienceRequirement } from "./experience-requirement";
    import { WhoShouldJoin } from "./who-should-join";
    import { Hero } from "./hero";
    import { LearningOutcomes } from "./learning-outcomes";
    import { OtherCourses } from "./other-courses";
    import { FAQ } from "./fag";
    import { Certs } from "./certs";

    import { RegisterGuide } from "$lib/features/register-guide";
    import { RegisterForm } from "$lib/features/register-form";
    import { Reviews } from "$lib/features/reviews";
    import { TeachersBio } from "$lib/features/teachers-bio";
    import { RegisterEnd } from "$lib/features/register-end";
    import type { StudentProjectProps } from "$lib/datas/student-projects/types";
    import { StudentProjects } from "$lib/features/student-projects";

    $: studentProjects = $page.data.studentProjects as StudentProjectProps[];
</script>

<Hero />
<WhoShouldJoin />
<ExperienceRequirement />
<LearningOutcomes />
<Components />
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
