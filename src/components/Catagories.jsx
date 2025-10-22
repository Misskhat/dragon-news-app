import React, {use} from "react";
import {NavLink} from "react-router";

const categoriesPromose = fetch("/categories.json").then((res) => res.json());

const Catagories = () => {
    const categoriesData = use(categoriesPromose);
    console.log(categoriesData);
    return (
        <div>
            <p className="font-bold"> All Categories ({categoriesData.length})</p>
            <div className="grid grid-cols-1 mt-5 gap-5">
                {categoriesData.map((category) => (
                    <NavLink to={`/catagories/${category.id}`} key={category.id} className={"btn border-0 bg-base-100"}>
                        {category.name}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default Catagories;
