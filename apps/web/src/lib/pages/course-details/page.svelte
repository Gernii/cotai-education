<script lang="ts">
    import Components from "./components.svelte";
    import { Curriculum } from "./curriculum";
    import { ExperienceRequirement } from "./experience-requirement";
    import { WhoShouldJoin } from "./who-should-join";
    import { Hero } from "./hero";
    import { LearningOutcomes } from "./learning-outcomes";
    import { NextCourse } from "./next-course";
    import { OtherCourses } from "./other-courses";
    import { FAQ } from "./fag";

    import { RegisterGuide } from "$lib/features/register-guide";
    import { RegisterForm } from "$lib/features/register-form";
    import { Reviews } from "$lib/features/reviews";
    import { TeachersBio } from "$lib/features/teachers-bio";
</script>

<Hero />
<WhoShouldJoin />
<ExperienceRequirement />
<LearningOutcomes />
<Components />
<Curriculum />
<NextCourse />
<OtherCourses />
<Reviews />
<TeachersBio />
<FAQ />
<RegisterGuide />
<RegisterForm />
