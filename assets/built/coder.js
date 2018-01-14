/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "chunk." + ({}[chunkId]||chunkId) + "." + {"0":"07969"}[chunkId] + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
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
/******/ 	__webpack_require__.p = "/assets/built/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__themes_result_json__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__themes_result_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__themes_result_json__);


/* harmony default export */ __webpack_exports__["a"] = ({
  themes: __WEBPACK_IMPORTED_MODULE_0__themes_result_json__["themes"],
  lsPostTabKey: 'post-tabs',
  // localstorage theme key
  lsThemeKey: 'theme',
  defaultTheme: 'dark_default'
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory__);


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory___default()());

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ThemeStore__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TabStore__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PostStore__ = __webpack_require__(16);




const themeStore = new __WEBPACK_IMPORTED_MODULE_0__ThemeStore__["a" /* default */]();
/* harmony export (immutable) */ __webpack_exports__["c"] = themeStore;

const tabStore = new __WEBPACK_IMPORTED_MODULE_1__TabStore__["a" /* default */]();
/* harmony export (immutable) */ __webpack_exports__["b"] = tabStore;

const postStore = new __WEBPACK_IMPORTED_MODULE_2__PostStore__["a" /* default */]();
/* harmony export (immutable) */ __webpack_exports__["a"] = postStore;


window.stores = {
  themeStore,
  tabStore,
  postStore
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = hScroll;
const $body = $('body');

const isHomePage = () => $body.is('.home-template');
/* unused harmony export isHomePage */

const isPostPage = () => $body.is('.post-template');
/* harmony export (immutable) */ __webpack_exports__["c"] = isPostPage;


/**
 * horizontally scroll
 *
 * @param {HTMLElement} el
 *
 * @example
 *  const stopHScroll = hScroll(document.querySelector('#J-hscroll-el'))
 *  stopHScroll() // removeEventListener
 */
function hScroll(el) {
  if (!el) {
    console.error('Must specify el!');
    return;
  }

  el.addEventListener('wheel', wheel);

  function wheel(e) {
    const delta = e.wheelDelta ? e.wheelDelta : -1 * e.deltaY;
    el.scrollLeft += -delta;
    e.preventDefault();
  }

  return () => el.removeEventListener('wheel', wheel);
}

const format = function (template, vars) {
  return template.replace(/\$\{([^\{\}]*)\}/g, function (_, name) {
    var value = vars[name.trim()];
    return value == null ? '' : value + '';
  });
};
/* unused harmony export format */


const toLen = function (source, len) {
  return (Array.prototype.join.call({
    length: len + 1
  }, '0') + source).slice(-len);
};

const formatDate = function (template, date) {
  if (!date) return '';
  template = template.replace(/\$([a-zA-Z])/g, function (_, key) {
    return '${' + key + '}';
  });
  date = new Date(date);
  var DAY = ['日', '一', '二', '三', '四', '五', '六'];
  return format(template, {
    Y: toLen(date.getFullYear(), 4),
    y: toLen(date.getFullYear(), 2),
    M: toLen(date.getMonth() + 1, 2),
    d: toLen(date.getDate(), 2),
    D: DAY[date.getDay()],
    H: toLen(date.getHours(), 2),
    m: toLen(date.getMinutes(), 2),
    s: toLen(date.getSeconds(), 2)
  });
};
/* harmony export (immutable) */ __webpack_exports__["a"] = formatDate;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function () {};

if (process.env.NODE_ENV !== 'production') {
  warning = function (condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.length < 10 || /^[s\W]*$/.test(format)) {
      throw new Error('The warning format should be able to uniquely identify this ' + 'warning. Please, use a more descriptive format than: ' + format);
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    }
  };
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 5 */
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
function defaultClearTimeout() {
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
})();
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
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
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
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
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
    while (len) {
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

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var addLeadingSlash = exports.addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
};

var stripLeadingSlash = exports.stripLeadingSlash = function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
};

var hasBasename = exports.hasBasename = function hasBasename(path, prefix) {
  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
};

var stripBasename = exports.stripBasename = function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
};

var stripTrailingSlash = exports.stripTrailingSlash = function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
};

var parsePath = exports.parsePath = function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};

var createPath = exports.createPath = function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;

  var path = pathname || '/';

  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;

  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;

  return path;
};

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_emitter__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_index_scss__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_partials_post_tab__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_partials_side_bar_header__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_partials_side_bar_body__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_partials_footer__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_partials_post__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_partials_post_nav__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_partials_home__ = __webpack_require__(36);












/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mitt__ = __webpack_require__(9);

window.emitter = Object(__WEBPACK_IMPORTED_MODULE_0_mitt__["a" /* default */])();

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//      
// An event handler can take an optional event argument
// and should not return a value

// An array of all currently registered event handlers for a type

// A map of event types and their corresponding event handlers.


/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all) {
	all = all || Object.create(null);

	return {
		/**
   * Register an event handler for the given type.
   *
   * @param  {String} type	Type of event to listen for, or `"*"` for all events
   * @param  {Function} handler Function to call in response to given event
   * @memberOf mitt
   */
		on: function on(type, handler) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
   * Remove an event handler for the given type.
   *
   * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
   * @param  {Function} handler Handler function to remove
   * @memberOf mitt
   */
		off: function off(type, handler) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
   * Invoke all handlers for the given type.
   * If present, `"*"` handlers are invoked after type-matched handlers.
   *
   * @param {String} type  The event type to invoke
   * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
   * @memberof mitt
   */
		emit: function emit(type, evt) {
			(all[type] || []).map(function (handler) {
				handler(evt);
			});
			(all['*'] || []).map(function (handler) {
				handler(type, evt);
			});
		}
	};
}

/* harmony default export */ __webpack_exports__["a"] = (mitt);
//# sourceMappingURL=mitt.es.js.map

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_config__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__history__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(3);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };







$(function () {

  if (!Object(__WEBPACK_IMPORTED_MODULE_4__utils__["c" /* isPostPage */])()) return;

  let $postTabs = $('#J-post-tab');
  const $scrollWrap = $('.J-post-tab-scroller-wrap');
  const ndScrollWrap = $scrollWrap.get(0);
  const $home = $('.J-home-entry');
  const homeWidth = $home.outerWidth();

  emitter.on('add-post-tab', post => {
    const tabs = __WEBPACK_IMPORTED_MODULE_2__stores__["b" /* tabStore */].getTabs();
    if (!tabs.filter(tab => tab.id === post.id).length) {
      tabs.push(_extends({}, post));

      __WEBPACK_IMPORTED_MODULE_2__stores__["b" /* tabStore */].setTabs(tabs);
    }

    emitter.emit('tab-refresh', _extends({}, post));
  });

  emitter.on('tab-refresh', (active = {}) => {
    const activeId = active.id;
    const tabs = __WEBPACK_IMPORTED_MODULE_2__stores__["b" /* tabStore */].getTabs();

    const $active = $('#J-post-tab').html(tabs.map(tab => `<div title="${tab.title}" class="J-tab-item light hover-opacity1 flex-item0 single-line item ${activeId === tab.id ? 'active' : ''}" data-id="${tab.id}">${tab.title}<i class="close J-post-tab-close lighter hover-opacity1" data-slug="${tab.slug}"></i></div>`).join('')).find('.active');

    __WEBPACK_IMPORTED_MODULE_3__history__["a" /* default */].push(active.url, _extends({}, active));
    __WEBPACK_IMPORTED_MODULE_2__stores__["b" /* tabStore */].setCurrentTab(_extends({}, active));

    scroll2view($active);
  });

  $postTabs.on('click', '.J-post-tab-close', function (e) {
    e.stopPropagation();
    __WEBPACK_IMPORTED_MODULE_2__stores__["b" /* tabStore */].deleteTabItem($(this).parent('.J-tab-item').data('id'));
  }).on('click', '.J-tab-item', function () {
    const $this = $(this);
    if ($this.is('.active')) return;

    const id = $this.data('id');
    const currentTab = __WEBPACK_IMPORTED_MODULE_2__stores__["b" /* tabStore */].getTabs().filter(tab => tab.id === id)[0] || {};

    $this.addClass('active').siblings().removeClass('active');
    __WEBPACK_IMPORTED_MODULE_2__stores__["b" /* tabStore */].setCurrentTab(currentTab);
    __WEBPACK_IMPORTED_MODULE_3__history__["a" /* default */].push(currentTab.url, _extends({}, currentTab));

    scroll2view($this);
  });

  /**
   * scroll selected tab item into view if it is out of view
   */
  function scroll2view($active) {
    // wrap element
    const wrapWidth = $scrollWrap.width();
    const wrapScrollLeft = $scrollWrap.scrollLeft();
    const wrapRight = wrapWidth + wrapScrollLeft;
    const threshold = 10;

    // active element
    const ndActive = $active.get(0);
    const activeWidth = $active.outerWidth();
    const activeLeft = ndActive.offsetLeft;
    const activeRight = activeLeft + activeWidth;
    if (activeRight > wrapWidth + wrapScrollLeft) {
      ndScrollWrap.scrollLeft = activeRight - wrapWidth - homeWidth - threshold;
    }
    if (activeLeft <= wrapScrollLeft) {
      ndScrollWrap.scrollLeft = activeLeft - homeWidth - threshold;
    }
  }

  Object(__WEBPACK_IMPORTED_MODULE_4__utils__["b" /* hScroll */])($scrollWrap.get(0));
});

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = {"themes":["abyss-color","dark-default","red"]}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_config__ = __webpack_require__(0);

const ls = localStorage;
const lsThemeKey = __WEBPACK_IMPORTED_MODULE_0_config__["a" /* default */].lsThemeKey;

/* harmony default export */ __webpack_exports__["a"] = (class {
  constructor() {
    this.theme = ls.getItem(lsThemeKey) || __WEBPACK_IMPORTED_MODULE_0_config__["a" /* default */].defaultTheme;
  }

  setTheme(theme) {
    this.theme = theme;
    ls.setItem(lsThemeKey, theme);
  }
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_config__ = __webpack_require__(0);


const ls = localStorage;

/* harmony default export */ __webpack_exports__["a"] = (class {
  constructor() {
    this.currentTab = null;
  }

  getTabs() {
    let tabs = ls.getItem(__WEBPACK_IMPORTED_MODULE_0_config__["a" /* default */].lsPostTabKey) || '';

    return tabs ? tabs.split(',').map(tab => {
      const [id, title, url, slug] = tab.split(':');

      return { id, title, url, slug };
    }) : [];
  }

  setTabs(tabs) {
    ls.setItem(__WEBPACK_IMPORTED_MODULE_0_config__["a" /* default */].lsPostTabKey, tabs.length ? tabs.map(tab => `${tab.id}:${tab.title}:${tab.url}:${tab.slug}`).join(',') : '');
  }

  setCurrentTab(tab) {
    this.currentTab = tab;
  }

  deleteTabItem(id) {
    let tabs = this.getTabs();
    let nextTab = null;
    const isCurrentTab = id === this.currentTab.id;

    const deletedIdx = tabs.findIndex(tab => tab.id === id);
    tabs = tabs.filter((tab, idx) => tab.id !== id);

    this.setTabs(tabs);

    if (tabs.length) {
      if (isCurrentTab) {
        nextTab = deletedIdx === 0 ? tabs[0] : tabs[deletedIdx - 1];
      }

      emitter.emit('tab-refresh', nextTab || this.currentTab);
    } else {
      location.href = '/';
    }
  }
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (class {
  fetchPost(id) {
    return $.get(ghost.url.api(`posts/${id}`), {
      include: 'author'
    }).fail(function (err) {
      console.log(err);
    });
  }
});

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _warning = __webpack_require__(4);

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(18);

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__(19);

var _PathUtils = __webpack_require__(6);

var _createTransitionManager = __webpack_require__(22);

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _DOMUtils = __webpack_require__(23);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

var getHistoryState = function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
};

/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */
var createBrowserHistory = function createBrowserHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Browser history needs a DOM');

  var globalHistory = window.history;
  var canUseHistory = (0, _DOMUtils.supportsHistory)();
  var needsHashChangeListener = !(0, _DOMUtils.supportsPopStateOnHashChange)();

  var _props$forceRefresh = props.forceRefresh,
      forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
      _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';

  var getDOMLocation = function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;

    var path = pathname + search + hash;

    (0, _warning2.default)(!basename || (0, _PathUtils.hasBasename)(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = (0, _PathUtils.stripBasename)(path, basename);

    return (0, _LocationUtils.createLocation)(path, state, key);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var handlePopState = function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if ((0, _DOMUtils.isExtraneousPopstateEvent)(event)) return;

    handlePop(getDOMLocation(event.state));
  };

  var handleHashChange = function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  };

  var forceNextPop = false;

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allKeys.indexOf(fromLocation.key);

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key];

  // Public interface

  var createHref = function createHref(location) {
    return basename + (0, _PathUtils.createPath)(location);
  };

  var push = function push(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

          nextKeys.push(location.key);
          allKeys = nextKeys;

          setState({ action: action, location: location });
        }
      } else {
        (0, _warning2.default)(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');

        window.location.href = href;
      }
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);

          if (prevIndex !== -1) allKeys[prevIndex] = location.key;

          setState({ action: action, location: location });
        }
      } else {
        (0, _warning2.default)(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');

        window.location.replace(href);
      }
    });
  };

  var go = function go(n) {
    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      (0, _DOMUtils.addEventListener)(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      (0, _DOMUtils.removeEventListener)(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createBrowserHistory;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function (condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.locationsAreEqual = exports.createLocation = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _resolvePathname = __webpack_require__(20);

var _resolvePathname2 = _interopRequireDefault(_resolvePathname);

var _valueEqual = __webpack_require__(21);

var _valueEqual2 = _interopRequireDefault(_valueEqual);

var _PathUtils = __webpack_require__(6);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var createLocation = exports.createLocation = function createLocation(path, state, key, currentLocation) {
  var location = void 0;
  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = (0, _PathUtils.parsePath)(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);

    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = (0, _resolvePathname2.default)(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
};

var locationsAreEqual = exports.locationsAreEqual = function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && (0, _valueEqual2.default)(a.state, b.state);
};

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var toParts = to && to.split('/') || [];
  var fromParts = from && from.split('/') || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash = void 0;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) {
    fromParts.unshift('..');
  }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (resolvePathname);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

function valueEqual(a, b) {
  if (a === b) return true;

  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return valueEqual(item, b[index]);
    });
  }

  var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
  var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);

  if (aType !== bType) return false;

  if (aType === 'object') {
    var aValue = a.valueOf();
    var bValue = b.valueOf();

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) return false;

    return aKeys.every(function (key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

/* harmony default export */ __webpack_exports__["default"] = (valueEqual);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _warning = __webpack_require__(4);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var createTransitionManager = function createTransitionManager() {
  var prompt = null;

  var setPrompt = function setPrompt(nextPrompt) {
    (0, _warning2.default)(prompt == null, 'A history supports only one prompt at a time');

    prompt = nextPrompt;

    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  };

  var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
          (0, _warning2.default)(false, 'A history needs a getUserConfirmation function in order to use a prompt message');

          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  };

  var listeners = [];

  var appendListener = function appendListener(fn) {
    var isActive = true;

    var listener = function listener() {
      if (isActive) fn.apply(undefined, arguments);
    };

    listeners.push(listener);

    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var notifyListeners = function notifyListeners() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(undefined, args);
    });
  };

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
};

exports.default = createTransitionManager;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var addEventListener = exports.addEventListener = function addEventListener(node, event, listener) {
  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
};

var removeEventListener = exports.removeEventListener = function removeEventListener(node, event, listener) {
  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
};

var getConfirmation = exports.getConfirmation = function getConfirmation(message, callback) {
  return callback(window.confirm(message));
}; // eslint-disable-line no-alert

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */
var supportsHistory = exports.supportsHistory = function supportsHistory() {
  var ua = window.navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

  return window.history && 'pushState' in window.history;
};

/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */
var supportsPopStateOnHashChange = exports.supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
};

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */
var supportsGoWithoutReloadUsingHash = exports.supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
};

/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */
var isExtraneousPopstateEvent = exports.isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
};

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_config__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores__ = __webpack_require__(2);




const themes = __WEBPACK_IMPORTED_MODULE_1_config__["a" /* default */].themes;

$(document).ready(function () {
  const $sidebar = $('#J-sidebar-header');
  const $body = $('body');
  const $themeSelector = $('#J-theme-selector');
  const $sidebarBody = $('#J-side-bar-body');
  let isSearchShowing = false;
  let isSideBodyShowing = true;

  $themeSelector.html(themes.map(theme => {
    const isSelected = __WEBPACK_IMPORTED_MODULE_2__stores__["c" /* themeStore */].theme === 'theme-' + theme ? 'selected' : '';
    return `<option value="theme-${theme}" ${isSelected}>theme-${theme}</option>`;
  }).join('')).on('change', function () {
    const $this = $(this);
    const theme = $this.val();

    if (theme !== __WEBPACK_IMPORTED_MODULE_2__stores__["c" /* themeStore */].theme) {
      $body.addClass(theme).removeClass(__WEBPACK_IMPORTED_MODULE_2__stores__["c" /* themeStore */].theme);
      __WEBPACK_IMPORTED_MODULE_2__stores__["c" /* themeStore */].setTheme(theme);
    }
  });

  $body.addClass(__WEBPACK_IMPORTED_MODULE_2__stores__["c" /* themeStore */].theme);

  $sidebar.on('click', '.J-sidebar-logo', function () {
    const $this = $(this);

    if ($this.is('.active')) {
      sidebarBodyHide();
      $this.removeClass('active');
    } else {
      sidebarBodyShow();
      emitter.emit('switch-sidebar', { target: 'logo' });
      $this.addClass('active').siblings().removeClass('active');
    }
  }).on('click', '.J-sidebar-search', function () {
    const $this = $(this);

    if ($this.is('.active')) {
      sidebarBodyHide();
      $this.removeClass('active');
    } else {
      sidebarBodyShow();

      $this.addClass('active').siblings().removeClass('active');

      new Promise(resolve => {
        __webpack_require__.e/* require.ensure */(0).then((require => {
          resolve(__webpack_require__( /* webpackChunkName: "search-box" */38));
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
      }).then(() => {
        emitter.emit('switch-sidebar', { target: 'search' });
      });
    }
  });

  function sidebarBodyShow() {
    $sidebarBody.removeClass('visibility-hidden');
    isSideBodyShowing = true;
  }
  function sidebarBodyHide() {
    $sidebarBody.addClass('visibility-hidden');
    isSideBodyShowing = false;
  }
});

/***/ }),
/* 25 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blog_tree__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);



$(function () {
  const $searchBox = $('#J-search-box');
  const $blogTree = $('#J-blog-tree');
  const $searchInput = $searchBox.find('.J-input-search');
  const $tagTree = $('#J-blog-tree');

  emitter.on('switch-sidebar', ({ target }) => {
    const isSearch = target === 'search';

    if (isSearch) {
      $blogTree.hide();
      $searchBox.removeClass('hidden');
      $searchInput.focus();
    } else {
      $blogTree.show();
      $searchBox.addClass('hidden');
    }
  });
});

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__history__ = __webpack_require__(1);



$(document).ready(function () {
  const $tagTree = $('#J-blog-tree');
  const $allPosts = $('#J-posts-all-hidden');
  const pathname = location.pathname;
  const $body = $('body');
  const $untagedPosts = $tagTree.find('.J-untaged-posts');

  const tags = {};
  const untaged = [];
  $allPosts.find('.J-post').each(function () {
    const $post = $(this);
    const slug = $post.data('slug');
    const $tags = $post.find('.J-tag');

    if (pathname.includes(slug)) {
      $post.addClass('active');
    }

    if ($tags.length === 0) {
      untaged.push($post[0].outerHTML);
    } else {
      $tags.each(function () {
        const tag = this.innerText;
        if (!tags[tag]) {
          tags[tag] = [];
        }

        tags[tag].push($post[0].outerHTML);
      });
    }
  });

  /**
   * copy posts to corresponding tag
   */
  $tagTree.find('.J-blog-tree-posts').each(function () {
    const $this = $(this);
    const posts = tags[$this.data('tag')];

    if (!posts) {
      $this.html('<ul><li class="blog-tree-no-posts lighter">Coming soon...</li></ul>').parent().addClass('post-hidden');
      return;
    }

    $this.html(posts.join('')).css({
      height: 26 * posts.length
    });
  });

  $untagedPosts.html(untaged.join(''));

  const $posts = $('.J-blog-tree-tags .J-post');

  // event binding
  $tagTree.addClass('loading-hidden').on('click', '.J-blog-tree-tagname', function () {
    $(this).parent().toggleClass('post-hidden');
  }).on('click', '.J-go2post', function (e) {
    const $this = $(this);

    if ($body.is('.home-template')) return;

    if ($this.parents('.J-post').is('.active')) {
      e.preventDefault();
      return;
    }

    const id = $this.data('id');
    const url = $this.attr('href');

    e.preventDefault();
    emitter.emit('add-post-tab', {
      id,
      url,
      title: $this.attr('title'),
      slug: $this.parents('.J-post').data('slug')
    });
  });

  __WEBPACK_IMPORTED_MODULE_1__history__["a" /* default */].listen(location => {
    const nextTab = location.state;

    $posts.removeClass('active').filter((idx, post) => {
      return $(post).data('slug') === nextTab.slug;
    }).addClass('active');
  });
});

/***/ }),
/* 28 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 29 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);


$(function () {
  const $readingTime = $(".J-reading-time");

  emitter.on("refresh-reading-time", ({ time }) => {
    $readingTime.html(time);
  });
});

/***/ }),
/* 31 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__history__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(3);





$(function () {
  const $body = $('body');
  const $post = $('#J-post');
  const $title = $post.find('.J-post-title');
  const $content = $post.find('.J-post-content');
  const $meta = $post.find('.J-post-meta');

  if ($('body').is('.post-template')) {
    emitter.emit('add-post-tab', {
      id: $post.data('id'),
      title: $post.data('title'),
      slug: $post.data('slug'),
      url: $post.data('url')
    });

    emitter.emit('refresh-reading-time', {
      time: $('.J-reading-time-hidden').html()
    });
  }

  __WEBPACK_IMPORTED_MODULE_1__history__["a" /* default */].listen((location, action) => {
    const postId = location.state.id;

    postId && __WEBPACK_IMPORTED_MODULE_2__stores__["a" /* postStore */].fetchPost(postId).done(function (data) {
      const post = data.posts[0] || {};
      const created_at = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["a" /* formatDate */])('$Y.$M.$d', post.created_at);

      $title.html(post.title);
      $content.html(post.html);
      $meta.html(`Posted by ${post.author.name} on ${created_at}`);

      document.title = post.title;

      emitter.emit('refresh-reading-time', {
        time: ''
      });
    });
  });
});

/***/ }),
/* 33 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);


/***/ }),
/* 35 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);


/***/ }),
/* 37 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDRkNDYzMTUzY2JmNGEzODRiZmQiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9oaXN0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy93YXJuaW5nL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9QYXRoVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2VtaXR0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21pdHQvZGlzdC9taXR0LmVzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9wYXJ0aWFscy9wb3N0LXRhYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvcmVzdWx0Lmpzb24iLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvcG9zdC10YWIvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmVzL1RoZW1lU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3Jlcy9UYWJTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmVzL1Bvc3RTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9jcmVhdGVCcm93c2VySGlzdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW52YXJpYW50L2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hpc3RvcnkvTG9jYXRpb25VdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS1wYXRobmFtZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsdWUtZXF1YWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hpc3RvcnkvY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hpc3RvcnkvRE9NVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvc2lkZS1iYXItaGVhZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhcnRpYWxzL3NpZGUtYmFyLWhlYWRlci9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3BhcnRpYWxzL3NpZGUtYmFyLWJvZHkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvc2lkZS1iYXItYm9keS9ibG9nLXRyZWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvc2lkZS1iYXItYm9keS9ibG9nLXRyZWUvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9wYXJ0aWFscy9zaWRlLWJhci1ib2R5L3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvZm9vdGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhcnRpYWxzL2Zvb3Rlci9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3BhcnRpYWxzL3Bvc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvcG9zdC9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3BhcnRpYWxzL3Bvc3QtbmF2L3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvaG9tZS9zdHlsZS5zY3NzIl0sIm5hbWVzIjpbInRoZW1lcyIsImxzUG9zdFRhYktleSIsImxzVGhlbWVLZXkiLCJkZWZhdWx0VGhlbWUiLCJjcmVhdGVIaXN0b3J5IiwidGhlbWVTdG9yZSIsInRhYlN0b3JlIiwicG9zdFN0b3JlIiwid2luZG93Iiwic3RvcmVzIiwiJGJvZHkiLCIkIiwiaXNIb21lUGFnZSIsImlzIiwiaXNQb3N0UGFnZSIsImhTY3JvbGwiLCJlbCIsImNvbnNvbGUiLCJlcnJvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aGVlbCIsImUiLCJkZWx0YSIsIndoZWVsRGVsdGEiLCJkZWx0YVkiLCJzY3JvbGxMZWZ0IiwicHJldmVudERlZmF1bHQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZm9ybWF0IiwidGVtcGxhdGUiLCJ2YXJzIiwicmVwbGFjZSIsIl8iLCJuYW1lIiwidmFsdWUiLCJ0cmltIiwidG9MZW4iLCJzb3VyY2UiLCJsZW4iLCJBcnJheSIsInByb3RvdHlwZSIsImpvaW4iLCJjYWxsIiwibGVuZ3RoIiwic2xpY2UiLCJmb3JtYXREYXRlIiwiZGF0ZSIsImtleSIsIkRhdGUiLCJEQVkiLCJZIiwiZ2V0RnVsbFllYXIiLCJ5IiwiTSIsImdldE1vbnRoIiwiZCIsImdldERhdGUiLCJEIiwiZ2V0RGF5IiwiSCIsImdldEhvdXJzIiwibSIsImdldE1pbnV0ZXMiLCJzIiwiZ2V0U2Vjb25kcyIsIndhcm5pbmciLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJjb25kaXRpb24iLCJhcmdzIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwiRXJyb3IiLCJ0ZXN0IiwiYXJnSW5kZXgiLCJtZXNzYWdlIiwieCIsIm1vZHVsZSIsImV4cG9ydHMiLCJjYWNoZWRTZXRUaW1lb3V0IiwiY2FjaGVkQ2xlYXJUaW1lb3V0IiwiZGVmYXVsdFNldFRpbW91dCIsImRlZmF1bHRDbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwicnVuVGltZW91dCIsImZ1biIsInJ1bkNsZWFyVGltZW91dCIsIm1hcmtlciIsInF1ZXVlIiwiZHJhaW5pbmciLCJjdXJyZW50UXVldWUiLCJxdWV1ZUluZGV4IiwiY2xlYW5VcE5leHRUaWNrIiwiY29uY2F0IiwiZHJhaW5RdWV1ZSIsInRpbWVvdXQiLCJydW4iLCJuZXh0VGljayIsImkiLCJwdXNoIiwiSXRlbSIsImFycmF5IiwiYXBwbHkiLCJ0aXRsZSIsImJyb3dzZXIiLCJhcmd2IiwidmVyc2lvbiIsInZlcnNpb25zIiwibm9vcCIsIm9uIiwiYWRkTGlzdGVuZXIiLCJvbmNlIiwib2ZmIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJlbWl0IiwicHJlcGVuZExpc3RlbmVyIiwicHJlcGVuZE9uY2VMaXN0ZW5lciIsImxpc3RlbmVycyIsImJpbmRpbmciLCJjd2QiLCJjaGRpciIsImRpciIsInVtYXNrIiwiX19lc01vZHVsZSIsImFkZExlYWRpbmdTbGFzaCIsInBhdGgiLCJjaGFyQXQiLCJzdHJpcExlYWRpbmdTbGFzaCIsInN1YnN0ciIsImhhc0Jhc2VuYW1lIiwicHJlZml4IiwiUmVnRXhwIiwic3RyaXBCYXNlbmFtZSIsInN0cmlwVHJhaWxpbmdTbGFzaCIsInBhcnNlUGF0aCIsInBhdGhuYW1lIiwic2VhcmNoIiwiaGFzaCIsImhhc2hJbmRleCIsImluZGV4T2YiLCJzZWFyY2hJbmRleCIsImNyZWF0ZVBhdGgiLCJsb2NhdGlvbiIsImVtaXR0ZXIiLCJtaXR0IiwiYWxsIiwiT2JqZWN0IiwiY3JlYXRlIiwidHlwZSIsImhhbmRsZXIiLCJzcGxpY2UiLCJldnQiLCJtYXAiLCIkcG9zdFRhYnMiLCIkc2Nyb2xsV3JhcCIsIm5kU2Nyb2xsV3JhcCIsImdldCIsIiRob21lIiwiaG9tZVdpZHRoIiwib3V0ZXJXaWR0aCIsInBvc3QiLCJ0YWJzIiwiZ2V0VGFicyIsImZpbHRlciIsInRhYiIsImlkIiwic2V0VGFicyIsImFjdGl2ZSIsImFjdGl2ZUlkIiwiJGFjdGl2ZSIsImh0bWwiLCJzbHVnIiwiZmluZCIsImhpc3RvcnkiLCJ1cmwiLCJzZXRDdXJyZW50VGFiIiwic2Nyb2xsMnZpZXciLCJzdG9wUHJvcGFnYXRpb24iLCJkZWxldGVUYWJJdGVtIiwicGFyZW50IiwiZGF0YSIsIiR0aGlzIiwiY3VycmVudFRhYiIsImFkZENsYXNzIiwic2libGluZ3MiLCJyZW1vdmVDbGFzcyIsIndyYXBXaWR0aCIsIndpZHRoIiwid3JhcFNjcm9sbExlZnQiLCJ3cmFwUmlnaHQiLCJ0aHJlc2hvbGQiLCJuZEFjdGl2ZSIsImFjdGl2ZVdpZHRoIiwiYWN0aXZlTGVmdCIsIm9mZnNldExlZnQiLCJhY3RpdmVSaWdodCIsImxzIiwibG9jYWxTdG9yYWdlIiwiY29uZmlnIiwidGhlbWUiLCJnZXRJdGVtIiwic2V0VGhlbWUiLCJzZXRJdGVtIiwic3BsaXQiLCJuZXh0VGFiIiwiaXNDdXJyZW50VGFiIiwiZGVsZXRlZElkeCIsImZpbmRJbmRleCIsImlkeCIsImhyZWYiLCJmZXRjaFBvc3QiLCJnaG9zdCIsImFwaSIsImluY2x1ZGUiLCJmYWlsIiwiZXJyIiwibG9nIiwiX3R5cGVvZiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwib2JqIiwiY29uc3RydWN0b3IiLCJfZXh0ZW5kcyIsImFzc2lnbiIsInRhcmdldCIsImhhc093blByb3BlcnR5IiwiX3dhcm5pbmciLCJyZXF1aXJlIiwiX3dhcm5pbmcyIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl9pbnZhcmlhbnQiLCJfaW52YXJpYW50MiIsIl9Mb2NhdGlvblV0aWxzIiwiX1BhdGhVdGlscyIsIl9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlciIsIl9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlcjIiLCJfRE9NVXRpbHMiLCJkZWZhdWx0IiwiUG9wU3RhdGVFdmVudCIsIkhhc2hDaGFuZ2VFdmVudCIsImdldEhpc3RvcnlTdGF0ZSIsInN0YXRlIiwiY3JlYXRlQnJvd3Nlckhpc3RvcnkiLCJwcm9wcyIsImNhblVzZURPTSIsImdsb2JhbEhpc3RvcnkiLCJjYW5Vc2VIaXN0b3J5Iiwic3VwcG9ydHNIaXN0b3J5IiwibmVlZHNIYXNoQ2hhbmdlTGlzdGVuZXIiLCJzdXBwb3J0c1BvcFN0YXRlT25IYXNoQ2hhbmdlIiwiX3Byb3BzJGZvcmNlUmVmcmVzaCIsImZvcmNlUmVmcmVzaCIsIl9wcm9wcyRnZXRVc2VyQ29uZmlybSIsImdldFVzZXJDb25maXJtYXRpb24iLCJnZXRDb25maXJtYXRpb24iLCJfcHJvcHMka2V5TGVuZ3RoIiwia2V5TGVuZ3RoIiwiYmFzZW5hbWUiLCJnZXRET01Mb2NhdGlvbiIsImhpc3RvcnlTdGF0ZSIsIl9yZWYiLCJfd2luZG93JGxvY2F0aW9uIiwiY3JlYXRlTG9jYXRpb24iLCJjcmVhdGVLZXkiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJ0cmFuc2l0aW9uTWFuYWdlciIsInNldFN0YXRlIiwibmV4dFN0YXRlIiwibm90aWZ5TGlzdGVuZXJzIiwiYWN0aW9uIiwiaGFuZGxlUG9wU3RhdGUiLCJldmVudCIsImlzRXh0cmFuZW91c1BvcHN0YXRlRXZlbnQiLCJoYW5kbGVQb3AiLCJoYW5kbGVIYXNoQ2hhbmdlIiwiZm9yY2VOZXh0UG9wIiwiY29uZmlybVRyYW5zaXRpb25UbyIsIm9rIiwicmV2ZXJ0UG9wIiwiZnJvbUxvY2F0aW9uIiwidG9Mb2NhdGlvbiIsInRvSW5kZXgiLCJhbGxLZXlzIiwiZnJvbUluZGV4IiwiZ28iLCJpbml0aWFsTG9jYXRpb24iLCJjcmVhdGVIcmVmIiwicHVzaFN0YXRlIiwicHJldkluZGV4IiwibmV4dEtleXMiLCJyZXBsYWNlU3RhdGUiLCJuIiwiZ29CYWNrIiwiZ29Gb3J3YXJkIiwibGlzdGVuZXJDb3VudCIsImNoZWNrRE9NTGlzdGVuZXJzIiwiaXNCbG9ja2VkIiwiYmxvY2siLCJwcm9tcHQiLCJ1bmJsb2NrIiwic2V0UHJvbXB0IiwibGlzdGVuIiwibGlzdGVuZXIiLCJ1bmxpc3RlbiIsImFwcGVuZExpc3RlbmVyIiwiaW52YXJpYW50IiwiYSIsImIiLCJjIiwiZiIsImZyYW1lc1RvUG9wIiwibG9jYXRpb25zQXJlRXF1YWwiLCJfcmVzb2x2ZVBhdGhuYW1lIiwiX3Jlc29sdmVQYXRobmFtZTIiLCJfdmFsdWVFcXVhbCIsIl92YWx1ZUVxdWFsMiIsImN1cnJlbnRMb2NhdGlvbiIsImRlY29kZVVSSSIsIlVSSUVycm9yIiwiaXNBYnNvbHV0ZSIsInNwbGljZU9uZSIsImxpc3QiLCJpbmRleCIsImsiLCJwb3AiLCJyZXNvbHZlUGF0aG5hbWUiLCJ0byIsImZyb20iLCJ0b1BhcnRzIiwiZnJvbVBhcnRzIiwiaXNUb0FicyIsImlzRnJvbUFicyIsIm11c3RFbmRBYnMiLCJoYXNUcmFpbGluZ1NsYXNoIiwibGFzdCIsInVwIiwicGFydCIsInVuc2hpZnQiLCJyZXN1bHQiLCJ2YWx1ZUVxdWFsIiwiaXNBcnJheSIsImV2ZXJ5IiwiaXRlbSIsImFUeXBlIiwiYlR5cGUiLCJhVmFsdWUiLCJ2YWx1ZU9mIiwiYlZhbHVlIiwiYUtleXMiLCJrZXlzIiwiYktleXMiLCJjcmVhdGVUcmFuc2l0aW9uTWFuYWdlciIsIm5leHRQcm9tcHQiLCJjYWxsYmFjayIsImZuIiwiaXNBY3RpdmUiLCJfbGVuIiwiX2tleSIsImZvckVhY2giLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJub2RlIiwiYXR0YWNoRXZlbnQiLCJkZXRhY2hFdmVudCIsImNvbmZpcm0iLCJ1YSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInN1cHBvcnRzR29XaXRob3V0UmVsb2FkVXNpbmdIYXNoIiwicmVhZHkiLCIkc2lkZWJhciIsIiR0aGVtZVNlbGVjdG9yIiwiJHNpZGViYXJCb2R5IiwiaXNTZWFyY2hTaG93aW5nIiwiaXNTaWRlQm9keVNob3dpbmciLCJpc1NlbGVjdGVkIiwidmFsIiwic2lkZWJhckJvZHlIaWRlIiwic2lkZWJhckJvZHlTaG93IiwidGhlbiIsIiRzZWFyY2hCb3giLCIkYmxvZ1RyZWUiLCIkc2VhcmNoSW5wdXQiLCIkdGFnVHJlZSIsImlzU2VhcmNoIiwiaGlkZSIsImZvY3VzIiwic2hvdyIsIiRhbGxQb3N0cyIsIiR1bnRhZ2VkUG9zdHMiLCJ0YWdzIiwidW50YWdlZCIsImVhY2giLCIkcG9zdCIsIiR0YWdzIiwiaW5jbHVkZXMiLCJvdXRlckhUTUwiLCJ0YWciLCJpbm5lclRleHQiLCJwb3N0cyIsImNzcyIsImhlaWdodCIsIiRwb3N0cyIsInRvZ2dsZUNsYXNzIiwicGFyZW50cyIsImF0dHIiLCIkcmVhZGluZ1RpbWUiLCJ0aW1lIiwiJHRpdGxlIiwiJGNvbnRlbnQiLCIkbWV0YSIsInBvc3RJZCIsImRvbmUiLCJjcmVhdGVkX2F0IiwiYXV0aG9yIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLFdBQVcsRUFBRTtBQUN2RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOERBQXNELDZCQUE2QixZQUFZO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0Esa0RBQTBDLG9CQUFvQixXQUFXOztBQUV6RTtBQUNBOzs7Ozs7Ozs7O0FDL0lBOztBQUVBLHlEQUFlO0FBQ2JBLEVBQUEsbUVBRGE7QUFFYkMsZ0JBQWMsV0FGRDtBQUdiO0FBQ0FDLGNBQVksT0FKQztBQUtiQyxnQkFBYztBQUxELENBQWYsRTs7Ozs7Ozs7O0FDRkE7O0FBRUEseURBQWUsb0VBQUFDLEVBQWYsRTs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTs7QUFFTyxNQUFNQyxhQUFhLElBQUksNERBQUosRUFBbkI7QUFBQTtBQUFBO0FBQ0EsTUFBTUMsV0FBVyxJQUFJLDBEQUFKLEVBQWpCO0FBQUE7QUFBQTtBQUNBLE1BQU1DLFlBQVksSUFBSSwyREFBSixFQUFsQjtBQUFBO0FBQUE7O0FBRVBDLE9BQU9DLE1BQVAsR0FBZ0I7QUFDZEosWUFEYztBQUVkQyxVQUZjO0FBR2RDO0FBSGMsQ0FBaEIsQzs7Ozs7OztBQ1JBO0FBQUEsTUFBTUcsUUFBUUMsRUFBRSxNQUFGLENBQWQ7O0FBRU8sTUFBTUMsYUFBYSxNQUFNRixNQUFNRyxFQUFOLENBQVMsZ0JBQVQsQ0FBekI7QUFBQTtBQUFBO0FBQ0EsTUFBTUMsYUFBYSxNQUFNSixNQUFNRyxFQUFOLENBQVMsZ0JBQVQsQ0FBekI7QUFBQTtBQUFBOztBQUVQOzs7Ozs7Ozs7QUFTTyxTQUFTRSxPQUFULENBQWlCQyxFQUFqQixFQUFxQjtBQUMxQixNQUFJLENBQUNBLEVBQUwsRUFBUztBQUNQQyxZQUFRQyxLQUFSLENBQWMsa0JBQWQ7QUFDQTtBQUNEOztBQUVERixLQUFHRyxnQkFBSCxDQUFvQixPQUFwQixFQUE2QkMsS0FBN0I7O0FBRUEsV0FBU0EsS0FBVCxDQUFlQyxDQUFmLEVBQWtCO0FBQ2hCLFVBQU1DLFFBQVFELEVBQUVFLFVBQUYsR0FBZUYsRUFBRUUsVUFBakIsR0FBOEIsQ0FBQyxDQUFELEdBQUtGLEVBQUVHLE1BQW5EO0FBQ0FSLE9BQUdTLFVBQUgsSUFBaUIsQ0FBQ0gsS0FBbEI7QUFDQUQsTUFBRUssY0FBRjtBQUNEOztBQUVELFNBQU8sTUFBTVYsR0FBR1csbUJBQUgsQ0FBdUIsT0FBdkIsRUFBZ0NQLEtBQWhDLENBQWI7QUFDRDs7QUFFTSxNQUFNUSxTQUFTLFVBQVNDLFFBQVQsRUFBbUJDLElBQW5CLEVBQXlCO0FBQzdDLFNBQU9ELFNBQVNFLE9BQVQsQ0FBaUIsbUJBQWpCLEVBQXNDLFVBQVNDLENBQVQsRUFBWUMsSUFBWixFQUFrQjtBQUM3RCxRQUFJQyxRQUFRSixLQUFLRyxLQUFLRSxJQUFMLEVBQUwsQ0FBWjtBQUNBLFdBQU9ELFNBQVMsSUFBVCxHQUFnQixFQUFoQixHQUFxQkEsUUFBUSxFQUFwQztBQUNELEdBSE0sQ0FBUDtBQUlELENBTE07QUFBQTtBQUFBOztBQU9QLE1BQU1FLFFBQVEsVUFBU0MsTUFBVCxFQUFpQkMsR0FBakIsRUFBc0I7QUFDbEMsU0FBTyxDQUNMQyxNQUFNQyxTQUFOLENBQWdCQyxJQUFoQixDQUFxQkMsSUFBckIsQ0FDRTtBQUNFQyxZQUFRTCxNQUFNO0FBRGhCLEdBREYsRUFJRSxHQUpGLElBS0lELE1BTkMsRUFPTE8sS0FQSyxDQU9DLENBQUNOLEdBUEYsQ0FBUDtBQVFELENBVEQ7O0FBV08sTUFBTU8sYUFBYSxVQUFTaEIsUUFBVCxFQUFtQmlCLElBQW5CLEVBQXlCO0FBQ2pELE1BQUksQ0FBQ0EsSUFBTCxFQUFXLE9BQU8sRUFBUDtBQUNYakIsYUFBV0EsU0FBU0UsT0FBVCxDQUFpQixlQUFqQixFQUFrQyxVQUFTQyxDQUFULEVBQVllLEdBQVosRUFBaUI7QUFDNUQsV0FBTyxPQUFPQSxHQUFQLEdBQWEsR0FBcEI7QUFDRCxHQUZVLENBQVg7QUFHQUQsU0FBTyxJQUFJRSxJQUFKLENBQVNGLElBQVQsQ0FBUDtBQUNBLE1BQUlHLE1BQU0sQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsRUFBK0IsR0FBL0IsQ0FBVjtBQUNBLFNBQU9yQixPQUFPQyxRQUFQLEVBQWlCO0FBQ3RCcUIsT0FBR2QsTUFBTVUsS0FBS0ssV0FBTCxFQUFOLEVBQTBCLENBQTFCLENBRG1CO0FBRXRCQyxPQUFHaEIsTUFBTVUsS0FBS0ssV0FBTCxFQUFOLEVBQTBCLENBQTFCLENBRm1CO0FBR3RCRSxPQUFHakIsTUFBTVUsS0FBS1EsUUFBTCxLQUFrQixDQUF4QixFQUEyQixDQUEzQixDQUhtQjtBQUl0QkMsT0FBR25CLE1BQU1VLEtBQUtVLE9BQUwsRUFBTixFQUFzQixDQUF0QixDQUptQjtBQUt0QkMsT0FBR1IsSUFBSUgsS0FBS1ksTUFBTCxFQUFKLENBTG1CO0FBTXRCQyxPQUFHdkIsTUFBTVUsS0FBS2MsUUFBTCxFQUFOLEVBQXVCLENBQXZCLENBTm1CO0FBT3RCQyxPQUFHekIsTUFBTVUsS0FBS2dCLFVBQUwsRUFBTixFQUF5QixDQUF6QixDQVBtQjtBQVF0QkMsT0FBRzNCLE1BQU1VLEtBQUtrQixVQUFMLEVBQU4sRUFBeUIsQ0FBekI7QUFSbUIsR0FBakIsQ0FBUDtBQVVELENBakJNLEM7Ozs7Ozs7OztBQ2pEUDs7Ozs7Ozs7O0FBU0E7O0FBRUE7Ozs7Ozs7QUFPQSxJQUFJQyxVQUFVLFlBQVcsQ0FBRSxDQUEzQjs7QUFFQSxJQUFJQyxRQUFRQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsWUFBN0IsRUFBMkM7QUFDekNILFlBQVUsVUFBU0ksU0FBVCxFQUFvQnpDLE1BQXBCLEVBQTRCMEMsSUFBNUIsRUFBa0M7QUFDMUMsUUFBSWhDLE1BQU1pQyxVQUFVNUIsTUFBcEI7QUFDQTJCLFdBQU8sSUFBSS9CLEtBQUosQ0FBVUQsTUFBTSxDQUFOLEdBQVVBLE1BQU0sQ0FBaEIsR0FBb0IsQ0FBOUIsQ0FBUDtBQUNBLFNBQUssSUFBSVMsTUFBTSxDQUFmLEVBQWtCQSxNQUFNVCxHQUF4QixFQUE2QlMsS0FBN0IsRUFBb0M7QUFDbEN1QixXQUFLdkIsTUFBTSxDQUFYLElBQWdCd0IsVUFBVXhCLEdBQVYsQ0FBaEI7QUFDRDtBQUNELFFBQUluQixXQUFXNEMsU0FBZixFQUEwQjtBQUN4QixZQUFNLElBQUlDLEtBQUosQ0FDSiw4REFDQSxrQkFGSSxDQUFOO0FBSUQ7O0FBRUQsUUFBSTdDLE9BQU9lLE1BQVAsR0FBZ0IsRUFBaEIsSUFBdUIsVUFBRCxDQUFhK0IsSUFBYixDQUFrQjlDLE1BQWxCLENBQTFCLEVBQXFEO0FBQ25ELFlBQU0sSUFBSTZDLEtBQUosQ0FDSixpRUFDQSx1REFEQSxHQUMwRDdDLE1BRnRELENBQU47QUFJRDs7QUFFRCxRQUFJLENBQUN5QyxTQUFMLEVBQWdCO0FBQ2QsVUFBSU0sV0FBVyxDQUFmO0FBQ0EsVUFBSUMsVUFBVSxjQUNaaEQsT0FBT0csT0FBUCxDQUFlLEtBQWYsRUFBc0IsWUFBVztBQUMvQixlQUFPdUMsS0FBS0ssVUFBTCxDQUFQO0FBQ0QsT0FGRCxDQURGO0FBSUEsVUFBSSxPQUFPMUQsT0FBUCxLQUFtQixXQUF2QixFQUFvQztBQUNsQ0EsZ0JBQVFDLEtBQVIsQ0FBYzBELE9BQWQ7QUFDRDtBQUNELFVBQUk7QUFDRjtBQUNBO0FBQ0EsY0FBTSxJQUFJSCxLQUFKLENBQVVHLE9BQVYsQ0FBTjtBQUNELE9BSkQsQ0FJRSxPQUFNQyxDQUFOLEVBQVMsQ0FBRTtBQUNkO0FBQ0YsR0FuQ0Q7QUFvQ0Q7O0FBRURDLE9BQU9DLE9BQVAsR0FBaUJkLE9BQWpCLEM7Ozs7Ozs7QUMzREE7QUFDQSxJQUFJQyxVQUFVWSxPQUFPQyxPQUFQLEdBQWlCLEVBQS9COztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUlDLGdCQUFKO0FBQ0EsSUFBSUMsa0JBQUo7O0FBRUEsU0FBU0MsZ0JBQVQsR0FBNEI7QUFDeEIsVUFBTSxJQUFJVCxLQUFKLENBQVUsaUNBQVYsQ0FBTjtBQUNIO0FBQ0QsU0FBU1UsbUJBQVQsR0FBZ0M7QUFDNUIsVUFBTSxJQUFJVixLQUFKLENBQVUsbUNBQVYsQ0FBTjtBQUNIO0FBQ0EsYUFBWTtBQUNULFFBQUk7QUFDQSxZQUFJLE9BQU9XLFVBQVAsS0FBc0IsVUFBMUIsRUFBc0M7QUFDbENKLCtCQUFtQkksVUFBbkI7QUFDSCxTQUZELE1BRU87QUFDSEosK0JBQW1CRSxnQkFBbkI7QUFDSDtBQUNKLEtBTkQsQ0FNRSxPQUFPN0QsQ0FBUCxFQUFVO0FBQ1IyRCwyQkFBbUJFLGdCQUFuQjtBQUNIO0FBQ0QsUUFBSTtBQUNBLFlBQUksT0FBT0csWUFBUCxLQUF3QixVQUE1QixFQUF3QztBQUNwQ0osaUNBQXFCSSxZQUFyQjtBQUNILFNBRkQsTUFFTztBQUNISixpQ0FBcUJFLG1CQUFyQjtBQUNIO0FBQ0osS0FORCxDQU1FLE9BQU85RCxDQUFQLEVBQVU7QUFDUjRELDZCQUFxQkUsbUJBQXJCO0FBQ0g7QUFDSixDQW5CQSxHQUFEO0FBb0JBLFNBQVNHLFVBQVQsQ0FBb0JDLEdBQXBCLEVBQXlCO0FBQ3JCLFFBQUlQLHFCQUFxQkksVUFBekIsRUFBcUM7QUFDakM7QUFDQSxlQUFPQSxXQUFXRyxHQUFYLEVBQWdCLENBQWhCLENBQVA7QUFDSDtBQUNEO0FBQ0EsUUFBSSxDQUFDUCxxQkFBcUJFLGdCQUFyQixJQUF5QyxDQUFDRixnQkFBM0MsS0FBZ0VJLFVBQXBFLEVBQWdGO0FBQzVFSiwyQkFBbUJJLFVBQW5CO0FBQ0EsZUFBT0EsV0FBV0csR0FBWCxFQUFnQixDQUFoQixDQUFQO0FBQ0g7QUFDRCxRQUFJO0FBQ0E7QUFDQSxlQUFPUCxpQkFBaUJPLEdBQWpCLEVBQXNCLENBQXRCLENBQVA7QUFDSCxLQUhELENBR0UsT0FBTWxFLENBQU4sRUFBUTtBQUNOLFlBQUk7QUFDQTtBQUNBLG1CQUFPMkQsaUJBQWlCdEMsSUFBakIsQ0FBc0IsSUFBdEIsRUFBNEI2QyxHQUE1QixFQUFpQyxDQUFqQyxDQUFQO0FBQ0gsU0FIRCxDQUdFLE9BQU1sRSxDQUFOLEVBQVE7QUFDTjtBQUNBLG1CQUFPMkQsaUJBQWlCdEMsSUFBakIsQ0FBc0IsSUFBdEIsRUFBNEI2QyxHQUE1QixFQUFpQyxDQUFqQyxDQUFQO0FBQ0g7QUFDSjtBQUdKO0FBQ0QsU0FBU0MsZUFBVCxDQUF5QkMsTUFBekIsRUFBaUM7QUFDN0IsUUFBSVIsdUJBQXVCSSxZQUEzQixFQUF5QztBQUNyQztBQUNBLGVBQU9BLGFBQWFJLE1BQWIsQ0FBUDtBQUNIO0FBQ0Q7QUFDQSxRQUFJLENBQUNSLHVCQUF1QkUsbUJBQXZCLElBQThDLENBQUNGLGtCQUFoRCxLQUF1RUksWUFBM0UsRUFBeUY7QUFDckZKLDZCQUFxQkksWUFBckI7QUFDQSxlQUFPQSxhQUFhSSxNQUFiLENBQVA7QUFDSDtBQUNELFFBQUk7QUFDQTtBQUNBLGVBQU9SLG1CQUFtQlEsTUFBbkIsQ0FBUDtBQUNILEtBSEQsQ0FHRSxPQUFPcEUsQ0FBUCxFQUFTO0FBQ1AsWUFBSTtBQUNBO0FBQ0EsbUJBQU80RCxtQkFBbUJ2QyxJQUFuQixDQUF3QixJQUF4QixFQUE4QitDLE1BQTlCLENBQVA7QUFDSCxTQUhELENBR0UsT0FBT3BFLENBQVAsRUFBUztBQUNQO0FBQ0E7QUFDQSxtQkFBTzRELG1CQUFtQnZDLElBQW5CLENBQXdCLElBQXhCLEVBQThCK0MsTUFBOUIsQ0FBUDtBQUNIO0FBQ0o7QUFJSjtBQUNELElBQUlDLFFBQVEsRUFBWjtBQUNBLElBQUlDLFdBQVcsS0FBZjtBQUNBLElBQUlDLFlBQUo7QUFDQSxJQUFJQyxhQUFhLENBQUMsQ0FBbEI7O0FBRUEsU0FBU0MsZUFBVCxHQUEyQjtBQUN2QixRQUFJLENBQUNILFFBQUQsSUFBYSxDQUFDQyxZQUFsQixFQUFnQztBQUM1QjtBQUNIO0FBQ0RELGVBQVcsS0FBWDtBQUNBLFFBQUlDLGFBQWFqRCxNQUFqQixFQUF5QjtBQUNyQitDLGdCQUFRRSxhQUFhRyxNQUFiLENBQW9CTCxLQUFwQixDQUFSO0FBQ0gsS0FGRCxNQUVPO0FBQ0hHLHFCQUFhLENBQUMsQ0FBZDtBQUNIO0FBQ0QsUUFBSUgsTUFBTS9DLE1BQVYsRUFBa0I7QUFDZHFEO0FBQ0g7QUFDSjs7QUFFRCxTQUFTQSxVQUFULEdBQXNCO0FBQ2xCLFFBQUlMLFFBQUosRUFBYztBQUNWO0FBQ0g7QUFDRCxRQUFJTSxVQUFVWCxXQUFXUSxlQUFYLENBQWQ7QUFDQUgsZUFBVyxJQUFYOztBQUVBLFFBQUlyRCxNQUFNb0QsTUFBTS9DLE1BQWhCO0FBQ0EsV0FBTUwsR0FBTixFQUFXO0FBQ1BzRCx1QkFBZUYsS0FBZjtBQUNBQSxnQkFBUSxFQUFSO0FBQ0EsZUFBTyxFQUFFRyxVQUFGLEdBQWV2RCxHQUF0QixFQUEyQjtBQUN2QixnQkFBSXNELFlBQUosRUFBa0I7QUFDZEEsNkJBQWFDLFVBQWIsRUFBeUJLLEdBQXpCO0FBQ0g7QUFDSjtBQUNETCxxQkFBYSxDQUFDLENBQWQ7QUFDQXZELGNBQU1vRCxNQUFNL0MsTUFBWjtBQUNIO0FBQ0RpRCxtQkFBZSxJQUFmO0FBQ0FELGVBQVcsS0FBWDtBQUNBSCxvQkFBZ0JTLE9BQWhCO0FBQ0g7O0FBRUQvQixRQUFRaUMsUUFBUixHQUFtQixVQUFVWixHQUFWLEVBQWU7QUFDOUIsUUFBSWpCLE9BQU8sSUFBSS9CLEtBQUosQ0FBVWdDLFVBQVU1QixNQUFWLEdBQW1CLENBQTdCLENBQVg7QUFDQSxRQUFJNEIsVUFBVTVCLE1BQVYsR0FBbUIsQ0FBdkIsRUFBMEI7QUFDdEIsYUFBSyxJQUFJeUQsSUFBSSxDQUFiLEVBQWdCQSxJQUFJN0IsVUFBVTVCLE1BQTlCLEVBQXNDeUQsR0FBdEMsRUFBMkM7QUFDdkM5QixpQkFBSzhCLElBQUksQ0FBVCxJQUFjN0IsVUFBVTZCLENBQVYsQ0FBZDtBQUNIO0FBQ0o7QUFDRFYsVUFBTVcsSUFBTixDQUFXLElBQUlDLElBQUosQ0FBU2YsR0FBVCxFQUFjakIsSUFBZCxDQUFYO0FBQ0EsUUFBSW9CLE1BQU0vQyxNQUFOLEtBQWlCLENBQWpCLElBQXNCLENBQUNnRCxRQUEzQixFQUFxQztBQUNqQ0wsbUJBQVdVLFVBQVg7QUFDSDtBQUNKLENBWEQ7O0FBYUE7QUFDQSxTQUFTTSxJQUFULENBQWNmLEdBQWQsRUFBbUJnQixLQUFuQixFQUEwQjtBQUN0QixTQUFLaEIsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS2dCLEtBQUwsR0FBYUEsS0FBYjtBQUNIO0FBQ0RELEtBQUs5RCxTQUFMLENBQWUwRCxHQUFmLEdBQXFCLFlBQVk7QUFDN0IsU0FBS1gsR0FBTCxDQUFTaUIsS0FBVCxDQUFlLElBQWYsRUFBcUIsS0FBS0QsS0FBMUI7QUFDSCxDQUZEO0FBR0FyQyxRQUFRdUMsS0FBUixHQUFnQixTQUFoQjtBQUNBdkMsUUFBUXdDLE9BQVIsR0FBa0IsSUFBbEI7QUFDQXhDLFFBQVFDLEdBQVIsR0FBYyxFQUFkO0FBQ0FELFFBQVF5QyxJQUFSLEdBQWUsRUFBZjtBQUNBekMsUUFBUTBDLE9BQVIsR0FBa0IsRUFBbEIsQyxDQUFzQjtBQUN0QjFDLFFBQVEyQyxRQUFSLEdBQW1CLEVBQW5COztBQUVBLFNBQVNDLElBQVQsR0FBZ0IsQ0FBRTs7QUFFbEI1QyxRQUFRNkMsRUFBUixHQUFhRCxJQUFiO0FBQ0E1QyxRQUFROEMsV0FBUixHQUFzQkYsSUFBdEI7QUFDQTVDLFFBQVErQyxJQUFSLEdBQWVILElBQWY7QUFDQTVDLFFBQVFnRCxHQUFSLEdBQWNKLElBQWQ7QUFDQTVDLFFBQVFpRCxjQUFSLEdBQXlCTCxJQUF6QjtBQUNBNUMsUUFBUWtELGtCQUFSLEdBQTZCTixJQUE3QjtBQUNBNUMsUUFBUW1ELElBQVIsR0FBZVAsSUFBZjtBQUNBNUMsUUFBUW9ELGVBQVIsR0FBMEJSLElBQTFCO0FBQ0E1QyxRQUFRcUQsbUJBQVIsR0FBOEJULElBQTlCOztBQUVBNUMsUUFBUXNELFNBQVIsR0FBb0IsVUFBVXZGLElBQVYsRUFBZ0I7QUFBRSxXQUFPLEVBQVA7QUFBVyxDQUFqRDs7QUFFQWlDLFFBQVF1RCxPQUFSLEdBQWtCLFVBQVV4RixJQUFWLEVBQWdCO0FBQzlCLFVBQU0sSUFBSXdDLEtBQUosQ0FBVSxrQ0FBVixDQUFOO0FBQ0gsQ0FGRDs7QUFJQVAsUUFBUXdELEdBQVIsR0FBYyxZQUFZO0FBQUUsV0FBTyxHQUFQO0FBQVksQ0FBeEM7QUFDQXhELFFBQVF5RCxLQUFSLEdBQWdCLFVBQVVDLEdBQVYsRUFBZTtBQUMzQixVQUFNLElBQUluRCxLQUFKLENBQVUsZ0NBQVYsQ0FBTjtBQUNILENBRkQ7QUFHQVAsUUFBUTJELEtBQVIsR0FBZ0IsWUFBVztBQUFFLFdBQU8sQ0FBUDtBQUFXLENBQXhDLEM7Ozs7Ozs7QUN2TEE7O0FBRUE5QyxRQUFRK0MsVUFBUixHQUFxQixJQUFyQjtBQUNBLElBQUlDLGtCQUFrQmhELFFBQVFnRCxlQUFSLEdBQTBCLFNBQVNBLGVBQVQsQ0FBeUJDLElBQXpCLEVBQStCO0FBQzdFLFNBQU9BLEtBQUtDLE1BQUwsQ0FBWSxDQUFaLE1BQW1CLEdBQW5CLEdBQXlCRCxJQUF6QixHQUFnQyxNQUFNQSxJQUE3QztBQUNELENBRkQ7O0FBSUEsSUFBSUUsb0JBQW9CbkQsUUFBUW1ELGlCQUFSLEdBQTRCLFNBQVNBLGlCQUFULENBQTJCRixJQUEzQixFQUFpQztBQUNuRixTQUFPQSxLQUFLQyxNQUFMLENBQVksQ0FBWixNQUFtQixHQUFuQixHQUF5QkQsS0FBS0csTUFBTCxDQUFZLENBQVosQ0FBekIsR0FBMENILElBQWpEO0FBQ0QsQ0FGRDs7QUFJQSxJQUFJSSxjQUFjckQsUUFBUXFELFdBQVIsR0FBc0IsU0FBU0EsV0FBVCxDQUFxQkosSUFBckIsRUFBMkJLLE1BQTNCLEVBQW1DO0FBQ3pFLFNBQU8sSUFBSUMsTUFBSixDQUFXLE1BQU1ELE1BQU4sR0FBZSxlQUExQixFQUEyQyxHQUEzQyxFQUFnRDNELElBQWhELENBQXFEc0QsSUFBckQsQ0FBUDtBQUNELENBRkQ7O0FBSUEsSUFBSU8sZ0JBQWdCeEQsUUFBUXdELGFBQVIsR0FBd0IsU0FBU0EsYUFBVCxDQUF1QlAsSUFBdkIsRUFBNkJLLE1BQTdCLEVBQXFDO0FBQy9FLFNBQU9ELFlBQVlKLElBQVosRUFBa0JLLE1BQWxCLElBQTRCTCxLQUFLRyxNQUFMLENBQVlFLE9BQU8xRixNQUFuQixDQUE1QixHQUF5RHFGLElBQWhFO0FBQ0QsQ0FGRDs7QUFJQSxJQUFJUSxxQkFBcUJ6RCxRQUFReUQsa0JBQVIsR0FBNkIsU0FBU0Esa0JBQVQsQ0FBNEJSLElBQTVCLEVBQWtDO0FBQ3RGLFNBQU9BLEtBQUtDLE1BQUwsQ0FBWUQsS0FBS3JGLE1BQUwsR0FBYyxDQUExQixNQUFpQyxHQUFqQyxHQUF1Q3FGLEtBQUtwRixLQUFMLENBQVcsQ0FBWCxFQUFjLENBQUMsQ0FBZixDQUF2QyxHQUEyRG9GLElBQWxFO0FBQ0QsQ0FGRDs7QUFJQSxJQUFJUyxZQUFZMUQsUUFBUTBELFNBQVIsR0FBb0IsU0FBU0EsU0FBVCxDQUFtQlQsSUFBbkIsRUFBeUI7QUFDM0QsTUFBSVUsV0FBV1YsUUFBUSxHQUF2QjtBQUNBLE1BQUlXLFNBQVMsRUFBYjtBQUNBLE1BQUlDLE9BQU8sRUFBWDs7QUFFQSxNQUFJQyxZQUFZSCxTQUFTSSxPQUFULENBQWlCLEdBQWpCLENBQWhCO0FBQ0EsTUFBSUQsY0FBYyxDQUFDLENBQW5CLEVBQXNCO0FBQ3BCRCxXQUFPRixTQUFTUCxNQUFULENBQWdCVSxTQUFoQixDQUFQO0FBQ0FILGVBQVdBLFNBQVNQLE1BQVQsQ0FBZ0IsQ0FBaEIsRUFBbUJVLFNBQW5CLENBQVg7QUFDRDs7QUFFRCxNQUFJRSxjQUFjTCxTQUFTSSxPQUFULENBQWlCLEdBQWpCLENBQWxCO0FBQ0EsTUFBSUMsZ0JBQWdCLENBQUMsQ0FBckIsRUFBd0I7QUFDdEJKLGFBQVNELFNBQVNQLE1BQVQsQ0FBZ0JZLFdBQWhCLENBQVQ7QUFDQUwsZUFBV0EsU0FBU1AsTUFBVCxDQUFnQixDQUFoQixFQUFtQlksV0FBbkIsQ0FBWDtBQUNEOztBQUVELFNBQU87QUFDTEwsY0FBVUEsUUFETDtBQUVMQyxZQUFRQSxXQUFXLEdBQVgsR0FBaUIsRUFBakIsR0FBc0JBLE1BRnpCO0FBR0xDLFVBQU1BLFNBQVMsR0FBVCxHQUFlLEVBQWYsR0FBb0JBO0FBSHJCLEdBQVA7QUFLRCxDQXRCRDs7QUF3QkEsSUFBSUksYUFBYWpFLFFBQVFpRSxVQUFSLEdBQXFCLFNBQVNBLFVBQVQsQ0FBb0JDLFFBQXBCLEVBQThCO0FBQ2xFLE1BQUlQLFdBQVdPLFNBQVNQLFFBQXhCO0FBQUEsTUFDSUMsU0FBU00sU0FBU04sTUFEdEI7QUFBQSxNQUVJQyxPQUFPSyxTQUFTTCxJQUZwQjs7QUFLQSxNQUFJWixPQUFPVSxZQUFZLEdBQXZCOztBQUVBLE1BQUlDLFVBQVVBLFdBQVcsR0FBekIsRUFBOEJYLFFBQVFXLE9BQU9WLE1BQVAsQ0FBYyxDQUFkLE1BQXFCLEdBQXJCLEdBQTJCVSxNQUEzQixHQUFvQyxNQUFNQSxNQUFsRDs7QUFFOUIsTUFBSUMsUUFBUUEsU0FBUyxHQUFyQixFQUEwQlosUUFBUVksS0FBS1gsTUFBTCxDQUFZLENBQVosTUFBbUIsR0FBbkIsR0FBeUJXLElBQXpCLEdBQWdDLE1BQU1BLElBQTlDOztBQUUxQixTQUFPWixJQUFQO0FBQ0QsQ0FiRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNUQTtBQUNBeEgsT0FBTzBJLE9BQVAsR0FBaUIsNkRBQUFDLEVBQWpCLEM7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUtBOzs7O0FBSUEsU0FBU0EsSUFBVCxDQUFjQyxHQUFkLEVBQW9DO0FBQ25DQSxPQUFNQSxPQUFPQyxPQUFPQyxNQUFQLENBQWMsSUFBZCxDQUFiOztBQUVBLFFBQU87QUFDTjs7Ozs7OztBQU9BdkMsTUFBSSxTQUFTQSxFQUFULENBQVl3QyxJQUFaLEVBQTBCQyxPQUExQixFQUFpRDtBQUNwRCxJQUFDSixJQUFJRyxJQUFKLE1BQWNILElBQUlHLElBQUosSUFBWSxFQUExQixDQUFELEVBQWdDbEQsSUFBaEMsQ0FBcUNtRCxPQUFyQztBQUNBLEdBVks7O0FBWU47Ozs7Ozs7QUFPQXRDLE9BQUssU0FBU0EsR0FBVCxDQUFhcUMsSUFBYixFQUEyQkMsT0FBM0IsRUFBa0Q7QUFDdEQsT0FBSUosSUFBSUcsSUFBSixDQUFKLEVBQWU7QUFDZEgsUUFBSUcsSUFBSixFQUFVRSxNQUFWLENBQWlCTCxJQUFJRyxJQUFKLEVBQVVULE9BQVYsQ0FBa0JVLE9BQWxCLE1BQStCLENBQWhELEVBQW1ELENBQW5EO0FBQ0E7QUFDRCxHQXZCSzs7QUF5Qk47Ozs7Ozs7O0FBUUFuQyxRQUFNLFNBQVNBLElBQVQsQ0FBY2tDLElBQWQsRUFBNEJHLEdBQTVCLEVBQXNDO0FBQzNDLElBQUNOLElBQUlHLElBQUosS0FBYSxFQUFkLEVBQWtCSSxHQUFsQixDQUFzQixVQUFVSCxPQUFWLEVBQW1CO0FBQUVBLFlBQVFFLEdBQVI7QUFBZSxJQUExRDtBQUNBLElBQUNOLElBQUksR0FBSixLQUFZLEVBQWIsRUFBaUJPLEdBQWpCLENBQXFCLFVBQVVILE9BQVYsRUFBbUI7QUFBRUEsWUFBUUQsSUFBUixFQUFjRyxHQUFkO0FBQXFCLElBQS9EO0FBQ0E7QUFwQ0ssRUFBUDtBQXNDQTs7QUFFRCx5REFBZVAsSUFBZjtBQUNBLG1DOzs7Ozs7QUMzREEseUM7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUF4SSxFQUFFLFlBQVc7O0FBRVgsTUFBSSxDQUFDLGtFQUFBRyxFQUFMLEVBQW1COztBQUVuQixNQUFJOEksWUFBWWpKLEVBQUUsYUFBRixDQUFoQjtBQUNBLFFBQU1rSixjQUFjbEosRUFBRSwyQkFBRixDQUFwQjtBQUNBLFFBQU1tSixlQUFlRCxZQUFZRSxHQUFaLENBQWdCLENBQWhCLENBQXJCO0FBQ0EsUUFBTUMsUUFBUXJKLEVBQUUsZUFBRixDQUFkO0FBQ0EsUUFBTXNKLFlBQVlELE1BQU1FLFVBQU4sRUFBbEI7O0FBRUFoQixVQUFRbkMsRUFBUixDQUFXLGNBQVgsRUFBMkJvRCxRQUFRO0FBQ2pDLFVBQU1DLE9BQU8seURBQUE5SixDQUFTK0osT0FBVCxFQUFiO0FBQ0EsUUFBSSxDQUFDRCxLQUFLRSxNQUFMLENBQVlDLE9BQU9BLElBQUlDLEVBQUosS0FBV0wsS0FBS0ssRUFBbkMsRUFBdUM3SCxNQUE1QyxFQUFvRDtBQUNsRHlILFdBQUsvRCxJQUFMLGNBQWU4RCxJQUFmOztBQUVBN0osTUFBQSx5REFBQUEsQ0FBU21LLE9BQVQsQ0FBaUJMLElBQWpCO0FBQ0Q7O0FBRURsQixZQUFRN0IsSUFBUixDQUFhLGFBQWIsZUFBaUM4QyxJQUFqQztBQUNELEdBVEQ7O0FBV0FqQixVQUFRbkMsRUFBUixDQUFXLGFBQVgsRUFBMEIsQ0FBQzJELFNBQVMsRUFBVixLQUFpQjtBQUN6QyxVQUFNQyxXQUFXRCxPQUFPRixFQUF4QjtBQUNBLFVBQU1KLE9BQU8seURBQUE5SixDQUFTK0osT0FBVCxFQUFiOztBQUVBLFVBQU1PLFVBQVVqSyxFQUFFLGFBQUYsRUFDYmtLLElBRGEsQ0FFWlQsS0FDR1QsR0FESCxDQUVJWSxPQUNHLGVBQWNBLElBQUk5RCxLQUFNLHdFQUN2QmtFLGFBQWFKLElBQUlDLEVBQWpCLEdBQXNCLFFBQXRCLEdBQWlDLEVBQ2xDLGNBQWFELElBQUlDLEVBQUcsS0FBSUQsSUFBSTlELEtBQU0sdUVBQXNFOEQsSUFBSU8sSUFBSyxjQUx4SCxFQU9HckksSUFQSCxDQU9RLEVBUFIsQ0FGWSxFQVdic0ksSUFYYSxDQVdSLFNBWFEsQ0FBaEI7O0FBYUFDLElBQUEseURBQUFBLENBQVEzRSxJQUFSLENBQWFxRSxPQUFPTyxHQUFwQixlQUE4QlAsTUFBOUI7QUFDQXBLLElBQUEseURBQUFBLENBQVM0SyxhQUFULGNBQTRCUixNQUE1Qjs7QUFFQVMsZ0JBQVlQLE9BQVo7QUFDRCxHQXJCRDs7QUF1QkFoQixZQUNHN0MsRUFESCxDQUNNLE9BRE4sRUFDZSxtQkFEZixFQUNvQyxVQUFTMUYsQ0FBVCxFQUFZO0FBQzVDQSxNQUFFK0osZUFBRjtBQUNBOUssSUFBQSx5REFBQUEsQ0FBUytLLGFBQVQsQ0FDRTFLLEVBQUUsSUFBRixFQUNHMkssTUFESCxDQUNVLGFBRFYsRUFFR0MsSUFGSCxDQUVRLElBRlIsQ0FERjtBQUtELEdBUkgsRUFTR3hFLEVBVEgsQ0FTTSxPQVROLEVBU2UsYUFUZixFQVM4QixZQUFXO0FBQ3JDLFVBQU15RSxRQUFRN0ssRUFBRSxJQUFGLENBQWQ7QUFDQSxRQUFJNkssTUFBTTNLLEVBQU4sQ0FBUyxTQUFULENBQUosRUFBeUI7O0FBRXpCLFVBQU0ySixLQUFLZ0IsTUFBTUQsSUFBTixDQUFXLElBQVgsQ0FBWDtBQUNBLFVBQU1FLGFBQWEseURBQUFuTCxDQUFTK0osT0FBVCxHQUFtQkMsTUFBbkIsQ0FBMEJDLE9BQU9BLElBQUlDLEVBQUosS0FBV0EsRUFBNUMsRUFBZ0QsQ0FBaEQsS0FBc0QsRUFBekU7O0FBRUFnQixVQUNHRSxRQURILENBQ1ksUUFEWixFQUVHQyxRQUZILEdBR0dDLFdBSEgsQ0FHZSxRQUhmO0FBSUF0TCxJQUFBLHlEQUFBQSxDQUFTNEssYUFBVCxDQUF1Qk8sVUFBdkI7QUFDQVQsSUFBQSx5REFBQUEsQ0FBUTNFLElBQVIsQ0FBYW9GLFdBQVdSLEdBQXhCLGVBQWtDUSxVQUFsQzs7QUFFQU4sZ0JBQVlLLEtBQVo7QUFDRCxHQXhCSDs7QUEwQkE7OztBQUdBLFdBQVNMLFdBQVQsQ0FBcUJQLE9BQXJCLEVBQThCO0FBQzVCO0FBQ0EsVUFBTWlCLFlBQVloQyxZQUFZaUMsS0FBWixFQUFsQjtBQUNBLFVBQU1DLGlCQUFpQmxDLFlBQVlwSSxVQUFaLEVBQXZCO0FBQ0EsVUFBTXVLLFlBQVlILFlBQVlFLGNBQTlCO0FBQ0EsVUFBTUUsWUFBWSxFQUFsQjs7QUFFQTtBQUNBLFVBQU1DLFdBQVd0QixRQUFRYixHQUFSLENBQVksQ0FBWixDQUFqQjtBQUNBLFVBQU1vQyxjQUFjdkIsUUFBUVYsVUFBUixFQUFwQjtBQUNBLFVBQU1rQyxhQUFhRixTQUFTRyxVQUE1QjtBQUNBLFVBQU1DLGNBQWNGLGFBQWFELFdBQWpDO0FBQ0EsUUFBSUcsY0FBY1QsWUFBWUUsY0FBOUIsRUFBOEM7QUFDNUNqQyxtQkFBYXJJLFVBQWIsR0FBMEI2SyxjQUFjVCxTQUFkLEdBQTBCNUIsU0FBMUIsR0FBc0NnQyxTQUFoRTtBQUNEO0FBQ0QsUUFBSUcsY0FBY0wsY0FBbEIsRUFBa0M7QUFDaENqQyxtQkFBYXJJLFVBQWIsR0FBMEIySyxhQUFhbkMsU0FBYixHQUF5QmdDLFNBQW5EO0FBQ0Q7QUFDRjs7QUFFRGxMLEVBQUEsK0RBQUFBLENBQVE4SSxZQUFZRSxHQUFaLENBQWdCLENBQWhCLENBQVI7QUFDRCxDQTlGRCxFOzs7Ozs7QUNOQSxrQkFBa0IsOEM7Ozs7OztBQ0FsQix5Qzs7Ozs7Ozs7QUNBQTtBQUNBLE1BQU13QyxLQUFLQyxZQUFYO0FBQ0EsTUFBTXRNLGFBQWEsdURBQUF1TSxDQUFPdk0sVUFBMUI7O0FBRUEseURBQWUsTUFBTTtBQUFBO0FBQUEsU0FDbkJ3TSxLQURtQixHQUNYSCxHQUFHSSxPQUFILENBQVd6TSxVQUFYLEtBQTBCLHVEQUFBdU0sQ0FBT3RNLFlBRHRCO0FBQUE7O0FBR25CeU0sV0FBVUYsS0FBVixFQUFpQjtBQUNmLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNBSCxPQUFHTSxPQUFILENBQVczTSxVQUFYLEVBQXVCd00sS0FBdkI7QUFDRDtBQU5rQixDOzs7Ozs7OztBQ0pyQjs7QUFFQSxNQUFNSCxLQUFLQyxZQUFYOztBQUVBLHlEQUFlLE1BQU07QUFBQTtBQUFBLFNBQ25CZixVQURtQixHQUNOLElBRE07QUFBQTs7QUFHbkJwQixZQUFVO0FBQ1IsUUFBSUQsT0FBT21DLEdBQUdJLE9BQUgsQ0FBVyx1REFBQUYsQ0FBT3hNLFlBQWxCLEtBQW1DLEVBQTlDOztBQUVBLFdBQU9tSyxPQUFPQSxLQUFLMEMsS0FBTCxDQUFXLEdBQVgsRUFBZ0JuRCxHQUFoQixDQUFvQlksT0FBTztBQUN2QyxZQUFNLENBQUNDLEVBQUQsRUFBSy9ELEtBQUwsRUFBWXdFLEdBQVosRUFBaUJILElBQWpCLElBQXlCUCxJQUFJdUMsS0FBSixDQUFVLEdBQVYsQ0FBL0I7O0FBRUEsYUFBTyxFQUFFdEMsRUFBRixFQUFNL0QsS0FBTixFQUFhd0UsR0FBYixFQUFrQkgsSUFBbEIsRUFBUDtBQUNELEtBSmEsQ0FBUCxHQUlGLEVBSkw7QUFLRDs7QUFFREwsVUFBUUwsSUFBUixFQUFjO0FBQ1ptQyxPQUFHTSxPQUFILENBQ0UsdURBQUFKLENBQU94TSxZQURULEVBRUVtSyxLQUFLekgsTUFBTCxHQUFjeUgsS0FBS1QsR0FBTCxDQUNaWSxPQUFRLEdBQUVBLElBQUlDLEVBQUcsSUFBR0QsSUFBSTlELEtBQU0sSUFBRzhELElBQUlVLEdBQUksSUFBR1YsSUFBSU8sSUFBSyxFQUR6QyxFQUVackksSUFGWSxDQUVQLEdBRk8sQ0FBZCxHQUVjLEVBSmhCO0FBTUQ7O0FBRUR5SSxnQkFBY1gsR0FBZCxFQUFtQjtBQUNqQixTQUFLa0IsVUFBTCxHQUFrQmxCLEdBQWxCO0FBQ0Q7O0FBRURjLGdCQUFjYixFQUFkLEVBQWtCO0FBQ2hCLFFBQUlKLE9BQU8sS0FBS0MsT0FBTCxFQUFYO0FBQ0EsUUFBSTBDLFVBQVUsSUFBZDtBQUNBLFVBQU1DLGVBQWV4QyxPQUFPLEtBQUtpQixVQUFMLENBQWdCakIsRUFBNUM7O0FBRUEsVUFBTXlDLGFBQWE3QyxLQUFLOEMsU0FBTCxDQUFlM0MsT0FBT0EsSUFBSUMsRUFBSixLQUFXQSxFQUFqQyxDQUFuQjtBQUNBSixXQUFPQSxLQUFLRSxNQUFMLENBQVksQ0FBQ0MsR0FBRCxFQUFNNEMsR0FBTixLQUFjNUMsSUFBSUMsRUFBSixLQUFXQSxFQUFyQyxDQUFQOztBQUVBLFNBQUtDLE9BQUwsQ0FBYUwsSUFBYjs7QUFFQSxRQUFJQSxLQUFLekgsTUFBVCxFQUFpQjtBQUNmLFVBQUlxSyxZQUFKLEVBQWtCO0FBQ2hCRCxrQkFBVUUsZUFBZSxDQUFmLEdBQW1CN0MsS0FBSyxDQUFMLENBQW5CLEdBQTZCQSxLQUFLNkMsYUFBYSxDQUFsQixDQUF2QztBQUNEOztBQUVEL0QsY0FBUTdCLElBQVIsQ0FBYSxhQUFiLEVBQTRCMEYsV0FBVyxLQUFLdEIsVUFBNUM7QUFDRCxLQU5ELE1BTU87QUFDTHhDLGVBQVNtRSxJQUFULEdBQWdCLEdBQWhCO0FBQ0Q7QUFDRjtBQTdDa0IsQzs7Ozs7OztBQ0pyQix5REFBZSxNQUFNO0FBQ25CQyxZQUFVN0MsRUFBVixFQUFjO0FBQ1osV0FBTzdKLEVBQUVvSixHQUFGLENBQU11RCxNQUFNckMsR0FBTixDQUFVc0MsR0FBVixDQUFlLFNBQVEvQyxFQUFHLEVBQTFCLENBQU4sRUFBb0M7QUFDekNnRCxlQUFTO0FBRGdDLEtBQXBDLEVBRUpDLElBRkksQ0FFQyxVQUFTQyxHQUFULEVBQWM7QUFDcEJ6TSxjQUFRME0sR0FBUixDQUFZRCxHQUFaO0FBQ0QsS0FKTSxDQUFQO0FBS0Q7QUFQa0IsQzs7Ozs7OztBQ0FyQjs7QUFFQTNJLFFBQVErQyxVQUFSLEdBQXFCLElBQXJCOztBQUVBLElBQUk4RixVQUFVLE9BQU9DLE1BQVAsS0FBa0IsVUFBbEIsSUFBZ0MsT0FBT0EsT0FBT0MsUUFBZCxLQUEyQixRQUEzRCxHQUFzRSxVQUFVQyxHQUFWLEVBQWU7QUFBRSxTQUFPLE9BQU9BLEdBQWQ7QUFBb0IsQ0FBM0csR0FBOEcsVUFBVUEsR0FBVixFQUFlO0FBQUUsU0FBT0EsT0FBTyxPQUFPRixNQUFQLEtBQWtCLFVBQXpCLElBQXVDRSxJQUFJQyxXQUFKLEtBQW9CSCxNQUEzRCxJQUFxRUUsUUFBUUYsT0FBT3JMLFNBQXBGLEdBQWdHLFFBQWhHLEdBQTJHLE9BQU91TCxHQUF6SDtBQUErSCxDQUE1UTs7QUFFQSxJQUFJRSxXQUFXNUUsT0FBTzZFLE1BQVAsSUFBaUIsVUFBVUMsTUFBVixFQUFrQjtBQUFFLE9BQUssSUFBSS9ILElBQUksQ0FBYixFQUFnQkEsSUFBSTdCLFVBQVU1QixNQUE5QixFQUFzQ3lELEdBQXRDLEVBQTJDO0FBQUUsUUFBSS9ELFNBQVNrQyxVQUFVNkIsQ0FBVixDQUFiLENBQTJCLEtBQUssSUFBSXJELEdBQVQsSUFBZ0JWLE1BQWhCLEVBQXdCO0FBQUUsVUFBSWdILE9BQU83RyxTQUFQLENBQWlCNEwsY0FBakIsQ0FBZ0MxTCxJQUFoQyxDQUFxQ0wsTUFBckMsRUFBNkNVLEdBQTdDLENBQUosRUFBdUQ7QUFBRW9MLGVBQU9wTCxHQUFQLElBQWNWLE9BQU9VLEdBQVAsQ0FBZDtBQUE0QjtBQUFFO0FBQUUsR0FBQyxPQUFPb0wsTUFBUDtBQUFnQixDQUFoUTs7QUFFQSxJQUFJRSxXQUFXLG1CQUFBQyxDQUFRLENBQVIsQ0FBZjs7QUFFQSxJQUFJQyxZQUFZQyx1QkFBdUJILFFBQXZCLENBQWhCOztBQUVBLElBQUlJLGFBQWEsbUJBQUFILENBQVEsRUFBUixDQUFqQjs7QUFFQSxJQUFJSSxjQUFjRix1QkFBdUJDLFVBQXZCLENBQWxCOztBQUVBLElBQUlFLGlCQUFpQixtQkFBQUwsQ0FBUSxFQUFSLENBQXJCOztBQUVBLElBQUlNLGFBQWEsbUJBQUFOLENBQVEsQ0FBUixDQUFqQjs7QUFFQSxJQUFJTywyQkFBMkIsbUJBQUFQLENBQVEsRUFBUixDQUEvQjs7QUFFQSxJQUFJUSw0QkFBNEJOLHVCQUF1Qkssd0JBQXZCLENBQWhDOztBQUVBLElBQUlFLFlBQVksbUJBQUFULENBQVEsRUFBUixDQUFoQjs7QUFFQSxTQUFTRSxzQkFBVCxDQUFnQ1QsR0FBaEMsRUFBcUM7QUFBRSxTQUFPQSxPQUFPQSxJQUFJakcsVUFBWCxHQUF3QmlHLEdBQXhCLEdBQThCLEVBQUVpQixTQUFTakIsR0FBWCxFQUFyQztBQUF3RDs7QUFFL0YsSUFBSWtCLGdCQUFnQixVQUFwQjtBQUNBLElBQUlDLGtCQUFrQixZQUF0Qjs7QUFFQSxJQUFJQyxrQkFBa0IsU0FBU0EsZUFBVCxHQUEyQjtBQUMvQyxNQUFJO0FBQ0YsV0FBTzNPLE9BQU93SyxPQUFQLENBQWVvRSxLQUFmLElBQXdCLEVBQS9CO0FBQ0QsR0FGRCxDQUVFLE9BQU8vTixDQUFQLEVBQVU7QUFDVjtBQUNBO0FBQ0EsV0FBTyxFQUFQO0FBQ0Q7QUFDRixDQVJEOztBQVVBOzs7O0FBSUEsSUFBSWdPLHVCQUF1QixTQUFTQSxvQkFBVCxHQUFnQztBQUN6RCxNQUFJQyxRQUFRL0ssVUFBVTVCLE1BQVYsR0FBbUIsQ0FBbkIsSUFBd0I0QixVQUFVLENBQVYsTUFBaUJDLFNBQXpDLEdBQXFERCxVQUFVLENBQVYsQ0FBckQsR0FBb0UsRUFBaEY7O0FBRUEsR0FBQyxHQUFHbUssWUFBWU0sT0FBaEIsRUFBeUJELFVBQVVRLFNBQW5DLEVBQThDLDZCQUE5Qzs7QUFFQSxNQUFJQyxnQkFBZ0JoUCxPQUFPd0ssT0FBM0I7QUFDQSxNQUFJeUUsZ0JBQWdCLENBQUMsR0FBR1YsVUFBVVcsZUFBZCxHQUFwQjtBQUNBLE1BQUlDLDBCQUEwQixDQUFDLENBQUMsR0FBR1osVUFBVWEsNEJBQWQsR0FBL0I7O0FBRUEsTUFBSUMsc0JBQXNCUCxNQUFNUSxZQUFoQztBQUFBLE1BQ0lBLGVBQWVELHdCQUF3QnJMLFNBQXhCLEdBQW9DLEtBQXBDLEdBQTRDcUwsbUJBRC9EO0FBQUEsTUFFSUUsd0JBQXdCVCxNQUFNVSxtQkFGbEM7QUFBQSxNQUdJQSxzQkFBc0JELDBCQUEwQnZMLFNBQTFCLEdBQXNDdUssVUFBVWtCLGVBQWhELEdBQWtFRixxQkFINUY7QUFBQSxNQUlJRyxtQkFBbUJaLE1BQU1hLFNBSjdCO0FBQUEsTUFLSUEsWUFBWUQscUJBQXFCMUwsU0FBckIsR0FBaUMsQ0FBakMsR0FBcUMwTCxnQkFMckQ7O0FBT0EsTUFBSUUsV0FBV2QsTUFBTWMsUUFBTixHQUFpQixDQUFDLEdBQUd4QixXQUFXcEcsa0JBQWYsRUFBbUMsQ0FBQyxHQUFHb0csV0FBVzdHLGVBQWYsRUFBZ0N1SCxNQUFNYyxRQUF0QyxDQUFuQyxDQUFqQixHQUF1RyxFQUF0SDs7QUFFQSxNQUFJQyxpQkFBaUIsU0FBU0EsY0FBVCxDQUF3QkMsWUFBeEIsRUFBc0M7QUFDekQsUUFBSUMsT0FBT0QsZ0JBQWdCLEVBQTNCO0FBQUEsUUFDSXZOLE1BQU13TixLQUFLeE4sR0FEZjtBQUFBLFFBRUlxTSxRQUFRbUIsS0FBS25CLEtBRmpCOztBQUlBLFFBQUlvQixtQkFBbUJoUSxPQUFPeUksUUFBOUI7QUFBQSxRQUNJUCxXQUFXOEgsaUJBQWlCOUgsUUFEaEM7QUFBQSxRQUVJQyxTQUFTNkgsaUJBQWlCN0gsTUFGOUI7QUFBQSxRQUdJQyxPQUFPNEgsaUJBQWlCNUgsSUFINUI7O0FBTUEsUUFBSVosT0FBT1UsV0FBV0MsTUFBWCxHQUFvQkMsSUFBL0I7O0FBRUEsS0FBQyxHQUFHMkYsVUFBVVMsT0FBZCxFQUF1QixDQUFDb0IsUUFBRCxJQUFhLENBQUMsR0FBR3hCLFdBQVd4RyxXQUFmLEVBQTRCSixJQUE1QixFQUFrQ29JLFFBQWxDLENBQXBDLEVBQWlGLGtGQUFrRixvQ0FBbEYsR0FBeUhwSSxJQUF6SCxHQUFnSSxtQkFBaEksR0FBc0pvSSxRQUF0SixHQUFpSyxJQUFsUDs7QUFFQSxRQUFJQSxRQUFKLEVBQWNwSSxPQUFPLENBQUMsR0FBRzRHLFdBQVdyRyxhQUFmLEVBQThCUCxJQUE5QixFQUFvQ29JLFFBQXBDLENBQVA7O0FBRWQsV0FBTyxDQUFDLEdBQUd6QixlQUFlOEIsY0FBbkIsRUFBbUN6SSxJQUFuQyxFQUF5Q29ILEtBQXpDLEVBQWdEck0sR0FBaEQsQ0FBUDtBQUNELEdBbEJEOztBQW9CQSxNQUFJMk4sWUFBWSxTQUFTQSxTQUFULEdBQXFCO0FBQ25DLFdBQU9DLEtBQUtDLE1BQUwsR0FBY0MsUUFBZCxDQUF1QixFQUF2QixFQUEyQjFJLE1BQTNCLENBQWtDLENBQWxDLEVBQXFDZ0ksU0FBckMsQ0FBUDtBQUNELEdBRkQ7O0FBSUEsTUFBSVcsb0JBQW9CLENBQUMsR0FBR2hDLDBCQUEwQkUsT0FBOUIsR0FBeEI7O0FBRUEsTUFBSStCLFdBQVcsU0FBU0EsUUFBVCxDQUFrQkMsU0FBbEIsRUFBNkI7QUFDMUMvQyxhQUFTakQsT0FBVCxFQUFrQmdHLFNBQWxCOztBQUVBaEcsWUFBUXJJLE1BQVIsR0FBaUI2TSxjQUFjN00sTUFBL0I7O0FBRUFtTyxzQkFBa0JHLGVBQWxCLENBQWtDakcsUUFBUS9CLFFBQTFDLEVBQW9EK0IsUUFBUWtHLE1BQTVEO0FBQ0QsR0FORDs7QUFRQSxNQUFJQyxpQkFBaUIsU0FBU0EsY0FBVCxDQUF3QkMsS0FBeEIsRUFBK0I7QUFDbEQ7QUFDQSxRQUFJLENBQUMsR0FBR3JDLFVBQVVzQyx5QkFBZCxFQUF5Q0QsS0FBekMsQ0FBSixFQUFxRDs7QUFFckRFLGNBQVVqQixlQUFlZSxNQUFNaEMsS0FBckIsQ0FBVjtBQUNELEdBTEQ7O0FBT0EsTUFBSW1DLG1CQUFtQixTQUFTQSxnQkFBVCxHQUE0QjtBQUNqREQsY0FBVWpCLGVBQWVsQixpQkFBZixDQUFWO0FBQ0QsR0FGRDs7QUFJQSxNQUFJcUMsZUFBZSxLQUFuQjs7QUFFQSxNQUFJRixZQUFZLFNBQVNBLFNBQVQsQ0FBbUJySSxRQUFuQixFQUE2QjtBQUMzQyxRQUFJdUksWUFBSixFQUFrQjtBQUNoQkEscUJBQWUsS0FBZjtBQUNBVDtBQUNELEtBSEQsTUFHTztBQUNMLFVBQUlHLFNBQVMsS0FBYjs7QUFFQUosd0JBQWtCVyxtQkFBbEIsQ0FBc0N4SSxRQUF0QyxFQUFnRGlJLE1BQWhELEVBQXdEbEIsbUJBQXhELEVBQTZFLFVBQVUwQixFQUFWLEVBQWM7QUFDekYsWUFBSUEsRUFBSixFQUFRO0FBQ05YLG1CQUFTLEVBQUVHLFFBQVFBLE1BQVYsRUFBa0JqSSxVQUFVQSxRQUE1QixFQUFUO0FBQ0QsU0FGRCxNQUVPO0FBQ0wwSSxvQkFBVTFJLFFBQVY7QUFDRDtBQUNGLE9BTkQ7QUFPRDtBQUNGLEdBZkQ7O0FBaUJBLE1BQUkwSSxZQUFZLFNBQVNBLFNBQVQsQ0FBbUJDLFlBQW5CLEVBQWlDO0FBQy9DLFFBQUlDLGFBQWE3RyxRQUFRL0IsUUFBekI7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFFBQUk2SSxVQUFVQyxRQUFRakosT0FBUixDQUFnQitJLFdBQVc5TyxHQUEzQixDQUFkOztBQUVBLFFBQUkrTyxZQUFZLENBQUMsQ0FBakIsRUFBb0JBLFVBQVUsQ0FBVjs7QUFFcEIsUUFBSUUsWUFBWUQsUUFBUWpKLE9BQVIsQ0FBZ0I4SSxhQUFhN08sR0FBN0IsQ0FBaEI7O0FBRUEsUUFBSWlQLGNBQWMsQ0FBQyxDQUFuQixFQUFzQkEsWUFBWSxDQUFaOztBQUV0QixRQUFJMVEsUUFBUXdRLFVBQVVFLFNBQXRCOztBQUVBLFFBQUkxUSxLQUFKLEVBQVc7QUFDVGtRLHFCQUFlLElBQWY7QUFDQVMsU0FBRzNRLEtBQUg7QUFDRDtBQUNGLEdBckJEOztBQXVCQSxNQUFJNFEsa0JBQWtCN0IsZUFBZWxCLGlCQUFmLENBQXRCO0FBQ0EsTUFBSTRDLFVBQVUsQ0FBQ0csZ0JBQWdCblAsR0FBakIsQ0FBZDs7QUFFQTs7QUFFQSxNQUFJb1AsYUFBYSxTQUFTQSxVQUFULENBQW9CbEosUUFBcEIsRUFBOEI7QUFDN0MsV0FBT21ILFdBQVcsQ0FBQyxHQUFHeEIsV0FBVzVGLFVBQWYsRUFBMkJDLFFBQTNCLENBQWxCO0FBQ0QsR0FGRDs7QUFJQSxNQUFJNUMsT0FBTyxTQUFTQSxJQUFULENBQWMyQixJQUFkLEVBQW9Cb0gsS0FBcEIsRUFBMkI7QUFDcEMsS0FBQyxHQUFHYixVQUFVUyxPQUFkLEVBQXVCLEVBQUUsQ0FBQyxPQUFPaEgsSUFBUCxLQUFnQixXQUFoQixHQUE4QixXQUE5QixHQUE0QzRGLFFBQVE1RixJQUFSLENBQTdDLE1BQWdFLFFBQWhFLElBQTRFQSxLQUFLb0gsS0FBTCxLQUFlNUssU0FBM0YsSUFBd0c0SyxVQUFVNUssU0FBcEgsQ0FBdkIsRUFBdUosMEVBQTBFLDBFQUFqTzs7QUFFQSxRQUFJME0sU0FBUyxNQUFiO0FBQ0EsUUFBSWpJLFdBQVcsQ0FBQyxHQUFHMEYsZUFBZThCLGNBQW5CLEVBQW1DekksSUFBbkMsRUFBeUNvSCxLQUF6QyxFQUFnRHNCLFdBQWhELEVBQTZEMUYsUUFBUS9CLFFBQXJFLENBQWY7O0FBRUE2SCxzQkFBa0JXLG1CQUFsQixDQUFzQ3hJLFFBQXRDLEVBQWdEaUksTUFBaEQsRUFBd0RsQixtQkFBeEQsRUFBNkUsVUFBVTBCLEVBQVYsRUFBYztBQUN6RixVQUFJLENBQUNBLEVBQUwsRUFBUzs7QUFFVCxVQUFJdEUsT0FBTytFLFdBQVdsSixRQUFYLENBQVg7QUFDQSxVQUFJbEcsTUFBTWtHLFNBQVNsRyxHQUFuQjtBQUFBLFVBQ0lxTSxRQUFRbkcsU0FBU21HLEtBRHJCOztBQUlBLFVBQUlLLGFBQUosRUFBbUI7QUFDakJELHNCQUFjNEMsU0FBZCxDQUF3QixFQUFFclAsS0FBS0EsR0FBUCxFQUFZcU0sT0FBT0EsS0FBbkIsRUFBeEIsRUFBb0QsSUFBcEQsRUFBMERoQyxJQUExRDs7QUFFQSxZQUFJMEMsWUFBSixFQUFrQjtBQUNoQnRQLGlCQUFPeUksUUFBUCxDQUFnQm1FLElBQWhCLEdBQXVCQSxJQUF2QjtBQUNELFNBRkQsTUFFTztBQUNMLGNBQUlpRixZQUFZTixRQUFRakosT0FBUixDQUFnQmtDLFFBQVEvQixRQUFSLENBQWlCbEcsR0FBakMsQ0FBaEI7QUFDQSxjQUFJdVAsV0FBV1AsUUFBUW5QLEtBQVIsQ0FBYyxDQUFkLEVBQWlCeVAsY0FBYyxDQUFDLENBQWYsR0FBbUIsQ0FBbkIsR0FBdUJBLFlBQVksQ0FBcEQsQ0FBZjs7QUFFQUMsbUJBQVNqTSxJQUFULENBQWM0QyxTQUFTbEcsR0FBdkI7QUFDQWdQLG9CQUFVTyxRQUFWOztBQUVBdkIsbUJBQVMsRUFBRUcsUUFBUUEsTUFBVixFQUFrQmpJLFVBQVVBLFFBQTVCLEVBQVQ7QUFDRDtBQUNGLE9BZEQsTUFjTztBQUNMLFNBQUMsR0FBR3NGLFVBQVVTLE9BQWQsRUFBdUJJLFVBQVU1SyxTQUFqQyxFQUE0QyxpRkFBNUM7O0FBRUFoRSxlQUFPeUksUUFBUCxDQUFnQm1FLElBQWhCLEdBQXVCQSxJQUF2QjtBQUNEO0FBQ0YsS0EzQkQ7QUE0QkQsR0FsQ0Q7O0FBb0NBLE1BQUlyTCxVQUFVLFNBQVNBLE9BQVQsQ0FBaUJpRyxJQUFqQixFQUF1Qm9ILEtBQXZCLEVBQThCO0FBQzFDLEtBQUMsR0FBR2IsVUFBVVMsT0FBZCxFQUF1QixFQUFFLENBQUMsT0FBT2hILElBQVAsS0FBZ0IsV0FBaEIsR0FBOEIsV0FBOUIsR0FBNEM0RixRQUFRNUYsSUFBUixDQUE3QyxNQUFnRSxRQUFoRSxJQUE0RUEsS0FBS29ILEtBQUwsS0FBZTVLLFNBQTNGLElBQXdHNEssVUFBVTVLLFNBQXBILENBQXZCLEVBQXVKLDZFQUE2RSwwRUFBcE87O0FBRUEsUUFBSTBNLFNBQVMsU0FBYjtBQUNBLFFBQUlqSSxXQUFXLENBQUMsR0FBRzBGLGVBQWU4QixjQUFuQixFQUFtQ3pJLElBQW5DLEVBQXlDb0gsS0FBekMsRUFBZ0RzQixXQUFoRCxFQUE2RDFGLFFBQVEvQixRQUFyRSxDQUFmOztBQUVBNkgsc0JBQWtCVyxtQkFBbEIsQ0FBc0N4SSxRQUF0QyxFQUFnRGlJLE1BQWhELEVBQXdEbEIsbUJBQXhELEVBQTZFLFVBQVUwQixFQUFWLEVBQWM7QUFDekYsVUFBSSxDQUFDQSxFQUFMLEVBQVM7O0FBRVQsVUFBSXRFLE9BQU8rRSxXQUFXbEosUUFBWCxDQUFYO0FBQ0EsVUFBSWxHLE1BQU1rRyxTQUFTbEcsR0FBbkI7QUFBQSxVQUNJcU0sUUFBUW5HLFNBQVNtRyxLQURyQjs7QUFJQSxVQUFJSyxhQUFKLEVBQW1CO0FBQ2pCRCxzQkFBYytDLFlBQWQsQ0FBMkIsRUFBRXhQLEtBQUtBLEdBQVAsRUFBWXFNLE9BQU9BLEtBQW5CLEVBQTNCLEVBQXVELElBQXZELEVBQTZEaEMsSUFBN0Q7O0FBRUEsWUFBSTBDLFlBQUosRUFBa0I7QUFDaEJ0UCxpQkFBT3lJLFFBQVAsQ0FBZ0JsSCxPQUFoQixDQUF3QnFMLElBQXhCO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsY0FBSWlGLFlBQVlOLFFBQVFqSixPQUFSLENBQWdCa0MsUUFBUS9CLFFBQVIsQ0FBaUJsRyxHQUFqQyxDQUFoQjs7QUFFQSxjQUFJc1AsY0FBYyxDQUFDLENBQW5CLEVBQXNCTixRQUFRTSxTQUFSLElBQXFCcEosU0FBU2xHLEdBQTlCOztBQUV0QmdPLG1CQUFTLEVBQUVHLFFBQVFBLE1BQVYsRUFBa0JqSSxVQUFVQSxRQUE1QixFQUFUO0FBQ0Q7QUFDRixPQVpELE1BWU87QUFDTCxTQUFDLEdBQUdzRixVQUFVUyxPQUFkLEVBQXVCSSxVQUFVNUssU0FBakMsRUFBNEMsb0ZBQTVDOztBQUVBaEUsZUFBT3lJLFFBQVAsQ0FBZ0JsSCxPQUFoQixDQUF3QnFMLElBQXhCO0FBQ0Q7QUFDRixLQXpCRDtBQTBCRCxHQWhDRDs7QUFrQ0EsTUFBSTZFLEtBQUssU0FBU0EsRUFBVCxDQUFZTyxDQUFaLEVBQWU7QUFDdEJoRCxrQkFBY3lDLEVBQWQsQ0FBaUJPLENBQWpCO0FBQ0QsR0FGRDs7QUFJQSxNQUFJQyxTQUFTLFNBQVNBLE1BQVQsR0FBa0I7QUFDN0IsV0FBT1IsR0FBRyxDQUFDLENBQUosQ0FBUDtBQUNELEdBRkQ7O0FBSUEsTUFBSVMsWUFBWSxTQUFTQSxTQUFULEdBQXFCO0FBQ25DLFdBQU9ULEdBQUcsQ0FBSCxDQUFQO0FBQ0QsR0FGRDs7QUFJQSxNQUFJVSxnQkFBZ0IsQ0FBcEI7O0FBRUEsTUFBSUMsb0JBQW9CLFNBQVNBLGlCQUFULENBQTJCdFIsS0FBM0IsRUFBa0M7QUFDeERxUixxQkFBaUJyUixLQUFqQjs7QUFFQSxRQUFJcVIsa0JBQWtCLENBQXRCLEVBQXlCO0FBQ3ZCLE9BQUMsR0FBRzVELFVBQVU1TixnQkFBZCxFQUFnQ1gsTUFBaEMsRUFBd0N5TyxhQUF4QyxFQUF1RGtDLGNBQXZEOztBQUVBLFVBQUl4Qix1QkFBSixFQUE2QixDQUFDLEdBQUdaLFVBQVU1TixnQkFBZCxFQUFnQ1gsTUFBaEMsRUFBd0MwTyxlQUF4QyxFQUF5RHFDLGdCQUF6RDtBQUM5QixLQUpELE1BSU8sSUFBSW9CLGtCQUFrQixDQUF0QixFQUF5QjtBQUM5QixPQUFDLEdBQUc1RCxVQUFVcE4sbUJBQWQsRUFBbUNuQixNQUFuQyxFQUEyQ3lPLGFBQTNDLEVBQTBEa0MsY0FBMUQ7O0FBRUEsVUFBSXhCLHVCQUFKLEVBQTZCLENBQUMsR0FBR1osVUFBVXBOLG1CQUFkLEVBQW1DbkIsTUFBbkMsRUFBMkMwTyxlQUEzQyxFQUE0RHFDLGdCQUE1RDtBQUM5QjtBQUNGLEdBWkQ7O0FBY0EsTUFBSXNCLFlBQVksS0FBaEI7O0FBRUEsTUFBSUMsUUFBUSxTQUFTQSxLQUFULEdBQWlCO0FBQzNCLFFBQUlDLFNBQVN4TyxVQUFVNUIsTUFBVixHQUFtQixDQUFuQixJQUF3QjRCLFVBQVUsQ0FBVixNQUFpQkMsU0FBekMsR0FBcURELFVBQVUsQ0FBVixDQUFyRCxHQUFvRSxLQUFqRjs7QUFFQSxRQUFJeU8sVUFBVWxDLGtCQUFrQm1DLFNBQWxCLENBQTRCRixNQUE1QixDQUFkOztBQUVBLFFBQUksQ0FBQ0YsU0FBTCxFQUFnQjtBQUNkRCx3QkFBa0IsQ0FBbEI7QUFDQUMsa0JBQVksSUFBWjtBQUNEOztBQUVELFdBQU8sWUFBWTtBQUNqQixVQUFJQSxTQUFKLEVBQWU7QUFDYkEsb0JBQVksS0FBWjtBQUNBRCwwQkFBa0IsQ0FBQyxDQUFuQjtBQUNEOztBQUVELGFBQU9JLFNBQVA7QUFDRCxLQVBEO0FBUUQsR0FsQkQ7O0FBb0JBLE1BQUlFLFNBQVMsU0FBU0EsTUFBVCxDQUFnQkMsUUFBaEIsRUFBMEI7QUFDckMsUUFBSUMsV0FBV3RDLGtCQUFrQnVDLGNBQWxCLENBQWlDRixRQUFqQyxDQUFmO0FBQ0FQLHNCQUFrQixDQUFsQjs7QUFFQSxXQUFPLFlBQVk7QUFDakJBLHdCQUFrQixDQUFDLENBQW5CO0FBQ0FRO0FBQ0QsS0FIRDtBQUlELEdBUkQ7O0FBVUEsTUFBSXBJLFVBQVU7QUFDWnJJLFlBQVE2TSxjQUFjN00sTUFEVjtBQUVadU8sWUFBUSxLQUZJO0FBR1pqSSxjQUFVaUosZUFIRTtBQUlaQyxnQkFBWUEsVUFKQTtBQUtaOUwsVUFBTUEsSUFMTTtBQU1adEUsYUFBU0EsT0FORztBQU9aa1EsUUFBSUEsRUFQUTtBQVFaUSxZQUFRQSxNQVJJO0FBU1pDLGVBQVdBLFNBVEM7QUFVWkksV0FBT0EsS0FWSztBQVdaSSxZQUFRQTtBQVhJLEdBQWQ7O0FBY0EsU0FBT2xJLE9BQVA7QUFDRCxDQW5RRDs7QUFxUUFqRyxRQUFRaUssT0FBUixHQUFrQkssb0JBQWxCLEM7Ozs7Ozs7QUNsVEE7Ozs7Ozs7OztBQVNBOztBQUVBOzs7Ozs7Ozs7OztBQVdBLElBQUlpRSxZQUFZLFVBQVNqUCxTQUFULEVBQW9CekMsTUFBcEIsRUFBNEIyUixDQUE1QixFQUErQkMsQ0FBL0IsRUFBa0NDLENBQWxDLEVBQXFDbFEsQ0FBckMsRUFBd0NsQyxDQUF4QyxFQUEyQ3FTLENBQTNDLEVBQThDO0FBQzVELE1BQUl4UCxRQUFRQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsWUFBN0IsRUFBMkM7QUFDekMsUUFBSXhDLFdBQVc0QyxTQUFmLEVBQTBCO0FBQ3hCLFlBQU0sSUFBSUMsS0FBSixDQUFVLDhDQUFWLENBQU47QUFDRDtBQUNGOztBQUVELE1BQUksQ0FBQ0osU0FBTCxFQUFnQjtBQUNkLFFBQUluRCxLQUFKO0FBQ0EsUUFBSVUsV0FBVzRDLFNBQWYsRUFBMEI7QUFDeEJ0RCxjQUFRLElBQUl1RCxLQUFKLENBQ04sdUVBQ0EsNkRBRk0sQ0FBUjtBQUlELEtBTEQsTUFLTztBQUNMLFVBQUlILE9BQU8sQ0FBQ2lQLENBQUQsRUFBSUMsQ0FBSixFQUFPQyxDQUFQLEVBQVVsUSxDQUFWLEVBQWFsQyxDQUFiLEVBQWdCcVMsQ0FBaEIsQ0FBWDtBQUNBLFVBQUkvTyxXQUFXLENBQWY7QUFDQXpELGNBQVEsSUFBSXVELEtBQUosQ0FDTjdDLE9BQU9HLE9BQVAsQ0FBZSxLQUFmLEVBQXNCLFlBQVc7QUFBRSxlQUFPdUMsS0FBS0ssVUFBTCxDQUFQO0FBQTBCLE9BQTdELENBRE0sQ0FBUjtBQUdBekQsWUFBTWUsSUFBTixHQUFhLHFCQUFiO0FBQ0Q7O0FBRURmLFVBQU15UyxXQUFOLEdBQW9CLENBQXBCLENBaEJjLENBZ0JTO0FBQ3ZCLFVBQU16UyxLQUFOO0FBQ0Q7QUFDRixDQTFCRDs7QUE0QkE0RCxPQUFPQyxPQUFQLEdBQWlCdU8sU0FBakIsQzs7Ozs7Ozs7QUNsREE7O0FBRUF2TyxRQUFRK0MsVUFBUixHQUFxQixJQUFyQjtBQUNBL0MsUUFBUTZPLGlCQUFSLEdBQTRCN08sUUFBUTBMLGNBQVIsR0FBeUJqTSxTQUFyRDs7QUFFQSxJQUFJeUosV0FBVzVFLE9BQU82RSxNQUFQLElBQWlCLFVBQVVDLE1BQVYsRUFBa0I7QUFBRSxPQUFLLElBQUkvSCxJQUFJLENBQWIsRUFBZ0JBLElBQUk3QixVQUFVNUIsTUFBOUIsRUFBc0N5RCxHQUF0QyxFQUEyQztBQUFFLFFBQUkvRCxTQUFTa0MsVUFBVTZCLENBQVYsQ0FBYixDQUEyQixLQUFLLElBQUlyRCxHQUFULElBQWdCVixNQUFoQixFQUF3QjtBQUFFLFVBQUlnSCxPQUFPN0csU0FBUCxDQUFpQjRMLGNBQWpCLENBQWdDMUwsSUFBaEMsQ0FBcUNMLE1BQXJDLEVBQTZDVSxHQUE3QyxDQUFKLEVBQXVEO0FBQUVvTCxlQUFPcEwsR0FBUCxJQUFjVixPQUFPVSxHQUFQLENBQWQ7QUFBNEI7QUFBRTtBQUFFLEdBQUMsT0FBT29MLE1BQVA7QUFBZ0IsQ0FBaFE7O0FBRUEsSUFBSTBGLG1CQUFtQixtQkFBQXZGLENBQVEsRUFBUixDQUF2Qjs7QUFFQSxJQUFJd0Ysb0JBQW9CdEYsdUJBQXVCcUYsZ0JBQXZCLENBQXhCOztBQUVBLElBQUlFLGNBQWMsbUJBQUF6RixDQUFRLEVBQVIsQ0FBbEI7O0FBRUEsSUFBSTBGLGVBQWV4Rix1QkFBdUJ1RixXQUF2QixDQUFuQjs7QUFFQSxJQUFJbkYsYUFBYSxtQkFBQU4sQ0FBUSxDQUFSLENBQWpCOztBQUVBLFNBQVNFLHNCQUFULENBQWdDVCxHQUFoQyxFQUFxQztBQUFFLFNBQU9BLE9BQU9BLElBQUlqRyxVQUFYLEdBQXdCaUcsR0FBeEIsR0FBOEIsRUFBRWlCLFNBQVNqQixHQUFYLEVBQXJDO0FBQXdEOztBQUUvRixJQUFJMEMsaUJBQWlCMUwsUUFBUTBMLGNBQVIsR0FBeUIsU0FBU0EsY0FBVCxDQUF3QnpJLElBQXhCLEVBQThCb0gsS0FBOUIsRUFBcUNyTSxHQUFyQyxFQUEwQ2tSLGVBQTFDLEVBQTJEO0FBQ3ZHLE1BQUloTCxXQUFXLEtBQUssQ0FBcEI7QUFDQSxNQUFJLE9BQU9qQixJQUFQLEtBQWdCLFFBQXBCLEVBQThCO0FBQzVCO0FBQ0FpQixlQUFXLENBQUMsR0FBRzJGLFdBQVduRyxTQUFmLEVBQTBCVCxJQUExQixDQUFYO0FBQ0FpQixhQUFTbUcsS0FBVCxHQUFpQkEsS0FBakI7QUFDRCxHQUpELE1BSU87QUFDTDtBQUNBbkcsZUFBV2dGLFNBQVMsRUFBVCxFQUFhakcsSUFBYixDQUFYOztBQUVBLFFBQUlpQixTQUFTUCxRQUFULEtBQXNCbEUsU0FBMUIsRUFBcUN5RSxTQUFTUCxRQUFULEdBQW9CLEVBQXBCOztBQUVyQyxRQUFJTyxTQUFTTixNQUFiLEVBQXFCO0FBQ25CLFVBQUlNLFNBQVNOLE1BQVQsQ0FBZ0JWLE1BQWhCLENBQXVCLENBQXZCLE1BQThCLEdBQWxDLEVBQXVDZ0IsU0FBU04sTUFBVCxHQUFrQixNQUFNTSxTQUFTTixNQUFqQztBQUN4QyxLQUZELE1BRU87QUFDTE0sZUFBU04sTUFBVCxHQUFrQixFQUFsQjtBQUNEOztBQUVELFFBQUlNLFNBQVNMLElBQWIsRUFBbUI7QUFDakIsVUFBSUssU0FBU0wsSUFBVCxDQUFjWCxNQUFkLENBQXFCLENBQXJCLE1BQTRCLEdBQWhDLEVBQXFDZ0IsU0FBU0wsSUFBVCxHQUFnQixNQUFNSyxTQUFTTCxJQUEvQjtBQUN0QyxLQUZELE1BRU87QUFDTEssZUFBU0wsSUFBVCxHQUFnQixFQUFoQjtBQUNEOztBQUVELFFBQUl3RyxVQUFVNUssU0FBVixJQUF1QnlFLFNBQVNtRyxLQUFULEtBQW1CNUssU0FBOUMsRUFBeUR5RSxTQUFTbUcsS0FBVCxHQUFpQkEsS0FBakI7QUFDMUQ7O0FBRUQsTUFBSTtBQUNGbkcsYUFBU1AsUUFBVCxHQUFvQndMLFVBQVVqTCxTQUFTUCxRQUFuQixDQUFwQjtBQUNELEdBRkQsQ0FFRSxPQUFPckgsQ0FBUCxFQUFVO0FBQ1YsUUFBSUEsYUFBYThTLFFBQWpCLEVBQTJCO0FBQ3pCLFlBQU0sSUFBSUEsUUFBSixDQUFhLGVBQWVsTCxTQUFTUCxRQUF4QixHQUFtQywwQkFBbkMsR0FBZ0UsdURBQTdFLENBQU47QUFDRCxLQUZELE1BRU87QUFDTCxZQUFNckgsQ0FBTjtBQUNEO0FBQ0Y7O0FBRUQsTUFBSTBCLEdBQUosRUFBU2tHLFNBQVNsRyxHQUFULEdBQWVBLEdBQWY7O0FBRVQsTUFBSWtSLGVBQUosRUFBcUI7QUFDbkI7QUFDQSxRQUFJLENBQUNoTCxTQUFTUCxRQUFkLEVBQXdCO0FBQ3RCTyxlQUFTUCxRQUFULEdBQW9CdUwsZ0JBQWdCdkwsUUFBcEM7QUFDRCxLQUZELE1BRU8sSUFBSU8sU0FBU1AsUUFBVCxDQUFrQlQsTUFBbEIsQ0FBeUIsQ0FBekIsTUFBZ0MsR0FBcEMsRUFBeUM7QUFDOUNnQixlQUFTUCxRQUFULEdBQW9CLENBQUMsR0FBR29MLGtCQUFrQjlFLE9BQXRCLEVBQStCL0YsU0FBU1AsUUFBeEMsRUFBa0R1TCxnQkFBZ0J2TCxRQUFsRSxDQUFwQjtBQUNEO0FBQ0YsR0FQRCxNQU9PO0FBQ0w7QUFDQSxRQUFJLENBQUNPLFNBQVNQLFFBQWQsRUFBd0I7QUFDdEJPLGVBQVNQLFFBQVQsR0FBb0IsR0FBcEI7QUFDRDtBQUNGOztBQUVELFNBQU9PLFFBQVA7QUFDRCxDQXRERDs7QUF3REEsSUFBSTJLLG9CQUFvQjdPLFFBQVE2TyxpQkFBUixHQUE0QixTQUFTQSxpQkFBVCxDQUEyQkwsQ0FBM0IsRUFBOEJDLENBQTlCLEVBQWlDO0FBQ25GLFNBQU9ELEVBQUU3SyxRQUFGLEtBQWU4SyxFQUFFOUssUUFBakIsSUFBNkI2SyxFQUFFNUssTUFBRixLQUFhNkssRUFBRTdLLE1BQTVDLElBQXNENEssRUFBRTNLLElBQUYsS0FBVzRLLEVBQUU1SyxJQUFuRSxJQUEyRTJLLEVBQUV4USxHQUFGLEtBQVV5USxFQUFFelEsR0FBdkYsSUFBOEYsQ0FBQyxHQUFHaVIsYUFBYWhGLE9BQWpCLEVBQTBCdUUsRUFBRW5FLEtBQTVCLEVBQW1Db0UsRUFBRXBFLEtBQXJDLENBQXJHO0FBQ0QsQ0FGRCxDOzs7Ozs7O0FDM0VBO0FBQUEsU0FBU2dGLFVBQVQsQ0FBb0IxTCxRQUFwQixFQUE4QjtBQUM1QixTQUFPQSxTQUFTVCxNQUFULENBQWdCLENBQWhCLE1BQXVCLEdBQTlCO0FBQ0Q7O0FBRUQ7QUFDQSxTQUFTb00sU0FBVCxDQUFtQkMsSUFBbkIsRUFBeUJDLEtBQXpCLEVBQWdDO0FBQzlCLE9BQUssSUFBSW5PLElBQUltTyxLQUFSLEVBQWVDLElBQUlwTyxJQUFJLENBQXZCLEVBQTBCb00sSUFBSThCLEtBQUszUixNQUF4QyxFQUFnRDZSLElBQUloQyxDQUFwRCxFQUF1RHBNLEtBQUssQ0FBTCxFQUFRb08sS0FBSyxDQUFwRSxFQUF1RTtBQUNyRUYsU0FBS2xPLENBQUwsSUFBVWtPLEtBQUtFLENBQUwsQ0FBVjtBQUNEOztBQUVERixPQUFLRyxHQUFMO0FBQ0Q7O0FBRUQ7QUFDQSxTQUFTQyxlQUFULENBQXlCQyxFQUF6QixFQUE2QjtBQUMzQixNQUFJQyxPQUFPclEsVUFBVTVCLE1BQVYsR0FBbUIsQ0FBbkIsSUFBd0I0QixVQUFVLENBQVYsTUFBaUJDLFNBQXpDLEdBQXFERCxVQUFVLENBQVYsQ0FBckQsR0FBb0UsRUFBL0U7O0FBRUEsTUFBSXNRLFVBQVVGLE1BQU1BLEdBQUc3SCxLQUFILENBQVMsR0FBVCxDQUFOLElBQXVCLEVBQXJDO0FBQ0EsTUFBSWdJLFlBQVlGLFFBQVFBLEtBQUs5SCxLQUFMLENBQVcsR0FBWCxDQUFSLElBQTJCLEVBQTNDOztBQUVBLE1BQUlpSSxVQUFVSixNQUFNUCxXQUFXTyxFQUFYLENBQXBCO0FBQ0EsTUFBSUssWUFBWUosUUFBUVIsV0FBV1EsSUFBWCxDQUF4QjtBQUNBLE1BQUlLLGFBQWFGLFdBQVdDLFNBQTVCOztBQUVBLE1BQUlMLE1BQU1QLFdBQVdPLEVBQVgsQ0FBVixFQUEwQjtBQUN4QjtBQUNBRyxnQkFBWUQsT0FBWjtBQUNELEdBSEQsTUFHTyxJQUFJQSxRQUFRbFMsTUFBWixFQUFvQjtBQUN6QjtBQUNBbVMsY0FBVUwsR0FBVjtBQUNBSyxnQkFBWUEsVUFBVS9PLE1BQVYsQ0FBaUI4TyxPQUFqQixDQUFaO0FBQ0Q7O0FBRUQsTUFBSSxDQUFDQyxVQUFVblMsTUFBZixFQUF1QixPQUFPLEdBQVA7O0FBRXZCLE1BQUl1UyxtQkFBbUIsS0FBSyxDQUE1QjtBQUNBLE1BQUlKLFVBQVVuUyxNQUFkLEVBQXNCO0FBQ3BCLFFBQUl3UyxPQUFPTCxVQUFVQSxVQUFVblMsTUFBVixHQUFtQixDQUE3QixDQUFYO0FBQ0F1Uyx1QkFBbUJDLFNBQVMsR0FBVCxJQUFnQkEsU0FBUyxJQUF6QixJQUFpQ0EsU0FBUyxFQUE3RDtBQUNELEdBSEQsTUFHTztBQUNMRCx1QkFBbUIsS0FBbkI7QUFDRDs7QUFFRCxNQUFJRSxLQUFLLENBQVQ7QUFDQSxPQUFLLElBQUloUCxJQUFJME8sVUFBVW5TLE1BQXZCLEVBQStCeUQsS0FBSyxDQUFwQyxFQUF1Q0EsR0FBdkMsRUFBNEM7QUFDMUMsUUFBSWlQLE9BQU9QLFVBQVUxTyxDQUFWLENBQVg7O0FBRUEsUUFBSWlQLFNBQVMsR0FBYixFQUFrQjtBQUNoQmhCLGdCQUFVUyxTQUFWLEVBQXFCMU8sQ0FBckI7QUFDRCxLQUZELE1BRU8sSUFBSWlQLFNBQVMsSUFBYixFQUFtQjtBQUN4QmhCLGdCQUFVUyxTQUFWLEVBQXFCMU8sQ0FBckI7QUFDQWdQO0FBQ0QsS0FITSxNQUdBLElBQUlBLEVBQUosRUFBUTtBQUNiZixnQkFBVVMsU0FBVixFQUFxQjFPLENBQXJCO0FBQ0FnUDtBQUNEO0FBQ0Y7O0FBRUQsTUFBSSxDQUFDSCxVQUFMLEVBQWlCLE9BQU9HLElBQVAsRUFBYUEsRUFBYixFQUFpQjtBQUNoQ04sY0FBVVEsT0FBVixDQUFrQixJQUFsQjtBQUNELE9BQUlMLGNBQWNILFVBQVUsQ0FBVixNQUFpQixFQUEvQixLQUFzQyxDQUFDQSxVQUFVLENBQVYsQ0FBRCxJQUFpQixDQUFDVixXQUFXVSxVQUFVLENBQVYsQ0FBWCxDQUF4RCxDQUFKLEVBQXVGQSxVQUFVUSxPQUFWLENBQWtCLEVBQWxCOztBQUV4RixNQUFJQyxTQUFTVCxVQUFVclMsSUFBVixDQUFlLEdBQWYsQ0FBYjs7QUFFQSxNQUFJeVMsb0JBQW9CSyxPQUFPcE4sTUFBUCxDQUFjLENBQUMsQ0FBZixNQUFzQixHQUE5QyxFQUFtRG9OLFVBQVUsR0FBVjs7QUFFbkQsU0FBT0EsTUFBUDtBQUNEOztBQUVELCtEQUFlYixlQUFmLEU7Ozs7Ozs7QUNyRUE7QUFBQSxJQUFJOUcsVUFBVSxPQUFPQyxNQUFQLEtBQWtCLFVBQWxCLElBQWdDLE9BQU9BLE9BQU9DLFFBQWQsS0FBMkIsUUFBM0QsR0FBc0UsVUFBVUMsR0FBVixFQUFlO0FBQUUsU0FBTyxPQUFPQSxHQUFkO0FBQW9CLENBQTNHLEdBQThHLFVBQVVBLEdBQVYsRUFBZTtBQUFFLFNBQU9BLE9BQU8sT0FBT0YsTUFBUCxLQUFrQixVQUF6QixJQUF1Q0UsSUFBSUMsV0FBSixLQUFvQkgsTUFBM0QsSUFBcUVFLFFBQVFGLE9BQU9yTCxTQUFwRixHQUFnRyxRQUFoRyxHQUEyRyxPQUFPdUwsR0FBekg7QUFBK0gsQ0FBNVE7O0FBRUEsU0FBU3lILFVBQVQsQ0FBb0JqQyxDQUFwQixFQUF1QkMsQ0FBdkIsRUFBMEI7QUFDeEIsTUFBSUQsTUFBTUMsQ0FBVixFQUFhLE9BQU8sSUFBUDs7QUFFYixNQUFJRCxLQUFLLElBQUwsSUFBYUMsS0FBSyxJQUF0QixFQUE0QixPQUFPLEtBQVA7O0FBRTVCLE1BQUlqUixNQUFNa1QsT0FBTixDQUFjbEMsQ0FBZCxDQUFKLEVBQXNCO0FBQ3BCLFdBQU9oUixNQUFNa1QsT0FBTixDQUFjakMsQ0FBZCxLQUFvQkQsRUFBRTVRLE1BQUYsS0FBYTZRLEVBQUU3USxNQUFuQyxJQUE2QzRRLEVBQUVtQyxLQUFGLENBQVEsVUFBVUMsSUFBVixFQUFnQnBCLEtBQWhCLEVBQXVCO0FBQ2pGLGFBQU9pQixXQUFXRyxJQUFYLEVBQWlCbkMsRUFBRWUsS0FBRixDQUFqQixDQUFQO0FBQ0QsS0FGbUQsQ0FBcEQ7QUFHRDs7QUFFRCxNQUFJcUIsUUFBUSxPQUFPckMsQ0FBUCxLQUFhLFdBQWIsR0FBMkIsV0FBM0IsR0FBeUMzRixRQUFRMkYsQ0FBUixDQUFyRDtBQUNBLE1BQUlzQyxRQUFRLE9BQU9yQyxDQUFQLEtBQWEsV0FBYixHQUEyQixXQUEzQixHQUF5QzVGLFFBQVE0RixDQUFSLENBQXJEOztBQUVBLE1BQUlvQyxVQUFVQyxLQUFkLEVBQXFCLE9BQU8sS0FBUDs7QUFFckIsTUFBSUQsVUFBVSxRQUFkLEVBQXdCO0FBQ3RCLFFBQUlFLFNBQVN2QyxFQUFFd0MsT0FBRixFQUFiO0FBQ0EsUUFBSUMsU0FBU3hDLEVBQUV1QyxPQUFGLEVBQWI7O0FBRUEsUUFBSUQsV0FBV3ZDLENBQVgsSUFBZ0J5QyxXQUFXeEMsQ0FBL0IsRUFBa0MsT0FBT2dDLFdBQVdNLE1BQVgsRUFBbUJFLE1BQW5CLENBQVA7O0FBRWxDLFFBQUlDLFFBQVE1TSxPQUFPNk0sSUFBUCxDQUFZM0MsQ0FBWixDQUFaO0FBQ0EsUUFBSTRDLFFBQVE5TSxPQUFPNk0sSUFBUCxDQUFZMUMsQ0FBWixDQUFaOztBQUVBLFFBQUl5QyxNQUFNdFQsTUFBTixLQUFpQndULE1BQU14VCxNQUEzQixFQUFtQyxPQUFPLEtBQVA7O0FBRW5DLFdBQU9zVCxNQUFNUCxLQUFOLENBQVksVUFBVTNTLEdBQVYsRUFBZTtBQUNoQyxhQUFPeVMsV0FBV2pDLEVBQUV4USxHQUFGLENBQVgsRUFBbUJ5USxFQUFFelEsR0FBRixDQUFuQixDQUFQO0FBQ0QsS0FGTSxDQUFQO0FBR0Q7O0FBRUQsU0FBTyxLQUFQO0FBQ0Q7O0FBRUQsK0RBQWV5UyxVQUFmLEU7Ozs7Ozs7QUNyQ0E7O0FBRUF6USxRQUFRK0MsVUFBUixHQUFxQixJQUFyQjs7QUFFQSxJQUFJdUcsV0FBVyxtQkFBQUMsQ0FBUSxDQUFSLENBQWY7O0FBRUEsSUFBSUMsWUFBWUMsdUJBQXVCSCxRQUF2QixDQUFoQjs7QUFFQSxTQUFTRyxzQkFBVCxDQUFnQ1QsR0FBaEMsRUFBcUM7QUFBRSxTQUFPQSxPQUFPQSxJQUFJakcsVUFBWCxHQUF3QmlHLEdBQXhCLEdBQThCLEVBQUVpQixTQUFTakIsR0FBWCxFQUFyQztBQUF3RDs7QUFFL0YsSUFBSXFJLDBCQUEwQixTQUFTQSx1QkFBVCxHQUFtQztBQUMvRCxNQUFJckQsU0FBUyxJQUFiOztBQUVBLE1BQUlFLFlBQVksU0FBU0EsU0FBVCxDQUFtQm9ELFVBQW5CLEVBQStCO0FBQzdDLEtBQUMsR0FBRzlILFVBQVVTLE9BQWQsRUFBdUIrRCxVQUFVLElBQWpDLEVBQXVDLDhDQUF2Qzs7QUFFQUEsYUFBU3NELFVBQVQ7O0FBRUEsV0FBTyxZQUFZO0FBQ2pCLFVBQUl0RCxXQUFXc0QsVUFBZixFQUEyQnRELFNBQVMsSUFBVDtBQUM1QixLQUZEO0FBR0QsR0FSRDs7QUFVQSxNQUFJdEIsc0JBQXNCLFNBQVNBLG1CQUFULENBQTZCeEksUUFBN0IsRUFBdUNpSSxNQUF2QyxFQUErQ2xCLG1CQUEvQyxFQUFvRXNHLFFBQXBFLEVBQThFO0FBQ3RHO0FBQ0E7QUFDQTtBQUNBLFFBQUl2RCxVQUFVLElBQWQsRUFBb0I7QUFDbEIsVUFBSXdDLFNBQVMsT0FBT3hDLE1BQVAsS0FBa0IsVUFBbEIsR0FBK0JBLE9BQU85SixRQUFQLEVBQWlCaUksTUFBakIsQ0FBL0IsR0FBMEQ2QixNQUF2RTs7QUFFQSxVQUFJLE9BQU93QyxNQUFQLEtBQWtCLFFBQXRCLEVBQWdDO0FBQzlCLFlBQUksT0FBT3ZGLG1CQUFQLEtBQStCLFVBQW5DLEVBQStDO0FBQzdDQSw4QkFBb0J1RixNQUFwQixFQUE0QmUsUUFBNUI7QUFDRCxTQUZELE1BRU87QUFDTCxXQUFDLEdBQUcvSCxVQUFVUyxPQUFkLEVBQXVCLEtBQXZCLEVBQThCLGlGQUE5Qjs7QUFFQXNILG1CQUFTLElBQVQ7QUFDRDtBQUNGLE9BUkQsTUFRTztBQUNMO0FBQ0FBLGlCQUFTZixXQUFXLEtBQXBCO0FBQ0Q7QUFDRixLQWZELE1BZU87QUFDTGUsZUFBUyxJQUFUO0FBQ0Q7QUFDRixHQXRCRDs7QUF3QkEsTUFBSTlPLFlBQVksRUFBaEI7O0FBRUEsTUFBSTZMLGlCQUFpQixTQUFTQSxjQUFULENBQXdCa0QsRUFBeEIsRUFBNEI7QUFDL0MsUUFBSUMsV0FBVyxJQUFmOztBQUVBLFFBQUlyRCxXQUFXLFNBQVNBLFFBQVQsR0FBb0I7QUFDakMsVUFBSXFELFFBQUosRUFBY0QsR0FBRy9QLEtBQUgsQ0FBU2hDLFNBQVQsRUFBb0JELFNBQXBCO0FBQ2YsS0FGRDs7QUFJQWlELGNBQVVuQixJQUFWLENBQWU4TSxRQUFmOztBQUVBLFdBQU8sWUFBWTtBQUNqQnFELGlCQUFXLEtBQVg7QUFDQWhQLGtCQUFZQSxVQUFVOEMsTUFBVixDQUFpQixVQUFVcUwsSUFBVixFQUFnQjtBQUMzQyxlQUFPQSxTQUFTeEMsUUFBaEI7QUFDRCxPQUZXLENBQVo7QUFHRCxLQUxEO0FBTUQsR0FmRDs7QUFpQkEsTUFBSWxDLGtCQUFrQixTQUFTQSxlQUFULEdBQTJCO0FBQy9DLFNBQUssSUFBSXdGLE9BQU9sUyxVQUFVNUIsTUFBckIsRUFBNkIyQixPQUFPL0IsTUFBTWtVLElBQU4sQ0FBcEMsRUFBaURDLE9BQU8sQ0FBN0QsRUFBZ0VBLE9BQU9ELElBQXZFLEVBQTZFQyxNQUE3RSxFQUFxRjtBQUNuRnBTLFdBQUtvUyxJQUFMLElBQWFuUyxVQUFVbVMsSUFBVixDQUFiO0FBQ0Q7O0FBRURsUCxjQUFVbVAsT0FBVixDQUFrQixVQUFVeEQsUUFBVixFQUFvQjtBQUNwQyxhQUFPQSxTQUFTM00sS0FBVCxDQUFlaEMsU0FBZixFQUEwQkYsSUFBMUIsQ0FBUDtBQUNELEtBRkQ7QUFHRCxHQVJEOztBQVVBLFNBQU87QUFDTDJPLGVBQVdBLFNBRE47QUFFTHhCLHlCQUFxQkEsbUJBRmhCO0FBR0w0QixvQkFBZ0JBLGNBSFg7QUFJTHBDLHFCQUFpQkE7QUFKWixHQUFQO0FBTUQsQ0F4RUQ7O0FBMEVBbE0sUUFBUWlLLE9BQVIsR0FBa0JvSCx1QkFBbEIsQzs7Ozs7OztBQ3BGQTs7QUFFQXJSLFFBQVErQyxVQUFSLEdBQXFCLElBQXJCO0FBQ0EsSUFBSXlILFlBQVl4SyxRQUFRd0ssU0FBUixHQUFvQixDQUFDLEVBQUUsT0FBTy9PLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUNBLE9BQU9vVyxRQUF4QyxJQUFvRHBXLE9BQU9vVyxRQUFQLENBQWdCQyxhQUF0RSxDQUFyQzs7QUFFQSxJQUFJMVYsbUJBQW1CNEQsUUFBUTVELGdCQUFSLEdBQTJCLFNBQVNBLGdCQUFULENBQTBCMlYsSUFBMUIsRUFBZ0MxRixLQUFoQyxFQUF1QytCLFFBQXZDLEVBQWlEO0FBQ2pHLFNBQU8yRCxLQUFLM1YsZ0JBQUwsR0FBd0IyVixLQUFLM1YsZ0JBQUwsQ0FBc0JpUSxLQUF0QixFQUE2QitCLFFBQTdCLEVBQXVDLEtBQXZDLENBQXhCLEdBQXdFMkQsS0FBS0MsV0FBTCxDQUFpQixPQUFPM0YsS0FBeEIsRUFBK0IrQixRQUEvQixDQUEvRTtBQUNELENBRkQ7O0FBSUEsSUFBSXhSLHNCQUFzQm9ELFFBQVFwRCxtQkFBUixHQUE4QixTQUFTQSxtQkFBVCxDQUE2Qm1WLElBQTdCLEVBQW1DMUYsS0FBbkMsRUFBMEMrQixRQUExQyxFQUFvRDtBQUMxRyxTQUFPMkQsS0FBS25WLG1CQUFMLEdBQTJCbVYsS0FBS25WLG1CQUFMLENBQXlCeVAsS0FBekIsRUFBZ0MrQixRQUFoQyxFQUEwQyxLQUExQyxDQUEzQixHQUE4RTJELEtBQUtFLFdBQUwsQ0FBaUIsT0FBTzVGLEtBQXhCLEVBQStCK0IsUUFBL0IsQ0FBckY7QUFDRCxDQUZEOztBQUlBLElBQUlsRCxrQkFBa0JsTCxRQUFRa0wsZUFBUixHQUEwQixTQUFTQSxlQUFULENBQXlCckwsT0FBekIsRUFBa0MwUixRQUFsQyxFQUE0QztBQUMxRixTQUFPQSxTQUFTOVYsT0FBT3lXLE9BQVAsQ0FBZXJTLE9BQWYsQ0FBVCxDQUFQO0FBQ0QsQ0FGRCxDLENBRUc7O0FBRUg7Ozs7Ozs7QUFPQSxJQUFJOEssa0JBQWtCM0ssUUFBUTJLLGVBQVIsR0FBMEIsU0FBU0EsZUFBVCxHQUEyQjtBQUN6RSxNQUFJd0gsS0FBSzFXLE9BQU8yVyxTQUFQLENBQWlCQyxTQUExQjs7QUFFQSxNQUFJLENBQUNGLEdBQUdwTyxPQUFILENBQVcsWUFBWCxNQUE2QixDQUFDLENBQTlCLElBQW1Db08sR0FBR3BPLE9BQUgsQ0FBVyxhQUFYLE1BQThCLENBQUMsQ0FBbkUsS0FBeUVvTyxHQUFHcE8sT0FBSCxDQUFXLGVBQVgsTUFBZ0MsQ0FBQyxDQUExRyxJQUErR29PLEdBQUdwTyxPQUFILENBQVcsUUFBWCxNQUF5QixDQUFDLENBQXpJLElBQThJb08sR0FBR3BPLE9BQUgsQ0FBVyxlQUFYLE1BQWdDLENBQUMsQ0FBbkwsRUFBc0wsT0FBTyxLQUFQOztBQUV0TCxTQUFPdEksT0FBT3dLLE9BQVAsSUFBa0IsZUFBZXhLLE9BQU93SyxPQUEvQztBQUNELENBTkQ7O0FBUUE7Ozs7QUFJQSxJQUFJNEUsK0JBQStCN0ssUUFBUTZLLDRCQUFSLEdBQXVDLFNBQVNBLDRCQUFULEdBQXdDO0FBQ2hILFNBQU9wUCxPQUFPMlcsU0FBUCxDQUFpQkMsU0FBakIsQ0FBMkJ0TyxPQUEzQixDQUFtQyxTQUFuQyxNQUFrRCxDQUFDLENBQTFEO0FBQ0QsQ0FGRDs7QUFJQTs7O0FBR0EsSUFBSXVPLG1DQUFtQ3RTLFFBQVFzUyxnQ0FBUixHQUEyQyxTQUFTQSxnQ0FBVCxHQUE0QztBQUM1SCxTQUFPN1csT0FBTzJXLFNBQVAsQ0FBaUJDLFNBQWpCLENBQTJCdE8sT0FBM0IsQ0FBbUMsU0FBbkMsTUFBa0QsQ0FBQyxDQUExRDtBQUNELENBRkQ7O0FBSUE7Ozs7O0FBS0EsSUFBSXVJLDRCQUE0QnRNLFFBQVFzTSx5QkFBUixHQUFvQyxTQUFTQSx5QkFBVCxDQUFtQ0QsS0FBbkMsRUFBMEM7QUFDNUcsU0FBT0EsTUFBTWhDLEtBQU4sS0FBZ0I1SyxTQUFoQixJQUE2QjJTLFVBQVVDLFNBQVYsQ0FBb0J0TyxPQUFwQixDQUE0QixPQUE1QixNQUF5QyxDQUFDLENBQTlFO0FBQ0QsQ0FGRCxDOzs7Ozs7Ozs7OztBQ3BEQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTTlJLFNBQVMsdURBQUF5TSxDQUFPek0sTUFBdEI7O0FBRUFXLEVBQUVpVyxRQUFGLEVBQVlVLEtBQVosQ0FBa0IsWUFBVztBQUMzQixRQUFNQyxXQUFXNVcsRUFBRSxtQkFBRixDQUFqQjtBQUNBLFFBQU1ELFFBQVFDLEVBQUUsTUFBRixDQUFkO0FBQ0EsUUFBTTZXLGlCQUFpQjdXLEVBQUUsbUJBQUYsQ0FBdkI7QUFDQSxRQUFNOFcsZUFBZTlXLEVBQUUsa0JBQUYsQ0FBckI7QUFDQSxNQUFJK1csa0JBQWtCLEtBQXRCO0FBQ0EsTUFBSUMsb0JBQW9CLElBQXhCOztBQUVBSCxpQkFDRzNNLElBREgsQ0FFSTdLLE9BQ0cySixHQURILENBQ08rQyxTQUFTO0FBQ1osVUFBTWtMLGFBQWEsMkRBQUF2WCxDQUFXcU0sS0FBWCxLQUFxQixXQUFXQSxLQUFoQyxHQUF3QyxVQUF4QyxHQUFxRCxFQUF4RTtBQUNBLFdBQVEsd0JBQXVCQSxLQUFNLEtBQUlrTCxVQUFXLFVBQVNsTCxLQUFNLFdBQW5FO0FBQ0QsR0FKSCxFQUtHakssSUFMSCxDQUtRLEVBTFIsQ0FGSixFQVNHc0UsRUFUSCxDQVNNLFFBVE4sRUFTZ0IsWUFBVztBQUN2QixVQUFNeUUsUUFBUTdLLEVBQUUsSUFBRixDQUFkO0FBQ0EsVUFBTStMLFFBQVFsQixNQUFNcU0sR0FBTixFQUFkOztBQUVBLFFBQUluTCxVQUFVLDJEQUFBck0sQ0FBV3FNLEtBQXpCLEVBQWdDO0FBQzlCaE0sWUFBTWdMLFFBQU4sQ0FBZWdCLEtBQWYsRUFBc0JkLFdBQXRCLENBQWtDLDJEQUFBdkwsQ0FBV3FNLEtBQTdDO0FBQ0FyTSxNQUFBLDJEQUFBQSxDQUFXdU0sUUFBWCxDQUFvQkYsS0FBcEI7QUFDRDtBQUNGLEdBakJIOztBQW1CQWhNLFFBQU1nTCxRQUFOLENBQWUsMkRBQUFyTCxDQUFXcU0sS0FBMUI7O0FBRUE2SyxXQUNHeFEsRUFESCxDQUNNLE9BRE4sRUFDZSxpQkFEZixFQUNrQyxZQUFXO0FBQ3pDLFVBQU15RSxRQUFRN0ssRUFBRSxJQUFGLENBQWQ7O0FBRUEsUUFBSTZLLE1BQU0zSyxFQUFOLENBQVMsU0FBVCxDQUFKLEVBQXlCO0FBQ3ZCaVg7QUFDQXRNLFlBQU1JLFdBQU4sQ0FBa0IsUUFBbEI7QUFDRCxLQUhELE1BR087QUFDTG1NO0FBQ0E3TyxjQUFRN0IsSUFBUixDQUFhLGdCQUFiLEVBQStCLEVBQUU4RyxRQUFRLE1BQVYsRUFBL0I7QUFDQTNDLFlBQ0dFLFFBREgsQ0FDWSxRQURaLEVBRUdDLFFBRkgsR0FHR0MsV0FISCxDQUdlLFFBSGY7QUFJRDtBQUNGLEdBZkgsRUFnQkc3RSxFQWhCSCxDQWdCTSxPQWhCTixFQWdCZSxtQkFoQmYsRUFnQm9DLFlBQVc7QUFDM0MsVUFBTXlFLFFBQVE3SyxFQUFFLElBQUYsQ0FBZDs7QUFFQSxRQUFJNkssTUFBTTNLLEVBQU4sQ0FBUyxTQUFULENBQUosRUFBeUI7QUFDdkJpWDtBQUNBdE0sWUFBTUksV0FBTixDQUFrQixRQUFsQjtBQUNELEtBSEQsTUFHTztBQUNMbU07O0FBRUF2TSxZQUNHRSxRQURILENBQ1ksUUFEWixFQUVHQyxRQUZILEdBR0dDLFdBSEgsQ0FHZSxRQUhmOztBQUtBO0FBQUE7QUFBQSx1Q0FBTyxvQ0FBcUMsRUFBNUM7QUFBQTtBQUFBLFNBQWlGb00sSUFBakYsQ0FBc0YsTUFBTTtBQUMxRjlPLGdCQUFRN0IsSUFBUixDQUFhLGdCQUFiLEVBQStCLEVBQUU4RyxRQUFRLFFBQVYsRUFBL0I7QUFDRCxPQUZEO0FBR0Q7QUFDRixHQWxDSDs7QUFvQ0EsV0FBUzRKLGVBQVQsR0FBMkI7QUFDekJOLGlCQUFhN0wsV0FBYixDQUF5QixtQkFBekI7QUFDQStMLHdCQUFvQixJQUFwQjtBQUNEO0FBQ0QsV0FBU0csZUFBVCxHQUEyQjtBQUN6QkwsaUJBQWEvTCxRQUFiLENBQXNCLG1CQUF0QjtBQUNBaU0sd0JBQW9CLEtBQXBCO0FBQ0Q7QUFDRixDQXpFRCxFOzs7Ozs7QUNOQSx5Qzs7Ozs7Ozs7OztBQ0FBO0FBQ0E7O0FBRUFoWCxFQUFFLFlBQVc7QUFDWCxRQUFNc1gsYUFBYXRYLEVBQUUsZUFBRixDQUFuQjtBQUNBLFFBQU11WCxZQUFZdlgsRUFBRSxjQUFGLENBQWxCO0FBQ0EsUUFBTXdYLGVBQWVGLFdBQVdsTixJQUFYLENBQWdCLGlCQUFoQixDQUFyQjtBQUNBLFFBQU1xTixXQUFXelgsRUFBRSxjQUFGLENBQWpCOztBQUVBdUksVUFBUW5DLEVBQVIsQ0FBVyxnQkFBWCxFQUE2QixDQUFDLEVBQUVvSCxNQUFGLEVBQUQsS0FBZ0I7QUFDM0MsVUFBTWtLLFdBQVdsSyxXQUFXLFFBQTVCOztBQUVBLFFBQUlrSyxRQUFKLEVBQWM7QUFDWkgsZ0JBQVVJLElBQVY7QUFDQUwsaUJBQVdyTSxXQUFYLENBQXVCLFFBQXZCO0FBQ0F1TSxtQkFBYUksS0FBYjtBQUNELEtBSkQsTUFJTztBQUNMTCxnQkFBVU0sSUFBVjtBQUNBUCxpQkFBV3ZNLFFBQVgsQ0FBb0IsUUFBcEI7QUFDRDtBQUNGLEdBWEQ7QUFZRCxDQWxCRCxFOzs7Ozs7Ozs7O0FDSEE7QUFDQTs7QUFFQS9LLEVBQUVpVyxRQUFGLEVBQVlVLEtBQVosQ0FBa0IsWUFBVztBQUMzQixRQUFNYyxXQUFXelgsRUFBRSxjQUFGLENBQWpCO0FBQ0EsUUFBTThYLFlBQVk5WCxFQUFFLHFCQUFGLENBQWxCO0FBQ0EsUUFBTStILFdBQVdPLFNBQVNQLFFBQTFCO0FBQ0EsUUFBTWhJLFFBQVFDLEVBQUUsTUFBRixDQUFkO0FBQ0EsUUFBTStYLGdCQUFnQk4sU0FBU3JOLElBQVQsQ0FBYyxrQkFBZCxDQUF0Qjs7QUFFQSxRQUFNNE4sT0FBTyxFQUFiO0FBQ0EsUUFBTUMsVUFBVSxFQUFoQjtBQUNBSCxZQUFVMU4sSUFBVixDQUFlLFNBQWYsRUFBMEI4TixJQUExQixDQUErQixZQUFXO0FBQ3hDLFVBQU1DLFFBQVFuWSxFQUFFLElBQUYsQ0FBZDtBQUNBLFVBQU1tSyxPQUFPZ08sTUFBTXZOLElBQU4sQ0FBVyxNQUFYLENBQWI7QUFDQSxVQUFNd04sUUFBUUQsTUFBTS9OLElBQU4sQ0FBVyxRQUFYLENBQWQ7O0FBRUEsUUFBSXJDLFNBQVNzUSxRQUFULENBQWtCbE8sSUFBbEIsQ0FBSixFQUE2QjtBQUMzQmdPLFlBQU1wTixRQUFOLENBQWUsUUFBZjtBQUNEOztBQUVELFFBQUlxTixNQUFNcFcsTUFBTixLQUFpQixDQUFyQixFQUF3QjtBQUN0QmlXLGNBQVF2UyxJQUFSLENBQWF5UyxNQUFNLENBQU4sRUFBU0csU0FBdEI7QUFDRCxLQUZELE1BRU87QUFDTEYsWUFBTUYsSUFBTixDQUFXLFlBQVc7QUFDcEIsY0FBTUssTUFBTSxLQUFLQyxTQUFqQjtBQUNBLFlBQUksQ0FBQ1IsS0FBS08sR0FBTCxDQUFMLEVBQWdCO0FBQ2RQLGVBQUtPLEdBQUwsSUFBWSxFQUFaO0FBQ0Q7O0FBRURQLGFBQUtPLEdBQUwsRUFBVTdTLElBQVYsQ0FBZXlTLE1BQU0sQ0FBTixFQUFTRyxTQUF4QjtBQUNELE9BUEQ7QUFRRDtBQUNGLEdBckJEOztBQXVCQTs7O0FBR0FiLFdBQVNyTixJQUFULENBQWMsb0JBQWQsRUFBb0M4TixJQUFwQyxDQUF5QyxZQUFXO0FBQ2xELFVBQU1yTixRQUFRN0ssRUFBRSxJQUFGLENBQWQ7QUFDQSxVQUFNeVksUUFBUVQsS0FBS25OLE1BQU1ELElBQU4sQ0FBVyxLQUFYLENBQUwsQ0FBZDs7QUFFQSxRQUFJLENBQUM2TixLQUFMLEVBQVk7QUFDVjVOLFlBQ0dYLElBREgsQ0FDUSxxRUFEUixFQUVHUyxNQUZILEdBR0dJLFFBSEgsQ0FHWSxhQUhaO0FBSUE7QUFDRDs7QUFFREYsVUFBTVgsSUFBTixDQUFXdU8sTUFBTTNXLElBQU4sQ0FBVyxFQUFYLENBQVgsRUFBMkI0VyxHQUEzQixDQUErQjtBQUM3QkMsY0FBUSxLQUFLRixNQUFNelc7QUFEVSxLQUEvQjtBQUdELEdBZkQ7O0FBaUJBK1YsZ0JBQWM3TixJQUFkLENBQW1CK04sUUFBUW5XLElBQVIsQ0FBYSxFQUFiLENBQW5COztBQUVBLFFBQU04VyxTQUFTNVksRUFBRSwyQkFBRixDQUFmOztBQUVBO0FBQ0F5WCxXQUNHMU0sUUFESCxDQUNZLGdCQURaLEVBRUczRSxFQUZILENBRU0sT0FGTixFQUVlLHNCQUZmLEVBRXVDLFlBQVc7QUFDOUNwRyxNQUFFLElBQUYsRUFDRzJLLE1BREgsR0FFR2tPLFdBRkgsQ0FFZSxhQUZmO0FBR0QsR0FOSCxFQU9HelMsRUFQSCxDQU9NLE9BUE4sRUFPZSxZQVBmLEVBTzZCLFVBQVMxRixDQUFULEVBQVk7QUFDckMsVUFBTW1LLFFBQVE3SyxFQUFFLElBQUYsQ0FBZDs7QUFFQSxRQUFJRCxNQUFNRyxFQUFOLENBQVMsZ0JBQVQsQ0FBSixFQUFnQzs7QUFFaEMsUUFBSTJLLE1BQU1pTyxPQUFOLENBQWMsU0FBZCxFQUF5QjVZLEVBQXpCLENBQTRCLFNBQTVCLENBQUosRUFBNEM7QUFDMUNRLFFBQUVLLGNBQUY7QUFDQTtBQUNEOztBQUVELFVBQU04SSxLQUFLZ0IsTUFBTUQsSUFBTixDQUFXLElBQVgsQ0FBWDtBQUNBLFVBQU1OLE1BQU1PLE1BQU1rTyxJQUFOLENBQVcsTUFBWCxDQUFaOztBQUVBclksTUFBRUssY0FBRjtBQUNBd0gsWUFBUTdCLElBQVIsQ0FBYSxjQUFiLEVBQTZCO0FBQzNCbUQsUUFEMkI7QUFFM0JTLFNBRjJCO0FBRzNCeEUsYUFBTytFLE1BQU1rTyxJQUFOLENBQVcsT0FBWCxDQUhvQjtBQUkzQjVPLFlBQU1VLE1BQU1pTyxPQUFOLENBQWMsU0FBZCxFQUF5QmxPLElBQXpCLENBQThCLE1BQTlCO0FBSnFCLEtBQTdCO0FBTUQsR0EzQkg7O0FBNkJBUCxFQUFBLHlEQUFBQSxDQUFRa0ksTUFBUixDQUFlakssWUFBWTtBQUN6QixVQUFNOEQsVUFBVTlELFNBQVNtRyxLQUF6Qjs7QUFFQW1LLFdBQ0czTixXQURILENBQ2UsUUFEZixFQUVHdEIsTUFGSCxDQUVVLENBQUM2QyxHQUFELEVBQU1oRCxJQUFOLEtBQWU7QUFDckIsYUFBT3hKLEVBQUV3SixJQUFGLEVBQVFvQixJQUFSLENBQWEsTUFBYixNQUF5QndCLFFBQVFqQyxJQUF4QztBQUNELEtBSkgsRUFLR1ksUUFMSCxDQUtZLFFBTFo7QUFNRCxHQVREO0FBVUQsQ0FoR0QsRTs7Ozs7O0FDSEEseUM7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7QUNBQTs7QUFFQS9LLEVBQUUsWUFBVztBQUNYLFFBQU1nWixlQUFlaFosRUFBRSxpQkFBRixDQUFyQjs7QUFFQXVJLFVBQVFuQyxFQUFSLENBQVcsc0JBQVgsRUFBbUMsQ0FBQyxFQUFFNlMsSUFBRixFQUFELEtBQWM7QUFDL0NELGlCQUFhOU8sSUFBYixDQUFrQitPLElBQWxCO0FBQ0QsR0FGRDtBQUdELENBTkQsRTs7Ozs7O0FDRkEseUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBOztBQUVBalosRUFBRSxZQUFXO0FBQ1gsUUFBTUQsUUFBUUMsRUFBRSxNQUFGLENBQWQ7QUFDQSxRQUFNbVksUUFBUW5ZLEVBQUUsU0FBRixDQUFkO0FBQ0EsUUFBTWtaLFNBQVNmLE1BQU0vTixJQUFOLENBQVcsZUFBWCxDQUFmO0FBQ0EsUUFBTStPLFdBQVdoQixNQUFNL04sSUFBTixDQUFXLGlCQUFYLENBQWpCO0FBQ0EsUUFBTWdQLFFBQVFqQixNQUFNL04sSUFBTixDQUFXLGNBQVgsQ0FBZDs7QUFFQSxNQUFJcEssRUFBRSxNQUFGLEVBQVVFLEVBQVYsQ0FBYSxnQkFBYixDQUFKLEVBQW9DO0FBQ2xDcUksWUFBUTdCLElBQVIsQ0FBYSxjQUFiLEVBQTZCO0FBQzNCbUQsVUFBSXNPLE1BQU12TixJQUFOLENBQVcsSUFBWCxDQUR1QjtBQUUzQjlFLGFBQU9xUyxNQUFNdk4sSUFBTixDQUFXLE9BQVgsQ0FGb0I7QUFHM0JULFlBQU1nTyxNQUFNdk4sSUFBTixDQUFXLE1BQVgsQ0FIcUI7QUFJM0JOLFdBQUs2TixNQUFNdk4sSUFBTixDQUFXLEtBQVg7QUFKc0IsS0FBN0I7O0FBT0FyQyxZQUFRN0IsSUFBUixDQUFhLHNCQUFiLEVBQXFDO0FBQ25DdVMsWUFBTWpaLEVBQUUsd0JBQUYsRUFBNEJrSyxJQUE1QjtBQUQ2QixLQUFyQztBQUdEOztBQUVERyxFQUFBLHlEQUFBQSxDQUFRa0ksTUFBUixDQUFlLENBQUNqSyxRQUFELEVBQVdpSSxNQUFYLEtBQXNCO0FBQ25DLFVBQU04SSxTQUFTL1EsU0FBU21HLEtBQVQsQ0FBZTVFLEVBQTlCOztBQUVBd1AsY0FDRSwwREFBQXpaLENBQVU4TSxTQUFWLENBQW9CMk0sTUFBcEIsRUFBNEJDLElBQTVCLENBQWlDLFVBQVMxTyxJQUFULEVBQWU7QUFDOUMsWUFBTXBCLE9BQU9vQixLQUFLNk4sS0FBTCxDQUFXLENBQVgsS0FBaUIsRUFBOUI7QUFDQSxZQUFNYyxhQUFhLGtFQUFBclgsQ0FBVyxVQUFYLEVBQXVCc0gsS0FBSytQLFVBQTVCLENBQW5COztBQUVBTCxhQUFPaFAsSUFBUCxDQUFZVixLQUFLMUQsS0FBakI7QUFDQXFULGVBQVNqUCxJQUFULENBQWNWLEtBQUtVLElBQW5CO0FBQ0FrUCxZQUFNbFAsSUFBTixDQUFZLGFBQVlWLEtBQUtnUSxNQUFMLENBQVlsWSxJQUFLLE9BQU1pWSxVQUFXLEVBQTFEOztBQUVBdEQsZUFBU25RLEtBQVQsR0FBaUIwRCxLQUFLMUQsS0FBdEI7O0FBRUF5QyxjQUFRN0IsSUFBUixDQUFhLHNCQUFiLEVBQXFDO0FBQ25DdVMsY0FBTTtBQUQ2QixPQUFyQztBQUdELEtBYkQsQ0FERjtBQWVELEdBbEJEO0FBbUJELENBdkNELEU7Ozs7OztBQ0xBLHlDOzs7Ozs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7Ozs7O0FDQUEseUMiLCJmaWxlIjoiY29kZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gd2luZG93W1wid2VicGFja0pzb25wXCJdO1xuIFx0d2luZG93W1wid2VicGFja0pzb25wXCJdID0gZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBleGVjdXRlTW9kdWxlcykge1xuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW10sIHJlc3VsdDtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGNodW5rSWRzLCBtb3JlTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMpO1xuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0fTtcblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0cyB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHQxOiAwXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSA9PT0gMCkge1xuIFx0XHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7IHJlc29sdmUoKTsgfSk7XG4gXHRcdH1cblxuIFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkQ2h1bmtEYXRhWzJdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuIFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdO1xuIFx0XHR9KTtcbiBcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZTtcblxuIFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG4gXHRcdHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiBcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuIFx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG4gXHRcdHNjcmlwdC5hc3luYyA9IHRydWU7XG4gXHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwMDAwO1xuXG4gXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG4gXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuIFx0XHR9XG4gXHRcdHNjcmlwdC5zcmMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcImNodW5rLlwiICsgKHt9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLlwiICsge1wiMFwiOlwiMDc5NjlcIn1bY2h1bmtJZF0gKyBcIi5qc1wiO1xuIFx0XHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZSwgMTIwMDAwKTtcbiBcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZTtcbiBcdFx0ZnVuY3Rpb24gb25TY3JpcHRDb21wbGV0ZSgpIHtcbiBcdFx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG4gXHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcbiBcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG4gXHRcdFx0dmFyIGNodW5rID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRcdGlmKGNodW5rICE9PSAwKSB7XG4gXHRcdFx0XHRpZihjaHVuaykge1xuIFx0XHRcdFx0XHRjaHVua1sxXShuZXcgRXJyb3IoJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC4nKSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG4gXHRcdFx0fVxuIFx0XHR9O1xuIFx0XHRoZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG5cbiBcdFx0cmV0dXJuIHByb21pc2U7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9hc3NldHMvYnVpbHQvXCI7XG5cbiBcdC8vIG9uIGVycm9yIGZ1bmN0aW9uIGZvciBhc3luYyBsb2FkaW5nXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgdGhyb3cgZXJyOyB9O1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGQ0ZDQ2MzE1M2NiZjRhMzg0YmZkIiwiaW1wb3J0IHsgdGhlbWVzIH0gZnJvbSAnLi90aGVtZXMvcmVzdWx0Lmpzb24nXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdGhlbWVzLFxuICBsc1Bvc3RUYWJLZXk6ICdwb3N0LXRhYnMnLFxuICAvLyBsb2NhbHN0b3JhZ2UgdGhlbWUga2V5XG4gIGxzVGhlbWVLZXk6ICd0aGVtZScsXG4gIGRlZmF1bHRUaGVtZTogJ2RhcmtfZGVmYXVsdCdcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbmZpZy5qcyIsImltcG9ydCBjcmVhdGVIaXN0b3J5IGZyb20gXCJoaXN0b3J5L2NyZWF0ZUJyb3dzZXJIaXN0b3J5XCJcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSGlzdG9yeSgpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hpc3RvcnkuanMiLCJpbXBvcnQgVGhlbWVTdG9yZSBmcm9tICcuL1RoZW1lU3RvcmUnXG5pbXBvcnQgVGFiU3RvcmUgZnJvbSAnLi9UYWJTdG9yZSdcbmltcG9ydCBQb3N0U3RvcmUgZnJvbSAnLi9Qb3N0U3RvcmUnXG5cbmV4cG9ydCBjb25zdCB0aGVtZVN0b3JlID0gbmV3IFRoZW1lU3RvcmUoKVxuZXhwb3J0IGNvbnN0IHRhYlN0b3JlID0gbmV3IFRhYlN0b3JlKClcbmV4cG9ydCBjb25zdCBwb3N0U3RvcmUgPSBuZXcgUG9zdFN0b3JlKClcblxud2luZG93LnN0b3JlcyA9IHtcbiAgdGhlbWVTdG9yZSxcbiAgdGFiU3RvcmUsXG4gIHBvc3RTdG9yZVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZXMvaW5kZXguanMiLCJjb25zdCAkYm9keSA9ICQoJ2JvZHknKVxuXG5leHBvcnQgY29uc3QgaXNIb21lUGFnZSA9ICgpID0+ICRib2R5LmlzKCcuaG9tZS10ZW1wbGF0ZScpXG5leHBvcnQgY29uc3QgaXNQb3N0UGFnZSA9ICgpID0+ICRib2R5LmlzKCcucG9zdC10ZW1wbGF0ZScpXG5cbi8qKlxuICogaG9yaXpvbnRhbGx5IHNjcm9sbFxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gKlxuICogQGV4YW1wbGVcbiAqICBjb25zdCBzdG9wSFNjcm9sbCA9IGhTY3JvbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0otaHNjcm9sbC1lbCcpKVxuICogIHN0b3BIU2Nyb2xsKCkgLy8gcmVtb3ZlRXZlbnRMaXN0ZW5lclxuICovXG5leHBvcnQgZnVuY3Rpb24gaFNjcm9sbChlbCkge1xuICBpZiAoIWVsKSB7XG4gICAgY29uc29sZS5lcnJvcignTXVzdCBzcGVjaWZ5IGVsIScpXG4gICAgcmV0dXJuXG4gIH1cblxuICBlbC5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIHdoZWVsKVxuXG4gIGZ1bmN0aW9uIHdoZWVsKGUpIHtcbiAgICBjb25zdCBkZWx0YSA9IGUud2hlZWxEZWx0YSA/IGUud2hlZWxEZWx0YSA6IC0xICogZS5kZWx0YVlcbiAgICBlbC5zY3JvbGxMZWZ0ICs9IC1kZWx0YVxuICAgIGUucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgcmV0dXJuICgpID0+IGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3doZWVsJywgd2hlZWwpXG59XG5cbmV4cG9ydCBjb25zdCBmb3JtYXQgPSBmdW5jdGlvbih0ZW1wbGF0ZSwgdmFycykge1xuICByZXR1cm4gdGVtcGxhdGUucmVwbGFjZSgvXFwkXFx7KFteXFx7XFx9XSopXFx9L2csIGZ1bmN0aW9uKF8sIG5hbWUpIHtcbiAgICB2YXIgdmFsdWUgPSB2YXJzW25hbWUudHJpbSgpXVxuICAgIHJldHVybiB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZSArICcnXG4gIH0pXG59XG5cbmNvbnN0IHRvTGVuID0gZnVuY3Rpb24oc291cmNlLCBsZW4pIHtcbiAgcmV0dXJuIChcbiAgICBBcnJheS5wcm90b3R5cGUuam9pbi5jYWxsKFxuICAgICAge1xuICAgICAgICBsZW5ndGg6IGxlbiArIDFcbiAgICAgIH0sXG4gICAgICAnMCdcbiAgICApICsgc291cmNlXG4gICkuc2xpY2UoLWxlbilcbn1cblxuZXhwb3J0IGNvbnN0IGZvcm1hdERhdGUgPSBmdW5jdGlvbih0ZW1wbGF0ZSwgZGF0ZSkge1xuICBpZiAoIWRhdGUpIHJldHVybiAnJ1xuICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UoL1xcJChbYS16QS1aXSkvZywgZnVuY3Rpb24oXywga2V5KSB7XG4gICAgcmV0dXJuICckeycgKyBrZXkgKyAnfSdcbiAgfSlcbiAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpXG4gIHZhciBEQVkgPSBbJ+aXpScsICfkuIAnLCAn5LqMJywgJ+S4iScsICflm5snLCAn5LqUJywgJ+WFrSddXG4gIHJldHVybiBmb3JtYXQodGVtcGxhdGUsIHtcbiAgICBZOiB0b0xlbihkYXRlLmdldEZ1bGxZZWFyKCksIDQpLFxuICAgIHk6IHRvTGVuKGRhdGUuZ2V0RnVsbFllYXIoKSwgMiksXG4gICAgTTogdG9MZW4oZGF0ZS5nZXRNb250aCgpICsgMSwgMiksXG4gICAgZDogdG9MZW4oZGF0ZS5nZXREYXRlKCksIDIpLFxuICAgIEQ6IERBWVtkYXRlLmdldERheSgpXSxcbiAgICBIOiB0b0xlbihkYXRlLmdldEhvdXJzKCksIDIpLFxuICAgIG06IHRvTGVuKGRhdGUuZ2V0TWludXRlcygpLCAyKSxcbiAgICBzOiB0b0xlbihkYXRlLmdldFNlY29uZHMoKSwgMilcbiAgfSlcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy5qcyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTQtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIHdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB3YXJuaW5nID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGFyZ3MpIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBhcmdzID0gbmV3IEFycmF5KGxlbiA+IDIgPyBsZW4gLSAyIDogMCk7XG4gICAgZm9yICh2YXIga2V5ID0gMjsga2V5IDwgbGVuOyBrZXkrKykge1xuICAgICAgYXJnc1trZXkgLSAyXSA9IGFyZ3VtZW50c1trZXldO1xuICAgIH1cbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgK1xuICAgICAgICAnbWVzc2FnZSBhcmd1bWVudCdcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdC5sZW5ndGggPCAxMCB8fCAoL15bc1xcV10qJC8pLnRlc3QoZm9ybWF0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnVGhlIHdhcm5pbmcgZm9ybWF0IHNob3VsZCBiZSBhYmxlIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgJyArXG4gICAgICAgICd3YXJuaW5nLiBQbGVhc2UsIHVzZSBhIG1vcmUgZGVzY3JpcHRpdmUgZm9ybWF0IHRoYW46ICcgKyBmb3JtYXRcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICtcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgICB9KTtcbiAgICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgfSBjYXRjaCh4KSB7fVxuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3dhcm5pbmcvYnJvd3Nlci5qcyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIGFkZExlYWRpbmdTbGFzaCA9IGV4cG9ydHMuYWRkTGVhZGluZ1NsYXNoID0gZnVuY3Rpb24gYWRkTGVhZGluZ1NsYXNoKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLycgPyBwYXRoIDogJy8nICsgcGF0aDtcbn07XG5cbnZhciBzdHJpcExlYWRpbmdTbGFzaCA9IGV4cG9ydHMuc3RyaXBMZWFkaW5nU2xhc2ggPSBmdW5jdGlvbiBzdHJpcExlYWRpbmdTbGFzaChwYXRoKSB7XG4gIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nID8gcGF0aC5zdWJzdHIoMSkgOiBwYXRoO1xufTtcblxudmFyIGhhc0Jhc2VuYW1lID0gZXhwb3J0cy5oYXNCYXNlbmFtZSA9IGZ1bmN0aW9uIGhhc0Jhc2VuYW1lKHBhdGgsIHByZWZpeCkge1xuICByZXR1cm4gbmV3IFJlZ0V4cCgnXicgKyBwcmVmaXggKyAnKFxcXFwvfFxcXFw/fCN8JCknLCAnaScpLnRlc3QocGF0aCk7XG59O1xuXG52YXIgc3RyaXBCYXNlbmFtZSA9IGV4cG9ydHMuc3RyaXBCYXNlbmFtZSA9IGZ1bmN0aW9uIHN0cmlwQmFzZW5hbWUocGF0aCwgcHJlZml4KSB7XG4gIHJldHVybiBoYXNCYXNlbmFtZShwYXRoLCBwcmVmaXgpID8gcGF0aC5zdWJzdHIocHJlZml4Lmxlbmd0aCkgOiBwYXRoO1xufTtcblxudmFyIHN0cmlwVHJhaWxpbmdTbGFzaCA9IGV4cG9ydHMuc3RyaXBUcmFpbGluZ1NsYXNoID0gZnVuY3Rpb24gc3RyaXBUcmFpbGluZ1NsYXNoKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguY2hhckF0KHBhdGgubGVuZ3RoIC0gMSkgPT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aDtcbn07XG5cbnZhciBwYXJzZVBhdGggPSBleHBvcnRzLnBhcnNlUGF0aCA9IGZ1bmN0aW9uIHBhcnNlUGF0aChwYXRoKSB7XG4gIHZhciBwYXRobmFtZSA9IHBhdGggfHwgJy8nO1xuICB2YXIgc2VhcmNoID0gJyc7XG4gIHZhciBoYXNoID0gJyc7XG5cbiAgdmFyIGhhc2hJbmRleCA9IHBhdGhuYW1lLmluZGV4T2YoJyMnKTtcbiAgaWYgKGhhc2hJbmRleCAhPT0gLTEpIHtcbiAgICBoYXNoID0gcGF0aG5hbWUuc3Vic3RyKGhhc2hJbmRleCk7XG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZS5zdWJzdHIoMCwgaGFzaEluZGV4KTtcbiAgfVxuXG4gIHZhciBzZWFyY2hJbmRleCA9IHBhdGhuYW1lLmluZGV4T2YoJz8nKTtcbiAgaWYgKHNlYXJjaEluZGV4ICE9PSAtMSkge1xuICAgIHNlYXJjaCA9IHBhdGhuYW1lLnN1YnN0cihzZWFyY2hJbmRleCk7XG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZS5zdWJzdHIoMCwgc2VhcmNoSW5kZXgpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZTogcGF0aG5hbWUsXG4gICAgc2VhcmNoOiBzZWFyY2ggPT09ICc/JyA/ICcnIDogc2VhcmNoLFxuICAgIGhhc2g6IGhhc2ggPT09ICcjJyA/ICcnIDogaGFzaFxuICB9O1xufTtcblxudmFyIGNyZWF0ZVBhdGggPSBleHBvcnRzLmNyZWF0ZVBhdGggPSBmdW5jdGlvbiBjcmVhdGVQYXRoKGxvY2F0aW9uKSB7XG4gIHZhciBwYXRobmFtZSA9IGxvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgc2VhcmNoID0gbG9jYXRpb24uc2VhcmNoLFxuICAgICAgaGFzaCA9IGxvY2F0aW9uLmhhc2g7XG5cblxuICB2YXIgcGF0aCA9IHBhdGhuYW1lIHx8ICcvJztcblxuICBpZiAoc2VhcmNoICYmIHNlYXJjaCAhPT0gJz8nKSBwYXRoICs9IHNlYXJjaC5jaGFyQXQoMCkgPT09ICc/JyA/IHNlYXJjaCA6ICc/JyArIHNlYXJjaDtcblxuICBpZiAoaGFzaCAmJiBoYXNoICE9PSAnIycpIHBhdGggKz0gaGFzaC5jaGFyQXQoMCkgPT09ICcjJyA/IGhhc2ggOiAnIycgKyBoYXNoO1xuXG4gIHJldHVybiBwYXRoO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9QYXRoVXRpbHMuanMiLCJpbXBvcnQgJy4vY29tcG9uZW50cy9lbWl0dGVyJ1xuXG5pbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnXG5cbmltcG9ydCAncGFydGlhbHMvcG9zdC10YWInXG5pbXBvcnQgJ3BhcnRpYWxzL3NpZGUtYmFyLWhlYWRlcidcbmltcG9ydCAncGFydGlhbHMvc2lkZS1iYXItYm9keSdcbmltcG9ydCAncGFydGlhbHMvZm9vdGVyJ1xuaW1wb3J0ICdwYXJ0aWFscy9wb3N0J1xuaW1wb3J0ICdwYXJ0aWFscy9wb3N0LW5hdidcbmltcG9ydCAncGFydGlhbHMvaG9tZSdcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29kZXIuanMiLCJpbXBvcnQgbWl0dCBmcm9tICdtaXR0J1xud2luZG93LmVtaXR0ZXIgPSBtaXR0KClcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9lbWl0dGVyL2luZGV4LmpzIiwiLy8gICAgICBcbi8vIEFuIGV2ZW50IGhhbmRsZXIgY2FuIHRha2UgYW4gb3B0aW9uYWwgZXZlbnQgYXJndW1lbnRcbi8vIGFuZCBzaG91bGQgbm90IHJldHVybiBhIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbi8vIEFuIGFycmF5IG9mIGFsbCBjdXJyZW50bHkgcmVnaXN0ZXJlZCBldmVudCBoYW5kbGVycyBmb3IgYSB0eXBlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuLy8gQSBtYXAgb2YgZXZlbnQgdHlwZXMgYW5kIHRoZWlyIGNvcnJlc3BvbmRpbmcgZXZlbnQgaGFuZGxlcnMuXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIFxuXG4vKiogTWl0dDogVGlueSAofjIwMGIpIGZ1bmN0aW9uYWwgZXZlbnQgZW1pdHRlciAvIHB1YnN1Yi5cbiAqICBAbmFtZSBtaXR0XG4gKiAgQHJldHVybnMge01pdHR9XG4gKi9cbmZ1bmN0aW9uIG1pdHQoYWxsICAgICAgICAgICAgICAgICApIHtcblx0YWxsID0gYWxsIHx8IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cblx0cmV0dXJuIHtcblx0XHQvKipcblx0XHQgKiBSZWdpc3RlciBhbiBldmVudCBoYW5kbGVyIGZvciB0aGUgZ2l2ZW4gdHlwZS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSAge1N0cmluZ30gdHlwZVx0VHlwZSBvZiBldmVudCB0byBsaXN0ZW4gZm9yLCBvciBgXCIqXCJgIGZvciBhbGwgZXZlbnRzXG5cdFx0ICogQHBhcmFtICB7RnVuY3Rpb259IGhhbmRsZXIgRnVuY3Rpb24gdG8gY2FsbCBpbiByZXNwb25zZSB0byBnaXZlbiBldmVudFxuXHRcdCAqIEBtZW1iZXJPZiBtaXR0XG5cdFx0ICovXG5cdFx0b246IGZ1bmN0aW9uIG9uKHR5cGUgICAgICAgICwgaGFuZGxlciAgICAgICAgICAgICAgKSB7XG5cdFx0XHQoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcik7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIFJlbW92ZSBhbiBldmVudCBoYW5kbGVyIGZvciB0aGUgZ2l2ZW4gdHlwZS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSAge1N0cmluZ30gdHlwZVx0VHlwZSBvZiBldmVudCB0byB1bnJlZ2lzdGVyIGBoYW5kbGVyYCBmcm9tLCBvciBgXCIqXCJgXG5cdFx0ICogQHBhcmFtICB7RnVuY3Rpb259IGhhbmRsZXIgSGFuZGxlciBmdW5jdGlvbiB0byByZW1vdmVcblx0XHQgKiBAbWVtYmVyT2YgbWl0dFxuXHRcdCAqL1xuXHRcdG9mZjogZnVuY3Rpb24gb2ZmKHR5cGUgICAgICAgICwgaGFuZGxlciAgICAgICAgICAgICAgKSB7XG5cdFx0XHRpZiAoYWxsW3R5cGVdKSB7XG5cdFx0XHRcdGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBJbnZva2UgYWxsIGhhbmRsZXJzIGZvciB0aGUgZ2l2ZW4gdHlwZS5cblx0XHQgKiBJZiBwcmVzZW50LCBgXCIqXCJgIGhhbmRsZXJzIGFyZSBpbnZva2VkIGFmdGVyIHR5cGUtbWF0Y2hlZCBoYW5kbGVycy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlICBUaGUgZXZlbnQgdHlwZSB0byBpbnZva2Vcblx0XHQgKiBAcGFyYW0ge0FueX0gW2V2dF0gIEFueSB2YWx1ZSAob2JqZWN0IGlzIHJlY29tbWVuZGVkIGFuZCBwb3dlcmZ1bCksIHBhc3NlZCB0byBlYWNoIGhhbmRsZXJcblx0XHQgKiBAbWVtYmVyb2YgbWl0dFxuXHRcdCAqL1xuXHRcdGVtaXQ6IGZ1bmN0aW9uIGVtaXQodHlwZSAgICAgICAgLCBldnQgICAgICkge1xuXHRcdFx0KGFsbFt0eXBlXSB8fCBbXSkubWFwKGZ1bmN0aW9uIChoYW5kbGVyKSB7IGhhbmRsZXIoZXZ0KTsgfSk7XG5cdFx0XHQoYWxsWycqJ10gfHwgW10pLm1hcChmdW5jdGlvbiAoaGFuZGxlcikgeyBoYW5kbGVyKHR5cGUsIGV2dCk7IH0pO1xuXHRcdH1cblx0fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWl0dDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1pdHQuZXMuanMubWFwXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvbWl0dC9kaXN0L21pdHQuZXMuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy9pbmRleC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgY29uZmlnIGZyb20gJ2NvbmZpZydcbmltcG9ydCAnLi9zdHlsZS5zY3NzJ1xuaW1wb3J0IHsgdGFiU3RvcmUgfSBmcm9tICcjL3N0b3JlcydcbmltcG9ydCBoaXN0b3J5IGZyb20gJyMvaGlzdG9yeSdcbmltcG9ydCB7IGhTY3JvbGwsIGlzUG9zdFBhZ2UgfSBmcm9tICcjL3V0aWxzJ1xuXG4kKGZ1bmN0aW9uKCkge1xuXG4gIGlmICghaXNQb3N0UGFnZSgpKSByZXR1cm5cblxuICBsZXQgJHBvc3RUYWJzID0gJCgnI0otcG9zdC10YWInKVxuICBjb25zdCAkc2Nyb2xsV3JhcCA9ICQoJy5KLXBvc3QtdGFiLXNjcm9sbGVyLXdyYXAnKVxuICBjb25zdCBuZFNjcm9sbFdyYXAgPSAkc2Nyb2xsV3JhcC5nZXQoMClcbiAgY29uc3QgJGhvbWUgPSAkKCcuSi1ob21lLWVudHJ5JylcbiAgY29uc3QgaG9tZVdpZHRoID0gJGhvbWUub3V0ZXJXaWR0aCgpXG5cbiAgZW1pdHRlci5vbignYWRkLXBvc3QtdGFiJywgcG9zdCA9PiB7XG4gICAgY29uc3QgdGFicyA9IHRhYlN0b3JlLmdldFRhYnMoKVxuICAgIGlmICghdGFicy5maWx0ZXIodGFiID0+IHRhYi5pZCA9PT0gcG9zdC5pZCkubGVuZ3RoKSB7XG4gICAgICB0YWJzLnB1c2goeyAuLi5wb3N0IH0pXG5cbiAgICAgIHRhYlN0b3JlLnNldFRhYnModGFicylcbiAgICB9XG5cbiAgICBlbWl0dGVyLmVtaXQoJ3RhYi1yZWZyZXNoJywgeyAuLi5wb3N0IH0pXG4gIH0pXG5cbiAgZW1pdHRlci5vbigndGFiLXJlZnJlc2gnLCAoYWN0aXZlID0ge30pID0+IHtcbiAgICBjb25zdCBhY3RpdmVJZCA9IGFjdGl2ZS5pZFxuICAgIGNvbnN0IHRhYnMgPSB0YWJTdG9yZS5nZXRUYWJzKClcblxuICAgIGNvbnN0ICRhY3RpdmUgPSAkKCcjSi1wb3N0LXRhYicpXG4gICAgICAuaHRtbChcbiAgICAgICAgdGFic1xuICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICB0YWIgPT5cbiAgICAgICAgICAgICAgYDxkaXYgdGl0bGU9XCIke3RhYi50aXRsZX1cIiBjbGFzcz1cIkotdGFiLWl0ZW0gbGlnaHQgaG92ZXItb3BhY2l0eTEgZmxleC1pdGVtMCBzaW5nbGUtbGluZSBpdGVtICR7XG4gICAgICAgICAgICAgICAgYWN0aXZlSWQgPT09IHRhYi5pZCA/ICdhY3RpdmUnIDogJydcbiAgICAgICAgICAgICAgfVwiIGRhdGEtaWQ9XCIke3RhYi5pZH1cIj4ke3RhYi50aXRsZX08aSBjbGFzcz1cImNsb3NlIEotcG9zdC10YWItY2xvc2UgbGlnaHRlciBob3Zlci1vcGFjaXR5MVwiIGRhdGEtc2x1Zz1cIiR7dGFiLnNsdWd9XCI+PC9pPjwvZGl2PmBcbiAgICAgICAgICApXG4gICAgICAgICAgLmpvaW4oJycpXG4gICAgICApXG4gICAgICAuZmluZCgnLmFjdGl2ZScpXG5cbiAgICBoaXN0b3J5LnB1c2goYWN0aXZlLnVybCwgeyAuLi5hY3RpdmUgfSlcbiAgICB0YWJTdG9yZS5zZXRDdXJyZW50VGFiKHsgLi4uYWN0aXZlIH0pXG5cbiAgICBzY3JvbGwydmlldygkYWN0aXZlKVxuICB9KVxuXG4gICRwb3N0VGFic1xuICAgIC5vbignY2xpY2snLCAnLkotcG9zdC10YWItY2xvc2UnLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICB0YWJTdG9yZS5kZWxldGVUYWJJdGVtKFxuICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgLnBhcmVudCgnLkotdGFiLWl0ZW0nKVxuICAgICAgICAgIC5kYXRhKCdpZCcpXG4gICAgICApXG4gICAgfSlcbiAgICAub24oJ2NsaWNrJywgJy5KLXRhYi1pdGVtJywgZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCAkdGhpcyA9ICQodGhpcylcbiAgICAgIGlmICgkdGhpcy5pcygnLmFjdGl2ZScpKSByZXR1cm5cblxuICAgICAgY29uc3QgaWQgPSAkdGhpcy5kYXRhKCdpZCcpXG4gICAgICBjb25zdCBjdXJyZW50VGFiID0gdGFiU3RvcmUuZ2V0VGFicygpLmZpbHRlcih0YWIgPT4gdGFiLmlkID09PSBpZClbMF0gfHwge31cblxuICAgICAgJHRoaXNcbiAgICAgICAgLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgICAgICAuc2libGluZ3MoKVxuICAgICAgICAucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICB0YWJTdG9yZS5zZXRDdXJyZW50VGFiKGN1cnJlbnRUYWIpXG4gICAgICBoaXN0b3J5LnB1c2goY3VycmVudFRhYi51cmwsIHsgLi4uY3VycmVudFRhYiB9KVxuXG4gICAgICBzY3JvbGwydmlldygkdGhpcylcbiAgICB9KVxuXG4gIC8qKlxuICAgKiBzY3JvbGwgc2VsZWN0ZWQgdGFiIGl0ZW0gaW50byB2aWV3IGlmIGl0IGlzIG91dCBvZiB2aWV3XG4gICAqL1xuICBmdW5jdGlvbiBzY3JvbGwydmlldygkYWN0aXZlKSB7XG4gICAgLy8gd3JhcCBlbGVtZW50XG4gICAgY29uc3Qgd3JhcFdpZHRoID0gJHNjcm9sbFdyYXAud2lkdGgoKVxuICAgIGNvbnN0IHdyYXBTY3JvbGxMZWZ0ID0gJHNjcm9sbFdyYXAuc2Nyb2xsTGVmdCgpXG4gICAgY29uc3Qgd3JhcFJpZ2h0ID0gd3JhcFdpZHRoICsgd3JhcFNjcm9sbExlZnRcbiAgICBjb25zdCB0aHJlc2hvbGQgPSAxMFxuXG4gICAgLy8gYWN0aXZlIGVsZW1lbnRcbiAgICBjb25zdCBuZEFjdGl2ZSA9ICRhY3RpdmUuZ2V0KDApXG4gICAgY29uc3QgYWN0aXZlV2lkdGggPSAkYWN0aXZlLm91dGVyV2lkdGgoKVxuICAgIGNvbnN0IGFjdGl2ZUxlZnQgPSBuZEFjdGl2ZS5vZmZzZXRMZWZ0XG4gICAgY29uc3QgYWN0aXZlUmlnaHQgPSBhY3RpdmVMZWZ0ICsgYWN0aXZlV2lkdGhcbiAgICBpZiAoYWN0aXZlUmlnaHQgPiB3cmFwV2lkdGggKyB3cmFwU2Nyb2xsTGVmdCkge1xuICAgICAgbmRTY3JvbGxXcmFwLnNjcm9sbExlZnQgPSBhY3RpdmVSaWdodCAtIHdyYXBXaWR0aCAtIGhvbWVXaWR0aCAtIHRocmVzaG9sZFxuICAgIH1cbiAgICBpZiAoYWN0aXZlTGVmdCA8PSB3cmFwU2Nyb2xsTGVmdCkge1xuICAgICAgbmRTY3JvbGxXcmFwLnNjcm9sbExlZnQgPSBhY3RpdmVMZWZ0IC0gaG9tZVdpZHRoIC0gdGhyZXNob2xkXG4gICAgfVxuICB9XG5cbiAgaFNjcm9sbCgkc2Nyb2xsV3JhcC5nZXQoMCkpXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFydGlhbHMvcG9zdC10YWIvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcInRoZW1lc1wiOltcImFieXNzLWNvbG9yXCIsXCJkYXJrLWRlZmF1bHRcIixcInJlZFwiXX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3RoZW1lcy9yZXN1bHQuanNvblxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhcnRpYWxzL3Bvc3QtdGFiL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCBjb25maWcgZnJvbSAnY29uZmlnJ1xuY29uc3QgbHMgPSBsb2NhbFN0b3JhZ2VcbmNvbnN0IGxzVGhlbWVLZXkgPSBjb25maWcubHNUaGVtZUtleVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIHRoZW1lID0gbHMuZ2V0SXRlbShsc1RoZW1lS2V5KSB8fCBjb25maWcuZGVmYXVsdFRoZW1lXG4gIFxuICBzZXRUaGVtZSAodGhlbWUpIHtcbiAgICB0aGlzLnRoZW1lID0gdGhlbWVcbiAgICBscy5zZXRJdGVtKGxzVGhlbWVLZXksIHRoZW1lKVxuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3Jlcy9UaGVtZVN0b3JlLmpzIiwiaW1wb3J0IGNvbmZpZyBmcm9tICdjb25maWcnXG5cbmNvbnN0IGxzID0gbG9jYWxTdG9yYWdlXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY3VycmVudFRhYiA9IG51bGxcblxuICBnZXRUYWJzKCkge1xuICAgIGxldCB0YWJzID0gbHMuZ2V0SXRlbShjb25maWcubHNQb3N0VGFiS2V5KSB8fCAnJ1xuXG4gICAgcmV0dXJuIHRhYnMgPyB0YWJzLnNwbGl0KCcsJykubWFwKHRhYiA9PiB7XG4gICAgICBjb25zdCBbaWQsIHRpdGxlLCB1cmwsIHNsdWddID0gdGFiLnNwbGl0KCc6JylcblxuICAgICAgcmV0dXJuIHsgaWQsIHRpdGxlLCB1cmwsIHNsdWcgfVxuICAgIH0pIDogW11cbiAgfVxuXG4gIHNldFRhYnModGFicykge1xuICAgIGxzLnNldEl0ZW0oXG4gICAgICBjb25maWcubHNQb3N0VGFiS2V5LFxuICAgICAgdGFicy5sZW5ndGggPyB0YWJzLm1hcChcbiAgICAgICAgdGFiID0+IGAke3RhYi5pZH06JHt0YWIudGl0bGV9OiR7dGFiLnVybH06JHt0YWIuc2x1Z31gXG4gICAgICApLmpvaW4oJywnKSA6ICcnXG4gICAgKVxuICB9XG5cbiAgc2V0Q3VycmVudFRhYih0YWIpIHtcbiAgICB0aGlzLmN1cnJlbnRUYWIgPSB0YWJcbiAgfVxuXG4gIGRlbGV0ZVRhYkl0ZW0oaWQpIHtcbiAgICBsZXQgdGFicyA9IHRoaXMuZ2V0VGFicygpXG4gICAgbGV0IG5leHRUYWIgPSBudWxsXG4gICAgY29uc3QgaXNDdXJyZW50VGFiID0gaWQgPT09IHRoaXMuY3VycmVudFRhYi5pZFxuXG4gICAgY29uc3QgZGVsZXRlZElkeCA9IHRhYnMuZmluZEluZGV4KHRhYiA9PiB0YWIuaWQgPT09IGlkKVxuICAgIHRhYnMgPSB0YWJzLmZpbHRlcigodGFiLCBpZHgpID0+IHRhYi5pZCAhPT0gaWQpXG5cbiAgICB0aGlzLnNldFRhYnModGFicylcblxuICAgIGlmICh0YWJzLmxlbmd0aCkge1xuICAgICAgaWYgKGlzQ3VycmVudFRhYikge1xuICAgICAgICBuZXh0VGFiID0gZGVsZXRlZElkeCA9PT0gMCA/IHRhYnNbMF0gOiB0YWJzW2RlbGV0ZWRJZHggLSAxXVxuICAgICAgfVxuXG4gICAgICBlbWl0dGVyLmVtaXQoJ3RhYi1yZWZyZXNoJywgbmV4dFRhYiB8fCB0aGlzLmN1cnJlbnRUYWIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2F0aW9uLmhyZWYgPSAnLydcbiAgICB9XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmVzL1RhYlN0b3JlLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBmZXRjaFBvc3QoaWQpIHtcbiAgICByZXR1cm4gJC5nZXQoZ2hvc3QudXJsLmFwaShgcG9zdHMvJHtpZH1gKSwge1xuICAgICAgaW5jbHVkZTogJ2F1dGhvcidcbiAgICB9KS5mYWlsKGZ1bmN0aW9uKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgIH0pXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZXMvUG9zdFN0b3JlLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX0xvY2F0aW9uVXRpbHMgPSByZXF1aXJlKCcuL0xvY2F0aW9uVXRpbHMnKTtcblxudmFyIF9QYXRoVXRpbHMgPSByZXF1aXJlKCcuL1BhdGhVdGlscycpO1xuXG52YXIgX2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyID0gcmVxdWlyZSgnLi9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlcicpO1xuXG52YXIgX2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyKTtcblxudmFyIF9ET01VdGlscyA9IHJlcXVpcmUoJy4vRE9NVXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFBvcFN0YXRlRXZlbnQgPSAncG9wc3RhdGUnO1xudmFyIEhhc2hDaGFuZ2VFdmVudCA9ICdoYXNoY2hhbmdlJztcblxudmFyIGdldEhpc3RvcnlTdGF0ZSA9IGZ1bmN0aW9uIGdldEhpc3RvcnlTdGF0ZSgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gd2luZG93Lmhpc3Rvcnkuc3RhdGUgfHwge307XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBJRSAxMSBzb21ldGltZXMgdGhyb3dzIHdoZW4gYWNjZXNzaW5nIHdpbmRvdy5oaXN0b3J5LnN0YXRlXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9SZWFjdFRyYWluaW5nL2hpc3RvcnkvcHVsbC8yODlcbiAgICByZXR1cm4ge307XG4gIH1cbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhpc3Rvcnkgb2JqZWN0IHRoYXQgdXNlcyB0aGUgSFRNTDUgaGlzdG9yeSBBUEkgaW5jbHVkaW5nXG4gKiBwdXNoU3RhdGUsIHJlcGxhY2VTdGF0ZSwgYW5kIHRoZSBwb3BzdGF0ZSBldmVudC5cbiAqL1xudmFyIGNyZWF0ZUJyb3dzZXJIaXN0b3J5ID0gZnVuY3Rpb24gY3JlYXRlQnJvd3Nlckhpc3RvcnkoKSB7XG4gIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKF9ET01VdGlscy5jYW5Vc2VET00sICdCcm93c2VyIGhpc3RvcnkgbmVlZHMgYSBET00nKTtcblxuICB2YXIgZ2xvYmFsSGlzdG9yeSA9IHdpbmRvdy5oaXN0b3J5O1xuICB2YXIgY2FuVXNlSGlzdG9yeSA9ICgwLCBfRE9NVXRpbHMuc3VwcG9ydHNIaXN0b3J5KSgpO1xuICB2YXIgbmVlZHNIYXNoQ2hhbmdlTGlzdGVuZXIgPSAhKDAsIF9ET01VdGlscy5zdXBwb3J0c1BvcFN0YXRlT25IYXNoQ2hhbmdlKSgpO1xuXG4gIHZhciBfcHJvcHMkZm9yY2VSZWZyZXNoID0gcHJvcHMuZm9yY2VSZWZyZXNoLFxuICAgICAgZm9yY2VSZWZyZXNoID0gX3Byb3BzJGZvcmNlUmVmcmVzaCA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfcHJvcHMkZm9yY2VSZWZyZXNoLFxuICAgICAgX3Byb3BzJGdldFVzZXJDb25maXJtID0gcHJvcHMuZ2V0VXNlckNvbmZpcm1hdGlvbixcbiAgICAgIGdldFVzZXJDb25maXJtYXRpb24gPSBfcHJvcHMkZ2V0VXNlckNvbmZpcm0gPT09IHVuZGVmaW5lZCA/IF9ET01VdGlscy5nZXRDb25maXJtYXRpb24gOiBfcHJvcHMkZ2V0VXNlckNvbmZpcm0sXG4gICAgICBfcHJvcHMka2V5TGVuZ3RoID0gcHJvcHMua2V5TGVuZ3RoLFxuICAgICAga2V5TGVuZ3RoID0gX3Byb3BzJGtleUxlbmd0aCA9PT0gdW5kZWZpbmVkID8gNiA6IF9wcm9wcyRrZXlMZW5ndGg7XG5cbiAgdmFyIGJhc2VuYW1lID0gcHJvcHMuYmFzZW5hbWUgPyAoMCwgX1BhdGhVdGlscy5zdHJpcFRyYWlsaW5nU2xhc2gpKCgwLCBfUGF0aFV0aWxzLmFkZExlYWRpbmdTbGFzaCkocHJvcHMuYmFzZW5hbWUpKSA6ICcnO1xuXG4gIHZhciBnZXRET01Mb2NhdGlvbiA9IGZ1bmN0aW9uIGdldERPTUxvY2F0aW9uKGhpc3RvcnlTdGF0ZSkge1xuICAgIHZhciBfcmVmID0gaGlzdG9yeVN0YXRlIHx8IHt9LFxuICAgICAgICBrZXkgPSBfcmVmLmtleSxcbiAgICAgICAgc3RhdGUgPSBfcmVmLnN0YXRlO1xuXG4gICAgdmFyIF93aW5kb3ckbG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24sXG4gICAgICAgIHBhdGhuYW1lID0gX3dpbmRvdyRsb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgICAgc2VhcmNoID0gX3dpbmRvdyRsb2NhdGlvbi5zZWFyY2gsXG4gICAgICAgIGhhc2ggPSBfd2luZG93JGxvY2F0aW9uLmhhc2g7XG5cblxuICAgIHZhciBwYXRoID0gcGF0aG5hbWUgKyBzZWFyY2ggKyBoYXNoO1xuXG4gICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KSghYmFzZW5hbWUgfHwgKDAsIF9QYXRoVXRpbHMuaGFzQmFzZW5hbWUpKHBhdGgsIGJhc2VuYW1lKSwgJ1lvdSBhcmUgYXR0ZW1wdGluZyB0byB1c2UgYSBiYXNlbmFtZSBvbiBhIHBhZ2Ugd2hvc2UgVVJMIHBhdGggZG9lcyBub3QgYmVnaW4gJyArICd3aXRoIHRoZSBiYXNlbmFtZS4gRXhwZWN0ZWQgcGF0aCBcIicgKyBwYXRoICsgJ1wiIHRvIGJlZ2luIHdpdGggXCInICsgYmFzZW5hbWUgKyAnXCIuJyk7XG5cbiAgICBpZiAoYmFzZW5hbWUpIHBhdGggPSAoMCwgX1BhdGhVdGlscy5zdHJpcEJhc2VuYW1lKShwYXRoLCBiYXNlbmFtZSk7XG5cbiAgICByZXR1cm4gKDAsIF9Mb2NhdGlvblV0aWxzLmNyZWF0ZUxvY2F0aW9uKShwYXRoLCBzdGF0ZSwga2V5KTtcbiAgfTtcblxuICB2YXIgY3JlYXRlS2V5ID0gZnVuY3Rpb24gY3JlYXRlS2V5KCkge1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwga2V5TGVuZ3RoKTtcbiAgfTtcblxuICB2YXIgdHJhbnNpdGlvbk1hbmFnZXIgPSAoMCwgX2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyMi5kZWZhdWx0KSgpO1xuXG4gIHZhciBzZXRTdGF0ZSA9IGZ1bmN0aW9uIHNldFN0YXRlKG5leHRTdGF0ZSkge1xuICAgIF9leHRlbmRzKGhpc3RvcnksIG5leHRTdGF0ZSk7XG5cbiAgICBoaXN0b3J5Lmxlbmd0aCA9IGdsb2JhbEhpc3RvcnkubGVuZ3RoO1xuXG4gICAgdHJhbnNpdGlvbk1hbmFnZXIubm90aWZ5TGlzdGVuZXJzKGhpc3RvcnkubG9jYXRpb24sIGhpc3RvcnkuYWN0aW9uKTtcbiAgfTtcblxuICB2YXIgaGFuZGxlUG9wU3RhdGUgPSBmdW5jdGlvbiBoYW5kbGVQb3BTdGF0ZShldmVudCkge1xuICAgIC8vIElnbm9yZSBleHRyYW5lb3VzIHBvcHN0YXRlIGV2ZW50cyBpbiBXZWJLaXQuXG4gICAgaWYgKCgwLCBfRE9NVXRpbHMuaXNFeHRyYW5lb3VzUG9wc3RhdGVFdmVudCkoZXZlbnQpKSByZXR1cm47XG5cbiAgICBoYW5kbGVQb3AoZ2V0RE9NTG9jYXRpb24oZXZlbnQuc3RhdGUpKTtcbiAgfTtcblxuICB2YXIgaGFuZGxlSGFzaENoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUhhc2hDaGFuZ2UoKSB7XG4gICAgaGFuZGxlUG9wKGdldERPTUxvY2F0aW9uKGdldEhpc3RvcnlTdGF0ZSgpKSk7XG4gIH07XG5cbiAgdmFyIGZvcmNlTmV4dFBvcCA9IGZhbHNlO1xuXG4gIHZhciBoYW5kbGVQb3AgPSBmdW5jdGlvbiBoYW5kbGVQb3AobG9jYXRpb24pIHtcbiAgICBpZiAoZm9yY2VOZXh0UG9wKSB7XG4gICAgICBmb3JjZU5leHRQb3AgPSBmYWxzZTtcbiAgICAgIHNldFN0YXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhY3Rpb24gPSAnUE9QJztcblxuICAgICAgdHJhbnNpdGlvbk1hbmFnZXIuY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgYWN0aW9uLCBnZXRVc2VyQ29uZmlybWF0aW9uLCBmdW5jdGlvbiAob2spIHtcbiAgICAgICAgaWYgKG9rKSB7XG4gICAgICAgICAgc2V0U3RhdGUoeyBhY3Rpb246IGFjdGlvbiwgbG9jYXRpb246IGxvY2F0aW9uIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldmVydFBvcChsb2NhdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICB2YXIgcmV2ZXJ0UG9wID0gZnVuY3Rpb24gcmV2ZXJ0UG9wKGZyb21Mb2NhdGlvbikge1xuICAgIHZhciB0b0xvY2F0aW9uID0gaGlzdG9yeS5sb2NhdGlvbjtcblxuICAgIC8vIFRPRE86IFdlIGNvdWxkIHByb2JhYmx5IG1ha2UgdGhpcyBtb3JlIHJlbGlhYmxlIGJ5XG4gICAgLy8ga2VlcGluZyBhIGxpc3Qgb2Yga2V5cyB3ZSd2ZSBzZWVuIGluIHNlc3Npb25TdG9yYWdlLlxuICAgIC8vIEluc3RlYWQsIHdlIGp1c3QgZGVmYXVsdCB0byAwIGZvciBrZXlzIHdlIGRvbid0IGtub3cuXG5cbiAgICB2YXIgdG9JbmRleCA9IGFsbEtleXMuaW5kZXhPZih0b0xvY2F0aW9uLmtleSk7XG5cbiAgICBpZiAodG9JbmRleCA9PT0gLTEpIHRvSW5kZXggPSAwO1xuXG4gICAgdmFyIGZyb21JbmRleCA9IGFsbEtleXMuaW5kZXhPZihmcm9tTG9jYXRpb24ua2V5KTtcblxuICAgIGlmIChmcm9tSW5kZXggPT09IC0xKSBmcm9tSW5kZXggPSAwO1xuXG4gICAgdmFyIGRlbHRhID0gdG9JbmRleCAtIGZyb21JbmRleDtcblxuICAgIGlmIChkZWx0YSkge1xuICAgICAgZm9yY2VOZXh0UG9wID0gdHJ1ZTtcbiAgICAgIGdvKGRlbHRhKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGluaXRpYWxMb2NhdGlvbiA9IGdldERPTUxvY2F0aW9uKGdldEhpc3RvcnlTdGF0ZSgpKTtcbiAgdmFyIGFsbEtleXMgPSBbaW5pdGlhbExvY2F0aW9uLmtleV07XG5cbiAgLy8gUHVibGljIGludGVyZmFjZVxuXG4gIHZhciBjcmVhdGVIcmVmID0gZnVuY3Rpb24gY3JlYXRlSHJlZihsb2NhdGlvbikge1xuICAgIHJldHVybiBiYXNlbmFtZSArICgwLCBfUGF0aFV0aWxzLmNyZWF0ZVBhdGgpKGxvY2F0aW9uKTtcbiAgfTtcblxuICB2YXIgcHVzaCA9IGZ1bmN0aW9uIHB1c2gocGF0aCwgc3RhdGUpIHtcbiAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKCEoKHR5cGVvZiBwYXRoID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihwYXRoKSkgPT09ICdvYmplY3QnICYmIHBhdGguc3RhdGUgIT09IHVuZGVmaW5lZCAmJiBzdGF0ZSAhPT0gdW5kZWZpbmVkKSwgJ1lvdSBzaG91bGQgYXZvaWQgcHJvdmlkaW5nIGEgMm5kIHN0YXRlIGFyZ3VtZW50IHRvIHB1c2ggd2hlbiB0aGUgMXN0ICcgKyAnYXJndW1lbnQgaXMgYSBsb2NhdGlvbi1saWtlIG9iamVjdCB0aGF0IGFscmVhZHkgaGFzIHN0YXRlOyBpdCBpcyBpZ25vcmVkJyk7XG5cbiAgICB2YXIgYWN0aW9uID0gJ1BVU0gnO1xuICAgIHZhciBsb2NhdGlvbiA9ICgwLCBfTG9jYXRpb25VdGlscy5jcmVhdGVMb2NhdGlvbikocGF0aCwgc3RhdGUsIGNyZWF0ZUtleSgpLCBoaXN0b3J5LmxvY2F0aW9uKTtcblxuICAgIHRyYW5zaXRpb25NYW5hZ2VyLmNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICBpZiAoIW9rKSByZXR1cm47XG5cbiAgICAgIHZhciBocmVmID0gY3JlYXRlSHJlZihsb2NhdGlvbik7XG4gICAgICB2YXIga2V5ID0gbG9jYXRpb24ua2V5LFxuICAgICAgICAgIHN0YXRlID0gbG9jYXRpb24uc3RhdGU7XG5cblxuICAgICAgaWYgKGNhblVzZUhpc3RvcnkpIHtcbiAgICAgICAgZ2xvYmFsSGlzdG9yeS5wdXNoU3RhdGUoeyBrZXk6IGtleSwgc3RhdGU6IHN0YXRlIH0sIG51bGwsIGhyZWYpO1xuXG4gICAgICAgIGlmIChmb3JjZVJlZnJlc2gpIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGhyZWY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHByZXZJbmRleCA9IGFsbEtleXMuaW5kZXhPZihoaXN0b3J5LmxvY2F0aW9uLmtleSk7XG4gICAgICAgICAgdmFyIG5leHRLZXlzID0gYWxsS2V5cy5zbGljZSgwLCBwcmV2SW5kZXggPT09IC0xID8gMCA6IHByZXZJbmRleCArIDEpO1xuXG4gICAgICAgICAgbmV4dEtleXMucHVzaChsb2NhdGlvbi5rZXkpO1xuICAgICAgICAgIGFsbEtleXMgPSBuZXh0S2V5cztcblxuICAgICAgICAgIHNldFN0YXRlKHsgYWN0aW9uOiBhY3Rpb24sIGxvY2F0aW9uOiBsb2NhdGlvbiB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KShzdGF0ZSA9PT0gdW5kZWZpbmVkLCAnQnJvd3NlciBoaXN0b3J5IGNhbm5vdCBwdXNoIHN0YXRlIGluIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgSFRNTDUgaGlzdG9yeScpO1xuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gaHJlZjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICB2YXIgcmVwbGFjZSA9IGZ1bmN0aW9uIHJlcGxhY2UocGF0aCwgc3RhdGUpIHtcbiAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKCEoKHR5cGVvZiBwYXRoID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihwYXRoKSkgPT09ICdvYmplY3QnICYmIHBhdGguc3RhdGUgIT09IHVuZGVmaW5lZCAmJiBzdGF0ZSAhPT0gdW5kZWZpbmVkKSwgJ1lvdSBzaG91bGQgYXZvaWQgcHJvdmlkaW5nIGEgMm5kIHN0YXRlIGFyZ3VtZW50IHRvIHJlcGxhY2Ugd2hlbiB0aGUgMXN0ICcgKyAnYXJndW1lbnQgaXMgYSBsb2NhdGlvbi1saWtlIG9iamVjdCB0aGF0IGFscmVhZHkgaGFzIHN0YXRlOyBpdCBpcyBpZ25vcmVkJyk7XG5cbiAgICB2YXIgYWN0aW9uID0gJ1JFUExBQ0UnO1xuICAgIHZhciBsb2NhdGlvbiA9ICgwLCBfTG9jYXRpb25VdGlscy5jcmVhdGVMb2NhdGlvbikocGF0aCwgc3RhdGUsIGNyZWF0ZUtleSgpLCBoaXN0b3J5LmxvY2F0aW9uKTtcblxuICAgIHRyYW5zaXRpb25NYW5hZ2VyLmNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICBpZiAoIW9rKSByZXR1cm47XG5cbiAgICAgIHZhciBocmVmID0gY3JlYXRlSHJlZihsb2NhdGlvbik7XG4gICAgICB2YXIga2V5ID0gbG9jYXRpb24ua2V5LFxuICAgICAgICAgIHN0YXRlID0gbG9jYXRpb24uc3RhdGU7XG5cblxuICAgICAgaWYgKGNhblVzZUhpc3RvcnkpIHtcbiAgICAgICAgZ2xvYmFsSGlzdG9yeS5yZXBsYWNlU3RhdGUoeyBrZXk6IGtleSwgc3RhdGU6IHN0YXRlIH0sIG51bGwsIGhyZWYpO1xuXG4gICAgICAgIGlmIChmb3JjZVJlZnJlc2gpIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShocmVmKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgcHJldkluZGV4ID0gYWxsS2V5cy5pbmRleE9mKGhpc3RvcnkubG9jYXRpb24ua2V5KTtcblxuICAgICAgICAgIGlmIChwcmV2SW5kZXggIT09IC0xKSBhbGxLZXlzW3ByZXZJbmRleF0gPSBsb2NhdGlvbi5rZXk7XG5cbiAgICAgICAgICBzZXRTdGF0ZSh7IGFjdGlvbjogYWN0aW9uLCBsb2NhdGlvbjogbG9jYXRpb24gfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICgwLCBfd2FybmluZzIuZGVmYXVsdCkoc3RhdGUgPT09IHVuZGVmaW5lZCwgJ0Jyb3dzZXIgaGlzdG9yeSBjYW5ub3QgcmVwbGFjZSBzdGF0ZSBpbiBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IEhUTUw1IGhpc3RvcnknKTtcblxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShocmVmKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICB2YXIgZ28gPSBmdW5jdGlvbiBnbyhuKSB7XG4gICAgZ2xvYmFsSGlzdG9yeS5nbyhuKTtcbiAgfTtcblxuICB2YXIgZ29CYWNrID0gZnVuY3Rpb24gZ29CYWNrKCkge1xuICAgIHJldHVybiBnbygtMSk7XG4gIH07XG5cbiAgdmFyIGdvRm9yd2FyZCA9IGZ1bmN0aW9uIGdvRm9yd2FyZCgpIHtcbiAgICByZXR1cm4gZ28oMSk7XG4gIH07XG5cbiAgdmFyIGxpc3RlbmVyQ291bnQgPSAwO1xuXG4gIHZhciBjaGVja0RPTUxpc3RlbmVycyA9IGZ1bmN0aW9uIGNoZWNrRE9NTGlzdGVuZXJzKGRlbHRhKSB7XG4gICAgbGlzdGVuZXJDb3VudCArPSBkZWx0YTtcblxuICAgIGlmIChsaXN0ZW5lckNvdW50ID09PSAxKSB7XG4gICAgICAoMCwgX0RPTVV0aWxzLmFkZEV2ZW50TGlzdGVuZXIpKHdpbmRvdywgUG9wU3RhdGVFdmVudCwgaGFuZGxlUG9wU3RhdGUpO1xuXG4gICAgICBpZiAobmVlZHNIYXNoQ2hhbmdlTGlzdGVuZXIpICgwLCBfRE9NVXRpbHMuYWRkRXZlbnRMaXN0ZW5lcikod2luZG93LCBIYXNoQ2hhbmdlRXZlbnQsIGhhbmRsZUhhc2hDaGFuZ2UpO1xuICAgIH0gZWxzZSBpZiAobGlzdGVuZXJDb3VudCA9PT0gMCkge1xuICAgICAgKDAsIF9ET01VdGlscy5yZW1vdmVFdmVudExpc3RlbmVyKSh3aW5kb3csIFBvcFN0YXRlRXZlbnQsIGhhbmRsZVBvcFN0YXRlKTtcblxuICAgICAgaWYgKG5lZWRzSGFzaENoYW5nZUxpc3RlbmVyKSAoMCwgX0RPTVV0aWxzLnJlbW92ZUV2ZW50TGlzdGVuZXIpKHdpbmRvdywgSGFzaENoYW5nZUV2ZW50LCBoYW5kbGVIYXNoQ2hhbmdlKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGlzQmxvY2tlZCA9IGZhbHNlO1xuXG4gIHZhciBibG9jayA9IGZ1bmN0aW9uIGJsb2NrKCkge1xuICAgIHZhciBwcm9tcHQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGZhbHNlO1xuXG4gICAgdmFyIHVuYmxvY2sgPSB0cmFuc2l0aW9uTWFuYWdlci5zZXRQcm9tcHQocHJvbXB0KTtcblxuICAgIGlmICghaXNCbG9ja2VkKSB7XG4gICAgICBjaGVja0RPTUxpc3RlbmVycygxKTtcbiAgICAgIGlzQmxvY2tlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChpc0Jsb2NrZWQpIHtcbiAgICAgICAgaXNCbG9ja2VkID0gZmFsc2U7XG4gICAgICAgIGNoZWNrRE9NTGlzdGVuZXJzKC0xKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHVuYmxvY2soKTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBsaXN0ZW4gPSBmdW5jdGlvbiBsaXN0ZW4obGlzdGVuZXIpIHtcbiAgICB2YXIgdW5saXN0ZW4gPSB0cmFuc2l0aW9uTWFuYWdlci5hcHBlbmRMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgY2hlY2tET01MaXN0ZW5lcnMoMSk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgY2hlY2tET01MaXN0ZW5lcnMoLTEpO1xuICAgICAgdW5saXN0ZW4oKTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBoaXN0b3J5ID0ge1xuICAgIGxlbmd0aDogZ2xvYmFsSGlzdG9yeS5sZW5ndGgsXG4gICAgYWN0aW9uOiAnUE9QJyxcbiAgICBsb2NhdGlvbjogaW5pdGlhbExvY2F0aW9uLFxuICAgIGNyZWF0ZUhyZWY6IGNyZWF0ZUhyZWYsXG4gICAgcHVzaDogcHVzaCxcbiAgICByZXBsYWNlOiByZXBsYWNlLFxuICAgIGdvOiBnbyxcbiAgICBnb0JhY2s6IGdvQmFjayxcbiAgICBnb0ZvcndhcmQ6IGdvRm9yd2FyZCxcbiAgICBibG9jazogYmxvY2ssXG4gICAgbGlzdGVuOiBsaXN0ZW5cbiAgfTtcblxuICByZXR1cm4gaGlzdG9yeTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZUJyb3dzZXJIaXN0b3J5O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9oaXN0b3J5L2NyZWF0ZUJyb3dzZXJIaXN0b3J5LmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgaW52YXJpYW50ID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICAnTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArXG4gICAgICAgICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLidcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSB7IHJldHVybiBhcmdzW2FyZ0luZGV4KytdOyB9KVxuICAgICAgKTtcbiAgICAgIGVycm9yLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9pbnZhcmlhbnQvYnJvd3Nlci5qcyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMubG9jYXRpb25zQXJlRXF1YWwgPSBleHBvcnRzLmNyZWF0ZUxvY2F0aW9uID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3Jlc29sdmVQYXRobmFtZSA9IHJlcXVpcmUoJ3Jlc29sdmUtcGF0aG5hbWUnKTtcblxudmFyIF9yZXNvbHZlUGF0aG5hbWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVzb2x2ZVBhdGhuYW1lKTtcblxudmFyIF92YWx1ZUVxdWFsID0gcmVxdWlyZSgndmFsdWUtZXF1YWwnKTtcblxudmFyIF92YWx1ZUVxdWFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZhbHVlRXF1YWwpO1xuXG52YXIgX1BhdGhVdGlscyA9IHJlcXVpcmUoJy4vUGF0aFV0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBjcmVhdGVMb2NhdGlvbiA9IGV4cG9ydHMuY3JlYXRlTG9jYXRpb24gPSBmdW5jdGlvbiBjcmVhdGVMb2NhdGlvbihwYXRoLCBzdGF0ZSwga2V5LCBjdXJyZW50TG9jYXRpb24pIHtcbiAgdmFyIGxvY2F0aW9uID0gdm9pZCAwO1xuICBpZiAodHlwZW9mIHBhdGggPT09ICdzdHJpbmcnKSB7XG4gICAgLy8gVHdvLWFyZyBmb3JtOiBwdXNoKHBhdGgsIHN0YXRlKVxuICAgIGxvY2F0aW9uID0gKDAsIF9QYXRoVXRpbHMucGFyc2VQYXRoKShwYXRoKTtcbiAgICBsb2NhdGlvbi5zdGF0ZSA9IHN0YXRlO1xuICB9IGVsc2Uge1xuICAgIC8vIE9uZS1hcmcgZm9ybTogcHVzaChsb2NhdGlvbilcbiAgICBsb2NhdGlvbiA9IF9leHRlbmRzKHt9LCBwYXRoKTtcblxuICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZSA9PT0gdW5kZWZpbmVkKSBsb2NhdGlvbi5wYXRobmFtZSA9ICcnO1xuXG4gICAgaWYgKGxvY2F0aW9uLnNlYXJjaCkge1xuICAgICAgaWYgKGxvY2F0aW9uLnNlYXJjaC5jaGFyQXQoMCkgIT09ICc/JykgbG9jYXRpb24uc2VhcmNoID0gJz8nICsgbG9jYXRpb24uc2VhcmNoO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhdGlvbi5zZWFyY2ggPSAnJztcbiAgICB9XG5cbiAgICBpZiAobG9jYXRpb24uaGFzaCkge1xuICAgICAgaWYgKGxvY2F0aW9uLmhhc2guY2hhckF0KDApICE9PSAnIycpIGxvY2F0aW9uLmhhc2ggPSAnIycgKyBsb2NhdGlvbi5oYXNoO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhdGlvbi5oYXNoID0gJyc7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlICE9PSB1bmRlZmluZWQgJiYgbG9jYXRpb24uc3RhdGUgPT09IHVuZGVmaW5lZCkgbG9jYXRpb24uc3RhdGUgPSBzdGF0ZTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgbG9jYXRpb24ucGF0aG5hbWUgPSBkZWNvZGVVUkkobG9jYXRpb24ucGF0aG5hbWUpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaWYgKGUgaW5zdGFuY2VvZiBVUklFcnJvcikge1xuICAgICAgdGhyb3cgbmV3IFVSSUVycm9yKCdQYXRobmFtZSBcIicgKyBsb2NhdGlvbi5wYXRobmFtZSArICdcIiBjb3VsZCBub3QgYmUgZGVjb2RlZC4gJyArICdUaGlzIGlzIGxpa2VseSBjYXVzZWQgYnkgYW4gaW52YWxpZCBwZXJjZW50LWVuY29kaW5nLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChrZXkpIGxvY2F0aW9uLmtleSA9IGtleTtcblxuICBpZiAoY3VycmVudExvY2F0aW9uKSB7XG4gICAgLy8gUmVzb2x2ZSBpbmNvbXBsZXRlL3JlbGF0aXZlIHBhdGhuYW1lIHJlbGF0aXZlIHRvIGN1cnJlbnQgbG9jYXRpb24uXG4gICAgaWYgKCFsb2NhdGlvbi5wYXRobmFtZSkge1xuICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPSBjdXJyZW50TG9jYXRpb24ucGF0aG5hbWU7XG4gICAgfSBlbHNlIGlmIChsb2NhdGlvbi5wYXRobmFtZS5jaGFyQXQoMCkgIT09ICcvJykge1xuICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPSAoMCwgX3Jlc29sdmVQYXRobmFtZTIuZGVmYXVsdCkobG9jYXRpb24ucGF0aG5hbWUsIGN1cnJlbnRMb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIFdoZW4gdGhlcmUgaXMgbm8gcHJpb3IgbG9jYXRpb24gYW5kIHBhdGhuYW1lIGlzIGVtcHR5LCBzZXQgaXQgdG8gL1xuICAgIGlmICghbG9jYXRpb24ucGF0aG5hbWUpIHtcbiAgICAgIGxvY2F0aW9uLnBhdGhuYW1lID0gJy8nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBsb2NhdGlvbjtcbn07XG5cbnZhciBsb2NhdGlvbnNBcmVFcXVhbCA9IGV4cG9ydHMubG9jYXRpb25zQXJlRXF1YWwgPSBmdW5jdGlvbiBsb2NhdGlvbnNBcmVFcXVhbChhLCBiKSB7XG4gIHJldHVybiBhLnBhdGhuYW1lID09PSBiLnBhdGhuYW1lICYmIGEuc2VhcmNoID09PSBiLnNlYXJjaCAmJiBhLmhhc2ggPT09IGIuaGFzaCAmJiBhLmtleSA9PT0gYi5rZXkgJiYgKDAsIF92YWx1ZUVxdWFsMi5kZWZhdWx0KShhLnN0YXRlLCBiLnN0YXRlKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2hpc3RvcnkvTG9jYXRpb25VdGlscy5qcyIsImZ1bmN0aW9uIGlzQWJzb2x1dGUocGF0aG5hbWUpIHtcbiAgcmV0dXJuIHBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nO1xufVxuXG4vLyBBYm91dCAxLjV4IGZhc3RlciB0aGFuIHRoZSB0d28tYXJnIHZlcnNpb24gb2YgQXJyYXkjc3BsaWNlKClcbmZ1bmN0aW9uIHNwbGljZU9uZShsaXN0LCBpbmRleCkge1xuICBmb3IgKHZhciBpID0gaW5kZXgsIGsgPSBpICsgMSwgbiA9IGxpc3QubGVuZ3RoOyBrIDwgbjsgaSArPSAxLCBrICs9IDEpIHtcbiAgICBsaXN0W2ldID0gbGlzdFtrXTtcbiAgfVxuXG4gIGxpc3QucG9wKCk7XG59XG5cbi8vIFRoaXMgaW1wbGVtZW50YXRpb24gaXMgYmFzZWQgaGVhdmlseSBvbiBub2RlJ3MgdXJsLnBhcnNlXG5mdW5jdGlvbiByZXNvbHZlUGF0aG5hbWUodG8pIHtcbiAgdmFyIGZyb20gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICcnO1xuXG4gIHZhciB0b1BhcnRzID0gdG8gJiYgdG8uc3BsaXQoJy8nKSB8fCBbXTtcbiAgdmFyIGZyb21QYXJ0cyA9IGZyb20gJiYgZnJvbS5zcGxpdCgnLycpIHx8IFtdO1xuXG4gIHZhciBpc1RvQWJzID0gdG8gJiYgaXNBYnNvbHV0ZSh0byk7XG4gIHZhciBpc0Zyb21BYnMgPSBmcm9tICYmIGlzQWJzb2x1dGUoZnJvbSk7XG4gIHZhciBtdXN0RW5kQWJzID0gaXNUb0FicyB8fCBpc0Zyb21BYnM7XG5cbiAgaWYgKHRvICYmIGlzQWJzb2x1dGUodG8pKSB7XG4gICAgLy8gdG8gaXMgYWJzb2x1dGVcbiAgICBmcm9tUGFydHMgPSB0b1BhcnRzO1xuICB9IGVsc2UgaWYgKHRvUGFydHMubGVuZ3RoKSB7XG4gICAgLy8gdG8gaXMgcmVsYXRpdmUsIGRyb3AgdGhlIGZpbGVuYW1lXG4gICAgZnJvbVBhcnRzLnBvcCgpO1xuICAgIGZyb21QYXJ0cyA9IGZyb21QYXJ0cy5jb25jYXQodG9QYXJ0cyk7XG4gIH1cblxuICBpZiAoIWZyb21QYXJ0cy5sZW5ndGgpIHJldHVybiAnLyc7XG5cbiAgdmFyIGhhc1RyYWlsaW5nU2xhc2ggPSB2b2lkIDA7XG4gIGlmIChmcm9tUGFydHMubGVuZ3RoKSB7XG4gICAgdmFyIGxhc3QgPSBmcm9tUGFydHNbZnJvbVBhcnRzLmxlbmd0aCAtIDFdO1xuICAgIGhhc1RyYWlsaW5nU2xhc2ggPSBsYXN0ID09PSAnLicgfHwgbGFzdCA9PT0gJy4uJyB8fCBsYXN0ID09PSAnJztcbiAgfSBlbHNlIHtcbiAgICBoYXNUcmFpbGluZ1NsYXNoID0gZmFsc2U7XG4gIH1cblxuICB2YXIgdXAgPSAwO1xuICBmb3IgKHZhciBpID0gZnJvbVBhcnRzLmxlbmd0aDsgaSA+PSAwOyBpLS0pIHtcbiAgICB2YXIgcGFydCA9IGZyb21QYXJ0c1tpXTtcblxuICAgIGlmIChwYXJ0ID09PSAnLicpIHtcbiAgICAgIHNwbGljZU9uZShmcm9tUGFydHMsIGkpO1xuICAgIH0gZWxzZSBpZiAocGFydCA9PT0gJy4uJykge1xuICAgICAgc3BsaWNlT25lKGZyb21QYXJ0cywgaSk7XG4gICAgICB1cCsrO1xuICAgIH0gZWxzZSBpZiAodXApIHtcbiAgICAgIHNwbGljZU9uZShmcm9tUGFydHMsIGkpO1xuICAgICAgdXAtLTtcbiAgICB9XG4gIH1cblxuICBpZiAoIW11c3RFbmRBYnMpIGZvciAoOyB1cC0tOyB1cCkge1xuICAgIGZyb21QYXJ0cy51bnNoaWZ0KCcuLicpO1xuICB9aWYgKG11c3RFbmRBYnMgJiYgZnJvbVBhcnRzWzBdICE9PSAnJyAmJiAoIWZyb21QYXJ0c1swXSB8fCAhaXNBYnNvbHV0ZShmcm9tUGFydHNbMF0pKSkgZnJvbVBhcnRzLnVuc2hpZnQoJycpO1xuXG4gIHZhciByZXN1bHQgPSBmcm9tUGFydHMuam9pbignLycpO1xuXG4gIGlmIChoYXNUcmFpbGluZ1NsYXNoICYmIHJlc3VsdC5zdWJzdHIoLTEpICE9PSAnLycpIHJlc3VsdCArPSAnLyc7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVzb2x2ZVBhdGhuYW1lO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9yZXNvbHZlLXBhdGhuYW1lL2luZGV4LmpzIiwidmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiB2YWx1ZUVxdWFsKGEsIGIpIHtcbiAgaWYgKGEgPT09IGIpIHJldHVybiB0cnVlO1xuXG4gIGlmIChhID09IG51bGwgfHwgYiA9PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoYSkpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShiKSAmJiBhLmxlbmd0aCA9PT0gYi5sZW5ndGggJiYgYS5ldmVyeShmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgIHJldHVybiB2YWx1ZUVxdWFsKGl0ZW0sIGJbaW5kZXhdKTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBhVHlwZSA9IHR5cGVvZiBhID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihhKTtcbiAgdmFyIGJUeXBlID0gdHlwZW9mIGIgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGIpO1xuXG4gIGlmIChhVHlwZSAhPT0gYlR5cGUpIHJldHVybiBmYWxzZTtcblxuICBpZiAoYVR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgdmFyIGFWYWx1ZSA9IGEudmFsdWVPZigpO1xuICAgIHZhciBiVmFsdWUgPSBiLnZhbHVlT2YoKTtcblxuICAgIGlmIChhVmFsdWUgIT09IGEgfHwgYlZhbHVlICE9PSBiKSByZXR1cm4gdmFsdWVFcXVhbChhVmFsdWUsIGJWYWx1ZSk7XG5cbiAgICB2YXIgYUtleXMgPSBPYmplY3Qua2V5cyhhKTtcbiAgICB2YXIgYktleXMgPSBPYmplY3Qua2V5cyhiKTtcblxuICAgIGlmIChhS2V5cy5sZW5ndGggIT09IGJLZXlzLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgcmV0dXJuIGFLZXlzLmV2ZXJ5KGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiB2YWx1ZUVxdWFsKGFba2V5XSwgYltrZXldKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsdWVFcXVhbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdmFsdWUtZXF1YWwvaW5kZXguanMiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIgPSBmdW5jdGlvbiBjcmVhdGVUcmFuc2l0aW9uTWFuYWdlcigpIHtcbiAgdmFyIHByb21wdCA9IG51bGw7XG5cbiAgdmFyIHNldFByb21wdCA9IGZ1bmN0aW9uIHNldFByb21wdChuZXh0UHJvbXB0KSB7XG4gICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KShwcm9tcHQgPT0gbnVsbCwgJ0EgaGlzdG9yeSBzdXBwb3J0cyBvbmx5IG9uZSBwcm9tcHQgYXQgYSB0aW1lJyk7XG5cbiAgICBwcm9tcHQgPSBuZXh0UHJvbXB0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChwcm9tcHQgPT09IG5leHRQcm9tcHQpIHByb21wdCA9IG51bGw7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgY29uZmlybVRyYW5zaXRpb25UbyA9IGZ1bmN0aW9uIGNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgY2FsbGJhY2spIHtcbiAgICAvLyBUT0RPOiBJZiBhbm90aGVyIHRyYW5zaXRpb24gc3RhcnRzIHdoaWxlIHdlJ3JlIHN0aWxsIGNvbmZpcm1pbmdcbiAgICAvLyB0aGUgcHJldmlvdXMgb25lLCB3ZSBtYXkgZW5kIHVwIGluIGEgd2VpcmQgc3RhdGUuIEZpZ3VyZSBvdXQgdGhlXG4gICAgLy8gYmVzdCB3YXkgdG8gaGFuZGxlIHRoaXMuXG4gICAgaWYgKHByb21wdCAhPSBudWxsKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gdHlwZW9mIHByb21wdCA9PT0gJ2Z1bmN0aW9uJyA/IHByb21wdChsb2NhdGlvbiwgYWN0aW9uKSA6IHByb21wdDtcblxuICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZ2V0VXNlckNvbmZpcm1hdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGdldFVzZXJDb25maXJtYXRpb24ocmVzdWx0LCBjYWxsYmFjayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KShmYWxzZSwgJ0EgaGlzdG9yeSBuZWVkcyBhIGdldFVzZXJDb25maXJtYXRpb24gZnVuY3Rpb24gaW4gb3JkZXIgdG8gdXNlIGEgcHJvbXB0IG1lc3NhZ2UnKTtcblxuICAgICAgICAgIGNhbGxiYWNrKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBSZXR1cm4gZmFsc2UgZnJvbSBhIHRyYW5zaXRpb24gaG9vayB0byBjYW5jZWwgdGhlIHRyYW5zaXRpb24uXG4gICAgICAgIGNhbGxiYWNrKHJlc3VsdCAhPT0gZmFsc2UpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjayh0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGxpc3RlbmVycyA9IFtdO1xuXG4gIHZhciBhcHBlbmRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFwcGVuZExpc3RlbmVyKGZuKSB7XG4gICAgdmFyIGlzQWN0aXZlID0gdHJ1ZTtcblxuICAgIHZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIGxpc3RlbmVyKCkge1xuICAgICAgaWYgKGlzQWN0aXZlKSBmbi5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbSAhPT0gbGlzdGVuZXI7XG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBub3RpZnlMaXN0ZW5lcnMgPSBmdW5jdGlvbiBub3RpZnlMaXN0ZW5lcnMoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgbGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gbGlzdGVuZXIuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHNldFByb21wdDogc2V0UHJvbXB0LFxuICAgIGNvbmZpcm1UcmFuc2l0aW9uVG86IGNvbmZpcm1UcmFuc2l0aW9uVG8sXG4gICAgYXBwZW5kTGlzdGVuZXI6IGFwcGVuZExpc3RlbmVyLFxuICAgIG5vdGlmeUxpc3RlbmVyczogbm90aWZ5TGlzdGVuZXJzXG4gIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVUcmFuc2l0aW9uTWFuYWdlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlci5qcyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBjYW5Vc2VET00gPSBleHBvcnRzLmNhblVzZURPTSA9ICEhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbnZhciBhZGRFdmVudExpc3RlbmVyID0gZXhwb3J0cy5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudCwgbGlzdGVuZXIpIHtcbiAgcmV0dXJuIG5vZGUuYWRkRXZlbnRMaXN0ZW5lciA/IG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIsIGZhbHNlKSA6IG5vZGUuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50LCBsaXN0ZW5lcik7XG59O1xuXG52YXIgcmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGV4cG9ydHMucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnQsIGxpc3RlbmVyKSB7XG4gIHJldHVybiBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPyBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyLCBmYWxzZSkgOiBub2RlLmRldGFjaEV2ZW50KCdvbicgKyBldmVudCwgbGlzdGVuZXIpO1xufTtcblxudmFyIGdldENvbmZpcm1hdGlvbiA9IGV4cG9ydHMuZ2V0Q29uZmlybWF0aW9uID0gZnVuY3Rpb24gZ2V0Q29uZmlybWF0aW9uKG1lc3NhZ2UsIGNhbGxiYWNrKSB7XG4gIHJldHVybiBjYWxsYmFjayh3aW5kb3cuY29uZmlybShtZXNzYWdlKSk7XG59OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWFsZXJ0XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBIVE1MNSBoaXN0b3J5IEFQSSBpcyBzdXBwb3J0ZWQuIFRha2VuIGZyb20gTW9kZXJuaXpyLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2Jsb2IvbWFzdGVyL2ZlYXR1cmUtZGV0ZWN0cy9oaXN0b3J5LmpzXG4gKiBjaGFuZ2VkIHRvIGF2b2lkIGZhbHNlIG5lZ2F0aXZlcyBmb3IgV2luZG93cyBQaG9uZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JlYWN0LXJvdXRlci9pc3N1ZXMvNTg2XG4gKi9cbnZhciBzdXBwb3J0c0hpc3RvcnkgPSBleHBvcnRzLnN1cHBvcnRzSGlzdG9yeSA9IGZ1bmN0aW9uIHN1cHBvcnRzSGlzdG9yeSgpIHtcbiAgdmFyIHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XG5cbiAgaWYgKCh1YS5pbmRleE9mKCdBbmRyb2lkIDIuJykgIT09IC0xIHx8IHVhLmluZGV4T2YoJ0FuZHJvaWQgNC4wJykgIT09IC0xKSAmJiB1YS5pbmRleE9mKCdNb2JpbGUgU2FmYXJpJykgIT09IC0xICYmIHVhLmluZGV4T2YoJ0Nocm9tZScpID09PSAtMSAmJiB1YS5pbmRleE9mKCdXaW5kb3dzIFBob25lJykgPT09IC0xKSByZXR1cm4gZmFsc2U7XG5cbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5ICYmICdwdXNoU3RhdGUnIGluIHdpbmRvdy5oaXN0b3J5O1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgYnJvd3NlciBmaXJlcyBwb3BzdGF0ZSBvbiBoYXNoIGNoYW5nZS5cbiAqIElFMTAgYW5kIElFMTEgZG8gbm90LlxuICovXG52YXIgc3VwcG9ydHNQb3BTdGF0ZU9uSGFzaENoYW5nZSA9IGV4cG9ydHMuc3VwcG9ydHNQb3BTdGF0ZU9uSGFzaENoYW5nZSA9IGZ1bmN0aW9uIHN1cHBvcnRzUG9wU3RhdGVPbkhhc2hDaGFuZ2UoKSB7XG4gIHJldHVybiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdUcmlkZW50JykgPT09IC0xO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIGZhbHNlIGlmIHVzaW5nIGdvKG4pIHdpdGggaGFzaCBoaXN0b3J5IGNhdXNlcyBhIGZ1bGwgcGFnZSByZWxvYWQuXG4gKi9cbnZhciBzdXBwb3J0c0dvV2l0aG91dFJlbG9hZFVzaW5nSGFzaCA9IGV4cG9ydHMuc3VwcG9ydHNHb1dpdGhvdXRSZWxvYWRVc2luZ0hhc2ggPSBmdW5jdGlvbiBzdXBwb3J0c0dvV2l0aG91dFJlbG9hZFVzaW5nSGFzaCgpIHtcbiAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0ZpcmVmb3gnKSA9PT0gLTE7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBhIGdpdmVuIHBvcHN0YXRlIGV2ZW50IGlzIGFuIGV4dHJhbmVvdXMgV2ViS2l0IGV2ZW50LlxuICogQWNjb3VudHMgZm9yIHRoZSBmYWN0IHRoYXQgQ2hyb21lIG9uIGlPUyBmaXJlcyByZWFsIHBvcHN0YXRlIGV2ZW50c1xuICogY29udGFpbmluZyB1bmRlZmluZWQgc3RhdGUgd2hlbiBwcmVzc2luZyB0aGUgYmFjayBidXR0b24uXG4gKi9cbnZhciBpc0V4dHJhbmVvdXNQb3BzdGF0ZUV2ZW50ID0gZXhwb3J0cy5pc0V4dHJhbmVvdXNQb3BzdGF0ZUV2ZW50ID0gZnVuY3Rpb24gaXNFeHRyYW5lb3VzUG9wc3RhdGVFdmVudChldmVudCkge1xuICByZXR1cm4gZXZlbnQuc3RhdGUgPT09IHVuZGVmaW5lZCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0NyaU9TJykgPT09IC0xO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9ET01VdGlscy5qcyIsImltcG9ydCAnLi9zdHlsZS5zY3NzJ1xuaW1wb3J0IGNvbmZpZyBmcm9tICdjb25maWcnXG5pbXBvcnQgeyB0aGVtZVN0b3JlIH0gZnJvbSAnIy9zdG9yZXMnXG5cbmNvbnN0IHRoZW1lcyA9IGNvbmZpZy50aGVtZXNcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gIGNvbnN0ICRzaWRlYmFyID0gJCgnI0otc2lkZWJhci1oZWFkZXInKVxuICBjb25zdCAkYm9keSA9ICQoJ2JvZHknKVxuICBjb25zdCAkdGhlbWVTZWxlY3RvciA9ICQoJyNKLXRoZW1lLXNlbGVjdG9yJylcbiAgY29uc3QgJHNpZGViYXJCb2R5ID0gJCgnI0otc2lkZS1iYXItYm9keScpXG4gIGxldCBpc1NlYXJjaFNob3dpbmcgPSBmYWxzZVxuICBsZXQgaXNTaWRlQm9keVNob3dpbmcgPSB0cnVlXG5cbiAgJHRoZW1lU2VsZWN0b3JcbiAgICAuaHRtbChcbiAgICAgIHRoZW1lc1xuICAgICAgICAubWFwKHRoZW1lID0+IHtcbiAgICAgICAgICBjb25zdCBpc1NlbGVjdGVkID0gdGhlbWVTdG9yZS50aGVtZSA9PT0gJ3RoZW1lLScgKyB0aGVtZSA/ICdzZWxlY3RlZCcgOiAnJ1xuICAgICAgICAgIHJldHVybiBgPG9wdGlvbiB2YWx1ZT1cInRoZW1lLSR7dGhlbWV9XCIgJHtpc1NlbGVjdGVkfT50aGVtZS0ke3RoZW1lfTwvb3B0aW9uPmBcbiAgICAgICAgfSlcbiAgICAgICAgLmpvaW4oJycpXG4gICAgKVxuICAgIC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCAkdGhpcyA9ICQodGhpcylcbiAgICAgIGNvbnN0IHRoZW1lID0gJHRoaXMudmFsKClcblxuICAgICAgaWYgKHRoZW1lICE9PSB0aGVtZVN0b3JlLnRoZW1lKSB7XG4gICAgICAgICRib2R5LmFkZENsYXNzKHRoZW1lKS5yZW1vdmVDbGFzcyh0aGVtZVN0b3JlLnRoZW1lKVxuICAgICAgICB0aGVtZVN0b3JlLnNldFRoZW1lKHRoZW1lKVxuICAgICAgfVxuICAgIH0pXG5cbiAgJGJvZHkuYWRkQ2xhc3ModGhlbWVTdG9yZS50aGVtZSlcblxuICAkc2lkZWJhclxuICAgIC5vbignY2xpY2snLCAnLkotc2lkZWJhci1sb2dvJywgZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCAkdGhpcyA9ICQodGhpcylcblxuICAgICAgaWYgKCR0aGlzLmlzKCcuYWN0aXZlJykpIHtcbiAgICAgICAgc2lkZWJhckJvZHlIaWRlKClcbiAgICAgICAgJHRoaXMucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaWRlYmFyQm9keVNob3coKVxuICAgICAgICBlbWl0dGVyLmVtaXQoJ3N3aXRjaC1zaWRlYmFyJywgeyB0YXJnZXQ6ICdsb2dvJyB9KVxuICAgICAgICAkdGhpc1xuICAgICAgICAgIC5hZGRDbGFzcygnYWN0aXZlJylcbiAgICAgICAgICAuc2libGluZ3MoKVxuICAgICAgICAgIC5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAgIH1cbiAgICB9KVxuICAgIC5vbignY2xpY2snLCAnLkotc2lkZWJhci1zZWFyY2gnLCBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKVxuXG4gICAgICBpZiAoJHRoaXMuaXMoJy5hY3RpdmUnKSkge1xuICAgICAgICBzaWRlYmFyQm9keUhpZGUoKVxuICAgICAgICAkdGhpcy5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNpZGViYXJCb2R5U2hvdygpXG5cbiAgICAgICAgJHRoaXNcbiAgICAgICAgICAuYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAgICAgLnNpYmxpbmdzKClcbiAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG5cbiAgICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwic2VhcmNoLWJveFwiICovICdwYXJ0aWFscy9zaWRlLWJhci1ib2R5L3NlYXJjaC1ib3gnKS50aGVuKCgpID0+IHtcbiAgICAgICAgICBlbWl0dGVyLmVtaXQoJ3N3aXRjaC1zaWRlYmFyJywgeyB0YXJnZXQ6ICdzZWFyY2gnIH0pXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICBmdW5jdGlvbiBzaWRlYmFyQm9keVNob3coKSB7XG4gICAgJHNpZGViYXJCb2R5LnJlbW92ZUNsYXNzKCd2aXNpYmlsaXR5LWhpZGRlbicpXG4gICAgaXNTaWRlQm9keVNob3dpbmcgPSB0cnVlXG4gIH1cbiAgZnVuY3Rpb24gc2lkZWJhckJvZHlIaWRlKCkge1xuICAgICRzaWRlYmFyQm9keS5hZGRDbGFzcygndmlzaWJpbGl0eS1oaWRkZW4nKVxuICAgIGlzU2lkZUJvZHlTaG93aW5nID0gZmFsc2VcbiAgfVxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhcnRpYWxzL3NpZGUtYmFyLWhlYWRlci9pbmRleC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYXJ0aWFscy9zaWRlLWJhci1oZWFkZXIvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiaW1wb3J0ICcuL2Jsb2ctdHJlZSdcbmltcG9ydCAnLi9zdHlsZS5zY3NzJ1xuXG4kKGZ1bmN0aW9uKCkge1xuICBjb25zdCAkc2VhcmNoQm94ID0gJCgnI0otc2VhcmNoLWJveCcpXG4gIGNvbnN0ICRibG9nVHJlZSA9ICQoJyNKLWJsb2ctdHJlZScpXG4gIGNvbnN0ICRzZWFyY2hJbnB1dCA9ICRzZWFyY2hCb3guZmluZCgnLkotaW5wdXQtc2VhcmNoJylcbiAgY29uc3QgJHRhZ1RyZWUgPSAkKCcjSi1ibG9nLXRyZWUnKVxuXG4gIGVtaXR0ZXIub24oJ3N3aXRjaC1zaWRlYmFyJywgKHsgdGFyZ2V0IH0pID0+IHtcbiAgICBjb25zdCBpc1NlYXJjaCA9IHRhcmdldCA9PT0gJ3NlYXJjaCdcblxuICAgIGlmIChpc1NlYXJjaCkge1xuICAgICAgJGJsb2dUcmVlLmhpZGUoKVxuICAgICAgJHNlYXJjaEJveC5yZW1vdmVDbGFzcygnaGlkZGVuJylcbiAgICAgICRzZWFyY2hJbnB1dC5mb2N1cygpXG4gICAgfSBlbHNlIHtcbiAgICAgICRibG9nVHJlZS5zaG93KClcbiAgICAgICRzZWFyY2hCb3guYWRkQ2xhc3MoJ2hpZGRlbicpXG4gICAgfVxuICB9KVxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhcnRpYWxzL3NpZGUtYmFyLWJvZHkvaW5kZXguanMiLCJpbXBvcnQgJy4vc3R5bGUuc2NzcydcbmltcG9ydCBoaXN0b3J5IGZyb20gJyMvaGlzdG9yeSdcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gIGNvbnN0ICR0YWdUcmVlID0gJCgnI0otYmxvZy10cmVlJylcbiAgY29uc3QgJGFsbFBvc3RzID0gJCgnI0otcG9zdHMtYWxsLWhpZGRlbicpXG4gIGNvbnN0IHBhdGhuYW1lID0gbG9jYXRpb24ucGF0aG5hbWVcbiAgY29uc3QgJGJvZHkgPSAkKCdib2R5JylcbiAgY29uc3QgJHVudGFnZWRQb3N0cyA9ICR0YWdUcmVlLmZpbmQoJy5KLXVudGFnZWQtcG9zdHMnKVxuXG4gIGNvbnN0IHRhZ3MgPSB7fVxuICBjb25zdCB1bnRhZ2VkID0gW11cbiAgJGFsbFBvc3RzLmZpbmQoJy5KLXBvc3QnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0ICRwb3N0ID0gJCh0aGlzKVxuICAgIGNvbnN0IHNsdWcgPSAkcG9zdC5kYXRhKCdzbHVnJylcbiAgICBjb25zdCAkdGFncyA9ICRwb3N0LmZpbmQoJy5KLXRhZycpXG5cbiAgICBpZiAocGF0aG5hbWUuaW5jbHVkZXMoc2x1ZykpIHtcbiAgICAgICRwb3N0LmFkZENsYXNzKCdhY3RpdmUnKVxuICAgIH1cblxuICAgIGlmICgkdGFncy5sZW5ndGggPT09IDApIHtcbiAgICAgIHVudGFnZWQucHVzaCgkcG9zdFswXS5vdXRlckhUTUwpXG4gICAgfSBlbHNlIHtcbiAgICAgICR0YWdzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHRhZyA9IHRoaXMuaW5uZXJUZXh0XG4gICAgICAgIGlmICghdGFnc1t0YWddKSB7XG4gICAgICAgICAgdGFnc1t0YWddID0gW11cbiAgICAgICAgfVxuXG4gICAgICAgIHRhZ3NbdGFnXS5wdXNoKCRwb3N0WzBdLm91dGVySFRNTClcbiAgICAgIH0pXG4gICAgfVxuICB9KVxuXG4gIC8qKlxuICAgKiBjb3B5IHBvc3RzIHRvIGNvcnJlc3BvbmRpbmcgdGFnXG4gICAqL1xuICAkdGFnVHJlZS5maW5kKCcuSi1ibG9nLXRyZWUtcG9zdHMnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKVxuICAgIGNvbnN0IHBvc3RzID0gdGFnc1skdGhpcy5kYXRhKCd0YWcnKV1cblxuICAgIGlmICghcG9zdHMpIHtcbiAgICAgICR0aGlzXG4gICAgICAgIC5odG1sKCc8dWw+PGxpIGNsYXNzPVwiYmxvZy10cmVlLW5vLXBvc3RzIGxpZ2h0ZXJcIj5Db21pbmcgc29vbi4uLjwvbGk+PC91bD4nKVxuICAgICAgICAucGFyZW50KClcbiAgICAgICAgLmFkZENsYXNzKCdwb3N0LWhpZGRlbicpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAkdGhpcy5odG1sKHBvc3RzLmpvaW4oJycpKS5jc3Moe1xuICAgICAgaGVpZ2h0OiAyNiAqIHBvc3RzLmxlbmd0aFxuICAgIH0pXG4gIH0pXG5cbiAgJHVudGFnZWRQb3N0cy5odG1sKHVudGFnZWQuam9pbignJykpXG5cbiAgY29uc3QgJHBvc3RzID0gJCgnLkotYmxvZy10cmVlLXRhZ3MgLkotcG9zdCcpXG5cbiAgLy8gZXZlbnQgYmluZGluZ1xuICAkdGFnVHJlZVxuICAgIC5hZGRDbGFzcygnbG9hZGluZy1oaWRkZW4nKVxuICAgIC5vbignY2xpY2snLCAnLkotYmxvZy10cmVlLXRhZ25hbWUnLCBmdW5jdGlvbigpIHtcbiAgICAgICQodGhpcylcbiAgICAgICAgLnBhcmVudCgpXG4gICAgICAgIC50b2dnbGVDbGFzcygncG9zdC1oaWRkZW4nKVxuICAgIH0pXG4gICAgLm9uKCdjbGljaycsICcuSi1nbzJwb3N0JywgZnVuY3Rpb24oZSkge1xuICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpXG5cbiAgICAgIGlmICgkYm9keS5pcygnLmhvbWUtdGVtcGxhdGUnKSkgcmV0dXJuXG5cbiAgICAgIGlmICgkdGhpcy5wYXJlbnRzKCcuSi1wb3N0JykuaXMoJy5hY3RpdmUnKSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlkID0gJHRoaXMuZGF0YSgnaWQnKVxuICAgICAgY29uc3QgdXJsID0gJHRoaXMuYXR0cignaHJlZicpXG5cbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgZW1pdHRlci5lbWl0KCdhZGQtcG9zdC10YWInLCB7XG4gICAgICAgIGlkLFxuICAgICAgICB1cmwsXG4gICAgICAgIHRpdGxlOiAkdGhpcy5hdHRyKCd0aXRsZScpLFxuICAgICAgICBzbHVnOiAkdGhpcy5wYXJlbnRzKCcuSi1wb3N0JykuZGF0YSgnc2x1ZycpXG4gICAgICB9KVxuICAgIH0pXG5cbiAgaGlzdG9yeS5saXN0ZW4obG9jYXRpb24gPT4ge1xuICAgIGNvbnN0IG5leHRUYWIgPSBsb2NhdGlvbi5zdGF0ZVxuXG4gICAgJHBvc3RzXG4gICAgICAucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAuZmlsdGVyKChpZHgsIHBvc3QpID0+IHtcbiAgICAgICAgcmV0dXJuICQocG9zdCkuZGF0YSgnc2x1ZycpID09PSBuZXh0VGFiLnNsdWdcbiAgICAgIH0pXG4gICAgICAuYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gIH0pXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFydGlhbHMvc2lkZS1iYXItYm9keS9ibG9nLXRyZWUvaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGFydGlhbHMvc2lkZS1iYXItYm9keS9ibG9nLXRyZWUvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhcnRpYWxzL3NpZGUtYmFyLWJvZHkvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5cbiQoZnVuY3Rpb24oKSB7XG4gIGNvbnN0ICRyZWFkaW5nVGltZSA9ICQoXCIuSi1yZWFkaW5nLXRpbWVcIik7XG5cbiAgZW1pdHRlci5vbihcInJlZnJlc2gtcmVhZGluZy10aW1lXCIsICh7IHRpbWUgfSkgPT4ge1xuICAgICRyZWFkaW5nVGltZS5odG1sKHRpbWUpO1xuICB9KTtcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFydGlhbHMvZm9vdGVyL2luZGV4LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhcnRpYWxzL2Zvb3Rlci9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgJy4vc3R5bGUuc2NzcydcbmltcG9ydCBoaXN0b3J5IGZyb20gJyMvaGlzdG9yeSdcbmltcG9ydCB7IHBvc3RTdG9yZSB9IGZyb20gJyMvc3RvcmVzJ1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gJyMvdXRpbHMnXG5cbiQoZnVuY3Rpb24oKSB7XG4gIGNvbnN0ICRib2R5ID0gJCgnYm9keScpXG4gIGNvbnN0ICRwb3N0ID0gJCgnI0otcG9zdCcpXG4gIGNvbnN0ICR0aXRsZSA9ICRwb3N0LmZpbmQoJy5KLXBvc3QtdGl0bGUnKVxuICBjb25zdCAkY29udGVudCA9ICRwb3N0LmZpbmQoJy5KLXBvc3QtY29udGVudCcpXG4gIGNvbnN0ICRtZXRhID0gJHBvc3QuZmluZCgnLkotcG9zdC1tZXRhJylcblxuICBpZiAoJCgnYm9keScpLmlzKCcucG9zdC10ZW1wbGF0ZScpKSB7XG4gICAgZW1pdHRlci5lbWl0KCdhZGQtcG9zdC10YWInLCB7XG4gICAgICBpZDogJHBvc3QuZGF0YSgnaWQnKSxcbiAgICAgIHRpdGxlOiAkcG9zdC5kYXRhKCd0aXRsZScpLFxuICAgICAgc2x1ZzogJHBvc3QuZGF0YSgnc2x1ZycpLFxuICAgICAgdXJsOiAkcG9zdC5kYXRhKCd1cmwnKVxuICAgIH0pXG5cbiAgICBlbWl0dGVyLmVtaXQoJ3JlZnJlc2gtcmVhZGluZy10aW1lJywge1xuICAgICAgdGltZTogJCgnLkotcmVhZGluZy10aW1lLWhpZGRlbicpLmh0bWwoKVxuICAgIH0pXG4gIH1cblxuICBoaXN0b3J5Lmxpc3RlbigobG9jYXRpb24sIGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IHBvc3RJZCA9IGxvY2F0aW9uLnN0YXRlLmlkXG5cbiAgICBwb3N0SWQgJiZcbiAgICAgIHBvc3RTdG9yZS5mZXRjaFBvc3QocG9zdElkKS5kb25lKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgY29uc3QgcG9zdCA9IGRhdGEucG9zdHNbMF0gfHwge31cbiAgICAgICAgY29uc3QgY3JlYXRlZF9hdCA9IGZvcm1hdERhdGUoJyRZLiRNLiRkJywgcG9zdC5jcmVhdGVkX2F0KVxuXG4gICAgICAgICR0aXRsZS5odG1sKHBvc3QudGl0bGUpXG4gICAgICAgICRjb250ZW50Lmh0bWwocG9zdC5odG1sKVxuICAgICAgICAkbWV0YS5odG1sKGBQb3N0ZWQgYnkgJHtwb3N0LmF1dGhvci5uYW1lfSBvbiAke2NyZWF0ZWRfYXR9YClcblxuICAgICAgICBkb2N1bWVudC50aXRsZSA9IHBvc3QudGl0bGVcblxuICAgICAgICBlbWl0dGVyLmVtaXQoJ3JlZnJlc2gtcmVhZGluZy10aW1lJywge1xuICAgICAgICAgIHRpbWU6ICcnXG4gICAgICAgIH0pXG4gICAgICB9KVxuICB9KVxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhcnRpYWxzL3Bvc3QvaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGFydGlhbHMvcG9zdC9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGFydGlhbHMvcG9zdC1uYXYvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhcnRpYWxzL2hvbWUvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==