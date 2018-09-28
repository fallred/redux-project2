
import { GETUSERINFO1, GETUSERINFO2, GETPECKS } from '../actions/user';

const initialState = {
    userInfo1: {},
    userInfo2: {},
    peck: {},
};

const userReducer = ( state= initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case GETUSERINFO1:
            return { ...state, userInfo1: payload};
        case GETUSERINFO2:
            return { ...state, userInfo2: payload};
        case GETPECKS:
            const peck = {
                ...state.peck,
                peckList: payload.peckList,
                peckSum: payload.peckSum
            };
            return { ...state, peck};
        default:
            return state;

    }
}
export default userReducer;