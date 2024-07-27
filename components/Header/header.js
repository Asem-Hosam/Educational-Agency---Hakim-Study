import styles from "./header.module.css"
import logo from "@/../assets/logo.png"
import { getTranslations } from 'next-intl/server';
import LocaleSwitcher from "../localswitcher/localSwitcher";
import { UserCircleIcon, LanguageIcon } from '@heroicons/react/24/outline'
import CustomImage from './../customImage';
import CustomLink from './../customLink';





async function Header({ params: locale }) {
    const t = await getTranslations('Header');



    const currentLocale = locale;

    const links = [
        { href: "/", label: t("Home") },
        { href: "/explore/universities", label: t("Universities") },
        { href: "/services", label: t("Services") },
        { href: "/about", label: t("AboutUs") },
    ];


    return (
        <div className={locale == "ar" ? styles.containerar : styles.containeren}>
            <div className={styles.logo}>
                <CustomImage src={logo.src} width={500} height={500} className={styles.image} alt={"logo"} />
            </div>
            <div className={styles.hlinks}>
                {links.map((link, index) => (
                    <CustomLink key={index} href={link.href}>
                        {link.label}
                    </CustomLink>
                ))}
            </div>
            <div className={styles.opContainer}>
                <div className={styles.langIcon}>
                    <div className={styles.wrapperChange}>
                        <LanguageIcon className={styles.iconChange} />
                        <p>{currentLocale}</p>
                    </div>
                    <div className={styles.controllers}>
                        <LocaleSwitcher />
                    </div>
                </div>
                <div className={styles.btnCon}>
                    <UserCircleIcon className={styles.authIcon} />
                </div>
            </div>
        </div >
    )
}

export default Header;;