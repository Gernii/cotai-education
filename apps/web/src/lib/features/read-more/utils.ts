import type { Writable } from "svelte/store";

interface GetMaxCharactersProps {
    maxCharacters?: number;
    isOpen?: boolean;
    children: string;
    text: Writable<string | undefined>;
}

export const getMaxCharacters = (props: GetMaxCharactersProps) => {
    const { maxCharacters, isOpen, children, text } = props;
    if (maxCharacters) {
        if (isOpen) {
            text?.set(children);
            return children;
        }

        const validatedText = children.substring(0, maxCharacters);
        text.set(validatedText);
        return validatedText;
    }
    return children;
};

export const isFullText = (truncatedText: string, text: string) => {
    return (
        truncatedText &&
        truncatedText.split("").filter((c) => c !== " ").length ===
            text.split("").filter((c) => c !== " ").length
    );
};

interface GetMaxWordsProps {
    maxWords?: number;
    isOpen?: boolean;
    children: string;
    text: Writable<string | undefined>;
}

export const getMaxWords = (props: GetMaxWordsProps) => {
    const { maxWords, isOpen, children, text } = props;
    if (maxWords) {
        if (isOpen) {
            text?.set(children);
            return children;
        }

        const words = children
            .split(" ")
            .filter((c) => c !== "")
            .slice(0, maxWords)
            .join(" ");
        text.set(words);
        return words;
    }
    return children;
};
