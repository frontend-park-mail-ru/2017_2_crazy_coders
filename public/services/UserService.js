import Http from '../modules/Http';
import User from '../model/User';

/**
 * Сервис для работы с юзерами
 * @module UserService
 */
export default class UserService {

    constructor() {
        this.user = new User({});
        this.users = [];
    }

    /**
     * Регистрирует нового пользователя
     * @param {string} username
     * @param {string} email
     * @param {string} password
     * @return {Promise}
     */
    signUp(username, email, password) {

        const requestBody = {username, email, password};
        return Http.FetchPost('/signUp', requestBody)
            .then((response) => {
                if (response.status === 201) {
                    this.user.set(response);
                    return response;
                } else {
                    console.log(response.json());
                    throw response;
                }
            });
    }

    /**
     * Авторизация пользователя
     * @param {string} email
     * @param {string} password
     * @return {Promise}
     */
    signIn(email, password) {
        return Http.FetchPost('/signIn', {email, password})
            .then((response) => {
                if (response.status === 200) {
                    this.user.set(response);
                    return response;
                } else {
                    console.log(response.json());
                    throw response;
                }
            });
    }

    /**
     * Проверяет, авторизован ли пользователь
     * @return {boolean}
     */
    isAuthorized() {
        return !!this.user.getId();
    }

    /**
     * Загружает данные о текущем пользователе
     * @param {boolean} [force=true] - игнорировать ли кэш?
     * @return {Promise}
     */
    getProfile(force = true) {
        if (this.isAuthorized() && !force) {
            return Promise.resolve(this.user.get());
        }
        return Http.FetchGet('/profile')
            .then((response) => {
                if (response.status === 200) {
                    this.user.set(response);
                    console.log('if: ' + response.json());
                    return response;
                } else {
                    //console.log('else: ' + response.json());
                    throw response;
                }
            })
    }

    /**
     * Получить данного пользователя
     */
    getUserLogin() {
        return this.user.get();
    }

    /**
     * Выход
     */
    static logout() {
        Http.FetchGet('/logout').then(response => {
            console.log("[logout] response:" + response.json());
        })

    }
}
