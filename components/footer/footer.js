import styles from "./footer.module.css";
import { Link } from "@/navigation";
import { MapIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import logo from "../../assets/logo-black.png"
import CustomImage from './../customImage';
import CustomLink from './../customLink';


function FooterBottom() {
    return (<div className={styles.parent}>
        <div className={styles.shapes}>
            <div className={`${styles.shape1}  ${styles.insent0} ${styles.bgPurple}  ${styles.opcity50} ${styles.bgBulr}`} />
            <div className={`${styles.shape2}  ${styles.insent0} ${styles.bgPurple}  ${styles.opcity50} ${styles.bgBulr}`} />
        </div>
        <div className={styles.contaier}>
            <div className={styles.upperCon}>
                <div className={styles.identity}>
                    <div className={styles.logo}>
                        <CustomImage src={logo.src} height={443} width={1080} className={styles.image} alt={"footerLogo"} />
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut nulla, mollitia quam provident corporis ducimus? Aut nemo inventore atque mollitia incidunt magnam! Sit veritatis corporis tenetur rem quisquam non qui?</p>
                </div>
                <div className={styles.ulinks}>
                    <h4>Quick Links</h4>
                    <CustomLink href={"/"} >Explore</CustomLink>
                    <CustomLink href={"/"} >About</CustomLink>
                    <CustomLink href={"/"} >Universities</CustomLink>
                    <CustomLink href={"/"} >Help</CustomLink>
                </div>
                <div className={styles.contact}>
                    <h4>Contact</h4>
                    <div href="/" ><span><MapIcon className={styles.icon} /><p>Istanbul ,Avcilar</p></span></div>
                    <div href="/" ><span><EnvelopeIcon className={styles.icon} /><p>hakimstudytr@gmail.com</p></span></div>
                    <div href="/" ><span><PhoneIcon className={styles.icon} /><p>+90 536 874 45 13</p></span></div>
                </div>
            </div>
            <div className={styles.buttomCon}>
                <h5>
                    © Copyright 2024 - Hakim Study
                </h5>
            </div>
        </div>
    </div>
    );
}

export default FooterBottom;
