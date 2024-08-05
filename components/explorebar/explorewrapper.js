'use client'
import "./explorebar.css"
import { useState, useRef, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function Explorewrapper({ children }) {
    const [isOverflowing, setIsOverflowing] = useState(false);
    const [isScrolled, setIsScrolled] = useState(0);
    const [direction, setDirection] = useState('ltr');
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);
    const scrollContainerRef = useRef(null);


    useEffect(() => {
        const dir = document.documentElement.getAttribute('dir') || 'ltr';
        console.log(dir);
        setDirection(dir);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            const container = scrollContainerRef.current;
            if (container) {
                const containerWidth = container.clientWidth;
                const contentWidth = container.scrollWidth;
                setIsOverflowing(contentWidth > containerWidth);
                setIsAtEnd(container.scrollWidth - container.clientWidth === container.scrollLeft);
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
        setIsAtStart(scrollLeft == 0);
        setIsAtEnd(event.target.scrollWidth - event.target.clientWidth === scrollLeft);
        console.log("at the end ?", isAtStart);
        console.log("at the start ?", isAtEnd);
    };

    function scrollLeft() {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: direction === 'ltr' ? -200 : 200,
                behavior: 'smooth',
            });
        }
    };

    function scrollRight() {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: direction === 'ltr' ? 200 : -200,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className={"container"}>
            <div className={`overlay ${isScrolled ? 'scrolled' : ''} ${!isOverflowing ? "disable" : ""}`}>
                <div className={`btn1 ${isScrolled ? 'scrolled' : ''} ${!isOverflowing ? 'disable' : ''}`}>
                    <button onClick={scrollLeft}> {direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}</button>
                </div>
                <div className={`hodlder ${!isOverflowing ? "disable" : ""}`} onScroll={scrollHandler} ref={scrollContainerRef}>
                    {children}
                </div>
                <div className={`btn2 ${!isOverflowing ? 'disable' : ''}`}>
                    <button onClick={scrollRight}>{direction === "rtl" ? <ChevronLeftIcon /> : <ChevronRightIcon />}</button>
                </div>
            </div>
        </div>
    );
}
