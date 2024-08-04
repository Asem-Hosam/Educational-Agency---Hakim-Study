"use client"
import styles from "./header.module.css"
import logo from "@/../assets/logo.png"
import { useTranslations } from "next-intl";
import LocaleSwitcher from "../localswitcher/localSwitcher";
import { UserCircleIcon, LanguageIcon } from '@heroicons/react/24/outline'
import CustomImage from './../customImage';
import CustomLink from './../customLink';
import { useEffect, useState } from 'react';





function Header({ params: locale }) {

    const t = useTranslations('Header');
    const [scrollPosition, setScrollPosition] = useState(0);
    const currentLocale = locale;

    const links = [
        { href: "/", label: t("Home") },
        { href: "/explore/universities", label: t("Universities") },
        { href: "/services", label: t("Services") },
        { href: "/about", label: t("AboutUs") },
    ];


    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const containerStyle = {
        top: scrollPosition > 50 ? '10px' : '50px',
    };

    return (
        <div className={styles.container} style={containerStyle}>
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
                <LocaleSwitcher />
                <div className={styles.btnCon}>
                    <UserCircleIcon className={styles.authIcon} />
                </div>
            </div>
        </div>
    );
}

export default Header;;