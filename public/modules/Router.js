'use strict';

import Route from './route';


class Router {

    constructor() {
        if (Router.__instance) {
            return Router.__instance;
        }

        this.routes = [];
        this.activeRoute = null;

        this.history = window.history;

        Router.__instance = this;
    }


    addRoute(pathname, view, options = {}) {
        const route = new Route(pathname, view, options);
        route.setRouter(this);
        this.routes.push(route);
        return this;
    }


    start(state = {}) {
        window.onpopstate = ((event) => {
            const state = event.state;
            const pathname = window.location.pathname;
            this.onroute(pathname, state);
        });

        const pathname = window.location.pathname;
        this.onroute(pathname, state);
    }


    onroute(pathname, state = {}) {
        let path = pathname;
        if (path != "/") {
            if (path[path.length - 1] === '/') {
                path = path.slice(0, path.length - 1);
            }
        }

        const route = this.routes.find(route => {
            let res = route.pathname.test(path);
            return res;
        });
        if (!route) {
            return;
        }

        if (this.activeRoute) {
            this.activeRoute.leave();
        }

        this.activeRoute = route;
        this.activeRoute.navigate(pathname, state);
    }

}

export default Router;