import AnnoucCard from "./annoucCard";
import styles from "./annoucCard.module.css"

export default function AnnoucGrid({ data }) {
    return (
        <div className={styles.container}>
            {data.map((item, index) => (
                <AnnoucCard
                    id={item.id}
                    key={index}
                    title={item.title}
                    date={item.date}
                    desc={item.desc}
                    author={item.author}
                    imageUrl={item.imageUrl}
                />
            ))}
        </div>
    );
}