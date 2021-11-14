import React from "react";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./Todo/TodoList";
import ReduxExamples from "./ReduxExamples";
const Practice = () => {
    return(
        <div>
            <h1>Practice</h1>
            <ReduxExamples/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <TodoList/>

        </div>
    )
};

export default Practice;
