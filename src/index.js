import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, NavLink, Switch, Redirect} from 'react-router-dom';

import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profile';
import PostItem from './components/post-item';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <header>
          <NavLink to="/">Home</NavLink><br/>
          <NavLink to="/posts">Posts</NavLink><br/>
          <NavLink 
            to="/profile"
            activeStyle = {{color: 'red'}}
          >Profile</NavLink>
        </header>
        <Switch>
          <Route path="/posts/:id/:username" component={PostItem}/>
          <Route path="/posts"  component={Posts}/>
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
