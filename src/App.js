import React , { Component} from 'react';
import './App.css';

class App extends Component{
  render(){
    const name = 'John Doe';
    const showName = true;

    return (
      <div className="App">
       <h1>Hello {showName && name}</h1>
      </div>
    );
  }
}

export default App;
