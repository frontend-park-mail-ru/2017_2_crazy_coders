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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


class Block {

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


    setData(data) {
        this.data = data;
    }

    getData() {
        return this.data;
    }

    setHTML(html) {
        this.el.innerHTML = html;
    }

    setText(text) {
        this.el.textContent = text;
    }


    clear() {
        this.el.innerHTML = '';
    }

    hide() {
        this.el.setAttribute('hidden', 'hidden');
    }

    show() {
        this.el.removeAttribute('hidden');
    }

    getElement() {
        return this.el;
    }

    append(block) {
        this.getElement().appendChild(block);
        return this;
    }

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
    str = str || __webpack_require__(8).readFileSync(filename, 'utf8')
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Block_BlockComponents__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__template_Form_pug__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__template_Form_pug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__template_Form_pug__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ValidForm_ValidLoginForm__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ValidForm_ValidRegisterForm__ = __webpack_require__(10);







class Form extends __WEBPACK_IMPORTED_MODULE_0__Block_BlockComponents__["a" /* default */] {
    constructor(tagName = 'div', attrs = {}, classes = [], data) {
        super(tagName, attrs, classes, data);
    }

    getForm() {
        this.setHTML(__WEBPACK_IMPORTED_MODULE_1__template_Form_pug___default()(this.getData()));
        return this.getElement();
    }

    getBackButton() {
        return document.getElementsByClassName('back-button');
    }

    onSubmitSignInForm(callback) {
        let signInForm = document.getElementById('login-form');

        signInForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const formdata = {};
            const elements = signInForm.elements;

            for (let name in elements) {
                formdata[name] = elements[name].value;
                // console.log(name + " : " + formdata[name]);
            }

            const isValid = new __WEBPACK_IMPORTED_MODULE_2__ValidForm_ValidLoginForm__["a" /* default */](formdata.email, formdata.password, signInForm);

            callback(formdata, isValid.validForm());
        }.bind(this));
    }

    onSubmitSignUpForm(callback) {
        let signUpForm = document.getElementById('registry-form');

        signUpForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const formdata = {};
            const elements = signUpForm.elements;

            for (let name in elements) {
                formdata[name] = elements[name].value;
                // console.log(name + " : " + formdata[name]);
            }

            const isValid = new __WEBPACK_IMPORTED_MODULE_3__ValidForm_ValidRegisterForm__["a" /* default */](formdata.login,formdata.email, formdata.password,formdata.repeatPassword, signUpForm);

            callback(formdata, isValid.validForm());
        }, false);
    }

    reset() {
        Array.from(document.getElementsByTagName('form')).forEach( form => {
            form.reset();
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Form;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Block_BlockComponents__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__template_Menu_pug__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__template_Menu_pug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__template_Menu_pug__);



class Header extends __WEBPACK_IMPORTED_MODULE_0__Block_BlockComponents__["a" /* default */] {
    constructor(tagName = 'div', attrs = {}, classes = [], data) {
        super(tagName, attrs, classes, data);
    }

    getMenu() {
        this.setHTML(__WEBPACK_IMPORTED_MODULE_1__template_Menu_pug___default()(this.getData()));
        return this.getElement();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Header;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Block_BlockComponents__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__template_Table_pug__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__template_Table_pug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__template_Table_pug__);



class Header extends __WEBPACK_IMPORTED_MODULE_0__Block_BlockComponents__["a" /* default */] {
    constructor(tagName = 'div', attrs = {}, classes = [], data) {
        super(tagName, attrs, classes, data);
    }

    getTable() {
        this.setHTML(__WEBPACK_IMPORTED_MODULE_1__template_Table_pug___default()(this.getData()));
        return this.getElement();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Header;



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Block_BlockComponents__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_SignIn_SignIn__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_SignUp_SignUp__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_Header_Header__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_UnRegMenu_UnRegMenu__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_UserService__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_RegMenu_RegMenu__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_AboutUs_AboutUs__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_Scoreboard_Scoreboard__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_Footer_Footer__ = __webpack_require__(24);














let body = document.getElementsByTagName('body')[0];
const app = new __WEBPACK_IMPORTED_MODULE_0__components_Block_BlockComponents__["a" /* default */]('div', {id: 'application'});
body.appendChild(app.getElement());

let footerDiv = new __WEBPACK_IMPORTED_MODULE_0__components_Block_BlockComponents__["a" /* default */]('div', {id: 'multimedia-buttons-panel'});

const userService = new __WEBPACK_IMPORTED_MODULE_5__services_UserService__["a" /* default */]();
const header = Object(__WEBPACK_IMPORTED_MODULE_3__views_Header_Header__["a" /* default */])();
const inputMenu = Object(__WEBPACK_IMPORTED_MODULE_4__views_UnRegMenu_UnRegMenu__["a" /* default */])();
const signIn = Object(__WEBPACK_IMPORTED_MODULE_1__views_SignIn_SignIn__["a" /* default */])();
const signUp = Object(__WEBPACK_IMPORTED_MODULE_2__views_SignUp_SignUp__["a" /* default */])();
const aboutUs = Object(__WEBPACK_IMPORTED_MODULE_7__views_AboutUs_AboutUs__["a" /* default */])();
const score = Object(__WEBPACK_IMPORTED_MODULE_8__views_Scoreboard_Scoreboard__["a" /* default */])();
const footerImg = Object(__WEBPACK_IMPORTED_MODULE_9__views_Footer_Footer__["a" /* default */])();
const mainPage = Object(__WEBPACK_IMPORTED_MODULE_6__views_RegMenu_RegMenu__["a" /* default */])();

footerDiv.append(score.getTable())
    .append(aboutUs.getTable());

app.append(header.getHeader())
    .append(inputMenu.getMenu())
    .append(mainPage.getMenu())
    .append(signIn.getForm())
    .append(signUp.getForm())
    .append(footerImg.getFooter())
    .append(footerDiv.getElement());


inputMenu.hide();
signIn.hide();
signUp.hide();
mainPage.hide();
score.hide();
aboutUs.hide();

let inputMenuEventDelete = function () {
};
let footerImgEventDelete = function () {
};
let footerDivEventDelete = function () {
};
let mainPageEventDelete = function () {
};

function isUnregisteredUser() {

    inputMenuEventDelete();
    footerImgEventDelete();
    footerDivEventDelete();
    mainPageEventDelete();

    inputMenu.show();

    inputMenuEventDelete = inputMenu.on('click', function (event) {
        event.preventDefault();
        const elemId = event.target.getAttribute('id');

        switch (elemId) {
            case 'button-log':
                footerImg.hide();
                inputMenu.hide();
                signIn.show();
                break;

            case 'button-register':
                footerImg.hide();
                inputMenu.hide();
                signUp.show();
                break;
        }
    });

    let backButtonCollection = signIn.getBackButton();
    const backButtonArray = Array.from(backButtonCollection);

    backButtonArray.forEach(button => {
        button.addEventListener('click', (event) => {
            const elemId = event.target.getAttribute('id');
            switch (elemId) {
                case 'back-sign-in':
                    signIn.hide();
                    inputMenu.show();
                    footerImg.show();
                    break;

                case 'back-sign-up':
                    signUp.hide();
                    inputMenu.show();
                    footerImg.show();
                    break;
            }
        });
    });


    footerImgEventDelete = footerImg.on('click', function (event) {
        event.preventDefault();
        const elemId = event.target.getAttribute('id');

        switch (elemId) {
            case 'sound-logo':
                console.log('music');
                break;

            case 'score-logo':
                footerImg.hide();
                inputMenu.hide();
                mainPage.hide();
                score.show();
                break;

            case 'about-logo':
                footerImg.hide();
                inputMenu.hide();
                mainPage.hide();
                aboutUs.show();
                break;
        }
    });


    footerDivEventDelete = footerDiv.on('click', function (event) {
        event.preventDefault();
        const elemId = event.target.getAttribute('id');

        switch (elemId) {
            case 'back-score':
                footerImg.show();
                inputMenu.show();
                score.hide();
                break;

            case 'back-about':
                footerImg.show();
                inputMenu.show();
                aboutUs.hide();
                break
        }
    });
}

function isRegisteredUser() {

    inputMenuEventDelete();
    footerImgEventDelete();
    footerDivEventDelete();
    mainPageEventDelete();

    inputMenu.hide();
    signIn.hide();
    signUp.hide();
    mainPage.show();
    footerImg.show();

    mainPageEventDelete = mainPage.on('click', function (event) {
        event.preventDefault();
        const elemId = event.target.getAttribute('id');

        switch (elemId) {
            case 'start-game':
                console.log('i am start');
                break;

            case 'logout':
                mainPage.hide();
                userService.exit();
                isUnregisteredUser();
                break;
        }
    });

    footerImgEventDelete = footerImg.on('click', function (event) {
        event.preventDefault();
        const elemId = event.target.getAttribute('id');

        switch (elemId) {
            case 'sound-logo':
                console.log('music');
                break;

            case 'score-logo':
                footerImg.hide();
                inputMenu.hide();
                mainPage.hide();
                score.show();
                break;

            case 'about-logo':
                footerImg.hide();
                inputMenu.hide();
                mainPage.hide();
                aboutUs.show();
                break;
        }
    });

    footerDivEventDelete = footerDiv.on('click', function (event) {
        event.preventDefault();
        const elemId = event.target.getAttribute('id');

        switch (elemId) {
            case 'back-score':
                footerImg.show();
                mainPage.show();
                score.hide();
                break;

            case 'back-about':
                footerImg.show();
                mainPage.show();
                aboutUs.hide();
                break
        }
    });
}


userService.isAuthUser(function (err, userLogin) {
    if (err) {
        return;
    }
    if (!userLogin) {
        console.log('Hello ', userLogin, 'is null');
        isUnregisteredUser();
    } else {
        isRegisteredUser(userLogin);
    }
}, true);


signIn.onSubmitSignInForm(function (formdata, isValid) {
    if (isValid) {
        userService.login(formdata.email, formdata.password, function (err, resp) {
            if (err) {
                alert(`Some error ${err.status}: ${err.responseText}`);
                return;
            }
            if (resp.id !== 0) {
                console.log("in signinSubmit");
                signIn.reset();
                isRegisteredUser(resp.user);
            } else {
                console.log('no user');
            }

        });
    }
});


signUp.onSubmitSignUpForm(function (formdata, isValid) {
    if (isValid) {
        userService.auth(formdata.login, formdata.email, formdata.password, (err, resp) => {
            if (err) {
                return alert(`AUTH Error: ${err.status}`);
            }

            if (resp.id !== 0) {
                console.log("in signupSubmit");
                isRegisteredUser();
                signUp.reset();
            }
        });
    }
});



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = SignIn;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Form_Form_Form__ = __webpack_require__(2);




let data = {
    title: 'LOG IN',
    idForm: 'login-form',
    fields: [
        {
            attrs: {
                type: 'text',
                name: 'email',
                placeholder: 'Enter login',
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
                class: 'button',
                value: 'SIGN IN',
                id: 'login-button',
            },
        },
        {
            attrs: {
                class: 'button a-button back-button',
                value: 'BACK',
                id: 'back-sign-in',
            },
        },
    ]
};

function SignIn() {
    return new __WEBPACK_IMPORTED_MODULE_0__components_Form_Form_Form__["a" /* default */]('section', {id: 'login'}, [], {data});
}



/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(1);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (data) {var pug_indent = [];
pug_html = pug_html + "\n\u003Cdiv class=\"logo input_form\"\u003E\n  \u003Ch1 align=\"middle\"\u003E" + (pug.escape(null == (pug_interp = data.title) ? "" : pug_interp)) + "\u003C\u002Fh1\u003E\n  \u003Cform" + (pug.attr("id", data.idForm, true, true)) + "\u003E";
// iterate data.fields
;(function(){
  var $$obj = data.fields;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var field = $$obj[pug_index0];
pug_html = pug_html + "\n    \u003Cinput" + (" class=\"input\""+pug.attr("type", field.attrs.type, true, true)+pug.attr("placeholder", field.attrs.placeholder, true, true)+pug.attr("name", field.attrs.name, true, true)) + "\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var field = $$obj[pug_index0];
pug_html = pug_html + "\n    \u003Cinput" + (" class=\"input\""+pug.attr("type", field.attrs.type, true, true)+pug.attr("placeholder", field.attrs.placeholder, true, true)+pug.attr("name", field.attrs.name, true, true)) + "\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\n    \u003Cinput" + (pug.attr("class", pug.classes(["input",data.buttons[0].attrs.class], [false,true]), false, true)+pug.attr("type", data.buttons[0].attrs.type, true, true)+pug.attr("value", data.buttons[0].attrs.value, true, true)+pug.attr("id", data.buttons[0].attrs.id, true, true)) + "\u003E\n  \u003C\u002Fform\u003E\n  \u003Cinput" + (pug.attr("class", pug.classes(["button",data.buttons[1].attrs.class], [false,true]), false, true)+pug.attr("type", data.buttons[1].attrs.type, true, true)+pug.attr("value", data.buttons[1].attrs.value, true, true)+pug.attr("id", data.buttons[1].attrs.id, true, true)) + "\u003E\n\u003C\u002Fdiv\u003E";}.call(this,"data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined));;return pug_html;};
module.exports = template;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


function hideError(form) {
    let removeErrorCollection = form.getElementsByClassName('error-msg');
    const removeErrorArray = Array.from(removeErrorCollection);
    removeErrorArray.forEach(elem => {
        elem.remove();
    });
}

function isCorrectLogin(email) {
    return email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
}

function isCorrectPassword(pswd) {
    return pswd.match(/^[a-z0-9_-]{6,18}$/);
}

function createErrorElement(msg) {
    let errorElement = document.createElement('p');
    errorElement.textContent = msg;
    errorElement.classList.add('error-msg');

    return errorElement;
}

class ValidLoginForm {
    constructor(email, password, form) {
        this.email = email;
        this.password = password;
        this.currentForm = form;
    }

    validForm() {
        console.log('form: ' ,this.currentForm);

        hideError(this.currentForm);

        let flag = true;
        const loginField = this.currentForm.children[0],
            passwordField = this.currentForm.children[1];

        if (!isCorrectLogin(this.email)) {
            flag = false;
            this.currentForm.insertBefore(createErrorElement('invalid email'), loginField);
        }

        if (!isCorrectPassword(this.password)) {
            flag = false;
            this.currentForm.insertBefore(createErrorElement('invalid password'), passwordField);
        }

        return flag;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ValidLoginForm;






/***/ }),
/* 10 */
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
    return login.match(/^[a-z0-9_-]{3,16}$/);
}

function isCorrectPassword(pswd) {
    return pswd.match(/^[a-z0-9_-]{6,18}$/);
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

class ValidRegisterForm {
    constructor(login, email, password, repeatPassword, form) {
        this.login = login;
        this.email = email;
        this.password = password;
        console.log(this.password);
        this.repeatPassword = repeatPassword;

        console.log(repeatPassword);
        this.currentForm = form;
    }

    validForm() {

        // console.log(this.currentForm);
        hideError(this.currentForm);

        let flag = true;
        const loginField = this.currentForm.children[0],
            emailField = this.currentForm.children[1],
            passwordField = this.currentForm.children[2],
            repeatPasswordField = this.currentForm.children[3];

        if (!isCorrectLogin(this.login)) {
            flag = false;
            this.currentForm.insertBefore(createErrorElement('invalid login'), loginField);
        }

        if (!isCorrectEmail(this.email)) {
            flag = false;
            this.currentForm.insertBefore(createErrorElement('invalid email'), emailField);
        }

        if (!isCorrectPassword(this.password)) {
            flag = false;
            this.currentForm.insertBefore(createErrorElement('invalid password'), passwordField);
        }

        if (!isSamePasswords(this.password, this.repeatPassword)) {
            flag = false;
            this.currentForm.insertBefore(createErrorElement('the values of entered passwords do not match'), repeatPasswordField);
        }

        return flag;
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = ValidRegisterForm;




/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = SignUp;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Form_Form_Form__ = __webpack_require__(2);




let data = {
    title: 'LOG OUT',
    idForm: 'registry-form',
    fields: [
        {
            attrs: {
                type: 'text',
                name: 'login',
                placeholder: 'Enter login',
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
                class: 'button submitData',
                value: 'SIGN UP',
                id: 'signup-button',
            },
        },
        {
            attrs: {
                class: 'button back-button',
                value: 'BACK',
                id: 'back-sign-up',
            },
        },
    ]
};

function SignUp() {
    return new __WEBPACK_IMPORTED_MODULE_0__components_Form_Form_Form__["a" /* default */]('section', {id: 'registry'}, [], {data});
}



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createHeader;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Header_Header__ = __webpack_require__(13);


let data = {
    nameGame: 'TANKS',
};

function createHeader() {
    return new __WEBPACK_IMPORTED_MODULE_0__components_Header_Header__["a" /* default */]('section', {id: 'header'}, [], {data});
}


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Block_BlockComponents__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__template_Header_pug__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__template_Header_pug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__template_Header_pug__);



class Header extends __WEBPACK_IMPORTED_MODULE_0__Block_BlockComponents__["a" /* default */] {
    constructor(tagName = 'div', attrs = {}, classes = [], data) {
        super(tagName, attrs, classes, data);
    }

    getHeader() {
        this.setHTML(__WEBPACK_IMPORTED_MODULE_1__template_Header_pug___default()(this.getData()));
        return this.getElement();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Header;



/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(1);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (data) {var pug_indent = [];
pug_html = pug_html + "\n\u003Cdiv class=\"logo\"\u003E\n  \u003Cp class=\"rotateit\"\u003E" + (pug.escape(null == (pug_interp = data.nameGame) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Cimg class=\"logo_img\" src=\"static\u002Fimg\u002Flogo.png\"\u003E\n\u003C\u002Fdiv\u003E";}.call(this,"data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined));;return pug_html;};
module.exports = template;

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createUnRegMenu;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Menu_Menu__ = __webpack_require__(3);


let data = {
    user: null,
    buttons: [
        {
            text: 'LOG IN',
            id: 'button-log',
            class: 'button',
        },
        {
            text: 'REGISTER',
            id: 'button-register',
            class: 'button',
        }
    ]
};

function createUnRegMenu() {
    return new __WEBPACK_IMPORTED_MODULE_0__components_Menu_Menu__["a" /* default */]('section', {id: 'input-page'}, [], {data});
}


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(1);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (data) {var pug_indent = [];
pug_html = pug_html + "\n\u003Cdiv class=\"logo logo_button\"\u003E";
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

pug_html = pug_html + "\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"auth-user-login\"\u003E\n  \u003Cp\u003E\n    \u003Cdata class=\"user\"\u003E\u003C\u002Fdata\u003E\n  \u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E";}.call(this,"data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined));;return pug_html;};
module.exports = template;

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_Http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_User__ = __webpack_require__(19);



class UserService {
    constructor() {
        this.user = new __WEBPACK_IMPORTED_MODULE_1__model_User__["a" /* default */]({});
        this.users = [];
    }


    auth(login, email, password, callback) {
        __WEBPACK_IMPORTED_MODULE_0__modules_Http__["a" /* default */].Post('/register', {login, email, password}, callback);
    }

    login(email, password, callback) {
        __WEBPACK_IMPORTED_MODULE_0__modules_Http__["a" /* default */].Post('/login', {email, password}, callback);
    }

    isLoggedIn() {
        return !!this.user.id;
    }

     // [force=false] - игнорировать ли кэш?
    isAuthUser(callback, force = true) {
        if (this.isLoggedIn() && !force) {
            return callback(null, this.user);
        }

        __WEBPACK_IMPORTED_MODULE_0__modules_Http__["a" /* default */].Get('/isauth', function(err, userdata) {
            if (err) {
                return callback(err, userdata);
            }
            if (!userdata.user) {
                return callback(null, null);
            }
            this.user.set(userdata);
            callback(null, userdata);
        }.bind(this));
    }

    getUserLogin() {
        return this.user;
    }

    exit() {
        __WEBPACK_IMPORTED_MODULE_0__modules_Http__["a" /* default */].Get('/exit', () => {});
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = UserService;



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Http {

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

    static Post(address, body, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', address, true);
        xhr.withCredentials = true;
        xhr.setRequestHeader('Content-Type', 'application/json; charset=utf8');
        xhr.setRequestHeader('Accept', 'application/json');

        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) return;
            if (+xhr.status >= 400) {
                return callback(xhr, null);
            }

            const response = JSON.parse(xhr.responseText);
            console.log("response = " + response.username);
            callback(null, response);
        };

        xhr.send(JSON.stringify(body));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Http;





/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


class User {
    constructor(opt) {
        this.email = opt.email || '';
        this.login = opt.login || '';
        this.id = opt.id || 0;
        this.score = opt.score || 0;
    }

    set(userData) {
        this.email = userData.email;
        this.login = userData.login;
        this.id = userData.id;
        this.score = userData.score || 0;
    }
}

/* harmony default export */ __webpack_exports__["a"] = (User);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createRegMenu;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Menu_Menu__ = __webpack_require__(3);


function createRegMenu() { //(user)
    // console.log(user);
    let data = {
        user: 'name', // не выводится в шаблоне (
        buttons: [
            {
                text: 'START',
                id: 'start-game',
                class: 'button a-button',
            },
            {
                text: 'LOG OUT',
                id: 'logout',
                class: 'button a-button',
            }
        ]
    };

    return new __WEBPACK_IMPORTED_MODULE_0__components_Menu_Menu__["a" /* default */]('section', {id: 'main-page'}, [], {data});
}


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createAboutUs;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Table_Table__ = __webpack_require__(4);



let data = {
    idButton: 'back-about',
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
    ]
};


function createAboutUs() {
    return new __WEBPACK_IMPORTED_MODULE_0__components_Table_Table__["a" /* default */]('section', {id: 'about-page'}, [], {data});
}


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(1);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (data) {var pug_indent = [];
pug_html = pug_html + "\n\u003Cdiv class=\"logo logo_text\"\u003E" + (pug.escape(null == (pug_interp = data.title) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"logo table_form\"\u003E\n  \u003Ctable" + (pug.attr("class", pug.classes([data.classTable], [true]), false, true)) + "\u003E";
// iterate data.users
;(function(){
  var $$obj = data.users;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var user = $$obj[pug_index0];
pug_html = pug_html + "\n    \u003Ctr\u003E\n      \u003Ctd\u003E" + (pug.escape(null == (pug_interp = user.name) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\n      \u003Ctd\u003E" + (pug.escape(null == (pug_interp = user.position) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\n    \u003C\u002Ftr\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var user = $$obj[pug_index0];
pug_html = pug_html + "\n    \u003Ctr\u003E\n      \u003Ctd\u003E" + (pug.escape(null == (pug_interp = user.name) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\n      \u003Ctd\u003E" + (pug.escape(null == (pug_interp = user.position) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\n    \u003C\u002Ftr\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\n  \u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"logo logo_button\"\u003E\n  \u003Cbutto" + (" class=\"button\""+pug.attr("id", data.idButton, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = 'BACK') ? "" : pug_interp)) + "\u003C\u002Fbutto\u003E\n\u003C\u002Fdiv\u003E";}.call(this,"data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined));;return pug_html;};
module.exports = template;

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Scoreboard;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Table_Table__ = __webpack_require__(4);


let data = {
    idButton: 'back-score',
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
    ]
};


function Scoreboard() {
    return new __WEBPACK_IMPORTED_MODULE_0__components_Table_Table__["a" /* default */]('section', {id: 'about-page'}, [], {data});
}


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = CreateFooter;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Footer_Footer__ = __webpack_require__(25);


let data = {
    imgListData: [
        {
            class: "sound_img",
            src: "./static/img/sound.png",
            id: "sound-logo",
        },
        {
            class: "score_img",
            src: "./static/img/score.png",
            id: "score-logo",
        },
        {
            class: "info_img",
            src: "./static/img/info.png",
            id: "about-logo",
        },
    ]
};


function CreateFooter() {
    return new __WEBPACK_IMPORTED_MODULE_0__components_Footer_Footer__["a" /* default */]('section', {id: 'buttons-panel'}, [], {data});
}


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Block_BlockComponents__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__template_Footer_pug__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__template_Footer_pug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__template_Footer_pug__);



class Header extends __WEBPACK_IMPORTED_MODULE_0__Block_BlockComponents__["a" /* default */] {
    constructor(tagName = 'div', attrs = {}, classes = [], data) {
        super(tagName, attrs, classes, data);
    }

    getFooter() {
        this.setHTML(__WEBPACK_IMPORTED_MODULE_1__template_Footer_pug___default()(this.getData()));
        return this.getElement();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Header;



/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(1);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (data) {var pug_indent = [];
pug_html = pug_html + "\n\u003Cdiv class=\"logo\"\u003E";
// iterate data.imgListData
;(function(){
  var $$obj = data.imgListData;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var imgData = $$obj[pug_index0];
pug_html = pug_html + "\u003Ca class=\"logo_img\" href=\"#\"\u003E\u003Cimg" + (pug.attr("class", pug.classes([imgData.class], [true]), false, true)+pug.attr("src", imgData.src, true, true)+pug.attr("id", imgData.id, true, true)) + "\u003E\u003C\u002Fa\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var imgData = $$obj[pug_index0];
pug_html = pug_html + "\u003Ca class=\"logo_img\" href=\"#\"\u003E\u003Cimg" + (pug.attr("class", pug.classes([imgData.class], [true]), false, true)+pug.attr("src", imgData.src, true, true)+pug.attr("id", imgData.id, true, true)) + "\u003E\u003C\u002Fa\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\n\u003C\u002Fdiv\u003E";}.call(this,"data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined));;return pug_html;};
module.exports = template;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map