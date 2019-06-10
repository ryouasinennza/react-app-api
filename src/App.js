import React, {Component} from 'react';
import TestComponent from './component/TestComponent';
import "./app.css";

class App extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="App">
        <TestComponent/>
      </div>
    );
  }
}

export default App;
