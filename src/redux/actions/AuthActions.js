import axios from "axios";
import { LOGIN_URL } from "../../config/Url";
import {
    LOGIN_FAIL,
    LOGIN_SUCCESS
} from "../actionTypes";
import {saveToLocal} from "../../config/Cache";


const loginSuccess = ( payload) => {
    return {
        type: LOGIN_SUCCESS,
        payload: payload
    }
}

const loginFail = ( error ) => {
    return {
        type: LOGIN_FAIL,
        payload: error
    }
}

export const login = (payload) => {

    return async (dispatch) => {

        try {
            const response = await axios.post(LOGIN_URL, payload);

            if (response) {
                dispatch(loginSuccess((response && response.data) ? response.data.data : []));

                saveToLocal(response.data.token, 'auth')
            }

        } catch (error) {
            dispatch(loginFail(error.response.data.message));
        }

    }
}