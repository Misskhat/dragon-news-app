import React from "react";
import {Link} from "react-router";

const NewsDetailsCard = ({news}) => {
    // console.log(news);
    return (
        <div className="space-y-5">
            <div className="h-[550px]">
                <img className="object-fill w-full h-[550px]" src={news?.image_url} alt={news?.title} />
            </div>
            <h2 className="text-2xl font-bold"> {news?.title}</h2>
            <p> {news?.details} </p>

            <Link className="btn bg-secondary text-white" to={`/catagories/${news?.category_id}`}>
                Back To Categories
            </Link>
        </div>
    );
};

export default NewsDetailsCard;
