import { AxiosSingleton } from './AxiosSingleton'

let axiosInstance = AxiosSingleton.getInstance();

export const getPatientById = id => axiosInstance.get(`/patients/${id}`);

export const getAllPatients = () => axiosInstance.get(`/patients/`);

export const createPatient = patient => axiosInstance.post(`/patients/`, patient)

export const editPatient = patient => axiosInstance.put(`/patients/${patient.id}/`, patient)

