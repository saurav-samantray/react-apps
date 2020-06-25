import { actionTypes } from "./trainingAction";

const initialState ={
    loading:false,
    data:{},
    error:""
}
let updatedTrainingList;
 const trainingReducer = (state=initialState,action)=>{
    switch(action.type) {
        case actionTypes.FETCH_TRAININGS_ACTION:
            return{
                ...state,
                loading:true
            }
        case actionTypes.FETCH_TRAININGS_SUCCESS:
            return{
                ...state,
                data:action.data,
                loading:false
            }
        case actionTypes.FETCH_TRAININGS_FAILED:
            return{
                ...state,
                error:action.error,
                loading:false

            }

        default :
            return state;
    }


}

export default trainingReducer