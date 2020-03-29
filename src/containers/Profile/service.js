import BaseService from "../../service/base-service";

class ProfileService extends BaseService{
    changeProfileInfo(formData) {
        return this.put('/auth/users/me', formData);
    }
    changePassword(formData) {
        return this.post('/auth/users/set_password/', formData);
    }
}

export default ProfileService;