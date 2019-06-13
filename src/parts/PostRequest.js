import React, {Component} from 'react';
import api from 'root/api';
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

class PostRequest extends Component {

  state = {
    value: '',
    error: '',
  };

  onChangeText = event => {
    this.setState({
      value: event.target.value,
      error: '',
    });
  };

  onClickApiTest = () => {
    const postRequest = api.test.postTest();
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

    const {classes} = this.props;
    const {value, error} = this.state;

    return (
      <form className={classes.form}>
        <h1 className={classes.h1}>material-ui</h1>
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
        <Button
          variant="contained"
          color="primary"
          classes={{root: classes.buttonRoot}}
          onClick={this.onClickApiTest}
        >
          POST
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(PostRequest);