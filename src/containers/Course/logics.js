import {createLogic} from "redux-logic";
import get from 'lodash/get';

import * as C from './constants';
import actions from '../../layout/actions';
import courseActions from './actions';

import Service from './service';
import * as Enum from "./enum";
import {getCourseId, getCurrentTaskId} from "./getters";

const service = new Service();

const getCourseTasks = createLogic({
    type: C.GET_COURSE_TASKS,
    latest: true,
    process({getState, action}, dispatch, done) {
        const state = getState();
        const courseId = getCourseId(state);

        if (courseId === null) return done();

        dispatch(actions.fetchingTrue({destination: Enum.GET_COURSE_TASKS_FETCHING}));

        service.getCourseTasks(courseId)
            .then((res) => {
                dispatch(courseActions.setCourseTasks(res.data));
                dispatch(courseActions.getCourseTask(get(res, 'data.0.id', null)));
                dispatch(actions.fetchingSuccess());
            })
            .catch((err) => {
                dispatch(actions.fetchingFailed({
                    message: get(err, 'message', ''),
                    errors: get(err, 'errors', [])
                }));
            })
            .then(() => {
                dispatch(actions.fetchingFalse({destination: Enum.GET_COURSE_TASKS_FETCHING}));
                return done();
            });
    }
});

const getCourseTask = createLogic({
    type: C.GET_COURSE_TASK,
    latest: true,
    process({getState, action}, dispatch, done) {
        const taskId = action.payload;

        if (taskId === null) return done();

        dispatch(actions.fetchingTrue({destination: Enum.GET_COURSE_TASK_FETCHING}));

        service.getCourseTask(taskId)
            .then((res) => {
                dispatch(courseActions.setCourseTask(res.data));
                dispatch(actions.fetchingSuccess());
            })
            .catch((err) => {
                dispatch(actions.fetchingFailed({
                    message: get(err, 'message', ''),
                    errors: get(err, 'errors', [])
                }));
            })
            .then(() => {
                dispatch(actions.fetchingFalse({destination: Enum.GET_COURSE_TASK_FETCHING}));
                return done();
            });
    }
});

const getCourseMethodical = createLogic({
    type: C.GET_COURSE_METHODICAL,
    latest: true,
    process({getState, action}, dispatch, done) {
        const state = getState();
        const courseId = getCourseId(state);

        if (courseId === null) return done();

        dispatch(actions.fetchingTrue({destination: Enum.GET_COURSE_METHODICAL_FETCHING}));

        service.getCourseMethodical(courseId)
            .then((res) => {
                dispatch(courseActions.setCourseTasks(res.data));
                dispatch(actions.fetchingSuccess());
            })
            .catch((err) => {
                dispatch(actions.fetchingFailed({
                    message: get(err, 'message', ''),
                    errors: get(err, 'errors', [])
                }));
            })
            .then(() => {
                dispatch(actions.fetchingFalse({destination: Enum.GET_COURSE_METHODICAL_FETCHING}));
                return done();
            });
    }
});

const getCourseStatistics = createLogic({
    type: C.GET_COURSE_METHODICAL,
    latest: true,
    process({getState, action}, dispatch, done) {
        const state = getState();
        const courseId = getCourseId(state);
        const answer = action.payload;

        if (courseId === null) return done();

        dispatch(actions.fetchingTrue({destination: Enum.GET_COURSE_STATISTICS_FETCHING}));

        service.getCourseStatistics(courseId)
            .then((res) => {
                dispatch(courseActions.setCourseStatistics(res.data));
                dispatch(actions.fetchingSuccess());
            })
            .catch((err) => {
                dispatch(actions.fetchingFailed({
                    message: get(err, 'message', ''),
                    errors: get(err, 'errors', [])
                }));
            })
            .then(() => {
                dispatch(actions.fetchingFalse({destination: Enum.GET_COURSE_STATISTICS_FETCHING}));
                return done();
            });
    }
});

const completeTask = createLogic({
    type: C.COMPLETE_TASK,
    latest: true,
    process({getState, action}, dispatch, done) {
        const state = getState();
        const answer = action.payload;
        const courseId = getCourseId(state);
        const themeId = getCurrentTaskId(state);
        const setOfTaskId = getCurrentTaskId(state);
        const currentTaskId = getCurrentTaskId(state);

        if (currentTaskId === null) return done();

        dispatch(actions.fetchingTrue({destination: Enum.COMPLETE_TASK_FETCHING}));

        service.completeTask(courseId, themeId, setOfTaskId, currentTaskId, answer)
            .then((res) => {
                console.log('res');
                dispatch(actions.fetchingSuccess());
            })
            .catch((err) => {
                dispatch(actions.fetchingFailed({
                    message: get(err, 'message', ''),
                    errors: get(err, 'errors', [])
                }));
            })
            .then(() => {
                dispatch(actions.fetchingFalse({destination: Enum.COMPLETE_TASK_FETCHING}));
                return done();
            });
    }
});

export default [
    getCourseTask,
    getCourseTasks,
    getCourseMethodical,
    getCourseStatistics,
    completeTask,
];
