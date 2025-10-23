import React from "react";
import {Link} from "react-router";

const Login = () => {
    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h2 className=" text-2xl font-bold text-center">Login your account</h2>
                    <form>
                        <fieldset className="fieldset">
                            {/* Email section */}
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" name="email" />
                            {/* Password section */}
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" name="password" />
                            <div>
                                <a className="link link-hover">Forgot password?</a>
                            </div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </form>
                    <p className="text-center font-semibold pt-3">
                        Dont’t Have An Account?
                        <Link to={"/auth/register"}>
                            <span className="font-bold text-secondary"> Register</span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
