"use client"
import React from 'react';
import styles from "./swipper.module.css";
import SlideSwiper from './slide_swiper';
import Image1 from '../../assets/Oursevices/1.png';
import Image2 from '../../assets/Oursevices/2.png';
import Image3 from '../../assets/Oursevices/3.png';
import Image4 from '../../assets/Oursevices/4.png';
import Image5 from '../../assets/Oursevices/5.png';
import Image6 from '../../assets/Oursevices/6.png';




export default function SwipperCustoms() {

    const slidesData = [
        { ImageSrc: Image2.src, title: "Free Educational", subtitle: "Consultation" },
        { ImageSrc: Image1.src, title: "Helping you choose", subtitle: "your specialty" },
        { ImageSrc: Image3.src, title: "Obtaining Free", subtitle: "university admission" },
        { ImageSrc: Image4.src, title: "Transportation and", subtitle: "pick-up Services" },
        { ImageSrc: Image5.src, title: "Provide Student", subtitle: "Housing" },
        { ImageSrc: Image6.src, title: "Student residence", subtitle: "permit" },
        { ImageSrc: Image6.src, title: "Student residence", subtitle: "permit" },
    ];

    return (
        <div className={styles.swipper}>
            {slidesData.map((slide, index) => (
                <SlideSwiper
                    key={index}
                    ImageSrc={slide.ImageSrc}
                    title={slide.title}
                    subtitle={slide.subtitle}
                />
            ))}
        </div>
    )
};