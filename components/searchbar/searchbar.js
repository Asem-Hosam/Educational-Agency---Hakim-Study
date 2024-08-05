import styles from "./searchbar.module.css";
import CustomImage from './../customImage';
import { getImage } from "../../utils/getImages";
import { MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import LocaleSwitcher from "../localswitcher/localSwitcher";

export default async function Searchbar() {

    const imageSrc = await getImage('logoIcon');

    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <CustomImage src={imageSrc} alt={"image"} className={styles.image} />
            </div>
            <div className={styles.searchbar} >
                <div className={styles.bg}>
                    <div className={styles.searchIcon}>
                        <MagnifyingGlassIcon className={styles.Sicon} />
                    </div>
                    <p>Search</p>
                </div>
            </div>
            <div className={styles.uselog}>
                <UserCircleIcon className={styles.Usericon} />
                <LocaleSwitcher className={styles.icon} />
            </div>
        </div>
    );
}
