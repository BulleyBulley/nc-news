import { useContext } from "react";
import { deleteArticle } from "../utils/Api";
import { RequiresLogin, UserContext } from "../utils/User";
import { goBack } from "../utils/Util";

const ArticleDelete = ({ article_id, author }) => {
  //const [error, setIsError] = useState(false);
  const { isLoggedIn, user } = useContext(UserContext);

  const handleDelete = () => {
    deleteArticle(article_id).then(() => {
      goBack();
    });
  };
  return (
    <>
      <RequiresLogin isLoggedIn={isLoggedIn}>
        <div className='article_delete_button_container'>
          <label htmlFor="article_delete_button_id"><h4>Delete</h4></label>

          <button
            className="article_delete_button"
            id="article_delete_button_id"
            onClick={handleDelete}
            disabled={user!==author}
          >
            <i className="far fa-trash-alt"></i>
          </button>
          </div>
      </RequiresLogin>
    </>
  );
};

export default ArticleDelete;
