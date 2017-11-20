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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
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
/* 2 */
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
		'overflow-y': 'hidden'
	}
};

var deleteMargin = {
	selector: 'body',
	styles: {
		'margin': '0'
	}
};

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
    str = str || __webpack_require__(25).readFileSync(filename, 'utf8')
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

var _BlockComponents = __webpack_require__(0);

var _BlockComponents2 = _interopRequireDefault(_BlockComponents);

var _Form = __webpack_require__(24);

var _Form2 = _interopRequireDefault(_Form);

var _ValidSignInForm = __webpack_require__(8);

var _ValidSignInForm2 = _interopRequireDefault(_ValidSignInForm);

var _ValidSignUpForm = __webpack_require__(9);

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
/* 5 */
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
			var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;

			var notify = this.createNotify(message, time);
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
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Http = __webpack_require__(19);

var _Http2 = _interopRequireDefault(_Http);

var _User = __webpack_require__(20);

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
  * @return {Promise}
  */


	_createClass(UserService, [{
		key: 'signUp',
		value: function signUp(username, email, password) {

			console.log('[signUp] email:  ' + email + '  pass: ' + password);
			var requestBody = { username: username, email: email, password: password };
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
		value: function getScorelist(page) {
			return _Http2.default.FetchPost('/scorelist', { page: page }).then(function (response) {
				if (response.status === 200) {
					return response.json();
				} else {
					console.log(response.json());
					throw response;
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Notify = __webpack_require__(5);

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

      var minLenPassword = 6,
          maxLenPassword = 18;

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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Notify = __webpack_require__(5);

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

			var minLenUsername = 4,
			    maxLenUsername = 15,
			    minLenPassword = 6,
			    maxLenPassword = 18;

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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BlockComponents = __webpack_require__(0);

var _BlockComponents2 = _interopRequireDefault(_BlockComponents);

var _Menu = __webpack_require__(32);

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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BlockComponents = __webpack_require__(0);

var _BlockComponents2 = _interopRequireDefault(_BlockComponents);

var _Table = __webpack_require__(35);

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
/* 12 */
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
var boot_state_1 = __webpack_require__(44);
var preloader_state_1 = __webpack_require__(46);
var main_state_1 = __webpack_require__(52);
var world_state_1 = __webpack_require__(53);
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super.call(this, document.documentElement.clientWidth, document.documentElement.clientHeight, Phaser.AUTO, 'content', null) || this;
        _this.state.add('boot', boot_state_1.default);
        _this.state.add('preloader', preloader_state_1.default);
        _this.state.add('main', main_state_1.default);
        _this.state.add('world', world_state_1.default);
        _this.state.start('boot'); // Initialize and start `boot` state
        return _this;
    }
    return App;
}(Phaser.Game));
exports.default = App;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4119334de3c71843520250c6c9f0594d.jpg";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5733b613e5ea55c939a6276c4b4b7aa0.png";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4119334de3c71843520250c6c9f0594d.jpg";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b17c373a3f0117f56d7b0af1a9839bb7.png";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fdfd09de3c00231354d7fa064d79af79.png";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _UserService = __webpack_require__(7);

var _UserService2 = _interopRequireDefault(_UserService);

var _CreatePage = __webpack_require__(21);

var _CreatePage2 = _interopRequireDefault(_CreatePage);

var _Router = __webpack_require__(40);

var _Router2 = _interopRequireDefault(_Router);

var _MenuStartController = __webpack_require__(42);

var _MenuStartController2 = _interopRequireDefault(_MenuStartController);

var _PlayGameController = __webpack_require__(43);

var _PlayGameController2 = _interopRequireDefault(_PlayGameController);

var _SignInController = __webpack_require__(61);

var _SignInController2 = _interopRequireDefault(_SignInController);

var _SignUpController = __webpack_require__(62);

var _SignUpController2 = _interopRequireDefault(_SignUpController);

var _ScoreListController = __webpack_require__(63);

var _ScoreListController2 = _interopRequireDefault(_ScoreListController);

var _AboutUsController = __webpack_require__(64);

var _AboutUsController2 = _interopRequireDefault(_AboutUsController);

var _style = __webpack_require__(2);

var _style2 = _interopRequireDefault(_style);

var _index = __webpack_require__(12);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Game from './game/classes/Game/Game';

var theme = new _style2.default();
var userService = new _UserService2.default();
var page = new _CreatePage2.default();
// import RegisterSW from './services/ServiceWorker';
//
// RegisterSW();

theme.changeTheme();
var game = new _index2.default();

// (new Router())
//     .addRoute('/', MenuStartController, {userService: userService, page: page})
//     .addRoute('/play', PlayGameController, {userService: userService, page: page})
//     .addRoute('/signin', SignInController, {userService: userService, page: page})
//     .addRoute('/signup', SignUpController, {userService: userService, page: page})
//     .addRoute('/score', ScoreListController, {userService: userService, page: page})
//     .addRoute('/about', AboutUsController, {userService: userService, page: page})
//     .startRoute();

/***/ }),
/* 19 */
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
            var url = 'http://82.202.246.5:8080' + address;
            // const url = 'https://tanks-backend.xyz' + address;

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

            var url = 'http://82.202.246.5:8080' + address;
            // const url = 'https://tanks-backend.xyz' + address;

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
                return response;
            });
        }
    }]);

    return Http;
}();

exports.default = Http;

/***/ }),
/* 20 */
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
        this.score = opt.score || 0.1;
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BlockComponents = __webpack_require__(0);

var _BlockComponents2 = _interopRequireDefault(_BlockComponents);

var _SignIn = __webpack_require__(22);

var _SignIn2 = _interopRequireDefault(_SignIn);

var _SignUp = __webpack_require__(26);

var _SignUp2 = _interopRequireDefault(_SignUp);

var _Header = __webpack_require__(28);

var _Header2 = _interopRequireDefault(_Header);

var _UnRegMenu = __webpack_require__(31);

var _UnRegMenu2 = _interopRequireDefault(_UnRegMenu);

var _RegMenu = __webpack_require__(33);

var _RegMenu2 = _interopRequireDefault(_RegMenu);

var _AboutUs = __webpack_require__(34);

var _AboutUs2 = _interopRequireDefault(_AboutUs);

var _Scoreboard = __webpack_require__(36);

var _Scoreboard2 = _interopRequireDefault(_Scoreboard);

var _Footer = __webpack_require__(37);

var _Footer2 = _interopRequireDefault(_Footer);

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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = SignIn;

var _SignInForm = __webpack_require__(23);

var _SignInForm2 = _interopRequireDefault(_SignInForm);

var _ValidSignInForm = __webpack_require__(8);

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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Form2 = __webpack_require__(4);

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

                for (var name in elements) {
                    formdata[name] = elements[name].value;
                    console.log(elements[name].value);
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
/* 24 */
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
/* 25 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = SignUp;

var _SignUpForm = __webpack_require__(27);

var _SignUpForm2 = _interopRequireDefault(_SignUpForm);

var _ValidSignUpForm = __webpack_require__(9);

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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Form2 = __webpack_require__(4);

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

                for (var name in elements) {
                    formdata[name] = elements[name].value;
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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createHeader;

var _Header = __webpack_require__(29);

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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BlockComponents = __webpack_require__(0);

var _BlockComponents2 = _interopRequireDefault(_BlockComponents);

var _Header = __webpack_require__(30);

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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(3);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (data) {var pug_indent = [];
pug_html = pug_html + "\n\u003Cdiv class=\"theme\"\u003Echange theme\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"header\"\u003E\n  \u003Cp class=\"header__text\"\u003E" + (pug.escape(null == (pug_interp = data.nameGame) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Cimg class=\"header__logo\" src=\"static\u002Fimg\u002Flogo.png\"\u003E\n\u003C\u002Fdiv\u003E";}.call(this,"data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined));;return pug_html;};
module.exports = template;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createUnRegMenu;

var _Menu = __webpack_require__(10);

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = {
    user: undefined,
    buttons: [{
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
/* 32 */
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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createRegMenu;

var _Menu = __webpack_require__(10);

var _Menu2 = _interopRequireDefault(_Menu);

var _UserService = __webpack_require__(7);

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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createAboutUs;

var _Table = __webpack_require__(11);

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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(3);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (data) {var pug_indent = [];
pug_html = pug_html + "\n\u003Cdiv class=\"table\"\u003E\n  \u003Cdiv class=\"table__title\"\u003E" + (pug.escape(null == (pug_interp = data.title) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
if ((data.userScore)) {
pug_html = pug_html + "\n  \u003Cdiv class=\"table__player\"\u003E" + (pug.escape(null == (pug_interp = 'Your score: ' + data.userScore) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\n  \u003Cdiv class=\"table__content\"\u003E\n    \u003Ctable" + (pug.attr("class", pug.classes(["table__tag",data.classTable], [false,true]), false, true)) + "\u003E";
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

pug_html = pug_html + "\n    \u003C\u002Ftable\u003E\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"table__back\"\u003E\n    \u003Cbutto" + (" class=\"table__button\""+pug.attr("id", data.idButton, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = 'BACK') ? "" : pug_interp)) + "\u003C\u002Fbutto\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E";}.call(this,"data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined));;return pug_html;};
module.exports = template;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Scoreboard;

var _Table = __webpack_require__(11);

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
    userScore: 'score'
};

/**
 * Получаем страницу счета
 */
function Scoreboard() {
    return new _Table2.default('section', { id: 'section-scoreList' }, [], data);
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = CreateFooter;

var _Footer = __webpack_require__(38);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = {
    imgListData: [{
        class: "footer__sound",
        src: "./static/img/sound.png",
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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BlockComponents = __webpack_require__(0);

var _BlockComponents2 = _interopRequireDefault(_BlockComponents);

var _Footer = __webpack_require__(39);

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
/* 39 */
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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Route = __webpack_require__(41);

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
/* 41 */
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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Controller2 = __webpack_require__(1);

var _Controller3 = _interopRequireDefault(_Controller2);

var _style = __webpack_require__(2);

var _style2 = _interopRequireDefault(_style);

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
		_this.theme = new _style2.default();
		_this.flag = true;
		_this.addListener();
		return _this;
	}

	_createClass(MenuStartController, [{
		key: 'addListener',
		value: function addListener() {
			var _this2 = this;

			document.getElementById('menu-button-playGame').addEventListener('click', function (event) {
				event.preventDefault();
				_this2._router.go('/play');
			});

			document.getElementById('menu-button-logout').addEventListener('click', function (event) {
				event.preventDefault();
				_this2.userService.logout().then(function (response) {
					console.log(response);
					_this2.userService.user.id = 0;
					_this2.show();
					_this2.page_parts.get("RegMenu").hide();
					_this2._router.go('/');
				}).catch(function (e) {
					alert(e);
				});
			});

			if (this.flag) {
				document.getElementsByClassName('theme')[0].addEventListener('click', function (event) {
					event.preventDefault();
					_this2.theme.changeTheme();
				});

				document.getElementById('menu-button-music').addEventListener('click', function (event) {
					event.preventDefault();
					_this2._router.go('/');
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
				console.log("[userService.getProfile] response: " + resp);
				_this3.userService.user.set(resp);
				console.log("alkscjbasbcasbucaosubc:");
				console.log(_this3.page_parts.get("RegMenu").data.user);
				_this3.page_parts.get("RegMenu").data.user = _this3.userService.user.getUsername();
				_this3.page_parts.get("RegMenu").getClassElement().hidden = false;
				_this3.addListener();
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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Controller2 = __webpack_require__(1);

var _Controller3 = _interopRequireDefault(_Controller2);

var _index = __webpack_require__(12);

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
				var game = new _index2.default();
			}).catch(function (err) {
				console.log("[userService.getProfile] err: " + err);
				_this2._router.go('/');
			});
		}
	}, {
		key: 'hide',
		value: function hide() {}
	}]);

	return PlayGameController;
}(_Controller3.default);

exports.default = PlayGameController;

/***/ }),
/* 44 */
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
var state_1 = __webpack_require__(6);
var titlepage = __webpack_require__(13);
var loaderImage = __webpack_require__(45);
var BootState = /** @class */ (function (_super) {
    __extends(BootState, _super);
    function BootState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BootState.prototype.preload = function () {
        this.game.load.image('background', titlepage);
        this.game.load.image('preloadBar', loaderImage);
    };
    BootState.prototype.create = function () {
        this.game.state.start('preloader', true, false);
    };
    return BootState;
}(state_1.default));
exports.default = BootState;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "14d4ff248dc707525c77546bd8f6a020.png";

/***/ }),
/* 46 */
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
var state_1 = __webpack_require__(6);
// Webpack will replace these imports with a URLs to images
var tanks = __webpack_require__(14);
var tanksJSON = __webpack_require__(47);
var enemy = __webpack_require__(48);
var bullet = __webpack_require__(49);
var kaboom = __webpack_require__(50);
var titlepage = __webpack_require__(13);
var logo = __webpack_require__(51);
// const startAudio      = require('../../../static/staticsGame/music/boom.mp3');
var earth = __webpack_require__(15);
var pause = __webpack_require__(16);
var box_tree = __webpack_require__(17);
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
/* 47 */
/***/ (function(module, exports) {

module.exports = {"frames":[{"filename":"shadow","frame":{"x":0,"y":0,"w":80,"h":80},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":80,"h":80},"sourceSize":{"w":80,"h":80}},{"filename":"tank1","frame":{"x":190,"y":52,"w":54,"h":52},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":3,"y":5,"w":54,"h":52},"sourceSize":{"w":64,"h":64}},{"filename":"turret","frame":{"x":0,"y":80,"w":48,"h":28},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":2,"w":48,"h":28},"sourceSize":{"w":50,"h":32}}]}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f50e6d82d4bfab326976a927ee97741f.png";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fae6edb0e0a51c1e45006a123c63dff2.png";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5ddcf208bfb5ee103c39ea71c64a107f.png";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6f7c29bcd42fe6d20b75c1853ca7e6d3.png";

/***/ }),
/* 52 */
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
var state_1 = __webpack_require__(6);
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
        this.input.onDown.addOnce(this.fadeOut, this);
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
/* 53 */
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
var state_1 = __webpack_require__(6);
var Tank_1 = __webpack_require__(54);
var TreeBox_1 = __webpack_require__(59);
var earth = __webpack_require__(15);
var pause = __webpack_require__(16);
var box_tree = __webpack_require__(17);
var tanks = __webpack_require__(14);
var WorldState = /** @class */ (function (_super) {
    __extends(WorldState, _super);
    function WorldState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WorldState.prototype.create = function () {
        this._music = this.game.add.audio('startAudio', 1, false);
        this._music.play();
        this._land = this.game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'earth');
        this._land.fixedToCamera = true;
        this._tank = new Tank_1.default(this.game, "Tiger");
        this._box = new TreeBox_1.default(this.game, 100, 100);
        this._pause = this.game.add.button(10, 10, "pause", this.startPause, this);
        this._pause.scale.setTo(0.2, 0.2);
        this._pause.frame = 1;
        this._pause['clicked'] = false;
        this.game.camera.follow(this._tank);
        this.game.camera.deadzone = new Phaser.Rectangle(150, 150, 500, 300);
        this.game.camera.focusOnXY(0, 0);
    };
    WorldState.prototype.update = function () {
        this.game.physics.arcade.collide(this._tank._tank._body, this._box._box);
        this._land.tilePosition.x = -this.camera.x;
        this._land.tilePosition.y = -this.camera.y;
        this._tank.update();
    };
    WorldState.prototype.startPause = function () {
    };
    ;
    return WorldState;
}(state_1.default));
exports.default = WorldState;


/***/ }),
/* 54 */
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
var TankBody_1 = __webpack_require__(55);
var TankTurret_1 = __webpack_require__(56);
var Lable_1 = __webpack_require__(57);
var HealthBar = __webpack_require__(58);
var TankState = /** @class */ (function (_super) {
    __extends(TankState, _super);
    function TankState(game, index) {
        var _this = _super.call(this, game, 0, 0) || this;
        _this._game = game;
        _this._xPosition = Math.random() * _this.game.world.width;
        _this._yPosition = Math.random() * _this.game.world.height;
        _this._health = 3;
        _this._fireRate = 1000; // скорострельность
        _this._nextFire = 0; //следующий выстрел
        _this._alive = true;
        _this._tankName = index;
        _this.create();
        return _this;
    }
    TankState.prototype.create = function () {
        this._cursor = this._game.input.keyboard.createCursorKeys();
        this._tank = new TankBody_1.default(this._game, this._cursor);
        this._turret = new TankTurret_1.default(this._game, this._cursor);
        this._tankLable = new Lable_1.default(this._game, this._tank.currentPosition, this._tankName, 1);
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
    return TankState;
}(Phaser.Sprite));
exports.default = TankState;


/***/ }),
/* 55 */
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
        debugger;
        this._body = this._game.add.sprite(50, 400, 'tank', 'tank1');
        this._body.anchor.setTo(0.5, 0.5);
        this._game.physics.arcade.enable(this._body);
        this._body.body.maxVelocity.setTo(100, 100);
        this._body.body.collideWorldBounds = true;
    };
    TankBody.prototype.update = function () {
        // величина угла поворота
        if (this._cursor.left.isDown) {
            this._body.angle -= 5;
        }
        else if (this._cursor.right.isDown) {
            this._body.angle += 5;
        }
        // скорость
        if (this._cursor.up.isDown) {
            this._currentSpeed = 210;
        }
        else {
            if (this._currentSpeed > 0) {
                this._currentSpeed -= 100; // скорость торможения
            }
        }
        // движение и поворотами
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
    return TankBody;
}(Phaser.Sprite));
exports.default = TankBody;


/***/ }),
/* 56 */
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
var TankTurret = /** @class */ (function (_super) {
    __extends(TankTurret, _super);
    function TankTurret(game, cursor) {
        var _this = _super.call(this, game, 0, 0) || this;
        _this._game = game;
        _this._cursor = cursor;
        _this.create();
        return _this;
    }
    TankTurret.prototype.create = function () {
        this._turret = this._game.add.sprite(50, 400, 'tank', 'turret');
        this._turret.anchor.setTo(0.5, 0.5);
    };
    TankTurret.prototype.update = function () {
        this._turret.rotation = this._game.physics.arcade.angleToPointer(this._turret);
    };
    Object.defineProperty(TankTurret.prototype, "turretCoordinate", {
        set: function (coordinate) {
            this._turret.x = coordinate.xCoordinate;
            this._turret.y = coordinate.yCoordinate;
        },
        enumerable: true,
        configurable: true
    });
    return TankTurret;
}(Phaser.Sprite));
exports.default = TankTurret;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Lable = /** @class */ (function () {
    function Lable(game, coordinate, content, scale) {
        this._game = game;
        this._textStyle = { font: "bold 32px Arial", fill: "#120dff", boundsAlignH: "center", boundsAlignV: "middle" };
        this._text = this._game.add.text(coordinate.xCoordinate, coordinate.yCoordinate, content, this._textStyle);
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
    return Lable;
}());
exports.default = Lable;


/***/ }),
/* 58 */
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
            color: '#651828'
        },
        bar: {
            color: '#FEFF03'
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
/* 59 */
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
var Box_1 = __webpack_require__(60);
var TreeBox = /** @class */ (function (_super) {
    __extends(TreeBox, _super);
    function TreeBox(game, xCoord, yCoord) {
        var _this = _super.call(this, game, xCoord, yCoord) || this;
        _this.create();
        return _this;
    }
    TreeBox.prototype.create = function () {
        this._box = this._game.add.sprite(this._xCoordinate, this._yCoordinate, 'box_tree');
        this._box.anchor.setTo(0.5, 0.5);
        this._game.physics.arcade.enable(this._box);
        this._box.body.immovable = true;
        this._box.body.bounce.setTo(1, 1);
    };
    return TreeBox;
}(Box_1.default));
exports.default = TreeBox;


/***/ }),
/* 60 */
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
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Controller2 = __webpack_require__(1);

var _Controller3 = _interopRequireDefault(_Controller2);

var _Form = __webpack_require__(4);

var _Form2 = _interopRequireDefault(_Form);

var _style = __webpack_require__(2);

var _style2 = _interopRequireDefault(_style);

var _Notify = __webpack_require__(5);

var _Notify2 = _interopRequireDefault(_Notify);

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
					console.log('signIn: ' + _this2.userService.user.getUsername());
					_Form2.default.reset();
					_this2._router.go('/');
				}).catch(function (err) {
					console.log("[onSubmitSignInForm] err: " + err);
					var notify = new _Notify2.default();
					notify.notify('server error');
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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Controller2 = __webpack_require__(1);

var _Controller3 = _interopRequireDefault(_Controller2);

var _Form = __webpack_require__(4);

var _Form2 = _interopRequireDefault(_Form);

var _style = __webpack_require__(2);

var _style2 = _interopRequireDefault(_style);

var _Notify = __webpack_require__(5);

var _Notify2 = _interopRequireDefault(_Notify);

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
                _this2.userService.signUp(formdata.username, formdata.email, formdata.password).then(function (data) {
                    _this2.userService.user.set(data);
                    console.log("[onSubmitSignUpForm] Success sign up");
                    _Form2.default.reset();
                    _this2._router.go('/');
                }).catch(function (err) {
                    console.log("[onSubmitSignUpForm] err: " + err);
                    var notify = new _Notify2.default();
                    notify.notify('server error');
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
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Controller2 = __webpack_require__(1);

var _Controller3 = _interopRequireDefault(_Controller2);

var _style = __webpack_require__(2);

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
			this.userService.getScorelist().then(function (resp) {
				console.log('good answer');
				console.log(_this3.page_parts.get("Scoreboard").data);
			}).catch(function (err) {
				console.log('bad answer');
			});

			console.log(this.userService.user.getScore());

			this.page_parts.get("Scoreboard").data.userScore = this.userService.user.getScore();
			this.page_parts.get("Scoreboard").getClassElement().hidden = false;
			this.addListener();
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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Controller2 = __webpack_require__(1);

var _Controller3 = _interopRequireDefault(_Controller2);

var _style = __webpack_require__(2);

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

/***/ })
/******/ ]);