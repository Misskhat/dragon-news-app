import React from "react";
import swimming from "../../assets/swimming.png";
import playground from "../../assets/playground.png";
import classImg from "../../assets/class.png";
import bgImg from "../../assets/bg.png";

const Qzone = () => {
    return (
        <div>
            <div className="bg-base-200 p-4">
                <h1 className="font-bold mb-5">Q-Zone</h1>
                <div className="space-y-5 flex flex-col items-center">
                    <img width={500} src={swimming} alt="" />
                    <img width={500} src={classImg} alt="" />
                    <img width={500} src={playground} alt="" />
                </div>
            </div>
            <div className="mt-5 ">
                <img className="w-full" src={bgImg} alt="" />
            </div>
        </div>
    );
};

export default Qzone;
