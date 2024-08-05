"use client"
import React, { useState, useEffect } from 'react';
import './CountdownCard.css'; // Ensure you create a CSS file for styling

const CountdownCard = ({ title, description, targetDate }) => {
    const [timeRemaining, setTimeRemaining] = useState('');

    useEffect(() => {
        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = new Date(targetDate).getTime() - now;

            if (distance < 0) {
                setTimeRemaining('EXPIRED');
                clearInterval(interval);
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        };

        const interval = setInterval(updateCountdown, 1000);
        updateCountdown(); // Initialize immediately

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [targetDate]);

    return (
        <div className="countdown-card">
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="countdown-timer">{timeRemaining}</div>
        </div>
    );
};

export default CountdownCard;
