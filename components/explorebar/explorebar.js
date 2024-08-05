"use client"
import Explorewrapper from "./explorewrapper";
import { BookOpenIcon, BuildingLibraryIcon, ChevronLeftIcon, DocumentCheckIcon, DocumentMagnifyingGlassIcon, FireIcon, MegaphoneIcon, UsersIcon, } from '@heroicons/react/24/outline';
import Excard from "./excard";
import { usePathname } from 'next/navigation';
import "./explorebar.css";
import { useEffect, useState } from "react";

export default function Explorebar() {

    const [scrollPosition, setScrollPosition] = useState(0);
    const pathname = usePathname();
    const items = [
        { href: "offers", icon: <FireIcon />, title: "Offers" },
        { href: "announcements", icon: <MegaphoneIcon />, title: "Announcements" },
        { href: "universities", icon: <BuildingLibraryIcon />, title: "Universities" },
        { href: "specializations", icon: <BookOpenIcon />, title: "Specializations" },
        { href: "scholarships", icon: <DocumentMagnifyingGlassIcon />, title: "Scholarships" },
    ];

    // { href: "fellows", icon: <UsersIcon />, title: "Fellows" },


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
        <Explorewrapper>
            {items.map((item, index) => (
                <Excard
                    key={index}
                    href={item.href}
                    icon={item.icon}
                    title={item.title}
                    className={pathname.includes(item.href) ? "active" : ''} />
            ))}
        </Explorewrapper>
    );
}

