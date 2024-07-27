'use client'
import Excard from "./excard";
import "./explorebar.css"
import { useState, useRef, useEffect } from "react";
import { BuildingLibraryIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function Explorebar() {
    const [isOverflowing, setIsOverflowing] = useState(false);
    const [isScrolled, setIsScrolled] = useState(0);
    const scrollContainerRef = useRef(null);


    useEffect(() => {
        const handleResize = () => {
            const container = scrollContainerRef.current;
            if (container) {
                const containerWidth = container.clientWidth;
                const contentWidth = container.scrollWidth;
                setIsOverflowing(contentWidth > containerWidth);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const scrollHandler = (event) => {
        const scrollLeft = event.target.scrollLeft;
        setIsScrolled(scrollLeft > 0);
    };

    function scrollLeft() {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -100,
                behavior: 'smooth',
            });
        }
    };

    function scrollRight() {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 100,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className={"container"}>
            <div className={`btn1 ${isScrolled ? 'scrolled' : ''} ${!isOverflowing ? 'disable' : ''}`}>
                <button onClick={scrollLeft} ><ChevronLeftIcon /></button>
            </div>
            <div className={`overlay ${isScrolled ? 'scrolled' : ''}  ${!isOverflowing ? "disable" : ""} `}>
                <div
                    className={`hodlder  ${!isOverflowing ? "disable" : ""} `} onScroll={scrollHandler} ref={scrollContainerRef}>
                    <Excard href={"/"} title={"Universities"} icon={<BuildingLibraryIcon />} />
                    <Excard href={"/"} title={"University"} icon={<BuildingLibraryIcon />} />
                    <Excard href={"/"} title={"University"} icon={<BuildingLibraryIcon />} />
                    <Excard href={"/"} title={"University"} icon={<BuildingLibraryIcon />} />
                    <Excard href={"/"} title={"University"} icon={<BuildingLibraryIcon />} />
                </div>
            </div>
            <div className={`btn2 ${!isOverflowing ? 'disable' : ''}`}>
                <button onClick={scrollRight}><ChevronRightIcon /></button>
            </div>
        </div>
    );
}

