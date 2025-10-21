import {NavLink} from "react-router";
import logo from "../assets/user.png";

const NavBar = () => {
    return (
        <div className="flex justify-between">
            <div></div>
            <div className="flex items-center gap-5 text-accent">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink className={"/about"}>About</NavLink>
                <NavLink className={"/career"}>Career</NavLink>
            </div>
            <div className="flex gap-3">
                <img className="w-[41px] h-[41px] " src={logo} alt="" />
                <button className="btn btn-primary">Login</button>
            </div>
        </div>
    );
};

export default NavBar;
