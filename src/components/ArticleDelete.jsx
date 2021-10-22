import { useState, useContext } from "react";
import { deleteArticle } from "../utils/Api"
import { RequiresLogin, UserContext } from "../utils/User";
import { goBack } from "../utils/Util";

const ArticleDelete = ({article_id}) => {
    const [articleToDelete, setArticleToDelete] = useState([])
    const [error, setIsError] = useState(false)
    const { isLoggedIn } = useContext(UserContext)

    const handleDelete = () => {
        deleteArticle(article_id)
        goBack()
    }
    return (
        <>
        <RequiresLogin isLoggedIn={isLoggedIn}>
          <div className="article_delete_button_container">
            <label htmlFor="article_delete_button_id">
              Delete
            </label>
            
            <button
              className="article_delete_button"
              id="article_delete_button_id"
              onClick={handleDelete}
            >
              <i className="fa fa-trash" aria-hidden="true"></i>

            </button>
    
            </div>
            </RequiresLogin>
          
        </>
      );

}

export default ArticleDelete