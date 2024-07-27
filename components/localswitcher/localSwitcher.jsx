'use client';
import { useRouter, usePathname } from 'next/navigation';
import styles from "./localSwitcher.module.css"

function LocaleSwitcher() {
    const router = useRouter();
    const pathname = usePathname();

    const changeHandler = (locale) => {
        const nextLocale = locale;
        const segments = pathname.split('/').filter(Boolean);

        // Replace the first segment with the next locale
        segments[0] = nextLocale;
        const newPathname = `/${segments.join('/')}`;
        router.replace(newPathname);
    };

    return (
        <div className={styles.btnCon} >
            <button value="en" onClick={() => { changeHandler("en") }} >en</button>
            <button value="ar" onClick={() => { changeHandler("ar") }}>ar</button>
        </div>
    );
};

export default LocaleSwitcher;