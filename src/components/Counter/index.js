import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import counterAction from '../../actions/counter';
class Counter extends Component {
    render () {
        const { counter = {}, counterAction } = this.props;
        return (
            <div className="counter">
                <p>{counter.number}</p>
                <button onClick={()=> {counterAction.add(1)}}>+</button>
                <button onClick={()=>{counterAction.minus(2)}}>-</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { CounterReducer } = state;
    return {
        counter: CounterReducer
    };
}
const mapDispatchToProps = dispatch => {
    return {
        counterAction: bindActionCreators(counterAction, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);