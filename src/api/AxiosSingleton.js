import axios from 'axios';

export const AxiosSingleton = (function () {
  let instance;
  console.log("process.env.REACT_APP_BASEURL",process.env.APP_BASEURL);
  function createInstance() {
    var object = axios.create({
      baseURL: process.env.APP_BASEURL,
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