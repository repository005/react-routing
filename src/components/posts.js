import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

const Posts = (props) => {
  return(
    <div>
      <Link to="/posts/1">post 1</Link><br/>
      <Link to="/posts/2">post 2</Link><br/>
      <Link to="/posts/3">post 3</Link>
    </div>
  )
}

export default Posts;