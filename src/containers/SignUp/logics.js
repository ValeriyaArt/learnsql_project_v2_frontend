import {createLogic} from "redux-logic";
import get from 'lodash/get';

import * as C from './constants';
import actions from '../../layout/actions';

import Service from './service';

import {getFormDataForSignUp} from "./getters";
import * as Enum from "./enum";

const service = new Service();

const signUp = createLogic({
    type: C.SIGN_UP,
    latest: true,
    process({getState, action}, dispatch, done) {
        const state = getState();
        const formData = getFormDataForSignUp(state);

        dispatch(actions.fetchingTrue({destination: Enum.SIGN_UP_FETCHING}));

        service.signUp(formData)
            .then((res) => {
                dispatch(actions.fetchingSuccess());
                //todo: add redirect to sign in page
                //todo: add success notification
            })
            .catch((err) => {
                dispatch(actions.fetchingFailed({
                    message: get(err, 'message', ''),
                    errors: get(err, 'errors', [])
                }));
            })
            .then(() => {
                dispatch(actions.fetchingFalse({destination: Enum.SIGN_UP_FETCHING}));
                return done();
            });
    }
});

const getGroupOptions = createLogic({
    type: C.GET_GROUP_OPTIONS,
    latest: true,
    process({getState, action}, dispatch, done) {
        dispatch(actions.fetchingTrue({destination: Enum.GROUP_OPTIONS_FETCHING}));

        service.getGroupOptions()
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
                dispatch(actions.fetchingFalse({destination: Enum.GROUP_OPTIONS_FETCHING}));
                return done();
            });
    }
});

export default [
    signUp,
    getGroupOptions,
];
