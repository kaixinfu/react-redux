const thunk = ({dispatch, getState}) => next => action => {
    if (typeof action == 'function') {
        return action(dispatch, getState)
    }
    console.log('next(action)')
    return next(action)
}
export default thunk

