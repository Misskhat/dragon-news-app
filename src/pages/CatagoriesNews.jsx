import {useEffect, useState} from "react";
import {useLoaderData, useParams} from "react-router";
import NewsCard from "../components/NewsCard";

const CatagoriesNews = () => {
    const [categoriesNews, setCategoriesNews] = useState([]);
    const {id} = useParams();
    const newsData = useLoaderData();
    // console.log(newsData);
    useEffect(() => {
        if (id == "0") {
            setCategoriesNews(newsData);
            return;
        } else if (id == "1") {
            const brackaingNews = newsData.filter((news) => news?.others?.is_today_pick == true);
            setCategoriesNews(brackaingNews);
            return;
        } else {
            const filterNewsData = newsData.filter((news) => news.category_id == id);
            // console.log(filterNewsData);
            setCategoriesNews(filterNewsData);
        }
    }, [id, newsData]);

    return (
        <div>
            <h2 className="font-bold mb-5">
                Total <span className="text-secondary">{categoriesNews.length}</span> news found
            </h2>
            <div className="gird grid-cols-1 gap-5 space-y-5">
                {categoriesNews.map((news) => (
                    <NewsCard key={news.id} news={news}></NewsCard>
                ))}
            </div>
        </div>
    );
};

export default CatagoriesNews;
