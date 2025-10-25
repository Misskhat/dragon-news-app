import {Link, NavLink} from "react-router";
import logo from "../assets/user.png";
import {use} from "react";
import {AuthContext} from "../provider/AuthProvider";

const NavBar = () => {
    const {user, logOut} = use(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(() => alert("your logout done"))
        .catch((error) => console.log(error));
    };
    return (
        <div className="flex justify-between">
            <div className="border bg-amber-600 flex items-center px-4 rounded"> Hi, {user && user.email} </div>
            <div className="flex items-center gap-5 text-accent">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink className={"/about"}>About</NavLink>
                <NavLink className={"/career"}>Career</NavLink>
            </div>
            <div className="flex gap-3">
                <img className="w-[41px] h-[41px] " src={`${user ? user.photoURL : logo}`} alt="" />
                {user ? (
                    <button onClick={handleLogOut} className="btn btn-primary">
                        LogOut
                    </button>
                ) : (
                    <Link to={"/auth/login"} className="btn btn-primary">
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
};

export default NavBar;
