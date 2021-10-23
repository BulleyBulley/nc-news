import React from "react";
import ArticleDelete from "./ArticleDelete";
import ArticleVoter from "./ArticleVoter";

const ListSingleArticle = ({ singleArticle }) => {
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
                  Topic: <strong>{singleArticle.topic}</strong>
                </h3>
              </div>

              <div className="single_article_list_author">
                <h3>
                  Author: <strong>{singleArticle.author}</strong>
                </h3>
              </div>
              <div className="single_article_list_body">
                <p>{singleArticle.body}</p>
              </div>

              <div className="single_article_list_footer">
                <h4>Comments: {singleArticle.comment_count}</h4>
              </div>
              <div className="single_article_list_footer_b">
                <ArticleVoter
                  votes={singleArticle.votes}
                  article_id={singleArticle.article_id}
                />
                <ArticleDelete author={singleArticle.author} article_id={singleArticle.article_id}/>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ListSingleArticle;
