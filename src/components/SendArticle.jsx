import React from "react";
import { useState, useContext, useEffect } from "react";
import { postArticle, getTopics } from "../utils/Api";
import { RequiresLogin, UserContext } from "../utils/User";
import TextField from "@mui/material/TextField";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../utils/Theme";

const SendArticle = () => {
  const { isLoggedIn, user } = useContext(UserContext);
  const [postTopics, setSelectedPostTopics] = useState([]);
  const [postTopicChoice, setPostTopicChoice] = useState([]);

  const [postForm, setPostForm] = useState({
    author: user,
    body: "",
    topic: "coding",
    title: "",
    votes: "0",
  });

  useEffect(() => {
    getTopics().then((response) => {
      setSelectedPostTopics(response);
    });
  }, [setSelectedPostTopics]);

  const handleChange = (event) => {
    let name = event.target.name;

    const value = event.target.value;

    setPostForm((values) => ({ ...values, [name]: value }));
  };

  const AddPost = (event) => {
    event.preventDefault();

    postArticle(postForm);
    setPostForm({ author: user, body: "", topic: [], title: "" });
  };

  if (!isLoggedIn)
    return (
      <section className="sidebar_comments_section">
        <h2>Login To Comment and Vote</h2>
      </section>
    );

  return (
    <RequiresLogin isLoggedIn={isLoggedIn}>
      <section className="post_article_section">
        <ThemeProvider theme={theme}>
          <div className="post_article_container">
            <h2>Logged in as: {user}</h2>
            <form className="post_form_class" onSubmit={AddPost}>
              <TextField
                type="text"
                id="post_title_input"
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
                  onChange={(event) => {
                    setPostTopicChoice(event.target.value);
                    handleChange(event);
                  }}
                >
                  {postTopics.map((topic) => {
                    return <option key={topic.slug}>{topic.slug}</option>;
                  })}
                </select>
                <TextField
                  type="text"
                  id="post_body_input"
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
        </ThemeProvider>
      </section>
    </RequiresLogin>
  );
};

export default SendArticle;
