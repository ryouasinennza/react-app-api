import React, {Component} from 'react';
import expressApi from 'root/api';
import styles from "root/app.css";

class GetRequest extends Component {

  state = {
    message: '',
    docs: [],
  };

  onClickApiTest = () => {
    const getRequest = expressApi.test.getTest();
    getRequest.data = {};
    getRequest.onSuccess = this.getRequestSuccess;
    getRequest.onError = this.getRequestError;
    getRequest.send();
  };

  getRequestSuccess = (res) => {
    this.setState({
      docs: res.docs,
    });
  };

  getRequestError = (res) => {
    this.setState({
      message: res.message,
    });
  };

  render(){
    return (
      <div className={styles.getBox}>
        <button className={styles.getButton} onClick={this.onClickApiTest}>
          GET
        </button>
        <ul className={styles.ul}>
          {this.state.docs.map((value, index, array) => {
            return (
              <li className={styles.li}>
                <p className={styles.p}>ID: {value.testId}</p>
                <p className={styles.p}>VALUE: {value.value}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default GetRequest;