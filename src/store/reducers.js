import {combineReducers} from "redux";
import {GENERAL_PATH as signInPath, reducer as signInReducer} from "../containers/SignIn/reducer";

export default combineReducers({
    [signInPath]: signInReducer
});