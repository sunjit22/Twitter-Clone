import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return (`
            <ul class="list-group me-2">
                <li class="list-group-item text-white ">
                    <div class="wd-title ">
                        <b>Who to follow</b>
                    </div>
                </li>
                
                ${
                    who.map(who => {
                        return (WhoToFollowListItem(who));
                    }).join("")
                }       
        </ul>
            
`);
}
export default WhoToFollowList;