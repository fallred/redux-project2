export const GETTODO = 'GETTODO';
export const ADDTODO = 'ADDTODO';

const todoList = [{
    index: 0,
    item: '111111'
}, {
    index: 1,
    item: '2222222'
}, {
    index: 2,
    item: '3333333'
}];

const TodoAcion = {
    getTodo: () => {
        return {
            type: GETTODO,
            payload: todoList
        };
    },
    addTodo: (payload) => {
        const index = todoList.length;
        todoList.push({
            index,
            item: payload
        });
        return {
            type: ADDTODO,
            payload: todoList
        };
    }
}
export default TodoAcion;