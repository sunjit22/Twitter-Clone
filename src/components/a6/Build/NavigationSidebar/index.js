import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = (
    {
        active = 'explore'
    }) => {
    return(
        <div>
             <div className="list-group">
                <a className="list-group-item page-link"  href="/">
                    <i className="fab fa-twitter fg-color-white"></i>
                </a>
                <Link to ='/a6/home' className={`list-group-item page-link ${active === 'Home' ? 'active' : ''}`}>
                    <div className="wd-list-options"><i className="fas fa-home fg-color-white"></i></div>
                
                    <span className="d-none d-xl-block wd-list-options text-white"> Home</span>
                </Link>
                <Link to ='/a6/explore' className={`list-group-item page-link ${active === 'Explore' ? 'active' : ''}`}>
                    <div className="wd-list-options"><i className="fas fa-hashtag"></i></div>
                    <span className="d-none d-xl-block wd-list-options text-white ">
                     Explore </span>
                </Link>
                
                <a className="list-group-item page-link" href="notifications.html">
                    <div className="wd-list-options"><i className="fas fa-bell fg-color-white"></i></div>
                    <span className="d-none d-xl-block wd-list-options text-white"> Notifications</span>
                </a>
                <a className="list-group-item page-link" href="messages.html">
                    <div className="wd-list-options"><i className="fas fa-envelope fg-color-white"></i></div>
                    <span className="d-none d-xl-block wd-list-options text-white"> Messages</span>
                </a>
                <a className="list-group-item page-link" href="bookmarks.html">
                    <div className="wd-list-options"><i className="fas fa-bookmark fg-color-white"></i></div>
                    <span className="d-none d-xl-block wd-list-options text-white"> Bookmarks</span>
                </a>
                <a className="list-group-item page-link" href="lists.html">
                    <div className="wd-list-options"><i className="fas fa-list fg-color-white"></i></div>
                    <span className="d-none d-xl-block wd-list-options text-white"> Lists</span>
                </a>
                <a className="list-group-item page-link" href="profile.html">
                    <div className="wd-list-options"><i className="fas fa-user fg-color-white"></i></div>
                    <span className="d-none d-xl-block wd-list-options text-white"> Profile</span>
                </a>
                <a className="list-group-item mt-0 ms-0 pt-0 ps-0 me-0 page-link" href="more.html">
                    <div className="wd-list-options ps-2">
                            <span className="fa-stack fa-1x">
                              <i className="far fa-circle fa-stack-1x fg-color-white"></i>
                              <i className="fas fa-ellipsis-h fa-stack-1x fa-inverse fg-color-white" style={{"fontSize": "10px"}}></i>
                            </span><br/>
                    </div>
                    <span className="d-none d-xl-block wd-list-options pt-1 ms-0 text-white"> More</span>

                </a>
            </div>

            <div className="d-grid gap-2">
                <button className="btn btn-primary mt-2 btn-block rounded-pill">Tweet</button>
            </div>
        </div>
    );
}
export default NavigationSidebar;
