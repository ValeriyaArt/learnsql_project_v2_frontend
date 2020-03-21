import {config} from "./app-config";

export default {
    getApiBasePath() {
        // return `${config.apiSchema}://${config.apiHost}${config.apiPort ? ":" + config.apiPort : ""}`;
        return `http://94.250.249.177:8000`;
    },
};
