import React from 'react';
import api from 'root/api';
import styles from "root/app.css";

class GetRequest extends React.Component {

  state = {
    docs: [],
    message: '',
  };

  componentDidMount(){
    this.onGetTest();
  }

  onGetTest = () => {
    const getRequest = api.test.getTest();
    getRequest.data = {};
    getRequest.onSuccess = this.getRequestSuccess;
    getRequest.onError = this.getRequestError;
    getRequest.send();
  };

  getRequestSuccess = (res) => {
    this.setState({
      docs: res.docs,
      message: '',
    });
  };

  getRequestError = (res) => {
    this.setState({
      docs: [],
      message: res.message,
    });
  };

  render(){

    const {docs, message} = this.state;

    return (
      <section className={styles.getBox}>
        <h1 className={styles.h1}>css-modules</h1>
        <p className={styles.getError}>{message}</p>
        <ul className={styles.ul}>
          {docs.length === 0 &&
          <p className={styles.noData}>contents empty</p>}
          {docs.map((value, index) => {
            return (
              <li key={index} className={styles.li}>
                <p className={styles.p}>ID: {value.testId}</p>
                <p className={styles.p}>VALUE: {value.value}</p>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default GetRequest;