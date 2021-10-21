import React from "react";

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
                  <div className="comments_list_vote">
                    <h4>Votes: {comment.vote}</h4>
                    
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
