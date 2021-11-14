import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import TweetList from "../TweetList"
import PostSummaryList from "../PostSummaryList";
import WhatsHappening from "../WhatsHappening";

const HomeScreen_A7= () =>  {
    return (
        <div class="row mt-2 mb-2">
            <div class="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="Home"/>
            </div>
            <div class="col-10 col-lg-7 col-xl-6" style={{"position": "relative"}}>
                <WhatsHappening/>
                <TweetList/>
            </div>
            <div class="d-none d-lg-block col-4 col-lg-4 col-xl-4">
                <PostSummaryList title = "What's happening"/>
            </div>
        </div>
    );
};
export default HomeScreen_A7;
