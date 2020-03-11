import {createLogic} from "redux-logic";

import * as C from './constants';
import actions from './actions';

import Service from './service';

const service = new Service();

const signIn = createLogic({
    type: C.SIGN_IN,
    latest: true,
    process({getState, action}, dispatch, done) {
        console.log('sign-in');
        const state = getState();

        dispatch(actions.signInFetching());

        service.signIn()
            .then((res) => {

            })
            .catch((er) => {

            })
            .then(() => {
                return done();
            });
    }
});

export default [
    signIn,
];
