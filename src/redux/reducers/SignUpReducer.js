import {
    LOGIN_FAIL,
    LOGIN_SUCCESS, SIGN_UP_FAIL, SIGN_UP_SUCCESS
} from "../actionTypes";


const initialState = {
    signUp: null,
    isSignUpSuccessful: false,
    error: null,
    isError: false
}

const signUpReducer = (state = initialState, action) => {

    switch (action.type) {

        case SIGN_UP_SUCCESS:
            return {
                ...state,
                signUp: action.payload,
                isSignUpSuccessful: true
            }

        case SIGN_UP_FAIL:
            return {
                ...state,
                isError: true,
                error: action.error
            }

        default:
            return state;

    }
};

export default signUpReducer;