import Http from './Http';
import User from '../model/User';

/**
 * Сервис для работы с юзерами
 * @module UserService
 */
export default class UserService {

	constructor() {
		// debugger;
		if (this.user) {
			return this;
		}
		this.user = new User({});
		this.users = [];
	}

	/**
	 * Регистрирует нового пользователя
	 * @param {string} username
	 * @param {string} email
	 * @param {string} password
	 * @param {string} mouseControlEnabled
	 * @return {Promise}
	 */
	signUp(username, email, password, mouseControlEnabled) {

		console.log(`[signUp] email:  ${email}  pass: ${password}, mouseControll: ${mouseControlEnabled}`);
		const requestBody = {username, email, password, mouseControlEnabled};
		return Http.FetchPost('/signUp', requestBody)
			.then((response) => {
				if (response.status === 201) {
					//this.user.set(response.json());
					return response.json();
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
					return response.json();
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
		console.log("[UserService] in isAuthorized, this.user.getId = " + this.user.getId());
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
					return response.json();
				} else {
					throw response;
				}
			})
	}

	getScorelist(limit) {
		return Http.FetchGet(`/top?limit=${limit}`)
			.then((response) => {
				if (response.status === 200) {
					return response.json();
				} else {
					console.log(response.json());
					throw response;
				}
			});
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
	logout() {
		return Http.FetchGet('/logout');
	}
}
