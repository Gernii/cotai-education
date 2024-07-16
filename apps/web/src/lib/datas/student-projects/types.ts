export interface StudentProjectProps {
    id: string;
    title: string;
    description?: string;
    className: string;
    members: string[];
    externalLinks?: StudentProjectProps_ExternalLinks[];
    demoId?: string;
}

export interface StudentProjectProps_ExternalLinks {
    title?: string;
    url?: string;
}
