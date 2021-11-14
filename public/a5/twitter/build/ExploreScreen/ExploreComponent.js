import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
             <div class="row mb-2">
                    <div class="col-11">
                        <input class="form-control wd-button-rounded-corner " style="font-family: FontAwesome, Helvetica, sans-serif;" placeholder='&#xf002   Search Twitter' />
                    </div>
                    <div class="col-1 mt-1 ps-2">
                        <i class="fas fa-cog fa-2x align-middle justify-content-start" style="color:deepskyblue; font-size:24px"></i>
                    </div>
             </div>
           
                <ul id = "navigation-bar" class="nav nav-pills mb-2" id="pills-tab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link wd-pill-color active" href="foryou.html">For you</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link wd-pill-color" href="trending.html">Trending</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link wd-pill-color" href="news.html">News</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link wd-pill-color" href="sports.html">Sports</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link d-none d-md-block wd-pill-color" href="entertainment.html">Entertainment</a>
                    </li>
                </ul>
           <div class="wd-image mb-2">
                <figure class="wd-txtover"> <img alt = "Starship" src="../images/starship.jpeg" height="400px" width="100%">
                    <figcaption ps-1>Space X's StarShip </figcaption>
                </figure>
            </div>
            
            
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
