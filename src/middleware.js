import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';



export default async function middleware(request) {

    const handleI18nRouting = createMiddleware({
        locales: ['en', 'ar'],
        defaultLocale: 'en'
    });


    const response = handleI18nRouting(request);

    let pathname = request.nextUrl.pathname;


    const currentLocale = pathname.split('/')[1];
    const validLocales = ['en', 'ar'];
    const locale = validLocales.includes(currentLocale) ? currentLocale : 'en';



    if (pathname === '/universities') {
        return NextResponse.redirect(new URL('/explore/universities', request.url))
    }

    // Apply the base locale middleware
    return response;
}

export const config = {
    // Match all internationalized paths
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|apple-touch-icon.png|favicon.svg|images/books|icons|manifest).*)'
    ]
}