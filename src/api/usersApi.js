import { AxiosSingleton } from './AxiosSingleton'

let axiosInstance = AxiosSingleton.getInstance();

export const getUserById = (id) => {
    return axiosInstance.get(`/users/${id}`);
}

export const getUserByUsername = username => {
    return axiosInstance.get(`/users?name=${username}`)
}
