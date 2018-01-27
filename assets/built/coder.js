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
  lsPostTabKey: 'coder-post-tabs',
  // localstorage theme key
  lsThemeKey: 'coder-theme',
  lsPostsKey: 'coder-posts',
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_config__ = __webpack_require__(0);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };


const ls = localStorage;
const lsPostsKey = __WEBPACK_IMPORTED_MODULE_0_config__["a" /* default */].lsPostsKey;

/* harmony default export */ __webpack_exports__["a"] = (class {
  fetchPost(id) {
    const cache = this.fromCache(id);

    return cache ? $.Deferred().resolve(cache) : $.get(ghost.url.api(`posts/${id}`), {
      include: 'author'
    }).fail(function (err) {
      console.log(err);
    }).done(data => {
      const post = data.posts[0] || {};
      this.cachePost(id, post);
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
    const useable = post && +new Date() - post.timestamp <= 5 * 60 * 1000;

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

    const { created_at, title, html, author, feature_image } = post;
    let lsPosts = ls.getItem(lsPostsKey);
    lsPosts = lsPosts ? JSON.parse(lsPosts) : {};

    lsPosts[id] = {
      created_at,
      title,
      html,
      author: JSON.stringify(author),
      feature_image,
      timestamp: +new Date()

      // cache up to 5 posts
      // delete the oldest one if more than 5
    };let ids = Object.keys(lsPosts);
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
          resolve(__webpack_require__( /* webpackChunkName: "search-box" */38));
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
  const $featureImage = $post.find('.J-post-feature-image');

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
      const { created_at, title, html, author, feature_image } = post;

      $title.html(title);
      $content.html(html);
      $meta.html(`Posted by ${author.name} on ${Object(__WEBPACK_IMPORTED_MODULE_3__utils__["a" /* formatDate */])('$Y.$M.$d', created_at)}`);
      $featureImage[feature_image ? 'show' : 'hide']().find('figure').css({
        backgroundImage: `url(${feature_image})`
      });
      emitter.emit('refresh-reading-time', {
        time: ''
      });
      document.title = title;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDAyZmU1OGMwMmUyNjEwYzdiZjUiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9oaXN0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy93YXJuaW5nL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9QYXRoVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2VtaXR0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21pdHQvZGlzdC9taXR0LmVzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9wYXJ0aWFscy9wb3N0LXRhYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvcmVzdWx0Lmpzb24iLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvcG9zdC10YWIvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmVzL1RoZW1lU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3Jlcy9UYWJTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmVzL1Bvc3RTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9jcmVhdGVCcm93c2VySGlzdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW52YXJpYW50L2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hpc3RvcnkvTG9jYXRpb25VdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS1wYXRobmFtZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsdWUtZXF1YWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hpc3RvcnkvY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hpc3RvcnkvRE9NVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvc2lkZS1iYXItaGVhZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhcnRpYWxzL3NpZGUtYmFyLWhlYWRlci9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3BhcnRpYWxzL3NpZGUtYmFyLWJvZHkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvc2lkZS1iYXItYm9keS9ibG9nLXRyZWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvc2lkZS1iYXItYm9keS9ibG9nLXRyZWUvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9wYXJ0aWFscy9zaWRlLWJhci1ib2R5L3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvZm9vdGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhcnRpYWxzL2Zvb3Rlci9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3BhcnRpYWxzL3Bvc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvcG9zdC9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3BhcnRpYWxzL3Bvc3QtbmF2L3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvaG9tZS9zdHlsZS5zY3NzIl0sIm5hbWVzIjpbInRoZW1lcyIsImxzUG9zdFRhYktleSIsImxzVGhlbWVLZXkiLCJsc1Bvc3RzS2V5IiwiZGVmYXVsdFRoZW1lIiwiY3JlYXRlSGlzdG9yeSIsInRoZW1lU3RvcmUiLCJ0YWJTdG9yZSIsInBvc3RTdG9yZSIsIndpbmRvdyIsInN0b3JlcyIsIiRib2R5IiwiJCIsImlzSG9tZVBhZ2UiLCJpcyIsImlzUG9zdFBhZ2UiLCJoU2Nyb2xsIiwiZWwiLCJjb25zb2xlIiwiZXJyb3IiLCJhZGRFdmVudExpc3RlbmVyIiwid2hlZWwiLCJlIiwiZGVsdGEiLCJ3aGVlbERlbHRhIiwiZGVsdGFZIiwic2Nyb2xsTGVmdCIsInByZXZlbnREZWZhdWx0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImZvcm1hdCIsInRlbXBsYXRlIiwidmFycyIsInJlcGxhY2UiLCJfIiwibmFtZSIsInZhbHVlIiwidHJpbSIsInRvTGVuIiwic291cmNlIiwibGVuIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJqb2luIiwiY2FsbCIsImxlbmd0aCIsInNsaWNlIiwiZm9ybWF0RGF0ZSIsImRhdGUiLCJrZXkiLCJEYXRlIiwiREFZIiwiWSIsImdldEZ1bGxZZWFyIiwieSIsIk0iLCJnZXRNb250aCIsImQiLCJnZXREYXRlIiwiRCIsImdldERheSIsIkgiLCJnZXRIb3VycyIsIm0iLCJnZXRNaW51dGVzIiwicyIsImdldFNlY29uZHMiLCJ3YXJuaW5nIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiY29uZGl0aW9uIiwiYXJncyIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsIkVycm9yIiwidGVzdCIsImFyZ0luZGV4IiwibWVzc2FnZSIsIngiLCJtb2R1bGUiLCJleHBvcnRzIiwiY2FjaGVkU2V0VGltZW91dCIsImNhY2hlZENsZWFyVGltZW91dCIsImRlZmF1bHRTZXRUaW1vdXQiLCJkZWZhdWx0Q2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsInJ1blRpbWVvdXQiLCJmdW4iLCJydW5DbGVhclRpbWVvdXQiLCJtYXJrZXIiLCJxdWV1ZSIsImRyYWluaW5nIiwiY3VycmVudFF1ZXVlIiwicXVldWVJbmRleCIsImNsZWFuVXBOZXh0VGljayIsImNvbmNhdCIsImRyYWluUXVldWUiLCJ0aW1lb3V0IiwicnVuIiwibmV4dFRpY2siLCJpIiwicHVzaCIsIkl0ZW0iLCJhcnJheSIsImFwcGx5IiwidGl0bGUiLCJicm93c2VyIiwiYXJndiIsInZlcnNpb24iLCJ2ZXJzaW9ucyIsIm5vb3AiLCJvbiIsImFkZExpc3RlbmVyIiwib25jZSIsIm9mZiIsInJlbW92ZUxpc3RlbmVyIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiZW1pdCIsInByZXBlbmRMaXN0ZW5lciIsInByZXBlbmRPbmNlTGlzdGVuZXIiLCJsaXN0ZW5lcnMiLCJiaW5kaW5nIiwiY3dkIiwiY2hkaXIiLCJkaXIiLCJ1bWFzayIsIl9fZXNNb2R1bGUiLCJhZGRMZWFkaW5nU2xhc2giLCJwYXRoIiwiY2hhckF0Iiwic3RyaXBMZWFkaW5nU2xhc2giLCJzdWJzdHIiLCJoYXNCYXNlbmFtZSIsInByZWZpeCIsIlJlZ0V4cCIsInN0cmlwQmFzZW5hbWUiLCJzdHJpcFRyYWlsaW5nU2xhc2giLCJwYXJzZVBhdGgiLCJwYXRobmFtZSIsInNlYXJjaCIsImhhc2giLCJoYXNoSW5kZXgiLCJpbmRleE9mIiwic2VhcmNoSW5kZXgiLCJjcmVhdGVQYXRoIiwibG9jYXRpb24iLCJlbWl0dGVyIiwibWl0dCIsImFsbCIsIk9iamVjdCIsImNyZWF0ZSIsInR5cGUiLCJoYW5kbGVyIiwic3BsaWNlIiwiZXZ0IiwibWFwIiwiJHBvc3RUYWJzIiwiJHNjcm9sbFdyYXAiLCJuZFNjcm9sbFdyYXAiLCJnZXQiLCIkaG9tZSIsImhvbWVXaWR0aCIsIm91dGVyV2lkdGgiLCJwb3N0IiwidGFicyIsImdldFRhYnMiLCJmaWx0ZXIiLCJ0YWIiLCJpZCIsInNldFRhYnMiLCJhY3RpdmUiLCJhY3RpdmVJZCIsImN1cnJlbnRUYWIiLCIkYWN0aXZlIiwiaHRtbCIsInNsdWciLCJmaW5kIiwiaGlzdG9yeSIsInVybCIsInNldEN1cnJlbnRUYWIiLCJzY3JvbGwydmlldyIsInN0b3BQcm9wYWdhdGlvbiIsImRlbGV0ZVRhYkl0ZW0iLCJwYXJlbnQiLCJkYXRhIiwiJHRoaXMiLCJhZGRDbGFzcyIsInNpYmxpbmdzIiwicmVtb3ZlQ2xhc3MiLCJ3cmFwV2lkdGgiLCJ3aWR0aCIsIndyYXBTY3JvbGxMZWZ0Iiwid3JhcFJpZ2h0IiwidGhyZXNob2xkIiwibmRBY3RpdmUiLCJhY3RpdmVXaWR0aCIsImFjdGl2ZUxlZnQiLCJvZmZzZXRMZWZ0IiwiYWN0aXZlUmlnaHQiLCJscyIsImxvY2FsU3RvcmFnZSIsImNvbmZpZyIsInRoZW1lIiwiZ2V0SXRlbSIsInNldFRoZW1lIiwic2V0SXRlbSIsInNwbGl0IiwibmV4dFRhYiIsImlzQ3VycmVudFRhYiIsImRlbGV0ZWRJZHgiLCJmaW5kSW5kZXgiLCJpZHgiLCJocmVmIiwiZmV0Y2hQb3N0IiwiY2FjaGUiLCJmcm9tQ2FjaGUiLCJEZWZlcnJlZCIsInJlc29sdmUiLCJnaG9zdCIsImFwaSIsImluY2x1ZGUiLCJmYWlsIiwiZXJyIiwibG9nIiwiZG9uZSIsInBvc3RzIiwiY2FjaGVQb3N0IiwibHNQb3N0cyIsIkpTT04iLCJwYXJzZSIsInVzZWFibGUiLCJ0aW1lc3RhbXAiLCJpbmZvIiwiYXV0aG9yIiwiZGVsZXRlUG9zdEZyb21DYWNoZSIsInN0cmluZ2lmeSIsImNyZWF0ZWRfYXQiLCJmZWF0dXJlX2ltYWdlIiwiaWRzIiwia2V5cyIsInNob3VsZERlbGV0ZUlkIiwic29ydCIsImEiLCJiIiwiaXRlbSIsInNoaWZ0IiwiX3R5cGVvZiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwib2JqIiwiY29uc3RydWN0b3IiLCJfZXh0ZW5kcyIsImFzc2lnbiIsInRhcmdldCIsImhhc093blByb3BlcnR5IiwiX3dhcm5pbmciLCJyZXF1aXJlIiwiX3dhcm5pbmcyIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl9pbnZhcmlhbnQiLCJfaW52YXJpYW50MiIsIl9Mb2NhdGlvblV0aWxzIiwiX1BhdGhVdGlscyIsIl9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlciIsIl9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlcjIiLCJfRE9NVXRpbHMiLCJkZWZhdWx0IiwiUG9wU3RhdGVFdmVudCIsIkhhc2hDaGFuZ2VFdmVudCIsImdldEhpc3RvcnlTdGF0ZSIsInN0YXRlIiwiY3JlYXRlQnJvd3Nlckhpc3RvcnkiLCJwcm9wcyIsImNhblVzZURPTSIsImdsb2JhbEhpc3RvcnkiLCJjYW5Vc2VIaXN0b3J5Iiwic3VwcG9ydHNIaXN0b3J5IiwibmVlZHNIYXNoQ2hhbmdlTGlzdGVuZXIiLCJzdXBwb3J0c1BvcFN0YXRlT25IYXNoQ2hhbmdlIiwiX3Byb3BzJGZvcmNlUmVmcmVzaCIsImZvcmNlUmVmcmVzaCIsIl9wcm9wcyRnZXRVc2VyQ29uZmlybSIsImdldFVzZXJDb25maXJtYXRpb24iLCJnZXRDb25maXJtYXRpb24iLCJfcHJvcHMka2V5TGVuZ3RoIiwia2V5TGVuZ3RoIiwiYmFzZW5hbWUiLCJnZXRET01Mb2NhdGlvbiIsImhpc3RvcnlTdGF0ZSIsIl9yZWYiLCJfd2luZG93JGxvY2F0aW9uIiwiY3JlYXRlTG9jYXRpb24iLCJjcmVhdGVLZXkiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJ0cmFuc2l0aW9uTWFuYWdlciIsInNldFN0YXRlIiwibmV4dFN0YXRlIiwibm90aWZ5TGlzdGVuZXJzIiwiYWN0aW9uIiwiaGFuZGxlUG9wU3RhdGUiLCJldmVudCIsImlzRXh0cmFuZW91c1BvcHN0YXRlRXZlbnQiLCJoYW5kbGVQb3AiLCJoYW5kbGVIYXNoQ2hhbmdlIiwiZm9yY2VOZXh0UG9wIiwiY29uZmlybVRyYW5zaXRpb25UbyIsIm9rIiwicmV2ZXJ0UG9wIiwiZnJvbUxvY2F0aW9uIiwidG9Mb2NhdGlvbiIsInRvSW5kZXgiLCJhbGxLZXlzIiwiZnJvbUluZGV4IiwiZ28iLCJpbml0aWFsTG9jYXRpb24iLCJjcmVhdGVIcmVmIiwicHVzaFN0YXRlIiwicHJldkluZGV4IiwibmV4dEtleXMiLCJyZXBsYWNlU3RhdGUiLCJuIiwiZ29CYWNrIiwiZ29Gb3J3YXJkIiwibGlzdGVuZXJDb3VudCIsImNoZWNrRE9NTGlzdGVuZXJzIiwiaXNCbG9ja2VkIiwiYmxvY2siLCJwcm9tcHQiLCJ1bmJsb2NrIiwic2V0UHJvbXB0IiwibGlzdGVuIiwibGlzdGVuZXIiLCJ1bmxpc3RlbiIsImFwcGVuZExpc3RlbmVyIiwiaW52YXJpYW50IiwiYyIsImYiLCJmcmFtZXNUb1BvcCIsImxvY2F0aW9uc0FyZUVxdWFsIiwiX3Jlc29sdmVQYXRobmFtZSIsIl9yZXNvbHZlUGF0aG5hbWUyIiwiX3ZhbHVlRXF1YWwiLCJfdmFsdWVFcXVhbDIiLCJjdXJyZW50TG9jYXRpb24iLCJkZWNvZGVVUkkiLCJVUklFcnJvciIsImlzQWJzb2x1dGUiLCJzcGxpY2VPbmUiLCJsaXN0IiwiaW5kZXgiLCJrIiwicG9wIiwicmVzb2x2ZVBhdGhuYW1lIiwidG8iLCJmcm9tIiwidG9QYXJ0cyIsImZyb21QYXJ0cyIsImlzVG9BYnMiLCJpc0Zyb21BYnMiLCJtdXN0RW5kQWJzIiwiaGFzVHJhaWxpbmdTbGFzaCIsImxhc3QiLCJ1cCIsInBhcnQiLCJ1bnNoaWZ0IiwicmVzdWx0IiwidmFsdWVFcXVhbCIsImlzQXJyYXkiLCJldmVyeSIsImFUeXBlIiwiYlR5cGUiLCJhVmFsdWUiLCJ2YWx1ZU9mIiwiYlZhbHVlIiwiYUtleXMiLCJiS2V5cyIsImNyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyIiwibmV4dFByb21wdCIsImNhbGxiYWNrIiwiZm4iLCJpc0FjdGl2ZSIsIl9sZW4iLCJfa2V5IiwiZm9yRWFjaCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIm5vZGUiLCJhdHRhY2hFdmVudCIsImRldGFjaEV2ZW50IiwiY29uZmlybSIsInVhIiwibmF2aWdhdG9yIiwidXNlckFnZW50Iiwic3VwcG9ydHNHb1dpdGhvdXRSZWxvYWRVc2luZ0hhc2giLCJyZWFkeSIsIiRzaWRlYmFyIiwiJHRoZW1lU2VsZWN0b3IiLCIkc2lkZWJhckJvZHkiLCJpc1NlYXJjaFNob3dpbmciLCJpc1NpZGVCb2R5U2hvd2luZyIsImlzU2VsZWN0ZWQiLCJ2YWwiLCJzaWRlYmFyQm9keUhpZGUiLCJzaWRlYmFyQm9keVNob3ciLCJ0aGVuIiwiJHNlYXJjaEJveCIsIiRibG9nVHJlZSIsIiRzZWFyY2hJbnB1dCIsIiR0YWdUcmVlIiwiaXNTZWFyY2giLCJoaWRlIiwiZm9jdXMiLCJzaG93IiwiJGFsbFBvc3RzIiwiJHVudGFnZWRQb3N0cyIsInRhZ3MiLCJ1bnRhZ2VkIiwiZWFjaCIsIiRwb3N0IiwiJHRhZ3MiLCJpbmNsdWRlcyIsIm91dGVySFRNTCIsInRhZyIsImlubmVyVGV4dCIsImNzcyIsImhlaWdodCIsIiRwb3N0cyIsInRvZ2dsZUNsYXNzIiwicGFyZW50cyIsImF0dHIiLCIkcmVhZGluZ1RpbWUiLCJ0aW1lIiwiJHRpdGxlIiwiJGNvbnRlbnQiLCIkbWV0YSIsIiRmZWF0dXJlSW1hZ2UiLCJwb3N0SWQiLCJiYWNrZ3JvdW5kSW1hZ2UiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsV0FBVyxFQUFFO0FBQ3ZEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4REFBc0QsNkJBQTZCLFlBQVk7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7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LENBQWlDLFVBQVN4QyxJQUFULEVBQWU7QUFDOUMsWUFBTXJCLE9BQU9xQixLQUFLeUMsS0FBTCxDQUFXLENBQVgsS0FBaUIsRUFBOUI7QUFDQSxZQUFNLEVBQUVXLFVBQUYsRUFBY25JLEtBQWQsRUFBcUJxRSxJQUFyQixFQUEyQjJELE1BQTNCLEVBQW1DSSxhQUFuQyxLQUFxRDFFLElBQTNEOztBQUVBK1EsYUFBT3BRLElBQVAsQ0FBWXJFLEtBQVo7QUFDQTBVLGVBQVNyUSxJQUFULENBQWNBLElBQWQ7QUFDQXNRLFlBQU10USxJQUFOLENBQVksYUFBWTJELE9BQU94TSxJQUFLLE9BQU0sa0VBQUFZLENBQVcsVUFBWCxFQUF1QitMLFVBQXZCLENBQW1DLEVBQTdFO0FBQ0F5TSxvQkFBY3hNLGdCQUFnQixNQUFoQixHQUF5QixNQUF2QyxJQUFpRDdELElBQWpELENBQXNELFFBQXRELEVBQWdFMFAsR0FBaEUsQ0FBb0U7QUFDbEVhLHlCQUFrQixPQUFNMU0sYUFBYztBQUQ0QixPQUFwRTtBQUdBM0YsY0FBUTdCLElBQVIsQ0FBYSxzQkFBYixFQUFxQztBQUNuQzRULGNBQU07QUFENkIsT0FBckM7QUFHQS9DLGVBQVN6UixLQUFULEdBQWlCQSxLQUFqQjtBQUNELEtBZEQsQ0FERjtBQWdCRCxHQW5CRDtBQW9CRCxDQXpDRCxFOzs7Ozs7QUNMQSx5Qzs7Ozs7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLHlDIiwiZmlsZSI6ImNvZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXTtcbiBcdHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGNodW5rSWRzLCBtb3JlTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMpIHtcbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdLCByZXN1bHQ7XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihjaHVua0lkcywgbW9yZU1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzKTtcbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdH07XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdHMgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0MTogMFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgPT09IDApIHtcbiBcdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkgeyByZXNvbHZlKCk7IH0pO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZENodW5rRGF0YVsyXTtcbiBcdFx0fVxuXG4gXHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcbiBcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcbiBcdFx0fSk7XG4gXHRcdGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2U7XG5cbiBcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHR2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gXHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiBcdFx0c2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiBcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuIFx0XHRzY3JpcHQuYXN5bmMgPSB0cnVlO1xuIFx0XHRzY3JpcHQudGltZW91dCA9IDEyMDAwMDtcblxuIFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuIFx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcbiBcdFx0fVxuIFx0XHRzY3JpcHQuc3JjID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJjaHVuay5cIiArICh7fVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5cIiArIHtcIjBcIjpcIjA3OTY5XCJ9W2NodW5rSWRdICsgXCIuanNcIjtcbiBcdFx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUsIDEyMDAwMCk7XG4gXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGU7XG4gXHRcdGZ1bmN0aW9uIG9uU2NyaXB0Q29tcGxldGUoKSB7XG4gXHRcdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuIFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG4gXHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuIFx0XHRcdHZhciBjaHVuayA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0XHRpZihjaHVuayAhPT0gMCkge1xuIFx0XHRcdFx0aWYoY2h1bmspIHtcbiBcdFx0XHRcdFx0Y2h1bmtbMV0obmV3IEVycm9yKCdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuJykpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuIFx0XHRcdH1cbiBcdFx0fTtcbiBcdFx0aGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuXG4gXHRcdHJldHVybiBwcm9taXNlO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYXNzZXRzL2J1aWx0L1wiO1xuXG4gXHQvLyBvbiBlcnJvciBmdW5jdGlvbiBmb3IgYXN5bmMgbG9hZGluZ1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHRocm93IGVycjsgfTtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwMDJmZTU4YzAyZTI2MTBjN2JmNSIsImltcG9ydCB7IHRoZW1lcyB9IGZyb20gJy4vdGhlbWVzL3Jlc3VsdC5qc29uJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRoZW1lcyxcbiAgbHNQb3N0VGFiS2V5OiAnY29kZXItcG9zdC10YWJzJyxcbiAgLy8gbG9jYWxzdG9yYWdlIHRoZW1lIGtleVxuICBsc1RoZW1lS2V5OiAnY29kZXItdGhlbWUnLFxuICBsc1Bvc3RzS2V5OiAnY29kZXItcG9zdHMnLFxuICBkZWZhdWx0VGhlbWU6ICdkYXJrX2RlZmF1bHQnXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb25maWcuanMiLCJpbXBvcnQgY3JlYXRlSGlzdG9yeSBmcm9tIFwiaGlzdG9yeS9jcmVhdGVCcm93c2VySGlzdG9yeVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhpc3RvcnkoKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oaXN0b3J5LmpzIiwiaW1wb3J0IFRoZW1lU3RvcmUgZnJvbSAnLi9UaGVtZVN0b3JlJ1xuaW1wb3J0IFRhYlN0b3JlIGZyb20gJy4vVGFiU3RvcmUnXG5pbXBvcnQgUG9zdFN0b3JlIGZyb20gJy4vUG9zdFN0b3JlJ1xuXG5leHBvcnQgY29uc3QgdGhlbWVTdG9yZSA9IG5ldyBUaGVtZVN0b3JlKClcbmV4cG9ydCBjb25zdCB0YWJTdG9yZSA9IG5ldyBUYWJTdG9yZSgpXG5leHBvcnQgY29uc3QgcG9zdFN0b3JlID0gbmV3IFBvc3RTdG9yZSgpXG5cbndpbmRvdy5zdG9yZXMgPSB7XG4gIHRoZW1lU3RvcmUsXG4gIHRhYlN0b3JlLFxuICBwb3N0U3RvcmVcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmVzL2luZGV4LmpzIiwiY29uc3QgJGJvZHkgPSAkKCdib2R5JylcblxuZXhwb3J0IGNvbnN0IGlzSG9tZVBhZ2UgPSAoKSA9PiAkYm9keS5pcygnLmhvbWUtdGVtcGxhdGUnKVxuZXhwb3J0IGNvbnN0IGlzUG9zdFBhZ2UgPSAoKSA9PiAkYm9keS5pcygnLnBvc3QtdGVtcGxhdGUnKVxuXG4vKipcbiAqIGhvcml6b250YWxseSBzY3JvbGxcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICpcbiAqIEBleGFtcGxlXG4gKiAgY29uc3Qgc3RvcEhTY3JvbGwgPSBoU2Nyb2xsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNKLWhzY3JvbGwtZWwnKSlcbiAqICBzdG9wSFNjcm9sbCgpIC8vIHJlbW92ZUV2ZW50TGlzdGVuZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhTY3JvbGwoZWwpIHtcbiAgaWYgKCFlbCkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ011c3Qgc3BlY2lmeSBlbCEnKVxuICAgIHJldHVyblxuICB9XG5cbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCB3aGVlbClcblxuICBmdW5jdGlvbiB3aGVlbChlKSB7XG4gICAgY29uc3QgZGVsdGEgPSBlLndoZWVsRGVsdGEgPyBlLndoZWVsRGVsdGEgOiAtMSAqIGUuZGVsdGFZXG4gICAgZWwuc2Nyb2xsTGVmdCArPSAtZGVsdGFcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIHJldHVybiAoKSA9PiBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIHdoZWVsKVxufVxuXG5leHBvcnQgY29uc3QgZm9ybWF0ID0gZnVuY3Rpb24odGVtcGxhdGUsIHZhcnMpIHtcbiAgcmV0dXJuIHRlbXBsYXRlLnJlcGxhY2UoL1xcJFxceyhbXlxce1xcfV0qKVxcfS9nLCBmdW5jdGlvbihfLCBuYW1lKSB7XG4gICAgdmFyIHZhbHVlID0gdmFyc1tuYW1lLnRyaW0oKV1cbiAgICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWUgKyAnJ1xuICB9KVxufVxuXG5jb25zdCB0b0xlbiA9IGZ1bmN0aW9uKHNvdXJjZSwgbGVuKSB7XG4gIHJldHVybiAoXG4gICAgQXJyYXkucHJvdG90eXBlLmpvaW4uY2FsbChcbiAgICAgIHtcbiAgICAgICAgbGVuZ3RoOiBsZW4gKyAxXG4gICAgICB9LFxuICAgICAgJzAnXG4gICAgKSArIHNvdXJjZVxuICApLnNsaWNlKC1sZW4pXG59XG5cbmV4cG9ydCBjb25zdCBmb3JtYXREYXRlID0gZnVuY3Rpb24odGVtcGxhdGUsIGRhdGUpIHtcbiAgaWYgKCFkYXRlKSByZXR1cm4gJydcbiAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKC9cXCQoW2EtekEtWl0pL2csIGZ1bmN0aW9uKF8sIGtleSkge1xuICAgIHJldHVybiAnJHsnICsga2V5ICsgJ30nXG4gIH0pXG4gIGRhdGUgPSBuZXcgRGF0ZShkYXRlKVxuICB2YXIgREFZID0gWyfml6UnLCAn5LiAJywgJ+S6jCcsICfkuIknLCAn5ZubJywgJ+S6lCcsICflha0nXVxuICByZXR1cm4gZm9ybWF0KHRlbXBsYXRlLCB7XG4gICAgWTogdG9MZW4oZGF0ZS5nZXRGdWxsWWVhcigpLCA0KSxcbiAgICB5OiB0b0xlbihkYXRlLmdldEZ1bGxZZWFyKCksIDIpLFxuICAgIE06IHRvTGVuKGRhdGUuZ2V0TW9udGgoKSArIDEsIDIpLFxuICAgIGQ6IHRvTGVuKGRhdGUuZ2V0RGF0ZSgpLCAyKSxcbiAgICBEOiBEQVlbZGF0ZS5nZXREYXkoKV0sXG4gICAgSDogdG9MZW4oZGF0ZS5nZXRIb3VycygpLCAyKSxcbiAgICBtOiB0b0xlbihkYXRlLmdldE1pbnV0ZXMoKSwgMiksXG4gICAgczogdG9MZW4oZGF0ZS5nZXRTZWNvbmRzKCksIDIpXG4gIH0pXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMuanMiLCIvKipcbiAqIENvcHlyaWdodCAyMDE0LTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciB3YXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgd2FybmluZyA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhcmdzKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgYXJncyA9IG5ldyBBcnJheShsZW4gPiAyID8gbGVuIC0gMiA6IDApO1xuICAgIGZvciAodmFyIGtleSA9IDI7IGtleSA8IGxlbjsga2V5KyspIHtcbiAgICAgIGFyZ3Nba2V5IC0gMl0gPSBhcmd1bWVudHNba2V5XTtcbiAgICB9XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICtcbiAgICAgICAgJ21lc3NhZ2UgYXJndW1lbnQnXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChmb3JtYXQubGVuZ3RoIDwgMTAgfHwgKC9eW3NcXFddKiQvKS50ZXN0KGZvcm1hdCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1RoZSB3YXJuaW5nIGZvcm1hdCBzaG91bGQgYmUgYWJsZSB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzICcgK1xuICAgICAgICAnd2FybmluZy4gUGxlYXNlLCB1c2UgYSBtb3JlIGRlc2NyaXB0aXZlIGZvcm1hdCB0aGFuOiAnICsgZm9ybWF0XG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgICAgfSk7XG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgIH0gY2F0Y2goeCkge31cbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2FybmluZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy93YXJuaW5nL2Jyb3dzZXIuanMiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBhZGRMZWFkaW5nU2xhc2ggPSBleHBvcnRzLmFkZExlYWRpbmdTbGFzaCA9IGZ1bmN0aW9uIGFkZExlYWRpbmdTbGFzaChwYXRoKSB7XG4gIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nID8gcGF0aCA6ICcvJyArIHBhdGg7XG59O1xuXG52YXIgc3RyaXBMZWFkaW5nU2xhc2ggPSBleHBvcnRzLnN0cmlwTGVhZGluZ1NsYXNoID0gZnVuY3Rpb24gc3RyaXBMZWFkaW5nU2xhc2gocGF0aCkge1xuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJyA/IHBhdGguc3Vic3RyKDEpIDogcGF0aDtcbn07XG5cbnZhciBoYXNCYXNlbmFtZSA9IGV4cG9ydHMuaGFzQmFzZW5hbWUgPSBmdW5jdGlvbiBoYXNCYXNlbmFtZShwYXRoLCBwcmVmaXgpIHtcbiAgcmV0dXJuIG5ldyBSZWdFeHAoJ14nICsgcHJlZml4ICsgJyhcXFxcL3xcXFxcP3wjfCQpJywgJ2knKS50ZXN0KHBhdGgpO1xufTtcblxudmFyIHN0cmlwQmFzZW5hbWUgPSBleHBvcnRzLnN0cmlwQmFzZW5hbWUgPSBmdW5jdGlvbiBzdHJpcEJhc2VuYW1lKHBhdGgsIHByZWZpeCkge1xuICByZXR1cm4gaGFzQmFzZW5hbWUocGF0aCwgcHJlZml4KSA/IHBhdGguc3Vic3RyKHByZWZpeC5sZW5ndGgpIDogcGF0aDtcbn07XG5cbnZhciBzdHJpcFRyYWlsaW5nU2xhc2ggPSBleHBvcnRzLnN0cmlwVHJhaWxpbmdTbGFzaCA9IGZ1bmN0aW9uIHN0cmlwVHJhaWxpbmdTbGFzaChwYXRoKSB7XG4gIHJldHVybiBwYXRoLmNoYXJBdChwYXRoLmxlbmd0aCAtIDEpID09PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGg7XG59O1xuXG52YXIgcGFyc2VQYXRoID0gZXhwb3J0cy5wYXJzZVBhdGggPSBmdW5jdGlvbiBwYXJzZVBhdGgocGF0aCkge1xuICB2YXIgcGF0aG5hbWUgPSBwYXRoIHx8ICcvJztcbiAgdmFyIHNlYXJjaCA9ICcnO1xuICB2YXIgaGFzaCA9ICcnO1xuXG4gIHZhciBoYXNoSW5kZXggPSBwYXRobmFtZS5pbmRleE9mKCcjJyk7XG4gIGlmIChoYXNoSW5kZXggIT09IC0xKSB7XG4gICAgaGFzaCA9IHBhdGhuYW1lLnN1YnN0cihoYXNoSW5kZXgpO1xuICAgIHBhdGhuYW1lID0gcGF0aG5hbWUuc3Vic3RyKDAsIGhhc2hJbmRleCk7XG4gIH1cblxuICB2YXIgc2VhcmNoSW5kZXggPSBwYXRobmFtZS5pbmRleE9mKCc/Jyk7XG4gIGlmIChzZWFyY2hJbmRleCAhPT0gLTEpIHtcbiAgICBzZWFyY2ggPSBwYXRobmFtZS5zdWJzdHIoc2VhcmNoSW5kZXgpO1xuICAgIHBhdGhuYW1lID0gcGF0aG5hbWUuc3Vic3RyKDAsIHNlYXJjaEluZGV4KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWU6IHBhdGhuYW1lLFxuICAgIHNlYXJjaDogc2VhcmNoID09PSAnPycgPyAnJyA6IHNlYXJjaCxcbiAgICBoYXNoOiBoYXNoID09PSAnIycgPyAnJyA6IGhhc2hcbiAgfTtcbn07XG5cbnZhciBjcmVhdGVQYXRoID0gZXhwb3J0cy5jcmVhdGVQYXRoID0gZnVuY3Rpb24gY3JlYXRlUGF0aChsb2NhdGlvbikge1xuICB2YXIgcGF0aG5hbWUgPSBsb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgIHNlYXJjaCA9IGxvY2F0aW9uLnNlYXJjaCxcbiAgICAgIGhhc2ggPSBsb2NhdGlvbi5oYXNoO1xuXG5cbiAgdmFyIHBhdGggPSBwYXRobmFtZSB8fCAnLyc7XG5cbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2ggIT09ICc/JykgcGF0aCArPSBzZWFyY2guY2hhckF0KDApID09PSAnPycgPyBzZWFyY2ggOiAnPycgKyBzZWFyY2g7XG5cbiAgaWYgKGhhc2ggJiYgaGFzaCAhPT0gJyMnKSBwYXRoICs9IGhhc2guY2hhckF0KDApID09PSAnIycgPyBoYXNoIDogJyMnICsgaGFzaDtcblxuICByZXR1cm4gcGF0aDtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2hpc3RvcnkvUGF0aFV0aWxzLmpzIiwiaW1wb3J0ICcuL2NvbXBvbmVudHMvZW1pdHRlcidcblxuaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJ1xuXG5pbXBvcnQgJ3BhcnRpYWxzL3Bvc3QtdGFiJ1xuaW1wb3J0ICdwYXJ0aWFscy9zaWRlLWJhci1oZWFkZXInXG5pbXBvcnQgJ3BhcnRpYWxzL3NpZGUtYmFyLWJvZHknXG5pbXBvcnQgJ3BhcnRpYWxzL2Zvb3RlcidcbmltcG9ydCAncGFydGlhbHMvcG9zdCdcbmltcG9ydCAncGFydGlhbHMvcG9zdC1uYXYnXG5pbXBvcnQgJ3BhcnRpYWxzL2hvbWUnXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvZGVyLmpzIiwiaW1wb3J0IG1pdHQgZnJvbSAnbWl0dCdcbndpbmRvdy5lbWl0dGVyID0gbWl0dCgpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvZW1pdHRlci9pbmRleC5qcyIsIi8vICAgICAgXG4vLyBBbiBldmVudCBoYW5kbGVyIGNhbiB0YWtlIGFuIG9wdGlvbmFsIGV2ZW50IGFyZ3VtZW50XG4vLyBhbmQgc2hvdWxkIG5vdCByZXR1cm4gYSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4vLyBBbiBhcnJheSBvZiBhbGwgY3VycmVudGx5IHJlZ2lzdGVyZWQgZXZlbnQgaGFuZGxlcnMgZm9yIGEgdHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbi8vIEEgbWFwIG9mIGV2ZW50IHR5cGVzIGFuZCB0aGVpciBjb3JyZXNwb25kaW5nIGV2ZW50IGhhbmRsZXJzLlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBcblxuLyoqIE1pdHQ6IFRpbnkgKH4yMDBiKSBmdW5jdGlvbmFsIGV2ZW50IGVtaXR0ZXIgLyBwdWJzdWIuXG4gKiAgQG5hbWUgbWl0dFxuICogIEByZXR1cm5zIHtNaXR0fVxuICovXG5mdW5jdGlvbiBtaXR0KGFsbCAgICAgICAgICAgICAgICAgKSB7XG5cdGFsbCA9IGFsbCB8fCBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG5cdHJldHVybiB7XG5cdFx0LyoqXG5cdFx0ICogUmVnaXN0ZXIgYW4gZXZlbnQgaGFuZGxlciBmb3IgdGhlIGdpdmVuIHR5cGUuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0gIHtTdHJpbmd9IHR5cGVcdFR5cGUgb2YgZXZlbnQgdG8gbGlzdGVuIGZvciwgb3IgYFwiKlwiYCBmb3IgYWxsIGV2ZW50c1xuXHRcdCAqIEBwYXJhbSAge0Z1bmN0aW9ufSBoYW5kbGVyIEZ1bmN0aW9uIHRvIGNhbGwgaW4gcmVzcG9uc2UgdG8gZ2l2ZW4gZXZlbnRcblx0XHQgKiBAbWVtYmVyT2YgbWl0dFxuXHRcdCAqL1xuXHRcdG9uOiBmdW5jdGlvbiBvbih0eXBlICAgICAgICAsIGhhbmRsZXIgICAgICAgICAgICAgICkge1xuXHRcdFx0KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBSZW1vdmUgYW4gZXZlbnQgaGFuZGxlciBmb3IgdGhlIGdpdmVuIHR5cGUuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0gIHtTdHJpbmd9IHR5cGVcdFR5cGUgb2YgZXZlbnQgdG8gdW5yZWdpc3RlciBgaGFuZGxlcmAgZnJvbSwgb3IgYFwiKlwiYFxuXHRcdCAqIEBwYXJhbSAge0Z1bmN0aW9ufSBoYW5kbGVyIEhhbmRsZXIgZnVuY3Rpb24gdG8gcmVtb3ZlXG5cdFx0ICogQG1lbWJlck9mIG1pdHRcblx0XHQgKi9cblx0XHRvZmY6IGZ1bmN0aW9uIG9mZih0eXBlICAgICAgICAsIGhhbmRsZXIgICAgICAgICAgICAgICkge1xuXHRcdFx0aWYgKGFsbFt0eXBlXSkge1xuXHRcdFx0XHRhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogSW52b2tlIGFsbCBoYW5kbGVycyBmb3IgdGhlIGdpdmVuIHR5cGUuXG5cdFx0ICogSWYgcHJlc2VudCwgYFwiKlwiYCBoYW5kbGVycyBhcmUgaW52b2tlZCBhZnRlciB0eXBlLW1hdGNoZWQgaGFuZGxlcnMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSAgVGhlIGV2ZW50IHR5cGUgdG8gaW52b2tlXG5cdFx0ICogQHBhcmFtIHtBbnl9IFtldnRdICBBbnkgdmFsdWUgKG9iamVjdCBpcyByZWNvbW1lbmRlZCBhbmQgcG93ZXJmdWwpLCBwYXNzZWQgdG8gZWFjaCBoYW5kbGVyXG5cdFx0ICogQG1lbWJlcm9mIG1pdHRcblx0XHQgKi9cblx0XHRlbWl0OiBmdW5jdGlvbiBlbWl0KHR5cGUgICAgICAgICwgZXZ0ICAgICApIHtcblx0XHRcdChhbGxbdHlwZV0gfHwgW10pLm1hcChmdW5jdGlvbiAoaGFuZGxlcikgeyBoYW5kbGVyKGV2dCk7IH0pO1xuXHRcdFx0KGFsbFsnKiddIHx8IFtdKS5tYXAoZnVuY3Rpb24gKGhhbmRsZXIpIHsgaGFuZGxlcih0eXBlLCBldnQpOyB9KTtcblx0XHR9XG5cdH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1pdHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1taXR0LmVzLmpzLm1hcFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL21pdHQvZGlzdC9taXR0LmVzLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvaW5kZXguc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiaW1wb3J0IGNvbmZpZyBmcm9tICdjb25maWcnXG5pbXBvcnQgJy4vc3R5bGUuc2NzcydcbmltcG9ydCB7IHRhYlN0b3JlIH0gZnJvbSAnIy9zdG9yZXMnXG5pbXBvcnQgaGlzdG9yeSBmcm9tICcjL2hpc3RvcnknXG5pbXBvcnQgeyBoU2Nyb2xsLCBpc1Bvc3RQYWdlIH0gZnJvbSAnIy91dGlscydcblxuJChmdW5jdGlvbigpIHtcbiAgaWYgKCFpc1Bvc3RQYWdlKCkpIHJldHVyblxuXG4gIGxldCAkcG9zdFRhYnMgPSAkKCcjSi1wb3N0LXRhYicpXG4gIGNvbnN0ICRzY3JvbGxXcmFwID0gJCgnLkotcG9zdC10YWItc2Nyb2xsZXItd3JhcCcpXG4gIGNvbnN0IG5kU2Nyb2xsV3JhcCA9ICRzY3JvbGxXcmFwLmdldCgwKVxuICBjb25zdCAkaG9tZSA9ICQoJy5KLWhvbWUtZW50cnknKVxuICBjb25zdCBob21lV2lkdGggPSAkaG9tZS5vdXRlcldpZHRoKClcblxuICBlbWl0dGVyLm9uKCdhZGQtcG9zdC10YWInLCBwb3N0ID0+IHtcbiAgICBjb25zdCB0YWJzID0gdGFiU3RvcmUuZ2V0VGFicygpXG4gICAgaWYgKCF0YWJzLmZpbHRlcih0YWIgPT4gdGFiLmlkID09PSBwb3N0LmlkKS5sZW5ndGgpIHtcbiAgICAgIHRhYnMucHVzaCh7IC4uLnBvc3QgfSlcblxuICAgICAgdGFiU3RvcmUuc2V0VGFicyh0YWJzKVxuICAgIH1cblxuICAgIGVtaXR0ZXIuZW1pdCgndGFiLXJlZnJlc2gnLCB7IC4uLnBvc3QgfSlcbiAgfSlcblxuICBlbWl0dGVyLm9uKCd0YWItcmVmcmVzaCcsIChhY3RpdmUgPSB7fSkgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZUlkID0gYWN0aXZlLmlkXG4gICAgY29uc3QgdGFicyA9IHRhYlN0b3JlLmdldFRhYnMoKVxuICAgIGNvbnN0IGN1cnJlbnRUYWIgPSB0YWJTdG9yZS5jdXJyZW50VGFiXG5cbiAgICBjb25zdCAkYWN0aXZlID0gJCgnI0otcG9zdC10YWInKVxuICAgICAgLmh0bWwoXG4gICAgICAgIHRhYnNcbiAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgdGFiID0+XG4gICAgICAgICAgICAgIGA8ZGl2IHRpdGxlPVwiJHt0YWIudGl0bGV9XCIgY2xhc3M9XCJKLXRhYi1pdGVtIGxpZ2h0IGhvdmVyLW9wYWNpdHkxIGZsZXgtaXRlbTAgc2luZ2xlLWxpbmUgaXRlbSAke2FjdGl2ZUlkID09PSB0YWIuaWQgPyAnYWN0aXZlJyA6ICcnfVwiIGRhdGEtaWQ9XCIke1xuICAgICAgICAgICAgICAgIHRhYi5pZFxuICAgICAgICAgICAgICB9XCI+JHt0YWIudGl0bGV9PGkgY2xhc3M9XCJjbG9zZSBKLXBvc3QtdGFiLWNsb3NlIGxpZ2h0ZXIgaG92ZXItb3BhY2l0eTFcIiBkYXRhLXNsdWc9XCIke3RhYi5zbHVnfVwiPjwvaT48L2Rpdj5gXG4gICAgICAgICAgKVxuICAgICAgICAgIC5qb2luKCcnKVxuICAgICAgKVxuICAgICAgLmZpbmQoJy5hY3RpdmUnKVxuXG4gICAgLy8gbm90IHJlZmV0Y2ggY3VycmVudCBwb3N0XG4gICAgaWYgKCFjdXJyZW50VGFiIHx8IGN1cnJlbnRUYWIuaWQgIT09IGFjdGl2ZUlkKSB7XG4gICAgICBoaXN0b3J5LnB1c2goYWN0aXZlLnVybCwgeyAuLi5hY3RpdmUgfSlcbiAgICAgIHRhYlN0b3JlLnNldEN1cnJlbnRUYWIoeyAuLi5hY3RpdmUgfSlcbiAgICB9XG5cbiAgICBzY3JvbGwydmlldygkYWN0aXZlKVxuICB9KVxuXG4gICRwb3N0VGFic1xuICAgIC5vbignY2xpY2snLCAnLkotcG9zdC10YWItY2xvc2UnLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICB0YWJTdG9yZS5kZWxldGVUYWJJdGVtKFxuICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgLnBhcmVudCgnLkotdGFiLWl0ZW0nKVxuICAgICAgICAgIC5kYXRhKCdpZCcpXG4gICAgICApXG4gICAgfSlcbiAgICAub24oJ2NsaWNrJywgJy5KLXRhYi1pdGVtJywgZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCAkdGhpcyA9ICQodGhpcylcbiAgICAgIGlmICgkdGhpcy5pcygnLmFjdGl2ZScpKSByZXR1cm5cblxuICAgICAgY29uc3QgaWQgPSAkdGhpcy5kYXRhKCdpZCcpXG4gICAgICBjb25zdCBjdXJyZW50VGFiID0gdGFiU3RvcmUuZ2V0VGFicygpLmZpbHRlcih0YWIgPT4gdGFiLmlkID09PSBpZClbMF0gfHwge31cblxuICAgICAgJHRoaXNcbiAgICAgICAgLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgICAgICAuc2libGluZ3MoKVxuICAgICAgICAucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICB0YWJTdG9yZS5zZXRDdXJyZW50VGFiKGN1cnJlbnRUYWIpXG4gICAgICBoaXN0b3J5LnB1c2goY3VycmVudFRhYi51cmwsIHsgLi4uY3VycmVudFRhYiB9KVxuXG4gICAgICBzY3JvbGwydmlldygkdGhpcylcbiAgICB9KVxuXG4gIC8qKlxuICAgKiBzY3JvbGwgc2VsZWN0ZWQgdGFiIGl0ZW0gaW50byB2aWV3IGlmIGl0IGlzIG91dCBvZiB2aWV3XG4gICAqL1xuICBmdW5jdGlvbiBzY3JvbGwydmlldygkYWN0aXZlKSB7XG4gICAgLy8gd3JhcCBlbGVtZW50XG4gICAgY29uc3Qgd3JhcFdpZHRoID0gJHNjcm9sbFdyYXAud2lkdGgoKVxuICAgIGNvbnN0IHdyYXBTY3JvbGxMZWZ0ID0gJHNjcm9sbFdyYXAuc2Nyb2xsTGVmdCgpXG4gICAgY29uc3Qgd3JhcFJpZ2h0ID0gd3JhcFdpZHRoICsgd3JhcFNjcm9sbExlZnRcbiAgICBjb25zdCB0aHJlc2hvbGQgPSAxMFxuXG4gICAgLy8gYWN0aXZlIGVsZW1lbnRcbiAgICBjb25zdCBuZEFjdGl2ZSA9ICRhY3RpdmUuZ2V0KDApXG4gICAgY29uc3QgYWN0aXZlV2lkdGggPSAkYWN0aXZlLm91dGVyV2lkdGgoKVxuICAgIGNvbnN0IGFjdGl2ZUxlZnQgPSBuZEFjdGl2ZS5vZmZzZXRMZWZ0XG4gICAgY29uc3QgYWN0aXZlUmlnaHQgPSBhY3RpdmVMZWZ0ICsgYWN0aXZlV2lkdGhcbiAgICBpZiAoYWN0aXZlUmlnaHQgPiB3cmFwV2lkdGggKyB3cmFwU2Nyb2xsTGVmdCkge1xuICAgICAgbmRTY3JvbGxXcmFwLnNjcm9sbExlZnQgPSBhY3RpdmVSaWdodCAtIHdyYXBXaWR0aCAtIGhvbWVXaWR0aCAtIHRocmVzaG9sZFxuICAgIH1cbiAgICBpZiAoYWN0aXZlTGVmdCA8PSB3cmFwU2Nyb2xsTGVmdCkge1xuICAgICAgbmRTY3JvbGxXcmFwLnNjcm9sbExlZnQgPSBhY3RpdmVMZWZ0IC0gaG9tZVdpZHRoIC0gdGhyZXNob2xkXG4gICAgfVxuICB9XG5cbiAgaFNjcm9sbCgkc2Nyb2xsV3JhcC5nZXQoMCkpXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFydGlhbHMvcG9zdC10YWIvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcInRoZW1lc1wiOltcImFieXNzLWNvbG9yXCIsXCJkYXJrLWRlZmF1bHRcIixcInJlZFwiXX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3RoZW1lcy9yZXN1bHQuanNvblxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhcnRpYWxzL3Bvc3QtdGFiL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCBjb25maWcgZnJvbSAnY29uZmlnJ1xuY29uc3QgbHMgPSBsb2NhbFN0b3JhZ2VcbmNvbnN0IGxzVGhlbWVLZXkgPSBjb25maWcubHNUaGVtZUtleVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIHRoZW1lID0gbHMuZ2V0SXRlbShsc1RoZW1lS2V5KSB8fCBjb25maWcuZGVmYXVsdFRoZW1lXG4gIFxuICBzZXRUaGVtZSAodGhlbWUpIHtcbiAgICB0aGlzLnRoZW1lID0gdGhlbWVcbiAgICBscy5zZXRJdGVtKGxzVGhlbWVLZXksIHRoZW1lKVxuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3Jlcy9UaGVtZVN0b3JlLmpzIiwiaW1wb3J0IGNvbmZpZyBmcm9tICdjb25maWcnXG5cbmNvbnN0IGxzID0gbG9jYWxTdG9yYWdlXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY3VycmVudFRhYiA9IG51bGxcblxuICBnZXRUYWJzKCkge1xuICAgIGxldCB0YWJzID0gbHMuZ2V0SXRlbShjb25maWcubHNQb3N0VGFiS2V5KSB8fCAnJ1xuXG4gICAgcmV0dXJuIHRhYnMgPyB0YWJzLnNwbGl0KCcsJykubWFwKHRhYiA9PiB7XG4gICAgICBjb25zdCBbaWQsIHRpdGxlLCB1cmwsIHNsdWddID0gdGFiLnNwbGl0KCc6JylcblxuICAgICAgcmV0dXJuIHsgaWQsIHRpdGxlLCB1cmwsIHNsdWcgfVxuICAgIH0pIDogW11cbiAgfVxuXG4gIHNldFRhYnModGFicykge1xuICAgIGxzLnNldEl0ZW0oXG4gICAgICBjb25maWcubHNQb3N0VGFiS2V5LFxuICAgICAgdGFicy5sZW5ndGggPyB0YWJzLm1hcChcbiAgICAgICAgdGFiID0+IGAke3RhYi5pZH06JHt0YWIudGl0bGV9OiR7dGFiLnVybH06JHt0YWIuc2x1Z31gXG4gICAgICApLmpvaW4oJywnKSA6ICcnXG4gICAgKVxuICB9XG5cbiAgc2V0Q3VycmVudFRhYih0YWIpIHtcbiAgICB0aGlzLmN1cnJlbnRUYWIgPSB0YWJcbiAgfVxuXG4gIGRlbGV0ZVRhYkl0ZW0oaWQpIHtcbiAgICBsZXQgdGFicyA9IHRoaXMuZ2V0VGFicygpXG4gICAgbGV0IG5leHRUYWIgPSBudWxsXG4gICAgY29uc3QgaXNDdXJyZW50VGFiID0gaWQgPT09IHRoaXMuY3VycmVudFRhYi5pZFxuXG4gICAgY29uc3QgZGVsZXRlZElkeCA9IHRhYnMuZmluZEluZGV4KHRhYiA9PiB0YWIuaWQgPT09IGlkKVxuICAgIHRhYnMgPSB0YWJzLmZpbHRlcigodGFiLCBpZHgpID0+IHRhYi5pZCAhPT0gaWQpXG5cbiAgICB0aGlzLnNldFRhYnModGFicylcblxuICAgIGlmICh0YWJzLmxlbmd0aCkge1xuICAgICAgaWYgKGlzQ3VycmVudFRhYikge1xuICAgICAgICBuZXh0VGFiID0gZGVsZXRlZElkeCA9PT0gMCA/IHRhYnNbMF0gOiB0YWJzW2RlbGV0ZWRJZHggLSAxXVxuICAgICAgfVxuXG4gICAgICBlbWl0dGVyLmVtaXQoJ3RhYi1yZWZyZXNoJywgbmV4dFRhYiB8fCB0aGlzLmN1cnJlbnRUYWIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2F0aW9uLmhyZWYgPSAnLydcbiAgICB9XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmVzL1RhYlN0b3JlLmpzIiwiaW1wb3J0IGNvbmZpZyBmcm9tICdjb25maWcnXG5jb25zdCBscyA9IGxvY2FsU3RvcmFnZVxuY29uc3QgbHNQb3N0c0tleSA9IGNvbmZpZy5sc1Bvc3RzS2V5XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgZmV0Y2hQb3N0KGlkKSB7XG4gICAgY29uc3QgY2FjaGUgPSB0aGlzLmZyb21DYWNoZShpZClcblxuICAgIHJldHVybiBjYWNoZVxuICAgICAgPyAkLkRlZmVycmVkKCkucmVzb2x2ZShjYWNoZSlcbiAgICAgIDogJC5nZXQoZ2hvc3QudXJsLmFwaShgcG9zdHMvJHtpZH1gKSwge1xuICAgICAgICAgIGluY2x1ZGU6ICdhdXRob3InXG4gICAgICAgIH0pXG4gICAgICAgICAgLmZhaWwoZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuZG9uZShkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkYXRhLnBvc3RzWzBdIHx8IHt9XG4gICAgICAgICAgICB0aGlzLmNhY2hlUG9zdChpZCwgcG9zdClcbiAgICAgICAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFJlYWQgcG9zdCBmcm9tIGNhY2hlIGZpcnN0XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpZCAtPiBwb3N0IGlkXG4gICAqICAtIG9ubHkgY2FjaGUgNW1pblxuICAgKi9cbiAgZnJvbUNhY2hlKGlkKSB7XG4gICAgbGV0IGxzUG9zdHMgPSBscy5nZXRJdGVtKGxzUG9zdHNLZXkpXG4gICAgbHNQb3N0cyA9IGxzUG9zdHMgPyBKU09OLnBhcnNlKGxzUG9zdHMpIDoge31cblxuICAgIGNvbnN0IHBvc3QgPSBsc1Bvc3RzW2lkXVxuICAgIGNvbnN0IHVzZWFibGUgPSBwb3N0ICYmICtuZXcgRGF0ZSgpIC0gcG9zdC50aW1lc3RhbXAgPD0gNSAqIDYwICogMTAwMFxuXG4gICAgaWYgKHVzZWFibGUpIHtcbiAgICAgIGNvbnNvbGUuaW5mbygnW1Bvc3QgcmVhZGVkIGZyb20gY2FjaGVdOicsIHBvc3QudGl0bGUpXG4gICAgICBjb25zdCBhdXRob3IgPSBKU09OLnBhcnNlKHBvc3QuYXV0aG9yKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcG9zdHM6IFt7IC4uLnBvc3QsIGF1dGhvciwgZnJvbUNhY2hlOiAxIH1dXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGRlbGV0ZVBvc3RGcm9tQ2FjaGUoaWQpIHtcbiAgICBsZXQgbHNQb3N0cyA9IGxzLmdldEl0ZW0obHNQb3N0c0tleSlcbiAgICBsc1Bvc3RzID0gbHNQb3N0cyA/IEpTT04ucGFyc2UobHNQb3N0cykgOiB7fVxuICAgIGNvbnNvbGUubG9nKCdbZGVsZXRlZCBwb3N0IHN1Y2Nlc3NdOicsIGxzUG9zdHNbaWRdLnRpdGxlKVxuXG4gICAgZGVsZXRlIGxzUG9zdHNbaWRdXG5cbiAgICBscy5zZXRJdGVtKGxzUG9zdHNLZXksIEpTT04uc3RyaW5naWZ5KGxzUG9zdHMpKVxuICB9XG5cbiAgY2FjaGVQb3N0KGlkLCBwb3N0KSB7XG4gICAgaWYgKHBvc3QuZnJvbUNhY2hlKSByZXR1cm5cblxuICAgIGNvbnN0IHsgY3JlYXRlZF9hdCwgdGl0bGUsIGh0bWwsIGF1dGhvciwgZmVhdHVyZV9pbWFnZSB9ID0gcG9zdFxuICAgIGxldCBsc1Bvc3RzID0gbHMuZ2V0SXRlbShsc1Bvc3RzS2V5KVxuICAgIGxzUG9zdHMgPSBsc1Bvc3RzID8gSlNPTi5wYXJzZShsc1Bvc3RzKSA6IHt9XG5cbiAgICBsc1Bvc3RzW2lkXSA9IHtcbiAgICAgIGNyZWF0ZWRfYXQsXG4gICAgICB0aXRsZSxcbiAgICAgIGh0bWwsXG4gICAgICBhdXRob3I6IEpTT04uc3RyaW5naWZ5KGF1dGhvciksXG4gICAgICBmZWF0dXJlX2ltYWdlLFxuICAgICAgdGltZXN0YW1wOiArbmV3IERhdGUoKVxuICAgIH1cblxuICAgIC8vIGNhY2hlIHVwIHRvIDUgcG9zdHNcbiAgICAvLyBkZWxldGUgdGhlIG9sZGVzdCBvbmUgaWYgbW9yZSB0aGFuIDVcbiAgICBsZXQgaWRzID0gT2JqZWN0LmtleXMobHNQb3N0cylcbiAgICBpZiAoaWRzLmxlbmd0aCA+IDUpIHtcbiAgICAgIGNvbnN0IHNob3VsZERlbGV0ZUlkID0gaWRzXG4gICAgICAgIC5tYXAoaWQgPT4gKHtcbiAgICAgICAgICB0aW1lc3RhbXA6IGxzUG9zdHNbaWRdLnRpbWVzdGFtcCxcbiAgICAgICAgICBpZFxuICAgICAgICB9KSlcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEudGltZXN0YW1wIC0gYi50aW1lc3RhbXApXG4gICAgICAgIC5tYXAoaXRlbSA9PiBpdGVtLmlkKVxuICAgICAgICAuc2hpZnQoKVxuXG4gICAgICBkZWxldGUgbHNQb3N0c1tzaG91bGREZWxldGVJZF1cbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhpZHMubGVuZ3RoKVxuICAgIGxzLnNldEl0ZW0obHNQb3N0c0tleSwgSlNPTi5zdHJpbmdpZnkobHNQb3N0cykpXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZXMvUG9zdFN0b3JlLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX0xvY2F0aW9uVXRpbHMgPSByZXF1aXJlKCcuL0xvY2F0aW9uVXRpbHMnKTtcblxudmFyIF9QYXRoVXRpbHMgPSByZXF1aXJlKCcuL1BhdGhVdGlscycpO1xuXG52YXIgX2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyID0gcmVxdWlyZSgnLi9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlcicpO1xuXG52YXIgX2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyKTtcblxudmFyIF9ET01VdGlscyA9IHJlcXVpcmUoJy4vRE9NVXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFBvcFN0YXRlRXZlbnQgPSAncG9wc3RhdGUnO1xudmFyIEhhc2hDaGFuZ2VFdmVudCA9ICdoYXNoY2hhbmdlJztcblxudmFyIGdldEhpc3RvcnlTdGF0ZSA9IGZ1bmN0aW9uIGdldEhpc3RvcnlTdGF0ZSgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gd2luZG93Lmhpc3Rvcnkuc3RhdGUgfHwge307XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBJRSAxMSBzb21ldGltZXMgdGhyb3dzIHdoZW4gYWNjZXNzaW5nIHdpbmRvdy5oaXN0b3J5LnN0YXRlXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9SZWFjdFRyYWluaW5nL2hpc3RvcnkvcHVsbC8yODlcbiAgICByZXR1cm4ge307XG4gIH1cbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhpc3Rvcnkgb2JqZWN0IHRoYXQgdXNlcyB0aGUgSFRNTDUgaGlzdG9yeSBBUEkgaW5jbHVkaW5nXG4gKiBwdXNoU3RhdGUsIHJlcGxhY2VTdGF0ZSwgYW5kIHRoZSBwb3BzdGF0ZSBldmVudC5cbiAqL1xudmFyIGNyZWF0ZUJyb3dzZXJIaXN0b3J5ID0gZnVuY3Rpb24gY3JlYXRlQnJvd3Nlckhpc3RvcnkoKSB7XG4gIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKF9ET01VdGlscy5jYW5Vc2VET00sICdCcm93c2VyIGhpc3RvcnkgbmVlZHMgYSBET00nKTtcblxuICB2YXIgZ2xvYmFsSGlzdG9yeSA9IHdpbmRvdy5oaXN0b3J5O1xuICB2YXIgY2FuVXNlSGlzdG9yeSA9ICgwLCBfRE9NVXRpbHMuc3VwcG9ydHNIaXN0b3J5KSgpO1xuICB2YXIgbmVlZHNIYXNoQ2hhbmdlTGlzdGVuZXIgPSAhKDAsIF9ET01VdGlscy5zdXBwb3J0c1BvcFN0YXRlT25IYXNoQ2hhbmdlKSgpO1xuXG4gIHZhciBfcHJvcHMkZm9yY2VSZWZyZXNoID0gcHJvcHMuZm9yY2VSZWZyZXNoLFxuICAgICAgZm9yY2VSZWZyZXNoID0gX3Byb3BzJGZvcmNlUmVmcmVzaCA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfcHJvcHMkZm9yY2VSZWZyZXNoLFxuICAgICAgX3Byb3BzJGdldFVzZXJDb25maXJtID0gcHJvcHMuZ2V0VXNlckNvbmZpcm1hdGlvbixcbiAgICAgIGdldFVzZXJDb25maXJtYXRpb24gPSBfcHJvcHMkZ2V0VXNlckNvbmZpcm0gPT09IHVuZGVmaW5lZCA/IF9ET01VdGlscy5nZXRDb25maXJtYXRpb24gOiBfcHJvcHMkZ2V0VXNlckNvbmZpcm0sXG4gICAgICBfcHJvcHMka2V5TGVuZ3RoID0gcHJvcHMua2V5TGVuZ3RoLFxuICAgICAga2V5TGVuZ3RoID0gX3Byb3BzJGtleUxlbmd0aCA9PT0gdW5kZWZpbmVkID8gNiA6IF9wcm9wcyRrZXlMZW5ndGg7XG5cbiAgdmFyIGJhc2VuYW1lID0gcHJvcHMuYmFzZW5hbWUgPyAoMCwgX1BhdGhVdGlscy5zdHJpcFRyYWlsaW5nU2xhc2gpKCgwLCBfUGF0aFV0aWxzLmFkZExlYWRpbmdTbGFzaCkocHJvcHMuYmFzZW5hbWUpKSA6ICcnO1xuXG4gIHZhciBnZXRET01Mb2NhdGlvbiA9IGZ1bmN0aW9uIGdldERPTUxvY2F0aW9uKGhpc3RvcnlTdGF0ZSkge1xuICAgIHZhciBfcmVmID0gaGlzdG9yeVN0YXRlIHx8IHt9LFxuICAgICAgICBrZXkgPSBfcmVmLmtleSxcbiAgICAgICAgc3RhdGUgPSBfcmVmLnN0YXRlO1xuXG4gICAgdmFyIF93aW5kb3ckbG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24sXG4gICAgICAgIHBhdGhuYW1lID0gX3dpbmRvdyRsb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgICAgc2VhcmNoID0gX3dpbmRvdyRsb2NhdGlvbi5zZWFyY2gsXG4gICAgICAgIGhhc2ggPSBfd2luZG93JGxvY2F0aW9uLmhhc2g7XG5cblxuICAgIHZhciBwYXRoID0gcGF0aG5hbWUgKyBzZWFyY2ggKyBoYXNoO1xuXG4gICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KSghYmFzZW5hbWUgfHwgKDAsIF9QYXRoVXRpbHMuaGFzQmFzZW5hbWUpKHBhdGgsIGJhc2VuYW1lKSwgJ1lvdSBhcmUgYXR0ZW1wdGluZyB0byB1c2UgYSBiYXNlbmFtZSBvbiBhIHBhZ2Ugd2hvc2UgVVJMIHBhdGggZG9lcyBub3QgYmVnaW4gJyArICd3aXRoIHRoZSBiYXNlbmFtZS4gRXhwZWN0ZWQgcGF0aCBcIicgKyBwYXRoICsgJ1wiIHRvIGJlZ2luIHdpdGggXCInICsgYmFzZW5hbWUgKyAnXCIuJyk7XG5cbiAgICBpZiAoYmFzZW5hbWUpIHBhdGggPSAoMCwgX1BhdGhVdGlscy5zdHJpcEJhc2VuYW1lKShwYXRoLCBiYXNlbmFtZSk7XG5cbiAgICByZXR1cm4gKDAsIF9Mb2NhdGlvblV0aWxzLmNyZWF0ZUxvY2F0aW9uKShwYXRoLCBzdGF0ZSwga2V5KTtcbiAgfTtcblxuICB2YXIgY3JlYXRlS2V5ID0gZnVuY3Rpb24gY3JlYXRlS2V5KCkge1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwga2V5TGVuZ3RoKTtcbiAgfTtcblxuICB2YXIgdHJhbnNpdGlvbk1hbmFnZXIgPSAoMCwgX2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyMi5kZWZhdWx0KSgpO1xuXG4gIHZhciBzZXRTdGF0ZSA9IGZ1bmN0aW9uIHNldFN0YXRlKG5leHRTdGF0ZSkge1xuICAgIF9leHRlbmRzKGhpc3RvcnksIG5leHRTdGF0ZSk7XG5cbiAgICBoaXN0b3J5Lmxlbmd0aCA9IGdsb2JhbEhpc3RvcnkubGVuZ3RoO1xuXG4gICAgdHJhbnNpdGlvbk1hbmFnZXIubm90aWZ5TGlzdGVuZXJzKGhpc3RvcnkubG9jYXRpb24sIGhpc3RvcnkuYWN0aW9uKTtcbiAgfTtcblxuICB2YXIgaGFuZGxlUG9wU3RhdGUgPSBmdW5jdGlvbiBoYW5kbGVQb3BTdGF0ZShldmVudCkge1xuICAgIC8vIElnbm9yZSBleHRyYW5lb3VzIHBvcHN0YXRlIGV2ZW50cyBpbiBXZWJLaXQuXG4gICAgaWYgKCgwLCBfRE9NVXRpbHMuaXNFeHRyYW5lb3VzUG9wc3RhdGVFdmVudCkoZXZlbnQpKSByZXR1cm47XG5cbiAgICBoYW5kbGVQb3AoZ2V0RE9NTG9jYXRpb24oZXZlbnQuc3RhdGUpKTtcbiAgfTtcblxuICB2YXIgaGFuZGxlSGFzaENoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUhhc2hDaGFuZ2UoKSB7XG4gICAgaGFuZGxlUG9wKGdldERPTUxvY2F0aW9uKGdldEhpc3RvcnlTdGF0ZSgpKSk7XG4gIH07XG5cbiAgdmFyIGZvcmNlTmV4dFBvcCA9IGZhbHNlO1xuXG4gIHZhciBoYW5kbGVQb3AgPSBmdW5jdGlvbiBoYW5kbGVQb3AobG9jYXRpb24pIHtcbiAgICBpZiAoZm9yY2VOZXh0UG9wKSB7XG4gICAgICBmb3JjZU5leHRQb3AgPSBmYWxzZTtcbiAgICAgIHNldFN0YXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhY3Rpb24gPSAnUE9QJztcblxuICAgICAgdHJhbnNpdGlvbk1hbmFnZXIuY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgYWN0aW9uLCBnZXRVc2VyQ29uZmlybWF0aW9uLCBmdW5jdGlvbiAob2spIHtcbiAgICAgICAgaWYgKG9rKSB7XG4gICAgICAgICAgc2V0U3RhdGUoeyBhY3Rpb246IGFjdGlvbiwgbG9jYXRpb246IGxvY2F0aW9uIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldmVydFBvcChsb2NhdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICB2YXIgcmV2ZXJ0UG9wID0gZnVuY3Rpb24gcmV2ZXJ0UG9wKGZyb21Mb2NhdGlvbikge1xuICAgIHZhciB0b0xvY2F0aW9uID0gaGlzdG9yeS5sb2NhdGlvbjtcblxuICAgIC8vIFRPRE86IFdlIGNvdWxkIHByb2JhYmx5IG1ha2UgdGhpcyBtb3JlIHJlbGlhYmxlIGJ5XG4gICAgLy8ga2VlcGluZyBhIGxpc3Qgb2Yga2V5cyB3ZSd2ZSBzZWVuIGluIHNlc3Npb25TdG9yYWdlLlxuICAgIC8vIEluc3RlYWQsIHdlIGp1c3QgZGVmYXVsdCB0byAwIGZvciBrZXlzIHdlIGRvbid0IGtub3cuXG5cbiAgICB2YXIgdG9JbmRleCA9IGFsbEtleXMuaW5kZXhPZih0b0xvY2F0aW9uLmtleSk7XG5cbiAgICBpZiAodG9JbmRleCA9PT0gLTEpIHRvSW5kZXggPSAwO1xuXG4gICAgdmFyIGZyb21JbmRleCA9IGFsbEtleXMuaW5kZXhPZihmcm9tTG9jYXRpb24ua2V5KTtcblxuICAgIGlmIChmcm9tSW5kZXggPT09IC0xKSBmcm9tSW5kZXggPSAwO1xuXG4gICAgdmFyIGRlbHRhID0gdG9JbmRleCAtIGZyb21JbmRleDtcblxuICAgIGlmIChkZWx0YSkge1xuICAgICAgZm9yY2VOZXh0UG9wID0gdHJ1ZTtcbiAgICAgIGdvKGRlbHRhKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGluaXRpYWxMb2NhdGlvbiA9IGdldERPTUxvY2F0aW9uKGdldEhpc3RvcnlTdGF0ZSgpKTtcbiAgdmFyIGFsbEtleXMgPSBbaW5pdGlhbExvY2F0aW9uLmtleV07XG5cbiAgLy8gUHVibGljIGludGVyZmFjZVxuXG4gIHZhciBjcmVhdGVIcmVmID0gZnVuY3Rpb24gY3JlYXRlSHJlZihsb2NhdGlvbikge1xuICAgIHJldHVybiBiYXNlbmFtZSArICgwLCBfUGF0aFV0aWxzLmNyZWF0ZVBhdGgpKGxvY2F0aW9uKTtcbiAgfTtcblxuICB2YXIgcHVzaCA9IGZ1bmN0aW9uIHB1c2gocGF0aCwgc3RhdGUpIHtcbiAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKCEoKHR5cGVvZiBwYXRoID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihwYXRoKSkgPT09ICdvYmplY3QnICYmIHBhdGguc3RhdGUgIT09IHVuZGVmaW5lZCAmJiBzdGF0ZSAhPT0gdW5kZWZpbmVkKSwgJ1lvdSBzaG91bGQgYXZvaWQgcHJvdmlkaW5nIGEgMm5kIHN0YXRlIGFyZ3VtZW50IHRvIHB1c2ggd2hlbiB0aGUgMXN0ICcgKyAnYXJndW1lbnQgaXMgYSBsb2NhdGlvbi1saWtlIG9iamVjdCB0aGF0IGFscmVhZHkgaGFzIHN0YXRlOyBpdCBpcyBpZ25vcmVkJyk7XG5cbiAgICB2YXIgYWN0aW9uID0gJ1BVU0gnO1xuICAgIHZhciBsb2NhdGlvbiA9ICgwLCBfTG9jYXRpb25VdGlscy5jcmVhdGVMb2NhdGlvbikocGF0aCwgc3RhdGUsIGNyZWF0ZUtleSgpLCBoaXN0b3J5LmxvY2F0aW9uKTtcblxuICAgIHRyYW5zaXRpb25NYW5hZ2VyLmNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICBpZiAoIW9rKSByZXR1cm47XG5cbiAgICAgIHZhciBocmVmID0gY3JlYXRlSHJlZihsb2NhdGlvbik7XG4gICAgICB2YXIga2V5ID0gbG9jYXRpb24ua2V5LFxuICAgICAgICAgIHN0YXRlID0gbG9jYXRpb24uc3RhdGU7XG5cblxuICAgICAgaWYgKGNhblVzZUhpc3RvcnkpIHtcbiAgICAgICAgZ2xvYmFsSGlzdG9yeS5wdXNoU3RhdGUoeyBrZXk6IGtleSwgc3RhdGU6IHN0YXRlIH0sIG51bGwsIGhyZWYpO1xuXG4gICAgICAgIGlmIChmb3JjZVJlZnJlc2gpIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGhyZWY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHByZXZJbmRleCA9IGFsbEtleXMuaW5kZXhPZihoaXN0b3J5LmxvY2F0aW9uLmtleSk7XG4gICAgICAgICAgdmFyIG5leHRLZXlzID0gYWxsS2V5cy5zbGljZSgwLCBwcmV2SW5kZXggPT09IC0xID8gMCA6IHByZXZJbmRleCArIDEpO1xuXG4gICAgICAgICAgbmV4dEtleXMucHVzaChsb2NhdGlvbi5rZXkpO1xuICAgICAgICAgIGFsbEtleXMgPSBuZXh0S2V5cztcblxuICAgICAgICAgIHNldFN0YXRlKHsgYWN0aW9uOiBhY3Rpb24sIGxvY2F0aW9uOiBsb2NhdGlvbiB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KShzdGF0ZSA9PT0gdW5kZWZpbmVkLCAnQnJvd3NlciBoaXN0b3J5IGNhbm5vdCBwdXNoIHN0YXRlIGluIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgSFRNTDUgaGlzdG9yeScpO1xuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gaHJlZjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICB2YXIgcmVwbGFjZSA9IGZ1bmN0aW9uIHJlcGxhY2UocGF0aCwgc3RhdGUpIHtcbiAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKCEoKHR5cGVvZiBwYXRoID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihwYXRoKSkgPT09ICdvYmplY3QnICYmIHBhdGguc3RhdGUgIT09IHVuZGVmaW5lZCAmJiBzdGF0ZSAhPT0gdW5kZWZpbmVkKSwgJ1lvdSBzaG91bGQgYXZvaWQgcHJvdmlkaW5nIGEgMm5kIHN0YXRlIGFyZ3VtZW50IHRvIHJlcGxhY2Ugd2hlbiB0aGUgMXN0ICcgKyAnYXJndW1lbnQgaXMgYSBsb2NhdGlvbi1saWtlIG9iamVjdCB0aGF0IGFscmVhZHkgaGFzIHN0YXRlOyBpdCBpcyBpZ25vcmVkJyk7XG5cbiAgICB2YXIgYWN0aW9uID0gJ1JFUExBQ0UnO1xuICAgIHZhciBsb2NhdGlvbiA9ICgwLCBfTG9jYXRpb25VdGlscy5jcmVhdGVMb2NhdGlvbikocGF0aCwgc3RhdGUsIGNyZWF0ZUtleSgpLCBoaXN0b3J5LmxvY2F0aW9uKTtcblxuICAgIHRyYW5zaXRpb25NYW5hZ2VyLmNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICBpZiAoIW9rKSByZXR1cm47XG5cbiAgICAgIHZhciBocmVmID0gY3JlYXRlSHJlZihsb2NhdGlvbik7XG4gICAgICB2YXIga2V5ID0gbG9jYXRpb24ua2V5LFxuICAgICAgICAgIHN0YXRlID0gbG9jYXRpb24uc3RhdGU7XG5cblxuICAgICAgaWYgKGNhblVzZUhpc3RvcnkpIHtcbiAgICAgICAgZ2xvYmFsSGlzdG9yeS5yZXBsYWNlU3RhdGUoeyBrZXk6IGtleSwgc3RhdGU6IHN0YXRlIH0sIG51bGwsIGhyZWYpO1xuXG4gICAgICAgIGlmIChmb3JjZVJlZnJlc2gpIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShocmVmKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgcHJldkluZGV4ID0gYWxsS2V5cy5pbmRleE9mKGhpc3RvcnkubG9jYXRpb24ua2V5KTtcblxuICAgICAgICAgIGlmIChwcmV2SW5kZXggIT09IC0xKSBhbGxLZXlzW3ByZXZJbmRleF0gPSBsb2NhdGlvbi5rZXk7XG5cbiAgICAgICAgICBzZXRTdGF0ZSh7IGFjdGlvbjogYWN0aW9uLCBsb2NhdGlvbjogbG9jYXRpb24gfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICgwLCBfd2FybmluZzIuZGVmYXVsdCkoc3RhdGUgPT09IHVuZGVmaW5lZCwgJ0Jyb3dzZXIgaGlzdG9yeSBjYW5ub3QgcmVwbGFjZSBzdGF0ZSBpbiBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IEhUTUw1IGhpc3RvcnknKTtcblxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShocmVmKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICB2YXIgZ28gPSBmdW5jdGlvbiBnbyhuKSB7XG4gICAgZ2xvYmFsSGlzdG9yeS5nbyhuKTtcbiAgfTtcblxuICB2YXIgZ29CYWNrID0gZnVuY3Rpb24gZ29CYWNrKCkge1xuICAgIHJldHVybiBnbygtMSk7XG4gIH07XG5cbiAgdmFyIGdvRm9yd2FyZCA9IGZ1bmN0aW9uIGdvRm9yd2FyZCgpIHtcbiAgICByZXR1cm4gZ28oMSk7XG4gIH07XG5cbiAgdmFyIGxpc3RlbmVyQ291bnQgPSAwO1xuXG4gIHZhciBjaGVja0RPTUxpc3RlbmVycyA9IGZ1bmN0aW9uIGNoZWNrRE9NTGlzdGVuZXJzKGRlbHRhKSB7XG4gICAgbGlzdGVuZXJDb3VudCArPSBkZWx0YTtcblxuICAgIGlmIChsaXN0ZW5lckNvdW50ID09PSAxKSB7XG4gICAgICAoMCwgX0RPTVV0aWxzLmFkZEV2ZW50TGlzdGVuZXIpKHdpbmRvdywgUG9wU3RhdGVFdmVudCwgaGFuZGxlUG9wU3RhdGUpO1xuXG4gICAgICBpZiAobmVlZHNIYXNoQ2hhbmdlTGlzdGVuZXIpICgwLCBfRE9NVXRpbHMuYWRkRXZlbnRMaXN0ZW5lcikod2luZG93LCBIYXNoQ2hhbmdlRXZlbnQsIGhhbmRsZUhhc2hDaGFuZ2UpO1xuICAgIH0gZWxzZSBpZiAobGlzdGVuZXJDb3VudCA9PT0gMCkge1xuICAgICAgKDAsIF9ET01VdGlscy5yZW1vdmVFdmVudExpc3RlbmVyKSh3aW5kb3csIFBvcFN0YXRlRXZlbnQsIGhhbmRsZVBvcFN0YXRlKTtcblxuICAgICAgaWYgKG5lZWRzSGFzaENoYW5nZUxpc3RlbmVyKSAoMCwgX0RPTVV0aWxzLnJlbW92ZUV2ZW50TGlzdGVuZXIpKHdpbmRvdywgSGFzaENoYW5nZUV2ZW50LCBoYW5kbGVIYXNoQ2hhbmdlKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGlzQmxvY2tlZCA9IGZhbHNlO1xuXG4gIHZhciBibG9jayA9IGZ1bmN0aW9uIGJsb2NrKCkge1xuICAgIHZhciBwcm9tcHQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGZhbHNlO1xuXG4gICAgdmFyIHVuYmxvY2sgPSB0cmFuc2l0aW9uTWFuYWdlci5zZXRQcm9tcHQocHJvbXB0KTtcblxuICAgIGlmICghaXNCbG9ja2VkKSB7XG4gICAgICBjaGVja0RPTUxpc3RlbmVycygxKTtcbiAgICAgIGlzQmxvY2tlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChpc0Jsb2NrZWQpIHtcbiAgICAgICAgaXNCbG9ja2VkID0gZmFsc2U7XG4gICAgICAgIGNoZWNrRE9NTGlzdGVuZXJzKC0xKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHVuYmxvY2soKTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBsaXN0ZW4gPSBmdW5jdGlvbiBsaXN0ZW4obGlzdGVuZXIpIHtcbiAgICB2YXIgdW5saXN0ZW4gPSB0cmFuc2l0aW9uTWFuYWdlci5hcHBlbmRMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgY2hlY2tET01MaXN0ZW5lcnMoMSk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgY2hlY2tET01MaXN0ZW5lcnMoLTEpO1xuICAgICAgdW5saXN0ZW4oKTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBoaXN0b3J5ID0ge1xuICAgIGxlbmd0aDogZ2xvYmFsSGlzdG9yeS5sZW5ndGgsXG4gICAgYWN0aW9uOiAnUE9QJyxcbiAgICBsb2NhdGlvbjogaW5pdGlhbExvY2F0aW9uLFxuICAgIGNyZWF0ZUhyZWY6IGNyZWF0ZUhyZWYsXG4gICAgcHVzaDogcHVzaCxcbiAgICByZXBsYWNlOiByZXBsYWNlLFxuICAgIGdvOiBnbyxcbiAgICBnb0JhY2s6IGdvQmFjayxcbiAgICBnb0ZvcndhcmQ6IGdvRm9yd2FyZCxcbiAgICBibG9jazogYmxvY2ssXG4gICAgbGlzdGVuOiBsaXN0ZW5cbiAgfTtcblxuICByZXR1cm4gaGlzdG9yeTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZUJyb3dzZXJIaXN0b3J5O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9oaXN0b3J5L2NyZWF0ZUJyb3dzZXJIaXN0b3J5LmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgaW52YXJpYW50ID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICAnTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArXG4gICAgICAgICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLidcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSB7IHJldHVybiBhcmdzW2FyZ0luZGV4KytdOyB9KVxuICAgICAgKTtcbiAgICAgIGVycm9yLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9pbnZhcmlhbnQvYnJvd3Nlci5qcyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMubG9jYXRpb25zQXJlRXF1YWwgPSBleHBvcnRzLmNyZWF0ZUxvY2F0aW9uID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3Jlc29sdmVQYXRobmFtZSA9IHJlcXVpcmUoJ3Jlc29sdmUtcGF0aG5hbWUnKTtcblxudmFyIF9yZXNvbHZlUGF0aG5hbWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVzb2x2ZVBhdGhuYW1lKTtcblxudmFyIF92YWx1ZUVxdWFsID0gcmVxdWlyZSgndmFsdWUtZXF1YWwnKTtcblxudmFyIF92YWx1ZUVxdWFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZhbHVlRXF1YWwpO1xuXG52YXIgX1BhdGhVdGlscyA9IHJlcXVpcmUoJy4vUGF0aFV0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBjcmVhdGVMb2NhdGlvbiA9IGV4cG9ydHMuY3JlYXRlTG9jYXRpb24gPSBmdW5jdGlvbiBjcmVhdGVMb2NhdGlvbihwYXRoLCBzdGF0ZSwga2V5LCBjdXJyZW50TG9jYXRpb24pIHtcbiAgdmFyIGxvY2F0aW9uID0gdm9pZCAwO1xuICBpZiAodHlwZW9mIHBhdGggPT09ICdzdHJpbmcnKSB7XG4gICAgLy8gVHdvLWFyZyBmb3JtOiBwdXNoKHBhdGgsIHN0YXRlKVxuICAgIGxvY2F0aW9uID0gKDAsIF9QYXRoVXRpbHMucGFyc2VQYXRoKShwYXRoKTtcbiAgICBsb2NhdGlvbi5zdGF0ZSA9IHN0YXRlO1xuICB9IGVsc2Uge1xuICAgIC8vIE9uZS1hcmcgZm9ybTogcHVzaChsb2NhdGlvbilcbiAgICBsb2NhdGlvbiA9IF9leHRlbmRzKHt9LCBwYXRoKTtcblxuICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZSA9PT0gdW5kZWZpbmVkKSBsb2NhdGlvbi5wYXRobmFtZSA9ICcnO1xuXG4gICAgaWYgKGxvY2F0aW9uLnNlYXJjaCkge1xuICAgICAgaWYgKGxvY2F0aW9uLnNlYXJjaC5jaGFyQXQoMCkgIT09ICc/JykgbG9jYXRpb24uc2VhcmNoID0gJz8nICsgbG9jYXRpb24uc2VhcmNoO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhdGlvbi5zZWFyY2ggPSAnJztcbiAgICB9XG5cbiAgICBpZiAobG9jYXRpb24uaGFzaCkge1xuICAgICAgaWYgKGxvY2F0aW9uLmhhc2guY2hhckF0KDApICE9PSAnIycpIGxvY2F0aW9uLmhhc2ggPSAnIycgKyBsb2NhdGlvbi5oYXNoO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhdGlvbi5oYXNoID0gJyc7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlICE9PSB1bmRlZmluZWQgJiYgbG9jYXRpb24uc3RhdGUgPT09IHVuZGVmaW5lZCkgbG9jYXRpb24uc3RhdGUgPSBzdGF0ZTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgbG9jYXRpb24ucGF0aG5hbWUgPSBkZWNvZGVVUkkobG9jYXRpb24ucGF0aG5hbWUpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaWYgKGUgaW5zdGFuY2VvZiBVUklFcnJvcikge1xuICAgICAgdGhyb3cgbmV3IFVSSUVycm9yKCdQYXRobmFtZSBcIicgKyBsb2NhdGlvbi5wYXRobmFtZSArICdcIiBjb3VsZCBub3QgYmUgZGVjb2RlZC4gJyArICdUaGlzIGlzIGxpa2VseSBjYXVzZWQgYnkgYW4gaW52YWxpZCBwZXJjZW50LWVuY29kaW5nLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChrZXkpIGxvY2F0aW9uLmtleSA9IGtleTtcblxuICBpZiAoY3VycmVudExvY2F0aW9uKSB7XG4gICAgLy8gUmVzb2x2ZSBpbmNvbXBsZXRlL3JlbGF0aXZlIHBhdGhuYW1lIHJlbGF0aXZlIHRvIGN1cnJlbnQgbG9jYXRpb24uXG4gICAgaWYgKCFsb2NhdGlvbi5wYXRobmFtZSkge1xuICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPSBjdXJyZW50TG9jYXRpb24ucGF0aG5hbWU7XG4gICAgfSBlbHNlIGlmIChsb2NhdGlvbi5wYXRobmFtZS5jaGFyQXQoMCkgIT09ICcvJykge1xuICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPSAoMCwgX3Jlc29sdmVQYXRobmFtZTIuZGVmYXVsdCkobG9jYXRpb24ucGF0aG5hbWUsIGN1cnJlbnRMb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIFdoZW4gdGhlcmUgaXMgbm8gcHJpb3IgbG9jYXRpb24gYW5kIHBhdGhuYW1lIGlzIGVtcHR5LCBzZXQgaXQgdG8gL1xuICAgIGlmICghbG9jYXRpb24ucGF0aG5hbWUpIHtcbiAgICAgIGxvY2F0aW9uLnBhdGhuYW1lID0gJy8nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBsb2NhdGlvbjtcbn07XG5cbnZhciBsb2NhdGlvbnNBcmVFcXVhbCA9IGV4cG9ydHMubG9jYXRpb25zQXJlRXF1YWwgPSBmdW5jdGlvbiBsb2NhdGlvbnNBcmVFcXVhbChhLCBiKSB7XG4gIHJldHVybiBhLnBhdGhuYW1lID09PSBiLnBhdGhuYW1lICYmIGEuc2VhcmNoID09PSBiLnNlYXJjaCAmJiBhLmhhc2ggPT09IGIuaGFzaCAmJiBhLmtleSA9PT0gYi5rZXkgJiYgKDAsIF92YWx1ZUVxdWFsMi5kZWZhdWx0KShhLnN0YXRlLCBiLnN0YXRlKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2hpc3RvcnkvTG9jYXRpb25VdGlscy5qcyIsImZ1bmN0aW9uIGlzQWJzb2x1dGUocGF0aG5hbWUpIHtcbiAgcmV0dXJuIHBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nO1xufVxuXG4vLyBBYm91dCAxLjV4IGZhc3RlciB0aGFuIHRoZSB0d28tYXJnIHZlcnNpb24gb2YgQXJyYXkjc3BsaWNlKClcbmZ1bmN0aW9uIHNwbGljZU9uZShsaXN0LCBpbmRleCkge1xuICBmb3IgKHZhciBpID0gaW5kZXgsIGsgPSBpICsgMSwgbiA9IGxpc3QubGVuZ3RoOyBrIDwgbjsgaSArPSAxLCBrICs9IDEpIHtcbiAgICBsaXN0W2ldID0gbGlzdFtrXTtcbiAgfVxuXG4gIGxpc3QucG9wKCk7XG59XG5cbi8vIFRoaXMgaW1wbGVtZW50YXRpb24gaXMgYmFzZWQgaGVhdmlseSBvbiBub2RlJ3MgdXJsLnBhcnNlXG5mdW5jdGlvbiByZXNvbHZlUGF0aG5hbWUodG8pIHtcbiAgdmFyIGZyb20gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICcnO1xuXG4gIHZhciB0b1BhcnRzID0gdG8gJiYgdG8uc3BsaXQoJy8nKSB8fCBbXTtcbiAgdmFyIGZyb21QYXJ0cyA9IGZyb20gJiYgZnJvbS5zcGxpdCgnLycpIHx8IFtdO1xuXG4gIHZhciBpc1RvQWJzID0gdG8gJiYgaXNBYnNvbHV0ZSh0byk7XG4gIHZhciBpc0Zyb21BYnMgPSBmcm9tICYmIGlzQWJzb2x1dGUoZnJvbSk7XG4gIHZhciBtdXN0RW5kQWJzID0gaXNUb0FicyB8fCBpc0Zyb21BYnM7XG5cbiAgaWYgKHRvICYmIGlzQWJzb2x1dGUodG8pKSB7XG4gICAgLy8gdG8gaXMgYWJzb2x1dGVcbiAgICBmcm9tUGFydHMgPSB0b1BhcnRzO1xuICB9IGVsc2UgaWYgKHRvUGFydHMubGVuZ3RoKSB7XG4gICAgLy8gdG8gaXMgcmVsYXRpdmUsIGRyb3AgdGhlIGZpbGVuYW1lXG4gICAgZnJvbVBhcnRzLnBvcCgpO1xuICAgIGZyb21QYXJ0cyA9IGZyb21QYXJ0cy5jb25jYXQodG9QYXJ0cyk7XG4gIH1cblxuICBpZiAoIWZyb21QYXJ0cy5sZW5ndGgpIHJldHVybiAnLyc7XG5cbiAgdmFyIGhhc1RyYWlsaW5nU2xhc2ggPSB2b2lkIDA7XG4gIGlmIChmcm9tUGFydHMubGVuZ3RoKSB7XG4gICAgdmFyIGxhc3QgPSBmcm9tUGFydHNbZnJvbVBhcnRzLmxlbmd0aCAtIDFdO1xuICAgIGhhc1RyYWlsaW5nU2xhc2ggPSBsYXN0ID09PSAnLicgfHwgbGFzdCA9PT0gJy4uJyB8fCBsYXN0ID09PSAnJztcbiAgfSBlbHNlIHtcbiAgICBoYXNUcmFpbGluZ1NsYXNoID0gZmFsc2U7XG4gIH1cblxuICB2YXIgdXAgPSAwO1xuICBmb3IgKHZhciBpID0gZnJvbVBhcnRzLmxlbmd0aDsgaSA+PSAwOyBpLS0pIHtcbiAgICB2YXIgcGFydCA9IGZyb21QYXJ0c1tpXTtcblxuICAgIGlmIChwYXJ0ID09PSAnLicpIHtcbiAgICAgIHNwbGljZU9uZShmcm9tUGFydHMsIGkpO1xuICAgIH0gZWxzZSBpZiAocGFydCA9PT0gJy4uJykge1xuICAgICAgc3BsaWNlT25lKGZyb21QYXJ0cywgaSk7XG4gICAgICB1cCsrO1xuICAgIH0gZWxzZSBpZiAodXApIHtcbiAgICAgIHNwbGljZU9uZShmcm9tUGFydHMsIGkpO1xuICAgICAgdXAtLTtcbiAgICB9XG4gIH1cblxuICBpZiAoIW11c3RFbmRBYnMpIGZvciAoOyB1cC0tOyB1cCkge1xuICAgIGZyb21QYXJ0cy51bnNoaWZ0KCcuLicpO1xuICB9aWYgKG11c3RFbmRBYnMgJiYgZnJvbVBhcnRzWzBdICE9PSAnJyAmJiAoIWZyb21QYXJ0c1swXSB8fCAhaXNBYnNvbHV0ZShmcm9tUGFydHNbMF0pKSkgZnJvbVBhcnRzLnVuc2hpZnQoJycpO1xuXG4gIHZhciByZXN1bHQgPSBmcm9tUGFydHMuam9pbignLycpO1xuXG4gIGlmIChoYXNUcmFpbGluZ1NsYXNoICYmIHJlc3VsdC5zdWJzdHIoLTEpICE9PSAnLycpIHJlc3VsdCArPSAnLyc7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVzb2x2ZVBhdGhuYW1lO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9yZXNvbHZlLXBhdGhuYW1lL2luZGV4LmpzIiwidmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiB2YWx1ZUVxdWFsKGEsIGIpIHtcbiAgaWYgKGEgPT09IGIpIHJldHVybiB0cnVlO1xuXG4gIGlmIChhID09IG51bGwgfHwgYiA9PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoYSkpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShiKSAmJiBhLmxlbmd0aCA9PT0gYi5sZW5ndGggJiYgYS5ldmVyeShmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgIHJldHVybiB2YWx1ZUVxdWFsKGl0ZW0sIGJbaW5kZXhdKTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBhVHlwZSA9IHR5cGVvZiBhID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihhKTtcbiAgdmFyIGJUeXBlID0gdHlwZW9mIGIgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGIpO1xuXG4gIGlmIChhVHlwZSAhPT0gYlR5cGUpIHJldHVybiBmYWxzZTtcblxuICBpZiAoYVR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgdmFyIGFWYWx1ZSA9IGEudmFsdWVPZigpO1xuICAgIHZhciBiVmFsdWUgPSBiLnZhbHVlT2YoKTtcblxuICAgIGlmIChhVmFsdWUgIT09IGEgfHwgYlZhbHVlICE9PSBiKSByZXR1cm4gdmFsdWVFcXVhbChhVmFsdWUsIGJWYWx1ZSk7XG5cbiAgICB2YXIgYUtleXMgPSBPYmplY3Qua2V5cyhhKTtcbiAgICB2YXIgYktleXMgPSBPYmplY3Qua2V5cyhiKTtcblxuICAgIGlmIChhS2V5cy5sZW5ndGggIT09IGJLZXlzLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgcmV0dXJuIGFLZXlzLmV2ZXJ5KGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiB2YWx1ZUVxdWFsKGFba2V5XSwgYltrZXldKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsdWVFcXVhbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdmFsdWUtZXF1YWwvaW5kZXguanMiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIgPSBmdW5jdGlvbiBjcmVhdGVUcmFuc2l0aW9uTWFuYWdlcigpIHtcbiAgdmFyIHByb21wdCA9IG51bGw7XG5cbiAgdmFyIHNldFByb21wdCA9IGZ1bmN0aW9uIHNldFByb21wdChuZXh0UHJvbXB0KSB7XG4gICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KShwcm9tcHQgPT0gbnVsbCwgJ0EgaGlzdG9yeSBzdXBwb3J0cyBvbmx5IG9uZSBwcm9tcHQgYXQgYSB0aW1lJyk7XG5cbiAgICBwcm9tcHQgPSBuZXh0UHJvbXB0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChwcm9tcHQgPT09IG5leHRQcm9tcHQpIHByb21wdCA9IG51bGw7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgY29uZmlybVRyYW5zaXRpb25UbyA9IGZ1bmN0aW9uIGNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgY2FsbGJhY2spIHtcbiAgICAvLyBUT0RPOiBJZiBhbm90aGVyIHRyYW5zaXRpb24gc3RhcnRzIHdoaWxlIHdlJ3JlIHN0aWxsIGNvbmZpcm1pbmdcbiAgICAvLyB0aGUgcHJldmlvdXMgb25lLCB3ZSBtYXkgZW5kIHVwIGluIGEgd2VpcmQgc3RhdGUuIEZpZ3VyZSBvdXQgdGhlXG4gICAgLy8gYmVzdCB3YXkgdG8gaGFuZGxlIHRoaXMuXG4gICAgaWYgKHByb21wdCAhPSBudWxsKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gdHlwZW9mIHByb21wdCA9PT0gJ2Z1bmN0aW9uJyA/IHByb21wdChsb2NhdGlvbiwgYWN0aW9uKSA6IHByb21wdDtcblxuICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZ2V0VXNlckNvbmZpcm1hdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGdldFVzZXJDb25maXJtYXRpb24ocmVzdWx0LCBjYWxsYmFjayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KShmYWxzZSwgJ0EgaGlzdG9yeSBuZWVkcyBhIGdldFVzZXJDb25maXJtYXRpb24gZnVuY3Rpb24gaW4gb3JkZXIgdG8gdXNlIGEgcHJvbXB0IG1lc3NhZ2UnKTtcblxuICAgICAgICAgIGNhbGxiYWNrKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBSZXR1cm4gZmFsc2UgZnJvbSBhIHRyYW5zaXRpb24gaG9vayB0byBjYW5jZWwgdGhlIHRyYW5zaXRpb24uXG4gICAgICAgIGNhbGxiYWNrKHJlc3VsdCAhPT0gZmFsc2UpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjayh0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGxpc3RlbmVycyA9IFtdO1xuXG4gIHZhciBhcHBlbmRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFwcGVuZExpc3RlbmVyKGZuKSB7XG4gICAgdmFyIGlzQWN0aXZlID0gdHJ1ZTtcblxuICAgIHZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIGxpc3RlbmVyKCkge1xuICAgICAgaWYgKGlzQWN0aXZlKSBmbi5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbSAhPT0gbGlzdGVuZXI7XG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBub3RpZnlMaXN0ZW5lcnMgPSBmdW5jdGlvbiBub3RpZnlMaXN0ZW5lcnMoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgbGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gbGlzdGVuZXIuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHNldFByb21wdDogc2V0UHJvbXB0LFxuICAgIGNvbmZpcm1UcmFuc2l0aW9uVG86IGNvbmZpcm1UcmFuc2l0aW9uVG8sXG4gICAgYXBwZW5kTGlzdGVuZXI6IGFwcGVuZExpc3RlbmVyLFxuICAgIG5vdGlmeUxpc3RlbmVyczogbm90aWZ5TGlzdGVuZXJzXG4gIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVUcmFuc2l0aW9uTWFuYWdlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlci5qcyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBjYW5Vc2VET00gPSBleHBvcnRzLmNhblVzZURPTSA9ICEhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbnZhciBhZGRFdmVudExpc3RlbmVyID0gZXhwb3J0cy5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudCwgbGlzdGVuZXIpIHtcbiAgcmV0dXJuIG5vZGUuYWRkRXZlbnRMaXN0ZW5lciA/IG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIsIGZhbHNlKSA6IG5vZGUuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50LCBsaXN0ZW5lcik7XG59O1xuXG52YXIgcmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGV4cG9ydHMucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnQsIGxpc3RlbmVyKSB7XG4gIHJldHVybiBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPyBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyLCBmYWxzZSkgOiBub2RlLmRldGFjaEV2ZW50KCdvbicgKyBldmVudCwgbGlzdGVuZXIpO1xufTtcblxudmFyIGdldENvbmZpcm1hdGlvbiA9IGV4cG9ydHMuZ2V0Q29uZmlybWF0aW9uID0gZnVuY3Rpb24gZ2V0Q29uZmlybWF0aW9uKG1lc3NhZ2UsIGNhbGxiYWNrKSB7XG4gIHJldHVybiBjYWxsYmFjayh3aW5kb3cuY29uZmlybShtZXNzYWdlKSk7XG59OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWFsZXJ0XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBIVE1MNSBoaXN0b3J5IEFQSSBpcyBzdXBwb3J0ZWQuIFRha2VuIGZyb20gTW9kZXJuaXpyLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2Jsb2IvbWFzdGVyL2ZlYXR1cmUtZGV0ZWN0cy9oaXN0b3J5LmpzXG4gKiBjaGFuZ2VkIHRvIGF2b2lkIGZhbHNlIG5lZ2F0aXZlcyBmb3IgV2luZG93cyBQaG9uZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JlYWN0LXJvdXRlci9pc3N1ZXMvNTg2XG4gKi9cbnZhciBzdXBwb3J0c0hpc3RvcnkgPSBleHBvcnRzLnN1cHBvcnRzSGlzdG9yeSA9IGZ1bmN0aW9uIHN1cHBvcnRzSGlzdG9yeSgpIHtcbiAgdmFyIHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XG5cbiAgaWYgKCh1YS5pbmRleE9mKCdBbmRyb2lkIDIuJykgIT09IC0xIHx8IHVhLmluZGV4T2YoJ0FuZHJvaWQgNC4wJykgIT09IC0xKSAmJiB1YS5pbmRleE9mKCdNb2JpbGUgU2FmYXJpJykgIT09IC0xICYmIHVhLmluZGV4T2YoJ0Nocm9tZScpID09PSAtMSAmJiB1YS5pbmRleE9mKCdXaW5kb3dzIFBob25lJykgPT09IC0xKSByZXR1cm4gZmFsc2U7XG5cbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5ICYmICdwdXNoU3RhdGUnIGluIHdpbmRvdy5oaXN0b3J5O1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgYnJvd3NlciBmaXJlcyBwb3BzdGF0ZSBvbiBoYXNoIGNoYW5nZS5cbiAqIElFMTAgYW5kIElFMTEgZG8gbm90LlxuICovXG52YXIgc3VwcG9ydHNQb3BTdGF0ZU9uSGFzaENoYW5nZSA9IGV4cG9ydHMuc3VwcG9ydHNQb3BTdGF0ZU9uSGFzaENoYW5nZSA9IGZ1bmN0aW9uIHN1cHBvcnRzUG9wU3RhdGVPbkhhc2hDaGFuZ2UoKSB7XG4gIHJldHVybiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdUcmlkZW50JykgPT09IC0xO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIGZhbHNlIGlmIHVzaW5nIGdvKG4pIHdpdGggaGFzaCBoaXN0b3J5IGNhdXNlcyBhIGZ1bGwgcGFnZSByZWxvYWQuXG4gKi9cbnZhciBzdXBwb3J0c0dvV2l0aG91dFJlbG9hZFVzaW5nSGFzaCA9IGV4cG9ydHMuc3VwcG9ydHNHb1dpdGhvdXRSZWxvYWRVc2luZ0hhc2ggPSBmdW5jdGlvbiBzdXBwb3J0c0dvV2l0aG91dFJlbG9hZFVzaW5nSGFzaCgpIHtcbiAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0ZpcmVmb3gnKSA9PT0gLTE7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBhIGdpdmVuIHBvcHN0YXRlIGV2ZW50IGlzIGFuIGV4dHJhbmVvdXMgV2ViS2l0IGV2ZW50LlxuICogQWNjb3VudHMgZm9yIHRoZSBmYWN0IHRoYXQgQ2hyb21lIG9uIGlPUyBmaXJlcyByZWFsIHBvcHN0YXRlIGV2ZW50c1xuICogY29udGFpbmluZyB1bmRlZmluZWQgc3RhdGUgd2hlbiBwcmVzc2luZyB0aGUgYmFjayBidXR0b24uXG4gKi9cbnZhciBpc0V4dHJhbmVvdXNQb3BzdGF0ZUV2ZW50ID0gZXhwb3J0cy5pc0V4dHJhbmVvdXNQb3BzdGF0ZUV2ZW50ID0gZnVuY3Rpb24gaXNFeHRyYW5lb3VzUG9wc3RhdGVFdmVudChldmVudCkge1xuICByZXR1cm4gZXZlbnQuc3RhdGUgPT09IHVuZGVmaW5lZCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0NyaU9TJykgPT09IC0xO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9ET01VdGlscy5qcyIsImltcG9ydCAnLi9zdHlsZS5zY3NzJ1xuaW1wb3J0IGNvbmZpZyBmcm9tICdjb25maWcnXG5pbXBvcnQgeyB0aGVtZVN0b3JlIH0gZnJvbSAnIy9zdG9yZXMnXG5cbmNvbnN0IHRoZW1lcyA9IGNvbmZpZy50aGVtZXNcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gIGNvbnN0ICRzaWRlYmFyID0gJCgnI0otc2lkZWJhci1oZWFkZXInKVxuICBjb25zdCAkYm9keSA9ICQoJ2JvZHknKVxuICBjb25zdCAkdGhlbWVTZWxlY3RvciA9ICQoJyNKLXRoZW1lLXNlbGVjdG9yJylcbiAgY29uc3QgJHNpZGViYXJCb2R5ID0gJCgnI0otc2lkZS1iYXItYm9keScpXG4gIGxldCBpc1NlYXJjaFNob3dpbmcgPSBmYWxzZVxuICBsZXQgaXNTaWRlQm9keVNob3dpbmcgPSB0cnVlXG5cbiAgJHRoZW1lU2VsZWN0b3JcbiAgICAuaHRtbChcbiAgICAgIHRoZW1lc1xuICAgICAgICAubWFwKHRoZW1lID0+IHtcbiAgICAgICAgICBjb25zdCBpc1NlbGVjdGVkID0gdGhlbWVTdG9yZS50aGVtZSA9PT0gdGhlbWUgPyAnc2VsZWN0ZWQnIDogJydcbiAgICAgICAgICByZXR1cm4gYDxvcHRpb24gdmFsdWU9XCIke3RoZW1lfVwiICR7aXNTZWxlY3RlZH0+JHt0aGVtZX08L29wdGlvbj5gXG4gICAgICAgIH0pXG4gICAgICAgIC5qb2luKCcnKVxuICAgIClcbiAgICAub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpXG4gICAgICBjb25zdCB0aGVtZSA9ICR0aGlzLnZhbCgpXG5cbiAgICAgIGlmICh0aGVtZSAhPT0gdGhlbWVTdG9yZS50aGVtZSkge1xuICAgICAgICAkYm9keS5hZGRDbGFzcygndGhlbWUtJyArIHRoZW1lKS5yZW1vdmVDbGFzcygndGhlbWUtJyArIHRoZW1lU3RvcmUudGhlbWUpXG4gICAgICAgIHRoZW1lU3RvcmUuc2V0VGhlbWUodGhlbWUpXG4gICAgICB9XG4gICAgfSlcblxuICAkYm9keS5hZGRDbGFzcygndGhlbWUtJyArIHRoZW1lU3RvcmUudGhlbWUpXG5cbiAgJHNpZGViYXJcbiAgICAub24oJ2NsaWNrJywgJy5KLXNpZGViYXItbG9nbycsIGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpXG5cbiAgICAgIGlmICgkdGhpcy5pcygnLmFjdGl2ZScpKSB7XG4gICAgICAgIHNpZGViYXJCb2R5SGlkZSgpXG4gICAgICAgICR0aGlzLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2lkZWJhckJvZHlTaG93KClcbiAgICAgICAgZW1pdHRlci5lbWl0KCdzd2l0Y2gtc2lkZWJhcicsIHsgdGFyZ2V0OiAnbG9nbycgfSlcbiAgICAgICAgJHRoaXNcbiAgICAgICAgICAuYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAgICAgLnNpYmxpbmdzKClcbiAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICB9XG4gICAgfSlcbiAgICAub24oJ2NsaWNrJywgJy5KLXNpZGViYXItc2VhcmNoJywgZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCAkdGhpcyA9ICQodGhpcylcblxuICAgICAgaWYgKCR0aGlzLmlzKCcuYWN0aXZlJykpIHtcbiAgICAgICAgc2lkZWJhckJvZHlIaWRlKClcbiAgICAgICAgJHRoaXMucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaWRlYmFyQm9keVNob3coKVxuXG4gICAgICAgICR0aGlzXG4gICAgICAgICAgLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgICAgICAgIC5zaWJsaW5ncygpXG4gICAgICAgICAgLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuXG4gICAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInNlYXJjaC1ib3hcIiAqLyAncGFydGlhbHMvc2lkZS1iYXItYm9keS9zZWFyY2gtYm94JykudGhlbigoKSA9PiB7XG4gICAgICAgICAgZW1pdHRlci5lbWl0KCdzd2l0Y2gtc2lkZWJhcicsIHsgdGFyZ2V0OiAnc2VhcmNoJyB9KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgZnVuY3Rpb24gc2lkZWJhckJvZHlTaG93KCkge1xuICAgICRzaWRlYmFyQm9keS5yZW1vdmVDbGFzcygnaGlkZGVuJylcbiAgICBpc1NpZGVCb2R5U2hvd2luZyA9IHRydWVcbiAgfVxuICBmdW5jdGlvbiBzaWRlYmFyQm9keUhpZGUoKSB7XG4gICAgJHNpZGViYXJCb2R5LmFkZENsYXNzKCdoaWRkZW4nKVxuICAgIGlzU2lkZUJvZHlTaG93aW5nID0gZmFsc2VcbiAgfVxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhcnRpYWxzL3NpZGUtYmFyLWhlYWRlci9pbmRleC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYXJ0aWFscy9zaWRlLWJhci1oZWFkZXIvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiaW1wb3J0ICcuL2Jsb2ctdHJlZSdcbmltcG9ydCAnLi9zdHlsZS5zY3NzJ1xuXG4kKGZ1bmN0aW9uKCkge1xuICBjb25zdCAkc2VhcmNoQm94ID0gJCgnI0otc2VhcmNoLWJveCcpXG4gIGNvbnN0ICRibG9nVHJlZSA9ICQoJyNKLWJsb2ctdHJlZScpXG4gIGNvbnN0ICRzZWFyY2hJbnB1dCA9ICRzZWFyY2hCb3guZmluZCgnLkotaW5wdXQtc2VhcmNoJylcbiAgY29uc3QgJHRhZ1RyZWUgPSAkKCcjSi1ibG9nLXRyZWUnKVxuXG4gIGVtaXR0ZXIub24oJ3N3aXRjaC1zaWRlYmFyJywgKHsgdGFyZ2V0IH0pID0+IHtcbiAgICBjb25zdCBpc1NlYXJjaCA9IHRhcmdldCA9PT0gJ3NlYXJjaCdcblxuICAgIGlmIChpc1NlYXJjaCkge1xuICAgICAgJGJsb2dUcmVlLmhpZGUoKVxuICAgICAgJHNlYXJjaEJveC5yZW1vdmVDbGFzcygnaGlkZGVuJylcbiAgICAgICRzZWFyY2hJbnB1dC5mb2N1cygpXG4gICAgfSBlbHNlIHtcbiAgICAgICRibG9nVHJlZS5zaG93KClcbiAgICAgICRzZWFyY2hCb3guYWRkQ2xhc3MoJ2hpZGRlbicpXG4gICAgfVxuICB9KVxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhcnRpYWxzL3NpZGUtYmFyLWJvZHkvaW5kZXguanMiLCJpbXBvcnQgJy4vc3R5bGUuc2NzcydcbmltcG9ydCBoaXN0b3J5IGZyb20gJyMvaGlzdG9yeSdcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gIGNvbnN0ICR0YWdUcmVlID0gJCgnI0otYmxvZy10cmVlJylcbiAgY29uc3QgJGFsbFBvc3RzID0gJCgnI0otcG9zdHMtYWxsLWhpZGRlbicpXG4gIGNvbnN0IHBhdGhuYW1lID0gbG9jYXRpb24ucGF0aG5hbWVcbiAgY29uc3QgJGJvZHkgPSAkKCdib2R5JylcbiAgY29uc3QgJHVudGFnZWRQb3N0cyA9ICR0YWdUcmVlLmZpbmQoJy5KLXVudGFnZWQtcG9zdHMnKVxuXG4gIGNvbnN0IHRhZ3MgPSB7fVxuICBjb25zdCB1bnRhZ2VkID0gW11cbiAgJGFsbFBvc3RzLmZpbmQoJy5KLXBvc3QnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0ICRwb3N0ID0gJCh0aGlzKVxuICAgIGNvbnN0IHNsdWcgPSAkcG9zdC5kYXRhKCdzbHVnJylcbiAgICBjb25zdCAkdGFncyA9ICRwb3N0LmZpbmQoJy5KLXRhZycpXG5cbiAgICBpZiAocGF0aG5hbWUuaW5jbHVkZXMoc2x1ZykpIHtcbiAgICAgICRwb3N0LmFkZENsYXNzKCdhY3RpdmUnKVxuICAgIH1cblxuICAgIGlmICgkdGFncy5sZW5ndGggPT09IDApIHtcbiAgICAgIHVudGFnZWQucHVzaCgkcG9zdFswXS5vdXRlckhUTUwpXG4gICAgfSBlbHNlIHtcbiAgICAgICR0YWdzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHRhZyA9IHRoaXMuaW5uZXJUZXh0XG4gICAgICAgIGlmICghdGFnc1t0YWddKSB7XG4gICAgICAgICAgdGFnc1t0YWddID0gW11cbiAgICAgICAgfVxuXG4gICAgICAgIHRhZ3NbdGFnXS5wdXNoKCRwb3N0WzBdLm91dGVySFRNTClcbiAgICAgIH0pXG4gICAgfVxuICB9KVxuXG4gIC8qKlxuICAgKiBjb3B5IHBvc3RzIHRvIGNvcnJlc3BvbmRpbmcgdGFnXG4gICAqL1xuICAkdGFnVHJlZS5maW5kKCcuSi1ibG9nLXRyZWUtcG9zdHMnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKVxuICAgIGNvbnN0IHBvc3RzID0gdGFnc1skdGhpcy5kYXRhKCd0YWcnKV1cblxuICAgIGlmICghcG9zdHMpIHtcbiAgICAgICR0aGlzXG4gICAgICAgIC5odG1sKCc8dWw+PGxpIGNsYXNzPVwiYmxvZy10cmVlLW5vLXBvc3RzIGxpZ2h0ZXJcIj5Db21pbmcgc29vbi4uLjwvbGk+PC91bD4nKVxuICAgICAgICAucGFyZW50KClcbiAgICAgICAgLmFkZENsYXNzKCdwb3N0LWhpZGRlbicpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAkdGhpcy5odG1sKHBvc3RzLmpvaW4oJycpKS5jc3Moe1xuICAgICAgaGVpZ2h0OiAyNiAqIHBvc3RzLmxlbmd0aFxuICAgIH0pXG4gIH0pXG5cbiAgJHVudGFnZWRQb3N0cy5odG1sKHVudGFnZWQuam9pbignJykpXG5cbiAgY29uc3QgJHBvc3RzID0gJCgnLkotYmxvZy10cmVlLXRhZ3MgLkotcG9zdCcpXG5cbiAgLy8gZXZlbnQgYmluZGluZ1xuICAkdGFnVHJlZVxuICAgIC5hZGRDbGFzcygnbG9hZGluZy1oaWRkZW4nKVxuICAgIC5vbignY2xpY2snLCAnLkotYmxvZy10cmVlLXRhZ25hbWUnLCBmdW5jdGlvbigpIHtcbiAgICAgICQodGhpcylcbiAgICAgICAgLnBhcmVudCgpXG4gICAgICAgIC50b2dnbGVDbGFzcygncG9zdC1oaWRkZW4nKVxuICAgIH0pXG4gICAgLm9uKCdjbGljaycsICcuSi1nbzJwb3N0JywgZnVuY3Rpb24oZSkge1xuICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpXG5cbiAgICAgIGlmICgkYm9keS5pcygnLmhvbWUtdGVtcGxhdGUnKSkgcmV0dXJuXG5cbiAgICAgIGlmICgkdGhpcy5wYXJlbnRzKCcuSi1wb3N0JykuaXMoJy5hY3RpdmUnKSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlkID0gJHRoaXMuZGF0YSgnaWQnKVxuICAgICAgY29uc3QgdXJsID0gJHRoaXMuYXR0cignaHJlZicpXG5cbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgZW1pdHRlci5lbWl0KCdhZGQtcG9zdC10YWInLCB7XG4gICAgICAgIGlkLFxuICAgICAgICB1cmwsXG4gICAgICAgIHRpdGxlOiAkdGhpcy5hdHRyKCd0aXRsZScpLFxuICAgICAgICBzbHVnOiAkdGhpcy5wYXJlbnRzKCcuSi1wb3N0JykuZGF0YSgnc2x1ZycpXG4gICAgICB9KVxuICAgIH0pXG5cbiAgaGlzdG9yeS5saXN0ZW4obG9jYXRpb24gPT4ge1xuICAgIGNvbnN0IG5leHRUYWIgPSBsb2NhdGlvbi5zdGF0ZVxuXG4gICAgJHBvc3RzXG4gICAgICAucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAuZmlsdGVyKChpZHgsIHBvc3QpID0+IHtcbiAgICAgICAgcmV0dXJuICQocG9zdCkuZGF0YSgnc2x1ZycpID09PSBuZXh0VGFiLnNsdWdcbiAgICAgIH0pXG4gICAgICAuYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gIH0pXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFydGlhbHMvc2lkZS1iYXItYm9keS9ibG9nLXRyZWUvaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGFydGlhbHMvc2lkZS1iYXItYm9keS9ibG9nLXRyZWUvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhcnRpYWxzL3NpZGUtYmFyLWJvZHkvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5cbiQoZnVuY3Rpb24oKSB7XG4gIGNvbnN0ICRyZWFkaW5nVGltZSA9ICQoXCIuSi1yZWFkaW5nLXRpbWVcIik7XG5cbiAgZW1pdHRlci5vbihcInJlZnJlc2gtcmVhZGluZy10aW1lXCIsICh7IHRpbWUgfSkgPT4ge1xuICAgICRyZWFkaW5nVGltZS5odG1sKHRpbWUpO1xuICB9KTtcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFydGlhbHMvZm9vdGVyL2luZGV4LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhcnRpYWxzL2Zvb3Rlci9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgJy4vc3R5bGUuc2NzcydcbmltcG9ydCBoaXN0b3J5IGZyb20gJyMvaGlzdG9yeSdcbmltcG9ydCB7IHBvc3RTdG9yZSB9IGZyb20gJyMvc3RvcmVzJ1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gJyMvdXRpbHMnXG5cbiQoZnVuY3Rpb24oKSB7XG4gIGNvbnN0ICRib2R5ID0gJCgnYm9keScpXG4gIGNvbnN0ICRwb3N0ID0gJCgnI0otcG9zdCcpXG4gIGNvbnN0ICR0aXRsZSA9ICRwb3N0LmZpbmQoJy5KLXBvc3QtdGl0bGUnKVxuICBjb25zdCAkY29udGVudCA9ICRwb3N0LmZpbmQoJy5KLXBvc3QtY29udGVudCcpXG4gIGNvbnN0ICRtZXRhID0gJHBvc3QuZmluZCgnLkotcG9zdC1tZXRhJylcbiAgY29uc3QgJGZlYXR1cmVJbWFnZSA9ICRwb3N0LmZpbmQoJy5KLXBvc3QtZmVhdHVyZS1pbWFnZScpXG5cbiAgaWYgKCQoJ2JvZHknKS5pcygnLnBvc3QtdGVtcGxhdGUnKSkge1xuICAgIGVtaXR0ZXIuZW1pdCgnYWRkLXBvc3QtdGFiJywge1xuICAgICAgaWQ6ICRwb3N0LmRhdGEoJ2lkJyksXG4gICAgICB0aXRsZTogJHBvc3QuZGF0YSgndGl0bGUnKSxcbiAgICAgIHNsdWc6ICRwb3N0LmRhdGEoJ3NsdWcnKSxcbiAgICAgIHVybDogJHBvc3QuZGF0YSgndXJsJylcbiAgICB9KVxuXG4gICAgZW1pdHRlci5lbWl0KCdyZWZyZXNoLXJlYWRpbmctdGltZScsIHtcbiAgICAgIHRpbWU6ICQoJy5KLXJlYWRpbmctdGltZS1oaWRkZW4nKS5odG1sKClcbiAgICB9KVxuICB9XG5cbiAgaGlzdG9yeS5saXN0ZW4oKGxvY2F0aW9uLCBhY3Rpb24pID0+IHtcbiAgICBjb25zdCBwb3N0SWQgPSBsb2NhdGlvbi5zdGF0ZS5pZFxuXG4gICAgcG9zdElkICYmXG4gICAgICBwb3N0U3RvcmUuZmV0Y2hQb3N0KHBvc3RJZCkuZG9uZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGNvbnN0IHBvc3QgPSBkYXRhLnBvc3RzWzBdIHx8IHt9XG4gICAgICAgIGNvbnN0IHsgY3JlYXRlZF9hdCwgdGl0bGUsIGh0bWwsIGF1dGhvciwgZmVhdHVyZV9pbWFnZSB9ID0gcG9zdFxuXG4gICAgICAgICR0aXRsZS5odG1sKHRpdGxlKVxuICAgICAgICAkY29udGVudC5odG1sKGh0bWwpXG4gICAgICAgICRtZXRhLmh0bWwoYFBvc3RlZCBieSAke2F1dGhvci5uYW1lfSBvbiAke2Zvcm1hdERhdGUoJyRZLiRNLiRkJywgY3JlYXRlZF9hdCl9YClcbiAgICAgICAgJGZlYXR1cmVJbWFnZVtmZWF0dXJlX2ltYWdlID8gJ3Nob3cnIDogJ2hpZGUnXSgpLmZpbmQoJ2ZpZ3VyZScpLmNzcyh7XG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7ZmVhdHVyZV9pbWFnZX0pYFxuICAgICAgICB9KVxuICAgICAgICBlbWl0dGVyLmVtaXQoJ3JlZnJlc2gtcmVhZGluZy10aW1lJywge1xuICAgICAgICAgIHRpbWU6ICcnXG4gICAgICAgIH0pXG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gdGl0bGVcbiAgICAgIH0pXG4gIH0pXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFydGlhbHMvcG9zdC9pbmRleC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYXJ0aWFscy9wb3N0L3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYXJ0aWFscy9wb3N0LW5hdi9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGFydGlhbHMvaG9tZS9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9