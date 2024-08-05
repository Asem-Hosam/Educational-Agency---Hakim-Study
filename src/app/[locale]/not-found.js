'use client';

import Error from 'next/error';
import BottomNavabar from '../../../components/bottomNavbar/bottomNavabar';

export default function NotFound() {
    return (
        <html lang="en">
            <body>
                <Error statusCode={404} />
            </body>
            <BottomNavabar />
        </html>
    );
}