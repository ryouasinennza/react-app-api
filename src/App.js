import React, {Component} from 'react';
import GetRequest from 'root/parts/GetRequest';
import PostRequest from 'root/parts/PostRequest';
import TabButtons from 'root/parts/TabButtons';
import styles from './app.css';

class App extends Component {

  constructor(props){
    super(props)
  }

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
      <div className={styles.app}>
        <TabButtons
          tab={this.state.tab}
          clickTabAction={this.clickTabAction}
        />
        {this.state.tab === 0 && <GetRequest/>}
        {this.state.tab === 1 && <PostRequest/>}
      </div>
    );
  }
}

export default App;
