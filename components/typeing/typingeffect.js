"use client"
import React, { useState, useEffect } from 'react';
import './TypingEffect.css';

function TypingEffect({ texts, speed = 100, delay = 2000 }) {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [status, setStatus] = useState('entering'); // new state for animation status

    useEffect(() => {
        let timer;

        const handleTyping = () => {
            const currentText = texts[index];

            if (isDeleting) {
                setDisplayedText((prev) => prev.substring(0, prev.length - 1));
            } else {
                setDisplayedText((prev) => currentText.substring(0, prev.length + 1));
            }

            if (!isDeleting && displayedText === currentText) {
                timer = setTimeout(() => setIsDeleting(true), delay);
            } else if (isDeleting && displayedText === '') {
                setIsDeleting(false);
                setStatus('leaving');
                setTimeout(() => {
                    setIndex((prev) => (prev + 1) % texts.length);
                    setStatus('entering');
                }, 250); // match the slide-out animation duration
            }

            timer = setTimeout(handleTyping, isDeleting ? speed / 2 : speed);
        };

        timer = setTimeout(handleTyping, speed);

        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, texts, index, speed, delay]);

    return (
        <div className={`typing-container ${status}`}>
            <span className="typing-effect">
                {displayedText}
                <span className="cursor">|</span>
            </span>
        </div>
    );
}

export default TypingEffect;
