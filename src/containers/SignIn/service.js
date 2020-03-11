import BaseService from "../../service/base-service";

class SignInService extends BaseService{
    signIn(){
        const formData = new FormData();

        formData.append('password', 'root');
        formData.append('username', 'root');

        return this.post('http://94.250.249.177:8000/auth/token/login/', formData);
    }
}

export default SignInService;