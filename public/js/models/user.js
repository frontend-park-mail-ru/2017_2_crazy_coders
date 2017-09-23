'use strict';

class User {
    constructor(opt) {
        this.name = opt.name || '';
        this.password = opt.password || '';
        this.id = +opt.id || -1;
    }
}

export default User;