"use client"
import React, { useEffect, useState } from 'react';
import styles from "./bottomNavbar.module.css";
import { UserCircleIcon, MagnifyingGlassIcon, HomeIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import CustomLink from '../customLink';

function BottomNavbar() {
    const [isHidden, setIsHidden] = useState(false);
    const [active, setActive] = useState('/');

    useEffect(() => {
        let lastScrollTop = 0;
        const handleScroll = () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                setIsHidden(true);
            } else {
                setIsHidden(false);
            }
            lastScrollTop = scrollTop;
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleActive = (path) => {
        setActive(path);
    }

    return (
        <div className={`${styles.bottomNavabarContainer} ${isHidden ? styles.hidden : ''}`}>
            <CustomLink href="/" className={`${styles.explore} ${active === '/' ? styles.active : ''}`} onClick={() => handleActive('/')}>
                <span>
                    <HomeIcon className={styles.icon} />
                    <p>Home</p>
                </span>
            </CustomLink>
            <CustomLink href="/about" className={`${styles.user} ${active === '/about' ? styles.active : ''}`} onClick={() => handleActive('/about')}>
                <span>
                    <MagnifyingGlassIcon className={styles.icon} />
                    <p>Explore</p>
                </span>
            </CustomLink>
            <CustomLink href="/about" className={`${styles.user} ${active === '/about' ? styles.active : ''}`} onClick={() => handleActive('/about')}>
                <span>
                    <PaperAirplaneIcon className={styles.icon} />
                    <p>Applicaiton</p>
                </span>
            </CustomLink>
            <CustomLink href="/you" className={`${styles.profile} ${active === '/profile' ? styles.active : ''}`} onClick={() => handleActive('/you')}>
                <span>
                    <UserCircleIcon className={styles.icon} />
                    <p>Profile</p>
                </span>
            </CustomLink>
        </div>
    );
}

export default BottomNavbar;