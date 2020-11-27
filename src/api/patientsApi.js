import { AxiosSingleton } from './AxiosSingleton'

let axiosInstance = AxiosSingleton.getInstance();

export const getPatientById = id => axiosInstance.get(`/patient/${id}`);

export const getAllPatients = () => axiosInstance.get(`/patients/`);

