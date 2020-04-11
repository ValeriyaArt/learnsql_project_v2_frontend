import {createLogic} from "redux-logic";
import get from 'lodash/get';

import * as C from './constants';
import actions from '../../layout/actions';
import courseActions from './actions';

import Service from './service';
import * as Enum from "./enum";
import {getCourseId, getCurrentTaskId, getTaskId, getCurrentRouteId} from "./getters";

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
                const firstTaskId = getTaskId(get(res, 'data.0', {}));

                dispatch(courseActions.setCourseTasks(res.data));
                dispatch(courseActions.getCourseTask(firstTaskId));
                dispatch(courseActions.setCurrentRouteId(get(res, 'data.0.id', null)));
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
        dispatch(courseActions.setCurrentTaskError(null));

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
        const routeId = getCurrentRouteId(state);
        const currentTaskId = getCurrentTaskId(state);

        if (currentTaskId === null || routeId === null) return done();

        dispatch(actions.fetchingTrue({destination: Enum.COMPLETE_TASK_FETCHING}));

        service.completeTask(routeId, currentTaskId, answer)
            .then((res) => {
                console.log('res');
                dispatch(actions.fetchingSuccess());
                dispatch(courseActions.setCurrentTaskError(null));
            })
            .catch((err) => {
                const error = get(err, 'message', '');
                const errorMessage = error.split(",")[1];

                dispatch(courseActions.setCurrentTaskError(errorMessage.replace(/[^A-Za-zА-Яа-яЁё\s]/g, "")));
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
