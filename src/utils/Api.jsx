import axios from "axios";

const listApi = axios.create({
  baseURL: `https://pb-nc-news.herokuapp.com/api`,
});

const getArticles = (sortBy, orderBy, searchTerm, page, topicChoice) => {
  if (topicChoice === "all") topicChoice = null;
  return listApi
    .get(`/articles`, {
      params: {
        sort_by: sortBy,
        order: orderBy,
        title: searchTerm,
        p: page,
        topic: topicChoice,
      },
    })
    .then(({ data }) => {
      return data.allArticles;
    });
};

const getSingleArticle = (article_id) => {
  return listApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data;
  });
};

const getCommentsByArticle = (article_id) => {
  return listApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.commentsByArticleId;
  });
};

const getUser = (form) => {
  const username = form.username;
  return listApi.get(`/users/${username}`).then(({ data }) => {
    return data;
  });
};

const postComment = (form, article_id) => {
  listApi
    .post(`/articles/${article_id}/comments`, form)
    .then((response) => {
      return response.data.postedComment[0];
    })
    .catch((err) => {
      console.log(err);
    });
};

const getTopics = () => {
  return listApi.get(`/topics`).then(({ data }) => {
    return data.topics;
  });
};

const patchVotes = (article_id, vote) => {
  return listApi
    .patch(`/articles/${article_id}`, { inc_votes: vote })
    .then((response) => {
      return response.data.user;
    });
};

const patchVotesComment = (comment_id, voteComment) => {
  return listApi
    .patch(`/comments/${comment_id}`, { inc_votes: voteComment })
    .then((response) => {
      return response.data.comment;
    });
};

const postArticle = (postForm) => {
  return listApi
    .post(`/articles`, postForm)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteComment = (comment_id) => {
  return listApi
    .delete(`/comments/${comment_id}`)
    .then((response) => {
      console.log(response)
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteArticle = (article_id) => {
  return listApi
    .delete(`/articles/${article_id}`)
    .then((response) => {
      console.log(response)
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
};

export {
  getArticles,
  getSingleArticle,
  getCommentsByArticle,
  getUser,
  postComment,
  getTopics,
  patchVotes,
  patchVotesComment,
  postArticle,
  deleteComment,
  deleteArticle
};
