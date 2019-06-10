import ApiRequest from './ApiRequest';

const expressApi = {

  test: {
    apiTest: () => {
      return new ApiRequest(`/api/test/testApi`);
    },
  },

};

export default expressApi;