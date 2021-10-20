import React from "react";
import { Link } from "react-router-dom";

const ListArticles = ({ articles, page, setPage }) => {

  if (articles.length === 0) {return (
    <h2>No Results Found</h2>
  )}
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
                    
                      <h3>Topic:<strong>{article.topic}</strong></h3>
                      
                    </div>
                    <div className="articles_list_author">
                      <h3>Author: <strong>{article.author}</strong></h3>
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
        <div className="page_button_container">
        <button
          className="page-btn"
          onClick={() => setPage((currPage) => currPage -1)}
          disabled={page <= 1}
          >prev page</button>
          <span>page {page}</span>
          <button
          className="page-btn"
          onClick={() => setPage((currPage) => currPage + 1)}
          >next page</button>
          </div>
      </div>
    </section>
  );
};

export default ListArticles;
