import { useContext } from "react";
import { deleteComment } from "../utils/Api"
import { RequiresLogin, UserContext } from "../utils/User";

const CommentDelete = ({comment_id, author}) => {
    
    //const [error, setIsError] = useState(false)
    const { isLoggedIn, user } = useContext(UserContext)

    const handleDelete = () => {
        
        deleteComment(comment_id)
    }
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
              disabled={user!==author}
              
            >
              <i className="fa fa-trash" aria-hidden="true"></i>

            </button>
    
            </div>
            </RequiresLogin>
          
        </>
      );

}

export default CommentDelete