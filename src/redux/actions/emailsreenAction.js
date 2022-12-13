import {
    EMAIL_SUCCESS,
} from '../../constants/reduxConst'

export const getEmailsSuccess = (data) => {
    console.log("action  ",data)
    return {
        type: EMAIL_SUCCESS,
        data: data,

    }
}
export const setEmail = (email) => async dispatch => {
    console.log("setEmail", email)
    dispatch(getEmailsSuccess(email))
}




