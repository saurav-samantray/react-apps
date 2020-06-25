import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from  '../reducer'
import thunk from "redux-thunk";
console.log("process.env.NODE_ENV", process.env.NODE_ENV)
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null ;
const Store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

export default Store;