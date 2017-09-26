'use strict';

class User {
    constructor(opt) {
        this.email = opt.email || '';
        this.login = opt.signIn || '';
        this.id = opt.id || 0;
        this.score = opt.score || 0;
    }

    set(userData) {
        this.email = userData.email;
        this.login = userData.signIn;
        this.id = userData.id;
        this.score = userData.score || 0;
    }
}

export default User;