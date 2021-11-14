import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.json";

const PostSummaryList = ({title}) => {

            return (
            <ul className="list-group">

                {
                    title &&
                    <li className="list-group-item">
                        <h5 className="fw-bolder" style={{fontSize:"20px"}}>{title}</h5>
                    </li>
                }
                {
                    posts.map(post => {
                        return (<PostSummaryItem post = {post}/>);
                    })
                }       
            </ul>
            
        );
}
export default PostSummaryList;