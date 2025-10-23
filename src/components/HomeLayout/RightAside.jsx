import React from "react";
import SocialLogIn from "./SocialLogIn";
import FinUs from "./FinUs";
import Qzone from "./Qzone";

const RightAside = () => {
    return (
        <div className="space-y-8">
            <SocialLogIn></SocialLogIn>
            <FinUs></FinUs>
            <Qzone></Qzone>
        </div>
    );
};

export default RightAside;
