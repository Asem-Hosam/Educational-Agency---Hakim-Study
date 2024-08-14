"use client";
import React, { useEffect, useState } from 'react';
import styles from "./bottomNavbar.module.css";
import { UserCircleIcon, MagnifyingGlassIcon, HomeIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import CustomLink from '../customLink';
import { usePathname } from 'next/navigation';

function BottomNavbar() {
    const path = usePathname();
    const [isHidden, setIsHidden] = useState(false);
    const [hideTimeout, setHideTimeout] = useState(null);


    let lastScrollTop = 0;

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;

            if (scrollTop > 100) {
                if (!hideTimeout) {
                    const timeout = setTimeout(() => {
                        setIsHidden(true);
                    }, 1500);
                    setHideTimeout(timeout);
                }
                if (scrollTop < lastScrollTop) {
                    clearTimeout(hideTimeout);
                    setHideTimeout(null);
                    setIsHidden(false);
                }
            } else {
                if (hideTimeout) {
                    clearTimeout(hideTimeout);
                    setHideTimeout(null);
                }
                setIsHidden(false);
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (hideTimeout) {
                clearTimeout(hideTimeout);
            }
        };
    }, [hideTimeout]);

    const links = [
        { href: "/", icon: <HomeIcon className={styles.icon} />, label: "Home" },
        { href: "/explore/universities", icon: <MagnifyingGlassIcon className={styles.icon} />, label: "Explore" },
        { href: "/application", icon: <PaperAirplaneIcon className={styles.icon} />, label: "Application" },
        { href: "/profile", icon: <UserCircleIcon className={styles.icon} />, label: "Profile" },
    ];

    const isActive = (linkHref) => {
        const pathWithoutLocale = path.replace(/^\/(en|ar)/, '');

        if (linkHref === '/') {
            return pathWithoutLocale === '/' || pathWithoutLocale === '';
        } else if (linkHref.startsWith('/explore')) {
            return pathWithoutLocale.startsWith('/explore');
        } else {
            return pathWithoutLocale === linkHref;
        }
    };

    return (
        <div className={`${styles.bottomNavabarContainer} ${isHidden ? styles.hidden : ''}`}>
            {links.map((link) => (
                <CustomLink
                    key={link.href}
                    href={link.href}
                    className={`${styles.link} ${isActive(link.href) ? styles.active : ''}`}
                >
                    <span>
                        {link.icon}
                        <p>{link.label}</p>
                    </span>
                </CustomLink>
            ))}
        </div>
    );
}

export default BottomNavbar;
