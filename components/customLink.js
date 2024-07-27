import { Link } from "@/navigation";


export default function CustomLink({ href, className, onClick, children }) {
    return <Link onClick={onClick} className={className} href={href}>
        {children}
    </Link>;
}

