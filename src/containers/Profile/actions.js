import createAction from "../../store/createAction";

import * as C from './constants';

const getProfileInfo = createAction(C.GET_PROFILE_INFO, 'payload');
const setProfileInfo = createAction(C.SET_PROFILE_INFO, 'payload');

const changeProfileInfo = createAction(C.CHANGE_PROFILE_INFO, 'payload');
const changeProfileField = createAction(C.CHANGE_PROFILE_FIELD, 'payload');

const setGroupOptions = createAction(C.SET_GROUP_OPTIONS, 'payload');
const getGroupOptions = createAction(C.GET_GROUP_OPTIONS, 'payload');

export default {
    getProfileInfo,
    setProfileInfo,
    changeProfileInfo,
    changeProfileField,
    setGroupOptions,
    getGroupOptions,
}