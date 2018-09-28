export const GETUSERINFO1 = 'GETUSERINFO1';
export const GETUSERINFO2 = 'GETUSERINFO2';
export const GETPECKS = 'GETPECKS';

const UserAcion = {
    getUserInfo1: () => {
        const userinfo1 = {
            name1: 'fallred',
            age1: '16',
            offer1: 'fed'
        };
        return {
            type: GETUSERINFO1,
            payload: userinfo1
        };
    },
    getUserInfo2: (payload) => {
        const userinfo2 = {
            name2: 'ql',
            age2: '16',
            offer2: 'java'
        };
        return {
            type: GETUSERINFO2,
            payload: userinfo2
        };
    },
    getPecks: (payload) => {
        const pecks = [{
            index: 0,
            item: '礼包1'
        }, {
            index: 1,
            item: '礼包2'
        }, {
            index: 2,
            item: '礼包3'
        }]
        return {
            type: GETPECKS,
            payload: {
                peckList: pecks,
                peckSum: pecks.length,

            }
        };
    }
}
export default UserAcion;