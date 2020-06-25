import { ApiClient } from "./apiClient";

import  formData from "form-data";


const client = new ApiClient();


export const getTrainingListApi = ()=>{
    return client.get('/training/ner')
}

export const createTrainingApi = data =>{
    return client.post(`/training/ner`,data)
}

/*
export const getProjectApi = (id)=>{
    return client.get(`/projects/${id}`)
}

export const createProjectApi = data =>{
    return client.post(`/projects`,data)
}

export const deleteProjectApi = id =>{
    return client.delete(`/projects/${id}`)
}

*/