// import {} from './_redux'
function add() {
    return {
        type: 'ADD'
    }
}

// export const addNum = (dispatch) => {
//     return dispatch(add)
// }

export function addNum() {
    return {
        type: 'ADD'
    }
}

function reduce() {
    return {
        type: 'REDUCE'
    }
}

export const reduceNum = () => {
    return {
        type: 'REDUCE'
    }
}

export function waitAddNum() {
    return dispatch => {
        setTimeout(() => {
            dispatch({type:'AWITADD'})
        },2000)
    }
}