import { patchVotes } from "../utils/Api";
import { useState, useContext } from "react";
import { RequiresLogin, UserContext } from "../utils/User";

const ArticleVoter = ({ votes, article_id }) => {
  const [voteChange, setVoteChange] = useState(0);
  // eslint-disable-next-line
  const [error, setIsError] = useState(false);
  const { isLoggedIn } = useContext(UserContext);
  const [disable, setDisable] = useState(false);


  const handleVote = () => {
    setIsError(false);
    setVoteChange((currVoteChange) => currVoteChange + 1);
    patchVotes(article_id, 1).catch(() => {
      setIsError(true);
      setVoteChange((currVoteChange) => currVoteChange - 1);
    });
  };
  const handleVoteDown = () => {
    setIsError(false);
    setVoteChange((currVoteChange) => currVoteChange - 1);
    patchVotes(article_id, -1).catch((error) => {
      setIsError(true);
      setVoteChange((currVoteChange) => currVoteChange + 1);
    });
  };
  return (
    <>
      
        <label htmlFor="voter_button_id">
          <h4>Votes: {votes + voteChange}</h4>
        </label>
        <RequiresLogin isLoggedIn={isLoggedIn}>
        <div className='article_voter_button_container'>
          <button
            className="voter_button"
            id="voter_button_id"
            disabled={disable}
            onClick={() => {
              handleVote()
              setDisable(true)
            }}
          >
            <i className="fas fa-thumbs-up"></i>
          </button>

          <button
            className="voter_button"
            id="voter_button_id"
            disabled={disable}
            onClick={() => {
              handleVoteDown()
              setDisable(true)
            }}
          >
            
            <i className="fas fa-thumbs-down"></i>
          </button>
          </div>
        </RequiresLogin>
        
    </>
  );
};

export default ArticleVoter;
