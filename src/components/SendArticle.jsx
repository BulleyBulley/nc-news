import React from "react";
import { useState, useContext, useEffect } from "react";
import { postArticle, getTopics } from "../utils/Api";
import { RequiresLogin, UserContext } from "../utils/User";

const SendArticle = () => {
  const { isLoggedIn, user } = useContext(UserContext);
  const [postTopics, setSelectedPostTopics] = useState([''])
  const [postTopicChoice, setPostTopicChoice] = useState('')


  const [postForm, setPostForm] = useState({
    username: user,
    body: "",
    topic: "coding",
    title: "",
  });

  useEffect(() => {
    getTopics().then((response) => {
      setSelectedPostTopics(response);
    });
  }, [setSelectedPostTopics]);

  const handleChange = (event) => {
      console.log(event.name)
    const name = event.target.name;
    const value = event.target.value;
    setPostForm((values) => ({ ...values, [name]: value }));
  };

  const AddPost = (event) => {
    event.preventDefault();
    
    postArticle(postForm);
    setPostForm({ username: user, body: "", topic: "", title: "" });
  };

  if (!isLoggedIn)
    return (
      <section className="sidebar_comments_section">
        <h2>Login To Comment and Vote</h2>
      </section>
    );

  return (
    <RequiresLogin isLoggedIn={isLoggedIn}>
      <section className="sidebar_comments_section">
        <div className="sidebar_post_comment_container">
          <h2>Logged in as: {user}</h2>
          <form className="post_comment_form_class" onSubmit={AddPost}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={postForm.title}
              onChange={handleChange}
              required
            />
            <div className="post_topic">
              <label htmlFor="topics_id">Topic:</label>
              <select
                className="post_topic_select"
                id="topics_id"
                name="topic"
                placeholder="Topics"
                value={postTopicChoice}
                onClick={handleChange}
              >
                {postTopics.map((topic) => {
                  return <option key={topic.slug}>{topic.slug}</option>;
                })}
              </select>
              <input
                type="text"
                name="body"
                placeholder="Add New Post"
                value={postForm.body}
                onChange={handleChange}
                required
              />

              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </section>
    </RequiresLogin>
  );
};

export default SendArticle;
