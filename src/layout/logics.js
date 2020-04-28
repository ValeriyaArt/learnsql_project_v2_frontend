import {createLogic} from "redux-logic";
import get from 'lodash/get';

import * as C from './constants';
import actions from './actions';

import Service from './service';

import * as Enum from "./enum";

const service = new Service();

const getGroupOptions = createLogic({
    type: C.GET_GROUP_OPTIONS,
    latest: true,
    process({getState, action}, dispatch, done) {
        dispatch(actions.fetchingTrue({destination: Enum.GROUP_OPTIONS_FETCHING}));

        service.getGroupOptions()
            .then((res) => {
                dispatch(actions.setGroupOptions(get(res, 'data.results', [])));
                dispatch(actions.fetchingSuccess());
            })
            .catch((err) => {
                dispatch(actions.fetchingFailed({
                    message: get(err, 'message', ''),
                    errors: get(err, 'errors', [])
                }));
            })
            .then(() => {
                dispatch(actions.fetchingFalse({destination: Enum.GROUP_OPTIONS_FETCHING}));
                return done();
            });
    }
});

const getUserData = createLogic({
    type: C.GET_USER_DATA,
    latest: true,
    process({getState, action}, dispatch, done) {
        dispatch(actions.fetchingTrue({destination: Enum.USER_DATA_FETCHING}));

        service.getUserData()
            .then((res) => {
                dispatch(actions.setUserData(res.data));
                dispatch(actions.fetchingSuccess());
            })
            .catch((err) => {
                dispatch(actions.fetchingFailed({
                    message: get(err, 'message', ''),
                    errors: get(err, 'errors', [])
                }));
            })
            .then(() => {
                dispatch(actions.fetchingFalse({destination: Enum.USER_DATA_FETCHING}));
                return done();
            });
    }
});

export default [
    getGroupOptions,
    getUserData,
];
