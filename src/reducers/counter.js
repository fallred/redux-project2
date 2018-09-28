
import { INCREMENT,  DECREMENT } from '../actions/counter';

const initialState = {
    number: 0
};

const countReducer = ( state= initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case INCREMENT:
            return { ...state, number: state.number + payload};
        case DECREMENT:
            return { ...state, number: state.number - payload};
        default:
            return state;

    }
}
export default countReducer;