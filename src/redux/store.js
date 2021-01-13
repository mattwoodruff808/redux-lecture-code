//import createStore from redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
//import your reducer file(s)
import reducer from './reducer';
import pokeReducer from './pokeReducer';

const rootReducer = combineReducers({
    userReducer: reducer,
    pokeReducer
})

//export your redux store, passing in the reducer
export default createStore(rootReducer, applyMiddleware(promiseMiddleware));