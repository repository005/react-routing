import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, NavLink, Switch} from 'react-router-dom';


import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profile';
import PostItem from './components/post-item';
import Life from './components/lifecycles';
import User from './components/user';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <header>
          <NavLink to="/">Home</NavLink><br/>
          <NavLink activeStyle={{color: 'red'}} to="/posts">Posts</NavLink><br/>
          <NavLink to={{
            pathname: "/profile"
          }} activeStyle={{color: 'red'}}>Profile</NavLink><br/>
          <NavLink  activeStyle={{color: 'red'}} to="/life">Life</NavLink><br/>
          <NavLink  activeStyle={{color: 'red'}} to="/user">User</NavLink>
        </header>
        <Switch>
          <Route path="/posts/:id/:username" component={PostItem}/>
          <Route path="/posts"  component={Posts}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/posts"  component={Posts}/>
          <Route path="/life"  component={Life}/>
          <Route path="/user"  component={User}/>
          <Route path="/" exact  component={Home}/>
          <Route render={()=> <h3>Oops... 404 error</h3>}/>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <App/>, 
  document.getElementById('root')
)
