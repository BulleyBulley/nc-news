import React from "react";
import { useParams } from "react-router";
import { useState, useContext } from "react";
import { postComment } from "../utils/Api";
import { RequiresLogin, UserContext } from "../utils/User";
import TextField from "@mui/material/TextField";

const SidebarCommentsSection = (props) => {
  const { isLoggedIn, user } = useContext(UserContext);
  const { comments, setComments } = props
  const { article_id } = useParams();

  const [form, setForm] = useState({ username: user, body: "" });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    
    setForm((values) => ({ ...values, [name]: value }));
  };

  const AddComment = (event) => {
    event.preventDefault();
    postComment(form, article_id);
       setForm({ username: user, body: "" });
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
          <form className="post_comment_form_class" onSubmit={AddComment}>
            <TextField
              type="text"
              name="body"
              placeholder="Add Comment"
              value={form.body}
              onChange={handleChange}
              required
            />

            <input type="submit" value="Submit" />
          </form>
        </div>
      </section>
    </RequiresLogin>
  );
};

export default SidebarCommentsSection;
