import React from "react";
import {Link} from "react-router";

const Register = () => {
    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h2 className=" text-2xl font-bold text-center">Register your account</h2>
                    <form>
                        <fieldset className="fieldset">
                            {/* Name section */}
                            <label className="label">Name</label>
                            <input type="text" className="input" placeholder="Name" name="name" />

                            {/* Photo URL section */}
                            <label className="label">Photo URL</label>
                            <input type="text" className="input" placeholder="Photo URL" name="photoURL" />

                            {/* Email section */}
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" name="email" />
                            {/* Password section */}
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" name="password" />
                            <div className="py-2">
                                <input type="checkbox" name="terms" id="terms" /> Accept Term & Conditions
                            </div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </form>
                    <p className="text-center font-semibold pt-3">
                        Already Have An Account?
                        <Link to={"/auth/login"}>
                            <span className="font-bold text-secondary"> Login</span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
