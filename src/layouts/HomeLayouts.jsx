import React from "react";
import {Outlet} from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import NavBar from "../components/NavBar";

const HomeLayouts = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto my-3">
                    <LatestNews></LatestNews>
                </section>
                <nav className="w-11/12 mx-auto my-3">
                    <NavBar></NavBar>
                </nav>
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
