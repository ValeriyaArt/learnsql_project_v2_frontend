import createReducer from "../../store/createReducer";
import * as C from './constants';
import * as Enum from './enum';

export const GENERAL_PATH = 'course';

export const initialState = {
    [Enum.TASKS]: [],
    [Enum.CURRENT_TASK_ERROR]: null,
    [Enum.COURSE_ROUTE_ID]: null,
};


const setCourseRouteId = (state, {payload}) => ({
    ...state,
    [Enum.COURSE_ROUTE_ID]: payload,
});

const setCourseId = (state, {payload}) => ({
    ...state,
    [Enum.COURSE_ID]: payload,
});

const setCourseTasks = (state, {payload}) => ({
    ...state,
    [Enum.TASKS]: payload,
});

const setCourseTask = (state, {payload}) => ({
    ...state,
    [Enum.CURRENT_TASK]: payload,
});

const setCourseMethodicalMaterials = (state, {payload}) => ({
    ...state,
    [Enum.METHODICAL_MATERIALS]: payload,
});

const setCourseStatistics = (state, {payload}) => ({
    ...state,
    [Enum.STATISTICS]: payload,
});

const setCourseTaskError = (state, {payload}) => ({
    ...state,
    [Enum.CURRENT_TASK_ERROR]: payload,
});
const removeCurrentTaskError = (state, {payload}) => ({
    ...state,
    [Enum.CURRENT_TASK_ERROR]: null,
});

export const reducer = createReducer(initialState, {
    [C.SET_CURRENT_TASK_ERROR]: setCourseTaskError,
    [C.REMOVE_CURRENT_TASK_ERROR]: removeCurrentTaskError,
    [C.SET_COURSE_TASKS]: setCourseTasks,
    [C.SET_COURSE_TASK]: setCourseTask,
    [C.SET_COURSE_METHODICAL_MATERIALS]: setCourseMethodicalMaterials,
    [C.SET_COURSE_STATISTICS]: setCourseStatistics,
    [C.SET_COURSE_ID]: setCourseId,
    [C.SET_COURSE_ROUTE_ID]: setCourseRouteId,
});