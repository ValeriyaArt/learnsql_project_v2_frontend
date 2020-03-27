import createAction from "../../store/createAction";

import * as C from './constants';

const signUpChangeField = createAction(C.SIGN_UP_CHANGE_FIELD, 'payload');
const signUpPageDown = createAction(C.SIGN_UP_PAGE_DOWN, 'payload');

const signUp = createAction(C.SIGN_UP, 'payload');

export default {
    signUpChangeField,
    signUp,
    signUpPageDown,
}