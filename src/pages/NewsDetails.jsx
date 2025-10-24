import Header from "../components/Header";
import RightAside from "../components/HomeLayout/RightAside";

const NewsDetails = () => {
    const {id, title, thumbnail_url, details, author, total_view, rating, tags} = news;
    return (
        <div>
            <header className="my-5">
                <Header></Header>
            </header>
            <main className="w-11/12 mx-auto grid grid-cols-12 gap-5 ">
                <section className="col-span-9">
                    <div className="card bg-base-100 shadow-md">
                        {/* 🧑 Author Section */}
                        <div className="flex items-center justify-between mb-3 bg-base-200 py-5 px-3">
                            <div className="flex items-center gap-3">
                                <img src={author.img} alt={author.name} className="w-10 h-10 rounded-full" />
                                <div>
                                    <h3 className="font-semibold">{author.name}</h3>
                                    <p className="text-sm text-gray-500">
                                        {new Date(author?.published_date).toLocaleDateString()}
                                    </p>
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
                            <p className="text-sm text-gray-600 leading-relaxed">{details}</p>

                            {/* 🌟 Rating + Views */}
                            <div className="flex items-center justify-between mt-3 border-t pt-3">
                                <div className="flex items-center text-warning gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar
                                            key={i}
                                            className={i < rating.number ? "text-yellow-500" : "text-gray-300"}
                                        />
                                    ))}
                                    <span className="ml-1 font-semibold text-gray-600">{rating.number.toFixed(1)}</span>
                                </div>
                                <div className="flex items-center gap-1 text-gray-600">
                                    <FaEye /> <span>{total_view}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <aside className="col-span-3">
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;
