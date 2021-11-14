import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome-pro/css/all.css';
import {BrowserRouter, Route} from "react-router-dom";
import HelloWorld from "./components/a7/a7.js";
import Practice from "./components/a7/Practice";
import Build from "./components/a7/Build";


function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Route path={["/", "/a7", "/a7/hello" ]} exact={true}>
                    <HelloWorld/>
                </Route>
                <Route path="/a7/practice" exact={true}>
                    <Practice/>
                </Route>
                <Route path="/a7/twitter/">
                    <Build/>
                </Route>
                <Route path="/a6/twitter">
                    <Build/>
                </Route>
            </div>
        </BrowserRouter>
    );
}
export default App;



