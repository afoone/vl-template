import { AxiosSingleton } from './AxiosSingleton'

let axiosInstance = AxiosSingleton.getInstance();

export const getUserById = (id) => {
    return axiosInstance.get(`/users/${id}`);
}
