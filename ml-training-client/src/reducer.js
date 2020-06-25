import {combineReducers} from 'redux';

import trainingReducer from "./components/Training/trainingReducer";

const rootReducer = combineReducers({
	trainingReducer
})

export default rootReducer