import get from 'lodash/get';
import {GENERAL_PATH} from "./reducer";
import * as Enum from './enum';

const getStateData = (state) => get(state, GENERAL_PATH, {});

export const getTasks = (state) => get(getStateData(state), Enum.TASKS, '');
export const getCurrentTask = (state) => get(getStateData(state), Enum.CURRENT_TASK, {});
export const getCurrentTaskId = (state) => getTaskId(getCurrentTask(state));
export const getCourseId = (state) => get(getStateData(state), Enum.COURSE_ID, '');

export const getTaskId = (task) => get(task, 'relationships.task_in_set.data.id', null);