import { Poppins, Cairo } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import './globals.css';
import BottomNavabar from '../../../components/bottomNavbar/bottomNavabar';
import FooterBottom from '../../../components/footer/footer';
import Headbar from '../../../components/headbar/headbar';


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
},)

const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', "1000"]
},)


export default async function LocaleLayout({
  children,
  params: { locale },
}) {

  const messages = await getMessages();




  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} className={locale === "ar" ? cairo.className : poppins.className} >
      <body className='foucesd'>
        <NextIntlClientProvider messages={messages}>
          <Headbar />
          {children}
          <BottomNavabar />
        </NextIntlClientProvider>
        <FooterBottom />
      </body>
    </html>
  );
}
