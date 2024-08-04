import CustomLink from "../customLink";
import "./explorebar.css"

export default function Excard({ title, icon, href, className }) {
    return (
        <CustomLink href={href} className={`exCard ${className}`}>
            <span className={"icon"}>{icon}</span>
            <p>{title}</p>
        </CustomLink>
    );
}