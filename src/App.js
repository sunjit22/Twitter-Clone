import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome-pro/css/all.css';
import {BrowserRouter, Route} from "react-router-dom";
import Build from "./components/a7/Build";


function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Route path="/a7/twitter/">
                    <Build/>
                </Route>
            </div>
        </BrowserRouter>
    );
}
export default App;



