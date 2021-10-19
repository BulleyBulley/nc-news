import React from "react";
import { useParams } from "react-router";
import { useState, useContext } from "react";
import { postComment } from "../utils/Api";
import { RequiresLogin, UserContext } from "../utils/User";

const SidebarCommentsSection = () => {
  const { isLoggedIn, user } = useContext(UserContext);

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
  };

  return (
    <RequiresLogin isLoggedIn={isLoggedIn}>
      <section className="sidebar_comments_section">
        <form className="post_comment_form_class" onSubmit={AddComment}>
          <input
            type="text"
            name="body"
            placeholder="Add Comment"
            value={form.body}
            onChange={handleChange}
            required
          />

          <input type="submit" value="Submit" />
        </form>
      </section>
    </RequiresLogin>
  );
};

export default SidebarCommentsSection;
