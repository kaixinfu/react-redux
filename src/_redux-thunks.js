const thunks = ({dispatch, getState}) => next => action => {
    if(Array.isArray(action)){
        action.forEach(item=>dispatch(item))
    }
    return next(action)
}
export default thunks

