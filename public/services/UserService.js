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

    login(login, password, callback) {
        Http.Post('/login', {login, password}, callback);
    }

    isLoggedIn() {
        return !!this.user.id;
    }

     // [force=false] - игнорировать ли кэш?
    isAuthUser(callback, force = true) {
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
    }

    getUserLogin() {
        return this.user;
    }

    exit() {
        Http.Get('/exit', () => {});
    }

}
