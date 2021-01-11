import axios from 'axios';

export const AxiosSingleton = (function () {
  let instance;

  function createInstance() {
    var object = axios.create({
      baseURL: 'http://api-ivace-poc.test.visual-limes.com:81/',
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

export default AxiosSingleton