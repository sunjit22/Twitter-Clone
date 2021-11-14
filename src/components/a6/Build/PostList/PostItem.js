
const PostItem = ({
                      post = { "name": "Elon Musk", "userName": "elonmusk", "profile_image": "../images/elon_dp.jpeg", "time": "23h",
                          "content": "Amazing show about <a href='#' style='color: deepskyblue'>@Inspiration4x</a> mission!",
                          "image": "/images/inspiration4.jpeg",
                          "image_title" : "Countdown: Inspiration4 Mission to Space | Netf>lix Official Site",
                          "image_description":"From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space",
                          "website": "netflix.com",
                          "comments": "4.2K", "reshare": "3.5K", "likes":"37.5K"}
                  }) => {
    return(
        <div className="wd-grid-row">
            <div className="wd-profile-image-col">
             <img className="wd-image-radius" src={post.profile_image} alt="Avatar"/>
            </div>
            <div className="wd-content-col ">
                <b className="wd-font-author">{post.name} </b>
                <label className="wd-font-handle pe-1">   @{post.userName}   </label>

                &middot;

                <label className="ps-1"> {post.time} </label>
                <i className="fas fa-ellipsis-h wd-ellipsis"></i>


                <p className="wd-para"><span dangerouslySetInnerHTML={{__html:post["content"]}}></span></p>

                <div>
                    <div className="wd-image-box-bk">
                        <img className= {`${post.image_description === '' ? 'wd-image-bk logo wd-round-bottom-post' : 'wd-image-bk logo '}`} src={post.image} alt = "Post"/> <br/>
                        <div className={`${post.image_title !== '' ? 'wd-image-text-box' : ''}`}>
                            
                            <label className={`${post.image_title !== '' ? 'wd-image-heading' : ''}`}><b>{post.image_title}</b></label>
                            <label className={`${post.image_description !== '' ? 'wd-image-text' : ''} style={{fontSize:"12px"}}`}>
                                {post.image_description}
                            </label>
                            <span><i className={`${post.website !== '' ? 'fas fa-link' : ''} style={{fontSize:"12px"}}`}></i> {post.website}</span>
    
                        </div>
                    </div>

                    <div className={`wd-response ${post.image_title === '' ? 'm-0' : ''}`}>
                        <a href="/#" className="wd-link" style={{"fontSize":"14px"}}>
                            <i className="far fa-comment me-2" ></i>
                            {post.comments}
                        </a>

                        <a href="/#" className="wd-link" style={{"fontSize":"14px"}}>
                            <i className="fas fa-retweet me-2"></i>
                            {post.reshare}
                        </a>

                        <a href="/#" className="wd-link" style={{"fontSize":"14px"}}>
                            <i className="far fa-heart me-2" ></i>
                              {post.likes}
                        </a>

                        <a href="/#" className="wd-link" style={{"fontSize":"14px"}}>
                            <i className="far fa-share-square"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>       
        );
}
export default PostItem;