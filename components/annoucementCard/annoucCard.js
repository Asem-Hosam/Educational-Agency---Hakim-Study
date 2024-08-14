import styles from "./annoucCard.module.css"
import CustomImage from './../customImage';
import CustomLink from "../customLink";


export default function AnnoucCard({ title, date, desc, author, imageUrl, id }) {
    return (
        <CustomLink href={`/explore/announcements/${id}`}>
            <div className={styles.cardContainer}>
                <div className={styles.img}>
                    <CustomImage src={imageUrl} className={styles.ImageContent} />
                </div>
                <div className={styles.content}>
                    <div className={styles.date}>
                        <p>{date}</p>
                    </div>
                    <div className={styles.title}>
                        <h6>{title}</h6>
                    </div>
                    <div className={styles.desc}>
                        <p>{desc}</p>
                    </div>
                </div>
                <div className={styles.author}>
                    <div className={styles.authorImage}>
                        <CustomImage src={"https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80"} className={styles.Image} />
                    </div>
                    <p>{author}</p>
                </div>
            </div>
        </CustomLink>
    );
}
