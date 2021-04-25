import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./AuthReducer";
import signUpReducer from "./SignUpReducer";

export default combineReducers({
    auth: authReducer,
    signUp: signUpReducer,
    form: formReducer
});