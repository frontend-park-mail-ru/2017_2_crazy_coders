(function () {
    'use strict';

    const Http = window.Http;

    class UserService {
        constructor() {
            this.user = null;
            // this.users = [];
        }

        // isLoggedIn() {
        //     return !!this.user;
        // }

        auth(login, email, password, callback) {
            Http.Post('/register', {login, email, password}, callback);
        }

    }

    window.UserService = UserService;

})();
