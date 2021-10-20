import React from "react";
import { useState, useEffect } from "react";
import { getTopics } from "../utils/Api";

const Sidebar = (props) => {
  const {
    setSortBy,
    setOrderBy,
    setTitleSearch,
    topics,
    setSelectedTopics,
    topicChoice,
    setTopicChoice,
  } = props;
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
          <label htmlFor='sort_by_buttons'>Sort By:</label>

          <div className="sidebar_sort_buttons_items">
            <input
              type="radio"
              id="sort_by_buttons"
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
            <label htmlFor='direction_buttons'>Order:</label>
            <input
              type="radio"
              id='direction_buttons'
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
            <label htmlFor='topics_id'>Topic:</label>

            <select
              className="select_topics_class"
              id='topics_id'
              name="topics"
              value={topicChoice}
              onChange={(event) => {
                console.log(event.target.value)
                //if (event.target.value === 'all') {setTopicChoice(null)}
                setTopicChoice(event.target.value);
              }}
            > <option key="all">all</option>
              {topics.map((topic) => {
                return <option key={topic.slug}>{topic.slug}</option>;
              })}
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
