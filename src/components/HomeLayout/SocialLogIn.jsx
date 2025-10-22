import React from "react";
import {FaGithub} from "react-icons/fa";
import {FcGoogle} from "react-icons/fc";

const SocialLogIn = () => {
    return (
        <div>
            <p className="font-bold mb-5">Login With</p>
            <div className="space-y-3">
                {/* !-- Google -- */}
                <button class="btn btn-outline w-full text-secondary">
                    <FcGoogle size={24} /> Login with Google
                </button>

                {/* !-- GitHub -- */}
                <button class="btn btn-outline w-full text-primary">
                    <FaGithub size={24} /> Login with GitHub
                </button>
            </div>
        </div>
    );
};

export default SocialLogIn;
