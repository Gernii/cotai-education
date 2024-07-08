<script lang="ts">
    import Components from "./components.svelte";
    import { Curriculum } from "./curriculum";
    import { ExperienceRequirement } from "./experience-requirement";
    import { WhoShouldJoin } from "./who-should-join";
    import Hero from "./hero.svelte";
    import { LearningOutcomes } from "./learning-outcomes";
    import { NextCourse } from "./next-course";

    import { RegisterGuide } from "$lib/features/register-guide";
    import { RegisterForm } from "$lib/features/register-form";
</script>

<Hero />
<WhoShouldJoin />
<ExperienceRequirement />
<LearningOutcomes />
<Components />
<Curriculum />
<NextCourse />

<RegisterGuide />
<RegisterForm />
