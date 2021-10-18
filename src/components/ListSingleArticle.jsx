import React from "react";
import { Link } from "react-router-dom";

const ListSingleArticle = ({ singleArticle }) => {
  console.log(singleArticle);

  return (
    
      <div className="single_article_class">
        <div className="single_article_container">
          <ul>
            <li key={singleArticle.article_id}>
              <div className="single_article_list_container">
                <div className="single_article_list_header">
                  <h2>{singleArticle.title}</h2>
                </div>
                <div className="single_article_list_topic">
                  <h3>
                    <strong>Topic:</strong> {singleArticle.topic}
                  </h3>
                </div>

                <div className="single_article_list_author">
                  <h3>
                    <strong>Author:</strong> {singleArticle.author}
                  </h3>
                </div>
                <div className="single_article_list_body">
                  <p>{singleArticle.body}</p>
                </div>

                <div className="single_article_list_footer">
                  <h4>Comments: {singleArticle.comment_count}</h4>
                </div>
                <div className="single_article_list_footer_b">
                  <h4>Votes: {singleArticle.votes}</h4>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    
  );
};

export default ListSingleArticle;
