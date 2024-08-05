import styles from "./page.module.css"
import Unicard from './../../../../../components/universitycard/unicard';
export default function Universities() {
    return (
        <div className={styles.cover}>
            <h2>Universities</h2>
            <div className={styles.container}>
                <Unicard />
                <Unicard />
                <Unicard />
                <Unicard />
                <Unicard />
            </div>
        </div>
    );
}

