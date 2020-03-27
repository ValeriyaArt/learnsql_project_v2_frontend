import get from 'lodash/get';
import {GENERAL_PATH} from "./reducer";
import * as Enum from './enum';

const getStateData = (state) => get(state, GENERAL_PATH, {});
const getFetching = (state) => get(getStateData(state), Enum.FETCHING, {});
export const getErrors = (state) => get(getStateData(state), Enum.ERRORS, []);
export const getSuccessMessages = (state) => get(getStateData(state), Enum.SUCCESS_MESSAGES, []);
export const getUser = (state) => get(getStateData(state), Enum.USER, {});
export const getGroupOptions = (state) => get(getStateData(state), Enum.GROUP_OPTIONS, []);

export const isFetching = (state) => {
    const fetching = getFetching(state);

    return Object.keys(fetching).some(key => fetching[key] === true);
};