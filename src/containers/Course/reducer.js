import createReducer from "../../store/createReducer";
import * as C from './constants';
import * as Enum from './enum';

export const GENERAL_PATH = 'course';

export const initialState = {
    [Enum.TASKS]: [ //todo: remove mock data
        {
            "type":"Task",
            "id":"3",
            "attributes":{
                "title":"Третье задание",
                "task_text":"Выполнить его",
                "difficulty":3,
                "reference_solution":"select * from table3;",
                "required_words":"select",
                "banned_words":"join",
                "should_check_runtime":false,
                "number_of_attempts":10,
                "allowed_time_error":0.0
            },
            "relationships":{
                "sandbox_db":{
                    "data":{
                        "type":"Database",
                        "id":"1"
                    }
                },
                "owner":{
                    "data":{
                        "type":"User",
                        "id":"2"
                    }
                },
                "themes":{
                    "data":[
                        {
                            "type":"TaskInTheme",
                            "id":"3"
                        }
                    ]
                }
            }
        },
        {
            "type":"Task",
            "id":"2",
            "attributes":{
                "title":"Второе задание",
                "task_text":"Выполните второй запрос",
                "difficulty":3,
                "reference_solution":"Select * from table2",
                "required_words":"select",
                "banned_words":"join",
                "should_check_runtime":false,
                "number_of_attempts":10,
                "allowed_time_error":0.0
            },
            "relationships":{
                "sandbox_db":{
                    "data":{
                        "type":"Database",
                        "id":"1"
                    }
                },
                "owner":{
                    "data":{
                        "type":"User",
                        "id":"2"
                    }
                },
                "themes":{
                    "data":[
                        {
                            "type":"TaskInTheme",
                            "id":"2"
                        }
                    ]
                }
            }
        },
        {
            "type":"Task",
            "id":"1",
            "attributes":{
                "title":"Первое задание",
                "task_text":"Выполните этот запрос",
                "difficulty":2,
                "reference_solution":"select * from myguests;",
                "required_words":"select",
                "banned_words":"join",
                "should_check_runtime":false,
                "number_of_attempts":10,
                "allowed_time_error":0.0
            },
            "relationships":{
                "sandbox_db":{
                    "data":{
                        "type":"Database",
                        "id":"1"
                    }
                },
                "owner":{
                    "data":{
                        "type":"User",
                        "id":"2"
                    }
                },
                "themes":{
                    "data":[
                        {
                            "type":"TaskInTheme",
                            "id":"1"
                        }
                    ]
                }
            }
        }
    ]
};


const setCourseId = (state, {payload}) => ({
    ...state,
    [Enum.COURSE_ID]: payload,
});

const setCourseTasks = (state, {payload}) => ({
    ...state,
    [Enum.TASKS]: payload,
});

const setCourseTask = (state, {payload}) => ({
    ...state,
    [Enum.CURRENT_TASK]: payload,
});

const setCourseMethodical = (state, {payload}) => ({
    ...state,
    [Enum.METHODICAL]: payload,
});

const setCourseStatistics = (state, {payload}) => ({
    ...state,
    [Enum.STATISTICS]: payload,
});

export const reducer = createReducer(initialState, {
    [C.SET_COURSE_TASKS]: setCourseTasks,
    [C.SET_COURSE_TASK]: setCourseTask,
    [C.SET_COURSE_METHODICAL]: setCourseMethodical,
    [C.SET_COURSE_STATISTICS]: setCourseStatistics,
    [C.SET_COURSE_ID]: setCourseId
});