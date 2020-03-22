import BaseService from "../../service/base-service";

class ProfileService extends BaseService{
    changeProfileInfo(formData) {
        return this.post('/auth/users', formData);
    }

    getGroupOptions(){
        return this.get('/student-groups');
    }
}

export default ProfileService;