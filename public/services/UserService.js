import Http from '../modules/Http';
import User from '../model/User';

export default class UserService {

    constructor() {
        this.user = new User({});
        this.users = [];
    }


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

    isAuthorized() {
        return !!this.user.id;
    }

    getProfile(force = true) {
        if (this.isAuthorized() && !force) {
            return Promise.resolve(this.user);
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

    getUserLogin() {
        return this.user;
    }

    logout() {
        Http.FetchGet('/logout');
    }
}
