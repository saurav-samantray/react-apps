import { processDataApi ,downloadProcessedDataApi} from "../../api/preprocessingApi";
import { showNotification } from "../utils/notificationbox/notificationAction";
import FileSaver, { saveAs } from "file-saver";
export const actionTypes ={

    PROCESS_DATA_ACTION :'PROCESS_DATA_ACTION',
    PROCESS_DATA_ACTION:'PROCESS_DATA_ACTION',
    PROCESS_DATA_ACTION:'PROCESS_DATA_ACTION',

    DOWNLOAD_PROCESSED_DATA_ACTION :'DOWNLOAD_PROCESSED_DATA_ACTION',
    DOWNLOAD_PROCESSED_DATA_SUCCESS:'DOWNLOAD_PROCESSED_DATA_SUCCESS',
    DOWNLOAD_PROCESSED_DATA_FAILED:'DOWNLOAD_PROCESSED_DATA_FAILED',

}


export const processDataAction = () =>({
    type:actionTypes.PROCESS_DATA_ACTION
})

export const processDataSuccess = (data)=>({
    type:actionTypes.PROCESS_DATA_SUCCESS,
    data
})

export const processDataFailed = (error)=>({
    type:actionTypes.PROCESS_DATA_FAILED,
    error
})

export const downloadProcessedDataAction = () =>({
    type:actionTypes.DOWNLOAD_PROCESSED_DATA_ACTION
})

export const downloadProcessedDataSuccess = (data)=>({
    type:actionTypes.DOWNLOAD_PROCESSED_DATA_SUCCESS,
    data
})

export const downloadProcessedDataFailed = (error)=>({
    type:actionTypes.DOWNLOAD_PROCESSED_DATA_FAILED,
    error
})



export const processData = (data)=>{
    console.log(data);
    return  async dispatch =>{
        try {
            dispatch(processDataAction());
            let result = await processDataApi(data);
            if(result.status == 201){
            //dispatch(processDataSuccess(result.data))

            let notificationData ={
                message:`Successfully uploaded data for processing`,
                severity:'success'
            }
            dispatch(showNotification(notificationData));
            //dispatch(fetchLabels({'projectId':projectId}));
            } else{
                let notificationData ={
                    message:`${result.data.error ? result.data.error : 'Something went wrong'}`,
                    severity:'error'
                }
                dispatch(showNotification(notificationData))
                dispatch(processDataFailed(data))
            }
            
        } catch (error) {
            console.log(error);
            let notificationData ={
                message:`${error.error}`,
                severity:'error'
            }
                dispatch(showNotification(notificationData))
        }
    } 
}

export const downloadProcessedData =(processId) => {
    return async dispatch =>{
        try {
            dispatch(downloadProcessedDataAction());
            const result = await downloadProcessedDataApi(processId);
            if(result.status = 200){
                let responseFile = new Blob([result.data], {type: 'application/*'} );
                FileSaver.saveAs(responseFile,`data_${processId}.txt`)
            }else{
                let notificationData ={
                    message:`${result.data.error ? result.data.error : 'Something went wrong'}`,
                    severity:'error'
                }
                dispatch(showNotification(notificationData))
                dispatch(downloadProcessedDataFailed(result.data))
            }
            
        } catch (error) {
            console.log(error);
            let notificationData ={
                message:`${error.error}`,
                severity:'error'
            }
                dispatch(showNotification(notificationData)) 
                dispatch(downloadProcessedDataFailed(error))
        }
    }
}
