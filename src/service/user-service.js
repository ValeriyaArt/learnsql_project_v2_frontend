const STORAGE_ITEM = 'sql-learn-user';

export default class UserService {
    setToken(token) {
        localStorage.setItem(STORAGE_ITEM, JSON.stringify(token));
    }
    getToken() {
        localStorage.getItem(STORAGE_ITEM);
    }
    logout() {
        localStorage.removeItem(STORAGE_ITEM);
    }
    isAuth() {
        return this.getToken() !== null && this.getToken() !== undefined;
    }
}