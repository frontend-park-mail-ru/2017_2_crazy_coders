'use strict';

/**
 * Класс пользователя
 * @module User
 */
export default class User {
    /**
     * @param {object} opt - данные пользователя
     * @constructor
     */
    constructor(opt) {
        this.email = opt.email || '';
        this.username = opt.username || '';
        this.id = opt.id || 0;
        this.score = opt.score || 0;
    }

    /**
     * Установить новые данные пользователя
     * @param {object} userData
     */
    set(userData) {
        this.id = userData.id;
        this.username = userData.username;
        this.email = userData.email;
        this.score = userData.score || 0;
    }
}
