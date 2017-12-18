let instance = null;

export default class ControllSettings {

    constructor() {

        if (!instance) {
            this._mouseControll = false;
            instance = this;
        }

        return instance;
    }

    get mouseControll() {
        return this._mouseControll;
    }

    set mouseControll(value) {
        this._mouseControll = value;
    }

}