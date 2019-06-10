class ApiRequest {

  constructor(path){
    this.xhr = new XMLHttpRequest();
    this.xhr.open('post', path);
    this.xhr.setRequestHeader('Content-type', 'application/json');
    this.xhr.responseType = 'json';
    this.data = {};
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

  onSuccess = function(response){
  };

  onError = function(response){
  };

}

export default ApiRequest;