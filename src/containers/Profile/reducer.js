import createReducer from "../../store/createReducer";
import * as C from './constants';
import * as Enum from './enum';

export const GENERAL_PATH = 'profile';

export const initialState = {
    [Enum.USERNAME_FIELD]: '',
    [Enum.FIRST_NAME_FIELD]: '',
    [Enum.LAST_NAME_FIELD]: '',
    [Enum.GROUP_FIELD]: '',
    [Enum.PASSWORD_FIELD]: '',
    [Enum.PASSWORD_REPEAT_FIELD]: '',
    [Enum.GROUP_OPTIONS]: [],
    [Enum.PHOTO_FIELD]: [],
};

const changeField = (state, {payload}) => ({
    ...state,
    [payload.destination]: payload.value
});

const setGroupOptions = (state, {payload}) => ({
    ...state,
    [Enum.GROUP_OPTIONS]: payload
});

export const reducer = createReducer(initialState, {
    [C.CHANGE_PROFILE_FIELD]: changeField,
    [C.SET_GROUP_OPTIONS]: setGroupOptions,
});