'use client';
import { useRouter, usePathname } from 'next/navigation';
import styles from "./localSwitcher.module.css"
import { GlobeAltIcon } from '@heroicons/react/24/outline'
import DialogSheet from './../dialog/dialog';
import CustomButton from '../button/button';
import { useTranslations } from 'next-intl';
function LocaleSwitcher({ className }) {
    const router = useRouter();
    const pathname = usePathname();


    const t = useTranslations("changeLang");

    const changeHandler = (locale) => {
        const nextLocale = locale;
        const segments = pathname.split('/').filter(Boolean);

        // Replace the first segment with the next locale
        segments[0] = nextLocale;
        const newPathname = `/${segments.join('/')}`;
        router.replace(newPathname);
    };

    return (
        < DialogSheet dialogTrigger={<GlobeAltIcon className={` ${styles.icon} ${className}`} />}>
            <h2 className={styles.text}>{t("title")}</h2>
            <p>{t("desc")}</p>
            <CustomButton onClick={() => { changeHandler("en") }} >{t("Btnen")}</CustomButton>
            <CustomButton onClick={() => { changeHandler("ar") }} >{t("Btnar")}</CustomButton>
        </DialogSheet>
    );
};

export default LocaleSwitcher;