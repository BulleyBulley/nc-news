import { patchVotesComment } from "../utils/Api";
import { useState, useContext } from "react";
import { RequiresLogin, UserContext } from "../utils/User";

const CommentVoter = ({ votesComment, comment_id }) => {
  const [voteChangeComment, setVoteChangeComment] = useState(0);
  const [isErrorComment, setIsErrorComment] = useState(false);
  const { isLoggedIn } = useContext(UserContext);

  const handleVoteComment = () => {
    setIsErrorComment(false);
    setVoteChangeComment((currVoteChangeComment) => currVoteChangeComment + 1);
    patchVotesComment(comment_id, 1).catch((isErrorComment) => {
      setIsErrorComment(true);
      setVoteChangeComment(
        (currVoteChangeComment) => currVoteChangeComment - 1
      );
    });
  };

  const handleVoteDownComment = () => {
    setIsErrorComment(false);
    setVoteChangeComment((currVoteChangeComment) => currVoteChangeComment - 1);
    patchVotesComment(comment_id, -1).catch(() => {
      setIsErrorComment(true);
      setVoteChangeComment(
        (currVoteChangeComment) => currVoteChangeComment + 1
      );
    });
  };
  return (
    <>
      <div className="comment_voter_container">
        <label htmlFor="comment_voter_button_id">
          <h4>Votes: {votesComment + voteChangeComment}</h4>
        </label>
        <RequiresLogin isLoggedIn={isLoggedIn}>
          <button
            className="comment_voter_button"
            id="comment_voter_button_id"
            onClick={handleVoteComment}
          >
            <i class="fas fa-thumbs-up"></i>
          </button>
          <button
            className="comment_voter_button"
            id="comment_voter_button_id"
            onClick={handleVoteDownComment}
          >
            <i class="fas fa-thumbs-down"></i>
          </button>
        </RequiresLogin>
      </div>
    </>
  );
};

export default CommentVoter;
