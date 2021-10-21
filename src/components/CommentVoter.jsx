import { patchVotesComment } from "../utils/Api";
import { useState } from "react";

const CommentVoter = ({ votesComment, comment_id }) => {
  const [voteChangeComment, setVoteChangeComment] = useState(0);
  const [isErrorComment, setIsErrorComment] = useState(false);

  const handleVoteComment = () => {
    setIsErrorComment(false);
    setVoteChangeComment((currVoteChangeComment) => currVoteChangeComment + 1);
    patchVotesComment(comment_id, 1).catch(() => {
      console.log("in comment votes catch");
      setIsErrorComment(true);
      setVoteChangeComment(
        (currVoteChangeComment) => currVoteChangeComment - 1
      );
    });
  };
  return (
    <>
      <div className="comment_voter_container">
        <label htmlFor="comment_voter_button_id">
          <h4>Votes: {votesComment + voteChangeComment}</h4>
        </label>
        <button
          className="comment_voter_button"
          id="comment_voter_button_id"
          onClick={handleVoteComment}
        >
          <i class="fas fa-thumbs-up"></i>
        </button>
      </div>
    </>
  );
};

export default CommentVoter;
