import NavigationSidebar from "../NavigationSidebar/index.js";
import PostList from "../PostList/index .js"
import PostSummaryList from "../PostSummaryList/index.js";

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2 mb-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2">
            ${NavigationSidebar("Home")}
        </div>    
        <div class="col-10 col-lg-7 col-xl-6">
            ${PostList()}
        </div>
        <div class="d-none d-lg-block col-4 col-lg-4 col-xl-4">
            ${PostSummaryList()}
        </div>
      
        </div>

    `);
})($);
