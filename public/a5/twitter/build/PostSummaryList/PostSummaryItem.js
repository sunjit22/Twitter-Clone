const PostSummaryItem = (post)  => {
    return(`
            <li class="list-group-item text-white">
                    <div class="row">
                        <div class="col-9">
                            <div class="wd-topic2">
                                ${post.topic}
                            </div>
                            <div class="wd-title">
                                <b>${post.userName}</b> <i class="fas fa-check-circle"></i>
                                <span class="wd-time"> - ${post.time} </span>
                            </div>
                            <div class="wd-subject-title">
                                <b>${post.title}</b>
                            </div>
                            <div class="wd-count">
                                ${post.tweets}
                            </div>
                        </div>
                        <div class="col-3">
                            <img alt={${post.userName}-avatar} src=${post.image} class="rounded float-end wd-image-post" alt="...">
                        </div>
                    </div>
                </li>
       
        `);
}
export default PostSummaryItem ;