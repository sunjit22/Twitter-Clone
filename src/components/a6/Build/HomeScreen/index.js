import NavigationSidebar from "../NavigationSidebar";
import PostList from "../PostList"
import PostSummaryList from "../PostSummaryList";

const HomeScreen= () =>  {
    return (
        <div class="row mt-2 mb-2">
            <div class="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="Home"/>
            </div>
            <div class="col-10 col-lg-7 col-xl-6">
                <PostList/>
            </div>
            <div class="d-none d-lg-block col-4 col-lg-4 col-xl-4">
                <PostSummaryList/>
            </div>
        </div>
    );
};
export default HomeScreen;
