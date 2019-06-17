import React from 'react';
import TabButtons from 'root/parts/TabButtons';
import GetRequest from 'root/parts/GetRequest';
import PostRequest from 'root/parts/PostRequest';
import DeleteRequest from 'root/parts/DeleteRequest';
import styles from './app.css';

// メインとなるclassです style部分はcss modulesを使用 https://github.com/webpack-contrib/css-loader
class App extends React.Component {

  // このクラスの状態の定義
  state = {
    tab: 0,
  };

  // 状態を変化させる action(関数)
  clickTabAction = (tabNumber) => {
    // stateを変更するときは setState()を使います これにより 再レンダリングされます
    this.setState({
      tab: tabNumber,
    });
  };

  // render() 描写させる関数
  render(){
    return (
      // HTMLに見えるが実体はjavascript
      // 実際のHTMLと同じ名前のものは javascriptでcreateElement('tagName'); をしていると考えてください
      <main className={styles.app}>
        {/* HTMLぽく見えますが これはTabButtonsという関数です tab clickTabAction は引数  TabButtons.jsを見に行きましょう */}
        <TabButtons
          tab={this.state.tab}
          clickTabAction={this.clickTabAction}
          // clickTabAction={(tabNumber) =>  this.setState({tab: tabNumber})} この書き方はあまりしない方がいい
        />
        {/* this.state.tab の値で使う関数を変える */}
        {/* {}で囲まれたところはjavascriptが使えます */}
        {this.state.tab === 0 && <GetRequest/>}
        {this.state.tab === 1 && <PostRequest/>}
        {this.state.tab === 2 && <DeleteRequest/>}
      </main>
    );
  }
}

export default App;
