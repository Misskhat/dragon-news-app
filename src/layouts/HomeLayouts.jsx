import React from "react";
import {Outlet} from "react-router";
import Header from "../components/Header";

const HomeLayouts = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main>
                <section className="left_navbar"></section>
                <section className="main">
                    <Outlet></Outlet>
                </section>
                <section className="right_navbar"></section>
            </main>
        </div>
    );
};

export default HomeLayouts;
