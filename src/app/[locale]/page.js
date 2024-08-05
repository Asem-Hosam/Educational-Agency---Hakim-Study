import { getTranslations } from 'next-intl/server';
import styles from "./page.module.css";
import Section from '../../../components/section_one/section';
import SectionTwo from '../../../components/secttion_two/sectionTwo';
import SectionThree from '../../../components/section_three/sectionThree';
import SectionFour from '../../../components/section_four/sectionFour';
import Header from '../../../components/Header/header';
import { getLocale } from 'next-intl/server';

export default async function HomePage() {

  const t = await getTranslations('ProfilePage');
  const locale = await getLocale();


  return <>
    <div className={`${styles.appContianer}  ${styles.absolute}`} >
      <Header params={locale} />
      <Section />
      <div className={styles.shapes}>
        <div className={`${styles.shape1}  ${styles.insent0}   ${styles.bgTeal} ${styles.opcity50} ${styles.bgBulr}`} />
        <div className={`${styles.shape2}  ${styles.insent0}  ${styles.bgPrimry} ${styles.opcity50} ${styles.bgBulr}`} />
      </div>
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </div>
  </>
}