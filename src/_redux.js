export function createStore(reducer) {
    // 定义初始的state
    const currentState = {};
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
        reducer(currentState,action);
        currentListeners.forEach(func => func())
        return action
    }
    dispatch({type:'PROJECT/INIT'})
    return {getState,dispatch,subscribe}
}