import React from "react";
import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(<div>
             <div className="row mb-2">
                    <div className="col-11">
                        <input className="form-control wd-button-rounded-corner " style={{"font-family": "FontAwesome, Helvetica, sans-serif"}} placeholder='&#xf002;   Search Twitter' />
                    </div>
                    <div className="col-1 mt-1 ps-2">
                        <i className="fas fa-cog fa-2x align-middle justify-content-start" style={{"fontSize":"24px", "color": "deepskyblue"}}></i>
                    </div>
             </div>

                <ul className="nav nav-pills mb-2" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link wd-pill-color active" href="foryou.html">For you</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link wd-pill-color" href="trending.html">Trending</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link wd-pill-color" href="news.html">News</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link wd-pill-color" href="sports.html">Sports</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link d-none d-md-block wd-pill-color" href="entertainment.html">Entertainment</a>
                    </li>
                </ul>
            <div className="wd-image mb-2">
                <figure className="wd-txtover">
                    <img alt={"Starship"} src="/images/starship.jpeg" height="400px" width="100%"/>
                    <figcaption ps-1>Space X's StarShip </figcaption>
                </figure>
            </div>
            
            
           <PostSummaryList/>

        </div>
    );
}
export default ExploreComponent;
