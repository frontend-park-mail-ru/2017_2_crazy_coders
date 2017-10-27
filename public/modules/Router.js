'use strict';

import Route from './Route';


export default class Router {

    constructor() {
        if (Router.__instance) {  // если роутер существует - вернуть его самого
            return Router.__instance;
        }

        this.routes = []; // сохраняет роутеры
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


    startRoute() { // для записи с истории
        window.onpopstate = function(event) {
            const pathname = window.location.pathname;
            this.onroute(pathname);
        }.bind(this);

        const pathname = window.location.pathname;
        this.onroute(pathname);
    }


    onroute(pathname) {
        pathname = pathname.toString();
		let path = (pathname !== '/') ? ( pathname[pathname.length - 1] === '/' ? pathname.slice(0, pathname.length - 1) : pathname) : pathname;
        const route = this.routes.find( route => route.pathname.test(path) );

        if (!route) {
            console.log("[onroute] in Router: can't find route");
            return;
        }

        if (this.activeRoute) {
            this.activeRoute.leave();
        }

        this.activeRoute = route;
        this.activeRoute.navigate();
    }

    go(pathname) {
        if (window.location.pathname === pathname) {
            return;
        }
        this.history.pushState({}, '', pathname);

        this.onroute(pathname);
    }

}