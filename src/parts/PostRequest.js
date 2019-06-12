import React, {Component} from 'react';
import expressApi from 'root/api';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {withStyles, createStyles} from '@material-ui/core/styles';

const styles = createStyles({
  root: {
    margin: '40px',
    width: '100px',
    color: 'rgba(255, 255, 255, 0.88)',
    background: 'linear-gradient(#F89174, #FFC778)!important',
  },
});

class PostRequest extends Component {

  state = {
    value: '',
    request: false,
  };

  onChangeText = event => this.setState({value: event.target.value});

  onClickApiTest = () => {
    const postRequest = expressApi.test.postTest();
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
      request: true,
    });
  };

  postRequestError = (res) => {
    this.setState({
      request: false,
    });
  };

  render(){

    console.log('state', this.state.value);
    const {classes} = this.props;
    return (
      <>
        <TextField
          id="outlined-name"
          label="value"
          value={this.state.value}
          onChange={this.onChangeText}
          margin="normal"
          variant="outlined"
        />
        <Button
          variant="contained"
          color="primary"
          classes={{root: classes.root}}
          onClick={this.onClickApiTest}
        >
          POST
        </Button>
      </>
    );
  }
}

export default withStyles(styles)(PostRequest);