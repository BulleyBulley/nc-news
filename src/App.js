import './App.css';
import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import ShowArticles from './components/ShowArticles';
import Login from './components/Login'
import Logo from './components/Logo';
import Sidebar from './components/Sidebar'
import ReadingList from './components/ReadingList';
import ShowSingleArticle from './components/ShowSingleArticle';
import ShowComments from './components/ShowComments';
import SidebarCommentsSection from './components/SidebarComments';
import SendArticle from './components/SendArticle';



function App() {
  const [comments, setComments] = useState([])
  const [sortBy, setSortBy] = useState()
  const [orderBy, setOrderBy ] = useState()
  const [searchTerm, setTitleSearch] = useState()
  const [topics, setSelectedTopics] = useState(['default'])
  const [topicChoice, setTopicChoice] = useState()
  
  
  return (
    <BrowserRouter>
    <>
    <div className='main_body_container'>
    <Nav />
    <Logo />
    <Switch>
    <Route exact path='/'>
      <Sidebar sortBy={sortBy} setSortBy={setSortBy} orderBy={orderBy} setOrderBy={setOrderBy} searchTerm={searchTerm} setTitleSearch={setTitleSearch} topics= {topics} setSelectedTopics={setSelectedTopics} topicChoice={topicChoice} setTopicChoice={setTopicChoice}/>
      <ShowArticles sortBy={sortBy} setSortBy={setSortBy} orderBy={orderBy} setOrderBy={setOrderBy} searchTerm={searchTerm} topicChoice={topicChoice} setTopicChoice={setTopicChoice}/>
    </Route>
    <Route exact path='/articles/:article_id'>
      <SidebarCommentsSection comments={comments} setComments={setComments} />
      <section className="single_article_section_class">
      <ShowSingleArticle comments={comments}/>
      <ShowComments comments={comments} setComments={setComments} />
      </section>
    </Route>
    <Route exact path='/reading_list'>
      <Sidebar sortBy={sortBy} setSortBy={setSortBy} orderBy={orderBy} setOrderBy={setOrderBy} searchTerm={searchTerm} setTitleSearch={setTitleSearch} topics= {topics} setSelectedTopics={setSelectedTopics} topicChoice={topicChoice} setTopicChoice={setTopicChoice}/>
      <ReadingList />
    </Route>
    <Route exact path='/login'>
      <Login />
    </Route>
    <Route exact path='/post'>
      <SendArticle />
    </Route>
    <Route>
      <h2>404 - page not found</h2>
      <img src='https://httpstatusdogs.com/img/404.jpg' alt='not found'></img>
    </Route>
    </Switch>
    </div>
    </>
    </BrowserRouter>
  );
}

export default App;
