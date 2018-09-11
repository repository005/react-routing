import React from 'react';

class Life extends React.Component {
  //1 get default props

  
  //2 get default state

  state = {
    title: 'Lief Cycles'
  }

  //3 before rendering
  componentWillMount() {
    console.log('3 before render');
  }

  //4 render jsx
  render() {

    console.log('4 render');
    
    return(
      <div>
        <h3>{this.state.title}</h3>
      </div>
    )
  }

  //5 after jsx
  componentDidMount() {
    console.log('5 after render');
    
    document.querySelector('h3').style.color = 'red';
  }
}

export default Life;