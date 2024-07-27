import { getLocale } from "next-intl/server";
import Header from "../../../../components/Header/header";
export default async function ServicesLayout({ children }) {
    const locale = await getLocale();
    return (
        <div>
            <Header params={locale} />
            {children}
        </div>
    );
}


