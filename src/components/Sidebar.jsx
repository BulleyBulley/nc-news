import React from "react";
import { useState, useEffect } from "react";
import { getTopics } from "../utils/Api";

const Sidebar = (props) => {
  const { setSortBy, setOrderBy, setTitleSearch, topics, setSelectedTopics } = props;
  const [newSearchTerm, setNewSearchTerm] = useState("");
  useEffect(() => {
    getTopics().then((response) => {
      setSelectedTopics(response);
    });
  }, []);
  
  return (
    <section className="sidebar_section_class">
      <div className="sidebar_search_container">
        <div className="sidebar_sort_buttons">
          <h3>Sort By:</h3>

          <div className="sidebar_sort_buttons_items">
            <input
              type="radio"
              value="created_at"
              name="sort_by"
              onClick={() => setSortBy("created_at")}
            />{" "}
            Date Created
            <input
              type="radio"
              value="comment_count"
              name="sort_by"
              onClick={() => setSortBy("comment_count")}
            />{" "}
            Comment Count
            <input
              type="radio"
              value="votes"
              name="sort_by"
              onClick={() => setSortBy("votes")}
            />{" "}
            Votes
            <input
              type="radio"
              value="title"
              name="sort_by"
              onClick={() => setSortBy("title")}
            />{" "}
            Title
          </div>

          <div className="sidebar_sort_buttons_direction">
            <h3>Order</h3>
            <input
              type="radio"
              value="asc"
              name="order"
              onClick={() => setOrderBy("asc")}
            />{" "}
            Asc
            <input
              type="radio"
              value="desc"
              name="order"
              onClick={() => setOrderBy("desc")}
            />{" "}
            Desc
          </div>

          <div className="sidebar_title_search">
            <h3>Title Search</h3>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setTitleSearch(newSearchTerm);
                setNewSearchTerm("");
              }}
            >
              <label htmlFor="searchTerm">Title Search:</label>
              <input
                type="text"
                id="searchTerm"
                onChange={(event) => {
                  setNewSearchTerm(event.target.value);
                }}
                value={newSearchTerm}
              />
              <button>Search</button>
            </form>
          </div>

          <div className="sidebar_topic_search">
            <label>
              <h2>Topic:</h2>
            </label>

            <select
              className="select_topics_class"
              name="topics"
              onChange={(event) => setSelectedTopics(event.target.value)}
            >
              {
                topics.map((topic) => {
                  return <option key={topic.slug}>{topic.slug}</option>
                })
              }
              
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
