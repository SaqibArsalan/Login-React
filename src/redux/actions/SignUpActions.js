import axios from "axios";
import {LOGIN_URL, SIGN_UP_URL} from "../../config/Url";
import {
    SIGN_UP_FAIL, SIGN_UP_SUCCESS
} from "../actionTypes";
import {saveToLocal} from "../../config/Cache";


const signUpSuccess = ( payload) => {
    return {
        type: SIGN_UP_SUCCESS,
        payload: payload
    }
}

const signUpFail = ( error ) => {
    return {
        type: SIGN_UP_FAIL,
        payload: error
    }
}

export const signUp = (payload) => {

    return async (dispatch) => {

        try {
            const response = await axios.post(SIGN_UP_URL, payload);

            if (response) {
                dispatch(signUpSuccess((response && response.data) ? response.data.data : []));

                // saveToLocal(response.data.token, 'auth')
            }

        } catch (error) {
            dispatch(signUpFail(error.response.data.message));
        }

    }
}