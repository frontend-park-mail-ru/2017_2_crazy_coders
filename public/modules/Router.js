'use strict';

import Route from './Route';


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
        // console.log("[addRoute] in Router");
        return this;
    }


    startRoute(state = {}) {
        window.onpopstate = function(event) {
            const state = event.state;
            const pathname = window.location.pathname;
            console.log("[Router] in start");
            this.onroute(pathname, state);
        }.bind(this);

        const pathname = window.location.pathname;
        this.onroute(pathname, state);
    }


    onroute(pathname, state = {}) {
        console.log("[onroute] in Router");
        let path = pathname;
        console.log(`path = ${path}`);
        if (path !== '/') {
            if (path[path.length - 1] === '/') {
                //console.log("[onroute] in Router: it's not / page");
                path = path.slice(0, path.length - 1);
            }
        }

        const route = this.routes.find(route => {
            let res = route.pathname.test(path);
            //console.log("[onroute] in Router: res = " + res);
            return res;
        });
        if (!route) {
            console.log("[onroute] in Router: can't find rout ");
            return;
        }

        if (this.activeRoute) {
            this.activeRoute.leave();
        }

        this.activeRoute = route;
        this.activeRoute.navigate(pathname, state);
    }

    go(pathname, state = {}) {
        if (window.location.pathname === pathname) {
            return;
        }
        this.history.pushState(state, '', pathname);
        this.onroute(pathname, state);
    }

}

export default Router;