class User {

    constructor(login, password) {
        this.login = login;
        this.password = password;
        this.id = undefined;
    }

    set setId(newId) {
        this.id = newId;
    }

    get getId() {
        return this.id;
    }
}

module.exports = User;