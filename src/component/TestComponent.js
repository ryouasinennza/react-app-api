import React, {Component} from 'react';
import expressApi from '../api/apiIndex';

class TestComponent extends Component {

  state = {
    text: "",
  };

  onChangeText = event => this.setState({text: event.target.value});

  onClickApiTest = () => {
    const request = expressApi.test.apiTest();
    request.data = {
      text: this.state.text,
    };
    request.onSuccess = this.success;
    request.onError = this.error;
    request.send();
  };

  success = (res) => {
    console.log('res', res);
  };

  error = (res) => {
    console.log('res', res);
  };

  render(){
    console.log('state', this.state.text);
    return (
      <div className="test">
        <input onChange={this.onChangeText} value={this.state.text}/>
        <button onClick={this.onClickApiTest}>API</button>
      </div>
    );
  }
}

export default TestComponent;