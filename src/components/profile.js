import React from 'react';
import {Link, Redirect} from 'react-router-dom';

const Profile = (props) => {
  
  console.log(props);

  const redir = () => {
    return (
      props.history.push('/')
    )
  }

  return(
    <div>
      <Link to={{
        pathname: `${props.match.url}/posts`
      }}>take me to /profile/posts</Link>
      {redir()}
    </div>
  )
}

export default Profile;