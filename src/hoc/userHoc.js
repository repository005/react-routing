import React from 'react';

const userHoc = (WrappedComponent, arg1) => {

  return(props) => (
    
    <div>
      {console.log(props)}
     {arg1 + ' '} <WrappedComponent/>
    </div>
  )

}

export default userHoc;