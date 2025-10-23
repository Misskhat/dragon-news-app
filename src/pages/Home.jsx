import {Navigate} from "react-router";

const Home = () => {
    return (
        <div>
            <Navigate to={"/catagories/0"}></Navigate>
        </div>
    );
};

export default Home;
