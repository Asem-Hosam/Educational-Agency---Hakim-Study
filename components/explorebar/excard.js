import CustomLink from "../customLink";
import "./explorebar.css"

export default function Excard({ title, icon, href }) {
    return (
        <CustomLink href={href} className={"exCard"}>
            <span className={"icon"}>{icon}</span>
            <p>{title}</p>
        </CustomLink>
    );
}