import CustomImage from "../customImage";
import { ArrowLongRightIcon, ArrowTopRightOnSquareIcon, EyeIcon, MapPinIcon, StarIcon } from '@heroicons/react/24/outline';
import imageLogo from "../../assets/isLogo.webp"
import styles from "./unicard.module.css"



export default function Unicard() {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.img}>
                <div className={styles.upperCon}>
                    <div className={styles.veiwsCounter}> <EyeIcon className={styles.iconV} /> <p>120556</p></div>
                    <div className={styles.shareCounter}> <ArrowTopRightOnSquareIcon className={styles.iconS} /></div>
                </div>
                <CustomImage src={"https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80"} className={styles.ImageContent} />
            </div>

            <div className={styles.title}>
                <div className={styles.idnCon}>
                    <div className={styles.uniLogo}>
                        <CustomImage src={imageLogo.src} className={styles.imageLogo} />
                    </div>
                    <div className={styles.downCon}>
                        <h6>Medipol University</h6>
                        <div className={styles.loc}>
                            <MapPinIcon className={styles.locIcon} />
                            <p> trukey - istanbul</p>
                        </div>
                    </div>
                </div>
                <div className={styles.rate}><StarIcon className={styles.icon} /> <p>1,25</p></div>
            </div>
            <div className={styles.btn}>
                <p>apply</p>
                <ArrowLongRightIcon className={styles.arrowIcon} />
            </div>
        </div>
    );
}


