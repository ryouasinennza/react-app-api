import ApiRequest from './ApiRequest';

const expressApi = {

  test: {
    apiTest: () => {
      return new ApiRequest('post', `/api/test/testApi`);
    },
  },

};

export default expressApi;