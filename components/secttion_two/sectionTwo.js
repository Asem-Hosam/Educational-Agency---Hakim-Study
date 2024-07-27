import styles from "./sectionTwo.module.css";
import { BuildingOffice2Icon, DocumentCheckIcon, SparklesIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import Counter from './../counter';


function SectionTwo() {
    return (
        <div className={styles.container}>
            <div className={styles.optionCon}>
                <DocumentCheckIcon className={styles.icon} />
                <div className={styles.textCon}>
                    <h2><span>+</span><Counter target={6000} /></h2>
                    <p>admission</p>
                </div>
            </div>
            <div className={styles.optionCon} >
                <SparklesIcon className={styles.icon} />
                <div className={styles.textCon}>
                    <h2><Counter target={8} /><span>/Years</span></h2>
                    <p>experience</p>
                </div>
            </div>
            <div className={styles.optionCon}>
                <BuildingOffice2Icon className={styles.icon} />
                <div className={styles.textCon}>
                    <h2><span>+</span><Counter target={50} /></h2>
                    <p>University</p>
                </div>
            </div>
            <div className={styles.optionCon}>
                <UserGroupIcon className={styles.icon} />
                <div className={styles.textCon}>
                    <h2><span>+</span><Counter target={15} /></h2>
                    <p>Academic Advisor
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SectionTwo;
