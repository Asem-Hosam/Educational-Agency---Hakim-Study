import styles from "./section.module.css";
import { getLocale, getTranslations } from "next-intl/server";
import CustomImage from "../customImage";
import CustomLink from "../customLink";
import { getImage } from '../../utils/getImages';
async function Section() {

    const imageSrc = await getImage('SectionImage2');
    const locale = await getLocale();
    const t = await getTranslations('SectionOne');


    return (
        <>
            <div className={styles.container}>
                <CustomImage src={imageSrc} width={1500} height={750} className={styles.image} alt={"backgroundImage"} />
                <div className={locale == "en" ? styles.insideConen : styles.insideConar}>
                    <div className={styles.textSec}>
                        <h2>{t("title")}</h2>
                        <p>{t("desc")}</p>
                    </div>
                    <div className={styles.btn}>
                        <CustomLink href="/explore/">{t("Btn")}</CustomLink>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Section;
