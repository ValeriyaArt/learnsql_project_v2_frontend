import {combineReducers} from "redux";
import {GENERAL_PATH as signInPath, reducer as signInReducer} from "../containers/SignIn/reducer";
import {GENERAL_PATH as signUpPath, reducer as signUpReducer} from "../containers/SignUp/reducer";
import {GENERAL_PATH as coursePath, reducer as courseReducer} from "../containers/Course/reducer";
import {GENERAL_PATH as mainPath, reducer as mainReducer} from "../layout/reducer";

export default combineReducers({
    [mainPath]: mainReducer,
    [signInPath]: signInReducer,
    [signUpPath]: signUpReducer,
    [coursePath]: courseReducer,
});