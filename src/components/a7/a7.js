import React from "react";
import {Link} from "react-router-dom";
import History from "./History";

const a7 = () => {
    return(
        <>
            <h2>Hello World</h2>
            <Link to="hello">
                Hello
            </Link> | &nbsp;
            <Link to="/a7/practice">
                A7-Practice
            </Link> | &nbsp;
            <Link to="/a7/twitter/home">
                A7-Build
            </Link> | &nbsp;
            <Link to="/a7/twitter/profile">
                A7-Challenge
            </Link> | &nbsp;
            <Link to="/a6/twitter/home">
                A6-Build
            </Link> | &nbsp;
            <Link to="/a6/twitter/explore">
                A6-Challenge
            </Link>| &nbsp;
            <Link to="/a6/twitter/practice">
                A6- Practice
            </Link>

            <History />
        </>
    )
};

export default a7;
