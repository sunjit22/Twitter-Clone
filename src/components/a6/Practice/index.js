import React from "react";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./Todo/TodoList";
import {Link} from "react-router-dom";
const Practice = () => {
    return(
        <div>
            <h1>Practice</h1>
            <Link to="/a6/hello">
                Hello
            </Link> |
            <Link to="/a6/practice">
                Practice
            </Link> |
            <Link to="/a6/explore">
                Build
            </Link> |
            <Link to="/a6/home">
                Challenge
            </Link> |
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <TodoList/>

        </div>
    )
};

export default Practice;
