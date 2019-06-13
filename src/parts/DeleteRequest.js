import React, {Component} from 'react';
import api from 'root/api';
import {
  Form,
  FormControl,
  InputGroup,
  Button,
  Alert,
} from 'react-bootstrap';

const styles = {
  h1: {
    color: 'red',
    textAlign: 'center',
  },
};

class DeleteRequest extends Component {

  state = {
    testId: '',
    error: '',
    success: '',
  };

  onChangeText = event => {
    this.setState({
      testId: event.target.value,
      error: '',
      success: '',
    });
  };

  onClickApiTest = () => {
    if (this.state.testId !== '') {
      const deleteRequest = api.test.deleteTest();
      deleteRequest.data = {
        testId: Number(this.state.testId),
      };
      deleteRequest.onSuccess = this.deleteRequestSuccess;
      deleteRequest.onError = this.deleteRequestError;
      deleteRequest.send();
    } else {
      this.setState({
        testId: '',
        error: '入力してください',
        success: '',
      });
    }
  };

  deleteRequestSuccess = (res) => {
    this.setState({
      testId: '',
      error: '',
      success: res.message,
    });
  };

  deleteRequestError = (res) => {
    this.setState({
      testId: 0,
      error: res ? res.message : 'IDが見つかりません',
      success: '',
    });
  };

  render(){

    const {
      testId,
      error,
      success
    } = this.state;

    return (
      <Form>
        <style type="text/css">
          {`
           .input-group {
            margin: 30px 0
           }
         `}
        </style>
        <h1 style={styles.h1}>Bootstrap</h1>
        <InputGroup style={{width: '340px'}}>
          <FormControl
            placeholder="testId"
            type='number'
            value={testId}
            onChange={this.onChangeText}
          />
          <InputGroup.Append>
            <Button
              onClick={this.onClickApiTest}
              variant="outline-secondary"
            >Delete</Button>
          </InputGroup.Append>
        </InputGroup>
        {error &&
        <Alert variant={'warning'}>
          {error}
        </Alert>
        }
        {success &&
        <Alert variant={'success'}>
          {success}
        </Alert>
        }
      </Form>
    );
  }
}

export default DeleteRequest;