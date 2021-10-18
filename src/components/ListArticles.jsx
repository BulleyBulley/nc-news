import React from "react";

const ListArticles = ({ articles, singleArticles }) => {
  return (
    <section className="home_section_class">
      <div className="articles_class">
        <div className="articles_container">
          <ul>
            {articles.map((article, singleArticles) => {
              return (
                <li key={article.article_id}>
                  <div className="articles_list_container">
                    <div className="articles_list_header">
                      <h2>{article.title}</h2>
                      <h3>Author: {article.author}</h3>
                    </div>
                    <div className="articles_list_body">{singleArticles.body}</div>
                    <div className="articles_list_footer">Article Footer</div>
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
