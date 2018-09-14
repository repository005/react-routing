import React from 'react';

import userHoc from '../hoc/userHoc';

const User = (props) => {
  console.log(props);
  
  return(
    <div>
      User 1
    </div>
  )
}

export default userHoc(User, 'hello');