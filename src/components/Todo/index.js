import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import todoAction from '../../actions/todo';
class Todo extends Component {
    componentDidMount() {
        this.props.todoAction.getTodo();
    }
    render () {
        const { todo = {} } = this.props;
        const { todoList = [] } = todo;
        return (
            <div className="todo">
                <p className="todo-title">todo</p>
                <input type="text" onKeyUp={(e)=>{
                    if (e.keyCode==13) {
                        this.props.todoAction.addTodo(e.target.value);
                        e.target.value='';
                    }
                }}/>
                <div className="todo-box">
                    待办事项
                    <ul className="todoList">
                        {todoList && todoList.map((todo, index) => {
                            return <li key={todo.index}>{todo.item}</li>
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { TodoReducer } = state;
    return {
        todo: TodoReducer
    };
}
const mapDispatchToProps = dispatch => {
    return {
        todoAction: bindActionCreators(todoAction, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Todo);