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



function App() {
  const [comments, setComments] = useState([])
  const [sortBy, setSortBy] = useState()
  const [orderBy, setOrderBy ] = useState()
  const [searchTerm, setTitleSearch] = useState()
  
  return (
    <BrowserRouter>
    <>
    <div className='main_body_container'>
    <Nav />
    <Logo />
    <Switch>
    <Route exact path='/'>
      <Sidebar sortBy={sortBy} setSortBy={setSortBy} orderBy={orderBy} setOrderBy={setOrderBy} searchTerm={searchTerm} setTitleSearch={setTitleSearch}/>
      <ShowArticles sortBy={sortBy} setSortBy={setSortBy} orderBy={orderBy} setOrderBy={setOrderBy} searchTerm={searchTerm}/>
    </Route>
    <Route exact path='/articles/:article_id'>
      <SidebarCommentsSection comments={comments} setComments={setComments} />
      <section className="single_article_section_class">
      <ShowSingleArticle />
      <ShowComments comments={comments} setComments={setComments} />
      </section>
    </Route>
    <Route exact path='/reading_list'>
      <Sidebar />
      <ReadingList />
    </Route>
    <Route exact path='/login'>
      <Login />
    </Route>
    <Route>
      <p>404 - page not found</p>
    </Route>
    </Switch>
    </div>
    </>
    </BrowserRouter>
  );
}

export default App;
