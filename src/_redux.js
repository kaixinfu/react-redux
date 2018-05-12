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
        currentState = reducer(currentState,action);
        console.log('action', action)
        console.log('currentListeners', currentListeners)
        currentListeners.forEach(func => func())
        return action
    }
    dispatch({type:'PROJECT_INIT'})
    return {getState,dispatch,subscribe}
}