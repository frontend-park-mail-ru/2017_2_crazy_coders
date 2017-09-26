import Http from '../modules/Http';
import User from '../model/User';

export default class UserService {
    constructor() {
        this.user = new User({});
        this.users = [];
    }



    authTest(login, email,password) {
        return Http.FetchPost('/signUp', {login, email, password});
    }

    login(email, password) {
        return Http.FetchPost('/signIn', {email, password})
            .then((response) => {
                if(response.status === 200) {
                    this.user.set(response);
                    return response;
                } else {
                    console.log(response.json());
                    throw response;
                }
            });
    }

    isAuthorized() {
        return !!this.user.id;
    }

     // [force=false] - игнорировать ли кэш?
/*    getProfile(callback, force = true) {
        if (this.isAuthorized() && !force) {
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

    getProfile(force = true) {
        if (this.isAuthorized() && !force) {
            return Promise.resolve(this.user);
        }

        return Http.FetchGet('/profile')
            .then((response) => {
                if(response.status === 200) {
                    this.user.set(response);
                    console.log('if: ' + response.json());
                    return response;
                } else {
                    console.log('else: ' + response.json());
                    throw response;
                }
                })
    }

    getUserLogin() {
        return this.user;
    }

    exit() {
        Http.FetchGet('/logout');
    }

}
