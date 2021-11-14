import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";

const selectAllWho = (state) => state.who;

const WhoToFollowList = () => {
    const who = useSelector(selectAllWho);
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
