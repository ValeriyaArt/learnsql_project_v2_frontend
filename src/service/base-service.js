import axios from 'axios';
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
        console.log('interceptSuccessResponse response', response);
        return {
            ...response,
            data: get(response, 'data.data')
        }
    };

    interceptFailResponse = (error) => {
        console.log('interceptFailResponse error', error);
        return {
            ...error,
            data: get(error, 'data.data'),
            message: get(error, 'data.msg')
        }
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