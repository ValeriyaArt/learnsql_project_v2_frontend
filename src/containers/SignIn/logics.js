import {createLogic} from "redux-logic";
import get from 'lodash/get';

import * as C from './constants';
import actions from './actions';

import Service from './service';
import {getFieldValue} from "./getters";
import * as Enum from "./enum";

const service = new Service();

const signIn = createLogic({
    type: C.SIGN_IN,
    latest: true,
    process({getState, action}, dispatch, done) {
        const state = getState();

        const password = getFieldValue(state, Enum.PASSWORD_FIELD);
        const username = getFieldValue(state, Enum.LOGIN_FIELD);

        dispatch(actions.signInFetching());

        service.signIn(password, username)
            .then((res) => {
                const token = get(res, 'data.data.id', null);
                console.log('res',res)
            })
            .catch((err) => {
                debugger
                console.log('err', err);
            })
            .then(() => {
                return done();
            });
    }
});

export default [
    signIn,
];
