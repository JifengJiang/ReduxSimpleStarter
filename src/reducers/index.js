import { combineReducers } from 'redux';
import fetch from './reducer_fetch';

const rootReducer = combineReducers({
    fetch
});

export default rootReducer;
