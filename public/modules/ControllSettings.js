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
        return instance._mouseControll;
    }

    set mouseControll(value) {
        instance._mouseControll = value;
    }

}