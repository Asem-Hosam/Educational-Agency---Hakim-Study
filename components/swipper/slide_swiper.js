import styles from "./swipper.module.css"
import { SwiperSlide } from 'swiper/react';
import CustomImage from "../customImage";
function SlideSwiper({ ImageSrc, title, subtitle }) {
    return (
        <SwiperSlide className={styles.swiperSlide}>
            <div className={styles.texCon}>
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </div>
            <CustomImage src={ImageSrc} width={500} height={500} className={styles.image} alt={"image"} />
            {/* <img src={ImageSrc} alt="Image" /> */}
        </SwiperSlide>
    );
}

export default SlideSwiper;


