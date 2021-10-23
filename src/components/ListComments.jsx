import React from "react";
import CommentDelete from "./CommentDelete";
import CommentVoter from "./CommentVoter";

const ListComments = ({ comments }) => {
  return (
    <div className="comments_class">
      <div className="comments_container">
        <ul>
          {comments.map((comment) => {
            return (
              <li key={comment.comment_id}>
                <div className="comments_list_container">
                  <div className="comments_list_body">
                    <h3>{comment.body}</h3>
                  </div>
                  <div className="comments_list_author">
                    <h3>Author: {comment.author}</h3>
                  </div>
                  <div className="comments_list_vote_container">
                    <div className="comments_list_vote">
                      <CommentVoter
                        votesComment={comment.votes}
                        comment_id={comment.comment_id}
                      />
                      <CommentDelete author={comment.author} comment_id={comment.comment_id} />
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ListComments;
