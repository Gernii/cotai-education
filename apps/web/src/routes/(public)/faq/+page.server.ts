import { dataFAQs } from "$lib/datas/faq/faq.server";

export const load = () => {
    const faqs = dataFAQs();

    return {
        faqs,
    };
};
