import axios from 'axios';

export const AxiosSingleton = (function () {
  let instance;

  function createInstance() {
    var object = axios.create({
      baseURL: 'http://localhost:8080',
    });
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();