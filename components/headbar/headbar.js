"use client"

import styles from "./headbar.module.css";
import { Facebook, Instagram, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';
import TypingEffect from "../typeing/typingeffect";

const timeZone = 'Europe/Istanbul'; // Define the time zone here

function Headbar() {
    const [time, setTime] = useState('');

    // Function to handle social media link clicks
    const handleClick = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    // Update the time every second
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const formatter = new Intl.DateTimeFormat('en-US', {
                timeZone,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false,
            });
            setTime(formatter.format(now));
        };

        updateTime();
        const intervalId = setInterval(updateTime, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const texts = [
        "Looking for university?",
        "let's Help You with your university life",
        "Would You like to work with us!",
        "Enjoy your stay.",
        "Feel free to browse around.",
    ];


    return (
        <div className={styles.container}>
            <div className={styles.timer}>
                <Clock className={styles.icon} />
                <h6>
                    Istanbul -
                </h6>
                <p>{time}</p>
            </div>
            <div className={styles.tySpace}>
                <TypingEffect texts={texts} speed={100} delay={2000} />
            </div>
            <div className={styles.socialCon}>
                <Facebook
                    className={styles.icon}
                    onClick={() => handleClick("https://www.facebook.com/HakimStudytr")}
                    style={{ cursor: 'pointer' }}
                />
                <Instagram
                    className={styles.icon}
                    onClick={() => handleClick("https://www.instagram.com/hakim_study/profilecard/")}
                    style={{ cursor: 'pointer' }}
                />
            </div>
        </div>
    );
}

export default Headbar;
