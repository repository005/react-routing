import React from 'react';

const userHoc = (WrappedComponent, arg1) => {

  return(props) => (
    
    <div>
      {console.log(props)}
     {arg1 + ' '} <WrappedComponent {...props} />
    </div>
  )

}

export default userHoc;