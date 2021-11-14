const PostSummaryItem = ({
                             post = {
                                 "topic": "Web Development",
                                 "userName": "ReactJS",
                                 "time": "2h",
                                 "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
                                 "image": "../images/react-blue.png"
                             }
                         }) => {
    return(
            <li className="list-group-item text-white">
                    <div className="row">
                        <div className="col-9">
                            <div className="wd-topic2">
                                {post.topic}
                            </div>
                            <div className="wd-title">
                                <b>{post.userName}</b> <i className="fas fa-check-circle"></i>
                                <span className="wd-time"> - {post.time} </span>
                            </div>
                            <div className="wd-subject-title">
                                <b>{post.title}</b>
                            </div>
                            <div className="wd-count">
                                {post.tweets}
                            </div>
                        </div>
                        <div className="col-3">
                            <img src={post.image} alt="post" className="rounded float-end wd-image-post"/>
                        </div>
                    </div>
                </li>
        );
}
export default PostSummaryItem ;