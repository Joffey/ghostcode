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
/******/ 		script.src = __webpack_require__.p + "chunk." + ({}[chunkId]||chunkId) + "." + {"0":"cc923"}[chunkId] + ".js";
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
  // all themes
  themes: __WEBPACK_IMPORTED_MODULE_0__themes_result_json__["themes"],
  // localstorage tab key
  lsPostTabKey: 'coder-post-tabs',
  // tab expiration 1d
  lsPostTabExpiration: 24 * 60 * 60 * 1000,
  // localstorage theme key
  lsThemeKey: 'coder-theme',
  // localstorage post key
  lsPostsKey: 'coder-posts',
  // post expiration time 1min
  lsPostsExpiration: 1 * 60 * 1000,
  // default theme
  defaultTheme: 'dark_default'
});

/***/ }),
/* 1 */
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
/* 2 */
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
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory__);


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory___default()());

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_partials_author__ = __webpack_require__(38);













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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__history__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(2);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };







$(function () {
  if (!Object(__WEBPACK_IMPORTED_MODULE_4__utils__["c" /* isPostPage */])()) return;

  let $postTabs = $('#J-post-tab');
  const $scrollWrap = $('.J-post-tab-scroller-wrap');
  const ndScrollWrap = $scrollWrap.get(0);

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
    const currentTab = __WEBPACK_IMPORTED_MODULE_2__stores__["b" /* tabStore */].currentTab;

    const $active = $('#J-post-tab').html(tabs.map(tab => `<div title="${tab.title}" class="J-tab-item light hover-opacity1 flex-item0 single-line item ${activeId === tab.id ? 'active' : ''}" data-id="${tab.id}">${tab.title}<i class="close J-post-tab-close lighter hover-opacity1" data-slug="${tab.slug}"></i></div>`).join('')).find('.active');

    // not refetch current post
    if (!currentTab || currentTab.id !== activeId) {
      __WEBPACK_IMPORTED_MODULE_3__history__["a" /* default */].push(active.url, _extends({}, active));
      __WEBPACK_IMPORTED_MODULE_2__stores__["b" /* tabStore */].setCurrentTab(_extends({}, active));
    }

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
      ndScrollWrap.scrollLeft = activeRight - wrapWidth - threshold;
    }
    if (activeLeft <= wrapScrollLeft) {
      ndScrollWrap.scrollLeft = activeLeft - threshold;
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


const lsPostTabKey = __WEBPACK_IMPORTED_MODULE_0_config__["a" /* default */].lsPostTabKey;
const lsPostTabExpiration = __WEBPACK_IMPORTED_MODULE_0_config__["a" /* default */].lsPostTabExpiration;
const ls = localStorage;

/* harmony default export */ __webpack_exports__["a"] = (class {
  constructor() {
    this.currentTab = null;
  }

  getTabs() {
    let tabs = ls.getItem(lsPostTabKey) || '';
    const [tabsData, timestamp] = tabs.split('___');
    if (!tabs || !timestamp || +new Date() - timestamp >= lsPostTabExpiration) return [];

    return tabsData.split(',').map(tab => {
      const [id, title, url, slug] = tab.split(':');
      return { id, title, url, slug };
    });
  }

  setTabs(tabs) {
    ls.setItem(lsPostTabKey, tabs.length ? tabs.map(tab => `${tab.id}:${tab.title}:${tab.url}:${tab.slug}`).join(',') + '___' + +new Date() : '');
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_config__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stores__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(2);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




const ls = localStorage;
const lsPostsKey = __WEBPACK_IMPORTED_MODULE_0_config__["a" /* default */].lsPostsKey;
const lsPostsExpiration = __WEBPACK_IMPORTED_MODULE_0_config__["a" /* default */].lsPostsExpiration;

/* harmony default export */ __webpack_exports__["a"] = (class {
  fetchPost(id) {
    const cache = this.fromCache(id);

    return cache ? $.Deferred().resolve(cache) : $.get(ghost.url.api(`posts/${id}`), {
      include: 'author'
    }).fail(err => {
      console.log(err);
      if (err.status === 404) {
        __WEBPACK_IMPORTED_MODULE_1__stores__["b" /* tabStore */].deleteTabItem(id);
      }
    }).done(data => {
      const post = data.posts[0] || {};
      console.log(post);
      this.cachePost(id, post);
      return post;
    });
  }

  /**
   * Read post from cache first
   * @param {number} id -> post id
   *  - only cache 5min
   */
  fromCache(id) {
    let lsPosts = ls.getItem(lsPostsKey);
    lsPosts = lsPosts ? JSON.parse(lsPosts) : {};

    const post = lsPosts[id];
    const useable = post && +new Date() - post.timestamp <= lsPostsExpiration;

    if (useable) {
      console.info('[Post readed from cache]:', post.title);
      const author = JSON.parse(post.author);
      return {
        posts: [_extends({}, post, { author, fromCache: 1 })]
      };
    }

    return null;
  }

  deletePostFromCache(id) {
    let lsPosts = ls.getItem(lsPostsKey);
    lsPosts = lsPosts ? JSON.parse(lsPosts) : {};
    console.log('[deleted post success]:', lsPosts[id].title);

    delete lsPosts[id];

    ls.setItem(lsPostsKey, JSON.stringify(lsPosts));
  }

  cachePost(id, post) {
    if (post.fromCache) return;

    let lsPosts = ls.getItem(lsPostsKey);
    lsPosts = lsPosts ? JSON.parse(lsPosts) : {};

    lsPosts[id] = _extends({}, post, {
      author: JSON.stringify(post.author),
      timestamp: +new Date()

      // cache up to 5 posts
      // delete the oldest one if more than 5
    });let ids = Object.keys(lsPosts);
    if (ids.length > 5) {
      const shouldDeleteId = ids.map(id => ({
        timestamp: lsPosts[id].timestamp,
        id
      })).sort((a, b) => a.timestamp - b.timestamp).map(item => item.id).shift();

      delete lsPosts[shouldDeleteId];
    }

    console.log(ids.length);
    ls.setItem(lsPostsKey, JSON.stringify(lsPosts));
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores__ = __webpack_require__(1);




const themes = __WEBPACK_IMPORTED_MODULE_1_config__["a" /* default */].themes;

$(document).ready(function () {
  const $sidebar = $('#J-sidebar-header');
  const $body = $('body');
  const $themeSelector = $('#J-theme-selector');
  const $sidebarBody = $('#J-side-bar-body');
  let isSearchShowing = false;
  let isSideBodyShowing = true;

  $themeSelector.html(themes.map(theme => {
    const isSelected = __WEBPACK_IMPORTED_MODULE_2__stores__["c" /* themeStore */].theme === theme ? 'selected' : '';
    return `<option value="${theme}" ${isSelected}>${theme}</option>`;
  }).join('')).on('change', function () {
    const $this = $(this);
    const theme = $this.val();

    if (theme !== __WEBPACK_IMPORTED_MODULE_2__stores__["c" /* themeStore */].theme) {
      $body.addClass('theme-' + theme).removeClass('theme-' + __WEBPACK_IMPORTED_MODULE_2__stores__["c" /* themeStore */].theme);
      __WEBPACK_IMPORTED_MODULE_2__stores__["c" /* themeStore */].setTheme(theme);
    }
  });

  $body.addClass('theme-' + __WEBPACK_IMPORTED_MODULE_2__stores__["c" /* themeStore */].theme);

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
          resolve(__webpack_require__( /* webpackChunkName: "search-box" */40));
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
      }).then(() => {
        emitter.emit('switch-sidebar', { target: 'search' });
      });
    }
  });

  function sidebarBodyShow() {
    $sidebarBody.removeClass('hidden');
    isSideBodyShowing = true;
  }
  function sidebarBodyHide() {
    $sidebarBody.addClass('hidden');
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__history__ = __webpack_require__(3);



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

    if (!$body.is('.post-template')) return;

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__history__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(2);





$(function () {
  const $postWrap = $('#J-post-wrap');
  const $post = $('#J-post');
  const $title = $post.find('.J-post-title');
  const $content = $post.find('.J-post-content');
  const $meta = $post.find('.J-post-meta');
  const $featureImage = $post.find('.J-post-feature-image');
  const origin = location.origin;

  highlight();

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

  // refresh post data
  __WEBPACK_IMPORTED_MODULE_1__history__["a" /* default */].listen((location, action) => {
    const postId = location.state.id;

    if (!postId) return;

    __WEBPACK_IMPORTED_MODULE_2__stores__["a" /* postStore */].fetchPost(postId).done(function (data) {
      const post = data.posts[0] || {};
      const { published_at, title, html, author, feature_image, comment_id, url, slug } = post;

      $title.html(title);
      $content.html(html);
      $meta.html(`Posted by <a href="/author/${author.slug}/">${author.name}</a> on ${Object(__WEBPACK_IMPORTED_MODULE_3__utils__["a" /* formatDate */])('$Y.$M.$d', published_at)}`);
      $featureImage[feature_image ? 'removeClass' : 'addClass']('hidden').find('figure').css({
        backgroundImage: `url(${feature_image})`
      });

      emitter.emit('refresh-reading-time', {
        time: ''
      });

      document.title = title;

      'function' === typeof window.refreshComment && window.refreshComment(`ghost-${comment_id}`, origin + url, title);

      highlight();
      $postWrap.animate({ scrollTop: 0 }, 300);
    });
  });

  function highlight() {
    $('pre code').each(function (i, block) {
      window.hljs && window.hljs.highlightBlock(block);
    });
  }
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

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);


/***/ }),
/* 39 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDYzYzMzZTFkMjEzZGNkNjgyMmMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9oaXN0b3J5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy93YXJuaW5nL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9QYXRoVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2VtaXR0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21pdHQvZGlzdC9taXR0LmVzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9wYXJ0aWFscy9wb3N0LXRhYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvcmVzdWx0Lmpzb24iLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvcG9zdC10YWIvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmVzL1RoZW1lU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3Jlcy9UYWJTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmVzL1Bvc3RTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9jcmVhdGVCcm93c2VySGlzdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW52YXJpYW50L2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hpc3RvcnkvTG9jYXRpb25VdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS1wYXRobmFtZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsdWUtZXF1YWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hpc3RvcnkvY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hpc3RvcnkvRE9NVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvc2lkZS1iYXItaGVhZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhcnRpYWxzL3NpZGUtYmFyLWhlYWRlci9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3BhcnRpYWxzL3NpZGUtYmFyLWJvZHkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvc2lkZS1iYXItYm9keS9ibG9nLXRyZWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvc2lkZS1iYXItYm9keS9ibG9nLXRyZWUvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9wYXJ0aWFscy9zaWRlLWJhci1ib2R5L3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvZm9vdGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhcnRpYWxzL2Zvb3Rlci9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3BhcnRpYWxzL3Bvc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvcG9zdC9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3BhcnRpYWxzL3Bvc3QtbmF2L3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvaG9tZS9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3BhcnRpYWxzL2F1dGhvci9zdHlsZS5zY3NzIl0sIm5hbWVzIjpbInRoZW1lcyIsImxzUG9zdFRhYktleSIsImxzUG9zdFRhYkV4cGlyYXRpb24iLCJsc1RoZW1lS2V5IiwibHNQb3N0c0tleSIsImxzUG9zdHNFeHBpcmF0aW9uIiwiZGVmYXVsdFRoZW1lIiwidGhlbWVTdG9yZSIsInRhYlN0b3JlIiwicG9zdFN0b3JlIiwid2luZG93Iiwic3RvcmVzIiwiJGJvZHkiLCIkIiwiaXNIb21lUGFnZSIsImlzIiwiaXNQb3N0UGFnZSIsImhTY3JvbGwiLCJlbCIsImNvbnNvbGUiLCJlcnJvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aGVlbCIsImUiLCJkZWx0YSIsIndoZWVsRGVsdGEiLCJkZWx0YVkiLCJzY3JvbGxMZWZ0IiwicHJldmVudERlZmF1bHQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZm9ybWF0IiwidGVtcGxhdGUiLCJ2YXJzIiwicmVwbGFjZSIsIl8iLCJuYW1lIiwidmFsdWUiLCJ0cmltIiwidG9MZW4iLCJzb3VyY2UiLCJsZW4iLCJBcnJheSIsInByb3RvdHlwZSIsImpvaW4iLCJjYWxsIiwibGVuZ3RoIiwic2xpY2UiLCJmb3JtYXREYXRlIiwiZGF0ZSIsImtleSIsIkRhdGUiLCJEQVkiLCJZIiwiZ2V0RnVsbFllYXIiLCJ5IiwiTSIsImdldE1vbnRoIiwiZCIsImdldERhdGUiLCJEIiwiZ2V0RGF5IiwiSCIsImdldEhvdXJzIiwibSIsImdldE1pbnV0ZXMiLCJzIiwiZ2V0U2Vjb25kcyIsImNyZWF0ZUhpc3RvcnkiLCJ3YXJuaW5nIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiY29uZGl0aW9uIiwiYXJncyIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsIkVycm9yIiwidGVzdCIsImFyZ0luZGV4IiwibWVzc2FnZSIsIngiLCJtb2R1bGUiLCJleHBvcnRzIiwiY2FjaGVkU2V0VGltZW91dCIsImNhY2hlZENsZWFyVGltZW91dCIsImRlZmF1bHRTZXRUaW1vdXQiLCJkZWZhdWx0Q2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsInJ1blRpbWVvdXQiLCJmdW4iLCJydW5DbGVhclRpbWVvdXQiLCJtYXJrZXIiLCJxdWV1ZSIsImRyYWluaW5nIiwiY3VycmVudFF1ZXVlIiwicXVldWVJbmRleCIsImNsZWFuVXBOZXh0VGljayIsImNvbmNhdCIsImRyYWluUXVldWUiLCJ0aW1lb3V0IiwicnVuIiwibmV4dFRpY2siLCJpIiwicHVzaCIsIkl0ZW0iLCJhcnJheSIsImFwcGx5IiwidGl0bGUiLCJicm93c2VyIiwiYXJndiIsInZlcnNpb24iLCJ2ZXJzaW9ucyIsIm5vb3AiLCJvbiIsImFkZExpc3RlbmVyIiwib25jZSIsIm9mZiIsInJlbW92ZUxpc3RlbmVyIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiZW1pdCIsInByZXBlbmRMaXN0ZW5lciIsInByZXBlbmRPbmNlTGlzdGVuZXIiLCJsaXN0ZW5lcnMiLCJiaW5kaW5nIiwiY3dkIiwiY2hkaXIiLCJkaXIiLCJ1bWFzayIsIl9fZXNNb2R1bGUiLCJhZGRMZWFkaW5nU2xhc2giLCJwYXRoIiwiY2hhckF0Iiwic3RyaXBMZWFkaW5nU2xhc2giLCJzdWJzdHIiLCJoYXNCYXNlbmFtZSIsInByZWZpeCIsIlJlZ0V4cCIsInN0cmlwQmFzZW5hbWUiLCJzdHJpcFRyYWlsaW5nU2xhc2giLCJwYXJzZVBhdGgiLCJwYXRobmFtZSIsInNlYXJjaCIsImhhc2giLCJoYXNoSW5kZXgiLCJpbmRleE9mIiwic2VhcmNoSW5kZXgiLCJjcmVhdGVQYXRoIiwibG9jYXRpb24iLCJlbWl0dGVyIiwibWl0dCIsImFsbCIsIk9iamVjdCIsImNyZWF0ZSIsInR5cGUiLCJoYW5kbGVyIiwic3BsaWNlIiwiZXZ0IiwibWFwIiwiJHBvc3RUYWJzIiwiJHNjcm9sbFdyYXAiLCJuZFNjcm9sbFdyYXAiLCJnZXQiLCJwb3N0IiwidGFicyIsImdldFRhYnMiLCJmaWx0ZXIiLCJ0YWIiLCJpZCIsInNldFRhYnMiLCJhY3RpdmUiLCJhY3RpdmVJZCIsImN1cnJlbnRUYWIiLCIkYWN0aXZlIiwiaHRtbCIsInNsdWciLCJmaW5kIiwiaGlzdG9yeSIsInVybCIsInNldEN1cnJlbnRUYWIiLCJzY3JvbGwydmlldyIsInN0b3BQcm9wYWdhdGlvbiIsImRlbGV0ZVRhYkl0ZW0iLCJwYXJlbnQiLCJkYXRhIiwiJHRoaXMiLCJhZGRDbGFzcyIsInNpYmxpbmdzIiwicmVtb3ZlQ2xhc3MiLCJ3cmFwV2lkdGgiLCJ3aWR0aCIsIndyYXBTY3JvbGxMZWZ0Iiwid3JhcFJpZ2h0IiwidGhyZXNob2xkIiwibmRBY3RpdmUiLCJhY3RpdmVXaWR0aCIsIm91dGVyV2lkdGgiLCJhY3RpdmVMZWZ0Iiwib2Zmc2V0TGVmdCIsImFjdGl2ZVJpZ2h0IiwibHMiLCJsb2NhbFN0b3JhZ2UiLCJjb25maWciLCJ0aGVtZSIsImdldEl0ZW0iLCJzZXRUaGVtZSIsInNldEl0ZW0iLCJ0YWJzRGF0YSIsInRpbWVzdGFtcCIsInNwbGl0IiwibmV4dFRhYiIsImlzQ3VycmVudFRhYiIsImRlbGV0ZWRJZHgiLCJmaW5kSW5kZXgiLCJpZHgiLCJocmVmIiwiZmV0Y2hQb3N0IiwiY2FjaGUiLCJmcm9tQ2FjaGUiLCJEZWZlcnJlZCIsInJlc29sdmUiLCJnaG9zdCIsImFwaSIsImluY2x1ZGUiLCJmYWlsIiwiZXJyIiwibG9nIiwic3RhdHVzIiwiZG9uZSIsInBvc3RzIiwiY2FjaGVQb3N0IiwibHNQb3N0cyIsIkpTT04iLCJwYXJzZSIsInVzZWFibGUiLCJpbmZvIiwiYXV0aG9yIiwiZGVsZXRlUG9zdEZyb21DYWNoZSIsInN0cmluZ2lmeSIsImlkcyIsImtleXMiLCJzaG91bGREZWxldGVJZCIsInNvcnQiLCJhIiwiYiIsIml0ZW0iLCJzaGlmdCIsIl90eXBlb2YiLCJTeW1ib2wiLCJpdGVyYXRvciIsIm9iaiIsImNvbnN0cnVjdG9yIiwiX2V4dGVuZHMiLCJhc3NpZ24iLCJ0YXJnZXQiLCJoYXNPd25Qcm9wZXJ0eSIsIl93YXJuaW5nIiwicmVxdWlyZSIsIl93YXJuaW5nMiIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfaW52YXJpYW50IiwiX2ludmFyaWFudDIiLCJfTG9jYXRpb25VdGlscyIsIl9QYXRoVXRpbHMiLCJfY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIiLCJfY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIyIiwiX0RPTVV0aWxzIiwiZGVmYXVsdCIsIlBvcFN0YXRlRXZlbnQiLCJIYXNoQ2hhbmdlRXZlbnQiLCJnZXRIaXN0b3J5U3RhdGUiLCJzdGF0ZSIsImNyZWF0ZUJyb3dzZXJIaXN0b3J5IiwicHJvcHMiLCJjYW5Vc2VET00iLCJnbG9iYWxIaXN0b3J5IiwiY2FuVXNlSGlzdG9yeSIsInN1cHBvcnRzSGlzdG9yeSIsIm5lZWRzSGFzaENoYW5nZUxpc3RlbmVyIiwic3VwcG9ydHNQb3BTdGF0ZU9uSGFzaENoYW5nZSIsIl9wcm9wcyRmb3JjZVJlZnJlc2giLCJmb3JjZVJlZnJlc2giLCJfcHJvcHMkZ2V0VXNlckNvbmZpcm0iLCJnZXRVc2VyQ29uZmlybWF0aW9uIiwiZ2V0Q29uZmlybWF0aW9uIiwiX3Byb3BzJGtleUxlbmd0aCIsImtleUxlbmd0aCIsImJhc2VuYW1lIiwiZ2V0RE9NTG9jYXRpb24iLCJoaXN0b3J5U3RhdGUiLCJfcmVmIiwiX3dpbmRvdyRsb2NhdGlvbiIsImNyZWF0ZUxvY2F0aW9uIiwiY3JlYXRlS2V5IiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwidHJhbnNpdGlvbk1hbmFnZXIiLCJzZXRTdGF0ZSIsIm5leHRTdGF0ZSIsIm5vdGlmeUxpc3RlbmVycyIsImFjdGlvbiIsImhhbmRsZVBvcFN0YXRlIiwiZXZlbnQiLCJpc0V4dHJhbmVvdXNQb3BzdGF0ZUV2ZW50IiwiaGFuZGxlUG9wIiwiaGFuZGxlSGFzaENoYW5nZSIsImZvcmNlTmV4dFBvcCIsImNvbmZpcm1UcmFuc2l0aW9uVG8iLCJvayIsInJldmVydFBvcCIsImZyb21Mb2NhdGlvbiIsInRvTG9jYXRpb24iLCJ0b0luZGV4IiwiYWxsS2V5cyIsImZyb21JbmRleCIsImdvIiwiaW5pdGlhbExvY2F0aW9uIiwiY3JlYXRlSHJlZiIsInB1c2hTdGF0ZSIsInByZXZJbmRleCIsIm5leHRLZXlzIiwicmVwbGFjZVN0YXRlIiwibiIsImdvQmFjayIsImdvRm9yd2FyZCIsImxpc3RlbmVyQ291bnQiLCJjaGVja0RPTUxpc3RlbmVycyIsImlzQmxvY2tlZCIsImJsb2NrIiwicHJvbXB0IiwidW5ibG9jayIsInNldFByb21wdCIsImxpc3RlbiIsImxpc3RlbmVyIiwidW5saXN0ZW4iLCJhcHBlbmRMaXN0ZW5lciIsImludmFyaWFudCIsImMiLCJmIiwiZnJhbWVzVG9Qb3AiLCJsb2NhdGlvbnNBcmVFcXVhbCIsIl9yZXNvbHZlUGF0aG5hbWUiLCJfcmVzb2x2ZVBhdGhuYW1lMiIsIl92YWx1ZUVxdWFsIiwiX3ZhbHVlRXF1YWwyIiwiY3VycmVudExvY2F0aW9uIiwiZGVjb2RlVVJJIiwiVVJJRXJyb3IiLCJpc0Fic29sdXRlIiwic3BsaWNlT25lIiwibGlzdCIsImluZGV4IiwiayIsInBvcCIsInJlc29sdmVQYXRobmFtZSIsInRvIiwiZnJvbSIsInRvUGFydHMiLCJmcm9tUGFydHMiLCJpc1RvQWJzIiwiaXNGcm9tQWJzIiwibXVzdEVuZEFicyIsImhhc1RyYWlsaW5nU2xhc2giLCJsYXN0IiwidXAiLCJwYXJ0IiwidW5zaGlmdCIsInJlc3VsdCIsInZhbHVlRXF1YWwiLCJpc0FycmF5IiwiZXZlcnkiLCJhVHlwZSIsImJUeXBlIiwiYVZhbHVlIiwidmFsdWVPZiIsImJWYWx1ZSIsImFLZXlzIiwiYktleXMiLCJjcmVhdGVUcmFuc2l0aW9uTWFuYWdlciIsIm5leHRQcm9tcHQiLCJjYWxsYmFjayIsImZuIiwiaXNBY3RpdmUiLCJfbGVuIiwiX2tleSIsImZvckVhY2giLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJub2RlIiwiYXR0YWNoRXZlbnQiLCJkZXRhY2hFdmVudCIsImNvbmZpcm0iLCJ1YSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInN1cHBvcnRzR29XaXRob3V0UmVsb2FkVXNpbmdIYXNoIiwicmVhZHkiLCIkc2lkZWJhciIsIiR0aGVtZVNlbGVjdG9yIiwiJHNpZGViYXJCb2R5IiwiaXNTZWFyY2hTaG93aW5nIiwiaXNTaWRlQm9keVNob3dpbmciLCJpc1NlbGVjdGVkIiwidmFsIiwic2lkZWJhckJvZHlIaWRlIiwic2lkZWJhckJvZHlTaG93IiwidGhlbiIsIiRzZWFyY2hCb3giLCIkYmxvZ1RyZWUiLCIkc2VhcmNoSW5wdXQiLCIkdGFnVHJlZSIsImlzU2VhcmNoIiwiaGlkZSIsImZvY3VzIiwic2hvdyIsIiRhbGxQb3N0cyIsIiR1bnRhZ2VkUG9zdHMiLCJ0YWdzIiwidW50YWdlZCIsImVhY2giLCIkcG9zdCIsIiR0YWdzIiwiaW5jbHVkZXMiLCJvdXRlckhUTUwiLCJ0YWciLCJpbm5lclRleHQiLCJjc3MiLCJoZWlnaHQiLCIkcG9zdHMiLCJ0b2dnbGVDbGFzcyIsInBhcmVudHMiLCJhdHRyIiwiJHJlYWRpbmdUaW1lIiwidGltZSIsIiRwb3N0V3JhcCIsIiR0aXRsZSIsIiRjb250ZW50IiwiJG1ldGEiLCIkZmVhdHVyZUltYWdlIiwib3JpZ2luIiwiaGlnaGxpZ2h0IiwicG9zdElkIiwicHVibGlzaGVkX2F0IiwiZmVhdHVyZV9pbWFnZSIsImNvbW1lbnRfaWQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJyZWZyZXNoQ29tbWVudCIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJobGpzIiwiaGlnaGxpZ2h0QmxvY2siXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsV0FBVyxFQUFFO0FBQ3ZEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQUk7QUFDSjs7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SUFBSyxNQUFLNkQsT0FBT3pNLElBQUssV0FBVSxrRUFBQVksQ0FBVyxVQUFYLEVBQXVCNFksWUFBdkIsQ0FBcUMsRUFBckg7QUFDQUosb0JBQWNLLGdCQUFnQixhQUFoQixHQUFnQyxVQUE5QyxFQUEwRCxRQUExRCxFQUNHNVEsSUFESCxDQUNRLFFBRFIsRUFFRzJQLEdBRkgsQ0FFTztBQUNIbUIseUJBQWtCLE9BQU1GLGFBQWM7QUFEbkMsT0FGUDs7QUFNQXZTLGNBQVE3QixJQUFSLENBQWEsc0JBQWIsRUFBcUM7QUFDbkMwVCxjQUFNO0FBRDZCLE9BQXJDOztBQUlBL0MsZUFBU3ZSLEtBQVQsR0FBaUJBLEtBQWpCOztBQUVBLHFCQUFlLE9BQU9sRyxPQUFPcWIsY0FBN0IsSUFBK0NyYixPQUFPcWIsY0FBUCxDQUF1QixTQUFRRixVQUFXLEVBQTFDLEVBQTZDTCxTQUFTdFEsR0FBdEQsRUFBMkR0RSxLQUEzRCxDQUEvQzs7QUFFQTZVO0FBQ0FOLGdCQUFVYSxPQUFWLENBQWtCLEVBQUVDLFdBQVcsQ0FBYixFQUFsQixFQUFvQyxHQUFwQztBQUNELEtBdkJEO0FBd0JELEdBN0JEOztBQStCQSxXQUFTUixTQUFULEdBQXFCO0FBQ25CNWEsTUFBRSxVQUFGLEVBQWN1WixJQUFkLENBQW1CLFVBQVM3VCxDQUFULEVBQVlrTyxLQUFaLEVBQW1CO0FBQ3BDL1QsYUFBT3diLElBQVAsSUFBZXhiLE9BQU93YixJQUFQLENBQVlDLGNBQVosQ0FBMkIxSCxLQUEzQixDQUFmO0FBQ0QsS0FGRDtBQUdEO0FBQ0YsQ0E3REQsRTs7Ozs7O0FDTEEseUM7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7Ozs7O0FDQUEseUMiLCJmaWxlIjoiY29kZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gd2luZG93W1wid2VicGFja0pzb25wXCJdO1xuIFx0d2luZG93W1wid2VicGFja0pzb25wXCJdID0gZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBleGVjdXRlTW9kdWxlcykge1xuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW10sIHJlc3VsdDtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGNodW5rSWRzLCBtb3JlTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMpO1xuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0fTtcblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0cyB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHQxOiAwXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSA9PT0gMCkge1xuIFx0XHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7IHJlc29sdmUoKTsgfSk7XG4gXHRcdH1cblxuIFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkQ2h1bmtEYXRhWzJdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuIFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdO1xuIFx0XHR9KTtcbiBcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZTtcblxuIFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG4gXHRcdHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiBcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuIFx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG4gXHRcdHNjcmlwdC5hc3luYyA9IHRydWU7XG4gXHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwMDAwO1xuXG4gXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG4gXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuIFx0XHR9XG4gXHRcdHNjcmlwdC5zcmMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcImNodW5rLlwiICsgKHt9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLlwiICsge1wiMFwiOlwiY2M5MjNcIn1bY2h1bmtJZF0gKyBcIi5qc1wiO1xuIFx0XHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZSwgMTIwMDAwKTtcbiBcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZTtcbiBcdFx0ZnVuY3Rpb24gb25TY3JpcHRDb21wbGV0ZSgpIHtcbiBcdFx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG4gXHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcbiBcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG4gXHRcdFx0dmFyIGNodW5rID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRcdGlmKGNodW5rICE9PSAwKSB7XG4gXHRcdFx0XHRpZihjaHVuaykge1xuIFx0XHRcdFx0XHRjaHVua1sxXShuZXcgRXJyb3IoJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC4nKSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG4gXHRcdFx0fVxuIFx0XHR9O1xuIFx0XHRoZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG5cbiBcdFx0cmV0dXJuIHByb21pc2U7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9hc3NldHMvYnVpbHQvXCI7XG5cbiBcdC8vIG9uIGVycm9yIGZ1bmN0aW9uIGZvciBhc3luYyBsb2FkaW5nXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgdGhyb3cgZXJyOyB9O1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDA2M2MzM2UxZDIxM2RjZDY4MjJjIiwiaW1wb3J0IHsgdGhlbWVzIH0gZnJvbSAnLi90aGVtZXMvcmVzdWx0Lmpzb24nXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLy8gYWxsIHRoZW1lc1xuICB0aGVtZXMsXG4gIC8vIGxvY2Fsc3RvcmFnZSB0YWIga2V5XG4gIGxzUG9zdFRhYktleTogJ2NvZGVyLXBvc3QtdGFicycsXG4gIC8vIHRhYiBleHBpcmF0aW9uIDFkXG4gIGxzUG9zdFRhYkV4cGlyYXRpb246IDI0ICogNjAgKiA2MCAqIDEwMDAsXG4gIC8vIGxvY2Fsc3RvcmFnZSB0aGVtZSBrZXlcbiAgbHNUaGVtZUtleTogJ2NvZGVyLXRoZW1lJyxcbiAgLy8gbG9jYWxzdG9yYWdlIHBvc3Qga2V5XG4gIGxzUG9zdHNLZXk6ICdjb2Rlci1wb3N0cycsXG4gIC8vIHBvc3QgZXhwaXJhdGlvbiB0aW1lIDFtaW5cbiAgbHNQb3N0c0V4cGlyYXRpb246IDEgKiA2MCAqIDEwMDAsXG4gIC8vIGRlZmF1bHQgdGhlbWVcbiAgZGVmYXVsdFRoZW1lOiAnZGFya19kZWZhdWx0Jyxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbmZpZy5qcyIsImltcG9ydCBUaGVtZVN0b3JlIGZyb20gJy4vVGhlbWVTdG9yZSdcbmltcG9ydCBUYWJTdG9yZSBmcm9tICcuL1RhYlN0b3JlJ1xuaW1wb3J0IFBvc3RTdG9yZSBmcm9tICcuL1Bvc3RTdG9yZSdcblxuZXhwb3J0IGNvbnN0IHRoZW1lU3RvcmUgPSBuZXcgVGhlbWVTdG9yZSgpXG5leHBvcnQgY29uc3QgdGFiU3RvcmUgPSBuZXcgVGFiU3RvcmUoKVxuZXhwb3J0IGNvbnN0IHBvc3RTdG9yZSA9IG5ldyBQb3N0U3RvcmUoKVxuXG53aW5kb3cuc3RvcmVzID0ge1xuICB0aGVtZVN0b3JlLFxuICB0YWJTdG9yZSxcbiAgcG9zdFN0b3JlXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3Jlcy9pbmRleC5qcyIsImNvbnN0ICRib2R5ID0gJCgnYm9keScpXG5cbmV4cG9ydCBjb25zdCBpc0hvbWVQYWdlID0gKCkgPT4gJGJvZHkuaXMoJy5ob21lLXRlbXBsYXRlJylcbmV4cG9ydCBjb25zdCBpc1Bvc3RQYWdlID0gKCkgPT4gJGJvZHkuaXMoJy5wb3N0LXRlbXBsYXRlJylcblxuLyoqXG4gKiBob3Jpem9udGFsbHkgc2Nyb2xsXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAqXG4gKiBAZXhhbXBsZVxuICogIGNvbnN0IHN0b3BIU2Nyb2xsID0gaFNjcm9sbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjSi1oc2Nyb2xsLWVsJykpXG4gKiAgc3RvcEhTY3JvbGwoKSAvLyByZW1vdmVFdmVudExpc3RlbmVyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoU2Nyb2xsKGVsKSB7XG4gIGlmICghZWwpIHtcbiAgICBjb25zb2xlLmVycm9yKCdNdXN0IHNwZWNpZnkgZWwhJylcbiAgICByZXR1cm5cbiAgfVxuXG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgd2hlZWwpXG5cbiAgZnVuY3Rpb24gd2hlZWwoZSkge1xuICAgIGNvbnN0IGRlbHRhID0gZS53aGVlbERlbHRhID8gZS53aGVlbERlbHRhIDogLTEgKiBlLmRlbHRhWVxuICAgIGVsLnNjcm9sbExlZnQgKz0gLWRlbHRhXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICByZXR1cm4gKCkgPT4gZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2hlZWwnLCB3aGVlbClcbn1cblxuZXhwb3J0IGNvbnN0IGZvcm1hdCA9IGZ1bmN0aW9uKHRlbXBsYXRlLCB2YXJzKSB7XG4gIHJldHVybiB0ZW1wbGF0ZS5yZXBsYWNlKC9cXCRcXHsoW15cXHtcXH1dKilcXH0vZywgZnVuY3Rpb24oXywgbmFtZSkge1xuICAgIHZhciB2YWx1ZSA9IHZhcnNbbmFtZS50cmltKCldXG4gICAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlICsgJydcbiAgfSlcbn1cblxuY29uc3QgdG9MZW4gPSBmdW5jdGlvbihzb3VyY2UsIGxlbikge1xuICByZXR1cm4gKFxuICAgIEFycmF5LnByb3RvdHlwZS5qb2luLmNhbGwoXG4gICAgICB7XG4gICAgICAgIGxlbmd0aDogbGVuICsgMVxuICAgICAgfSxcbiAgICAgICcwJ1xuICAgICkgKyBzb3VyY2VcbiAgKS5zbGljZSgtbGVuKVxufVxuXG5leHBvcnQgY29uc3QgZm9ybWF0RGF0ZSA9IGZ1bmN0aW9uKHRlbXBsYXRlLCBkYXRlKSB7XG4gIGlmICghZGF0ZSkgcmV0dXJuICcnXG4gIHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZSgvXFwkKFthLXpBLVpdKS9nLCBmdW5jdGlvbihfLCBrZXkpIHtcbiAgICByZXR1cm4gJyR7JyArIGtleSArICd9J1xuICB9KVxuICBkYXRlID0gbmV3IERhdGUoZGF0ZSlcbiAgdmFyIERBWSA9IFsn5pelJywgJ+S4gCcsICfkuownLCAn5LiJJywgJ+WbmycsICfkupQnLCAn5YWtJ11cbiAgcmV0dXJuIGZvcm1hdCh0ZW1wbGF0ZSwge1xuICAgIFk6IHRvTGVuKGRhdGUuZ2V0RnVsbFllYXIoKSwgNCksXG4gICAgeTogdG9MZW4oZGF0ZS5nZXRGdWxsWWVhcigpLCAyKSxcbiAgICBNOiB0b0xlbihkYXRlLmdldE1vbnRoKCkgKyAxLCAyKSxcbiAgICBkOiB0b0xlbihkYXRlLmdldERhdGUoKSwgMiksXG4gICAgRDogREFZW2RhdGUuZ2V0RGF5KCldLFxuICAgIEg6IHRvTGVuKGRhdGUuZ2V0SG91cnMoKSwgMiksXG4gICAgbTogdG9MZW4oZGF0ZS5nZXRNaW51dGVzKCksIDIpLFxuICAgIHM6IHRvTGVuKGRhdGUuZ2V0U2Vjb25kcygpLCAyKVxuICB9KVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzLmpzIiwiaW1wb3J0IGNyZWF0ZUhpc3RvcnkgZnJvbSBcImhpc3RvcnkvY3JlYXRlQnJvd3Nlckhpc3RvcnlcIlxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIaXN0b3J5KClcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGlzdG9yeS5qcyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTQtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIHdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB3YXJuaW5nID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGFyZ3MpIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBhcmdzID0gbmV3IEFycmF5KGxlbiA+IDIgPyBsZW4gLSAyIDogMCk7XG4gICAgZm9yICh2YXIga2V5ID0gMjsga2V5IDwgbGVuOyBrZXkrKykge1xuICAgICAgYXJnc1trZXkgLSAyXSA9IGFyZ3VtZW50c1trZXldO1xuICAgIH1cbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgK1xuICAgICAgICAnbWVzc2FnZSBhcmd1bWVudCdcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdC5sZW5ndGggPCAxMCB8fCAoL15bc1xcV10qJC8pLnRlc3QoZm9ybWF0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnVGhlIHdhcm5pbmcgZm9ybWF0IHNob3VsZCBiZSBhYmxlIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgJyArXG4gICAgICAgICd3YXJuaW5nLiBQbGVhc2UsIHVzZSBhIG1vcmUgZGVzY3JpcHRpdmUgZm9ybWF0IHRoYW46ICcgKyBmb3JtYXRcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICtcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgICB9KTtcbiAgICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgfSBjYXRjaCh4KSB7fVxuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3dhcm5pbmcvYnJvd3Nlci5qcyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIGFkZExlYWRpbmdTbGFzaCA9IGV4cG9ydHMuYWRkTGVhZGluZ1NsYXNoID0gZnVuY3Rpb24gYWRkTGVhZGluZ1NsYXNoKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLycgPyBwYXRoIDogJy8nICsgcGF0aDtcbn07XG5cbnZhciBzdHJpcExlYWRpbmdTbGFzaCA9IGV4cG9ydHMuc3RyaXBMZWFkaW5nU2xhc2ggPSBmdW5jdGlvbiBzdHJpcExlYWRpbmdTbGFzaChwYXRoKSB7XG4gIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nID8gcGF0aC5zdWJzdHIoMSkgOiBwYXRoO1xufTtcblxudmFyIGhhc0Jhc2VuYW1lID0gZXhwb3J0cy5oYXNCYXNlbmFtZSA9IGZ1bmN0aW9uIGhhc0Jhc2VuYW1lKHBhdGgsIHByZWZpeCkge1xuICByZXR1cm4gbmV3IFJlZ0V4cCgnXicgKyBwcmVmaXggKyAnKFxcXFwvfFxcXFw/fCN8JCknLCAnaScpLnRlc3QocGF0aCk7XG59O1xuXG52YXIgc3RyaXBCYXNlbmFtZSA9IGV4cG9ydHMuc3RyaXBCYXNlbmFtZSA9IGZ1bmN0aW9uIHN0cmlwQmFzZW5hbWUocGF0aCwgcHJlZml4KSB7XG4gIHJldHVybiBoYXNCYXNlbmFtZShwYXRoLCBwcmVmaXgpID8gcGF0aC5zdWJzdHIocHJlZml4Lmxlbmd0aCkgOiBwYXRoO1xufTtcblxudmFyIHN0cmlwVHJhaWxpbmdTbGFzaCA9IGV4cG9ydHMuc3RyaXBUcmFpbGluZ1NsYXNoID0gZnVuY3Rpb24gc3RyaXBUcmFpbGluZ1NsYXNoKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguY2hhckF0KHBhdGgubGVuZ3RoIC0gMSkgPT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aDtcbn07XG5cbnZhciBwYXJzZVBhdGggPSBleHBvcnRzLnBhcnNlUGF0aCA9IGZ1bmN0aW9uIHBhcnNlUGF0aChwYXRoKSB7XG4gIHZhciBwYXRobmFtZSA9IHBhdGggfHwgJy8nO1xuICB2YXIgc2VhcmNoID0gJyc7XG4gIHZhciBoYXNoID0gJyc7XG5cbiAgdmFyIGhhc2hJbmRleCA9IHBhdGhuYW1lLmluZGV4T2YoJyMnKTtcbiAgaWYgKGhhc2hJbmRleCAhPT0gLTEpIHtcbiAgICBoYXNoID0gcGF0aG5hbWUuc3Vic3RyKGhhc2hJbmRleCk7XG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZS5zdWJzdHIoMCwgaGFzaEluZGV4KTtcbiAgfVxuXG4gIHZhciBzZWFyY2hJbmRleCA9IHBhdGhuYW1lLmluZGV4T2YoJz8nKTtcbiAgaWYgKHNlYXJjaEluZGV4ICE9PSAtMSkge1xuICAgIHNlYXJjaCA9IHBhdGhuYW1lLnN1YnN0cihzZWFyY2hJbmRleCk7XG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZS5zdWJzdHIoMCwgc2VhcmNoSW5kZXgpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZTogcGF0aG5hbWUsXG4gICAgc2VhcmNoOiBzZWFyY2ggPT09ICc/JyA/ICcnIDogc2VhcmNoLFxuICAgIGhhc2g6IGhhc2ggPT09ICcjJyA/ICcnIDogaGFzaFxuICB9O1xufTtcblxudmFyIGNyZWF0ZVBhdGggPSBleHBvcnRzLmNyZWF0ZVBhdGggPSBmdW5jdGlvbiBjcmVhdGVQYXRoKGxvY2F0aW9uKSB7XG4gIHZhciBwYXRobmFtZSA9IGxvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgc2VhcmNoID0gbG9jYXRpb24uc2VhcmNoLFxuICAgICAgaGFzaCA9IGxvY2F0aW9uLmhhc2g7XG5cblxuICB2YXIgcGF0aCA9IHBhdGhuYW1lIHx8ICcvJztcblxuICBpZiAoc2VhcmNoICYmIHNlYXJjaCAhPT0gJz8nKSBwYXRoICs9IHNlYXJjaC5jaGFyQXQoMCkgPT09ICc/JyA/IHNlYXJjaCA6ICc/JyArIHNlYXJjaDtcblxuICBpZiAoaGFzaCAmJiBoYXNoICE9PSAnIycpIHBhdGggKz0gaGFzaC5jaGFyQXQoMCkgPT09ICcjJyA/IGhhc2ggOiAnIycgKyBoYXNoO1xuXG4gIHJldHVybiBwYXRoO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9QYXRoVXRpbHMuanMiLCJpbXBvcnQgJy4vY29tcG9uZW50cy9lbWl0dGVyJ1xuXG5pbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnXG5cbmltcG9ydCAncGFydGlhbHMvcG9zdC10YWInXG5pbXBvcnQgJ3BhcnRpYWxzL3NpZGUtYmFyLWhlYWRlcidcbmltcG9ydCAncGFydGlhbHMvc2lkZS1iYXItYm9keSdcbmltcG9ydCAncGFydGlhbHMvZm9vdGVyJ1xuaW1wb3J0ICdwYXJ0aWFscy9wb3N0J1xuaW1wb3J0ICdwYXJ0aWFscy9wb3N0LW5hdidcbmltcG9ydCAncGFydGlhbHMvaG9tZSdcbmltcG9ydCAncGFydGlhbHMvYXV0aG9yJ1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb2Rlci5qcyIsImltcG9ydCBtaXR0IGZyb20gJ21pdHQnXG53aW5kb3cuZW1pdHRlciA9IG1pdHQoKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2VtaXR0ZXIvaW5kZXguanMiLCIvLyAgICAgIFxuLy8gQW4gZXZlbnQgaGFuZGxlciBjYW4gdGFrZSBhbiBvcHRpb25hbCBldmVudCBhcmd1bWVudFxuLy8gYW5kIHNob3VsZCBub3QgcmV0dXJuIGEgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuLy8gQW4gYXJyYXkgb2YgYWxsIGN1cnJlbnRseSByZWdpc3RlcmVkIGV2ZW50IGhhbmRsZXJzIGZvciBhIHR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4vLyBBIG1hcCBvZiBldmVudCB0eXBlcyBhbmQgdGhlaXIgY29ycmVzcG9uZGluZyBldmVudCBoYW5kbGVycy5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgXG5cbi8qKiBNaXR0OiBUaW55ICh+MjAwYikgZnVuY3Rpb25hbCBldmVudCBlbWl0dGVyIC8gcHVic3ViLlxuICogIEBuYW1lIG1pdHRcbiAqICBAcmV0dXJucyB7TWl0dH1cbiAqL1xuZnVuY3Rpb24gbWl0dChhbGwgICAgICAgICAgICAgICAgICkge1xuXHRhbGwgPSBhbGwgfHwgT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuXHRyZXR1cm4ge1xuXHRcdC8qKlxuXHRcdCAqIFJlZ2lzdGVyIGFuIGV2ZW50IGhhbmRsZXIgZm9yIHRoZSBnaXZlbiB0eXBlLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtICB7U3RyaW5nfSB0eXBlXHRUeXBlIG9mIGV2ZW50IHRvIGxpc3RlbiBmb3IsIG9yIGBcIipcImAgZm9yIGFsbCBldmVudHNcblx0XHQgKiBAcGFyYW0gIHtGdW5jdGlvbn0gaGFuZGxlciBGdW5jdGlvbiB0byBjYWxsIGluIHJlc3BvbnNlIHRvIGdpdmVuIGV2ZW50XG5cdFx0ICogQG1lbWJlck9mIG1pdHRcblx0XHQgKi9cblx0XHRvbjogZnVuY3Rpb24gb24odHlwZSAgICAgICAgLCBoYW5kbGVyICAgICAgICAgICAgICApIHtcblx0XHRcdChhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKTtcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogUmVtb3ZlIGFuIGV2ZW50IGhhbmRsZXIgZm9yIHRoZSBnaXZlbiB0eXBlLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtICB7U3RyaW5nfSB0eXBlXHRUeXBlIG9mIGV2ZW50IHRvIHVucmVnaXN0ZXIgYGhhbmRsZXJgIGZyb20sIG9yIGBcIipcImBcblx0XHQgKiBAcGFyYW0gIHtGdW5jdGlvbn0gaGFuZGxlciBIYW5kbGVyIGZ1bmN0aW9uIHRvIHJlbW92ZVxuXHRcdCAqIEBtZW1iZXJPZiBtaXR0XG5cdFx0ICovXG5cdFx0b2ZmOiBmdW5jdGlvbiBvZmYodHlwZSAgICAgICAgLCBoYW5kbGVyICAgICAgICAgICAgICApIHtcblx0XHRcdGlmIChhbGxbdHlwZV0pIHtcblx0XHRcdFx0YWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIEludm9rZSBhbGwgaGFuZGxlcnMgZm9yIHRoZSBnaXZlbiB0eXBlLlxuXHRcdCAqIElmIHByZXNlbnQsIGBcIipcImAgaGFuZGxlcnMgYXJlIGludm9rZWQgYWZ0ZXIgdHlwZS1tYXRjaGVkIGhhbmRsZXJzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgIFRoZSBldmVudCB0eXBlIHRvIGludm9rZVxuXHRcdCAqIEBwYXJhbSB7QW55fSBbZXZ0XSAgQW55IHZhbHVlIChvYmplY3QgaXMgcmVjb21tZW5kZWQgYW5kIHBvd2VyZnVsKSwgcGFzc2VkIHRvIGVhY2ggaGFuZGxlclxuXHRcdCAqIEBtZW1iZXJvZiBtaXR0XG5cdFx0ICovXG5cdFx0ZW1pdDogZnVuY3Rpb24gZW1pdCh0eXBlICAgICAgICAsIGV2dCAgICAgKSB7XG5cdFx0XHQoYWxsW3R5cGVdIHx8IFtdKS5tYXAoZnVuY3Rpb24gKGhhbmRsZXIpIHsgaGFuZGxlcihldnQpOyB9KTtcblx0XHRcdChhbGxbJyonXSB8fCBbXSkubWFwKGZ1bmN0aW9uIChoYW5kbGVyKSB7IGhhbmRsZXIodHlwZSwgZXZ0KTsgfSk7XG5cdFx0fVxuXHR9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBtaXR0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWl0dC5lcy5qcy5tYXBcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9taXR0L2Rpc3QvbWl0dC5lcy5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzL2luZGV4LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCBjb25maWcgZnJvbSAnY29uZmlnJ1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnXG5pbXBvcnQgeyB0YWJTdG9yZSB9IGZyb20gJyMvc3RvcmVzJ1xuaW1wb3J0IGhpc3RvcnkgZnJvbSAnIy9oaXN0b3J5J1xuaW1wb3J0IHsgaFNjcm9sbCwgaXNQb3N0UGFnZSB9IGZyb20gJyMvdXRpbHMnXG5cbiQoZnVuY3Rpb24oKSB7XG4gIGlmICghaXNQb3N0UGFnZSgpKSByZXR1cm5cblxuICBsZXQgJHBvc3RUYWJzID0gJCgnI0otcG9zdC10YWInKVxuICBjb25zdCAkc2Nyb2xsV3JhcCA9ICQoJy5KLXBvc3QtdGFiLXNjcm9sbGVyLXdyYXAnKVxuICBjb25zdCBuZFNjcm9sbFdyYXAgPSAkc2Nyb2xsV3JhcC5nZXQoMClcblxuICBlbWl0dGVyLm9uKCdhZGQtcG9zdC10YWInLCBwb3N0ID0+IHtcbiAgICBjb25zdCB0YWJzID0gdGFiU3RvcmUuZ2V0VGFicygpXG4gICAgaWYgKCF0YWJzLmZpbHRlcih0YWIgPT4gdGFiLmlkID09PSBwb3N0LmlkKS5sZW5ndGgpIHtcbiAgICAgIHRhYnMucHVzaCh7IC4uLnBvc3QgfSlcblxuICAgICAgdGFiU3RvcmUuc2V0VGFicyh0YWJzKVxuICAgIH1cblxuICAgIGVtaXR0ZXIuZW1pdCgndGFiLXJlZnJlc2gnLCB7IC4uLnBvc3QgfSlcbiAgfSlcblxuICBlbWl0dGVyLm9uKCd0YWItcmVmcmVzaCcsIChhY3RpdmUgPSB7fSkgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZUlkID0gYWN0aXZlLmlkXG4gICAgY29uc3QgdGFicyA9IHRhYlN0b3JlLmdldFRhYnMoKVxuICAgIGNvbnN0IGN1cnJlbnRUYWIgPSB0YWJTdG9yZS5jdXJyZW50VGFiXG5cbiAgICBjb25zdCAkYWN0aXZlID0gJCgnI0otcG9zdC10YWInKVxuICAgICAgLmh0bWwoXG4gICAgICAgIHRhYnNcbiAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgdGFiID0+XG4gICAgICAgICAgICAgIGA8ZGl2IHRpdGxlPVwiJHt0YWIudGl0bGV9XCIgY2xhc3M9XCJKLXRhYi1pdGVtIGxpZ2h0IGhvdmVyLW9wYWNpdHkxIGZsZXgtaXRlbTAgc2luZ2xlLWxpbmUgaXRlbSAke2FjdGl2ZUlkID09PSB0YWIuaWQgPyAnYWN0aXZlJyA6ICcnfVwiIGRhdGEtaWQ9XCIke1xuICAgICAgICAgICAgICAgIHRhYi5pZFxuICAgICAgICAgICAgICB9XCI+JHt0YWIudGl0bGV9PGkgY2xhc3M9XCJjbG9zZSBKLXBvc3QtdGFiLWNsb3NlIGxpZ2h0ZXIgaG92ZXItb3BhY2l0eTFcIiBkYXRhLXNsdWc9XCIke3RhYi5zbHVnfVwiPjwvaT48L2Rpdj5gXG4gICAgICAgICAgKVxuICAgICAgICAgIC5qb2luKCcnKVxuICAgICAgKVxuICAgICAgLmZpbmQoJy5hY3RpdmUnKVxuXG4gICAgLy8gbm90IHJlZmV0Y2ggY3VycmVudCBwb3N0XG4gICAgaWYgKCFjdXJyZW50VGFiIHx8IGN1cnJlbnRUYWIuaWQgIT09IGFjdGl2ZUlkKSB7XG4gICAgICBoaXN0b3J5LnB1c2goYWN0aXZlLnVybCwgeyAuLi5hY3RpdmUgfSlcbiAgICAgIHRhYlN0b3JlLnNldEN1cnJlbnRUYWIoeyAuLi5hY3RpdmUgfSlcbiAgICB9XG5cbiAgICBzY3JvbGwydmlldygkYWN0aXZlKVxuICB9KVxuXG4gICRwb3N0VGFic1xuICAgIC5vbignY2xpY2snLCAnLkotcG9zdC10YWItY2xvc2UnLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICB0YWJTdG9yZS5kZWxldGVUYWJJdGVtKFxuICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgLnBhcmVudCgnLkotdGFiLWl0ZW0nKVxuICAgICAgICAgIC5kYXRhKCdpZCcpXG4gICAgICApXG4gICAgfSlcbiAgICAub24oJ2NsaWNrJywgJy5KLXRhYi1pdGVtJywgZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCAkdGhpcyA9ICQodGhpcylcbiAgICAgIGlmICgkdGhpcy5pcygnLmFjdGl2ZScpKSByZXR1cm5cblxuICAgICAgY29uc3QgaWQgPSAkdGhpcy5kYXRhKCdpZCcpXG4gICAgICBjb25zdCBjdXJyZW50VGFiID0gdGFiU3RvcmUuZ2V0VGFicygpLmZpbHRlcih0YWIgPT4gdGFiLmlkID09PSBpZClbMF0gfHwge31cblxuICAgICAgJHRoaXNcbiAgICAgICAgLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgICAgICAuc2libGluZ3MoKVxuICAgICAgICAucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICB0YWJTdG9yZS5zZXRDdXJyZW50VGFiKGN1cnJlbnRUYWIpXG4gICAgICBoaXN0b3J5LnB1c2goY3VycmVudFRhYi51cmwsIHsgLi4uY3VycmVudFRhYiB9KVxuXG4gICAgICBzY3JvbGwydmlldygkdGhpcylcbiAgICB9KVxuXG4gIC8qKlxuICAgKiBzY3JvbGwgc2VsZWN0ZWQgdGFiIGl0ZW0gaW50byB2aWV3IGlmIGl0IGlzIG91dCBvZiB2aWV3XG4gICAqL1xuICBmdW5jdGlvbiBzY3JvbGwydmlldygkYWN0aXZlKSB7XG4gICAgLy8gd3JhcCBlbGVtZW50XG4gICAgY29uc3Qgd3JhcFdpZHRoID0gJHNjcm9sbFdyYXAud2lkdGgoKVxuICAgIGNvbnN0IHdyYXBTY3JvbGxMZWZ0ID0gJHNjcm9sbFdyYXAuc2Nyb2xsTGVmdCgpXG4gICAgY29uc3Qgd3JhcFJpZ2h0ID0gd3JhcFdpZHRoICsgd3JhcFNjcm9sbExlZnRcbiAgICBjb25zdCB0aHJlc2hvbGQgPSAxMFxuXG4gICAgLy8gYWN0aXZlIGVsZW1lbnRcbiAgICBjb25zdCBuZEFjdGl2ZSA9ICRhY3RpdmUuZ2V0KDApXG4gICAgY29uc3QgYWN0aXZlV2lkdGggPSAkYWN0aXZlLm91dGVyV2lkdGgoKVxuICAgIGNvbnN0IGFjdGl2ZUxlZnQgPSBuZEFjdGl2ZS5vZmZzZXRMZWZ0XG4gICAgY29uc3QgYWN0aXZlUmlnaHQgPSBhY3RpdmVMZWZ0ICsgYWN0aXZlV2lkdGhcbiAgICBpZiAoYWN0aXZlUmlnaHQgPiB3cmFwV2lkdGggKyB3cmFwU2Nyb2xsTGVmdCkge1xuICAgICAgbmRTY3JvbGxXcmFwLnNjcm9sbExlZnQgPSBhY3RpdmVSaWdodCAtIHdyYXBXaWR0aCAtIHRocmVzaG9sZFxuICAgIH1cbiAgICBpZiAoYWN0aXZlTGVmdCA8PSB3cmFwU2Nyb2xsTGVmdCkge1xuICAgICAgbmRTY3JvbGxXcmFwLnNjcm9sbExlZnQgPSBhY3RpdmVMZWZ0IC0gdGhyZXNob2xkXG4gICAgfVxuICB9XG5cbiAgaFNjcm9sbCgkc2Nyb2xsV3JhcC5nZXQoMCkpXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFydGlhbHMvcG9zdC10YWIvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcInRoZW1lc1wiOltcImFieXNzLWNvbG9yXCIsXCJkYXJrLWRlZmF1bHRcIixcInJlZFwiXX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3RoZW1lcy9yZXN1bHQuanNvblxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhcnRpYWxzL3Bvc3QtdGFiL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCBjb25maWcgZnJvbSAnY29uZmlnJ1xuY29uc3QgbHMgPSBsb2NhbFN0b3JhZ2VcbmNvbnN0IGxzVGhlbWVLZXkgPSBjb25maWcubHNUaGVtZUtleVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIHRoZW1lID0gbHMuZ2V0SXRlbShsc1RoZW1lS2V5KSB8fCBjb25maWcuZGVmYXVsdFRoZW1lXG4gIFxuICBzZXRUaGVtZSAodGhlbWUpIHtcbiAgICB0aGlzLnRoZW1lID0gdGhlbWVcbiAgICBscy5zZXRJdGVtKGxzVGhlbWVLZXksIHRoZW1lKVxuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3Jlcy9UaGVtZVN0b3JlLmpzIiwiaW1wb3J0IGNvbmZpZyBmcm9tICdjb25maWcnXG5cbmNvbnN0IGxzUG9zdFRhYktleSA9IGNvbmZpZy5sc1Bvc3RUYWJLZXlcbmNvbnN0IGxzUG9zdFRhYkV4cGlyYXRpb24gPSBjb25maWcubHNQb3N0VGFiRXhwaXJhdGlvblxuY29uc3QgbHMgPSBsb2NhbFN0b3JhZ2VcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjdXJyZW50VGFiID0gbnVsbFxuXG4gIGdldFRhYnMoKSB7XG4gICAgbGV0IHRhYnMgPSBscy5nZXRJdGVtKGxzUG9zdFRhYktleSkgfHwgJydcbiAgICBjb25zdCBbdGFic0RhdGEsIHRpbWVzdGFtcF0gPSB0YWJzLnNwbGl0KCdfX18nKVxuICAgIGlmICghdGFicyB8fCAhdGltZXN0YW1wIHx8ICtuZXcgRGF0ZSgpIC0gdGltZXN0YW1wID49IGxzUG9zdFRhYkV4cGlyYXRpb24pIHJldHVybiBbXVxuXG4gICAgcmV0dXJuIHRhYnNEYXRhLnNwbGl0KCcsJykubWFwKHRhYiA9PiB7XG4gICAgICBjb25zdCBbaWQsIHRpdGxlLCB1cmwsIHNsdWddID0gdGFiLnNwbGl0KCc6JylcbiAgICAgIHJldHVybiB7IGlkLCB0aXRsZSwgdXJsLCBzbHVnIH1cbiAgICB9KVxuICB9XG5cbiAgc2V0VGFicyh0YWJzKSB7XG4gICAgbHMuc2V0SXRlbShsc1Bvc3RUYWJLZXksIHRhYnMubGVuZ3RoID8gdGFicy5tYXAodGFiID0+IGAke3RhYi5pZH06JHt0YWIudGl0bGV9OiR7dGFiLnVybH06JHt0YWIuc2x1Z31gKS5qb2luKCcsJykgKyAnX19fJyArICgrbmV3IERhdGUoKSkgOiAnJylcbiAgfVxuXG4gIHNldEN1cnJlbnRUYWIodGFiKSB7XG4gICAgdGhpcy5jdXJyZW50VGFiID0gdGFiXG4gIH1cblxuICBkZWxldGVUYWJJdGVtKGlkKSB7XG4gICAgbGV0IHRhYnMgPSB0aGlzLmdldFRhYnMoKVxuICAgIGxldCBuZXh0VGFiID0gbnVsbFxuICAgIGNvbnN0IGlzQ3VycmVudFRhYiA9IGlkID09PSB0aGlzLmN1cnJlbnRUYWIuaWRcblxuICAgIGNvbnN0IGRlbGV0ZWRJZHggPSB0YWJzLmZpbmRJbmRleCh0YWIgPT4gdGFiLmlkID09PSBpZClcbiAgICB0YWJzID0gdGFicy5maWx0ZXIoKHRhYiwgaWR4KSA9PiB0YWIuaWQgIT09IGlkKVxuXG4gICAgdGhpcy5zZXRUYWJzKHRhYnMpXG5cbiAgICBpZiAodGFicy5sZW5ndGgpIHtcbiAgICAgIGlmIChpc0N1cnJlbnRUYWIpIHtcbiAgICAgICAgbmV4dFRhYiA9IGRlbGV0ZWRJZHggPT09IDAgPyB0YWJzWzBdIDogdGFic1tkZWxldGVkSWR4IC0gMV1cbiAgICAgIH1cblxuICAgICAgZW1pdHRlci5lbWl0KCd0YWItcmVmcmVzaCcsIG5leHRUYWIgfHwgdGhpcy5jdXJyZW50VGFiKVxuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhdGlvbi5ocmVmID0gJy8nXG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmVzL1RhYlN0b3JlLmpzIiwiaW1wb3J0IGNvbmZpZyBmcm9tICdjb25maWcnXG5pbXBvcnQgeyB0YWJTdG9yZSB9IGZyb20gJyMvc3RvcmVzJ1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gJyMvdXRpbHMnXG5jb25zdCBscyA9IGxvY2FsU3RvcmFnZVxuY29uc3QgbHNQb3N0c0tleSA9IGNvbmZpZy5sc1Bvc3RzS2V5XG5jb25zdCBsc1Bvc3RzRXhwaXJhdGlvbiA9IGNvbmZpZy5sc1Bvc3RzRXhwaXJhdGlvblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGZldGNoUG9zdChpZCkge1xuICAgIGNvbnN0IGNhY2hlID0gdGhpcy5mcm9tQ2FjaGUoaWQpXG5cbiAgICByZXR1cm4gY2FjaGVcbiAgICAgID8gJC5EZWZlcnJlZCgpLnJlc29sdmUoY2FjaGUpXG4gICAgICA6ICQuZ2V0KGdob3N0LnVybC5hcGkoYHBvc3RzLyR7aWR9YCksIHtcbiAgICAgICAgICBpbmNsdWRlOiAnYXV0aG9yJ1xuICAgICAgICB9KVxuICAgICAgICAgIC5mYWlsKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICBpZiAoZXJyLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgICAgICAgIHRhYlN0b3JlLmRlbGV0ZVRhYkl0ZW0oaWQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuZG9uZShkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkYXRhLnBvc3RzWzBdIHx8IHt9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwb3N0KVxuICAgICAgICAgICAgdGhpcy5jYWNoZVBvc3QoaWQsIHBvc3QpXG4gICAgICAgICAgICByZXR1cm4gcG9zdFxuICAgICAgICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogUmVhZCBwb3N0IGZyb20gY2FjaGUgZmlyc3RcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlkIC0+IHBvc3QgaWRcbiAgICogIC0gb25seSBjYWNoZSA1bWluXG4gICAqL1xuICBmcm9tQ2FjaGUoaWQpIHtcbiAgICBsZXQgbHNQb3N0cyA9IGxzLmdldEl0ZW0obHNQb3N0c0tleSlcbiAgICBsc1Bvc3RzID0gbHNQb3N0cyA/IEpTT04ucGFyc2UobHNQb3N0cykgOiB7fVxuXG4gICAgY29uc3QgcG9zdCA9IGxzUG9zdHNbaWRdXG4gICAgY29uc3QgdXNlYWJsZSA9IHBvc3QgJiYgK25ldyBEYXRlKCkgLSBwb3N0LnRpbWVzdGFtcCA8PSBsc1Bvc3RzRXhwaXJhdGlvblxuXG4gICAgaWYgKHVzZWFibGUpIHtcbiAgICAgIGNvbnNvbGUuaW5mbygnW1Bvc3QgcmVhZGVkIGZyb20gY2FjaGVdOicsIHBvc3QudGl0bGUpXG4gICAgICBjb25zdCBhdXRob3IgPSBKU09OLnBhcnNlKHBvc3QuYXV0aG9yKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcG9zdHM6IFt7IC4uLnBvc3QsIGF1dGhvciwgZnJvbUNhY2hlOiAxIH1dXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGRlbGV0ZVBvc3RGcm9tQ2FjaGUoaWQpIHtcbiAgICBsZXQgbHNQb3N0cyA9IGxzLmdldEl0ZW0obHNQb3N0c0tleSlcbiAgICBsc1Bvc3RzID0gbHNQb3N0cyA/IEpTT04ucGFyc2UobHNQb3N0cykgOiB7fVxuICAgIGNvbnNvbGUubG9nKCdbZGVsZXRlZCBwb3N0IHN1Y2Nlc3NdOicsIGxzUG9zdHNbaWRdLnRpdGxlKVxuXG4gICAgZGVsZXRlIGxzUG9zdHNbaWRdXG5cbiAgICBscy5zZXRJdGVtKGxzUG9zdHNLZXksIEpTT04uc3RyaW5naWZ5KGxzUG9zdHMpKVxuICB9XG5cbiAgY2FjaGVQb3N0KGlkLCBwb3N0KSB7XG4gICAgaWYgKHBvc3QuZnJvbUNhY2hlKSByZXR1cm5cblxuICAgIGxldCBsc1Bvc3RzID0gbHMuZ2V0SXRlbShsc1Bvc3RzS2V5KVxuICAgIGxzUG9zdHMgPSBsc1Bvc3RzID8gSlNPTi5wYXJzZShsc1Bvc3RzKSA6IHt9XG5cbiAgICBsc1Bvc3RzW2lkXSA9IHtcbiAgICAgIC4uLnBvc3QsXG4gICAgICBhdXRob3I6IEpTT04uc3RyaW5naWZ5KHBvc3QuYXV0aG9yKSxcbiAgICAgIHRpbWVzdGFtcDogK25ldyBEYXRlKClcbiAgICB9XG5cbiAgICAvLyBjYWNoZSB1cCB0byA1IHBvc3RzXG4gICAgLy8gZGVsZXRlIHRoZSBvbGRlc3Qgb25lIGlmIG1vcmUgdGhhbiA1XG4gICAgbGV0IGlkcyA9IE9iamVjdC5rZXlzKGxzUG9zdHMpXG4gICAgaWYgKGlkcy5sZW5ndGggPiA1KSB7XG4gICAgICBjb25zdCBzaG91bGREZWxldGVJZCA9IGlkc1xuICAgICAgICAubWFwKGlkID0+ICh7XG4gICAgICAgICAgdGltZXN0YW1wOiBsc1Bvc3RzW2lkXS50aW1lc3RhbXAsXG4gICAgICAgICAgaWRcbiAgICAgICAgfSkpXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLnRpbWVzdGFtcCAtIGIudGltZXN0YW1wKVxuICAgICAgICAubWFwKGl0ZW0gPT4gaXRlbS5pZClcbiAgICAgICAgLnNoaWZ0KClcblxuICAgICAgZGVsZXRlIGxzUG9zdHNbc2hvdWxkRGVsZXRlSWRdXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coaWRzLmxlbmd0aClcbiAgICBscy5zZXRJdGVtKGxzUG9zdHNLZXksIEpTT04uc3RyaW5naWZ5KGxzUG9zdHMpKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmVzL1Bvc3RTdG9yZS5qcyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF9Mb2NhdGlvblV0aWxzID0gcmVxdWlyZSgnLi9Mb2NhdGlvblV0aWxzJyk7XG5cbnZhciBfUGF0aFV0aWxzID0gcmVxdWlyZSgnLi9QYXRoVXRpbHMnKTtcblxudmFyIF9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlciA9IHJlcXVpcmUoJy4vY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXInKTtcblxudmFyIF9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlcik7XG5cbnZhciBfRE9NVXRpbHMgPSByZXF1aXJlKCcuL0RPTVV0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBQb3BTdGF0ZUV2ZW50ID0gJ3BvcHN0YXRlJztcbnZhciBIYXNoQ2hhbmdlRXZlbnQgPSAnaGFzaGNoYW5nZSc7XG5cbnZhciBnZXRIaXN0b3J5U3RhdGUgPSBmdW5jdGlvbiBnZXRIaXN0b3J5U3RhdGUoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5LnN0YXRlIHx8IHt9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gSUUgMTEgc29tZXRpbWVzIHRocm93cyB3aGVuIGFjY2Vzc2luZyB3aW5kb3cuaGlzdG9yeS5zdGF0ZVxuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vUmVhY3RUcmFpbmluZy9oaXN0b3J5L3B1bGwvMjg5XG4gICAgcmV0dXJuIHt9O1xuICB9XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoaXN0b3J5IG9iamVjdCB0aGF0IHVzZXMgdGhlIEhUTUw1IGhpc3RvcnkgQVBJIGluY2x1ZGluZ1xuICogcHVzaFN0YXRlLCByZXBsYWNlU3RhdGUsIGFuZCB0aGUgcG9wc3RhdGUgZXZlbnQuXG4gKi9cbnZhciBjcmVhdGVCcm93c2VySGlzdG9yeSA9IGZ1bmN0aW9uIGNyZWF0ZUJyb3dzZXJIaXN0b3J5KCkge1xuICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KShfRE9NVXRpbHMuY2FuVXNlRE9NLCAnQnJvd3NlciBoaXN0b3J5IG5lZWRzIGEgRE9NJyk7XG5cbiAgdmFyIGdsb2JhbEhpc3RvcnkgPSB3aW5kb3cuaGlzdG9yeTtcbiAgdmFyIGNhblVzZUhpc3RvcnkgPSAoMCwgX0RPTVV0aWxzLnN1cHBvcnRzSGlzdG9yeSkoKTtcbiAgdmFyIG5lZWRzSGFzaENoYW5nZUxpc3RlbmVyID0gISgwLCBfRE9NVXRpbHMuc3VwcG9ydHNQb3BTdGF0ZU9uSGFzaENoYW5nZSkoKTtcblxuICB2YXIgX3Byb3BzJGZvcmNlUmVmcmVzaCA9IHByb3BzLmZvcmNlUmVmcmVzaCxcbiAgICAgIGZvcmNlUmVmcmVzaCA9IF9wcm9wcyRmb3JjZVJlZnJlc2ggPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX3Byb3BzJGZvcmNlUmVmcmVzaCxcbiAgICAgIF9wcm9wcyRnZXRVc2VyQ29uZmlybSA9IHByb3BzLmdldFVzZXJDb25maXJtYXRpb24sXG4gICAgICBnZXRVc2VyQ29uZmlybWF0aW9uID0gX3Byb3BzJGdldFVzZXJDb25maXJtID09PSB1bmRlZmluZWQgPyBfRE9NVXRpbHMuZ2V0Q29uZmlybWF0aW9uIDogX3Byb3BzJGdldFVzZXJDb25maXJtLFxuICAgICAgX3Byb3BzJGtleUxlbmd0aCA9IHByb3BzLmtleUxlbmd0aCxcbiAgICAgIGtleUxlbmd0aCA9IF9wcm9wcyRrZXlMZW5ndGggPT09IHVuZGVmaW5lZCA/IDYgOiBfcHJvcHMka2V5TGVuZ3RoO1xuXG4gIHZhciBiYXNlbmFtZSA9IHByb3BzLmJhc2VuYW1lID8gKDAsIF9QYXRoVXRpbHMuc3RyaXBUcmFpbGluZ1NsYXNoKSgoMCwgX1BhdGhVdGlscy5hZGRMZWFkaW5nU2xhc2gpKHByb3BzLmJhc2VuYW1lKSkgOiAnJztcblxuICB2YXIgZ2V0RE9NTG9jYXRpb24gPSBmdW5jdGlvbiBnZXRET01Mb2NhdGlvbihoaXN0b3J5U3RhdGUpIHtcbiAgICB2YXIgX3JlZiA9IGhpc3RvcnlTdGF0ZSB8fCB7fSxcbiAgICAgICAga2V5ID0gX3JlZi5rZXksXG4gICAgICAgIHN0YXRlID0gX3JlZi5zdGF0ZTtcblxuICAgIHZhciBfd2luZG93JGxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uLFxuICAgICAgICBwYXRobmFtZSA9IF93aW5kb3ckbG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICAgIHNlYXJjaCA9IF93aW5kb3ckbG9jYXRpb24uc2VhcmNoLFxuICAgICAgICBoYXNoID0gX3dpbmRvdyRsb2NhdGlvbi5oYXNoO1xuXG5cbiAgICB2YXIgcGF0aCA9IHBhdGhuYW1lICsgc2VhcmNoICsgaGFzaDtcblxuICAgICgwLCBfd2FybmluZzIuZGVmYXVsdCkoIWJhc2VuYW1lIHx8ICgwLCBfUGF0aFV0aWxzLmhhc0Jhc2VuYW1lKShwYXRoLCBiYXNlbmFtZSksICdZb3UgYXJlIGF0dGVtcHRpbmcgdG8gdXNlIGEgYmFzZW5hbWUgb24gYSBwYWdlIHdob3NlIFVSTCBwYXRoIGRvZXMgbm90IGJlZ2luICcgKyAnd2l0aCB0aGUgYmFzZW5hbWUuIEV4cGVjdGVkIHBhdGggXCInICsgcGF0aCArICdcIiB0byBiZWdpbiB3aXRoIFwiJyArIGJhc2VuYW1lICsgJ1wiLicpO1xuXG4gICAgaWYgKGJhc2VuYW1lKSBwYXRoID0gKDAsIF9QYXRoVXRpbHMuc3RyaXBCYXNlbmFtZSkocGF0aCwgYmFzZW5hbWUpO1xuXG4gICAgcmV0dXJuICgwLCBfTG9jYXRpb25VdGlscy5jcmVhdGVMb2NhdGlvbikocGF0aCwgc3RhdGUsIGtleSk7XG4gIH07XG5cbiAgdmFyIGNyZWF0ZUtleSA9IGZ1bmN0aW9uIGNyZWF0ZUtleSgpIHtcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIGtleUxlbmd0aCk7XG4gIH07XG5cbiAgdmFyIHRyYW5zaXRpb25NYW5hZ2VyID0gKDAsIF9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlcjIuZGVmYXVsdCkoKTtcblxuICB2YXIgc2V0U3RhdGUgPSBmdW5jdGlvbiBzZXRTdGF0ZShuZXh0U3RhdGUpIHtcbiAgICBfZXh0ZW5kcyhoaXN0b3J5LCBuZXh0U3RhdGUpO1xuXG4gICAgaGlzdG9yeS5sZW5ndGggPSBnbG9iYWxIaXN0b3J5Lmxlbmd0aDtcblxuICAgIHRyYW5zaXRpb25NYW5hZ2VyLm5vdGlmeUxpc3RlbmVycyhoaXN0b3J5LmxvY2F0aW9uLCBoaXN0b3J5LmFjdGlvbik7XG4gIH07XG5cbiAgdmFyIGhhbmRsZVBvcFN0YXRlID0gZnVuY3Rpb24gaGFuZGxlUG9wU3RhdGUoZXZlbnQpIHtcbiAgICAvLyBJZ25vcmUgZXh0cmFuZW91cyBwb3BzdGF0ZSBldmVudHMgaW4gV2ViS2l0LlxuICAgIGlmICgoMCwgX0RPTVV0aWxzLmlzRXh0cmFuZW91c1BvcHN0YXRlRXZlbnQpKGV2ZW50KSkgcmV0dXJuO1xuXG4gICAgaGFuZGxlUG9wKGdldERPTUxvY2F0aW9uKGV2ZW50LnN0YXRlKSk7XG4gIH07XG5cbiAgdmFyIGhhbmRsZUhhc2hDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVIYXNoQ2hhbmdlKCkge1xuICAgIGhhbmRsZVBvcChnZXRET01Mb2NhdGlvbihnZXRIaXN0b3J5U3RhdGUoKSkpO1xuICB9O1xuXG4gIHZhciBmb3JjZU5leHRQb3AgPSBmYWxzZTtcblxuICB2YXIgaGFuZGxlUG9wID0gZnVuY3Rpb24gaGFuZGxlUG9wKGxvY2F0aW9uKSB7XG4gICAgaWYgKGZvcmNlTmV4dFBvcCkge1xuICAgICAgZm9yY2VOZXh0UG9wID0gZmFsc2U7XG4gICAgICBzZXRTdGF0ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYWN0aW9uID0gJ1BPUCc7XG5cbiAgICAgIHRyYW5zaXRpb25NYW5hZ2VyLmNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICAgIGlmIChvaykge1xuICAgICAgICAgIHNldFN0YXRlKHsgYWN0aW9uOiBhY3Rpb24sIGxvY2F0aW9uOiBsb2NhdGlvbiB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXZlcnRQb3AobG9jYXRpb24pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHJldmVydFBvcCA9IGZ1bmN0aW9uIHJldmVydFBvcChmcm9tTG9jYXRpb24pIHtcbiAgICB2YXIgdG9Mb2NhdGlvbiA9IGhpc3RvcnkubG9jYXRpb247XG5cbiAgICAvLyBUT0RPOiBXZSBjb3VsZCBwcm9iYWJseSBtYWtlIHRoaXMgbW9yZSByZWxpYWJsZSBieVxuICAgIC8vIGtlZXBpbmcgYSBsaXN0IG9mIGtleXMgd2UndmUgc2VlbiBpbiBzZXNzaW9uU3RvcmFnZS5cbiAgICAvLyBJbnN0ZWFkLCB3ZSBqdXN0IGRlZmF1bHQgdG8gMCBmb3Iga2V5cyB3ZSBkb24ndCBrbm93LlxuXG4gICAgdmFyIHRvSW5kZXggPSBhbGxLZXlzLmluZGV4T2YodG9Mb2NhdGlvbi5rZXkpO1xuXG4gICAgaWYgKHRvSW5kZXggPT09IC0xKSB0b0luZGV4ID0gMDtcblxuICAgIHZhciBmcm9tSW5kZXggPSBhbGxLZXlzLmluZGV4T2YoZnJvbUxvY2F0aW9uLmtleSk7XG5cbiAgICBpZiAoZnJvbUluZGV4ID09PSAtMSkgZnJvbUluZGV4ID0gMDtcblxuICAgIHZhciBkZWx0YSA9IHRvSW5kZXggLSBmcm9tSW5kZXg7XG5cbiAgICBpZiAoZGVsdGEpIHtcbiAgICAgIGZvcmNlTmV4dFBvcCA9IHRydWU7XG4gICAgICBnbyhkZWx0YSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBpbml0aWFsTG9jYXRpb24gPSBnZXRET01Mb2NhdGlvbihnZXRIaXN0b3J5U3RhdGUoKSk7XG4gIHZhciBhbGxLZXlzID0gW2luaXRpYWxMb2NhdGlvbi5rZXldO1xuXG4gIC8vIFB1YmxpYyBpbnRlcmZhY2VcblxuICB2YXIgY3JlYXRlSHJlZiA9IGZ1bmN0aW9uIGNyZWF0ZUhyZWYobG9jYXRpb24pIHtcbiAgICByZXR1cm4gYmFzZW5hbWUgKyAoMCwgX1BhdGhVdGlscy5jcmVhdGVQYXRoKShsb2NhdGlvbik7XG4gIH07XG5cbiAgdmFyIHB1c2ggPSBmdW5jdGlvbiBwdXNoKHBhdGgsIHN0YXRlKSB7XG4gICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KSghKCh0eXBlb2YgcGF0aCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YocGF0aCkpID09PSAnb2JqZWN0JyAmJiBwYXRoLnN0YXRlICE9PSB1bmRlZmluZWQgJiYgc3RhdGUgIT09IHVuZGVmaW5lZCksICdZb3Ugc2hvdWxkIGF2b2lkIHByb3ZpZGluZyBhIDJuZCBzdGF0ZSBhcmd1bWVudCB0byBwdXNoIHdoZW4gdGhlIDFzdCAnICsgJ2FyZ3VtZW50IGlzIGEgbG9jYXRpb24tbGlrZSBvYmplY3QgdGhhdCBhbHJlYWR5IGhhcyBzdGF0ZTsgaXQgaXMgaWdub3JlZCcpO1xuXG4gICAgdmFyIGFjdGlvbiA9ICdQVVNIJztcbiAgICB2YXIgbG9jYXRpb24gPSAoMCwgX0xvY2F0aW9uVXRpbHMuY3JlYXRlTG9jYXRpb24pKHBhdGgsIHN0YXRlLCBjcmVhdGVLZXkoKSwgaGlzdG9yeS5sb2NhdGlvbik7XG5cbiAgICB0cmFuc2l0aW9uTWFuYWdlci5jb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGZ1bmN0aW9uIChvaykge1xuICAgICAgaWYgKCFvaykgcmV0dXJuO1xuXG4gICAgICB2YXIgaHJlZiA9IGNyZWF0ZUhyZWYobG9jYXRpb24pO1xuICAgICAgdmFyIGtleSA9IGxvY2F0aW9uLmtleSxcbiAgICAgICAgICBzdGF0ZSA9IGxvY2F0aW9uLnN0YXRlO1xuXG5cbiAgICAgIGlmIChjYW5Vc2VIaXN0b3J5KSB7XG4gICAgICAgIGdsb2JhbEhpc3RvcnkucHVzaFN0YXRlKHsga2V5OiBrZXksIHN0YXRlOiBzdGF0ZSB9LCBudWxsLCBocmVmKTtcblxuICAgICAgICBpZiAoZm9yY2VSZWZyZXNoKSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBocmVmO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBwcmV2SW5kZXggPSBhbGxLZXlzLmluZGV4T2YoaGlzdG9yeS5sb2NhdGlvbi5rZXkpO1xuICAgICAgICAgIHZhciBuZXh0S2V5cyA9IGFsbEtleXMuc2xpY2UoMCwgcHJldkluZGV4ID09PSAtMSA/IDAgOiBwcmV2SW5kZXggKyAxKTtcblxuICAgICAgICAgIG5leHRLZXlzLnB1c2gobG9jYXRpb24ua2V5KTtcbiAgICAgICAgICBhbGxLZXlzID0gbmV4dEtleXM7XG5cbiAgICAgICAgICBzZXRTdGF0ZSh7IGFjdGlvbjogYWN0aW9uLCBsb2NhdGlvbjogbG9jYXRpb24gfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICgwLCBfd2FybmluZzIuZGVmYXVsdCkoc3RhdGUgPT09IHVuZGVmaW5lZCwgJ0Jyb3dzZXIgaGlzdG9yeSBjYW5ub3QgcHVzaCBzdGF0ZSBpbiBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IEhUTUw1IGhpc3RvcnknKTtcblxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGhyZWY7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIHJlcGxhY2UgPSBmdW5jdGlvbiByZXBsYWNlKHBhdGgsIHN0YXRlKSB7XG4gICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KSghKCh0eXBlb2YgcGF0aCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YocGF0aCkpID09PSAnb2JqZWN0JyAmJiBwYXRoLnN0YXRlICE9PSB1bmRlZmluZWQgJiYgc3RhdGUgIT09IHVuZGVmaW5lZCksICdZb3Ugc2hvdWxkIGF2b2lkIHByb3ZpZGluZyBhIDJuZCBzdGF0ZSBhcmd1bWVudCB0byByZXBsYWNlIHdoZW4gdGhlIDFzdCAnICsgJ2FyZ3VtZW50IGlzIGEgbG9jYXRpb24tbGlrZSBvYmplY3QgdGhhdCBhbHJlYWR5IGhhcyBzdGF0ZTsgaXQgaXMgaWdub3JlZCcpO1xuXG4gICAgdmFyIGFjdGlvbiA9ICdSRVBMQUNFJztcbiAgICB2YXIgbG9jYXRpb24gPSAoMCwgX0xvY2F0aW9uVXRpbHMuY3JlYXRlTG9jYXRpb24pKHBhdGgsIHN0YXRlLCBjcmVhdGVLZXkoKSwgaGlzdG9yeS5sb2NhdGlvbik7XG5cbiAgICB0cmFuc2l0aW9uTWFuYWdlci5jb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGZ1bmN0aW9uIChvaykge1xuICAgICAgaWYgKCFvaykgcmV0dXJuO1xuXG4gICAgICB2YXIgaHJlZiA9IGNyZWF0ZUhyZWYobG9jYXRpb24pO1xuICAgICAgdmFyIGtleSA9IGxvY2F0aW9uLmtleSxcbiAgICAgICAgICBzdGF0ZSA9IGxvY2F0aW9uLnN0YXRlO1xuXG5cbiAgICAgIGlmIChjYW5Vc2VIaXN0b3J5KSB7XG4gICAgICAgIGdsb2JhbEhpc3RvcnkucmVwbGFjZVN0YXRlKHsga2V5OiBrZXksIHN0YXRlOiBzdGF0ZSB9LCBudWxsLCBocmVmKTtcblxuICAgICAgICBpZiAoZm9yY2VSZWZyZXNoKSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoaHJlZik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHByZXZJbmRleCA9IGFsbEtleXMuaW5kZXhPZihoaXN0b3J5LmxvY2F0aW9uLmtleSk7XG5cbiAgICAgICAgICBpZiAocHJldkluZGV4ICE9PSAtMSkgYWxsS2V5c1twcmV2SW5kZXhdID0gbG9jYXRpb24ua2V5O1xuXG4gICAgICAgICAgc2V0U3RhdGUoeyBhY3Rpb246IGFjdGlvbiwgbG9jYXRpb246IGxvY2F0aW9uIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKHN0YXRlID09PSB1bmRlZmluZWQsICdCcm93c2VyIGhpc3RvcnkgY2Fubm90IHJlcGxhY2Ugc3RhdGUgaW4gYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBIVE1MNSBoaXN0b3J5Jyk7XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoaHJlZik7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIGdvID0gZnVuY3Rpb24gZ28obikge1xuICAgIGdsb2JhbEhpc3RvcnkuZ28obik7XG4gIH07XG5cbiAgdmFyIGdvQmFjayA9IGZ1bmN0aW9uIGdvQmFjaygpIHtcbiAgICByZXR1cm4gZ28oLTEpO1xuICB9O1xuXG4gIHZhciBnb0ZvcndhcmQgPSBmdW5jdGlvbiBnb0ZvcndhcmQoKSB7XG4gICAgcmV0dXJuIGdvKDEpO1xuICB9O1xuXG4gIHZhciBsaXN0ZW5lckNvdW50ID0gMDtcblxuICB2YXIgY2hlY2tET01MaXN0ZW5lcnMgPSBmdW5jdGlvbiBjaGVja0RPTUxpc3RlbmVycyhkZWx0YSkge1xuICAgIGxpc3RlbmVyQ291bnQgKz0gZGVsdGE7XG5cbiAgICBpZiAobGlzdGVuZXJDb3VudCA9PT0gMSkge1xuICAgICAgKDAsIF9ET01VdGlscy5hZGRFdmVudExpc3RlbmVyKSh3aW5kb3csIFBvcFN0YXRlRXZlbnQsIGhhbmRsZVBvcFN0YXRlKTtcblxuICAgICAgaWYgKG5lZWRzSGFzaENoYW5nZUxpc3RlbmVyKSAoMCwgX0RPTVV0aWxzLmFkZEV2ZW50TGlzdGVuZXIpKHdpbmRvdywgSGFzaENoYW5nZUV2ZW50LCBoYW5kbGVIYXNoQ2hhbmdlKTtcbiAgICB9IGVsc2UgaWYgKGxpc3RlbmVyQ291bnQgPT09IDApIHtcbiAgICAgICgwLCBfRE9NVXRpbHMucmVtb3ZlRXZlbnRMaXN0ZW5lcikod2luZG93LCBQb3BTdGF0ZUV2ZW50LCBoYW5kbGVQb3BTdGF0ZSk7XG5cbiAgICAgIGlmIChuZWVkc0hhc2hDaGFuZ2VMaXN0ZW5lcikgKDAsIF9ET01VdGlscy5yZW1vdmVFdmVudExpc3RlbmVyKSh3aW5kb3csIEhhc2hDaGFuZ2VFdmVudCwgaGFuZGxlSGFzaENoYW5nZSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBpc0Jsb2NrZWQgPSBmYWxzZTtcblxuICB2YXIgYmxvY2sgPSBmdW5jdGlvbiBibG9jaygpIHtcbiAgICB2YXIgcHJvbXB0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBmYWxzZTtcblxuICAgIHZhciB1bmJsb2NrID0gdHJhbnNpdGlvbk1hbmFnZXIuc2V0UHJvbXB0KHByb21wdCk7XG5cbiAgICBpZiAoIWlzQmxvY2tlZCkge1xuICAgICAgY2hlY2tET01MaXN0ZW5lcnMoMSk7XG4gICAgICBpc0Jsb2NrZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoaXNCbG9ja2VkKSB7XG4gICAgICAgIGlzQmxvY2tlZCA9IGZhbHNlO1xuICAgICAgICBjaGVja0RPTUxpc3RlbmVycygtMSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB1bmJsb2NrKCk7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgbGlzdGVuID0gZnVuY3Rpb24gbGlzdGVuKGxpc3RlbmVyKSB7XG4gICAgdmFyIHVubGlzdGVuID0gdHJhbnNpdGlvbk1hbmFnZXIuYXBwZW5kTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgIGNoZWNrRE9NTGlzdGVuZXJzKDEpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNoZWNrRE9NTGlzdGVuZXJzKC0xKTtcbiAgICAgIHVubGlzdGVuKCk7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgaGlzdG9yeSA9IHtcbiAgICBsZW5ndGg6IGdsb2JhbEhpc3RvcnkubGVuZ3RoLFxuICAgIGFjdGlvbjogJ1BPUCcsXG4gICAgbG9jYXRpb246IGluaXRpYWxMb2NhdGlvbixcbiAgICBjcmVhdGVIcmVmOiBjcmVhdGVIcmVmLFxuICAgIHB1c2g6IHB1c2gsXG4gICAgcmVwbGFjZTogcmVwbGFjZSxcbiAgICBnbzogZ28sXG4gICAgZ29CYWNrOiBnb0JhY2ssXG4gICAgZ29Gb3J3YXJkOiBnb0ZvcndhcmQsXG4gICAgYmxvY2s6IGJsb2NrLFxuICAgIGxpc3RlbjogbGlzdGVuXG4gIH07XG5cbiAgcmV0dXJuIGhpc3Rvcnk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVCcm93c2VySGlzdG9yeTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9jcmVhdGVCcm93c2VySGlzdG9yeS5qcyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIGludmFyaWFudCA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgK1xuICAgICAgICAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJnc1thcmdJbmRleCsrXTsgfSlcbiAgICAgICk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvaW52YXJpYW50L2Jyb3dzZXIuanMiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmxvY2F0aW9uc0FyZUVxdWFsID0gZXhwb3J0cy5jcmVhdGVMb2NhdGlvbiA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZXNvbHZlUGF0aG5hbWUgPSByZXF1aXJlKCdyZXNvbHZlLXBhdGhuYW1lJyk7XG5cbnZhciBfcmVzb2x2ZVBhdGhuYW1lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Jlc29sdmVQYXRobmFtZSk7XG5cbnZhciBfdmFsdWVFcXVhbCA9IHJlcXVpcmUoJ3ZhbHVlLWVxdWFsJyk7XG5cbnZhciBfdmFsdWVFcXVhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YWx1ZUVxdWFsKTtcblxudmFyIF9QYXRoVXRpbHMgPSByZXF1aXJlKCcuL1BhdGhVdGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgY3JlYXRlTG9jYXRpb24gPSBleHBvcnRzLmNyZWF0ZUxvY2F0aW9uID0gZnVuY3Rpb24gY3JlYXRlTG9jYXRpb24ocGF0aCwgc3RhdGUsIGtleSwgY3VycmVudExvY2F0aW9uKSB7XG4gIHZhciBsb2NhdGlvbiA9IHZvaWQgMDtcbiAgaWYgKHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJykge1xuICAgIC8vIFR3by1hcmcgZm9ybTogcHVzaChwYXRoLCBzdGF0ZSlcbiAgICBsb2NhdGlvbiA9ICgwLCBfUGF0aFV0aWxzLnBhcnNlUGF0aCkocGF0aCk7XG4gICAgbG9jYXRpb24uc3RhdGUgPSBzdGF0ZTtcbiAgfSBlbHNlIHtcbiAgICAvLyBPbmUtYXJnIGZvcm06IHB1c2gobG9jYXRpb24pXG4gICAgbG9jYXRpb24gPSBfZXh0ZW5kcyh7fSwgcGF0aCk7XG5cbiAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUgPT09IHVuZGVmaW5lZCkgbG9jYXRpb24ucGF0aG5hbWUgPSAnJztcblxuICAgIGlmIChsb2NhdGlvbi5zZWFyY2gpIHtcbiAgICAgIGlmIChsb2NhdGlvbi5zZWFyY2guY2hhckF0KDApICE9PSAnPycpIGxvY2F0aW9uLnNlYXJjaCA9ICc/JyArIGxvY2F0aW9uLnNlYXJjaDtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYXRpb24uc2VhcmNoID0gJyc7XG4gICAgfVxuXG4gICAgaWYgKGxvY2F0aW9uLmhhc2gpIHtcbiAgICAgIGlmIChsb2NhdGlvbi5oYXNoLmNoYXJBdCgwKSAhPT0gJyMnKSBsb2NhdGlvbi5oYXNoID0gJyMnICsgbG9jYXRpb24uaGFzaDtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYXRpb24uaGFzaCA9ICcnO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZSAhPT0gdW5kZWZpbmVkICYmIGxvY2F0aW9uLnN0YXRlID09PSB1bmRlZmluZWQpIGxvY2F0aW9uLnN0YXRlID0gc3RhdGU7XG4gIH1cblxuICB0cnkge1xuICAgIGxvY2F0aW9uLnBhdGhuYW1lID0gZGVjb2RlVVJJKGxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmIChlIGluc3RhbmNlb2YgVVJJRXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBVUklFcnJvcignUGF0aG5hbWUgXCInICsgbG9jYXRpb24ucGF0aG5hbWUgKyAnXCIgY291bGQgbm90IGJlIGRlY29kZWQuICcgKyAnVGhpcyBpcyBsaWtlbHkgY2F1c2VkIGJ5IGFuIGludmFsaWQgcGVyY2VudC1lbmNvZGluZy4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH1cblxuICBpZiAoa2V5KSBsb2NhdGlvbi5rZXkgPSBrZXk7XG5cbiAgaWYgKGN1cnJlbnRMb2NhdGlvbikge1xuICAgIC8vIFJlc29sdmUgaW5jb21wbGV0ZS9yZWxhdGl2ZSBwYXRobmFtZSByZWxhdGl2ZSB0byBjdXJyZW50IGxvY2F0aW9uLlxuICAgIGlmICghbG9jYXRpb24ucGF0aG5hbWUpIHtcbiAgICAgIGxvY2F0aW9uLnBhdGhuYW1lID0gY3VycmVudExvY2F0aW9uLnBhdGhuYW1lO1xuICAgIH0gZWxzZSBpZiAobG9jYXRpb24ucGF0aG5hbWUuY2hhckF0KDApICE9PSAnLycpIHtcbiAgICAgIGxvY2F0aW9uLnBhdGhuYW1lID0gKDAsIF9yZXNvbHZlUGF0aG5hbWUyLmRlZmF1bHQpKGxvY2F0aW9uLnBhdGhuYW1lLCBjdXJyZW50TG9jYXRpb24ucGF0aG5hbWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBXaGVuIHRoZXJlIGlzIG5vIHByaW9yIGxvY2F0aW9uIGFuZCBwYXRobmFtZSBpcyBlbXB0eSwgc2V0IGl0IHRvIC9cbiAgICBpZiAoIWxvY2F0aW9uLnBhdGhuYW1lKSB7XG4gICAgICBsb2NhdGlvbi5wYXRobmFtZSA9ICcvJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbG9jYXRpb247XG59O1xuXG52YXIgbG9jYXRpb25zQXJlRXF1YWwgPSBleHBvcnRzLmxvY2F0aW9uc0FyZUVxdWFsID0gZnVuY3Rpb24gbG9jYXRpb25zQXJlRXF1YWwoYSwgYikge1xuICByZXR1cm4gYS5wYXRobmFtZSA9PT0gYi5wYXRobmFtZSAmJiBhLnNlYXJjaCA9PT0gYi5zZWFyY2ggJiYgYS5oYXNoID09PSBiLmhhc2ggJiYgYS5rZXkgPT09IGIua2V5ICYmICgwLCBfdmFsdWVFcXVhbDIuZGVmYXVsdCkoYS5zdGF0ZSwgYi5zdGF0ZSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9oaXN0b3J5L0xvY2F0aW9uVXRpbHMuanMiLCJmdW5jdGlvbiBpc0Fic29sdXRlKHBhdGhuYW1lKSB7XG4gIHJldHVybiBwYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJztcbn1cblxuLy8gQWJvdXQgMS41eCBmYXN0ZXIgdGhhbiB0aGUgdHdvLWFyZyB2ZXJzaW9uIG9mIEFycmF5I3NwbGljZSgpXG5mdW5jdGlvbiBzcGxpY2VPbmUobGlzdCwgaW5kZXgpIHtcbiAgZm9yICh2YXIgaSA9IGluZGV4LCBrID0gaSArIDEsIG4gPSBsaXN0Lmxlbmd0aDsgayA8IG47IGkgKz0gMSwgayArPSAxKSB7XG4gICAgbGlzdFtpXSA9IGxpc3Rba107XG4gIH1cblxuICBsaXN0LnBvcCgpO1xufVxuXG4vLyBUaGlzIGltcGxlbWVudGF0aW9uIGlzIGJhc2VkIGhlYXZpbHkgb24gbm9kZSdzIHVybC5wYXJzZVxuZnVuY3Rpb24gcmVzb2x2ZVBhdGhuYW1lKHRvKSB7XG4gIHZhciBmcm9tID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnJztcblxuICB2YXIgdG9QYXJ0cyA9IHRvICYmIHRvLnNwbGl0KCcvJykgfHwgW107XG4gIHZhciBmcm9tUGFydHMgPSBmcm9tICYmIGZyb20uc3BsaXQoJy8nKSB8fCBbXTtcblxuICB2YXIgaXNUb0FicyA9IHRvICYmIGlzQWJzb2x1dGUodG8pO1xuICB2YXIgaXNGcm9tQWJzID0gZnJvbSAmJiBpc0Fic29sdXRlKGZyb20pO1xuICB2YXIgbXVzdEVuZEFicyA9IGlzVG9BYnMgfHwgaXNGcm9tQWJzO1xuXG4gIGlmICh0byAmJiBpc0Fic29sdXRlKHRvKSkge1xuICAgIC8vIHRvIGlzIGFic29sdXRlXG4gICAgZnJvbVBhcnRzID0gdG9QYXJ0cztcbiAgfSBlbHNlIGlmICh0b1BhcnRzLmxlbmd0aCkge1xuICAgIC8vIHRvIGlzIHJlbGF0aXZlLCBkcm9wIHRoZSBmaWxlbmFtZVxuICAgIGZyb21QYXJ0cy5wb3AoKTtcbiAgICBmcm9tUGFydHMgPSBmcm9tUGFydHMuY29uY2F0KHRvUGFydHMpO1xuICB9XG5cbiAgaWYgKCFmcm9tUGFydHMubGVuZ3RoKSByZXR1cm4gJy8nO1xuXG4gIHZhciBoYXNUcmFpbGluZ1NsYXNoID0gdm9pZCAwO1xuICBpZiAoZnJvbVBhcnRzLmxlbmd0aCkge1xuICAgIHZhciBsYXN0ID0gZnJvbVBhcnRzW2Zyb21QYXJ0cy5sZW5ndGggLSAxXTtcbiAgICBoYXNUcmFpbGluZ1NsYXNoID0gbGFzdCA9PT0gJy4nIHx8IGxhc3QgPT09ICcuLicgfHwgbGFzdCA9PT0gJyc7XG4gIH0gZWxzZSB7XG4gICAgaGFzVHJhaWxpbmdTbGFzaCA9IGZhbHNlO1xuICB9XG5cbiAgdmFyIHVwID0gMDtcbiAgZm9yICh2YXIgaSA9IGZyb21QYXJ0cy5sZW5ndGg7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIHBhcnQgPSBmcm9tUGFydHNbaV07XG5cbiAgICBpZiAocGFydCA9PT0gJy4nKSB7XG4gICAgICBzcGxpY2VPbmUoZnJvbVBhcnRzLCBpKTtcbiAgICB9IGVsc2UgaWYgKHBhcnQgPT09ICcuLicpIHtcbiAgICAgIHNwbGljZU9uZShmcm9tUGFydHMsIGkpO1xuICAgICAgdXArKztcbiAgICB9IGVsc2UgaWYgKHVwKSB7XG4gICAgICBzcGxpY2VPbmUoZnJvbVBhcnRzLCBpKTtcbiAgICAgIHVwLS07XG4gICAgfVxuICB9XG5cbiAgaWYgKCFtdXN0RW5kQWJzKSBmb3IgKDsgdXAtLTsgdXApIHtcbiAgICBmcm9tUGFydHMudW5zaGlmdCgnLi4nKTtcbiAgfWlmIChtdXN0RW5kQWJzICYmIGZyb21QYXJ0c1swXSAhPT0gJycgJiYgKCFmcm9tUGFydHNbMF0gfHwgIWlzQWJzb2x1dGUoZnJvbVBhcnRzWzBdKSkpIGZyb21QYXJ0cy51bnNoaWZ0KCcnKTtcblxuICB2YXIgcmVzdWx0ID0gZnJvbVBhcnRzLmpvaW4oJy8nKTtcblxuICBpZiAoaGFzVHJhaWxpbmdTbGFzaCAmJiByZXN1bHQuc3Vic3RyKC0xKSAhPT0gJy8nKSByZXN1bHQgKz0gJy8nO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlc29sdmVQYXRobmFtZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS1wYXRobmFtZS9pbmRleC5qcyIsInZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gdmFsdWVFcXVhbChhLCBiKSB7XG4gIGlmIChhID09PSBiKSByZXR1cm4gdHJ1ZTtcblxuICBpZiAoYSA9PSBudWxsIHx8IGIgPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KGEpKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYikgJiYgYS5sZW5ndGggPT09IGIubGVuZ3RoICYmIGEuZXZlcnkoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICByZXR1cm4gdmFsdWVFcXVhbChpdGVtLCBiW2luZGV4XSk7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgYVR5cGUgPSB0eXBlb2YgYSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoYSk7XG4gIHZhciBiVHlwZSA9IHR5cGVvZiBiID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihiKTtcblxuICBpZiAoYVR5cGUgIT09IGJUeXBlKSByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKGFUeXBlID09PSAnb2JqZWN0Jykge1xuICAgIHZhciBhVmFsdWUgPSBhLnZhbHVlT2YoKTtcbiAgICB2YXIgYlZhbHVlID0gYi52YWx1ZU9mKCk7XG5cbiAgICBpZiAoYVZhbHVlICE9PSBhIHx8IGJWYWx1ZSAhPT0gYikgcmV0dXJuIHZhbHVlRXF1YWwoYVZhbHVlLCBiVmFsdWUpO1xuXG4gICAgdmFyIGFLZXlzID0gT2JqZWN0LmtleXMoYSk7XG4gICAgdmFyIGJLZXlzID0gT2JqZWN0LmtleXMoYik7XG5cbiAgICBpZiAoYUtleXMubGVuZ3RoICE9PSBiS2V5cy5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICAgIHJldHVybiBhS2V5cy5ldmVyeShmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gdmFsdWVFcXVhbChhW2tleV0sIGJba2V5XSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbHVlRXF1YWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3ZhbHVlLWVxdWFsL2luZGV4LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGNyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyID0gZnVuY3Rpb24gY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIoKSB7XG4gIHZhciBwcm9tcHQgPSBudWxsO1xuXG4gIHZhciBzZXRQcm9tcHQgPSBmdW5jdGlvbiBzZXRQcm9tcHQobmV4dFByb21wdCkge1xuICAgICgwLCBfd2FybmluZzIuZGVmYXVsdCkocHJvbXB0ID09IG51bGwsICdBIGhpc3Rvcnkgc3VwcG9ydHMgb25seSBvbmUgcHJvbXB0IGF0IGEgdGltZScpO1xuXG4gICAgcHJvbXB0ID0gbmV4dFByb21wdDtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAocHJvbXB0ID09PSBuZXh0UHJvbXB0KSBwcm9tcHQgPSBudWxsO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIGNvbmZpcm1UcmFuc2l0aW9uVG8gPSBmdW5jdGlvbiBjb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGNhbGxiYWNrKSB7XG4gICAgLy8gVE9ETzogSWYgYW5vdGhlciB0cmFuc2l0aW9uIHN0YXJ0cyB3aGlsZSB3ZSdyZSBzdGlsbCBjb25maXJtaW5nXG4gICAgLy8gdGhlIHByZXZpb3VzIG9uZSwgd2UgbWF5IGVuZCB1cCBpbiBhIHdlaXJkIHN0YXRlLiBGaWd1cmUgb3V0IHRoZVxuICAgIC8vIGJlc3Qgd2F5IHRvIGhhbmRsZSB0aGlzLlxuICAgIGlmIChwcm9tcHQgIT0gbnVsbCkge1xuICAgICAgdmFyIHJlc3VsdCA9IHR5cGVvZiBwcm9tcHQgPT09ICdmdW5jdGlvbicgPyBwcm9tcHQobG9jYXRpb24sIGFjdGlvbikgOiBwcm9tcHQ7XG5cbiAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGdldFVzZXJDb25maXJtYXRpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBnZXRVc2VyQ29uZmlybWF0aW9uKHJlc3VsdCwgY2FsbGJhY2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICgwLCBfd2FybmluZzIuZGVmYXVsdCkoZmFsc2UsICdBIGhpc3RvcnkgbmVlZHMgYSBnZXRVc2VyQ29uZmlybWF0aW9uIGZ1bmN0aW9uIGluIG9yZGVyIHRvIHVzZSBhIHByb21wdCBtZXNzYWdlJyk7XG5cbiAgICAgICAgICBjYWxsYmFjayh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUmV0dXJuIGZhbHNlIGZyb20gYSB0cmFuc2l0aW9uIGhvb2sgdG8gY2FuY2VsIHRoZSB0cmFuc2l0aW9uLlxuICAgICAgICBjYWxsYmFjayhyZXN1bHQgIT09IGZhbHNlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY2FsbGJhY2sodHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBsaXN0ZW5lcnMgPSBbXTtcblxuICB2YXIgYXBwZW5kTGlzdGVuZXIgPSBmdW5jdGlvbiBhcHBlbmRMaXN0ZW5lcihmbikge1xuICAgIHZhciBpc0FjdGl2ZSA9IHRydWU7XG5cbiAgICB2YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiBsaXN0ZW5lcigpIHtcbiAgICAgIGlmIChpc0FjdGl2ZSkgZm4uYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0gIT09IGxpc3RlbmVyO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgbm90aWZ5TGlzdGVuZXJzID0gZnVuY3Rpb24gbm90aWZ5TGlzdGVuZXJzKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgcmV0dXJuIGxpc3RlbmVyLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBzZXRQcm9tcHQ6IHNldFByb21wdCxcbiAgICBjb25maXJtVHJhbnNpdGlvblRvOiBjb25maXJtVHJhbnNpdGlvblRvLFxuICAgIGFwcGVuZExpc3RlbmVyOiBhcHBlbmRMaXN0ZW5lcixcbiAgICBub3RpZnlMaXN0ZW5lcnM6IG5vdGlmeUxpc3RlbmVyc1xuICB9O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2hpc3RvcnkvY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIuanMiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgY2FuVXNlRE9NID0gZXhwb3J0cy5jYW5Vc2VET00gPSAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG52YXIgYWRkRXZlbnRMaXN0ZW5lciA9IGV4cG9ydHMuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnQsIGxpc3RlbmVyKSB7XG4gIHJldHVybiBub2RlLmFkZEV2ZW50TGlzdGVuZXIgPyBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyLCBmYWxzZSkgOiBub2RlLmF0dGFjaEV2ZW50KCdvbicgKyBldmVudCwgbGlzdGVuZXIpO1xufTtcblxudmFyIHJlbW92ZUV2ZW50TGlzdGVuZXIgPSBleHBvcnRzLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50LCBsaXN0ZW5lcikge1xuICByZXR1cm4gbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyID8gbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lciwgZmFsc2UpIDogbm9kZS5kZXRhY2hFdmVudCgnb24nICsgZXZlbnQsIGxpc3RlbmVyKTtcbn07XG5cbnZhciBnZXRDb25maXJtYXRpb24gPSBleHBvcnRzLmdldENvbmZpcm1hdGlvbiA9IGZ1bmN0aW9uIGdldENvbmZpcm1hdGlvbihtZXNzYWdlLCBjYWxsYmFjaykge1xuICByZXR1cm4gY2FsbGJhY2sod2luZG93LmNvbmZpcm0obWVzc2FnZSkpO1xufTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1hbGVydFxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgSFRNTDUgaGlzdG9yeSBBUEkgaXMgc3VwcG9ydGVkLiBUYWtlbiBmcm9tIE1vZGVybml6ci5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKiBodHRwczovL2dpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9ibG9iL21hc3Rlci9mZWF0dXJlLWRldGVjdHMvaGlzdG9yeS5qc1xuICogY2hhbmdlZCB0byBhdm9pZCBmYWxzZSBuZWdhdGl2ZXMgZm9yIFdpbmRvd3MgUGhvbmVzOiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZWFjdC1yb3V0ZXIvaXNzdWVzLzU4NlxuICovXG52YXIgc3VwcG9ydHNIaXN0b3J5ID0gZXhwb3J0cy5zdXBwb3J0c0hpc3RvcnkgPSBmdW5jdGlvbiBzdXBwb3J0c0hpc3RvcnkoKSB7XG4gIHZhciB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xuXG4gIGlmICgodWEuaW5kZXhPZignQW5kcm9pZCAyLicpICE9PSAtMSB8fCB1YS5pbmRleE9mKCdBbmRyb2lkIDQuMCcpICE9PSAtMSkgJiYgdWEuaW5kZXhPZignTW9iaWxlIFNhZmFyaScpICE9PSAtMSAmJiB1YS5pbmRleE9mKCdDaHJvbWUnKSA9PT0gLTEgJiYgdWEuaW5kZXhPZignV2luZG93cyBQaG9uZScpID09PSAtMSkgcmV0dXJuIGZhbHNlO1xuXG4gIHJldHVybiB3aW5kb3cuaGlzdG9yeSAmJiAncHVzaFN0YXRlJyBpbiB3aW5kb3cuaGlzdG9yeTtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGJyb3dzZXIgZmlyZXMgcG9wc3RhdGUgb24gaGFzaCBjaGFuZ2UuXG4gKiBJRTEwIGFuZCBJRTExIGRvIG5vdC5cbiAqL1xudmFyIHN1cHBvcnRzUG9wU3RhdGVPbkhhc2hDaGFuZ2UgPSBleHBvcnRzLnN1cHBvcnRzUG9wU3RhdGVPbkhhc2hDaGFuZ2UgPSBmdW5jdGlvbiBzdXBwb3J0c1BvcFN0YXRlT25IYXNoQ2hhbmdlKCkge1xuICByZXR1cm4gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignVHJpZGVudCcpID09PSAtMTtcbn07XG5cbi8qKlxuICogUmV0dXJucyBmYWxzZSBpZiB1c2luZyBnbyhuKSB3aXRoIGhhc2ggaGlzdG9yeSBjYXVzZXMgYSBmdWxsIHBhZ2UgcmVsb2FkLlxuICovXG52YXIgc3VwcG9ydHNHb1dpdGhvdXRSZWxvYWRVc2luZ0hhc2ggPSBleHBvcnRzLnN1cHBvcnRzR29XaXRob3V0UmVsb2FkVXNpbmdIYXNoID0gZnVuY3Rpb24gc3VwcG9ydHNHb1dpdGhvdXRSZWxvYWRVc2luZ0hhc2goKSB7XG4gIHJldHVybiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdGaXJlZm94JykgPT09IC0xO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgYSBnaXZlbiBwb3BzdGF0ZSBldmVudCBpcyBhbiBleHRyYW5lb3VzIFdlYktpdCBldmVudC5cbiAqIEFjY291bnRzIGZvciB0aGUgZmFjdCB0aGF0IENocm9tZSBvbiBpT1MgZmlyZXMgcmVhbCBwb3BzdGF0ZSBldmVudHNcbiAqIGNvbnRhaW5pbmcgdW5kZWZpbmVkIHN0YXRlIHdoZW4gcHJlc3NpbmcgdGhlIGJhY2sgYnV0dG9uLlxuICovXG52YXIgaXNFeHRyYW5lb3VzUG9wc3RhdGVFdmVudCA9IGV4cG9ydHMuaXNFeHRyYW5lb3VzUG9wc3RhdGVFdmVudCA9IGZ1bmN0aW9uIGlzRXh0cmFuZW91c1BvcHN0YXRlRXZlbnQoZXZlbnQpIHtcbiAgcmV0dXJuIGV2ZW50LnN0YXRlID09PSB1bmRlZmluZWQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdDcmlPUycpID09PSAtMTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2hpc3RvcnkvRE9NVXRpbHMuanMiLCJpbXBvcnQgJy4vc3R5bGUuc2NzcydcbmltcG9ydCBjb25maWcgZnJvbSAnY29uZmlnJ1xuaW1wb3J0IHsgdGhlbWVTdG9yZSB9IGZyb20gJyMvc3RvcmVzJ1xuXG5jb25zdCB0aGVtZXMgPSBjb25maWcudGhlbWVzXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICBjb25zdCAkc2lkZWJhciA9ICQoJyNKLXNpZGViYXItaGVhZGVyJylcbiAgY29uc3QgJGJvZHkgPSAkKCdib2R5JylcbiAgY29uc3QgJHRoZW1lU2VsZWN0b3IgPSAkKCcjSi10aGVtZS1zZWxlY3RvcicpXG4gIGNvbnN0ICRzaWRlYmFyQm9keSA9ICQoJyNKLXNpZGUtYmFyLWJvZHknKVxuICBsZXQgaXNTZWFyY2hTaG93aW5nID0gZmFsc2VcbiAgbGV0IGlzU2lkZUJvZHlTaG93aW5nID0gdHJ1ZVxuXG4gICR0aGVtZVNlbGVjdG9yXG4gICAgLmh0bWwoXG4gICAgICB0aGVtZXNcbiAgICAgICAgLm1hcCh0aGVtZSA9PiB7XG4gICAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IHRoZW1lU3RvcmUudGhlbWUgPT09IHRoZW1lID8gJ3NlbGVjdGVkJyA6ICcnXG4gICAgICAgICAgcmV0dXJuIGA8b3B0aW9uIHZhbHVlPVwiJHt0aGVtZX1cIiAke2lzU2VsZWN0ZWR9PiR7dGhlbWV9PC9vcHRpb24+YFxuICAgICAgICB9KVxuICAgICAgICAuam9pbignJylcbiAgICApXG4gICAgLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKVxuICAgICAgY29uc3QgdGhlbWUgPSAkdGhpcy52YWwoKVxuXG4gICAgICBpZiAodGhlbWUgIT09IHRoZW1lU3RvcmUudGhlbWUpIHtcbiAgICAgICAgJGJvZHkuYWRkQ2xhc3MoJ3RoZW1lLScgKyB0aGVtZSkucmVtb3ZlQ2xhc3MoJ3RoZW1lLScgKyB0aGVtZVN0b3JlLnRoZW1lKVxuICAgICAgICB0aGVtZVN0b3JlLnNldFRoZW1lKHRoZW1lKVxuICAgICAgfVxuICAgIH0pXG5cbiAgJGJvZHkuYWRkQ2xhc3MoJ3RoZW1lLScgKyB0aGVtZVN0b3JlLnRoZW1lKVxuXG4gICRzaWRlYmFyXG4gICAgLm9uKCdjbGljaycsICcuSi1zaWRlYmFyLWxvZ28nLCBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKVxuXG4gICAgICBpZiAoJHRoaXMuaXMoJy5hY3RpdmUnKSkge1xuICAgICAgICBzaWRlYmFyQm9keUhpZGUoKVxuICAgICAgICAkdGhpcy5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNpZGViYXJCb2R5U2hvdygpXG4gICAgICAgIGVtaXR0ZXIuZW1pdCgnc3dpdGNoLXNpZGViYXInLCB7IHRhcmdldDogJ2xvZ28nIH0pXG4gICAgICAgICR0aGlzXG4gICAgICAgICAgLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgICAgICAgIC5zaWJsaW5ncygpXG4gICAgICAgICAgLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgICAgfVxuICAgIH0pXG4gICAgLm9uKCdjbGljaycsICcuSi1zaWRlYmFyLXNlYXJjaCcsIGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpXG5cbiAgICAgIGlmICgkdGhpcy5pcygnLmFjdGl2ZScpKSB7XG4gICAgICAgIHNpZGViYXJCb2R5SGlkZSgpXG4gICAgICAgICR0aGlzLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2lkZWJhckJvZHlTaG93KClcblxuICAgICAgICAkdGhpc1xuICAgICAgICAgIC5hZGRDbGFzcygnYWN0aXZlJylcbiAgICAgICAgICAuc2libGluZ3MoKVxuICAgICAgICAgIC5yZW1vdmVDbGFzcygnYWN0aXZlJylcblxuICAgICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJzZWFyY2gtYm94XCIgKi8gJ3BhcnRpYWxzL3NpZGUtYmFyLWJvZHkvc2VhcmNoLWJveCcpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGVtaXR0ZXIuZW1pdCgnc3dpdGNoLXNpZGViYXInLCB7IHRhcmdldDogJ3NlYXJjaCcgfSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuXG4gIGZ1bmN0aW9uIHNpZGViYXJCb2R5U2hvdygpIHtcbiAgICAkc2lkZWJhckJvZHkucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpXG4gICAgaXNTaWRlQm9keVNob3dpbmcgPSB0cnVlXG4gIH1cbiAgZnVuY3Rpb24gc2lkZWJhckJvZHlIaWRlKCkge1xuICAgICRzaWRlYmFyQm9keS5hZGRDbGFzcygnaGlkZGVuJylcbiAgICBpc1NpZGVCb2R5U2hvd2luZyA9IGZhbHNlXG4gIH1cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYXJ0aWFscy9zaWRlLWJhci1oZWFkZXIvaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGFydGlhbHMvc2lkZS1iYXItaGVhZGVyL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCAnLi9ibG9nLXRyZWUnXG5pbXBvcnQgJy4vc3R5bGUuc2NzcydcblxuJChmdW5jdGlvbigpIHtcbiAgY29uc3QgJHNlYXJjaEJveCA9ICQoJyNKLXNlYXJjaC1ib3gnKVxuICBjb25zdCAkYmxvZ1RyZWUgPSAkKCcjSi1ibG9nLXRyZWUnKVxuICBjb25zdCAkc2VhcmNoSW5wdXQgPSAkc2VhcmNoQm94LmZpbmQoJy5KLWlucHV0LXNlYXJjaCcpXG4gIGNvbnN0ICR0YWdUcmVlID0gJCgnI0otYmxvZy10cmVlJylcblxuICBlbWl0dGVyLm9uKCdzd2l0Y2gtc2lkZWJhcicsICh7IHRhcmdldCB9KSA9PiB7XG4gICAgY29uc3QgaXNTZWFyY2ggPSB0YXJnZXQgPT09ICdzZWFyY2gnXG5cbiAgICBpZiAoaXNTZWFyY2gpIHtcbiAgICAgICRibG9nVHJlZS5oaWRlKClcbiAgICAgICRzZWFyY2hCb3gucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpXG4gICAgICAkc2VhcmNoSW5wdXQuZm9jdXMoKVxuICAgIH0gZWxzZSB7XG4gICAgICAkYmxvZ1RyZWUuc2hvdygpXG4gICAgICAkc2VhcmNoQm94LmFkZENsYXNzKCdoaWRkZW4nKVxuICAgIH1cbiAgfSlcbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYXJ0aWFscy9zaWRlLWJhci1ib2R5L2luZGV4LmpzIiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnXG5pbXBvcnQgaGlzdG9yeSBmcm9tICcjL2hpc3RvcnknXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICBjb25zdCAkdGFnVHJlZSA9ICQoJyNKLWJsb2ctdHJlZScpXG4gIGNvbnN0ICRhbGxQb3N0cyA9ICQoJyNKLXBvc3RzLWFsbC1oaWRkZW4nKVxuICBjb25zdCBwYXRobmFtZSA9IGxvY2F0aW9uLnBhdGhuYW1lXG4gIGNvbnN0ICRib2R5ID0gJCgnYm9keScpXG4gIGNvbnN0ICR1bnRhZ2VkUG9zdHMgPSAkdGFnVHJlZS5maW5kKCcuSi11bnRhZ2VkLXBvc3RzJylcblxuICBjb25zdCB0YWdzID0ge31cbiAgY29uc3QgdW50YWdlZCA9IFtdXG4gICRhbGxQb3N0cy5maW5kKCcuSi1wb3N0JykuZWFjaChmdW5jdGlvbigpIHtcbiAgICBjb25zdCAkcG9zdCA9ICQodGhpcylcbiAgICBjb25zdCBzbHVnID0gJHBvc3QuZGF0YSgnc2x1ZycpXG4gICAgY29uc3QgJHRhZ3MgPSAkcG9zdC5maW5kKCcuSi10YWcnKVxuXG4gICAgaWYgKHBhdGhuYW1lLmluY2x1ZGVzKHNsdWcpKSB7XG4gICAgICAkcG9zdC5hZGRDbGFzcygnYWN0aXZlJylcbiAgICB9XG5cbiAgICBpZiAoJHRhZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICB1bnRhZ2VkLnB1c2goJHBvc3RbMF0ub3V0ZXJIVE1MKVxuICAgIH0gZWxzZSB7XG4gICAgICAkdGFncy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCB0YWcgPSB0aGlzLmlubmVyVGV4dFxuICAgICAgICBpZiAoIXRhZ3NbdGFnXSkge1xuICAgICAgICAgIHRhZ3NbdGFnXSA9IFtdXG4gICAgICAgIH1cblxuICAgICAgICB0YWdzW3RhZ10ucHVzaCgkcG9zdFswXS5vdXRlckhUTUwpXG4gICAgICB9KVxuICAgIH1cbiAgfSlcblxuICAvKipcbiAgICogY29weSBwb3N0cyB0byBjb3JyZXNwb25kaW5nIHRhZ1xuICAgKi9cbiAgJHRhZ1RyZWUuZmluZCgnLkotYmxvZy10cmVlLXBvc3RzJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICBjb25zdCAkdGhpcyA9ICQodGhpcylcbiAgICBjb25zdCBwb3N0cyA9IHRhZ3NbJHRoaXMuZGF0YSgndGFnJyldXG5cbiAgICBpZiAoIXBvc3RzKSB7XG4gICAgICAkdGhpc1xuICAgICAgICAuaHRtbCgnPHVsPjxsaSBjbGFzcz1cImJsb2ctdHJlZS1uby1wb3N0cyBsaWdodGVyXCI+Q29taW5nIHNvb24uLi48L2xpPjwvdWw+JylcbiAgICAgICAgLnBhcmVudCgpXG4gICAgICAgIC5hZGRDbGFzcygncG9zdC1oaWRkZW4nKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgJHRoaXMuaHRtbChwb3N0cy5qb2luKCcnKSkuY3NzKHtcbiAgICAgIGhlaWdodDogMjYgKiBwb3N0cy5sZW5ndGhcbiAgICB9KVxuICB9KVxuXG4gICR1bnRhZ2VkUG9zdHMuaHRtbCh1bnRhZ2VkLmpvaW4oJycpKVxuXG4gIGNvbnN0ICRwb3N0cyA9ICQoJy5KLWJsb2ctdHJlZS10YWdzIC5KLXBvc3QnKVxuXG4gIC8vIGV2ZW50IGJpbmRpbmdcbiAgJHRhZ1RyZWVcbiAgICAuYWRkQ2xhc3MoJ2xvYWRpbmctaGlkZGVuJylcbiAgICAub24oJ2NsaWNrJywgJy5KLWJsb2ctdHJlZS10YWduYW1lJywgZnVuY3Rpb24oKSB7XG4gICAgICAkKHRoaXMpXG4gICAgICAgIC5wYXJlbnQoKVxuICAgICAgICAudG9nZ2xlQ2xhc3MoJ3Bvc3QtaGlkZGVuJylcbiAgICB9KVxuICAgIC5vbignY2xpY2snLCAnLkotZ28ycG9zdCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKVxuXG4gICAgICBpZiAoISRib2R5LmlzKCcucG9zdC10ZW1wbGF0ZScpKSByZXR1cm5cblxuICAgICAgaWYgKCR0aGlzLnBhcmVudHMoJy5KLXBvc3QnKS5pcygnLmFjdGl2ZScpKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgaWQgPSAkdGhpcy5kYXRhKCdpZCcpXG4gICAgICBjb25zdCB1cmwgPSAkdGhpcy5hdHRyKCdocmVmJylcblxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBlbWl0dGVyLmVtaXQoJ2FkZC1wb3N0LXRhYicsIHtcbiAgICAgICAgaWQsXG4gICAgICAgIHVybCxcbiAgICAgICAgdGl0bGU6ICR0aGlzLmF0dHIoJ3RpdGxlJyksXG4gICAgICAgIHNsdWc6ICR0aGlzLnBhcmVudHMoJy5KLXBvc3QnKS5kYXRhKCdzbHVnJylcbiAgICAgIH0pXG4gICAgfSlcblxuICBoaXN0b3J5Lmxpc3Rlbihsb2NhdGlvbiA9PiB7XG4gICAgY29uc3QgbmV4dFRhYiA9IGxvY2F0aW9uLnN0YXRlXG5cbiAgICAkcG9zdHNcbiAgICAgIC5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAgIC5maWx0ZXIoKGlkeCwgcG9zdCkgPT4ge1xuICAgICAgICByZXR1cm4gJChwb3N0KS5kYXRhKCdzbHVnJykgPT09IG5leHRUYWIuc2x1Z1xuICAgICAgfSlcbiAgICAgIC5hZGRDbGFzcygnYWN0aXZlJylcbiAgfSlcbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYXJ0aWFscy9zaWRlLWJhci1ib2R5L2Jsb2ctdHJlZS9pbmRleC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYXJ0aWFscy9zaWRlLWJhci1ib2R5L2Jsb2ctdHJlZS9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGFydGlhbHMvc2lkZS1iYXItYm9keS9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcblxuJChmdW5jdGlvbigpIHtcbiAgY29uc3QgJHJlYWRpbmdUaW1lID0gJChcIi5KLXJlYWRpbmctdGltZVwiKTtcblxuICBlbWl0dGVyLm9uKFwicmVmcmVzaC1yZWFkaW5nLXRpbWVcIiwgKHsgdGltZSB9KSA9PiB7XG4gICAgJHJlYWRpbmdUaW1lLmh0bWwodGltZSk7XG4gIH0pO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYXJ0aWFscy9mb290ZXIvaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGFydGlhbHMvZm9vdGVyL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCAnLi9zdHlsZS5zY3NzJ1xuaW1wb3J0IGhpc3RvcnkgZnJvbSAnIy9oaXN0b3J5J1xuaW1wb3J0IHsgcG9zdFN0b3JlIH0gZnJvbSAnIy9zdG9yZXMnXG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSAnIy91dGlscydcblxuJChmdW5jdGlvbigpIHtcbiAgY29uc3QgJHBvc3RXcmFwID0gJCgnI0otcG9zdC13cmFwJylcbiAgY29uc3QgJHBvc3QgPSAkKCcjSi1wb3N0JylcbiAgY29uc3QgJHRpdGxlID0gJHBvc3QuZmluZCgnLkotcG9zdC10aXRsZScpXG4gIGNvbnN0ICRjb250ZW50ID0gJHBvc3QuZmluZCgnLkotcG9zdC1jb250ZW50JylcbiAgY29uc3QgJG1ldGEgPSAkcG9zdC5maW5kKCcuSi1wb3N0LW1ldGEnKVxuICBjb25zdCAkZmVhdHVyZUltYWdlID0gJHBvc3QuZmluZCgnLkotcG9zdC1mZWF0dXJlLWltYWdlJylcbiAgY29uc3Qgb3JpZ2luID0gbG9jYXRpb24ub3JpZ2luXG5cbiAgaGlnaGxpZ2h0KClcblxuICBpZiAoJCgnYm9keScpLmlzKCcucG9zdC10ZW1wbGF0ZScpKSB7XG4gICAgZW1pdHRlci5lbWl0KCdhZGQtcG9zdC10YWInLCB7XG4gICAgICBpZDogJHBvc3QuZGF0YSgnaWQnKSxcbiAgICAgIHRpdGxlOiAkcG9zdC5kYXRhKCd0aXRsZScpLFxuICAgICAgc2x1ZzogJHBvc3QuZGF0YSgnc2x1ZycpLFxuICAgICAgdXJsOiAkcG9zdC5kYXRhKCd1cmwnKVxuICAgIH0pXG5cbiAgICBlbWl0dGVyLmVtaXQoJ3JlZnJlc2gtcmVhZGluZy10aW1lJywge1xuICAgICAgdGltZTogJCgnLkotcmVhZGluZy10aW1lLWhpZGRlbicpLmh0bWwoKVxuICAgIH0pXG4gIH1cblxuICAvLyByZWZyZXNoIHBvc3QgZGF0YVxuICBoaXN0b3J5Lmxpc3RlbigobG9jYXRpb24sIGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IHBvc3RJZCA9IGxvY2F0aW9uLnN0YXRlLmlkXG5cbiAgICBpZiAoIXBvc3RJZCkgcmV0dXJuXG5cbiAgICBwb3N0U3RvcmUuZmV0Y2hQb3N0KHBvc3RJZCkuZG9uZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICBjb25zdCBwb3N0ID0gZGF0YS5wb3N0c1swXSB8fCB7fVxuICAgICAgY29uc3QgeyBwdWJsaXNoZWRfYXQsIHRpdGxlLCBodG1sLCBhdXRob3IsIGZlYXR1cmVfaW1hZ2UsIGNvbW1lbnRfaWQsIHVybCwgc2x1ZyB9ID0gcG9zdFxuXG4gICAgICAkdGl0bGUuaHRtbCh0aXRsZSlcbiAgICAgICRjb250ZW50Lmh0bWwoaHRtbClcbiAgICAgICRtZXRhLmh0bWwoYFBvc3RlZCBieSA8YSBocmVmPVwiL2F1dGhvci8ke2F1dGhvci5zbHVnfS9cIj4ke2F1dGhvci5uYW1lfTwvYT4gb24gJHtmb3JtYXREYXRlKCckWS4kTS4kZCcsIHB1Ymxpc2hlZF9hdCl9YClcbiAgICAgICRmZWF0dXJlSW1hZ2VbZmVhdHVyZV9pbWFnZSA/ICdyZW1vdmVDbGFzcycgOiAnYWRkQ2xhc3MnXSgnaGlkZGVuJylcbiAgICAgICAgLmZpbmQoJ2ZpZ3VyZScpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2ZlYXR1cmVfaW1hZ2V9KWBcbiAgICAgICAgfSlcblxuICAgICAgZW1pdHRlci5lbWl0KCdyZWZyZXNoLXJlYWRpbmctdGltZScsIHtcbiAgICAgICAgdGltZTogJydcbiAgICAgIH0pXG5cbiAgICAgIGRvY3VtZW50LnRpdGxlID0gdGl0bGVcblxuICAgICAgJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIHdpbmRvdy5yZWZyZXNoQ29tbWVudCAmJiB3aW5kb3cucmVmcmVzaENvbW1lbnQoYGdob3N0LSR7Y29tbWVudF9pZH1gLCBvcmlnaW4gKyB1cmwsIHRpdGxlKVxuXG4gICAgICBoaWdobGlnaHQoKVxuICAgICAgJHBvc3RXcmFwLmFuaW1hdGUoeyBzY3JvbGxUb3A6IDAgfSwgMzAwKVxuICAgIH0pXG4gIH0pXG5cbiAgZnVuY3Rpb24gaGlnaGxpZ2h0KCkge1xuICAgICQoJ3ByZSBjb2RlJykuZWFjaChmdW5jdGlvbihpLCBibG9jaykge1xuICAgICAgd2luZG93LmhsanMgJiYgd2luZG93LmhsanMuaGlnaGxpZ2h0QmxvY2soYmxvY2spXG4gICAgfSlcbiAgfVxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhcnRpYWxzL3Bvc3QvaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGFydGlhbHMvcG9zdC9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGFydGlhbHMvcG9zdC1uYXYvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhcnRpYWxzL2hvbWUvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhcnRpYWxzL2F1dGhvci9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9