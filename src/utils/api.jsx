import axios from  'axios'

const listApi = axios.create({baseURL:`https://pb-nc-news.herokuapp.com/api`})

const getArticles = () => {
    return listApi.get(`/articles`)
    .then(({data}) => {
      return data.allArticles
    })
  }

  const getSingleArticle = (article_id) => {
    return listApi.get(`/articles/${article_id}`)
    .then(({data}) => {
      console.log(data)
      return data
    })
  }

  export { getArticles, getSingleArticle }