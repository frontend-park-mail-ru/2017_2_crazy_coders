/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 67);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Базовый класс блока
 * @module Block
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Block = function () {
    /**
     * @param {string} [tagName='div'] - tagName блока
     * @param {*} [attrs={}] - объект с атрибутами блока
     * @param {string[]} [classes=[]] - список имён классов
     * @param {*} [data={}] - объект с данными блока
     * @constructor
     */
    function Block() {
        var tagName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';
        var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var classes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

        _classCallCheck(this, Block);

        this.el = document.createElement(tagName);

        classes.forEach(function (className) {
            this.el.classList.add(className);
        });

        for (var name in attrs) {
            this.el.setAttribute(name, attrs[name]);
        }

        this.setData(data);
    }

    /**
     * Установить новые данные блока
     * @param {string} data
     */


    _createClass(Block, [{
        key: 'setData',
        value: function setData(data) {

            console.log("setting data: " + data);

            this.data = data;
        }

        /**
         * Получить данные блока
         */

    }, {
        key: 'getData',
        value: function getData() {
            return this.data;
        }

        /**
         * Установить HTML содержимое блока
         * @param {HTMLElement} html
         */

    }, {
        key: 'setHTML',
        value: function setHTML(html) {
            this.el.innerHTML = html;
        }

        /**
         * Устанавливает новый текст для элемента
         * @param {string} text - устанавливаем текст
         */

    }, {
        key: 'setText',
        value: function setText(text) {
            this.el.textContent = text;
        }

        /**
         * Очищаем содержимое элемента
         */

    }, {
        key: 'clear',
        value: function clear() {
            this.el.innerHTML = '';
        }

        /**
         * Скрывает элемент
         */

    }, {
        key: 'hide',
        value: function hide() {
            this.el.setAttribute('hidden', 'hidden');
        }

        /**
         * Отображает элемент
         */

    }, {
        key: 'show',
        value: function show() {
            this.el.removeAttribute('hidden');
        }

        /**
         * Возвращает элемент
         * @returns {HTMLElement}
         */

    }, {
        key: 'getElement',
        value: function getElement() {
            return this.el;
        }

        /**
         * Вставляет в себя элемент
         * @param {HTMLElement} block
         */

    }, {
        key: 'append',
        value: function append(block) {
            this.getElement().appendChild(block);
            return this;
        }

        /**
         * Позволяет подписаться на событие
         * @param {string} event
         * @param {EventListener} callback
         * @return {function(this:Block)} - функция отписки от события
         */

    }, {
        key: 'on',
        value: function on(event, callback) {
            this.el.addEventListener(event, callback);
            return function () {
                this.el.removeEventListener(event, callback);
            }.bind(this);
        }
    }]);

    return Block;
}();

exports.default = Block;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pug_has_own_property = Object.prototype.hasOwnProperty;

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = pug_merge;
function pug_merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = pug_merge(attrs, a[i]);
    }
    return attrs;
  }

  for (var key in b) {
    if (key === 'class') {
      var valA = a[key] || [];
      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
    } else if (key === 'style') {
      var valA = pug_style(a[key]);
      var valB = pug_style(b[key]);
      a[key] = valA + valB;
    } else {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Process array, object, or string as a string of classes delimited by a space.
 *
 * If `val` is an array, all members of it and its subarrays are counted as
 * classes. If `escaping` is an array, then whether or not the item in `val` is
 * escaped depends on the corresponding item in `escaping`. If `escaping` is
 * not an array, no escaping is done.
 *
 * If `val` is an object, all the keys whose value is truthy are counted as
 * classes. No escaping is done.
 *
 * If `val` is a string, it is counted as a class. No escaping is done.
 *
 * @param {(Array.<string>|Object.<string, boolean>|string)} val
 * @param {?Array.<string>} escaping
 * @return {String}
 */
exports.classes = pug_classes;
function pug_classes_array(val, escaping) {
  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);
  for (var i = 0; i < val.length; i++) {
    className = pug_classes(val[i]);
    if (!className) continue;
    escapeEnabled && escaping[i] && (className = pug_escape(className));
    classString = classString + padding + className;
    padding = ' ';
  }
  return classString;
}
function pug_classes_object(val) {
  var classString = '', padding = '';
  for (var key in val) {
    if (key && val[key] && pug_has_own_property.call(val, key)) {
      classString = classString + padding + key;
      padding = ' ';
    }
  }
  return classString;
}
function pug_classes(val, escaping) {
  if (Array.isArray(val)) {
    return pug_classes_array(val, escaping);
  } else if (val && typeof val === 'object') {
    return pug_classes_object(val);
  } else {
    return val || '';
  }
}

/**
 * Convert object or string to a string of CSS styles delimited by a semicolon.
 *
 * @param {(Object.<string, string>|string)} val
 * @return {String}
 */

exports.style = pug_style;
function pug_style(val) {
  if (!val) return '';
  if (typeof val === 'object') {
    var out = '';
    for (var style in val) {
      /* istanbul ignore else */
      if (pug_has_own_property.call(val, style)) {
        out = out + style + ':' + val[style] + ';';
      }
    }
    return out;
  } else {
    val += '';
    if (val[val.length - 1] !== ';') 
      return val + ';';
    return val;
  }
};

/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = pug_attr;
function pug_attr(key, val, escaped, terse) {
  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {
    return '';
  }
  if (val === true) {
    return ' ' + (terse ? key : key + '="' + key + '"');
  }
  if (typeof val.toJSON === 'function') {
    val = val.toJSON();
  }
  if (typeof val !== 'string') {
    val = JSON.stringify(val);
    if (!escaped && val.indexOf('"') !== -1) {
      return ' ' + key + '=\'' + val.replace(/'/g, '&#39;') + '\'';
    }
  }
  if (escaped) val = pug_escape(val);
  return ' ' + key + '="' + val + '"';
};

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} terse whether to use HTML5 terse boolean attributes
 * @return {String}
 */
exports.attrs = pug_attrs;
function pug_attrs(obj, terse){
  var attrs = '';

  for (var key in obj) {
    if (pug_has_own_property.call(obj, key)) {
      var val = obj[key];

      if ('class' === key) {
        val = pug_classes(val);
        attrs = pug_attr(key, val, false, terse) + attrs;
        continue;
      }
      if ('style' === key) {
        val = pug_style(val);
      }
      attrs += pug_attr(key, val, false, terse);
    }
  }

  return attrs;
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var pug_match_html = /["&<>]/;
exports.escape = pug_escape;
function pug_escape(_html){
  var html = '' + _html;
  var regexResult = pug_match_html.exec(html);
  if (!regexResult) return _html;

  var result = '';
  var i, lastIndex, escape;
  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
    switch (html.charCodeAt(i)) {
      case 34: escape = '&quot;'; break;
      case 38: escape = '&amp;'; break;
      case 60: escape = '&lt;'; break;
      case 62: escape = '&gt;'; break;
      default: continue;
    }
    if (lastIndex !== i) result += html.substring(lastIndex, i);
    lastIndex = i + 1;
    result += escape;
  }
  if (lastIndex !== i) return result + html.substring(lastIndex, i);
  else return result;
};

/**
 * Re-throw the given `err` in context to the
 * the pug in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @param {String} str original source
 * @api private
 */

exports.rethrow = pug_rethrow;
function pug_rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || __webpack_require__(72).readFileSync(filename, 'utf8')
  } catch (ex) {
    pug_rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Pug') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = function () {
    function Controller(opt) {
        _classCallCheck(this, Controller);

        this.userService = opt.userService;
        this.page = opt.page; // объект CreatePage
        this.page_parts = opt.page.getParts(); // map() вьюх
    }

    /**
     * Инициализация параметров view (выполняется сразу после создания)
     * Необходимо перепределять
     * @param {Object} [options={}] - Объект с параметрами
     */


    _createClass(Controller, [{
        key: 'init',
        value: function init() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            this.setAttrs(options.attrs);
        }

        /**
         * Вызывается при начале или продолжении работы view (после того, как view была скрыта)
         * Необходимо переопределять своей логикой
         * @param {Object} [options={}] - Объект с параметрами
         */

    }, {
        key: 'resume',
        value: function resume() {
            this.show();
        }

        /**
         * Показывает view
         * @param {Object} [options={}] - Объект с параметрами
         */

    }, {
        key: 'show',
        value: function show() {
            this._el.style.display = 'block';
        }

        /**
         * Скрывает view
         * @param {Object} [options={}] - Объект с параметрами
         */

    }, {
        key: 'hide',
        value: function hide() {
            this._el.style.display = 'none';
        }

        /**
         * Вставляет текущую view в переданный элемент
         * @param {HTMLElement} el - HTML-элемент, к которому добавляется элемент текущей view
         */

    }, {
        key: 'appendTo',
        value: function appendTo(el) {
            el.appendChild(this._el);
        }

        /**
         * Удаляет элемент текущей view
         */

    }, {
        key: 'remove',
        value: function remove() {
            this._el && this._el.remove();
        }

        /**
         * Заменяет элемент текущей view
         * @param {HTMLElement} el - HTML-элемент, который становится элементом текущей view
         */

    }, {
        key: 'setElement',
        value: function setElement(el) {
            this._el && this._el.remove();
            this._el = el;
        }

        /**
         * Устанавливает текущей view набор атрибутов
         * @param {Object} [attrs={}] - Объект с атрибутами, которые будут установлены у текущего элемента view
         */

    }, {
        key: 'setAttrs',
        value: function setAttrs() {
            var _this = this;

            var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            Object.keys(attrs).forEach(function (name) {
                _this._el.setAttribute(name, attrs[name]);
            });
        }

        /**
         * Возвращает строку, содержашую текстовое представление текущей view
         * @returns {string}
         */

    }, {
        key: 'toString',
        value: function toString() {
            return this._el.outerHTML;
        }

        /**
         * Устанавливает текущей view роутер
         * @param {Router} router - инстанс роутера
         */

    }, {
        key: 'setRouterController',
        value: function setRouterController(router) {
            this._router = router;
        }
    }]);

    return Controller;
}();

exports.default = Controller;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var instance = null;

var ControllSettings = function () {
    function ControllSettings() {
        _classCallCheck(this, ControllSettings);

        if (!instance) {
            this._mouseControll = false;
            instance = this;
        }

        return instance;
    }

    _createClass(ControllSettings, [{
        key: "mouseControll",
        get: function get() {
            return instance._mouseControll;
        },
        set: function set(value) {
            instance._mouseControll = value;
        }
    }]);

    return ControllSettings;
}();

exports.default = ControllSettings;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Theme = function () {
	function Theme() {
		_classCallCheck(this, Theme);

		this.defaultThema = false;
	}

	_createClass(Theme, [{
		key: 'changeTheme',
		value: function changeTheme() {
			var stylesDeault = this.createStylesheet([bodyStylesWhite, htmlNoneScroll, deleteMargin]);
			var stylesYellow = this.createStylesheet([bodyStylesYellow, htmlNoneScroll, deleteMargin]);

			var stylesheet = !this.defaultThema ? stylesDeault : stylesYellow;

			this.appendStylesheet(stylesheet);

			this.defaultThema = !this.defaultThema;
		}
	}, {
		key: 'createStylesheet',
		value: function createStylesheet(styles) {
			return styles.reduce(function (stylesheet, current) {
				var properties = Object.entries(current.styles).map(function (prop) {
					return prop[0] + ':' + prop[1] + ';';
				});
				stylesheet += current.selector + ' {' + properties + '}\n';
				return stylesheet;
			}, '');
		}
	}, {
		key: 'appendStylesheet',
		value: function appendStylesheet(stylesheet) {
			var styleTag = document.getElementById('theme-styles');
			styleTag.innerHTML = stylesheet;
		}
	}]);

	return Theme;
}();

exports.default = Theme;


var bodyStylesYellow = {
	selector: 'body',
	styles: {
		'background-color': '#FFFF00'
	}
};

var bodyStylesWhite = {
	selector: 'body',
	styles: {
		'background-color': '#FFF'
	}
};

var htmlNoneScroll = {
	selector: 'html',
	styles: {
		'overflow-y': 'hidden',
		'overflow-x': 'hidden'
	}
};

var deleteMargin = {
	selector: 'body',
	styles: {
		'margin': '0'
	}
};

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Expose `Emitter`.
 */

if (true) {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Module dependencies.
 */

var keys = __webpack_require__(122);
var hasBinary = __webpack_require__(48);
var sliceBuffer = __webpack_require__(123);
var after = __webpack_require__(124);
var utf8 = __webpack_require__(125);

var base64encoder;
if (global && global.ArrayBuffer) {
  base64encoder = __webpack_require__(127);
}

/**
 * Check if we are running an android browser. That requires us to use
 * ArrayBuffer with polling transports...
 *
 * http://ghinda.net/jpeg-blob-ajax-android/
 */

var isAndroid = typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent);

/**
 * Check if we are running in PhantomJS.
 * Uploading a Blob with PhantomJS does not work correctly, as reported here:
 * https://github.com/ariya/phantomjs/issues/11395
 * @type boolean
 */
var isPhantomJS = typeof navigator !== 'undefined' && /PhantomJS/i.test(navigator.userAgent);

/**
 * When true, avoids using Blobs to encode payloads.
 * @type boolean
 */
var dontSendBlobs = isAndroid || isPhantomJS;

/**
 * Current protocol version.
 */

exports.protocol = 3;

/**
 * Packet types.
 */

var packets = exports.packets = {
    open:     0    // non-ws
  , close:    1    // non-ws
  , ping:     2
  , pong:     3
  , message:  4
  , upgrade:  5
  , noop:     6
};

var packetslist = keys(packets);

/**
 * Premade error packet.
 */

var err = { type: 'error', data: 'parser error' };

/**
 * Create a blob api even for blob builder when vendor prefixes exist
 */

var Blob = __webpack_require__(128);

/**
 * Encodes a packet.
 *
 *     <packet type id> [ <data> ]
 *
 * Example:
 *
 *     5hello world
 *     3
 *     4
 *
 * Binary is encoded in an identical principle
 *
 * @api private
 */

exports.encodePacket = function (packet, supportsBinary, utf8encode, callback) {
  if (typeof supportsBinary === 'function') {
    callback = supportsBinary;
    supportsBinary = false;
  }

  if (typeof utf8encode === 'function') {
    callback = utf8encode;
    utf8encode = null;
  }

  var data = (packet.data === undefined)
    ? undefined
    : packet.data.buffer || packet.data;

  if (global.ArrayBuffer && data instanceof ArrayBuffer) {
    return encodeArrayBuffer(packet, supportsBinary, callback);
  } else if (Blob && data instanceof global.Blob) {
    return encodeBlob(packet, supportsBinary, callback);
  }

  // might be an object with { base64: true, data: dataAsBase64String }
  if (data && data.base64) {
    return encodeBase64Object(packet, callback);
  }

  // Sending data as a utf-8 string
  var encoded = packets[packet.type];

  // data fragment is optional
  if (undefined !== packet.data) {
    encoded += utf8encode ? utf8.encode(String(packet.data), { strict: false }) : String(packet.data);
  }

  return callback('' + encoded);

};

function encodeBase64Object(packet, callback) {
  // packet data is an object { base64: true, data: dataAsBase64String }
  var message = 'b' + exports.packets[packet.type] + packet.data.data;
  return callback(message);
}

/**
 * Encode packet helpers for binary types
 */

function encodeArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var data = packet.data;
  var contentArray = new Uint8Array(data);
  var resultBuffer = new Uint8Array(1 + data.byteLength);

  resultBuffer[0] = packets[packet.type];
  for (var i = 0; i < contentArray.length; i++) {
    resultBuffer[i+1] = contentArray[i];
  }

  return callback(resultBuffer.buffer);
}

function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var fr = new FileReader();
  fr.onload = function() {
    packet.data = fr.result;
    exports.encodePacket(packet, supportsBinary, true, callback);
  };
  return fr.readAsArrayBuffer(packet.data);
}

function encodeBlob(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  if (dontSendBlobs) {
    return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
  }

  var length = new Uint8Array(1);
  length[0] = packets[packet.type];
  var blob = new Blob([length.buffer, packet.data]);

  return callback(blob);
}

/**
 * Encodes a packet with binary data in a base64 string
 *
 * @param {Object} packet, has `type` and `data`
 * @return {String} base64 encoded message
 */

exports.encodeBase64Packet = function(packet, callback) {
  var message = 'b' + exports.packets[packet.type];
  if (Blob && packet.data instanceof global.Blob) {
    var fr = new FileReader();
    fr.onload = function() {
      var b64 = fr.result.split(',')[1];
      callback(message + b64);
    };
    return fr.readAsDataURL(packet.data);
  }

  var b64data;
  try {
    b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
  } catch (e) {
    // iPhone Safari doesn't let you apply with typed arrays
    var typed = new Uint8Array(packet.data);
    var basic = new Array(typed.length);
    for (var i = 0; i < typed.length; i++) {
      basic[i] = typed[i];
    }
    b64data = String.fromCharCode.apply(null, basic);
  }
  message += global.btoa(b64data);
  return callback(message);
};

/**
 * Decodes a packet. Changes format to Blob if requested.
 *
 * @return {Object} with `type` and `data` (if any)
 * @api private
 */

exports.decodePacket = function (data, binaryType, utf8decode) {
  if (data === undefined) {
    return err;
  }
  // String data
  if (typeof data === 'string') {
    if (data.charAt(0) === 'b') {
      return exports.decodeBase64Packet(data.substr(1), binaryType);
    }

    if (utf8decode) {
      data = tryDecode(data);
      if (data === false) {
        return err;
      }
    }
    var type = data.charAt(0);

    if (Number(type) != type || !packetslist[type]) {
      return err;
    }

    if (data.length > 1) {
      return { type: packetslist[type], data: data.substring(1) };
    } else {
      return { type: packetslist[type] };
    }
  }

  var asArray = new Uint8Array(data);
  var type = asArray[0];
  var rest = sliceBuffer(data, 1);
  if (Blob && binaryType === 'blob') {
    rest = new Blob([rest]);
  }
  return { type: packetslist[type], data: rest };
};

function tryDecode(data) {
  try {
    data = utf8.decode(data, { strict: false });
  } catch (e) {
    return false;
  }
  return data;
}

/**
 * Decodes a packet encoded in a base64 string
 *
 * @param {String} base64 encoded message
 * @return {Object} with `type` and `data` (if any)
 */

exports.decodeBase64Packet = function(msg, binaryType) {
  var type = packetslist[msg.charAt(0)];
  if (!base64encoder) {
    return { type: type, data: { base64: true, data: msg.substr(1) } };
  }

  var data = base64encoder.decode(msg.substr(1));

  if (binaryType === 'blob' && Blob) {
    data = new Blob([data]);
  }

  return { type: type, data: data };
};

/**
 * Encodes multiple messages (payload).
 *
 *     <length>:data
 *
 * Example:
 *
 *     11:hello world2:hi
 *
 * If any contents are binary, they will be encoded as base64 strings. Base64
 * encoded strings are marked with a b before the length specifier
 *
 * @param {Array} packets
 * @api private
 */

exports.encodePayload = function (packets, supportsBinary, callback) {
  if (typeof supportsBinary === 'function') {
    callback = supportsBinary;
    supportsBinary = null;
  }

  var isBinary = hasBinary(packets);

  if (supportsBinary && isBinary) {
    if (Blob && !dontSendBlobs) {
      return exports.encodePayloadAsBlob(packets, callback);
    }

    return exports.encodePayloadAsArrayBuffer(packets, callback);
  }

  if (!packets.length) {
    return callback('0:');
  }

  function setLengthHeader(message) {
    return message.length + ':' + message;
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, !isBinary ? false : supportsBinary, false, function(message) {
      doneCallback(null, setLengthHeader(message));
    });
  }

  map(packets, encodeOne, function(err, results) {
    return callback(results.join(''));
  });
};

/**
 * Async array map using after
 */

function map(ary, each, done) {
  var result = new Array(ary.length);
  var next = after(ary.length, done);

  var eachWithIndex = function(i, el, cb) {
    each(el, function(error, msg) {
      result[i] = msg;
      cb(error, result);
    });
  };

  for (var i = 0; i < ary.length; i++) {
    eachWithIndex(i, ary[i], next);
  }
}

/*
 * Decodes data when a payload is maybe expected. Possible binary contents are
 * decoded from their base64 representation
 *
 * @param {String} data, callback method
 * @api public
 */

exports.decodePayload = function (data, binaryType, callback) {
  if (typeof data !== 'string') {
    return exports.decodePayloadAsBinary(data, binaryType, callback);
  }

  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var packet;
  if (data === '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }

  var length = '', n, msg;

  for (var i = 0, l = data.length; i < l; i++) {
    var chr = data.charAt(i);

    if (chr !== ':') {
      length += chr;
      continue;
    }

    if (length === '' || (length != (n = Number(length)))) {
      // parser error - ignoring payload
      return callback(err, 0, 1);
    }

    msg = data.substr(i + 1, n);

    if (length != msg.length) {
      // parser error - ignoring payload
      return callback(err, 0, 1);
    }

    if (msg.length) {
      packet = exports.decodePacket(msg, binaryType, false);

      if (err.type === packet.type && err.data === packet.data) {
        // parser error in individual packet - ignoring payload
        return callback(err, 0, 1);
      }

      var ret = callback(packet, i + n, l);
      if (false === ret) return;
    }

    // advance cursor
    i += n;
    length = '';
  }

  if (length !== '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }

};

/**
 * Encodes multiple messages (payload) as binary.
 *
 * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
 * 255><data>
 *
 * Example:
 * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
 *
 * @param {Array} packets
 * @return {ArrayBuffer} encoded payload
 * @api private
 */

exports.encodePayloadAsArrayBuffer = function(packets, callback) {
  if (!packets.length) {
    return callback(new ArrayBuffer(0));
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, true, function(data) {
      return doneCallback(null, data);
    });
  }

  map(packets, encodeOne, function(err, encodedPackets) {
    var totalLength = encodedPackets.reduce(function(acc, p) {
      var len;
      if (typeof p === 'string'){
        len = p.length;
      } else {
        len = p.byteLength;
      }
      return acc + len.toString().length + len + 2; // string/binary identifier + separator = 2
    }, 0);

    var resultArray = new Uint8Array(totalLength);

    var bufferIndex = 0;
    encodedPackets.forEach(function(p) {
      var isString = typeof p === 'string';
      var ab = p;
      if (isString) {
        var view = new Uint8Array(p.length);
        for (var i = 0; i < p.length; i++) {
          view[i] = p.charCodeAt(i);
        }
        ab = view.buffer;
      }

      if (isString) { // not true binary
        resultArray[bufferIndex++] = 0;
      } else { // true binary
        resultArray[bufferIndex++] = 1;
      }

      var lenStr = ab.byteLength.toString();
      for (var i = 0; i < lenStr.length; i++) {
        resultArray[bufferIndex++] = parseInt(lenStr[i]);
      }
      resultArray[bufferIndex++] = 255;

      var view = new Uint8Array(ab);
      for (var i = 0; i < view.length; i++) {
        resultArray[bufferIndex++] = view[i];
      }
    });

    return callback(resultArray.buffer);
  });
};

/**
 * Encode as Blob
 */

exports.encodePayloadAsBlob = function(packets, callback) {
  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, true, function(encoded) {
      var binaryIdentifier = new Uint8Array(1);
      binaryIdentifier[0] = 1;
      if (typeof encoded === 'string') {
        var view = new Uint8Array(encoded.length);
        for (var i = 0; i < encoded.length; i++) {
          view[i] = encoded.charCodeAt(i);
        }
        encoded = view.buffer;
        binaryIdentifier[0] = 0;
      }

      var len = (encoded instanceof ArrayBuffer)
        ? encoded.byteLength
        : encoded.size;

      var lenStr = len.toString();
      var lengthAry = new Uint8Array(lenStr.length + 1);
      for (var i = 0; i < lenStr.length; i++) {
        lengthAry[i] = parseInt(lenStr[i]);
      }
      lengthAry[lenStr.length] = 255;

      if (Blob) {
        var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
        doneCallback(null, blob);
      }
    });
  }

  map(packets, encodeOne, function(err, results) {
    return callback(new Blob(results));
  });
};

/*
 * Decodes data when a payload is maybe expected. Strings are decoded by
 * interpreting each byte as a key code for entries marked to start with 0. See
 * description of encodePayloadAsBinary
 *
 * @param {ArrayBuffer} data, callback method
 * @api public
 */

exports.decodePayloadAsBinary = function (data, binaryType, callback) {
  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var bufferTail = data;
  var buffers = [];

  while (bufferTail.byteLength > 0) {
    var tailArray = new Uint8Array(bufferTail);
    var isString = tailArray[0] === 0;
    var msgLength = '';

    for (var i = 1; ; i++) {
      if (tailArray[i] === 255) break;

      // 310 = char length of Number.MAX_VALUE
      if (msgLength.length > 310) {
        return callback(err, 0, 1);
      }

      msgLength += tailArray[i];
    }

    bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
    msgLength = parseInt(msgLength);

    var msg = sliceBuffer(bufferTail, 0, msgLength);
    if (isString) {
      try {
        msg = String.fromCharCode.apply(null, new Uint8Array(msg));
      } catch (e) {
        // iPhone Safari doesn't let you apply to typed arrays
        var typed = new Uint8Array(msg);
        msg = '';
        for (var i = 0; i < typed.length; i++) {
          msg += String.fromCharCode(typed[i]);
        }
      }
    }

    buffers.push(msg);
    bufferTail = sliceBuffer(bufferTail, msgLength);
  }

  var total = buffers.length;
  buffers.forEach(function(buffer, i) {
    callback(exports.decodePacket(buffer, binaryType, true), i, total);
  });
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Notify = function () {
	function Notify() {
		_classCallCheck(this, Notify);

		this.notifyBlock = document.createElement('section');
		this.notifyBlock.classList.add('notify-container');
		document.body.appendChild(this.notifyBlock);
	}

	_createClass(Notify, [{
		key: 'notify',
		value: function notify() {
			var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Текст нотификации';
			var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'red';
			var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;

			var notify = this.createNotify(message, time);
			notify.style.background = color;
			this.notifyBlock.appendChild(notify);
		}
	}, {
		key: 'createNotify',
		value: function createNotify(msg, time) {
			var notify = document.createElement('div');
			notify.classList.add('notify');
			notify.setAttribute('style', 'animation: show 1s, hide .7s ' + time + 's;');

			var text = document.createElement('div');
			text.classList.add('notify__text');
			text.innerHTML = msg;

			var closeButton = document.createElement('div');
			closeButton.classList.add('notify__close');
			closeButton.innerHTML = '&times;';
			closeButton.addEventListener('click', function (event) {
				notify.classList.add('notify_delete');
			});

			notify.addEventListener('animationend', function (event) {
				if (event.animationName === 'hide') {
					notify.removeAttribute('style');
					notify.classList.add('notify_delete');
				}
			});

			notify.appendChild(text);
			notify.appendChild(closeButton);

			return notify;
		}
	}]);

	return Notify;
}();

exports.default = Notify;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(114);
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(46)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Http = __webpack_require__(15);

var _Http2 = _interopRequireDefault(_Http);

var _User = __webpack_require__(25);

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Сервис для работы с юзерами
 * @module UserService
 */
var UserService = function () {
	function UserService() {
		_classCallCheck(this, UserService);

		// debugger;
		if (this.user) {
			return this;
		}
		this.user = new _User2.default({});
		this.users = [];
	}

	/**
  * Регистрирует нового пользователя
  * @param {string} username
  * @param {string} email
  * @param {string} password
  * @param {string} mouseControlEnabled
  * @return {Promise}
  */


	_createClass(UserService, [{
		key: 'signUp',
		value: function signUp(username, email, password, mouseControlEnabled) {

			console.log('[signUp] email:  ' + email + '  pass: ' + password + ', mouseControll: ' + mouseControlEnabled);
			var requestBody = { username: username, email: email, password: password, mouseControlEnabled: mouseControlEnabled };
			return _Http2.default.FetchPost('/signUp', requestBody).then(function (response) {
				if (response.status === 201) {
					//this.user.set(response.json());
					return response.json();
				} else {
					console.log(response.json());
					throw response;
				}
			});
		}

		/**
   * Авторизация пользователя
   * @param {string} email
   * @param {string} password
   * @return {Promise}
   */

	}, {
		key: 'signIn',
		value: function signIn(email, password) {
			return _Http2.default.FetchPost('/signIn', { email: email, password: password }).then(function (response) {
				if (response.status === 200) {
					return response.json();
				} else {
					console.log(response.json());
					throw response;
				}
			});
		}

		/**
   * Проверяет, авторизован ли пользователь
   * @return {boolean}
   */

	}, {
		key: 'isAuthorized',
		value: function isAuthorized() {
			console.log("[UserService] in isAuthorized, this.user.getId = " + this.user.getId());
			return !!this.user.getId();
		}

		/**
   * Загружает данные о текущем пользователе
   * @param {boolean} [force=true] - игнорировать ли кэш?
   * @return {Promise}
   */

	}, {
		key: 'getProfile',
		value: function getProfile() {
			var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

			if (this.isAuthorized() && !force) {
				return Promise.resolve(this.user.get());
			}
			return _Http2.default.FetchGet('/profile').then(function (response) {
				if (response.status === 200) {
					return response.json();
				} else {
					throw response;
				}
			});
		}
	}, {
		key: 'getScorelist',
		value: function getScorelist(limit) {
			return _Http2.default.FetchGet('/top?limit=' + limit).then(function (response) {
				if (response.status === 200) {
					return response.json();
				} else {
					console.log(response.json());
					throw response;
				}
			});
		}
	}, {
		key: 'getOwnScore',
		value: function getOwnScore() {
			return _Http2.default.FetchGet('/statistic').then(function (response) {
				if (response.status === 200) {
					return response.json();
				} else {
					console.log('[UserService.getOwnScore] status = ' + response.status);
					throw response;
				}
			});
		}
	}, {
		key: 'sendControllSettings',
		value: function sendControllSettings(value) {
			return _Http2.default.FetchPost('/updateMouseControlEnabled', { "mouseControlEnabled": value }).then(function (response) {
				if (response.status === 200) {
					console.log('send controllSettings OK');
				} else {
					console.log('send controllSettings ERROR; statusCode: ' + response.status);
				}
			});
		}

		/**
   * Получить данного пользователя
   */

	}, {
		key: 'getUserLogin',
		value: function getUserLogin() {
			return this.user.get();
		}

		/**
   * Выход
   */

	}, {
		key: 'logout',
		value: function logout() {
			return _Http2.default.FetchGet('/logout');
		}
	}]);

	return UserService;
}();

exports.default = UserService;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Модуль, предоставляющий методы для выполнения HTTP-запросов
 * @module Http
 */
var Http = function () {
    /**
     * @constructor
     */
    function Http() {
        _classCallCheck(this, Http);

        this.baseUrl = 'http://82.202.246.5:8080';
    }

    /**
     * Выполняет GET-запрос по указанному адресу с использованием fetch
     * @param {string} address - адрес запроса
     * @return {Promise}
     */


    _createClass(Http, null, [{
        key: 'FetchGet',
        value: function FetchGet(address) {
            // const url = this.baseUrl + address;
            // const url = 'http://82.202.246.5:8080' + address;
            // const url = 'http://localhost:8080/api' + address;
            // const url = 'http://10.100.122.201:8080/api' + address;
            // const url = 'http://10.100.122.151:8080/api' + address;
            var url = 'https://tanks-backend.xyz/api' + address;

            console.log("[FetchGet] try get from " + url);

            return fetch(url, {
                method: 'GET',
                mode: 'cors',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Accept': 'application/json'
                }
            }).then(function (response) {
                console.log("[FetchGet] now get from " + url);
                return response;
            });
        }

        /**
         * Выполняет POST-запрос по указанному адресу с использованием fetch
         * @param {string} address - адрес запроса
         * @param {*} body - тело запроса (объект)
         * @return {Promise}
         */

    }, {
        key: 'FetchPost',
        value: function FetchPost(address, body) {

            // const url = 'http://82.202.246.5:8080' + address;
            // const url = 'http://localhost:8080/api' + address;
            // const url = 'http://10.100.122.201:8080/api' + address;
            // const url = 'http://10.100.122.151:8080/api' + address;
            var url = 'https://tanks-backend.xyz/api' + address;

            console.log("[FetchPost] try post to " + url);

            return fetch(url, {
                method: 'POST',
                mode: 'cors',
                credentials: 'include',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Accept': 'application/json'
                }
            }).then(function (response) {
                console.log('[Http.FetchPost] response = ' + response);
                return response;
            });
        }
    }]);

    return Http;
}();

exports.default = Http;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BlockComponents = __webpack_require__(2);

var _BlockComponents2 = _interopRequireDefault(_BlockComponents);

var _Form = __webpack_require__(71);

var _Form2 = _interopRequireDefault(_Form);

var _ValidSignInForm = __webpack_require__(30);

var _ValidSignInForm2 = _interopRequireDefault(_ValidSignInForm);

var _ValidSignUpForm = __webpack_require__(31);

var _ValidSignUpForm2 = _interopRequireDefault(_ValidSignUpForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import './Form.scss';

/**
 * Класс формы
 * @module Form
 */
var Form = function (_Block) {
  _inherits(Form, _Block);

  /**
   * @param {string} [tagName='div'] - tagName блока
   * @param {*} [attrs={}] - объект с атрибутами блока
   * @param {string[]} [classes=[]] - список имён классов
   * @param {*} [data={}] - объект с данными блока
   * @constructor
   */
  function Form() {
    var tagName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';
    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var classes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var data = arguments[3];

    _classCallCheck(this, Form);

    return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, tagName, attrs, classes, data));
  }

  /**
   * Получить форму
   */


  _createClass(Form, [{
    key: 'getClassElement',
    value: function getClassElement() {
      var data = this.getData();
      this.setHTML((0, _Form2.default)({ data: data }));
      return this.getElement();
    }

    /**
     * Получить кнопку назад из страницы с формы
     */

  }], [{
    key: 'getBackButton',
    value: function getBackButton() {
      return document.getElementsByClassName('back-button');
    }

    /**
     * Показываем ошибки к форме
     * @param {string}  msg - сообщение
     * @param {HTMLElement} form
     * @return {Promise}
     */
    // static showFormMessage(msg, form) {
    //     console.log(1);
    //     let currentForm = form.getElement().getElementsByTagName('form')[0];
    //     currentForm.insertBefore(ValidSignUpForm.createErrorElement(msg), currentForm.children[0]);
    // }

    /**
     * Очищаем поля форм
     */

  }, {
    key: 'reset',
    value: function reset() {
      Array.from(document.getElementsByTagName('form')).forEach(function (form) {
        form.reset();
      });
    }
  }]);

  return Form;
}(_BlockComponents2.default);

exports.default = Form;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var State = /** @class */ (function (_super) {
    __extends(State, _super);
    function State() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return State;
}(Phaser.State));
exports.default = State;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */

exports.encode = function (obj) {
  var str = '';

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (str.length) str += '&';
      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
    }
  }

  return str;
};

/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */

exports.decode = function(qs){
  var qry = {};
  var pairs = qs.split('&');
  for (var i = 0, l = pairs.length; i < l; i++) {
    var pair = pairs[i].split('=');
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return qry;
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {


module.exports = function(a, b){
  var fn = function(){};
  fn.prototype = b.prototype;
  a.prototype = new fn;
  a.prototype.constructor = a;
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(129);
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(46)))

/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Класс пользователя
 * @module User
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function () {
    /**
     * @param {object} opt - данные пользователя
     * @constructor
     */
    function User(opt) {
        _classCallCheck(this, User);

        this.email = opt.email || '';
        this.username = opt.username || '';
        this.id = opt.id || 0;
        this.score = opt.score || 0;
    }

    /**
     * Установить новые данные пользователя
     * @param {object} userData
     */


    _createClass(User, [{
        key: 'set',
        value: function set(userData) {
            this.id = userData.id;
            this.username = userData.username;
            this.email = userData.email;
            this.score = userData.score || 0;
        }

        /**
         * Возвращаем пользователя
         */

    }, {
        key: 'get',
        value: function get() {
            return {
                'email': this.email,
                'username': this.username,
                'id': this.id,
                'score': this.score
            };
        }

        /**
         * Возвращаем id пользователя
         */

    }, {
        key: 'getId',
        value: function getId() {
            return this.id;
        }

        /**
         * Возвращаем имя пользователя
         */

    }, {
        key: 'getUsername',
        value: function getUsername() {
            return this.username;
        }

        /**
         * Возвращаем email пользователя
         */

    }, {
        key: 'getEmail',
        value: function getEmail() {
            return this.email;
        }

        /**
         * Возвращаем счет пользователя
         */

    }, {
        key: 'getScore',
        value: function getScore() {
            return this.score;
        }
    }]);

    return User;
}();

exports.default = User;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Module dependencies.
 */

var debug = __webpack_require__(13)('socket.io-parser');
var Emitter = __webpack_require__(10);
var hasBin = __webpack_require__(48);
var binary = __webpack_require__(116);
var isBuf = __webpack_require__(49);

/**
 * Protocol version.
 *
 * @api public
 */

exports.protocol = 4;

/**
 * Packet types.
 *
 * @api public
 */

exports.types = [
  'CONNECT',
  'DISCONNECT',
  'EVENT',
  'ACK',
  'ERROR',
  'BINARY_EVENT',
  'BINARY_ACK'
];

/**
 * Packet type `connect`.
 *
 * @api public
 */

exports.CONNECT = 0;

/**
 * Packet type `disconnect`.
 *
 * @api public
 */

exports.DISCONNECT = 1;

/**
 * Packet type `event`.
 *
 * @api public
 */

exports.EVENT = 2;

/**
 * Packet type `ack`.
 *
 * @api public
 */

exports.ACK = 3;

/**
 * Packet type `error`.
 *
 * @api public
 */

exports.ERROR = 4;

/**
 * Packet type 'binary event'
 *
 * @api public
 */

exports.BINARY_EVENT = 5;

/**
 * Packet type `binary ack`. For acks with binary arguments.
 *
 * @api public
 */

exports.BINARY_ACK = 6;

/**
 * Encoder constructor.
 *
 * @api public
 */

exports.Encoder = Encoder;

/**
 * Decoder constructor.
 *
 * @api public
 */

exports.Decoder = Decoder;

/**
 * A socket.io Encoder instance
 *
 * @api public
 */

function Encoder() {}

/**
 * Encode a packet as a single string if non-binary, or as a
 * buffer sequence, depending on packet type.
 *
 * @param {Object} obj - packet object
 * @param {Function} callback - function to handle encodings (likely engine.write)
 * @return Calls callback with Array of encodings
 * @api public
 */

Encoder.prototype.encode = function(obj, callback){
  if ((obj.type === exports.EVENT || obj.type === exports.ACK) && hasBin(obj.data)) {
    obj.type = obj.type === exports.EVENT ? exports.BINARY_EVENT : exports.BINARY_ACK;
  }

  debug('encoding packet %j', obj);

  if (exports.BINARY_EVENT === obj.type || exports.BINARY_ACK === obj.type) {
    encodeAsBinary(obj, callback);
  }
  else {
    var encoding = encodeAsString(obj);
    callback([encoding]);
  }
};

/**
 * Encode packet as string.
 *
 * @param {Object} packet
 * @return {String} encoded
 * @api private
 */

function encodeAsString(obj) {

  // first is type
  var str = '' + obj.type;

  // attachments if we have them
  if (exports.BINARY_EVENT === obj.type || exports.BINARY_ACK === obj.type) {
    str += obj.attachments + '-';
  }

  // if we have a namespace other than `/`
  // we append it followed by a comma `,`
  if (obj.nsp && '/' !== obj.nsp) {
    str += obj.nsp + ',';
  }

  // immediately followed by the id
  if (null != obj.id) {
    str += obj.id;
  }

  // json data
  if (null != obj.data) {
    str += JSON.stringify(obj.data);
  }

  debug('encoded %j as %s', obj, str);
  return str;
}

/**
 * Encode packet as 'buffer sequence' by removing blobs, and
 * deconstructing packet into object with placeholders and
 * a list of buffers.
 *
 * @param {Object} packet
 * @return {Buffer} encoded
 * @api private
 */

function encodeAsBinary(obj, callback) {

  function writeEncoding(bloblessData) {
    var deconstruction = binary.deconstructPacket(bloblessData);
    var pack = encodeAsString(deconstruction.packet);
    var buffers = deconstruction.buffers;

    buffers.unshift(pack); // add packet info to beginning of data list
    callback(buffers); // write all the buffers
  }

  binary.removeBlobs(obj, writeEncoding);
}

/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 * @api public
 */

function Decoder() {
  this.reconstructor = null;
}

/**
 * Mix in `Emitter` with Decoder.
 */

Emitter(Decoder.prototype);

/**
 * Decodes an ecoded packet string into packet JSON.
 *
 * @param {String} obj - encoded packet
 * @return {Object} packet
 * @api public
 */

Decoder.prototype.add = function(obj) {
  var packet;
  if (typeof obj === 'string') {
    packet = decodeString(obj);
    if (exports.BINARY_EVENT === packet.type || exports.BINARY_ACK === packet.type) { // binary packet's json
      this.reconstructor = new BinaryReconstructor(packet);

      // no attachments, labeled binary but no binary data to follow
      if (this.reconstructor.reconPack.attachments === 0) {
        this.emit('decoded', packet);
      }
    } else { // non-binary full packet
      this.emit('decoded', packet);
    }
  }
  else if (isBuf(obj) || obj.base64) { // raw binary data
    if (!this.reconstructor) {
      throw new Error('got binary data when not reconstructing a packet');
    } else {
      packet = this.reconstructor.takeBinaryData(obj);
      if (packet) { // received final buffer
        this.reconstructor = null;
        this.emit('decoded', packet);
      }
    }
  }
  else {
    throw new Error('Unknown type: ' + obj);
  }
};

/**
 * Decode a packet String (JSON data)
 *
 * @param {String} str
 * @return {Object} packet
 * @api private
 */

function decodeString(str) {
  var i = 0;
  // look up type
  var p = {
    type: Number(str.charAt(0))
  };

  if (null == exports.types[p.type]) return error();

  // look up attachments if type binary
  if (exports.BINARY_EVENT === p.type || exports.BINARY_ACK === p.type) {
    var buf = '';
    while (str.charAt(++i) !== '-') {
      buf += str.charAt(i);
      if (i == str.length) break;
    }
    if (buf != Number(buf) || str.charAt(i) !== '-') {
      throw new Error('Illegal attachments');
    }
    p.attachments = Number(buf);
  }

  // look up namespace (if any)
  if ('/' === str.charAt(i + 1)) {
    p.nsp = '';
    while (++i) {
      var c = str.charAt(i);
      if (',' === c) break;
      p.nsp += c;
      if (i === str.length) break;
    }
  } else {
    p.nsp = '/';
  }

  // look up id
  var next = str.charAt(i + 1);
  if ('' !== next && Number(next) == next) {
    p.id = '';
    while (++i) {
      var c = str.charAt(i);
      if (null == c || Number(c) != c) {
        --i;
        break;
      }
      p.id += str.charAt(i);
      if (i === str.length) break;
    }
    p.id = Number(p.id);
  }

  // look up json data
  if (str.charAt(++i)) {
    p = tryParse(p, str.substr(i));
  }

  debug('decoded %s as %j', str, p);
  return p;
}

function tryParse(p, str) {
  try {
    p.data = JSON.parse(str);
  } catch(e){
    return error();
  }
  return p; 
}

/**
 * Deallocates a parser's resources
 *
 * @api public
 */

Decoder.prototype.destroy = function() {
  if (this.reconstructor) {
    this.reconstructor.finishedReconstruction();
  }
};

/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 * @api private
 */

function BinaryReconstructor(packet) {
  this.reconPack = packet;
  this.buffers = [];
}

/**
 * Method to be called when binary data received from connection
 * after a BINARY_EVENT packet.
 *
 * @param {Buffer | ArrayBuffer} binData - the raw binary data received
 * @return {null | Object} returns null if more binary data is expected or
 *   a reconstructed packet object if all buffers have been received.
 * @api private
 */

BinaryReconstructor.prototype.takeBinaryData = function(binData) {
  this.buffers.push(binData);
  if (this.buffers.length === this.reconPack.attachments) { // done with buffer list
    var packet = binary.reconstructPacket(this.reconPack, this.buffers);
    this.finishedReconstruction();
    return packet;
  }
  return null;
};

/**
 * Cleans up binary packet reconstruction variables.
 *
 * @api private
 */

BinaryReconstructor.prototype.finishedReconstruction = function() {
  this.reconPack = null;
  this.buffers = [];
};

function error() {
  return {
    type: exports.ERROR,
    data: 'parser error'
  };
}


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// browser shim for xmlhttprequest module

var hasCORS = __webpack_require__(120);

module.exports = function (opts) {
  var xdomain = opts.xdomain;

  // scheme must be same when usign XDomainRequest
  // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx
  var xscheme = opts.xscheme;

  // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
  // https://github.com/Automattic/engine.io-client/pull/217
  var enablesXDR = opts.enablesXDR;

  // XMLHttpRequest can be disabled on IE
  try {
    if ('undefined' !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e) { }

  // Use XDomainRequest for IE8 if enablesXDR is true
  // because loading bar keeps flashing when using jsonp-polling
  // https://github.com/yujiosaka/socke.io-ie8-loading-example
  try {
    if ('undefined' !== typeof XDomainRequest && !xscheme && enablesXDR) {
      return new XDomainRequest();
    }
  } catch (e) { }

  if (!xdomain) {
    try {
      return new global[['Active'].concat('Object').join('X')]('Microsoft.XMLHTTP');
    } catch (e) { }
  }
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var parser = __webpack_require__(11);
var Emitter = __webpack_require__(10);

/**
 * Module exports.
 */

module.exports = Transport;

/**
 * Transport abstract constructor.
 *
 * @param {Object} options.
 * @api private
 */

function Transport (opts) {
  this.path = opts.path;
  this.hostname = opts.hostname;
  this.port = opts.port;
  this.secure = opts.secure;
  this.query = opts.query;
  this.timestampParam = opts.timestampParam;
  this.timestampRequests = opts.timestampRequests;
  this.readyState = '';
  this.agent = opts.agent || false;
  this.socket = opts.socket;
  this.enablesXDR = opts.enablesXDR;

  // SSL options for Node.js client
  this.pfx = opts.pfx;
  this.key = opts.key;
  this.passphrase = opts.passphrase;
  this.cert = opts.cert;
  this.ca = opts.ca;
  this.ciphers = opts.ciphers;
  this.rejectUnauthorized = opts.rejectUnauthorized;
  this.forceNode = opts.forceNode;

  // other options for Node.js client
  this.extraHeaders = opts.extraHeaders;
  this.localAddress = opts.localAddress;
}

/**
 * Mix in `Emitter`.
 */

Emitter(Transport.prototype);

/**
 * Emits an error.
 *
 * @param {String} str
 * @return {Transport} for chaining
 * @api public
 */

Transport.prototype.onError = function (msg, desc) {
  var err = new Error(msg);
  err.type = 'TransportError';
  err.description = desc;
  this.emit('error', err);
  return this;
};

/**
 * Opens the transport.
 *
 * @api public
 */

Transport.prototype.open = function () {
  if ('closed' === this.readyState || '' === this.readyState) {
    this.readyState = 'opening';
    this.doOpen();
  }

  return this;
};

/**
 * Closes the transport.
 *
 * @api private
 */

Transport.prototype.close = function () {
  if ('opening' === this.readyState || 'open' === this.readyState) {
    this.doClose();
    this.onClose();
  }

  return this;
};

/**
 * Sends multiple packets.
 *
 * @param {Array} packets
 * @api private
 */

Transport.prototype.send = function (packets) {
  if ('open' === this.readyState) {
    this.write(packets);
  } else {
    throw new Error('Transport not open');
  }
};

/**
 * Called upon open
 *
 * @api private
 */

Transport.prototype.onOpen = function () {
  this.readyState = 'open';
  this.writable = true;
  this.emit('open');
};

/**
 * Called with data.
 *
 * @param {String} data
 * @api private
 */

Transport.prototype.onData = function (data) {
  var packet = parser.decodePacket(data, this.socket.binaryType);
  this.onPacket(packet);
};

/**
 * Called with a decoded packet.
 */

Transport.prototype.onPacket = function (packet) {
  this.emit('packet', packet);
};

/**
 * Called upon close.
 *
 * @api private
 */

Transport.prototype.onClose = function () {
  this.readyState = 'closed';
  this.emit('close');
};


/***/ }),
/* 29 */,
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Notify = __webpack_require__(12);

var _Notify2 = _interopRequireDefault(_Notify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Проверяем корректность email
 * @param {string} email
 */
function isCorrectEmail(email) {
  return email.match(new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$'));
}

/**
 * Проверяем корректность поля формы
 * @param {string} text
 * @param {int} minLenField
 * @param {int} maxLenField
 */
function isCorrectTextField(text, minLenField, maxLenField) {
  return text.match(new RegExp('^[a-zA-Z0-9_-]{' + minLenField + ',' + maxLenField + '}$'));
}

/**
 * Класс валидации формы входа
 * @module ValidSignInForm
 */

var ValidSignInForm = function () {
  /**
   * @param {string} email
   * @param {string} password
   * @constructor
   */
  function ValidSignInForm(email, password) {
    _classCallCheck(this, ValidSignInForm);

    this.email = email;
    this.password = password;
    // this.currentForm = form;

    this.notify = new _Notify2.default();
  }

  /**
   * Валидируем форму
   * @returns {boolean}
   */


  _createClass(ValidSignInForm, [{
    key: 'validForm',
    value: function validForm() {
      var flag = true;

      var minLenPassword = 1,
          maxLenPassword = 24;

      if (!isCorrectEmail(this.email)) {
        flag = false;
        this.notify.notify('invalid email');
      }

      if (!isCorrectTextField(this.password, minLenPassword, maxLenPassword)) {
        flag = false;
        this.notify.notify('invalid password');
      }

      return flag;
    }
  }]);

  return ValidSignInForm;
}();

exports.default = ValidSignInForm;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Notify = __webpack_require__(12);

var _Notify2 = _interopRequireDefault(_Notify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Проверяем корректность поля формы
 * @param {string} text
 * @param {int} minLenField
 * @param {int} maxLenField
 */
function isCorrectTextField(text, minLenField, maxLenField) {
	return text.match(new RegExp('^[a-zA-Z0-9_-]{' + minLenField + ',' + maxLenField + '}$'));
}

/**
 * Проверяем корректность email
 * @param {string} email
 */
function isCorrectEmail(email) {
	return email.match(new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$'));
}

/**
 * Проверяем пароль на совпадение
 * @param {string} pswd
 * @param {string} pswdRepeat
 */
function isSamePasswords(pswd, pswdRepeat) {
	return pswd === pswdRepeat && pswd !== '' && pswdRepeat !== '';
}

/**
 * Класс валидации формы регистрации
 * @module ValidSignUpForm
 */

var ValidSignUpForm = function () {
	/**
  * @param {string} login
  * @param {string} email
  * @param {string} password
  * @param {string} repeatPassword
  * @constructor
  */
	function ValidSignUpForm(login, email, password, repeatPassword) {
		_classCallCheck(this, ValidSignUpForm);

		this.username = login;
		this.email = email;
		this.password = password;
		this.repeatPassword = repeatPassword;
		// this.currentForm = form;

		this.notify = new _Notify2.default();
	}

	/**
  * Валидируем форму
  * @returns {boolean}
  */


	_createClass(ValidSignUpForm, [{
		key: 'validForm',
		value: function validForm() {
			var flag = true;

			var minLenUsername = 1,
			    maxLenUsername = 24,
			    minLenPassword = 1,
			    maxLenPassword = 24;

			if (!isCorrectTextField(this.username, minLenUsername, maxLenUsername)) {
				flag = false;
				this.notify.notify('invalid username');
			}

			if (!isCorrectEmail(this.email)) {
				flag = false;
				this.notify.notify('invalid email');
			}

			if (!isCorrectTextField(this.password, minLenPassword, maxLenPassword)) {
				flag = false;
				this.notify.notify('invalid password');
			}

			if (!isSamePasswords(this.password, this.repeatPassword)) {
				flag = false;
				this.notify.notify('error repeat password');
			}

			return flag;
		}
	}]);

	return ValidSignUpForm;
}();

exports.default = ValidSignUpForm;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BlockComponents = __webpack_require__(2);

var _BlockComponents2 = _interopRequireDefault(_BlockComponents);

var _Menu = __webpack_require__(79);

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import './Menu.scss';

/**
 * Класс Menu-а
 * @module Menu
 */
var Menu = function (_Block) {
  _inherits(Menu, _Block);

  /**
   * @param {string} [tagName='div'] - tagName блока
   * @param {*} [attrs={}] - объект с атрибутами блока
   * @param {string[]} [classes=[]] - список имён классов
   * @param {*} [data={}] - объект с данными блока
   * @constructor
   */
  function Menu() {
    var tagName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';
    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var classes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var data = arguments[3];

    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, tagName, attrs, classes, data));
  }

  /**
   * Получить Menu
   */


  _createClass(Menu, [{
    key: 'getClassElement',
    value: function getClassElement() {
      var data = this.getData();
      this.setHTML((0, _Menu2.default)({ data: data }));
      return this.getElement();
    }
  }]);

  return Menu;
}(_BlockComponents2.default);

exports.default = Menu;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Strategy = /** @class */ (function () {
    function Strategy() {
        if (Strategy.__instance) {
            return Strategy.__instance;
        }
        this.strategy = 'single-offline';
        Strategy.__instance = this;
    }
    Strategy.prototype.setMultiStrategy = function () {
        this.strategy = 'multiplayer';
    };
    Strategy.prototype.setOfflineStrategy = function () {
        console.log('strategy offline mode');
        this.strategy = 'single-offline';
    };
    Strategy.prototype.setSingleStrategy = function () {
        this.strategy = 'single-offline';
    };
    Strategy.prototype.getStrategy = function () {
        return this.strategy;
    };
    return Strategy;
}());
var strategy = new Strategy();
exports.default = strategy;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var boot_state_1 = __webpack_require__(97);
var preloader_state_1 = __webpack_require__(99);
var main_state_1 = __webpack_require__(105);
var world_state_1 = __webpack_require__(106);
// import WorldState        from './states/singPlayerWorld.state';
var PauseMenu_1 = __webpack_require__(143);
var GameOverMenu_1 = __webpack_require__(144);
var World_js_1 = __webpack_require__(145);
var strategyControl_1 = __webpack_require__(33);
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(User) {
        var _this = _super.call(this, Math.max(document.documentElement.clientWidth, window.innerWidth || 0), Math.max(document.documentElement.clientHeight, window.innerHeight || 0), Phaser.AUTO, 'content', null) || this;
        // super(1890, 1000, Phaser.AUTO, 'content', null);
        // super(800, 600, Phaser.AUTO, 'content', null);
        _this.user = User;
        _this.state.add('boot', boot_state_1.default);
        _this.state.add('preloader', preloader_state_1.default);
        _this.state.add('main', main_state_1.default);
        switch (strategyControl_1.default.getStrategy()) {
            case 'multiplayer':
                _this.state.add('world', world_state_1.default);
                break;
            case "single-offline":
                _this.state.add('world', World_js_1.default, false);
                break;
        }
        _this.state.add('PauseMenu', PauseMenu_1.default, false);
        _this.state.add('GameOverMenu', GameOverMenu_1.default, false);
        _this.state.start('boot'); // Initialize and start `boot` state
        return _this;
    }
    App.exit = function () {
        window.open("/", "_self");
    };
    return App;
}(Phaser.Game));
exports.default = App;


/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = "../../img/4119334de3c71843520250c6c9f0594d.jpg";

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = "../../img/81d724516f8076962ff565d9defc08ba.png";

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = "../../img/5733b613e5ea55c939a6276c4b4b7aa0.png";

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = "../../img/4119334de3c71843520250c6c9f0594d.jpg";

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = "../../img/aa291441f3cf6c2c2f1537008f54cbdb.png";

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = "../../img/217b9d48bac4d47a48cc3bc389cd422e.png";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var TankBody = /** @class */ (function (_super) {
    __extends(TankBody, _super);
    function TankBody(game, cursor) {
        var _this = _super.call(this, game, 0, 0) || this;
        _this._game = game;
        _this._cursor = cursor;
        _this.create();
        return _this;
    }
    TankBody.prototype.create = function () {
        this._body = this._game.add.sprite(50, 400, 'tank', 'tank1');
        console.log("body height = " + this._body.height + " body width = " + this._body.width);
        this._body.anchor.setTo(0.5, 0.5);
        this._game.physics.arcade.enable(this._body);
        this._body.body.maxVelocity.setTo(100, 100);
        this._body.body.collideWorldBounds = true;
    };
    TankBody.prototype.update = function () {
        // величина угла поворота
        if (this.game.input.keyboard.isDown(Phaser.Keyboard.A)) {
            this._body.angle -= 5;
        }
        else if (this.game.input.keyboard.isDown(Phaser.Keyboard.D)) {
            this._body.angle += 5;
        }
        // скорость
        if (this.game.input.keyboard.isDown(Phaser.Keyboard.W)) {
            this._currentSpeed = 251;
        }
        else {
            if (this._currentSpeed > 0) {
                this._currentSpeed -= 25; // скорость торможения
            }
        }
        // движение c поворотами
        if (this._currentSpeed > 0) {
            this._game.physics.arcade.velocityFromRotation(this._body.rotation, this._currentSpeed, this._body.body.velocity);
        }
    };
    Object.defineProperty(TankBody.prototype, "currentPosition", {
        get: function () {
            return {
                xCoordinate: this._body.x,
                yCoordinate: this._body.y,
            };
        },
        set: function (coordinate) {
            this._body.x = coordinate.xCoordinate;
            this._body.y = coordinate.yCoordinate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TankBody.prototype, "currentPlatformAngle", {
        set: function (angle) {
            this._body.angle = angle;
        },
        enumerable: true,
        configurable: true
    });
    TankBody.prototype.setPlatformAngle = function (angle) {
        this._body.angle = angle;
    };
    TankBody.prototype.kill = function () {
        this._body.kill();
    };
    return TankBody;
}(Phaser.Sprite));
exports.default = TankBody;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ControllSettings_js_1 = __webpack_require__(5);
var TankTurret = /** @class */ (function (_super) {
    __extends(TankTurret, _super);
    function TankTurret(game, cursor) {
        var _this = _super.call(this, game, 0, 0) || this;
        _this._game = game;
        _this._cursor = cursor;
        _this._controlSettings = new ControllSettings_js_1.default();
        _this._dPhi = 0.07;
        _this.create();
        return _this;
    }
    TankTurret.prototype.create = function () {
        this._turret = this._game.add.sprite(50, 400, 'tank', 'turret');
        this._turret.anchor.setTo(0.5, 0.5);
    };
    TankTurret.prototype.update = function () {
        if (this._controlSettings.mouseControll === true) {
            this._turret.rotation = this._game.physics.arcade.angleToPointer(this._turret);
        }
        else {
            var angle = this._turret.rotation;
            if (this._cursor.left.isDown) {
                var newAngle = angle - this._dPhi;
                if (newAngle < -180) {
                    var delta = -180 - newAngle;
                    this._turret.rotation = 180 - delta;
                }
                else {
                    this._turret.rotation = newAngle;
                }
            }
            else if (this._cursor.right.isDown) {
                var newAngle = angle + this._dPhi;
                if (newAngle >= 180) {
                    var delta = newAngle - 180;
                    this._turret.rotation = -180 + delta;
                }
                else {
                    this._turret.rotation = newAngle;
                }
            }
        }
    };
    Object.defineProperty(TankTurret.prototype, "turretCoordinate", {
        set: function (coordinate) {
            this._turret.x = coordinate.xCoordinate;
            this._turret.y = coordinate.yCoordinate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TankTurret.prototype, "turretAngle", {
        set: function (angle) {
            this._turret.angle = angle;
        },
        enumerable: true,
        configurable: true
    });
    TankTurret.prototype.kill = function () {
        this._turret.kill();
    };
    return TankTurret;
}(Phaser.Sprite));
exports.default = TankTurret;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Lable = /** @class */ (function () {
    function Lable(game, coordinate, content, scale) {
        this._game = game;
        this._textStyle = { font: "bold 32px Arial", fill: "#120dff", boundsAlignH: "center", boundsAlignV: "middle" };
        this._text = this._game.add.text(coordinate.xCoordinate, coordinate.yCoordinate, content, this._textStyle);
        this._text.stroke = '#000000';
        this._text.strokeThickness = 1;
        this._text.anchor.set(0.5);
        this._scale = scale;
    }
    Object.defineProperty(Lable.prototype, "currentPosition", {
        set: function (coordinate) {
            this._text.x = coordinate.xCoordinate;
            this._text.y = coordinate.yCoordinate - 70;
        },
        enumerable: true,
        configurable: true
    });
    Lable.prototype.kill = function () {
        this._text.kill();
    };
    return Lable;
}());
exports.default = Lable;


/***/ }),
/* 44 */
/***/ (function(module, exports) {

var HealthBar = function (game, providedConfig) {
    this.game = game;
    this.setupConfiguration(providedConfig);
    this.setPosition(this.config.x, this.config.y);
    this.drawBackground();
    this.drawHealthBar();
    this.setFixedToCamera(this.config.isFixedToCamera);
};
HealthBar.prototype.constructor = HealthBar;
HealthBar.prototype.setupConfiguration = function (providedConfig) {
    this.config = this.mergeWithDefaultConfiguration(providedConfig);
    this.flipped = this.config.flipped;
};
HealthBar.prototype.mergeWithDefaultConfiguration = function (newConfig) {
    var defaultConfig = {
        width: 250,
        height: 40,
        x: 0,
        y: 0,
        bg: {
            color: '#d40a09'
        },
        bar: {
            color: '#08ff22'
        },
        animationDuration: 200,
        flipped: false,
        isFixedToCamera: false
    };
    return mergeObjetcs(defaultConfig, newConfig);
};
function mergeObjetcs(targetObj, newObj) {
    for (var p in newObj) {
        try {
            targetObj[p] = newObj[p].constructor == Object ? mergeObjetcs(targetObj[p], newObj[p]) : newObj[p];
        }
        catch (e) {
            targetObj[p] = newObj[p];
        }
    }
    return targetObj;
}
HealthBar.prototype.drawBackground = function () {
    var bmd = this.game.add.bitmapData(this.config.width, this.config.height);
    bmd.ctx.fillStyle = this.config.bg.color;
    bmd.ctx.beginPath();
    bmd.ctx.rect(0, 0, this.config.width, this.config.height);
    bmd.ctx.fill();
    bmd.update();
    this.bgSprite = this.game.add.sprite(this.x, this.y, bmd);
    this.bgSprite.anchor.set(0.5);
    if (this.flipped) {
        this.bgSprite.scale.x = -1;
    }
};
HealthBar.prototype.drawHealthBar = function () {
    var bmd = this.game.add.bitmapData(this.config.width, this.config.height);
    bmd.ctx.fillStyle = this.config.bar.color;
    bmd.ctx.beginPath();
    bmd.ctx.rect(0, 0, this.config.width, this.config.height);
    bmd.ctx.fill();
    bmd.update();
    this.barSprite = this.game.add.sprite(this.x - this.bgSprite.width / 2, this.y, bmd);
    this.barSprite.anchor.y = 0.5;
    if (this.flipped) {
        this.barSprite.scale.x = -1;
    }
};
HealthBar.prototype.setPosition = function (x, y) {
    this.x = x;
    this.y = y;
    if (this.bgSprite !== undefined && this.barSprite !== undefined) {
        this.bgSprite.position.x = x;
        this.bgSprite.position.y = y;
        this.barSprite.position.x = x - this.config.width / 2;
        this.barSprite.position.y = y;
    }
};
HealthBar.prototype.setPercent = function (newValue) {
    if (newValue < 0)
        newValue = 0;
    if (newValue > 100)
        newValue = 100;
    var newWidth = (newValue * this.config.width) / 100;
    this.setWidth(newWidth);
};
/*
 Hex format, example #ad3aa3
 */
HealthBar.prototype.setBarColor = function (newColor) {
    var bmd = this.barSprite.key;
    bmd.update();
    var currentRGBColor = bmd.getPixelRGB(0, 0);
    var newRGBColor = hexToRgb(newColor);
    bmd.replaceRGB(currentRGBColor.r, currentRGBColor.g, currentRGBColor.b, 255, newRGBColor.r, newRGBColor.g, newRGBColor.b, 255);
};
HealthBar.prototype.setWidth = function (newWidth) {
    if (this.flipped) {
        newWidth = -1 * newWidth;
    }
    this.game.add.tween(this.barSprite).to({ width: newWidth }, this.config.animationDuration, Phaser.Easing.Linear.None, true);
};
HealthBar.prototype.setFixedToCamera = function (fixedToCamera) {
    this.bgSprite.fixedToCamera = fixedToCamera;
    this.barSprite.fixedToCamera = fixedToCamera;
};
HealthBar.prototype.kill = function () {
    this.bgSprite.kill();
    this.barSprite.kill();
};
module.exports = HealthBar;
/**
 Utils
 */
function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
    });
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}


/***/ }),
/* 45 */
/***/ (function(module, exports) {

/**
 * Parses an URI
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */

var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

var parts = [
    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
];

module.exports = function parseuri(str) {
    var src = str,
        b = str.indexOf('['),
        e = str.indexOf(']');

    if (b != -1 && e != -1) {
        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
    }

    var m = re.exec(str || ''),
        uri = {},
        i = 14;

    while (i--) {
        uri[parts[i]] = m[i] || '';
    }

    if (b != -1 && e != -1) {
        uri.source = src;
        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
        uri.ipv6uri = true;
    }

    return uri;
};


/***/ }),
/* 46 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 47 */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/* global Blob File */

/*
 * Module requirements.
 */

var isArray = __webpack_require__(115);

var toString = Object.prototype.toString;
var withNativeBlob = typeof global.Blob === 'function' || toString.call(global.Blob) === '[object BlobConstructor]';
var withNativeFile = typeof global.File === 'function' || toString.call(global.File) === '[object FileConstructor]';

/**
 * Module exports.
 */

module.exports = hasBinary;

/**
 * Checks for binary data.
 *
 * Supports Buffer, ArrayBuffer, Blob and File.
 *
 * @param {Object} anything
 * @api public
 */

function hasBinary (obj) {
  if (!obj || typeof obj !== 'object') {
    return false;
  }

  if (isArray(obj)) {
    for (var i = 0, l = obj.length; i < l; i++) {
      if (hasBinary(obj[i])) {
        return true;
      }
    }
    return false;
  }

  if ((typeof global.Buffer === 'function' && global.Buffer.isBuffer && global.Buffer.isBuffer(obj)) ||
     (typeof global.ArrayBuffer === 'function' && obj instanceof ArrayBuffer) ||
     (withNativeBlob && obj instanceof Blob) ||
     (withNativeFile && obj instanceof File)
    ) {
    return true;
  }

  // see: https://github.com/Automattic/has-binary/pull/4
  if (obj.toJSON && typeof obj.toJSON === 'function' && arguments.length === 1) {
    return hasBinary(obj.toJSON(), true);
  }

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
      return true;
    }
  }

  return false;
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = isBuf;

/**
 * Returns true if obj is a buffer or an arraybuffer.
 *
 * @api private
 */

function isBuf(obj) {
  return (global.Buffer && global.Buffer.isBuffer(obj)) ||
         (global.ArrayBuffer && obj instanceof ArrayBuffer);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Module dependencies.
 */

var eio = __webpack_require__(118);
var Socket = __webpack_require__(55);
var Emitter = __webpack_require__(10);
var parser = __webpack_require__(26);
var on = __webpack_require__(56);
var bind = __webpack_require__(57);
var debug = __webpack_require__(13)('socket.io-client:manager');
var indexOf = __webpack_require__(54);
var Backoff = __webpack_require__(134);

/**
 * IE6+ hasOwnProperty
 */

var has = Object.prototype.hasOwnProperty;

/**
 * Module exports
 */

module.exports = Manager;

/**
 * `Manager` constructor.
 *
 * @param {String} engine instance or engine uri/opts
 * @param {Object} options
 * @api public
 */

function Manager (uri, opts) {
  if (!(this instanceof Manager)) return new Manager(uri, opts);
  if (uri && ('object' === typeof uri)) {
    opts = uri;
    uri = undefined;
  }
  opts = opts || {};

  opts.path = opts.path || '/socket.io';
  this.nsps = {};
  this.subs = [];
  this.opts = opts;
  this.reconnection(opts.reconnection !== false);
  this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
  this.reconnectionDelay(opts.reconnectionDelay || 1000);
  this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
  this.randomizationFactor(opts.randomizationFactor || 0.5);
  this.backoff = new Backoff({
    min: this.reconnectionDelay(),
    max: this.reconnectionDelayMax(),
    jitter: this.randomizationFactor()
  });
  this.timeout(null == opts.timeout ? 20000 : opts.timeout);
  this.readyState = 'closed';
  this.uri = uri;
  this.connecting = [];
  this.lastPing = null;
  this.encoding = false;
  this.packetBuffer = [];
  var _parser = opts.parser || parser;
  this.encoder = new _parser.Encoder();
  this.decoder = new _parser.Decoder();
  this.autoConnect = opts.autoConnect !== false;
  if (this.autoConnect) this.open();
}

/**
 * Propagate given event to sockets and emit on `this`
 *
 * @api private
 */

Manager.prototype.emitAll = function () {
  this.emit.apply(this, arguments);
  for (var nsp in this.nsps) {
    if (has.call(this.nsps, nsp)) {
      this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
    }
  }
};

/**
 * Update `socket.id` of all sockets
 *
 * @api private
 */

Manager.prototype.updateSocketIds = function () {
  for (var nsp in this.nsps) {
    if (has.call(this.nsps, nsp)) {
      this.nsps[nsp].id = this.generateId(nsp);
    }
  }
};

/**
 * generate `socket.id` for the given `nsp`
 *
 * @param {String} nsp
 * @return {String}
 * @api private
 */

Manager.prototype.generateId = function (nsp) {
  return (nsp === '/' ? '' : (nsp + '#')) + this.engine.id;
};

/**
 * Mix in `Emitter`.
 */

Emitter(Manager.prototype);

/**
 * Sets the `reconnection` config.
 *
 * @param {Boolean} true/false if it should automatically reconnect
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnection = function (v) {
  if (!arguments.length) return this._reconnection;
  this._reconnection = !!v;
  return this;
};

/**
 * Sets the reconnection attempts config.
 *
 * @param {Number} max reconnection attempts before giving up
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionAttempts = function (v) {
  if (!arguments.length) return this._reconnectionAttempts;
  this._reconnectionAttempts = v;
  return this;
};

/**
 * Sets the delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionDelay = function (v) {
  if (!arguments.length) return this._reconnectionDelay;
  this._reconnectionDelay = v;
  this.backoff && this.backoff.setMin(v);
  return this;
};

Manager.prototype.randomizationFactor = function (v) {
  if (!arguments.length) return this._randomizationFactor;
  this._randomizationFactor = v;
  this.backoff && this.backoff.setJitter(v);
  return this;
};

/**
 * Sets the maximum delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionDelayMax = function (v) {
  if (!arguments.length) return this._reconnectionDelayMax;
  this._reconnectionDelayMax = v;
  this.backoff && this.backoff.setMax(v);
  return this;
};

/**
 * Sets the connection timeout. `false` to disable
 *
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.timeout = function (v) {
  if (!arguments.length) return this._timeout;
  this._timeout = v;
  return this;
};

/**
 * Starts trying to reconnect if reconnection is enabled and we have not
 * started reconnecting yet
 *
 * @api private
 */

Manager.prototype.maybeReconnectOnOpen = function () {
  // Only try to reconnect if it's the first time we're connecting
  if (!this.reconnecting && this._reconnection && this.backoff.attempts === 0) {
    // keeps reconnection from firing twice for the same reconnection loop
    this.reconnect();
  }
};

/**
 * Sets the current transport `socket`.
 *
 * @param {Function} optional, callback
 * @return {Manager} self
 * @api public
 */

Manager.prototype.open =
Manager.prototype.connect = function (fn, opts) {
  debug('readyState %s', this.readyState);
  if (~this.readyState.indexOf('open')) return this;

  debug('opening %s', this.uri);
  this.engine = eio(this.uri, this.opts);
  var socket = this.engine;
  var self = this;
  this.readyState = 'opening';
  this.skipReconnect = false;

  // emit `open`
  var openSub = on(socket, 'open', function () {
    self.onopen();
    fn && fn();
  });

  // emit `connect_error`
  var errorSub = on(socket, 'error', function (data) {
    debug('connect_error');
    self.cleanup();
    self.readyState = 'closed';
    self.emitAll('connect_error', data);
    if (fn) {
      var err = new Error('Connection error');
      err.data = data;
      fn(err);
    } else {
      // Only do this if there is no fn to handle the error
      self.maybeReconnectOnOpen();
    }
  });

  // emit `connect_timeout`
  if (false !== this._timeout) {
    var timeout = this._timeout;
    debug('connect attempt will timeout after %d', timeout);

    // set timer
    var timer = setTimeout(function () {
      debug('connect attempt timed out after %d', timeout);
      openSub.destroy();
      socket.close();
      socket.emit('error', 'timeout');
      self.emitAll('connect_timeout', timeout);
    }, timeout);

    this.subs.push({
      destroy: function () {
        clearTimeout(timer);
      }
    });
  }

  this.subs.push(openSub);
  this.subs.push(errorSub);

  return this;
};

/**
 * Called upon transport open.
 *
 * @api private
 */

Manager.prototype.onopen = function () {
  debug('open');

  // clear old subs
  this.cleanup();

  // mark as open
  this.readyState = 'open';
  this.emit('open');

  // add new subs
  var socket = this.engine;
  this.subs.push(on(socket, 'data', bind(this, 'ondata')));
  this.subs.push(on(socket, 'ping', bind(this, 'onping')));
  this.subs.push(on(socket, 'pong', bind(this, 'onpong')));
  this.subs.push(on(socket, 'error', bind(this, 'onerror')));
  this.subs.push(on(socket, 'close', bind(this, 'onclose')));
  this.subs.push(on(this.decoder, 'decoded', bind(this, 'ondecoded')));
};

/**
 * Called upon a ping.
 *
 * @api private
 */

Manager.prototype.onping = function () {
  this.lastPing = new Date();
  this.emitAll('ping');
};

/**
 * Called upon a packet.
 *
 * @api private
 */

Manager.prototype.onpong = function () {
  this.emitAll('pong', new Date() - this.lastPing);
};

/**
 * Called with data.
 *
 * @api private
 */

Manager.prototype.ondata = function (data) {
  this.decoder.add(data);
};

/**
 * Called when parser fully decodes a packet.
 *
 * @api private
 */

Manager.prototype.ondecoded = function (packet) {
  this.emit('packet', packet);
};

/**
 * Called upon socket error.
 *
 * @api private
 */

Manager.prototype.onerror = function (err) {
  debug('error', err);
  this.emitAll('error', err);
};

/**
 * Creates a new socket for the given `nsp`.
 *
 * @return {Socket}
 * @api public
 */

Manager.prototype.socket = function (nsp, opts) {
  var socket = this.nsps[nsp];
  if (!socket) {
    socket = new Socket(this, nsp, opts);
    this.nsps[nsp] = socket;
    var self = this;
    socket.on('connecting', onConnecting);
    socket.on('connect', function () {
      socket.id = self.generateId(nsp);
    });

    if (this.autoConnect) {
      // manually call here since connecting event is fired before listening
      onConnecting();
    }
  }

  function onConnecting () {
    if (!~indexOf(self.connecting, socket)) {
      self.connecting.push(socket);
    }
  }

  return socket;
};

/**
 * Called upon a socket close.
 *
 * @param {Socket} socket
 */

Manager.prototype.destroy = function (socket) {
  var index = indexOf(this.connecting, socket);
  if (~index) this.connecting.splice(index, 1);
  if (this.connecting.length) return;

  this.close();
};

/**
 * Writes a packet.
 *
 * @param {Object} packet
 * @api private
 */

Manager.prototype.packet = function (packet) {
  debug('writing packet %j', packet);
  var self = this;
  if (packet.query && packet.type === 0) packet.nsp += '?' + packet.query;

  if (!self.encoding) {
    // encode, then write to engine with result
    self.encoding = true;
    this.encoder.encode(packet, function (encodedPackets) {
      for (var i = 0; i < encodedPackets.length; i++) {
        self.engine.write(encodedPackets[i], packet.options);
      }
      self.encoding = false;
      self.processPacketQueue();
    });
  } else { // add packet to the queue
    self.packetBuffer.push(packet);
  }
};

/**
 * If packet buffer is non-empty, begins encoding the
 * next packet in line.
 *
 * @api private
 */

Manager.prototype.processPacketQueue = function () {
  if (this.packetBuffer.length > 0 && !this.encoding) {
    var pack = this.packetBuffer.shift();
    this.packet(pack);
  }
};

/**
 * Clean up transport subscriptions and packet buffer.
 *
 * @api private
 */

Manager.prototype.cleanup = function () {
  debug('cleanup');

  var subsLength = this.subs.length;
  for (var i = 0; i < subsLength; i++) {
    var sub = this.subs.shift();
    sub.destroy();
  }

  this.packetBuffer = [];
  this.encoding = false;
  this.lastPing = null;

  this.decoder.destroy();
};

/**
 * Close the current socket.
 *
 * @api private
 */

Manager.prototype.close =
Manager.prototype.disconnect = function () {
  debug('disconnect');
  this.skipReconnect = true;
  this.reconnecting = false;
  if ('opening' === this.readyState) {
    // `onclose` will not fire because
    // an open event never happened
    this.cleanup();
  }
  this.backoff.reset();
  this.readyState = 'closed';
  if (this.engine) this.engine.close();
};

/**
 * Called upon engine close.
 *
 * @api private
 */

Manager.prototype.onclose = function (reason) {
  debug('onclose');

  this.cleanup();
  this.backoff.reset();
  this.readyState = 'closed';
  this.emit('close', reason);

  if (this._reconnection && !this.skipReconnect) {
    this.reconnect();
  }
};

/**
 * Attempt a reconnection.
 *
 * @api private
 */

Manager.prototype.reconnect = function () {
  if (this.reconnecting || this.skipReconnect) return this;

  var self = this;

  if (this.backoff.attempts >= this._reconnectionAttempts) {
    debug('reconnect failed');
    this.backoff.reset();
    this.emitAll('reconnect_failed');
    this.reconnecting = false;
  } else {
    var delay = this.backoff.duration();
    debug('will wait %dms before reconnect attempt', delay);

    this.reconnecting = true;
    var timer = setTimeout(function () {
      if (self.skipReconnect) return;

      debug('attempting reconnect');
      self.emitAll('reconnect_attempt', self.backoff.attempts);
      self.emitAll('reconnecting', self.backoff.attempts);

      // check again for the case socket closed in above events
      if (self.skipReconnect) return;

      self.open(function (err) {
        if (err) {
          debug('reconnect attempt error');
          self.reconnecting = false;
          self.reconnect();
          self.emitAll('reconnect_error', err.data);
        } else {
          debug('reconnect success');
          self.onreconnect();
        }
      });
    }, delay);

    this.subs.push({
      destroy: function () {
        clearTimeout(timer);
      }
    });
  }
};

/**
 * Called upon successful reconnect.
 *
 * @api private
 */

Manager.prototype.onreconnect = function () {
  var attempt = this.backoff.attempts;
  this.reconnecting = false;
  this.backoff.reset();
  this.updateSocketIds();
  this.emitAll('reconnect', attempt);
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Module dependencies
 */

var XMLHttpRequest = __webpack_require__(27);
var XHR = __webpack_require__(121);
var JSONP = __webpack_require__(130);
var websocket = __webpack_require__(131);

/**
 * Export transports.
 */

exports.polling = polling;
exports.websocket = websocket;

/**
 * Polling transport polymorphic constructor.
 * Decides on xhr vs jsonp based on feature detection.
 *
 * @api private
 */

function polling (opts) {
  var xhr;
  var xd = false;
  var xs = false;
  var jsonp = false !== opts.jsonp;

  if (global.location) {
    var isSSL = 'https:' === location.protocol;
    var port = location.port;

    // some user agents have empty `location.port`
    if (!port) {
      port = isSSL ? 443 : 80;
    }

    xd = opts.hostname !== location.hostname || port !== opts.port;
    xs = opts.secure !== isSSL;
  }

  opts.xdomain = xd;
  opts.xscheme = xs;
  xhr = new XMLHttpRequest(opts);

  if ('open' in xhr && !opts.forceJSONP) {
    return new XHR(opts);
  } else {
    if (!jsonp) throw new Error('JSONP disabled');
    return new JSONP(opts);
  }
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var Transport = __webpack_require__(28);
var parseqs = __webpack_require__(18);
var parser = __webpack_require__(11);
var inherit = __webpack_require__(19);
var yeast = __webpack_require__(53);
var debug = __webpack_require__(20)('engine.io-client:polling');

/**
 * Module exports.
 */

module.exports = Polling;

/**
 * Is XHR2 supported?
 */

var hasXHR2 = (function () {
  var XMLHttpRequest = __webpack_require__(27);
  var xhr = new XMLHttpRequest({ xdomain: false });
  return null != xhr.responseType;
})();

/**
 * Polling interface.
 *
 * @param {Object} opts
 * @api private
 */

function Polling (opts) {
  var forceBase64 = (opts && opts.forceBase64);
  if (!hasXHR2 || forceBase64) {
    this.supportsBinary = false;
  }
  Transport.call(this, opts);
}

/**
 * Inherits from Transport.
 */

inherit(Polling, Transport);

/**
 * Transport name.
 */

Polling.prototype.name = 'polling';

/**
 * Opens the socket (triggers polling). We write a PING message to determine
 * when the transport is open.
 *
 * @api private
 */

Polling.prototype.doOpen = function () {
  this.poll();
};

/**
 * Pauses polling.
 *
 * @param {Function} callback upon buffers are flushed and transport is paused
 * @api private
 */

Polling.prototype.pause = function (onPause) {
  var self = this;

  this.readyState = 'pausing';

  function pause () {
    debug('paused');
    self.readyState = 'paused';
    onPause();
  }

  if (this.polling || !this.writable) {
    var total = 0;

    if (this.polling) {
      debug('we are currently polling - waiting to pause');
      total++;
      this.once('pollComplete', function () {
        debug('pre-pause polling complete');
        --total || pause();
      });
    }

    if (!this.writable) {
      debug('we are currently writing - waiting to pause');
      total++;
      this.once('drain', function () {
        debug('pre-pause writing complete');
        --total || pause();
      });
    }
  } else {
    pause();
  }
};

/**
 * Starts polling cycle.
 *
 * @api public
 */

Polling.prototype.poll = function () {
  debug('polling');
  this.polling = true;
  this.doPoll();
  this.emit('poll');
};

/**
 * Overloads onData to detect payloads.
 *
 * @api private
 */

Polling.prototype.onData = function (data) {
  var self = this;
  debug('polling got data %s', data);
  var callback = function (packet, index, total) {
    // if its the first message we consider the transport open
    if ('opening' === self.readyState) {
      self.onOpen();
    }

    // if its a close packet, we close the ongoing requests
    if ('close' === packet.type) {
      self.onClose();
      return false;
    }

    // otherwise bypass onData and handle the message
    self.onPacket(packet);
  };

  // decode payload
  parser.decodePayload(data, this.socket.binaryType, callback);

  // if an event did not trigger closing
  if ('closed' !== this.readyState) {
    // if we got data we're not polling
    this.polling = false;
    this.emit('pollComplete');

    if ('open' === this.readyState) {
      this.poll();
    } else {
      debug('ignoring poll - transport state "%s"', this.readyState);
    }
  }
};

/**
 * For polling, send a close packet.
 *
 * @api private
 */

Polling.prototype.doClose = function () {
  var self = this;

  function close () {
    debug('writing close packet');
    self.write([{ type: 'close' }]);
  }

  if ('open' === this.readyState) {
    debug('transport open - closing');
    close();
  } else {
    // in case we're trying to close while
    // handshaking is in progress (GH-164)
    debug('transport not open - deferring close');
    this.once('open', close);
  }
};

/**
 * Writes a packets payload.
 *
 * @param {Array} data packets
 * @param {Function} drain callback
 * @api private
 */

Polling.prototype.write = function (packets) {
  var self = this;
  this.writable = false;
  var callbackfn = function () {
    self.writable = true;
    self.emit('drain');
  };

  parser.encodePayload(packets, this.supportsBinary, function (data) {
    self.doWrite(data, callbackfn);
  });
};

/**
 * Generates uri for connection.
 *
 * @api private
 */

Polling.prototype.uri = function () {
  var query = this.query || {};
  var schema = this.secure ? 'https' : 'http';
  var port = '';

  // cache busting is forced
  if (false !== this.timestampRequests) {
    query[this.timestampParam] = yeast();
  }

  if (!this.supportsBinary && !query.sid) {
    query.b64 = 1;
  }

  query = parseqs.encode(query);

  // avoid port if default for schema
  if (this.port && (('https' === schema && Number(this.port) !== 443) ||
     ('http' === schema && Number(this.port) !== 80))) {
    port = ':' + this.port;
  }

  // prepend ? to query
  if (query.length) {
    query = '?' + query;
  }

  var ipv6 = this.hostname.indexOf(':') !== -1;
  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split('')
  , length = 64
  , map = {}
  , seed = 0
  , i = 0
  , prev;

/**
 * Return a string representing the specified number.
 *
 * @param {Number} num The number to convert.
 * @returns {String} The string representation of the number.
 * @api public
 */
function encode(num) {
  var encoded = '';

  do {
    encoded = alphabet[num % length] + encoded;
    num = Math.floor(num / length);
  } while (num > 0);

  return encoded;
}

/**
 * Return the integer value specified by the given string.
 *
 * @param {String} str The string to convert.
 * @returns {Number} The integer value represented by the string.
 * @api public
 */
function decode(str) {
  var decoded = 0;

  for (i = 0; i < str.length; i++) {
    decoded = decoded * length + map[str.charAt(i)];
  }

  return decoded;
}

/**
 * Yeast: A tiny growing id generator.
 *
 * @returns {String} A unique id.
 * @api public
 */
function yeast() {
  var now = encode(+new Date());

  if (now !== prev) return seed = 0, prev = now;
  return now +'.'+ encode(seed++);
}

//
// Map each character to its index.
//
for (; i < length; i++) map[alphabet[i]] = i;

//
// Expose the `yeast`, `encode` and `decode` functions.
//
yeast.encode = encode;
yeast.decode = decode;
module.exports = yeast;


/***/ }),
/* 54 */
/***/ (function(module, exports) {


var indexOf = [].indexOf;

module.exports = function(arr, obj){
  if (indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Module dependencies.
 */

var parser = __webpack_require__(26);
var Emitter = __webpack_require__(10);
var toArray = __webpack_require__(133);
var on = __webpack_require__(56);
var bind = __webpack_require__(57);
var debug = __webpack_require__(13)('socket.io-client:socket');
var parseqs = __webpack_require__(18);

/**
 * Module exports.
 */

module.exports = exports = Socket;

/**
 * Internal events (blacklisted).
 * These events can't be emitted by the user.
 *
 * @api private
 */

var events = {
  connect: 1,
  connect_error: 1,
  connect_timeout: 1,
  connecting: 1,
  disconnect: 1,
  error: 1,
  reconnect: 1,
  reconnect_attempt: 1,
  reconnect_failed: 1,
  reconnect_error: 1,
  reconnecting: 1,
  ping: 1,
  pong: 1
};

/**
 * Shortcut to `Emitter#emit`.
 */

var emit = Emitter.prototype.emit;

/**
 * `Socket` constructor.
 *
 * @api public
 */

function Socket (io, nsp, opts) {
  this.io = io;
  this.nsp = nsp;
  this.json = this; // compat
  this.ids = 0;
  this.acks = {};
  this.receiveBuffer = [];
  this.sendBuffer = [];
  this.connected = false;
  this.disconnected = true;
  if (opts && opts.query) {
    this.query = opts.query;
  }
  if (this.io.autoConnect) this.open();
}

/**
 * Mix in `Emitter`.
 */

Emitter(Socket.prototype);

/**
 * Subscribe to open, close and packet events
 *
 * @api private
 */

Socket.prototype.subEvents = function () {
  if (this.subs) return;

  var io = this.io;
  this.subs = [
    on(io, 'open', bind(this, 'onopen')),
    on(io, 'packet', bind(this, 'onpacket')),
    on(io, 'close', bind(this, 'onclose'))
  ];
};

/**
 * "Opens" the socket.
 *
 * @api public
 */

Socket.prototype.open =
Socket.prototype.connect = function () {
  if (this.connected) return this;

  this.subEvents();
  this.io.open(); // ensure open
  if ('open' === this.io.readyState) this.onopen();
  this.emit('connecting');
  return this;
};

/**
 * Sends a `message` event.
 *
 * @return {Socket} self
 * @api public
 */

Socket.prototype.send = function () {
  var args = toArray(arguments);
  args.unshift('message');
  this.emit.apply(this, args);
  return this;
};

/**
 * Override `emit`.
 * If the event is in `events`, it's emitted normally.
 *
 * @param {String} event name
 * @return {Socket} self
 * @api public
 */

Socket.prototype.emit = function (ev) {
  if (events.hasOwnProperty(ev)) {
    emit.apply(this, arguments);
    return this;
  }

  var args = toArray(arguments);
  var packet = { type: parser.EVENT, data: args };

  packet.options = {};
  packet.options.compress = !this.flags || false !== this.flags.compress;

  // event ack callback
  if ('function' === typeof args[args.length - 1]) {
    debug('emitting packet with ack id %d', this.ids);
    this.acks[this.ids] = args.pop();
    packet.id = this.ids++;
  }

  if (this.connected) {
    this.packet(packet);
  } else {
    this.sendBuffer.push(packet);
  }

  delete this.flags;

  return this;
};

/**
 * Sends a packet.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.packet = function (packet) {
  packet.nsp = this.nsp;
  this.io.packet(packet);
};

/**
 * Called upon engine `open`.
 *
 * @api private
 */

Socket.prototype.onopen = function () {
  debug('transport is open - connecting');

  // write connect packet if necessary
  if ('/' !== this.nsp) {
    if (this.query) {
      var query = typeof this.query === 'object' ? parseqs.encode(this.query) : this.query;
      debug('sending connect packet with query %s', query);
      this.packet({type: parser.CONNECT, query: query});
    } else {
      this.packet({type: parser.CONNECT});
    }
  }
};

/**
 * Called upon engine `close`.
 *
 * @param {String} reason
 * @api private
 */

Socket.prototype.onclose = function (reason) {
  debug('close (%s)', reason);
  this.connected = false;
  this.disconnected = true;
  delete this.id;
  this.emit('disconnect', reason);
};

/**
 * Called with socket packet.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onpacket = function (packet) {
  if (packet.nsp !== this.nsp) return;

  switch (packet.type) {
    case parser.CONNECT:
      this.onconnect();
      break;

    case parser.EVENT:
      this.onevent(packet);
      break;

    case parser.BINARY_EVENT:
      this.onevent(packet);
      break;

    case parser.ACK:
      this.onack(packet);
      break;

    case parser.BINARY_ACK:
      this.onack(packet);
      break;

    case parser.DISCONNECT:
      this.ondisconnect();
      break;

    case parser.ERROR:
      this.emit('error', packet.data);
      break;
  }
};

/**
 * Called upon a server event.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onevent = function (packet) {
  var args = packet.data || [];
  debug('emitting event %j', args);

  if (null != packet.id) {
    debug('attaching ack callback to event');
    args.push(this.ack(packet.id));
  }

  if (this.connected) {
    emit.apply(this, args);
  } else {
    this.receiveBuffer.push(args);
  }
};

/**
 * Produces an ack callback to emit with an event.
 *
 * @api private
 */

Socket.prototype.ack = function (id) {
  var self = this;
  var sent = false;
  return function () {
    // prevent double callbacks
    if (sent) return;
    sent = true;
    var args = toArray(arguments);
    debug('sending ack %j', args);

    self.packet({
      type: parser.ACK,
      id: id,
      data: args
    });
  };
};

/**
 * Called upon a server acknowlegement.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onack = function (packet) {
  var ack = this.acks[packet.id];
  if ('function' === typeof ack) {
    debug('calling ack %s with %j', packet.id, packet.data);
    ack.apply(this, packet.data);
    delete this.acks[packet.id];
  } else {
    debug('bad ack %s', packet.id);
  }
};

/**
 * Called upon server connect.
 *
 * @api private
 */

Socket.prototype.onconnect = function () {
  this.connected = true;
  this.disconnected = false;
  this.emit('connect');
  this.emitBuffered();
};

/**
 * Emit buffered events (received and emitted).
 *
 * @api private
 */

Socket.prototype.emitBuffered = function () {
  var i;
  for (i = 0; i < this.receiveBuffer.length; i++) {
    emit.apply(this, this.receiveBuffer[i]);
  }
  this.receiveBuffer = [];

  for (i = 0; i < this.sendBuffer.length; i++) {
    this.packet(this.sendBuffer[i]);
  }
  this.sendBuffer = [];
};

/**
 * Called upon server disconnect.
 *
 * @api private
 */

Socket.prototype.ondisconnect = function () {
  debug('server disconnect (%s)', this.nsp);
  this.destroy();
  this.onclose('io server disconnect');
};

/**
 * Called upon forced client/server side disconnections,
 * this method ensures the manager stops tracking us and
 * that reconnections don't get triggered for this.
 *
 * @api private.
 */

Socket.prototype.destroy = function () {
  if (this.subs) {
    // clean subscriptions to avoid reconnections
    for (var i = 0; i < this.subs.length; i++) {
      this.subs[i].destroy();
    }
    this.subs = null;
  }

  this.io.destroy(this);
};

/**
 * Disconnects the socket manually.
 *
 * @return {Socket} self
 * @api public
 */

Socket.prototype.close =
Socket.prototype.disconnect = function () {
  if (this.connected) {
    debug('performing disconnect (%s)', this.nsp);
    this.packet({ type: parser.DISCONNECT });
  }

  // remove socket from pool
  this.destroy();

  if (this.connected) {
    // fire events
    this.onclose('io client disconnect');
  }
  return this;
};

/**
 * Sets the compress flag.
 *
 * @param {Boolean} if `true`, compresses the sending data
 * @return {Socket} self
 * @api public
 */

Socket.prototype.compress = function (compress) {
  this.flags = this.flags || {};
  this.flags.compress = compress;
  return this;
};


/***/ }),
/* 56 */
/***/ (function(module, exports) {


/**
 * Module exports.
 */

module.exports = on;

/**
 * Helper for subscriptions.
 *
 * @param {Object|EventEmitter} obj with `Emitter` mixin or `EventEmitter`
 * @param {String} event name
 * @param {Function} callback
 * @api public
 */

function on (obj, ev, fn) {
  obj.on(ev, fn);
  return {
    destroy: function () {
      obj.removeListener(ev, fn);
    }
  };
}


/***/ }),
/* 57 */
/***/ (function(module, exports) {

/**
 * Slice reference.
 */

var slice = [].slice;

/**
 * Bind `obj` to `fn`.
 *
 * @param {Object} obj
 * @param {Function|String} fn or string
 * @return {Function}
 * @api public
 */

module.exports = function(obj, fn){
  if ('string' == typeof fn) fn = obj[fn];
  if ('function' != typeof fn) throw new Error('bind() requires a function');
  var args = slice.call(arguments, 2);
  return function(){
    return fn.apply(obj, args.concat(slice.call(arguments)));
  }
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Bullet = /** @class */ (function (_super) {
    __extends(Bullet, _super);
    function Bullet(game, xCoord, yCoord) {
        var _this = _super.call(this, game, 0, 0) || this;
        _this.game = game;
        _this.xCoordinate = xCoord;
        _this.yCoordinate = yCoord;
        _this.explosions = _this.game.add.group();
        _this.makeExposition();
        _this.create();
        return _this;
    }
    Bullet.prototype.create = function () { };
    ;
    Object.defineProperty(Bullet.prototype, "currentPosition", {
        get: function () {
            return {
                xCoordinate: this.bullet.x,
                yCoordinate: this.bullet.y,
            };
        },
        set: function (coordinate) {
            this.bullet.x = coordinate.xCoordinate;
            this.bullet.y = coordinate.yCoordinate;
        },
        enumerable: true,
        configurable: true
    });
    Bullet.prototype.makeExposition = function () {
        for (var i = 0; i < 10; i++) {
            var explosionAnimation = this.explosions.create(0, 0, 'kaboom', 0, false);
            explosionAnimation.anchor.setTo(0.5, 0.5);
            explosionAnimation.animations.add('kaboom');
        }
    };
    Bullet.prototype.bulletHitBox = function (bullet, box) {
        bullet.kill();
        var explosionAnimation = this.explosions.getFirstExists(false);
        explosionAnimation.reset(box.x, box.y);
        explosionAnimation.play('kaboom', 30, false, true);
        // box.kill();
    };
    return Bullet;
}(Phaser.Sprite));
exports.default = Bullet;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Constants = {
    logo_scale: 0.5,
    max_velocity: 400,
    health: 100,
    anchor: 0.5,
    button_scale: 0.2,
    shadow_time: 1000,
    visible_time: 2000

};

exports.default = Constants;

/***/ }),
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _UserService = __webpack_require__(14);

var _UserService2 = _interopRequireDefault(_UserService);

var _CreatePage = __webpack_require__(68);

var _CreatePage2 = _interopRequireDefault(_CreatePage);

var _Router = __webpack_require__(93);

var _Router2 = _interopRequireDefault(_Router);

var _MenuStartController = __webpack_require__(95);

var _MenuStartController2 = _interopRequireDefault(_MenuStartController);

var _PlayGameController = __webpack_require__(96);

var _PlayGameController2 = _interopRequireDefault(_PlayGameController);

var _SignInController = __webpack_require__(147);

var _SignInController2 = _interopRequireDefault(_SignInController);

var _SignUpController = __webpack_require__(148);

var _SignUpController2 = _interopRequireDefault(_SignUpController);

var _ScoreListController = __webpack_require__(149);

var _ScoreListController2 = _interopRequireDefault(_ScoreListController);

var _AboutUsController = __webpack_require__(150);

var _AboutUsController2 = _interopRequireDefault(_AboutUsController);

var _SettingsController = __webpack_require__(151);

var _SettingsController2 = _interopRequireDefault(_SettingsController);

var _style = __webpack_require__(6);

var _style2 = _interopRequireDefault(_style);

var _index = __webpack_require__(34);

var _index2 = _interopRequireDefault(_index);

var _ServiceWorker = __webpack_require__(152);

var _ServiceWorker2 = _interopRequireDefault(_ServiceWorker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var theme = new _style2.default();
var userService = new _UserService2.default();
var page = new _CreatePage2.default();

(0, _ServiceWorker2.default)();

theme.changeTheme();

new _Router2.default().addRoute('/', _MenuStartController2.default, { userService: userService, page: page }).addRoute('/play', _PlayGameController2.default, { userService: userService, page: page }).addRoute('/signin', _SignInController2.default, { userService: userService, page: page }).addRoute('/signup', _SignUpController2.default, { userService: userService, page: page }).addRoute('/score', _ScoreListController2.default, { userService: userService, page: page }).addRoute('/about', _AboutUsController2.default, { userService: userService, page: page }).addRoute('/settings', _SettingsController2.default, { userService: userService, page: page }).startRoute();

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BlockComponents = __webpack_require__(2);

var _BlockComponents2 = _interopRequireDefault(_BlockComponents);

var _SignIn = __webpack_require__(69);

var _SignIn2 = _interopRequireDefault(_SignIn);

var _SignUp = __webpack_require__(73);

var _SignUp2 = _interopRequireDefault(_SignUp);

var _Header = __webpack_require__(75);

var _Header2 = _interopRequireDefault(_Header);

var _UnRegMenu = __webpack_require__(78);

var _UnRegMenu2 = _interopRequireDefault(_UnRegMenu);

var _RegMenu = __webpack_require__(80);

var _RegMenu2 = _interopRequireDefault(_RegMenu);

var _AboutUs = __webpack_require__(81);

var _AboutUs2 = _interopRequireDefault(_AboutUs);

var _Scoreboard = __webpack_require__(84);

var _Scoreboard2 = _interopRequireDefault(_Scoreboard);

var _Footer = __webpack_require__(87);

var _Footer2 = _interopRequireDefault(_Footer);

var _Settings = __webpack_require__(90);

var _Settings2 = _interopRequireDefault(_Settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CreatePage = function () {
    function CreatePage() {
        _classCallCheck(this, CreatePage);

        this.body = document.getElementsByTagName('body')[0];
        this.parts = new Map();

        this.addParts("Header", (0, _Header2.default)());
        this.addParts("SignIn", (0, _SignIn2.default)());
        this.addParts("SignUp", (0, _SignUp2.default)());
        this.addParts("UnRegMenu", (0, _UnRegMenu2.default)());
        this.addParts("RegMenu", (0, _RegMenu2.default)());
        this.addParts("Settings", (0, _Settings2.default)());
        this.addParts("AboutUs", (0, _AboutUs2.default)());
        this.addParts("Scoreboard", (0, _Scoreboard2.default)());
        this.addParts("Footer", (0, _Footer2.default)());
    }

    _createClass(CreatePage, [{
        key: 'addParts',
        value: function addParts(name, elem) {
            var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.body;

            this.parts.delete(name);
            this.parts.set(name, elem);
            elem.hide();
            parent.appendChild(elem.getClassElement());
        }
    }, {
        key: 'getParts',
        value: function getParts() {
            return this.parts;
        }
    }]);

    return CreatePage;
}();

exports.default = CreatePage;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = SignIn;

var _SignInForm = __webpack_require__(70);

var _SignInForm2 = _interopRequireDefault(_SignInForm);

var _ValidSignInForm = __webpack_require__(30);

var _ValidSignInForm2 = _interopRequireDefault(_ValidSignInForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = {
    title: 'SIGN IN',
    classForm: 'form__login',
    fields: [{
        attrs: {
            type: 'text',
            name: 'email',
            placeholder: 'Enter email'
        }
    }, {
        attrs: {
            type: 'password',
            name: 'password',
            placeholder: 'Enter password'
        }
    }],
    buttons: [{
        attrs: {
            type: 'submit',
            class: 'form__submit',
            value: 'SIGN IN',
            id: 'signIn-button-signIn'
        }
    }]
};

/**
 * Получаем страницу входа
 */
function SignIn() {
    return new _SignInForm2.default('section', { id: 'section-signIn' }, [], data, _ValidSignInForm2.default);
}

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Form2 = __webpack_require__(16);

var _Form3 = _interopRequireDefault(_Form2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignInForm = function (_Form) {
    _inherits(SignInForm, _Form);

    /**
     * @param {string} [tagName='div'] - tagName блока
     * @param {*} [attrs={}] - объект с атрибутами блока
     * @param {string[]} [classes=[]] - список имён классов
     * @param {*} [data={}] - объект с данными блока
     * @param {class} ValidSignInForm - кдасс валидации данных
     * @constructor
     */
    function SignInForm() {
        var tagName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';
        var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var classes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        var data = arguments[3];
        var ValidSignInForm = arguments[4];

        _classCallCheck(this, SignInForm);

        var _this = _possibleConstructorReturn(this, (SignInForm.__proto__ || Object.getPrototypeOf(SignInForm)).call(this, tagName, attrs, classes, data));

        _this.validator = ValidSignInForm;
        return _this;
    }

    /**
     * Позволяет подписаться на событие формы входа
     * @return {object}
     */


    _createClass(SignInForm, [{
        key: 'onSubmitSignInForm',
        value: function onSubmitSignInForm(callback) {
            var _this2 = this;

            var signInForm = document.getElementsByClassName('form__login')[0];

            signInForm.addEventListener('submit', function (e) {
                e.preventDefault();

                var formdata = {};
                var elements = signInForm.elements;

                // debugger;
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var name = _step.value;

                        formdata[name.name] = name.value;
                        console.log(name.value);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                var isValid = new _this2.validator(formdata.email, formdata.password);

                if (isValid.validForm()) {
                    callback(formdata);
                }
            });
        }
    }]);

    return SignInForm;
}(_Form3.default);

exports.default = SignInForm;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(3);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (data) {var pug_indent = [];
pug_html = pug_html + "\n\u003Cdiv class=\"form\"\u003E\n  \u003Ch1 align=\"middle\"\u003E" + (pug.escape(null == (pug_interp = data.title) ? "" : pug_interp)) + "\u003C\u002Fh1\u003E\n  \u003Cform" + (pug.attr("class", pug.classes([data.classForm], [true]), false, true)) + "\u003E";
// iterate data.fields
;(function(){
  var $$obj = data.fields;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var field = $$obj[pug_index0];
pug_html = pug_html + "\n    \u003Cinput" + (" class=\"form__input\""+pug.attr("type", field.attrs.type, true, true)+pug.attr("placeholder", field.attrs.placeholder, true, true)+pug.attr("name", field.attrs.name, true, true)) + "\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var field = $$obj[pug_index0];
pug_html = pug_html + "\n    \u003Cinput" + (" class=\"form__input\""+pug.attr("type", field.attrs.type, true, true)+pug.attr("placeholder", field.attrs.placeholder, true, true)+pug.attr("name", field.attrs.name, true, true)) + "\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\n    \u003Cinput" + (pug.attr("class", pug.classes(["form__input",data.buttons[0].attrs.class], [false,true]), false, true)+pug.attr("type", data.buttons[0].attrs.type, true, true)+pug.attr("value", data.buttons[0].attrs.value, true, true)+pug.attr("id", data.buttons[0].attrs.id, true, true)) + "\u003E\n  \u003C\u002Fform\u003E\n\u003C\u002Fdiv\u003E";}.call(this,"data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined));;return pug_html;};
module.exports = template;

/***/ }),
/* 72 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = SignUp;

var _SignUpForm = __webpack_require__(74);

var _SignUpForm2 = _interopRequireDefault(_SignUpForm);

var _ValidSignUpForm = __webpack_require__(31);

var _ValidSignUpForm2 = _interopRequireDefault(_ValidSignUpForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = {
    title: 'SIGN UP',
    classForm: 'form__signup',
    fields: [{
        attrs: {
            type: 'text',
            name: 'username',
            placeholder: 'Enter username'
        }
    }, {
        attrs: {
            type: 'text',
            name: 'email',
            placeholder: 'Enter email'
        }
    }, {
        attrs: {
            type: 'password',
            name: 'password',
            placeholder: 'Enter password'
        }
    }, {
        attrs: {
            type: 'password',
            name: 'repeatPassword',
            placeholder: 'Repeat password'
        }
    }],
    buttons: [{
        attrs: {
            type: 'submit',
            class: 'form__submit',
            value: 'SIGN UP',
            id: 'signUp-button-signUp'
        }
    }]
};

/**
 * Получаем страницу регистрации
 */
function SignUp() {
    return new _SignUpForm2.default('section', { id: 'section-signUp' }, [], data, _ValidSignUpForm2.default);
}

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Form2 = __webpack_require__(16);

var _Form3 = _interopRequireDefault(_Form2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignUpForm = function (_Form) {
    _inherits(SignUpForm, _Form);

    /**
     * @param {string} [tagName='div'] - tagName блока
     * @param {*} [attrs={}] - объект с атрибутами блока
     * @param {string[]} [classes=[]] - список имён классов
     * @param {*} [data={}] - объект с данными блока
     * @param {class} ValidSignInForm - кдасс валидации данных
     * @constructor
     */
    function SignUpForm() {
        var tagName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';
        var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var classes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        var data = arguments[3];
        var ValidSignInForm = arguments[4];

        _classCallCheck(this, SignUpForm);

        var _this = _possibleConstructorReturn(this, (SignUpForm.__proto__ || Object.getPrototypeOf(SignUpForm)).call(this, tagName, attrs, classes, data));

        _this.validator = ValidSignInForm;
        return _this;
    }

    /**
     * Позволяет подписаться на событие формы регистрации
     * @return {Promise}
     */


    _createClass(SignUpForm, [{
        key: 'onSubmitSignUpForm',
        value: function onSubmitSignUpForm(callback) {
            var _this2 = this;

            var signUpForm = document.getElementsByClassName('form__signup')[0];

            signUpForm.addEventListener('submit', function (e) {
                e.preventDefault();

                var formdata = {};
                var elements = signUpForm.elements;

                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var name = _step.value;

                        formdata[name.name] = name.value;
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                var isValid = new _this2.validator(formdata.username, formdata.email, formdata.password, formdata.repeatPassword);

                if (isValid.validForm()) {
                    callback(formdata);
                }
            });
        }
    }]);

    return SignUpForm;
}(_Form3.default);

exports.default = SignUpForm;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createHeader;

var _Header = __webpack_require__(76);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = {
    nameGame: 'TANKS'
};

/**
 * Получаем страницу header
 */
function createHeader() {
    return new _Header2.default('section', { id: 'section-header' }, [], data);
}

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BlockComponents = __webpack_require__(2);

var _BlockComponents2 = _interopRequireDefault(_BlockComponents);

var _Header = __webpack_require__(77);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Класс Header-а
 * @module Header
 */
var Header = function (_Block) {
  _inherits(Header, _Block);

  /**
   * @param {string} [tagName='div'] - tagName блока
   * @param {*} [attrs={}] - объект с атрибутами блока
   * @param {string[]} [classes=[]] - список имён классов
   * @param {*} [data={}] - объект с данными блока
   * @constructor
   */
  function Header() {
    var tagName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';
    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var classes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var data = arguments[3];

    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, tagName, attrs, classes, data));
  }

  /**
   * Получить Header
   */


  _createClass(Header, [{
    key: 'getClassElement',
    value: function getClassElement() {

      var data = this.getData();

      this.setHTML((0, _Header2.default)({ data: data }));
      return this.getElement();
    }
  }]);

  return Header;
}(_BlockComponents2.default);

exports.default = Header;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(3);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (data) {var pug_indent = [];
pug_html = pug_html + "\n\u003Cdiv class=\"theme\"\u003Echange theme\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"header\"\u003E\n  \u003Cp class=\"header__text\"\u003E" + (pug.escape(null == (pug_interp = data.nameGame) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Cimg class=\"header__logo\" src=\"\u002Fimg\u002Flogo.png\"\u003E\n\u003C\u002Fdiv\u003E";}.call(this,"data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined));;return pug_html;};
module.exports = template;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createUnRegMenu;

var _Menu = __webpack_require__(32);

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = {
    user: undefined,
    buttons: [{
        text: 'START',
        id: 'menu-button-playOfflineGame',
        class: 'menu__button'
    }, {
        text: 'SIGN IN',
        id: 'menu-button-signIn',
        class: 'menu__button'
    }, {
        text: 'SIGN UP',
        id: 'menu-button-signUp',
        class: 'menu__button'
    }]
};

/**
 * Получаем страницу незарегистрированного пользователя
 */
function createUnRegMenu() {
    return new _Menu2.default('section', { id: 'section-unRegMenu' }, [], data);
}

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(3);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (data) {var pug_indent = [];
pug_html = pug_html + "\n\u003Cdiv class=\"menu\"\u003E";
if (data.user) {
pug_html = pug_html + "\n  \u003Cdiv class=\"menu__player\"\u003E" + (pug.escape(null == (pug_interp = 'Hi, '+data.user) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
}
// iterate data.buttons
;(function(){
  var $$obj = data.buttons;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var butt = $$obj[pug_index0];
pug_html = pug_html + "\n  \u003Cbutton" + (pug.attr("class", pug.classes([butt.class], [true]), false, true)+pug.attr("id", butt.id, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = butt.text) ? "" : pug_interp)) + "\u003C\u002Fbutton\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var butt = $$obj[pug_index0];
pug_html = pug_html + "\n  \u003Cbutton" + (pug.attr("class", pug.classes([butt.class], [true]), false, true)+pug.attr("id", butt.id, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = butt.text) ? "" : pug_interp)) + "\u003C\u002Fbutton\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\n\u003C\u002Fdiv\u003E";}.call(this,"data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined));;return pug_html;};
module.exports = template;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createRegMenu;

var _Menu = __webpack_require__(32);

var _Menu2 = _interopRequireDefault(_Menu);

var _UserService = __webpack_require__(14);

var _UserService2 = _interopRequireDefault(_UserService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Получаем страницу зарегестрированного пользователя
 */
function createRegMenu() {
    var data = {
        user: 'name',
        buttons: [{
            text: 'START',
            id: 'menu-button-playGame',
            class: 'menu__button'
        }, {
            text: 'LOG OUT',
            id: 'menu-button-logout',
            class: 'menu__button'
        }]
    };

    return new _Menu2.default('section', { id: 'section-regMenu' }, [], data);
}

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createAboutUs;

var _Table = __webpack_require__(82);

var _Table2 = _interopRequireDefault(_Table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = {
    idButton: 'aboutUs-button-back',
    classTable: 'about_table',
    title: 'DEVELOPERS',
    users: [{
        name: 'GRIGOREV PAVEL',
        position: 'FRONTEND'

    }, {
        name: 'SAMOKHIN MAXIM',
        position: 'FRONTEND'

    }, {
        name: 'ZUBAREV ANTON',
        position: 'BACKEND'

    }, {
        name: 'PITIK DIMA',
        position: 'BACKEND'

    }, {
        name: 'ALEXANDER TSVETKOV',
        position: 'MENTOR'

    }]
};

/**
 * Получаем страницу о нас
 */
function createAboutUs() {
    return new _Table2.default('section', { id: 'section-aboutUs' }, [], data);
}

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BlockComponents = __webpack_require__(2);

var _BlockComponents2 = _interopRequireDefault(_BlockComponents);

var _Table = __webpack_require__(83);

var _Table2 = _interopRequireDefault(_Table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import './Table.scss';

/**
 * Класс Table
 * @module Table
 */
var Table = function (_Block) {
  _inherits(Table, _Block);

  /**
   * @param {string} [tagName='div'] - tagName блока
   * @param {*} [attrs={}] - объект с атрибутами блока
   * @param {string[]} [classes=[]] - список имён классов
   * @param {*} [data={}] - объект с данными блока
   * @constructor
   */
  function Table() {
    var tagName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';
    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var classes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var data = arguments[3];

    _classCallCheck(this, Table);

    return _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, tagName, attrs, classes, data));
  }

  /**
   * Получить Table
   */


  _createClass(Table, [{
    key: 'getClassElement',
    value: function getClassElement() {
      var data = this.getData();

      this.setHTML((0, _Table2.default)({ data: data }));
      return this.getElement();
    }
  }]);

  return Table;
}(_BlockComponents2.default);

exports.default = Table;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(3);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (data) {var pug_indent = [];
pug_html = pug_html + "\n\u003Cdiv class=\"table\"\u003E\n  \u003Cdiv class=\"table__title\"\u003E" + (pug.escape(null == (pug_interp = data.title) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"table__content\"\u003E\n    \u003Ctable" + (pug.attr("class", pug.classes(["table__tag",data.classTable], [false,true]), false, true)) + "\u003E";
// iterate data.users
;(function(){
  var $$obj = data.users;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var user = $$obj[pug_index0];
pug_html = pug_html + "\n      \u003Ctr class=\"table__tr\"\u003E\n        \u003Ctd class=\"table__td\"\u003E" + (pug.escape(null == (pug_interp = user.name) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\n        \u003Ctd class=\"table__td\"\u003E" + (pug.escape(null == (pug_interp = user.position) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\n      \u003C\u002Ftr\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var user = $$obj[pug_index0];
pug_html = pug_html + "\n      \u003Ctr class=\"table__tr\"\u003E\n        \u003Ctd class=\"table__td\"\u003E" + (pug.escape(null == (pug_interp = user.name) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\n        \u003Ctd class=\"table__td\"\u003E" + (pug.escape(null == (pug_interp = user.position) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\n      \u003C\u002Ftr\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\n    \u003C\u002Ftable\u003E\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"table__back\"\u003E\n    \u003Cbutton" + (" class=\"table__button\""+pug.attr("id", data.idButton, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = 'BACK') ? "" : pug_interp)) + "\u003C\u002Fbutton\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E";}.call(this,"data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined));;return pug_html;};
module.exports = template;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Scoreboard;

var _Table = __webpack_require__(85);

var _Table2 = _interopRequireDefault(_Table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = {
    idButton: 'score-button-back',
    classTable: 'score_table',
    title: 'SCOREBOARD',
    users: [{
        name: 'Name',
        position: 'Rating'

    }, {
        name: 'Peter',
        position: '100'

    }, {
        name: 'Lois',
        position: '150'

    }, {
        name: 'Joe',
        position: '300'

    }, {
        name: 'Cleveland',
        position: '250'
    }],
    userScore: 0
};

/**
 * Получаем страницу счета
 */
function Scoreboard() {
    return new _Table2.default('section', { id: 'section-scoreList' }, [], data);
}

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BlockComponents = __webpack_require__(2);

var _BlockComponents2 = _interopRequireDefault(_BlockComponents);

var _Table = __webpack_require__(86);

var _Table2 = _interopRequireDefault(_Table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Класс Table
 * @module Table
 */
var Table = function (_Block) {
  _inherits(Table, _Block);

  /**
   * @param {string} [tagName='div'] - tagName блока
   * @param {*} [attrs={}] - объект с атрибутами блока
   * @param {string[]} [classes=[]] - список имён классов
   * @param {*} [data={}] - объект с данными блока
   * @constructor
   */
  function Table() {
    var tagName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';
    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var classes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var data = arguments[3];

    _classCallCheck(this, Table);

    return _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, tagName, attrs, classes, data));
  }

  /**
   * Получить Table
   */


  _createClass(Table, [{
    key: 'getClassElement',
    value: function getClassElement() {
      var data = this.getData();

      this.setHTML((0, _Table2.default)({ data: data }));
      return this.getElement();
    }
  }]);

  return Table;
}(_BlockComponents2.default);

exports.default = Table;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(3);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (data) {var pug_indent = [];
pug_html = pug_html + "\n\u003Cdiv class=\"table\"\u003E\n  \u003Cdiv class=\"table__title\"\u003E" + (pug.escape(null == (pug_interp = data.title) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
if ((data.userScore)) {
pug_html = pug_html + "\n  \u003Cdiv class=\"table__player\"\u003E" + (pug.escape(null == (pug_interp = 'Your score: ' + data.userScore) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\n  \u003Cdiv class=\"table__content\"\u003E\n    \u003Ctable" + (pug.attr("class", pug.classes(["table__tag",data.classTable], [false,true]), false, true)) + "\u003E\n      \u003Ctr class=\"table__tr\"\u003E\n        \u003Ctd class=\"table__td table__scoreboardHeader\"\u003E" + (pug.escape(null == (pug_interp = 'Position') ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\n        \u003Ctd class=\"table__td table__scoreboardHeader\"\u003E" + (pug.escape(null == (pug_interp = 'Username') ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\n        \u003Ctd class=\"table__td table__scoreboardHeader\"\u003E" + (pug.escape(null == (pug_interp = 'Kills') ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\n        \u003Ctd class=\"table__td table__scoreboardHeader\"\u003E" + (pug.escape(null == (pug_interp = 'Deaths') ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\n        \u003Ctd class=\"table__td table__scoreboardHeader\"\u003E" + (pug.escape(null == (pug_interp = 'Max Kills') ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\n      \u003C\u002Ftr\u003E";
// iterate data.users
;(function(){
  var $$obj = data.users;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var user = $$obj[pug_index0];
pug_html = pug_html + "\n      \u003Ctr class=\"table__tr\"\u003E";
if (user.isOwner) {
pug_html = pug_html + "\n        \u003Ctd class=\"table__td\"\u003E" + (pug.escape(null == (pug_interp = user.position) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\n        \u003Ctd class=\"table__td table__owner\"\u003E" + (pug.escape(null == (pug_interp = user.username) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\n        \u003Ctd class=\"table__td\"\u003E" + (pug.escape(null == (pug_interp = user.kills) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\n        \u003Ctd class=\"table__td\"\u003E" + (pug.escape(null == (pug_interp = user.deaths) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\n        \u003Ctd class=\"table__td\"\u003E" + (pug.escape(null == (pug_interp = user.maxKills) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
}
else {
pug_html = pug_html + "\n        \u003Ctd class=\"table__td\"\u003E" + (pug.escape(null == (pug_interp = user.position) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\n        \u003Ctd class=\"table__td\"\u003E" + (pug.escape(null == (pug_interp = user.username) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\n        \u003Ctd class=\"table__td\"\u003E" + (pug.escape(null == (pug_interp = user.kills) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\n        \u003Ctd class=\"table__td\"\u003E" + (pug.escape(null == (pug_interp = user.deaths) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\n        \u003Ctd class=\"table__td\"\u003E" + (pug.escape(null == (pug_interp = user.maxKills) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
}
pug_html = pug_html + "\n      \u003C\u002Ftr\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var user = $$obj[pug_index0];
pug_html = pug_html + "\n      \u003Ctr class=\"table__tr\"\u003E";
if (user.isOwner) {
pug_html = pug_html + "\n        \u003Ctd class=\"table__td\"\u003E" + (pug.escape(null == (pug_interp = user.position) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\n        \u003Ctd class=\"table__td table__owner\"\u003E" + (pug.escape(null == (pug_interp = user.username) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\n        \u003Ctd class=\"table__td\"\u003E" + (pug.escape(null == (pug_interp = user.kills) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\n        \u003Ctd class=\"table__td\"\u003E" + (pug.escape(null == (pug_interp = user.deaths) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\n        \u003Ctd class=\"table__td\"\u003E" + (pug.escape(null == (pug_interp = user.maxKills) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
}
else {
pug_html = pug_html + "\n        \u003Ctd class=\"table__td\"\u003E" + (pug.escape(null == (pug_interp = user.position) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\n        \u003Ctd class=\"table__td\"\u003E" + (pug.escape(null == (pug_interp = user.username) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\n        \u003Ctd class=\"table__td\"\u003E" + (pug.escape(null == (pug_interp = user.kills) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\n        \u003Ctd class=\"table__td\"\u003E" + (pug.escape(null == (pug_interp = user.deaths) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\n        \u003Ctd class=\"table__td\"\u003E" + (pug.escape(null == (pug_interp = user.maxKills) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
}
pug_html = pug_html + "\n      \u003C\u002Ftr\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\n    \u003C\u002Ftable\u003E\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"table__back\"\u003E\n    \u003Cbutton" + (" class=\"table__button\""+pug.attr("id", data.idButton, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = 'BACK') ? "" : pug_interp)) + "\u003C\u002Fbutton\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E";}.call(this,"data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined));;return pug_html;};
module.exports = template;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = CreateFooter;

var _Footer = __webpack_require__(88);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = {
    imgListData: [{
        class: "footer__sound",
        src: "./static/img/settings.png",
        id: "menu-button-music"
    }, {
        class: "footer__score",
        src: "./static/img/score.png",
        id: "menu-button-score"
    }, {
        class: "footer__info",
        src: "./static/img/info.png",
        id: "menu-button-about"
    }]
};

/**
 * Получаем страницу footer-а
 */
function CreateFooter() {
    return new _Footer2.default('section', { id: 'section-footer' }, [], data);
}

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BlockComponents = __webpack_require__(2);

var _BlockComponents2 = _interopRequireDefault(_BlockComponents);

var _Footer = __webpack_require__(89);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import './Footer.scss';

/**
 * Класс footer-а
 * @module Footer
 */
var Footer = function (_Block) {
  _inherits(Footer, _Block);

  /**
   * @param {string} [tagName='div'] - tagName блока
   * @param {*} [attrs={}] - объект с атрибутами блока
   * @param {string[]} [classes=[]] - список имён классов
   * @param {*} [data={}] - объект с данными блока
   * @constructor
   */
  function Footer() {
    var tagName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';
    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var classes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var data = arguments[3];

    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, tagName, attrs, classes, data));
  }

  /**
   * Получить footer
   */


  _createClass(Footer, [{
    key: 'getClassElement',
    value: function getClassElement() {
      var data = this.getData();
      this.setHTML((0, _Footer2.default)({ data: data }));
      return this.getElement();
    }
  }]);

  return Footer;
}(_BlockComponents2.default);

exports.default = Footer;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(3);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (data) {var pug_indent = [];
pug_html = pug_html + "\n\u003Cdiv class=\"footer\"\u003E";
// iterate data.imgListData
;(function(){
  var $$obj = data.imgListData;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var imgData = $$obj[pug_index0];
pug_html = pug_html + "\u003Ca class=\"footer__logo\" href=\"#\"\u003E\u003Cimg" + (pug.attr("class", pug.classes([imgData.class], [true]), false, true)+pug.attr("src", imgData.src, true, true)+pug.attr("id", imgData.id, true, true)) + "\u003E\u003C\u002Fa\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var imgData = $$obj[pug_index0];
pug_html = pug_html + "\u003Ca class=\"footer__logo\" href=\"#\"\u003E\u003Cimg" + (pug.attr("class", pug.classes([imgData.class], [true]), false, true)+pug.attr("src", imgData.src, true, true)+pug.attr("id", imgData.id, true, true)) + "\u003E\u003C\u002Fa\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\n\u003C\u002Fdiv\u003E";}.call(this,"data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined));;return pug_html;};
module.exports = template;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createSettings;

var _Table = __webpack_require__(91);

var _Table2 = _interopRequireDefault(_Table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = {
    idButton: 'settings-button-back',
    classTable: 'settings_table',
    title: 'SETTINGS'
};

/**
 * Получаем страницу о нас
 */
function createSettings() {
    return new _Table2.default('section', { id: 'section-settings' }, [], data);
}

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BlockComponents = __webpack_require__(2);

var _BlockComponents2 = _interopRequireDefault(_BlockComponents);

var _Table = __webpack_require__(92);

var _Table2 = _interopRequireDefault(_Table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Класс Table
 * @module Table
 */
var Table = function (_Block) {
  _inherits(Table, _Block);

  /**
   * @param {string} [tagName='div'] - tagName блока
   * @param {*} [attrs={}] - объект с атрибутами блока
   * @param {string[]} [classes=[]] - список имён классов
   * @param {*} [data={}] - объект с данными блока
   * @constructor
   */
  function Table() {
    var tagName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';
    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var classes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var data = arguments[3];

    _classCallCheck(this, Table);

    return _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, tagName, attrs, classes, data));
  }

  /**
   * Получить Table
   */


  _createClass(Table, [{
    key: 'getClassElement',
    value: function getClassElement() {
      var data = this.getData();

      this.setHTML((0, _Table2.default)({ data: data }));
      return this.getElement();
    }
  }]);

  return Table;
}(_BlockComponents2.default);

exports.default = Table;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(3);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (data) {var pug_indent = [];
pug_html = pug_html + "\n\u003Cdiv class=\"table\"\u003E\n  \u003Cdiv class=\"table__title\"\u003E" + (pug.escape(null == (pug_interp = data.title) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"table__content\"\u003E\n    \u003Ctable" + (pug.attr("class", pug.classes(["table__tag",data.classTable], [false,true]), false, true)) + "\u003E\n      \u003Ctr class=\"table__tr\"\u003E\n        \u003Ctd class=\"table__td\"\u003E" + (pug.escape(null == (pug_interp = 'MOUSE CONTROL') ? "" : pug_interp)) + "\n          \u003Clabel class=\"table__switch\"\u003E\n            \u003Cinput class=\"table__checkbox\" type=\"checkbox\"\u003E\u003Cspan class=\"table__slider\"\u003E\u003C\u002Fspan\u003E\n          \u003C\u002Flabel\u003E\n        \u003C\u002Ftd\u003E\n      \u003C\u002Ftr\u003E\n      \u003Ctr class=\"table__tr\"\u003E\n        \u003Ctd class=\"table__td\"\u003E\u003Cimg class=\"table__img_keyboard\" src=\"\u002Fimg\u002Fkeyboard.png\"\u003E\u003Cimg class=\"table__img_keyboard_with_mouse\" src=\"\u002Fimg\u002Fkeyboard_with_mouse.png\"\u003E\u003C\u002Ftd\u003E\n      \u003C\u002Ftr\u003E\n    \u003C\u002Ftable\u003E\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"table__back\"\u003E\n    \u003Cbutton" + (" class=\"table__button\""+pug.attr("id", data.idButton, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = 'BACK') ? "" : pug_interp)) + "\u003C\u002Fbutton\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E";}.call(this,"data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined));;return pug_html;};
module.exports = template;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Route = __webpack_require__(94);

var _Route2 = _interopRequireDefault(_Route);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Router = function () {
    function Router() {
        _classCallCheck(this, Router);

        if (Router.__instance) {
            // если роутер существует - вернуть его самого
            return Router.__instance;
        }

        this.routes = []; // сохраняет роутеры
        this.activeRoute = null;

        this.history = window.history;

        Router.__instance = this;
    }

    _createClass(Router, [{
        key: 'addRoute',
        value: function addRoute(pathname, view) {
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            var route = new _Route2.default(pathname, view, options);
            route.setRouter(this);
            this.routes.push(route);

            return this;
        }
    }, {
        key: 'startRoute',
        value: function startRoute() {
            // для записи с истории
            window.onpopstate = function (event) {
                var pathname = window.location.pathname;
                this.onroute(pathname);
            }.bind(this);

            var pathname = window.location.pathname;
            this.onroute(pathname);
        }
    }, {
        key: 'onroute',
        value: function onroute(pathname) {
            pathname = pathname.toString();
            var path = pathname !== '/' ? pathname[pathname.length - 1] === '/' ? pathname.slice(0, pathname.length - 1) : pathname : pathname;
            var route = this.routes.find(function (route) {
                return route.pathname.test(path);
            });

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
    }, {
        key: 'go',
        value: function go(pathname) {
            if (window.location.pathname === pathname) {
                return;
            }
            this.history.pushState({}, '', pathname);

            this.onroute(pathname);
        }
    }]);

    return Router;
}();

exports.default = Router;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Route = function () {
    function Route(pathname, controller) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        _classCallCheck(this, Route);

        this.pathname = new RegExp("\\" + pathname + "((\\?[a-z0-9\\-?\\[\\]=&;#]+)|$)");
        this.Controller = controller;
        this.options = options;
    }

    _createClass(Route, [{
        key: "navigate",
        value: function navigate() {
            if (!this._controller) {
                var controller = new this.Controller(this.options); // пр: создаём новый ScoreListController
                controller.init(this.options);
                controller.setRouterController(this.__router);
                this._controller = controller;
            }

            this._controller.show();
        }
    }, {
        key: "leave",
        value: function leave() {
            this._controller.hide();
        }
    }, {
        key: "setRouter",
        value: function setRouter(router) {
            this.__router = router;
        }
    }]);

    return Route;
}();

exports.default = Route;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Controller2 = __webpack_require__(4);

var _Controller3 = _interopRequireDefault(_Controller2);

var _ControllSettings = __webpack_require__(5);

var _ControllSettings2 = _interopRequireDefault(_ControllSettings);

var _style = __webpack_require__(6);

var _style2 = _interopRequireDefault(_style);

var _strategyControl = __webpack_require__(33);

var _strategyControl2 = _interopRequireDefault(_strategyControl);

var _Notify = __webpack_require__(12);

var _Notify2 = _interopRequireDefault(_Notify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuStartController = function (_Controller) {
	_inherits(MenuStartController, _Controller);

	function MenuStartController() {
		var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		_classCallCheck(this, MenuStartController);

		if (MenuStartController.__instance) {
			var _ret;

			return _ret = MenuStartController.__instance, _possibleConstructorReturn(_this, _ret);
		}

		var _this = _possibleConstructorReturn(this, (MenuStartController.__proto__ || Object.getPrototypeOf(MenuStartController)).call(this, opt));

		MenuStartController.__instance = _this;

		_this.notify = new _Notify2.default();
		_this.theme = new _style2.default();
		_this.flag = true;
		_this.controllSettings = new _ControllSettings2.default();
		_this._isGetProfile = false;
		console.log('[MenuStartController.constructor] mausecontroll = ' + _this.controllSettings.mouseControll);
		_this.addListener();
		return _this;
	}

	_createClass(MenuStartController, [{
		key: 'addListener',
		value: function addListener() {
			var _this2 = this;

			document.getElementById('menu-button-logout').addEventListener('click', function (event) {
				event.preventDefault();
				_this2.userService.logout().then(function (response) {
					console.log(response);
					_this2.userService.user.id = 0;
					_this2.page_parts.get("Scoreboard").data.userScore = 0;
					_this2.show();
					_this2.page_parts.get("RegMenu").hide();
					_this2._router.go('/');
				}).catch(function (e) {
					alert(e);
				});
			});

			document.getElementById('menu-button-playOfflineGame').addEventListener('click', function (event) {
				event.preventDefault();
				_strategyControl2.default.setOfflineStrategy();

				var widthUserDisplay = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
				if (widthUserDisplay < 414) {
					_this2.notify.notify('mobile version is not available');
				} else {
					_this2._router.go('/play');
				}
			});

			document.getElementById('menu-button-playGame').addEventListener('click', function (event) {
				event.preventDefault();
				_strategyControl2.default.setMultiStrategy();

				var widthUserDisplay = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
				if (widthUserDisplay < 414) {
					_this2.notify.notify('mobile version is not available');
				} else {
					_this2._router.go('/play');
				}
			});

			if (this.flag) {
				document.getElementsByClassName('theme')[0].addEventListener('click', function (event) {
					event.preventDefault();
					_this2.theme.changeTheme();
				});

				document.getElementById('menu-button-music').addEventListener('click', function (event) {
					event.preventDefault();

					_this2._router.go('/settings');
				});

				document.getElementById('menu-button-score').addEventListener('click', function (event) {
					event.preventDefault();
					_this2._router.go('/score');
				});

				document.getElementById('menu-button-about').addEventListener('click', function (event) {
					event.preventDefault();
					_this2._router.go('/about');
				});

				document.getElementById('menu-button-signIn').addEventListener('click', function (event) {
					event.preventDefault();
					_this2._router.go('/signin');
				});

				document.getElementById('menu-button-signUp').addEventListener('click', function (event) {
					event.preventDefault();
					_this2._router.go('/signup');
				});

				this.flag = false;
			}
		}
	}, {
		key: 'resume',
		value: function resume() {
			this.show();
		}
	}, {
		key: 'show',
		value: function show() {
			var _this3 = this;

			this.page_parts.get("Header").show();
			console.log("[MenuStartController] in show");

			this.userService.getProfile().then(function (resp) {
				console.log("[userService.getProfile] response: " + JSON.stringify(resp));
				_this3.userService.user.set(resp);
				if (_this3._isGetProfile === false) {
					_this3.controllSettings.mouseControll = resp.mouseControlEnabled;
				}
				_this3.page_parts.get("RegMenu").data.user = _this3.userService.user.getUsername();
				_this3.page_parts.get("RegMenu").getClassElement().hidden = false;
				_this3.addListener();
				_this3._isGetProfile = true;
				// this.page_parts.get("RegMenu").show();
			}).catch(function (err) {
				console.log("[userService.getProfile] err: " + err);
				_this3.page_parts.get("UnRegMenu").show();
			});

			this.page_parts.get("Footer").show();
		}
	}, {
		key: 'hide',
		value: function hide() {
			this.page_parts.get("Header").hide();
			this.page_parts.get("UnRegMenu").hide();
			this.page_parts.get("RegMenu").hide();
			this.page_parts.get("Footer").hide();
		}
	}]);

	return MenuStartController;
}(_Controller3.default);

exports.default = MenuStartController;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Controller2 = __webpack_require__(4);

var _Controller3 = _interopRequireDefault(_Controller2);

var _index = __webpack_require__(34);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import Game from '../game/classes/Game/Game';


var PlayGameController = function (_Controller) {
	_inherits(PlayGameController, _Controller);

	function PlayGameController() {
		var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		_classCallCheck(this, PlayGameController);

		if (PlayGameController.__instance) {
			var _ret;

			return _ret = PlayGameController.__instance, _possibleConstructorReturn(_this, _ret);
		}

		var _this = _possibleConstructorReturn(this, (PlayGameController.__proto__ || Object.getPrototypeOf(PlayGameController)).call(this, opt));

		PlayGameController.__instance = _this;

		return _this;
	}

	_createClass(PlayGameController, [{
		key: 'show',
		value: function show() {
			var _this2 = this;

			this.userService.getProfile().then(function (resp) {
				console.log("[userService.getProfile] response: " + resp);
				_this2.userService.user.set(resp);
				_this2.game = new _index2.default(_this2.userService.user);
			}).catch(function (err) {
				console.log("[userService.getProfile] err: " + err);
				// this.game = new Game(this.userService.user);
				console.log('play_game_catch');
				_this2.game = new _index2.default(_this2.userService.user);
			});
		}
	}, {
		key: 'hide',
		value: function hide() {
			_index2.default.exit();
		}
	}]);

	return PlayGameController;
}(_Controller3.default);

exports.default = PlayGameController;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/** Imports */
var state_1 = __webpack_require__(17);
var titlepage = __webpack_require__(35);
var loaderImage = __webpack_require__(98);
var tankLandingArea = __webpack_require__(36);
// const titlepage          = require('../../static/staticsGame/images/titlepage.jpg');
// const loaderImage        = require('../../static/staticsGame/images/loader.png');
var BootState = /** @class */ (function (_super) {
    __extends(BootState, _super);
    function BootState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BootState.prototype.preload = function () {
        this.game.load.image('background', titlepage);
        this.game.load.image('preloadBar', loaderImage);
        this.game.load.image('tankLandingArea', tankLandingArea);
    };
    BootState.prototype.create = function () {
        this.game.state.start('preloader', true, false);
    };
    return BootState;
}(state_1.default));
exports.default = BootState;


/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = "../../img/14d4ff248dc707525c77546bd8f6a020.png";

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/** Imports */
var state_1 = __webpack_require__(17);
// Webpack will replace these imports with a URLs to images
var tanks = __webpack_require__(37);
var tanksJSON = __webpack_require__(100);
var enemy = __webpack_require__(101);
var bullet = __webpack_require__(102);
var kaboom = __webpack_require__(103);
var titlepage = __webpack_require__(35);
var logo = __webpack_require__(104);
// const startAudio      = require('../../../static/staticsGame/music/boom.mp3');
var earth = __webpack_require__(38);
var pause = __webpack_require__(39);
var box_tree = __webpack_require__(40);
// const tanks       = require('../../static/staticsGame/images/tanks.png');
// const tanksJSON   = require('../../static/staticsGame/images/tanks.json');
// const enemy       = require('../../static/staticsGame/images/enemy-tanks.png');
// const bullet      = require('../../static/staticsGame/images/bullet.png');
// const kaboom      = require('../../static/staticsGame/images/explosion.png');
// const titlepage   = require('../../static/staticsGame/images/titlepage.jpg');
// const logo        = require('../../static/staticsGame/images/logo.png');
// // const startAudio      = require('../../static/staticsGame/music/boom.mp3');
// const earth       = require('../../static/staticsGame/images/ground.jpg');
// const pause       = require('../../static/staticsGame/images/pause_button.png');
// const box_tree    = require('../../static/staticsGame/images/box_tree.png');
// The state for loading core resources for the game
var PreloaderState = /** @class */ (function (_super) {
    __extends(PreloaderState, _super);
    function PreloaderState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PreloaderState.prototype.preload = function () {
        console.debug('Assets loading started');
        this.game.load.image('titlepage', titlepage);
        this.game.load.image('logo', logo);
        // this.game.load.audio('startAudio', startAudio, true);
        this.game.load.image('earth', earth);
        this.game.load.image('pause', pause);
        this.game.load.image('box_tree', box_tree);
        this.game.load.atlas('tank', 'static/staticsGame/images/tanks.png', 'static/staticsGame/images/tanks.json');
        this.game.load.atlas('enemy', 'static/staticsGame/images/enemy-tanks.png', 'static/staticsGame/images/tanks.json');
        this.game.load.image('bullet', bullet);
        this.game.load.spritesheet('kaboom', kaboom, 64, 64, 23);
    };
    PreloaderState.prototype.create = function () {
        console.debug('Assets loading completed');
        this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
        this._background = this.game.add.sprite(0, 0, 'titlepage');
        this._background.alpha = 0;
        var tween = this.game.add.tween(this._background).to({ alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);
        tween.onComplete.add(this.startMainMenu, this);
    };
    PreloaderState.prototype.startMainMenu = function () {
        this.game.add.tween(this._background).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
        this.game.state.start('main', true, false);
    };
    return PreloaderState;
}(state_1.default));
exports.default = PreloaderState;


/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = {"frames":[{"filename":"shadow","frame":{"x":0,"y":0,"w":80,"h":80},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":80,"h":80},"sourceSize":{"w":80,"h":80}},{"filename":"tank1","frame":{"x":190,"y":52,"w":54,"h":52},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":3,"y":5,"w":54,"h":52},"sourceSize":{"w":64,"h":64}},{"filename":"turret","frame":{"x":0,"y":80,"w":48,"h":28},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":2,"w":48,"h":28},"sourceSize":{"w":50,"h":32}}]}

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = "../../img/f50e6d82d4bfab326976a927ee97741f.png";

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = "../../img/fae6edb0e0a51c1e45006a123c63dff2.png";

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = "../../img/5ddcf208bfb5ee103c39ea71c64a107f.png";

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = "../../img/1ec878abc02f59ab966e9d4f4bbbff65.png";

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/** Imports */
var state_1 = __webpack_require__(17);
// The main state of the game
var MainState = /** @class */ (function (_super) {
    __extends(MainState, _super);
    function MainState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainState.prototype.create = function () {
        // this.game.physics.startSystem(Phaser.Physics.MATTERJS);
        this._background = this.game.add.sprite(0, 0, 'titlepage');
        this._background.alpha = 0;
        this._logo = this.game.add.sprite(this.world.centerX, -300, 'logo');
        this._logo.anchor.setTo(0.5, 0.5);
        this.add.tween(this._background).to({ alpha: 1 }, 2000, Phaser.Easing.Bounce.InOut, true);
        this.add.tween(this._logo).to({ y: 220 }, 2000, Phaser.Easing.Elastic.Out, true, 2000);
    };
    MainState.prototype.update = function () {
        if (this.game.input.keyboard.isDown(Phaser.Keyboard.ENTER)) {
            this.fadeOut();
        }
    };
    MainState.prototype.fadeOut = function () {
        this.add.tween(this._background).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
        var tween = this.add.tween(this._logo).to({ y: 800 }, 2000, Phaser.Easing.Linear.None, true);
        tween.onComplete.add(this.startGame, this);
    };
    MainState.prototype.startGame = function () {
        this.game.state.start('world', true, false);
    };
    return MainState;
}(state_1.default));
exports.default = MainState;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/** Imports */
var state_1 = __webpack_require__(17);
var Tank_1 = __webpack_require__(107);
var TreeBox_1 = __webpack_require__(108);
var Client_1 = __webpack_require__(110);
var Snap_1 = __webpack_require__(135);
var SpawnRequest_1 = __webpack_require__(136);
var TankBullet_1 = __webpack_require__(137);
var EnemyBullet_1 = __webpack_require__(138);
var EnemyTanks_1 = __webpack_require__(139);
var TankLanding_1 = __webpack_require__(141);
var StaticList_1 = __webpack_require__(142);
var earth = __webpack_require__(38);
var pause = __webpack_require__(39);
var box_tree = __webpack_require__(40);
var tanks = __webpack_require__(37);
var tankLandingArea = __webpack_require__(36);
var ControllSettings_js_1 = __webpack_require__(5);
var WorldState = /** @class */ (function (_super) {
    __extends(WorldState, _super);
    function WorldState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WorldState.prototype.create = function () {
        var _this = this;
        this.game.world.setBounds(0, 0, 1920, 1080);
        this.isSendSpawnRequest = false;
        this.load.image('bullet', 'static/staticsGame/images/bullet.png');
        this.load.spritesheet('kaboom', 'static/staticsGame/images/explosion.png', 64, 64, 23);
        this.music = this.game.add.audio('startAudio', 1, false);
        this.music.play();
        this.land = this.game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'earth');
        this.land.fixedToCamera = true;
        // create landing group
        this.tankLandings = new TankLanding_1.default(this.game);
        // create box map
        this.treeBoxes = new TreeBox_1.default(this.game);
        // create a new group of enemies;
        this.enemies = new EnemyTanks_1.default(this.game);
        // create our tank with own username
        this.tank = new Tank_1.default(this.game, this.game.user.id, this.game.user.username);
        this.enemyArray = [];
        this.client = new Client_1.default();
        this.client.socket.onmessage = (function (event) {
            var message = JSON.parse(event.data);
            if (message.class === "ServerSnap") {
                _this.onServerSnapArrived(message);
            }
            if (message.class === "WorldSnap") {
                _this.onServerWorldArrived(message);
            }
            if (message.class === "StatisticsSnap") {
                console.log("statistics snap is comming");
                _this.onServerStatisticsSnap(message);
            }
            if (message.class === "SpawnSnap") {
                _this.isSendSpawnRequest = false;
                _this.onServerSpawnArrived(message);
            }
        });
        // declaration bullets for out tamk and enemy tank
        this.tankBullets = new TankBullet_1.default(this.game);
        this.enemyBullets = new EnemyBullet_1.default(this.game);
        this.pause = this.game.add.button(10, 10, "pause", this.startPause, this);
        this.pause.fixedToCamera = true;
        this.pause.scale.setTo(0.2, 0.2);
        this.pause.frame = 1;
        this.pause['clicked'] = false;
        this.statistics = new StaticList_1.default(this.game, this.game.user.id);
        this._controlSettings = new ControllSettings_js_1.default();
        this.game.camera.follow(this.tank._tank._body);
        // this.game.camera.deadzone = new Phaser.Rectangle(15, 15, 50, 30);
        // this.game.camera.focusOnXY(0, 0);
    };
    WorldState.prototype.update = function () {
        // this.game.camera.focusOnXY(this.tank._tank.currentPosition.xCoordinate, this.tank._tank.currentPosition.yCoordinate);
        this.game.physics.arcade.collide(this.tank._tank._body, this.treeBoxes._treeBoxes);
        var enemies = this.enemies.enemyTanks.children;
        for (var i = 0; i < enemies.length; i++) {
            this.game.physics.arcade.collide(this.tank._tank._body, enemies[i]._tank._body);
        }
        if (this.enemy) {
            this.game.physics.arcade.collide(this.enemy._tank._body, this.treeBoxes._treeBoxes);
            this.enemy.update();
        }
        this.land.tilePosition.x = -this.camera.x;
        this.land.tilePosition.y = -this.camera.y;
        this.tank.update();
        // fire then click right mouse button or space
        if (this._controlSettings.mouseControll) {
            if (this.game.input.activePointer.isDown) {
                this.fire();
            }
        }
        else {
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
                this.fire();
            }
        }
        if (this.client.socket.readyState !== 0) {
            if (this.tank.isKilled === true && this.isSendSpawnRequest === false) {
                this.isSendSpawnRequest = true;
                this.client.message.sendClientSnap((new SpawnRequest_1.default(this.game.user.id, this.game.user.username)).spawnSnap);
            }
            else if (this.isSendSpawnRequest === false) {
                this.client.message.sendClientSnap((new Snap_1.default(this.game.user.id, this.game.user.username, this.tank._tank.currentPosition.xCoordinate, this.tank._tank.currentPosition.yCoordinate, this.tank._tank._body.angle, this.tank._turret._turret.angle, this.tank.isShoot, this.tank.health)).playerSnap);
            }
        }
        this.game.physics.arcade.overlap(this.tankBullets.tankBullets, this.treeBoxes._treeBoxes, this.tankBullets.bulletHitBox.bind(this.tankBullets), null, this);
        this.game.physics.arcade.overlap(this.enemyBullets.enemyBullets, this.treeBoxes._treeBoxes, this.enemyBullets.bulletHitBox.bind(this.enemyBullets), null, this);
        for (var i = 0; i < this.enemies.enemyTanks.children.length; i++) {
            this.game.physics.arcade.overlap(this.tankBullets.tankBullets, this.enemies.enemyTanks.children[i]._tank._body, this.tankBullets.bulletHitEnemy.bind(this.tankBullets), null, this);
        }
        if (this.tank._tank._body) {
            this.game.physics.arcade.overlap(this.enemyBullets.enemyBullets, this.tank._tank._body, this.enemyBullets.bulletHitTank.bind(this.enemyBullets), null, this);
        }
        // this.statistics.updatePosition(this.tank._tank.currentPosition.xCoordinate, this.tank._tank.currentPosition.yCoordinate);
        this.tank.isShoot = false;
    };
    WorldState.prototype.fire = function () {
        if (this.game.time.now > this.tank._nextFire && this.tankBullets.tankBullets.countDead() > 0) {
            this.tank._nextFire = this.time.now + this.tank._fireRate;
            var bullet = this.tankBullets.tankBullets.getFirstExists(false);
            bullet.reset(this.tank._turret._turret.x, this.tank._turret._turret.y);
            if (this._controlSettings.mouseControll) {
                bullet.rotation = this.physics.arcade.moveToPointer(bullet, 3500, this.game.input.activePointer);
            }
            else {
                var degToRad = function (deg) { return deg / 180 * Math.PI; };
                var directX = this.tank._tank.currentPosition.xCoordinate - 1000 * Math.cos(degToRad(180 - this.tank._turret._turret.angle));
                var directY = this.tank._tank.currentPosition.yCoordinate + 1000 * Math.sin(degToRad(this.tank._turret._turret.angle));
                bullet.rotation = this.physics.arcade.moveToXY(bullet, directX, directY, 3500);
            }
            this.tank.isShoot = true;
        }
    };
    WorldState.prototype.startPause = function () {
        window.open("/", "_self");
    };
    ;
    WorldState.prototype.onServerStatisticsSnap = function (message) {
        if (message.leaders) {
            this.statistics.updateList(message.leaders, this.tank.kills);
        }
    };
    WorldState.prototype.onServerSpawnArrived = function (message) {
        this.tank = new Tank_1.default(this.game, this.game.user.id, this.game.user.username);
        var position = message.position;
        this.tank._tank.currentPosition = {
            xCoordinate: position.valX,
            yCoordinate: position.valY
        };
        this.game.camera.follow(this.tank._tank._body);
        this.tank.isShoot = false;
    };
    WorldState.prototype.onServerWorldArrived = function (message) {
        var boxes = message.boxes;
        var tanksLandingPositions = message.spawnPoints;
        var tankPosition = message.startTankPosition;
        this.tank._tank.currentPosition = {
            xCoordinate: tankPosition.valX,
            yCoordinate: tankPosition.valY
        };
        for (var i = 0; i < boxes.length; i++) {
            this.treeBoxes.createBox(boxes[i].position.valX, boxes[i].position.valY, i);
        }
        for (var i = 0; i < tanksLandingPositions.length; i++) {
            this.tankLandings.createLanding(tanksLandingPositions[i].valX, tanksLandingPositions[i].valY, i);
        }
    };
    WorldState.prototype.onServerSnapArrived = function (message) {
        var enemiesOnClient = this.enemies.enemyTanks.children;
        var playersOnServer = message.players;
        var tanksSnapshots = message.tanks;
        for (var j = 0; j < tanksSnapshots.length; j++) {
            var tankSnapshot = tanksSnapshots[j];
            if (tankSnapshot.userId === this.game.user.id) {
                if (this.tank.health !== tankSnapshot.health) {
                    this.tank.health = tankSnapshot.health;
                    this.tank._healthBar.setPercent(tankSnapshot.health);
                }
                if (tankSnapshot.health <= 0) {
                    this.tank.kill();
                }
                this.tank.kills = tankSnapshot.kills;
            }
            if (tankSnapshot.userId !== this.game.user.id && !~this.enemyArray.indexOf(tankSnapshot.userId)) {
                // console.log(`try create new enemy`);
                this.enemyArray.push(tankSnapshot.userId);
                var platform = tankSnapshot.platform;
                this.enemies.createEnemyTank(platform.valX, platform.valY, tankSnapshot.userId, tankSnapshot.username);
            }
        }
        var removingEnemyFromArray = [];
        for (var i = 0; i < enemiesOnClient.length; i++) {
            var enemyOnClient = enemiesOnClient[i];
            if (!~playersOnServer.indexOf(enemyOnClient._uid)) {
                console.log("try remove from group");
                this.enemies.enemyTanks.remove(enemyOnClient, true);
                console.log("try kill enemyClient");
                enemyOnClient.kill();
                removingEnemyFromArray.push(enemyOnClient._uid);
                console.log("kill success");
                continue;
            }
            for (var j = 0; j < tanksSnapshots.length; j++) {
                var tankSnapshot = tanksSnapshots[j];
                if (enemyOnClient._uid === tankSnapshot.userId) {
                    if (enemyOnClient.health !== tankSnapshot.health) {
                        enemyOnClient.health = tankSnapshot.health;
                        enemyOnClient._healthBar.setPercent(tankSnapshot.health);
                    }
                    if (tankSnapshot.health <= 0) {
                        // because on backend we remove current userId from available players on server
                        // on it case above in checking not available players current userId is pushing into 'removingEnemyFromArray'
                        // so taking action here does not make sense
                        continue;
                    }
                    if (tankSnapshot.isShoot) {
                        var directX = null;
                        var directY = null;
                        var degToRad = function (deg) { return deg / 180 * Math.PI; };
                        directX = tankSnapshot.platform.valX - 1000 * Math.cos(degToRad(180 - tankSnapshot.turretAngle));
                        directY = tankSnapshot.platform.valY + 1000 * Math.sin(degToRad(tankSnapshot.turretAngle));
                        var bullet = this.enemyBullets.enemyBullets.getFirstExists(false);
                        bullet.reset(tankSnapshot.platform.valX, tankSnapshot.platform.valY);
                        bullet.rotation = this.physics.arcade.moveToXY(bullet, directX, directY, 3500);
                    }
                    enemyOnClient.tankBody.currentPosition = {
                        xCoordinate: tankSnapshot.platform.valX,
                        yCoordinate: tankSnapshot.platform.valY
                    };
                    enemyOnClient.tankBody.currentPlatformAngle = tankSnapshot.platformAngle;
                    enemyOnClient._turret.turretAngle = tankSnapshot.turretAngle;
                }
            }
        }
        for (var k = 0; k < removingEnemyFromArray.length; k++) {
            var enemyId = removingEnemyFromArray[k];
            console.log('try remove from enemyArray enemyId' + enemyId.toString());
            var enemyIdx = this.enemyArray.indexOf(enemyId);
            console.log('try remove from enemyArray by idx = ' + enemyIdx.toString());
            if (enemyIdx > -1) {
                this.enemyArray.splice(enemyIdx, 1);
            }
        }
    };
    return WorldState;
}(state_1.default));
exports.default = WorldState;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var TankBody_1 = __webpack_require__(41);
var TankTurret_1 = __webpack_require__(42);
var Lable_1 = __webpack_require__(43);
var HealthBar = __webpack_require__(44);
var TankState = /** @class */ (function (_super) {
    __extends(TankState, _super);
    function TankState(game, uid, title) {
        var _this = _super.call(this, game, 0, 0) || this;
        _this._game = game;
        _this._xPosition = Math.random() * _this.game.world.width;
        _this._yPosition = Math.random() * _this.game.world.height;
        _this._health = 100;
        _this._fireRate = 1000; // скорострельность
        _this._nextFire = 0; //следующий выстрел
        _this._alive = true;
        _this._title = title;
        _this._uid = uid;
        _this.isKilled = false;
        _this.create();
        return _this;
    }
    TankState.prototype.create = function () {
        this._cursor = this._game.input.keyboard.createCursorKeys();
        this._tank = new TankBody_1.default(this._game, this._cursor);
        this._turret = new TankTurret_1.default(this._game, this._cursor);
        this._tankLable = new Lable_1.default(this._game, this._tank.currentPosition, this._title, 1);
        this._healthBar = new HealthBar(this._game, { x: this._tank.currentPosition.xCoordinate, y: this._tank.currentPosition.yCoordinate, width: 100, height: 10 });
        this._healthBar.setPosition(this._tank.currentPosition.xCoordinate, this._tank.currentPosition.yCoordinate);
    };
    TankState.prototype.update = function () {
        this._tank.update();
        this._turret.turretCoordinate = this._tank.currentPosition;
        this._turret.update();
        this._tankLable.currentPosition = this._tank.currentPosition;
        this._healthBar.setPosition(this._tank.currentPosition.xCoordinate, this._tank.currentPosition.yCoordinate - 50);
    };
    TankState.prototype.kill = function () {
        this._tank.kill();
        this._turret.kill();
        this._tankLable.kill();
        this._healthBar.kill();
        this.isKilled = true;
    };
    Object.defineProperty(TankState.prototype, "health", {
        get: function () {
            return this._health;
        },
        set: function (health) {
            this._health = health;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TankState.prototype, "isShoot", {
        get: function () {
            return this._isShoot;
        },
        set: function (shoot) {
            this._isShoot = shoot;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TankState.prototype, "kills", {
        get: function () {
            return this._kills;
        },
        set: function (kills) {
            this._kills = kills;
        },
        enumerable: true,
        configurable: true
    });
    return TankState;
}(Phaser.Sprite));
exports.default = TankState;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Box_1 = __webpack_require__(109);
var TreeBox = /** @class */ (function (_super) {
    __extends(TreeBox, _super);
    // _box = Phaser.Sprite;
    function TreeBox(game) {
        var _this = _super.call(this, game, 0, 0) || this;
        _this._game = game;
        _this.create();
        return _this;
    }
    TreeBox.prototype.create = function () {
        this._treeBoxes = this._game.add.group();
        this._treeBoxes.enableBody = true;
        this._game.physics.arcade.enable(this._treeBoxes);
        this._treeBoxes.createMultiple(30, 'bullet');
        this._treeBoxes.setAll('anchor.x', 0.5);
        this._treeBoxes.setAll('anchor.y', 0.5);
        this._treeBoxes.setAll('outOfBoundsKill', true);
        this._treeBoxes.setAll('checkWorldBounds', true);
    };
    TreeBox.prototype.createBox = function (xCoord, yCoord, id) {
        this._box = this._treeBoxes.create(xCoord, yCoord, 'box_tree');
        this._box.anchor.setTo(0.5, 0.5);
        this._box.name = id.toString();
        this._box.body.immovable = true;
    };
    return TreeBox;
}(Box_1.default));
exports.default = TreeBox;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Box = /** @class */ (function (_super) {
    __extends(Box, _super);
    function Box(game, xCoord, yCoord) {
        var _this = _super.call(this, game, 0, 0) || this;
        _this._game = game;
        _this._height = 100;
        _this._width = 100;
        _this._xCoordinate = xCoord;
        _this._yCoordinate = yCoord;
        _this.create();
        return _this;
    }
    Box.prototype.create = function () { };
    ;
    Object.defineProperty(Box.prototype, "currentPosition", {
        get: function () {
            return {
                xCoordinate: this._box.x,
                yCoordinate: this._box.y,
            };
        },
        set: function (coordinate) {
            this._box.x = coordinate.xCoordinate;
            this._box.y = coordinate.yCoordinate;
        },
        enumerable: true,
        configurable: true
    });
    return Box;
}(Phaser.Sprite));
exports.default = Box;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Message_1 = __webpack_require__(111);
var io = __webpack_require__(112);
var Client = /** @class */ (function () {
    function Client() {
        var _this = this;
        if (this._instance)
            return this._instance;
        // this.socket = io('ws://10.100.122.201:8080/game');
        // console.log('Info: try get instants of WebSocket.');
        // this.socket = new WebSocket('ws://localhost:8080/game');
        // this.socket = new WebSocket('ws://10.100.122.201:8080/api/game');
        // this.socket = new WebSocket('ws://10.100.122.151:8080/api/game');
        // this.socket = new WebSocket('ws://82.202.246.5:8080/game');
        this.socket = new WebSocket('wss://tanks-backend.xyz/api/game');
        this.message = new Message_1.default(this);
        console.log('Info: try create \"onopen\" function.');
        this.socket.onopen = (function () {
            console.log('Info: WebSocket connection opened.');
            try {
                _this.message.sendJoinGameMsg();
                console.log("completed");
            }
            catch (ex) {
                // debugger;
                console.log("[CLient] OnOpenFunction catch(error)");
                _this.socket.close(1001, "error: exeception occured during the initialization stage: " + ex);
            }
        });
    }
    return Client;
}());
exports.default = Client;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Message = /** @class */ (function () {
    function Message(Client) {
        this.client = Client;
        this.class = "ClientSnap";
        this.joinGameMessage = {
            class: "JoinGame$Request",
        };
    }
    Message.prototype.sendJoinGameMsg = function () {
        // debugger;
        this.send(JSON.stringify(this.joinGameMessage));
    };
    ;
    Message.prototype.sendClientSnap = function (snap) {
        this.send(JSON.stringify(snap));
    };
    ;
    Message.prototype.send = function (message) {
        if (this.client.socket.readyState === this.client.socket.CLOSED ||
            this.client.socket.readyState === this.client.socket.CLOSING) {
            return;
        }
        this.client.socket.send(message);
    };
    ;
    return Message;
}());
exports.default = Message;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Module dependencies.
 */

var url = __webpack_require__(113);
var parser = __webpack_require__(26);
var Manager = __webpack_require__(50);
var debug = __webpack_require__(13)('socket.io-client');

/**
 * Module exports.
 */

module.exports = exports = lookup;

/**
 * Managers cache.
 */

var cache = exports.managers = {};

/**
 * Looks up an existing `Manager` for multiplexing.
 * If the user summons:
 *
 *   `io('http://localhost/a');`
 *   `io('http://localhost/b');`
 *
 * We reuse the existing instance based on same scheme/port/host,
 * and we initialize sockets for each namespace.
 *
 * @api public
 */

function lookup (uri, opts) {
  if (typeof uri === 'object') {
    opts = uri;
    uri = undefined;
  }

  opts = opts || {};

  var parsed = url(uri);
  var source = parsed.source;
  var id = parsed.id;
  var path = parsed.path;
  var sameNamespace = cache[id] && path in cache[id].nsps;
  var newConnection = opts.forceNew || opts['force new connection'] ||
                      false === opts.multiplex || sameNamespace;

  var io;

  if (newConnection) {
    debug('ignoring socket cache for %s', source);
    io = Manager(source, opts);
  } else {
    if (!cache[id]) {
      debug('new io instance for %s', source);
      cache[id] = Manager(source, opts);
    }
    io = cache[id];
  }
  if (parsed.query && !opts.query) {
    opts.query = parsed.query;
  }
  return io.socket(parsed.path, opts);
}

/**
 * Protocol version.
 *
 * @api public
 */

exports.protocol = parser.protocol;

/**
 * `connect`.
 *
 * @param {String} uri
 * @api public
 */

exports.connect = lookup;

/**
 * Expose constructors for standalone build.
 *
 * @api public
 */

exports.Manager = __webpack_require__(50);
exports.Socket = __webpack_require__(55);


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
/**
 * Module dependencies.
 */

var parseuri = __webpack_require__(45);
var debug = __webpack_require__(13)('socket.io-client:url');

/**
 * Module exports.
 */

module.exports = url;

/**
 * URL parser.
 *
 * @param {String} url
 * @param {Object} An object meant to mimic window.location.
 *                 Defaults to window.location.
 * @api public
 */

function url (uri, loc) {
  var obj = uri;

  // default to window.location
  loc = loc || global.location;
  if (null == uri) uri = loc.protocol + '//' + loc.host;

  // relative path support
  if ('string' === typeof uri) {
    if ('/' === uri.charAt(0)) {
      if ('/' === uri.charAt(1)) {
        uri = loc.protocol + uri;
      } else {
        uri = loc.host + uri;
      }
    }

    if (!/^(https?|wss?):\/\//.test(uri)) {
      debug('protocol-less url %s', uri);
      if ('undefined' !== typeof loc) {
        uri = loc.protocol + '//' + uri;
      } else {
        uri = 'https://' + uri;
      }
    }

    // parse
    debug('parse %s', uri);
    obj = parseuri(uri);
  }

  // make sure we treat `localhost:80` and `localhost` equally
  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = '80';
    } else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = '443';
    }
  }

  obj.path = obj.path || '/';

  var ipv6 = obj.host.indexOf(':') !== -1;
  var host = ipv6 ? '[' + obj.host + ']' : obj.host;

  // define unique id
  obj.id = obj.protocol + '://' + host + ':' + obj.port;
  // define href
  obj.href = obj.protocol + '://' + host + (loc && loc.port === obj.port ? '' : (':' + obj.port));

  return obj;
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(47);

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),
/* 115 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*global Blob,File*/

/**
 * Module requirements
 */

var isArray = __webpack_require__(117);
var isBuf = __webpack_require__(49);
var toString = Object.prototype.toString;
var withNativeBlob = typeof global.Blob === 'function' || toString.call(global.Blob) === '[object BlobConstructor]';
var withNativeFile = typeof global.File === 'function' || toString.call(global.File) === '[object FileConstructor]';

/**
 * Replaces every Buffer | ArrayBuffer in packet with a numbered placeholder.
 * Anything with blobs or files should be fed through removeBlobs before coming
 * here.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @api public
 */

exports.deconstructPacket = function(packet) {
  var buffers = [];
  var packetData = packet.data;
  var pack = packet;
  pack.data = _deconstructPacket(packetData, buffers);
  pack.attachments = buffers.length; // number of binary 'attachments'
  return {packet: pack, buffers: buffers};
};

function _deconstructPacket(data, buffers) {
  if (!data) return data;

  if (isBuf(data)) {
    var placeholder = { _placeholder: true, num: buffers.length };
    buffers.push(data);
    return placeholder;
  } else if (isArray(data)) {
    var newData = new Array(data.length);
    for (var i = 0; i < data.length; i++) {
      newData[i] = _deconstructPacket(data[i], buffers);
    }
    return newData;
  } else if (typeof data === 'object' && !(data instanceof Date)) {
    var newData = {};
    for (var key in data) {
      newData[key] = _deconstructPacket(data[key], buffers);
    }
    return newData;
  }
  return data;
}

/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @api public
 */

exports.reconstructPacket = function(packet, buffers) {
  packet.data = _reconstructPacket(packet.data, buffers);
  packet.attachments = undefined; // no longer useful
  return packet;
};

function _reconstructPacket(data, buffers) {
  if (!data) return data;

  if (data && data._placeholder) {
    return buffers[data.num]; // appropriate buffer (should be natural order anyway)
  } else if (isArray(data)) {
    for (var i = 0; i < data.length; i++) {
      data[i] = _reconstructPacket(data[i], buffers);
    }
  } else if (typeof data === 'object') {
    for (var key in data) {
      data[key] = _reconstructPacket(data[key], buffers);
    }
  }

  return data;
}

/**
 * Asynchronously removes Blobs or Files from data via
 * FileReader's readAsArrayBuffer method. Used before encoding
 * data as msgpack. Calls callback with the blobless data.
 *
 * @param {Object} data
 * @param {Function} callback
 * @api private
 */

exports.removeBlobs = function(data, callback) {
  function _removeBlobs(obj, curKey, containingObject) {
    if (!obj) return obj;

    // convert any blob
    if ((withNativeBlob && obj instanceof Blob) ||
        (withNativeFile && obj instanceof File)) {
      pendingBlobs++;

      // async filereader
      var fileReader = new FileReader();
      fileReader.onload = function() { // this.result == arraybuffer
        if (containingObject) {
          containingObject[curKey] = this.result;
        }
        else {
          bloblessData = this.result;
        }

        // if nothing pending its callback time
        if(! --pendingBlobs) {
          callback(bloblessData);
        }
      };

      fileReader.readAsArrayBuffer(obj); // blob -> arraybuffer
    } else if (isArray(obj)) { // handle array
      for (var i = 0; i < obj.length; i++) {
        _removeBlobs(obj[i], i, obj);
      }
    } else if (typeof obj === 'object' && !isBuf(obj)) { // and object
      for (var key in obj) {
        _removeBlobs(obj[key], key, obj);
      }
    }
  }

  var pendingBlobs = 0;
  var bloblessData = data;
  _removeBlobs(bloblessData);
  if (!pendingBlobs) {
    callback(bloblessData);
  }
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 117 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = __webpack_require__(119);

/**
 * Exports parser
 *
 * @api public
 *
 */
module.exports.parser = __webpack_require__(11);


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Module dependencies.
 */

var transports = __webpack_require__(51);
var Emitter = __webpack_require__(10);
var debug = __webpack_require__(20)('engine.io-client:socket');
var index = __webpack_require__(54);
var parser = __webpack_require__(11);
var parseuri = __webpack_require__(45);
var parseqs = __webpack_require__(18);

/**
 * Module exports.
 */

module.exports = Socket;

/**
 * Socket constructor.
 *
 * @param {String|Object} uri or options
 * @param {Object} options
 * @api public
 */

function Socket (uri, opts) {
  if (!(this instanceof Socket)) return new Socket(uri, opts);

  opts = opts || {};

  if (uri && 'object' === typeof uri) {
    opts = uri;
    uri = null;
  }

  if (uri) {
    uri = parseuri(uri);
    opts.hostname = uri.host;
    opts.secure = uri.protocol === 'https' || uri.protocol === 'wss';
    opts.port = uri.port;
    if (uri.query) opts.query = uri.query;
  } else if (opts.host) {
    opts.hostname = parseuri(opts.host).host;
  }

  this.secure = null != opts.secure ? opts.secure
    : (global.location && 'https:' === location.protocol);

  if (opts.hostname && !opts.port) {
    // if no port is specified manually, use the protocol default
    opts.port = this.secure ? '443' : '80';
  }

  this.agent = opts.agent || false;
  this.hostname = opts.hostname ||
    (global.location ? location.hostname : 'localhost');
  this.port = opts.port || (global.location && location.port
      ? location.port
      : (this.secure ? 443 : 80));
  this.query = opts.query || {};
  if ('string' === typeof this.query) this.query = parseqs.decode(this.query);
  this.upgrade = false !== opts.upgrade;
  this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
  this.forceJSONP = !!opts.forceJSONP;
  this.jsonp = false !== opts.jsonp;
  this.forceBase64 = !!opts.forceBase64;
  this.enablesXDR = !!opts.enablesXDR;
  this.timestampParam = opts.timestampParam || 't';
  this.timestampRequests = opts.timestampRequests;
  this.transports = opts.transports || ['polling', 'websocket'];
  this.transportOptions = opts.transportOptions || {};
  this.readyState = '';
  this.writeBuffer = [];
  this.prevBufferLen = 0;
  this.policyPort = opts.policyPort || 843;
  this.rememberUpgrade = opts.rememberUpgrade || false;
  this.binaryType = null;
  this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;
  this.perMessageDeflate = false !== opts.perMessageDeflate ? (opts.perMessageDeflate || {}) : false;

  if (true === this.perMessageDeflate) this.perMessageDeflate = {};
  if (this.perMessageDeflate && null == this.perMessageDeflate.threshold) {
    this.perMessageDeflate.threshold = 1024;
  }

  // SSL options for Node.js client
  this.pfx = opts.pfx || null;
  this.key = opts.key || null;
  this.passphrase = opts.passphrase || null;
  this.cert = opts.cert || null;
  this.ca = opts.ca || null;
  this.ciphers = opts.ciphers || null;
  this.rejectUnauthorized = opts.rejectUnauthorized === undefined ? true : opts.rejectUnauthorized;
  this.forceNode = !!opts.forceNode;

  // other options for Node.js client
  var freeGlobal = typeof global === 'object' && global;
  if (freeGlobal.global === freeGlobal) {
    if (opts.extraHeaders && Object.keys(opts.extraHeaders).length > 0) {
      this.extraHeaders = opts.extraHeaders;
    }

    if (opts.localAddress) {
      this.localAddress = opts.localAddress;
    }
  }

  // set on handshake
  this.id = null;
  this.upgrades = null;
  this.pingInterval = null;
  this.pingTimeout = null;

  // set on heartbeat
  this.pingIntervalTimer = null;
  this.pingTimeoutTimer = null;

  this.open();
}

Socket.priorWebsocketSuccess = false;

/**
 * Mix in `Emitter`.
 */

Emitter(Socket.prototype);

/**
 * Protocol version.
 *
 * @api public
 */

Socket.protocol = parser.protocol; // this is an int

/**
 * Expose deps for legacy compatibility
 * and standalone browser access.
 */

Socket.Socket = Socket;
Socket.Transport = __webpack_require__(28);
Socket.transports = __webpack_require__(51);
Socket.parser = __webpack_require__(11);

/**
 * Creates transport of the given type.
 *
 * @param {String} transport name
 * @return {Transport}
 * @api private
 */

Socket.prototype.createTransport = function (name) {
  debug('creating transport "%s"', name);
  var query = clone(this.query);

  // append engine.io protocol identifier
  query.EIO = parser.protocol;

  // transport name
  query.transport = name;

  // per-transport options
  var options = this.transportOptions[name] || {};

  // session id if we already have one
  if (this.id) query.sid = this.id;

  var transport = new transports[name]({
    query: query,
    socket: this,
    agent: options.agent || this.agent,
    hostname: options.hostname || this.hostname,
    port: options.port || this.port,
    secure: options.secure || this.secure,
    path: options.path || this.path,
    forceJSONP: options.forceJSONP || this.forceJSONP,
    jsonp: options.jsonp || this.jsonp,
    forceBase64: options.forceBase64 || this.forceBase64,
    enablesXDR: options.enablesXDR || this.enablesXDR,
    timestampRequests: options.timestampRequests || this.timestampRequests,
    timestampParam: options.timestampParam || this.timestampParam,
    policyPort: options.policyPort || this.policyPort,
    pfx: options.pfx || this.pfx,
    key: options.key || this.key,
    passphrase: options.passphrase || this.passphrase,
    cert: options.cert || this.cert,
    ca: options.ca || this.ca,
    ciphers: options.ciphers || this.ciphers,
    rejectUnauthorized: options.rejectUnauthorized || this.rejectUnauthorized,
    perMessageDeflate: options.perMessageDeflate || this.perMessageDeflate,
    extraHeaders: options.extraHeaders || this.extraHeaders,
    forceNode: options.forceNode || this.forceNode,
    localAddress: options.localAddress || this.localAddress,
    requestTimeout: options.requestTimeout || this.requestTimeout,
    protocols: options.protocols || void (0)
  });

  return transport;
};

function clone (obj) {
  var o = {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = obj[i];
    }
  }
  return o;
}

/**
 * Initializes transport to use and starts probe.
 *
 * @api private
 */
Socket.prototype.open = function () {
  var transport;
  if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') !== -1) {
    transport = 'websocket';
  } else if (0 === this.transports.length) {
    // Emit error on next tick so it can be listened to
    var self = this;
    setTimeout(function () {
      self.emit('error', 'No transports available');
    }, 0);
    return;
  } else {
    transport = this.transports[0];
  }
  this.readyState = 'opening';

  // Retry with the next transport if the transport is disabled (jsonp: false)
  try {
    transport = this.createTransport(transport);
  } catch (e) {
    this.transports.shift();
    this.open();
    return;
  }

  transport.open();
  this.setTransport(transport);
};

/**
 * Sets the current transport. Disables the existing one (if any).
 *
 * @api private
 */

Socket.prototype.setTransport = function (transport) {
  debug('setting transport %s', transport.name);
  var self = this;

  if (this.transport) {
    debug('clearing existing transport %s', this.transport.name);
    this.transport.removeAllListeners();
  }

  // set up transport
  this.transport = transport;

  // set up transport listeners
  transport
  .on('drain', function () {
    self.onDrain();
  })
  .on('packet', function (packet) {
    self.onPacket(packet);
  })
  .on('error', function (e) {
    self.onError(e);
  })
  .on('close', function () {
    self.onClose('transport close');
  });
};

/**
 * Probes a transport.
 *
 * @param {String} transport name
 * @api private
 */

Socket.prototype.probe = function (name) {
  debug('probing transport "%s"', name);
  var transport = this.createTransport(name, { probe: 1 });
  var failed = false;
  var self = this;

  Socket.priorWebsocketSuccess = false;

  function onTransportOpen () {
    if (self.onlyBinaryUpgrades) {
      var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
      failed = failed || upgradeLosesBinary;
    }
    if (failed) return;

    debug('probe transport "%s" opened', name);
    transport.send([{ type: 'ping', data: 'probe' }]);
    transport.once('packet', function (msg) {
      if (failed) return;
      if ('pong' === msg.type && 'probe' === msg.data) {
        debug('probe transport "%s" pong', name);
        self.upgrading = true;
        self.emit('upgrading', transport);
        if (!transport) return;
        Socket.priorWebsocketSuccess = 'websocket' === transport.name;

        debug('pausing current transport "%s"', self.transport.name);
        self.transport.pause(function () {
          if (failed) return;
          if ('closed' === self.readyState) return;
          debug('changing transport and sending upgrade packet');

          cleanup();

          self.setTransport(transport);
          transport.send([{ type: 'upgrade' }]);
          self.emit('upgrade', transport);
          transport = null;
          self.upgrading = false;
          self.flush();
        });
      } else {
        debug('probe transport "%s" failed', name);
        var err = new Error('probe error');
        err.transport = transport.name;
        self.emit('upgradeError', err);
      }
    });
  }

  function freezeTransport () {
    if (failed) return;

    // Any callback called by transport should be ignored since now
    failed = true;

    cleanup();

    transport.close();
    transport = null;
  }

  // Handle any error that happens while probing
  function onerror (err) {
    var error = new Error('probe error: ' + err);
    error.transport = transport.name;

    freezeTransport();

    debug('probe transport "%s" failed because of error: %s', name, err);

    self.emit('upgradeError', error);
  }

  function onTransportClose () {
    onerror('transport closed');
  }

  // When the socket is closed while we're probing
  function onclose () {
    onerror('socket closed');
  }

  // When the socket is upgraded while we're probing
  function onupgrade (to) {
    if (transport && to.name !== transport.name) {
      debug('"%s" works - aborting "%s"', to.name, transport.name);
      freezeTransport();
    }
  }

  // Remove all listeners on the transport and on self
  function cleanup () {
    transport.removeListener('open', onTransportOpen);
    transport.removeListener('error', onerror);
    transport.removeListener('close', onTransportClose);
    self.removeListener('close', onclose);
    self.removeListener('upgrading', onupgrade);
  }

  transport.once('open', onTransportOpen);
  transport.once('error', onerror);
  transport.once('close', onTransportClose);

  this.once('close', onclose);
  this.once('upgrading', onupgrade);

  transport.open();
};

/**
 * Called when connection is deemed open.
 *
 * @api public
 */

Socket.prototype.onOpen = function () {
  debug('socket open');
  this.readyState = 'open';
  Socket.priorWebsocketSuccess = 'websocket' === this.transport.name;
  this.emit('open');
  this.flush();

  // we check for `readyState` in case an `open`
  // listener already closed the socket
  if ('open' === this.readyState && this.upgrade && this.transport.pause) {
    debug('starting upgrade probes');
    for (var i = 0, l = this.upgrades.length; i < l; i++) {
      this.probe(this.upgrades[i]);
    }
  }
};

/**
 * Handles a packet.
 *
 * @api private
 */

Socket.prototype.onPacket = function (packet) {
  if ('opening' === this.readyState || 'open' === this.readyState ||
      'closing' === this.readyState) {
    debug('socket receive: type "%s", data "%s"', packet.type, packet.data);

    this.emit('packet', packet);

    // Socket is live - any packet counts
    this.emit('heartbeat');

    switch (packet.type) {
      case 'open':
        this.onHandshake(JSON.parse(packet.data));
        break;

      case 'pong':
        this.setPing();
        this.emit('pong');
        break;

      case 'error':
        var err = new Error('server error');
        err.code = packet.data;
        this.onError(err);
        break;

      case 'message':
        this.emit('data', packet.data);
        this.emit('message', packet.data);
        break;
    }
  } else {
    debug('packet received with socket readyState "%s"', this.readyState);
  }
};

/**
 * Called upon handshake completion.
 *
 * @param {Object} handshake obj
 * @api private
 */

Socket.prototype.onHandshake = function (data) {
  this.emit('handshake', data);
  this.id = data.sid;
  this.transport.query.sid = data.sid;
  this.upgrades = this.filterUpgrades(data.upgrades);
  this.pingInterval = data.pingInterval;
  this.pingTimeout = data.pingTimeout;
  this.onOpen();
  // In case open handler closes socket
  if ('closed' === this.readyState) return;
  this.setPing();

  // Prolong liveness of socket on heartbeat
  this.removeListener('heartbeat', this.onHeartbeat);
  this.on('heartbeat', this.onHeartbeat);
};

/**
 * Resets ping timeout.
 *
 * @api private
 */

Socket.prototype.onHeartbeat = function (timeout) {
  clearTimeout(this.pingTimeoutTimer);
  var self = this;
  self.pingTimeoutTimer = setTimeout(function () {
    if ('closed' === self.readyState) return;
    self.onClose('ping timeout');
  }, timeout || (self.pingInterval + self.pingTimeout));
};

/**
 * Pings server every `this.pingInterval` and expects response
 * within `this.pingTimeout` or closes connection.
 *
 * @api private
 */

Socket.prototype.setPing = function () {
  var self = this;
  clearTimeout(self.pingIntervalTimer);
  self.pingIntervalTimer = setTimeout(function () {
    debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
    self.ping();
    self.onHeartbeat(self.pingTimeout);
  }, self.pingInterval);
};

/**
* Sends a ping packet.
*
* @api private
*/

Socket.prototype.ping = function () {
  var self = this;
  this.sendPacket('ping', function () {
    self.emit('ping');
  });
};

/**
 * Called on `drain` event
 *
 * @api private
 */

Socket.prototype.onDrain = function () {
  this.writeBuffer.splice(0, this.prevBufferLen);

  // setting prevBufferLen = 0 is very important
  // for example, when upgrading, upgrade packet is sent over,
  // and a nonzero prevBufferLen could cause problems on `drain`
  this.prevBufferLen = 0;

  if (0 === this.writeBuffer.length) {
    this.emit('drain');
  } else {
    this.flush();
  }
};

/**
 * Flush write buffers.
 *
 * @api private
 */

Socket.prototype.flush = function () {
  if ('closed' !== this.readyState && this.transport.writable &&
    !this.upgrading && this.writeBuffer.length) {
    debug('flushing %d packets in socket', this.writeBuffer.length);
    this.transport.send(this.writeBuffer);
    // keep track of current length of writeBuffer
    // splice writeBuffer and callbackBuffer on `drain`
    this.prevBufferLen = this.writeBuffer.length;
    this.emit('flush');
  }
};

/**
 * Sends a message.
 *
 * @param {String} message.
 * @param {Function} callback function.
 * @param {Object} options.
 * @return {Socket} for chaining.
 * @api public
 */

Socket.prototype.write =
Socket.prototype.send = function (msg, options, fn) {
  this.sendPacket('message', msg, options, fn);
  return this;
};

/**
 * Sends a packet.
 *
 * @param {String} packet type.
 * @param {String} data.
 * @param {Object} options.
 * @param {Function} callback function.
 * @api private
 */

Socket.prototype.sendPacket = function (type, data, options, fn) {
  if ('function' === typeof data) {
    fn = data;
    data = undefined;
  }

  if ('function' === typeof options) {
    fn = options;
    options = null;
  }

  if ('closing' === this.readyState || 'closed' === this.readyState) {
    return;
  }

  options = options || {};
  options.compress = false !== options.compress;

  var packet = {
    type: type,
    data: data,
    options: options
  };
  this.emit('packetCreate', packet);
  this.writeBuffer.push(packet);
  if (fn) this.once('flush', fn);
  this.flush();
};

/**
 * Closes the connection.
 *
 * @api private
 */

Socket.prototype.close = function () {
  if ('opening' === this.readyState || 'open' === this.readyState) {
    this.readyState = 'closing';

    var self = this;

    if (this.writeBuffer.length) {
      this.once('drain', function () {
        if (this.upgrading) {
          waitForUpgrade();
        } else {
          close();
        }
      });
    } else if (this.upgrading) {
      waitForUpgrade();
    } else {
      close();
    }
  }

  function close () {
    self.onClose('forced close');
    debug('socket closing - telling transport to close');
    self.transport.close();
  }

  function cleanupAndClose () {
    self.removeListener('upgrade', cleanupAndClose);
    self.removeListener('upgradeError', cleanupAndClose);
    close();
  }

  function waitForUpgrade () {
    // wait for upgrade to finish since we can't send packets while pausing a transport
    self.once('upgrade', cleanupAndClose);
    self.once('upgradeError', cleanupAndClose);
  }

  return this;
};

/**
 * Called upon transport error
 *
 * @api private
 */

Socket.prototype.onError = function (err) {
  debug('socket error %j', err);
  Socket.priorWebsocketSuccess = false;
  this.emit('error', err);
  this.onClose('transport error', err);
};

/**
 * Called upon transport close.
 *
 * @api private
 */

Socket.prototype.onClose = function (reason, desc) {
  if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState) {
    debug('socket close with reason: "%s"', reason);
    var self = this;

    // clear timers
    clearTimeout(this.pingIntervalTimer);
    clearTimeout(this.pingTimeoutTimer);

    // stop event from firing again for transport
    this.transport.removeAllListeners('close');

    // ensure transport won't stay open
    this.transport.close();

    // ignore further transport communication
    this.transport.removeAllListeners();

    // set ready state
    this.readyState = 'closed';

    // clear session id
    this.id = null;

    // emit close event
    this.emit('close', reason, desc);

    // clean buffers after, so users can still
    // grab the buffers on `close` event
    self.writeBuffer = [];
    self.prevBufferLen = 0;
  }
};

/**
 * Filters upgrades, returning only those matching client transports.
 *
 * @param {Array} server upgrades
 * @api private
 *
 */

Socket.prototype.filterUpgrades = function (upgrades) {
  var filteredUpgrades = [];
  for (var i = 0, j = upgrades.length; i < j; i++) {
    if (~index(this.transports, upgrades[i])) filteredUpgrades.push(upgrades[i]);
  }
  return filteredUpgrades;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 120 */
/***/ (function(module, exports) {


/**
 * Module exports.
 *
 * Logic borrowed from Modernizr:
 *
 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
 */

try {
  module.exports = typeof XMLHttpRequest !== 'undefined' &&
    'withCredentials' in new XMLHttpRequest();
} catch (err) {
  // if XMLHttp support is disabled in IE then it will throw
  // when trying to create
  module.exports = false;
}


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Module requirements.
 */

var XMLHttpRequest = __webpack_require__(27);
var Polling = __webpack_require__(52);
var Emitter = __webpack_require__(10);
var inherit = __webpack_require__(19);
var debug = __webpack_require__(20)('engine.io-client:polling-xhr');

/**
 * Module exports.
 */

module.exports = XHR;
module.exports.Request = Request;

/**
 * Empty function
 */

function empty () {}

/**
 * XHR Polling constructor.
 *
 * @param {Object} opts
 * @api public
 */

function XHR (opts) {
  Polling.call(this, opts);
  this.requestTimeout = opts.requestTimeout;
  this.extraHeaders = opts.extraHeaders;

  if (global.location) {
    var isSSL = 'https:' === location.protocol;
    var port = location.port;

    // some user agents have empty `location.port`
    if (!port) {
      port = isSSL ? 443 : 80;
    }

    this.xd = opts.hostname !== global.location.hostname ||
      port !== opts.port;
    this.xs = opts.secure !== isSSL;
  }
}

/**
 * Inherits from Polling.
 */

inherit(XHR, Polling);

/**
 * XHR supports binary
 */

XHR.prototype.supportsBinary = true;

/**
 * Creates a request.
 *
 * @param {String} method
 * @api private
 */

XHR.prototype.request = function (opts) {
  opts = opts || {};
  opts.uri = this.uri();
  opts.xd = this.xd;
  opts.xs = this.xs;
  opts.agent = this.agent || false;
  opts.supportsBinary = this.supportsBinary;
  opts.enablesXDR = this.enablesXDR;

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;
  opts.requestTimeout = this.requestTimeout;

  // other options for Node.js client
  opts.extraHeaders = this.extraHeaders;

  return new Request(opts);
};

/**
 * Sends data.
 *
 * @param {String} data to send.
 * @param {Function} called upon flush.
 * @api private
 */

XHR.prototype.doWrite = function (data, fn) {
  var isBinary = typeof data !== 'string' && data !== undefined;
  var req = this.request({ method: 'POST', data: data, isBinary: isBinary });
  var self = this;
  req.on('success', fn);
  req.on('error', function (err) {
    self.onError('xhr post error', err);
  });
  this.sendXhr = req;
};

/**
 * Starts a poll cycle.
 *
 * @api private
 */

XHR.prototype.doPoll = function () {
  debug('xhr poll');
  var req = this.request();
  var self = this;
  req.on('data', function (data) {
    self.onData(data);
  });
  req.on('error', function (err) {
    self.onError('xhr poll error', err);
  });
  this.pollXhr = req;
};

/**
 * Request constructor
 *
 * @param {Object} options
 * @api public
 */

function Request (opts) {
  this.method = opts.method || 'GET';
  this.uri = opts.uri;
  this.xd = !!opts.xd;
  this.xs = !!opts.xs;
  this.async = false !== opts.async;
  this.data = undefined !== opts.data ? opts.data : null;
  this.agent = opts.agent;
  this.isBinary = opts.isBinary;
  this.supportsBinary = opts.supportsBinary;
  this.enablesXDR = opts.enablesXDR;
  this.requestTimeout = opts.requestTimeout;

  // SSL options for Node.js client
  this.pfx = opts.pfx;
  this.key = opts.key;
  this.passphrase = opts.passphrase;
  this.cert = opts.cert;
  this.ca = opts.ca;
  this.ciphers = opts.ciphers;
  this.rejectUnauthorized = opts.rejectUnauthorized;

  // other options for Node.js client
  this.extraHeaders = opts.extraHeaders;

  this.create();
}

/**
 * Mix in `Emitter`.
 */

Emitter(Request.prototype);

/**
 * Creates the XHR object and sends the request.
 *
 * @api private
 */

Request.prototype.create = function () {
  var opts = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR };

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;

  var xhr = this.xhr = new XMLHttpRequest(opts);
  var self = this;

  try {
    debug('xhr open %s: %s', this.method, this.uri);
    xhr.open(this.method, this.uri, this.async);
    try {
      if (this.extraHeaders) {
        xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
        for (var i in this.extraHeaders) {
          if (this.extraHeaders.hasOwnProperty(i)) {
            xhr.setRequestHeader(i, this.extraHeaders[i]);
          }
        }
      }
    } catch (e) {}

    if ('POST' === this.method) {
      try {
        if (this.isBinary) {
          xhr.setRequestHeader('Content-type', 'application/octet-stream');
        } else {
          xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
        }
      } catch (e) {}
    }

    try {
      xhr.setRequestHeader('Accept', '*/*');
    } catch (e) {}

    // ie6 check
    if ('withCredentials' in xhr) {
      xhr.withCredentials = true;
    }

    if (this.requestTimeout) {
      xhr.timeout = this.requestTimeout;
    }

    if (this.hasXDR()) {
      xhr.onload = function () {
        self.onLoad();
      };
      xhr.onerror = function () {
        self.onError(xhr.responseText);
      };
    } else {
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 2) {
          var contentType;
          try {
            contentType = xhr.getResponseHeader('Content-Type');
          } catch (e) {}
          if (contentType === 'application/octet-stream') {
            xhr.responseType = 'arraybuffer';
          }
        }
        if (4 !== xhr.readyState) return;
        if (200 === xhr.status || 1223 === xhr.status) {
          self.onLoad();
        } else {
          // make sure the `error` event handler that's user-set
          // does not throw in the same tick and gets caught here
          setTimeout(function () {
            self.onError(xhr.status);
          }, 0);
        }
      };
    }

    debug('xhr data %s', this.data);
    xhr.send(this.data);
  } catch (e) {
    // Need to defer since .create() is called directly fhrom the constructor
    // and thus the 'error' event can only be only bound *after* this exception
    // occurs.  Therefore, also, we cannot throw here at all.
    setTimeout(function () {
      self.onError(e);
    }, 0);
    return;
  }

  if (global.document) {
    this.index = Request.requestsCount++;
    Request.requests[this.index] = this;
  }
};

/**
 * Called upon successful response.
 *
 * @api private
 */

Request.prototype.onSuccess = function () {
  this.emit('success');
  this.cleanup();
};

/**
 * Called if we have data.
 *
 * @api private
 */

Request.prototype.onData = function (data) {
  this.emit('data', data);
  this.onSuccess();
};

/**
 * Called upon error.
 *
 * @api private
 */

Request.prototype.onError = function (err) {
  this.emit('error', err);
  this.cleanup(true);
};

/**
 * Cleans up house.
 *
 * @api private
 */

Request.prototype.cleanup = function (fromError) {
  if ('undefined' === typeof this.xhr || null === this.xhr) {
    return;
  }
  // xmlhttprequest
  if (this.hasXDR()) {
    this.xhr.onload = this.xhr.onerror = empty;
  } else {
    this.xhr.onreadystatechange = empty;
  }

  if (fromError) {
    try {
      this.xhr.abort();
    } catch (e) {}
  }

  if (global.document) {
    delete Request.requests[this.index];
  }

  this.xhr = null;
};

/**
 * Called upon load.
 *
 * @api private
 */

Request.prototype.onLoad = function () {
  var data;
  try {
    var contentType;
    try {
      contentType = this.xhr.getResponseHeader('Content-Type');
    } catch (e) {}
    if (contentType === 'application/octet-stream') {
      data = this.xhr.response || this.xhr.responseText;
    } else {
      data = this.xhr.responseText;
    }
  } catch (e) {
    this.onError(e);
  }
  if (null != data) {
    this.onData(data);
  }
};

/**
 * Check if it has XDomainRequest.
 *
 * @api private
 */

Request.prototype.hasXDR = function () {
  return 'undefined' !== typeof global.XDomainRequest && !this.xs && this.enablesXDR;
};

/**
 * Aborts the request.
 *
 * @api public
 */

Request.prototype.abort = function () {
  this.cleanup();
};

/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */

Request.requestsCount = 0;
Request.requests = {};

if (global.document) {
  if (global.attachEvent) {
    global.attachEvent('onunload', unloadHandler);
  } else if (global.addEventListener) {
    global.addEventListener('beforeunload', unloadHandler, false);
  }
}

function unloadHandler () {
  for (var i in Request.requests) {
    if (Request.requests.hasOwnProperty(i)) {
      Request.requests[i].abort();
    }
  }
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 122 */
/***/ (function(module, exports) {


/**
 * Gets the keys for an object.
 *
 * @return {Array} keys
 * @api private
 */

module.exports = Object.keys || function keys (obj){
  var arr = [];
  var has = Object.prototype.hasOwnProperty;

  for (var i in obj) {
    if (has.call(obj, i)) {
      arr.push(i);
    }
  }
  return arr;
};


/***/ }),
/* 123 */
/***/ (function(module, exports) {

/**
 * An abstraction for slicing an arraybuffer even when
 * ArrayBuffer.prototype.slice is not supported
 *
 * @api public
 */

module.exports = function(arraybuffer, start, end) {
  var bytes = arraybuffer.byteLength;
  start = start || 0;
  end = end || bytes;

  if (arraybuffer.slice) { return arraybuffer.slice(start, end); }

  if (start < 0) { start += bytes; }
  if (end < 0) { end += bytes; }
  if (end > bytes) { end = bytes; }

  if (start >= bytes || start >= end || bytes === 0) {
    return new ArrayBuffer(0);
  }

  var abv = new Uint8Array(arraybuffer);
  var result = new Uint8Array(end - start);
  for (var i = start, ii = 0; i < end; i++, ii++) {
    result[ii] = abv[i];
  }
  return result.buffer;
};


/***/ }),
/* 124 */
/***/ (function(module, exports) {

module.exports = after

function after(count, callback, err_cb) {
    var bail = false
    err_cb = err_cb || noop
    proxy.count = count

    return (count === 0) ? callback() : proxy

    function proxy(err, result) {
        if (proxy.count <= 0) {
            throw new Error('after called too many times')
        }
        --proxy.count

        // after first error, rest are passed to err_cb
        if (err) {
            bail = true
            callback(err)
            // future error callbacks will go to error handler
            callback = err_cb
        } else if (proxy.count === 0 && !bail) {
            callback(null, result)
        }
    }
}

function noop() {}


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/utf8js v2.1.2 by @mathias */
;(function(root) {

	// Detect free variables `exports`
	var freeExports = typeof exports == 'object' && exports;

	// Detect free variable `module`
	var freeModule = typeof module == 'object' && module &&
		module.exports == freeExports && module;

	// Detect free variable `global`, from Node.js or Browserified code,
	// and use it as `root`
	var freeGlobal = typeof global == 'object' && global;
	if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
		root = freeGlobal;
	}

	/*--------------------------------------------------------------------------*/

	var stringFromCharCode = String.fromCharCode;

	// Taken from https://mths.be/punycode
	function ucs2decode(string) {
		var output = [];
		var counter = 0;
		var length = string.length;
		var value;
		var extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	// Taken from https://mths.be/punycode
	function ucs2encode(array) {
		var length = array.length;
		var index = -1;
		var value;
		var output = '';
		while (++index < length) {
			value = array[index];
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
		}
		return output;
	}

	function checkScalarValue(codePoint, strict) {
		if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
			if (strict) {
				throw Error(
					'Lone surrogate U+' + codePoint.toString(16).toUpperCase() +
					' is not a scalar value'
				);
			}
			return false;
		}
		return true;
	}
	/*--------------------------------------------------------------------------*/

	function createByte(codePoint, shift) {
		return stringFromCharCode(((codePoint >> shift) & 0x3F) | 0x80);
	}

	function encodeCodePoint(codePoint, strict) {
		if ((codePoint & 0xFFFFFF80) == 0) { // 1-byte sequence
			return stringFromCharCode(codePoint);
		}
		var symbol = '';
		if ((codePoint & 0xFFFFF800) == 0) { // 2-byte sequence
			symbol = stringFromCharCode(((codePoint >> 6) & 0x1F) | 0xC0);
		}
		else if ((codePoint & 0xFFFF0000) == 0) { // 3-byte sequence
			if (!checkScalarValue(codePoint, strict)) {
				codePoint = 0xFFFD;
			}
			symbol = stringFromCharCode(((codePoint >> 12) & 0x0F) | 0xE0);
			symbol += createByte(codePoint, 6);
		}
		else if ((codePoint & 0xFFE00000) == 0) { // 4-byte sequence
			symbol = stringFromCharCode(((codePoint >> 18) & 0x07) | 0xF0);
			symbol += createByte(codePoint, 12);
			symbol += createByte(codePoint, 6);
		}
		symbol += stringFromCharCode((codePoint & 0x3F) | 0x80);
		return symbol;
	}

	function utf8encode(string, opts) {
		opts = opts || {};
		var strict = false !== opts.strict;

		var codePoints = ucs2decode(string);
		var length = codePoints.length;
		var index = -1;
		var codePoint;
		var byteString = '';
		while (++index < length) {
			codePoint = codePoints[index];
			byteString += encodeCodePoint(codePoint, strict);
		}
		return byteString;
	}

	/*--------------------------------------------------------------------------*/

	function readContinuationByte() {
		if (byteIndex >= byteCount) {
			throw Error('Invalid byte index');
		}

		var continuationByte = byteArray[byteIndex] & 0xFF;
		byteIndex++;

		if ((continuationByte & 0xC0) == 0x80) {
			return continuationByte & 0x3F;
		}

		// If we end up here, it’s not a continuation byte
		throw Error('Invalid continuation byte');
	}

	function decodeSymbol(strict) {
		var byte1;
		var byte2;
		var byte3;
		var byte4;
		var codePoint;

		if (byteIndex > byteCount) {
			throw Error('Invalid byte index');
		}

		if (byteIndex == byteCount) {
			return false;
		}

		// Read first byte
		byte1 = byteArray[byteIndex] & 0xFF;
		byteIndex++;

		// 1-byte sequence (no continuation bytes)
		if ((byte1 & 0x80) == 0) {
			return byte1;
		}

		// 2-byte sequence
		if ((byte1 & 0xE0) == 0xC0) {
			byte2 = readContinuationByte();
			codePoint = ((byte1 & 0x1F) << 6) | byte2;
			if (codePoint >= 0x80) {
				return codePoint;
			} else {
				throw Error('Invalid continuation byte');
			}
		}

		// 3-byte sequence (may include unpaired surrogates)
		if ((byte1 & 0xF0) == 0xE0) {
			byte2 = readContinuationByte();
			byte3 = readContinuationByte();
			codePoint = ((byte1 & 0x0F) << 12) | (byte2 << 6) | byte3;
			if (codePoint >= 0x0800) {
				return checkScalarValue(codePoint, strict) ? codePoint : 0xFFFD;
			} else {
				throw Error('Invalid continuation byte');
			}
		}

		// 4-byte sequence
		if ((byte1 & 0xF8) == 0xF0) {
			byte2 = readContinuationByte();
			byte3 = readContinuationByte();
			byte4 = readContinuationByte();
			codePoint = ((byte1 & 0x07) << 0x12) | (byte2 << 0x0C) |
				(byte3 << 0x06) | byte4;
			if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
				return codePoint;
			}
		}

		throw Error('Invalid UTF-8 detected');
	}

	var byteArray;
	var byteCount;
	var byteIndex;
	function utf8decode(byteString, opts) {
		opts = opts || {};
		var strict = false !== opts.strict;

		byteArray = ucs2decode(byteString);
		byteCount = byteArray.length;
		byteIndex = 0;
		var codePoints = [];
		var tmp;
		while ((tmp = decodeSymbol(strict)) !== false) {
			codePoints.push(tmp);
		}
		return ucs2encode(codePoints);
	}

	/*--------------------------------------------------------------------------*/

	var utf8 = {
		'version': '2.1.2',
		'encode': utf8encode,
		'decode': utf8decode
	};

	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return utf8;
		}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}	else if (freeExports && !freeExports.nodeType) {
		if (freeModule) { // in Node.js or RingoJS v0.8.0+
			freeModule.exports = utf8;
		} else { // in Narwhal or RingoJS v0.7.0-
			var object = {};
			var hasOwnProperty = object.hasOwnProperty;
			for (var key in utf8) {
				hasOwnProperty.call(utf8, key) && (freeExports[key] = utf8[key]);
			}
		}
	} else { // in Rhino or a web browser
		root.utf8 = utf8;
	}

}(this));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(126)(module), __webpack_require__(0)))

/***/ }),
/* 126 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 127 */
/***/ (function(module, exports) {

/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */
(function(){
  "use strict";

  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

  // Use a lookup table to find the index.
  var lookup = new Uint8Array(256);
  for (var i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
  }

  exports.encode = function(arraybuffer) {
    var bytes = new Uint8Array(arraybuffer),
    i, len = bytes.length, base64 = "";

    for (i = 0; i < len; i+=3) {
      base64 += chars[bytes[i] >> 2];
      base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
      base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
      base64 += chars[bytes[i + 2] & 63];
    }

    if ((len % 3) === 2) {
      base64 = base64.substring(0, base64.length - 1) + "=";
    } else if (len % 3 === 1) {
      base64 = base64.substring(0, base64.length - 2) + "==";
    }

    return base64;
  };

  exports.decode =  function(base64) {
    var bufferLength = base64.length * 0.75,
    len = base64.length, i, p = 0,
    encoded1, encoded2, encoded3, encoded4;

    if (base64[base64.length - 1] === "=") {
      bufferLength--;
      if (base64[base64.length - 2] === "=") {
        bufferLength--;
      }
    }

    var arraybuffer = new ArrayBuffer(bufferLength),
    bytes = new Uint8Array(arraybuffer);

    for (i = 0; i < len; i+=4) {
      encoded1 = lookup[base64.charCodeAt(i)];
      encoded2 = lookup[base64.charCodeAt(i+1)];
      encoded3 = lookup[base64.charCodeAt(i+2)];
      encoded4 = lookup[base64.charCodeAt(i+3)];

      bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
      bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
      bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
    }

    return arraybuffer;
  };
})();


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Create a blob builder even when vendor prefixes exist
 */

var BlobBuilder = global.BlobBuilder
  || global.WebKitBlobBuilder
  || global.MSBlobBuilder
  || global.MozBlobBuilder;

/**
 * Check if Blob constructor is supported
 */

var blobSupported = (function() {
  try {
    var a = new Blob(['hi']);
    return a.size === 2;
  } catch(e) {
    return false;
  }
})();

/**
 * Check if Blob constructor supports ArrayBufferViews
 * Fails in Safari 6, so we need to map to ArrayBuffers there.
 */

var blobSupportsArrayBufferView = blobSupported && (function() {
  try {
    var b = new Blob([new Uint8Array([1,2])]);
    return b.size === 2;
  } catch(e) {
    return false;
  }
})();

/**
 * Check if BlobBuilder is supported
 */

var blobBuilderSupported = BlobBuilder
  && BlobBuilder.prototype.append
  && BlobBuilder.prototype.getBlob;

/**
 * Helper function that maps ArrayBufferViews to ArrayBuffers
 * Used by BlobBuilder constructor and old browsers that didn't
 * support it in the Blob constructor.
 */

function mapArrayBufferViews(ary) {
  for (var i = 0; i < ary.length; i++) {
    var chunk = ary[i];
    if (chunk.buffer instanceof ArrayBuffer) {
      var buf = chunk.buffer;

      // if this is a subarray, make a copy so we only
      // include the subarray region from the underlying buffer
      if (chunk.byteLength !== buf.byteLength) {
        var copy = new Uint8Array(chunk.byteLength);
        copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength));
        buf = copy.buffer;
      }

      ary[i] = buf;
    }
  }
}

function BlobBuilderConstructor(ary, options) {
  options = options || {};

  var bb = new BlobBuilder();
  mapArrayBufferViews(ary);

  for (var i = 0; i < ary.length; i++) {
    bb.append(ary[i]);
  }

  return (options.type) ? bb.getBlob(options.type) : bb.getBlob();
};

function BlobConstructor(ary, options) {
  mapArrayBufferViews(ary);
  return new Blob(ary, options || {});
};

module.exports = (function() {
  if (blobSupported) {
    return blobSupportsArrayBufferView ? global.Blob : BlobConstructor;
  } else if (blobBuilderSupported) {
    return BlobBuilderConstructor;
  } else {
    return undefined;
  }
})();

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(47);

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
/**
 * Module requirements.
 */

var Polling = __webpack_require__(52);
var inherit = __webpack_require__(19);

/**
 * Module exports.
 */

module.exports = JSONPPolling;

/**
 * Cached regular expressions.
 */

var rNewline = /\n/g;
var rEscapedNewline = /\\n/g;

/**
 * Global JSONP callbacks.
 */

var callbacks;

/**
 * Noop.
 */

function empty () { }

/**
 * JSONP Polling constructor.
 *
 * @param {Object} opts.
 * @api public
 */

function JSONPPolling (opts) {
  Polling.call(this, opts);

  this.query = this.query || {};

  // define global callbacks array if not present
  // we do this here (lazily) to avoid unneeded global pollution
  if (!callbacks) {
    // we need to consider multiple engines in the same page
    if (!global.___eio) global.___eio = [];
    callbacks = global.___eio;
  }

  // callback identifier
  this.index = callbacks.length;

  // add callback to jsonp global
  var self = this;
  callbacks.push(function (msg) {
    self.onData(msg);
  });

  // append to query string
  this.query.j = this.index;

  // prevent spurious errors from being emitted when the window is unloaded
  if (global.document && global.addEventListener) {
    global.addEventListener('beforeunload', function () {
      if (self.script) self.script.onerror = empty;
    }, false);
  }
}

/**
 * Inherits from Polling.
 */

inherit(JSONPPolling, Polling);

/*
 * JSONP only supports binary as base64 encoded strings
 */

JSONPPolling.prototype.supportsBinary = false;

/**
 * Closes the socket.
 *
 * @api private
 */

JSONPPolling.prototype.doClose = function () {
  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  if (this.form) {
    this.form.parentNode.removeChild(this.form);
    this.form = null;
    this.iframe = null;
  }

  Polling.prototype.doClose.call(this);
};

/**
 * Starts a poll cycle.
 *
 * @api private
 */

JSONPPolling.prototype.doPoll = function () {
  var self = this;
  var script = document.createElement('script');

  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  script.async = true;
  script.src = this.uri();
  script.onerror = function (e) {
    self.onError('jsonp poll error', e);
  };

  var insertAt = document.getElementsByTagName('script')[0];
  if (insertAt) {
    insertAt.parentNode.insertBefore(script, insertAt);
  } else {
    (document.head || document.body).appendChild(script);
  }
  this.script = script;

  var isUAgecko = 'undefined' !== typeof navigator && /gecko/i.test(navigator.userAgent);

  if (isUAgecko) {
    setTimeout(function () {
      var iframe = document.createElement('iframe');
      document.body.appendChild(iframe);
      document.body.removeChild(iframe);
    }, 100);
  }
};

/**
 * Writes with a hidden iframe.
 *
 * @param {String} data to send
 * @param {Function} called upon flush.
 * @api private
 */

JSONPPolling.prototype.doWrite = function (data, fn) {
  var self = this;

  if (!this.form) {
    var form = document.createElement('form');
    var area = document.createElement('textarea');
    var id = this.iframeId = 'eio_iframe_' + this.index;
    var iframe;

    form.className = 'socketio';
    form.style.position = 'absolute';
    form.style.top = '-1000px';
    form.style.left = '-1000px';
    form.target = id;
    form.method = 'POST';
    form.setAttribute('accept-charset', 'utf-8');
    area.name = 'd';
    form.appendChild(area);
    document.body.appendChild(form);

    this.form = form;
    this.area = area;
  }

  this.form.action = this.uri();

  function complete () {
    initIframe();
    fn();
  }

  function initIframe () {
    if (self.iframe) {
      try {
        self.form.removeChild(self.iframe);
      } catch (e) {
        self.onError('jsonp polling iframe removal error', e);
      }
    }

    try {
      // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
      var html = '<iframe src="javascript:0" name="' + self.iframeId + '">';
      iframe = document.createElement(html);
    } catch (e) {
      iframe = document.createElement('iframe');
      iframe.name = self.iframeId;
      iframe.src = 'javascript:0';
    }

    iframe.id = self.iframeId;

    self.form.appendChild(iframe);
    self.iframe = iframe;
  }

  initIframe();

  // escape \n to prevent it from being converted into \r\n by some UAs
  // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side
  data = data.replace(rEscapedNewline, '\\\n');
  this.area.value = data.replace(rNewline, '\\n');

  try {
    this.form.submit();
  } catch (e) {}

  if (this.iframe.attachEvent) {
    this.iframe.onreadystatechange = function () {
      if (self.iframe.readyState === 'complete') {
        complete();
      }
    };
  } else {
    this.iframe.onload = complete;
  }
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Module dependencies.
 */

var Transport = __webpack_require__(28);
var parser = __webpack_require__(11);
var parseqs = __webpack_require__(18);
var inherit = __webpack_require__(19);
var yeast = __webpack_require__(53);
var debug = __webpack_require__(20)('engine.io-client:websocket');
var BrowserWebSocket = global.WebSocket || global.MozWebSocket;
var NodeWebSocket;
if (typeof window === 'undefined') {
  try {
    NodeWebSocket = __webpack_require__(132);
  } catch (e) { }
}

/**
 * Get either the `WebSocket` or `MozWebSocket` globals
 * in the browser or try to resolve WebSocket-compatible
 * interface exposed by `ws` for Node-like environment.
 */

var WebSocket = BrowserWebSocket;
if (!WebSocket && typeof window === 'undefined') {
  WebSocket = NodeWebSocket;
}

/**
 * Module exports.
 */

module.exports = WS;

/**
 * WebSocket transport constructor.
 *
 * @api {Object} connection options
 * @api public
 */

function WS (opts) {
  var forceBase64 = (opts && opts.forceBase64);
  if (forceBase64) {
    this.supportsBinary = false;
  }
  this.perMessageDeflate = opts.perMessageDeflate;
  this.usingBrowserWebSocket = BrowserWebSocket && !opts.forceNode;
  this.protocols = opts.protocols;
  if (!this.usingBrowserWebSocket) {
    WebSocket = NodeWebSocket;
  }
  Transport.call(this, opts);
}

/**
 * Inherits from Transport.
 */

inherit(WS, Transport);

/**
 * Transport name.
 *
 * @api public
 */

WS.prototype.name = 'websocket';

/*
 * WebSockets support binary
 */

WS.prototype.supportsBinary = true;

/**
 * Opens socket.
 *
 * @api private
 */

WS.prototype.doOpen = function () {
  if (!this.check()) {
    // let probe timeout
    return;
  }

  var uri = this.uri();
  var protocols = this.protocols;
  var opts = {
    agent: this.agent,
    perMessageDeflate: this.perMessageDeflate
  };

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;
  if (this.extraHeaders) {
    opts.headers = this.extraHeaders;
  }
  if (this.localAddress) {
    opts.localAddress = this.localAddress;
  }

  try {
    this.ws = this.usingBrowserWebSocket ? (protocols ? new WebSocket(uri, protocols) : new WebSocket(uri)) : new WebSocket(uri, protocols, opts);
  } catch (err) {
    return this.emit('error', err);
  }

  if (this.ws.binaryType === undefined) {
    this.supportsBinary = false;
  }

  if (this.ws.supports && this.ws.supports.binary) {
    this.supportsBinary = true;
    this.ws.binaryType = 'nodebuffer';
  } else {
    this.ws.binaryType = 'arraybuffer';
  }

  this.addEventListeners();
};

/**
 * Adds event listeners to the socket
 *
 * @api private
 */

WS.prototype.addEventListeners = function () {
  var self = this;

  this.ws.onopen = function () {
    self.onOpen();
  };
  this.ws.onclose = function () {
    self.onClose();
  };
  this.ws.onmessage = function (ev) {
    self.onData(ev.data);
  };
  this.ws.onerror = function (e) {
    self.onError('websocket error', e);
  };
};

/**
 * Writes data to socket.
 *
 * @param {Array} array of packets.
 * @api private
 */

WS.prototype.write = function (packets) {
  var self = this;
  this.writable = false;

  // encodePacket efficient as it uses WS framing
  // no need for encodePayload
  var total = packets.length;
  for (var i = 0, l = total; i < l; i++) {
    (function (packet) {
      parser.encodePacket(packet, self.supportsBinary, function (data) {
        if (!self.usingBrowserWebSocket) {
          // always create a new object (GH-437)
          var opts = {};
          if (packet.options) {
            opts.compress = packet.options.compress;
          }

          if (self.perMessageDeflate) {
            var len = 'string' === typeof data ? global.Buffer.byteLength(data) : data.length;
            if (len < self.perMessageDeflate.threshold) {
              opts.compress = false;
            }
          }
        }

        // Sometimes the websocket has already been closed but the browser didn't
        // have a chance of informing us about it yet, in that case send will
        // throw an error
        try {
          if (self.usingBrowserWebSocket) {
            // TypeError is thrown when passing the second argument on Safari
            self.ws.send(data);
          } else {
            self.ws.send(data, opts);
          }
        } catch (e) {
          debug('websocket closed before onclose event');
        }

        --total || done();
      });
    })(packets[i]);
  }

  function done () {
    self.emit('flush');

    // fake drain
    // defer to next tick to allow Socket to clear writeBuffer
    setTimeout(function () {
      self.writable = true;
      self.emit('drain');
    }, 0);
  }
};

/**
 * Called upon close
 *
 * @api private
 */

WS.prototype.onClose = function () {
  Transport.prototype.onClose.call(this);
};

/**
 * Closes socket.
 *
 * @api private
 */

WS.prototype.doClose = function () {
  if (typeof this.ws !== 'undefined') {
    this.ws.close();
  }
};

/**
 * Generates uri for connection.
 *
 * @api private
 */

WS.prototype.uri = function () {
  var query = this.query || {};
  var schema = this.secure ? 'wss' : 'ws';
  var port = '';

  // avoid port if default for schema
  if (this.port && (('wss' === schema && Number(this.port) !== 443) ||
    ('ws' === schema && Number(this.port) !== 80))) {
    port = ':' + this.port;
  }

  // append timestamp to URI
  if (this.timestampRequests) {
    query[this.timestampParam] = yeast();
  }

  // communicate binary support capabilities
  if (!this.supportsBinary) {
    query.b64 = 1;
  }

  query = parseqs.encode(query);

  // prepend ? to query
  if (query.length) {
    query = '?' + query;
  }

  var ipv6 = this.hostname.indexOf(':') !== -1;
  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
};

/**
 * Feature detection for WebSocket.
 *
 * @return {Boolean} whether this transport is available.
 * @api public
 */

WS.prototype.check = function () {
  return !!WebSocket && !('__initialize' in WebSocket && this.name === WS.prototype.name);
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 132 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 133 */
/***/ (function(module, exports) {

module.exports = toArray

function toArray(list, index) {
    var array = []

    index = index || 0

    for (var i = index || 0; i < list.length; i++) {
        array[i - index] = list[i]
    }

    return array
}


/***/ }),
/* 134 */
/***/ (function(module, exports) {


/**
 * Expose `Backoff`.
 */

module.exports = Backoff;

/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */

function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 10000;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}

/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */

Backoff.prototype.duration = function(){
  var ms = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var rand =  Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0  ? ms - deviation : ms + deviation;
  }
  return Math.min(ms, this.max) | 0;
};

/**
 * Reset the number of attempts.
 *
 * @api public
 */

Backoff.prototype.reset = function(){
  this.attempts = 0;
};

/**
 * Set the minimum duration
 *
 * @api public
 */

Backoff.prototype.setMin = function(min){
  this.ms = min;
};

/**
 * Set the maximum duration
 *
 * @api public
 */

Backoff.prototype.setMax = function(max){
  this.max = max;
};

/**
 * Set the jitter
 *
 * @api public
 */

Backoff.prototype.setJitter = function(jitter){
  this.jitter = jitter;
};



/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Snap = /** @class */ (function () {
    function Snap(userId, username, x, y, tnkAng, trrAng, isShoot, health) {
        this.userId = userId;
        this.username = username;
        this.position = {
            valX: x,
            valY: y
        };
        this.tankAngle = tnkAng;
        this.turretAngle = trrAng;
        this.isShoot = isShoot;
        this.health = health;
    }
    Object.defineProperty(Snap.prototype, "playerSnap", {
        get: function () {
            return {
                platform: this.position,
                platformAngle: this.tankAngle,
                turretAngle: this.turretAngle,
                class: "TankSnap",
                userId: this.userId,
                username: this.username,
                isShoot: this.isShoot,
                health: this.health
            };
        },
        enumerable: true,
        configurable: true
    });
    return Snap;
}());
exports.default = Snap;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SpawnRequest = /** @class */ (function () {
    function SpawnRequest(userId, username) {
        this.userId = userId;
        this.username = username;
    }
    Object.defineProperty(SpawnRequest.prototype, "spawnSnap", {
        get: function () {
            return {
                class: "SpawnRequest",
                userId: this.userId,
                username: this.username
            };
        },
        enumerable: true,
        configurable: true
    });
    return SpawnRequest;
}());
exports.default = SpawnRequest;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Bullet_1 = __webpack_require__(58);
var TankBullet = /** @class */ (function (_super) {
    __extends(TankBullet, _super);
    function TankBullet(game) {
        var _this = _super.call(this, game, 0, 0) || this;
        _this.game = game;
        _this.create();
        return _this;
    }
    TankBullet.prototype.create = function () {
        this.tankBullets = this.game.add.group();
        this.tankBullets.enableBody = true;
        this.game.physics.arcade.enable(this.tankBullets);
        this.tankBullets.createMultiple(30, 'bullet');
        this.tankBullets.setAll('anchor.x', 0.5);
        this.tankBullets.setAll('anchor.y', 0.5);
        this.tankBullets.setAll('outOfBoundsKill', true);
        this.tankBullets.setAll('checkWorldBounds', true);
    };
    TankBullet.prototype.createBullet = function (xCoord, yCoord, id) {
        this.bullet = this.tankBullets.create(xCoord, yCoord, 'bullet');
        // this.bullet.anchor.setTo(0.5, 0.5);
        this.bullet.name = id.toString();
        this.bullet.body.immovable = true;
    };
    TankBullet.prototype.bulletHitEnemy = function (enemyTank, bullet) {
        bullet.kill();
        var explosionAnimation = this.explosions.getFirstExists(false);
        explosionAnimation.reset(enemyTank.x, enemyTank.y);
        // explosionAnimation.reset(800, 500);
        explosionAnimation.play('kaboom', 30, false, true);
    };
    return TankBullet;
}(Bullet_1.default));
exports.default = TankBullet;


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Bullet_1 = __webpack_require__(58);
var EnemyBullet = /** @class */ (function (_super) {
    __extends(EnemyBullet, _super);
    function EnemyBullet(game) {
        var _this = _super.call(this, game, 0, 0) || this;
        _this.game = game;
        _this.create();
        return _this;
    }
    EnemyBullet.prototype.create = function () {
        this.enemyBullets = this.game.add.group();
        this.enemyBullets.enableBody = true;
        this.game.physics.arcade.enable(this.enemyBullets);
        this.enemyBullets.createMultiple(30, 'bullet');
        this.enemyBullets.setAll('anchor.x', 0.5);
        this.enemyBullets.setAll('anchor.y', 0.5);
        this.enemyBullets.setAll('outOfBoundsKill', true);
        this.enemyBullets.setAll('checkWorldBounds', true);
    };
    EnemyBullet.prototype.createBullet = function (xCoord, yCoord, id) {
        this.bullet = this.enemyBullets.create(xCoord, yCoord, 'box_tree');
        // this.bullet.anchor.setTo(0.5, 0.5);
        this.bullet.name = id.toString();
        this.bullet.body.immovable = true;
    };
    EnemyBullet.prototype.bulletHitTank = function (tank, bullet) {
        bullet.kill();
        var explosionAnimation = this.explosions.getFirstExists(false);
        // explosionAnimation.reset(800, 500);
        explosionAnimation.reset(tank.x, tank.y);
        explosionAnimation.play('kaboom', 30, false, true);
    };
    return EnemyBullet;
}(Bullet_1.default));
exports.default = EnemyBullet;


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Enemy_1 = __webpack_require__(140);
var EnemyTanks = /** @class */ (function () {
    function EnemyTanks(game) {
        this.game = game;
        this.create();
    }
    EnemyTanks.prototype.create = function () {
        this.enemyTanks = this.game.add.group();
        this.enemyTanks.enableBody = true;
        this.game.physics.arcade.enable(this.enemyTanks);
    };
    EnemyTanks.prototype.createEnemyTank = function (xCoord, yCoord, id, title) {
        this.enemy = new Enemy_1.default(this.game, id, title);
        this.enemy._tank.currentPosition = {
            xCoordinate: xCoord,
            yCoordinate: yCoord
        };
        this.enemy = this.enemyTanks.add(this.enemy);
        // this.enemy["name"] = id.toString();
    };
    return EnemyTanks;
}());
exports.default = EnemyTanks;


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var TankBody_1 = __webpack_require__(41);
var TankTurret_1 = __webpack_require__(42);
var Lable_1 = __webpack_require__(43);
var HealthBar = __webpack_require__(44);
var TankState = /** @class */ (function (_super) {
    __extends(TankState, _super);
    function TankState(game, uid, title) {
        var _this = _super.call(this, game, 0, 0) || this;
        _this._game = game;
        _this._xPosition = Math.random() * _this.game.world.width;
        _this._yPosition = Math.random() * _this.game.world.height;
        _this._health = 100;
        _this._fireRate = 1000; // скорострельность
        _this._nextFire = 0; //следующий выстрел
        _this._alive = true;
        _this._title = title;
        _this._uid = uid;
        _this.create();
        return _this;
    }
    TankState.prototype.create = function () {
        this._cursor = this._game.input.keyboard.createCursorKeys();
        this._tank = new TankBody_1.default(this._game, this._cursor);
        this._turret = new TankTurret_1.default(this._game, this._cursor);
        this._tankLable = new Lable_1.default(this._game, this._tank.currentPosition, this._title, 1);
        this._healthBar = new HealthBar(this._game, { x: this._tank.currentPosition.xCoordinate, y: this._tank.currentPosition.yCoordinate, width: 100, height: 10 });
        this._healthBar.setPosition(this._tank.currentPosition.xCoordinate, this._tank.currentPosition.yCoordinate);
    };
    TankState.prototype.update = function () {
        this._turret.turretCoordinate = this._tank.currentPosition;
        this._tankLable.currentPosition = this._tank.currentPosition;
        this._healthBar.setPosition(this._tank.currentPosition.xCoordinate, this._tank.currentPosition.yCoordinate - 50);
    };
    TankState.prototype.kill = function () {
        this._tank.kill();
        this._turret.kill();
        this._tankLable.kill();
        this._healthBar.kill();
    };
    Object.defineProperty(TankState.prototype, "health", {
        get: function () {
            return this._health;
        },
        set: function (health) {
            this._health = health;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TankState.prototype, "tankBody", {
        get: function () {
            return this._tank;
        },
        enumerable: true,
        configurable: true
    });
    return TankState;
}(Phaser.Sprite));
exports.default = TankState;


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TankLanding = /** @class */ (function () {
    function TankLanding(game) {
        this.game = game;
        this.create();
    }
    TankLanding.prototype.create = function () {
        this.playses = this.game.add.group();
        this.playses.setAll('anchor.x', 0.5);
        this.playses.setAll('anchor.y', 0.5);
    };
    TankLanding.prototype.createLanding = function (xCoord, yCoord, id) {
        this.land = this.playses.create(xCoord, yCoord, 'tankLandingArea');
        this.land.anchor.setTo(0.5, 0.5);
        this.land.name = id.toString();
    };
    return TankLanding;
}());
exports.default = TankLanding;


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StaticList = /** @class */ (function () {
    function StaticList(game, ownerId) {
        this.game = game;
        this.list = this.game.add.group();
        this._uid = ownerId;
        this._statisticList = [];
        this.create();
    }
    StaticList.prototype.create = function () {
        var nameText = this.game.make.text(this.game.width - 300, 10, '   STATISTICS', { font: "bold 26px Courier New", fill: '#db0e59', boundsAlignH: "center", boundsAlignV: "middle" });
        nameText.stroke = '#000000';
        nameText.strokeThickness = 4;
        this.list.add(nameText);
        var headerText = this.game.make.text(this.game.width - 300, 40, '№  USERNAME  KILLS', { font: "bold 22px Courier New", fill: '#d566db', boundsAlignH: "center", boundsAlignV: "middle" });
        headerText.stroke = '#000000';
        headerText.strokeThickness = 3;
        this.list.add(headerText);
    };
    StaticList.prototype.addLine = function (dataString, yPosition) {
        var statistictext = this.game.make.text(this.game.width - 300, yPosition, dataString, { font: "bold 22px Courier New", fill: '#9370DB', boundsAlignH: "center", boundsAlignV: "middle" });
        statistictext.stroke = '#000000';
        statistictext.strokeThickness = 2;
        this.list.add(statistictext);
    };
    StaticList.prototype.updateList = function (statistics, kills) {
        if (kills === null) {
            kills = 0;
        }
        for (var i = 0; i < this.list.children.length; i++) {
            this.list.children[i].kill();
        }
        this.create();
        for (var i = 0; i < statistics.length; i++) {
            var name = statistics[i].username;
            if (name.length > 10) {
                name = name.slice(0, 3) + '...' + name.slice(name.length - 3, name.length);
            }
            else if (name.length < 10) {
                name += Array(10 - name.length).join(' ');
            }
            this.addLine(i + 1 + ". " + name + "  " + statistics[i].kills, ((i + 1) + 2) * 22);
        }
        this.addLine("            KILLS: " + kills, this.game.height - 30);
        this.list.fixedToCamera = true;
    };
    return StaticList;
}());
exports.default = StaticList;


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import Phaser from '../../phaser.min'

var PauseMenu = function (_Phaser$State) {
    _inherits(PauseMenu, _Phaser$State);

    function PauseMenu() {
        _classCallCheck(this, PauseMenu);

        var _this = _possibleConstructorReturn(this, (PauseMenu.__proto__ || Object.getPrototypeOf(PauseMenu)).call(this));

        _this.background = Phaser.Sprite;
        _this.logo = Phaser.Sprite;
        return _this;
    }

    _createClass(PauseMenu, [{
        key: 'preload',
        value: function preload() {
            this.load.image('background', 'static/staticsGame/images/white_background.jpg');
            this.load.spritesheet('pause_logo', 'static/staticsGame/images/pause_logo.png');
            this.load.spritesheet('continue', 'static/staticsGame/images/continue_button.png');
            this.load.spritesheet('exit', 'static/staticsGame/images/exit_button.png');
        }
    }, {
        key: 'create',
        value: function create() {

            this.background = this.add.sprite(0, 0, 'background');

            this.logo = this.add.sprite(this.world.centerX, -300, 'pause_logo');
            this.logo.anchor.setTo(0.5, 0.5);

            this.continueButton = this.game.add.button(this.world.centerX, this.world.centerY, "continue", this.continueGame, this);
            this.continueButton.anchor.setTo(0.5);
            this.continueButton.scale.setTo(0.5);
            this.continueButton.frame = 1;
            this.continueButton.clicked = false;
            this.continueButton.alpha = 0;

            this.exitButton = this.game.add.button(this.world.centerX, this.world.centerY + 100, "exit", this.exitGame, this);
            this.exitButton.anchor.setTo(0.5);
            this.exitButton.scale.setTo(0.5);
            this.exitButton.frame = 1;
            this.exitButton.clicked = false;
            this.exitButton.alpha = 0;

            this.add.tween(this.background).to({ alpha: 1 }, 100, Phaser.Easing.Bounce.InOut, true);
            this.add.tween(this.logo).to({ y: 100 }, 2000, Phaser.Easing.Elastic.Out, true, 200);
            this.add.tween(this.continueButton).to({ alpha: 1 }, 1000, Phaser.Easing.Bounce.InOut, true);
            this.add.tween(this.exitButton).to({ alpha: 1 }, 1000, Phaser.Easing.Bounce.InOut, true);
        }
    }, {
        key: 'continueGame',
        value: function continueGame() {
            this.add.tween(this.background).to({ alpha: 0 }, 100, Phaser.Easing.Linear.None, true);
            this.game.state.start('World', true, false);
        }
    }, {
        key: 'exitGame',
        value: function exitGame() {
            this.add.tween(this.background).to({ alpha: 0 }, 100, Phaser.Easing.Linear.None, true);
            window.open("/", "_self");
        }
    }]);

    return PauseMenu;
}(Phaser.State);

exports.default = PauseMenu;

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Constant = __webpack_require__(59);

var _Constant2 = _interopRequireDefault(_Constant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // import Phaser from '../../phaser.min'


var GameOverMenu = function (_Phaser$State) {
    _inherits(GameOverMenu, _Phaser$State);

    function GameOverMenu() {
        _classCallCheck(this, GameOverMenu);

        var _this = _possibleConstructorReturn(this, (GameOverMenu.__proto__ || Object.getPrototypeOf(GameOverMenu)).call(this));

        _this.background = Phaser.Sprite;
        _this.logo = Phaser.Sprite;
        return _this;
    }

    _createClass(GameOverMenu, [{
        key: 'preload',
        value: function preload() {
            this.load.image('background', 'static/staticsGame/images/white_background.jpg');
            this.load.spritesheet('game_over', 'static/staticsGame/images/gameover_logo.png');
            this.load.spritesheet('try_again', 'static/staticsGame/images/try_again_button.png');
            this.load.spritesheet('exit', 'static/staticsGame/images/exit_button.png');
        }
    }, {
        key: 'create',
        value: function create() {

            this.background = this.add.sprite(0, 0, 'background');

            this.logo = this.add.sprite(this.world.centerX, -300, 'game_over');
            this.logo.anchor.setTo(_Constant2.default.anchor, _Constant2.default.anchor);

            this.continueButton = this.game.add.button(this.world.centerX, this.world.centerY, "try_again", this.continueGame, this);
            this.continueButton.anchor.setTo(_Constant2.default.anchor);
            this.continueButton.scale.setTo(_Constant2.default.logo_scale);
            this.continueButton.frame = 1;
            this.continueButton.clicked = false;
            this.continueButton.alpha = 0;

            this.exitButton = this.game.add.button(this.world.centerX, this.world.centerY + 100, "exit", this.exitGame, this);
            this.exitButton.anchor.setTo(_Constant2.default.anchor);
            this.exitButton.scale.setTo(_Constant2.default.logo_scale);
            this.exitButton.frame = 1;
            this.exitButton.clicked = false;
            this.exitButton.alpha = 0;

            this.add.tween(this.background).to({ alpha: 1 }, _Constant2.default.shadow_time, Phaser.Easing.Bounce.InOut, true);
            this.add.tween(this.logo).to({ y: 100 }, _Constant2.default.shadow_time, Phaser.Easing.Elastic.Out, true, 200);
            this.add.tween(this.continueButton).to({ alpha: 1 }, _Constant2.default.shadow_time, Phaser.Easing.Bounce.InOut, true);
            this.add.tween(this.exitButton).to({ alpha: 1 }, _Constant2.default.shadow_time, Phaser.Easing.Bounce.InOut, true);
        }
    }, {
        key: 'continueGame',
        value: function continueGame() {
            this.add.tween(this.background).to({ alpha: 0 }, _Constant2.default.shadow_time, Phaser.Easing.Linear.None, true);
            this.game.state.start('world', true, false);
        }
    }, {
        key: 'exitGame',
        value: function exitGame() {
            this.add.tween(this.background).to({ alpha: 0 }, _Constant2.default.shadow_time, Phaser.Easing.Linear.None, true);
            window.open("/", "_self");
        }
    }]);

    return GameOverMenu;
}(Phaser.State);

exports.default = GameOverMenu;

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EnemyTank = __webpack_require__(146);

var _EnemyTank2 = _interopRequireDefault(_EnemyTank);

var _Constant = __webpack_require__(59);

var _Constant2 = _interopRequireDefault(_Constant);

var _ControllSettings = __webpack_require__(5);

var _ControllSettings2 = _interopRequireDefault(_ControllSettings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // import Phaser from '../../phaser.min';


var World = function (_Phaser$State) {
	_inherits(World, _Phaser$State);

	function World() {
		_classCallCheck(this, World);

		var _this = _possibleConstructorReturn(this, (World.__proto__ || Object.getPrototypeOf(World)).call(this));

		_this.background = Phaser.Sprite;
		_this.music = Phaser.Sound;
		return _this;
	}

	_createClass(World, [{
		key: 'preload',
		value: function preload() {
			this.load.atlas('tank', 'static/staticsGame/images/tanks.png', 'static/staticsGame/images/tanks.json');
			this.load.atlas('enemy', 'static/staticsGame/images/enemy-tanks.png', 'static/staticsGame/images/tanks.json');
			this.load.image('logo', 'static/staticsGame/images/logo.png');
			this.load.image('bullet', 'static/staticsGame/images/bullet.png');
			this.load.image('earth', 'static/staticsGame/images/ground.jpg');
			this.load.spritesheet('kaboom', 'static/staticsGame/images/explosion.png', 64, 64, 23);

			this.load.image('pause', 'static/img/home.png');
			this.load.image('box_tree', 'static/staticsGame/images/box_tree.png');
		}
	}, {
		key: 'create',
		value: function create() {
			this.music = this.add.audio('music', 1, false);
			this.music.play();

			this.land = this.add.tileSprite(0, 0, this.world.width, this.world.height, 'earth');
			this.land.fixedToCamera = true;

			this.currentSpeed = 0;
			this.nextFire = 0; //следующий выстрел
			this.health = 100;

			this.tank = this.add.sprite(50, 400, 'tank', 'tank1');
			this.tank.anchor.setTo(_Constant2.default.anchor, _Constant2.default.anchor);

			// this.physics.enable(this.tank, Phaser.Physics.Arcade);
			this.physics.arcade.enable(this.tank);
			this.tank.body.maxVelocity.setTo(_Constant2.default.max_velocity, _Constant2.default.max_velocity);
			this.tank.body.collideWorldBounds = true;

			this.turret = this.add.sprite(0, 0, 'tank', 'turret');
			this.turret.anchor.setTo(_Constant2.default.anchor, _Constant2.default.anchor);

			//  пули врагов
			this.enemyBullets = this.add.group();
			this.enemyBullets.enableBody = true;
			// this.enemyBullets.physicsBodyType = Phaser.Physics.Arcade; //Phaser.Physics.ARCADE;
			this.physics.arcade.enable(this.enemyBullets);
			this.enemyBullets.createMultiple(5, 'bullet'); // создадим пули

			this.enemyBullets.setAll('anchor.x', 0.5);
			this.enemyBullets.setAll('anchor.y', 0.5);
			this.enemyBullets.setAll('outOfBoundsKill', true); // ??
			this.enemyBullets.setAll('checkWorldBounds', true); // ??

			//  создаём ботов
			this.enemies = [];

			this.enemiesTotal = 8; // всего
			this.enemiesAlive = 8; // живых
			this.fireRate = 100; // скорострельность

			for (var i = 0; i < this.enemiesTotal; i++) {
				this.enemies.push(new _EnemyTank2.default(i, this, this.tank, this.enemyBullets));
			}

			//  тень под танками
			this.shadow = this.add.sprite(0, 0, 'tank', 'shadow');
			this.shadow.anchor.setTo(_Constant2.default.anchor, _Constant2.default.anchor);

			//  наша группа снарядов
			this.bullets = this.add.group();
			this.bullets.enableBody = true;
			// this.bullets.physicsBodyType = Phaser.Physics.Arcade;
			this.physics.arcade.enable(this.bullets);
			this.bullets.createMultiple(30, 'bullet');
			this.bullets.setAll('anchor.x', 0.5);
			this.bullets.setAll('anchor.y', 0.5);
			this.bullets.setAll('outOfBoundsKill', true);
			this.bullets.setAll('checkWorldBounds', true);

			//  взрыв
			this.explosions = this.add.group();

			for (var _i = 0; _i < 10; _i++) {
				var explosionAnimation = this.explosions.create(0, 0, 'kaboom', [0], false);
				explosionAnimation.anchor.setTo(_Constant2.default.anchor, _Constant2.default.anchor);
				explosionAnimation.animations.add('kaboom');
			}

			this.pauseButton = this.game.add.button(10, 10, "pause", this.startPause, this);
			this.pauseButton.scale.setTo(_Constant2.default.button_scale, _Constant2.default.button_scale);
			this.pauseButton.frame = 1;
			this.pauseButton.clicked = false;

			this.gameTime = 45;
			if (!this.timer) {
				this.timePause = 0;
				this.isPaused = false;
				this.total = 0;
				this.timer = this.game.time.create(false);
				this.timer.loop(1000, this.updateCounter, this);
				this.timer.start();
			} else {
				this.total = this.timePause;
				this.timer = this.game.time.create(false);
				this.timer.loop(1000, this.updateCounter, this);
				this.timer.start();
			}

			this.tank.bringToTop();
			this.turret.bringToTop();

			this.camera.follow(this.tank);
			this.camera.deadzone = new Phaser.Rectangle(150, 150, 500, 300);
			this.camera.focusOnXY(0, 0);

			this.cursors = this.input.keyboard.createCursorKeys();
			this._controlSettings = new _ControllSettings2.default();
			this._dPhi = 0.07;

			//resize offline game
			this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
		}
	}, {
		key: 'update',
		value: function update() {
			//убираем перекрытие объектов
			this.physics.arcade.overlap(this.enemyBullets, this.tank, this.bulletHitPlayer, null, this);
			// враги живые
			this.enemiesAlive = 0;

			for (var i = 0; i < this.enemies.length; i++) {
				if (this.enemies[i].alive) {
					// если жив
					this.enemiesAlive++;
					// проверяем колизии между нашим танком и другими танками
					this.physics.arcade.collide(this.tank, this.enemies[i].tank);
					// уничтожаем пулю в случае столкновения
					this.physics.arcade.overlap(this.bullets, this.enemies[i].tank, this.bulletHitEnemy, null, this);
					this.enemies[i].update();
				}
			}

			if (this.input.keyboard.isDown(Phaser.Keyboard.A)) {
				this.tank.angle -= 5;
			} else if (this.input.keyboard.isDown(Phaser.Keyboard.D)) {
				this.tank.angle += 5;
			}

			// скорость
			if (this.input.keyboard.isDown(Phaser.Keyboard.W)) {
				this.currentSpeed = 251;
			} else {
				if (this.currentSpeed > 0) {
					this.currentSpeed -= 25; // скорость торможения
				}
			}

			if (this._controlSettings.mouseControll === true) {
				this.turret.rotation = this.physics.arcade.angleToPointer(this.turret);
			} else {

				var angle = this.turret.rotation;

				if (this.cursors.left.isDown) {

					var newAngle = angle - this._dPhi;

					if (newAngle < -180) {
						var delta = -180 - newAngle;
						this.turret.rotation = 180 - delta;
					} else {
						this.turret.rotation = newAngle;
					}
				} else if (this.cursors.right.isDown) {

					var _newAngle = angle + this._dPhi;

					if (_newAngle >= 180) {
						var _delta = _newAngle - 180;
						this.turret.rotation = -180 + _delta;
					} else {
						this.turret.rotation = _newAngle;
					}
				}
			}

			if (this._controlSettings.mouseControll) {
				if (this.input.activePointer.isDown) {
					this.fire();
				}
			} else {
				if (this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
					this.fire();
				}
			}

			if (this.currentSpeed > 0) {
				this.physics.arcade.velocityFromRotation(this.tank.rotation, this.currentSpeed, this.tank.body.velocity);
			}

			this.land.tilePosition.x = -this.camera.x;
			this.land.tilePosition.y = -this.camera.y;

			//  привязываем тень к танку
			this.shadow.x = this.tank.x;
			this.shadow.y = this.tank.y;
			this.shadow.rotation = this.tank.rotation;

			// привязываем башню к танку
			this.turret.x = this.tank.x;
			this.turret.y = this.tank.y;

			if (this.gameTime - this.total < 0 || this.health <= 0 || this.enemiesAlive === 0) {
				this.score = (this.gameTime - this.total) * 50 + (this.enemiesTotal - this.enemiesAlive) * 50;

				if (this.health <= 0) {
					this.score = 0;
				}
				console.log('score: ' + this.score);
				this.total = 0;
				this.timePause = 0;

				this.game.state.start('GameOverMenu', true, false);
			}
		}
	}, {
		key: 'bulletHitEnemy',
		value: function bulletHitEnemy(tank, bullet) {
			bullet.kill();
			var destroyed = this.enemies[tank.name].damage();

			if (destroyed) {
				var explosionAnimation = this.explosions.getFirstExists(false);
				explosionAnimation.reset(tank.x, tank.y);
				explosionAnimation.play('kaboom', 30, false, true);
			}
		}
	}, {
		key: 'fire',
		value: function fire() {
			if (this.time.now > this.nextFire && this.bullets.countDead() > 0) {
				this.nextFire = this.time.now + this.fireRate;

				var bullet = this.bullets.getFirstExists(false);
				bullet.reset(this.turret.x, this.turret.y);

				if (this._controlSettings.mouseControll) {
					bullet.rotation = this.physics.arcade.moveToPointer(bullet, 1000, this.input.activePointer);
				} else {
					var degToRad = function degToRad(deg) {
						return deg / 180 * Math.PI;
					};
					var directX = this.turret.x - 1000 * Math.cos(degToRad(180 - this.turret.angle));
					var directY = this.turret.y + 1000 * Math.sin(degToRad(this.turret.angle));

					bullet.rotation = this.physics.arcade.moveToXY(bullet, directX, directY, 3500);
				}
			}
		}
	}, {
		key: 'bulletHitPlayer',
		value: function bulletHitPlayer(tank, bullet) {
			bullet.kill();
			this.health -= 5;
		}
	}, {
		key: 'updateCounter',
		value: function updateCounter() {
			this.total++;
			this.game.debug.text(this.formatTime(Math.round(this.gameTime - this.total)), this.world.centerX, 14, "#ff0");
			this.game.debug.text('Hp: ' + this.health + '     Count opponents:' + this.enemiesAlive, 84, 42, "#ff0");
		}
	}, {
		key: 'formatTime',
		value: function formatTime(s) {
			var minutes = "0" + Math.floor(s / 60);
			var seconds = "0" + (s - minutes * 60);
			return minutes.substr(-2) + ":" + seconds.substr(-2);
		}
	}, {
		key: 'startPause',
		value: function startPause(button) {
			if (!button.clicked) {
				button.clicked = true;
			}
			this.timePause = this.total;
			// this.game.state.start('PauseMenu', true, false);
			window.open("/", "_self");
		}
	}]);

	return World;
}(Phaser.State);

exports.default = World;

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import Phaser from '../../phaser.min';

var EnemyTank = function () {
    function EnemyTank(index, game, player, bullets) {
        _classCallCheck(this, EnemyTank);

        var x = Math.random() * game.world.width;
        var y = Math.random() * game.world.height;

        this.game = game;
        this.health = 3;
        this.player = player;
        this.bullets = bullets;
        this.fireRate = 1000; // скорострельность
        this.nextFire = 0; //следующий выстрел
        this.alive = true;

        this.shadow = game.add.sprite(x, y, 'enemy', 'shadow');
        this.tank = game.add.sprite(x, y, 'enemy', 'tank1');
        this.turret = game.add.sprite(x, y, 'enemy', 'turret');

        this.shadow.anchor.set(0.5);
        this.tank.anchor.set(0.5);
        this.turret.anchor.set(0.3, 0.5);

        this.tank.name = index.toString();
        game.physics.enable(this.tank, Phaser.Physics.ARCADE);
        this.tank.body.immovable = true;
        this.tank.body.collideWorldBounds = true;
        this.tank.body.bounce.setTo(1, 1);

        this.tank.angle = game.rnd.angle();

        game.physics.arcade.velocityFromRotation(this.tank.rotation, 100, this.tank.body.velocity);
    }

    _createClass(EnemyTank, [{
        key: 'damage',
        value: function damage() {
            this.health -= 1;

            if (this.health <= 0) {
                this.alive = false;
                this.shadow.kill();
                this.tank.kill();
                this.turret.kill();

                return true;
            }
            return false;
        }
    }, {
        key: 'update',
        value: function update() {
            this.shadow.x = this.tank.x;
            this.shadow.y = this.tank.y;
            this.shadow.rotation = this.tank.rotation;

            this.turret.x = this.tank.x;
            this.turret.y = this.tank.y;
            this.turret.rotation = this.game.physics.arcade.angleBetween(this.tank, this.player);

            if (this.game.physics.arcade.distanceBetween(this.tank, this.player) < 300) {
                if (this.game.time.now > this.nextFire && this.bullets.countDead() > 0) {
                    this.nextFire = this.game.time.now + this.fireRate;

                    var bullet = this.bullets.getFirstDead();

                    bullet.reset(this.turret.x, this.turret.y);

                    bullet.rotation = this.game.physics.arcade.moveToObject(bullet, this.player, 500);
                }
            }
        }
    }]);

    return EnemyTank;
}();

exports.default = EnemyTank;

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Controller2 = __webpack_require__(4);

var _Controller3 = _interopRequireDefault(_Controller2);

var _Form = __webpack_require__(16);

var _Form2 = _interopRequireDefault(_Form);

var _style = __webpack_require__(6);

var _style2 = _interopRequireDefault(_style);

var _Notify = __webpack_require__(12);

var _Notify2 = _interopRequireDefault(_Notify);

var _ControllSettings = __webpack_require__(5);

var _ControllSettings2 = _interopRequireDefault(_ControllSettings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignInController = function (_Controller) {
	_inherits(SignInController, _Controller);

	function SignInController() {
		var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		_classCallCheck(this, SignInController);

		if (SignInController.__instance) {
			var _ret;

			return _ret = SignInController.__instance, _possibleConstructorReturn(_this, _ret);
		}

		var _this = _possibleConstructorReturn(this, (SignInController.__proto__ || Object.getPrototypeOf(SignInController)).call(this, opt));

		SignInController.__instance = _this;
		_this.theme = new _style2.default();
		_this.addListener();
		_this.controllSettings = new _ControllSettings2.default();
		return _this;
	}

	_createClass(SignInController, [{
		key: 'addListener',
		value: function addListener() {
			var _this2 = this;

			document.getElementsByClassName('theme')[0].addEventListener('click', function (event) {
				event.preventDefault();
				_this2.theme.changeTheme();
			});

			this.page_parts.get('SignIn').onSubmitSignInForm(function (formdata) {
				_this2.userService.signIn(formdata.email, formdata.password).then(function (data) {
					_this2.userService.user.set(data);
					console.log("[onSubmitSignInForm] Success sign in");
					console.log('[onSubmitSignInForm] data.mouseControlEnabled current = ' + _this2.controllSettings.mouseControll);
					console.log('[onSubmitSignInForm] data.mouseControlEnabled = ' + data.mouseControlEnabled);
					_this2.controllSettings.mouseControll = data.mouseControlEnabled;
					console.log('signIn: ' + _this2.userService.user.getUsername());
					_Form2.default.reset();
					_this2._router.go('/');
				}).catch(function (err) {
					var notify = new _Notify2.default();
					if (err.status === 403) {
						notify.notify('User name or password is incorrect', 'orange');
					} else {
						notify.notify('NetworkError.');
					}
				});
			});
		}
	}, {
		key: 'resume',
		value: function resume() {
			this.show();
		}
	}, {
		key: 'show',
		value: function show() {
			this.page_parts.get("Header").show();
			this.page_parts.get("SignIn").show();
		}
	}, {
		key: 'hide',
		value: function hide() {
			this.page_parts.get("Header").hide();
			this.page_parts.get("SignIn").hide();
		}
	}]);

	return SignInController;
}(_Controller3.default);

exports.default = SignInController;

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Controller2 = __webpack_require__(4);

var _Controller3 = _interopRequireDefault(_Controller2);

var _Form = __webpack_require__(16);

var _Form2 = _interopRequireDefault(_Form);

var _style = __webpack_require__(6);

var _style2 = _interopRequireDefault(_style);

var _Notify = __webpack_require__(12);

var _Notify2 = _interopRequireDefault(_Notify);

var _Http = __webpack_require__(15);

var _Http2 = _interopRequireDefault(_Http);

var _ControllSettings = __webpack_require__(5);

var _ControllSettings2 = _interopRequireDefault(_ControllSettings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignUpController = function (_Controller) {
    _inherits(SignUpController, _Controller);

    function SignUpController() {
        var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, SignUpController);

        if (SignUpController.__instance) {
            var _ret;

            return _ret = SignUpController.__instance, _possibleConstructorReturn(_this, _ret);
        }

        var _this = _possibleConstructorReturn(this, (SignUpController.__proto__ || Object.getPrototypeOf(SignUpController)).call(this, opt));

        SignUpController.__instance = _this;
        _this.theme = new _style2.default();
        _this.controllSettings = new _ControllSettings2.default();
        _this.addListener();
        return _this;
    }

    _createClass(SignUpController, [{
        key: 'addListener',
        value: function addListener() {
            var _this2 = this;

            document.getElementsByClassName('theme')[0].addEventListener('click', function (event) {
                event.preventDefault();
                _this2.theme.changeTheme();
            });

            this.page_parts.get('SignUp').onSubmitSignUpForm(function (formdata) {
                _this2.userService.signUp(formdata.username, formdata.email, formdata.password, _this2.controllSettings.mouseControll).then(function (data) {
                    _this2.userService.user.set(data);
                    console.log("[onSubmitSignUpForm] Success sign up");
                    _Form2.default.reset();
                    _this2._router.go('/');
                }).catch(function (err) {
                    var notify = new _Notify2.default();
                    if (err.status === 403) {
                        notify.notify('User is already exist with current email', 'orange');
                    } else {
                        notify.notify('NetworkError.');
                    }
                });
            });
        }
    }, {
        key: 'resume',
        value: function resume() {
            this.show();
        }
    }, {
        key: 'show',
        value: function show() {
            this.page_parts.get("Header").show();
            this.page_parts.get("SignUp").show();
        }
    }, {
        key: 'hide',
        value: function hide() {
            this.page_parts.get("Header").hide();
            this.page_parts.get("SignUp").hide();
        }
    }]);

    return SignUpController;
}(_Controller3.default);

exports.default = SignUpController;

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Controller2 = __webpack_require__(4);

var _Controller3 = _interopRequireDefault(_Controller2);

var _style = __webpack_require__(6);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScoreListController = function (_Controller) {
    _inherits(ScoreListController, _Controller);

    function ScoreListController() {
        var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, ScoreListController);

        if (ScoreListController.__instance) {
            var _ret;

            return _ret = ScoreListController.__instance, _possibleConstructorReturn(_this, _ret);
        }

        var _this = _possibleConstructorReturn(this, (ScoreListController.__proto__ || Object.getPrototypeOf(ScoreListController)).call(this, opt));

        ScoreListController.__instance = _this;
        _this.theme = new _style2.default();
        _this.addListener();
        return _this;
    }

    _createClass(ScoreListController, [{
        key: 'addListener',
        value: function addListener() {
            var _this2 = this;

            document.getElementsByClassName('theme')[0].addEventListener('click', function (event) {
                event.preventDefault();
                _this2.theme.changeTheme();
            });

            document.getElementById('score-button-back').addEventListener('click', function (event) {
                event.preventDefault();
                _this2._router.go('/');
            });
        }
    }, {
        key: 'resume',
        value: function resume() {
            this.show();
        }
    }, {
        key: 'show',
        value: function show() {
            var _this3 = this;

            this.page_parts.get("Header").show();
            this.userService.getScorelist(3).then(function (resp) {

                var topList = [];

                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = resp[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var user = _step.value;

                        topList.push({
                            userId: user.userId,
                            position: user.position,
                            username: user.username,
                            kills: user.kills,
                            deaths: user.deaths,
                            maxKills: user.maxKills,
                            isOwner: false
                        });
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                var inTopFlag = false;

                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = topList[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var userStatistic = _step2.value;

                        if (userStatistic.userId === _this3.userService.user.id) {
                            inTopFlag = true;
                            userStatistic.isOwner = true;
                        }
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }

                if (_this3.userService.isAuthorized() && inTopFlag !== true) {

                    _this3.userService.getOwnScore().then(function (resp) {

                        debugger;
                        console.log("arrived own statistic");

                        topList.push({
                            userId: null,
                            position: '',
                            username: '',
                            kills: '...',
                            deaths: '',
                            maxKills: '',
                            isOwner: false
                        });

                        topList.push({
                            userId: null,
                            position: resp.position,
                            username: resp.username,
                            kills: resp.kills,
                            deaths: resp.deaths,
                            maxKills: resp.maxKills,
                            isOwner: true
                        });

                        _this3.page_parts.get("Scoreboard").data.users = topList;
                        _this3.page_parts.get("Scoreboard").getClassElement().hidden = false;
                        _this3.addListener();
                    }).catch(function (err) {
                        console.log('need try one multiplayer game');
                        _this3.page_parts.get("Scoreboard").data.users = topList;
                        _this3.page_parts.get("Scoreboard").getClassElement().hidden = false;
                        _this3.addListener();
                    });
                } else {

                    _this3.page_parts.get("Scoreboard").data.users = topList;
                    _this3.page_parts.get("Scoreboard").getClassElement().hidden = false;
                    _this3.addListener();
                }
            }).catch(function (err) {
                console.log('bad answer');
            });
        }
    }, {
        key: 'hide',
        value: function hide() {
            this.page_parts.get("Header").hide();
            this.page_parts.get("Scoreboard").hide();
        }
    }]);

    return ScoreListController;
}(_Controller3.default);

exports.default = ScoreListController;

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Controller2 = __webpack_require__(4);

var _Controller3 = _interopRequireDefault(_Controller2);

var _style = __webpack_require__(6);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AboutUsController = function (_Controller) {
    _inherits(AboutUsController, _Controller);

    function AboutUsController() {
        var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, AboutUsController);

        if (AboutUsController.__instance) {
            var _ret;

            return _ret = AboutUsController.__instance, _possibleConstructorReturn(_this, _ret);
        }

        var _this = _possibleConstructorReturn(this, (AboutUsController.__proto__ || Object.getPrototypeOf(AboutUsController)).call(this, opt));

        AboutUsController.__instance = _this;
        _this.theme = new _style2.default();
        _this.addListener();
        return _this;
    }

    _createClass(AboutUsController, [{
        key: 'addListener',
        value: function addListener() {
            var _this2 = this;

            document.getElementsByClassName('theme')[0].addEventListener('click', function (event) {
                event.preventDefault();
                _this2.theme.changeTheme();
            });

            document.getElementById('aboutUs-button-back').addEventListener('click', function (event) {
                event.preventDefault();
                _this2._router.go('/');
            });
        }
    }, {
        key: 'resume',
        value: function resume() {
            this.show();
        }
    }, {
        key: 'show',
        value: function show() {
            this.page_parts.get("Header").show();
            this.page_parts.get("AboutUs").show();
        }
    }, {
        key: 'hide',
        value: function hide() {
            this.page_parts.get("Header").hide();
            this.page_parts.get("AboutUs").hide();
        }
    }]);

    return AboutUsController;
}(_Controller3.default);

exports.default = AboutUsController;

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Controller2 = __webpack_require__(4);

var _Controller3 = _interopRequireDefault(_Controller2);

var _ControllSettings = __webpack_require__(5);

var _ControllSettings2 = _interopRequireDefault(_ControllSettings);

var _style = __webpack_require__(6);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SettingsController = function (_Controller) {
    _inherits(SettingsController, _Controller);

    function SettingsController() {
        var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, SettingsController);

        if (SettingsController.__instance) {
            var _ret;

            return _ret = SettingsController.__instance, _possibleConstructorReturn(_this, _ret);
        }

        var _this = _possibleConstructorReturn(this, (SettingsController.__proto__ || Object.getPrototypeOf(SettingsController)).call(this, opt));

        _this.controllSettings = new _ControllSettings2.default();
        SettingsController.__instance = _this;
        _this.theme = new _style2.default();

        console.log('[SettingsController.constructor] data.mouseControlEnabled current = ' + _this.controllSettings.mouseControll);
        if (_this.controllSettings.mouseControll) {
            document.getElementsByClassName('table__checkbox')[0].checked = true;
            document.getElementsByClassName('table__img_keyboard')[0].style.display = "none";
            document.getElementsByClassName('table__img_keyboard_with_mouse')[0].style.display = "initial";
        } else {
            document.getElementsByClassName('table__checkbox')[0].checked = false;
            document.getElementsByClassName('table__img_keyboard')[0].style.display = "initial";
            document.getElementsByClassName('table__img_keyboard_with_mouse')[0].style.display = "none";
        }

        _this.addListener();
        return _this;
    }

    _createClass(SettingsController, [{
        key: 'addListener',
        value: function addListener() {
            var _this2 = this;

            document.getElementsByClassName('theme')[0].addEventListener('click', function (event) {
                event.preventDefault();
                _this2.theme.changeTheme();
            });

            document.getElementById('settings-button-back').addEventListener('click', function (event) {
                event.preventDefault();
                _this2.userService.sendControllSettings(_this2.controllSettings.mouseControll);

                _this2._router.go('/');
            });

            var slider = document.getElementsByClassName('table__checkbox')[0];
            slider.addEventListener('click', function (event) {
                if (slider.checked) {
                    _this2.controllSettings.mouseControll = true;
                    document.getElementsByClassName('table__img_keyboard')[0].style.display = "none";
                    document.getElementsByClassName('table__img_keyboard_with_mouse')[0].style.display = "initial";
                } else {
                    _this2.controllSettings.mouseControll = false;
                    document.getElementsByClassName('table__img_keyboard')[0].style.display = "initial";
                    document.getElementsByClassName('table__img_keyboard_with_mouse')[0].style.display = "none";
                }
            });
        }
    }, {
        key: 'resume',
        value: function resume() {
            this.show();
        }
    }, {
        key: 'show',
        value: function show() {
            console.log('[SettingsController.show] data.mouseControlEnabled current = ' + this.controllSettings.mouseControll);
            if (this.controllSettings.mouseControll) {
                document.getElementsByClassName('table__checkbox')[0].checked = true;
                document.getElementsByClassName('table__img_keyboard')[0].style.display = "none";
                document.getElementsByClassName('table__img_keyboard_with_mouse')[0].style.display = "initial";
            } else {
                document.getElementsByClassName('table__checkbox')[0].checked = false;
                document.getElementsByClassName('table__img_keyboard')[0].style.display = "initial";
                document.getElementsByClassName('table__img_keyboard_with_mouse')[0].style.display = "none";
            }

            this.page_parts.get("Header").show();
            this.page_parts.get("Settings").show();
        }
    }, {
        key: 'hide',
        value: function hide() {
            this.page_parts.get("Header").hide();
            this.page_parts.get("Settings").hide();
        }
    }]);

    return SettingsController;
}(_Controller3.default);

exports.default = SettingsController;

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = RegisterSW;
function RegisterSW() {
	if (navigator.serviceWorker !== undefined) {
		navigator.serviceWorker.register('./sw.js', { scope: '/' }).then(function (registration) {
			console.log('good registration worker: ' + registration);
		}).catch(function (error) {
			console.log(error);
			console.log('bad registration worker: ' + error);
		});
	}
}

/***/ })
/******/ ]);