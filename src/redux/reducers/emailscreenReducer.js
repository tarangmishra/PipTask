import {
    EMAIL_SUCCESS,
    RESET_EMAIL_DETAILS
} from '../../constants/reduxConst'

const initialState = {
    type: null,
    data: null,
}

export const emailscreenReducer = (state = initialState, action) => {

    const { type, data } = action

    switch (action.type) {
        case EMAIL_SUCCESS:
            return {
                ...state,
                type,
                data: data,
            }
        case RESET_EMAIL_DETAILS:
            return {
                type: null,
                data: null,
            }

        default:
            return state
    }
}

export default emailscreenReducer
