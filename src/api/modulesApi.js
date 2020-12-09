import axios from './AxiosSingleton'

let axiosInstance = axios.getInstance();

export const getModules = id => axiosInstance.get(`/modules/`);
