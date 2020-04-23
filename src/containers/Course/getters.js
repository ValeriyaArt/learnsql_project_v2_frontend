import get from 'lodash/get';
import {GENERAL_PATH} from "./reducer";
import * as Enum from './enum';

const getStateData = (state) => get(state, GENERAL_PATH, {});
export const getCourseId = (state) => get(getStateData(state), Enum.COURSE_ID, '');



export const getTasks = (state) => get(getStateData(state), Enum.TASKS, '');
export const getCurrentTask = (state) => get(getStateData(state), Enum.CURRENT_TASK, {});
export const getCurrentTaskError = (state) => get(getStateData(state), Enum.CURRENT_TASK_ERROR, null);
export const getCurrentTaskAnswer = (state) => get(getStateData(state), Enum.CURRENT_TASK_ANSWER, []);
export const getCurrentTaskErrorTableData = (state) => get(getStateData(state), Enum.CURRENT_TASK_ERROR_TABLE_DATA, {});
export const getCurrentTaskId = (state) => get(getCurrentTask(state), 'id');
export const getCurrentRouteId = (state) => get(getStateData(state), Enum.COURSE_ROUTE_ID, '');
export const getCurrentRoute = (state) => get(getTasks(state).filter(route => route.id === getCurrentRouteId(state)), '0', {});
export const getCurrentTaskSolution = (state) => get(getCurrentRoute(state), 'attributes.status', 0) === '1' ?
    get(getCurrentRoute(state), 'attributes.solution', '') : "";
export const getTaskId = (task) => get(task, 'relationships.task_in_set.data.id', null);



export const getMethodicalMaterials = (state) => get(getStateData(state), Enum.METHODICAL_MATERIALS, []);
export const getCurrentMethodicalMaterial = (state) => get(getStateData(state), Enum.METHODICAL_MATERIAL, []);
export const getCurrentMethodicalMaterialId = (state) => get(getCurrentMethodicalMaterial(state),'0.relationships.section.data.id', null);