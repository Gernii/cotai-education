<script lang="ts">
	interface $$Props {
		text?: string;
	}

	export let text: $$Props['text'] = undefined;
</script>

<article class="prose">
	{@html text}
</article>
