import createReducer from "../store/createReducer";
import * as C from './constants';
import * as Enum from './enum';

export const GENERAL_PATH = 'main';

export const initialState = {
    [Enum.FETCHING]: {},
    [Enum.ERROR]: '',
};

const fetchingTrue = (state, {payload}) => ({
    ...state,
    [Enum.FETCHING]: {
        ...state[Enum.FETCHING],
        [payload.destination]: true
    }
});

const fetchingFalse = (state, {payload}) => ({
    ...state,
    [Enum.FETCHING]: {
        ...state[Enum.FETCHING],
        [payload.destination]: false
    }
});

const fetchingFailed = (state, {payload}) => ({
    ...state,
    [Enum.ERROR]: payload
});

export const reducer = createReducer(initialState, {
    [C.FETCHING_TRUE]: fetchingTrue,
    [C.FETCHING_FALSE]: fetchingFalse,
    [C.FETCHING_FAILED]: fetchingFailed,
});