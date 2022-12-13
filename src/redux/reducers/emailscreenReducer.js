import {
    EMAIL_SUCCESS
} from '../../constants/reduxConst'

const initialState = {
    type: null,
    data: null,
}

export const emailscreenReducer = (state = initialState, action) => {

    const { type, data } = action

    switch (action.type) {

        case EMAIL_SUCCESS:
            console.log("reducers ", data)
            return {
                ...state,
                type,
                data: data,
            }

        default:
            return state
    }
}

export default emailscreenReducer
