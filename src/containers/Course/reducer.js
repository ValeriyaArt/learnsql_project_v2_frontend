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

export const reducer = createReducer(initialState, {

});