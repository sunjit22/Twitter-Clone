import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who.json";

const WhoToFollowList = () => {
    return (
            <ul className="list-group me-2">
                <li className="list-group-item text-white ">
                    <div className="wd-title ">
                        <b>Who to follow</b>
                    </div>
                </li>

                {
                    who.map(w => {
                        return (
                            <WhoToFollowListItem who={w}/>
                        );
                    })
                }
            </ul>
    );
}
export default WhoToFollowList;
