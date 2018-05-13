export function createStore(reducer) {
    // 定义初始的state
    let currentState = {};
    //定义初始的监听器
    const currentListeners = [];

    //定义访问state的方法
    function getState() {
        return currentState;
    }

    //订阅 监听函数
    function subscribe(listener) {
        currentListeners.push(listener);
    }

    function dispatch(action) {
        currentState = reducer(currentState, action);
        currentListeners.forEach(func => func())
        return action
    }

    dispatch({type: 'PROJECT_INIT'})
    return {getState, dispatch, subscribe}
}

//将dispatch绑定到每一个action
const bindActionCreator = (creator, dispatch) => {
    console.log('creator', creator, [...{a:1}])
    return (...args) => dispatch(creator(...args))
}
//creators 需要传入的action方法
export const bindActionCreators = (creators, dispatch) => {
    const bindCreators = {};
    console.log(typeof creators)
    console.log('creators', creators)
    console.log('dispatch', dispatch)
    console.log(Object.keys(creators))
    Object.keys(creators).forEach(creator => {
        let _creator = creators[creator]
        bindCreators[creator] = bindActionCreator(_creator, dispatch)
    })
    return bindCreators
}