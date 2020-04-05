import createAction from "../../store/createAction";

import * as C from './constants';

const getCourseTasks = createAction(C.GET_COURSE_TASKS, 'payload');
const setCourseTasks = createAction(C.SET_COURSE_TASKS, 'payload');

const getCourseTask = createAction(C.GET_COURSE_TASK, 'payload');
const setCourseTask = createAction(C.SET_COURSE_TASK, 'payload');

const getCourseStatistics = createAction(C.GET_COURSE_STATISTICS, 'payload');
const setCourseStatistics = createAction(C.SET_COURSE_STATISTICS, 'payload');

const getCourseMethodical = createAction(C.GET_COURSE_METHODICAL, 'payload');
const setCourseMethodical = createAction(C.SET_COURSE_METHODICAL, 'payload');

const setCourseId = createAction(C.SET_COURSE_ID, 'payload');
const completeTask = createAction(C.COMPLETE_TASK, 'payload');

export default {
    setCourseId,
    getCourseTask,
    setCourseTask,
    getCourseTasks,
    setCourseTasks,
    getCourseStatistics,
    setCourseStatistics,
    getCourseMethodical,
    setCourseMethodical,
    completeTask,
}