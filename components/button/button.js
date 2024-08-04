import styles from "./button.module.css"
import { Poppins, Cairo } from 'next/font/google'
import { useLocale } from "next-intl"


const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
},)

const cairo = Cairo({
    subsets: ['arabic'],
    weight: ['200', '300', '400', '500', '600', '700', '800', '900', "1000"]
},)



export default function CustomButton({ children, className, onClick }) {
    const locale = useLocale()
    return (
        <button className={` ${styles.btnCon} ${className} ${locale === "ar" ? cairo.className : poppins.className} `} onClick={onClick} >
            {children}
        </button >
    );
}