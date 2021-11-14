
const NavigationSidebar = (pageName) => {



    return(
        `
             <div class="list-group">
                <a class="list-group-item page-link"  href="/">
                    <i class="fab fa-twitter" style="color:white"></i>
                </a>
                <a class="list-group-item page-link ${pageName === 'Home' ? 'active' : ''}" href="../HomeScreen/home.html">
                    <div class="wd-list-options"><i class="fas fa-home" style="color: white"></i></div>
                
                    <span class="d-none d-xl-block wd-list-options text-white"> Home</span>
                </a>
                <a id = "Explore" class="list-group-item page-link ${pageName === 'Explore' ? 'active' : ''}" href="../ExploreScreen/explore.html">
                    <div class="wd-list-options"><i class="fas fa-hashtag"></i></div>
                    <span class="d-none d-xl-block wd-list-options text-white ">
                     Explore </span>
                </a>
                
                <a class="list-group-item page-link" href="notifications.html">
                    <div class="wd-list-options"><i class="fas fa-bell" style="color: white"></i></div>
                    <span class="d-none d-xl-block wd-list-options text-white"> Notifications</span>
                </a>
                <a class="list-group-item page-link" href="messages.html">
                    <div class="wd-list-options"><i class="fas fa-envelope" style="color: white"></i></div>
                    <span class="d-none d-xl-block wd-list-options text-white"> Messages</span>
                </a>
                <a class="list-group-item page-link" href="bookmarks.html">
                    <div class="wd-list-options"><i class="fas fa-bookmark" style="color: white"></i></div>
                    <span class="d-none d-xl-block wd-list-options text-white"> Bookmarks</span>
                </a>
                <a class="list-group-item page-link" href="lists.html">
                    <div class="wd-list-options"><i class="fas fa-list" style="color: white"></i></div>
                    <span class="d-none d-xl-block wd-list-options text-white"> Lists</span>
                </a>
                <a class="list-group-item page-link" href="profile.html">
                    <div class="wd-list-options"><i class="fas fa-user" style="color: white"></i></div>
                    <span class="d-none d-xl-block wd-list-options text-white"> Profile</span>
                </a>
                <a class="list-group-item mt-0 ms-0 pt-0 ps-0 me-0 page-link" href="more.html">
                    <div class="wd-list-options ps-2">
                            <span class="fa-stack fa-1x">
                              <i class="far fa-circle fa-stack-1x" style="color: white"></i>
                              <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse" style="font-size:10px; color: white"></i>
                            </span><br/>
                    </div>
                    <span class="d-none d-xl-block wd-list-options pt-1 ms-0 text-white"> More</span>

                </a>
            </div>

            <div class="d-grid gap-2">
                <button class="btn btn-primary mt-2 btn-block rounded-pill">Tweet</button>
            </div>
    `);
}
export default NavigationSidebar;
