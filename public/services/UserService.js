import Http from '../modules/Http';
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
	 * @return {Promise}
	 */
	signUp(username, email, password) {

		console.log(`[signUp] email:  ${email}  pass: ${password}`);
		const requestBody = {username, email, password};
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

	getScorelist(page) {
		return Http.FetchPost('/scorelist', {page})
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
