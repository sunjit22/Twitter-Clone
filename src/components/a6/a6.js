import React from "react";
import {Link} from "react-router-dom";
import History from "./History";

const a6 = () => {
    return(
        <>
            <h2>Hello World</h2>
            <Link to="hello">
                Hello
            </Link> | &nbsp;
            <Link to="/a6/practice">
                Practice
            </Link> | &nbsp;
            <Link to="/a6/explore">
                Build
            </Link> | &nbsp;
            <Link to="/a6/home">
                Challenge
            </Link>

            <History />
        </>
    )
};

export default a6;
