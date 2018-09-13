import React from 'react';

class Life extends React.Component {
  //1 get default props

  
  //2 get default state

  state = {
    title: 'Life Cycles'
  }

  //3 before rendering
  componentWillMount() {
    console.log('3 before render');
  }

  componentWillUpdate() {
    console.log('before update');
    
  }

  componentDidUpdate() {
    console.log('after update');
  }

  shouldComponentUpdate(nextProps, nextState) {

    if(nextState.title === 'something else') {
      return false;
    }
    
    return true;
  }

  componentWillReceiveProps() {
    console.log('BEFORE RECEIVE PROPS');
    
  }

  componentWillUnmount() {
    console.log('UNMOUNT');
  }
  //4 render jsx
  render() {

    console.log('RENDER');
    
    return(
      <div>
        <h3>{this.state.title}</h3>
        <div onClick={
          ()=> this.setState({
            title: 'something elsee'
          })}
          >CLICK TO CHANGE</div>
      </div>
    )
  }

  //5 after render jsx
  componentDidMount() {
    console.log('5 after render');
    
    document.querySelector('h3').style.color = 'red';
  }
}

export default Life;