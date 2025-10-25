import React, {use, useState} from "react";
import {Link, useLocation, useNavigate} from "react-router";
import {AuthContext} from "../provider/AuthProvider";

const Login = () => {
    const {setUser, logIn} = use(AuthContext);
    const [error, setError] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
        .then((res) => {
            setUser(res.user);
            navigate(`${location.state ? location.state : "/"}`);
        })
        .catch((error) => setError(error.code));
    };
    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h2 className=" text-2xl font-bold text-center">Login your account</h2>
                    <form onSubmit={handleLogin}>
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
                            <p className="text-red-600 font-bold">{error ? error : ""}</p>
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
