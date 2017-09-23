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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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
     * @param {HTMLElement} el - корневой элемент блока
     * @constructor
     */
    constructor(el) {
        this.el = el;
    }

    /**
     * Фабричный метод, который ползволяет удобро создавать блоки с заданными характеристиками
     * @param {string} [tagName='div'] - tagName блока
     * @param {*} [attrs={}] - объект с атрибутами блока
     * @param {string[]} [classes=[]] - список имён классов
     * @param {string|null} [text=null] - опциональный текст блока
     * @return {Block}
     * @constructor
     */
    static Create(tagName = 'div', attrs = {}, classes = [], text = null) {
        const el = document.createElement(tagName);
        classes.forEach(function (className) {
            el.classList.add(className);
        });
        for (let name in attrs) {
            el.setAttribute(name, attrs[name]);
        }
        if (text) {
            el.textContent = text;
        }
        return new Block(el);
    }

    /**
     * Установить новый контекст innerHTML
     * @param {html} text
     */
    setHTML(html) {
        this.el.innerHTML = html;
    }

    /**
     * Установить новый текст для блока
     * @param {string} text
     */
    setText(text) {
        this.el.textContent = text;
    }

    /**
     * Очищает содержимое блока
     */
    clear() {
        this.el.innerHTML = '';
    }

    /**
     * Скрывает блок
     */
    hide() {
        this.el.setAttribute('hidden', 'hidden');
    }

    /**
     * Отображает блок
     */
    show() {
        this.el.removeAttribute('hidden');
    }

    /**
     * Добавляет к текущему блоку дочерний
     * @param {Block} block
     * @return {Block}
     */
    append(block) {
        this.el.appendChild(block.el);
        return this;
    }

    /**
     * Возвращает элемент блока
     * @return {el}
     */
    getElement() {
        return this.el;
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

/* harmony default export */ __webpack_exports__["a"] = (Block);

/***/ }),
/* 1 */
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
    str = str || __webpack_require__(13).readFileSync(filename, 'utf8')
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
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FormConstruct_css__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FormConstruct_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__FormConstruct_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BlockConstruct_BlockConstruct__ = __webpack_require__(0);





class Form extends __WEBPACK_IMPORTED_MODULE_1__BlockConstruct_BlockConstruct__["a" /* default */] {
    constructor(fields = []) {
        const el = document.createElement('form');
        super(el);

        fields.forEach(function (field) {
            const f = __WEBPACK_IMPORTED_MODULE_1__BlockConstruct_BlockConstruct__["a" /* default */].Create('input', field.attrs || {}, field.classes || []);
            this.append(f);
        }.bind(this));
    }

    onSubmit(callback) {
        this.el.addEventListener('submit', function (e) {
            e.preventDefault();
            const formdata = {};
            const elements = this.el.elements;
            for (let name in elements) {
                formdata[name] = elements[name].value;
                console.log(name + " : " + formdata[name]);
            }

            callback(formdata);
        }.bind(this));
    }

    reset() {
        this.el.reset();
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Form);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PageConstruct_css__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PageConstruct_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__PageConstruct_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PageConstruct_pug__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PageConstruct_pug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__PageConstruct_pug__);





const PageConstruct = function Page(opt = {}) {
    let container = document.createElement('div');
    container.innerHTML = __WEBPACK_IMPORTED_MODULE_1__PageConstruct_pug___default()({
        element: opt.el
    });
    return container;
};

/* unused harmony default export */ var _unused_webpack_default_export = (PageConstruct);

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

var	fixUrls = __webpack_require__(11);

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
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_views_parts_AboutUs_AboutUs__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_views_parts_MenuGame_MenuGame__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_views_parts_SignIn_SignIn__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_views_parts_SignUp_SignUp__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__js_views_parts_ScoreList_ScoreList__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__js_views_parts_ScoreList_ScoreList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__js_views_parts_ScoreList_ScoreList__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__js_views_constructs_BlockConstruct_BlockConstruct__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__js_services_UserService__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__js_components_ValidSigninForm__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__js_components_ValidSignupForm__ = __webpack_require__(30);











const userService = new __WEBPACK_IMPORTED_MODULE_6__js_services_UserService__["a" /* default */]();

const app = new __WEBPACK_IMPORTED_MODULE_5__js_views_constructs_BlockConstruct_BlockConstruct__["a" /* default */](document.getElementById('application'));
const title = __WEBPACK_IMPORTED_MODULE_5__js_views_constructs_BlockConstruct_BlockConstruct__["a" /* default */].Create('a', {}, ['application-header'], 'Frontend-sample application');


const sections = {
    menu: __WEBPACK_IMPORTED_MODULE_5__js_views_constructs_BlockConstruct_BlockConstruct__["a" /* default */].Create('div', {}, ['logo', 'logo_button']),
    signin: Object(__WEBPACK_IMPORTED_MODULE_2__js_views_parts_SignIn_SignIn__["a" /* default */])(),
    signup: Object(__WEBPACK_IMPORTED_MODULE_3__js_views_parts_SignUp_SignUp__["a" /* default */])(),
    about: (new __WEBPACK_IMPORTED_MODULE_0__js_views_parts_AboutUs_AboutUs__["a" /* default */]()).get(),
    /*score: ScoreList(),*/
    hide() {
        this.menu.hide();
        this.signin.hide();
        this.signup.hide();
        this.about.hide();
    },
};

sections.hide();

app
    .append(sections.menu)
    .append(sections.signin)
    .append(sections.signup)
    .append(sections.about);

function openSignin() {
    if (!sections.signin.ready) {
        let backClick = false;

        // const backButton  = sections.signin.getElement().getElementById("signin_back_button");
        sections.signin.on('click', function (event) {
            event.preventDefault();
            const target = event.current;
            console.log("target = " + target);
            const section = target.getAttribute('data-section');
            console.log("section = " + section);
            switch (section) {
                case 'signin':
                    backClick = false;
                    break;
                case 'back':
                    backClick = true;
                    break;
            }
        });

        sections.signin.onSubmit(function (formdata) {
            if(backClick) {
                openMenu();
            } else {
                let form = document.getElementById("signin_login").parentNode;
                if (__WEBPACK_IMPORTED_MODULE_7__js_components_ValidSigninForm__["a" /* default */].validLoginForm(formdata.login, formdata.password, form)) {
                    userService.signin(formdata.login, formdata.password, function (err, resp) {
                        if (err) {
                            alert(`Some error ${err.status}: ${err.responseText}`);
                            return;
                        }
                        sections.signin.reset();
                        userService.getData(function (err, resp) {
                            if (err) {
                                return;
                            }
                            openMenu();
                        }, true);
                    });
                }
            }
        });

        sections.signin.ready = true;
    }

    sections.hide();
    if (userService.isLoggedIn()) {
        return openMenu();
    }
    sections.signin.show();
}

function openAbout() {
    sections.hide();

/*    if(userService.isLoggedIn()) {
        return openMenu();
    }*/

    sections.about.show();
}

function openSignup() {
    if (!sections.signup.ready) {
        sections.signup.onSubmit(function (formdata) {
            let form = document.getElementById("signup_login").parentNode;
            if(__WEBPACK_IMPORTED_MODULE_8__js_components_ValidSignupForm__["a" /* default */].validSignupForm(formdata.login, formdata.email, formdata.password, formdata.repeatPassword, form)) {
                userService.signup(formdata.login, formdata.email, formdata.password, function (err, resp) {
                    if (err) {
                        alert(`Some error ${err.status}: ${err.responseText}`);
                        return;
                    }

                    sections.signup.reset();
                    openMenu();
                });
            }
        });

        sections.signup.ready = true;
    }
    sections.hide();

/*    if (userService.isLoggedIn()) {
        return openMenu();
    }*/

    sections.signup.show();
}

function openScore () {
/*    if (!sections.scores.ready) {
        sections.scores.scoreboard = new Scoreboard();
        sections.scores
            .append(Block.Create('h2', {}, [], 'Список лидеров'))
            .append(sections.scores.scoreboard);
        sections.scores.ready = true;
    }
    sections.hide();
    userService.loadUsersList(function (err, users) {
        if (err) {
            alert(`Some error ${err.status}: ${err.responseText}`);
            return openMenu();
        }

        sections.scores.scoreboard.update(users);
        sections.scores.show();
    }, true);*/
}

function openProfile() {
/*    if (!sections.profile.ready) {
        sections.profile.profile = new Profile();
        sections.profile
            .append(Block.Create('h2', {}, [], 'Мой профиль'))
            .append(sections.profile.profile);
        sections.profile.ready = true;
    }
    sections.hide();
    if (userService.isLoggedIn()) {
        userService.getData(function (err, user) {
            if (err) {
                alert(`Some error ${err.status}: ${err.responseText}`);
                return openMenu();
            }

            sections.profile.profile.update(user);
            sections.profile.show();
        }, true);
        return;
    }
    return openMenu();*/
}

function openExit() {
    userService.signout();
    console.log("press exit...");
    openMenu();
}

function openMenu() {

    if (!sections.menu.ready) {

        sections.menu.items = {
            signin: __WEBPACK_IMPORTED_MODULE_5__js_views_constructs_BlockConstruct_BlockConstruct__["a" /* default */].Create('button', {'data-section': 'signin'}, ['button', 'button_login'], 'SIGN IN'),
            signup: __WEBPACK_IMPORTED_MODULE_5__js_views_constructs_BlockConstruct_BlockConstruct__["a" /* default */].Create('button', {'data-section': 'signup'}, ['button', 'button_register'], 'SIGN UP'),
            about: __WEBPACK_IMPORTED_MODULE_5__js_views_constructs_BlockConstruct_BlockConstruct__["a" /* default */].Create('button', {'data-section': 'about'}, ['button', 'button_start'], 'ABOUT'),
            exit: __WEBPACK_IMPORTED_MODULE_5__js_views_constructs_BlockConstruct_BlockConstruct__["a" /* default */].Create('button', {'data-section': 'exit'}, ['button', 'button_start'], 'EXIT'),
        };

        sections.menu.on('click', function (event) {
            event.preventDefault();
            const target = event.target;
            console.log("target = " + target);
            const section = target.getAttribute('data-section');
            console.log("section = " + section);
            switch (section) {
                case 'signin':
                    openSignin();
                    break;
                case 'signup':
                    openSignup();
                    break;
                case 'exit':
                    openExit();
                    break;
                case 'about':
                    openAbout();
                    break;
            }
        });

        sections.menu
            .append(sections.menu.items.signin)
            .append(sections.menu.items.signup)
            .append(sections.menu.items.about)
            .append(sections.menu.items.exit);

        sections.menu.ready = true;
    }

    sections.hide();

    if (userService.isLoggedIn()) {

        console.log("registration ok");
        sections.menu.items.signin.show();
        sections.menu.items.signup.show();
        sections.menu.items.about.show();
        sections.menu.items.exit.show();

    } else {

        console.log("registration fail");
        sections.menu.items.signin.show();
        sections.menu.items.signup.show();
        sections.menu.items.about.hide();
        sections.menu.items.exit.hide();

    }

    sections.menu.show();
}

title.on('click', openMenu);
openMenu();

userService.getData(function (err, resp) {
    if (err) {
        return;
    }
    openMenu();
}, true);










/*
function createPage() {
    let body = document.getElementById('div');
    body.innerHTML = 'работает';
    addParts(body, "AppName", AboutUs());
}

function addParts(parent, name, elem) {
    elem.hidden = false;
    parent.appendChild(elem);
}
*/



/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constructs_PageConstruct_PageConstruct__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constructs_BlockConstruct_BlockConstruct__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AboutUs_pug__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AboutUs_pug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__AboutUs_pug__);


// import '../../../css/style.css';




const HEADER_TEXT = 'DEVELOPERS';
const MEMBERS = [
    {
        name: 'Grigorev Pavel',
        role: 'Frontend',
        link: 'https://github.com/grigorevpv',
    },
    {
        name: 'Samokhin Maxim',
        role: 'Frontend',
        link: 'https://github.com/MaxSamokhin',
    },
    {
        name: 'Zubarev Anton',
        role: 'Backend',
        link: 'https://github.com/ZubAnt',
    },
    {
        name: 'Pitik Dima',
        role: 'Backend',
        link: 'https://github.com/pitikdmitry',
    }

];

class AboutUs {

    constructor() {
        this.block = __WEBPACK_IMPORTED_MODULE_1__constructs_BlockConstruct_BlockConstruct__["a" /* default */].Create('div', {}, ['logo', 'table_form']);
        this.init();
    }

    init() {
        const table = __WEBPACK_IMPORTED_MODULE_1__constructs_BlockConstruct_BlockConstruct__["a" /* default */].Create('table', {}, ['about_table']);

        table.setHTML(__WEBPACK_IMPORTED_MODULE_2__AboutUs_pug___default()({
                members: MEMBERS,
                headText: HEADER_TEXT
            })
        );

        this.block.append(table);
    }

    get() {
        return this.block;
    }


}

/* harmony default export */ __webpack_exports__["a"] = (AboutUs);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(10);
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
		module.hot.accept("!!../../../../../node_modules/css-loader/index.js!./PageConstruct.css", function() {
			var newContent = require("!!../../../../../node_modules/css-loader/index.js!./PageConstruct.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 11 */
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(1);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;return pug_html;};
module.exports = template;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(1);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (headText, members) {pug_mixins["member_view"] = pug_interp = function(member){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Ctr class=\"score_table\"\u003E\u003Ctd\u003E\u003Ca" + (pug.attr("href", member.link, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = member.name) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E" + (pug.escape(null == (pug_interp = member.role) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
};
pug_html = pug_html + ("\u003Ch2 align=\"middle\" style=\"margin-left: 30%;\"\u003E" + (pug.escape(null == (pug_interp = headText) ? "" : pug_interp)));
// iterate members
;(function(){
  var $$obj = members;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var member = $$obj[pug_index0];
pug_mixins["member_view"](member);
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var member = $$obj[pug_index0];
pug_mixins["member_view"](member);
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fh2\u003E";}.call(this,"headText" in locals_for_with?locals_for_with.headText:typeof headText!=="undefined"?headText:undefined,"members" in locals_for_with?locals_for_with.members:typeof members!=="undefined"?members:undefined));;return pug_html;};
module.exports = template;

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MenuGame_pug__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MenuGame_pug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__MenuGame_pug__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constructs_BlockConstruct_BlockConstruct__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constructs_MenuConstruct_MenuConstruct__ = __webpack_require__(17);






const ITEMS = [
    {
        id: "menuGame_play",
        defaultImg: "images/Game.png",
        backImg: "images/Game_hold.png"
    },
    {
        id: "menuGame_score",
        defaultImg: "images/Score_btn.png",
        backImg: "images/Score_btn_hold.png"
    },
    {
        id: "menuGame_aboutUs",
        defaultImg: "images/About_us.png",
        backImg: "images/We_do_it.png"
    },
    {
        id: "menuGame_rules",
        defaultImg: "images/About_rules.png",
        backImg: "images/About_rules_2.png"
    }
];

const MenuGame = function MenuStart() {
    let block = __WEBPACK_IMPORTED_MODULE_1__constructs_BlockConstruct_BlockConstruct__["a" /* default */].Create('div', {}, ['logo', 'logo_button']);

    block.setHTML(__WEBPACK_IMPORTED_MODULE_0__MenuGame_pug___default()({
                    items: ITEMS
                    })
                );

    return block;
};

/* unused harmony default export */ var _unused_webpack_default_export = (MenuGame);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(1);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (Math, items) {pug_mixins["menuConstruct"] = pug_interp = function(items){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var colClass = "col-lg-" + Math.round(12 / items.length);
pug_html = pug_html + "\u003Cdiv class=\"container menuconstruct\"\u003E\u003Crow\u003E";
// iterate items
;(function(){
  var $$obj = items;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var item = $$obj[pug_index0];
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes([colClass], [true]), false, true)) + "\u003E";
if (item.backImg) {
pug_html = pug_html + "\u003Cimg" + (" class=\"img-responsive menuconstruct-img\""+pug.attr("src", item.defaultImg, true, true)+pug.attr("onMouseOver", "this.src='" + item.backImg + "'", true, true)+pug.attr("onMouseOut", "this.src='" + item.defaultImg + "'", true, true)+pug.attr("id", item.id, true, true)) + "\u003E";
}
else {
pug_html = pug_html + "\u003Cimg" + (" class=\"img-responsive menuconstruct-img\""+pug.attr("src", item.defaultImg, true, true)+pug.attr("id", item.id, true, true)) + "\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var item = $$obj[pug_index0];
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes([colClass], [true]), false, true)) + "\u003E";
if (item.backImg) {
pug_html = pug_html + "\u003Cimg" + (" class=\"img-responsive menuconstruct-img\""+pug.attr("src", item.defaultImg, true, true)+pug.attr("onMouseOver", "this.src='" + item.backImg + "'", true, true)+pug.attr("onMouseOut", "this.src='" + item.defaultImg + "'", true, true)+pug.attr("id", item.id, true, true)) + "\u003E";
}
else {
pug_html = pug_html + "\u003Cimg" + (" class=\"img-responsive menuconstruct-img\""+pug.attr("src", item.defaultImg, true, true)+pug.attr("id", item.id, true, true)) + "\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Frow\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["menuConstruct"](items);}.call(this,"Math" in locals_for_with?locals_for_with.Math:typeof Math!=="undefined"?Math:undefined,"items" in locals_for_with?locals_for_with.items:typeof items!=="undefined"?items:undefined));;return pug_html;};
module.exports = template;

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MenuConstruct_css__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MenuConstruct_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__MenuConstruct_css__);



/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(19);
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
		module.hot.accept("!!../../../../../node_modules/css-loader/index.js!./MenuConstruct.css", function() {
			var newContent = require("!!../../../../../node_modules/css-loader/index.js!./MenuConstruct.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constructs_PageConstruct_PageConstruct__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constructs_FormConstruct_FormConstruct__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constructs_BlockConstruct_BlockConstruct__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SignIn_pug__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SignIn_pug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__SignIn_pug__);








const TITLE = "SIGNIN";

const LOGIN_FIELD = {
    id: "SignIn_loginInput",
    type: "text",
    required: "true",
    placeholder: "Enter login",
};
const PASSWORD_FIELD = {
    id: "SignIn_passwordInput",
    type: "password",
    required: "true",
    placeholder: "Enter password",
};

const SIGN_IN_BUTTON = {
    id: "SignIn_signInBtn",
    type: "submit",
    text: "SIGNIN",
};
const SIGN_UP_BUTTON = {
    id: "SignIn_signUpBtn",
    type: "reset",
    text: "SIGNUP",
};

const SignIn = function () {

    let signinFields = [
        {
            attrs: {
                type: 'login',
                name: 'login',
                class: 'input',
                placeholder: 'Enter email',
                required: 'required',
                id: 'signin_login',
            },
        },
        {
            attrs: {
                type: 'password',
                name: 'password',
                class: 'input',
                placeholder: 'Enter password',
                required: 'required',
                id: 'signin_password',
            },
        },
        {
            attrs: {
                type: 'submit',
                class: 'button button_start',
                value: 'Sign In',
                'data-section': 'signin'
            },
        },
        {
            attrs: {
                type: 'submit',
                class: 'button button_start',
                value: 'Back',
                'data-section': 'back'
            },
        },
    ];

    let block = new __WEBPACK_IMPORTED_MODULE_1__constructs_FormConstruct_FormConstruct__["a" /* default */](signinFields);
    block.getElement().classList.add('logo');
    block.getElement().classList.add('input_form');

/*    block.setHTML(pugSignIn({
                    form: {
                        title: TITLE,
                        fields: [
                            LOGIN_FIELD,
                            PASSWORD_FIELD,
                        ],
                        buttons: [
                            SIGN_IN_BUTTON,
                            SIGN_UP_BUTTON,
                        ],
                    }
                })
                );*/

    return block;
};

/* harmony default export */ __webpack_exports__["a"] = (SignIn);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(22);
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
		module.hot.accept("!!../../../../../node_modules/css-loader/index.js!./FormConstruct.css", function() {
			var newContent = require("!!../../../../../node_modules/css-loader/index.js!./FormConstruct.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(1);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (form) {pug_mixins["formConstruct"] = pug_interp = function(form){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"logo input_form\"\u003E\u003C\u002Fdiv\u003E\u003Ch1 align=\"middle\"\u003E" + (pug.escape(null == (pug_interp = form.title) ? "" : pug_interp)) + "\u003C\u002Fh1\u003E";
// iterate form.fields
;(function(){
  var $$obj = form.fields;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var field = $$obj[pug_index0];
pug_html = pug_html + "\u003Cinput" + (" class=\"input\""+pug.attr("id", field.id, true, true)+pug.attr("placeholder", field.placeholder, true, true)+pug.attr("type", field.type, true, true)+pug.attr("required", field.required, true, true)) + "\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var field = $$obj[pug_index0];
pug_html = pug_html + "\u003Cinput" + (" class=\"input\""+pug.attr("id", field.id, true, true)+pug.attr("placeholder", field.placeholder, true, true)+pug.attr("type", field.type, true, true)+pug.attr("required", field.required, true, true)) + "\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003Cdiv class=\"logo logo_button\" align=\"middle\"\u003E";
// iterate form.buttons
;(function(){
  var $$obj = form.buttons;
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var button = $$obj[pug_index1];
pug_html = pug_html + "\u003Cbutton" + (" class=\"button button_start\""+pug.attr("type", button.type, true, true)+pug.attr("id", button.id, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = button.text) ? "" : pug_interp)) + "\u003C\u002Fbutton\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var button = $$obj[pug_index1];
pug_html = pug_html + "\u003Cbutton" + (" class=\"button button_start\""+pug.attr("type", button.type, true, true)+pug.attr("id", button.id, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = button.text) ? "" : pug_interp)) + "\u003C\u002Fbutton\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["formConstruct"](form);}.call(this,"form" in locals_for_with?locals_for_with.form:typeof form!=="undefined"?form:undefined));;return pug_html;};
module.exports = template;

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constructs_PageConstruct_PageConstruct__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constructs_BlockConstruct_BlockConstruct__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constructs_FormConstruct_FormConstruct__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SignUp_pug__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SignUp_pug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__SignUp_pug__);








const TITLE = "Sign Up";

const EMAIL_FIELD = {
    id: "SignUp_emailInput",
    type: "email",
    required: "true",
    placeholder: "Enter e-mail",
};
const LOGIN_FIELD = {
    id: "SignUp_loginInput",
    type: "text",
    required: "true",
    placeholder: "Enter login",
};
const PASSRORD_FIELD = {
    id: "SignUp_passwordInput",
    type: "password",
    required: "true",
    placeholder: "Enter password",
};
const PASSRORD_REPEAT_FIELD = {
    id: "formSignUp_passwordRepeatInput",
    type: "password",
    required: "true",
    placeholder: "Enter password repeatedly",
};

const SIGN_UP_BUTTON = {
    id: "SignUp_signUpBtn",
    type: "submit",
    text: "Send",
};
const SIGN_IN_BUTTON = {
    id: "SignIn_signInBtn",
    type: "reset",
    text: "Authorization",
};

const SignUp = function () {

    let signupFields = [
        {
            attrs: {
                type: 'login',
                name: 'login',
                class: 'input',
                placeholder: 'Enter login',
                required: 'required',
                id: 'signup_login',
            },
        },
        {
            attrs: {
                type: 'email',
                name: 'email',
                class: 'input',
                placeholder: 'Enter email',
                required: 'required',
                id: 'signup_email',
            },
        },
        {
            attrs: {
                type: 'password',
                name: 'password',
                class: 'input',
                placeholder: 'Enter password',
                required: 'required',
                pattern: '^\\S{4,}$',
                id: 'signup_password',
            },

        },
        {
            attrs: {
                type: 'password',
                name: 'repeatPassword',
                class: 'input',
                placeholder: 'Enter password repeatedly',
                required: 'required',
                pattern: '^\\S{4,}$',
                id: 'signup_password_repeat',
            },

        },
        {
            attrs: {
                type: 'submit',
                class: 'button button_start',
                value: 'Sign Up',
            },
        },
    ];

    let block = new __WEBPACK_IMPORTED_MODULE_2__constructs_FormConstruct_FormConstruct__["a" /* default */](signupFields);
    block.getElement().classList.add('logo');
    block.getElement().classList.add('input_form');

/*    block.setHTML(pugSignUp({
                    form: {
                        title: TITLE,
                        fields: [
                            EMAIL_FIELD,
                            LOGIN_FIELD,
                            PASSRORD_FIELD,
                            PASSRORD_REPEAT_FIELD,
                        ],
                        buttons: [
                            SIGN_UP_BUTTON,
                            SIGN_IN_BUTTON,
                        ],
                    }
                })
                );*/

    return block;
};

/* harmony default export */ __webpack_exports__["a"] = (SignUp);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(1);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (form) {pug_mixins["formConstruct"] = pug_interp = function(form){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"logo input_form\"\u003E\u003C\u002Fdiv\u003E\u003Ch1 align=\"middle\"\u003E" + (pug.escape(null == (pug_interp = form.title) ? "" : pug_interp)) + "\u003C\u002Fh1\u003E";
// iterate form.fields
;(function(){
  var $$obj = form.fields;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var field = $$obj[pug_index0];
pug_html = pug_html + "\u003Cinput" + (" class=\"input\""+pug.attr("id", field.id, true, true)+pug.attr("placeholder", field.placeholder, true, true)+pug.attr("type", field.type, true, true)+pug.attr("required", field.required, true, true)) + "\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var field = $$obj[pug_index0];
pug_html = pug_html + "\u003Cinput" + (" class=\"input\""+pug.attr("id", field.id, true, true)+pug.attr("placeholder", field.placeholder, true, true)+pug.attr("type", field.type, true, true)+pug.attr("required", field.required, true, true)) + "\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003Cdiv class=\"logo logo_button\" align=\"middle\"\u003E";
// iterate form.buttons
;(function(){
  var $$obj = form.buttons;
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var button = $$obj[pug_index1];
pug_html = pug_html + "\u003Cbutton" + (" class=\"button button_start\""+pug.attr("type", button.type, true, true)+pug.attr("id", button.id, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = button.text) ? "" : pug_interp)) + "\u003C\u002Fbutton\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var button = $$obj[pug_index1];
pug_html = pug_html + "\u003Cbutton" + (" class=\"button button_start\""+pug.attr("type", button.type, true, true)+pug.attr("id", button.id, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = button.text) ? "" : pug_interp)) + "\u003C\u002Fbutton\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["formConstruct"](form);}.call(this,"form" in locals_for_with?locals_for_with.form:typeof form!=="undefined"?form:undefined));;return pug_html;};
module.exports = template;

/***/ }),
/* 26 */
/***/ (function(module, exports) {



/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_http__ = __webpack_require__(28);




/**
 * Сервис для работы с юзерами
 * @module UserService
 */
class UserService {
    constructor() {
        this.user = null;
        this.users = [];
    }

    /**
     * Регистрирует нового пользователя
     * @param {string} email
     * @param {string} password
     * @param {number} age
     * @param {Function} callback
     */
    signup(login, email, password, callback) {
        __WEBPACK_IMPORTED_MODULE_0__modules_http__["a" /* default */].Post('/signup', {login, email, password}, callback);
    }

    /**
     * Авторизация пользователя
     * @param {string} email
     * @param {string} password
     * @param {Function} callback
     */
    signin(login, password, callback) {
        __WEBPACK_IMPORTED_MODULE_0__modules_http__["a" /* default */].Post('/signin', {login, password}, callback);
    }

    /**
     * Проверяет, авторизован ли пол ьзователь
     * @return {boolean}
     */
    isLoggedIn() {
        console.log("is login, user = " + this.user);
        return !!this.user;
    }

    /**
     * Загружает данные о текущем пользователе
     * @param {Function} callback
     * @param {boolean} [force=false] - игнорировать ли кэш?
     */
    getData(callback, force = false) {
        if (this.isLoggedIn() && !force) {
            return callback(null, this.user);
        }

        __WEBPACK_IMPORTED_MODULE_0__modules_http__["a" /* default */].Get('/me', function (err, userdata) {
            if (err) {
                return callback(err, userdata);
            }
            if (!userdata.user) {
                return callback(null, null);
            }
            this.user = userdata.user;
            console.log("userdata = " + userdata.user);
            callback(null, userdata.user);
        }.bind(this));
    }

    signout() {
        __WEBPACK_IMPORTED_MODULE_0__modules_http__["a" /* default */].Get('/exit', function(req, res) {
            console.log("exit status:" + res.status);
        });
    }


    /**
     * Загружает список всех пользователей
     * @param callback
     */
    loadUsersList(callback) {
        __WEBPACK_IMPORTED_MODULE_0__modules_http__["a" /* default */].Get('/users', function (err, users) {
            if (err) {
                return callback(err, users);
            }

            this.users = users;

            if (this.isLoggedIn()) {
                this.users = this.users.map(user => {
                    if (user.email === this.user.email) {
                        user.me = true;
                    }
                    return user;
                });
            }

            callback(null, this.users);
        }.bind(this));
    }
}

/* harmony default export */ __webpack_exports__["a"] = (UserService);


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



/**
 * Модуль, предоставляющий методы для выполнения HTTP-запросов
 * @module Http
 */
class Http {
    /**
     * Выполняет GET-запрос по указанному адресу
     * @param {string} address - адрес запроса
     * @param {Function} callback - функция-коллбек
     */
    static Get(address, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', address, true);
        xhr.withCredentials = true;

        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) return;
            if (+xhr.status >= 400) {
                return callback(xhr, null);
            }

            const response = JSON.parse(xhr.responseText);
            callback(null, response);
        };

        xhr.send();
    }

    /**
     * Выполняет POST-запрос по указанному адресу
     * @param {string} address - адрес запроса
     * @param {*} body - тело запроса (объект)
     * @param {Function} callback - функция-коллбек
     */
    static Post(address, body, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', address, true);
        xhr.withCredentials = true;
        xhr.setRequestHeader('Content-Type', 'application/json; charset=utf8');

        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) return;
            if (+xhr.status >= 400) {
                return callback(xhr, null);
            }

            const response = JSON.parse(xhr.responseText);
            callback(null, response);
        };

        xhr.send(JSON.stringify(body));
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Http);

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


function hideError(form) {
    let removeErrorCollection = form.getElementsByClassName('error-msg');
    const removeErrorArray = Array.from(removeErrorCollection);
    removeErrorArray.forEach(elem => {
        elem.remove();
    });
}

function isCorrectLogin(login) {
    return login.trim().length > 4;
}

function isCorrectPassword(pswd) {
    return pswd.trim().length >= 6;
}

function createErrorElement(msg) {
    let errorElement = document.createElement('p');
    errorElement.textContent = msg;
    errorElement.classList.add('error-msg');

    return errorElement;
}

class ValidSigninForm {
    constructor() {
    }

    static validLoginForm(login, password, form) {

        let currentForm = form;

        console.log('form:' ,currentForm);
        hideError(currentForm);

        let flag = true;
        const loginField = currentForm.children[0],
            passwordField = currentForm.children[1];

        if (!isCorrectLogin(login)) {
            flag = false;
            currentForm.insertBefore(createErrorElement('invalid login (<=4 symbol)'), loginField);
        }

        if (!isCorrectPassword(password)) {
            flag = false;
            currentForm.insertBefore(createErrorElement('invalid password (<6 symbol)'), passwordField);
        }

        return flag;
    }

}

/* harmony default export */ __webpack_exports__["a"] = (ValidSigninForm);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


function hideError(form) {
    let removeErrorCollection = form.getElementsByClassName('error-msg');
    const removeErrorArray = Array.from(removeErrorCollection);
    removeErrorArray.forEach(elem => {
        elem.remove();
    });
}

function isCorrectLogin(login) {
    return login.trim().length > 4;
}

function isCorrectPassword(pswd) {
    return pswd.trim().length >= 6;
}

function isCorrectEmail(email) {
    return email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
}

function isSamePasswords(pswd, pswdRepeat, form) {
    return pswd === pswdRepeat;
}

function createErrorElement(msg) {
    let errorElement = document.createElement('p');
    errorElement.textContent = msg;
    errorElement.classList.add('error-msg');

    return errorElement;
}

class ValidSignupForm {
    constructor(login, email, password, repeatPassword, form) {
        this.login = login;
        this.email = email;
        this.password = password;
        this.repeatPassword = repeatPassword;
        this.currentForm = form.el;
    }

    static validSignupForm(login, email, password, repeatPassword, form) {

        const currentForm = form;
        hideError(currentForm);

        let flag = true;
        const loginField = currentForm.children[0],
            emailField = currentForm.children[1],
            passwordField = currentForm.children[2],
            repeatPasswordField = currentForm.children[3];

        if (!isCorrectLogin(login)) {
            flag = false;
            currentForm.insertBefore(createErrorElement('invalid login (<=4 symbol)'), loginField);
        }

        if (!isCorrectEmail(email)) {
            flag = false;
            currentForm.insertBefore(createErrorElement('invalid email'), emailField);
        }

        if (!isCorrectPassword(password)) {
            flag = false;
            currentForm.insertBefore(createErrorElement('invalid password (<6 symbol)'), passwordField);
        }

        if (!isSamePasswords(password, repeatPassword)) {
            flag = false;
            currentForm.insertBefore(createErrorElement('the values of entered passwords do not match'), repeatPasswordField);
        }

        return flag;
    }

}

/* harmony default export */ __webpack_exports__["a"] = (ValidSignupForm);


/***/ })
/******/ ]);