import * as types from './_constants'

const initialState = {
    num: 0
}

export default function (state = initialState, action) {
    const {
        type,
        payload
    } = action
    switch (type) {
        case types.PROJECT_INIT:
            return {
                ...state
            }
        case types.ADD:
            console.log('state.num',state.num)
            return {
                ...state,
                num: state.num+1
            }
        case types.REDUCE:
            return {
                ...state,
                num: state.num-1
            }
        default:
            return state
    }
}