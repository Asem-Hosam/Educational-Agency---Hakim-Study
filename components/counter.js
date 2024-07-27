'use client';
import React, { useEffect, useRef } from 'react';

function Counter({ target }) {
    const counterRef = useRef(null);

    useEffect(() => {
        const countUp = (element, target) => {
            let count = 0;
            const increment = target / 200; // Adjust this value to control the speed

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
                    observer.unobserve(entry.target); // Stop observing after counting up
                }
            });
        };

        const observerOptions = {
            threshold: 1.0, // Trigger when the entire element is visible
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        observer.observe(counterRef.current);

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, [target]);

    return <div ref={counterRef} className="counter">0</div>;
};

export default Counter;
