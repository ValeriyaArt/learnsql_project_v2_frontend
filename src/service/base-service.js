import axios from 'axios';

export default class BaseService {
    get(url) {
        return axios.get(url);
    }

    post(url, postData) {
        console.log('url', url);
        console.log('postData', postData);
        return axios.post(url, postData)
            .then(res => console.log('res', res))
            .catch(er => console.log('er', er))
        ;
    }
}