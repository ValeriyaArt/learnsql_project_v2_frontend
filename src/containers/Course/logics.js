import {createLogic} from "redux-logic";
import get from 'lodash/get';

import * as C from './constants';
import actions from '../../layout/actions';

import Service from './service';
import * as Enum from "./enum";

const service = new Service();

const getCourseInfo = createLogic({
    type: C.GET_COURSE_INFO,
    latest: true,
    process({getState, action}, dispatch, done) {
        const courseId = action.payload;

        if (courseId === null) return done();

        dispatch(actions.fetchingTrue({destination: Enum.GET_COURSE_INFO_FETCHING}));

        service.getCourseInfo(courseId)
            .then((res) => {
                console.log('res', res);
                dispatch(actions.fetchingSuccess());
            })
            .catch((err) => {
                dispatch(actions.fetchingFailed({
                    message: get(err, 'message', ''),
                    errors: get(err, 'errors', [])
                }));
            })
            .then(() => {
                dispatch(actions.fetchingFalse({destination: Enum.GET_COURSE_INFO_FETCHING}));
                return done();
            });
    }
});

export default [
    getCourseInfo,
];
