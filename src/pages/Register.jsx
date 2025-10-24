import React, {use} from "react";
import {Link} from "react-router";
import {AuthContext} from "../provider/AuthProvider";

const Register = () => {
    const {creatUser, setUser} = use(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const terms = form.terms.checked;
        console.log({name, photoURL, email, password, terms});
        creatUser(email, password)
        .then((result) => setUser(result.user))
        .catch((error) => console.log(error));
    };
    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h2 className=" text-2xl font-bold text-center">Register your account</h2>
                    <form onSubmit={handleSubmit}>
                        <fieldset className="fieldset">
                            {/* Name section */}
                            <label className="label">Name</label>
                            <input type="text" className="input" placeholder="Name" name="name" required />

                            {/* Photo URL section */}
                            <label className="label">Photo URL</label>
                            <input type="text" className="input" placeholder="Photo URL" name="photoURL" required />

                            {/* Email section */}
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" name="email" required />
                            {/* Password section */}
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" name="password" required />
                            <div className="py-2">
                                <label className="label">
                                    <input type="checkbox" name="terms" id="terms" required /> Accept Term & Conditions
                                </label>
                            </div>
                            <button type="submit" className="btn btn-neutral mt-4">
                                Login
                            </button>
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
