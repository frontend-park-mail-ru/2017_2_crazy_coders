'use strict';

import './PageConstruct.css';
import pugPageConstruct from './PageConstruct.pug';

const PageConstruct = function Page(opt = {}) {
    let container = document.createElement('div');
    container.innerHTML = pugPageConstruct({
        element: opt.el
    });
    return container;
};

export default PageConstruct;