(function () {
    'use strict';

    const Http = window.Http;

    class UserService {
        constructor() {
            this.user = null;
            // this.users = [];
        }


        auth(login, email, password, callback) {
            Http.Post('/register', {login, email, password}, callback);
        }

        login(login, password, callback) {
            Http.Post('/login', {login, password}, callback);
        }

        isLoggedIn() {
            return !!this.user;
        }

        // getData(callback, force = false) {
        //     if (this.isLoggedIn() && !force) {
        //         return callback(null, this.user);
        //     }
        //
        //     Http.Get('/me', function (err, userdata) {
        //         if (err) {
        //             return callback(err, userdata);
        //         }
        //
        //         this.user = userdata;
        //         callback(null, userdata);
        //     }.bind(this));
        // }

        // loadUsersList(callback) {
        //     Http.Get('/users', function (err, users) {
        //         if (err) {
        //             return callback(err, users);
        //         }
        //
        //         this.users = users;
        //
        //         if (this.isLoggedIn()) {
        //             this.users = this.users.map(user => {
        //                 if (user.email === this.user.email) {
        //                     user.me = true;
        //                 }
        //                 return user;
        //             });
        //         }
        //
        //         callback(null, this.users);
        //     }.bind(this));
        // }

    }

    window.UserService = UserService;

})();
