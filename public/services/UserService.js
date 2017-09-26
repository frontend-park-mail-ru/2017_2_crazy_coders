import Http from '../modules/Http';
import User from '../model/User';

export default class UserService {
    constructor() {
        this.user = new User({});
        this.users = [];
    }


    auth(login, email, password, callback) {
        Http.Post('/register', {login, email, password}, callback);
    }

    authTest(login, email,password) {
        return Http.FetchPost('http://82.202.246.5:8080/signUp', {login, email, password});
    }

/*    login(email, password, callback) {
        Http.Post('/login', {email, password}, callback);
    }*/

    login(email, password) {
        return Http.FetchPost('/login', {email, password});
    }

    isLoggedIn() {
        return !!this.user.id;
    }

     // [force=false] - игнорировать ли кэш?
/*    isAuthUser(callback, force = true) {
        if (this.isLoggedIn() && !force) {
            return callback(null, this.user);
        }

        Http.Get('/isauth', function(err, userdata) {
            if (err) {
                return callback(err, userdata);
            }
            if (!userdata.user) {
                return callback(null, null);
            }
            this.user.set(userdata);
            callback(null, userdata);
        }.bind(this));
    }*/

    isAuthUser(force = true) {
        if (this.isLoggedIn() && !force) {
            return Promise.resolve(this.user);
        }

        return Http.FetchGet('/isauth')
            .then((response) => {
                this.user.set(response);
                return response;
                })
            .catch((err) => {throw err;})   // Можно ли так пробрасывать ошибку?
    }

    getUserLogin() {
        return this.user;
    }

    exit() {
        Http.Get('/exit', () => {});
    }

}
