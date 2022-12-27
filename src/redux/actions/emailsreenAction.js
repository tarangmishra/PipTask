import {
    EMAIL_SUCCESS,
    RESET_EMAIL_DETAILS,
} from '../../constants/reduxConst'

export const getEmailsSuccess = (data) => {
    console.log("action  ",data)
    return {
        type: EMAIL_SUCCESS,
        data: data,
    }
}
export const resetEmailDetails = () => {
    return {
        type: RESET_EMAIL_DETAILS,
      }
}
export const setEmail = (email) => dispatch => {
    console.log("setEmail", email)
    dispatch(getEmailsSuccess(email))
}





