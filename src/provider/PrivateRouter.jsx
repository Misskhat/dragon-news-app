import React, {use} from "react";
import {AuthContext} from "./AuthProvider";
import {Navigate, useLocation} from "react-router";
import Loading from "../pages/Loading";

const PrivateRouter = ({children}) => {
    const {user, loading} = use(AuthContext);
    const location = useLocation();
    // console.log(location);

    if (loading) {
        return <Loading></Loading>;
    }
    // console.log(user, loading);
    if (user) {
        return children;
    } else {
        return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
    }
};

export default PrivateRouter;
