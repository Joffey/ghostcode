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
/******/ 		script.src = __webpack_require__.p + "chunk." + ({}[chunkId]||chunkId) + "." + {"0":"6d7f3"}[chunkId] + ".js";
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__history__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(3);
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
      $meta.html(`Posted by <a href="/author/${author.slug}/">${author.name}</a> on ${Object(__WEBPACK_IMPORTED_MODULE_3__utils__["a" /* formatDate */])('$Y.$M.$d', created_at)}`);
      $featureImage[feature_image ? 'removeClass' : 'addClass']('hidden').find('figure').css({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDZhMWQ2MzA1ZmMxNDc5M2EwOGUiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9oaXN0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy93YXJuaW5nL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9QYXRoVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2VtaXR0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21pdHQvZGlzdC9taXR0LmVzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9wYXJ0aWFscy9wb3N0LXRhYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvcmVzdWx0Lmpzb24iLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvcG9zdC10YWIvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmVzL1RoZW1lU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3Jlcy9UYWJTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmVzL1Bvc3RTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9jcmVhdGVCcm93c2VySGlzdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW52YXJpYW50L2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hpc3RvcnkvTG9jYXRpb25VdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS1wYXRobmFtZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsdWUtZXF1YWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hpc3RvcnkvY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hpc3RvcnkvRE9NVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvc2lkZS1iYXItaGVhZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhcnRpYWxzL3NpZGUtYmFyLWhlYWRlci9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3BhcnRpYWxzL3NpZGUtYmFyLWJvZHkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvc2lkZS1iYXItYm9keS9ibG9nLXRyZWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvc2lkZS1iYXItYm9keS9ibG9nLXRyZWUvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9wYXJ0aWFscy9zaWRlLWJhci1ib2R5L3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvZm9vdGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhcnRpYWxzL2Zvb3Rlci9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3BhcnRpYWxzL3Bvc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvcG9zdC9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3BhcnRpYWxzL3Bvc3QtbmF2L3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvaG9tZS9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3BhcnRpYWxzL2F1dGhvci9zdHlsZS5zY3NzIl0sIm5hbWVzIjpbInRoZW1lcyIsImxzUG9zdFRhYktleSIsImxzVGhlbWVLZXkiLCJsc1Bvc3RzS2V5IiwiZGVmYXVsdFRoZW1lIiwiY3JlYXRlSGlzdG9yeSIsInRoZW1lU3RvcmUiLCJ0YWJTdG9yZSIsInBvc3RTdG9yZSIsIndpbmRvdyIsInN0b3JlcyIsIiRib2R5IiwiJCIsImlzSG9tZVBhZ2UiLCJpcyIsImlzUG9zdFBhZ2UiLCJoU2Nyb2xsIiwiZWwiLCJjb25zb2xlIiwiZXJyb3IiLCJhZGRFdmVudExpc3RlbmVyIiwid2hlZWwiLCJlIiwiZGVsdGEiLCJ3aGVlbERlbHRhIiwiZGVsdGFZIiwic2Nyb2xsTGVmdCIsInByZXZlbnREZWZhdWx0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImZvcm1hdCIsInRlbXBsYXRlIiwidmFycyIsInJlcGxhY2UiLCJfIiwibmFtZSIsInZhbHVlIiwidHJpbSIsInRvTGVuIiwic291cmNlIiwibGVuIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJqb2luIiwiY2FsbCIsImxlbmd0aCIsInNsaWNlIiwiZm9ybWF0RGF0ZSIsImRhdGUiLCJrZXkiLCJEYXRlIiwiREFZIiwiWSIsImdldEZ1bGxZZWFyIiwieSIsIk0iLCJnZXRNb250aCIsImQiLCJnZXREYXRlIiwiRCIsImdldERheSIsIkgiLCJnZXRIb3VycyIsIm0iLCJnZXRNaW51dGVzIiwicyIsImdldFNlY29uZHMiLCJ3YXJuaW5nIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiY29uZGl0aW9uIiwiYXJncyIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsIkVycm9yIiwidGVzdCIsImFyZ0luZGV4IiwibWVzc2FnZSIsIngiLCJtb2R1bGUiLCJleHBvcnRzIiwiY2FjaGVkU2V0VGltZW91dCIsImNhY2hlZENsZWFyVGltZW91dCIsImRlZmF1bHRTZXRUaW1vdXQiLCJkZWZhdWx0Q2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsInJ1blRpbWVvdXQiLCJmdW4iLCJydW5DbGVhclRpbWVvdXQiLCJtYXJrZXIiLCJxdWV1ZSIsImRyYWluaW5nIiwiY3VycmVudFF1ZXVlIiwicXVldWVJbmRleCIsImNsZWFuVXBOZXh0VGljayIsImNvbmNhdCIsImRyYWluUXVldWUiLCJ0aW1lb3V0IiwicnVuIiwibmV4dFRpY2siLCJpIiwicHVzaCIsIkl0ZW0iLCJhcnJheSIsImFwcGx5IiwidGl0bGUiLCJicm93c2VyIiwiYXJndiIsInZlcnNpb24iLCJ2ZXJzaW9ucyIsIm5vb3AiLCJvbiIsImFkZExpc3RlbmVyIiwib25jZSIsIm9mZiIsInJlbW92ZUxpc3RlbmVyIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiZW1pdCIsInByZXBlbmRMaXN0ZW5lciIsInByZXBlbmRPbmNlTGlzdGVuZXIiLCJsaXN0ZW5lcnMiLCJiaW5kaW5nIiwiY3dkIiwiY2hkaXIiLCJkaXIiLCJ1bWFzayIsIl9fZXNNb2R1bGUiLCJhZGRMZWFkaW5nU2xhc2giLCJwYXRoIiwiY2hhckF0Iiwic3RyaXBMZWFkaW5nU2xhc2giLCJzdWJzdHIiLCJoYXNCYXNlbmFtZSIsInByZWZpeCIsIlJlZ0V4cCIsInN0cmlwQmFzZW5hbWUiLCJzdHJpcFRyYWlsaW5nU2xhc2giLCJwYXJzZVBhdGgiLCJwYXRobmFtZSIsInNlYXJjaCIsImhhc2giLCJoYXNoSW5kZXgiLCJpbmRleE9mIiwic2VhcmNoSW5kZXgiLCJjcmVhdGVQYXRoIiwibG9jYXRpb24iLCJlbWl0dGVyIiwibWl0dCIsImFsbCIsIk9iamVjdCIsImNyZWF0ZSIsInR5cGUiLCJoYW5kbGVyIiwic3BsaWNlIiwiZXZ0IiwibWFwIiwiJHBvc3RUYWJzIiwiJHNjcm9sbFdyYXAiLCJuZFNjcm9sbFdyYXAiLCJnZXQiLCJwb3N0IiwidGFicyIsImdldFRhYnMiLCJmaWx0ZXIiLCJ0YWIiLCJpZCIsInNldFRhYnMiLCJhY3RpdmUiLCJhY3RpdmVJZCIsImN1cnJlbnRUYWIiLCIkYWN0aXZlIiwiaHRtbCIsInNsdWciLCJmaW5kIiwiaGlzdG9yeSIsInVybCIsInNldEN1cnJlbnRUYWIiLCJzY3JvbGwydmlldyIsInN0b3BQcm9wYWdhdGlvbiIsImRlbGV0ZVRhYkl0ZW0iLCJwYXJlbnQiLCJkYXRhIiwiJHRoaXMiLCJhZGRDbGFzcyIsInNpYmxpbmdzIiwicmVtb3ZlQ2xhc3MiLCJ3cmFwV2lkdGgiLCJ3aWR0aCIsIndyYXBTY3JvbGxMZWZ0Iiwid3JhcFJpZ2h0IiwidGhyZXNob2xkIiwibmRBY3RpdmUiLCJhY3RpdmVXaWR0aCIsIm91dGVyV2lkdGgiLCJhY3RpdmVMZWZ0Iiwib2Zmc2V0TGVmdCIsImFjdGl2ZVJpZ2h0IiwibHMiLCJsb2NhbFN0b3JhZ2UiLCJjb25maWciLCJ0aGVtZSIsImdldEl0ZW0iLCJzZXRUaGVtZSIsInNldEl0ZW0iLCJzcGxpdCIsIm5leHRUYWIiLCJpc0N1cnJlbnRUYWIiLCJkZWxldGVkSWR4IiwiZmluZEluZGV4IiwiaWR4IiwiaHJlZiIsImZldGNoUG9zdCIsImNhY2hlIiwiZnJvbUNhY2hlIiwiRGVmZXJyZWQiLCJyZXNvbHZlIiwiZ2hvc3QiLCJhcGkiLCJpbmNsdWRlIiwiZmFpbCIsImVyciIsImxvZyIsImRvbmUiLCJwb3N0cyIsImNhY2hlUG9zdCIsImxzUG9zdHMiLCJKU09OIiwicGFyc2UiLCJ1c2VhYmxlIiwidGltZXN0YW1wIiwiaW5mbyIsImF1dGhvciIsImRlbGV0ZVBvc3RGcm9tQ2FjaGUiLCJzdHJpbmdpZnkiLCJjcmVhdGVkX2F0IiwiZmVhdHVyZV9pbWFnZSIsImlkcyIsImtleXMiLCJzaG91bGREZWxldGVJZCIsInNvcnQiLCJhIiwiYiIsIml0ZW0iLCJzaGlmdCIsIl90eXBlb2YiLCJTeW1ib2wiLCJpdGVyYXRvciIsIm9iaiIsImNvbnN0cnVjdG9yIiwiX2V4dGVuZHMiLCJhc3NpZ24iLCJ0YXJnZXQiLCJoYXNPd25Qcm9wZXJ0eSIsIl93YXJuaW5nIiwicmVxdWlyZSIsIl93YXJuaW5nMiIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfaW52YXJpYW50IiwiX2ludmFyaWFudDIiLCJfTG9jYXRpb25VdGlscyIsIl9QYXRoVXRpbHMiLCJfY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIiLCJfY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIyIiwiX0RPTVV0aWxzIiwiZGVmYXVsdCIsIlBvcFN0YXRlRXZlbnQiLCJIYXNoQ2hhbmdlRXZlbnQiLCJnZXRIaXN0b3J5U3RhdGUiLCJzdGF0ZSIsImNyZWF0ZUJyb3dzZXJIaXN0b3J5IiwicHJvcHMiLCJjYW5Vc2VET00iLCJnbG9iYWxIaXN0b3J5IiwiY2FuVXNlSGlzdG9yeSIsInN1cHBvcnRzSGlzdG9yeSIsIm5lZWRzSGFzaENoYW5nZUxpc3RlbmVyIiwic3VwcG9ydHNQb3BTdGF0ZU9uSGFzaENoYW5nZSIsIl9wcm9wcyRmb3JjZVJlZnJlc2giLCJmb3JjZVJlZnJlc2giLCJfcHJvcHMkZ2V0VXNlckNvbmZpcm0iLCJnZXRVc2VyQ29uZmlybWF0aW9uIiwiZ2V0Q29uZmlybWF0aW9uIiwiX3Byb3BzJGtleUxlbmd0aCIsImtleUxlbmd0aCIsImJhc2VuYW1lIiwiZ2V0RE9NTG9jYXRpb24iLCJoaXN0b3J5U3RhdGUiLCJfcmVmIiwiX3dpbmRvdyRsb2NhdGlvbiIsImNyZWF0ZUxvY2F0aW9uIiwiY3JlYXRlS2V5IiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwidHJhbnNpdGlvbk1hbmFnZXIiLCJzZXRTdGF0ZSIsIm5leHRTdGF0ZSIsIm5vdGlmeUxpc3RlbmVycyIsImFjdGlvbiIsImhhbmRsZVBvcFN0YXRlIiwiZXZlbnQiLCJpc0V4dHJhbmVvdXNQb3BzdGF0ZUV2ZW50IiwiaGFuZGxlUG9wIiwiaGFuZGxlSGFzaENoYW5nZSIsImZvcmNlTmV4dFBvcCIsImNvbmZpcm1UcmFuc2l0aW9uVG8iLCJvayIsInJldmVydFBvcCIsImZyb21Mb2NhdGlvbiIsInRvTG9jYXRpb24iLCJ0b0luZGV4IiwiYWxsS2V5cyIsImZyb21JbmRleCIsImdvIiwiaW5pdGlhbExvY2F0aW9uIiwiY3JlYXRlSHJlZiIsInB1c2hTdGF0ZSIsInByZXZJbmRleCIsIm5leHRLZXlzIiwicmVwbGFjZVN0YXRlIiwibiIsImdvQmFjayIsImdvRm9yd2FyZCIsImxpc3RlbmVyQ291bnQiLCJjaGVja0RPTUxpc3RlbmVycyIsImlzQmxvY2tlZCIsImJsb2NrIiwicHJvbXB0IiwidW5ibG9jayIsInNldFByb21wdCIsImxpc3RlbiIsImxpc3RlbmVyIiwidW5saXN0ZW4iLCJhcHBlbmRMaXN0ZW5lciIsImludmFyaWFudCIsImMiLCJmIiwiZnJhbWVzVG9Qb3AiLCJsb2NhdGlvbnNBcmVFcXVhbCIsIl9yZXNvbHZlUGF0aG5hbWUiLCJfcmVzb2x2ZVBhdGhuYW1lMiIsIl92YWx1ZUVxdWFsIiwiX3ZhbHVlRXF1YWwyIiwiY3VycmVudExvY2F0aW9uIiwiZGVjb2RlVVJJIiwiVVJJRXJyb3IiLCJpc0Fic29sdXRlIiwic3BsaWNlT25lIiwibGlzdCIsImluZGV4IiwiayIsInBvcCIsInJlc29sdmVQYXRobmFtZSIsInRvIiwiZnJvbSIsInRvUGFydHMiLCJmcm9tUGFydHMiLCJpc1RvQWJzIiwiaXNGcm9tQWJzIiwibXVzdEVuZEFicyIsImhhc1RyYWlsaW5nU2xhc2giLCJsYXN0IiwidXAiLCJwYXJ0IiwidW5zaGlmdCIsInJlc3VsdCIsInZhbHVlRXF1YWwiLCJpc0FycmF5IiwiZXZlcnkiLCJhVHlwZSIsImJUeXBlIiwiYVZhbHVlIiwidmFsdWVPZiIsImJWYWx1ZSIsImFLZXlzIiwiYktleXMiLCJjcmVhdGVUcmFuc2l0aW9uTWFuYWdlciIsIm5leHRQcm9tcHQiLCJjYWxsYmFjayIsImZuIiwiaXNBY3RpdmUiLCJfbGVuIiwiX2tleSIsImZvckVhY2giLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJub2RlIiwiYXR0YWNoRXZlbnQiLCJkZXRhY2hFdmVudCIsImNvbmZpcm0iLCJ1YSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInN1cHBvcnRzR29XaXRob3V0UmVsb2FkVXNpbmdIYXNoIiwicmVhZHkiLCIkc2lkZWJhciIsIiR0aGVtZVNlbGVjdG9yIiwiJHNpZGViYXJCb2R5IiwiaXNTZWFyY2hTaG93aW5nIiwiaXNTaWRlQm9keVNob3dpbmciLCJpc1NlbGVjdGVkIiwidmFsIiwic2lkZWJhckJvZHlIaWRlIiwic2lkZWJhckJvZHlTaG93IiwidGhlbiIsIiRzZWFyY2hCb3giLCIkYmxvZ1RyZWUiLCIkc2VhcmNoSW5wdXQiLCIkdGFnVHJlZSIsImlzU2VhcmNoIiwiaGlkZSIsImZvY3VzIiwic2hvdyIsIiRhbGxQb3N0cyIsIiR1bnRhZ2VkUG9zdHMiLCJ0YWdzIiwidW50YWdlZCIsImVhY2giLCIkcG9zdCIsIiR0YWdzIiwiaW5jbHVkZXMiLCJvdXRlckhUTUwiLCJ0YWciLCJpbm5lclRleHQiLCJjc3MiLCJoZWlnaHQiLCIkcG9zdHMiLCJ0b2dnbGVDbGFzcyIsInBhcmVudHMiLCJhdHRyIiwiJHJlYWRpbmdUaW1lIiwidGltZSIsIiR0aXRsZSIsIiRjb250ZW50IiwiJG1ldGEiLCIkZmVhdHVyZUltYWdlIiwicG9zdElkIiwiYmFja2dyb3VuZEltYWdlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLFdBQVcsRUFBRTtBQUN2RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOERBQXNELDZCQUE2QixZQUFZO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7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QUE5QjtBQUNBLFlBQU0sRUFBRVcsVUFBRixFQUFjakksS0FBZCxFQUFxQmtFLElBQXJCLEVBQTJCNEQsTUFBM0IsRUFBbUNJLGFBQW5DLEtBQXFEM0UsSUFBM0Q7O0FBRUFnUixhQUFPclEsSUFBUCxDQUFZbEUsS0FBWjtBQUNBd1UsZUFBU3RRLElBQVQsQ0FBY0EsSUFBZDtBQUNBdVEsWUFBTXZRLElBQU4sQ0FBWSw4QkFBNkI0RCxPQUFPM0QsSUFBSyxNQUFLMkQsT0FBT3RNLElBQUssV0FBVSxrRUFBQVksQ0FBVyxVQUFYLEVBQXVCNkwsVUFBdkIsQ0FBbUMsRUFBbkg7QUFDQXlNLG9CQUFjeE0sZ0JBQWdCLGFBQWhCLEdBQWdDLFVBQTlDLEVBQTBELFFBQTFELEVBQW9FOUQsSUFBcEUsQ0FBeUUsUUFBekUsRUFBbUYyUCxHQUFuRixDQUF1RjtBQUNyRmEseUJBQWtCLE9BQU0xTSxhQUFjO0FBRCtDLE9BQXZGO0FBR0F6RixjQUFRN0IsSUFBUixDQUFhLHNCQUFiLEVBQXFDO0FBQ25DMFQsY0FBTTtBQUQ2QixPQUFyQztBQUdBL0MsZUFBU3ZSLEtBQVQsR0FBaUJBLEtBQWpCO0FBQ0QsS0FkRCxDQURGO0FBZ0JELEdBbkJEO0FBb0JELENBekNELEU7Ozs7OztBQ0xBLHlDOzs7Ozs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLHlDIiwiZmlsZSI6ImNvZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXTtcbiBcdHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGNodW5rSWRzLCBtb3JlTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMpIHtcbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdLCByZXN1bHQ7XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihjaHVua0lkcywgbW9yZU1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzKTtcbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdH07XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdHMgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0MTogMFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgPT09IDApIHtcbiBcdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkgeyByZXNvbHZlKCk7IH0pO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZENodW5rRGF0YVsyXTtcbiBcdFx0fVxuXG4gXHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcbiBcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcbiBcdFx0fSk7XG4gXHRcdGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2U7XG5cbiBcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHR2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gXHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiBcdFx0c2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiBcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuIFx0XHRzY3JpcHQuYXN5bmMgPSB0cnVlO1xuIFx0XHRzY3JpcHQudGltZW91dCA9IDEyMDAwMDtcblxuIFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuIFx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcbiBcdFx0fVxuIFx0XHRzY3JpcHQuc3JjID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJjaHVuay5cIiArICh7fVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5cIiArIHtcIjBcIjpcIjZkN2YzXCJ9W2NodW5rSWRdICsgXCIuanNcIjtcbiBcdFx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUsIDEyMDAwMCk7XG4gXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGU7XG4gXHRcdGZ1bmN0aW9uIG9uU2NyaXB0Q29tcGxldGUoKSB7XG4gXHRcdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuIFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG4gXHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuIFx0XHRcdHZhciBjaHVuayA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0XHRpZihjaHVuayAhPT0gMCkge1xuIFx0XHRcdFx0aWYoY2h1bmspIHtcbiBcdFx0XHRcdFx0Y2h1bmtbMV0obmV3IEVycm9yKCdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuJykpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuIFx0XHRcdH1cbiBcdFx0fTtcbiBcdFx0aGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuXG4gXHRcdHJldHVybiBwcm9taXNlO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYXNzZXRzL2J1aWx0L1wiO1xuXG4gXHQvLyBvbiBlcnJvciBmdW5jdGlvbiBmb3IgYXN5bmMgbG9hZGluZ1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHRocm93IGVycjsgfTtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0NmExZDYzMDVmYzE0NzkzYTA4ZSIsImltcG9ydCB7IHRoZW1lcyB9IGZyb20gJy4vdGhlbWVzL3Jlc3VsdC5qc29uJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRoZW1lcyxcbiAgbHNQb3N0VGFiS2V5OiAnY29kZXItcG9zdC10YWJzJyxcbiAgLy8gbG9jYWxzdG9yYWdlIHRoZW1lIGtleVxuICBsc1RoZW1lS2V5OiAnY29kZXItdGhlbWUnLFxuICBsc1Bvc3RzS2V5OiAnY29kZXItcG9zdHMnLFxuICBkZWZhdWx0VGhlbWU6ICdkYXJrX2RlZmF1bHQnXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb25maWcuanMiLCJpbXBvcnQgY3JlYXRlSGlzdG9yeSBmcm9tIFwiaGlzdG9yeS9jcmVhdGVCcm93c2VySGlzdG9yeVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhpc3RvcnkoKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oaXN0b3J5LmpzIiwiaW1wb3J0IFRoZW1lU3RvcmUgZnJvbSAnLi9UaGVtZVN0b3JlJ1xuaW1wb3J0IFRhYlN0b3JlIGZyb20gJy4vVGFiU3RvcmUnXG5pbXBvcnQgUG9zdFN0b3JlIGZyb20gJy4vUG9zdFN0b3JlJ1xuXG5leHBvcnQgY29uc3QgdGhlbWVTdG9yZSA9IG5ldyBUaGVtZVN0b3JlKClcbmV4cG9ydCBjb25zdCB0YWJTdG9yZSA9IG5ldyBUYWJTdG9yZSgpXG5leHBvcnQgY29uc3QgcG9zdFN0b3JlID0gbmV3IFBvc3RTdG9yZSgpXG5cbndpbmRvdy5zdG9yZXMgPSB7XG4gIHRoZW1lU3RvcmUsXG4gIHRhYlN0b3JlLFxuICBwb3N0U3RvcmVcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmVzL2luZGV4LmpzIiwiY29uc3QgJGJvZHkgPSAkKCdib2R5JylcblxuZXhwb3J0IGNvbnN0IGlzSG9tZVBhZ2UgPSAoKSA9PiAkYm9keS5pcygnLmhvbWUtdGVtcGxhdGUnKVxuZXhwb3J0IGNvbnN0IGlzUG9zdFBhZ2UgPSAoKSA9PiAkYm9keS5pcygnLnBvc3QtdGVtcGxhdGUnKVxuXG4vKipcbiAqIGhvcml6b250YWxseSBzY3JvbGxcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICpcbiAqIEBleGFtcGxlXG4gKiAgY29uc3Qgc3RvcEhTY3JvbGwgPSBoU2Nyb2xsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNKLWhzY3JvbGwtZWwnKSlcbiAqICBzdG9wSFNjcm9sbCgpIC8vIHJlbW92ZUV2ZW50TGlzdGVuZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhTY3JvbGwoZWwpIHtcbiAgaWYgKCFlbCkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ011c3Qgc3BlY2lmeSBlbCEnKVxuICAgIHJldHVyblxuICB9XG5cbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCB3aGVlbClcblxuICBmdW5jdGlvbiB3aGVlbChlKSB7XG4gICAgY29uc3QgZGVsdGEgPSBlLndoZWVsRGVsdGEgPyBlLndoZWVsRGVsdGEgOiAtMSAqIGUuZGVsdGFZXG4gICAgZWwuc2Nyb2xsTGVmdCArPSAtZGVsdGFcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIHJldHVybiAoKSA9PiBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIHdoZWVsKVxufVxuXG5leHBvcnQgY29uc3QgZm9ybWF0ID0gZnVuY3Rpb24odGVtcGxhdGUsIHZhcnMpIHtcbiAgcmV0dXJuIHRlbXBsYXRlLnJlcGxhY2UoL1xcJFxceyhbXlxce1xcfV0qKVxcfS9nLCBmdW5jdGlvbihfLCBuYW1lKSB7XG4gICAgdmFyIHZhbHVlID0gdmFyc1tuYW1lLnRyaW0oKV1cbiAgICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWUgKyAnJ1xuICB9KVxufVxuXG5jb25zdCB0b0xlbiA9IGZ1bmN0aW9uKHNvdXJjZSwgbGVuKSB7XG4gIHJldHVybiAoXG4gICAgQXJyYXkucHJvdG90eXBlLmpvaW4uY2FsbChcbiAgICAgIHtcbiAgICAgICAgbGVuZ3RoOiBsZW4gKyAxXG4gICAgICB9LFxuICAgICAgJzAnXG4gICAgKSArIHNvdXJjZVxuICApLnNsaWNlKC1sZW4pXG59XG5cbmV4cG9ydCBjb25zdCBmb3JtYXREYXRlID0gZnVuY3Rpb24odGVtcGxhdGUsIGRhdGUpIHtcbiAgaWYgKCFkYXRlKSByZXR1cm4gJydcbiAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKC9cXCQoW2EtekEtWl0pL2csIGZ1bmN0aW9uKF8sIGtleSkge1xuICAgIHJldHVybiAnJHsnICsga2V5ICsgJ30nXG4gIH0pXG4gIGRhdGUgPSBuZXcgRGF0ZShkYXRlKVxuICB2YXIgREFZID0gWyfml6UnLCAn5LiAJywgJ+S6jCcsICfkuIknLCAn5ZubJywgJ+S6lCcsICflha0nXVxuICByZXR1cm4gZm9ybWF0KHRlbXBsYXRlLCB7XG4gICAgWTogdG9MZW4oZGF0ZS5nZXRGdWxsWWVhcigpLCA0KSxcbiAgICB5OiB0b0xlbihkYXRlLmdldEZ1bGxZZWFyKCksIDIpLFxuICAgIE06IHRvTGVuKGRhdGUuZ2V0TW9udGgoKSArIDEsIDIpLFxuICAgIGQ6IHRvTGVuKGRhdGUuZ2V0RGF0ZSgpLCAyKSxcbiAgICBEOiBEQVlbZGF0ZS5nZXREYXkoKV0sXG4gICAgSDogdG9MZW4oZGF0ZS5nZXRIb3VycygpLCAyKSxcbiAgICBtOiB0b0xlbihkYXRlLmdldE1pbnV0ZXMoKSwgMiksXG4gICAgczogdG9MZW4oZGF0ZS5nZXRTZWNvbmRzKCksIDIpXG4gIH0pXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMuanMiLCIvKipcbiAqIENvcHlyaWdodCAyMDE0LTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciB3YXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgd2FybmluZyA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhcmdzKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgYXJncyA9IG5ldyBBcnJheShsZW4gPiAyID8gbGVuIC0gMiA6IDApO1xuICAgIGZvciAodmFyIGtleSA9IDI7IGtleSA8IGxlbjsga2V5KyspIHtcbiAgICAgIGFyZ3Nba2V5IC0gMl0gPSBhcmd1bWVudHNba2V5XTtcbiAgICB9XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICtcbiAgICAgICAgJ21lc3NhZ2UgYXJndW1lbnQnXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChmb3JtYXQubGVuZ3RoIDwgMTAgfHwgKC9eW3NcXFddKiQvKS50ZXN0KGZvcm1hdCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1RoZSB3YXJuaW5nIGZvcm1hdCBzaG91bGQgYmUgYWJsZSB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzICcgK1xuICAgICAgICAnd2FybmluZy4gUGxlYXNlLCB1c2UgYSBtb3JlIGRlc2NyaXB0aXZlIGZvcm1hdCB0aGFuOiAnICsgZm9ybWF0XG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgICAgfSk7XG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgIH0gY2F0Y2goeCkge31cbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2FybmluZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy93YXJuaW5nL2Jyb3dzZXIuanMiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBhZGRMZWFkaW5nU2xhc2ggPSBleHBvcnRzLmFkZExlYWRpbmdTbGFzaCA9IGZ1bmN0aW9uIGFkZExlYWRpbmdTbGFzaChwYXRoKSB7XG4gIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nID8gcGF0aCA6ICcvJyArIHBhdGg7XG59O1xuXG52YXIgc3RyaXBMZWFkaW5nU2xhc2ggPSBleHBvcnRzLnN0cmlwTGVhZGluZ1NsYXNoID0gZnVuY3Rpb24gc3RyaXBMZWFkaW5nU2xhc2gocGF0aCkge1xuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJyA/IHBhdGguc3Vic3RyKDEpIDogcGF0aDtcbn07XG5cbnZhciBoYXNCYXNlbmFtZSA9IGV4cG9ydHMuaGFzQmFzZW5hbWUgPSBmdW5jdGlvbiBoYXNCYXNlbmFtZShwYXRoLCBwcmVmaXgpIHtcbiAgcmV0dXJuIG5ldyBSZWdFeHAoJ14nICsgcHJlZml4ICsgJyhcXFxcL3xcXFxcP3wjfCQpJywgJ2knKS50ZXN0KHBhdGgpO1xufTtcblxudmFyIHN0cmlwQmFzZW5hbWUgPSBleHBvcnRzLnN0cmlwQmFzZW5hbWUgPSBmdW5jdGlvbiBzdHJpcEJhc2VuYW1lKHBhdGgsIHByZWZpeCkge1xuICByZXR1cm4gaGFzQmFzZW5hbWUocGF0aCwgcHJlZml4KSA/IHBhdGguc3Vic3RyKHByZWZpeC5sZW5ndGgpIDogcGF0aDtcbn07XG5cbnZhciBzdHJpcFRyYWlsaW5nU2xhc2ggPSBleHBvcnRzLnN0cmlwVHJhaWxpbmdTbGFzaCA9IGZ1bmN0aW9uIHN0cmlwVHJhaWxpbmdTbGFzaChwYXRoKSB7XG4gIHJldHVybiBwYXRoLmNoYXJBdChwYXRoLmxlbmd0aCAtIDEpID09PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGg7XG59O1xuXG52YXIgcGFyc2VQYXRoID0gZXhwb3J0cy5wYXJzZVBhdGggPSBmdW5jdGlvbiBwYXJzZVBhdGgocGF0aCkge1xuICB2YXIgcGF0aG5hbWUgPSBwYXRoIHx8ICcvJztcbiAgdmFyIHNlYXJjaCA9ICcnO1xuICB2YXIgaGFzaCA9ICcnO1xuXG4gIHZhciBoYXNoSW5kZXggPSBwYXRobmFtZS5pbmRleE9mKCcjJyk7XG4gIGlmIChoYXNoSW5kZXggIT09IC0xKSB7XG4gICAgaGFzaCA9IHBhdGhuYW1lLnN1YnN0cihoYXNoSW5kZXgpO1xuICAgIHBhdGhuYW1lID0gcGF0aG5hbWUuc3Vic3RyKDAsIGhhc2hJbmRleCk7XG4gIH1cblxuICB2YXIgc2VhcmNoSW5kZXggPSBwYXRobmFtZS5pbmRleE9mKCc/Jyk7XG4gIGlmIChzZWFyY2hJbmRleCAhPT0gLTEpIHtcbiAgICBzZWFyY2ggPSBwYXRobmFtZS5zdWJzdHIoc2VhcmNoSW5kZXgpO1xuICAgIHBhdGhuYW1lID0gcGF0aG5hbWUuc3Vic3RyKDAsIHNlYXJjaEluZGV4KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWU6IHBhdGhuYW1lLFxuICAgIHNlYXJjaDogc2VhcmNoID09PSAnPycgPyAnJyA6IHNlYXJjaCxcbiAgICBoYXNoOiBoYXNoID09PSAnIycgPyAnJyA6IGhhc2hcbiAgfTtcbn07XG5cbnZhciBjcmVhdGVQYXRoID0gZXhwb3J0cy5jcmVhdGVQYXRoID0gZnVuY3Rpb24gY3JlYXRlUGF0aChsb2NhdGlvbikge1xuICB2YXIgcGF0aG5hbWUgPSBsb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgIHNlYXJjaCA9IGxvY2F0aW9uLnNlYXJjaCxcbiAgICAgIGhhc2ggPSBsb2NhdGlvbi5oYXNoO1xuXG5cbiAgdmFyIHBhdGggPSBwYXRobmFtZSB8fCAnLyc7XG5cbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2ggIT09ICc/JykgcGF0aCArPSBzZWFyY2guY2hhckF0KDApID09PSAnPycgPyBzZWFyY2ggOiAnPycgKyBzZWFyY2g7XG5cbiAgaWYgKGhhc2ggJiYgaGFzaCAhPT0gJyMnKSBwYXRoICs9IGhhc2guY2hhckF0KDApID09PSAnIycgPyBoYXNoIDogJyMnICsgaGFzaDtcblxuICByZXR1cm4gcGF0aDtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2hpc3RvcnkvUGF0aFV0aWxzLmpzIiwiaW1wb3J0ICcuL2NvbXBvbmVudHMvZW1pdHRlcidcblxuaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJ1xuXG5pbXBvcnQgJ3BhcnRpYWxzL3Bvc3QtdGFiJ1xuaW1wb3J0ICdwYXJ0aWFscy9zaWRlLWJhci1oZWFkZXInXG5pbXBvcnQgJ3BhcnRpYWxzL3NpZGUtYmFyLWJvZHknXG5pbXBvcnQgJ3BhcnRpYWxzL2Zvb3RlcidcbmltcG9ydCAncGFydGlhbHMvcG9zdCdcbmltcG9ydCAncGFydGlhbHMvcG9zdC1uYXYnXG5pbXBvcnQgJ3BhcnRpYWxzL2hvbWUnXG5pbXBvcnQgJ3BhcnRpYWxzL2F1dGhvcidcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29kZXIuanMiLCJpbXBvcnQgbWl0dCBmcm9tICdtaXR0J1xud2luZG93LmVtaXR0ZXIgPSBtaXR0KClcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9lbWl0dGVyL2luZGV4LmpzIiwiLy8gICAgICBcbi8vIEFuIGV2ZW50IGhhbmRsZXIgY2FuIHRha2UgYW4gb3B0aW9uYWwgZXZlbnQgYXJndW1lbnRcbi8vIGFuZCBzaG91bGQgbm90IHJldHVybiBhIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbi8vIEFuIGFycmF5IG9mIGFsbCBjdXJyZW50bHkgcmVnaXN0ZXJlZCBldmVudCBoYW5kbGVycyBmb3IgYSB0eXBlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuLy8gQSBtYXAgb2YgZXZlbnQgdHlwZXMgYW5kIHRoZWlyIGNvcnJlc3BvbmRpbmcgZXZlbnQgaGFuZGxlcnMuXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIFxuXG4vKiogTWl0dDogVGlueSAofjIwMGIpIGZ1bmN0aW9uYWwgZXZlbnQgZW1pdHRlciAvIHB1YnN1Yi5cbiAqICBAbmFtZSBtaXR0XG4gKiAgQHJldHVybnMge01pdHR9XG4gKi9cbmZ1bmN0aW9uIG1pdHQoYWxsICAgICAgICAgICAgICAgICApIHtcblx0YWxsID0gYWxsIHx8IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cblx0cmV0dXJuIHtcblx0XHQvKipcblx0XHQgKiBSZWdpc3RlciBhbiBldmVudCBoYW5kbGVyIGZvciB0aGUgZ2l2ZW4gdHlwZS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSAge1N0cmluZ30gdHlwZVx0VHlwZSBvZiBldmVudCB0byBsaXN0ZW4gZm9yLCBvciBgXCIqXCJgIGZvciBhbGwgZXZlbnRzXG5cdFx0ICogQHBhcmFtICB7RnVuY3Rpb259IGhhbmRsZXIgRnVuY3Rpb24gdG8gY2FsbCBpbiByZXNwb25zZSB0byBnaXZlbiBldmVudFxuXHRcdCAqIEBtZW1iZXJPZiBtaXR0XG5cdFx0ICovXG5cdFx0b246IGZ1bmN0aW9uIG9uKHR5cGUgICAgICAgICwgaGFuZGxlciAgICAgICAgICAgICAgKSB7XG5cdFx0XHQoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcik7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIFJlbW92ZSBhbiBldmVudCBoYW5kbGVyIGZvciB0aGUgZ2l2ZW4gdHlwZS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSAge1N0cmluZ30gdHlwZVx0VHlwZSBvZiBldmVudCB0byB1bnJlZ2lzdGVyIGBoYW5kbGVyYCBmcm9tLCBvciBgXCIqXCJgXG5cdFx0ICogQHBhcmFtICB7RnVuY3Rpb259IGhhbmRsZXIgSGFuZGxlciBmdW5jdGlvbiB0byByZW1vdmVcblx0XHQgKiBAbWVtYmVyT2YgbWl0dFxuXHRcdCAqL1xuXHRcdG9mZjogZnVuY3Rpb24gb2ZmKHR5cGUgICAgICAgICwgaGFuZGxlciAgICAgICAgICAgICAgKSB7XG5cdFx0XHRpZiAoYWxsW3R5cGVdKSB7XG5cdFx0XHRcdGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBJbnZva2UgYWxsIGhhbmRsZXJzIGZvciB0aGUgZ2l2ZW4gdHlwZS5cblx0XHQgKiBJZiBwcmVzZW50LCBgXCIqXCJgIGhhbmRsZXJzIGFyZSBpbnZva2VkIGFmdGVyIHR5cGUtbWF0Y2hlZCBoYW5kbGVycy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlICBUaGUgZXZlbnQgdHlwZSB0byBpbnZva2Vcblx0XHQgKiBAcGFyYW0ge0FueX0gW2V2dF0gIEFueSB2YWx1ZSAob2JqZWN0IGlzIHJlY29tbWVuZGVkIGFuZCBwb3dlcmZ1bCksIHBhc3NlZCB0byBlYWNoIGhhbmRsZXJcblx0XHQgKiBAbWVtYmVyb2YgbWl0dFxuXHRcdCAqL1xuXHRcdGVtaXQ6IGZ1bmN0aW9uIGVtaXQodHlwZSAgICAgICAgLCBldnQgICAgICkge1xuXHRcdFx0KGFsbFt0eXBlXSB8fCBbXSkubWFwKGZ1bmN0aW9uIChoYW5kbGVyKSB7IGhhbmRsZXIoZXZ0KTsgfSk7XG5cdFx0XHQoYWxsWycqJ10gfHwgW10pLm1hcChmdW5jdGlvbiAoaGFuZGxlcikgeyBoYW5kbGVyKHR5cGUsIGV2dCk7IH0pO1xuXHRcdH1cblx0fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWl0dDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1pdHQuZXMuanMubWFwXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvbWl0dC9kaXN0L21pdHQuZXMuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy9pbmRleC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgY29uZmlnIGZyb20gJ2NvbmZpZydcbmltcG9ydCAnLi9zdHlsZS5zY3NzJ1xuaW1wb3J0IHsgdGFiU3RvcmUgfSBmcm9tICcjL3N0b3JlcydcbmltcG9ydCBoaXN0b3J5IGZyb20gJyMvaGlzdG9yeSdcbmltcG9ydCB7IGhTY3JvbGwsIGlzUG9zdFBhZ2UgfSBmcm9tICcjL3V0aWxzJ1xuXG4kKGZ1bmN0aW9uKCkge1xuICBpZiAoIWlzUG9zdFBhZ2UoKSkgcmV0dXJuXG5cbiAgbGV0ICRwb3N0VGFicyA9ICQoJyNKLXBvc3QtdGFiJylcbiAgY29uc3QgJHNjcm9sbFdyYXAgPSAkKCcuSi1wb3N0LXRhYi1zY3JvbGxlci13cmFwJylcbiAgY29uc3QgbmRTY3JvbGxXcmFwID0gJHNjcm9sbFdyYXAuZ2V0KDApXG5cbiAgZW1pdHRlci5vbignYWRkLXBvc3QtdGFiJywgcG9zdCA9PiB7XG4gICAgY29uc3QgdGFicyA9IHRhYlN0b3JlLmdldFRhYnMoKVxuICAgIGlmICghdGFicy5maWx0ZXIodGFiID0+IHRhYi5pZCA9PT0gcG9zdC5pZCkubGVuZ3RoKSB7XG4gICAgICB0YWJzLnB1c2goeyAuLi5wb3N0IH0pXG5cbiAgICAgIHRhYlN0b3JlLnNldFRhYnModGFicylcbiAgICB9XG5cbiAgICBlbWl0dGVyLmVtaXQoJ3RhYi1yZWZyZXNoJywgeyAuLi5wb3N0IH0pXG4gIH0pXG5cbiAgZW1pdHRlci5vbigndGFiLXJlZnJlc2gnLCAoYWN0aXZlID0ge30pID0+IHtcbiAgICBjb25zdCBhY3RpdmVJZCA9IGFjdGl2ZS5pZFxuICAgIGNvbnN0IHRhYnMgPSB0YWJTdG9yZS5nZXRUYWJzKClcbiAgICBjb25zdCBjdXJyZW50VGFiID0gdGFiU3RvcmUuY3VycmVudFRhYlxuXG4gICAgY29uc3QgJGFjdGl2ZSA9ICQoJyNKLXBvc3QtdGFiJylcbiAgICAgIC5odG1sKFxuICAgICAgICB0YWJzXG4gICAgICAgICAgLm1hcChcbiAgICAgICAgICAgIHRhYiA9PlxuICAgICAgICAgICAgICBgPGRpdiB0aXRsZT1cIiR7dGFiLnRpdGxlfVwiIGNsYXNzPVwiSi10YWItaXRlbSBsaWdodCBob3Zlci1vcGFjaXR5MSBmbGV4LWl0ZW0wIHNpbmdsZS1saW5lIGl0ZW0gJHthY3RpdmVJZCA9PT0gdGFiLmlkID8gJ2FjdGl2ZScgOiAnJ31cIiBkYXRhLWlkPVwiJHtcbiAgICAgICAgICAgICAgICB0YWIuaWRcbiAgICAgICAgICAgICAgfVwiPiR7dGFiLnRpdGxlfTxpIGNsYXNzPVwiY2xvc2UgSi1wb3N0LXRhYi1jbG9zZSBsaWdodGVyIGhvdmVyLW9wYWNpdHkxXCIgZGF0YS1zbHVnPVwiJHt0YWIuc2x1Z31cIj48L2k+PC9kaXY+YFxuICAgICAgICAgIClcbiAgICAgICAgICAuam9pbignJylcbiAgICAgIClcbiAgICAgIC5maW5kKCcuYWN0aXZlJylcblxuICAgIC8vIG5vdCByZWZldGNoIGN1cnJlbnQgcG9zdFxuICAgIGlmICghY3VycmVudFRhYiB8fCBjdXJyZW50VGFiLmlkICE9PSBhY3RpdmVJZCkge1xuICAgICAgaGlzdG9yeS5wdXNoKGFjdGl2ZS51cmwsIHsgLi4uYWN0aXZlIH0pXG4gICAgICB0YWJTdG9yZS5zZXRDdXJyZW50VGFiKHsgLi4uYWN0aXZlIH0pXG4gICAgfVxuXG4gICAgc2Nyb2xsMnZpZXcoJGFjdGl2ZSlcbiAgfSlcblxuICAkcG9zdFRhYnNcbiAgICAub24oJ2NsaWNrJywgJy5KLXBvc3QtdGFiLWNsb3NlJywgZnVuY3Rpb24oZSkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgdGFiU3RvcmUuZGVsZXRlVGFiSXRlbShcbiAgICAgICAgJCh0aGlzKVxuICAgICAgICAgIC5wYXJlbnQoJy5KLXRhYi1pdGVtJylcbiAgICAgICAgICAuZGF0YSgnaWQnKVxuICAgICAgKVxuICAgIH0pXG4gICAgLm9uKCdjbGljaycsICcuSi10YWItaXRlbScsIGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpXG4gICAgICBpZiAoJHRoaXMuaXMoJy5hY3RpdmUnKSkgcmV0dXJuXG5cbiAgICAgIGNvbnN0IGlkID0gJHRoaXMuZGF0YSgnaWQnKVxuICAgICAgY29uc3QgY3VycmVudFRhYiA9IHRhYlN0b3JlLmdldFRhYnMoKS5maWx0ZXIodGFiID0+IHRhYi5pZCA9PT0gaWQpWzBdIHx8IHt9XG5cbiAgICAgICR0aGlzXG4gICAgICAgIC5hZGRDbGFzcygnYWN0aXZlJylcbiAgICAgICAgLnNpYmxpbmdzKClcbiAgICAgICAgLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgICAgdGFiU3RvcmUuc2V0Q3VycmVudFRhYihjdXJyZW50VGFiKVxuICAgICAgaGlzdG9yeS5wdXNoKGN1cnJlbnRUYWIudXJsLCB7IC4uLmN1cnJlbnRUYWIgfSlcblxuICAgICAgc2Nyb2xsMnZpZXcoJHRoaXMpXG4gICAgfSlcblxuICAvKipcbiAgICogc2Nyb2xsIHNlbGVjdGVkIHRhYiBpdGVtIGludG8gdmlldyBpZiBpdCBpcyBvdXQgb2Ygdmlld1xuICAgKi9cbiAgZnVuY3Rpb24gc2Nyb2xsMnZpZXcoJGFjdGl2ZSkge1xuICAgIC8vIHdyYXAgZWxlbWVudFxuICAgIGNvbnN0IHdyYXBXaWR0aCA9ICRzY3JvbGxXcmFwLndpZHRoKClcbiAgICBjb25zdCB3cmFwU2Nyb2xsTGVmdCA9ICRzY3JvbGxXcmFwLnNjcm9sbExlZnQoKVxuICAgIGNvbnN0IHdyYXBSaWdodCA9IHdyYXBXaWR0aCArIHdyYXBTY3JvbGxMZWZ0XG4gICAgY29uc3QgdGhyZXNob2xkID0gMTBcblxuICAgIC8vIGFjdGl2ZSBlbGVtZW50XG4gICAgY29uc3QgbmRBY3RpdmUgPSAkYWN0aXZlLmdldCgwKVxuICAgIGNvbnN0IGFjdGl2ZVdpZHRoID0gJGFjdGl2ZS5vdXRlcldpZHRoKClcbiAgICBjb25zdCBhY3RpdmVMZWZ0ID0gbmRBY3RpdmUub2Zmc2V0TGVmdFxuICAgIGNvbnN0IGFjdGl2ZVJpZ2h0ID0gYWN0aXZlTGVmdCArIGFjdGl2ZVdpZHRoXG4gICAgaWYgKGFjdGl2ZVJpZ2h0ID4gd3JhcFdpZHRoICsgd3JhcFNjcm9sbExlZnQpIHtcbiAgICAgIG5kU2Nyb2xsV3JhcC5zY3JvbGxMZWZ0ID0gYWN0aXZlUmlnaHQgLSB3cmFwV2lkdGggLSB0aHJlc2hvbGRcbiAgICB9XG4gICAgaWYgKGFjdGl2ZUxlZnQgPD0gd3JhcFNjcm9sbExlZnQpIHtcbiAgICAgIG5kU2Nyb2xsV3JhcC5zY3JvbGxMZWZ0ID0gYWN0aXZlTGVmdCAtIHRocmVzaG9sZFxuICAgIH1cbiAgfVxuXG4gIGhTY3JvbGwoJHNjcm9sbFdyYXAuZ2V0KDApKVxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhcnRpYWxzL3Bvc3QtdGFiL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJ0aGVtZXNcIjpbXCJhYnlzcy1jb2xvclwiLFwiZGFyay1kZWZhdWx0XCIsXCJyZWRcIl19XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi90aGVtZXMvcmVzdWx0Lmpzb25cbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYXJ0aWFscy9wb3N0LXRhYi9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgY29uZmlnIGZyb20gJ2NvbmZpZydcbmNvbnN0IGxzID0gbG9jYWxTdG9yYWdlXG5jb25zdCBsc1RoZW1lS2V5ID0gY29uZmlnLmxzVGhlbWVLZXlcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICB0aGVtZSA9IGxzLmdldEl0ZW0obHNUaGVtZUtleSkgfHwgY29uZmlnLmRlZmF1bHRUaGVtZVxuICBcbiAgc2V0VGhlbWUgKHRoZW1lKSB7XG4gICAgdGhpcy50aGVtZSA9IHRoZW1lXG4gICAgbHMuc2V0SXRlbShsc1RoZW1lS2V5LCB0aGVtZSlcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZXMvVGhlbWVTdG9yZS5qcyIsImltcG9ydCBjb25maWcgZnJvbSAnY29uZmlnJ1xuXG5jb25zdCBscyA9IGxvY2FsU3RvcmFnZVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGN1cnJlbnRUYWIgPSBudWxsXG5cbiAgZ2V0VGFicygpIHtcbiAgICBsZXQgdGFicyA9IGxzLmdldEl0ZW0oY29uZmlnLmxzUG9zdFRhYktleSkgfHwgJydcblxuICAgIHJldHVybiB0YWJzID8gdGFicy5zcGxpdCgnLCcpLm1hcCh0YWIgPT4ge1xuICAgICAgY29uc3QgW2lkLCB0aXRsZSwgdXJsLCBzbHVnXSA9IHRhYi5zcGxpdCgnOicpXG5cbiAgICAgIHJldHVybiB7IGlkLCB0aXRsZSwgdXJsLCBzbHVnIH1cbiAgICB9KSA6IFtdXG4gIH1cblxuICBzZXRUYWJzKHRhYnMpIHtcbiAgICBscy5zZXRJdGVtKFxuICAgICAgY29uZmlnLmxzUG9zdFRhYktleSxcbiAgICAgIHRhYnMubGVuZ3RoID8gdGFicy5tYXAoXG4gICAgICAgIHRhYiA9PiBgJHt0YWIuaWR9OiR7dGFiLnRpdGxlfToke3RhYi51cmx9OiR7dGFiLnNsdWd9YFxuICAgICAgKS5qb2luKCcsJykgOiAnJ1xuICAgIClcbiAgfVxuXG4gIHNldEN1cnJlbnRUYWIodGFiKSB7XG4gICAgdGhpcy5jdXJyZW50VGFiID0gdGFiXG4gIH1cblxuICBkZWxldGVUYWJJdGVtKGlkKSB7XG4gICAgbGV0IHRhYnMgPSB0aGlzLmdldFRhYnMoKVxuICAgIGxldCBuZXh0VGFiID0gbnVsbFxuICAgIGNvbnN0IGlzQ3VycmVudFRhYiA9IGlkID09PSB0aGlzLmN1cnJlbnRUYWIuaWRcblxuICAgIGNvbnN0IGRlbGV0ZWRJZHggPSB0YWJzLmZpbmRJbmRleCh0YWIgPT4gdGFiLmlkID09PSBpZClcbiAgICB0YWJzID0gdGFicy5maWx0ZXIoKHRhYiwgaWR4KSA9PiB0YWIuaWQgIT09IGlkKVxuXG4gICAgdGhpcy5zZXRUYWJzKHRhYnMpXG5cbiAgICBpZiAodGFicy5sZW5ndGgpIHtcbiAgICAgIGlmIChpc0N1cnJlbnRUYWIpIHtcbiAgICAgICAgbmV4dFRhYiA9IGRlbGV0ZWRJZHggPT09IDAgPyB0YWJzWzBdIDogdGFic1tkZWxldGVkSWR4IC0gMV1cbiAgICAgIH1cblxuICAgICAgZW1pdHRlci5lbWl0KCd0YWItcmVmcmVzaCcsIG5leHRUYWIgfHwgdGhpcy5jdXJyZW50VGFiKVxuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhdGlvbi5ocmVmID0gJy8nXG4gICAgfVxuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3Jlcy9UYWJTdG9yZS5qcyIsImltcG9ydCBjb25maWcgZnJvbSAnY29uZmlnJ1xuY29uc3QgbHMgPSBsb2NhbFN0b3JhZ2VcbmNvbnN0IGxzUG9zdHNLZXkgPSBjb25maWcubHNQb3N0c0tleVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGZldGNoUG9zdChpZCkge1xuICAgIGNvbnN0IGNhY2hlID0gdGhpcy5mcm9tQ2FjaGUoaWQpXG5cbiAgICByZXR1cm4gY2FjaGVcbiAgICAgID8gJC5EZWZlcnJlZCgpLnJlc29sdmUoY2FjaGUpXG4gICAgICA6ICQuZ2V0KGdob3N0LnVybC5hcGkoYHBvc3RzLyR7aWR9YCksIHtcbiAgICAgICAgICBpbmNsdWRlOiAnYXV0aG9yJ1xuICAgICAgICB9KVxuICAgICAgICAgIC5mYWlsKGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmRvbmUoZGF0YSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwb3N0ID0gZGF0YS5wb3N0c1swXSB8fCB7fVxuICAgICAgICAgICAgdGhpcy5jYWNoZVBvc3QoaWQsIHBvc3QpXG4gICAgICAgICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFkIHBvc3QgZnJvbSBjYWNoZSBmaXJzdFxuICAgKiBAcGFyYW0ge251bWJlcn0gaWQgLT4gcG9zdCBpZFxuICAgKiAgLSBvbmx5IGNhY2hlIDVtaW5cbiAgICovXG4gIGZyb21DYWNoZShpZCkge1xuICAgIGxldCBsc1Bvc3RzID0gbHMuZ2V0SXRlbShsc1Bvc3RzS2V5KVxuICAgIGxzUG9zdHMgPSBsc1Bvc3RzID8gSlNPTi5wYXJzZShsc1Bvc3RzKSA6IHt9XG5cbiAgICBjb25zdCBwb3N0ID0gbHNQb3N0c1tpZF1cbiAgICBjb25zdCB1c2VhYmxlID0gcG9zdCAmJiArbmV3IERhdGUoKSAtIHBvc3QudGltZXN0YW1wIDw9IDUgKiA2MCAqIDEwMDBcblxuICAgIGlmICh1c2VhYmxlKSB7XG4gICAgICBjb25zb2xlLmluZm8oJ1tQb3N0IHJlYWRlZCBmcm9tIGNhY2hlXTonLCBwb3N0LnRpdGxlKVxuICAgICAgY29uc3QgYXV0aG9yID0gSlNPTi5wYXJzZShwb3N0LmF1dGhvcilcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBvc3RzOiBbeyAuLi5wb3N0LCBhdXRob3IsIGZyb21DYWNoZTogMSB9XVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBkZWxldGVQb3N0RnJvbUNhY2hlKGlkKSB7XG4gICAgbGV0IGxzUG9zdHMgPSBscy5nZXRJdGVtKGxzUG9zdHNLZXkpXG4gICAgbHNQb3N0cyA9IGxzUG9zdHMgPyBKU09OLnBhcnNlKGxzUG9zdHMpIDoge31cbiAgICBjb25zb2xlLmxvZygnW2RlbGV0ZWQgcG9zdCBzdWNjZXNzXTonLCBsc1Bvc3RzW2lkXS50aXRsZSlcblxuICAgIGRlbGV0ZSBsc1Bvc3RzW2lkXVxuXG4gICAgbHMuc2V0SXRlbShsc1Bvc3RzS2V5LCBKU09OLnN0cmluZ2lmeShsc1Bvc3RzKSlcbiAgfVxuXG4gIGNhY2hlUG9zdChpZCwgcG9zdCkge1xuICAgIGlmIChwb3N0LmZyb21DYWNoZSkgcmV0dXJuXG5cbiAgICBjb25zdCB7IGNyZWF0ZWRfYXQsIHRpdGxlLCBodG1sLCBhdXRob3IsIGZlYXR1cmVfaW1hZ2UgfSA9IHBvc3RcbiAgICBsZXQgbHNQb3N0cyA9IGxzLmdldEl0ZW0obHNQb3N0c0tleSlcbiAgICBsc1Bvc3RzID0gbHNQb3N0cyA/IEpTT04ucGFyc2UobHNQb3N0cykgOiB7fVxuXG4gICAgbHNQb3N0c1tpZF0gPSB7XG4gICAgICBjcmVhdGVkX2F0LFxuICAgICAgdGl0bGUsXG4gICAgICBodG1sLFxuICAgICAgYXV0aG9yOiBKU09OLnN0cmluZ2lmeShhdXRob3IpLFxuICAgICAgZmVhdHVyZV9pbWFnZSxcbiAgICAgIHRpbWVzdGFtcDogK25ldyBEYXRlKClcbiAgICB9XG5cbiAgICAvLyBjYWNoZSB1cCB0byA1IHBvc3RzXG4gICAgLy8gZGVsZXRlIHRoZSBvbGRlc3Qgb25lIGlmIG1vcmUgdGhhbiA1XG4gICAgbGV0IGlkcyA9IE9iamVjdC5rZXlzKGxzUG9zdHMpXG4gICAgaWYgKGlkcy5sZW5ndGggPiA1KSB7XG4gICAgICBjb25zdCBzaG91bGREZWxldGVJZCA9IGlkc1xuICAgICAgICAubWFwKGlkID0+ICh7XG4gICAgICAgICAgdGltZXN0YW1wOiBsc1Bvc3RzW2lkXS50aW1lc3RhbXAsXG4gICAgICAgICAgaWRcbiAgICAgICAgfSkpXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLnRpbWVzdGFtcCAtIGIudGltZXN0YW1wKVxuICAgICAgICAubWFwKGl0ZW0gPT4gaXRlbS5pZClcbiAgICAgICAgLnNoaWZ0KClcblxuICAgICAgZGVsZXRlIGxzUG9zdHNbc2hvdWxkRGVsZXRlSWRdXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coaWRzLmxlbmd0aClcbiAgICBscy5zZXRJdGVtKGxzUG9zdHNLZXksIEpTT04uc3RyaW5naWZ5KGxzUG9zdHMpKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmVzL1Bvc3RTdG9yZS5qcyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF9Mb2NhdGlvblV0aWxzID0gcmVxdWlyZSgnLi9Mb2NhdGlvblV0aWxzJyk7XG5cbnZhciBfUGF0aFV0aWxzID0gcmVxdWlyZSgnLi9QYXRoVXRpbHMnKTtcblxudmFyIF9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlciA9IHJlcXVpcmUoJy4vY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXInKTtcblxudmFyIF9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlcik7XG5cbnZhciBfRE9NVXRpbHMgPSByZXF1aXJlKCcuL0RPTVV0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBQb3BTdGF0ZUV2ZW50ID0gJ3BvcHN0YXRlJztcbnZhciBIYXNoQ2hhbmdlRXZlbnQgPSAnaGFzaGNoYW5nZSc7XG5cbnZhciBnZXRIaXN0b3J5U3RhdGUgPSBmdW5jdGlvbiBnZXRIaXN0b3J5U3RhdGUoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5LnN0YXRlIHx8IHt9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gSUUgMTEgc29tZXRpbWVzIHRocm93cyB3aGVuIGFjY2Vzc2luZyB3aW5kb3cuaGlzdG9yeS5zdGF0ZVxuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vUmVhY3RUcmFpbmluZy9oaXN0b3J5L3B1bGwvMjg5XG4gICAgcmV0dXJuIHt9O1xuICB9XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoaXN0b3J5IG9iamVjdCB0aGF0IHVzZXMgdGhlIEhUTUw1IGhpc3RvcnkgQVBJIGluY2x1ZGluZ1xuICogcHVzaFN0YXRlLCByZXBsYWNlU3RhdGUsIGFuZCB0aGUgcG9wc3RhdGUgZXZlbnQuXG4gKi9cbnZhciBjcmVhdGVCcm93c2VySGlzdG9yeSA9IGZ1bmN0aW9uIGNyZWF0ZUJyb3dzZXJIaXN0b3J5KCkge1xuICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KShfRE9NVXRpbHMuY2FuVXNlRE9NLCAnQnJvd3NlciBoaXN0b3J5IG5lZWRzIGEgRE9NJyk7XG5cbiAgdmFyIGdsb2JhbEhpc3RvcnkgPSB3aW5kb3cuaGlzdG9yeTtcbiAgdmFyIGNhblVzZUhpc3RvcnkgPSAoMCwgX0RPTVV0aWxzLnN1cHBvcnRzSGlzdG9yeSkoKTtcbiAgdmFyIG5lZWRzSGFzaENoYW5nZUxpc3RlbmVyID0gISgwLCBfRE9NVXRpbHMuc3VwcG9ydHNQb3BTdGF0ZU9uSGFzaENoYW5nZSkoKTtcblxuICB2YXIgX3Byb3BzJGZvcmNlUmVmcmVzaCA9IHByb3BzLmZvcmNlUmVmcmVzaCxcbiAgICAgIGZvcmNlUmVmcmVzaCA9IF9wcm9wcyRmb3JjZVJlZnJlc2ggPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX3Byb3BzJGZvcmNlUmVmcmVzaCxcbiAgICAgIF9wcm9wcyRnZXRVc2VyQ29uZmlybSA9IHByb3BzLmdldFVzZXJDb25maXJtYXRpb24sXG4gICAgICBnZXRVc2VyQ29uZmlybWF0aW9uID0gX3Byb3BzJGdldFVzZXJDb25maXJtID09PSB1bmRlZmluZWQgPyBfRE9NVXRpbHMuZ2V0Q29uZmlybWF0aW9uIDogX3Byb3BzJGdldFVzZXJDb25maXJtLFxuICAgICAgX3Byb3BzJGtleUxlbmd0aCA9IHByb3BzLmtleUxlbmd0aCxcbiAgICAgIGtleUxlbmd0aCA9IF9wcm9wcyRrZXlMZW5ndGggPT09IHVuZGVmaW5lZCA/IDYgOiBfcHJvcHMka2V5TGVuZ3RoO1xuXG4gIHZhciBiYXNlbmFtZSA9IHByb3BzLmJhc2VuYW1lID8gKDAsIF9QYXRoVXRpbHMuc3RyaXBUcmFpbGluZ1NsYXNoKSgoMCwgX1BhdGhVdGlscy5hZGRMZWFkaW5nU2xhc2gpKHByb3BzLmJhc2VuYW1lKSkgOiAnJztcblxuICB2YXIgZ2V0RE9NTG9jYXRpb24gPSBmdW5jdGlvbiBnZXRET01Mb2NhdGlvbihoaXN0b3J5U3RhdGUpIHtcbiAgICB2YXIgX3JlZiA9IGhpc3RvcnlTdGF0ZSB8fCB7fSxcbiAgICAgICAga2V5ID0gX3JlZi5rZXksXG4gICAgICAgIHN0YXRlID0gX3JlZi5zdGF0ZTtcblxuICAgIHZhciBfd2luZG93JGxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uLFxuICAgICAgICBwYXRobmFtZSA9IF93aW5kb3ckbG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICAgIHNlYXJjaCA9IF93aW5kb3ckbG9jYXRpb24uc2VhcmNoLFxuICAgICAgICBoYXNoID0gX3dpbmRvdyRsb2NhdGlvbi5oYXNoO1xuXG5cbiAgICB2YXIgcGF0aCA9IHBhdGhuYW1lICsgc2VhcmNoICsgaGFzaDtcblxuICAgICgwLCBfd2FybmluZzIuZGVmYXVsdCkoIWJhc2VuYW1lIHx8ICgwLCBfUGF0aFV0aWxzLmhhc0Jhc2VuYW1lKShwYXRoLCBiYXNlbmFtZSksICdZb3UgYXJlIGF0dGVtcHRpbmcgdG8gdXNlIGEgYmFzZW5hbWUgb24gYSBwYWdlIHdob3NlIFVSTCBwYXRoIGRvZXMgbm90IGJlZ2luICcgKyAnd2l0aCB0aGUgYmFzZW5hbWUuIEV4cGVjdGVkIHBhdGggXCInICsgcGF0aCArICdcIiB0byBiZWdpbiB3aXRoIFwiJyArIGJhc2VuYW1lICsgJ1wiLicpO1xuXG4gICAgaWYgKGJhc2VuYW1lKSBwYXRoID0gKDAsIF9QYXRoVXRpbHMuc3RyaXBCYXNlbmFtZSkocGF0aCwgYmFzZW5hbWUpO1xuXG4gICAgcmV0dXJuICgwLCBfTG9jYXRpb25VdGlscy5jcmVhdGVMb2NhdGlvbikocGF0aCwgc3RhdGUsIGtleSk7XG4gIH07XG5cbiAgdmFyIGNyZWF0ZUtleSA9IGZ1bmN0aW9uIGNyZWF0ZUtleSgpIHtcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIGtleUxlbmd0aCk7XG4gIH07XG5cbiAgdmFyIHRyYW5zaXRpb25NYW5hZ2VyID0gKDAsIF9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlcjIuZGVmYXVsdCkoKTtcblxuICB2YXIgc2V0U3RhdGUgPSBmdW5jdGlvbiBzZXRTdGF0ZShuZXh0U3RhdGUpIHtcbiAgICBfZXh0ZW5kcyhoaXN0b3J5LCBuZXh0U3RhdGUpO1xuXG4gICAgaGlzdG9yeS5sZW5ndGggPSBnbG9iYWxIaXN0b3J5Lmxlbmd0aDtcblxuICAgIHRyYW5zaXRpb25NYW5hZ2VyLm5vdGlmeUxpc3RlbmVycyhoaXN0b3J5LmxvY2F0aW9uLCBoaXN0b3J5LmFjdGlvbik7XG4gIH07XG5cbiAgdmFyIGhhbmRsZVBvcFN0YXRlID0gZnVuY3Rpb24gaGFuZGxlUG9wU3RhdGUoZXZlbnQpIHtcbiAgICAvLyBJZ25vcmUgZXh0cmFuZW91cyBwb3BzdGF0ZSBldmVudHMgaW4gV2ViS2l0LlxuICAgIGlmICgoMCwgX0RPTVV0aWxzLmlzRXh0cmFuZW91c1BvcHN0YXRlRXZlbnQpKGV2ZW50KSkgcmV0dXJuO1xuXG4gICAgaGFuZGxlUG9wKGdldERPTUxvY2F0aW9uKGV2ZW50LnN0YXRlKSk7XG4gIH07XG5cbiAgdmFyIGhhbmRsZUhhc2hDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVIYXNoQ2hhbmdlKCkge1xuICAgIGhhbmRsZVBvcChnZXRET01Mb2NhdGlvbihnZXRIaXN0b3J5U3RhdGUoKSkpO1xuICB9O1xuXG4gIHZhciBmb3JjZU5leHRQb3AgPSBmYWxzZTtcblxuICB2YXIgaGFuZGxlUG9wID0gZnVuY3Rpb24gaGFuZGxlUG9wKGxvY2F0aW9uKSB7XG4gICAgaWYgKGZvcmNlTmV4dFBvcCkge1xuICAgICAgZm9yY2VOZXh0UG9wID0gZmFsc2U7XG4gICAgICBzZXRTdGF0ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYWN0aW9uID0gJ1BPUCc7XG5cbiAgICAgIHRyYW5zaXRpb25NYW5hZ2VyLmNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICAgIGlmIChvaykge1xuICAgICAgICAgIHNldFN0YXRlKHsgYWN0aW9uOiBhY3Rpb24sIGxvY2F0aW9uOiBsb2NhdGlvbiB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXZlcnRQb3AobG9jYXRpb24pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHJldmVydFBvcCA9IGZ1bmN0aW9uIHJldmVydFBvcChmcm9tTG9jYXRpb24pIHtcbiAgICB2YXIgdG9Mb2NhdGlvbiA9IGhpc3RvcnkubG9jYXRpb247XG5cbiAgICAvLyBUT0RPOiBXZSBjb3VsZCBwcm9iYWJseSBtYWtlIHRoaXMgbW9yZSByZWxpYWJsZSBieVxuICAgIC8vIGtlZXBpbmcgYSBsaXN0IG9mIGtleXMgd2UndmUgc2VlbiBpbiBzZXNzaW9uU3RvcmFnZS5cbiAgICAvLyBJbnN0ZWFkLCB3ZSBqdXN0IGRlZmF1bHQgdG8gMCBmb3Iga2V5cyB3ZSBkb24ndCBrbm93LlxuXG4gICAgdmFyIHRvSW5kZXggPSBhbGxLZXlzLmluZGV4T2YodG9Mb2NhdGlvbi5rZXkpO1xuXG4gICAgaWYgKHRvSW5kZXggPT09IC0xKSB0b0luZGV4ID0gMDtcblxuICAgIHZhciBmcm9tSW5kZXggPSBhbGxLZXlzLmluZGV4T2YoZnJvbUxvY2F0aW9uLmtleSk7XG5cbiAgICBpZiAoZnJvbUluZGV4ID09PSAtMSkgZnJvbUluZGV4ID0gMDtcblxuICAgIHZhciBkZWx0YSA9IHRvSW5kZXggLSBmcm9tSW5kZXg7XG5cbiAgICBpZiAoZGVsdGEpIHtcbiAgICAgIGZvcmNlTmV4dFBvcCA9IHRydWU7XG4gICAgICBnbyhkZWx0YSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBpbml0aWFsTG9jYXRpb24gPSBnZXRET01Mb2NhdGlvbihnZXRIaXN0b3J5U3RhdGUoKSk7XG4gIHZhciBhbGxLZXlzID0gW2luaXRpYWxMb2NhdGlvbi5rZXldO1xuXG4gIC8vIFB1YmxpYyBpbnRlcmZhY2VcblxuICB2YXIgY3JlYXRlSHJlZiA9IGZ1bmN0aW9uIGNyZWF0ZUhyZWYobG9jYXRpb24pIHtcbiAgICByZXR1cm4gYmFzZW5hbWUgKyAoMCwgX1BhdGhVdGlscy5jcmVhdGVQYXRoKShsb2NhdGlvbik7XG4gIH07XG5cbiAgdmFyIHB1c2ggPSBmdW5jdGlvbiBwdXNoKHBhdGgsIHN0YXRlKSB7XG4gICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KSghKCh0eXBlb2YgcGF0aCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YocGF0aCkpID09PSAnb2JqZWN0JyAmJiBwYXRoLnN0YXRlICE9PSB1bmRlZmluZWQgJiYgc3RhdGUgIT09IHVuZGVmaW5lZCksICdZb3Ugc2hvdWxkIGF2b2lkIHByb3ZpZGluZyBhIDJuZCBzdGF0ZSBhcmd1bWVudCB0byBwdXNoIHdoZW4gdGhlIDFzdCAnICsgJ2FyZ3VtZW50IGlzIGEgbG9jYXRpb24tbGlrZSBvYmplY3QgdGhhdCBhbHJlYWR5IGhhcyBzdGF0ZTsgaXQgaXMgaWdub3JlZCcpO1xuXG4gICAgdmFyIGFjdGlvbiA9ICdQVVNIJztcbiAgICB2YXIgbG9jYXRpb24gPSAoMCwgX0xvY2F0aW9uVXRpbHMuY3JlYXRlTG9jYXRpb24pKHBhdGgsIHN0YXRlLCBjcmVhdGVLZXkoKSwgaGlzdG9yeS5sb2NhdGlvbik7XG5cbiAgICB0cmFuc2l0aW9uTWFuYWdlci5jb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGZ1bmN0aW9uIChvaykge1xuICAgICAgaWYgKCFvaykgcmV0dXJuO1xuXG4gICAgICB2YXIgaHJlZiA9IGNyZWF0ZUhyZWYobG9jYXRpb24pO1xuICAgICAgdmFyIGtleSA9IGxvY2F0aW9uLmtleSxcbiAgICAgICAgICBzdGF0ZSA9IGxvY2F0aW9uLnN0YXRlO1xuXG5cbiAgICAgIGlmIChjYW5Vc2VIaXN0b3J5KSB7XG4gICAgICAgIGdsb2JhbEhpc3RvcnkucHVzaFN0YXRlKHsga2V5OiBrZXksIHN0YXRlOiBzdGF0ZSB9LCBudWxsLCBocmVmKTtcblxuICAgICAgICBpZiAoZm9yY2VSZWZyZXNoKSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBocmVmO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBwcmV2SW5kZXggPSBhbGxLZXlzLmluZGV4T2YoaGlzdG9yeS5sb2NhdGlvbi5rZXkpO1xuICAgICAgICAgIHZhciBuZXh0S2V5cyA9IGFsbEtleXMuc2xpY2UoMCwgcHJldkluZGV4ID09PSAtMSA/IDAgOiBwcmV2SW5kZXggKyAxKTtcblxuICAgICAgICAgIG5leHRLZXlzLnB1c2gobG9jYXRpb24ua2V5KTtcbiAgICAgICAgICBhbGxLZXlzID0gbmV4dEtleXM7XG5cbiAgICAgICAgICBzZXRTdGF0ZSh7IGFjdGlvbjogYWN0aW9uLCBsb2NhdGlvbjogbG9jYXRpb24gfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICgwLCBfd2FybmluZzIuZGVmYXVsdCkoc3RhdGUgPT09IHVuZGVmaW5lZCwgJ0Jyb3dzZXIgaGlzdG9yeSBjYW5ub3QgcHVzaCBzdGF0ZSBpbiBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IEhUTUw1IGhpc3RvcnknKTtcblxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGhyZWY7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIHJlcGxhY2UgPSBmdW5jdGlvbiByZXBsYWNlKHBhdGgsIHN0YXRlKSB7XG4gICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KSghKCh0eXBlb2YgcGF0aCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YocGF0aCkpID09PSAnb2JqZWN0JyAmJiBwYXRoLnN0YXRlICE9PSB1bmRlZmluZWQgJiYgc3RhdGUgIT09IHVuZGVmaW5lZCksICdZb3Ugc2hvdWxkIGF2b2lkIHByb3ZpZGluZyBhIDJuZCBzdGF0ZSBhcmd1bWVudCB0byByZXBsYWNlIHdoZW4gdGhlIDFzdCAnICsgJ2FyZ3VtZW50IGlzIGEgbG9jYXRpb24tbGlrZSBvYmplY3QgdGhhdCBhbHJlYWR5IGhhcyBzdGF0ZTsgaXQgaXMgaWdub3JlZCcpO1xuXG4gICAgdmFyIGFjdGlvbiA9ICdSRVBMQUNFJztcbiAgICB2YXIgbG9jYXRpb24gPSAoMCwgX0xvY2F0aW9uVXRpbHMuY3JlYXRlTG9jYXRpb24pKHBhdGgsIHN0YXRlLCBjcmVhdGVLZXkoKSwgaGlzdG9yeS5sb2NhdGlvbik7XG5cbiAgICB0cmFuc2l0aW9uTWFuYWdlci5jb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGZ1bmN0aW9uIChvaykge1xuICAgICAgaWYgKCFvaykgcmV0dXJuO1xuXG4gICAgICB2YXIgaHJlZiA9IGNyZWF0ZUhyZWYobG9jYXRpb24pO1xuICAgICAgdmFyIGtleSA9IGxvY2F0aW9uLmtleSxcbiAgICAgICAgICBzdGF0ZSA9IGxvY2F0aW9uLnN0YXRlO1xuXG5cbiAgICAgIGlmIChjYW5Vc2VIaXN0b3J5KSB7XG4gICAgICAgIGdsb2JhbEhpc3RvcnkucmVwbGFjZVN0YXRlKHsga2V5OiBrZXksIHN0YXRlOiBzdGF0ZSB9LCBudWxsLCBocmVmKTtcblxuICAgICAgICBpZiAoZm9yY2VSZWZyZXNoKSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoaHJlZik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHByZXZJbmRleCA9IGFsbEtleXMuaW5kZXhPZihoaXN0b3J5LmxvY2F0aW9uLmtleSk7XG5cbiAgICAgICAgICBpZiAocHJldkluZGV4ICE9PSAtMSkgYWxsS2V5c1twcmV2SW5kZXhdID0gbG9jYXRpb24ua2V5O1xuXG4gICAgICAgICAgc2V0U3RhdGUoeyBhY3Rpb246IGFjdGlvbiwgbG9jYXRpb246IGxvY2F0aW9uIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKHN0YXRlID09PSB1bmRlZmluZWQsICdCcm93c2VyIGhpc3RvcnkgY2Fubm90IHJlcGxhY2Ugc3RhdGUgaW4gYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBIVE1MNSBoaXN0b3J5Jyk7XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoaHJlZik7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIGdvID0gZnVuY3Rpb24gZ28obikge1xuICAgIGdsb2JhbEhpc3RvcnkuZ28obik7XG4gIH07XG5cbiAgdmFyIGdvQmFjayA9IGZ1bmN0aW9uIGdvQmFjaygpIHtcbiAgICByZXR1cm4gZ28oLTEpO1xuICB9O1xuXG4gIHZhciBnb0ZvcndhcmQgPSBmdW5jdGlvbiBnb0ZvcndhcmQoKSB7XG4gICAgcmV0dXJuIGdvKDEpO1xuICB9O1xuXG4gIHZhciBsaXN0ZW5lckNvdW50ID0gMDtcblxuICB2YXIgY2hlY2tET01MaXN0ZW5lcnMgPSBmdW5jdGlvbiBjaGVja0RPTUxpc3RlbmVycyhkZWx0YSkge1xuICAgIGxpc3RlbmVyQ291bnQgKz0gZGVsdGE7XG5cbiAgICBpZiAobGlzdGVuZXJDb3VudCA9PT0gMSkge1xuICAgICAgKDAsIF9ET01VdGlscy5hZGRFdmVudExpc3RlbmVyKSh3aW5kb3csIFBvcFN0YXRlRXZlbnQsIGhhbmRsZVBvcFN0YXRlKTtcblxuICAgICAgaWYgKG5lZWRzSGFzaENoYW5nZUxpc3RlbmVyKSAoMCwgX0RPTVV0aWxzLmFkZEV2ZW50TGlzdGVuZXIpKHdpbmRvdywgSGFzaENoYW5nZUV2ZW50LCBoYW5kbGVIYXNoQ2hhbmdlKTtcbiAgICB9IGVsc2UgaWYgKGxpc3RlbmVyQ291bnQgPT09IDApIHtcbiAgICAgICgwLCBfRE9NVXRpbHMucmVtb3ZlRXZlbnRMaXN0ZW5lcikod2luZG93LCBQb3BTdGF0ZUV2ZW50LCBoYW5kbGVQb3BTdGF0ZSk7XG5cbiAgICAgIGlmIChuZWVkc0hhc2hDaGFuZ2VMaXN0ZW5lcikgKDAsIF9ET01VdGlscy5yZW1vdmVFdmVudExpc3RlbmVyKSh3aW5kb3csIEhhc2hDaGFuZ2VFdmVudCwgaGFuZGxlSGFzaENoYW5nZSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBpc0Jsb2NrZWQgPSBmYWxzZTtcblxuICB2YXIgYmxvY2sgPSBmdW5jdGlvbiBibG9jaygpIHtcbiAgICB2YXIgcHJvbXB0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBmYWxzZTtcblxuICAgIHZhciB1bmJsb2NrID0gdHJhbnNpdGlvbk1hbmFnZXIuc2V0UHJvbXB0KHByb21wdCk7XG5cbiAgICBpZiAoIWlzQmxvY2tlZCkge1xuICAgICAgY2hlY2tET01MaXN0ZW5lcnMoMSk7XG4gICAgICBpc0Jsb2NrZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoaXNCbG9ja2VkKSB7XG4gICAgICAgIGlzQmxvY2tlZCA9IGZhbHNlO1xuICAgICAgICBjaGVja0RPTUxpc3RlbmVycygtMSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB1bmJsb2NrKCk7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgbGlzdGVuID0gZnVuY3Rpb24gbGlzdGVuKGxpc3RlbmVyKSB7XG4gICAgdmFyIHVubGlzdGVuID0gdHJhbnNpdGlvbk1hbmFnZXIuYXBwZW5kTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgIGNoZWNrRE9NTGlzdGVuZXJzKDEpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNoZWNrRE9NTGlzdGVuZXJzKC0xKTtcbiAgICAgIHVubGlzdGVuKCk7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgaGlzdG9yeSA9IHtcbiAgICBsZW5ndGg6IGdsb2JhbEhpc3RvcnkubGVuZ3RoLFxuICAgIGFjdGlvbjogJ1BPUCcsXG4gICAgbG9jYXRpb246IGluaXRpYWxMb2NhdGlvbixcbiAgICBjcmVhdGVIcmVmOiBjcmVhdGVIcmVmLFxuICAgIHB1c2g6IHB1c2gsXG4gICAgcmVwbGFjZTogcmVwbGFjZSxcbiAgICBnbzogZ28sXG4gICAgZ29CYWNrOiBnb0JhY2ssXG4gICAgZ29Gb3J3YXJkOiBnb0ZvcndhcmQsXG4gICAgYmxvY2s6IGJsb2NrLFxuICAgIGxpc3RlbjogbGlzdGVuXG4gIH07XG5cbiAgcmV0dXJuIGhpc3Rvcnk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVCcm93c2VySGlzdG9yeTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9jcmVhdGVCcm93c2VySGlzdG9yeS5qcyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIGludmFyaWFudCA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgK1xuICAgICAgICAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJnc1thcmdJbmRleCsrXTsgfSlcbiAgICAgICk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvaW52YXJpYW50L2Jyb3dzZXIuanMiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmxvY2F0aW9uc0FyZUVxdWFsID0gZXhwb3J0cy5jcmVhdGVMb2NhdGlvbiA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZXNvbHZlUGF0aG5hbWUgPSByZXF1aXJlKCdyZXNvbHZlLXBhdGhuYW1lJyk7XG5cbnZhciBfcmVzb2x2ZVBhdGhuYW1lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Jlc29sdmVQYXRobmFtZSk7XG5cbnZhciBfdmFsdWVFcXVhbCA9IHJlcXVpcmUoJ3ZhbHVlLWVxdWFsJyk7XG5cbnZhciBfdmFsdWVFcXVhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YWx1ZUVxdWFsKTtcblxudmFyIF9QYXRoVXRpbHMgPSByZXF1aXJlKCcuL1BhdGhVdGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgY3JlYXRlTG9jYXRpb24gPSBleHBvcnRzLmNyZWF0ZUxvY2F0aW9uID0gZnVuY3Rpb24gY3JlYXRlTG9jYXRpb24ocGF0aCwgc3RhdGUsIGtleSwgY3VycmVudExvY2F0aW9uKSB7XG4gIHZhciBsb2NhdGlvbiA9IHZvaWQgMDtcbiAgaWYgKHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJykge1xuICAgIC8vIFR3by1hcmcgZm9ybTogcHVzaChwYXRoLCBzdGF0ZSlcbiAgICBsb2NhdGlvbiA9ICgwLCBfUGF0aFV0aWxzLnBhcnNlUGF0aCkocGF0aCk7XG4gICAgbG9jYXRpb24uc3RhdGUgPSBzdGF0ZTtcbiAgfSBlbHNlIHtcbiAgICAvLyBPbmUtYXJnIGZvcm06IHB1c2gobG9jYXRpb24pXG4gICAgbG9jYXRpb24gPSBfZXh0ZW5kcyh7fSwgcGF0aCk7XG5cbiAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUgPT09IHVuZGVmaW5lZCkgbG9jYXRpb24ucGF0aG5hbWUgPSAnJztcblxuICAgIGlmIChsb2NhdGlvbi5zZWFyY2gpIHtcbiAgICAgIGlmIChsb2NhdGlvbi5zZWFyY2guY2hhckF0KDApICE9PSAnPycpIGxvY2F0aW9uLnNlYXJjaCA9ICc/JyArIGxvY2F0aW9uLnNlYXJjaDtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYXRpb24uc2VhcmNoID0gJyc7XG4gICAgfVxuXG4gICAgaWYgKGxvY2F0aW9uLmhhc2gpIHtcbiAgICAgIGlmIChsb2NhdGlvbi5oYXNoLmNoYXJBdCgwKSAhPT0gJyMnKSBsb2NhdGlvbi5oYXNoID0gJyMnICsgbG9jYXRpb24uaGFzaDtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYXRpb24uaGFzaCA9ICcnO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZSAhPT0gdW5kZWZpbmVkICYmIGxvY2F0aW9uLnN0YXRlID09PSB1bmRlZmluZWQpIGxvY2F0aW9uLnN0YXRlID0gc3RhdGU7XG4gIH1cblxuICB0cnkge1xuICAgIGxvY2F0aW9uLnBhdGhuYW1lID0gZGVjb2RlVVJJKGxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmIChlIGluc3RhbmNlb2YgVVJJRXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBVUklFcnJvcignUGF0aG5hbWUgXCInICsgbG9jYXRpb24ucGF0aG5hbWUgKyAnXCIgY291bGQgbm90IGJlIGRlY29kZWQuICcgKyAnVGhpcyBpcyBsaWtlbHkgY2F1c2VkIGJ5IGFuIGludmFsaWQgcGVyY2VudC1lbmNvZGluZy4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH1cblxuICBpZiAoa2V5KSBsb2NhdGlvbi5rZXkgPSBrZXk7XG5cbiAgaWYgKGN1cnJlbnRMb2NhdGlvbikge1xuICAgIC8vIFJlc29sdmUgaW5jb21wbGV0ZS9yZWxhdGl2ZSBwYXRobmFtZSByZWxhdGl2ZSB0byBjdXJyZW50IGxvY2F0aW9uLlxuICAgIGlmICghbG9jYXRpb24ucGF0aG5hbWUpIHtcbiAgICAgIGxvY2F0aW9uLnBhdGhuYW1lID0gY3VycmVudExvY2F0aW9uLnBhdGhuYW1lO1xuICAgIH0gZWxzZSBpZiAobG9jYXRpb24ucGF0aG5hbWUuY2hhckF0KDApICE9PSAnLycpIHtcbiAgICAgIGxvY2F0aW9uLnBhdGhuYW1lID0gKDAsIF9yZXNvbHZlUGF0aG5hbWUyLmRlZmF1bHQpKGxvY2F0aW9uLnBhdGhuYW1lLCBjdXJyZW50TG9jYXRpb24ucGF0aG5hbWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBXaGVuIHRoZXJlIGlzIG5vIHByaW9yIGxvY2F0aW9uIGFuZCBwYXRobmFtZSBpcyBlbXB0eSwgc2V0IGl0IHRvIC9cbiAgICBpZiAoIWxvY2F0aW9uLnBhdGhuYW1lKSB7XG4gICAgICBsb2NhdGlvbi5wYXRobmFtZSA9ICcvJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbG9jYXRpb247XG59O1xuXG52YXIgbG9jYXRpb25zQXJlRXF1YWwgPSBleHBvcnRzLmxvY2F0aW9uc0FyZUVxdWFsID0gZnVuY3Rpb24gbG9jYXRpb25zQXJlRXF1YWwoYSwgYikge1xuICByZXR1cm4gYS5wYXRobmFtZSA9PT0gYi5wYXRobmFtZSAmJiBhLnNlYXJjaCA9PT0gYi5zZWFyY2ggJiYgYS5oYXNoID09PSBiLmhhc2ggJiYgYS5rZXkgPT09IGIua2V5ICYmICgwLCBfdmFsdWVFcXVhbDIuZGVmYXVsdCkoYS5zdGF0ZSwgYi5zdGF0ZSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9oaXN0b3J5L0xvY2F0aW9uVXRpbHMuanMiLCJmdW5jdGlvbiBpc0Fic29sdXRlKHBhdGhuYW1lKSB7XG4gIHJldHVybiBwYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJztcbn1cblxuLy8gQWJvdXQgMS41eCBmYXN0ZXIgdGhhbiB0aGUgdHdvLWFyZyB2ZXJzaW9uIG9mIEFycmF5I3NwbGljZSgpXG5mdW5jdGlvbiBzcGxpY2VPbmUobGlzdCwgaW5kZXgpIHtcbiAgZm9yICh2YXIgaSA9IGluZGV4LCBrID0gaSArIDEsIG4gPSBsaXN0Lmxlbmd0aDsgayA8IG47IGkgKz0gMSwgayArPSAxKSB7XG4gICAgbGlzdFtpXSA9IGxpc3Rba107XG4gIH1cblxuICBsaXN0LnBvcCgpO1xufVxuXG4vLyBUaGlzIGltcGxlbWVudGF0aW9uIGlzIGJhc2VkIGhlYXZpbHkgb24gbm9kZSdzIHVybC5wYXJzZVxuZnVuY3Rpb24gcmVzb2x2ZVBhdGhuYW1lKHRvKSB7XG4gIHZhciBmcm9tID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnJztcblxuICB2YXIgdG9QYXJ0cyA9IHRvICYmIHRvLnNwbGl0KCcvJykgfHwgW107XG4gIHZhciBmcm9tUGFydHMgPSBmcm9tICYmIGZyb20uc3BsaXQoJy8nKSB8fCBbXTtcblxuICB2YXIgaXNUb0FicyA9IHRvICYmIGlzQWJzb2x1dGUodG8pO1xuICB2YXIgaXNGcm9tQWJzID0gZnJvbSAmJiBpc0Fic29sdXRlKGZyb20pO1xuICB2YXIgbXVzdEVuZEFicyA9IGlzVG9BYnMgfHwgaXNGcm9tQWJzO1xuXG4gIGlmICh0byAmJiBpc0Fic29sdXRlKHRvKSkge1xuICAgIC8vIHRvIGlzIGFic29sdXRlXG4gICAgZnJvbVBhcnRzID0gdG9QYXJ0cztcbiAgfSBlbHNlIGlmICh0b1BhcnRzLmxlbmd0aCkge1xuICAgIC8vIHRvIGlzIHJlbGF0aXZlLCBkcm9wIHRoZSBmaWxlbmFtZVxuICAgIGZyb21QYXJ0cy5wb3AoKTtcbiAgICBmcm9tUGFydHMgPSBmcm9tUGFydHMuY29uY2F0KHRvUGFydHMpO1xuICB9XG5cbiAgaWYgKCFmcm9tUGFydHMubGVuZ3RoKSByZXR1cm4gJy8nO1xuXG4gIHZhciBoYXNUcmFpbGluZ1NsYXNoID0gdm9pZCAwO1xuICBpZiAoZnJvbVBhcnRzLmxlbmd0aCkge1xuICAgIHZhciBsYXN0ID0gZnJvbVBhcnRzW2Zyb21QYXJ0cy5sZW5ndGggLSAxXTtcbiAgICBoYXNUcmFpbGluZ1NsYXNoID0gbGFzdCA9PT0gJy4nIHx8IGxhc3QgPT09ICcuLicgfHwgbGFzdCA9PT0gJyc7XG4gIH0gZWxzZSB7XG4gICAgaGFzVHJhaWxpbmdTbGFzaCA9IGZhbHNlO1xuICB9XG5cbiAgdmFyIHVwID0gMDtcbiAgZm9yICh2YXIgaSA9IGZyb21QYXJ0cy5sZW5ndGg7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIHBhcnQgPSBmcm9tUGFydHNbaV07XG5cbiAgICBpZiAocGFydCA9PT0gJy4nKSB7XG4gICAgICBzcGxpY2VPbmUoZnJvbVBhcnRzLCBpKTtcbiAgICB9IGVsc2UgaWYgKHBhcnQgPT09ICcuLicpIHtcbiAgICAgIHNwbGljZU9uZShmcm9tUGFydHMsIGkpO1xuICAgICAgdXArKztcbiAgICB9IGVsc2UgaWYgKHVwKSB7XG4gICAgICBzcGxpY2VPbmUoZnJvbVBhcnRzLCBpKTtcbiAgICAgIHVwLS07XG4gICAgfVxuICB9XG5cbiAgaWYgKCFtdXN0RW5kQWJzKSBmb3IgKDsgdXAtLTsgdXApIHtcbiAgICBmcm9tUGFydHMudW5zaGlmdCgnLi4nKTtcbiAgfWlmIChtdXN0RW5kQWJzICYmIGZyb21QYXJ0c1swXSAhPT0gJycgJiYgKCFmcm9tUGFydHNbMF0gfHwgIWlzQWJzb2x1dGUoZnJvbVBhcnRzWzBdKSkpIGZyb21QYXJ0cy51bnNoaWZ0KCcnKTtcblxuICB2YXIgcmVzdWx0ID0gZnJvbVBhcnRzLmpvaW4oJy8nKTtcblxuICBpZiAoaGFzVHJhaWxpbmdTbGFzaCAmJiByZXN1bHQuc3Vic3RyKC0xKSAhPT0gJy8nKSByZXN1bHQgKz0gJy8nO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlc29sdmVQYXRobmFtZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS1wYXRobmFtZS9pbmRleC5qcyIsInZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gdmFsdWVFcXVhbChhLCBiKSB7XG4gIGlmIChhID09PSBiKSByZXR1cm4gdHJ1ZTtcblxuICBpZiAoYSA9PSBudWxsIHx8IGIgPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KGEpKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYikgJiYgYS5sZW5ndGggPT09IGIubGVuZ3RoICYmIGEuZXZlcnkoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICByZXR1cm4gdmFsdWVFcXVhbChpdGVtLCBiW2luZGV4XSk7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgYVR5cGUgPSB0eXBlb2YgYSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoYSk7XG4gIHZhciBiVHlwZSA9IHR5cGVvZiBiID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihiKTtcblxuICBpZiAoYVR5cGUgIT09IGJUeXBlKSByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKGFUeXBlID09PSAnb2JqZWN0Jykge1xuICAgIHZhciBhVmFsdWUgPSBhLnZhbHVlT2YoKTtcbiAgICB2YXIgYlZhbHVlID0gYi52YWx1ZU9mKCk7XG5cbiAgICBpZiAoYVZhbHVlICE9PSBhIHx8IGJWYWx1ZSAhPT0gYikgcmV0dXJuIHZhbHVlRXF1YWwoYVZhbHVlLCBiVmFsdWUpO1xuXG4gICAgdmFyIGFLZXlzID0gT2JqZWN0LmtleXMoYSk7XG4gICAgdmFyIGJLZXlzID0gT2JqZWN0LmtleXMoYik7XG5cbiAgICBpZiAoYUtleXMubGVuZ3RoICE9PSBiS2V5cy5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICAgIHJldHVybiBhS2V5cy5ldmVyeShmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gdmFsdWVFcXVhbChhW2tleV0sIGJba2V5XSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbHVlRXF1YWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3ZhbHVlLWVxdWFsL2luZGV4LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGNyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyID0gZnVuY3Rpb24gY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIoKSB7XG4gIHZhciBwcm9tcHQgPSBudWxsO1xuXG4gIHZhciBzZXRQcm9tcHQgPSBmdW5jdGlvbiBzZXRQcm9tcHQobmV4dFByb21wdCkge1xuICAgICgwLCBfd2FybmluZzIuZGVmYXVsdCkocHJvbXB0ID09IG51bGwsICdBIGhpc3Rvcnkgc3VwcG9ydHMgb25seSBvbmUgcHJvbXB0IGF0IGEgdGltZScpO1xuXG4gICAgcHJvbXB0ID0gbmV4dFByb21wdDtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAocHJvbXB0ID09PSBuZXh0UHJvbXB0KSBwcm9tcHQgPSBudWxsO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIGNvbmZpcm1UcmFuc2l0aW9uVG8gPSBmdW5jdGlvbiBjb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGNhbGxiYWNrKSB7XG4gICAgLy8gVE9ETzogSWYgYW5vdGhlciB0cmFuc2l0aW9uIHN0YXJ0cyB3aGlsZSB3ZSdyZSBzdGlsbCBjb25maXJtaW5nXG4gICAgLy8gdGhlIHByZXZpb3VzIG9uZSwgd2UgbWF5IGVuZCB1cCBpbiBhIHdlaXJkIHN0YXRlLiBGaWd1cmUgb3V0IHRoZVxuICAgIC8vIGJlc3Qgd2F5IHRvIGhhbmRsZSB0aGlzLlxuICAgIGlmIChwcm9tcHQgIT0gbnVsbCkge1xuICAgICAgdmFyIHJlc3VsdCA9IHR5cGVvZiBwcm9tcHQgPT09ICdmdW5jdGlvbicgPyBwcm9tcHQobG9jYXRpb24sIGFjdGlvbikgOiBwcm9tcHQ7XG5cbiAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGdldFVzZXJDb25maXJtYXRpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBnZXRVc2VyQ29uZmlybWF0aW9uKHJlc3VsdCwgY2FsbGJhY2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICgwLCBfd2FybmluZzIuZGVmYXVsdCkoZmFsc2UsICdBIGhpc3RvcnkgbmVlZHMgYSBnZXRVc2VyQ29uZmlybWF0aW9uIGZ1bmN0aW9uIGluIG9yZGVyIHRvIHVzZSBhIHByb21wdCBtZXNzYWdlJyk7XG5cbiAgICAgICAgICBjYWxsYmFjayh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUmV0dXJuIGZhbHNlIGZyb20gYSB0cmFuc2l0aW9uIGhvb2sgdG8gY2FuY2VsIHRoZSB0cmFuc2l0aW9uLlxuICAgICAgICBjYWxsYmFjayhyZXN1bHQgIT09IGZhbHNlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY2FsbGJhY2sodHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBsaXN0ZW5lcnMgPSBbXTtcblxuICB2YXIgYXBwZW5kTGlzdGVuZXIgPSBmdW5jdGlvbiBhcHBlbmRMaXN0ZW5lcihmbikge1xuICAgIHZhciBpc0FjdGl2ZSA9IHRydWU7XG5cbiAgICB2YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiBsaXN0ZW5lcigpIHtcbiAgICAgIGlmIChpc0FjdGl2ZSkgZm4uYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0gIT09IGxpc3RlbmVyO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgbm90aWZ5TGlzdGVuZXJzID0gZnVuY3Rpb24gbm90aWZ5TGlzdGVuZXJzKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgcmV0dXJuIGxpc3RlbmVyLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBzZXRQcm9tcHQ6IHNldFByb21wdCxcbiAgICBjb25maXJtVHJhbnNpdGlvblRvOiBjb25maXJtVHJhbnNpdGlvblRvLFxuICAgIGFwcGVuZExpc3RlbmVyOiBhcHBlbmRMaXN0ZW5lcixcbiAgICBub3RpZnlMaXN0ZW5lcnM6IG5vdGlmeUxpc3RlbmVyc1xuICB9O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2hpc3RvcnkvY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIuanMiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgY2FuVXNlRE9NID0gZXhwb3J0cy5jYW5Vc2VET00gPSAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG52YXIgYWRkRXZlbnRMaXN0ZW5lciA9IGV4cG9ydHMuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnQsIGxpc3RlbmVyKSB7XG4gIHJldHVybiBub2RlLmFkZEV2ZW50TGlzdGVuZXIgPyBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyLCBmYWxzZSkgOiBub2RlLmF0dGFjaEV2ZW50KCdvbicgKyBldmVudCwgbGlzdGVuZXIpO1xufTtcblxudmFyIHJlbW92ZUV2ZW50TGlzdGVuZXIgPSBleHBvcnRzLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50LCBsaXN0ZW5lcikge1xuICByZXR1cm4gbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyID8gbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lciwgZmFsc2UpIDogbm9kZS5kZXRhY2hFdmVudCgnb24nICsgZXZlbnQsIGxpc3RlbmVyKTtcbn07XG5cbnZhciBnZXRDb25maXJtYXRpb24gPSBleHBvcnRzLmdldENvbmZpcm1hdGlvbiA9IGZ1bmN0aW9uIGdldENvbmZpcm1hdGlvbihtZXNzYWdlLCBjYWxsYmFjaykge1xuICByZXR1cm4gY2FsbGJhY2sod2luZG93LmNvbmZpcm0obWVzc2FnZSkpO1xufTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1hbGVydFxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgSFRNTDUgaGlzdG9yeSBBUEkgaXMgc3VwcG9ydGVkLiBUYWtlbiBmcm9tIE1vZGVybml6ci5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKiBodHRwczovL2dpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9ibG9iL21hc3Rlci9mZWF0dXJlLWRldGVjdHMvaGlzdG9yeS5qc1xuICogY2hhbmdlZCB0byBhdm9pZCBmYWxzZSBuZWdhdGl2ZXMgZm9yIFdpbmRvd3MgUGhvbmVzOiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZWFjdC1yb3V0ZXIvaXNzdWVzLzU4NlxuICovXG52YXIgc3VwcG9ydHNIaXN0b3J5ID0gZXhwb3J0cy5zdXBwb3J0c0hpc3RvcnkgPSBmdW5jdGlvbiBzdXBwb3J0c0hpc3RvcnkoKSB7XG4gIHZhciB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xuXG4gIGlmICgodWEuaW5kZXhPZignQW5kcm9pZCAyLicpICE9PSAtMSB8fCB1YS5pbmRleE9mKCdBbmRyb2lkIDQuMCcpICE9PSAtMSkgJiYgdWEuaW5kZXhPZignTW9iaWxlIFNhZmFyaScpICE9PSAtMSAmJiB1YS5pbmRleE9mKCdDaHJvbWUnKSA9PT0gLTEgJiYgdWEuaW5kZXhPZignV2luZG93cyBQaG9uZScpID09PSAtMSkgcmV0dXJuIGZhbHNlO1xuXG4gIHJldHVybiB3aW5kb3cuaGlzdG9yeSAmJiAncHVzaFN0YXRlJyBpbiB3aW5kb3cuaGlzdG9yeTtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGJyb3dzZXIgZmlyZXMgcG9wc3RhdGUgb24gaGFzaCBjaGFuZ2UuXG4gKiBJRTEwIGFuZCBJRTExIGRvIG5vdC5cbiAqL1xudmFyIHN1cHBvcnRzUG9wU3RhdGVPbkhhc2hDaGFuZ2UgPSBleHBvcnRzLnN1cHBvcnRzUG9wU3RhdGVPbkhhc2hDaGFuZ2UgPSBmdW5jdGlvbiBzdXBwb3J0c1BvcFN0YXRlT25IYXNoQ2hhbmdlKCkge1xuICByZXR1cm4gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignVHJpZGVudCcpID09PSAtMTtcbn07XG5cbi8qKlxuICogUmV0dXJucyBmYWxzZSBpZiB1c2luZyBnbyhuKSB3aXRoIGhhc2ggaGlzdG9yeSBjYXVzZXMgYSBmdWxsIHBhZ2UgcmVsb2FkLlxuICovXG52YXIgc3VwcG9ydHNHb1dpdGhvdXRSZWxvYWRVc2luZ0hhc2ggPSBleHBvcnRzLnN1cHBvcnRzR29XaXRob3V0UmVsb2FkVXNpbmdIYXNoID0gZnVuY3Rpb24gc3VwcG9ydHNHb1dpdGhvdXRSZWxvYWRVc2luZ0hhc2goKSB7XG4gIHJldHVybiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdGaXJlZm94JykgPT09IC0xO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgYSBnaXZlbiBwb3BzdGF0ZSBldmVudCBpcyBhbiBleHRyYW5lb3VzIFdlYktpdCBldmVudC5cbiAqIEFjY291bnRzIGZvciB0aGUgZmFjdCB0aGF0IENocm9tZSBvbiBpT1MgZmlyZXMgcmVhbCBwb3BzdGF0ZSBldmVudHNcbiAqIGNvbnRhaW5pbmcgdW5kZWZpbmVkIHN0YXRlIHdoZW4gcHJlc3NpbmcgdGhlIGJhY2sgYnV0dG9uLlxuICovXG52YXIgaXNFeHRyYW5lb3VzUG9wc3RhdGVFdmVudCA9IGV4cG9ydHMuaXNFeHRyYW5lb3VzUG9wc3RhdGVFdmVudCA9IGZ1bmN0aW9uIGlzRXh0cmFuZW91c1BvcHN0YXRlRXZlbnQoZXZlbnQpIHtcbiAgcmV0dXJuIGV2ZW50LnN0YXRlID09PSB1bmRlZmluZWQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdDcmlPUycpID09PSAtMTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2hpc3RvcnkvRE9NVXRpbHMuanMiLCJpbXBvcnQgJy4vc3R5bGUuc2NzcydcbmltcG9ydCBjb25maWcgZnJvbSAnY29uZmlnJ1xuaW1wb3J0IHsgdGhlbWVTdG9yZSB9IGZyb20gJyMvc3RvcmVzJ1xuXG5jb25zdCB0aGVtZXMgPSBjb25maWcudGhlbWVzXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICBjb25zdCAkc2lkZWJhciA9ICQoJyNKLXNpZGViYXItaGVhZGVyJylcbiAgY29uc3QgJGJvZHkgPSAkKCdib2R5JylcbiAgY29uc3QgJHRoZW1lU2VsZWN0b3IgPSAkKCcjSi10aGVtZS1zZWxlY3RvcicpXG4gIGNvbnN0ICRzaWRlYmFyQm9keSA9ICQoJyNKLXNpZGUtYmFyLWJvZHknKVxuICBsZXQgaXNTZWFyY2hTaG93aW5nID0gZmFsc2VcbiAgbGV0IGlzU2lkZUJvZHlTaG93aW5nID0gdHJ1ZVxuXG4gICR0aGVtZVNlbGVjdG9yXG4gICAgLmh0bWwoXG4gICAgICB0aGVtZXNcbiAgICAgICAgLm1hcCh0aGVtZSA9PiB7XG4gICAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IHRoZW1lU3RvcmUudGhlbWUgPT09IHRoZW1lID8gJ3NlbGVjdGVkJyA6ICcnXG4gICAgICAgICAgcmV0dXJuIGA8b3B0aW9uIHZhbHVlPVwiJHt0aGVtZX1cIiAke2lzU2VsZWN0ZWR9PiR7dGhlbWV9PC9vcHRpb24+YFxuICAgICAgICB9KVxuICAgICAgICAuam9pbignJylcbiAgICApXG4gICAgLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKVxuICAgICAgY29uc3QgdGhlbWUgPSAkdGhpcy52YWwoKVxuXG4gICAgICBpZiAodGhlbWUgIT09IHRoZW1lU3RvcmUudGhlbWUpIHtcbiAgICAgICAgJGJvZHkuYWRkQ2xhc3MoJ3RoZW1lLScgKyB0aGVtZSkucmVtb3ZlQ2xhc3MoJ3RoZW1lLScgKyB0aGVtZVN0b3JlLnRoZW1lKVxuICAgICAgICB0aGVtZVN0b3JlLnNldFRoZW1lKHRoZW1lKVxuICAgICAgfVxuICAgIH0pXG5cbiAgJGJvZHkuYWRkQ2xhc3MoJ3RoZW1lLScgKyB0aGVtZVN0b3JlLnRoZW1lKVxuXG4gICRzaWRlYmFyXG4gICAgLm9uKCdjbGljaycsICcuSi1zaWRlYmFyLWxvZ28nLCBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKVxuXG4gICAgICBpZiAoJHRoaXMuaXMoJy5hY3RpdmUnKSkge1xuICAgICAgICBzaWRlYmFyQm9keUhpZGUoKVxuICAgICAgICAkdGhpcy5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNpZGViYXJCb2R5U2hvdygpXG4gICAgICAgIGVtaXR0ZXIuZW1pdCgnc3dpdGNoLXNpZGViYXInLCB7IHRhcmdldDogJ2xvZ28nIH0pXG4gICAgICAgICR0aGlzXG4gICAgICAgICAgLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgICAgICAgIC5zaWJsaW5ncygpXG4gICAgICAgICAgLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgICAgfVxuICAgIH0pXG4gICAgLm9uKCdjbGljaycsICcuSi1zaWRlYmFyLXNlYXJjaCcsIGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpXG5cbiAgICAgIGlmICgkdGhpcy5pcygnLmFjdGl2ZScpKSB7XG4gICAgICAgIHNpZGViYXJCb2R5SGlkZSgpXG4gICAgICAgICR0aGlzLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2lkZWJhckJvZHlTaG93KClcblxuICAgICAgICAkdGhpc1xuICAgICAgICAgIC5hZGRDbGFzcygnYWN0aXZlJylcbiAgICAgICAgICAuc2libGluZ3MoKVxuICAgICAgICAgIC5yZW1vdmVDbGFzcygnYWN0aXZlJylcblxuICAgICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJzZWFyY2gtYm94XCIgKi8gJ3BhcnRpYWxzL3NpZGUtYmFyLWJvZHkvc2VhcmNoLWJveCcpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGVtaXR0ZXIuZW1pdCgnc3dpdGNoLXNpZGViYXInLCB7IHRhcmdldDogJ3NlYXJjaCcgfSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuXG4gIGZ1bmN0aW9uIHNpZGViYXJCb2R5U2hvdygpIHtcbiAgICAkc2lkZWJhckJvZHkucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpXG4gICAgaXNTaWRlQm9keVNob3dpbmcgPSB0cnVlXG4gIH1cbiAgZnVuY3Rpb24gc2lkZWJhckJvZHlIaWRlKCkge1xuICAgICRzaWRlYmFyQm9keS5hZGRDbGFzcygnaGlkZGVuJylcbiAgICBpc1NpZGVCb2R5U2hvd2luZyA9IGZhbHNlXG4gIH1cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYXJ0aWFscy9zaWRlLWJhci1oZWFkZXIvaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGFydGlhbHMvc2lkZS1iYXItaGVhZGVyL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCAnLi9ibG9nLXRyZWUnXG5pbXBvcnQgJy4vc3R5bGUuc2NzcydcblxuJChmdW5jdGlvbigpIHtcbiAgY29uc3QgJHNlYXJjaEJveCA9ICQoJyNKLXNlYXJjaC1ib3gnKVxuICBjb25zdCAkYmxvZ1RyZWUgPSAkKCcjSi1ibG9nLXRyZWUnKVxuICBjb25zdCAkc2VhcmNoSW5wdXQgPSAkc2VhcmNoQm94LmZpbmQoJy5KLWlucHV0LXNlYXJjaCcpXG4gIGNvbnN0ICR0YWdUcmVlID0gJCgnI0otYmxvZy10cmVlJylcblxuICBlbWl0dGVyLm9uKCdzd2l0Y2gtc2lkZWJhcicsICh7IHRhcmdldCB9KSA9PiB7XG4gICAgY29uc3QgaXNTZWFyY2ggPSB0YXJnZXQgPT09ICdzZWFyY2gnXG5cbiAgICBpZiAoaXNTZWFyY2gpIHtcbiAgICAgICRibG9nVHJlZS5oaWRlKClcbiAgICAgICRzZWFyY2hCb3gucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpXG4gICAgICAkc2VhcmNoSW5wdXQuZm9jdXMoKVxuICAgIH0gZWxzZSB7XG4gICAgICAkYmxvZ1RyZWUuc2hvdygpXG4gICAgICAkc2VhcmNoQm94LmFkZENsYXNzKCdoaWRkZW4nKVxuICAgIH1cbiAgfSlcbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYXJ0aWFscy9zaWRlLWJhci1ib2R5L2luZGV4LmpzIiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnXG5pbXBvcnQgaGlzdG9yeSBmcm9tICcjL2hpc3RvcnknXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICBjb25zdCAkdGFnVHJlZSA9ICQoJyNKLWJsb2ctdHJlZScpXG4gIGNvbnN0ICRhbGxQb3N0cyA9ICQoJyNKLXBvc3RzLWFsbC1oaWRkZW4nKVxuICBjb25zdCBwYXRobmFtZSA9IGxvY2F0aW9uLnBhdGhuYW1lXG4gIGNvbnN0ICRib2R5ID0gJCgnYm9keScpXG4gIGNvbnN0ICR1bnRhZ2VkUG9zdHMgPSAkdGFnVHJlZS5maW5kKCcuSi11bnRhZ2VkLXBvc3RzJylcblxuICBjb25zdCB0YWdzID0ge31cbiAgY29uc3QgdW50YWdlZCA9IFtdXG4gICRhbGxQb3N0cy5maW5kKCcuSi1wb3N0JykuZWFjaChmdW5jdGlvbigpIHtcbiAgICBjb25zdCAkcG9zdCA9ICQodGhpcylcbiAgICBjb25zdCBzbHVnID0gJHBvc3QuZGF0YSgnc2x1ZycpXG4gICAgY29uc3QgJHRhZ3MgPSAkcG9zdC5maW5kKCcuSi10YWcnKVxuXG4gICAgaWYgKHBhdGhuYW1lLmluY2x1ZGVzKHNsdWcpKSB7XG4gICAgICAkcG9zdC5hZGRDbGFzcygnYWN0aXZlJylcbiAgICB9XG5cbiAgICBpZiAoJHRhZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICB1bnRhZ2VkLnB1c2goJHBvc3RbMF0ub3V0ZXJIVE1MKVxuICAgIH0gZWxzZSB7XG4gICAgICAkdGFncy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCB0YWcgPSB0aGlzLmlubmVyVGV4dFxuICAgICAgICBpZiAoIXRhZ3NbdGFnXSkge1xuICAgICAgICAgIHRhZ3NbdGFnXSA9IFtdXG4gICAgICAgIH1cblxuICAgICAgICB0YWdzW3RhZ10ucHVzaCgkcG9zdFswXS5vdXRlckhUTUwpXG4gICAgICB9KVxuICAgIH1cbiAgfSlcblxuICAvKipcbiAgICogY29weSBwb3N0cyB0byBjb3JyZXNwb25kaW5nIHRhZ1xuICAgKi9cbiAgJHRhZ1RyZWUuZmluZCgnLkotYmxvZy10cmVlLXBvc3RzJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICBjb25zdCAkdGhpcyA9ICQodGhpcylcbiAgICBjb25zdCBwb3N0cyA9IHRhZ3NbJHRoaXMuZGF0YSgndGFnJyldXG5cbiAgICBpZiAoIXBvc3RzKSB7XG4gICAgICAkdGhpc1xuICAgICAgICAuaHRtbCgnPHVsPjxsaSBjbGFzcz1cImJsb2ctdHJlZS1uby1wb3N0cyBsaWdodGVyXCI+Q29taW5nIHNvb24uLi48L2xpPjwvdWw+JylcbiAgICAgICAgLnBhcmVudCgpXG4gICAgICAgIC5hZGRDbGFzcygncG9zdC1oaWRkZW4nKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgJHRoaXMuaHRtbChwb3N0cy5qb2luKCcnKSkuY3NzKHtcbiAgICAgIGhlaWdodDogMjYgKiBwb3N0cy5sZW5ndGhcbiAgICB9KVxuICB9KVxuXG4gICR1bnRhZ2VkUG9zdHMuaHRtbCh1bnRhZ2VkLmpvaW4oJycpKVxuXG4gIGNvbnN0ICRwb3N0cyA9ICQoJy5KLWJsb2ctdHJlZS10YWdzIC5KLXBvc3QnKVxuXG4gIC8vIGV2ZW50IGJpbmRpbmdcbiAgJHRhZ1RyZWVcbiAgICAuYWRkQ2xhc3MoJ2xvYWRpbmctaGlkZGVuJylcbiAgICAub24oJ2NsaWNrJywgJy5KLWJsb2ctdHJlZS10YWduYW1lJywgZnVuY3Rpb24oKSB7XG4gICAgICAkKHRoaXMpXG4gICAgICAgIC5wYXJlbnQoKVxuICAgICAgICAudG9nZ2xlQ2xhc3MoJ3Bvc3QtaGlkZGVuJylcbiAgICB9KVxuICAgIC5vbignY2xpY2snLCAnLkotZ28ycG9zdCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKVxuXG4gICAgICBpZiAoJGJvZHkuaXMoJy5ob21lLXRlbXBsYXRlJykpIHJldHVyblxuXG4gICAgICBpZiAoJHRoaXMucGFyZW50cygnLkotcG9zdCcpLmlzKCcuYWN0aXZlJykpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBpZCA9ICR0aGlzLmRhdGEoJ2lkJylcbiAgICAgIGNvbnN0IHVybCA9ICR0aGlzLmF0dHIoJ2hyZWYnKVxuXG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGVtaXR0ZXIuZW1pdCgnYWRkLXBvc3QtdGFiJywge1xuICAgICAgICBpZCxcbiAgICAgICAgdXJsLFxuICAgICAgICB0aXRsZTogJHRoaXMuYXR0cigndGl0bGUnKSxcbiAgICAgICAgc2x1ZzogJHRoaXMucGFyZW50cygnLkotcG9zdCcpLmRhdGEoJ3NsdWcnKVxuICAgICAgfSlcbiAgICB9KVxuXG4gIGhpc3RvcnkubGlzdGVuKGxvY2F0aW9uID0+IHtcbiAgICBjb25zdCBuZXh0VGFiID0gbG9jYXRpb24uc3RhdGVcblxuICAgICRwb3N0c1xuICAgICAgLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgICAgLmZpbHRlcigoaWR4LCBwb3N0KSA9PiB7XG4gICAgICAgIHJldHVybiAkKHBvc3QpLmRhdGEoJ3NsdWcnKSA9PT0gbmV4dFRhYi5zbHVnXG4gICAgICB9KVxuICAgICAgLmFkZENsYXNzKCdhY3RpdmUnKVxuICB9KVxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhcnRpYWxzL3NpZGUtYmFyLWJvZHkvYmxvZy10cmVlL2luZGV4LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhcnRpYWxzL3NpZGUtYmFyLWJvZHkvYmxvZy10cmVlL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYXJ0aWFscy9zaWRlLWJhci1ib2R5L3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xuXG4kKGZ1bmN0aW9uKCkge1xuICBjb25zdCAkcmVhZGluZ1RpbWUgPSAkKFwiLkotcmVhZGluZy10aW1lXCIpO1xuXG4gIGVtaXR0ZXIub24oXCJyZWZyZXNoLXJlYWRpbmctdGltZVwiLCAoeyB0aW1lIH0pID0+IHtcbiAgICAkcmVhZGluZ1RpbWUuaHRtbCh0aW1lKTtcbiAgfSk7XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhcnRpYWxzL2Zvb3Rlci9pbmRleC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYXJ0aWFscy9mb290ZXIvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnXG5pbXBvcnQgaGlzdG9yeSBmcm9tICcjL2hpc3RvcnknXG5pbXBvcnQgeyBwb3N0U3RvcmUgfSBmcm9tICcjL3N0b3JlcydcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tICcjL3V0aWxzJ1xuXG4kKGZ1bmN0aW9uKCkge1xuICBjb25zdCAkYm9keSA9ICQoJ2JvZHknKVxuICBjb25zdCAkcG9zdCA9ICQoJyNKLXBvc3QnKVxuICBjb25zdCAkdGl0bGUgPSAkcG9zdC5maW5kKCcuSi1wb3N0LXRpdGxlJylcbiAgY29uc3QgJGNvbnRlbnQgPSAkcG9zdC5maW5kKCcuSi1wb3N0LWNvbnRlbnQnKVxuICBjb25zdCAkbWV0YSA9ICRwb3N0LmZpbmQoJy5KLXBvc3QtbWV0YScpXG4gIGNvbnN0ICRmZWF0dXJlSW1hZ2UgPSAkcG9zdC5maW5kKCcuSi1wb3N0LWZlYXR1cmUtaW1hZ2UnKVxuXG4gIGlmICgkKCdib2R5JykuaXMoJy5wb3N0LXRlbXBsYXRlJykpIHtcbiAgICBlbWl0dGVyLmVtaXQoJ2FkZC1wb3N0LXRhYicsIHtcbiAgICAgIGlkOiAkcG9zdC5kYXRhKCdpZCcpLFxuICAgICAgdGl0bGU6ICRwb3N0LmRhdGEoJ3RpdGxlJyksXG4gICAgICBzbHVnOiAkcG9zdC5kYXRhKCdzbHVnJyksXG4gICAgICB1cmw6ICRwb3N0LmRhdGEoJ3VybCcpXG4gICAgfSlcblxuICAgIGVtaXR0ZXIuZW1pdCgncmVmcmVzaC1yZWFkaW5nLXRpbWUnLCB7XG4gICAgICB0aW1lOiAkKCcuSi1yZWFkaW5nLXRpbWUtaGlkZGVuJykuaHRtbCgpXG4gICAgfSlcbiAgfVxuXG4gIGhpc3RvcnkubGlzdGVuKChsb2NhdGlvbiwgYWN0aW9uKSA9PiB7XG4gICAgY29uc3QgcG9zdElkID0gbG9jYXRpb24uc3RhdGUuaWRcblxuICAgIHBvc3RJZCAmJlxuICAgICAgcG9zdFN0b3JlLmZldGNoUG9zdChwb3N0SWQpLmRvbmUoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBjb25zdCBwb3N0ID0gZGF0YS5wb3N0c1swXSB8fCB7fVxuICAgICAgICBjb25zdCB7IGNyZWF0ZWRfYXQsIHRpdGxlLCBodG1sLCBhdXRob3IsIGZlYXR1cmVfaW1hZ2UgfSA9IHBvc3RcblxuICAgICAgICAkdGl0bGUuaHRtbCh0aXRsZSlcbiAgICAgICAgJGNvbnRlbnQuaHRtbChodG1sKVxuICAgICAgICAkbWV0YS5odG1sKGBQb3N0ZWQgYnkgPGEgaHJlZj1cIi9hdXRob3IvJHthdXRob3Iuc2x1Z30vXCI+JHthdXRob3IubmFtZX08L2E+IG9uICR7Zm9ybWF0RGF0ZSgnJFkuJE0uJGQnLCBjcmVhdGVkX2F0KX1gKVxuICAgICAgICAkZmVhdHVyZUltYWdlW2ZlYXR1cmVfaW1hZ2UgPyAncmVtb3ZlQ2xhc3MnIDogJ2FkZENsYXNzJ10oJ2hpZGRlbicpLmZpbmQoJ2ZpZ3VyZScpLmNzcyh7XG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7ZmVhdHVyZV9pbWFnZX0pYFxuICAgICAgICB9KVxuICAgICAgICBlbWl0dGVyLmVtaXQoJ3JlZnJlc2gtcmVhZGluZy10aW1lJywge1xuICAgICAgICAgIHRpbWU6ICcnXG4gICAgICAgIH0pXG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gdGl0bGVcbiAgICAgIH0pXG4gIH0pXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFydGlhbHMvcG9zdC9pbmRleC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYXJ0aWFscy9wb3N0L3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYXJ0aWFscy9wb3N0LW5hdi9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGFydGlhbHMvaG9tZS9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGFydGlhbHMvYXV0aG9yL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=