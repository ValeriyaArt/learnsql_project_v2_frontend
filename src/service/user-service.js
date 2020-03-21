export default class UserService {
    setToken(token) {
        localStorage.setItem('user', JSON.stringify(token));
    }
    getToken(token) {
        localStorage.getItem('user');
    }
    logout(token) {
        localStorage.removeItem('user');
    }
}