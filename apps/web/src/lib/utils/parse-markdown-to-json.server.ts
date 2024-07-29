import MarkdownIt from "markdown-it";
import type MarkdownItContainer from "markdown-it-container";
import MarkdownContainer from "markdown-it-container";
// @ts-ignore
import MarkdownMark from "markdown-it-mark";
// @ts-ignore
import MarkdownMergeCell from "markdown-it-merge-cells";
import MarkdownMathJax from "markdown-it-mathjax3";
import type Renderer from "markdown-it/lib/renderer";
import type Token from "markdown-it/lib/token";
import { cx } from "cva";

function renderContainer(
    tokens: Token[],
    idx: number,
    _options: MarkdownIt.Options,
    _env: unknown,
    self: Renderer,
) {
    tokens[idx].attrJoin("role", "alert");
    tokens[idx].attrJoin("class", "alert");
    tokens[idx].attrJoin("class", `alert-${tokens[idx].info.trim()}`);

    // eslint-disable-next-line prefer-rest-params
    // biome-ignore lint/style/noArguments: <explanation>
    return self.renderToken(...(arguments as unknown as Parameters<typeof self.renderToken>));
}

export const parseMarkdownToHTML = (markdown: string) => {
    const md = new MarkdownIt({ html: true, linkify: true, typographer: true })
        .use(MarkdownMathJax)
        .use(MarkdownMark);

    md.use(MarkdownContainer, "success", {
        render: renderContainer,
    } as MarkdownItContainer.ContainerOpts);
    md.use(MarkdownContainer, "info", { render: renderContainer });
    md.use(MarkdownContainer, "warning", { render: renderContainer });
    md.use(MarkdownContainer, "danger", { render: renderContainer });

    md.renderer.rules.table_open = (tokens, i) => {
        const token = tokens[i];
        const className = cx("overflow-x-auto rounded-box border border-base-300");
        return `<div class="${className}"><${token.tag} class="min-w-96 my-0">`;
    };

    md.renderer.rules.table_close = (tokens, i) => {
        const token = tokens[i];

        return `</${token.tag}></div>`;
    };

    md.renderer.rules.link_open = (tokens, i) => {
        const token = tokens[i];
        const href = token.attrGet("href");
        return `<${token.tag} href="${href}" target="_blank" rel="noopener" class="link not-prose">`;
    };

    md.use(MarkdownMergeCell);

    let myResult = md.render(markdown);
    const myResultUlSplit = myResult.split("<ul>");
    myResult = myResultUlSplit.join('<ul class="list-disc markdown-list">');

    return myResult;
};
