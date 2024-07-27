import { getLocale } from "next-intl/server";
import Header from "../../../../components/Header/header";
export default async function AboutLayout({ children }) {
    const locale = await getLocale();
    return (
        <div>
            <Header params={locale} />
            {children}
        </div>
    );
}


