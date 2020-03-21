import createAction from "../store/createAction";
import * as C from "./constants";

const fetchingTrue = createAction(C.FETCHING_TRUE, 'payload');
const fetchingFalse = createAction(C.FETCHING_FALSE, 'payload');
const fetchingFailed = createAction(C.FETCHING_FAILED, 'payload');
const fetchingSuccess = createAction(C.FETCHING_SUCCESS, 'payload');

export default {
    fetchingTrue,
    fetchingFalse,
    fetchingFailed,
    fetchingSuccess,
}
