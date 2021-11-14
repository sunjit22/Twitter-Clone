import React from "react";

const WhoToFollowListItem = (
    {
        who = {
            avatarIcon: '/images/nasa.jpeg',
            userName: 'NASA',
            handle: 'NASA',
        }
    })  => {
    return(
        <div>

            <li className="list-group-item text-white">
                    <div className="row align-items-center me-2">
                        <div className="col-2 px-1">
                            <img src={who.avatarIcon} className="wd-image-radius" alt="Thumbnail"/>
                        </div>
                        <div className="col-7 wd-title text-nowrap">
                            <b>{who.userName}</b> <i className="fas fa-check-circle "></i> <br/>
                            <div>
                                @{who.handle}
                            </div>
                        </div>
                        <div className="col-3 px-0">
                            <button className="btn btn-primary btn-block rounded-pill">Follow</button>
                        </div>
                    </div>
            </li>
        </div>
        );
}
export default WhoToFollowListItem;