import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import deepmerge from 'deepmerge';

// Can be imported from a shared config
const locales = ['en', 'ar'];

export default getRequestConfig(async ({ locale }) => {

    if (!locales.includes(locale)) notFound();

    const localeMessages = (await import(`../messages/${locale}.json`)).default;
    const defultMessages = (await import(`../messages/en.json`)).default;
    const messages = deepmerge(defultMessages, localeMessages);

    return {
        messages: messages,
    };
});