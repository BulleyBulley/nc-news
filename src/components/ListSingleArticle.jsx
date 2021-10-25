import React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import ArticleDelete from "./ArticleDelete";
import ArticleVoter from "./ArticleVoter";

const ListSingleArticle = ({ singleArticle, loading, err }) => {
  if (loading)
  return (
    <section className="home_section_class">
      
      <div className="preload">
        <Box sx={{ width: "50%" }}>
          <h3>loading...</h3>
          <LinearProgress />
        </Box>
        
      </div>
    </section>
  );

  return (
    
    <div className="single_article_class">
      {err ? <h2>Article Not Found</h2> : null}
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
