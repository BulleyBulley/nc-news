import { patchVotes } from "../utils/Api";
import { useState, useContext } from "react";
import { RequiresLogin, UserContext } from "../utils/User";

const ArticleVoter = ({ votes, article_id }) => {
  const [voteChange, setVoteChange] = useState(0);
  const [isError, setIsError] = useState(false);
  const { isLoggedIn, user } = useContext(UserContext);

  const handleVote = () => {
    setIsError(false);
    setVoteChange((currVoteChange) => currVoteChange + 1);
    patchVotes(article_id, 1).catch(() => {
      console.log("in votes catch");
      setIsError(true);
      setVoteChange((currVoteChange) => currVoteChange - 1);
    });
  };
  const handleVoteDown = () => {
    setIsError(false);
    setVoteChange((currVoteChange) => currVoteChange - 1);
    patchVotes(article_id, -1).catch(() => {
      console.log("in downvotes catch");
      setIsError(true);
      setVoteChange((currVoteChange) => currVoteChange + 1);
    });
  };
  return (
    <>
    
      <div className="articles_voter_container">
        <label htmlFor="voter_button_id">
          <h4>Votes: {votes + voteChange}</h4>
        </label>
        <RequiresLogin isLoggedIn={isLoggedIn}>
        <button
          className="voter_button"
          id="voter_button_id"
          onClick={handleVote}
        >
          <i class="fas fa-thumbs-up"></i>
        </button>

        <button
          className="voter_button"
          id="voter_button_id"
          onClick={handleVoteDown}
        >
          <i class="fas fa-thumbs-down"></i>
        </button>
        </RequiresLogin>
      </div>
    </>
  );
};

export default ArticleVoter;
