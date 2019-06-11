import ApiRequest from './ApiRequest';

const expressApi = {
  test: {
    apiTest: () => new ApiRequest('post', `/api/test/testApi`),
  },
};

export default expressApi;