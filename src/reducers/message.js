
import { GETMESSAGE } from '../actions/message';

const initialState = {
    messageList: []
};

const messageReducer = ( state= initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case GETMESSAGE:
            return { ...state, messageList: payload};
        default:
            return state;

    }
}
export default messageReducer;