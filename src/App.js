import React, {Component} from 'react';
import TestComponent from './component/TestComponent';

class App extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <TestComponent/>
      </div>
    );
  }
}

export default App;
