import styles from "./sectionThree.module.css";
import SwipperCustoms from "../swipper/swipper";


function SectionThree() {
    return (
        <div className={styles.container}>
            <div className={styles.textCon}>
                <h2>Our <span>Services</span></h2>
                <p>We offer you everything that facilitates your educational journey in Turkish universities with professional team of Hakim Study's consultants.</p>
            </div>
            <div className={styles.swipper}>
                <SwipperCustoms />
            </div>
            <div>
            </div>
        </div>
    );
}

export default SectionThree;
