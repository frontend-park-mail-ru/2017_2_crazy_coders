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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/**
 * Базовый класс блока
 * @module Block
 */
class Block {
    /**
     * @param {string} [tagName='div'] - tagName блока
     * @param {*} [attrs={}] - объект с атрибутами блока
     * @param {string[]} [classes=[]] - список имён классов
     * @param {*} [data={}] - объект с данными блока
     * @constructor
     */
    constructor(tagName = 'div', attrs = {}, classes = [], data = {}) {
        this.el = document.createElement(tagName);

        classes.forEach(function (className) {
            this.el.classList.add(className);
        });

        for (let name in attrs) {
            this.el.setAttribute(name, attrs[name]);
        }

        this.setData(data);
    }

    /**
     * Установить новые данные блока
     * @param {string} data
     */
    setData(data) {

        console.log("setting data: "+ data);

        this.data = data;
    }

    /**
     * Получить данные блока
     */
    getData() {
        return this.data;
    }

    /**
     * Установить HTML содержимое блока
     * @param {HTMLElement} html
     */
    setHTML(html) {
        this.el.innerHTML = html;
    }

    /**
     * Устанавливает новый текст для элемента
     * @param {string} text - устанавливаем текст
     */
    setText(text) {
        this.el.textContent = text;
    }

    /**
     * Очищаем содержимое элемента
     */
    clear() {
        this.el.innerHTML = '';
    }

    /**
     * Скрывает элемент
     */
    hide() {
        this.el.setAttribute('hidden', 'hidden');
    }

    /**
     * Отображает элемент
     */
    show() {
        this.el.removeAttribute('hidden');
    }

    /**
     * Возвращает элемент
     * @returns {HTMLElement}
     */
    getElement() {
        return this.el;
    }

    /**
     * Вставляет в себя элемент
     * @param {HTMLElement} block
     */
    append(block) {
        this.getElement().appendChild(block);
        return this;
    }

    /**
     * Позволяет подписаться на событие
     * @param {string} event
     * @param {EventListener} callback
     * @return {function(this:Block)} - функция отписки от события
     */
    on(event, callback) {
        this.el.addEventListener(event, callback);
        return function () {
            this.el.removeEventListener(event, callback);
        }.bind(this);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Block;




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


class Controller {

    constructor(opt) {
        this.userService = opt.userService;
        this.page = opt.page;                   // объект CreatePage
        this.page_parts = opt.page.getParts();  // map() вьюх
    }

    /**
     * Инициализация параметров view (выполняется сразу после создания)
     * Необходимо перепределять
     * @param {Object} [options={}] - Объект с параметрами
     */
    init(options = {}) {
        this.setAttrs(options.attrs);
    }

    /**
     * Вызывается при начале или продолжении работы view (после того, как view была скрыта)
     * Необходимо переопределять своей логикой
     * @param {Object} [options={}] - Объект с параметрами
     */
    resume() {
        this.show();
    }

    /**
     * Показывает view
     * @param {Object} [options={}] - Объект с параметрами
     */
    show() {
        this._el.style.display = 'block';
    }

    /**
     * Скрывает view
     * @param {Object} [options={}] - Объект с параметрами
     */
    hide() {
        this._el.style.display = 'none';
    }



    /**
     * Вставляет текущую view в переданный элемент
     * @param {HTMLElement} el - HTML-элемент, к которому добавляется элемент текущей view
     */
    appendTo(el) {
        el.appendChild(this._el);
    }

    /**
     * Удаляет элемент текущей view
     */
    remove() {
        this._el && this._el.remove();
    }

    /**
     * Заменяет элемент текущей view
     * @param {HTMLElement} el - HTML-элемент, который становится элементом текущей view
     */
    setElement(el) {
        this._el && this._el.remove();
        this._el = el;
    }

    /**
     * Устанавливает текущей view набор атрибутов
     * @param {Object} [attrs={}] - Объект с атрибутами, которые будут установлены у текущего элемента view
     */
    setAttrs(attrs = {}) {
        Object.keys(attrs).forEach((name) => {
            this._el.setAttribute(name, attrs[name]);
        });
    }

    /**
     * Возвращает строку, содержашую текстовое представление текущей view
     * @returns {string}
     */
    toString() {
        return this._el.outerHTML;
    }

    /**
     * Устанавливает текущей view роутер
     * @param {Router} router - инстанс роутера
     */
    setRouterController(router) {
        this._router = router;
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Controller);



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Theme {
	constructor() {
		this.defaultThema = false;
	}

	changeTheme() {
		let stylesDeault = this.createStylesheet([bodyStylesWhite, htmlNoneScroll, deleteMargin]);
		let stylesYellow = this.createStylesheet([bodyStylesYellow, htmlNoneScroll, deleteMargin]);

		let stylesheet = !this.defaultThema ? stylesDeault : stylesYellow;

		this.appendStylesheet(stylesheet);

		this.defaultThema = !this.defaultThema;
	}



	createStylesheet(styles){
		return styles.reduce((stylesheet, current) => {
			const properties = Object.entries(current.styles)
				.map(prop => prop[0] + ':' + prop[1] + ';');
			stylesheet += `${current.selector} {${properties}}\n`;
			return stylesheet;
		},'');
	}

	appendStylesheet(stylesheet){
		let styleTag = document.getElementById('theme-styles');
		styleTag.innerHTML = stylesheet;
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Theme;


const bodyStylesYellow = {
	selector: 'body',
	styles: {
		'background-color': '#FFFF00',
	}
};

const bodyStylesWhite = {
	selector: 'body',
	styles: {
		'background-color': '#FFF',
	}
};

const htmlNoneScroll = {
	selector: 'html',
	styles: {
		'overflow-y': 'hidden',
	}
};

const deleteMargin = {
	selector: 'body',
	styles: {
		'margin': '0',
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
    str = str || __webpack_require__(27).readFileSync(filename, 'utf8')
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
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(30);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Block_BlockComponents__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Form_pug__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Form_pug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Form_pug__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ValidForm_ValidSignInForm__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ValidForm_ValidSignUpForm__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Form_css__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Form_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Form_css__);








/**
 * Класс формы
 * @module Form
 */
class Form extends __WEBPACK_IMPORTED_MODULE_0__Block_BlockComponents__["a" /* default */] {
    /**
     * @param {string} [tagName='div'] - tagName блока
     * @param {*} [attrs={}] - объект с атрибутами блока
     * @param {string[]} [classes=[]] - список имён классов
     * @param {*} [data={}] - объект с данными блока
     * @constructor
     */
    constructor(tagName = 'div', attrs = {}, classes = [], data) {
        super(tagName, attrs, classes, data);
    }

    /**
     * Получить форму
     */
    getClassElement() {
		let data = this.getData();
        this.setHTML(__WEBPACK_IMPORTED_MODULE_1__Form_pug___default()({data}));
        return this.getElement();
    }

    /**
     * Получить кнопку назад из страницы с формы
     */
    static getBackButton() {
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
    static reset() {
        Array.from(document.getElementsByTagName('form')).forEach(form => {
            form.reset();
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Form;



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Notify {
	constructor() {
		this.notifyBlock = document.createElement('section');
		this.notifyBlock.classList.add('notify-container');
		document.body.appendChild(this.notifyBlock);
	}

	notify(message = 'Текст нотификации', time = 3) {
		let notify = this.createNotify(message, time);
		this.notifyBlock.appendChild(notify);
	}

	createNotify(msg, time) {
		let notify = document.createElement('div');
		notify.classList.add('notify');
		notify.setAttribute('style', `animation: show 1s, hide .7s ${time}s;`);

		const text = document.createElement('div');
		text.classList.add('notify__text');
		text.innerHTML = msg;

		const closeButton = document.createElement('div');
		closeButton.classList.add('notify__close');
		closeButton.innerHTML = '&times;';
		closeButton.addEventListener('click', (event) => {
			notify.classList.add('notify_delete');
		});

		notify.addEventListener('animationend', (event) => {
			if (event.animationName === 'hide') {
				notify.removeAttribute('style');
				notify.classList.add('notify_delete');
			}
		});

		notify.appendChild(text);
		notify.appendChild(closeButton);

		return notify;
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Notify;


/***/ }),
/* 8 */
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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_Http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_User__ = __webpack_require__(22);



/**
 * Сервис для работы с юзерами
 * @module UserService
 */
class UserService {

	constructor() {
		// debugger;
		if (this.user) {
			return this;
		}
		this.user = new __WEBPACK_IMPORTED_MODULE_1__model_User__["a" /* default */]({});
		this.users = [];
	}

	/**
	 * Регистрирует нового пользователя
	 * @param {string} username
	 * @param {string} email
	 * @param {string} password
	 * @return {Promise}
	 */
	signUp(username, email, password) {

		console.log(`[signUp] email:  ${email}  pass: ${password}`);
		const requestBody = {username, email, password};
		return __WEBPACK_IMPORTED_MODULE_0__modules_Http__["a" /* default */].FetchPost('/signUp', requestBody)
			.then((response) => {
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
	signIn(email, password) {
		return __WEBPACK_IMPORTED_MODULE_0__modules_Http__["a" /* default */].FetchPost('/signIn', {email, password})
			.then((response) => {
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
	isAuthorized() {
		console.log("[UserService] in isAuthorized, this.user.getId = " + this.user.getId());
		return !!this.user.getId();
	}

	/**
	 * Загружает данные о текущем пользователе
	 * @param {boolean} [force=true] - игнорировать ли кэш?
	 * @return {Promise}
	 */
	getProfile(force = true) {
		if (this.isAuthorized() && !force) {
			return Promise.resolve(this.user.get());
		}
		return __WEBPACK_IMPORTED_MODULE_0__modules_Http__["a" /* default */].FetchGet('/profile')
			.then((response) => {
				if (response.status === 200) {
					return response.json();
				} else {
					throw response;
				}
			})
	}

	getScorelist(page) {
		return __WEBPACK_IMPORTED_MODULE_0__modules_Http__["a" /* default */].FetchPost('/scorelist', {page})
			.then((response) => {
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
	getUserLogin() {
		return this.user.get();
	}

	/**
	 * Выход
	 */
	logout() {
		return __WEBPACK_IMPORTED_MODULE_0__modules_Http__["a" /* default */].FetchGet('/logout');
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = UserService;



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Notify_Notify__ = __webpack_require__(7);



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
    return text.match(new RegExp('^[a-zA-Z0-9_-]{' + minLenField + ','+ maxLenField +'}$'));
}

/**
 * Класс валидации формы входа
 * @module ValidSignInForm
 */
class ValidSignInForm {
    /**
     * @param {string} email
     * @param {string} password
     * @constructor
     */
    constructor(email, password) {
        this.email = email;
        this.password = password;
        // this.currentForm = form;

		this.notify = new __WEBPACK_IMPORTED_MODULE_0__Notify_Notify__["a" /* default */]();
	}

    /**
     * Валидируем форму
     * @returns {boolean}
     */
    validForm() {
        let flag = true;

        const minLenPassword = 6,
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
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ValidSignInForm;






/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Notify_Notify__ = __webpack_require__(7);




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
class ValidSignUpForm {
	/**
	 * @param {string} login
	 * @param {string} email
	 * @param {string} password
	 * @param {string} repeatPassword
	 * @constructor
	 */
	constructor(login, email, password, repeatPassword) {
		this.username = login;
		this.email = email;
		this.password = password;
		this.repeatPassword = repeatPassword;
		// this.currentForm = form;

		this.notify = new __WEBPACK_IMPORTED_MODULE_0__Notify_Notify__["a" /* default */]();
	}

	/**
	 * Валидируем форму
	 * @returns {boolean}
	 */
	validForm() {
		let flag = true;

		const minLenUsername = 4,
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
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ValidSignUpForm;




/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Block_BlockComponents__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Menu_pug__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Menu_pug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Menu_pug__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Menu_css__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Menu_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Menu_css__);




/**
 * Класс Menu-а
 * @module Menu
 */
class Menu extends __WEBPACK_IMPORTED_MODULE_0__Block_BlockComponents__["a" /* default */] {
    /**
     * @param {string} [tagName='div'] - tagName блока
     * @param {*} [attrs={}] - объект с атрибутами блока
     * @param {string[]} [classes=[]] - список имён классов
     * @param {*} [data={}] - объект с данными блока
     * @constructor
     */
    constructor(tagName = 'div', attrs = {}, classes = [], data) {
        super(tagName, attrs, classes, data);
    }

    /**
     * Получить Menu
     */
    getClassElement() {
		let data = this.getData();
        this.setHTML(__WEBPACK_IMPORTED_MODULE_1__Menu_pug___default()({data}));
        return this.getElement();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Menu;



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Block_BlockComponents__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Table_pug__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Table_pug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Table_pug__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Table_css__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Table_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Table_css__);




/**
 * Класс Table
 * @module Table
 */
class Table extends __WEBPACK_IMPORTED_MODULE_0__Block_BlockComponents__["a" /* default */] {
    /**
     * @param {string} [tagName='div'] - tagName блока
     * @param {*} [attrs={}] - объект с атрибутами блока
     * @param {string[]} [classes=[]] - список имён классов
     * @param {*} [data={}] - объект с данными блока
     * @constructor
     */
    constructor(tagName = 'div', attrs = {}, classes = [], data) {
        super(tagName, attrs, classes, data);
    }

    /**
     * Получить Table
     */
    getClassElement() {
        let data = this.getData();

        this.setHTML(__WEBPACK_IMPORTED_MODULE_1__Table_pug___default()({data}));
        return this.getElement();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Table;



/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4119334de3c71843520250c6c9f0594d.jpg";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5733b613e5ea55c939a6276c4b4b7aa0.png";

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = {"frames":[{"filename":"shadow","frame":{"x":0,"y":0,"w":80,"h":80},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":80,"h":80},"sourceSize":{"w":80,"h":80}},{"filename":"tank1","frame":{"x":190,"y":52,"w":54,"h":52},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":3,"y":5,"w":54,"h":52},"sourceSize":{"w":64,"h":64}},{"filename":"turret","frame":{"x":0,"y":80,"w":48,"h":28},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":1,"y":2,"w":48,"h":28},"sourceSize":{"w":50,"h":32}}]}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4119334de3c71843520250c6c9f0594d.jpg";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b17c373a3f0117f56d7b0af1a9839bb7.png";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e11ba3abfe7c0f81b6f63cca050ba20a.png";

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_UserService__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_CreatePage_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_Router__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controllers_MenuStartController__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__controllers_PlayGameController__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__controllers_SignInController__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__controllers_SignUpController__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__controllers_ScoreListController__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__controllers_AboutUsController__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__static_css_style__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_ServiceWorker__ = __webpack_require__(72);













let theme = new __WEBPACK_IMPORTED_MODULE_9__static_css_style__["a" /* default */]();
let userService = new __WEBPACK_IMPORTED_MODULE_0__services_UserService__["a" /* default */]();
let page = new __WEBPACK_IMPORTED_MODULE_1__views_CreatePage_js__["a" /* default */]();


Object(__WEBPACK_IMPORTED_MODULE_10__services_ServiceWorker__["a" /* default */])();

theme.changeTheme();

(new __WEBPACK_IMPORTED_MODULE_2__modules_Router__["a" /* default */]())
    .addRoute('/', __WEBPACK_IMPORTED_MODULE_3__controllers_MenuStartController__["a" /* default */], {userService: userService, page: page})
    .addRoute('/play', __WEBPACK_IMPORTED_MODULE_4__controllers_PlayGameController__["a" /* default */], {userService: userService, page: page})
    .addRoute('/signin', __WEBPACK_IMPORTED_MODULE_5__controllers_SignInController__["a" /* default */], {userService: userService, page: page})
    .addRoute('/signup', __WEBPACK_IMPORTED_MODULE_6__controllers_SignUpController__["a" /* default */], {userService: userService, page: page})
    .addRoute('/score', __WEBPACK_IMPORTED_MODULE_7__controllers_ScoreListController__["a" /* default */], {userService: userService, page: page})
    .addRoute('/about', __WEBPACK_IMPORTED_MODULE_8__controllers_AboutUsController__["a" /* default */], {userService: userService, page: page})
    .startRoute();


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/**
 * Модуль, предоставляющий методы для выполнения HTTP-запросов
 * @module Http
 */
class Http {
    /**
     * @constructor
     */
    constructor() {
        this.baseUrl = 'http://82.202.246.5:8080';
    }

    /**
     * Выполняет GET-запрос по указанному адресу с использованием fetch
     * @param {string} address - адрес запроса
     * @return {Promise}
     */
    static FetchGet(address) {
        // const url = this.baseUrl + address;
        const url = 'http://82.202.246.5:8080' + address;
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
        })
            .then(function (response) {
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
    static FetchPost (address, body) {

        const url = 'http://82.202.246.5:8080' + address;
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
        })
            .then(function(response) {
                return  response;
            });

    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Http;





/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/**
 * Класс пользователя
 * @module User
 */
class User {
    /**
     * @param {object} opt - данные пользователя
     * @constructor
     */
    constructor(opt) {
        this.email = opt.email || '';
        this.username = opt.username || '';
        this.id = opt.id || 0;
        this.score = opt.score || 0.1;
    }

    /**
     * Установить новые данные пользователя
     * @param {object} userData
     */
    set(userData) {
        this.id = userData.id;
        this.username = userData.username;
        this.email = userData.email;
        this.score = userData.score || 0;
    }

    /**
     * Возвращаем пользователя
     */
    get() {
        return {
            'email': this.email,
            'username': this.username,
            'id': this.id,
            'score': this.score
        }
    }

    /**
     * Возвращаем id пользователя
     */
    getId() {
        return this.id;
    }

    /**
     * Возвращаем имя пользователя
     */
    getUsername() {
        return this.username;
    }

    /**
     * Возвращаем email пользователя
     */
    getEmail() {
        return this.email;
    }

    /**
     * Возвращаем счет пользователя
     */
    getScore() {
        return this.score;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = User;



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Block_BlockComponents__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SignIn_SignIn__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SignUp_SignUp__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Header_Header__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__UnRegMenu_UnRegMenu__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__RegMenu_RegMenu__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__AboutUs_AboutUs__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Scoreboard_Scoreboard__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Footer_Footer__ = __webpack_require__(48);










class CreatePage {
    constructor() {
        this.body = document.getElementsByTagName('body')[0];
        this.parts = new Map();

        this.addParts("Header", Object(__WEBPACK_IMPORTED_MODULE_3__Header_Header__["a" /* default */])());
        this.addParts("SignIn", Object(__WEBPACK_IMPORTED_MODULE_1__SignIn_SignIn__["a" /* default */])());
        this.addParts("SignUp", Object(__WEBPACK_IMPORTED_MODULE_2__SignUp_SignUp__["a" /* default */])());
        this.addParts("UnRegMenu", Object(__WEBPACK_IMPORTED_MODULE_4__UnRegMenu_UnRegMenu__["a" /* default */])());
        this.addParts("RegMenu", Object(__WEBPACK_IMPORTED_MODULE_5__RegMenu_RegMenu__["a" /* default */])());
        this.addParts("AboutUs", Object(__WEBPACK_IMPORTED_MODULE_6__AboutUs_AboutUs__["a" /* default */])());
        this.addParts("Scoreboard", Object(__WEBPACK_IMPORTED_MODULE_7__Scoreboard_Scoreboard__["a" /* default */])());
        this.addParts("Footer", Object(__WEBPACK_IMPORTED_MODULE_8__Footer_Footer__["a" /* default */])());
    }


    addParts(name, elem, parent=this.body) {
        this.parts.delete(name);
        this.parts.set(name, elem);
        elem.hide();
        parent.appendChild(elem.getClassElement());
    }

    getParts() {
        return this.parts;
    }
}

/* harmony default export */ __webpack_exports__["a"] = (CreatePage);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = SignIn;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Form_Form_SignInForm__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Form_ValidForm_ValidSignInForm__ = __webpack_require__(10);





let data = {
    title: 'SIGN IN',
    classForm: 'form__login',
    fields: [
        {
            attrs: {
                type: 'text',
                name: 'email',
                placeholder: 'Enter email',
            },
        },
        {
            attrs: {
                type: 'password',
                name: 'password',
                placeholder: 'Enter password',
            },
        }],
    buttons: [
        {
            attrs: {
                type: 'submit',
                class: 'form__submit',
                value: 'SIGN IN',
                id: 'signIn-button-signIn',
            },
        },
        // {
        //     attrs: {
        //         class: 'form__back',
        //         value: 'BACK',
        //         id: 'signIn-button-back',
        //     },
        // },
    ]
};

/**
 * Получаем страницу входа
 */
function SignIn() {
    return new __WEBPACK_IMPORTED_MODULE_0__components_Form_Form_SignInForm__["a" /* default */]('section', {id: 'section-signIn'}, [], data, __WEBPACK_IMPORTED_MODULE_1__components_Form_ValidForm_ValidSignInForm__["a" /* default */]);
}



/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Form__ = __webpack_require__(6);


class SignInForm extends __WEBPACK_IMPORTED_MODULE_0__Form__["a" /* default */] {
    /**
     * @param {string} [tagName='div'] - tagName блока
     * @param {*} [attrs={}] - объект с атрибутами блока
     * @param {string[]} [classes=[]] - список имён классов
     * @param {*} [data={}] - объект с данными блока
     * @param {class} ValidSignInForm - кдасс валидации данных
     * @constructor
     */
    constructor(tagName = 'div', attrs = {}, classes = [], data, ValidSignInForm) {
        super(tagName, attrs, classes, data);
        this.validator = ValidSignInForm;
    }

    /**
     * Позволяет подписаться на событие формы входа
     * @return {object}
     */
    onSubmitSignInForm(callback) {
        let signInForm = document.getElementsByClassName('form__login')[0];

        signInForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const formdata = {};
            const elements = signInForm.elements;

            for (let name in elements) {
                formdata[name] = elements[name].value;
                console.log(elements[name].value);
            }

            const isValid = new this.validator(formdata.email, formdata.password);

            if(isValid.validForm()) {
                callback(formdata);
            }
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SignInForm;


/***/ }),
/* 26 */
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
/* 27 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(29);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(5)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!./Form.css", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!./Form.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".form {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 15px;\n    flex-flow: column nowrap;\n    margin-left: 2%;\n    margin-top: -20px;\n}\n\n.form__input {\n    display: block;\n    width: 350px;\n    padding: 9px 0 12px 12px;\n    font-size: 1em;\n    margin: 5px 0 16px ;\n    font-family: \"Helvetica\";\n    border-radius: 7px;\n    background: #e9ecf0;\n    color: #5E6D82;\n    box-sizing: border-box;\n}\n\n\n.form__button {\n    background-color: whitesmoke;\n    font-size: 1.5em;\n    font-weight: 700;\n    font-family: \"Verdana\", sans-serif;\n    color: black;\n    padding: 7px 17px;\n    border: 3px solid #041712;\n    border-radius: 10%;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    width: 7em;\n    margin: 25px 0 5px 15px;\n    cursor: pointer;\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);\n}\n\n.form__submit {\n    background-color: whitesmoke;\n    font-size: 1.5em;\n    font-weight: 700;\n    font-family: \"Verdana\", sans-serif;\n    color: black;\n    padding: 7px 17px;\n    border: 3px solid #041712;\n    border-radius: 10%;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    width: 7em;\n    margin: 15px 0 5px 15px;\n    cursor: pointer;\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);\n    margin-left: 100px;\n    margin-bottom: -10px;\n}\n\n.form__submit:hover {\n    background-color: rgba(4, 23, 18, 0.04);\n    border: 3px solid rgba(169, 169, 169, 0.19);\n}\n\n.form__error {\n    color: #D8000C;\n    font-family: \"Verdana\", sans-serif;\n    text-align: center;\n    display: block;\n    border: 1px solid;\n    margin: -10px 0 2px 0;\n    padding:10px 10px 10px 10px;\n    background-color: #FFBABA;\n}\n\n.form__back {\n    margin: 25px 0 0 15px;\n    width: 130px;\n}\n\n.form__back:hover {\n    background-color: rgba(4, 23, 18, 0.04);\n    border: 3px solid rgba(169, 169, 169, 0.19);\n}\n\n\n.notify-container {\n    position: fixed;\n    top: 10px;\n    right: 20px;\n    z-index: 999999;\n}\n\n.notify {\n    margin: 10px 0 17px;\n    border-radius: 20px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5),\n    inset 0 1px 0 rgba(255, 255, 255, 0.6);\n    width: 300px;\n    height: 50px;\n    background: red;\n    visibility: visible;\n}\n\n@keyframes show {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n\n@keyframes hide {\n    from {\n        opacity: 1;\n    }\n    to {\n        opacity: 0;\n    }\n}\n\n.notify_delete {\n    display: none;\n}\n\n.notify__close {\n    display: inline-block;\n    margin-right: 11px;\n    font-weight: bold;\n    float: right;\n    font-size: 36px;\n    line-height: 50px;\n    color: white;\n    cursor: pointer;\n}\n\n.notify__text {\n    display: inline-block;\n    margin-left: 20px;\n    line-height: 50px;\n    font-family: 'Open Sans', sans-serif;\n    color: white;\n    cursor: default;\n}", ""]);

// exports


/***/ }),
/* 30 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = SignUp;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Form_Form_SignUpForm__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Form_ValidForm_ValidSignUpForm__ = __webpack_require__(11);





let data = {
    title: 'SIGN UP',
	classForm: 'form__signup',
    fields: [
        {
            attrs: {
                type: 'text',
                name: 'username',
                placeholder: 'Enter username',
            },
        },
        {
            attrs: {
                type: 'text',
                name: 'email',
                placeholder: 'Enter email',
            },
        },
        {
            attrs: {
                type: 'password',
                name: 'password',
                placeholder: 'Enter password',
            },
        },
        {
            attrs: {
                type: 'password',
                name: 'repeatPassword',
                placeholder: 'Repeat password',
            },
        }],
    buttons: [
        {
            attrs: {
                type: 'submit',
                class: 'form__submit',
                value: 'SIGN UP',
                id: 'signUp-button-signUp',
            },
        },
        // {
        //     attrs: {
        //         class: 'form__back',
        //         value: 'BACK',
        //         id: 'signUp-button-back',
        //     },
        // },
    ]
};

/**
 * Получаем страницу регистрации
 */
function SignUp() {
    return new __WEBPACK_IMPORTED_MODULE_0__components_Form_Form_SignUpForm__["a" /* default */]('section', {id: 'section-signUp'}, [], data, __WEBPACK_IMPORTED_MODULE_1__components_Form_ValidForm_ValidSignUpForm__["a" /* default */]);
}



/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Form__ = __webpack_require__(6);


class SignUpForm extends __WEBPACK_IMPORTED_MODULE_0__Form__["a" /* default */] {
    /**
     * @param {string} [tagName='div'] - tagName блока
     * @param {*} [attrs={}] - объект с атрибутами блока
     * @param {string[]} [classes=[]] - список имён классов
     * @param {*} [data={}] - объект с данными блока
     * @param {class} ValidSignInForm - кдасс валидации данных
     * @constructor
     */
    constructor(tagName = 'div', attrs = {}, classes = [], data, ValidSignInForm) {
        super(tagName, attrs, classes, data);
        this.validator = ValidSignInForm;
    }

    /**
     * Позволяет подписаться на событие формы регистрации
     * @return {Promise}
     */
    onSubmitSignUpForm(callback) {
        let signUpForm = document.getElementsByClassName('form__signup')[0];

        signUpForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const formdata = {};
            const elements = signUpForm.elements;

            for (let name in elements) {
                formdata[name] = elements[name].value;
            }

            const isValid = new this.validator(formdata.username, formdata.email,
                formdata.password, formdata.repeatPassword);

            if(isValid.validForm()) {
                callback(formdata);
            }
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SignUpForm;


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createHeader;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Header_Header__ = __webpack_require__(34);


let data = {
    nameGame: 'TANKS',
};

/**
 * Получаем страницу header
 */
function createHeader() {
    return new __WEBPACK_IMPORTED_MODULE_0__components_Header_Header__["a" /* default */]('section', {id: 'section-header'}, [], data);
}


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Block_BlockComponents__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Header_pug__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Header_pug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Header_pug__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header_css__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Header_css__);




/**
 * Класс Header-а
 * @module Header
 */
class Header extends __WEBPACK_IMPORTED_MODULE_0__Block_BlockComponents__["a" /* default */] {
    /**
     * @param {string} [tagName='div'] - tagName блока
     * @param {*} [attrs={}] - объект с атрибутами блока
     * @param {string[]} [classes=[]] - список имён классов
     * @param {*} [data={}] - объект с данными блока
     * @constructor
     */
    constructor(tagName = 'div', attrs = {}, classes = [], data) {
        super(tagName, attrs, classes, data);
    }

    /**
     * Получить Header
     */
    getClassElement() {

        let data = this.getData();

        this.setHTML(__WEBPACK_IMPORTED_MODULE_1__Header_pug___default()({data}));
        return this.getElement();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Header;



/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(3);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (data) {var pug_indent = [];
pug_html = pug_html + "\n\u003Cdiv class=\"theme\"\u003Echange theme\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"header\"\u003E\n  \u003Cp class=\"header__text\"\u003E" + (pug.escape(null == (pug_interp = data.nameGame) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Cimg class=\"header__logo\" src=\"static\u002Fimg\u002Flogo.png\"\u003E\n\u003C\u002Fdiv\u003E";}.call(this,"data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined));;return pug_html;};
module.exports = template;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(37);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(5)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./Header.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./Header.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".header {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.header__logo {\r\n    width: 230px;\r\n    height: auto;\r\n    margin-left: -60px;\r\n}\r\n\r\n.header__text {\r\n    font-size: 2.7em;\r\n    font-family: \"Arial Black\", Gadget, sans-serif;\r\n    transform: rotate(-90deg);\r\n}\r\n\r\n.theme {\r\n    background-color: whitesmoke;\r\n    font-weight: 700;\r\n    font-family: \"Verdana\", sans-serif;\r\n    color: black;\r\n    border-radius: 10%;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    width: 7em;\r\n    margin: 15px 0 5px 15px;\r\n    cursor: pointer;\r\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);\r\n    padding: 1px 7px;\r\n    border: none;\r\n    font-size: 1.1em;\r\n}\r\n\r\n.theme:hover {\r\n    background-color: #e9ecf0;\r\n}", ""]);

// exports


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createUnRegMenu;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Menu_Menu__ = __webpack_require__(12);


let data = {
    user: undefined,
    buttons: [
        {
            text: 'SIGN IN',
            id: 'menu-button-signIn',
            class: 'menu__button',
        },
        {
            text: 'SIGN UP',
            id: 'menu-button-signUp',
            class: 'menu__button',
        }
    ]
};

/**
 * Получаем страницу незарегистрированного пользователя
 */
function createUnRegMenu() {
    return new __WEBPACK_IMPORTED_MODULE_0__components_Menu_Menu__["a" /* default */]('section', {id: 'section-unRegMenu'}, [], data);
}


/***/ }),
/* 39 */
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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(41);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(5)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./Menu.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./Menu.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".menu {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-bottom: 15px;\r\n    flex-flow: column nowrap;\r\n}\r\n\r\n.menu__button {\r\n    background-color: whitesmoke;\r\n    font-size: 1.5em;\r\n    font-weight: 700;\r\n    font-family: \"Verdana\", sans-serif;\r\n    color: black;\r\n    padding: 7px 17px;\r\n    border: 3px solid #041712;\r\n    border-radius: 10%;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    width: 7em;\r\n    margin: 15px 0 5px 15px;\r\n    cursor: pointer;\r\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);\r\n}\r\n\r\n.menu__button:hover {\r\n    background-color: rgba(4, 23, 18, 0.04);\r\n    border: 3px solid rgba(169, 169, 169, 0.19);\r\n}\r\n\r\n.menu__player {\r\n    text-transform: uppercase;\r\n}", ""]);

// exports


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createRegMenu;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Menu_Menu__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_UserService__ = __webpack_require__(9);



/**
 * Получаем страницу зарегестрированного пользователя
 */
function createRegMenu() {
    let data = {
        user: 'name',
        buttons: [
            {
                text: 'START',
                id: 'menu-button-playGame',
                class: 'menu__button',
            },
            {
                text: 'LOG OUT',
                id: 'menu-button-logout',
                class: 'menu__button',
            }
        ]
    };

    return new __WEBPACK_IMPORTED_MODULE_0__components_Menu_Menu__["a" /* default */]('section', {id: 'section-regMenu'}, [], data);
}


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createAboutUs;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Table_Table__ = __webpack_require__(13);

let data = {
    idButton: 'aboutUs-button-back',
    classTable: 'about_table',
    title: 'DEVELOPERS',
    users: [
        {
            name: 'GRIGOREV PAVEL',
            position: 'FRONTEND',

        },
        {
            name: 'SAMOKHIN MAXIM',
            position: 'FRONTEND',

        },
        {
            name: 'ZUBAREV ANTON',
            position: 'BACKEND',

        },
        {
            name: 'PITIK DIMA',
            position: 'BACKEND',

        },
        {
            name: 'ALEXANDER TSVETKOV',
            position: 'MENTOR',

        },
    ]
};

/**
 * Получаем страницу о нас
 */
function createAboutUs() {
    return new __WEBPACK_IMPORTED_MODULE_0__components_Table_Table__["a" /* default */]('section', {id: 'section-aboutUs'}, [], data);
}


/***/ }),
/* 44 */
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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(46);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(5)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./Table.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./Table.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".table__title {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 2em;\n    font-weight: 700;\n    font-family: \"Verdana\", sans-serif;\n    margin: 1% 0 1% 1%;\n}\n\n.table__content {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 15px;\n}\n\n.table__back {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 15px;\n    flex-flow: column nowrap;\n\n}\n\n.table__button {\n    background-color: whitesmoke;\n    font-size: 1.5em;\n    font-weight: 700;\n    font-family: \"Verdana\", sans-serif;\n    color: black;\n    padding: 7px 17px;\n    border: 3px solid #041712;\n    border-radius: 10%;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    width: 7em;\n    margin: 15px 0 5px 15px;\n    cursor: pointer;\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);\n}\n\n.table__button:hover {\n    background-color: rgba(4, 23, 18, 0.04);\n    border: 3px solid rgba(169, 169, 169, 0.19);\n}\n\n\n.table__tag {\n    border-collapse: collapse;\n    font-family: \"Verdana\", sans-serif;\n}\n\n.table__td, .table__th {\n    text-align: center;\n    padding: 10px;\n}\n\n.table__player {\n    justify-content: center;\n    display: flex;\n    margin: 18px 0 15px;\n}\n", ""]);

// exports


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Scoreboard;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Table_Table__ = __webpack_require__(13);

let data = {
    idButton: 'score-button-back',
    classTable: 'score_table',
    title: 'SCOREBOARD',
    users: [
        {
            name: 'Name',
            position: 'Rating',

        },
        {
            name: 'Peter',
            position: '100',

        },
        {
            name: 'Lois',
            position: '150',

        },
        {
            name: 'Joe',
            position: '300',

        },
        {
            name: 'Cleveland',
            position: '250'
        }
    ],
    userScore: 'score',
};

/**
 * Получаем страницу счета
 */
function Scoreboard() {
    return new __WEBPACK_IMPORTED_MODULE_0__components_Table_Table__["a" /* default */]('section', {id: 'section-scoreList'}, [], data);
}


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = CreateFooter;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Footer_Footer__ = __webpack_require__(49);


let data = {
    imgListData: [
        {
            class: "footer__sound",
            src: "./static/img/sound.png",
            id: "menu-button-music",
        },
        {
            class: "footer__score",
            src: "./static/img/score.png",
            id: "menu-button-score",
        },
        {
            class: "footer__info",
            src: "./static/img/info.png",
            id: "menu-button-about",
        },
    ]
};

/**
 * Получаем страницу footer-а
 */
function CreateFooter() {
    return new __WEBPACK_IMPORTED_MODULE_0__components_Footer_Footer__["a" /* default */]('section', {id: 'section-footer'}, [], data);
}


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Block_BlockComponents__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Footer_pug__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Footer_pug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Footer_pug__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Footer_css__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Footer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Footer_css__);




/**
 * Класс footer-а
 * @module Footer
 */
class Footer extends __WEBPACK_IMPORTED_MODULE_0__Block_BlockComponents__["a" /* default */] {
    /**
     * @param {string} [tagName='div'] - tagName блока
     * @param {*} [attrs={}] - объект с атрибутами блока
     * @param {string[]} [classes=[]] - список имён классов
     * @param {*} [data={}] - объект с данными блока
     * @constructor
     */
    constructor(tagName = 'div', attrs = {}, classes = [], data) {
        super(tagName, attrs, classes, data);
    }

    /**
     * Получить footer
     */
    getClassElement() {
		let data = this.getData();
        this.setHTML(__WEBPACK_IMPORTED_MODULE_1__Footer_pug___default()({data}));
        return this.getElement();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Footer;



/***/ }),
/* 50 */
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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(52);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(5)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./Footer.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./Footer.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".footer {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.footer__logo {\r\n    width: 230px;\r\n    height: auto;\r\n    margin-left: -60px;\r\n}\r\n\r\n.footer__sound {\r\n    width: 100px;\r\n    margin: 0 160px;\r\n}\r\n\r\n.footer__score {\r\n    width: 50px;\r\n    margin: 0 125px;\r\n}\r\n\r\n.footer__info {\r\n    width: 50px;\r\n    margin: 0 55px;\r\n}", ""]);

// exports


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Route__ = __webpack_require__(54);





class Router {

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
        const route = new __WEBPACK_IMPORTED_MODULE_0__Route__["a" /* default */](pathname, view, options);
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
/* harmony export (immutable) */ __webpack_exports__["a"] = Router;


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


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

/* harmony default export */ __webpack_exports__["a"] = (Route);

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Controller__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_css_style__ = __webpack_require__(2);






class MenuStartController extends __WEBPACK_IMPORTED_MODULE_0__Controller__["a" /* default */] {

	constructor(opt = {}) {
		if (MenuStartController.__instance) {
			return MenuStartController.__instance;
		}

		super(opt);
		MenuStartController.__instance = this;
		this.theme = new __WEBPACK_IMPORTED_MODULE_1__static_css_style__["a" /* default */]();
		this.flag = true;
		this.addListener();
	}

	addListener() {

		document.getElementById('menu-button-playGame').addEventListener('click', event => {
			event.preventDefault();
			this._router.go('/play');
		});

		document.getElementById('menu-button-logout').addEventListener('click', event => {
			event.preventDefault();
			this.userService.logout()
				.then((response) => {
					console.log(response);
					this.userService.user.id = 0;
					this.show();
					this.page_parts.get("RegMenu").hide();
					this._router.go('/');
				})
				.catch(e => {
					alert(e);
				});
		});

		if (this.flag) {
			document.getElementsByClassName('theme')[0].addEventListener('click', event => {
				event.preventDefault();
				this.theme.changeTheme();
			});

			document.getElementById('menu-button-music').addEventListener('click', event => {
				event.preventDefault();
				this._router.go('/');
			});

			document.getElementById('menu-button-score').addEventListener('click', event => {
				event.preventDefault();
				this._router.go('/score');
			});

			document.getElementById('menu-button-about').addEventListener('click', event => {
				event.preventDefault();
				this._router.go('/about');
			});

			document.getElementById('menu-button-signIn').addEventListener('click', event => {
				event.preventDefault();
				this._router.go('/signin');
			});

			document.getElementById('menu-button-signUp').addEventListener('click', event => {
				event.preventDefault();
				this._router.go('/signup');
			});

			this.flag = false;
		}

	}

	resume() {
		this.show();
	}

	show() {
		this.page_parts.get("Header").show();
		console.log("[MenuStartController] in show");

		this.userService
			.getProfile()
			.then((resp) => {
				console.log("[userService.getProfile] response: " + resp);
				this.userService.user.set(resp);
				console.log("alkscjbasbcasbucaosubc:");
				console.log(this.page_parts.get("RegMenu").data.user);
				this.page_parts.get("RegMenu").data.user = this.userService.user.getUsername();
				this.page_parts.get("RegMenu").getClassElement().hidden=false;
				this.addListener();
				// this.page_parts.get("RegMenu").show();
			})
			.catch((err) => {
				console.log("[userService.getProfile] err: " + err);
				this.page_parts.get("UnRegMenu").show();
			});

		this.page_parts.get("Footer").show();
	}

	hide() {
		this.page_parts.get("Header").hide();
		this.page_parts.get("UnRegMenu").hide();
		this.page_parts.get("RegMenu").hide();
		this.page_parts.get("Footer").hide();
	}
}

/* harmony default export */ __webpack_exports__["a"] = (MenuStartController);


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Controller__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_classes_index__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_classes_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__game_classes_index__);



// import Game from '../game/classes/Game/Game';


class PlayGameController extends __WEBPACK_IMPORTED_MODULE_0__Controller__["a" /* default */] {

	constructor(opt = {}) {
		if (PlayGameController.__instance) {
			return PlayGameController.__instance;
		}

		super(opt);
		PlayGameController.__instance = this;

	}

	show() {
		this.userService
			.getProfile()
			.then((resp) => {
				console.log("[userService.getProfile] response: " + resp);
				this.userService.user.set(resp);
				let game = new __WEBPACK_IMPORTED_MODULE_1__game_classes_index___default.a();
			})
			.catch((err) => {
				console.log("[userService.getProfile] err: " + err);
				this._router.go('/');
			});
	}

	hide() {

	}

}

/* harmony default export */ __webpack_exports__["a"] = (PlayGameController);

/***/ }),
/* 57 */
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
// require('pixi');
// require('p2');
// require('phaser');
// import 'styles/style.styl'; // Registering styles for the page; They will automatically inject.
var boot_state_1 = __webpack_require__(58);
var preloader_state_1 = __webpack_require__(60);
var main_state_1 = __webpack_require__(65);
var world_state_1 = __webpack_require__(66);
// The main class of our application
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super.call(this, document.documentElement.clientWidth, document.documentElement.clientHeight, Phaser.AUTO, 'content', null) || this;
        _this.state.add('boot', boot_state_1.default);
        _this.state.add('preloader', preloader_state_1.default);
        _this.state.add('main', main_state_1.default);
        _this.state.add('world', world_state_1.default);
        debugger;
        _this.state.start('boot'); // Initialize and start `boot` state
        return _this;
    }
    return App;
}(Phaser.Game));
exports.default = App;


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
/** Imports */
var state_1 = __webpack_require__(8);
var titlepage = __webpack_require__(14);
var loaderImage = __webpack_require__(59);
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
        debugger;
        this.game.state.start('preloader', true, false);
    };
    return BootState;
}(state_1.default));
exports.default = BootState;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "14d4ff248dc707525c77546bd8f6a020.png";

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
/** Imports */
var state_1 = __webpack_require__(8);
// Webpack will replace these imports with a URLs to images
var tanks = __webpack_require__(15);
var tanksJSON = __webpack_require__(16);
var enemy = __webpack_require__(61);
var bullet = __webpack_require__(62);
var kaboom = __webpack_require__(63);
var titlepage = __webpack_require__(14);
var logo = __webpack_require__(64);
// const startAudio      = require('../../../static/staticsGame/music/boom.mp3');
var earth = __webpack_require__(17);
var pause = __webpack_require__(18);
var box_tree = __webpack_require__(19);
// The state for loading core resources for the game
var PreloaderState = /** @class */ (function (_super) {
    __extends(PreloaderState, _super);
    function PreloaderState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PreloaderState.prototype.preload = function () {
        console.debug('Assets loading started');
        debugger;
        this.game.load.image('titlepage', titlepage);
        this.game.load.image('logo', logo);
        // this.game.load.audio('startAudio', startAudio, true);
        this.game.load.image('earth', earth);
        this.game.load.image('pause', pause);
        this.game.load.image('box_tree', box_tree);
        this.game.load.atlas('tank', tanks, tanksJSON);
        this.game.load.atlas('enemy', enemy, tanksJSON);
        this.game.load.image('bullet', bullet);
        this.game.load.spritesheet('kaboom', kaboom, 64, 64, 23);
        debugger;
    };
    PreloaderState.prototype.create = function () {
        console.debug('Assets loading completed');
        debugger;
        this._background = this.game.add.sprite(0, 0, 'titlepage');
        this._background.alpha = 0;
        var tween = this.game.add.tween(this._background).to({ alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);
        tween.onComplete.add(this.startMainMenu, this);
    };
    PreloaderState.prototype.startMainMenu = function () {
        debugger;
        this.game.add.tween(this._background).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
        this.game.state.start('main', true, false);
    };
    return PreloaderState;
}(state_1.default));
exports.default = PreloaderState;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f50e6d82d4bfab326976a927ee97741f.png";

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fae6edb0e0a51c1e45006a123c63dff2.png";

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5ddcf208bfb5ee103c39ea71c64a107f.png";

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6f7c29bcd42fe6d20b75c1853ca7e6d3.png";

/***/ }),
/* 65 */
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
var state_1 = __webpack_require__(8);
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
/* 66 */
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
var state_1 = __webpack_require__(8);
var tank_state_1 = __webpack_require__(67);
var earth = __webpack_require__(17);
var pause = __webpack_require__(18);
var box_tree = __webpack_require__(19);
var tanks = __webpack_require__(15);
var tanksJSON = __webpack_require__(16);
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
        this._tank = new tank_state_1.default(this.game, "hello");
        this._pause = this.game.add.button(10, 10, "pause", this.startPause, this);
        this._pause.scale.setTo(0.2, 0.2);
        this._pause.frame = 1;
        this._pause['clicked'] = false;
        this.game.camera.follow(this._tank);
        this.game.camera.deadzone = new Phaser.Rectangle(150, 150, 500, 300);
        this.game.camera.focusOnXY(0, 0);
    };
    WorldState.prototype.update = function () {
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
/* 67 */
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
        _this.create();
        return _this;
    }
    TankState.prototype.create = function () {
        this._tank = this._game.add.sprite(50, 400, 'tank', 'tank1');
        this._tank.anchor.setTo(0.5, 0.5);
        this._game.physics.enable(this._tank, Phaser.Physics.ARCADE);
        this._tank.body.maxVelocity.setTo(100, 100);
        this._tank.body.collideWorldBounds = true;
        this._turret = this._game.add.sprite(50, 400, 'tank', 'turret');
        this._turret.anchor.setTo(0.5, 0.5);
        this._cursor = this._game.input.keyboard.createCursorKeys();
    };
    TankState.prototype.update = function () {
        // величина угла поворота
        if (this._cursor.left.isDown) {
            this._tank.angle -= 5;
        }
        else if (this._cursor.right.isDown) {
            this._tank.angle += 5;
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
            this._game.physics.arcade.velocityFromRotation(this._tank.rotation, this._currentSpeed, this._tank.body.velocity);
        }
        // привязываем башню к танку
        this._turret.x = this._tank.x;
        this._turret.y = this._tank.y;
        this._turret.rotation = this._game.physics.arcade.angleToPointer(this._turret);
    };
    return TankState;
}(Phaser.Sprite));
exports.default = TankState;


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Controller__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Form_Form_Form__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_css_style__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Form_ValidForm_Notify_Notify__ = __webpack_require__(7);







class SignInController extends __WEBPACK_IMPORTED_MODULE_0__Controller__["a" /* default */] {

	constructor(opt = {}) {
		if (SignInController.__instance) {
			return SignInController.__instance;
		}

		super(opt);
		SignInController.__instance = this;
		this.theme = new __WEBPACK_IMPORTED_MODULE_2__static_css_style__["a" /* default */]();
		this.addListener();
	}

	addListener() {
		document.getElementsByClassName('theme')[0].addEventListener('click', event => {
			event.preventDefault();
			this.theme.changeTheme();
		});

		this.page_parts.get('SignIn').onSubmitSignInForm(formdata => {
			this.userService
				.signIn(formdata.email, formdata.password)
				.then((data) => {
					this.userService.user.set(data);
					console.log("[onSubmitSignInForm] Success sign in");
					console.log('signIn: ' + this.userService.user.getUsername());
					__WEBPACK_IMPORTED_MODULE_1__components_Form_Form_Form__["a" /* default */].reset();
					this._router.go('/');
				})
				.catch((err) => {
					console.log("[onSubmitSignInForm] err: " + err);
					let notify = new __WEBPACK_IMPORTED_MODULE_3__components_Form_ValidForm_Notify_Notify__["a" /* default */]();
					notify.notify('server error');
				});
		});
	}

	resume() {
		this.show();
	}

	show() {
		this.page_parts.get("Header").show();
		this.page_parts.get("SignIn").show();
	}

	hide() {
		this.page_parts.get("Header").hide();
		this.page_parts.get("SignIn").hide();
	}
}

/* harmony default export */ __webpack_exports__["a"] = (SignInController);

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Controller__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Form_Form_Form__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_css_style__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Form_ValidForm_Notify_Notify__ = __webpack_require__(7);








class SignUpController extends __WEBPACK_IMPORTED_MODULE_0__Controller__["a" /* default */] {

    constructor(opt = {}) {
        if(SignUpController.__instance) {
            return SignUpController.__instance;
        }

        super(opt);
        SignUpController.__instance = this;
		this.theme = new __WEBPACK_IMPORTED_MODULE_2__static_css_style__["a" /* default */]();
        this.addListener();
    }

    addListener() {

		document.getElementsByClassName('theme')[0].addEventListener('click', event => {
			event.preventDefault();
			this.theme.changeTheme();
		});

        this.page_parts.get('SignUp').onSubmitSignUpForm(formdata => {
            this.userService
                .signUp(formdata.username, formdata.email, formdata.password)
                .then((data) => { this.userService.user.set(data);
                    console.log("[onSubmitSignUpForm] Success sign up");
                    __WEBPACK_IMPORTED_MODULE_1__components_Form_Form_Form__["a" /* default */].reset();
                    this._router.go('/');
                })

                .catch((err) => {
                    console.log("[onSubmitSignUpForm] err: " + err);
					let notify = new __WEBPACK_IMPORTED_MODULE_3__components_Form_ValidForm_Notify_Notify__["a" /* default */]();
                    notify.notify('server error');
				});
        });
    }

    resume() {
        this.show();
    }

    show() {
        this.page_parts.get("Header").show();
        this.page_parts.get("SignUp").show();
    }

    hide() {
        this.page_parts.get("Header").hide();
        this.page_parts.get("SignUp").hide();
    }
}

/* harmony default export */ __webpack_exports__["a"] = (SignUpController);

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Controller__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_css_style__ = __webpack_require__(2);





class ScoreListController extends __WEBPACK_IMPORTED_MODULE_0__Controller__["a" /* default */] {

	constructor(opt = {}) {
		if (ScoreListController.__instance) {
			return ScoreListController.__instance;
		}

		super(opt);
		ScoreListController.__instance = this;
		this.theme = new __WEBPACK_IMPORTED_MODULE_1__static_css_style__["a" /* default */]();
		this.addListener();
	}

	addListener() {
		document.getElementsByClassName('theme')[0].addEventListener('click', event => {
			event.preventDefault();
			this.theme.changeTheme();
		});

		document.getElementById('score-button-back').addEventListener('click', event => {
			event.preventDefault();
			this._router.go('/');
		});
	}

	resume() {
		this.show();
	}

	show() {
		this.page_parts.get("Header").show();
		this.userService
			.getScorelist()
			.then((resp) => {
				console.log('good answer');
				console.log(this.page_parts.get("Scoreboard").data);
			})
			.catch((err) => {
				console.log('bad answer');
			});

		console.log(this.userService.user.getScore());

		this.page_parts.get("Scoreboard").data.userScore = this.userService.user.getScore();
		this.page_parts.get("Scoreboard").getClassElement().hidden=false;
		this.addListener();

	}

	hide() {
		this.page_parts.get("Header").hide();
		this.page_parts.get("Scoreboard").hide();
	}
}

/* harmony default export */ __webpack_exports__["a"] = (ScoreListController);


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Controller__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_css_style__ = __webpack_require__(2);





class AboutUsController extends __WEBPACK_IMPORTED_MODULE_0__Controller__["a" /* default */] {

    constructor(opt = {}) {
        if(AboutUsController.__instance) {
            return AboutUsController.__instance;
        }

        super(opt);
        AboutUsController.__instance = this;
		this.theme = new __WEBPACK_IMPORTED_MODULE_1__static_css_style__["a" /* default */]();
        this.addListener();
    }

    addListener() {
		document.getElementsByClassName('theme')[0].addEventListener('click', event => {
			event.preventDefault();
			this.theme.changeTheme();
		});

        document.getElementById('aboutUs-button-back').addEventListener('click', event => {
            event.preventDefault();
            this._router.go('/');
        });
    }

    resume() {
        this.show();
    }

    show() {
        this.page_parts.get("Header").show();
        this.page_parts.get("AboutUs").show();
    }

    hide() {
        this.page_parts.get("Header").hide();
        this.page_parts.get("AboutUs").hide();
    }
}

/* harmony default export */ __webpack_exports__["a"] = (AboutUsController);


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = RegisterSW;
function RegisterSW() {
	if (navigator.serviceWorker !== undefined) {
		navigator.serviceWorker.register('./sw.js', {scope: '/'})
			.then(registration => {
				console.log(`good registration worker: ${registration}`);
			})
			.catch(error => {
				console.log(`bad registration worker: ${error}`);
			});
	}
}

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map