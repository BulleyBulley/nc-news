import axios from  'axios'


const listApi = axios.create({baseURL:`https://pb-nc-news.herokuapp.com/api`})

const getArticles = (sortBy) => {
  
  
    return listApi.get(`/articles`, {
      params: {
        sort_by: sortBy
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

  const postComment = (form, article_id) => {
    
    listApi.post(`/articles/${article_id}/comments`, form).then((response) => {
      //console.log(response.data.postedComment[0])
      return response.data.postedComment[0]
    }).catch((err) => {
      console.log(err)
    })
  }

  export { getArticles, getSingleArticle, getCommentsByArticle, getUser, postComment }