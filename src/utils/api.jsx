import axios from  'axios'

const listApi = axios.create({baseURL:`https://pb-nc-news.herokuapp.com/api`})

const getArticles = (sort_by) => {
    return listApi.get(`/articles`, {
      params: {
        sort_by: sort_by
      }
    })
    .then(({data}) => {
      return data.allArticles
    })
  }

  const getSingleArticle = (article_id) => {
    return listApi.get(`/articles/${article_id}`)
    .then(({data}) => {
      
      return data
    })
  }

  const getCommentsByArticle = (article_id) => {
    return listApi.get(`/articles/${article_id}/comments`).then(({data}) => {
      console.log(data)
      return data.commentsByArticleId
    })
  }

  const getUser = (form) => {
    const username = form.username
    return listApi.get(`/users/${username}`)
    .then(({data}) => {
      //console.log(data)
      return data
    })
  }

  export { getArticles, getSingleArticle, getCommentsByArticle, getUser }