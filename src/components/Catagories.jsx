import React, {use} from "react";

const categoriesPromose = fetch("./categories.json").then((res) => res.json());

const Catagories = () => {
    const categoriesData = use(categoriesPromose);
    console.log(categoriesData);
    return <div className="font-bold">All Categories ({categoriesData.length})</div>;
};

export default Catagories;
