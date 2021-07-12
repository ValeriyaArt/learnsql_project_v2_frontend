import BaseService from "../../service/base-service";
import * as Enum from "../ResetPassword/enum";

class AuthService extends BaseService{
    signIn(password, username){
        const formData = new FormData();

        formData.append('password', password);
        formData.append('username', username);

        return this.post('/auth/token/login/', formData);
    }

    signUp(formData) {
        return this.post('/auth/users/', formData);
    }

    resetPassword(email){
        const formData = new FormData();

        formData.append(Enum.EMAIL_FIELD, email);

        return this.post('/auth/users/reset_password/', formData);
    }

    getTokens(code, state){
        const formData = new FormData();

        formData.append('code', code);
        formData.append('state', state);
        
        return this.post(`social-auth/o/google-oauth2/?state=${state}&code=${code}`)
    }
}

export default AuthService;

export const service = new AuthService()