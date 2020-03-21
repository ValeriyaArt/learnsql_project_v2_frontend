import get from 'lodash/get';
import axiosLib from 'axios';

import AppConfig from '../config/app-config-service';

export default class BaseService {
    get(url) {
        return new Promise((successFn, errorFn) => {
            this.getAxios().get(url).then(successFn).catch(errorFn);
        });
    }

    post(url, postData) {
        return new Promise((successFn, errorFn) => {
            this.getAxios().post(url, postData).then(successFn).catch(errorFn);
        });
    }

    interceptSuccessResponse = (response) => {
        return {
            ...response,
            data: get(response, 'data.data')
        }
    };

    interceptFailResponse = (error) => {
        const response = {
            ...error,
            errors: get(error, 'response.data.errors'),
            message: get(error, 'response.data.errors[0].detail')
        };

        return Promise.reject(response);
    };

    createInstance = () => {
        const _axios = axiosLib.create({
            baseURL: AppConfig.getApiBasePath(),
        });

        _axios.interceptors.response.use(this.interceptSuccessResponse, this.interceptFailResponse);

        return _axios;
    };

    getAxios(config = {singleton: true}) {
        let _axios;

        if (config.singleton === true || config.singleton === undefined) {
            if (BaseService.axios == null) {
                _axios = this.createInstance();
                BaseService.axios = _axios;
            } else {
                _axios = BaseService.axios;
            }
        } else {
            _axios = this.createInstance();
        }

        return _axios;
    }
}