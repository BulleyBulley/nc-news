import React from "react";
import { Link } from "react-router-dom";

const ListArticles = ({ articles }) => {
  return (
    <section className="home_section_class">
      <div className="articles_class">
        <div className="articles_container">
          <ul>
            {articles.map((article) => {
              return (
                <li key={article.article_id}>
                  <div className="articles_list_container">
                    <div className="articles_list_header">
                    <Link to={`/articles/${article.article_id}`}>
                      <h2>{article.title}</h2>
                      </Link>
                    </div>
                    <div className="articles_list_topic">
                    
                      <h3><strong>Topic:</strong> {article.topic}</h3>
                      
                    </div>
                    <div className="articles_list_author">
                      <h3><strong>Author:</strong> {article.author}</h3>
                    </div>
                    <div className="articles_list_footer">
                      <h4>Comments: {article.comment_count}</h4>
                    </div>
                    <div className="articles_list_footer_b">
                      <h4>Votes: {article.votes}</h4>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ListArticles;
