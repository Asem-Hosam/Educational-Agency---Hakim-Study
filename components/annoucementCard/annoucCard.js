import styles from "./annoucCard.module.css"
import CustomImage from './../customImage';


export default function AnnoucCard() {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.img}>
                <CustomImage src={"https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80"} className={styles.ImageContent} />
            </div>
            <div className={styles.content}>
                <div className={styles.date}>
                    <p>30 jan 2024</p>
                </div>
                <div className={styles.title}>
                    <h6>hello</h6>
                </div>
                <div className={styles.desc}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim culpa cupiditate minus similique perspiciatis consequatur odio optio quisquam dolores excepturi facilis a totam ea aut perferendis, earum hic modi dicta?</p>
                </div>
            </div>
            <div className={styles.author}>
                <h6>by</h6>
                <div className={styles.authorImage}>
                    <CustomImage src={"https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80"} className={styles.Image} />
                </div>
                <p>Firas Tahan</p>
            </div>
        </div >
    );
}
