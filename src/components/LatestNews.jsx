import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
    return (
        <div className="flex gap-5 items-center bg-base-200">
            <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
            <Marquee className="flex gap-10" speed={50} pauseOnHover={true}>
                <p className="font-semibold">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique architecto aliquid facilis!
                    Dolorem, tenetur sequi dolores sint beatae deleniti
                </p>
                <p className="font-semibold">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique architecto aliquid facilis!
                    Dolorem, tenetur sequi dolores sint beatae deleniti
                </p>
                <p className="font-semibold">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique architecto aliquid facilis!
                    Dolorem, tenetur sequi dolores sint beatae deleniti
                </p>
            </Marquee>
        </div>
    );
};

export default LatestNews;
