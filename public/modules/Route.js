'use strict';

class Route {

    constructor(pathname, controller, options = {}) {

        this.pathname = new RegExp("\\"+pathname+"((\\?[a-z0-9\\-?\\[\\]=&;#]+)|$)");
        this.Controller = controller;
        this.options = options;
    }


    navigate() {
        if (!this._controller) {
            const controller = new this.Controller(this.options); // пр: создаём новый ScoreListController
            controller.init(this.options);
            controller.setRouterController(this.__router);
            this._controller = controller;
        }

        this._controller.show();
    }

    leave() {
        this._controller.hide();
    }
    
    setRouter(router) {
        this.__router = router;
    }
}

export default Route;