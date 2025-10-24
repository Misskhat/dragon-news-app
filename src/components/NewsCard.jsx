import {CiBookmark, CiShare2} from "react-icons/ci";
import {FaEye, FaStar} from "react-icons/fa";
import {Link} from "react-router";

const NewsCard = ({news}) => {
    const {id, title, thumbnail_url, details, author, total_view, rating, tags} = news;

    return (
        <div className="card bg-base-100 shadow-md">
            {/* 🧑 Author Section */}
            <div className="flex items-center justify-between mb-3 bg-base-200 py-5 px-3">
                <div className="flex items-center gap-3">
                    <img src={author.img} alt={author.name} className="w-10 h-10 rounded-full" />
                    <div>
                        <h3 className="font-semibold">{author.name}</h3>
                        <p className="text-sm text-gray-500">{new Date(author?.published_date).toLocaleDateString()}</p>
                    </div>
                </div>
                <div>
                    <button className="btn btn-sm btn-ghost">
                        <CiBookmark size={20} />
                    </button>
                    <button className="btn btn-sm btn-ghost">
                        <CiShare2 size={20} />
                    </button>
                </div>
            </div>

            <div className="px-8 py-4">
                {/* 📰 Title */}
                <h2 className="font-bold text-lg mb-2">{title}</h2>

                {/* 📸 Image */}
                <figure className="mb-3">
                    <img src={thumbnail_url} alt={title} className="rounded-lg" />
                </figure>

                {/* 📄 Details */}
                <p className="text-sm text-gray-600 leading-relaxed">
                    {details.length > 180 ? details.slice(0, 180) + "..." : details}
                    <Link to={"/news-details/id"} className="text-primary cursor-pointer font-medium ml-1">
                        Read More
                    </Link>
                </p>

                {/* 🌟 Rating + Views */}
                <div className="flex items-center justify-between mt-3 border-t pt-3">
                    <div className="flex items-center text-warning gap-1">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className={i < rating.number ? "text-yellow-500" : "text-gray-300"} />
                        ))}
                        <span className="ml-1 font-semibold text-gray-600">{rating.number.toFixed(1)}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                        <FaEye /> <span>{total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
