import createAction from "../../store/createAction";

import * as C from './constants';

const signInChangeField = createAction(C.SIGN_IN_CHANGE_FIELD, 'payload');

const signIn = createAction(C.SIGN_IN, 'payload');

export default {
    signInChangeField,
    signIn,
}