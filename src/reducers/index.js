import { combineReducers } from 'redux';
import UserReducer from './user';
import MessageReducer from './message';
import CounterReducer from './counter';
import TodoReducer from './todo';

export default combineReducers({
    UserReducer,
    MessageReducer,
    CounterReducer,
    TodoReducer
});