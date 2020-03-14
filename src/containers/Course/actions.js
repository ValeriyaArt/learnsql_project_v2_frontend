import createAction from "../../store/createAction";

import * as C from './constants';

const getCourseInfo = createAction(C.GET_COURSE_INFO, 'payload');

export default {
    getCourseInfo,
}