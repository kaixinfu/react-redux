// import {} from './_redux'
function add() {
    return {
        type: 'ADD'
    }
}
export const addNum = (dispatch) => {
    dispatch(add)
}

function reduce() {
    console.log('......0')
    return {
        type: 'REDUCE'
    }
}
export const reduceNum = (dispatch) => {
    console.log('......1')
    dispatch(reduce)
}