import Excard from "./excard";
import "./explorebar.css"
import { BuildingLibraryIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function Explorebar() {
    return (
        <div className={"container"}>
            <div className={"btn1"}>
                <button><ChevronLeftIcon /></button>
            </div>
            <div className={"overlay"}>
                <div
                    className={"hodlder"}>
                    <Excard href={"/"} title={"Universities"} icon={<BuildingLibraryIcon />} />
                    <Excard href={"/"} title={"University"} icon={<BuildingLibraryIcon />} />
                    <Excard href={"/"} title={"University"} icon={<BuildingLibraryIcon />} />
                    <Excard href={"/"} title={"University"} icon={<BuildingLibraryIcon />} />
                    <Excard href={"/"} title={"University"} icon={<BuildingLibraryIcon />} />
                    <Excard href={"/"} title={"University"} icon={<BuildingLibraryIcon />} />
                </div>
            </div>
            <div className={"btn2"}>
                <button><ChevronRightIcon /></button>
            </div>
        </div>
    );
}

