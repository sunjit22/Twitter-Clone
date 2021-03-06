import React from "react";
import ExploreScreen_A7 from "./ExploreScreen";
import HomeScreen_A7 from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import EditProfileScreen from "./EditProfileScreen";

import who from "../../../reducers/who";
import tweets from "../../../reducers/tweets";
import profile from "../../../reducers/profile";

import {Route} from "react-router-dom";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";


const reducer = combineReducers({tweets: tweets, who, profile})
const store = createStore(reducer);

const Build = () => {
    return(
        <Provider store ={store}>
            <div>
                <Route path={["/", "/a7/twitter/home"]}
                       exact={true} component={HomeScreen_A7}/>
                <Route path="/a7/twitter/explore"
                       exact={true} component={ExploreScreen_A7}/>
                <Route path="/a7/twitter/profile"
                       exact={true} component={ProfileScreen}/>
                <Route path="/a7/twitter/profileEdit"
                       exact={true} component={EditProfileScreen}/>
            </div>
        </Provider>
    );
};
export default Build;

