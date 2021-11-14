import React from "react";
import ExploreScreen_A7 from "./ExploreScreen";
import HomeScreen_A7 from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import EditProfileScreen from "./EditProfileScreen";

import ExploreScreen from "../../a6/Build/ExploreScreen/index";
import HomeScreen from "../../a6/Build/HomeScreen/index";
import Practice from "../../a6/Practice/index";

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
                <Route path="/a6/twitter/home"
                       exact={true} component={HomeScreen}/>
                <Route path="/a6/twitter/explore"
                       exact={true} component={ExploreScreen}/>
                <Route path="/a6/twitter/practice"
                       exact={true} component={Practice}/>

            </div>
        </Provider>
    );
};
export default Build;

