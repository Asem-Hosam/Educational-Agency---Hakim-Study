import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import './globals.css';
import BottomNavabar from '../../../components/bottomNavbar/bottomNavabar';
import FooterBottom from '../../../components/footer/footer';

export default async function LocaleLayout({
  children,
  params: { locale },
}) {

  const messages = await getMessages();



  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
          <BottomNavabar />
        </NextIntlClientProvider>
        <FooterBottom />
      </body>
    </html>
  );
}
