import MarkdownIt from 'markdown-it';
import type MarkdownItContainer from 'markdown-it-container';
import MarkdownContainer from 'markdown-it-container';
// @ts-ignore
import MarkdownMark from 'markdown-it-mark';
import MarkdownMathJax from 'markdown-it-mathjax3';
import type Renderer from 'markdown-it/lib/renderer';
import type Token from 'markdown-it/lib/token';

function renderContainer(
	tokens: Token[],
	idx: number,
	_options: MarkdownIt.Options,
	_env: unknown,
	self: Renderer
) {
	tokens[idx].attrJoin('role', 'alert');
	tokens[idx].attrJoin('class', 'alert');
	tokens[idx].attrJoin('class', `alert-${tokens[idx].info.trim()}`);

	// eslint-disable-next-line prefer-rest-params
	return self.renderToken(...(arguments as unknown as Parameters<typeof self.renderToken>));
}

export const parseMarkdownToHTML = (markdown: string) => {
	const md = new MarkdownIt().use(MarkdownMathJax).use(MarkdownMark);

	md.use(MarkdownContainer, 'success', {
		render: renderContainer
	} as MarkdownItContainer.ContainerOpts);
	md.use(MarkdownContainer, 'info', { render: renderContainer });
	md.use(MarkdownContainer, 'warning', { render: renderContainer });
	md.use(MarkdownContainer, 'danger', { render: renderContainer });

	let myResult = md.render(markdown);
	const myResultUlSplit = myResult.split('<ul>');
	myResult = myResultUlSplit.join('<ul class="list-disc markdown-list">');

	return myResult;
};
