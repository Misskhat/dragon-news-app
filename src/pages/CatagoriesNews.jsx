import {useParams} from "react-router";

const CatagoriesNews = () => {
    const {id} = useParams();
    return <div>Categories {id} </div>;
};

export default CatagoriesNews;
