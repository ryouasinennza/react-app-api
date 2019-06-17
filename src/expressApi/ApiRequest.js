class ApiRequest {

  // 非同期通信する class
  constructor(method, path){
    this.xhr = new XMLHttpRequest();
    this.xhr.open(method, path);
    this.xhr.setRequestHeader('Content-type', 'application/json');
    this.xhr.responseType = 'json';
    this.data = {};
    this.onSuccess = (res) => console.log('onSuccess', res);
    this.onError = (res) => console.log('onError', res);
  };

  send = () => {
    this.xhr.addEventListener('load', () => {
      if (this.xhr.status === 200) {
        this.onSuccess(this.xhr.response);
      } else {
        this.onError(this.xhr.response);
      }
    });
    this.xhr.send(JSON.stringify(this.data));
  };
}

export default ApiRequest;