import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import userAction from '../../actions/user';
import messageAction from '../../actions/message';

class Header extends Component {
    componentDidMount() {
        this.props.userAction.getUserInfo1();
        this.props.userAction.getUserInfo2();
        this.props.userAction.getPecks();
        this.props.messageAction.getMessages();
    }
    render () {
        const { user, message } = this.props;
        const { userInfo1 ={}, userInfo2={}, peck={}} = user;
        const { name1, age1, offer1 } = userInfo1;
        const { name2, age2, offer2 } = userInfo2;
        const { peckList = [], peckSum } = peck;
        const { messageList= [] } = message;
        return (
            <header className="header">
                <div className="userinfo1">
                    <span>用户名1：{name1}</span>
                    <span>年龄1: {age1} </span>
                    <span>工作1: {offer1} </span>
                </div>
                <div className="userinfo2">
                    <span>用户名2：{name2}</span>
                    <span>年龄2: {age2} </span>
                    <span>工作2: {offer2} </span>
                </div>
                <div className="message">
                    消息列表
                    <ul className="messagelist">
                        {messageList.map((mes, index)=>{
                            return <li key={mes.index}>{mes.item}</li>
                        })} 
                    </ul>
                </div>

                <div className="peck">
                    礼包列表
                    <ul className="pecklist">
                        {peckList.map((peck, index)=>{
                            return <li key={peck.index}>{peck.item}</li>
                        })} 
                    </ul>
                    <div>礼包总数： {peckSum}</div>
                </div>
            </header>
        );
    }
}
const mapStateToProps = state => {
    const { UserReducer, MessageReducer } = state;
    return {
        user: UserReducer,
        message: MessageReducer
    };
}
const mapDispatchToProps = dispatch => {
    return {
        userAction: bindActionCreators(userAction, dispatch),
        messageAction: bindActionCreators(messageAction, dispatch),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);