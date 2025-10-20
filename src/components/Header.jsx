import {format} from "date-fns";
import logo from "../assets/logo.png";

const Header = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-3">
            <img className="400px" src={logo} alt="" />
            <p className="text-accent">Journalism Without Fear or Favour</p>
            <p> {format(new Date(), "EEEE, MMMM d, yyyy")} </p>
        </div>
    );
};

export default Header;
