const PostItem = (post)  => {
    return(`
        <div class="wd-grid-row">
            <div class="wd-profile-image-col">
             <img class="wd-image-radius" src=${post.profile_image} alt="Avatar">
           </div>
            <div class="wd-content-col ">
                <b class="wd-font-author">${post.name} </b>
                <label class="wd-font-handle"> @${post.userName} </label>
                &middot
                <label> ${post.time} </label>
                <i class="fas fa-ellipsis-h wd-ellipsis"></i>

                <p class="wd-para">${post.content}</p>

                <div>
                    <div class="wd-image-box-bk">
                        <img class="wd-image-bk logo ${post.image_title === '' ? 'wd-round-bottom-post' : ''}" src=${post.image}> </br>
                        <div class="${post.image_title !== '' ? 'wd-image-text-box' : ''}">
                            
                            <label class="${post.image_title !== '' ? 'wd-image-heading' : ''}><b>${post.image_title}</b></label>
                            <label class="${post.image_description !== '' ? 'wd-image-text' : ''}">
                                 ${post.image_description}
                            </label>
                            <span><i class="${post.website !== '' ? 'fas fa-link' : ''}" style="font-size: 12px"></i> ${post.website}</span>
    
                        </div>
                    </div>

                    <div class="wd-response ${post.image_title === '' ? 'm-0' : ''}"">
                        <a href="#" class="wd-link">
                            <i class="far fa-comment"></i>
                            ${post.comments}
                        </a>

                        <a href="#" class="wd-link">
                            <i class="fas fa-retweet"></i>
                            ${post.reshare}
                        </a>

                        <a href="#" class="wd-link">
                          <span class="wd-function">
                            <span class="material-icons"> favorite_border </span>
                            ${post.likes}
                          </span>
                        </a>

                        <a href="#" class="wd-link">
                          <span class="wd-function">
                            <span class="material-icons"> ios_share </span>
                          </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>       
        `);
}
export default PostItem ;