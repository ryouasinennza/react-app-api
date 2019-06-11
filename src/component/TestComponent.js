import React, {Component} from 'react';
import expressApi from '../api/apiIndex';
import styles from "../app.css";

class TestComponent extends Component {

  state = {
    text: '',
    response: '',
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
    this.setState({
      response: res.message,
    });
  };

  error = (res) => {
    this.setState({
      response: res.message,
    });
  };

  render(){
    console.log('state', this.state.text);
    return (
      <>
        <div className={styles.test}>
          <input
            className={styles.input}
            onChange={this.onChangeText}
            value={this.state.text}
          />
          <button className={styles.button} onClick={this.onClickApiTest}>API
            Request!
          </button>
        </div>
        <div className={styles.response}>{this.state.response}</div>
      </>
    );
  }
}

export default TestComponent;