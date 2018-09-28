export const GETMESSAGE = 'GETMESSAGE';

const MessageAcion = {
    getMessages: () => {
        const messages =[{
            index: 0,
            item: '消息111111'
        }, {
            index: 1,
            item: '消息2222222'
        }, {
            index: 2,
            item: '消息3333333'
        }]
        return {
            type: GETMESSAGE,
            payload: messages
        };
    }
}
export default MessageAcion;