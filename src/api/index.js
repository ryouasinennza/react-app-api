import ApiRequest from './ApiRequest';

const expressApi = {
  test: {
    getTest: () => new ApiRequest('get', `/api/test/getTest`),
    postTest: () => new ApiRequest('post', `/api/test/postTest`),
  },
};

export default expressApi;