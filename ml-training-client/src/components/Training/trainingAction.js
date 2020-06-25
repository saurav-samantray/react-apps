import { getTrainingListApi, createTrainingApi} from "../../api/trainingApi";
import { showNotification } from "../../components/utils/notificationbox/notificationAction";
//import FileSaver, { saveAs } from "file-saver";
export const actionTypes ={
    FETCH_TRAININGS_ACTION :'GET_TRAININGS_ACTION',
    FETCH_TRAININGS_SUCCESS :'FETCH_TRAININGS_SUCCESS',
    FETCH_TRAININGS_FAILED :'FETCH_TRAININGS_FAILED',

    CREATE_TRAINING_ACTION : 'CREATE_TRAINING_ACTION',
    CREATE_TRAINING_SUCCESS : 'CREATE_TRAINING_SUCCESS',
    CREATE_TRAINING_FAILED : 'CREATE_TRAINING_FAILED',

}

export const fetchTrainingsAction = ()=>({
    type:actionTypes.FETCH_TRAININGS_ACTION
})

export const fetchTrainingsSuccess = (data)=>({
    type:actionTypes.FETCH_TRAININGS_SUCCESS,
    data
})

export const fetchTrainingsFailed = (error)=>({
    type:actionTypes.FETCH_TRAININGS_FAILED,
    error
})

export const createTrainingAction = ()=>({
    type:actionTypes.CREATE_TRAINING_ACTION
})

export const createTrainingSuccess = (data)=>({
    type:actionTypes.CREATE_TRAINING_SUCCESS,
    data
})

export const createTrainingFailed = (error) =>({
    type:actionTypes.CREATE_TRAINING_FAILED,
    error
})




export const fetchTrainings =(data)=>{
    return async dispatch =>{
        try {
            dispatch(fetchTrainingsAction());
            console.log(data)
        const result = await getTrainingListApi(data);
        console.log(result);
        if(result.status===200){
            dispatch(fetchTrainingsSuccess(result.data))
        } else if(result.data.non_field_errors){
            let notificationData ={
                message:`${result.data.non_field_errors[0]} `,
                severity:'error'
            }
            dispatch(showNotification(notificationData))
            console.log(result);
        } else{
            let notificationData ={
                message:`Something went wrong`,
                severity:'error'
            }
        dispatch(showNotification(notificationData))
        }
        } catch (error) {
            console.log(error);

        }
    }
}


export const createTraining = (data)=>{
    return async dispatch=>{
        try {
            dispatch(createTrainingAction());
            const result = await createTrainingApi(data);
            if(result.status === 201){
                dispatch(createTrainingSuccess())
                let notificationData = {
                    message:'Job created successfully',
                    severity:'success'
                }
                dispatch(showNotification(notificationData))
                dispatch(fetchTrainings(data))

            }else if(result.data.non_field_errors){
                let notificationData ={
                    message:`${result.data.non_field_errors[0]} `,
                    severity:'error'
                }
                dispatch(showNotification(notificationData))
                console.log(result);
            }
            
        } catch (error) {
            console.log(error)
            let notificationData ={
                message:`Something went wrong`,
                severity:'error'
            }
            dispatch(showNotification(notificationData))
            
        }
    }
}