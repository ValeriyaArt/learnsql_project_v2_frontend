import {combineReducers} from "redux";
import {GENERAL_PATH as signInPath, reducer as signInReducer} from "../containers/SignIn/reducer";
import {GENERAL_PATH as coursePath, reducer as courseReducer} from "../containers/Course/reducer";

export default combineReducers({
    [signInPath]: signInReducer,
    [coursePath]: courseReducer,
});