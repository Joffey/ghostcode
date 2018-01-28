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
  const origin = location.origin;

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

      const { created_at, title, html, author, feature_image, comment_id, url } = post;

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

      'function' === typeof window.refreshComment && window.refreshComment(`ghost-${comment_id}`, origin + url, title);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODY1Y2FkMTE3NjdhNDk2NGNhNTEiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9oaXN0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy93YXJuaW5nL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9QYXRoVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2VtaXR0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21pdHQvZGlzdC9taXR0LmVzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9wYXJ0aWFscy9wb3N0LXRhYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvcmVzdWx0Lmpzb24iLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvcG9zdC10YWIvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmVzL1RoZW1lU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3Jlcy9UYWJTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmVzL1Bvc3RTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9jcmVhdGVCcm93c2VySGlzdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW52YXJpYW50L2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hpc3RvcnkvTG9jYXRpb25VdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS1wYXRobmFtZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsdWUtZXF1YWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hpc3RvcnkvY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hpc3RvcnkvRE9NVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvc2lkZS1iYXItaGVhZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhcnRpYWxzL3NpZGUtYmFyLWhlYWRlci9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3BhcnRpYWxzL3NpZGUtYmFyLWJvZHkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvc2lkZS1iYXItYm9keS9ibG9nLXRyZWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvc2lkZS1iYXItYm9keS9ibG9nLXRyZWUvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9wYXJ0aWFscy9zaWRlLWJhci1ib2R5L3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvZm9vdGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhcnRpYWxzL2Zvb3Rlci9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3BhcnRpYWxzL3Bvc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvcG9zdC9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3BhcnRpYWxzL3Bvc3QtbmF2L3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvaG9tZS9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3BhcnRpYWxzL2F1dGhvci9zdHlsZS5zY3NzIl0sIm5hbWVzIjpbInRoZW1lcyIsImxzUG9zdFRhYktleSIsImxzVGhlbWVLZXkiLCJsc1Bvc3RzS2V5IiwiZGVmYXVsdFRoZW1lIiwiY3JlYXRlSGlzdG9yeSIsInRoZW1lU3RvcmUiLCJ0YWJTdG9yZSIsInBvc3RTdG9yZSIsIndpbmRvdyIsInN0b3JlcyIsIiRib2R5IiwiJCIsImlzSG9tZVBhZ2UiLCJpcyIsImlzUG9zdFBhZ2UiLCJoU2Nyb2xsIiwiZWwiLCJjb25zb2xlIiwiZXJyb3IiLCJhZGRFdmVudExpc3RlbmVyIiwid2hlZWwiLCJlIiwiZGVsdGEiLCJ3aGVlbERlbHRhIiwiZGVsdGFZIiwic2Nyb2xsTGVmdCIsInByZXZlbnREZWZhdWx0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImZvcm1hdCIsInRlbXBsYXRlIiwidmFycyIsInJlcGxhY2UiLCJfIiwibmFtZSIsInZhbHVlIiwidHJpbSIsInRvTGVuIiwic291cmNlIiwibGVuIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJqb2luIiwiY2FsbCIsImxlbmd0aCIsInNsaWNlIiwiZm9ybWF0RGF0ZSIsImRhdGUiLCJrZXkiLCJEYXRlIiwiREFZIiwiWSIsImdldEZ1bGxZZWFyIiwieSIsIk0iLCJnZXRNb250aCIsImQiLCJnZXREYXRlIiwiRCIsImdldERheSIsIkgiLCJnZXRIb3VycyIsIm0iLCJnZXRNaW51dGVzIiwicyIsImdldFNlY29uZHMiLCJ3YXJuaW5nIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiY29uZGl0aW9uIiwiYXJncyIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsIkVycm9yIiwidGVzdCIsImFyZ0luZGV4IiwibWVzc2FnZSIsIngiLCJtb2R1bGUiLCJleHBvcnRzIiwiY2FjaGVkU2V0VGltZW91dCIsImNhY2hlZENsZWFyVGltZW91dCIsImRlZmF1bHRTZXRUaW1vdXQiLCJkZWZhdWx0Q2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsInJ1blRpbWVvdXQiLCJmdW4iLCJydW5DbGVhclRpbWVvdXQiLCJtYXJrZXIiLCJxdWV1ZSIsImRyYWluaW5nIiwiY3VycmVudFF1ZXVlIiwicXVldWVJbmRleCIsImNsZWFuVXBOZXh0VGljayIsImNvbmNhdCIsImRyYWluUXVldWUiLCJ0aW1lb3V0IiwicnVuIiwibmV4dFRpY2siLCJpIiwicHVzaCIsIkl0ZW0iLCJhcnJheSIsImFwcGx5IiwidGl0bGUiLCJicm93c2VyIiwiYXJndiIsInZlcnNpb24iLCJ2ZXJzaW9ucyIsIm5vb3AiLCJvbiIsImFkZExpc3RlbmVyIiwib25jZSIsIm9mZiIsInJlbW92ZUxpc3RlbmVyIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiZW1pdCIsInByZXBlbmRMaXN0ZW5lciIsInByZXBlbmRPbmNlTGlzdGVuZXIiLCJsaXN0ZW5lcnMiLCJiaW5kaW5nIiwiY3dkIiwiY2hkaXIiLCJkaXIiLCJ1bWFzayIsIl9fZXNNb2R1bGUiLCJhZGRMZWFkaW5nU2xhc2giLCJwYXRoIiwiY2hhckF0Iiwic3RyaXBMZWFkaW5nU2xhc2giLCJzdWJzdHIiLCJoYXNCYXNlbmFtZSIsInByZWZpeCIsIlJlZ0V4cCIsInN0cmlwQmFzZW5hbWUiLCJzdHJpcFRyYWlsaW5nU2xhc2giLCJwYXJzZVBhdGgiLCJwYXRobmFtZSIsInNlYXJjaCIsImhhc2giLCJoYXNoSW5kZXgiLCJpbmRleE9mIiwic2VhcmNoSW5kZXgiLCJjcmVhdGVQYXRoIiwibG9jYXRpb24iLCJlbWl0dGVyIiwibWl0dCIsImFsbCIsIk9iamVjdCIsImNyZWF0ZSIsInR5cGUiLCJoYW5kbGVyIiwic3BsaWNlIiwiZXZ0IiwibWFwIiwiJHBvc3RUYWJzIiwiJHNjcm9sbFdyYXAiLCJuZFNjcm9sbFdyYXAiLCJnZXQiLCJwb3N0IiwidGFicyIsImdldFRhYnMiLCJmaWx0ZXIiLCJ0YWIiLCJpZCIsInNldFRhYnMiLCJhY3RpdmUiLCJhY3RpdmVJZCIsImN1cnJlbnRUYWIiLCIkYWN0aXZlIiwiaHRtbCIsInNsdWciLCJmaW5kIiwiaGlzdG9yeSIsInVybCIsInNldEN1cnJlbnRUYWIiLCJzY3JvbGwydmlldyIsInN0b3BQcm9wYWdhdGlvbiIsImRlbGV0ZVRhYkl0ZW0iLCJwYXJlbnQiLCJkYXRhIiwiJHRoaXMiLCJhZGRDbGFzcyIsInNpYmxpbmdzIiwicmVtb3ZlQ2xhc3MiLCJ3cmFwV2lkdGgiLCJ3aWR0aCIsIndyYXBTY3JvbGxMZWZ0Iiwid3JhcFJpZ2h0IiwidGhyZXNob2xkIiwibmRBY3RpdmUiLCJhY3RpdmVXaWR0aCIsIm91dGVyV2lkdGgiLCJhY3RpdmVMZWZ0Iiwib2Zmc2V0TGVmdCIsImFjdGl2ZVJpZ2h0IiwibHMiLCJsb2NhbFN0b3JhZ2UiLCJjb25maWciLCJ0aGVtZSIsImdldEl0ZW0iLCJzZXRUaGVtZSIsInNldEl0ZW0iLCJzcGxpdCIsIm5leHRUYWIiLCJpc0N1cnJlbnRUYWIiLCJkZWxldGVkSWR4IiwiZmluZEluZGV4IiwiaWR4IiwiaHJlZiIsImZldGNoUG9zdCIsImNhY2hlIiwiZnJvbUNhY2hlIiwiRGVmZXJyZWQiLCJyZXNvbHZlIiwiZ2hvc3QiLCJhcGkiLCJpbmNsdWRlIiwiZmFpbCIsImVyciIsImxvZyIsImRvbmUiLCJwb3N0cyIsImNhY2hlUG9zdCIsImxzUG9zdHMiLCJKU09OIiwicGFyc2UiLCJ1c2VhYmxlIiwidGltZXN0YW1wIiwiaW5mbyIsImF1dGhvciIsImRlbGV0ZVBvc3RGcm9tQ2FjaGUiLCJzdHJpbmdpZnkiLCJpZHMiLCJrZXlzIiwic2hvdWxkRGVsZXRlSWQiLCJzb3J0IiwiYSIsImIiLCJpdGVtIiwic2hpZnQiLCJfdHlwZW9mIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJvYmoiLCJjb25zdHJ1Y3RvciIsIl9leHRlbmRzIiwiYXNzaWduIiwidGFyZ2V0IiwiaGFzT3duUHJvcGVydHkiLCJfd2FybmluZyIsInJlcXVpcmUiLCJfd2FybmluZzIiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiX2ludmFyaWFudCIsIl9pbnZhcmlhbnQyIiwiX0xvY2F0aW9uVXRpbHMiLCJfUGF0aFV0aWxzIiwiX2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyIiwiX2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyMiIsIl9ET01VdGlscyIsImRlZmF1bHQiLCJQb3BTdGF0ZUV2ZW50IiwiSGFzaENoYW5nZUV2ZW50IiwiZ2V0SGlzdG9yeVN0YXRlIiwic3RhdGUiLCJjcmVhdGVCcm93c2VySGlzdG9yeSIsInByb3BzIiwiY2FuVXNlRE9NIiwiZ2xvYmFsSGlzdG9yeSIsImNhblVzZUhpc3RvcnkiLCJzdXBwb3J0c0hpc3RvcnkiLCJuZWVkc0hhc2hDaGFuZ2VMaXN0ZW5lciIsInN1cHBvcnRzUG9wU3RhdGVPbkhhc2hDaGFuZ2UiLCJfcHJvcHMkZm9yY2VSZWZyZXNoIiwiZm9yY2VSZWZyZXNoIiwiX3Byb3BzJGdldFVzZXJDb25maXJtIiwiZ2V0VXNlckNvbmZpcm1hdGlvbiIsImdldENvbmZpcm1hdGlvbiIsIl9wcm9wcyRrZXlMZW5ndGgiLCJrZXlMZW5ndGgiLCJiYXNlbmFtZSIsImdldERPTUxvY2F0aW9uIiwiaGlzdG9yeVN0YXRlIiwiX3JlZiIsIl93aW5kb3ckbG9jYXRpb24iLCJjcmVhdGVMb2NhdGlvbiIsImNyZWF0ZUtleSIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInRyYW5zaXRpb25NYW5hZ2VyIiwic2V0U3RhdGUiLCJuZXh0U3RhdGUiLCJub3RpZnlMaXN0ZW5lcnMiLCJhY3Rpb24iLCJoYW5kbGVQb3BTdGF0ZSIsImV2ZW50IiwiaXNFeHRyYW5lb3VzUG9wc3RhdGVFdmVudCIsImhhbmRsZVBvcCIsImhhbmRsZUhhc2hDaGFuZ2UiLCJmb3JjZU5leHRQb3AiLCJjb25maXJtVHJhbnNpdGlvblRvIiwib2siLCJyZXZlcnRQb3AiLCJmcm9tTG9jYXRpb24iLCJ0b0xvY2F0aW9uIiwidG9JbmRleCIsImFsbEtleXMiLCJmcm9tSW5kZXgiLCJnbyIsImluaXRpYWxMb2NhdGlvbiIsImNyZWF0ZUhyZWYiLCJwdXNoU3RhdGUiLCJwcmV2SW5kZXgiLCJuZXh0S2V5cyIsInJlcGxhY2VTdGF0ZSIsIm4iLCJnb0JhY2siLCJnb0ZvcndhcmQiLCJsaXN0ZW5lckNvdW50IiwiY2hlY2tET01MaXN0ZW5lcnMiLCJpc0Jsb2NrZWQiLCJibG9jayIsInByb21wdCIsInVuYmxvY2siLCJzZXRQcm9tcHQiLCJsaXN0ZW4iLCJsaXN0ZW5lciIsInVubGlzdGVuIiwiYXBwZW5kTGlzdGVuZXIiLCJpbnZhcmlhbnQiLCJjIiwiZiIsImZyYW1lc1RvUG9wIiwibG9jYXRpb25zQXJlRXF1YWwiLCJfcmVzb2x2ZVBhdGhuYW1lIiwiX3Jlc29sdmVQYXRobmFtZTIiLCJfdmFsdWVFcXVhbCIsIl92YWx1ZUVxdWFsMiIsImN1cnJlbnRMb2NhdGlvbiIsImRlY29kZVVSSSIsIlVSSUVycm9yIiwiaXNBYnNvbHV0ZSIsInNwbGljZU9uZSIsImxpc3QiLCJpbmRleCIsImsiLCJwb3AiLCJyZXNvbHZlUGF0aG5hbWUiLCJ0byIsImZyb20iLCJ0b1BhcnRzIiwiZnJvbVBhcnRzIiwiaXNUb0FicyIsImlzRnJvbUFicyIsIm11c3RFbmRBYnMiLCJoYXNUcmFpbGluZ1NsYXNoIiwibGFzdCIsInVwIiwicGFydCIsInVuc2hpZnQiLCJyZXN1bHQiLCJ2YWx1ZUVxdWFsIiwiaXNBcnJheSIsImV2ZXJ5IiwiYVR5cGUiLCJiVHlwZSIsImFWYWx1ZSIsInZhbHVlT2YiLCJiVmFsdWUiLCJhS2V5cyIsImJLZXlzIiwiY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIiLCJuZXh0UHJvbXB0IiwiY2FsbGJhY2siLCJmbiIsImlzQWN0aXZlIiwiX2xlbiIsIl9rZXkiLCJmb3JFYWNoIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwibm9kZSIsImF0dGFjaEV2ZW50IiwiZGV0YWNoRXZlbnQiLCJjb25maXJtIiwidWEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJzdXBwb3J0c0dvV2l0aG91dFJlbG9hZFVzaW5nSGFzaCIsInJlYWR5IiwiJHNpZGViYXIiLCIkdGhlbWVTZWxlY3RvciIsIiRzaWRlYmFyQm9keSIsImlzU2VhcmNoU2hvd2luZyIsImlzU2lkZUJvZHlTaG93aW5nIiwiaXNTZWxlY3RlZCIsInZhbCIsInNpZGViYXJCb2R5SGlkZSIsInNpZGViYXJCb2R5U2hvdyIsInRoZW4iLCIkc2VhcmNoQm94IiwiJGJsb2dUcmVlIiwiJHNlYXJjaElucHV0IiwiJHRhZ1RyZWUiLCJpc1NlYXJjaCIsImhpZGUiLCJmb2N1cyIsInNob3ciLCIkYWxsUG9zdHMiLCIkdW50YWdlZFBvc3RzIiwidGFncyIsInVudGFnZWQiLCJlYWNoIiwiJHBvc3QiLCIkdGFncyIsImluY2x1ZGVzIiwib3V0ZXJIVE1MIiwidGFnIiwiaW5uZXJUZXh0IiwiY3NzIiwiaGVpZ2h0IiwiJHBvc3RzIiwidG9nZ2xlQ2xhc3MiLCJwYXJlbnRzIiwiYXR0ciIsIiRyZWFkaW5nVGltZSIsInRpbWUiLCIkdGl0bGUiLCIkY29udGVudCIsIiRtZXRhIiwiJGZlYXR1cmVJbWFnZSIsIm9yaWdpbiIsInBvc3RJZCIsImNyZWF0ZWRfYXQiLCJmZWF0dXJlX2ltYWdlIiwiY29tbWVudF9pZCIsImJhY2tncm91bmRJbWFnZSIsInJlZnJlc2hDb21tZW50Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLFdBQVcsRUFBRTtBQUN2RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOERBQXNELDZCQUE2QixZQUFZO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0Esa0RBQTBDLG9CQUFvQixXQUFXOztBQUV6RTtBQUNBOzs7Ozs7Ozs7O0FDL0lBOztBQUVBLHlEQUFlO0FBQ2JBLEVBQUEsbUVBRGE7QUFFYkMsZ0JBQWMsaUJBRkQ7QUFHYjtBQUNBQyxjQUFZLGFBSkM7QUFLYkMsY0FBWSxhQUxDO0FBTWJDLGdCQUFjO0FBTkQsQ0FBZixFOzs7Ozs7Ozs7QUNGQTs7QUFFQSx5REFBZSxvRUFBQUMsRUFBZixFOzs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBOztBQUVPLE1BQU1DLGFBQWEsSUFBSSw0REFBSixFQUFuQjtBQUFBO0FBQUE7QUFDQSxNQUFNQyxXQUFXLElBQUksMERBQUosRUFBakI7QUFBQTtBQUFBO0FBQ0EsTUFBTUMsWUFBWSxJQUFJLDJEQUFKLEVBQWxCO0FBQUE7QUFBQTs7QUFFUEMsT0FBT0MsTUFBUCxHQUFnQjtBQUNkSixZQURjO0FBRWRDLFVBRmM7QUFHZEM7QUFIYyxDQUFoQixDOzs7Ozs7O0FDUkE7QUFBQSxNQUFNRyxRQUFRQyxFQUFFLE1BQUYsQ0FBZDs7QUFFTyxNQUFNQyxhQUFhLE1BQU1GLE1BQU1HLEVBQU4sQ0FBUyxnQkFBVCxDQUF6QjtBQUFBO0FBQUE7QUFDQSxNQUFNQyxhQUFhLE1BQU1KLE1BQU1HLEVBQU4sQ0FBUyxnQkFBVCxDQUF6QjtBQUFBO0FBQUE7O0FBRVA7Ozs7Ozs7OztBQVNPLFNBQVNFLE9BQVQsQ0FBaUJDLEVBQWpCLEVBQXFCO0FBQzFCLE1BQUksQ0FBQ0EsRUFBTCxFQUFTO0FBQ1BDLFlBQVFDLEtBQVIsQ0FBYyxrQkFBZDtBQUNBO0FBQ0Q7O0FBRURGLEtBQUdHLGdCQUFILENBQW9CLE9BQXBCLEVBQTZCQyxLQUE3Qjs7QUFFQSxXQUFTQSxLQUFULENBQWVDLENBQWYsRUFBa0I7QUFDaEIsVUFBTUMsUUFBUUQsRUFBRUUsVUFBRixHQUFlRixFQUFFRSxVQUFqQixHQUE4QixDQUFDLENBQUQsR0FBS0YsRUFBRUcsTUFBbkQ7QUFDQVIsT0FBR1MsVUFBSCxJQUFpQixDQUFDSCxLQUFsQjtBQUNBRCxNQUFFSyxjQUFGO0FBQ0Q7O0FBRUQsU0FBTyxNQUFNVixHQUFHVyxtQkFBSCxDQUF1QixPQUF2QixFQUFnQ1AsS0FBaEMsQ0FBYjtBQUNEOztBQUVNLE1BQU1RLFNBQVMsVUFBU0MsUUFBVCxFQUFtQkMsSUFBbkIsRUFBeUI7QUFDN0MsU0FBT0QsU0FBU0UsT0FBVCxDQUFpQixtQkFBakIsRUFBc0MsVUFBU0MsQ0FBVCxFQUFZQyxJQUFaLEVBQWtCO0FBQzdELFFBQUlDLFFBQVFKLEtBQUtHLEtBQUtFLElBQUwsRUFBTCxDQUFaO0FBQ0EsV0FBT0QsU0FBUyxJQUFULEdBQWdCLEVBQWhCLEdBQXFCQSxRQUFRLEVBQXBDO0FBQ0QsR0FITSxDQUFQO0FBSUQsQ0FMTTtBQUFBO0FBQUE7O0FBT1AsTUFBTUUsUUFBUSxVQUFTQyxNQUFULEVBQWlCQyxHQUFqQixFQUFzQjtBQUNsQyxTQUFPLENBQ0xDLE1BQU1DLFNBQU4sQ0FBZ0JDLElBQWhCLENBQXFCQyxJQUFyQixDQUNFO0FBQ0VDLFlBQVFMLE1BQU07QUFEaEIsR0FERixFQUlFLEdBSkYsSUFLSUQsTUFOQyxFQU9MTyxLQVBLLENBT0MsQ0FBQ04sR0FQRixDQUFQO0FBUUQsQ0FURDs7QUFXTyxNQUFNTyxhQUFhLFVBQVNoQixRQUFULEVBQW1CaUIsSUFBbkIsRUFBeUI7QUFDakQsTUFBSSxDQUFDQSxJQUFMLEVBQVcsT0FBTyxFQUFQO0FBQ1hqQixhQUFXQSxTQUFTRSxPQUFULENBQWlCLGVBQWpCLEVBQWtDLFVBQVNDLENBQVQsRUFBWWUsR0FBWixFQUFpQjtBQUM1RCxXQUFPLE9BQU9BLEdBQVAsR0FBYSxHQUFwQjtBQUNELEdBRlUsQ0FBWDtBQUdBRCxTQUFPLElBQUlFLElBQUosQ0FBU0YsSUFBVCxDQUFQO0FBQ0EsTUFBSUcsTUFBTSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixFQUFxQixHQUFyQixFQUEwQixHQUExQixFQUErQixHQUEvQixDQUFWO0FBQ0EsU0FBT3JCLE9BQU9DLFFBQVAsRUFBaUI7QUFDdEJxQixPQUFHZCxNQUFNVSxLQUFLSyxXQUFMLEVBQU4sRUFBMEIsQ0FBMUIsQ0FEbUI7QUFFdEJDLE9BQUdoQixNQUFNVSxLQUFLSyxXQUFMLEVBQU4sRUFBMEIsQ0FBMUIsQ0FGbUI7QUFHdEJFLE9BQUdqQixNQUFNVSxLQUFLUSxRQUFMLEtBQWtCLENBQXhCLEVBQTJCLENBQTNCLENBSG1CO0FBSXRCQyxPQUFHbkIsTUFBTVUsS0FBS1UsT0FBTCxFQUFOLEVBQXNCLENBQXRCLENBSm1CO0FBS3RCQyxPQUFHUixJQUFJSCxLQUFLWSxNQUFMLEVBQUosQ0FMbUI7QUFNdEJDLE9BQUd2QixNQUFNVSxLQUFLYyxRQUFMLEVBQU4sRUFBdUIsQ0FBdkIsQ0FObUI7QUFPdEJDLE9BQUd6QixNQUFNVSxLQUFLZ0IsVUFBTCxFQUFOLEVBQXlCLENBQXpCLENBUG1CO0FBUXRCQyxPQUFHM0IsTUFBTVUsS0FBS2tCLFVBQUwsRUFBTixFQUF5QixDQUF6QjtBQVJtQixHQUFqQixDQUFQO0FBVUQsQ0FqQk0sQzs7Ozs7Ozs7O0FDakRQOzs7Ozs7Ozs7QUFTQTs7QUFFQTs7Ozs7OztBQU9BLElBQUlDLFVBQVUsWUFBVyxDQUFFLENBQTNCOztBQUVBLElBQUlDLFFBQVFDLEdBQVIsQ0FBWUMsUUFBWixLQUF5QixZQUE3QixFQUEyQztBQUN6Q0gsWUFBVSxVQUFTSSxTQUFULEVBQW9CekMsTUFBcEIsRUFBNEIwQyxJQUE1QixFQUFrQztBQUMxQyxRQUFJaEMsTUFBTWlDLFVBQVU1QixNQUFwQjtBQUNBMkIsV0FBTyxJQUFJL0IsS0FBSixDQUFVRCxNQUFNLENBQU4sR0FBVUEsTUFBTSxDQUFoQixHQUFvQixDQUE5QixDQUFQO0FBQ0EsU0FBSyxJQUFJUyxNQUFNLENBQWYsRUFBa0JBLE1BQU1ULEdBQXhCLEVBQTZCUyxLQUE3QixFQUFvQztBQUNsQ3VCLFdBQUt2QixNQUFNLENBQVgsSUFBZ0J3QixVQUFVeEIsR0FBVixDQUFoQjtBQUNEO0FBQ0QsUUFBSW5CLFdBQVc0QyxTQUFmLEVBQTBCO0FBQ3hCLFlBQU0sSUFBSUMsS0FBSixDQUNKLDhEQUNBLGtCQUZJLENBQU47QUFJRDs7QUFFRCxRQUFJN0MsT0FBT2UsTUFBUCxHQUFnQixFQUFoQixJQUF1QixVQUFELENBQWErQixJQUFiLENBQWtCOUMsTUFBbEIsQ0FBMUIsRUFBcUQ7QUFDbkQsWUFBTSxJQUFJNkMsS0FBSixDQUNKLGlFQUNBLHVEQURBLEdBQzBEN0MsTUFGdEQsQ0FBTjtBQUlEOztBQUVELFFBQUksQ0FBQ3lDLFNBQUwsRUFBZ0I7QUFDZCxVQUFJTSxXQUFXLENBQWY7QUFDQSxVQUFJQyxVQUFVLGNBQ1poRCxPQUFPRyxPQUFQLENBQWUsS0FBZixFQUFzQixZQUFXO0FBQy9CLGVBQU91QyxLQUFLSyxVQUFMLENBQVA7QUFDRCxPQUZELENBREY7QUFJQSxVQUFJLE9BQU8xRCxPQUFQLEtBQW1CLFdBQXZCLEVBQW9DO0FBQ2xDQSxnQkFBUUMsS0FBUixDQUFjMEQsT0FBZDtBQUNEO0FBQ0QsVUFBSTtBQUNGO0FBQ0E7QUFDQSxjQUFNLElBQUlILEtBQUosQ0FBVUcsT0FBVixDQUFOO0FBQ0QsT0FKRCxDQUlFLE9BQU1DLENBQU4sRUFBUyxDQUFFO0FBQ2Q7QUFDRixHQW5DRDtBQW9DRDs7QUFFREMsT0FBT0MsT0FBUCxHQUFpQmQsT0FBakIsQzs7Ozs7OztBQzNEQTtBQUNBLElBQUlDLFVBQVVZLE9BQU9DLE9BQVAsR0FBaUIsRUFBL0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSUMsZ0JBQUo7QUFDQSxJQUFJQyxrQkFBSjs7QUFFQSxTQUFTQyxnQkFBVCxHQUE0QjtBQUN4QixVQUFNLElBQUlULEtBQUosQ0FBVSxpQ0FBVixDQUFOO0FBQ0g7QUFDRCxTQUFTVSxtQkFBVCxHQUFnQztBQUM1QixVQUFNLElBQUlWLEtBQUosQ0FBVSxtQ0FBVixDQUFOO0FBQ0g7QUFDQSxhQUFZO0FBQ1QsUUFBSTtBQUNBLFlBQUksT0FBT1csVUFBUCxLQUFzQixVQUExQixFQUFzQztBQUNsQ0osK0JBQW1CSSxVQUFuQjtBQUNILFNBRkQsTUFFTztBQUNISiwrQkFBbUJFLGdCQUFuQjtBQUNIO0FBQ0osS0FORCxDQU1FLE9BQU83RCxDQUFQLEVBQVU7QUFDUjJELDJCQUFtQkUsZ0JBQW5CO0FBQ0g7QUFDRCxRQUFJO0FBQ0EsWUFBSSxPQUFPRyxZQUFQLEtBQXdCLFVBQTVCLEVBQXdDO0FBQ3BDSixpQ0FBcUJJLFlBQXJCO0FBQ0gsU0FGRCxNQUVPO0FBQ0hKLGlDQUFxQkUsbUJBQXJCO0FBQ0g7QUFDSixLQU5ELENBTUUsT0FBTzlELENBQVAsRUFBVTtBQUNSNEQsNkJBQXFCRSxtQkFBckI7QUFDSDtBQUNKLENBbkJBLEdBQUQ7QUFvQkEsU0FBU0csVUFBVCxDQUFvQkMsR0FBcEIsRUFBeUI7QUFDckIsUUFBSVAscUJBQXFCSSxVQUF6QixFQUFxQztBQUNqQztBQUNBLGVBQU9BLFdBQVdHLEdBQVgsRUFBZ0IsQ0FBaEIsQ0FBUDtBQUNIO0FBQ0Q7QUFDQSxRQUFJLENBQUNQLHFCQUFxQkUsZ0JBQXJCLElBQXlDLENBQUNGLGdCQUEzQyxLQUFnRUksVUFBcEUsRUFBZ0Y7QUFDNUVKLDJCQUFtQkksVUFBbkI7QUFDQSxlQUFPQSxXQUFXRyxHQUFYLEVBQWdCLENBQWhCLENBQVA7QUFDSDtBQUNELFFBQUk7QUFDQTtBQUNBLGVBQU9QLGlCQUFpQk8sR0FBakIsRUFBc0IsQ0FBdEIsQ0FBUDtBQUNILEtBSEQsQ0FHRSxPQUFNbEUsQ0FBTixFQUFRO0FBQ04sWUFBSTtBQUNBO0FBQ0EsbUJBQU8yRCxpQkFBaUJ0QyxJQUFqQixDQUFzQixJQUF0QixFQUE0QjZDLEdBQTVCLEVBQWlDLENBQWpDLENBQVA7QUFDSCxTQUhELENBR0UsT0FBTWxFLENBQU4sRUFBUTtBQUNOO0FBQ0EsbUJBQU8yRCxpQkFBaUJ0QyxJQUFqQixDQUFzQixJQUF0QixFQUE0QjZDLEdBQTVCLEVBQWlDLENBQWpDLENBQVA7QUFDSDtBQUNKO0FBR0o7QUFDRCxTQUFTQyxlQUFULENBQXlCQyxNQUF6QixFQUFpQztBQUM3QixRQUFJUix1QkFBdUJJLFlBQTNCLEVBQXlDO0FBQ3JDO0FBQ0EsZUFBT0EsYUFBYUksTUFBYixDQUFQO0FBQ0g7QUFDRDtBQUNBLFFBQUksQ0FBQ1IsdUJBQXVCRSxtQkFBdkIsSUFBOEMsQ0FBQ0Ysa0JBQWhELEtBQXVFSSxZQUEzRSxFQUF5RjtBQUNyRkosNkJBQXFCSSxZQUFyQjtBQUNBLGVBQU9BLGFBQWFJLE1BQWIsQ0FBUDtBQUNIO0FBQ0QsUUFBSTtBQUNBO0FBQ0EsZUFBT1IsbUJBQW1CUSxNQUFuQixDQUFQO0FBQ0gsS0FIRCxDQUdFLE9BQU9wRSxDQUFQLEVBQVM7QUFDUCxZQUFJO0FBQ0E7QUFDQSxtQkFBTzRELG1CQUFtQnZDLElBQW5CLENBQXdCLElBQXhCLEVBQThCK0MsTUFBOUIsQ0FBUDtBQUNILFNBSEQsQ0FHRSxPQUFPcEUsQ0FBUCxFQUFTO0FBQ1A7QUFDQTtBQUNBLG1CQUFPNEQsbUJBQW1CdkMsSUFBbkIsQ0FBd0IsSUFBeEIsRUFBOEIrQyxNQUE5QixDQUFQO0FBQ0g7QUFDSjtBQUlKO0FBQ0QsSUFBSUMsUUFBUSxFQUFaO0FBQ0EsSUFBSUMsV0FBVyxLQUFmO0FBQ0EsSUFBSUMsWUFBSjtBQUNBLElBQUlDLGFBQWEsQ0FBQyxDQUFsQjs7QUFFQSxTQUFTQyxlQUFULEdBQTJCO0FBQ3ZCLFFBQUksQ0FBQ0gsUUFBRCxJQUFhLENBQUNDLFlBQWxCLEVBQWdDO0FBQzVCO0FBQ0g7QUFDREQsZUFBVyxLQUFYO0FBQ0EsUUFBSUMsYUFBYWpELE1BQWpCLEVBQXlCO0FBQ3JCK0MsZ0JBQVFFLGFBQWFHLE1BQWIsQ0FBb0JMLEtBQXBCLENBQVI7QUFDSCxLQUZELE1BRU87QUFDSEcscUJBQWEsQ0FBQyxDQUFkO0FBQ0g7QUFDRCxRQUFJSCxNQUFNL0MsTUFBVixFQUFrQjtBQUNkcUQ7QUFDSDtBQUNKOztBQUVELFNBQVNBLFVBQVQsR0FBc0I7QUFDbEIsUUFBSUwsUUFBSixFQUFjO0FBQ1Y7QUFDSDtBQUNELFFBQUlNLFVBQVVYLFdBQVdRLGVBQVgsQ0FBZDtBQUNBSCxlQUFXLElBQVg7O0FBRUEsUUFBSXJELE1BQU1vRCxNQUFNL0MsTUFBaEI7QUFDQSxXQUFNTCxHQUFOLEVBQVc7QUFDUHNELHVCQUFlRixLQUFmO0FBQ0FBLGdCQUFRLEVBQVI7QUFDQSxlQUFPLEVBQUVHLFVBQUYsR0FBZXZELEdBQXRCLEVBQTJCO0FBQ3ZCLGdCQUFJc0QsWUFBSixFQUFrQjtBQUNkQSw2QkFBYUMsVUFBYixFQUF5QkssR0FBekI7QUFDSDtBQUNKO0FBQ0RMLHFCQUFhLENBQUMsQ0FBZDtBQUNBdkQsY0FBTW9ELE1BQU0vQyxNQUFaO0FBQ0g7QUFDRGlELG1CQUFlLElBQWY7QUFDQUQsZUFBVyxLQUFYO0FBQ0FILG9CQUFnQlMsT0FBaEI7QUFDSDs7QUFFRC9CLFFBQVFpQyxRQUFSLEdBQW1CLFVBQVVaLEdBQVYsRUFBZTtBQUM5QixRQUFJakIsT0FBTyxJQUFJL0IsS0FBSixDQUFVZ0MsVUFBVTVCLE1BQVYsR0FBbUIsQ0FBN0IsQ0FBWDtBQUNBLFFBQUk0QixVQUFVNUIsTUFBVixHQUFtQixDQUF2QixFQUEwQjtBQUN0QixhQUFLLElBQUl5RCxJQUFJLENBQWIsRUFBZ0JBLElBQUk3QixVQUFVNUIsTUFBOUIsRUFBc0N5RCxHQUF0QyxFQUEyQztBQUN2QzlCLGlCQUFLOEIsSUFBSSxDQUFULElBQWM3QixVQUFVNkIsQ0FBVixDQUFkO0FBQ0g7QUFDSjtBQUNEVixVQUFNVyxJQUFOLENBQVcsSUFBSUMsSUFBSixDQUFTZixHQUFULEVBQWNqQixJQUFkLENBQVg7QUFDQSxRQUFJb0IsTUFBTS9DLE1BQU4sS0FBaUIsQ0FBakIsSUFBc0IsQ0FBQ2dELFFBQTNCLEVBQXFDO0FBQ2pDTCxtQkFBV1UsVUFBWDtBQUNIO0FBQ0osQ0FYRDs7QUFhQTtBQUNBLFNBQVNNLElBQVQsQ0FBY2YsR0FBZCxFQUFtQmdCLEtBQW5CLEVBQTBCO0FBQ3RCLFNBQUtoQixHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLZ0IsS0FBTCxHQUFhQSxLQUFiO0FBQ0g7QUFDREQsS0FBSzlELFNBQUwsQ0FBZTBELEdBQWYsR0FBcUIsWUFBWTtBQUM3QixTQUFLWCxHQUFMLENBQVNpQixLQUFULENBQWUsSUFBZixFQUFxQixLQUFLRCxLQUExQjtBQUNILENBRkQ7QUFHQXJDLFFBQVF1QyxLQUFSLEdBQWdCLFNBQWhCO0FBQ0F2QyxRQUFRd0MsT0FBUixHQUFrQixJQUFsQjtBQUNBeEMsUUFBUUMsR0FBUixHQUFjLEVBQWQ7QUFDQUQsUUFBUXlDLElBQVIsR0FBZSxFQUFmO0FBQ0F6QyxRQUFRMEMsT0FBUixHQUFrQixFQUFsQixDLENBQXNCO0FBQ3RCMUMsUUFBUTJDLFFBQVIsR0FBbUIsRUFBbkI7O0FBRUEsU0FBU0MsSUFBVCxHQUFnQixDQUFFOztBQUVsQjVDLFFBQVE2QyxFQUFSLEdBQWFELElBQWI7QUFDQTVDLFFBQVE4QyxXQUFSLEdBQXNCRixJQUF0QjtBQUNBNUMsUUFBUStDLElBQVIsR0FBZUgsSUFBZjtBQUNBNUMsUUFBUWdELEdBQVIsR0FBY0osSUFBZDtBQUNBNUMsUUFBUWlELGNBQVIsR0FBeUJMLElBQXpCO0FBQ0E1QyxRQUFRa0Qsa0JBQVIsR0FBNkJOLElBQTdCO0FBQ0E1QyxRQUFRbUQsSUFBUixHQUFlUCxJQUFmO0FBQ0E1QyxRQUFRb0QsZUFBUixHQUEwQlIsSUFBMUI7QUFDQTVDLFFBQVFxRCxtQkFBUixHQUE4QlQsSUFBOUI7O0FBRUE1QyxRQUFRc0QsU0FBUixHQUFvQixVQUFVdkYsSUFBVixFQUFnQjtBQUFFLFdBQU8sRUFBUDtBQUFXLENBQWpEOztBQUVBaUMsUUFBUXVELE9BQVIsR0FBa0IsVUFBVXhGLElBQVYsRUFBZ0I7QUFDOUIsVUFBTSxJQUFJd0MsS0FBSixDQUFVLGtDQUFWLENBQU47QUFDSCxDQUZEOztBQUlBUCxRQUFRd0QsR0FBUixHQUFjLFlBQVk7QUFBRSxXQUFPLEdBQVA7QUFBWSxDQUF4QztBQUNBeEQsUUFBUXlELEtBQVIsR0FBZ0IsVUFBVUMsR0FBVixFQUFlO0FBQzNCLFVBQU0sSUFBSW5ELEtBQUosQ0FBVSxnQ0FBVixDQUFOO0FBQ0gsQ0FGRDtBQUdBUCxRQUFRMkQsS0FBUixHQUFnQixZQUFXO0FBQUUsV0FBTyxDQUFQO0FBQVcsQ0FBeEMsQzs7Ozs7OztBQ3ZMQTs7QUFFQTlDLFFBQVErQyxVQUFSLEdBQXFCLElBQXJCO0FBQ0EsSUFBSUMsa0JBQWtCaEQsUUFBUWdELGVBQVIsR0FBMEIsU0FBU0EsZUFBVCxDQUF5QkMsSUFBekIsRUFBK0I7QUFDN0UsU0FBT0EsS0FBS0MsTUFBTCxDQUFZLENBQVosTUFBbUIsR0FBbkIsR0FBeUJELElBQXpCLEdBQWdDLE1BQU1BLElBQTdDO0FBQ0QsQ0FGRDs7QUFJQSxJQUFJRSxvQkFBb0JuRCxRQUFRbUQsaUJBQVIsR0FBNEIsU0FBU0EsaUJBQVQsQ0FBMkJGLElBQTNCLEVBQWlDO0FBQ25GLFNBQU9BLEtBQUtDLE1BQUwsQ0FBWSxDQUFaLE1BQW1CLEdBQW5CLEdBQXlCRCxLQUFLRyxNQUFMLENBQVksQ0FBWixDQUF6QixHQUEwQ0gsSUFBakQ7QUFDRCxDQUZEOztBQUlBLElBQUlJLGNBQWNyRCxRQUFRcUQsV0FBUixHQUFzQixTQUFTQSxXQUFULENBQXFCSixJQUFyQixFQUEyQkssTUFBM0IsRUFBbUM7QUFDekUsU0FBTyxJQUFJQyxNQUFKLENBQVcsTUFBTUQsTUFBTixHQUFlLGVBQTFCLEVBQTJDLEdBQTNDLEVBQWdEM0QsSUFBaEQsQ0FBcURzRCxJQUFyRCxDQUFQO0FBQ0QsQ0FGRDs7QUFJQSxJQUFJTyxnQkFBZ0J4RCxRQUFRd0QsYUFBUixHQUF3QixTQUFTQSxhQUFULENBQXVCUCxJQUF2QixFQUE2QkssTUFBN0IsRUFBcUM7QUFDL0UsU0FBT0QsWUFBWUosSUFBWixFQUFrQkssTUFBbEIsSUFBNEJMLEtBQUtHLE1BQUwsQ0FBWUUsT0FBTzFGLE1BQW5CLENBQTVCLEdBQXlEcUYsSUFBaEU7QUFDRCxDQUZEOztBQUlBLElBQUlRLHFCQUFxQnpELFFBQVF5RCxrQkFBUixHQUE2QixTQUFTQSxrQkFBVCxDQUE0QlIsSUFBNUIsRUFBa0M7QUFDdEYsU0FBT0EsS0FBS0MsTUFBTCxDQUFZRCxLQUFLckYsTUFBTCxHQUFjLENBQTFCLE1BQWlDLEdBQWpDLEdBQXVDcUYsS0FBS3BGLEtBQUwsQ0FBVyxDQUFYLEVBQWMsQ0FBQyxDQUFmLENBQXZDLEdBQTJEb0YsSUFBbEU7QUFDRCxDQUZEOztBQUlBLElBQUlTLFlBQVkxRCxRQUFRMEQsU0FBUixHQUFvQixTQUFTQSxTQUFULENBQW1CVCxJQUFuQixFQUF5QjtBQUMzRCxNQUFJVSxXQUFXVixRQUFRLEdBQXZCO0FBQ0EsTUFBSVcsU0FBUyxFQUFiO0FBQ0EsTUFBSUMsT0FBTyxFQUFYOztBQUVBLE1BQUlDLFlBQVlILFNBQVNJLE9BQVQsQ0FBaUIsR0FBakIsQ0FBaEI7QUFDQSxNQUFJRCxjQUFjLENBQUMsQ0FBbkIsRUFBc0I7QUFDcEJELFdBQU9GLFNBQVNQLE1BQVQsQ0FBZ0JVLFNBQWhCLENBQVA7QUFDQUgsZUFBV0EsU0FBU1AsTUFBVCxDQUFnQixDQUFoQixFQUFtQlUsU0FBbkIsQ0FBWDtBQUNEOztBQUVELE1BQUlFLGNBQWNMLFNBQVNJLE9BQVQsQ0FBaUIsR0FBakIsQ0FBbEI7QUFDQSxNQUFJQyxnQkFBZ0IsQ0FBQyxDQUFyQixFQUF3QjtBQUN0QkosYUFBU0QsU0FBU1AsTUFBVCxDQUFnQlksV0FBaEIsQ0FBVDtBQUNBTCxlQUFXQSxTQUFTUCxNQUFULENBQWdCLENBQWhCLEVBQW1CWSxXQUFuQixDQUFYO0FBQ0Q7O0FBRUQsU0FBTztBQUNMTCxjQUFVQSxRQURMO0FBRUxDLFlBQVFBLFdBQVcsR0FBWCxHQUFpQixFQUFqQixHQUFzQkEsTUFGekI7QUFHTEMsVUFBTUEsU0FBUyxHQUFULEdBQWUsRUFBZixHQUFvQkE7QUFIckIsR0FBUDtBQUtELENBdEJEOztBQXdCQSxJQUFJSSxhQUFhakUsUUFBUWlFLFVBQVIsR0FBcUIsU0FBU0EsVUFBVCxDQUFvQkMsUUFBcEIsRUFBOEI7QUFDbEUsTUFBSVAsV0FBV08sU0FBU1AsUUFBeEI7QUFBQSxNQUNJQyxTQUFTTSxTQUFTTixNQUR0QjtBQUFBLE1BRUlDLE9BQU9LLFNBQVNMLElBRnBCOztBQUtBLE1BQUlaLE9BQU9VLFlBQVksR0FBdkI7O0FBRUEsTUFBSUMsVUFBVUEsV0FBVyxHQUF6QixFQUE4QlgsUUFBUVcsT0FBT1YsTUFBUCxDQUFjLENBQWQsTUFBcUIsR0FBckIsR0FBMkJVLE1BQTNCLEdBQW9DLE1BQU1BLE1BQWxEOztBQUU5QixNQUFJQyxRQUFRQSxTQUFTLEdBQXJCLEVBQTBCWixRQUFRWSxLQUFLWCxNQUFMLENBQVksQ0FBWixNQUFtQixHQUFuQixHQUF5QlcsSUFBekIsR0FBZ0MsTUFBTUEsSUFBOUM7O0FBRTFCLFNBQU9aLElBQVA7QUFDRCxDQWJELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ1ZBO0FBQ0F4SCxPQUFPMEksT0FBUCxHQUFpQiw2REFBQUMsRUFBakIsQzs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBS0E7Ozs7QUFJQSxTQUFTQSxJQUFULENBQWNDLEdBQWQsRUFBb0M7QUFDbkNBLE9BQU1BLE9BQU9DLE9BQU9DLE1BQVAsQ0FBYyxJQUFkLENBQWI7O0FBRUEsUUFBTztBQUNOOzs7Ozs7O0FBT0F2QyxNQUFJLFNBQVNBLEVBQVQsQ0FBWXdDLElBQVosRUFBMEJDLE9BQTFCLEVBQWlEO0FBQ3BELElBQUNKLElBQUlHLElBQUosTUFBY0gsSUFBSUcsSUFBSixJQUFZLEVBQTFCLENBQUQsRUFBZ0NsRCxJQUFoQyxDQUFxQ21ELE9BQXJDO0FBQ0EsR0FWSzs7QUFZTjs7Ozs7OztBQU9BdEMsT0FBSyxTQUFTQSxHQUFULENBQWFxQyxJQUFiLEVBQTJCQyxPQUEzQixFQUFrRDtBQUN0RCxPQUFJSixJQUFJRyxJQUFKLENBQUosRUFBZTtBQUNkSCxRQUFJRyxJQUFKLEVBQVVFLE1BQVYsQ0FBaUJMLElBQUlHLElBQUosRUFBVVQsT0FBVixDQUFrQlUsT0FBbEIsTUFBK0IsQ0FBaEQsRUFBbUQsQ0FBbkQ7QUFDQTtBQUNELEdBdkJLOztBQXlCTjs7Ozs7Ozs7QUFRQW5DLFFBQU0sU0FBU0EsSUFBVCxDQUFja0MsSUFBZCxFQUE0QkcsR0FBNUIsRUFBc0M7QUFDM0MsSUFBQ04sSUFBSUcsSUFBSixLQUFhLEVBQWQsRUFBa0JJLEdBQWxCLENBQXNCLFVBQVVILE9BQVYsRUFBbUI7QUFBRUEsWUFBUUUsR0FBUjtBQUFlLElBQTFEO0FBQ0EsSUFBQ04sSUFBSSxHQUFKLEtBQVksRUFBYixFQUFpQk8sR0FBakIsQ0FBcUIsVUFBVUgsT0FBVixFQUFtQjtBQUFFQSxZQUFRRCxJQUFSLEVBQWNHLEdBQWQ7QUFBcUIsSUFBL0Q7QUFDQTtBQXBDSyxFQUFQO0FBc0NBOztBQUVELHlEQUFlUCxJQUFmO0FBQ0EsbUM7Ozs7OztBQzNEQSx5Qzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQXhJLEVBQUUsWUFBVztBQUNYLE1BQUksQ0FBQyxrRUFBQUcsRUFBTCxFQUFtQjs7QUFFbkIsTUFBSThJLFlBQVlqSixFQUFFLGFBQUYsQ0FBaEI7QUFDQSxRQUFNa0osY0FBY2xKLEVBQUUsMkJBQUYsQ0FBcEI7QUFDQSxRQUFNbUosZUFBZUQsWUFBWUUsR0FBWixDQUFnQixDQUFoQixDQUFyQjs7QUFFQWIsVUFBUW5DLEVBQVIsQ0FBVyxjQUFYLEVBQTJCaUQsUUFBUTtBQUNqQyxVQUFNQyxPQUFPLHlEQUFBM0osQ0FBUzRKLE9BQVQsRUFBYjtBQUNBLFFBQUksQ0FBQ0QsS0FBS0UsTUFBTCxDQUFZQyxPQUFPQSxJQUFJQyxFQUFKLEtBQVdMLEtBQUtLLEVBQW5DLEVBQXVDMUgsTUFBNUMsRUFBb0Q7QUFDbERzSCxXQUFLNUQsSUFBTCxjQUFlMkQsSUFBZjs7QUFFQTFKLE1BQUEseURBQUFBLENBQVNnSyxPQUFULENBQWlCTCxJQUFqQjtBQUNEOztBQUVEZixZQUFRN0IsSUFBUixDQUFhLGFBQWIsZUFBaUMyQyxJQUFqQztBQUNELEdBVEQ7O0FBV0FkLFVBQVFuQyxFQUFSLENBQVcsYUFBWCxFQUEwQixDQUFDd0QsU0FBUyxFQUFWLEtBQWlCO0FBQ3pDLFVBQU1DLFdBQVdELE9BQU9GLEVBQXhCO0FBQ0EsVUFBTUosT0FBTyx5REFBQTNKLENBQVM0SixPQUFULEVBQWI7QUFDQSxVQUFNTyxhQUFhLHlEQUFBbkssQ0FBU21LLFVBQTVCOztBQUVBLFVBQU1DLFVBQVUvSixFQUFFLGFBQUYsRUFDYmdLLElBRGEsQ0FFWlYsS0FDR04sR0FESCxDQUVJUyxPQUNHLGVBQWNBLElBQUkzRCxLQUFNLHdFQUF1RStELGFBQWFKLElBQUlDLEVBQWpCLEdBQXNCLFFBQXRCLEdBQWlDLEVBQUcsY0FDbElELElBQUlDLEVBQ0wsS0FBSUQsSUFBSTNELEtBQU0sdUVBQXNFMkQsSUFBSVEsSUFBSyxjQUxwRyxFQU9HbkksSUFQSCxDQU9RLEVBUFIsQ0FGWSxFQVdib0ksSUFYYSxDQVdSLFNBWFEsQ0FBaEI7O0FBYUE7QUFDQSxRQUFJLENBQUNKLFVBQUQsSUFBZUEsV0FBV0osRUFBWCxLQUFrQkcsUUFBckMsRUFBK0M7QUFDN0NNLE1BQUEseURBQUFBLENBQVF6RSxJQUFSLENBQWFrRSxPQUFPUSxHQUFwQixlQUE4QlIsTUFBOUI7QUFDQWpLLE1BQUEseURBQUFBLENBQVMwSyxhQUFULGNBQTRCVCxNQUE1QjtBQUNEOztBQUVEVSxnQkFBWVAsT0FBWjtBQUNELEdBekJEOztBQTJCQWQsWUFDRzdDLEVBREgsQ0FDTSxPQUROLEVBQ2UsbUJBRGYsRUFDb0MsVUFBUzFGLENBQVQsRUFBWTtBQUM1Q0EsTUFBRTZKLGVBQUY7QUFDQTVLLElBQUEseURBQUFBLENBQVM2SyxhQUFULENBQ0V4SyxFQUFFLElBQUYsRUFDR3lLLE1BREgsQ0FDVSxhQURWLEVBRUdDLElBRkgsQ0FFUSxJQUZSLENBREY7QUFLRCxHQVJILEVBU0d0RSxFQVRILENBU00sT0FUTixFQVNlLGFBVGYsRUFTOEIsWUFBVztBQUNyQyxVQUFNdUUsUUFBUTNLLEVBQUUsSUFBRixDQUFkO0FBQ0EsUUFBSTJLLE1BQU16SyxFQUFOLENBQVMsU0FBVCxDQUFKLEVBQXlCOztBQUV6QixVQUFNd0osS0FBS2lCLE1BQU1ELElBQU4sQ0FBVyxJQUFYLENBQVg7QUFDQSxVQUFNWixhQUFhLHlEQUFBbkssQ0FBUzRKLE9BQVQsR0FBbUJDLE1BQW5CLENBQTBCQyxPQUFPQSxJQUFJQyxFQUFKLEtBQVdBLEVBQTVDLEVBQWdELENBQWhELEtBQXNELEVBQXpFOztBQUVBaUIsVUFDR0MsUUFESCxDQUNZLFFBRFosRUFFR0MsUUFGSCxHQUdHQyxXQUhILENBR2UsUUFIZjtBQUlBbkwsSUFBQSx5REFBQUEsQ0FBUzBLLGFBQVQsQ0FBdUJQLFVBQXZCO0FBQ0FLLElBQUEseURBQUFBLENBQVF6RSxJQUFSLENBQWFvRSxXQUFXTSxHQUF4QixlQUFrQ04sVUFBbEM7O0FBRUFRLGdCQUFZSyxLQUFaO0FBQ0QsR0F4Qkg7O0FBMEJBOzs7QUFHQSxXQUFTTCxXQUFULENBQXFCUCxPQUFyQixFQUE4QjtBQUM1QjtBQUNBLFVBQU1nQixZQUFZN0IsWUFBWThCLEtBQVosRUFBbEI7QUFDQSxVQUFNQyxpQkFBaUIvQixZQUFZcEksVUFBWixFQUF2QjtBQUNBLFVBQU1vSyxZQUFZSCxZQUFZRSxjQUE5QjtBQUNBLFVBQU1FLFlBQVksRUFBbEI7O0FBRUE7QUFDQSxVQUFNQyxXQUFXckIsUUFBUVgsR0FBUixDQUFZLENBQVosQ0FBakI7QUFDQSxVQUFNaUMsY0FBY3RCLFFBQVF1QixVQUFSLEVBQXBCO0FBQ0EsVUFBTUMsYUFBYUgsU0FBU0ksVUFBNUI7QUFDQSxVQUFNQyxjQUFjRixhQUFhRixXQUFqQztBQUNBLFFBQUlJLGNBQWNWLFlBQVlFLGNBQTlCLEVBQThDO0FBQzVDOUIsbUJBQWFySSxVQUFiLEdBQTBCMkssY0FBY1YsU0FBZCxHQUEwQkksU0FBcEQ7QUFDRDtBQUNELFFBQUlJLGNBQWNOLGNBQWxCLEVBQWtDO0FBQ2hDOUIsbUJBQWFySSxVQUFiLEdBQTBCeUssYUFBYUosU0FBdkM7QUFDRDtBQUNGOztBQUVEL0ssRUFBQSwrREFBQUEsQ0FBUThJLFlBQVlFLEdBQVosQ0FBZ0IsQ0FBaEIsQ0FBUjtBQUNELENBL0ZELEU7Ozs7OztBQ05BLGtCQUFrQiw4Qzs7Ozs7O0FDQWxCLHlDOzs7Ozs7OztBQ0FBO0FBQ0EsTUFBTXNDLEtBQUtDLFlBQVg7QUFDQSxNQUFNck0sYUFBYSx1REFBQXNNLENBQU90TSxVQUExQjs7QUFFQSx5REFBZSxNQUFNO0FBQUE7QUFBQSxTQUNuQnVNLEtBRG1CLEdBQ1hILEdBQUdJLE9BQUgsQ0FBV3hNLFVBQVgsS0FBMEIsdURBQUFzTSxDQUFPcE0sWUFEdEI7QUFBQTs7QUFHbkJ1TSxXQUFVRixLQUFWLEVBQWlCO0FBQ2YsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0FILE9BQUdNLE9BQUgsQ0FBVzFNLFVBQVgsRUFBdUJ1TSxLQUF2QjtBQUNEO0FBTmtCLEM7Ozs7Ozs7O0FDSnJCOztBQUVBLE1BQU1ILEtBQUtDLFlBQVg7O0FBRUEseURBQWUsTUFBTTtBQUFBO0FBQUEsU0FDbkI3QixVQURtQixHQUNOLElBRE07QUFBQTs7QUFHbkJQLFlBQVU7QUFDUixRQUFJRCxPQUFPb0MsR0FBR0ksT0FBSCxDQUFXLHVEQUFBRixDQUFPdk0sWUFBbEIsS0FBbUMsRUFBOUM7O0FBRUEsV0FBT2lLLE9BQU9BLEtBQUsyQyxLQUFMLENBQVcsR0FBWCxFQUFnQmpELEdBQWhCLENBQW9CUyxPQUFPO0FBQ3ZDLFlBQU0sQ0FBQ0MsRUFBRCxFQUFLNUQsS0FBTCxFQUFZc0UsR0FBWixFQUFpQkgsSUFBakIsSUFBeUJSLElBQUl3QyxLQUFKLENBQVUsR0FBVixDQUEvQjs7QUFFQSxhQUFPLEVBQUV2QyxFQUFGLEVBQU01RCxLQUFOLEVBQWFzRSxHQUFiLEVBQWtCSCxJQUFsQixFQUFQO0FBQ0QsS0FKYSxDQUFQLEdBSUYsRUFKTDtBQUtEOztBQUVETixVQUFRTCxJQUFSLEVBQWM7QUFDWm9DLE9BQUdNLE9BQUgsQ0FDRSx1REFBQUosQ0FBT3ZNLFlBRFQsRUFFRWlLLEtBQUt0SCxNQUFMLEdBQWNzSCxLQUFLTixHQUFMLENBQ1pTLE9BQVEsR0FBRUEsSUFBSUMsRUFBRyxJQUFHRCxJQUFJM0QsS0FBTSxJQUFHMkQsSUFBSVcsR0FBSSxJQUFHWCxJQUFJUSxJQUFLLEVBRHpDLEVBRVpuSSxJQUZZLENBRVAsR0FGTyxDQUFkLEdBRWMsRUFKaEI7QUFNRDs7QUFFRHVJLGdCQUFjWixHQUFkLEVBQW1CO0FBQ2pCLFNBQUtLLFVBQUwsR0FBa0JMLEdBQWxCO0FBQ0Q7O0FBRURlLGdCQUFjZCxFQUFkLEVBQWtCO0FBQ2hCLFFBQUlKLE9BQU8sS0FBS0MsT0FBTCxFQUFYO0FBQ0EsUUFBSTJDLFVBQVUsSUFBZDtBQUNBLFVBQU1DLGVBQWV6QyxPQUFPLEtBQUtJLFVBQUwsQ0FBZ0JKLEVBQTVDOztBQUVBLFVBQU0wQyxhQUFhOUMsS0FBSytDLFNBQUwsQ0FBZTVDLE9BQU9BLElBQUlDLEVBQUosS0FBV0EsRUFBakMsQ0FBbkI7QUFDQUosV0FBT0EsS0FBS0UsTUFBTCxDQUFZLENBQUNDLEdBQUQsRUFBTTZDLEdBQU4sS0FBYzdDLElBQUlDLEVBQUosS0FBV0EsRUFBckMsQ0FBUDs7QUFFQSxTQUFLQyxPQUFMLENBQWFMLElBQWI7O0FBRUEsUUFBSUEsS0FBS3RILE1BQVQsRUFBaUI7QUFDZixVQUFJbUssWUFBSixFQUFrQjtBQUNoQkQsa0JBQVVFLGVBQWUsQ0FBZixHQUFtQjlDLEtBQUssQ0FBTCxDQUFuQixHQUE2QkEsS0FBSzhDLGFBQWEsQ0FBbEIsQ0FBdkM7QUFDRDs7QUFFRDdELGNBQVE3QixJQUFSLENBQWEsYUFBYixFQUE0QndGLFdBQVcsS0FBS3BDLFVBQTVDO0FBQ0QsS0FORCxNQU1PO0FBQ0x4QixlQUFTaUUsSUFBVCxHQUFnQixHQUFoQjtBQUNEO0FBQ0Y7QUE3Q2tCLEM7Ozs7Ozs7Ozs7QUNKckI7QUFDQSxNQUFNYixLQUFLQyxZQUFYO0FBQ0EsTUFBTXBNLGFBQWEsdURBQUFxTSxDQUFPck0sVUFBMUI7O0FBRUEseURBQWUsTUFBTTtBQUNuQmlOLFlBQVU5QyxFQUFWLEVBQWM7QUFDWixVQUFNK0MsUUFBUSxLQUFLQyxTQUFMLENBQWVoRCxFQUFmLENBQWQ7O0FBRUEsV0FBTytDLFFBQ0h6TSxFQUFFMk0sUUFBRixHQUFhQyxPQUFiLENBQXFCSCxLQUFyQixDQURHLEdBRUh6TSxFQUFFb0osR0FBRixDQUFNeUQsTUFBTXpDLEdBQU4sQ0FBVTBDLEdBQVYsQ0FBZSxTQUFRcEQsRUFBRyxFQUExQixDQUFOLEVBQW9DO0FBQ2xDcUQsZUFBUztBQUR5QixLQUFwQyxFQUdHQyxJQUhILENBR1EsVUFBU0MsR0FBVCxFQUFjO0FBQ2xCM00sY0FBUTRNLEdBQVIsQ0FBWUQsR0FBWjtBQUNELEtBTEgsRUFNR0UsSUFOSCxDQU1RekMsUUFBUTtBQUNaLFlBQU1yQixPQUFPcUIsS0FBSzBDLEtBQUwsQ0FBVyxDQUFYLEtBQWlCLEVBQTlCO0FBQ0EsV0FBS0MsU0FBTCxDQUFlM0QsRUFBZixFQUFtQkwsSUFBbkI7QUFDRCxLQVRILENBRko7QUFZRDs7QUFFRDs7Ozs7QUFLQXFELFlBQVVoRCxFQUFWLEVBQWM7QUFDWixRQUFJNEQsVUFBVTVCLEdBQUdJLE9BQUgsQ0FBV3ZNLFVBQVgsQ0FBZDtBQUNBK04sY0FBVUEsVUFBVUMsS0FBS0MsS0FBTCxDQUFXRixPQUFYLENBQVYsR0FBZ0MsRUFBMUM7O0FBRUEsVUFBTWpFLE9BQU9pRSxRQUFRNUQsRUFBUixDQUFiO0FBQ0EsVUFBTStELFVBQVVwRSxRQUFRLENBQUMsSUFBSWhILElBQUosRUFBRCxHQUFjZ0gsS0FBS3FFLFNBQW5CLElBQWdDLElBQUksRUFBSixHQUFTLElBQWpFOztBQUVBLFFBQUlELE9BQUosRUFBYTtBQUNYbk4sY0FBUXFOLElBQVIsQ0FBYSwyQkFBYixFQUEwQ3RFLEtBQUt2RCxLQUEvQztBQUNBLFlBQU04SCxTQUFTTCxLQUFLQyxLQUFMLENBQVduRSxLQUFLdUUsTUFBaEIsQ0FBZjtBQUNBLGFBQU87QUFDTFIsZUFBTyxjQUFNL0QsSUFBTixJQUFZdUUsTUFBWixFQUFvQmxCLFdBQVcsQ0FBL0I7QUFERixPQUFQO0FBR0Q7O0FBRUQsV0FBTyxJQUFQO0FBQ0Q7O0FBRURtQixzQkFBb0JuRSxFQUFwQixFQUF3QjtBQUN0QixRQUFJNEQsVUFBVTVCLEdBQUdJLE9BQUgsQ0FBV3ZNLFVBQVgsQ0FBZDtBQUNBK04sY0FBVUEsVUFBVUMsS0FBS0MsS0FBTCxDQUFXRixPQUFYLENBQVYsR0FBZ0MsRUFBMUM7QUFDQWhOLFlBQVE0TSxHQUFSLENBQVkseUJBQVosRUFBdUNJLFFBQVE1RCxFQUFSLEVBQVk1RCxLQUFuRDs7QUFFQSxXQUFPd0gsUUFBUTVELEVBQVIsQ0FBUDs7QUFFQWdDLE9BQUdNLE9BQUgsQ0FBV3pNLFVBQVgsRUFBdUJnTyxLQUFLTyxTQUFMLENBQWVSLE9BQWYsQ0FBdkI7QUFDRDs7QUFFREQsWUFBVTNELEVBQVYsRUFBY0wsSUFBZCxFQUFvQjtBQUNsQixRQUFJQSxLQUFLcUQsU0FBVCxFQUFvQjs7QUFFcEIsUUFBSVksVUFBVTVCLEdBQUdJLE9BQUgsQ0FBV3ZNLFVBQVgsQ0FBZDtBQUNBK04sY0FBVUEsVUFBVUMsS0FBS0MsS0FBTCxDQUFXRixPQUFYLENBQVYsR0FBZ0MsRUFBMUM7O0FBRUFBLFlBQVE1RCxFQUFSLGlCQUNLTCxJQURMO0FBRUV1RSxjQUFRTCxLQUFLTyxTQUFMLENBQWV6RSxLQUFLdUUsTUFBcEIsQ0FGVjtBQUdFRixpQkFBVyxDQUFDLElBQUlyTCxJQUFKOztBQUdkO0FBQ0E7QUFQQSxPQVFBLElBQUkwTCxNQUFNckYsT0FBT3NGLElBQVAsQ0FBWVYsT0FBWixDQUFWO0FBQ0EsUUFBSVMsSUFBSS9MLE1BQUosR0FBYSxDQUFqQixFQUFvQjtBQUNsQixZQUFNaU0saUJBQWlCRixJQUNwQi9FLEdBRG9CLENBQ2hCVSxPQUFPO0FBQ1ZnRSxtQkFBV0osUUFBUTVELEVBQVIsRUFBWWdFLFNBRGI7QUFFVmhFO0FBRlUsT0FBUCxDQURnQixFQUtwQndFLElBTG9CLENBS2YsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEtBQVVELEVBQUVULFNBQUYsR0FBY1UsRUFBRVYsU0FMWCxFQU1wQjFFLEdBTm9CLENBTWhCcUYsUUFBUUEsS0FBSzNFLEVBTkcsRUFPcEI0RSxLQVBvQixFQUF2Qjs7QUFTQSxhQUFPaEIsUUFBUVcsY0FBUixDQUFQO0FBQ0Q7O0FBRUQzTixZQUFRNE0sR0FBUixDQUFZYSxJQUFJL0wsTUFBaEI7QUFDQTBKLE9BQUdNLE9BQUgsQ0FBV3pNLFVBQVgsRUFBdUJnTyxLQUFLTyxTQUFMLENBQWVSLE9BQWYsQ0FBdkI7QUFDRDtBQWpGa0IsQzs7Ozs7OztBQ0pyQjs7QUFFQWxKLFFBQVErQyxVQUFSLEdBQXFCLElBQXJCOztBQUVBLElBQUlvSCxVQUFVLE9BQU9DLE1BQVAsS0FBa0IsVUFBbEIsSUFBZ0MsT0FBT0EsT0FBT0MsUUFBZCxLQUEyQixRQUEzRCxHQUFzRSxVQUFVQyxHQUFWLEVBQWU7QUFBRSxTQUFPLE9BQU9BLEdBQWQ7QUFBb0IsQ0FBM0csR0FBOEcsVUFBVUEsR0FBVixFQUFlO0FBQUUsU0FBT0EsT0FBTyxPQUFPRixNQUFQLEtBQWtCLFVBQXpCLElBQXVDRSxJQUFJQyxXQUFKLEtBQW9CSCxNQUEzRCxJQUFxRUUsUUFBUUYsT0FBTzNNLFNBQXBGLEdBQWdHLFFBQWhHLEdBQTJHLE9BQU82TSxHQUF6SDtBQUErSCxDQUE1UTs7QUFFQSxJQUFJRSxXQUFXbEcsT0FBT21HLE1BQVAsSUFBaUIsVUFBVUMsTUFBVixFQUFrQjtBQUFFLE9BQUssSUFBSXJKLElBQUksQ0FBYixFQUFnQkEsSUFBSTdCLFVBQVU1QixNQUE5QixFQUFzQ3lELEdBQXRDLEVBQTJDO0FBQUUsUUFBSS9ELFNBQVNrQyxVQUFVNkIsQ0FBVixDQUFiLENBQTJCLEtBQUssSUFBSXJELEdBQVQsSUFBZ0JWLE1BQWhCLEVBQXdCO0FBQUUsVUFBSWdILE9BQU83RyxTQUFQLENBQWlCa04sY0FBakIsQ0FBZ0NoTixJQUFoQyxDQUFxQ0wsTUFBckMsRUFBNkNVLEdBQTdDLENBQUosRUFBdUQ7QUFBRTBNLGVBQU8xTSxHQUFQLElBQWNWLE9BQU9VLEdBQVAsQ0FBZDtBQUE0QjtBQUFFO0FBQUUsR0FBQyxPQUFPME0sTUFBUDtBQUFnQixDQUFoUTs7QUFFQSxJQUFJRSxXQUFXLG1CQUFBQyxDQUFRLENBQVIsQ0FBZjs7QUFFQSxJQUFJQyxZQUFZQyx1QkFBdUJILFFBQXZCLENBQWhCOztBQUVBLElBQUlJLGFBQWEsbUJBQUFILENBQVEsRUFBUixDQUFqQjs7QUFFQSxJQUFJSSxjQUFjRix1QkFBdUJDLFVBQXZCLENBQWxCOztBQUVBLElBQUlFLGlCQUFpQixtQkFBQUwsQ0FBUSxFQUFSLENBQXJCOztBQUVBLElBQUlNLGFBQWEsbUJBQUFOLENBQVEsQ0FBUixDQUFqQjs7QUFFQSxJQUFJTywyQkFBMkIsbUJBQUFQLENBQVEsRUFBUixDQUEvQjs7QUFFQSxJQUFJUSw0QkFBNEJOLHVCQUF1Qkssd0JBQXZCLENBQWhDOztBQUVBLElBQUlFLFlBQVksbUJBQUFULENBQVEsRUFBUixDQUFoQjs7QUFFQSxTQUFTRSxzQkFBVCxDQUFnQ1QsR0FBaEMsRUFBcUM7QUFBRSxTQUFPQSxPQUFPQSxJQUFJdkgsVUFBWCxHQUF3QnVILEdBQXhCLEdBQThCLEVBQUVpQixTQUFTakIsR0FBWCxFQUFyQztBQUF3RDs7QUFFL0YsSUFBSWtCLGdCQUFnQixVQUFwQjtBQUNBLElBQUlDLGtCQUFrQixZQUF0Qjs7QUFFQSxJQUFJQyxrQkFBa0IsU0FBU0EsZUFBVCxHQUEyQjtBQUMvQyxNQUFJO0FBQ0YsV0FBT2pRLE9BQU9zSyxPQUFQLENBQWU0RixLQUFmLElBQXdCLEVBQS9CO0FBQ0QsR0FGRCxDQUVFLE9BQU9yUCxDQUFQLEVBQVU7QUFDVjtBQUNBO0FBQ0EsV0FBTyxFQUFQO0FBQ0Q7QUFDRixDQVJEOztBQVVBOzs7O0FBSUEsSUFBSXNQLHVCQUF1QixTQUFTQSxvQkFBVCxHQUFnQztBQUN6RCxNQUFJQyxRQUFRck0sVUFBVTVCLE1BQVYsR0FBbUIsQ0FBbkIsSUFBd0I0QixVQUFVLENBQVYsTUFBaUJDLFNBQXpDLEdBQXFERCxVQUFVLENBQVYsQ0FBckQsR0FBb0UsRUFBaEY7O0FBRUEsR0FBQyxHQUFHeUwsWUFBWU0sT0FBaEIsRUFBeUJELFVBQVVRLFNBQW5DLEVBQThDLDZCQUE5Qzs7QUFFQSxNQUFJQyxnQkFBZ0J0USxPQUFPc0ssT0FBM0I7QUFDQSxNQUFJaUcsZ0JBQWdCLENBQUMsR0FBR1YsVUFBVVcsZUFBZCxHQUFwQjtBQUNBLE1BQUlDLDBCQUEwQixDQUFDLENBQUMsR0FBR1osVUFBVWEsNEJBQWQsR0FBL0I7O0FBRUEsTUFBSUMsc0JBQXNCUCxNQUFNUSxZQUFoQztBQUFBLE1BQ0lBLGVBQWVELHdCQUF3QjNNLFNBQXhCLEdBQW9DLEtBQXBDLEdBQTRDMk0sbUJBRC9EO0FBQUEsTUFFSUUsd0JBQXdCVCxNQUFNVSxtQkFGbEM7QUFBQSxNQUdJQSxzQkFBc0JELDBCQUEwQjdNLFNBQTFCLEdBQXNDNkwsVUFBVWtCLGVBQWhELEdBQWtFRixxQkFINUY7QUFBQSxNQUlJRyxtQkFBbUJaLE1BQU1hLFNBSjdCO0FBQUEsTUFLSUEsWUFBWUQscUJBQXFCaE4sU0FBckIsR0FBaUMsQ0FBakMsR0FBcUNnTixnQkFMckQ7O0FBT0EsTUFBSUUsV0FBV2QsTUFBTWMsUUFBTixHQUFpQixDQUFDLEdBQUd4QixXQUFXMUgsa0JBQWYsRUFBbUMsQ0FBQyxHQUFHMEgsV0FBV25JLGVBQWYsRUFBZ0M2SSxNQUFNYyxRQUF0QyxDQUFuQyxDQUFqQixHQUF1RyxFQUF0SDs7QUFFQSxNQUFJQyxpQkFBaUIsU0FBU0EsY0FBVCxDQUF3QkMsWUFBeEIsRUFBc0M7QUFDekQsUUFBSUMsT0FBT0QsZ0JBQWdCLEVBQTNCO0FBQUEsUUFDSTdPLE1BQU04TyxLQUFLOU8sR0FEZjtBQUFBLFFBRUkyTixRQUFRbUIsS0FBS25CLEtBRmpCOztBQUlBLFFBQUlvQixtQkFBbUJ0UixPQUFPeUksUUFBOUI7QUFBQSxRQUNJUCxXQUFXb0osaUJBQWlCcEosUUFEaEM7QUFBQSxRQUVJQyxTQUFTbUosaUJBQWlCbkosTUFGOUI7QUFBQSxRQUdJQyxPQUFPa0osaUJBQWlCbEosSUFINUI7O0FBTUEsUUFBSVosT0FBT1UsV0FBV0MsTUFBWCxHQUFvQkMsSUFBL0I7O0FBRUEsS0FBQyxHQUFHaUgsVUFBVVMsT0FBZCxFQUF1QixDQUFDb0IsUUFBRCxJQUFhLENBQUMsR0FBR3hCLFdBQVc5SCxXQUFmLEVBQTRCSixJQUE1QixFQUFrQzBKLFFBQWxDLENBQXBDLEVBQWlGLGtGQUFrRixvQ0FBbEYsR0FBeUgxSixJQUF6SCxHQUFnSSxtQkFBaEksR0FBc0owSixRQUF0SixHQUFpSyxJQUFsUDs7QUFFQSxRQUFJQSxRQUFKLEVBQWMxSixPQUFPLENBQUMsR0FBR2tJLFdBQVczSCxhQUFmLEVBQThCUCxJQUE5QixFQUFvQzBKLFFBQXBDLENBQVA7O0FBRWQsV0FBTyxDQUFDLEdBQUd6QixlQUFlOEIsY0FBbkIsRUFBbUMvSixJQUFuQyxFQUF5QzBJLEtBQXpDLEVBQWdEM04sR0FBaEQsQ0FBUDtBQUNELEdBbEJEOztBQW9CQSxNQUFJaVAsWUFBWSxTQUFTQSxTQUFULEdBQXFCO0FBQ25DLFdBQU9DLEtBQUtDLE1BQUwsR0FBY0MsUUFBZCxDQUF1QixFQUF2QixFQUEyQmhLLE1BQTNCLENBQWtDLENBQWxDLEVBQXFDc0osU0FBckMsQ0FBUDtBQUNELEdBRkQ7O0FBSUEsTUFBSVcsb0JBQW9CLENBQUMsR0FBR2hDLDBCQUEwQkUsT0FBOUIsR0FBeEI7O0FBRUEsTUFBSStCLFdBQVcsU0FBU0EsUUFBVCxDQUFrQkMsU0FBbEIsRUFBNkI7QUFDMUMvQyxhQUFTekUsT0FBVCxFQUFrQndILFNBQWxCOztBQUVBeEgsWUFBUW5JLE1BQVIsR0FBaUJtTyxjQUFjbk8sTUFBL0I7O0FBRUF5UCxzQkFBa0JHLGVBQWxCLENBQWtDekgsUUFBUTdCLFFBQTFDLEVBQW9ENkIsUUFBUTBILE1BQTVEO0FBQ0QsR0FORDs7QUFRQSxNQUFJQyxpQkFBaUIsU0FBU0EsY0FBVCxDQUF3QkMsS0FBeEIsRUFBK0I7QUFDbEQ7QUFDQSxRQUFJLENBQUMsR0FBR3JDLFVBQVVzQyx5QkFBZCxFQUF5Q0QsS0FBekMsQ0FBSixFQUFxRDs7QUFFckRFLGNBQVVqQixlQUFlZSxNQUFNaEMsS0FBckIsQ0FBVjtBQUNELEdBTEQ7O0FBT0EsTUFBSW1DLG1CQUFtQixTQUFTQSxnQkFBVCxHQUE0QjtBQUNqREQsY0FBVWpCLGVBQWVsQixpQkFBZixDQUFWO0FBQ0QsR0FGRDs7QUFJQSxNQUFJcUMsZUFBZSxLQUFuQjs7QUFFQSxNQUFJRixZQUFZLFNBQVNBLFNBQVQsQ0FBbUIzSixRQUFuQixFQUE2QjtBQUMzQyxRQUFJNkosWUFBSixFQUFrQjtBQUNoQkEscUJBQWUsS0FBZjtBQUNBVDtBQUNELEtBSEQsTUFHTztBQUNMLFVBQUlHLFNBQVMsS0FBYjs7QUFFQUosd0JBQWtCVyxtQkFBbEIsQ0FBc0M5SixRQUF0QyxFQUFnRHVKLE1BQWhELEVBQXdEbEIsbUJBQXhELEVBQTZFLFVBQVUwQixFQUFWLEVBQWM7QUFDekYsWUFBSUEsRUFBSixFQUFRO0FBQ05YLG1CQUFTLEVBQUVHLFFBQVFBLE1BQVYsRUFBa0J2SixVQUFVQSxRQUE1QixFQUFUO0FBQ0QsU0FGRCxNQUVPO0FBQ0xnSyxvQkFBVWhLLFFBQVY7QUFDRDtBQUNGLE9BTkQ7QUFPRDtBQUNGLEdBZkQ7O0FBaUJBLE1BQUlnSyxZQUFZLFNBQVNBLFNBQVQsQ0FBbUJDLFlBQW5CLEVBQWlDO0FBQy9DLFFBQUlDLGFBQWFySSxRQUFRN0IsUUFBekI7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFFBQUltSyxVQUFVQyxRQUFRdkssT0FBUixDQUFnQnFLLFdBQVdwUSxHQUEzQixDQUFkOztBQUVBLFFBQUlxUSxZQUFZLENBQUMsQ0FBakIsRUFBb0JBLFVBQVUsQ0FBVjs7QUFFcEIsUUFBSUUsWUFBWUQsUUFBUXZLLE9BQVIsQ0FBZ0JvSyxhQUFhblEsR0FBN0IsQ0FBaEI7O0FBRUEsUUFBSXVRLGNBQWMsQ0FBQyxDQUFuQixFQUFzQkEsWUFBWSxDQUFaOztBQUV0QixRQUFJaFMsUUFBUThSLFVBQVVFLFNBQXRCOztBQUVBLFFBQUloUyxLQUFKLEVBQVc7QUFDVHdSLHFCQUFlLElBQWY7QUFDQVMsU0FBR2pTLEtBQUg7QUFDRDtBQUNGLEdBckJEOztBQXVCQSxNQUFJa1Msa0JBQWtCN0IsZUFBZWxCLGlCQUFmLENBQXRCO0FBQ0EsTUFBSTRDLFVBQVUsQ0FBQ0csZ0JBQWdCelEsR0FBakIsQ0FBZDs7QUFFQTs7QUFFQSxNQUFJMFEsYUFBYSxTQUFTQSxVQUFULENBQW9CeEssUUFBcEIsRUFBOEI7QUFDN0MsV0FBT3lJLFdBQVcsQ0FBQyxHQUFHeEIsV0FBV2xILFVBQWYsRUFBMkJDLFFBQTNCLENBQWxCO0FBQ0QsR0FGRDs7QUFJQSxNQUFJNUMsT0FBTyxTQUFTQSxJQUFULENBQWMyQixJQUFkLEVBQW9CMEksS0FBcEIsRUFBMkI7QUFDcEMsS0FBQyxHQUFHYixVQUFVUyxPQUFkLEVBQXVCLEVBQUUsQ0FBQyxPQUFPdEksSUFBUCxLQUFnQixXQUFoQixHQUE4QixXQUE5QixHQUE0Q2tILFFBQVFsSCxJQUFSLENBQTdDLE1BQWdFLFFBQWhFLElBQTRFQSxLQUFLMEksS0FBTCxLQUFlbE0sU0FBM0YsSUFBd0drTSxVQUFVbE0sU0FBcEgsQ0FBdkIsRUFBdUosMEVBQTBFLDBFQUFqTzs7QUFFQSxRQUFJZ08sU0FBUyxNQUFiO0FBQ0EsUUFBSXZKLFdBQVcsQ0FBQyxHQUFHZ0gsZUFBZThCLGNBQW5CLEVBQW1DL0osSUFBbkMsRUFBeUMwSSxLQUF6QyxFQUFnRHNCLFdBQWhELEVBQTZEbEgsUUFBUTdCLFFBQXJFLENBQWY7O0FBRUFtSixzQkFBa0JXLG1CQUFsQixDQUFzQzlKLFFBQXRDLEVBQWdEdUosTUFBaEQsRUFBd0RsQixtQkFBeEQsRUFBNkUsVUFBVTBCLEVBQVYsRUFBYztBQUN6RixVQUFJLENBQUNBLEVBQUwsRUFBUzs7QUFFVCxVQUFJOUYsT0FBT3VHLFdBQVd4SyxRQUFYLENBQVg7QUFDQSxVQUFJbEcsTUFBTWtHLFNBQVNsRyxHQUFuQjtBQUFBLFVBQ0kyTixRQUFRekgsU0FBU3lILEtBRHJCOztBQUlBLFVBQUlLLGFBQUosRUFBbUI7QUFDakJELHNCQUFjNEMsU0FBZCxDQUF3QixFQUFFM1EsS0FBS0EsR0FBUCxFQUFZMk4sT0FBT0EsS0FBbkIsRUFBeEIsRUFBb0QsSUFBcEQsRUFBMER4RCxJQUExRDs7QUFFQSxZQUFJa0UsWUFBSixFQUFrQjtBQUNoQjVRLGlCQUFPeUksUUFBUCxDQUFnQmlFLElBQWhCLEdBQXVCQSxJQUF2QjtBQUNELFNBRkQsTUFFTztBQUNMLGNBQUl5RyxZQUFZTixRQUFRdkssT0FBUixDQUFnQmdDLFFBQVE3QixRQUFSLENBQWlCbEcsR0FBakMsQ0FBaEI7QUFDQSxjQUFJNlEsV0FBV1AsUUFBUXpRLEtBQVIsQ0FBYyxDQUFkLEVBQWlCK1EsY0FBYyxDQUFDLENBQWYsR0FBbUIsQ0FBbkIsR0FBdUJBLFlBQVksQ0FBcEQsQ0FBZjs7QUFFQUMsbUJBQVN2TixJQUFULENBQWM0QyxTQUFTbEcsR0FBdkI7QUFDQXNRLG9CQUFVTyxRQUFWOztBQUVBdkIsbUJBQVMsRUFBRUcsUUFBUUEsTUFBVixFQUFrQnZKLFVBQVVBLFFBQTVCLEVBQVQ7QUFDRDtBQUNGLE9BZEQsTUFjTztBQUNMLFNBQUMsR0FBRzRHLFVBQVVTLE9BQWQsRUFBdUJJLFVBQVVsTSxTQUFqQyxFQUE0QyxpRkFBNUM7O0FBRUFoRSxlQUFPeUksUUFBUCxDQUFnQmlFLElBQWhCLEdBQXVCQSxJQUF2QjtBQUNEO0FBQ0YsS0EzQkQ7QUE0QkQsR0FsQ0Q7O0FBb0NBLE1BQUluTCxVQUFVLFNBQVNBLE9BQVQsQ0FBaUJpRyxJQUFqQixFQUF1QjBJLEtBQXZCLEVBQThCO0FBQzFDLEtBQUMsR0FBR2IsVUFBVVMsT0FBZCxFQUF1QixFQUFFLENBQUMsT0FBT3RJLElBQVAsS0FBZ0IsV0FBaEIsR0FBOEIsV0FBOUIsR0FBNENrSCxRQUFRbEgsSUFBUixDQUE3QyxNQUFnRSxRQUFoRSxJQUE0RUEsS0FBSzBJLEtBQUwsS0FBZWxNLFNBQTNGLElBQXdHa00sVUFBVWxNLFNBQXBILENBQXZCLEVBQXVKLDZFQUE2RSwwRUFBcE87O0FBRUEsUUFBSWdPLFNBQVMsU0FBYjtBQUNBLFFBQUl2SixXQUFXLENBQUMsR0FBR2dILGVBQWU4QixjQUFuQixFQUFtQy9KLElBQW5DLEVBQXlDMEksS0FBekMsRUFBZ0RzQixXQUFoRCxFQUE2RGxILFFBQVE3QixRQUFyRSxDQUFmOztBQUVBbUosc0JBQWtCVyxtQkFBbEIsQ0FBc0M5SixRQUF0QyxFQUFnRHVKLE1BQWhELEVBQXdEbEIsbUJBQXhELEVBQTZFLFVBQVUwQixFQUFWLEVBQWM7QUFDekYsVUFBSSxDQUFDQSxFQUFMLEVBQVM7O0FBRVQsVUFBSTlGLE9BQU91RyxXQUFXeEssUUFBWCxDQUFYO0FBQ0EsVUFBSWxHLE1BQU1rRyxTQUFTbEcsR0FBbkI7QUFBQSxVQUNJMk4sUUFBUXpILFNBQVN5SCxLQURyQjs7QUFJQSxVQUFJSyxhQUFKLEVBQW1CO0FBQ2pCRCxzQkFBYytDLFlBQWQsQ0FBMkIsRUFBRTlRLEtBQUtBLEdBQVAsRUFBWTJOLE9BQU9BLEtBQW5CLEVBQTNCLEVBQXVELElBQXZELEVBQTZEeEQsSUFBN0Q7O0FBRUEsWUFBSWtFLFlBQUosRUFBa0I7QUFDaEI1USxpQkFBT3lJLFFBQVAsQ0FBZ0JsSCxPQUFoQixDQUF3Qm1MLElBQXhCO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsY0FBSXlHLFlBQVlOLFFBQVF2SyxPQUFSLENBQWdCZ0MsUUFBUTdCLFFBQVIsQ0FBaUJsRyxHQUFqQyxDQUFoQjs7QUFFQSxjQUFJNFEsY0FBYyxDQUFDLENBQW5CLEVBQXNCTixRQUFRTSxTQUFSLElBQXFCMUssU0FBU2xHLEdBQTlCOztBQUV0QnNQLG1CQUFTLEVBQUVHLFFBQVFBLE1BQVYsRUFBa0J2SixVQUFVQSxRQUE1QixFQUFUO0FBQ0Q7QUFDRixPQVpELE1BWU87QUFDTCxTQUFDLEdBQUc0RyxVQUFVUyxPQUFkLEVBQXVCSSxVQUFVbE0sU0FBakMsRUFBNEMsb0ZBQTVDOztBQUVBaEUsZUFBT3lJLFFBQVAsQ0FBZ0JsSCxPQUFoQixDQUF3Qm1MLElBQXhCO0FBQ0Q7QUFDRixLQXpCRDtBQTBCRCxHQWhDRDs7QUFrQ0EsTUFBSXFHLEtBQUssU0FBU0EsRUFBVCxDQUFZTyxDQUFaLEVBQWU7QUFDdEJoRCxrQkFBY3lDLEVBQWQsQ0FBaUJPLENBQWpCO0FBQ0QsR0FGRDs7QUFJQSxNQUFJQyxTQUFTLFNBQVNBLE1BQVQsR0FBa0I7QUFDN0IsV0FBT1IsR0FBRyxDQUFDLENBQUosQ0FBUDtBQUNELEdBRkQ7O0FBSUEsTUFBSVMsWUFBWSxTQUFTQSxTQUFULEdBQXFCO0FBQ25DLFdBQU9ULEdBQUcsQ0FBSCxDQUFQO0FBQ0QsR0FGRDs7QUFJQSxNQUFJVSxnQkFBZ0IsQ0FBcEI7O0FBRUEsTUFBSUMsb0JBQW9CLFNBQVNBLGlCQUFULENBQTJCNVMsS0FBM0IsRUFBa0M7QUFDeEQyUyxxQkFBaUIzUyxLQUFqQjs7QUFFQSxRQUFJMlMsa0JBQWtCLENBQXRCLEVBQXlCO0FBQ3ZCLE9BQUMsR0FBRzVELFVBQVVsUCxnQkFBZCxFQUFnQ1gsTUFBaEMsRUFBd0MrUCxhQUF4QyxFQUF1RGtDLGNBQXZEOztBQUVBLFVBQUl4Qix1QkFBSixFQUE2QixDQUFDLEdBQUdaLFVBQVVsUCxnQkFBZCxFQUFnQ1gsTUFBaEMsRUFBd0NnUSxlQUF4QyxFQUF5RHFDLGdCQUF6RDtBQUM5QixLQUpELE1BSU8sSUFBSW9CLGtCQUFrQixDQUF0QixFQUF5QjtBQUM5QixPQUFDLEdBQUc1RCxVQUFVMU8sbUJBQWQsRUFBbUNuQixNQUFuQyxFQUEyQytQLGFBQTNDLEVBQTBEa0MsY0FBMUQ7O0FBRUEsVUFBSXhCLHVCQUFKLEVBQTZCLENBQUMsR0FBR1osVUFBVTFPLG1CQUFkLEVBQW1DbkIsTUFBbkMsRUFBMkNnUSxlQUEzQyxFQUE0RHFDLGdCQUE1RDtBQUM5QjtBQUNGLEdBWkQ7O0FBY0EsTUFBSXNCLFlBQVksS0FBaEI7O0FBRUEsTUFBSUMsUUFBUSxTQUFTQSxLQUFULEdBQWlCO0FBQzNCLFFBQUlDLFNBQVM5UCxVQUFVNUIsTUFBVixHQUFtQixDQUFuQixJQUF3QjRCLFVBQVUsQ0FBVixNQUFpQkMsU0FBekMsR0FBcURELFVBQVUsQ0FBVixDQUFyRCxHQUFvRSxLQUFqRjs7QUFFQSxRQUFJK1AsVUFBVWxDLGtCQUFrQm1DLFNBQWxCLENBQTRCRixNQUE1QixDQUFkOztBQUVBLFFBQUksQ0FBQ0YsU0FBTCxFQUFnQjtBQUNkRCx3QkFBa0IsQ0FBbEI7QUFDQUMsa0JBQVksSUFBWjtBQUNEOztBQUVELFdBQU8sWUFBWTtBQUNqQixVQUFJQSxTQUFKLEVBQWU7QUFDYkEsb0JBQVksS0FBWjtBQUNBRCwwQkFBa0IsQ0FBQyxDQUFuQjtBQUNEOztBQUVELGFBQU9JLFNBQVA7QUFDRCxLQVBEO0FBUUQsR0FsQkQ7O0FBb0JBLE1BQUlFLFNBQVMsU0FBU0EsTUFBVCxDQUFnQkMsUUFBaEIsRUFBMEI7QUFDckMsUUFBSUMsV0FBV3RDLGtCQUFrQnVDLGNBQWxCLENBQWlDRixRQUFqQyxDQUFmO0FBQ0FQLHNCQUFrQixDQUFsQjs7QUFFQSxXQUFPLFlBQVk7QUFDakJBLHdCQUFrQixDQUFDLENBQW5CO0FBQ0FRO0FBQ0QsS0FIRDtBQUlELEdBUkQ7O0FBVUEsTUFBSTVKLFVBQVU7QUFDWm5JLFlBQVFtTyxjQUFjbk8sTUFEVjtBQUVaNlAsWUFBUSxLQUZJO0FBR1p2SixjQUFVdUssZUFIRTtBQUlaQyxnQkFBWUEsVUFKQTtBQUtacE4sVUFBTUEsSUFMTTtBQU1adEUsYUFBU0EsT0FORztBQU9ad1IsUUFBSUEsRUFQUTtBQVFaUSxZQUFRQSxNQVJJO0FBU1pDLGVBQVdBLFNBVEM7QUFVWkksV0FBT0EsS0FWSztBQVdaSSxZQUFRQTtBQVhJLEdBQWQ7O0FBY0EsU0FBTzFKLE9BQVA7QUFDRCxDQW5RRDs7QUFxUUEvRixRQUFRdUwsT0FBUixHQUFrQkssb0JBQWxCLEM7Ozs7Ozs7QUNsVEE7Ozs7Ozs7OztBQVNBOztBQUVBOzs7Ozs7Ozs7OztBQVdBLElBQUlpRSxZQUFZLFVBQVN2USxTQUFULEVBQW9CekMsTUFBcEIsRUFBNEJrTixDQUE1QixFQUErQkMsQ0FBL0IsRUFBa0M4RixDQUFsQyxFQUFxQ3RSLENBQXJDLEVBQXdDbEMsQ0FBeEMsRUFBMkN5VCxDQUEzQyxFQUE4QztBQUM1RCxNQUFJNVEsUUFBUUMsR0FBUixDQUFZQyxRQUFaLEtBQXlCLFlBQTdCLEVBQTJDO0FBQ3pDLFFBQUl4QyxXQUFXNEMsU0FBZixFQUEwQjtBQUN4QixZQUFNLElBQUlDLEtBQUosQ0FBVSw4Q0FBVixDQUFOO0FBQ0Q7QUFDRjs7QUFFRCxNQUFJLENBQUNKLFNBQUwsRUFBZ0I7QUFDZCxRQUFJbkQsS0FBSjtBQUNBLFFBQUlVLFdBQVc0QyxTQUFmLEVBQTBCO0FBQ3hCdEQsY0FBUSxJQUFJdUQsS0FBSixDQUNOLHVFQUNBLDZEQUZNLENBQVI7QUFJRCxLQUxELE1BS087QUFDTCxVQUFJSCxPQUFPLENBQUN3SyxDQUFELEVBQUlDLENBQUosRUFBTzhGLENBQVAsRUFBVXRSLENBQVYsRUFBYWxDLENBQWIsRUFBZ0J5VCxDQUFoQixDQUFYO0FBQ0EsVUFBSW5RLFdBQVcsQ0FBZjtBQUNBekQsY0FBUSxJQUFJdUQsS0FBSixDQUNON0MsT0FBT0csT0FBUCxDQUFlLEtBQWYsRUFBc0IsWUFBVztBQUFFLGVBQU91QyxLQUFLSyxVQUFMLENBQVA7QUFBMEIsT0FBN0QsQ0FETSxDQUFSO0FBR0F6RCxZQUFNZSxJQUFOLEdBQWEscUJBQWI7QUFDRDs7QUFFRGYsVUFBTTZULFdBQU4sR0FBb0IsQ0FBcEIsQ0FoQmMsQ0FnQlM7QUFDdkIsVUFBTTdULEtBQU47QUFDRDtBQUNGLENBMUJEOztBQTRCQTRELE9BQU9DLE9BQVAsR0FBaUI2UCxTQUFqQixDOzs7Ozs7OztBQ2xEQTs7QUFFQTdQLFFBQVErQyxVQUFSLEdBQXFCLElBQXJCO0FBQ0EvQyxRQUFRaVEsaUJBQVIsR0FBNEJqUSxRQUFRZ04sY0FBUixHQUF5QnZOLFNBQXJEOztBQUVBLElBQUkrSyxXQUFXbEcsT0FBT21HLE1BQVAsSUFBaUIsVUFBVUMsTUFBVixFQUFrQjtBQUFFLE9BQUssSUFBSXJKLElBQUksQ0FBYixFQUFnQkEsSUFBSTdCLFVBQVU1QixNQUE5QixFQUFzQ3lELEdBQXRDLEVBQTJDO0FBQUUsUUFBSS9ELFNBQVNrQyxVQUFVNkIsQ0FBVixDQUFiLENBQTJCLEtBQUssSUFBSXJELEdBQVQsSUFBZ0JWLE1BQWhCLEVBQXdCO0FBQUUsVUFBSWdILE9BQU83RyxTQUFQLENBQWlCa04sY0FBakIsQ0FBZ0NoTixJQUFoQyxDQUFxQ0wsTUFBckMsRUFBNkNVLEdBQTdDLENBQUosRUFBdUQ7QUFBRTBNLGVBQU8xTSxHQUFQLElBQWNWLE9BQU9VLEdBQVAsQ0FBZDtBQUE0QjtBQUFFO0FBQUUsR0FBQyxPQUFPME0sTUFBUDtBQUFnQixDQUFoUTs7QUFFQSxJQUFJd0YsbUJBQW1CLG1CQUFBckYsQ0FBUSxFQUFSLENBQXZCOztBQUVBLElBQUlzRixvQkFBb0JwRix1QkFBdUJtRixnQkFBdkIsQ0FBeEI7O0FBRUEsSUFBSUUsY0FBYyxtQkFBQXZGLENBQVEsRUFBUixDQUFsQjs7QUFFQSxJQUFJd0YsZUFBZXRGLHVCQUF1QnFGLFdBQXZCLENBQW5COztBQUVBLElBQUlqRixhQUFhLG1CQUFBTixDQUFRLENBQVIsQ0FBakI7O0FBRUEsU0FBU0Usc0JBQVQsQ0FBZ0NULEdBQWhDLEVBQXFDO0FBQUUsU0FBT0EsT0FBT0EsSUFBSXZILFVBQVgsR0FBd0J1SCxHQUF4QixHQUE4QixFQUFFaUIsU0FBU2pCLEdBQVgsRUFBckM7QUFBd0Q7O0FBRS9GLElBQUkwQyxpQkFBaUJoTixRQUFRZ04sY0FBUixHQUF5QixTQUFTQSxjQUFULENBQXdCL0osSUFBeEIsRUFBOEIwSSxLQUE5QixFQUFxQzNOLEdBQXJDLEVBQTBDc1MsZUFBMUMsRUFBMkQ7QUFDdkcsTUFBSXBNLFdBQVcsS0FBSyxDQUFwQjtBQUNBLE1BQUksT0FBT2pCLElBQVAsS0FBZ0IsUUFBcEIsRUFBOEI7QUFDNUI7QUFDQWlCLGVBQVcsQ0FBQyxHQUFHaUgsV0FBV3pILFNBQWYsRUFBMEJULElBQTFCLENBQVg7QUFDQWlCLGFBQVN5SCxLQUFULEdBQWlCQSxLQUFqQjtBQUNELEdBSkQsTUFJTztBQUNMO0FBQ0F6SCxlQUFXc0csU0FBUyxFQUFULEVBQWF2SCxJQUFiLENBQVg7O0FBRUEsUUFBSWlCLFNBQVNQLFFBQVQsS0FBc0JsRSxTQUExQixFQUFxQ3lFLFNBQVNQLFFBQVQsR0FBb0IsRUFBcEI7O0FBRXJDLFFBQUlPLFNBQVNOLE1BQWIsRUFBcUI7QUFDbkIsVUFBSU0sU0FBU04sTUFBVCxDQUFnQlYsTUFBaEIsQ0FBdUIsQ0FBdkIsTUFBOEIsR0FBbEMsRUFBdUNnQixTQUFTTixNQUFULEdBQWtCLE1BQU1NLFNBQVNOLE1BQWpDO0FBQ3hDLEtBRkQsTUFFTztBQUNMTSxlQUFTTixNQUFULEdBQWtCLEVBQWxCO0FBQ0Q7O0FBRUQsUUFBSU0sU0FBU0wsSUFBYixFQUFtQjtBQUNqQixVQUFJSyxTQUFTTCxJQUFULENBQWNYLE1BQWQsQ0FBcUIsQ0FBckIsTUFBNEIsR0FBaEMsRUFBcUNnQixTQUFTTCxJQUFULEdBQWdCLE1BQU1LLFNBQVNMLElBQS9CO0FBQ3RDLEtBRkQsTUFFTztBQUNMSyxlQUFTTCxJQUFULEdBQWdCLEVBQWhCO0FBQ0Q7O0FBRUQsUUFBSThILFVBQVVsTSxTQUFWLElBQXVCeUUsU0FBU3lILEtBQVQsS0FBbUJsTSxTQUE5QyxFQUF5RHlFLFNBQVN5SCxLQUFULEdBQWlCQSxLQUFqQjtBQUMxRDs7QUFFRCxNQUFJO0FBQ0Z6SCxhQUFTUCxRQUFULEdBQW9CNE0sVUFBVXJNLFNBQVNQLFFBQW5CLENBQXBCO0FBQ0QsR0FGRCxDQUVFLE9BQU9ySCxDQUFQLEVBQVU7QUFDVixRQUFJQSxhQUFha1UsUUFBakIsRUFBMkI7QUFDekIsWUFBTSxJQUFJQSxRQUFKLENBQWEsZUFBZXRNLFNBQVNQLFFBQXhCLEdBQW1DLDBCQUFuQyxHQUFnRSx1REFBN0UsQ0FBTjtBQUNELEtBRkQsTUFFTztBQUNMLFlBQU1ySCxDQUFOO0FBQ0Q7QUFDRjs7QUFFRCxNQUFJMEIsR0FBSixFQUFTa0csU0FBU2xHLEdBQVQsR0FBZUEsR0FBZjs7QUFFVCxNQUFJc1MsZUFBSixFQUFxQjtBQUNuQjtBQUNBLFFBQUksQ0FBQ3BNLFNBQVNQLFFBQWQsRUFBd0I7QUFDdEJPLGVBQVNQLFFBQVQsR0FBb0IyTSxnQkFBZ0IzTSxRQUFwQztBQUNELEtBRkQsTUFFTyxJQUFJTyxTQUFTUCxRQUFULENBQWtCVCxNQUFsQixDQUF5QixDQUF6QixNQUFnQyxHQUFwQyxFQUF5QztBQUM5Q2dCLGVBQVNQLFFBQVQsR0FBb0IsQ0FBQyxHQUFHd00sa0JBQWtCNUUsT0FBdEIsRUFBK0JySCxTQUFTUCxRQUF4QyxFQUFrRDJNLGdCQUFnQjNNLFFBQWxFLENBQXBCO0FBQ0Q7QUFDRixHQVBELE1BT087QUFDTDtBQUNBLFFBQUksQ0FBQ08sU0FBU1AsUUFBZCxFQUF3QjtBQUN0Qk8sZUFBU1AsUUFBVCxHQUFvQixHQUFwQjtBQUNEO0FBQ0Y7O0FBRUQsU0FBT08sUUFBUDtBQUNELENBdEREOztBQXdEQSxJQUFJK0wsb0JBQW9CalEsUUFBUWlRLGlCQUFSLEdBQTRCLFNBQVNBLGlCQUFULENBQTJCbEcsQ0FBM0IsRUFBOEJDLENBQTlCLEVBQWlDO0FBQ25GLFNBQU9ELEVBQUVwRyxRQUFGLEtBQWVxRyxFQUFFckcsUUFBakIsSUFBNkJvRyxFQUFFbkcsTUFBRixLQUFhb0csRUFBRXBHLE1BQTVDLElBQXNEbUcsRUFBRWxHLElBQUYsS0FBV21HLEVBQUVuRyxJQUFuRSxJQUEyRWtHLEVBQUUvTCxHQUFGLEtBQVVnTSxFQUFFaE0sR0FBdkYsSUFBOEYsQ0FBQyxHQUFHcVMsYUFBYTlFLE9BQWpCLEVBQTBCeEIsRUFBRTRCLEtBQTVCLEVBQW1DM0IsRUFBRTJCLEtBQXJDLENBQXJHO0FBQ0QsQ0FGRCxDOzs7Ozs7O0FDM0VBO0FBQUEsU0FBUzhFLFVBQVQsQ0FBb0I5TSxRQUFwQixFQUE4QjtBQUM1QixTQUFPQSxTQUFTVCxNQUFULENBQWdCLENBQWhCLE1BQXVCLEdBQTlCO0FBQ0Q7O0FBRUQ7QUFDQSxTQUFTd04sU0FBVCxDQUFtQkMsSUFBbkIsRUFBeUJDLEtBQXpCLEVBQWdDO0FBQzlCLE9BQUssSUFBSXZQLElBQUl1UCxLQUFSLEVBQWVDLElBQUl4UCxJQUFJLENBQXZCLEVBQTBCME4sSUFBSTRCLEtBQUsvUyxNQUF4QyxFQUFnRGlULElBQUk5QixDQUFwRCxFQUF1RDFOLEtBQUssQ0FBTCxFQUFRd1AsS0FBSyxDQUFwRSxFQUF1RTtBQUNyRUYsU0FBS3RQLENBQUwsSUFBVXNQLEtBQUtFLENBQUwsQ0FBVjtBQUNEOztBQUVERixPQUFLRyxHQUFMO0FBQ0Q7O0FBRUQ7QUFDQSxTQUFTQyxlQUFULENBQXlCQyxFQUF6QixFQUE2QjtBQUMzQixNQUFJQyxPQUFPelIsVUFBVTVCLE1BQVYsR0FBbUIsQ0FBbkIsSUFBd0I0QixVQUFVLENBQVYsTUFBaUJDLFNBQXpDLEdBQXFERCxVQUFVLENBQVYsQ0FBckQsR0FBb0UsRUFBL0U7O0FBRUEsTUFBSTBSLFVBQVVGLE1BQU1BLEdBQUduSixLQUFILENBQVMsR0FBVCxDQUFOLElBQXVCLEVBQXJDO0FBQ0EsTUFBSXNKLFlBQVlGLFFBQVFBLEtBQUtwSixLQUFMLENBQVcsR0FBWCxDQUFSLElBQTJCLEVBQTNDOztBQUVBLE1BQUl1SixVQUFVSixNQUFNUCxXQUFXTyxFQUFYLENBQXBCO0FBQ0EsTUFBSUssWUFBWUosUUFBUVIsV0FBV1EsSUFBWCxDQUF4QjtBQUNBLE1BQUlLLGFBQWFGLFdBQVdDLFNBQTVCOztBQUVBLE1BQUlMLE1BQU1QLFdBQVdPLEVBQVgsQ0FBVixFQUEwQjtBQUN4QjtBQUNBRyxnQkFBWUQsT0FBWjtBQUNELEdBSEQsTUFHTyxJQUFJQSxRQUFRdFQsTUFBWixFQUFvQjtBQUN6QjtBQUNBdVQsY0FBVUwsR0FBVjtBQUNBSyxnQkFBWUEsVUFBVW5RLE1BQVYsQ0FBaUJrUSxPQUFqQixDQUFaO0FBQ0Q7O0FBRUQsTUFBSSxDQUFDQyxVQUFVdlQsTUFBZixFQUF1QixPQUFPLEdBQVA7O0FBRXZCLE1BQUkyVCxtQkFBbUIsS0FBSyxDQUE1QjtBQUNBLE1BQUlKLFVBQVV2VCxNQUFkLEVBQXNCO0FBQ3BCLFFBQUk0VCxPQUFPTCxVQUFVQSxVQUFVdlQsTUFBVixHQUFtQixDQUE3QixDQUFYO0FBQ0EyVCx1QkFBbUJDLFNBQVMsR0FBVCxJQUFnQkEsU0FBUyxJQUF6QixJQUFpQ0EsU0FBUyxFQUE3RDtBQUNELEdBSEQsTUFHTztBQUNMRCx1QkFBbUIsS0FBbkI7QUFDRDs7QUFFRCxNQUFJRSxLQUFLLENBQVQ7QUFDQSxPQUFLLElBQUlwUSxJQUFJOFAsVUFBVXZULE1BQXZCLEVBQStCeUQsS0FBSyxDQUFwQyxFQUF1Q0EsR0FBdkMsRUFBNEM7QUFDMUMsUUFBSXFRLE9BQU9QLFVBQVU5UCxDQUFWLENBQVg7O0FBRUEsUUFBSXFRLFNBQVMsR0FBYixFQUFrQjtBQUNoQmhCLGdCQUFVUyxTQUFWLEVBQXFCOVAsQ0FBckI7QUFDRCxLQUZELE1BRU8sSUFBSXFRLFNBQVMsSUFBYixFQUFtQjtBQUN4QmhCLGdCQUFVUyxTQUFWLEVBQXFCOVAsQ0FBckI7QUFDQW9RO0FBQ0QsS0FITSxNQUdBLElBQUlBLEVBQUosRUFBUTtBQUNiZixnQkFBVVMsU0FBVixFQUFxQjlQLENBQXJCO0FBQ0FvUTtBQUNEO0FBQ0Y7O0FBRUQsTUFBSSxDQUFDSCxVQUFMLEVBQWlCLE9BQU9HLElBQVAsRUFBYUEsRUFBYixFQUFpQjtBQUNoQ04sY0FBVVEsT0FBVixDQUFrQixJQUFsQjtBQUNELE9BQUlMLGNBQWNILFVBQVUsQ0FBVixNQUFpQixFQUEvQixLQUFzQyxDQUFDQSxVQUFVLENBQVYsQ0FBRCxJQUFpQixDQUFDVixXQUFXVSxVQUFVLENBQVYsQ0FBWCxDQUF4RCxDQUFKLEVBQXVGQSxVQUFVUSxPQUFWLENBQWtCLEVBQWxCOztBQUV4RixNQUFJQyxTQUFTVCxVQUFVelQsSUFBVixDQUFlLEdBQWYsQ0FBYjs7QUFFQSxNQUFJNlQsb0JBQW9CSyxPQUFPeE8sTUFBUCxDQUFjLENBQUMsQ0FBZixNQUFzQixHQUE5QyxFQUFtRHdPLFVBQVUsR0FBVjs7QUFFbkQsU0FBT0EsTUFBUDtBQUNEOztBQUVELCtEQUFlYixlQUFmLEU7Ozs7Ozs7QUNyRUE7QUFBQSxJQUFJNUcsVUFBVSxPQUFPQyxNQUFQLEtBQWtCLFVBQWxCLElBQWdDLE9BQU9BLE9BQU9DLFFBQWQsS0FBMkIsUUFBM0QsR0FBc0UsVUFBVUMsR0FBVixFQUFlO0FBQUUsU0FBTyxPQUFPQSxHQUFkO0FBQW9CLENBQTNHLEdBQThHLFVBQVVBLEdBQVYsRUFBZTtBQUFFLFNBQU9BLE9BQU8sT0FBT0YsTUFBUCxLQUFrQixVQUF6QixJQUF1Q0UsSUFBSUMsV0FBSixLQUFvQkgsTUFBM0QsSUFBcUVFLFFBQVFGLE9BQU8zTSxTQUFwRixHQUFnRyxRQUFoRyxHQUEyRyxPQUFPNk0sR0FBekg7QUFBK0gsQ0FBNVE7O0FBRUEsU0FBU3VILFVBQVQsQ0FBb0I5SCxDQUFwQixFQUF1QkMsQ0FBdkIsRUFBMEI7QUFDeEIsTUFBSUQsTUFBTUMsQ0FBVixFQUFhLE9BQU8sSUFBUDs7QUFFYixNQUFJRCxLQUFLLElBQUwsSUFBYUMsS0FBSyxJQUF0QixFQUE0QixPQUFPLEtBQVA7O0FBRTVCLE1BQUl4TSxNQUFNc1UsT0FBTixDQUFjL0gsQ0FBZCxDQUFKLEVBQXNCO0FBQ3BCLFdBQU92TSxNQUFNc1UsT0FBTixDQUFjOUgsQ0FBZCxLQUFvQkQsRUFBRW5NLE1BQUYsS0FBYW9NLEVBQUVwTSxNQUFuQyxJQUE2Q21NLEVBQUVnSSxLQUFGLENBQVEsVUFBVTlILElBQVYsRUFBZ0IyRyxLQUFoQixFQUF1QjtBQUNqRixhQUFPaUIsV0FBVzVILElBQVgsRUFBaUJELEVBQUU0RyxLQUFGLENBQWpCLENBQVA7QUFDRCxLQUZtRCxDQUFwRDtBQUdEOztBQUVELE1BQUlvQixRQUFRLE9BQU9qSSxDQUFQLEtBQWEsV0FBYixHQUEyQixXQUEzQixHQUF5Q0ksUUFBUUosQ0FBUixDQUFyRDtBQUNBLE1BQUlrSSxRQUFRLE9BQU9qSSxDQUFQLEtBQWEsV0FBYixHQUEyQixXQUEzQixHQUF5Q0csUUFBUUgsQ0FBUixDQUFyRDs7QUFFQSxNQUFJZ0ksVUFBVUMsS0FBZCxFQUFxQixPQUFPLEtBQVA7O0FBRXJCLE1BQUlELFVBQVUsUUFBZCxFQUF3QjtBQUN0QixRQUFJRSxTQUFTbkksRUFBRW9JLE9BQUYsRUFBYjtBQUNBLFFBQUlDLFNBQVNwSSxFQUFFbUksT0FBRixFQUFiOztBQUVBLFFBQUlELFdBQVduSSxDQUFYLElBQWdCcUksV0FBV3BJLENBQS9CLEVBQWtDLE9BQU82SCxXQUFXSyxNQUFYLEVBQW1CRSxNQUFuQixDQUFQOztBQUVsQyxRQUFJQyxRQUFRL04sT0FBT3NGLElBQVAsQ0FBWUcsQ0FBWixDQUFaO0FBQ0EsUUFBSXVJLFFBQVFoTyxPQUFPc0YsSUFBUCxDQUFZSSxDQUFaLENBQVo7O0FBRUEsUUFBSXFJLE1BQU16VSxNQUFOLEtBQWlCMFUsTUFBTTFVLE1BQTNCLEVBQW1DLE9BQU8sS0FBUDs7QUFFbkMsV0FBT3lVLE1BQU1OLEtBQU4sQ0FBWSxVQUFVL1QsR0FBVixFQUFlO0FBQ2hDLGFBQU82VCxXQUFXOUgsRUFBRS9MLEdBQUYsQ0FBWCxFQUFtQmdNLEVBQUVoTSxHQUFGLENBQW5CLENBQVA7QUFDRCxLQUZNLENBQVA7QUFHRDs7QUFFRCxTQUFPLEtBQVA7QUFDRDs7QUFFRCwrREFBZTZULFVBQWYsRTs7Ozs7OztBQ3JDQTs7QUFFQTdSLFFBQVErQyxVQUFSLEdBQXFCLElBQXJCOztBQUVBLElBQUk2SCxXQUFXLG1CQUFBQyxDQUFRLENBQVIsQ0FBZjs7QUFFQSxJQUFJQyxZQUFZQyx1QkFBdUJILFFBQXZCLENBQWhCOztBQUVBLFNBQVNHLHNCQUFULENBQWdDVCxHQUFoQyxFQUFxQztBQUFFLFNBQU9BLE9BQU9BLElBQUl2SCxVQUFYLEdBQXdCdUgsR0FBeEIsR0FBOEIsRUFBRWlCLFNBQVNqQixHQUFYLEVBQXJDO0FBQXdEOztBQUUvRixJQUFJaUksMEJBQTBCLFNBQVNBLHVCQUFULEdBQW1DO0FBQy9ELE1BQUlqRCxTQUFTLElBQWI7O0FBRUEsTUFBSUUsWUFBWSxTQUFTQSxTQUFULENBQW1CZ0QsVUFBbkIsRUFBK0I7QUFDN0MsS0FBQyxHQUFHMUgsVUFBVVMsT0FBZCxFQUF1QitELFVBQVUsSUFBakMsRUFBdUMsOENBQXZDOztBQUVBQSxhQUFTa0QsVUFBVDs7QUFFQSxXQUFPLFlBQVk7QUFDakIsVUFBSWxELFdBQVdrRCxVQUFmLEVBQTJCbEQsU0FBUyxJQUFUO0FBQzVCLEtBRkQ7QUFHRCxHQVJEOztBQVVBLE1BQUl0QixzQkFBc0IsU0FBU0EsbUJBQVQsQ0FBNkI5SixRQUE3QixFQUF1Q3VKLE1BQXZDLEVBQStDbEIsbUJBQS9DLEVBQW9Fa0csUUFBcEUsRUFBOEU7QUFDdEc7QUFDQTtBQUNBO0FBQ0EsUUFBSW5ELFVBQVUsSUFBZCxFQUFvQjtBQUNsQixVQUFJc0MsU0FBUyxPQUFPdEMsTUFBUCxLQUFrQixVQUFsQixHQUErQkEsT0FBT3BMLFFBQVAsRUFBaUJ1SixNQUFqQixDQUEvQixHQUEwRDZCLE1BQXZFOztBQUVBLFVBQUksT0FBT3NDLE1BQVAsS0FBa0IsUUFBdEIsRUFBZ0M7QUFDOUIsWUFBSSxPQUFPckYsbUJBQVAsS0FBK0IsVUFBbkMsRUFBK0M7QUFDN0NBLDhCQUFvQnFGLE1BQXBCLEVBQTRCYSxRQUE1QjtBQUNELFNBRkQsTUFFTztBQUNMLFdBQUMsR0FBRzNILFVBQVVTLE9BQWQsRUFBdUIsS0FBdkIsRUFBOEIsaUZBQTlCOztBQUVBa0gsbUJBQVMsSUFBVDtBQUNEO0FBQ0YsT0FSRCxNQVFPO0FBQ0w7QUFDQUEsaUJBQVNiLFdBQVcsS0FBcEI7QUFDRDtBQUNGLEtBZkQsTUFlTztBQUNMYSxlQUFTLElBQVQ7QUFDRDtBQUNGLEdBdEJEOztBQXdCQSxNQUFJaFEsWUFBWSxFQUFoQjs7QUFFQSxNQUFJbU4saUJBQWlCLFNBQVNBLGNBQVQsQ0FBd0I4QyxFQUF4QixFQUE0QjtBQUMvQyxRQUFJQyxXQUFXLElBQWY7O0FBRUEsUUFBSWpELFdBQVcsU0FBU0EsUUFBVCxHQUFvQjtBQUNqQyxVQUFJaUQsUUFBSixFQUFjRCxHQUFHalIsS0FBSCxDQUFTaEMsU0FBVCxFQUFvQkQsU0FBcEI7QUFDZixLQUZEOztBQUlBaUQsY0FBVW5CLElBQVYsQ0FBZW9PLFFBQWY7O0FBRUEsV0FBTyxZQUFZO0FBQ2pCaUQsaUJBQVcsS0FBWDtBQUNBbFEsa0JBQVlBLFVBQVUyQyxNQUFWLENBQWlCLFVBQVU2RSxJQUFWLEVBQWdCO0FBQzNDLGVBQU9BLFNBQVN5RixRQUFoQjtBQUNELE9BRlcsQ0FBWjtBQUdELEtBTEQ7QUFNRCxHQWZEOztBQWlCQSxNQUFJbEMsa0JBQWtCLFNBQVNBLGVBQVQsR0FBMkI7QUFDL0MsU0FBSyxJQUFJb0YsT0FBT3BULFVBQVU1QixNQUFyQixFQUE2QjJCLE9BQU8vQixNQUFNb1YsSUFBTixDQUFwQyxFQUFpREMsT0FBTyxDQUE3RCxFQUFnRUEsT0FBT0QsSUFBdkUsRUFBNkVDLE1BQTdFLEVBQXFGO0FBQ25GdFQsV0FBS3NULElBQUwsSUFBYXJULFVBQVVxVCxJQUFWLENBQWI7QUFDRDs7QUFFRHBRLGNBQVVxUSxPQUFWLENBQWtCLFVBQVVwRCxRQUFWLEVBQW9CO0FBQ3BDLGFBQU9BLFNBQVNqTyxLQUFULENBQWVoQyxTQUFmLEVBQTBCRixJQUExQixDQUFQO0FBQ0QsS0FGRDtBQUdELEdBUkQ7O0FBVUEsU0FBTztBQUNMaVEsZUFBV0EsU0FETjtBQUVMeEIseUJBQXFCQSxtQkFGaEI7QUFHTDRCLG9CQUFnQkEsY0FIWDtBQUlMcEMscUJBQWlCQTtBQUpaLEdBQVA7QUFNRCxDQXhFRDs7QUEwRUF4TixRQUFRdUwsT0FBUixHQUFrQmdILHVCQUFsQixDOzs7Ozs7O0FDcEZBOztBQUVBdlMsUUFBUStDLFVBQVIsR0FBcUIsSUFBckI7QUFDQSxJQUFJK0ksWUFBWTlMLFFBQVE4TCxTQUFSLEdBQW9CLENBQUMsRUFBRSxPQUFPclEsTUFBUCxLQUFrQixXQUFsQixJQUFpQ0EsT0FBT3NYLFFBQXhDLElBQW9EdFgsT0FBT3NYLFFBQVAsQ0FBZ0JDLGFBQXRFLENBQXJDOztBQUVBLElBQUk1VyxtQkFBbUI0RCxRQUFRNUQsZ0JBQVIsR0FBMkIsU0FBU0EsZ0JBQVQsQ0FBMEI2VyxJQUExQixFQUFnQ3RGLEtBQWhDLEVBQXVDK0IsUUFBdkMsRUFBaUQ7QUFDakcsU0FBT3VELEtBQUs3VyxnQkFBTCxHQUF3QjZXLEtBQUs3VyxnQkFBTCxDQUFzQnVSLEtBQXRCLEVBQTZCK0IsUUFBN0IsRUFBdUMsS0FBdkMsQ0FBeEIsR0FBd0V1RCxLQUFLQyxXQUFMLENBQWlCLE9BQU92RixLQUF4QixFQUErQitCLFFBQS9CLENBQS9FO0FBQ0QsQ0FGRDs7QUFJQSxJQUFJOVMsc0JBQXNCb0QsUUFBUXBELG1CQUFSLEdBQThCLFNBQVNBLG1CQUFULENBQTZCcVcsSUFBN0IsRUFBbUN0RixLQUFuQyxFQUEwQytCLFFBQTFDLEVBQW9EO0FBQzFHLFNBQU91RCxLQUFLclcsbUJBQUwsR0FBMkJxVyxLQUFLclcsbUJBQUwsQ0FBeUIrUSxLQUF6QixFQUFnQytCLFFBQWhDLEVBQTBDLEtBQTFDLENBQTNCLEdBQThFdUQsS0FBS0UsV0FBTCxDQUFpQixPQUFPeEYsS0FBeEIsRUFBK0IrQixRQUEvQixDQUFyRjtBQUNELENBRkQ7O0FBSUEsSUFBSWxELGtCQUFrQnhNLFFBQVF3TSxlQUFSLEdBQTBCLFNBQVNBLGVBQVQsQ0FBeUIzTSxPQUF6QixFQUFrQzRTLFFBQWxDLEVBQTRDO0FBQzFGLFNBQU9BLFNBQVNoWCxPQUFPMlgsT0FBUCxDQUFldlQsT0FBZixDQUFULENBQVA7QUFDRCxDQUZELEMsQ0FFRzs7QUFFSDs7Ozs7OztBQU9BLElBQUlvTSxrQkFBa0JqTSxRQUFRaU0sZUFBUixHQUEwQixTQUFTQSxlQUFULEdBQTJCO0FBQ3pFLE1BQUlvSCxLQUFLNVgsT0FBTzZYLFNBQVAsQ0FBaUJDLFNBQTFCOztBQUVBLE1BQUksQ0FBQ0YsR0FBR3RQLE9BQUgsQ0FBVyxZQUFYLE1BQTZCLENBQUMsQ0FBOUIsSUFBbUNzUCxHQUFHdFAsT0FBSCxDQUFXLGFBQVgsTUFBOEIsQ0FBQyxDQUFuRSxLQUF5RXNQLEdBQUd0UCxPQUFILENBQVcsZUFBWCxNQUFnQyxDQUFDLENBQTFHLElBQStHc1AsR0FBR3RQLE9BQUgsQ0FBVyxRQUFYLE1BQXlCLENBQUMsQ0FBekksSUFBOElzUCxHQUFHdFAsT0FBSCxDQUFXLGVBQVgsTUFBZ0MsQ0FBQyxDQUFuTCxFQUFzTCxPQUFPLEtBQVA7O0FBRXRMLFNBQU90SSxPQUFPc0ssT0FBUCxJQUFrQixlQUFldEssT0FBT3NLLE9BQS9DO0FBQ0QsQ0FORDs7QUFRQTs7OztBQUlBLElBQUlvRywrQkFBK0JuTSxRQUFRbU0sNEJBQVIsR0FBdUMsU0FBU0EsNEJBQVQsR0FBd0M7QUFDaEgsU0FBTzFRLE9BQU82WCxTQUFQLENBQWlCQyxTQUFqQixDQUEyQnhQLE9BQTNCLENBQW1DLFNBQW5DLE1BQWtELENBQUMsQ0FBMUQ7QUFDRCxDQUZEOztBQUlBOzs7QUFHQSxJQUFJeVAsbUNBQW1DeFQsUUFBUXdULGdDQUFSLEdBQTJDLFNBQVNBLGdDQUFULEdBQTRDO0FBQzVILFNBQU8vWCxPQUFPNlgsU0FBUCxDQUFpQkMsU0FBakIsQ0FBMkJ4UCxPQUEzQixDQUFtQyxTQUFuQyxNQUFrRCxDQUFDLENBQTFEO0FBQ0QsQ0FGRDs7QUFJQTs7Ozs7QUFLQSxJQUFJNkosNEJBQTRCNU4sUUFBUTROLHlCQUFSLEdBQW9DLFNBQVNBLHlCQUFULENBQW1DRCxLQUFuQyxFQUEwQztBQUM1RyxTQUFPQSxNQUFNaEMsS0FBTixLQUFnQmxNLFNBQWhCLElBQTZCNlQsVUFBVUMsU0FBVixDQUFvQnhQLE9BQXBCLENBQTRCLE9BQTVCLE1BQXlDLENBQUMsQ0FBOUU7QUFDRCxDQUZELEM7Ozs7Ozs7Ozs7O0FDcERBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNL0ksU0FBUyx1REFBQXdNLENBQU94TSxNQUF0Qjs7QUFFQVksRUFBRW1YLFFBQUYsRUFBWVUsS0FBWixDQUFrQixZQUFXO0FBQzNCLFFBQU1DLFdBQVc5WCxFQUFFLG1CQUFGLENBQWpCO0FBQ0EsUUFBTUQsUUFBUUMsRUFBRSxNQUFGLENBQWQ7QUFDQSxRQUFNK1gsaUJBQWlCL1gsRUFBRSxtQkFBRixDQUF2QjtBQUNBLFFBQU1nWSxlQUFlaFksRUFBRSxrQkFBRixDQUFyQjtBQUNBLE1BQUlpWSxrQkFBa0IsS0FBdEI7QUFDQSxNQUFJQyxvQkFBb0IsSUFBeEI7O0FBRUFILGlCQUNHL04sSUFESCxDQUVJNUssT0FDRzRKLEdBREgsQ0FDTzZDLFNBQVM7QUFDWixVQUFNc00sYUFBYSwyREFBQXpZLENBQVdtTSxLQUFYLEtBQXFCQSxLQUFyQixHQUE2QixVQUE3QixHQUEwQyxFQUE3RDtBQUNBLFdBQVEsa0JBQWlCQSxLQUFNLEtBQUlzTSxVQUFXLElBQUd0TSxLQUFNLFdBQXZEO0FBQ0QsR0FKSCxFQUtHL0osSUFMSCxDQUtRLEVBTFIsQ0FGSixFQVNHc0UsRUFUSCxDQVNNLFFBVE4sRUFTZ0IsWUFBVztBQUN2QixVQUFNdUUsUUFBUTNLLEVBQUUsSUFBRixDQUFkO0FBQ0EsVUFBTTZMLFFBQVFsQixNQUFNeU4sR0FBTixFQUFkOztBQUVBLFFBQUl2TSxVQUFVLDJEQUFBbk0sQ0FBV21NLEtBQXpCLEVBQWdDO0FBQzlCOUwsWUFBTTZLLFFBQU4sQ0FBZSxXQUFXaUIsS0FBMUIsRUFBaUNmLFdBQWpDLENBQTZDLFdBQVcsMkRBQUFwTCxDQUFXbU0sS0FBbkU7QUFDQW5NLE1BQUEsMkRBQUFBLENBQVdxTSxRQUFYLENBQW9CRixLQUFwQjtBQUNEO0FBQ0YsR0FqQkg7O0FBbUJBOUwsUUFBTTZLLFFBQU4sQ0FBZSxXQUFXLDJEQUFBbEwsQ0FBV21NLEtBQXJDOztBQUVBaU0sV0FDRzFSLEVBREgsQ0FDTSxPQUROLEVBQ2UsaUJBRGYsRUFDa0MsWUFBVztBQUN6QyxVQUFNdUUsUUFBUTNLLEVBQUUsSUFBRixDQUFkOztBQUVBLFFBQUkySyxNQUFNekssRUFBTixDQUFTLFNBQVQsQ0FBSixFQUF5QjtBQUN2Qm1ZO0FBQ0ExTixZQUFNRyxXQUFOLENBQWtCLFFBQWxCO0FBQ0QsS0FIRCxNQUdPO0FBQ0x3TjtBQUNBL1AsY0FBUTdCLElBQVIsQ0FBYSxnQkFBYixFQUErQixFQUFFb0ksUUFBUSxNQUFWLEVBQS9CO0FBQ0FuRSxZQUNHQyxRQURILENBQ1ksUUFEWixFQUVHQyxRQUZILEdBR0dDLFdBSEgsQ0FHZSxRQUhmO0FBSUQ7QUFDRixHQWZILEVBZ0JHMUUsRUFoQkgsQ0FnQk0sT0FoQk4sRUFnQmUsbUJBaEJmLEVBZ0JvQyxZQUFXO0FBQzNDLFVBQU11RSxRQUFRM0ssRUFBRSxJQUFGLENBQWQ7O0FBRUEsUUFBSTJLLE1BQU16SyxFQUFOLENBQVMsU0FBVCxDQUFKLEVBQXlCO0FBQ3ZCbVk7QUFDQTFOLFlBQU1HLFdBQU4sQ0FBa0IsUUFBbEI7QUFDRCxLQUhELE1BR087QUFDTHdOOztBQUVBM04sWUFDR0MsUUFESCxDQUNZLFFBRFosRUFFR0MsUUFGSCxHQUdHQyxXQUhILENBR2UsUUFIZjs7QUFLQTtBQUFBO0FBQUEsdUNBQU8sb0NBQXFDLEVBQTVDO0FBQUE7QUFBQSxTQUFpRnlOLElBQWpGLENBQXNGLE1BQU07QUFDMUZoUSxnQkFBUTdCLElBQVIsQ0FBYSxnQkFBYixFQUErQixFQUFFb0ksUUFBUSxRQUFWLEVBQS9CO0FBQ0QsT0FGRDtBQUdEO0FBQ0YsR0FsQ0g7O0FBb0NBLFdBQVN3SixlQUFULEdBQTJCO0FBQ3pCTixpQkFBYWxOLFdBQWIsQ0FBeUIsUUFBekI7QUFDQW9OLHdCQUFvQixJQUFwQjtBQUNEO0FBQ0QsV0FBU0csZUFBVCxHQUEyQjtBQUN6QkwsaUJBQWFwTixRQUFiLENBQXNCLFFBQXRCO0FBQ0FzTix3QkFBb0IsS0FBcEI7QUFDRDtBQUNGLENBekVELEU7Ozs7OztBQ05BLHlDOzs7Ozs7Ozs7O0FDQUE7QUFDQTs7QUFFQWxZLEVBQUUsWUFBVztBQUNYLFFBQU13WSxhQUFheFksRUFBRSxlQUFGLENBQW5CO0FBQ0EsUUFBTXlZLFlBQVl6WSxFQUFFLGNBQUYsQ0FBbEI7QUFDQSxRQUFNMFksZUFBZUYsV0FBV3RPLElBQVgsQ0FBZ0IsaUJBQWhCLENBQXJCO0FBQ0EsUUFBTXlPLFdBQVczWSxFQUFFLGNBQUYsQ0FBakI7O0FBRUF1SSxVQUFRbkMsRUFBUixDQUFXLGdCQUFYLEVBQTZCLENBQUMsRUFBRTBJLE1BQUYsRUFBRCxLQUFnQjtBQUMzQyxVQUFNOEosV0FBVzlKLFdBQVcsUUFBNUI7O0FBRUEsUUFBSThKLFFBQUosRUFBYztBQUNaSCxnQkFBVUksSUFBVjtBQUNBTCxpQkFBVzFOLFdBQVgsQ0FBdUIsUUFBdkI7QUFDQTROLG1CQUFhSSxLQUFiO0FBQ0QsS0FKRCxNQUlPO0FBQ0xMLGdCQUFVTSxJQUFWO0FBQ0FQLGlCQUFXNU4sUUFBWCxDQUFvQixRQUFwQjtBQUNEO0FBQ0YsR0FYRDtBQVlELENBbEJELEU7Ozs7Ozs7Ozs7QUNIQTtBQUNBOztBQUVBNUssRUFBRW1YLFFBQUYsRUFBWVUsS0FBWixDQUFrQixZQUFXO0FBQzNCLFFBQU1jLFdBQVczWSxFQUFFLGNBQUYsQ0FBakI7QUFDQSxRQUFNZ1osWUFBWWhaLEVBQUUscUJBQUYsQ0FBbEI7QUFDQSxRQUFNK0gsV0FBV08sU0FBU1AsUUFBMUI7QUFDQSxRQUFNaEksUUFBUUMsRUFBRSxNQUFGLENBQWQ7QUFDQSxRQUFNaVosZ0JBQWdCTixTQUFTek8sSUFBVCxDQUFjLGtCQUFkLENBQXRCOztBQUVBLFFBQU1nUCxPQUFPLEVBQWI7QUFDQSxRQUFNQyxVQUFVLEVBQWhCO0FBQ0FILFlBQVU5TyxJQUFWLENBQWUsU0FBZixFQUEwQmtQLElBQTFCLENBQStCLFlBQVc7QUFDeEMsVUFBTUMsUUFBUXJaLEVBQUUsSUFBRixDQUFkO0FBQ0EsVUFBTWlLLE9BQU9vUCxNQUFNM08sSUFBTixDQUFXLE1BQVgsQ0FBYjtBQUNBLFVBQU00TyxRQUFRRCxNQUFNblAsSUFBTixDQUFXLFFBQVgsQ0FBZDs7QUFFQSxRQUFJbkMsU0FBU3dSLFFBQVQsQ0FBa0J0UCxJQUFsQixDQUFKLEVBQTZCO0FBQzNCb1AsWUFBTXpPLFFBQU4sQ0FBZSxRQUFmO0FBQ0Q7O0FBRUQsUUFBSTBPLE1BQU10WCxNQUFOLEtBQWlCLENBQXJCLEVBQXdCO0FBQ3RCbVgsY0FBUXpULElBQVIsQ0FBYTJULE1BQU0sQ0FBTixFQUFTRyxTQUF0QjtBQUNELEtBRkQsTUFFTztBQUNMRixZQUFNRixJQUFOLENBQVcsWUFBVztBQUNwQixjQUFNSyxNQUFNLEtBQUtDLFNBQWpCO0FBQ0EsWUFBSSxDQUFDUixLQUFLTyxHQUFMLENBQUwsRUFBZ0I7QUFDZFAsZUFBS08sR0FBTCxJQUFZLEVBQVo7QUFDRDs7QUFFRFAsYUFBS08sR0FBTCxFQUFVL1QsSUFBVixDQUFlMlQsTUFBTSxDQUFOLEVBQVNHLFNBQXhCO0FBQ0QsT0FQRDtBQVFEO0FBQ0YsR0FyQkQ7O0FBdUJBOzs7QUFHQWIsV0FBU3pPLElBQVQsQ0FBYyxvQkFBZCxFQUFvQ2tQLElBQXBDLENBQXlDLFlBQVc7QUFDbEQsVUFBTXpPLFFBQVEzSyxFQUFFLElBQUYsQ0FBZDtBQUNBLFVBQU1vTixRQUFROEwsS0FBS3ZPLE1BQU1ELElBQU4sQ0FBVyxLQUFYLENBQUwsQ0FBZDs7QUFFQSxRQUFJLENBQUMwQyxLQUFMLEVBQVk7QUFDVnpDLFlBQ0dYLElBREgsQ0FDUSxxRUFEUixFQUVHUyxNQUZILEdBR0dHLFFBSEgsQ0FHWSxhQUhaO0FBSUE7QUFDRDs7QUFFREQsVUFBTVgsSUFBTixDQUFXb0QsTUFBTXRMLElBQU4sQ0FBVyxFQUFYLENBQVgsRUFBMkI2WCxHQUEzQixDQUErQjtBQUM3QkMsY0FBUSxLQUFLeE0sTUFBTXBMO0FBRFUsS0FBL0I7QUFHRCxHQWZEOztBQWlCQWlYLGdCQUFjalAsSUFBZCxDQUFtQm1QLFFBQVFyWCxJQUFSLENBQWEsRUFBYixDQUFuQjs7QUFFQSxRQUFNK1gsU0FBUzdaLEVBQUUsMkJBQUYsQ0FBZjs7QUFFQTtBQUNBMlksV0FDRy9OLFFBREgsQ0FDWSxnQkFEWixFQUVHeEUsRUFGSCxDQUVNLE9BRk4sRUFFZSxzQkFGZixFQUV1QyxZQUFXO0FBQzlDcEcsTUFBRSxJQUFGLEVBQ0d5SyxNQURILEdBRUdxUCxXQUZILENBRWUsYUFGZjtBQUdELEdBTkgsRUFPRzFULEVBUEgsQ0FPTSxPQVBOLEVBT2UsWUFQZixFQU82QixVQUFTMUYsQ0FBVCxFQUFZO0FBQ3JDLFVBQU1pSyxRQUFRM0ssRUFBRSxJQUFGLENBQWQ7O0FBRUEsUUFBSSxDQUFDRCxNQUFNRyxFQUFOLENBQVMsZ0JBQVQsQ0FBTCxFQUFpQzs7QUFFakMsUUFBSXlLLE1BQU1vUCxPQUFOLENBQWMsU0FBZCxFQUF5QjdaLEVBQXpCLENBQTRCLFNBQTVCLENBQUosRUFBNEM7QUFDMUNRLFFBQUVLLGNBQUY7QUFDQTtBQUNEOztBQUVELFVBQU0ySSxLQUFLaUIsTUFBTUQsSUFBTixDQUFXLElBQVgsQ0FBWDtBQUNBLFVBQU1OLE1BQU1PLE1BQU1xUCxJQUFOLENBQVcsTUFBWCxDQUFaOztBQUVBdFosTUFBRUssY0FBRjtBQUNBd0gsWUFBUTdCLElBQVIsQ0FBYSxjQUFiLEVBQTZCO0FBQzNCZ0QsUUFEMkI7QUFFM0JVLFNBRjJCO0FBRzNCdEUsYUFBTzZFLE1BQU1xUCxJQUFOLENBQVcsT0FBWCxDQUhvQjtBQUkzQi9QLFlBQU1VLE1BQU1vUCxPQUFOLENBQWMsU0FBZCxFQUF5QnJQLElBQXpCLENBQThCLE1BQTlCO0FBSnFCLEtBQTdCO0FBTUQsR0EzQkg7O0FBNkJBUCxFQUFBLHlEQUFBQSxDQUFRMEosTUFBUixDQUFldkwsWUFBWTtBQUN6QixVQUFNNEQsVUFBVTVELFNBQVN5SCxLQUF6Qjs7QUFFQThKLFdBQ0cvTyxXQURILENBQ2UsUUFEZixFQUVHdEIsTUFGSCxDQUVVLENBQUM4QyxHQUFELEVBQU1qRCxJQUFOLEtBQWU7QUFDckIsYUFBT3JKLEVBQUVxSixJQUFGLEVBQVFxQixJQUFSLENBQWEsTUFBYixNQUF5QndCLFFBQVFqQyxJQUF4QztBQUNELEtBSkgsRUFLR1csUUFMSCxDQUtZLFFBTFo7QUFNRCxHQVREO0FBVUQsQ0FoR0QsRTs7Ozs7O0FDSEEseUM7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7QUNBQTs7QUFFQTVLLEVBQUUsWUFBVztBQUNYLFFBQU1pYSxlQUFlamEsRUFBRSxpQkFBRixDQUFyQjs7QUFFQXVJLFVBQVFuQyxFQUFSLENBQVcsc0JBQVgsRUFBbUMsQ0FBQyxFQUFFOFQsSUFBRixFQUFELEtBQWM7QUFDL0NELGlCQUFhalEsSUFBYixDQUFrQmtRLElBQWxCO0FBQ0QsR0FGRDtBQUdELENBTkQsRTs7Ozs7O0FDRkEseUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBOztBQUVBbGEsRUFBRSxZQUFXO0FBQ1gsUUFBTUQsUUFBUUMsRUFBRSxNQUFGLENBQWQ7QUFDQSxRQUFNcVosUUFBUXJaLEVBQUUsU0FBRixDQUFkO0FBQ0EsUUFBTW1hLFNBQVNkLE1BQU1uUCxJQUFOLENBQVcsZUFBWCxDQUFmO0FBQ0EsUUFBTWtRLFdBQVdmLE1BQU1uUCxJQUFOLENBQVcsaUJBQVgsQ0FBakI7QUFDQSxRQUFNbVEsUUFBUWhCLE1BQU1uUCxJQUFOLENBQVcsY0FBWCxDQUFkO0FBQ0EsUUFBTW9RLGdCQUFnQmpCLE1BQU1uUCxJQUFOLENBQVcsdUJBQVgsQ0FBdEI7QUFDQSxRQUFNcVEsU0FBU2pTLFNBQVNpUyxNQUF4Qjs7QUFFQSxNQUFJdmEsRUFBRSxNQUFGLEVBQVVFLEVBQVYsQ0FBYSxnQkFBYixDQUFKLEVBQW9DO0FBQ2xDcUksWUFBUTdCLElBQVIsQ0FBYSxjQUFiLEVBQTZCO0FBQzNCZ0QsVUFBSTJQLE1BQU0zTyxJQUFOLENBQVcsSUFBWCxDQUR1QjtBQUUzQjVFLGFBQU91VCxNQUFNM08sSUFBTixDQUFXLE9BQVgsQ0FGb0I7QUFHM0JULFlBQU1vUCxNQUFNM08sSUFBTixDQUFXLE1BQVgsQ0FIcUI7QUFJM0JOLFdBQUtpUCxNQUFNM08sSUFBTixDQUFXLEtBQVg7QUFKc0IsS0FBN0I7O0FBT0FuQyxZQUFRN0IsSUFBUixDQUFhLHNCQUFiLEVBQXFDO0FBQ25Dd1QsWUFBTWxhLEVBQUUsd0JBQUYsRUFBNEJnSyxJQUE1QjtBQUQ2QixLQUFyQztBQUdEOztBQUVERyxFQUFBLHlEQUFBQSxDQUFRMEosTUFBUixDQUFlLENBQUN2TCxRQUFELEVBQVd1SixNQUFYLEtBQXNCO0FBQ25DLFVBQU0ySSxTQUFTbFMsU0FBU3lILEtBQVQsQ0FBZXJHLEVBQTlCOztBQUVBOFEsY0FDRSwwREFBQTVhLENBQVU0TSxTQUFWLENBQW9CZ08sTUFBcEIsRUFBNEJyTixJQUE1QixDQUFpQyxVQUFTekMsSUFBVCxFQUFlO0FBQzlDLFlBQU1yQixPQUFPcUIsS0FBSzBDLEtBQUwsQ0FBVyxDQUFYLEtBQWlCLEVBQTlCOztBQUVBLFlBQU0sRUFBRXFOLFVBQUYsRUFBYzNVLEtBQWQsRUFBcUJrRSxJQUFyQixFQUEyQjRELE1BQTNCLEVBQW1DOE0sYUFBbkMsRUFBa0RDLFVBQWxELEVBQThEdlEsR0FBOUQsS0FBc0VmLElBQTVFOztBQUVBOFEsYUFBT25RLElBQVAsQ0FBWWxFLEtBQVo7QUFDQXNVLGVBQVNwUSxJQUFULENBQWNBLElBQWQ7QUFDQXFRLFlBQU1yUSxJQUFOLENBQVksOEJBQTZCNEQsT0FBTzNELElBQUssTUFBSzJELE9BQU90TSxJQUFLLFdBQVUsa0VBQUFZLENBQVcsVUFBWCxFQUF1QnVZLFVBQXZCLENBQW1DLEVBQW5IO0FBQ0FILG9CQUFjSSxnQkFBZ0IsYUFBaEIsR0FBZ0MsVUFBOUMsRUFBMEQsUUFBMUQsRUFDR3hRLElBREgsQ0FDUSxRQURSLEVBRUd5UCxHQUZILENBRU87QUFDSGlCLHlCQUFrQixPQUFNRixhQUFjO0FBRG5DLE9BRlA7O0FBTUFuUyxjQUFRN0IsSUFBUixDQUFhLHNCQUFiLEVBQXFDO0FBQ25Dd1QsY0FBTTtBQUQ2QixPQUFyQzs7QUFJQS9DLGVBQVNyUixLQUFULEdBQWlCQSxLQUFqQjs7QUFFQSxxQkFBZSxPQUFPakcsT0FBT2diLGNBQTdCLElBQStDaGIsT0FBT2diLGNBQVAsQ0FBdUIsU0FBUUYsVUFBVyxFQUExQyxFQUE2Q0osU0FBU25RLEdBQXRELEVBQTJEdEUsS0FBM0QsQ0FBL0M7QUFDRCxLQXJCRCxDQURGO0FBdUJELEdBMUJEO0FBMkJELENBakRELEU7Ozs7OztBQ0xBLHlDOzs7Ozs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLHlDIiwiZmlsZSI6ImNvZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXTtcbiBcdHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGNodW5rSWRzLCBtb3JlTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMpIHtcbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdLCByZXN1bHQ7XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihjaHVua0lkcywgbW9yZU1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzKTtcbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdH07XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdHMgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0MTogMFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgPT09IDApIHtcbiBcdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkgeyByZXNvbHZlKCk7IH0pO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZENodW5rRGF0YVsyXTtcbiBcdFx0fVxuXG4gXHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcbiBcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcbiBcdFx0fSk7XG4gXHRcdGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2U7XG5cbiBcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHR2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gXHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiBcdFx0c2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiBcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuIFx0XHRzY3JpcHQuYXN5bmMgPSB0cnVlO1xuIFx0XHRzY3JpcHQudGltZW91dCA9IDEyMDAwMDtcblxuIFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuIFx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcbiBcdFx0fVxuIFx0XHRzY3JpcHQuc3JjID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJjaHVuay5cIiArICh7fVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5cIiArIHtcIjBcIjpcIjZkN2YzXCJ9W2NodW5rSWRdICsgXCIuanNcIjtcbiBcdFx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUsIDEyMDAwMCk7XG4gXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGU7XG4gXHRcdGZ1bmN0aW9uIG9uU2NyaXB0Q29tcGxldGUoKSB7XG4gXHRcdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuIFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG4gXHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuIFx0XHRcdHZhciBjaHVuayA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0XHRpZihjaHVuayAhPT0gMCkge1xuIFx0XHRcdFx0aWYoY2h1bmspIHtcbiBcdFx0XHRcdFx0Y2h1bmtbMV0obmV3IEVycm9yKCdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuJykpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuIFx0XHRcdH1cbiBcdFx0fTtcbiBcdFx0aGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuXG4gXHRcdHJldHVybiBwcm9taXNlO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYXNzZXRzL2J1aWx0L1wiO1xuXG4gXHQvLyBvbiBlcnJvciBmdW5jdGlvbiBmb3IgYXN5bmMgbG9hZGluZ1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHRocm93IGVycjsgfTtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA4NjVjYWQxMTc2N2E0OTY0Y2E1MSIsImltcG9ydCB7IHRoZW1lcyB9IGZyb20gJy4vdGhlbWVzL3Jlc3VsdC5qc29uJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRoZW1lcyxcbiAgbHNQb3N0VGFiS2V5OiAnY29kZXItcG9zdC10YWJzJyxcbiAgLy8gbG9jYWxzdG9yYWdlIHRoZW1lIGtleVxuICBsc1RoZW1lS2V5OiAnY29kZXItdGhlbWUnLFxuICBsc1Bvc3RzS2V5OiAnY29kZXItcG9zdHMnLFxuICBkZWZhdWx0VGhlbWU6ICdkYXJrX2RlZmF1bHQnLFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29uZmlnLmpzIiwiaW1wb3J0IGNyZWF0ZUhpc3RvcnkgZnJvbSBcImhpc3RvcnkvY3JlYXRlQnJvd3Nlckhpc3RvcnlcIlxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIaXN0b3J5KClcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGlzdG9yeS5qcyIsImltcG9ydCBUaGVtZVN0b3JlIGZyb20gJy4vVGhlbWVTdG9yZSdcbmltcG9ydCBUYWJTdG9yZSBmcm9tICcuL1RhYlN0b3JlJ1xuaW1wb3J0IFBvc3RTdG9yZSBmcm9tICcuL1Bvc3RTdG9yZSdcblxuZXhwb3J0IGNvbnN0IHRoZW1lU3RvcmUgPSBuZXcgVGhlbWVTdG9yZSgpXG5leHBvcnQgY29uc3QgdGFiU3RvcmUgPSBuZXcgVGFiU3RvcmUoKVxuZXhwb3J0IGNvbnN0IHBvc3RTdG9yZSA9IG5ldyBQb3N0U3RvcmUoKVxuXG53aW5kb3cuc3RvcmVzID0ge1xuICB0aGVtZVN0b3JlLFxuICB0YWJTdG9yZSxcbiAgcG9zdFN0b3JlXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3Jlcy9pbmRleC5qcyIsImNvbnN0ICRib2R5ID0gJCgnYm9keScpXG5cbmV4cG9ydCBjb25zdCBpc0hvbWVQYWdlID0gKCkgPT4gJGJvZHkuaXMoJy5ob21lLXRlbXBsYXRlJylcbmV4cG9ydCBjb25zdCBpc1Bvc3RQYWdlID0gKCkgPT4gJGJvZHkuaXMoJy5wb3N0LXRlbXBsYXRlJylcblxuLyoqXG4gKiBob3Jpem9udGFsbHkgc2Nyb2xsXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAqXG4gKiBAZXhhbXBsZVxuICogIGNvbnN0IHN0b3BIU2Nyb2xsID0gaFNjcm9sbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjSi1oc2Nyb2xsLWVsJykpXG4gKiAgc3RvcEhTY3JvbGwoKSAvLyByZW1vdmVFdmVudExpc3RlbmVyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoU2Nyb2xsKGVsKSB7XG4gIGlmICghZWwpIHtcbiAgICBjb25zb2xlLmVycm9yKCdNdXN0IHNwZWNpZnkgZWwhJylcbiAgICByZXR1cm5cbiAgfVxuXG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgd2hlZWwpXG5cbiAgZnVuY3Rpb24gd2hlZWwoZSkge1xuICAgIGNvbnN0IGRlbHRhID0gZS53aGVlbERlbHRhID8gZS53aGVlbERlbHRhIDogLTEgKiBlLmRlbHRhWVxuICAgIGVsLnNjcm9sbExlZnQgKz0gLWRlbHRhXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICByZXR1cm4gKCkgPT4gZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2hlZWwnLCB3aGVlbClcbn1cblxuZXhwb3J0IGNvbnN0IGZvcm1hdCA9IGZ1bmN0aW9uKHRlbXBsYXRlLCB2YXJzKSB7XG4gIHJldHVybiB0ZW1wbGF0ZS5yZXBsYWNlKC9cXCRcXHsoW15cXHtcXH1dKilcXH0vZywgZnVuY3Rpb24oXywgbmFtZSkge1xuICAgIHZhciB2YWx1ZSA9IHZhcnNbbmFtZS50cmltKCldXG4gICAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlICsgJydcbiAgfSlcbn1cblxuY29uc3QgdG9MZW4gPSBmdW5jdGlvbihzb3VyY2UsIGxlbikge1xuICByZXR1cm4gKFxuICAgIEFycmF5LnByb3RvdHlwZS5qb2luLmNhbGwoXG4gICAgICB7XG4gICAgICAgIGxlbmd0aDogbGVuICsgMVxuICAgICAgfSxcbiAgICAgICcwJ1xuICAgICkgKyBzb3VyY2VcbiAgKS5zbGljZSgtbGVuKVxufVxuXG5leHBvcnQgY29uc3QgZm9ybWF0RGF0ZSA9IGZ1bmN0aW9uKHRlbXBsYXRlLCBkYXRlKSB7XG4gIGlmICghZGF0ZSkgcmV0dXJuICcnXG4gIHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZSgvXFwkKFthLXpBLVpdKS9nLCBmdW5jdGlvbihfLCBrZXkpIHtcbiAgICByZXR1cm4gJyR7JyArIGtleSArICd9J1xuICB9KVxuICBkYXRlID0gbmV3IERhdGUoZGF0ZSlcbiAgdmFyIERBWSA9IFsn5pelJywgJ+S4gCcsICfkuownLCAn5LiJJywgJ+WbmycsICfkupQnLCAn5YWtJ11cbiAgcmV0dXJuIGZvcm1hdCh0ZW1wbGF0ZSwge1xuICAgIFk6IHRvTGVuKGRhdGUuZ2V0RnVsbFllYXIoKSwgNCksXG4gICAgeTogdG9MZW4oZGF0ZS5nZXRGdWxsWWVhcigpLCAyKSxcbiAgICBNOiB0b0xlbihkYXRlLmdldE1vbnRoKCkgKyAxLCAyKSxcbiAgICBkOiB0b0xlbihkYXRlLmdldERhdGUoKSwgMiksXG4gICAgRDogREFZW2RhdGUuZ2V0RGF5KCldLFxuICAgIEg6IHRvTGVuKGRhdGUuZ2V0SG91cnMoKSwgMiksXG4gICAgbTogdG9MZW4oZGF0ZS5nZXRNaW51dGVzKCksIDIpLFxuICAgIHM6IHRvTGVuKGRhdGUuZ2V0U2Vjb25kcygpLCAyKVxuICB9KVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzLmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgd2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5pbmcgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYXJncykge1xuICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGFyZ3MgPSBuZXcgQXJyYXkobGVuID4gMiA/IGxlbiAtIDIgOiAwKTtcbiAgICBmb3IgKHZhciBrZXkgPSAyOyBrZXkgPCBsZW47IGtleSsrKSB7XG4gICAgICBhcmdzW2tleSAtIDJdID0gYXJndW1lbnRzW2tleV07XG4gICAgfVxuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnYHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArXG4gICAgICAgICdtZXNzYWdlIGFyZ3VtZW50J1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0Lmxlbmd0aCA8IDEwIHx8ICgvXltzXFxXXSokLykudGVzdChmb3JtYXQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdUaGUgd2FybmluZyBmb3JtYXQgc2hvdWxkIGJlIGFibGUgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyAnICtcbiAgICAgICAgJ3dhcm5pbmcuIFBsZWFzZSwgdXNlIGEgbW9yZSBkZXNjcmlwdGl2ZSBmb3JtYXQgdGhhbjogJyArIGZvcm1hdFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgK1xuICAgICAgICBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICAgIH0pO1xuICAgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICB9IGNhdGNoKHgpIHt9XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdhcm5pbmc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvd2FybmluZy9icm93c2VyLmpzIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgYWRkTGVhZGluZ1NsYXNoID0gZXhwb3J0cy5hZGRMZWFkaW5nU2xhc2ggPSBmdW5jdGlvbiBhZGRMZWFkaW5nU2xhc2gocGF0aCkge1xuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJyA/IHBhdGggOiAnLycgKyBwYXRoO1xufTtcblxudmFyIHN0cmlwTGVhZGluZ1NsYXNoID0gZXhwb3J0cy5zdHJpcExlYWRpbmdTbGFzaCA9IGZ1bmN0aW9uIHN0cmlwTGVhZGluZ1NsYXNoKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLycgPyBwYXRoLnN1YnN0cigxKSA6IHBhdGg7XG59O1xuXG52YXIgaGFzQmFzZW5hbWUgPSBleHBvcnRzLmhhc0Jhc2VuYW1lID0gZnVuY3Rpb24gaGFzQmFzZW5hbWUocGF0aCwgcHJlZml4KSB7XG4gIHJldHVybiBuZXcgUmVnRXhwKCdeJyArIHByZWZpeCArICcoXFxcXC98XFxcXD98I3wkKScsICdpJykudGVzdChwYXRoKTtcbn07XG5cbnZhciBzdHJpcEJhc2VuYW1lID0gZXhwb3J0cy5zdHJpcEJhc2VuYW1lID0gZnVuY3Rpb24gc3RyaXBCYXNlbmFtZShwYXRoLCBwcmVmaXgpIHtcbiAgcmV0dXJuIGhhc0Jhc2VuYW1lKHBhdGgsIHByZWZpeCkgPyBwYXRoLnN1YnN0cihwcmVmaXgubGVuZ3RoKSA6IHBhdGg7XG59O1xuXG52YXIgc3RyaXBUcmFpbGluZ1NsYXNoID0gZXhwb3J0cy5zdHJpcFRyYWlsaW5nU2xhc2ggPSBmdW5jdGlvbiBzdHJpcFRyYWlsaW5nU2xhc2gocGF0aCkge1xuICByZXR1cm4gcGF0aC5jaGFyQXQocGF0aC5sZW5ndGggLSAxKSA9PT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoO1xufTtcblxudmFyIHBhcnNlUGF0aCA9IGV4cG9ydHMucGFyc2VQYXRoID0gZnVuY3Rpb24gcGFyc2VQYXRoKHBhdGgpIHtcbiAgdmFyIHBhdGhuYW1lID0gcGF0aCB8fCAnLyc7XG4gIHZhciBzZWFyY2ggPSAnJztcbiAgdmFyIGhhc2ggPSAnJztcblxuICB2YXIgaGFzaEluZGV4ID0gcGF0aG5hbWUuaW5kZXhPZignIycpO1xuICBpZiAoaGFzaEluZGV4ICE9PSAtMSkge1xuICAgIGhhc2ggPSBwYXRobmFtZS5zdWJzdHIoaGFzaEluZGV4KTtcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lLnN1YnN0cigwLCBoYXNoSW5kZXgpO1xuICB9XG5cbiAgdmFyIHNlYXJjaEluZGV4ID0gcGF0aG5hbWUuaW5kZXhPZignPycpO1xuICBpZiAoc2VhcmNoSW5kZXggIT09IC0xKSB7XG4gICAgc2VhcmNoID0gcGF0aG5hbWUuc3Vic3RyKHNlYXJjaEluZGV4KTtcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lLnN1YnN0cigwLCBzZWFyY2hJbmRleCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lOiBwYXRobmFtZSxcbiAgICBzZWFyY2g6IHNlYXJjaCA9PT0gJz8nID8gJycgOiBzZWFyY2gsXG4gICAgaGFzaDogaGFzaCA9PT0gJyMnID8gJycgOiBoYXNoXG4gIH07XG59O1xuXG52YXIgY3JlYXRlUGF0aCA9IGV4cG9ydHMuY3JlYXRlUGF0aCA9IGZ1bmN0aW9uIGNyZWF0ZVBhdGgobG9jYXRpb24pIHtcbiAgdmFyIHBhdGhuYW1lID0gbG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICBzZWFyY2ggPSBsb2NhdGlvbi5zZWFyY2gsXG4gICAgICBoYXNoID0gbG9jYXRpb24uaGFzaDtcblxuXG4gIHZhciBwYXRoID0gcGF0aG5hbWUgfHwgJy8nO1xuXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoICE9PSAnPycpIHBhdGggKz0gc2VhcmNoLmNoYXJBdCgwKSA9PT0gJz8nID8gc2VhcmNoIDogJz8nICsgc2VhcmNoO1xuXG4gIGlmIChoYXNoICYmIGhhc2ggIT09ICcjJykgcGF0aCArPSBoYXNoLmNoYXJBdCgwKSA9PT0gJyMnID8gaGFzaCA6ICcjJyArIGhhc2g7XG5cbiAgcmV0dXJuIHBhdGg7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9oaXN0b3J5L1BhdGhVdGlscy5qcyIsImltcG9ydCAnLi9jb21wb25lbnRzL2VtaXR0ZXInXG5cbmltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2NzcydcblxuaW1wb3J0ICdwYXJ0aWFscy9wb3N0LXRhYidcbmltcG9ydCAncGFydGlhbHMvc2lkZS1iYXItaGVhZGVyJ1xuaW1wb3J0ICdwYXJ0aWFscy9zaWRlLWJhci1ib2R5J1xuaW1wb3J0ICdwYXJ0aWFscy9mb290ZXInXG5pbXBvcnQgJ3BhcnRpYWxzL3Bvc3QnXG5pbXBvcnQgJ3BhcnRpYWxzL3Bvc3QtbmF2J1xuaW1wb3J0ICdwYXJ0aWFscy9ob21lJ1xuaW1wb3J0ICdwYXJ0aWFscy9hdXRob3InXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvZGVyLmpzIiwiaW1wb3J0IG1pdHQgZnJvbSAnbWl0dCdcbndpbmRvdy5lbWl0dGVyID0gbWl0dCgpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvZW1pdHRlci9pbmRleC5qcyIsIi8vICAgICAgXG4vLyBBbiBldmVudCBoYW5kbGVyIGNhbiB0YWtlIGFuIG9wdGlvbmFsIGV2ZW50IGFyZ3VtZW50XG4vLyBhbmQgc2hvdWxkIG5vdCByZXR1cm4gYSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4vLyBBbiBhcnJheSBvZiBhbGwgY3VycmVudGx5IHJlZ2lzdGVyZWQgZXZlbnQgaGFuZGxlcnMgZm9yIGEgdHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbi8vIEEgbWFwIG9mIGV2ZW50IHR5cGVzIGFuZCB0aGVpciBjb3JyZXNwb25kaW5nIGV2ZW50IGhhbmRsZXJzLlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBcblxuLyoqIE1pdHQ6IFRpbnkgKH4yMDBiKSBmdW5jdGlvbmFsIGV2ZW50IGVtaXR0ZXIgLyBwdWJzdWIuXG4gKiAgQG5hbWUgbWl0dFxuICogIEByZXR1cm5zIHtNaXR0fVxuICovXG5mdW5jdGlvbiBtaXR0KGFsbCAgICAgICAgICAgICAgICAgKSB7XG5cdGFsbCA9IGFsbCB8fCBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG5cdHJldHVybiB7XG5cdFx0LyoqXG5cdFx0ICogUmVnaXN0ZXIgYW4gZXZlbnQgaGFuZGxlciBmb3IgdGhlIGdpdmVuIHR5cGUuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0gIHtTdHJpbmd9IHR5cGVcdFR5cGUgb2YgZXZlbnQgdG8gbGlzdGVuIGZvciwgb3IgYFwiKlwiYCBmb3IgYWxsIGV2ZW50c1xuXHRcdCAqIEBwYXJhbSAge0Z1bmN0aW9ufSBoYW5kbGVyIEZ1bmN0aW9uIHRvIGNhbGwgaW4gcmVzcG9uc2UgdG8gZ2l2ZW4gZXZlbnRcblx0XHQgKiBAbWVtYmVyT2YgbWl0dFxuXHRcdCAqL1xuXHRcdG9uOiBmdW5jdGlvbiBvbih0eXBlICAgICAgICAsIGhhbmRsZXIgICAgICAgICAgICAgICkge1xuXHRcdFx0KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBSZW1vdmUgYW4gZXZlbnQgaGFuZGxlciBmb3IgdGhlIGdpdmVuIHR5cGUuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0gIHtTdHJpbmd9IHR5cGVcdFR5cGUgb2YgZXZlbnQgdG8gdW5yZWdpc3RlciBgaGFuZGxlcmAgZnJvbSwgb3IgYFwiKlwiYFxuXHRcdCAqIEBwYXJhbSAge0Z1bmN0aW9ufSBoYW5kbGVyIEhhbmRsZXIgZnVuY3Rpb24gdG8gcmVtb3ZlXG5cdFx0ICogQG1lbWJlck9mIG1pdHRcblx0XHQgKi9cblx0XHRvZmY6IGZ1bmN0aW9uIG9mZih0eXBlICAgICAgICAsIGhhbmRsZXIgICAgICAgICAgICAgICkge1xuXHRcdFx0aWYgKGFsbFt0eXBlXSkge1xuXHRcdFx0XHRhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogSW52b2tlIGFsbCBoYW5kbGVycyBmb3IgdGhlIGdpdmVuIHR5cGUuXG5cdFx0ICogSWYgcHJlc2VudCwgYFwiKlwiYCBoYW5kbGVycyBhcmUgaW52b2tlZCBhZnRlciB0eXBlLW1hdGNoZWQgaGFuZGxlcnMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSAgVGhlIGV2ZW50IHR5cGUgdG8gaW52b2tlXG5cdFx0ICogQHBhcmFtIHtBbnl9IFtldnRdICBBbnkgdmFsdWUgKG9iamVjdCBpcyByZWNvbW1lbmRlZCBhbmQgcG93ZXJmdWwpLCBwYXNzZWQgdG8gZWFjaCBoYW5kbGVyXG5cdFx0ICogQG1lbWJlcm9mIG1pdHRcblx0XHQgKi9cblx0XHRlbWl0OiBmdW5jdGlvbiBlbWl0KHR5cGUgICAgICAgICwgZXZ0ICAgICApIHtcblx0XHRcdChhbGxbdHlwZV0gfHwgW10pLm1hcChmdW5jdGlvbiAoaGFuZGxlcikgeyBoYW5kbGVyKGV2dCk7IH0pO1xuXHRcdFx0KGFsbFsnKiddIHx8IFtdKS5tYXAoZnVuY3Rpb24gKGhhbmRsZXIpIHsgaGFuZGxlcih0eXBlLCBldnQpOyB9KTtcblx0XHR9XG5cdH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1pdHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1taXR0LmVzLmpzLm1hcFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL21pdHQvZGlzdC9taXR0LmVzLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvaW5kZXguc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiaW1wb3J0IGNvbmZpZyBmcm9tICdjb25maWcnXG5pbXBvcnQgJy4vc3R5bGUuc2NzcydcbmltcG9ydCB7IHRhYlN0b3JlIH0gZnJvbSAnIy9zdG9yZXMnXG5pbXBvcnQgaGlzdG9yeSBmcm9tICcjL2hpc3RvcnknXG5pbXBvcnQgeyBoU2Nyb2xsLCBpc1Bvc3RQYWdlIH0gZnJvbSAnIy91dGlscydcblxuJChmdW5jdGlvbigpIHtcbiAgaWYgKCFpc1Bvc3RQYWdlKCkpIHJldHVyblxuXG4gIGxldCAkcG9zdFRhYnMgPSAkKCcjSi1wb3N0LXRhYicpXG4gIGNvbnN0ICRzY3JvbGxXcmFwID0gJCgnLkotcG9zdC10YWItc2Nyb2xsZXItd3JhcCcpXG4gIGNvbnN0IG5kU2Nyb2xsV3JhcCA9ICRzY3JvbGxXcmFwLmdldCgwKVxuXG4gIGVtaXR0ZXIub24oJ2FkZC1wb3N0LXRhYicsIHBvc3QgPT4ge1xuICAgIGNvbnN0IHRhYnMgPSB0YWJTdG9yZS5nZXRUYWJzKClcbiAgICBpZiAoIXRhYnMuZmlsdGVyKHRhYiA9PiB0YWIuaWQgPT09IHBvc3QuaWQpLmxlbmd0aCkge1xuICAgICAgdGFicy5wdXNoKHsgLi4ucG9zdCB9KVxuXG4gICAgICB0YWJTdG9yZS5zZXRUYWJzKHRhYnMpXG4gICAgfVxuXG4gICAgZW1pdHRlci5lbWl0KCd0YWItcmVmcmVzaCcsIHsgLi4ucG9zdCB9KVxuICB9KVxuXG4gIGVtaXR0ZXIub24oJ3RhYi1yZWZyZXNoJywgKGFjdGl2ZSA9IHt9KSA9PiB7XG4gICAgY29uc3QgYWN0aXZlSWQgPSBhY3RpdmUuaWRcbiAgICBjb25zdCB0YWJzID0gdGFiU3RvcmUuZ2V0VGFicygpXG4gICAgY29uc3QgY3VycmVudFRhYiA9IHRhYlN0b3JlLmN1cnJlbnRUYWJcblxuICAgIGNvbnN0ICRhY3RpdmUgPSAkKCcjSi1wb3N0LXRhYicpXG4gICAgICAuaHRtbChcbiAgICAgICAgdGFic1xuICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICB0YWIgPT5cbiAgICAgICAgICAgICAgYDxkaXYgdGl0bGU9XCIke3RhYi50aXRsZX1cIiBjbGFzcz1cIkotdGFiLWl0ZW0gbGlnaHQgaG92ZXItb3BhY2l0eTEgZmxleC1pdGVtMCBzaW5nbGUtbGluZSBpdGVtICR7YWN0aXZlSWQgPT09IHRhYi5pZCA/ICdhY3RpdmUnIDogJyd9XCIgZGF0YS1pZD1cIiR7XG4gICAgICAgICAgICAgICAgdGFiLmlkXG4gICAgICAgICAgICAgIH1cIj4ke3RhYi50aXRsZX08aSBjbGFzcz1cImNsb3NlIEotcG9zdC10YWItY2xvc2UgbGlnaHRlciBob3Zlci1vcGFjaXR5MVwiIGRhdGEtc2x1Zz1cIiR7dGFiLnNsdWd9XCI+PC9pPjwvZGl2PmBcbiAgICAgICAgICApXG4gICAgICAgICAgLmpvaW4oJycpXG4gICAgICApXG4gICAgICAuZmluZCgnLmFjdGl2ZScpXG5cbiAgICAvLyBub3QgcmVmZXRjaCBjdXJyZW50IHBvc3RcbiAgICBpZiAoIWN1cnJlbnRUYWIgfHwgY3VycmVudFRhYi5pZCAhPT0gYWN0aXZlSWQpIHtcbiAgICAgIGhpc3RvcnkucHVzaChhY3RpdmUudXJsLCB7IC4uLmFjdGl2ZSB9KVxuICAgICAgdGFiU3RvcmUuc2V0Q3VycmVudFRhYih7IC4uLmFjdGl2ZSB9KVxuICAgIH1cblxuICAgIHNjcm9sbDJ2aWV3KCRhY3RpdmUpXG4gIH0pXG5cbiAgJHBvc3RUYWJzXG4gICAgLm9uKCdjbGljaycsICcuSi1wb3N0LXRhYi1jbG9zZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIHRhYlN0b3JlLmRlbGV0ZVRhYkl0ZW0oXG4gICAgICAgICQodGhpcylcbiAgICAgICAgICAucGFyZW50KCcuSi10YWItaXRlbScpXG4gICAgICAgICAgLmRhdGEoJ2lkJylcbiAgICAgIClcbiAgICB9KVxuICAgIC5vbignY2xpY2snLCAnLkotdGFiLWl0ZW0nLCBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKVxuICAgICAgaWYgKCR0aGlzLmlzKCcuYWN0aXZlJykpIHJldHVyblxuXG4gICAgICBjb25zdCBpZCA9ICR0aGlzLmRhdGEoJ2lkJylcbiAgICAgIGNvbnN0IGN1cnJlbnRUYWIgPSB0YWJTdG9yZS5nZXRUYWJzKCkuZmlsdGVyKHRhYiA9PiB0YWIuaWQgPT09IGlkKVswXSB8fCB7fVxuXG4gICAgICAkdGhpc1xuICAgICAgICAuYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAgIC5zaWJsaW5ncygpXG4gICAgICAgIC5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAgIHRhYlN0b3JlLnNldEN1cnJlbnRUYWIoY3VycmVudFRhYilcbiAgICAgIGhpc3RvcnkucHVzaChjdXJyZW50VGFiLnVybCwgeyAuLi5jdXJyZW50VGFiIH0pXG5cbiAgICAgIHNjcm9sbDJ2aWV3KCR0aGlzKVxuICAgIH0pXG5cbiAgLyoqXG4gICAqIHNjcm9sbCBzZWxlY3RlZCB0YWIgaXRlbSBpbnRvIHZpZXcgaWYgaXQgaXMgb3V0IG9mIHZpZXdcbiAgICovXG4gIGZ1bmN0aW9uIHNjcm9sbDJ2aWV3KCRhY3RpdmUpIHtcbiAgICAvLyB3cmFwIGVsZW1lbnRcbiAgICBjb25zdCB3cmFwV2lkdGggPSAkc2Nyb2xsV3JhcC53aWR0aCgpXG4gICAgY29uc3Qgd3JhcFNjcm9sbExlZnQgPSAkc2Nyb2xsV3JhcC5zY3JvbGxMZWZ0KClcbiAgICBjb25zdCB3cmFwUmlnaHQgPSB3cmFwV2lkdGggKyB3cmFwU2Nyb2xsTGVmdFxuICAgIGNvbnN0IHRocmVzaG9sZCA9IDEwXG5cbiAgICAvLyBhY3RpdmUgZWxlbWVudFxuICAgIGNvbnN0IG5kQWN0aXZlID0gJGFjdGl2ZS5nZXQoMClcbiAgICBjb25zdCBhY3RpdmVXaWR0aCA9ICRhY3RpdmUub3V0ZXJXaWR0aCgpXG4gICAgY29uc3QgYWN0aXZlTGVmdCA9IG5kQWN0aXZlLm9mZnNldExlZnRcbiAgICBjb25zdCBhY3RpdmVSaWdodCA9IGFjdGl2ZUxlZnQgKyBhY3RpdmVXaWR0aFxuICAgIGlmIChhY3RpdmVSaWdodCA+IHdyYXBXaWR0aCArIHdyYXBTY3JvbGxMZWZ0KSB7XG4gICAgICBuZFNjcm9sbFdyYXAuc2Nyb2xsTGVmdCA9IGFjdGl2ZVJpZ2h0IC0gd3JhcFdpZHRoIC0gdGhyZXNob2xkXG4gICAgfVxuICAgIGlmIChhY3RpdmVMZWZ0IDw9IHdyYXBTY3JvbGxMZWZ0KSB7XG4gICAgICBuZFNjcm9sbFdyYXAuc2Nyb2xsTGVmdCA9IGFjdGl2ZUxlZnQgLSB0aHJlc2hvbGRcbiAgICB9XG4gIH1cblxuICBoU2Nyb2xsKCRzY3JvbGxXcmFwLmdldCgwKSlcbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYXJ0aWFscy9wb3N0LXRhYi9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1widGhlbWVzXCI6W1wiYWJ5c3MtY29sb3JcIixcImRhcmstZGVmYXVsdFwiLFwicmVkXCJdfVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vdGhlbWVzL3Jlc3VsdC5qc29uXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGFydGlhbHMvcG9zdC10YWIvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiaW1wb3J0IGNvbmZpZyBmcm9tICdjb25maWcnXG5jb25zdCBscyA9IGxvY2FsU3RvcmFnZVxuY29uc3QgbHNUaGVtZUtleSA9IGNvbmZpZy5sc1RoZW1lS2V5XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgdGhlbWUgPSBscy5nZXRJdGVtKGxzVGhlbWVLZXkpIHx8IGNvbmZpZy5kZWZhdWx0VGhlbWVcbiAgXG4gIHNldFRoZW1lICh0aGVtZSkge1xuICAgIHRoaXMudGhlbWUgPSB0aGVtZVxuICAgIGxzLnNldEl0ZW0obHNUaGVtZUtleSwgdGhlbWUpXG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmVzL1RoZW1lU3RvcmUuanMiLCJpbXBvcnQgY29uZmlnIGZyb20gJ2NvbmZpZydcblxuY29uc3QgbHMgPSBsb2NhbFN0b3JhZ2VcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjdXJyZW50VGFiID0gbnVsbFxuXG4gIGdldFRhYnMoKSB7XG4gICAgbGV0IHRhYnMgPSBscy5nZXRJdGVtKGNvbmZpZy5sc1Bvc3RUYWJLZXkpIHx8ICcnXG5cbiAgICByZXR1cm4gdGFicyA/IHRhYnMuc3BsaXQoJywnKS5tYXAodGFiID0+IHtcbiAgICAgIGNvbnN0IFtpZCwgdGl0bGUsIHVybCwgc2x1Z10gPSB0YWIuc3BsaXQoJzonKVxuXG4gICAgICByZXR1cm4geyBpZCwgdGl0bGUsIHVybCwgc2x1ZyB9XG4gICAgfSkgOiBbXVxuICB9XG5cbiAgc2V0VGFicyh0YWJzKSB7XG4gICAgbHMuc2V0SXRlbShcbiAgICAgIGNvbmZpZy5sc1Bvc3RUYWJLZXksXG4gICAgICB0YWJzLmxlbmd0aCA/IHRhYnMubWFwKFxuICAgICAgICB0YWIgPT4gYCR7dGFiLmlkfToke3RhYi50aXRsZX06JHt0YWIudXJsfToke3RhYi5zbHVnfWBcbiAgICAgICkuam9pbignLCcpIDogJydcbiAgICApXG4gIH1cblxuICBzZXRDdXJyZW50VGFiKHRhYikge1xuICAgIHRoaXMuY3VycmVudFRhYiA9IHRhYlxuICB9XG5cbiAgZGVsZXRlVGFiSXRlbShpZCkge1xuICAgIGxldCB0YWJzID0gdGhpcy5nZXRUYWJzKClcbiAgICBsZXQgbmV4dFRhYiA9IG51bGxcbiAgICBjb25zdCBpc0N1cnJlbnRUYWIgPSBpZCA9PT0gdGhpcy5jdXJyZW50VGFiLmlkXG5cbiAgICBjb25zdCBkZWxldGVkSWR4ID0gdGFicy5maW5kSW5kZXgodGFiID0+IHRhYi5pZCA9PT0gaWQpXG4gICAgdGFicyA9IHRhYnMuZmlsdGVyKCh0YWIsIGlkeCkgPT4gdGFiLmlkICE9PSBpZClcblxuICAgIHRoaXMuc2V0VGFicyh0YWJzKVxuXG4gICAgaWYgKHRhYnMubGVuZ3RoKSB7XG4gICAgICBpZiAoaXNDdXJyZW50VGFiKSB7XG4gICAgICAgIG5leHRUYWIgPSBkZWxldGVkSWR4ID09PSAwID8gdGFic1swXSA6IHRhYnNbZGVsZXRlZElkeCAtIDFdXG4gICAgICB9XG5cbiAgICAgIGVtaXR0ZXIuZW1pdCgndGFiLXJlZnJlc2gnLCBuZXh0VGFiIHx8IHRoaXMuY3VycmVudFRhYilcbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYXRpb24uaHJlZiA9ICcvJ1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZXMvVGFiU3RvcmUuanMiLCJpbXBvcnQgY29uZmlnIGZyb20gJ2NvbmZpZydcbmNvbnN0IGxzID0gbG9jYWxTdG9yYWdlXG5jb25zdCBsc1Bvc3RzS2V5ID0gY29uZmlnLmxzUG9zdHNLZXlcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBmZXRjaFBvc3QoaWQpIHtcbiAgICBjb25zdCBjYWNoZSA9IHRoaXMuZnJvbUNhY2hlKGlkKVxuXG4gICAgcmV0dXJuIGNhY2hlXG4gICAgICA/ICQuRGVmZXJyZWQoKS5yZXNvbHZlKGNhY2hlKVxuICAgICAgOiAkLmdldChnaG9zdC51cmwuYXBpKGBwb3N0cy8ke2lkfWApLCB7XG4gICAgICAgICAgaW5jbHVkZTogJ2F1dGhvcidcbiAgICAgICAgfSlcbiAgICAgICAgICAuZmFpbChmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5kb25lKGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRhdGEucG9zdHNbMF0gfHwge31cbiAgICAgICAgICAgIHRoaXMuY2FjaGVQb3N0KGlkLCBwb3N0KVxuICAgICAgICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogUmVhZCBwb3N0IGZyb20gY2FjaGUgZmlyc3RcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlkIC0+IHBvc3QgaWRcbiAgICogIC0gb25seSBjYWNoZSA1bWluXG4gICAqL1xuICBmcm9tQ2FjaGUoaWQpIHtcbiAgICBsZXQgbHNQb3N0cyA9IGxzLmdldEl0ZW0obHNQb3N0c0tleSlcbiAgICBsc1Bvc3RzID0gbHNQb3N0cyA/IEpTT04ucGFyc2UobHNQb3N0cykgOiB7fVxuXG4gICAgY29uc3QgcG9zdCA9IGxzUG9zdHNbaWRdXG4gICAgY29uc3QgdXNlYWJsZSA9IHBvc3QgJiYgK25ldyBEYXRlKCkgLSBwb3N0LnRpbWVzdGFtcCA8PSA1ICogNjAgKiAxMDAwXG5cbiAgICBpZiAodXNlYWJsZSkge1xuICAgICAgY29uc29sZS5pbmZvKCdbUG9zdCByZWFkZWQgZnJvbSBjYWNoZV06JywgcG9zdC50aXRsZSlcbiAgICAgIGNvbnN0IGF1dGhvciA9IEpTT04ucGFyc2UocG9zdC5hdXRob3IpXG4gICAgICByZXR1cm4ge1xuICAgICAgICBwb3N0czogW3sgLi4ucG9zdCwgYXV0aG9yLCBmcm9tQ2FjaGU6IDEgfV1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgZGVsZXRlUG9zdEZyb21DYWNoZShpZCkge1xuICAgIGxldCBsc1Bvc3RzID0gbHMuZ2V0SXRlbShsc1Bvc3RzS2V5KVxuICAgIGxzUG9zdHMgPSBsc1Bvc3RzID8gSlNPTi5wYXJzZShsc1Bvc3RzKSA6IHt9XG4gICAgY29uc29sZS5sb2coJ1tkZWxldGVkIHBvc3Qgc3VjY2Vzc106JywgbHNQb3N0c1tpZF0udGl0bGUpXG5cbiAgICBkZWxldGUgbHNQb3N0c1tpZF1cblxuICAgIGxzLnNldEl0ZW0obHNQb3N0c0tleSwgSlNPTi5zdHJpbmdpZnkobHNQb3N0cykpXG4gIH1cblxuICBjYWNoZVBvc3QoaWQsIHBvc3QpIHtcbiAgICBpZiAocG9zdC5mcm9tQ2FjaGUpIHJldHVyblxuXG4gICAgbGV0IGxzUG9zdHMgPSBscy5nZXRJdGVtKGxzUG9zdHNLZXkpXG4gICAgbHNQb3N0cyA9IGxzUG9zdHMgPyBKU09OLnBhcnNlKGxzUG9zdHMpIDoge31cblxuICAgIGxzUG9zdHNbaWRdID0ge1xuICAgICAgLi4ucG9zdCxcbiAgICAgIGF1dGhvcjogSlNPTi5zdHJpbmdpZnkocG9zdC5hdXRob3IpLFxuICAgICAgdGltZXN0YW1wOiArbmV3IERhdGUoKVxuICAgIH1cblxuICAgIC8vIGNhY2hlIHVwIHRvIDUgcG9zdHNcbiAgICAvLyBkZWxldGUgdGhlIG9sZGVzdCBvbmUgaWYgbW9yZSB0aGFuIDVcbiAgICBsZXQgaWRzID0gT2JqZWN0LmtleXMobHNQb3N0cylcbiAgICBpZiAoaWRzLmxlbmd0aCA+IDUpIHtcbiAgICAgIGNvbnN0IHNob3VsZERlbGV0ZUlkID0gaWRzXG4gICAgICAgIC5tYXAoaWQgPT4gKHtcbiAgICAgICAgICB0aW1lc3RhbXA6IGxzUG9zdHNbaWRdLnRpbWVzdGFtcCxcbiAgICAgICAgICBpZFxuICAgICAgICB9KSlcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEudGltZXN0YW1wIC0gYi50aW1lc3RhbXApXG4gICAgICAgIC5tYXAoaXRlbSA9PiBpdGVtLmlkKVxuICAgICAgICAuc2hpZnQoKVxuXG4gICAgICBkZWxldGUgbHNQb3N0c1tzaG91bGREZWxldGVJZF1cbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhpZHMubGVuZ3RoKVxuICAgIGxzLnNldEl0ZW0obHNQb3N0c0tleSwgSlNPTi5zdHJpbmdpZnkobHNQb3N0cykpXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZXMvUG9zdFN0b3JlLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX0xvY2F0aW9uVXRpbHMgPSByZXF1aXJlKCcuL0xvY2F0aW9uVXRpbHMnKTtcblxudmFyIF9QYXRoVXRpbHMgPSByZXF1aXJlKCcuL1BhdGhVdGlscycpO1xuXG52YXIgX2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyID0gcmVxdWlyZSgnLi9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlcicpO1xuXG52YXIgX2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyKTtcblxudmFyIF9ET01VdGlscyA9IHJlcXVpcmUoJy4vRE9NVXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFBvcFN0YXRlRXZlbnQgPSAncG9wc3RhdGUnO1xudmFyIEhhc2hDaGFuZ2VFdmVudCA9ICdoYXNoY2hhbmdlJztcblxudmFyIGdldEhpc3RvcnlTdGF0ZSA9IGZ1bmN0aW9uIGdldEhpc3RvcnlTdGF0ZSgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gd2luZG93Lmhpc3Rvcnkuc3RhdGUgfHwge307XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBJRSAxMSBzb21ldGltZXMgdGhyb3dzIHdoZW4gYWNjZXNzaW5nIHdpbmRvdy5oaXN0b3J5LnN0YXRlXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9SZWFjdFRyYWluaW5nL2hpc3RvcnkvcHVsbC8yODlcbiAgICByZXR1cm4ge307XG4gIH1cbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhpc3Rvcnkgb2JqZWN0IHRoYXQgdXNlcyB0aGUgSFRNTDUgaGlzdG9yeSBBUEkgaW5jbHVkaW5nXG4gKiBwdXNoU3RhdGUsIHJlcGxhY2VTdGF0ZSwgYW5kIHRoZSBwb3BzdGF0ZSBldmVudC5cbiAqL1xudmFyIGNyZWF0ZUJyb3dzZXJIaXN0b3J5ID0gZnVuY3Rpb24gY3JlYXRlQnJvd3Nlckhpc3RvcnkoKSB7XG4gIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKF9ET01VdGlscy5jYW5Vc2VET00sICdCcm93c2VyIGhpc3RvcnkgbmVlZHMgYSBET00nKTtcblxuICB2YXIgZ2xvYmFsSGlzdG9yeSA9IHdpbmRvdy5oaXN0b3J5O1xuICB2YXIgY2FuVXNlSGlzdG9yeSA9ICgwLCBfRE9NVXRpbHMuc3VwcG9ydHNIaXN0b3J5KSgpO1xuICB2YXIgbmVlZHNIYXNoQ2hhbmdlTGlzdGVuZXIgPSAhKDAsIF9ET01VdGlscy5zdXBwb3J0c1BvcFN0YXRlT25IYXNoQ2hhbmdlKSgpO1xuXG4gIHZhciBfcHJvcHMkZm9yY2VSZWZyZXNoID0gcHJvcHMuZm9yY2VSZWZyZXNoLFxuICAgICAgZm9yY2VSZWZyZXNoID0gX3Byb3BzJGZvcmNlUmVmcmVzaCA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfcHJvcHMkZm9yY2VSZWZyZXNoLFxuICAgICAgX3Byb3BzJGdldFVzZXJDb25maXJtID0gcHJvcHMuZ2V0VXNlckNvbmZpcm1hdGlvbixcbiAgICAgIGdldFVzZXJDb25maXJtYXRpb24gPSBfcHJvcHMkZ2V0VXNlckNvbmZpcm0gPT09IHVuZGVmaW5lZCA/IF9ET01VdGlscy5nZXRDb25maXJtYXRpb24gOiBfcHJvcHMkZ2V0VXNlckNvbmZpcm0sXG4gICAgICBfcHJvcHMka2V5TGVuZ3RoID0gcHJvcHMua2V5TGVuZ3RoLFxuICAgICAga2V5TGVuZ3RoID0gX3Byb3BzJGtleUxlbmd0aCA9PT0gdW5kZWZpbmVkID8gNiA6IF9wcm9wcyRrZXlMZW5ndGg7XG5cbiAgdmFyIGJhc2VuYW1lID0gcHJvcHMuYmFzZW5hbWUgPyAoMCwgX1BhdGhVdGlscy5zdHJpcFRyYWlsaW5nU2xhc2gpKCgwLCBfUGF0aFV0aWxzLmFkZExlYWRpbmdTbGFzaCkocHJvcHMuYmFzZW5hbWUpKSA6ICcnO1xuXG4gIHZhciBnZXRET01Mb2NhdGlvbiA9IGZ1bmN0aW9uIGdldERPTUxvY2F0aW9uKGhpc3RvcnlTdGF0ZSkge1xuICAgIHZhciBfcmVmID0gaGlzdG9yeVN0YXRlIHx8IHt9LFxuICAgICAgICBrZXkgPSBfcmVmLmtleSxcbiAgICAgICAgc3RhdGUgPSBfcmVmLnN0YXRlO1xuXG4gICAgdmFyIF93aW5kb3ckbG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24sXG4gICAgICAgIHBhdGhuYW1lID0gX3dpbmRvdyRsb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgICAgc2VhcmNoID0gX3dpbmRvdyRsb2NhdGlvbi5zZWFyY2gsXG4gICAgICAgIGhhc2ggPSBfd2luZG93JGxvY2F0aW9uLmhhc2g7XG5cblxuICAgIHZhciBwYXRoID0gcGF0aG5hbWUgKyBzZWFyY2ggKyBoYXNoO1xuXG4gICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KSghYmFzZW5hbWUgfHwgKDAsIF9QYXRoVXRpbHMuaGFzQmFzZW5hbWUpKHBhdGgsIGJhc2VuYW1lKSwgJ1lvdSBhcmUgYXR0ZW1wdGluZyB0byB1c2UgYSBiYXNlbmFtZSBvbiBhIHBhZ2Ugd2hvc2UgVVJMIHBhdGggZG9lcyBub3QgYmVnaW4gJyArICd3aXRoIHRoZSBiYXNlbmFtZS4gRXhwZWN0ZWQgcGF0aCBcIicgKyBwYXRoICsgJ1wiIHRvIGJlZ2luIHdpdGggXCInICsgYmFzZW5hbWUgKyAnXCIuJyk7XG5cbiAgICBpZiAoYmFzZW5hbWUpIHBhdGggPSAoMCwgX1BhdGhVdGlscy5zdHJpcEJhc2VuYW1lKShwYXRoLCBiYXNlbmFtZSk7XG5cbiAgICByZXR1cm4gKDAsIF9Mb2NhdGlvblV0aWxzLmNyZWF0ZUxvY2F0aW9uKShwYXRoLCBzdGF0ZSwga2V5KTtcbiAgfTtcblxuICB2YXIgY3JlYXRlS2V5ID0gZnVuY3Rpb24gY3JlYXRlS2V5KCkge1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwga2V5TGVuZ3RoKTtcbiAgfTtcblxuICB2YXIgdHJhbnNpdGlvbk1hbmFnZXIgPSAoMCwgX2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyMi5kZWZhdWx0KSgpO1xuXG4gIHZhciBzZXRTdGF0ZSA9IGZ1bmN0aW9uIHNldFN0YXRlKG5leHRTdGF0ZSkge1xuICAgIF9leHRlbmRzKGhpc3RvcnksIG5leHRTdGF0ZSk7XG5cbiAgICBoaXN0b3J5Lmxlbmd0aCA9IGdsb2JhbEhpc3RvcnkubGVuZ3RoO1xuXG4gICAgdHJhbnNpdGlvbk1hbmFnZXIubm90aWZ5TGlzdGVuZXJzKGhpc3RvcnkubG9jYXRpb24sIGhpc3RvcnkuYWN0aW9uKTtcbiAgfTtcblxuICB2YXIgaGFuZGxlUG9wU3RhdGUgPSBmdW5jdGlvbiBoYW5kbGVQb3BTdGF0ZShldmVudCkge1xuICAgIC8vIElnbm9yZSBleHRyYW5lb3VzIHBvcHN0YXRlIGV2ZW50cyBpbiBXZWJLaXQuXG4gICAgaWYgKCgwLCBfRE9NVXRpbHMuaXNFeHRyYW5lb3VzUG9wc3RhdGVFdmVudCkoZXZlbnQpKSByZXR1cm47XG5cbiAgICBoYW5kbGVQb3AoZ2V0RE9NTG9jYXRpb24oZXZlbnQuc3RhdGUpKTtcbiAgfTtcblxuICB2YXIgaGFuZGxlSGFzaENoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUhhc2hDaGFuZ2UoKSB7XG4gICAgaGFuZGxlUG9wKGdldERPTUxvY2F0aW9uKGdldEhpc3RvcnlTdGF0ZSgpKSk7XG4gIH07XG5cbiAgdmFyIGZvcmNlTmV4dFBvcCA9IGZhbHNlO1xuXG4gIHZhciBoYW5kbGVQb3AgPSBmdW5jdGlvbiBoYW5kbGVQb3AobG9jYXRpb24pIHtcbiAgICBpZiAoZm9yY2VOZXh0UG9wKSB7XG4gICAgICBmb3JjZU5leHRQb3AgPSBmYWxzZTtcbiAgICAgIHNldFN0YXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhY3Rpb24gPSAnUE9QJztcblxuICAgICAgdHJhbnNpdGlvbk1hbmFnZXIuY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgYWN0aW9uLCBnZXRVc2VyQ29uZmlybWF0aW9uLCBmdW5jdGlvbiAob2spIHtcbiAgICAgICAgaWYgKG9rKSB7XG4gICAgICAgICAgc2V0U3RhdGUoeyBhY3Rpb246IGFjdGlvbiwgbG9jYXRpb246IGxvY2F0aW9uIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldmVydFBvcChsb2NhdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICB2YXIgcmV2ZXJ0UG9wID0gZnVuY3Rpb24gcmV2ZXJ0UG9wKGZyb21Mb2NhdGlvbikge1xuICAgIHZhciB0b0xvY2F0aW9uID0gaGlzdG9yeS5sb2NhdGlvbjtcblxuICAgIC8vIFRPRE86IFdlIGNvdWxkIHByb2JhYmx5IG1ha2UgdGhpcyBtb3JlIHJlbGlhYmxlIGJ5XG4gICAgLy8ga2VlcGluZyBhIGxpc3Qgb2Yga2V5cyB3ZSd2ZSBzZWVuIGluIHNlc3Npb25TdG9yYWdlLlxuICAgIC8vIEluc3RlYWQsIHdlIGp1c3QgZGVmYXVsdCB0byAwIGZvciBrZXlzIHdlIGRvbid0IGtub3cuXG5cbiAgICB2YXIgdG9JbmRleCA9IGFsbEtleXMuaW5kZXhPZih0b0xvY2F0aW9uLmtleSk7XG5cbiAgICBpZiAodG9JbmRleCA9PT0gLTEpIHRvSW5kZXggPSAwO1xuXG4gICAgdmFyIGZyb21JbmRleCA9IGFsbEtleXMuaW5kZXhPZihmcm9tTG9jYXRpb24ua2V5KTtcblxuICAgIGlmIChmcm9tSW5kZXggPT09IC0xKSBmcm9tSW5kZXggPSAwO1xuXG4gICAgdmFyIGRlbHRhID0gdG9JbmRleCAtIGZyb21JbmRleDtcblxuICAgIGlmIChkZWx0YSkge1xuICAgICAgZm9yY2VOZXh0UG9wID0gdHJ1ZTtcbiAgICAgIGdvKGRlbHRhKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGluaXRpYWxMb2NhdGlvbiA9IGdldERPTUxvY2F0aW9uKGdldEhpc3RvcnlTdGF0ZSgpKTtcbiAgdmFyIGFsbEtleXMgPSBbaW5pdGlhbExvY2F0aW9uLmtleV07XG5cbiAgLy8gUHVibGljIGludGVyZmFjZVxuXG4gIHZhciBjcmVhdGVIcmVmID0gZnVuY3Rpb24gY3JlYXRlSHJlZihsb2NhdGlvbikge1xuICAgIHJldHVybiBiYXNlbmFtZSArICgwLCBfUGF0aFV0aWxzLmNyZWF0ZVBhdGgpKGxvY2F0aW9uKTtcbiAgfTtcblxuICB2YXIgcHVzaCA9IGZ1bmN0aW9uIHB1c2gocGF0aCwgc3RhdGUpIHtcbiAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKCEoKHR5cGVvZiBwYXRoID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihwYXRoKSkgPT09ICdvYmplY3QnICYmIHBhdGguc3RhdGUgIT09IHVuZGVmaW5lZCAmJiBzdGF0ZSAhPT0gdW5kZWZpbmVkKSwgJ1lvdSBzaG91bGQgYXZvaWQgcHJvdmlkaW5nIGEgMm5kIHN0YXRlIGFyZ3VtZW50IHRvIHB1c2ggd2hlbiB0aGUgMXN0ICcgKyAnYXJndW1lbnQgaXMgYSBsb2NhdGlvbi1saWtlIG9iamVjdCB0aGF0IGFscmVhZHkgaGFzIHN0YXRlOyBpdCBpcyBpZ25vcmVkJyk7XG5cbiAgICB2YXIgYWN0aW9uID0gJ1BVU0gnO1xuICAgIHZhciBsb2NhdGlvbiA9ICgwLCBfTG9jYXRpb25VdGlscy5jcmVhdGVMb2NhdGlvbikocGF0aCwgc3RhdGUsIGNyZWF0ZUtleSgpLCBoaXN0b3J5LmxvY2F0aW9uKTtcblxuICAgIHRyYW5zaXRpb25NYW5hZ2VyLmNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICBpZiAoIW9rKSByZXR1cm47XG5cbiAgICAgIHZhciBocmVmID0gY3JlYXRlSHJlZihsb2NhdGlvbik7XG4gICAgICB2YXIga2V5ID0gbG9jYXRpb24ua2V5LFxuICAgICAgICAgIHN0YXRlID0gbG9jYXRpb24uc3RhdGU7XG5cblxuICAgICAgaWYgKGNhblVzZUhpc3RvcnkpIHtcbiAgICAgICAgZ2xvYmFsSGlzdG9yeS5wdXNoU3RhdGUoeyBrZXk6IGtleSwgc3RhdGU6IHN0YXRlIH0sIG51bGwsIGhyZWYpO1xuXG4gICAgICAgIGlmIChmb3JjZVJlZnJlc2gpIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGhyZWY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHByZXZJbmRleCA9IGFsbEtleXMuaW5kZXhPZihoaXN0b3J5LmxvY2F0aW9uLmtleSk7XG4gICAgICAgICAgdmFyIG5leHRLZXlzID0gYWxsS2V5cy5zbGljZSgwLCBwcmV2SW5kZXggPT09IC0xID8gMCA6IHByZXZJbmRleCArIDEpO1xuXG4gICAgICAgICAgbmV4dEtleXMucHVzaChsb2NhdGlvbi5rZXkpO1xuICAgICAgICAgIGFsbEtleXMgPSBuZXh0S2V5cztcblxuICAgICAgICAgIHNldFN0YXRlKHsgYWN0aW9uOiBhY3Rpb24sIGxvY2F0aW9uOiBsb2NhdGlvbiB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KShzdGF0ZSA9PT0gdW5kZWZpbmVkLCAnQnJvd3NlciBoaXN0b3J5IGNhbm5vdCBwdXNoIHN0YXRlIGluIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgSFRNTDUgaGlzdG9yeScpO1xuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gaHJlZjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICB2YXIgcmVwbGFjZSA9IGZ1bmN0aW9uIHJlcGxhY2UocGF0aCwgc3RhdGUpIHtcbiAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKCEoKHR5cGVvZiBwYXRoID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihwYXRoKSkgPT09ICdvYmplY3QnICYmIHBhdGguc3RhdGUgIT09IHVuZGVmaW5lZCAmJiBzdGF0ZSAhPT0gdW5kZWZpbmVkKSwgJ1lvdSBzaG91bGQgYXZvaWQgcHJvdmlkaW5nIGEgMm5kIHN0YXRlIGFyZ3VtZW50IHRvIHJlcGxhY2Ugd2hlbiB0aGUgMXN0ICcgKyAnYXJndW1lbnQgaXMgYSBsb2NhdGlvbi1saWtlIG9iamVjdCB0aGF0IGFscmVhZHkgaGFzIHN0YXRlOyBpdCBpcyBpZ25vcmVkJyk7XG5cbiAgICB2YXIgYWN0aW9uID0gJ1JFUExBQ0UnO1xuICAgIHZhciBsb2NhdGlvbiA9ICgwLCBfTG9jYXRpb25VdGlscy5jcmVhdGVMb2NhdGlvbikocGF0aCwgc3RhdGUsIGNyZWF0ZUtleSgpLCBoaXN0b3J5LmxvY2F0aW9uKTtcblxuICAgIHRyYW5zaXRpb25NYW5hZ2VyLmNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICBpZiAoIW9rKSByZXR1cm47XG5cbiAgICAgIHZhciBocmVmID0gY3JlYXRlSHJlZihsb2NhdGlvbik7XG4gICAgICB2YXIga2V5ID0gbG9jYXRpb24ua2V5LFxuICAgICAgICAgIHN0YXRlID0gbG9jYXRpb24uc3RhdGU7XG5cblxuICAgICAgaWYgKGNhblVzZUhpc3RvcnkpIHtcbiAgICAgICAgZ2xvYmFsSGlzdG9yeS5yZXBsYWNlU3RhdGUoeyBrZXk6IGtleSwgc3RhdGU6IHN0YXRlIH0sIG51bGwsIGhyZWYpO1xuXG4gICAgICAgIGlmIChmb3JjZVJlZnJlc2gpIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShocmVmKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgcHJldkluZGV4ID0gYWxsS2V5cy5pbmRleE9mKGhpc3RvcnkubG9jYXRpb24ua2V5KTtcblxuICAgICAgICAgIGlmIChwcmV2SW5kZXggIT09IC0xKSBhbGxLZXlzW3ByZXZJbmRleF0gPSBsb2NhdGlvbi5rZXk7XG5cbiAgICAgICAgICBzZXRTdGF0ZSh7IGFjdGlvbjogYWN0aW9uLCBsb2NhdGlvbjogbG9jYXRpb24gfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICgwLCBfd2FybmluZzIuZGVmYXVsdCkoc3RhdGUgPT09IHVuZGVmaW5lZCwgJ0Jyb3dzZXIgaGlzdG9yeSBjYW5ub3QgcmVwbGFjZSBzdGF0ZSBpbiBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IEhUTUw1IGhpc3RvcnknKTtcblxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShocmVmKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICB2YXIgZ28gPSBmdW5jdGlvbiBnbyhuKSB7XG4gICAgZ2xvYmFsSGlzdG9yeS5nbyhuKTtcbiAgfTtcblxuICB2YXIgZ29CYWNrID0gZnVuY3Rpb24gZ29CYWNrKCkge1xuICAgIHJldHVybiBnbygtMSk7XG4gIH07XG5cbiAgdmFyIGdvRm9yd2FyZCA9IGZ1bmN0aW9uIGdvRm9yd2FyZCgpIHtcbiAgICByZXR1cm4gZ28oMSk7XG4gIH07XG5cbiAgdmFyIGxpc3RlbmVyQ291bnQgPSAwO1xuXG4gIHZhciBjaGVja0RPTUxpc3RlbmVycyA9IGZ1bmN0aW9uIGNoZWNrRE9NTGlzdGVuZXJzKGRlbHRhKSB7XG4gICAgbGlzdGVuZXJDb3VudCArPSBkZWx0YTtcblxuICAgIGlmIChsaXN0ZW5lckNvdW50ID09PSAxKSB7XG4gICAgICAoMCwgX0RPTVV0aWxzLmFkZEV2ZW50TGlzdGVuZXIpKHdpbmRvdywgUG9wU3RhdGVFdmVudCwgaGFuZGxlUG9wU3RhdGUpO1xuXG4gICAgICBpZiAobmVlZHNIYXNoQ2hhbmdlTGlzdGVuZXIpICgwLCBfRE9NVXRpbHMuYWRkRXZlbnRMaXN0ZW5lcikod2luZG93LCBIYXNoQ2hhbmdlRXZlbnQsIGhhbmRsZUhhc2hDaGFuZ2UpO1xuICAgIH0gZWxzZSBpZiAobGlzdGVuZXJDb3VudCA9PT0gMCkge1xuICAgICAgKDAsIF9ET01VdGlscy5yZW1vdmVFdmVudExpc3RlbmVyKSh3aW5kb3csIFBvcFN0YXRlRXZlbnQsIGhhbmRsZVBvcFN0YXRlKTtcblxuICAgICAgaWYgKG5lZWRzSGFzaENoYW5nZUxpc3RlbmVyKSAoMCwgX0RPTVV0aWxzLnJlbW92ZUV2ZW50TGlzdGVuZXIpKHdpbmRvdywgSGFzaENoYW5nZUV2ZW50LCBoYW5kbGVIYXNoQ2hhbmdlKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGlzQmxvY2tlZCA9IGZhbHNlO1xuXG4gIHZhciBibG9jayA9IGZ1bmN0aW9uIGJsb2NrKCkge1xuICAgIHZhciBwcm9tcHQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGZhbHNlO1xuXG4gICAgdmFyIHVuYmxvY2sgPSB0cmFuc2l0aW9uTWFuYWdlci5zZXRQcm9tcHQocHJvbXB0KTtcblxuICAgIGlmICghaXNCbG9ja2VkKSB7XG4gICAgICBjaGVja0RPTUxpc3RlbmVycygxKTtcbiAgICAgIGlzQmxvY2tlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChpc0Jsb2NrZWQpIHtcbiAgICAgICAgaXNCbG9ja2VkID0gZmFsc2U7XG4gICAgICAgIGNoZWNrRE9NTGlzdGVuZXJzKC0xKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHVuYmxvY2soKTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBsaXN0ZW4gPSBmdW5jdGlvbiBsaXN0ZW4obGlzdGVuZXIpIHtcbiAgICB2YXIgdW5saXN0ZW4gPSB0cmFuc2l0aW9uTWFuYWdlci5hcHBlbmRMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgY2hlY2tET01MaXN0ZW5lcnMoMSk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgY2hlY2tET01MaXN0ZW5lcnMoLTEpO1xuICAgICAgdW5saXN0ZW4oKTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBoaXN0b3J5ID0ge1xuICAgIGxlbmd0aDogZ2xvYmFsSGlzdG9yeS5sZW5ndGgsXG4gICAgYWN0aW9uOiAnUE9QJyxcbiAgICBsb2NhdGlvbjogaW5pdGlhbExvY2F0aW9uLFxuICAgIGNyZWF0ZUhyZWY6IGNyZWF0ZUhyZWYsXG4gICAgcHVzaDogcHVzaCxcbiAgICByZXBsYWNlOiByZXBsYWNlLFxuICAgIGdvOiBnbyxcbiAgICBnb0JhY2s6IGdvQmFjayxcbiAgICBnb0ZvcndhcmQ6IGdvRm9yd2FyZCxcbiAgICBibG9jazogYmxvY2ssXG4gICAgbGlzdGVuOiBsaXN0ZW5cbiAgfTtcblxuICByZXR1cm4gaGlzdG9yeTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZUJyb3dzZXJIaXN0b3J5O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9oaXN0b3J5L2NyZWF0ZUJyb3dzZXJIaXN0b3J5LmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgaW52YXJpYW50ID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICAnTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArXG4gICAgICAgICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLidcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSB7IHJldHVybiBhcmdzW2FyZ0luZGV4KytdOyB9KVxuICAgICAgKTtcbiAgICAgIGVycm9yLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9pbnZhcmlhbnQvYnJvd3Nlci5qcyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMubG9jYXRpb25zQXJlRXF1YWwgPSBleHBvcnRzLmNyZWF0ZUxvY2F0aW9uID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3Jlc29sdmVQYXRobmFtZSA9IHJlcXVpcmUoJ3Jlc29sdmUtcGF0aG5hbWUnKTtcblxudmFyIF9yZXNvbHZlUGF0aG5hbWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVzb2x2ZVBhdGhuYW1lKTtcblxudmFyIF92YWx1ZUVxdWFsID0gcmVxdWlyZSgndmFsdWUtZXF1YWwnKTtcblxudmFyIF92YWx1ZUVxdWFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZhbHVlRXF1YWwpO1xuXG52YXIgX1BhdGhVdGlscyA9IHJlcXVpcmUoJy4vUGF0aFV0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBjcmVhdGVMb2NhdGlvbiA9IGV4cG9ydHMuY3JlYXRlTG9jYXRpb24gPSBmdW5jdGlvbiBjcmVhdGVMb2NhdGlvbihwYXRoLCBzdGF0ZSwga2V5LCBjdXJyZW50TG9jYXRpb24pIHtcbiAgdmFyIGxvY2F0aW9uID0gdm9pZCAwO1xuICBpZiAodHlwZW9mIHBhdGggPT09ICdzdHJpbmcnKSB7XG4gICAgLy8gVHdvLWFyZyBmb3JtOiBwdXNoKHBhdGgsIHN0YXRlKVxuICAgIGxvY2F0aW9uID0gKDAsIF9QYXRoVXRpbHMucGFyc2VQYXRoKShwYXRoKTtcbiAgICBsb2NhdGlvbi5zdGF0ZSA9IHN0YXRlO1xuICB9IGVsc2Uge1xuICAgIC8vIE9uZS1hcmcgZm9ybTogcHVzaChsb2NhdGlvbilcbiAgICBsb2NhdGlvbiA9IF9leHRlbmRzKHt9LCBwYXRoKTtcblxuICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZSA9PT0gdW5kZWZpbmVkKSBsb2NhdGlvbi5wYXRobmFtZSA9ICcnO1xuXG4gICAgaWYgKGxvY2F0aW9uLnNlYXJjaCkge1xuICAgICAgaWYgKGxvY2F0aW9uLnNlYXJjaC5jaGFyQXQoMCkgIT09ICc/JykgbG9jYXRpb24uc2VhcmNoID0gJz8nICsgbG9jYXRpb24uc2VhcmNoO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhdGlvbi5zZWFyY2ggPSAnJztcbiAgICB9XG5cbiAgICBpZiAobG9jYXRpb24uaGFzaCkge1xuICAgICAgaWYgKGxvY2F0aW9uLmhhc2guY2hhckF0KDApICE9PSAnIycpIGxvY2F0aW9uLmhhc2ggPSAnIycgKyBsb2NhdGlvbi5oYXNoO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhdGlvbi5oYXNoID0gJyc7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlICE9PSB1bmRlZmluZWQgJiYgbG9jYXRpb24uc3RhdGUgPT09IHVuZGVmaW5lZCkgbG9jYXRpb24uc3RhdGUgPSBzdGF0ZTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgbG9jYXRpb24ucGF0aG5hbWUgPSBkZWNvZGVVUkkobG9jYXRpb24ucGF0aG5hbWUpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaWYgKGUgaW5zdGFuY2VvZiBVUklFcnJvcikge1xuICAgICAgdGhyb3cgbmV3IFVSSUVycm9yKCdQYXRobmFtZSBcIicgKyBsb2NhdGlvbi5wYXRobmFtZSArICdcIiBjb3VsZCBub3QgYmUgZGVjb2RlZC4gJyArICdUaGlzIGlzIGxpa2VseSBjYXVzZWQgYnkgYW4gaW52YWxpZCBwZXJjZW50LWVuY29kaW5nLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChrZXkpIGxvY2F0aW9uLmtleSA9IGtleTtcblxuICBpZiAoY3VycmVudExvY2F0aW9uKSB7XG4gICAgLy8gUmVzb2x2ZSBpbmNvbXBsZXRlL3JlbGF0aXZlIHBhdGhuYW1lIHJlbGF0aXZlIHRvIGN1cnJlbnQgbG9jYXRpb24uXG4gICAgaWYgKCFsb2NhdGlvbi5wYXRobmFtZSkge1xuICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPSBjdXJyZW50TG9jYXRpb24ucGF0aG5hbWU7XG4gICAgfSBlbHNlIGlmIChsb2NhdGlvbi5wYXRobmFtZS5jaGFyQXQoMCkgIT09ICcvJykge1xuICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPSAoMCwgX3Jlc29sdmVQYXRobmFtZTIuZGVmYXVsdCkobG9jYXRpb24ucGF0aG5hbWUsIGN1cnJlbnRMb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIFdoZW4gdGhlcmUgaXMgbm8gcHJpb3IgbG9jYXRpb24gYW5kIHBhdGhuYW1lIGlzIGVtcHR5LCBzZXQgaXQgdG8gL1xuICAgIGlmICghbG9jYXRpb24ucGF0aG5hbWUpIHtcbiAgICAgIGxvY2F0aW9uLnBhdGhuYW1lID0gJy8nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBsb2NhdGlvbjtcbn07XG5cbnZhciBsb2NhdGlvbnNBcmVFcXVhbCA9IGV4cG9ydHMubG9jYXRpb25zQXJlRXF1YWwgPSBmdW5jdGlvbiBsb2NhdGlvbnNBcmVFcXVhbChhLCBiKSB7XG4gIHJldHVybiBhLnBhdGhuYW1lID09PSBiLnBhdGhuYW1lICYmIGEuc2VhcmNoID09PSBiLnNlYXJjaCAmJiBhLmhhc2ggPT09IGIuaGFzaCAmJiBhLmtleSA9PT0gYi5rZXkgJiYgKDAsIF92YWx1ZUVxdWFsMi5kZWZhdWx0KShhLnN0YXRlLCBiLnN0YXRlKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2hpc3RvcnkvTG9jYXRpb25VdGlscy5qcyIsImZ1bmN0aW9uIGlzQWJzb2x1dGUocGF0aG5hbWUpIHtcbiAgcmV0dXJuIHBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nO1xufVxuXG4vLyBBYm91dCAxLjV4IGZhc3RlciB0aGFuIHRoZSB0d28tYXJnIHZlcnNpb24gb2YgQXJyYXkjc3BsaWNlKClcbmZ1bmN0aW9uIHNwbGljZU9uZShsaXN0LCBpbmRleCkge1xuICBmb3IgKHZhciBpID0gaW5kZXgsIGsgPSBpICsgMSwgbiA9IGxpc3QubGVuZ3RoOyBrIDwgbjsgaSArPSAxLCBrICs9IDEpIHtcbiAgICBsaXN0W2ldID0gbGlzdFtrXTtcbiAgfVxuXG4gIGxpc3QucG9wKCk7XG59XG5cbi8vIFRoaXMgaW1wbGVtZW50YXRpb24gaXMgYmFzZWQgaGVhdmlseSBvbiBub2RlJ3MgdXJsLnBhcnNlXG5mdW5jdGlvbiByZXNvbHZlUGF0aG5hbWUodG8pIHtcbiAgdmFyIGZyb20gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICcnO1xuXG4gIHZhciB0b1BhcnRzID0gdG8gJiYgdG8uc3BsaXQoJy8nKSB8fCBbXTtcbiAgdmFyIGZyb21QYXJ0cyA9IGZyb20gJiYgZnJvbS5zcGxpdCgnLycpIHx8IFtdO1xuXG4gIHZhciBpc1RvQWJzID0gdG8gJiYgaXNBYnNvbHV0ZSh0byk7XG4gIHZhciBpc0Zyb21BYnMgPSBmcm9tICYmIGlzQWJzb2x1dGUoZnJvbSk7XG4gIHZhciBtdXN0RW5kQWJzID0gaXNUb0FicyB8fCBpc0Zyb21BYnM7XG5cbiAgaWYgKHRvICYmIGlzQWJzb2x1dGUodG8pKSB7XG4gICAgLy8gdG8gaXMgYWJzb2x1dGVcbiAgICBmcm9tUGFydHMgPSB0b1BhcnRzO1xuICB9IGVsc2UgaWYgKHRvUGFydHMubGVuZ3RoKSB7XG4gICAgLy8gdG8gaXMgcmVsYXRpdmUsIGRyb3AgdGhlIGZpbGVuYW1lXG4gICAgZnJvbVBhcnRzLnBvcCgpO1xuICAgIGZyb21QYXJ0cyA9IGZyb21QYXJ0cy5jb25jYXQodG9QYXJ0cyk7XG4gIH1cblxuICBpZiAoIWZyb21QYXJ0cy5sZW5ndGgpIHJldHVybiAnLyc7XG5cbiAgdmFyIGhhc1RyYWlsaW5nU2xhc2ggPSB2b2lkIDA7XG4gIGlmIChmcm9tUGFydHMubGVuZ3RoKSB7XG4gICAgdmFyIGxhc3QgPSBmcm9tUGFydHNbZnJvbVBhcnRzLmxlbmd0aCAtIDFdO1xuICAgIGhhc1RyYWlsaW5nU2xhc2ggPSBsYXN0ID09PSAnLicgfHwgbGFzdCA9PT0gJy4uJyB8fCBsYXN0ID09PSAnJztcbiAgfSBlbHNlIHtcbiAgICBoYXNUcmFpbGluZ1NsYXNoID0gZmFsc2U7XG4gIH1cblxuICB2YXIgdXAgPSAwO1xuICBmb3IgKHZhciBpID0gZnJvbVBhcnRzLmxlbmd0aDsgaSA+PSAwOyBpLS0pIHtcbiAgICB2YXIgcGFydCA9IGZyb21QYXJ0c1tpXTtcblxuICAgIGlmIChwYXJ0ID09PSAnLicpIHtcbiAgICAgIHNwbGljZU9uZShmcm9tUGFydHMsIGkpO1xuICAgIH0gZWxzZSBpZiAocGFydCA9PT0gJy4uJykge1xuICAgICAgc3BsaWNlT25lKGZyb21QYXJ0cywgaSk7XG4gICAgICB1cCsrO1xuICAgIH0gZWxzZSBpZiAodXApIHtcbiAgICAgIHNwbGljZU9uZShmcm9tUGFydHMsIGkpO1xuICAgICAgdXAtLTtcbiAgICB9XG4gIH1cblxuICBpZiAoIW11c3RFbmRBYnMpIGZvciAoOyB1cC0tOyB1cCkge1xuICAgIGZyb21QYXJ0cy51bnNoaWZ0KCcuLicpO1xuICB9aWYgKG11c3RFbmRBYnMgJiYgZnJvbVBhcnRzWzBdICE9PSAnJyAmJiAoIWZyb21QYXJ0c1swXSB8fCAhaXNBYnNvbHV0ZShmcm9tUGFydHNbMF0pKSkgZnJvbVBhcnRzLnVuc2hpZnQoJycpO1xuXG4gIHZhciByZXN1bHQgPSBmcm9tUGFydHMuam9pbignLycpO1xuXG4gIGlmIChoYXNUcmFpbGluZ1NsYXNoICYmIHJlc3VsdC5zdWJzdHIoLTEpICE9PSAnLycpIHJlc3VsdCArPSAnLyc7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVzb2x2ZVBhdGhuYW1lO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9yZXNvbHZlLXBhdGhuYW1lL2luZGV4LmpzIiwidmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiB2YWx1ZUVxdWFsKGEsIGIpIHtcbiAgaWYgKGEgPT09IGIpIHJldHVybiB0cnVlO1xuXG4gIGlmIChhID09IG51bGwgfHwgYiA9PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoYSkpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShiKSAmJiBhLmxlbmd0aCA9PT0gYi5sZW5ndGggJiYgYS5ldmVyeShmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgIHJldHVybiB2YWx1ZUVxdWFsKGl0ZW0sIGJbaW5kZXhdKTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBhVHlwZSA9IHR5cGVvZiBhID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihhKTtcbiAgdmFyIGJUeXBlID0gdHlwZW9mIGIgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGIpO1xuXG4gIGlmIChhVHlwZSAhPT0gYlR5cGUpIHJldHVybiBmYWxzZTtcblxuICBpZiAoYVR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgdmFyIGFWYWx1ZSA9IGEudmFsdWVPZigpO1xuICAgIHZhciBiVmFsdWUgPSBiLnZhbHVlT2YoKTtcblxuICAgIGlmIChhVmFsdWUgIT09IGEgfHwgYlZhbHVlICE9PSBiKSByZXR1cm4gdmFsdWVFcXVhbChhVmFsdWUsIGJWYWx1ZSk7XG5cbiAgICB2YXIgYUtleXMgPSBPYmplY3Qua2V5cyhhKTtcbiAgICB2YXIgYktleXMgPSBPYmplY3Qua2V5cyhiKTtcblxuICAgIGlmIChhS2V5cy5sZW5ndGggIT09IGJLZXlzLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgcmV0dXJuIGFLZXlzLmV2ZXJ5KGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiB2YWx1ZUVxdWFsKGFba2V5XSwgYltrZXldKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsdWVFcXVhbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdmFsdWUtZXF1YWwvaW5kZXguanMiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIgPSBmdW5jdGlvbiBjcmVhdGVUcmFuc2l0aW9uTWFuYWdlcigpIHtcbiAgdmFyIHByb21wdCA9IG51bGw7XG5cbiAgdmFyIHNldFByb21wdCA9IGZ1bmN0aW9uIHNldFByb21wdChuZXh0UHJvbXB0KSB7XG4gICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KShwcm9tcHQgPT0gbnVsbCwgJ0EgaGlzdG9yeSBzdXBwb3J0cyBvbmx5IG9uZSBwcm9tcHQgYXQgYSB0aW1lJyk7XG5cbiAgICBwcm9tcHQgPSBuZXh0UHJvbXB0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChwcm9tcHQgPT09IG5leHRQcm9tcHQpIHByb21wdCA9IG51bGw7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgY29uZmlybVRyYW5zaXRpb25UbyA9IGZ1bmN0aW9uIGNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgY2FsbGJhY2spIHtcbiAgICAvLyBUT0RPOiBJZiBhbm90aGVyIHRyYW5zaXRpb24gc3RhcnRzIHdoaWxlIHdlJ3JlIHN0aWxsIGNvbmZpcm1pbmdcbiAgICAvLyB0aGUgcHJldmlvdXMgb25lLCB3ZSBtYXkgZW5kIHVwIGluIGEgd2VpcmQgc3RhdGUuIEZpZ3VyZSBvdXQgdGhlXG4gICAgLy8gYmVzdCB3YXkgdG8gaGFuZGxlIHRoaXMuXG4gICAgaWYgKHByb21wdCAhPSBudWxsKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gdHlwZW9mIHByb21wdCA9PT0gJ2Z1bmN0aW9uJyA/IHByb21wdChsb2NhdGlvbiwgYWN0aW9uKSA6IHByb21wdDtcblxuICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZ2V0VXNlckNvbmZpcm1hdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGdldFVzZXJDb25maXJtYXRpb24ocmVzdWx0LCBjYWxsYmFjayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KShmYWxzZSwgJ0EgaGlzdG9yeSBuZWVkcyBhIGdldFVzZXJDb25maXJtYXRpb24gZnVuY3Rpb24gaW4gb3JkZXIgdG8gdXNlIGEgcHJvbXB0IG1lc3NhZ2UnKTtcblxuICAgICAgICAgIGNhbGxiYWNrKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBSZXR1cm4gZmFsc2UgZnJvbSBhIHRyYW5zaXRpb24gaG9vayB0byBjYW5jZWwgdGhlIHRyYW5zaXRpb24uXG4gICAgICAgIGNhbGxiYWNrKHJlc3VsdCAhPT0gZmFsc2UpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjayh0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGxpc3RlbmVycyA9IFtdO1xuXG4gIHZhciBhcHBlbmRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFwcGVuZExpc3RlbmVyKGZuKSB7XG4gICAgdmFyIGlzQWN0aXZlID0gdHJ1ZTtcblxuICAgIHZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIGxpc3RlbmVyKCkge1xuICAgICAgaWYgKGlzQWN0aXZlKSBmbi5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbSAhPT0gbGlzdGVuZXI7XG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBub3RpZnlMaXN0ZW5lcnMgPSBmdW5jdGlvbiBub3RpZnlMaXN0ZW5lcnMoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgbGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gbGlzdGVuZXIuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHNldFByb21wdDogc2V0UHJvbXB0LFxuICAgIGNvbmZpcm1UcmFuc2l0aW9uVG86IGNvbmZpcm1UcmFuc2l0aW9uVG8sXG4gICAgYXBwZW5kTGlzdGVuZXI6IGFwcGVuZExpc3RlbmVyLFxuICAgIG5vdGlmeUxpc3RlbmVyczogbm90aWZ5TGlzdGVuZXJzXG4gIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVUcmFuc2l0aW9uTWFuYWdlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlci5qcyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBjYW5Vc2VET00gPSBleHBvcnRzLmNhblVzZURPTSA9ICEhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbnZhciBhZGRFdmVudExpc3RlbmVyID0gZXhwb3J0cy5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudCwgbGlzdGVuZXIpIHtcbiAgcmV0dXJuIG5vZGUuYWRkRXZlbnRMaXN0ZW5lciA/IG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIsIGZhbHNlKSA6IG5vZGUuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50LCBsaXN0ZW5lcik7XG59O1xuXG52YXIgcmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGV4cG9ydHMucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnQsIGxpc3RlbmVyKSB7XG4gIHJldHVybiBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPyBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyLCBmYWxzZSkgOiBub2RlLmRldGFjaEV2ZW50KCdvbicgKyBldmVudCwgbGlzdGVuZXIpO1xufTtcblxudmFyIGdldENvbmZpcm1hdGlvbiA9IGV4cG9ydHMuZ2V0Q29uZmlybWF0aW9uID0gZnVuY3Rpb24gZ2V0Q29uZmlybWF0aW9uKG1lc3NhZ2UsIGNhbGxiYWNrKSB7XG4gIHJldHVybiBjYWxsYmFjayh3aW5kb3cuY29uZmlybShtZXNzYWdlKSk7XG59OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWFsZXJ0XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBIVE1MNSBoaXN0b3J5IEFQSSBpcyBzdXBwb3J0ZWQuIFRha2VuIGZyb20gTW9kZXJuaXpyLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2Jsb2IvbWFzdGVyL2ZlYXR1cmUtZGV0ZWN0cy9oaXN0b3J5LmpzXG4gKiBjaGFuZ2VkIHRvIGF2b2lkIGZhbHNlIG5lZ2F0aXZlcyBmb3IgV2luZG93cyBQaG9uZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JlYWN0LXJvdXRlci9pc3N1ZXMvNTg2XG4gKi9cbnZhciBzdXBwb3J0c0hpc3RvcnkgPSBleHBvcnRzLnN1cHBvcnRzSGlzdG9yeSA9IGZ1bmN0aW9uIHN1cHBvcnRzSGlzdG9yeSgpIHtcbiAgdmFyIHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XG5cbiAgaWYgKCh1YS5pbmRleE9mKCdBbmRyb2lkIDIuJykgIT09IC0xIHx8IHVhLmluZGV4T2YoJ0FuZHJvaWQgNC4wJykgIT09IC0xKSAmJiB1YS5pbmRleE9mKCdNb2JpbGUgU2FmYXJpJykgIT09IC0xICYmIHVhLmluZGV4T2YoJ0Nocm9tZScpID09PSAtMSAmJiB1YS5pbmRleE9mKCdXaW5kb3dzIFBob25lJykgPT09IC0xKSByZXR1cm4gZmFsc2U7XG5cbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5ICYmICdwdXNoU3RhdGUnIGluIHdpbmRvdy5oaXN0b3J5O1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgYnJvd3NlciBmaXJlcyBwb3BzdGF0ZSBvbiBoYXNoIGNoYW5nZS5cbiAqIElFMTAgYW5kIElFMTEgZG8gbm90LlxuICovXG52YXIgc3VwcG9ydHNQb3BTdGF0ZU9uSGFzaENoYW5nZSA9IGV4cG9ydHMuc3VwcG9ydHNQb3BTdGF0ZU9uSGFzaENoYW5nZSA9IGZ1bmN0aW9uIHN1cHBvcnRzUG9wU3RhdGVPbkhhc2hDaGFuZ2UoKSB7XG4gIHJldHVybiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdUcmlkZW50JykgPT09IC0xO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIGZhbHNlIGlmIHVzaW5nIGdvKG4pIHdpdGggaGFzaCBoaXN0b3J5IGNhdXNlcyBhIGZ1bGwgcGFnZSByZWxvYWQuXG4gKi9cbnZhciBzdXBwb3J0c0dvV2l0aG91dFJlbG9hZFVzaW5nSGFzaCA9IGV4cG9ydHMuc3VwcG9ydHNHb1dpdGhvdXRSZWxvYWRVc2luZ0hhc2ggPSBmdW5jdGlvbiBzdXBwb3J0c0dvV2l0aG91dFJlbG9hZFVzaW5nSGFzaCgpIHtcbiAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0ZpcmVmb3gnKSA9PT0gLTE7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBhIGdpdmVuIHBvcHN0YXRlIGV2ZW50IGlzIGFuIGV4dHJhbmVvdXMgV2ViS2l0IGV2ZW50LlxuICogQWNjb3VudHMgZm9yIHRoZSBmYWN0IHRoYXQgQ2hyb21lIG9uIGlPUyBmaXJlcyByZWFsIHBvcHN0YXRlIGV2ZW50c1xuICogY29udGFpbmluZyB1bmRlZmluZWQgc3RhdGUgd2hlbiBwcmVzc2luZyB0aGUgYmFjayBidXR0b24uXG4gKi9cbnZhciBpc0V4dHJhbmVvdXNQb3BzdGF0ZUV2ZW50ID0gZXhwb3J0cy5pc0V4dHJhbmVvdXNQb3BzdGF0ZUV2ZW50ID0gZnVuY3Rpb24gaXNFeHRyYW5lb3VzUG9wc3RhdGVFdmVudChldmVudCkge1xuICByZXR1cm4gZXZlbnQuc3RhdGUgPT09IHVuZGVmaW5lZCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0NyaU9TJykgPT09IC0xO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9ET01VdGlscy5qcyIsImltcG9ydCAnLi9zdHlsZS5zY3NzJ1xuaW1wb3J0IGNvbmZpZyBmcm9tICdjb25maWcnXG5pbXBvcnQgeyB0aGVtZVN0b3JlIH0gZnJvbSAnIy9zdG9yZXMnXG5cbmNvbnN0IHRoZW1lcyA9IGNvbmZpZy50aGVtZXNcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gIGNvbnN0ICRzaWRlYmFyID0gJCgnI0otc2lkZWJhci1oZWFkZXInKVxuICBjb25zdCAkYm9keSA9ICQoJ2JvZHknKVxuICBjb25zdCAkdGhlbWVTZWxlY3RvciA9ICQoJyNKLXRoZW1lLXNlbGVjdG9yJylcbiAgY29uc3QgJHNpZGViYXJCb2R5ID0gJCgnI0otc2lkZS1iYXItYm9keScpXG4gIGxldCBpc1NlYXJjaFNob3dpbmcgPSBmYWxzZVxuICBsZXQgaXNTaWRlQm9keVNob3dpbmcgPSB0cnVlXG5cbiAgJHRoZW1lU2VsZWN0b3JcbiAgICAuaHRtbChcbiAgICAgIHRoZW1lc1xuICAgICAgICAubWFwKHRoZW1lID0+IHtcbiAgICAgICAgICBjb25zdCBpc1NlbGVjdGVkID0gdGhlbWVTdG9yZS50aGVtZSA9PT0gdGhlbWUgPyAnc2VsZWN0ZWQnIDogJydcbiAgICAgICAgICByZXR1cm4gYDxvcHRpb24gdmFsdWU9XCIke3RoZW1lfVwiICR7aXNTZWxlY3RlZH0+JHt0aGVtZX08L29wdGlvbj5gXG4gICAgICAgIH0pXG4gICAgICAgIC5qb2luKCcnKVxuICAgIClcbiAgICAub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpXG4gICAgICBjb25zdCB0aGVtZSA9ICR0aGlzLnZhbCgpXG5cbiAgICAgIGlmICh0aGVtZSAhPT0gdGhlbWVTdG9yZS50aGVtZSkge1xuICAgICAgICAkYm9keS5hZGRDbGFzcygndGhlbWUtJyArIHRoZW1lKS5yZW1vdmVDbGFzcygndGhlbWUtJyArIHRoZW1lU3RvcmUudGhlbWUpXG4gICAgICAgIHRoZW1lU3RvcmUuc2V0VGhlbWUodGhlbWUpXG4gICAgICB9XG4gICAgfSlcblxuICAkYm9keS5hZGRDbGFzcygndGhlbWUtJyArIHRoZW1lU3RvcmUudGhlbWUpXG5cbiAgJHNpZGViYXJcbiAgICAub24oJ2NsaWNrJywgJy5KLXNpZGViYXItbG9nbycsIGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpXG5cbiAgICAgIGlmICgkdGhpcy5pcygnLmFjdGl2ZScpKSB7XG4gICAgICAgIHNpZGViYXJCb2R5SGlkZSgpXG4gICAgICAgICR0aGlzLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2lkZWJhckJvZHlTaG93KClcbiAgICAgICAgZW1pdHRlci5lbWl0KCdzd2l0Y2gtc2lkZWJhcicsIHsgdGFyZ2V0OiAnbG9nbycgfSlcbiAgICAgICAgJHRoaXNcbiAgICAgICAgICAuYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAgICAgLnNpYmxpbmdzKClcbiAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICB9XG4gICAgfSlcbiAgICAub24oJ2NsaWNrJywgJy5KLXNpZGViYXItc2VhcmNoJywgZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCAkdGhpcyA9ICQodGhpcylcblxuICAgICAgaWYgKCR0aGlzLmlzKCcuYWN0aXZlJykpIHtcbiAgICAgICAgc2lkZWJhckJvZHlIaWRlKClcbiAgICAgICAgJHRoaXMucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaWRlYmFyQm9keVNob3coKVxuXG4gICAgICAgICR0aGlzXG4gICAgICAgICAgLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgICAgICAgIC5zaWJsaW5ncygpXG4gICAgICAgICAgLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuXG4gICAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInNlYXJjaC1ib3hcIiAqLyAncGFydGlhbHMvc2lkZS1iYXItYm9keS9zZWFyY2gtYm94JykudGhlbigoKSA9PiB7XG4gICAgICAgICAgZW1pdHRlci5lbWl0KCdzd2l0Y2gtc2lkZWJhcicsIHsgdGFyZ2V0OiAnc2VhcmNoJyB9KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgZnVuY3Rpb24gc2lkZWJhckJvZHlTaG93KCkge1xuICAgICRzaWRlYmFyQm9keS5yZW1vdmVDbGFzcygnaGlkZGVuJylcbiAgICBpc1NpZGVCb2R5U2hvd2luZyA9IHRydWVcbiAgfVxuICBmdW5jdGlvbiBzaWRlYmFyQm9keUhpZGUoKSB7XG4gICAgJHNpZGViYXJCb2R5LmFkZENsYXNzKCdoaWRkZW4nKVxuICAgIGlzU2lkZUJvZHlTaG93aW5nID0gZmFsc2VcbiAgfVxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhcnRpYWxzL3NpZGUtYmFyLWhlYWRlci9pbmRleC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYXJ0aWFscy9zaWRlLWJhci1oZWFkZXIvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiaW1wb3J0ICcuL2Jsb2ctdHJlZSdcbmltcG9ydCAnLi9zdHlsZS5zY3NzJ1xuXG4kKGZ1bmN0aW9uKCkge1xuICBjb25zdCAkc2VhcmNoQm94ID0gJCgnI0otc2VhcmNoLWJveCcpXG4gIGNvbnN0ICRibG9nVHJlZSA9ICQoJyNKLWJsb2ctdHJlZScpXG4gIGNvbnN0ICRzZWFyY2hJbnB1dCA9ICRzZWFyY2hCb3guZmluZCgnLkotaW5wdXQtc2VhcmNoJylcbiAgY29uc3QgJHRhZ1RyZWUgPSAkKCcjSi1ibG9nLXRyZWUnKVxuXG4gIGVtaXR0ZXIub24oJ3N3aXRjaC1zaWRlYmFyJywgKHsgdGFyZ2V0IH0pID0+IHtcbiAgICBjb25zdCBpc1NlYXJjaCA9IHRhcmdldCA9PT0gJ3NlYXJjaCdcblxuICAgIGlmIChpc1NlYXJjaCkge1xuICAgICAgJGJsb2dUcmVlLmhpZGUoKVxuICAgICAgJHNlYXJjaEJveC5yZW1vdmVDbGFzcygnaGlkZGVuJylcbiAgICAgICRzZWFyY2hJbnB1dC5mb2N1cygpXG4gICAgfSBlbHNlIHtcbiAgICAgICRibG9nVHJlZS5zaG93KClcbiAgICAgICRzZWFyY2hCb3guYWRkQ2xhc3MoJ2hpZGRlbicpXG4gICAgfVxuICB9KVxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhcnRpYWxzL3NpZGUtYmFyLWJvZHkvaW5kZXguanMiLCJpbXBvcnQgJy4vc3R5bGUuc2NzcydcbmltcG9ydCBoaXN0b3J5IGZyb20gJyMvaGlzdG9yeSdcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gIGNvbnN0ICR0YWdUcmVlID0gJCgnI0otYmxvZy10cmVlJylcbiAgY29uc3QgJGFsbFBvc3RzID0gJCgnI0otcG9zdHMtYWxsLWhpZGRlbicpXG4gIGNvbnN0IHBhdGhuYW1lID0gbG9jYXRpb24ucGF0aG5hbWVcbiAgY29uc3QgJGJvZHkgPSAkKCdib2R5JylcbiAgY29uc3QgJHVudGFnZWRQb3N0cyA9ICR0YWdUcmVlLmZpbmQoJy5KLXVudGFnZWQtcG9zdHMnKVxuXG4gIGNvbnN0IHRhZ3MgPSB7fVxuICBjb25zdCB1bnRhZ2VkID0gW11cbiAgJGFsbFBvc3RzLmZpbmQoJy5KLXBvc3QnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0ICRwb3N0ID0gJCh0aGlzKVxuICAgIGNvbnN0IHNsdWcgPSAkcG9zdC5kYXRhKCdzbHVnJylcbiAgICBjb25zdCAkdGFncyA9ICRwb3N0LmZpbmQoJy5KLXRhZycpXG5cbiAgICBpZiAocGF0aG5hbWUuaW5jbHVkZXMoc2x1ZykpIHtcbiAgICAgICRwb3N0LmFkZENsYXNzKCdhY3RpdmUnKVxuICAgIH1cblxuICAgIGlmICgkdGFncy5sZW5ndGggPT09IDApIHtcbiAgICAgIHVudGFnZWQucHVzaCgkcG9zdFswXS5vdXRlckhUTUwpXG4gICAgfSBlbHNlIHtcbiAgICAgICR0YWdzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHRhZyA9IHRoaXMuaW5uZXJUZXh0XG4gICAgICAgIGlmICghdGFnc1t0YWddKSB7XG4gICAgICAgICAgdGFnc1t0YWddID0gW11cbiAgICAgICAgfVxuXG4gICAgICAgIHRhZ3NbdGFnXS5wdXNoKCRwb3N0WzBdLm91dGVySFRNTClcbiAgICAgIH0pXG4gICAgfVxuICB9KVxuXG4gIC8qKlxuICAgKiBjb3B5IHBvc3RzIHRvIGNvcnJlc3BvbmRpbmcgdGFnXG4gICAqL1xuICAkdGFnVHJlZS5maW5kKCcuSi1ibG9nLXRyZWUtcG9zdHMnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKVxuICAgIGNvbnN0IHBvc3RzID0gdGFnc1skdGhpcy5kYXRhKCd0YWcnKV1cblxuICAgIGlmICghcG9zdHMpIHtcbiAgICAgICR0aGlzXG4gICAgICAgIC5odG1sKCc8dWw+PGxpIGNsYXNzPVwiYmxvZy10cmVlLW5vLXBvc3RzIGxpZ2h0ZXJcIj5Db21pbmcgc29vbi4uLjwvbGk+PC91bD4nKVxuICAgICAgICAucGFyZW50KClcbiAgICAgICAgLmFkZENsYXNzKCdwb3N0LWhpZGRlbicpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAkdGhpcy5odG1sKHBvc3RzLmpvaW4oJycpKS5jc3Moe1xuICAgICAgaGVpZ2h0OiAyNiAqIHBvc3RzLmxlbmd0aFxuICAgIH0pXG4gIH0pXG5cbiAgJHVudGFnZWRQb3N0cy5odG1sKHVudGFnZWQuam9pbignJykpXG5cbiAgY29uc3QgJHBvc3RzID0gJCgnLkotYmxvZy10cmVlLXRhZ3MgLkotcG9zdCcpXG5cbiAgLy8gZXZlbnQgYmluZGluZ1xuICAkdGFnVHJlZVxuICAgIC5hZGRDbGFzcygnbG9hZGluZy1oaWRkZW4nKVxuICAgIC5vbignY2xpY2snLCAnLkotYmxvZy10cmVlLXRhZ25hbWUnLCBmdW5jdGlvbigpIHtcbiAgICAgICQodGhpcylcbiAgICAgICAgLnBhcmVudCgpXG4gICAgICAgIC50b2dnbGVDbGFzcygncG9zdC1oaWRkZW4nKVxuICAgIH0pXG4gICAgLm9uKCdjbGljaycsICcuSi1nbzJwb3N0JywgZnVuY3Rpb24oZSkge1xuICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpXG5cbiAgICAgIGlmICghJGJvZHkuaXMoJy5wb3N0LXRlbXBsYXRlJykpIHJldHVyblxuXG4gICAgICBpZiAoJHRoaXMucGFyZW50cygnLkotcG9zdCcpLmlzKCcuYWN0aXZlJykpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBpZCA9ICR0aGlzLmRhdGEoJ2lkJylcbiAgICAgIGNvbnN0IHVybCA9ICR0aGlzLmF0dHIoJ2hyZWYnKVxuXG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGVtaXR0ZXIuZW1pdCgnYWRkLXBvc3QtdGFiJywge1xuICAgICAgICBpZCxcbiAgICAgICAgdXJsLFxuICAgICAgICB0aXRsZTogJHRoaXMuYXR0cigndGl0bGUnKSxcbiAgICAgICAgc2x1ZzogJHRoaXMucGFyZW50cygnLkotcG9zdCcpLmRhdGEoJ3NsdWcnKVxuICAgICAgfSlcbiAgICB9KVxuXG4gIGhpc3RvcnkubGlzdGVuKGxvY2F0aW9uID0+IHtcbiAgICBjb25zdCBuZXh0VGFiID0gbG9jYXRpb24uc3RhdGVcblxuICAgICRwb3N0c1xuICAgICAgLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgICAgLmZpbHRlcigoaWR4LCBwb3N0KSA9PiB7XG4gICAgICAgIHJldHVybiAkKHBvc3QpLmRhdGEoJ3NsdWcnKSA9PT0gbmV4dFRhYi5zbHVnXG4gICAgICB9KVxuICAgICAgLmFkZENsYXNzKCdhY3RpdmUnKVxuICB9KVxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhcnRpYWxzL3NpZGUtYmFyLWJvZHkvYmxvZy10cmVlL2luZGV4LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhcnRpYWxzL3NpZGUtYmFyLWJvZHkvYmxvZy10cmVlL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYXJ0aWFscy9zaWRlLWJhci1ib2R5L3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xuXG4kKGZ1bmN0aW9uKCkge1xuICBjb25zdCAkcmVhZGluZ1RpbWUgPSAkKFwiLkotcmVhZGluZy10aW1lXCIpO1xuXG4gIGVtaXR0ZXIub24oXCJyZWZyZXNoLXJlYWRpbmctdGltZVwiLCAoeyB0aW1lIH0pID0+IHtcbiAgICAkcmVhZGluZ1RpbWUuaHRtbCh0aW1lKTtcbiAgfSk7XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhcnRpYWxzL2Zvb3Rlci9pbmRleC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYXJ0aWFscy9mb290ZXIvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnXG5pbXBvcnQgaGlzdG9yeSBmcm9tICcjL2hpc3RvcnknXG5pbXBvcnQgeyBwb3N0U3RvcmUgfSBmcm9tICcjL3N0b3JlcydcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tICcjL3V0aWxzJ1xuXG4kKGZ1bmN0aW9uKCkge1xuICBjb25zdCAkYm9keSA9ICQoJ2JvZHknKVxuICBjb25zdCAkcG9zdCA9ICQoJyNKLXBvc3QnKVxuICBjb25zdCAkdGl0bGUgPSAkcG9zdC5maW5kKCcuSi1wb3N0LXRpdGxlJylcbiAgY29uc3QgJGNvbnRlbnQgPSAkcG9zdC5maW5kKCcuSi1wb3N0LWNvbnRlbnQnKVxuICBjb25zdCAkbWV0YSA9ICRwb3N0LmZpbmQoJy5KLXBvc3QtbWV0YScpXG4gIGNvbnN0ICRmZWF0dXJlSW1hZ2UgPSAkcG9zdC5maW5kKCcuSi1wb3N0LWZlYXR1cmUtaW1hZ2UnKVxuICBjb25zdCBvcmlnaW4gPSBsb2NhdGlvbi5vcmlnaW5cblxuICBpZiAoJCgnYm9keScpLmlzKCcucG9zdC10ZW1wbGF0ZScpKSB7XG4gICAgZW1pdHRlci5lbWl0KCdhZGQtcG9zdC10YWInLCB7XG4gICAgICBpZDogJHBvc3QuZGF0YSgnaWQnKSxcbiAgICAgIHRpdGxlOiAkcG9zdC5kYXRhKCd0aXRsZScpLFxuICAgICAgc2x1ZzogJHBvc3QuZGF0YSgnc2x1ZycpLFxuICAgICAgdXJsOiAkcG9zdC5kYXRhKCd1cmwnKVxuICAgIH0pXG5cbiAgICBlbWl0dGVyLmVtaXQoJ3JlZnJlc2gtcmVhZGluZy10aW1lJywge1xuICAgICAgdGltZTogJCgnLkotcmVhZGluZy10aW1lLWhpZGRlbicpLmh0bWwoKVxuICAgIH0pXG4gIH1cblxuICBoaXN0b3J5Lmxpc3RlbigobG9jYXRpb24sIGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IHBvc3RJZCA9IGxvY2F0aW9uLnN0YXRlLmlkXG5cbiAgICBwb3N0SWQgJiZcbiAgICAgIHBvc3RTdG9yZS5mZXRjaFBvc3QocG9zdElkKS5kb25lKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgY29uc3QgcG9zdCA9IGRhdGEucG9zdHNbMF0gfHwge31cblxuICAgICAgICBjb25zdCB7IGNyZWF0ZWRfYXQsIHRpdGxlLCBodG1sLCBhdXRob3IsIGZlYXR1cmVfaW1hZ2UsIGNvbW1lbnRfaWQsIHVybCB9ID0gcG9zdFxuXG4gICAgICAgICR0aXRsZS5odG1sKHRpdGxlKVxuICAgICAgICAkY29udGVudC5odG1sKGh0bWwpXG4gICAgICAgICRtZXRhLmh0bWwoYFBvc3RlZCBieSA8YSBocmVmPVwiL2F1dGhvci8ke2F1dGhvci5zbHVnfS9cIj4ke2F1dGhvci5uYW1lfTwvYT4gb24gJHtmb3JtYXREYXRlKCckWS4kTS4kZCcsIGNyZWF0ZWRfYXQpfWApXG4gICAgICAgICRmZWF0dXJlSW1hZ2VbZmVhdHVyZV9pbWFnZSA/ICdyZW1vdmVDbGFzcycgOiAnYWRkQ2xhc3MnXSgnaGlkZGVuJylcbiAgICAgICAgICAuZmluZCgnZmlndXJlJylcbiAgICAgICAgICAuY3NzKHtcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2ZlYXR1cmVfaW1hZ2V9KWBcbiAgICAgICAgICB9KVxuXG4gICAgICAgIGVtaXR0ZXIuZW1pdCgncmVmcmVzaC1yZWFkaW5nLXRpbWUnLCB7XG4gICAgICAgICAgdGltZTogJydcbiAgICAgICAgfSlcblxuICAgICAgICBkb2N1bWVudC50aXRsZSA9IHRpdGxlXG5cbiAgICAgICAgJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIHdpbmRvdy5yZWZyZXNoQ29tbWVudCAmJiB3aW5kb3cucmVmcmVzaENvbW1lbnQoYGdob3N0LSR7Y29tbWVudF9pZH1gLCBvcmlnaW4gKyB1cmwsIHRpdGxlKVxuICAgICAgfSlcbiAgfSlcbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYXJ0aWFscy9wb3N0L2luZGV4LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhcnRpYWxzL3Bvc3Qvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhcnRpYWxzL3Bvc3QtbmF2L3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYXJ0aWFscy9ob21lL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYXJ0aWFscy9hdXRob3Ivc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==