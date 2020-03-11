import createAction from "../../store/createAction";

import * as C from './constants';

const signInChangeField = createAction(C.SIGN_IN_CHANGE_FIELD, 'payload');

const signIn = createAction(C.SIGN_IN, 'payload');
const signInFetching = createAction(C.SIGN_IN_FETCHING, 'payload');
const signInSuccess = createAction(C.SIGN_IN_SUCCESS, 'payload');
const signInFailed = createAction(C.SIGN_IN_FAILED, 'payload');

export default {
    signInChangeField,
    signInFetching,
    signInSuccess,
    signInFailed,
    signIn,
}