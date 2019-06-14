import React, {Component} from 'react';
import api from 'expressApi';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {withStyles, createStyles} from '@material-ui/core/styles';

const styles = createStyles({
  form: {
    width: '360px',
    textAlign: 'center',
  },
  h1: {
    color: 'red',
    textAlign: 'center',
  },
  buttonRoot: {
    margin: '40px',
    width: '100px',
    color: 'rgba(255, 255, 255, 0.88)',
    background: 'linear-gradient(#F89174, #FFC778)',
  },
});

// style部分はmaterial-uiを使用 https://material-ui.com
class PostRequest extends Component {

  state = {
    value: '',
    error: '',
  };

  // TextFieldでチェンジイベントが発生したときに動かす関数
  // onChangeに関数を入れると 引数にeventもしくはelementがもらえます
  onChangeText = event => {
    this.setState({
      value: event.target.value,
      error: '',
    });
  };

  onClickApiTest = () => {
    const postRequest = api.test.postTest();
    // 送信する値を セットします
    postRequest.data = {
      value: this.state.value,
    };
    postRequest.onSuccess = this.postRequestSuccess;
    postRequest.onError = this.postRequestError;
    postRequest.send();
  };

  postRequestSuccess = (res) => {
    this.setState({
      value: '',
      error: '',
    });
  };

  postRequestError = (res) => {
    this.setState({
      value: '',
      error: res.message,
    });
  };

  render(){

    // classesはmaterial-uiのスタイルをオーバーライドさせるときに使います
    // classesは普通にスタイルを付けるときにも使えます
    const {classes} = this.props;
    const {value, error} = this.state;

    return (
      <form className={classes.form}>
        <h1 className={classes.h1}>material-ui</h1>
        {/* material-uiのコンポーネントです これ一つで色々なことができます */}
        {/* demo https://material-ui.com/components/text-fields/ */}
        {/* API https://material-ui.com/api/text-field/ */}
        <TextField
          id="outlined-name"
          label="value"
          value={value}
          onChange={this.onChangeText}
          margin="normal"
          variant="outlined"
          error={!!error}
          helperText={error && error}
        />
        {/* material-uiのコンポーネントです これ一つで色々なことができます */}
        {/* demo https://material-ui.com/components/buttons/ */}
        {/* API https://material-ui.com/api/button/ */}
        {/* Button style変更 root要素をオーバーライドしています */}
        <Button
          variant="contained"
          color="primary"
          classes={
            {root: classes.buttonRoot}
          }
          onClick={this.onClickApiTest}
        >
          POST
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(PostRequest);