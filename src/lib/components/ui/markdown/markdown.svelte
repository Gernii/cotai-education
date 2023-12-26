<script lang="ts">
	import { parseMarkdownToHTML } from '$lib/utils/parse-markdown-to-json';

	interface $$Props {
		text?: string;
	}

	export let text: $$Props['text'] = undefined;

	$: htmlText = text ? parseMarkdownToHTML(text) : null;
</script>

<article class="prose">
	{@html htmlText}
</article>
