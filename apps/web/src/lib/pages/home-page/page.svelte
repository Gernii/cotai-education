<script lang="ts">
    import { page } from "$app/stores";

    import { Hero } from "./hero";
    import { Roadmap } from "./roadmap";
    import { CAMDifference } from "./cam-difference";

    import { RegisterGuide } from "$lib/features/register-guide";
    import { RegisterForm } from "$lib/features/register-form";
    import { Reviews } from "$lib/features/reviews";
    import { TeachersBio } from "$lib/features/teachers-bio";
    import { RegisterEnd } from "$lib/features/register-end";
    import { StudentProjects } from "$lib/features/student-projects";
    import type { StudentProjectProps } from "$lib/datas/student-projects/types";

    $: studentProjects = $page.data.studentProjects as StudentProjectProps[];
</script>

<Hero />
<CAMDifference />
<!-- <HallOfFame /> -->
<!-- <WhoWeAre /> -->
<!-- <WhyChooseUs /> -->
<Roadmap />

<StudentProjects projects={studentProjects} />
<Reviews />
<TeachersBio />
<RegisterGuide />
<RegisterForm />
<RegisterEnd />
