import {createLogic} from "redux-logic";
import get from 'lodash/get';

import * as C from './constants';
import actions from '../../layout/actions';

import Service from './service';

import * as Enum from "./enum";
import {getFormDataForChangeInfo, getFormDataForChangePassword} from "./getters";

const service = new Service();

const changeProfileInfo = createLogic({
    type: C.CHANGE_PROFILE_INFO,
    latest: true,
    process({getState, action}, dispatch, done) {
        const state = getState();
        const formData = getFormDataForChangeInfo(state);

        dispatch(actions.fetchingTrue({destination: Enum.CHANGE_PROFILE_FETCHING}));

        service.changeProfileInfo(formData)
            .then((res) => {
                //todo: set new user data or get from BE
                dispatch(actions.fetchingSuccess(['Данные успешно изменены.']));
            })
            .catch((err) => {
                dispatch(actions.fetchingFailed({
                    message: get(err, 'message', ''),
                    errors: get(err, 'errors', [])
                }));
            })
            .then(() => {
                dispatch(actions.fetchingFalse({destination: Enum.CHANGE_PROFILE_FETCHING}));
                return done();
            });
    }
});

const changePassword = createLogic({
    type: C.CHANGE_PASSWORD,
    latest: true,
    process({getState, action}, dispatch, done) {
        const state = getState();
        const formData = getFormDataForChangePassword(state);

        dispatch(actions.fetchingTrue({destination: Enum.CHANGE_PASSWORD_FETCHING}));

        service.changePassword(formData)
            .then((res) => {
                dispatch(actions.fetchingSuccess(['Пароль успешно изменен.']));
            })
            .catch((err) => {
                dispatch(actions.fetchingFailed({
                    message: get(err, 'message', ''),
                    errors: get(err, 'errors', [])
                }));
            })
            .then(() => {
                dispatch(actions.fetchingFalse({destination: Enum.CHANGE_PASSWORD_FETCHING}));
                return done();
            });
    }
});

export default [
    changeProfileInfo,
    changePassword
];
