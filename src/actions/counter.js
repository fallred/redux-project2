export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

const CountAction = {
    add: (count) => {
        return {type: INCREMENT, payload: count};
    },
    minus: (count) => {
        return {type: DECREMENT, payload: count};
    }
}
export default CountAction;
