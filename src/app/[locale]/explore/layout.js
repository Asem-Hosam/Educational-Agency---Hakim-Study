import DialogSheet from "../../../../components/dialog/dialog";
import Explorebar from "../../../../components/explorebar/explorebar";
import Searchbar from "../../../../components/searchbar/searchbar";

export default async function ServicesLayout({ children }) {
    return (
        <div>
            <Searchbar />
            <Explorebar />
            {children}
        </div>
    );
}


