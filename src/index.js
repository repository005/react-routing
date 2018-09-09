import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profile';
import PostItem from './components/post-item';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">Home</Link><br/>
          <Link to="/posts">Posts</Link><br/>
          <Link to={{
            pathname: "/profile"
          }}>Profile</Link>
        </header>
        <Switch>
          <Route path="/posts"  component={Posts}/>
          <Route path="/posts/:id/:username" component={PostItem}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/"  component={Home}/>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <App/>, 
  document.getElementById('root')
)
