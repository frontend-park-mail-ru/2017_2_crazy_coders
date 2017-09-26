'use strict';

class User {
    constructor(opt) {
        this.email = opt.email || '';
        this.username = opt.username || '';
        this.id = opt.id || 0;
        this.score = opt.score || 0;
    }

    set(userData) {
        this.id = userData.id;
        this.username = userData.username;
        this.email = userData.email;
        this.score = userData.score || 0;
    }
}

export default User;