import React, {use} from "react";
import {AuthContext} from "./AuthProvider";
import {Navigate} from "react-router";

const PrivateRouter = ({children}) => {
    const {user} = use(AuthContext);
    console.log(user);
    if (user && user.email) {
        return children;
    } else {
        return <Navigate to="/auth/login"></Navigate>;
    }
};

export default PrivateRouter;
