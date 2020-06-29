import { ApiClient } from "./apiClient";

import  formData from "form-data";


const client = new ApiClient();


export const downloadProcessedDataApi = (processId)=>{
    return client.get('/nlp/pre-processing/download')
}

export const processDataApi = data =>{
    let processformData = new formData();
    processformData.append('file',data.file);
    processformData.append('format',data.format); 
    processformData.append('processor1',data.processor1);
    processformData.append('processor2',data.processor2);   
    return client.post(`/nlp/pre-processing`,processformData,{headers: {'Content-Type': 'multipart/form-data' }});
}
