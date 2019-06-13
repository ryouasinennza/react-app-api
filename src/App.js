import React from 'react';
import TabButtons from 'root/parts/TabButtons';
import GetRequest from 'root/parts/GetRequest';
import PostRequest from 'root/parts/PostRequest';
import DeleteRequest from 'root/parts/DeleteRequest';
import styles from './app.css';

class App extends React.Component {

  state = {
    tab: 0,
  };

  clickTabAction = (tabNumber) => {
    this.setState({
      tab: tabNumber,
    });
  };

  render(){
    return (
      <main className={styles.app}>
        <TabButtons
          tab={this.state.tab}
          clickTabAction={this.clickTabAction}
        />
        {this.state.tab === 0 && <GetRequest/>}
        {this.state.tab === 1 && <PostRequest/>}
        {this.state.tab === 2 && <DeleteRequest/>}
      </main>
    );
  }
}

export default App;
