import BaseService from "../service/base-service";

class MainService extends BaseService{
    getGroupOptions(){
        return this.get('/api/student-groups');
    }
    getUserData(){
        return this.get('/auth/users/me');
    }
}

export default MainService;