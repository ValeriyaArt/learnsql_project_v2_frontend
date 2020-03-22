import BaseService from "../../service/base-service";

class SignInService extends BaseService{
    signUp(formData) {
        return this.post('/auth/users', formData);
    }

    getGroupOptions(){
        return this.get('/student-groups');
    }
}

export default SignInService;