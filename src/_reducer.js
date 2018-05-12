import * as types from './_constants'

const initialState = {
    num: 0
}

export default function (state = initialState, action) {

    const {
        type,
        payload
    } = action
    console.log('type',type)
    switch (type) {
        case types.PROJECT_INIT:
            console.log('init')
            return {
                ...state
            }
        case types.ADD:
            return {
                ...state,
                num: state.num++
            }
        case types.REDUCE:
            return {
                ...state,
                num: state.num--
            }
        default:
            return state
    }
}