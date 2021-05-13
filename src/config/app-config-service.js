import {config} from "./app-config";

export default {
    getApiBasePath() {
        return 'https://learnsql.ru'
        return `${config.apiSchema}://${config.apiHost}${config.apiPort ? ":" + config.apiPort : ""}`;
    },
};
