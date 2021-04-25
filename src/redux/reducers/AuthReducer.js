import {
    LOGIN_FAIL,
    LOGIN_SUCCESS
} from "../actionTypes";


const initialState = {
    auth: null,
    isLoginSuccessfull: false,
    error: null,
    isError: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case LOGIN_SUCCESS:
            return {
                ...state,
                auth: action.payload,
                isLoginSuccessfull: true

            }

        case LOGIN_FAIL:
            return {
                ...state,
                isError: true,
                error: action.error
            }

        default:
            return state;

    }
};

export default authReducer;