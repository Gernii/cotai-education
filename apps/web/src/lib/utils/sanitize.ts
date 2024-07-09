export const sanitize = (hash: string): string => {
    return hash.replace(/[^A-Z0-9]/gi, "").toLowerCase();
};
