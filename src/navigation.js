import { createSharedPathnamesNavigation } from 'next-intl/navigation';
const locales = ['en', 'cs'];

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({ locales })
