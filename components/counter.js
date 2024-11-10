'use client';
import React, { useEffect, useRef } from 'react';

function Counter({ target, className }) {
    const counterRef = useRef(null);

    useEffect(() => {
        const countUp = (element, target) => {
            let count = 0;
            const increment = target / 200;
            const updateCount = () => {
                count += increment;
                if (count < target) {
                    element.innerText = Math.ceil(count);
                    requestAnimationFrame(updateCount);
                } else {
                    element.innerText = target;
                }
            };

            updateCount();
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    countUp(entry.target, target);
                    observer.unobserve(entry.target);
                }
            });
        };

        const observerOptions = {
            threshold: 1.0,
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        observer.observe(counterRef.current);

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, [target]);

    return <div ref={counterRef} className={className} >0</div>;
};

export default Counter;
