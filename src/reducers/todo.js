
import { GETTODO, ADDTODO } from '../actions/todo';

const initialState = {
    todoList: []
};

const todoReducer = ( state= initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case GETTODO:
            return { ...state, todoList: payload};
        case ADDTODO:
            return { ...state, todoList: payload};
        default:
            return state;

    }
}
export default todoReducer;