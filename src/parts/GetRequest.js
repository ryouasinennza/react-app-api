import React from 'react';
import api from 'expressApi';
import styles from "root/app.css";

// style部分はcss modulesを使用
class GetRequest extends React.Component {

  state = {
    docs: [],
    message: '',
  };

  // reactのライフサイクルの関数 ComponentがDOMツリーに追加された状態で呼ばれる 詳しくは 'react ライフサイクル' で検索！
  componentDidMount(){
    // GET リクエスト
    this.onGetTest();
  }

  // GET APIのリクエストするときの関数
  onGetTest = () => {
    const getRequest = api.test.getTest();
    // getRequest.data = {};
    getRequest.onSuccess = this.getRequestSuccess;
    getRequest.onError = this.getRequestError;
    getRequest.send();
  };

  // http 200 で成功したとき
  getRequestSuccess = (res) => {
    this.setState({
      docs: res.docs,
      message: '',
    });
  };

  // http 200以外
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
        <h1 className={styles.h1}>css modules</h1>
        <p className={styles.getError}>{message}</p>
        <ul className={styles.ul}>
          {docs.length === 0 &&
          <p className={styles.noData}>contents empty</p>}
          {/* mapで新しい配列を作って表示させます */}
          {docs.map((value, index) => {
            {/* 配列を渡す時は keyにユニークな値をいれます */}
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