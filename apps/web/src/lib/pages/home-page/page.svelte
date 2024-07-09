<script lang="ts">
    import HallOfFame from "./hall-of-fame.svelte";
    import { Hero } from "./hero";
    import { Roadmap } from "./roadmap";
    import WhoWeAre from "./who-we-are.svelte";
    import { WhyChooseUs } from "./why-choose-us";

    import { RegisterGuide } from "$lib/features/register-guide";
    import { RegisterForm } from "$lib/features/register-form";
    import { Reviews } from "$lib/features/reviews";
    import { TeachersBio } from "$lib/features/teachers-bio";
</script>

<Hero />
<HallOfFame />
<WhoWeAre />
<WhyChooseUs />
<Roadmap />
<Reviews />
<TeachersBio />
<RegisterGuide />
<RegisterForm />
