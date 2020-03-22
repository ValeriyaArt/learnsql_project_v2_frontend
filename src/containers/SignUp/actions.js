import createAction from "../../store/createAction";

import * as C from './constants';

const signUpChangeField = createAction(C.SIGN_UP_CHANGE_FIELD, 'payload');
const getGroupOptions = createAction(C.GET_GROUP_OPTIONS, 'payload');
const setGroupOptions = createAction(C.SET_GROUP_OPTIONS, 'payload');

const signUp = createAction(C.SIGN_UP, 'payload');

export default {
    signUpChangeField,
    signUp,
    getGroupOptions,
    setGroupOptions,
}