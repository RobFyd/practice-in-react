import Input from "../../Input";
import { useLocation } from "react-router-dom";

export default () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get("query");

    return (
        <Input 
            placeholder="search tasks"
            // value={}
        />
    )
};