import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import TweetList from "../TweetList"
import PostSummaryList from "../PostSummaryList";
import EditProfile from "./editProfile";

const EditProfileScreen= () =>  {
    return (
        <div class="row mt-2 mb-2">
            <div class="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="Profile"/>
            </div>
            <div class="col-10 col-lg-7 col-xl-6" style={{"position": "relative"}}>
                <EditProfile/>
                <TweetList/>
            </div>
            <div class="d-none d-lg-block col-4 col-lg-4 col-xl-4">
                <PostSummaryList title = "What's happening"/>
            </div>
        </div>
    );
};
export default EditProfileScreen;
