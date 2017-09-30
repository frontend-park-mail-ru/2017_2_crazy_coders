'use strict';

class Route {

    constructor(pathname, view, options = {}) {

        this.pathname = new RegExp("\\"+pathname+"((\\?[a-z0-9\\-?\\[\\]=&;#]+)|$)");
        this.View = view;
        this.options = options;
    }


    navigate() {
        if (!this._view) {
            const view = new this.View(this.options);
            view.init(this.options);
            view.setRouter(this.__router);
            this._view = view;
        }

    }

    leave() {
        this._view && this._view.pause();
    }
    
    setRouter(router) {
        this.__router = router;
    }
}

export default Route;