export enum FAQShowLocation {
    course = "course",
}

export interface FAQProps {
    title?: string;
    content?: string;
    show?: FAQShowLocation[];
}
