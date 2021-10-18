import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import ShowArticles from './components/ShowArticles';
import Login from './components/Login'
import Logo from './components/Logo';
import Sidebar from './components/Sidebar'
import ReadingList from './components/ReadingList';

function App() {
  return (
    <BrowserRouter>
    <>
    <div className='main_body_container'>
    <Nav />
    <Logo />
    <Switch>
    <Route exact path='/'>
      <Sidebar />
      <ShowArticles />
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
