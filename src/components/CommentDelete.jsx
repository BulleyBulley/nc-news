import { useState, useContext } from "react";
import { deleteComment } from "../utils/Api"
import { RequiresLogin, UserContext } from "../utils/User";

const CommentDelete = ({comment_id}) => {
    const [setCommentToDelete] = useState()
    const [setIsError] = useState(false)
    const { isLoggedIn } = useContext(UserContext)

    const handleDelete = () => {
        setIsError(false);
        setCommentToDelete((currCommentToDelete) => currCommentToDelete);
        deleteComment(comment_id).catch(() => {
          console.log("in vote catch");
          setIsError(true);
          setCommentToDelete((currVoteChange) => currVoteChange - 1);
        });
      };

    return (
        <>
        <RequiresLogin isLoggedIn={isLoggedIn}>
          <div className="comment_delete_button_container">
            <label htmlFor="comment_delete_button_id">
              Delete
            </label>
            
            <button
              className="comment_delete_button"
              id="comment_delete_button_id"
              onClick={handleDelete}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>

            </button>
    
            </div>
            </RequiresLogin>
          
        </>
      );

}

export default CommentDelete