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
      console.log(post);
      this.cachePost(id, post);
      return post;
    });
  }

  fetchPrevNextPost({ slug, published_at, type }) {
    if (['prev', 'next', 'both'].indexOf(type) === -1) return;
    const map = {
      prev: {
        sort: 'desc',
        published_at: '<='
      },
      next: {
        sort: 'asc',
        published_at: '>='
      }
    };
    return type !== 'both' ? fetch(type) : $.when(fetch('prev'), fetch('next'));

    function fetch(type) {
      return $.get(ghost.url.api('posts'), {
        filter: `slug:-[${slug}]+published_at:${map[type].published_at}${+new Date(published_at)}`,
        order: `published_at ${map[type].sort}`,
        limit: 1,
        fields: 'title,id,slug,url'
      });
    }
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
  const $prevNext = $('#J-prev-next');
  const $prev = $prevNext.find('.J-prev-post');
  const $next = $prevNext.find('.J-next-post');
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

  $prevNext.on('click', '.J-prev-next-item', function (e) {
    const $this = $(this);
    const id = $this.data('id');
    const url = $this.attr('href');
    const slug = $this.data('slug');

    e.preventDefault();
    emitter.emit('add-post-tab', {
      id,
      url,
      slug,
      title: $this.attr('title')
    });
  });

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

      // fetch prev and next and refresh
      __WEBPACK_IMPORTED_MODULE_2__stores__["a" /* postStore */].fetchPrevNextPost({
        published_at,
        slug,
        type: 'both'
      }).then(function (prev, next) {
        const prevPost = prev[0].posts[0];
        const nextPost = next[0].posts[0];

        console.log(published_at, prevPost, nextPost);

        prevPost ? $prev.show().html(`<a href="${prevPost.url}" data-id="${prevPost.id}" title="${prevPost.title}" data-slug="${prevPost.slug}">${prevPost.title}</a>`) : $prev.hide();

        nextPost ? $next.show().html(`<a href="${nextPost.url}" data-id="${nextPost.id}" title="${nextPost.title}" data-slug="${nextPost.slug}">${nextPost.title}</a>`) : $next.hide();
      });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzRjNGM5YWZiMjU3MTQ2YmVjNjkiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9oaXN0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy93YXJuaW5nL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9QYXRoVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2VtaXR0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21pdHQvZGlzdC9taXR0LmVzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9wYXJ0aWFscy9wb3N0LXRhYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvcmVzdWx0Lmpzb24iLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvcG9zdC10YWIvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmVzL1RoZW1lU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3Jlcy9UYWJTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmVzL1Bvc3RTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9jcmVhdGVCcm93c2VySGlzdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW52YXJpYW50L2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hpc3RvcnkvTG9jYXRpb25VdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS1wYXRobmFtZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsdWUtZXF1YWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hpc3RvcnkvY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hpc3RvcnkvRE9NVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvc2lkZS1iYXItaGVhZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhcnRpYWxzL3NpZGUtYmFyLWhlYWRlci9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3BhcnRpYWxzL3NpZGUtYmFyLWJvZHkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvc2lkZS1iYXItYm9keS9ibG9nLXRyZWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvc2lkZS1iYXItYm9keS9ibG9nLXRyZWUvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9wYXJ0aWFscy9zaWRlLWJhci1ib2R5L3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvZm9vdGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhcnRpYWxzL2Zvb3Rlci9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3BhcnRpYWxzL3Bvc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvcG9zdC9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3BhcnRpYWxzL3Bvc3QtbmF2L3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvaG9tZS9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3BhcnRpYWxzL2F1dGhvci9zdHlsZS5zY3NzIl0sIm5hbWVzIjpbInRoZW1lcyIsImxzUG9zdFRhYktleSIsImxzVGhlbWVLZXkiLCJsc1Bvc3RzS2V5IiwiZGVmYXVsdFRoZW1lIiwiY3JlYXRlSGlzdG9yeSIsInRoZW1lU3RvcmUiLCJ0YWJTdG9yZSIsInBvc3RTdG9yZSIsIndpbmRvdyIsInN0b3JlcyIsIiRib2R5IiwiJCIsImlzSG9tZVBhZ2UiLCJpcyIsImlzUG9zdFBhZ2UiLCJoU2Nyb2xsIiwiZWwiLCJjb25zb2xlIiwiZXJyb3IiLCJhZGRFdmVudExpc3RlbmVyIiwid2hlZWwiLCJlIiwiZGVsdGEiLCJ3aGVlbERlbHRhIiwiZGVsdGFZIiwic2Nyb2xsTGVmdCIsInByZXZlbnREZWZhdWx0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImZvcm1hdCIsInRlbXBsYXRlIiwidmFycyIsInJlcGxhY2UiLCJfIiwibmFtZSIsInZhbHVlIiwidHJpbSIsInRvTGVuIiwic291cmNlIiwibGVuIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJqb2luIiwiY2FsbCIsImxlbmd0aCIsInNsaWNlIiwiZm9ybWF0RGF0ZSIsImRhdGUiLCJrZXkiLCJEYXRlIiwiREFZIiwiWSIsImdldEZ1bGxZZWFyIiwieSIsIk0iLCJnZXRNb250aCIsImQiLCJnZXREYXRlIiwiRCIsImdldERheSIsIkgiLCJnZXRIb3VycyIsIm0iLCJnZXRNaW51dGVzIiwicyIsImdldFNlY29uZHMiLCJ3YXJuaW5nIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiY29uZGl0aW9uIiwiYXJncyIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsIkVycm9yIiwidGVzdCIsImFyZ0luZGV4IiwibWVzc2FnZSIsIngiLCJtb2R1bGUiLCJleHBvcnRzIiwiY2FjaGVkU2V0VGltZW91dCIsImNhY2hlZENsZWFyVGltZW91dCIsImRlZmF1bHRTZXRUaW1vdXQiLCJkZWZhdWx0Q2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsInJ1blRpbWVvdXQiLCJmdW4iLCJydW5DbGVhclRpbWVvdXQiLCJtYXJrZXIiLCJxdWV1ZSIsImRyYWluaW5nIiwiY3VycmVudFF1ZXVlIiwicXVldWVJbmRleCIsImNsZWFuVXBOZXh0VGljayIsImNvbmNhdCIsImRyYWluUXVldWUiLCJ0aW1lb3V0IiwicnVuIiwibmV4dFRpY2siLCJpIiwicHVzaCIsIkl0ZW0iLCJhcnJheSIsImFwcGx5IiwidGl0bGUiLCJicm93c2VyIiwiYXJndiIsInZlcnNpb24iLCJ2ZXJzaW9ucyIsIm5vb3AiLCJvbiIsImFkZExpc3RlbmVyIiwib25jZSIsIm9mZiIsInJlbW92ZUxpc3RlbmVyIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiZW1pdCIsInByZXBlbmRMaXN0ZW5lciIsInByZXBlbmRPbmNlTGlzdGVuZXIiLCJsaXN0ZW5lcnMiLCJiaW5kaW5nIiwiY3dkIiwiY2hkaXIiLCJkaXIiLCJ1bWFzayIsIl9fZXNNb2R1bGUiLCJhZGRMZWFkaW5nU2xhc2giLCJwYXRoIiwiY2hhckF0Iiwic3RyaXBMZWFkaW5nU2xhc2giLCJzdWJzdHIiLCJoYXNCYXNlbmFtZSIsInByZWZpeCIsIlJlZ0V4cCIsInN0cmlwQmFzZW5hbWUiLCJzdHJpcFRyYWlsaW5nU2xhc2giLCJwYXJzZVBhdGgiLCJwYXRobmFtZSIsInNlYXJjaCIsImhhc2giLCJoYXNoSW5kZXgiLCJpbmRleE9mIiwic2VhcmNoSW5kZXgiLCJjcmVhdGVQYXRoIiwibG9jYXRpb24iLCJlbWl0dGVyIiwibWl0dCIsImFsbCIsIk9iamVjdCIsImNyZWF0ZSIsInR5cGUiLCJoYW5kbGVyIiwic3BsaWNlIiwiZXZ0IiwibWFwIiwiJHBvc3RUYWJzIiwiJHNjcm9sbFdyYXAiLCJuZFNjcm9sbFdyYXAiLCJnZXQiLCJwb3N0IiwidGFicyIsImdldFRhYnMiLCJmaWx0ZXIiLCJ0YWIiLCJpZCIsInNldFRhYnMiLCJhY3RpdmUiLCJhY3RpdmVJZCIsImN1cnJlbnRUYWIiLCIkYWN0aXZlIiwiaHRtbCIsInNsdWciLCJmaW5kIiwiaGlzdG9yeSIsInVybCIsInNldEN1cnJlbnRUYWIiLCJzY3JvbGwydmlldyIsInN0b3BQcm9wYWdhdGlvbiIsImRlbGV0ZVRhYkl0ZW0iLCJwYXJlbnQiLCJkYXRhIiwiJHRoaXMiLCJhZGRDbGFzcyIsInNpYmxpbmdzIiwicmVtb3ZlQ2xhc3MiLCJ3cmFwV2lkdGgiLCJ3aWR0aCIsIndyYXBTY3JvbGxMZWZ0Iiwid3JhcFJpZ2h0IiwidGhyZXNob2xkIiwibmRBY3RpdmUiLCJhY3RpdmVXaWR0aCIsIm91dGVyV2lkdGgiLCJhY3RpdmVMZWZ0Iiwib2Zmc2V0TGVmdCIsImFjdGl2ZVJpZ2h0IiwibHMiLCJsb2NhbFN0b3JhZ2UiLCJjb25maWciLCJ0aGVtZSIsImdldEl0ZW0iLCJzZXRUaGVtZSIsInNldEl0ZW0iLCJzcGxpdCIsIm5leHRUYWIiLCJpc0N1cnJlbnRUYWIiLCJkZWxldGVkSWR4IiwiZmluZEluZGV4IiwiaWR4IiwiaHJlZiIsImZldGNoUG9zdCIsImNhY2hlIiwiZnJvbUNhY2hlIiwiRGVmZXJyZWQiLCJyZXNvbHZlIiwiZ2hvc3QiLCJhcGkiLCJpbmNsdWRlIiwiZmFpbCIsImVyciIsImxvZyIsImRvbmUiLCJwb3N0cyIsImNhY2hlUG9zdCIsImZldGNoUHJldk5leHRQb3N0IiwicHVibGlzaGVkX2F0IiwicHJldiIsInNvcnQiLCJuZXh0IiwiZmV0Y2giLCJ3aGVuIiwib3JkZXIiLCJsaW1pdCIsImZpZWxkcyIsImxzUG9zdHMiLCJKU09OIiwicGFyc2UiLCJ1c2VhYmxlIiwidGltZXN0YW1wIiwiaW5mbyIsImF1dGhvciIsImRlbGV0ZVBvc3RGcm9tQ2FjaGUiLCJzdHJpbmdpZnkiLCJpZHMiLCJrZXlzIiwic2hvdWxkRGVsZXRlSWQiLCJhIiwiYiIsIml0ZW0iLCJzaGlmdCIsIl90eXBlb2YiLCJTeW1ib2wiLCJpdGVyYXRvciIsIm9iaiIsImNvbnN0cnVjdG9yIiwiX2V4dGVuZHMiLCJhc3NpZ24iLCJ0YXJnZXQiLCJoYXNPd25Qcm9wZXJ0eSIsIl93YXJuaW5nIiwicmVxdWlyZSIsIl93YXJuaW5nMiIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfaW52YXJpYW50IiwiX2ludmFyaWFudDIiLCJfTG9jYXRpb25VdGlscyIsIl9QYXRoVXRpbHMiLCJfY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIiLCJfY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIyIiwiX0RPTVV0aWxzIiwiZGVmYXVsdCIsIlBvcFN0YXRlRXZlbnQiLCJIYXNoQ2hhbmdlRXZlbnQiLCJnZXRIaXN0b3J5U3RhdGUiLCJzdGF0ZSIsImNyZWF0ZUJyb3dzZXJIaXN0b3J5IiwicHJvcHMiLCJjYW5Vc2VET00iLCJnbG9iYWxIaXN0b3J5IiwiY2FuVXNlSGlzdG9yeSIsInN1cHBvcnRzSGlzdG9yeSIsIm5lZWRzSGFzaENoYW5nZUxpc3RlbmVyIiwic3VwcG9ydHNQb3BTdGF0ZU9uSGFzaENoYW5nZSIsIl9wcm9wcyRmb3JjZVJlZnJlc2giLCJmb3JjZVJlZnJlc2giLCJfcHJvcHMkZ2V0VXNlckNvbmZpcm0iLCJnZXRVc2VyQ29uZmlybWF0aW9uIiwiZ2V0Q29uZmlybWF0aW9uIiwiX3Byb3BzJGtleUxlbmd0aCIsImtleUxlbmd0aCIsImJhc2VuYW1lIiwiZ2V0RE9NTG9jYXRpb24iLCJoaXN0b3J5U3RhdGUiLCJfcmVmIiwiX3dpbmRvdyRsb2NhdGlvbiIsImNyZWF0ZUxvY2F0aW9uIiwiY3JlYXRlS2V5IiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwidHJhbnNpdGlvbk1hbmFnZXIiLCJzZXRTdGF0ZSIsIm5leHRTdGF0ZSIsIm5vdGlmeUxpc3RlbmVycyIsImFjdGlvbiIsImhhbmRsZVBvcFN0YXRlIiwiZXZlbnQiLCJpc0V4dHJhbmVvdXNQb3BzdGF0ZUV2ZW50IiwiaGFuZGxlUG9wIiwiaGFuZGxlSGFzaENoYW5nZSIsImZvcmNlTmV4dFBvcCIsImNvbmZpcm1UcmFuc2l0aW9uVG8iLCJvayIsInJldmVydFBvcCIsImZyb21Mb2NhdGlvbiIsInRvTG9jYXRpb24iLCJ0b0luZGV4IiwiYWxsS2V5cyIsImZyb21JbmRleCIsImdvIiwiaW5pdGlhbExvY2F0aW9uIiwiY3JlYXRlSHJlZiIsInB1c2hTdGF0ZSIsInByZXZJbmRleCIsIm5leHRLZXlzIiwicmVwbGFjZVN0YXRlIiwibiIsImdvQmFjayIsImdvRm9yd2FyZCIsImxpc3RlbmVyQ291bnQiLCJjaGVja0RPTUxpc3RlbmVycyIsImlzQmxvY2tlZCIsImJsb2NrIiwicHJvbXB0IiwidW5ibG9jayIsInNldFByb21wdCIsImxpc3RlbiIsImxpc3RlbmVyIiwidW5saXN0ZW4iLCJhcHBlbmRMaXN0ZW5lciIsImludmFyaWFudCIsImMiLCJmIiwiZnJhbWVzVG9Qb3AiLCJsb2NhdGlvbnNBcmVFcXVhbCIsIl9yZXNvbHZlUGF0aG5hbWUiLCJfcmVzb2x2ZVBhdGhuYW1lMiIsIl92YWx1ZUVxdWFsIiwiX3ZhbHVlRXF1YWwyIiwiY3VycmVudExvY2F0aW9uIiwiZGVjb2RlVVJJIiwiVVJJRXJyb3IiLCJpc0Fic29sdXRlIiwic3BsaWNlT25lIiwibGlzdCIsImluZGV4IiwiayIsInBvcCIsInJlc29sdmVQYXRobmFtZSIsInRvIiwiZnJvbSIsInRvUGFydHMiLCJmcm9tUGFydHMiLCJpc1RvQWJzIiwiaXNGcm9tQWJzIiwibXVzdEVuZEFicyIsImhhc1RyYWlsaW5nU2xhc2giLCJsYXN0IiwidXAiLCJwYXJ0IiwidW5zaGlmdCIsInJlc3VsdCIsInZhbHVlRXF1YWwiLCJpc0FycmF5IiwiZXZlcnkiLCJhVHlwZSIsImJUeXBlIiwiYVZhbHVlIiwidmFsdWVPZiIsImJWYWx1ZSIsImFLZXlzIiwiYktleXMiLCJjcmVhdGVUcmFuc2l0aW9uTWFuYWdlciIsIm5leHRQcm9tcHQiLCJjYWxsYmFjayIsImZuIiwiaXNBY3RpdmUiLCJfbGVuIiwiX2tleSIsImZvckVhY2giLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJub2RlIiwiYXR0YWNoRXZlbnQiLCJkZXRhY2hFdmVudCIsImNvbmZpcm0iLCJ1YSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInN1cHBvcnRzR29XaXRob3V0UmVsb2FkVXNpbmdIYXNoIiwicmVhZHkiLCIkc2lkZWJhciIsIiR0aGVtZVNlbGVjdG9yIiwiJHNpZGViYXJCb2R5IiwiaXNTZWFyY2hTaG93aW5nIiwiaXNTaWRlQm9keVNob3dpbmciLCJpc1NlbGVjdGVkIiwidmFsIiwic2lkZWJhckJvZHlIaWRlIiwic2lkZWJhckJvZHlTaG93IiwidGhlbiIsIiRzZWFyY2hCb3giLCIkYmxvZ1RyZWUiLCIkc2VhcmNoSW5wdXQiLCIkdGFnVHJlZSIsImlzU2VhcmNoIiwiaGlkZSIsImZvY3VzIiwic2hvdyIsIiRhbGxQb3N0cyIsIiR1bnRhZ2VkUG9zdHMiLCJ0YWdzIiwidW50YWdlZCIsImVhY2giLCIkcG9zdCIsIiR0YWdzIiwiaW5jbHVkZXMiLCJvdXRlckhUTUwiLCJ0YWciLCJpbm5lclRleHQiLCJjc3MiLCJoZWlnaHQiLCIkcG9zdHMiLCJ0b2dnbGVDbGFzcyIsInBhcmVudHMiLCJhdHRyIiwiJHJlYWRpbmdUaW1lIiwidGltZSIsIiRwcmV2TmV4dCIsIiRwcmV2IiwiJG5leHQiLCIkdGl0bGUiLCIkY29udGVudCIsIiRtZXRhIiwiJGZlYXR1cmVJbWFnZSIsIm9yaWdpbiIsInBvc3RJZCIsImZlYXR1cmVfaW1hZ2UiLCJjb21tZW50X2lkIiwiYmFja2dyb3VuZEltYWdlIiwicHJldlBvc3QiLCJuZXh0UG9zdCIsInJlZnJlc2hDb21tZW50Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLFdBQVcsRUFBRTtBQUN2RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7O0FBRUE7QUFD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M0QsQ0FBL0M7QUFDRCxLQTlDRDtBQStDRCxHQXBERDtBQXFERCxDQTlGRCxFOzs7Ozs7QUNMQSx5Qzs7Ozs7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7Ozs7Ozs7QUNBQSx5QyIsImZpbGUiOiJjb2Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl07XG4gXHR3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSBmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhjaHVua0lkcywgbW9yZU1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzKSB7XG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXSwgcmVzdWx0O1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyk7XG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHR9O1xuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3RzIHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdDE6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhID09PSAwKSB7XG4gXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHsgcmVzb2x2ZSgpOyB9KTtcbiBcdFx0fVxuXG4gXHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG4gXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRDaHVua0RhdGFbMl07XG4gXHRcdH1cblxuIFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG4gXHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF07XG4gXHRcdH0pO1xuIFx0XHRpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlO1xuXG4gXHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcbiBcdFx0dmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuIFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gXHRcdHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gXHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04JztcbiBcdFx0c2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiBcdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjAwMDA7XG5cbiBcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcbiBcdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG4gXHRcdH1cbiBcdFx0c2NyaXB0LnNyYyA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiY2h1bmsuXCIgKyAoe31bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuXCIgKyB7XCIwXCI6XCI2ZDdmM1wifVtjaHVua0lkXSArIFwiLmpzXCI7XG4gXHRcdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChvblNjcmlwdENvbXBsZXRlLCAxMjAwMDApO1xuIFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlO1xuIFx0XHRmdW5jdGlvbiBvblNjcmlwdENvbXBsZXRlKCkge1xuIFx0XHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cbiBcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuIFx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiBcdFx0XHR2YXIgY2h1bmsgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdFx0aWYoY2h1bmsgIT09IDApIHtcbiBcdFx0XHRcdGlmKGNodW5rKSB7XG4gXHRcdFx0XHRcdGNodW5rWzFdKG5ldyBFcnJvcignTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLicpKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcbiBcdFx0XHR9XG4gXHRcdH07XG4gXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcblxuIFx0XHRyZXR1cm4gcHJvbWlzZTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Fzc2V0cy9idWlsdC9cIjtcblxuIFx0Ly8gb24gZXJyb3IgZnVuY3Rpb24gZm9yIGFzeW5jIGxvYWRpbmdcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyB0aHJvdyBlcnI7IH07XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNzRjNGM5YWZiMjU3MTQ2YmVjNjkiLCJpbXBvcnQgeyB0aGVtZXMgfSBmcm9tICcuL3RoZW1lcy9yZXN1bHQuanNvbidcblxuZXhwb3J0IGRlZmF1bHQge1xuICB0aGVtZXMsXG4gIGxzUG9zdFRhYktleTogJ2NvZGVyLXBvc3QtdGFicycsXG4gIC8vIGxvY2Fsc3RvcmFnZSB0aGVtZSBrZXlcbiAgbHNUaGVtZUtleTogJ2NvZGVyLXRoZW1lJyxcbiAgbHNQb3N0c0tleTogJ2NvZGVyLXBvc3RzJyxcbiAgZGVmYXVsdFRoZW1lOiAnZGFya19kZWZhdWx0Jyxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbmZpZy5qcyIsImltcG9ydCBjcmVhdGVIaXN0b3J5IGZyb20gXCJoaXN0b3J5L2NyZWF0ZUJyb3dzZXJIaXN0b3J5XCJcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSGlzdG9yeSgpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hpc3RvcnkuanMiLCJpbXBvcnQgVGhlbWVTdG9yZSBmcm9tICcuL1RoZW1lU3RvcmUnXG5pbXBvcnQgVGFiU3RvcmUgZnJvbSAnLi9UYWJTdG9yZSdcbmltcG9ydCBQb3N0U3RvcmUgZnJvbSAnLi9Qb3N0U3RvcmUnXG5cbmV4cG9ydCBjb25zdCB0aGVtZVN0b3JlID0gbmV3IFRoZW1lU3RvcmUoKVxuZXhwb3J0IGNvbnN0IHRhYlN0b3JlID0gbmV3IFRhYlN0b3JlKClcbmV4cG9ydCBjb25zdCBwb3N0U3RvcmUgPSBuZXcgUG9zdFN0b3JlKClcblxud2luZG93LnN0b3JlcyA9IHtcbiAgdGhlbWVTdG9yZSxcbiAgdGFiU3RvcmUsXG4gIHBvc3RTdG9yZVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZXMvaW5kZXguanMiLCJjb25zdCAkYm9keSA9ICQoJ2JvZHknKVxuXG5leHBvcnQgY29uc3QgaXNIb21lUGFnZSA9ICgpID0+ICRib2R5LmlzKCcuaG9tZS10ZW1wbGF0ZScpXG5leHBvcnQgY29uc3QgaXNQb3N0UGFnZSA9ICgpID0+ICRib2R5LmlzKCcucG9zdC10ZW1wbGF0ZScpXG5cbi8qKlxuICogaG9yaXpvbnRhbGx5IHNjcm9sbFxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gKlxuICogQGV4YW1wbGVcbiAqICBjb25zdCBzdG9wSFNjcm9sbCA9IGhTY3JvbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0otaHNjcm9sbC1lbCcpKVxuICogIHN0b3BIU2Nyb2xsKCkgLy8gcmVtb3ZlRXZlbnRMaXN0ZW5lclxuICovXG5leHBvcnQgZnVuY3Rpb24gaFNjcm9sbChlbCkge1xuICBpZiAoIWVsKSB7XG4gICAgY29uc29sZS5lcnJvcignTXVzdCBzcGVjaWZ5IGVsIScpXG4gICAgcmV0dXJuXG4gIH1cblxuICBlbC5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIHdoZWVsKVxuXG4gIGZ1bmN0aW9uIHdoZWVsKGUpIHtcbiAgICBjb25zdCBkZWx0YSA9IGUud2hlZWxEZWx0YSA/IGUud2hlZWxEZWx0YSA6IC0xICogZS5kZWx0YVlcbiAgICBlbC5zY3JvbGxMZWZ0ICs9IC1kZWx0YVxuICAgIGUucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgcmV0dXJuICgpID0+IGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3doZWVsJywgd2hlZWwpXG59XG5cbmV4cG9ydCBjb25zdCBmb3JtYXQgPSBmdW5jdGlvbih0ZW1wbGF0ZSwgdmFycykge1xuICByZXR1cm4gdGVtcGxhdGUucmVwbGFjZSgvXFwkXFx7KFteXFx7XFx9XSopXFx9L2csIGZ1bmN0aW9uKF8sIG5hbWUpIHtcbiAgICB2YXIgdmFsdWUgPSB2YXJzW25hbWUudHJpbSgpXVxuICAgIHJldHVybiB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZSArICcnXG4gIH0pXG59XG5cbmNvbnN0IHRvTGVuID0gZnVuY3Rpb24oc291cmNlLCBsZW4pIHtcbiAgcmV0dXJuIChcbiAgICBBcnJheS5wcm90b3R5cGUuam9pbi5jYWxsKFxuICAgICAge1xuICAgICAgICBsZW5ndGg6IGxlbiArIDFcbiAgICAgIH0sXG4gICAgICAnMCdcbiAgICApICsgc291cmNlXG4gICkuc2xpY2UoLWxlbilcbn1cblxuZXhwb3J0IGNvbnN0IGZvcm1hdERhdGUgPSBmdW5jdGlvbih0ZW1wbGF0ZSwgZGF0ZSkge1xuICBpZiAoIWRhdGUpIHJldHVybiAnJ1xuICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UoL1xcJChbYS16QS1aXSkvZywgZnVuY3Rpb24oXywga2V5KSB7XG4gICAgcmV0dXJuICckeycgKyBrZXkgKyAnfSdcbiAgfSlcbiAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpXG4gIHZhciBEQVkgPSBbJ+aXpScsICfkuIAnLCAn5LqMJywgJ+S4iScsICflm5snLCAn5LqUJywgJ+WFrSddXG4gIHJldHVybiBmb3JtYXQodGVtcGxhdGUsIHtcbiAgICBZOiB0b0xlbihkYXRlLmdldEZ1bGxZZWFyKCksIDQpLFxuICAgIHk6IHRvTGVuKGRhdGUuZ2V0RnVsbFllYXIoKSwgMiksXG4gICAgTTogdG9MZW4oZGF0ZS5nZXRNb250aCgpICsgMSwgMiksXG4gICAgZDogdG9MZW4oZGF0ZS5nZXREYXRlKCksIDIpLFxuICAgIEQ6IERBWVtkYXRlLmdldERheSgpXSxcbiAgICBIOiB0b0xlbihkYXRlLmdldEhvdXJzKCksIDIpLFxuICAgIG06IHRvTGVuKGRhdGUuZ2V0TWludXRlcygpLCAyKSxcbiAgICBzOiB0b0xlbihkYXRlLmdldFNlY29uZHMoKSwgMilcbiAgfSlcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy5qcyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTQtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIHdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB3YXJuaW5nID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGFyZ3MpIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBhcmdzID0gbmV3IEFycmF5KGxlbiA+IDIgPyBsZW4gLSAyIDogMCk7XG4gICAgZm9yICh2YXIga2V5ID0gMjsga2V5IDwgbGVuOyBrZXkrKykge1xuICAgICAgYXJnc1trZXkgLSAyXSA9IGFyZ3VtZW50c1trZXldO1xuICAgIH1cbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgK1xuICAgICAgICAnbWVzc2FnZSBhcmd1bWVudCdcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdC5sZW5ndGggPCAxMCB8fCAoL15bc1xcV10qJC8pLnRlc3QoZm9ybWF0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnVGhlIHdhcm5pbmcgZm9ybWF0IHNob3VsZCBiZSBhYmxlIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgJyArXG4gICAgICAgICd3YXJuaW5nLiBQbGVhc2UsIHVzZSBhIG1vcmUgZGVzY3JpcHRpdmUgZm9ybWF0IHRoYW46ICcgKyBmb3JtYXRcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICtcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgICB9KTtcbiAgICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgfSBjYXRjaCh4KSB7fVxuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3dhcm5pbmcvYnJvd3Nlci5qcyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIGFkZExlYWRpbmdTbGFzaCA9IGV4cG9ydHMuYWRkTGVhZGluZ1NsYXNoID0gZnVuY3Rpb24gYWRkTGVhZGluZ1NsYXNoKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLycgPyBwYXRoIDogJy8nICsgcGF0aDtcbn07XG5cbnZhciBzdHJpcExlYWRpbmdTbGFzaCA9IGV4cG9ydHMuc3RyaXBMZWFkaW5nU2xhc2ggPSBmdW5jdGlvbiBzdHJpcExlYWRpbmdTbGFzaChwYXRoKSB7XG4gIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nID8gcGF0aC5zdWJzdHIoMSkgOiBwYXRoO1xufTtcblxudmFyIGhhc0Jhc2VuYW1lID0gZXhwb3J0cy5oYXNCYXNlbmFtZSA9IGZ1bmN0aW9uIGhhc0Jhc2VuYW1lKHBhdGgsIHByZWZpeCkge1xuICByZXR1cm4gbmV3IFJlZ0V4cCgnXicgKyBwcmVmaXggKyAnKFxcXFwvfFxcXFw/fCN8JCknLCAnaScpLnRlc3QocGF0aCk7XG59O1xuXG52YXIgc3RyaXBCYXNlbmFtZSA9IGV4cG9ydHMuc3RyaXBCYXNlbmFtZSA9IGZ1bmN0aW9uIHN0cmlwQmFzZW5hbWUocGF0aCwgcHJlZml4KSB7XG4gIHJldHVybiBoYXNCYXNlbmFtZShwYXRoLCBwcmVmaXgpID8gcGF0aC5zdWJzdHIocHJlZml4Lmxlbmd0aCkgOiBwYXRoO1xufTtcblxudmFyIHN0cmlwVHJhaWxpbmdTbGFzaCA9IGV4cG9ydHMuc3RyaXBUcmFpbGluZ1NsYXNoID0gZnVuY3Rpb24gc3RyaXBUcmFpbGluZ1NsYXNoKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguY2hhckF0KHBhdGgubGVuZ3RoIC0gMSkgPT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aDtcbn07XG5cbnZhciBwYXJzZVBhdGggPSBleHBvcnRzLnBhcnNlUGF0aCA9IGZ1bmN0aW9uIHBhcnNlUGF0aChwYXRoKSB7XG4gIHZhciBwYXRobmFtZSA9IHBhdGggfHwgJy8nO1xuICB2YXIgc2VhcmNoID0gJyc7XG4gIHZhciBoYXNoID0gJyc7XG5cbiAgdmFyIGhhc2hJbmRleCA9IHBhdGhuYW1lLmluZGV4T2YoJyMnKTtcbiAgaWYgKGhhc2hJbmRleCAhPT0gLTEpIHtcbiAgICBoYXNoID0gcGF0aG5hbWUuc3Vic3RyKGhhc2hJbmRleCk7XG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZS5zdWJzdHIoMCwgaGFzaEluZGV4KTtcbiAgfVxuXG4gIHZhciBzZWFyY2hJbmRleCA9IHBhdGhuYW1lLmluZGV4T2YoJz8nKTtcbiAgaWYgKHNlYXJjaEluZGV4ICE9PSAtMSkge1xuICAgIHNlYXJjaCA9IHBhdGhuYW1lLnN1YnN0cihzZWFyY2hJbmRleCk7XG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZS5zdWJzdHIoMCwgc2VhcmNoSW5kZXgpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZTogcGF0aG5hbWUsXG4gICAgc2VhcmNoOiBzZWFyY2ggPT09ICc/JyA/ICcnIDogc2VhcmNoLFxuICAgIGhhc2g6IGhhc2ggPT09ICcjJyA/ICcnIDogaGFzaFxuICB9O1xufTtcblxudmFyIGNyZWF0ZVBhdGggPSBleHBvcnRzLmNyZWF0ZVBhdGggPSBmdW5jdGlvbiBjcmVhdGVQYXRoKGxvY2F0aW9uKSB7XG4gIHZhciBwYXRobmFtZSA9IGxvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgc2VhcmNoID0gbG9jYXRpb24uc2VhcmNoLFxuICAgICAgaGFzaCA9IGxvY2F0aW9uLmhhc2g7XG5cblxuICB2YXIgcGF0aCA9IHBhdGhuYW1lIHx8ICcvJztcblxuICBpZiAoc2VhcmNoICYmIHNlYXJjaCAhPT0gJz8nKSBwYXRoICs9IHNlYXJjaC5jaGFyQXQoMCkgPT09ICc/JyA/IHNlYXJjaCA6ICc/JyArIHNlYXJjaDtcblxuICBpZiAoaGFzaCAmJiBoYXNoICE9PSAnIycpIHBhdGggKz0gaGFzaC5jaGFyQXQoMCkgPT09ICcjJyA/IGhhc2ggOiAnIycgKyBoYXNoO1xuXG4gIHJldHVybiBwYXRoO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9QYXRoVXRpbHMuanMiLCJpbXBvcnQgJy4vY29tcG9uZW50cy9lbWl0dGVyJ1xuXG5pbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnXG5cbmltcG9ydCAncGFydGlhbHMvcG9zdC10YWInXG5pbXBvcnQgJ3BhcnRpYWxzL3NpZGUtYmFyLWhlYWRlcidcbmltcG9ydCAncGFydGlhbHMvc2lkZS1iYXItYm9keSdcbmltcG9ydCAncGFydGlhbHMvZm9vdGVyJ1xuaW1wb3J0ICdwYXJ0aWFscy9wb3N0J1xuaW1wb3J0ICdwYXJ0aWFscy9wb3N0LW5hdidcbmltcG9ydCAncGFydGlhbHMvaG9tZSdcbmltcG9ydCAncGFydGlhbHMvYXV0aG9yJ1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb2Rlci5qcyIsImltcG9ydCBtaXR0IGZyb20gJ21pdHQnXG53aW5kb3cuZW1pdHRlciA9IG1pdHQoKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2VtaXR0ZXIvaW5kZXguanMiLCIvLyAgICAgIFxuLy8gQW4gZXZlbnQgaGFuZGxlciBjYW4gdGFrZSBhbiBvcHRpb25hbCBldmVudCBhcmd1bWVudFxuLy8gYW5kIHNob3VsZCBub3QgcmV0dXJuIGEgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuLy8gQW4gYXJyYXkgb2YgYWxsIGN1cnJlbnRseSByZWdpc3RlcmVkIGV2ZW50IGhhbmRsZXJzIGZvciBhIHR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4vLyBBIG1hcCBvZiBldmVudCB0eXBlcyBhbmQgdGhlaXIgY29ycmVzcG9uZGluZyBldmVudCBoYW5kbGVycy5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgXG5cbi8qKiBNaXR0OiBUaW55ICh+MjAwYikgZnVuY3Rpb25hbCBldmVudCBlbWl0dGVyIC8gcHVic3ViLlxuICogIEBuYW1lIG1pdHRcbiAqICBAcmV0dXJucyB7TWl0dH1cbiAqL1xuZnVuY3Rpb24gbWl0dChhbGwgICAgICAgICAgICAgICAgICkge1xuXHRhbGwgPSBhbGwgfHwgT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuXHRyZXR1cm4ge1xuXHRcdC8qKlxuXHRcdCAqIFJlZ2lzdGVyIGFuIGV2ZW50IGhhbmRsZXIgZm9yIHRoZSBnaXZlbiB0eXBlLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtICB7U3RyaW5nfSB0eXBlXHRUeXBlIG9mIGV2ZW50IHRvIGxpc3RlbiBmb3IsIG9yIGBcIipcImAgZm9yIGFsbCBldmVudHNcblx0XHQgKiBAcGFyYW0gIHtGdW5jdGlvbn0gaGFuZGxlciBGdW5jdGlvbiB0byBjYWxsIGluIHJlc3BvbnNlIHRvIGdpdmVuIGV2ZW50XG5cdFx0ICogQG1lbWJlck9mIG1pdHRcblx0XHQgKi9cblx0XHRvbjogZnVuY3Rpb24gb24odHlwZSAgICAgICAgLCBoYW5kbGVyICAgICAgICAgICAgICApIHtcblx0XHRcdChhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKTtcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogUmVtb3ZlIGFuIGV2ZW50IGhhbmRsZXIgZm9yIHRoZSBnaXZlbiB0eXBlLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtICB7U3RyaW5nfSB0eXBlXHRUeXBlIG9mIGV2ZW50IHRvIHVucmVnaXN0ZXIgYGhhbmRsZXJgIGZyb20sIG9yIGBcIipcImBcblx0XHQgKiBAcGFyYW0gIHtGdW5jdGlvbn0gaGFuZGxlciBIYW5kbGVyIGZ1bmN0aW9uIHRvIHJlbW92ZVxuXHRcdCAqIEBtZW1iZXJPZiBtaXR0XG5cdFx0ICovXG5cdFx0b2ZmOiBmdW5jdGlvbiBvZmYodHlwZSAgICAgICAgLCBoYW5kbGVyICAgICAgICAgICAgICApIHtcblx0XHRcdGlmIChhbGxbdHlwZV0pIHtcblx0XHRcdFx0YWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIEludm9rZSBhbGwgaGFuZGxlcnMgZm9yIHRoZSBnaXZlbiB0eXBlLlxuXHRcdCAqIElmIHByZXNlbnQsIGBcIipcImAgaGFuZGxlcnMgYXJlIGludm9rZWQgYWZ0ZXIgdHlwZS1tYXRjaGVkIGhhbmRsZXJzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgIFRoZSBldmVudCB0eXBlIHRvIGludm9rZVxuXHRcdCAqIEBwYXJhbSB7QW55fSBbZXZ0XSAgQW55IHZhbHVlIChvYmplY3QgaXMgcmVjb21tZW5kZWQgYW5kIHBvd2VyZnVsKSwgcGFzc2VkIHRvIGVhY2ggaGFuZGxlclxuXHRcdCAqIEBtZW1iZXJvZiBtaXR0XG5cdFx0ICovXG5cdFx0ZW1pdDogZnVuY3Rpb24gZW1pdCh0eXBlICAgICAgICAsIGV2dCAgICAgKSB7XG5cdFx0XHQoYWxsW3R5cGVdIHx8IFtdKS5tYXAoZnVuY3Rpb24gKGhhbmRsZXIpIHsgaGFuZGxlcihldnQpOyB9KTtcblx0XHRcdChhbGxbJyonXSB8fCBbXSkubWFwKGZ1bmN0aW9uIChoYW5kbGVyKSB7IGhhbmRsZXIodHlwZSwgZXZ0KTsgfSk7XG5cdFx0fVxuXHR9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBtaXR0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWl0dC5lcy5qcy5tYXBcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9taXR0L2Rpc3QvbWl0dC5lcy5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzL2luZGV4LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCBjb25maWcgZnJvbSAnY29uZmlnJ1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnXG5pbXBvcnQgeyB0YWJTdG9yZSB9IGZyb20gJyMvc3RvcmVzJ1xuaW1wb3J0IGhpc3RvcnkgZnJvbSAnIy9oaXN0b3J5J1xuaW1wb3J0IHsgaFNjcm9sbCwgaXNQb3N0UGFnZSB9IGZyb20gJyMvdXRpbHMnXG5cbiQoZnVuY3Rpb24oKSB7XG4gIGlmICghaXNQb3N0UGFnZSgpKSByZXR1cm5cblxuICBsZXQgJHBvc3RUYWJzID0gJCgnI0otcG9zdC10YWInKVxuICBjb25zdCAkc2Nyb2xsV3JhcCA9ICQoJy5KLXBvc3QtdGFiLXNjcm9sbGVyLXdyYXAnKVxuICBjb25zdCBuZFNjcm9sbFdyYXAgPSAkc2Nyb2xsV3JhcC5nZXQoMClcblxuICBlbWl0dGVyLm9uKCdhZGQtcG9zdC10YWInLCBwb3N0ID0+IHtcbiAgICBjb25zdCB0YWJzID0gdGFiU3RvcmUuZ2V0VGFicygpXG4gICAgaWYgKCF0YWJzLmZpbHRlcih0YWIgPT4gdGFiLmlkID09PSBwb3N0LmlkKS5sZW5ndGgpIHtcbiAgICAgIHRhYnMucHVzaCh7IC4uLnBvc3QgfSlcblxuICAgICAgdGFiU3RvcmUuc2V0VGFicyh0YWJzKVxuICAgIH1cblxuICAgIGVtaXR0ZXIuZW1pdCgndGFiLXJlZnJlc2gnLCB7IC4uLnBvc3QgfSlcbiAgfSlcblxuICBlbWl0dGVyLm9uKCd0YWItcmVmcmVzaCcsIChhY3RpdmUgPSB7fSkgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZUlkID0gYWN0aXZlLmlkXG4gICAgY29uc3QgdGFicyA9IHRhYlN0b3JlLmdldFRhYnMoKVxuICAgIGNvbnN0IGN1cnJlbnRUYWIgPSB0YWJTdG9yZS5jdXJyZW50VGFiXG5cbiAgICBjb25zdCAkYWN0aXZlID0gJCgnI0otcG9zdC10YWInKVxuICAgICAgLmh0bWwoXG4gICAgICAgIHRhYnNcbiAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgdGFiID0+XG4gICAgICAgICAgICAgIGA8ZGl2IHRpdGxlPVwiJHt0YWIudGl0bGV9XCIgY2xhc3M9XCJKLXRhYi1pdGVtIGxpZ2h0IGhvdmVyLW9wYWNpdHkxIGZsZXgtaXRlbTAgc2luZ2xlLWxpbmUgaXRlbSAke2FjdGl2ZUlkID09PSB0YWIuaWQgPyAnYWN0aXZlJyA6ICcnfVwiIGRhdGEtaWQ9XCIke1xuICAgICAgICAgICAgICAgIHRhYi5pZFxuICAgICAgICAgICAgICB9XCI+JHt0YWIudGl0bGV9PGkgY2xhc3M9XCJjbG9zZSBKLXBvc3QtdGFiLWNsb3NlIGxpZ2h0ZXIgaG92ZXItb3BhY2l0eTFcIiBkYXRhLXNsdWc9XCIke3RhYi5zbHVnfVwiPjwvaT48L2Rpdj5gXG4gICAgICAgICAgKVxuICAgICAgICAgIC5qb2luKCcnKVxuICAgICAgKVxuICAgICAgLmZpbmQoJy5hY3RpdmUnKVxuXG4gICAgLy8gbm90IHJlZmV0Y2ggY3VycmVudCBwb3N0XG4gICAgaWYgKCFjdXJyZW50VGFiIHx8IGN1cnJlbnRUYWIuaWQgIT09IGFjdGl2ZUlkKSB7XG4gICAgICBoaXN0b3J5LnB1c2goYWN0aXZlLnVybCwgeyAuLi5hY3RpdmUgfSlcbiAgICAgIHRhYlN0b3JlLnNldEN1cnJlbnRUYWIoeyAuLi5hY3RpdmUgfSlcbiAgICB9XG5cbiAgICBzY3JvbGwydmlldygkYWN0aXZlKVxuICB9KVxuXG4gICRwb3N0VGFic1xuICAgIC5vbignY2xpY2snLCAnLkotcG9zdC10YWItY2xvc2UnLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICB0YWJTdG9yZS5kZWxldGVUYWJJdGVtKFxuICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgLnBhcmVudCgnLkotdGFiLWl0ZW0nKVxuICAgICAgICAgIC5kYXRhKCdpZCcpXG4gICAgICApXG4gICAgfSlcbiAgICAub24oJ2NsaWNrJywgJy5KLXRhYi1pdGVtJywgZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCAkdGhpcyA9ICQodGhpcylcbiAgICAgIGlmICgkdGhpcy5pcygnLmFjdGl2ZScpKSByZXR1cm5cblxuICAgICAgY29uc3QgaWQgPSAkdGhpcy5kYXRhKCdpZCcpXG4gICAgICBjb25zdCBjdXJyZW50VGFiID0gdGFiU3RvcmUuZ2V0VGFicygpLmZpbHRlcih0YWIgPT4gdGFiLmlkID09PSBpZClbMF0gfHwge31cblxuICAgICAgJHRoaXNcbiAgICAgICAgLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgICAgICAuc2libGluZ3MoKVxuICAgICAgICAucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICB0YWJTdG9yZS5zZXRDdXJyZW50VGFiKGN1cnJlbnRUYWIpXG4gICAgICBoaXN0b3J5LnB1c2goY3VycmVudFRhYi51cmwsIHsgLi4uY3VycmVudFRhYiB9KVxuXG4gICAgICBzY3JvbGwydmlldygkdGhpcylcbiAgICB9KVxuXG4gIC8qKlxuICAgKiBzY3JvbGwgc2VsZWN0ZWQgdGFiIGl0ZW0gaW50byB2aWV3IGlmIGl0IGlzIG91dCBvZiB2aWV3XG4gICAqL1xuICBmdW5jdGlvbiBzY3JvbGwydmlldygkYWN0aXZlKSB7XG4gICAgLy8gd3JhcCBlbGVtZW50XG4gICAgY29uc3Qgd3JhcFdpZHRoID0gJHNjcm9sbFdyYXAud2lkdGgoKVxuICAgIGNvbnN0IHdyYXBTY3JvbGxMZWZ0ID0gJHNjcm9sbFdyYXAuc2Nyb2xsTGVmdCgpXG4gICAgY29uc3Qgd3JhcFJpZ2h0ID0gd3JhcFdpZHRoICsgd3JhcFNjcm9sbExlZnRcbiAgICBjb25zdCB0aHJlc2hvbGQgPSAxMFxuXG4gICAgLy8gYWN0aXZlIGVsZW1lbnRcbiAgICBjb25zdCBuZEFjdGl2ZSA9ICRhY3RpdmUuZ2V0KDApXG4gICAgY29uc3QgYWN0aXZlV2lkdGggPSAkYWN0aXZlLm91dGVyV2lkdGgoKVxuICAgIGNvbnN0IGFjdGl2ZUxlZnQgPSBuZEFjdGl2ZS5vZmZzZXRMZWZ0XG4gICAgY29uc3QgYWN0aXZlUmlnaHQgPSBhY3RpdmVMZWZ0ICsgYWN0aXZlV2lkdGhcbiAgICBpZiAoYWN0aXZlUmlnaHQgPiB3cmFwV2lkdGggKyB3cmFwU2Nyb2xsTGVmdCkge1xuICAgICAgbmRTY3JvbGxXcmFwLnNjcm9sbExlZnQgPSBhY3RpdmVSaWdodCAtIHdyYXBXaWR0aCAtIHRocmVzaG9sZFxuICAgIH1cbiAgICBpZiAoYWN0aXZlTGVmdCA8PSB3cmFwU2Nyb2xsTGVmdCkge1xuICAgICAgbmRTY3JvbGxXcmFwLnNjcm9sbExlZnQgPSBhY3RpdmVMZWZ0IC0gdGhyZXNob2xkXG4gICAgfVxuICB9XG5cbiAgaFNjcm9sbCgkc2Nyb2xsV3JhcC5nZXQoMCkpXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFydGlhbHMvcG9zdC10YWIvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcInRoZW1lc1wiOltcImFieXNzLWNvbG9yXCIsXCJkYXJrLWRlZmF1bHRcIixcInJlZFwiXX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3RoZW1lcy9yZXN1bHQuanNvblxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhcnRpYWxzL3Bvc3QtdGFiL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCBjb25maWcgZnJvbSAnY29uZmlnJ1xuY29uc3QgbHMgPSBsb2NhbFN0b3JhZ2VcbmNvbnN0IGxzVGhlbWVLZXkgPSBjb25maWcubHNUaGVtZUtleVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIHRoZW1lID0gbHMuZ2V0SXRlbShsc1RoZW1lS2V5KSB8fCBjb25maWcuZGVmYXVsdFRoZW1lXG4gIFxuICBzZXRUaGVtZSAodGhlbWUpIHtcbiAgICB0aGlzLnRoZW1lID0gdGhlbWVcbiAgICBscy5zZXRJdGVtKGxzVGhlbWVLZXksIHRoZW1lKVxuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3Jlcy9UaGVtZVN0b3JlLmpzIiwiaW1wb3J0IGNvbmZpZyBmcm9tICdjb25maWcnXG5cbmNvbnN0IGxzID0gbG9jYWxTdG9yYWdlXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY3VycmVudFRhYiA9IG51bGxcblxuICBnZXRUYWJzKCkge1xuICAgIGxldCB0YWJzID0gbHMuZ2V0SXRlbShjb25maWcubHNQb3N0VGFiS2V5KSB8fCAnJ1xuXG4gICAgcmV0dXJuIHRhYnMgPyB0YWJzLnNwbGl0KCcsJykubWFwKHRhYiA9PiB7XG4gICAgICBjb25zdCBbaWQsIHRpdGxlLCB1cmwsIHNsdWddID0gdGFiLnNwbGl0KCc6JylcblxuICAgICAgcmV0dXJuIHsgaWQsIHRpdGxlLCB1cmwsIHNsdWcgfVxuICAgIH0pIDogW11cbiAgfVxuXG4gIHNldFRhYnModGFicykge1xuICAgIGxzLnNldEl0ZW0oXG4gICAgICBjb25maWcubHNQb3N0VGFiS2V5LFxuICAgICAgdGFicy5sZW5ndGggPyB0YWJzLm1hcChcbiAgICAgICAgdGFiID0+IGAke3RhYi5pZH06JHt0YWIudGl0bGV9OiR7dGFiLnVybH06JHt0YWIuc2x1Z31gXG4gICAgICApLmpvaW4oJywnKSA6ICcnXG4gICAgKVxuICB9XG5cbiAgc2V0Q3VycmVudFRhYih0YWIpIHtcbiAgICB0aGlzLmN1cnJlbnRUYWIgPSB0YWJcbiAgfVxuXG4gIGRlbGV0ZVRhYkl0ZW0oaWQpIHtcbiAgICBsZXQgdGFicyA9IHRoaXMuZ2V0VGFicygpXG4gICAgbGV0IG5leHRUYWIgPSBudWxsXG4gICAgY29uc3QgaXNDdXJyZW50VGFiID0gaWQgPT09IHRoaXMuY3VycmVudFRhYi5pZFxuXG4gICAgY29uc3QgZGVsZXRlZElkeCA9IHRhYnMuZmluZEluZGV4KHRhYiA9PiB0YWIuaWQgPT09IGlkKVxuICAgIHRhYnMgPSB0YWJzLmZpbHRlcigodGFiLCBpZHgpID0+IHRhYi5pZCAhPT0gaWQpXG5cbiAgICB0aGlzLnNldFRhYnModGFicylcblxuICAgIGlmICh0YWJzLmxlbmd0aCkge1xuICAgICAgaWYgKGlzQ3VycmVudFRhYikge1xuICAgICAgICBuZXh0VGFiID0gZGVsZXRlZElkeCA9PT0gMCA/IHRhYnNbMF0gOiB0YWJzW2RlbGV0ZWRJZHggLSAxXVxuICAgICAgfVxuXG4gICAgICBlbWl0dGVyLmVtaXQoJ3RhYi1yZWZyZXNoJywgbmV4dFRhYiB8fCB0aGlzLmN1cnJlbnRUYWIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2F0aW9uLmhyZWYgPSAnLydcbiAgICB9XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmVzL1RhYlN0b3JlLmpzIiwiaW1wb3J0IGNvbmZpZyBmcm9tICdjb25maWcnXG5jb25zdCBscyA9IGxvY2FsU3RvcmFnZVxuY29uc3QgbHNQb3N0c0tleSA9IGNvbmZpZy5sc1Bvc3RzS2V5XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgZmV0Y2hQb3N0KGlkKSB7XG4gICAgY29uc3QgY2FjaGUgPSB0aGlzLmZyb21DYWNoZShpZClcblxuICAgIHJldHVybiBjYWNoZVxuICAgICAgPyAkLkRlZmVycmVkKCkucmVzb2x2ZShjYWNoZSlcbiAgICAgIDogJC5nZXQoZ2hvc3QudXJsLmFwaShgcG9zdHMvJHtpZH1gKSwge1xuICAgICAgICAgIGluY2x1ZGU6ICdhdXRob3InXG4gICAgICAgIH0pXG4gICAgICAgICAgLmZhaWwoZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuZG9uZShkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkYXRhLnBvc3RzWzBdIHx8IHt9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwb3N0KVxuICAgICAgICAgICAgdGhpcy5jYWNoZVBvc3QoaWQsIHBvc3QpXG4gICAgICAgICAgICByZXR1cm4gcG9zdFxuICAgICAgICAgIH0pXG4gIH1cblxuICBmZXRjaFByZXZOZXh0UG9zdCh7IHNsdWcsIHB1Ymxpc2hlZF9hdCwgdHlwZSB9KSB7XG4gICAgaWYgKFsncHJldicsICduZXh0JywgJ2JvdGgnXS5pbmRleE9mKHR5cGUpID09PSAtMSkgcmV0dXJuXG4gICAgY29uc3QgbWFwID0ge1xuICAgICAgcHJldjoge1xuICAgICAgICBzb3J0OiAnZGVzYycsXG4gICAgICAgIHB1Ymxpc2hlZF9hdDogJzw9J1xuICAgICAgfSxcbiAgICAgIG5leHQ6IHtcbiAgICAgICAgc29ydDogJ2FzYycsXG4gICAgICAgIHB1Ymxpc2hlZF9hdDogJz49J1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHlwZSAhPT0gJ2JvdGgnID8gZmV0Y2godHlwZSkgOiAkLndoZW4oZmV0Y2goJ3ByZXYnKSwgZmV0Y2goJ25leHQnKSlcblxuICAgIGZ1bmN0aW9uIGZldGNoKHR5cGUpIHtcbiAgICAgIHJldHVybiAkLmdldChnaG9zdC51cmwuYXBpKCdwb3N0cycpLCB7XG4gICAgICAgIGZpbHRlcjogYHNsdWc6LVske3NsdWd9XStwdWJsaXNoZWRfYXQ6JHttYXBbdHlwZV0ucHVibGlzaGVkX2F0fSR7K25ldyBEYXRlKHB1Ymxpc2hlZF9hdCl9YCxcbiAgICAgICAgb3JkZXI6IGBwdWJsaXNoZWRfYXQgJHttYXBbdHlwZV0uc29ydH1gLFxuICAgICAgICBsaW1pdDogMSxcbiAgICAgICAgZmllbGRzOiAndGl0bGUsaWQsc2x1Zyx1cmwnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFkIHBvc3QgZnJvbSBjYWNoZSBmaXJzdFxuICAgKiBAcGFyYW0ge251bWJlcn0gaWQgLT4gcG9zdCBpZFxuICAgKiAgLSBvbmx5IGNhY2hlIDVtaW5cbiAgICovXG4gIGZyb21DYWNoZShpZCkge1xuICAgIGxldCBsc1Bvc3RzID0gbHMuZ2V0SXRlbShsc1Bvc3RzS2V5KVxuICAgIGxzUG9zdHMgPSBsc1Bvc3RzID8gSlNPTi5wYXJzZShsc1Bvc3RzKSA6IHt9XG5cbiAgICBjb25zdCBwb3N0ID0gbHNQb3N0c1tpZF1cbiAgICBjb25zdCB1c2VhYmxlID0gcG9zdCAmJiArbmV3IERhdGUoKSAtIHBvc3QudGltZXN0YW1wIDw9IDUgKiA2MCAqIDEwMDBcblxuICAgIGlmICh1c2VhYmxlKSB7XG4gICAgICBjb25zb2xlLmluZm8oJ1tQb3N0IHJlYWRlZCBmcm9tIGNhY2hlXTonLCBwb3N0LnRpdGxlKVxuICAgICAgY29uc3QgYXV0aG9yID0gSlNPTi5wYXJzZShwb3N0LmF1dGhvcilcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBvc3RzOiBbeyAuLi5wb3N0LCBhdXRob3IsIGZyb21DYWNoZTogMSB9XVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBkZWxldGVQb3N0RnJvbUNhY2hlKGlkKSB7XG4gICAgbGV0IGxzUG9zdHMgPSBscy5nZXRJdGVtKGxzUG9zdHNLZXkpXG4gICAgbHNQb3N0cyA9IGxzUG9zdHMgPyBKU09OLnBhcnNlKGxzUG9zdHMpIDoge31cbiAgICBjb25zb2xlLmxvZygnW2RlbGV0ZWQgcG9zdCBzdWNjZXNzXTonLCBsc1Bvc3RzW2lkXS50aXRsZSlcblxuICAgIGRlbGV0ZSBsc1Bvc3RzW2lkXVxuXG4gICAgbHMuc2V0SXRlbShsc1Bvc3RzS2V5LCBKU09OLnN0cmluZ2lmeShsc1Bvc3RzKSlcbiAgfVxuXG4gIGNhY2hlUG9zdChpZCwgcG9zdCkge1xuICAgIGlmIChwb3N0LmZyb21DYWNoZSkgcmV0dXJuXG5cbiAgICBsZXQgbHNQb3N0cyA9IGxzLmdldEl0ZW0obHNQb3N0c0tleSlcbiAgICBsc1Bvc3RzID0gbHNQb3N0cyA/IEpTT04ucGFyc2UobHNQb3N0cykgOiB7fVxuXG4gICAgbHNQb3N0c1tpZF0gPSB7XG4gICAgICAuLi5wb3N0LFxuICAgICAgYXV0aG9yOiBKU09OLnN0cmluZ2lmeShwb3N0LmF1dGhvciksXG4gICAgICB0aW1lc3RhbXA6ICtuZXcgRGF0ZSgpXG4gICAgfVxuXG4gICAgLy8gY2FjaGUgdXAgdG8gNSBwb3N0c1xuICAgIC8vIGRlbGV0ZSB0aGUgb2xkZXN0IG9uZSBpZiBtb3JlIHRoYW4gNVxuICAgIGxldCBpZHMgPSBPYmplY3Qua2V5cyhsc1Bvc3RzKVxuICAgIGlmIChpZHMubGVuZ3RoID4gNSkge1xuICAgICAgY29uc3Qgc2hvdWxkRGVsZXRlSWQgPSBpZHNcbiAgICAgICAgLm1hcChpZCA9PiAoe1xuICAgICAgICAgIHRpbWVzdGFtcDogbHNQb3N0c1tpZF0udGltZXN0YW1wLFxuICAgICAgICAgIGlkXG4gICAgICAgIH0pKVxuICAgICAgICAuc29ydCgoYSwgYikgPT4gYS50aW1lc3RhbXAgLSBiLnRpbWVzdGFtcClcbiAgICAgICAgLm1hcChpdGVtID0+IGl0ZW0uaWQpXG4gICAgICAgIC5zaGlmdCgpXG5cbiAgICAgIGRlbGV0ZSBsc1Bvc3RzW3Nob3VsZERlbGV0ZUlkXVxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKGlkcy5sZW5ndGgpXG4gICAgbHMuc2V0SXRlbShsc1Bvc3RzS2V5LCBKU09OLnN0cmluZ2lmeShsc1Bvc3RzKSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3Jlcy9Qb3N0U3RvcmUuanMiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfTG9jYXRpb25VdGlscyA9IHJlcXVpcmUoJy4vTG9jYXRpb25VdGlscycpO1xuXG52YXIgX1BhdGhVdGlscyA9IHJlcXVpcmUoJy4vUGF0aFV0aWxzJyk7XG5cbnZhciBfY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIgPSByZXF1aXJlKCcuL2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyJyk7XG5cbnZhciBfY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIpO1xuXG52YXIgX0RPTVV0aWxzID0gcmVxdWlyZSgnLi9ET01VdGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgUG9wU3RhdGVFdmVudCA9ICdwb3BzdGF0ZSc7XG52YXIgSGFzaENoYW5nZUV2ZW50ID0gJ2hhc2hjaGFuZ2UnO1xuXG52YXIgZ2V0SGlzdG9yeVN0YXRlID0gZnVuY3Rpb24gZ2V0SGlzdG9yeVN0YXRlKCkge1xuICB0cnkge1xuICAgIHJldHVybiB3aW5kb3cuaGlzdG9yeS5zdGF0ZSB8fCB7fTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIElFIDExIHNvbWV0aW1lcyB0aHJvd3Mgd2hlbiBhY2Nlc3Npbmcgd2luZG93Lmhpc3Rvcnkuc3RhdGVcbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL1JlYWN0VHJhaW5pbmcvaGlzdG9yeS9wdWxsLzI4OVxuICAgIHJldHVybiB7fTtcbiAgfVxufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGlzdG9yeSBvYmplY3QgdGhhdCB1c2VzIHRoZSBIVE1MNSBoaXN0b3J5IEFQSSBpbmNsdWRpbmdcbiAqIHB1c2hTdGF0ZSwgcmVwbGFjZVN0YXRlLCBhbmQgdGhlIHBvcHN0YXRlIGV2ZW50LlxuICovXG52YXIgY3JlYXRlQnJvd3Nlckhpc3RvcnkgPSBmdW5jdGlvbiBjcmVhdGVCcm93c2VySGlzdG9yeSgpIHtcbiAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkoX0RPTVV0aWxzLmNhblVzZURPTSwgJ0Jyb3dzZXIgaGlzdG9yeSBuZWVkcyBhIERPTScpO1xuXG4gIHZhciBnbG9iYWxIaXN0b3J5ID0gd2luZG93Lmhpc3Rvcnk7XG4gIHZhciBjYW5Vc2VIaXN0b3J5ID0gKDAsIF9ET01VdGlscy5zdXBwb3J0c0hpc3RvcnkpKCk7XG4gIHZhciBuZWVkc0hhc2hDaGFuZ2VMaXN0ZW5lciA9ICEoMCwgX0RPTVV0aWxzLnN1cHBvcnRzUG9wU3RhdGVPbkhhc2hDaGFuZ2UpKCk7XG5cbiAgdmFyIF9wcm9wcyRmb3JjZVJlZnJlc2ggPSBwcm9wcy5mb3JjZVJlZnJlc2gsXG4gICAgICBmb3JjZVJlZnJlc2ggPSBfcHJvcHMkZm9yY2VSZWZyZXNoID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IF9wcm9wcyRmb3JjZVJlZnJlc2gsXG4gICAgICBfcHJvcHMkZ2V0VXNlckNvbmZpcm0gPSBwcm9wcy5nZXRVc2VyQ29uZmlybWF0aW9uLFxuICAgICAgZ2V0VXNlckNvbmZpcm1hdGlvbiA9IF9wcm9wcyRnZXRVc2VyQ29uZmlybSA9PT0gdW5kZWZpbmVkID8gX0RPTVV0aWxzLmdldENvbmZpcm1hdGlvbiA6IF9wcm9wcyRnZXRVc2VyQ29uZmlybSxcbiAgICAgIF9wcm9wcyRrZXlMZW5ndGggPSBwcm9wcy5rZXlMZW5ndGgsXG4gICAgICBrZXlMZW5ndGggPSBfcHJvcHMka2V5TGVuZ3RoID09PSB1bmRlZmluZWQgPyA2IDogX3Byb3BzJGtleUxlbmd0aDtcblxuICB2YXIgYmFzZW5hbWUgPSBwcm9wcy5iYXNlbmFtZSA/ICgwLCBfUGF0aFV0aWxzLnN0cmlwVHJhaWxpbmdTbGFzaCkoKDAsIF9QYXRoVXRpbHMuYWRkTGVhZGluZ1NsYXNoKShwcm9wcy5iYXNlbmFtZSkpIDogJyc7XG5cbiAgdmFyIGdldERPTUxvY2F0aW9uID0gZnVuY3Rpb24gZ2V0RE9NTG9jYXRpb24oaGlzdG9yeVN0YXRlKSB7XG4gICAgdmFyIF9yZWYgPSBoaXN0b3J5U3RhdGUgfHwge30sXG4gICAgICAgIGtleSA9IF9yZWYua2V5LFxuICAgICAgICBzdGF0ZSA9IF9yZWYuc3RhdGU7XG5cbiAgICB2YXIgX3dpbmRvdyRsb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbixcbiAgICAgICAgcGF0aG5hbWUgPSBfd2luZG93JGxvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgICBzZWFyY2ggPSBfd2luZG93JGxvY2F0aW9uLnNlYXJjaCxcbiAgICAgICAgaGFzaCA9IF93aW5kb3ckbG9jYXRpb24uaGFzaDtcblxuXG4gICAgdmFyIHBhdGggPSBwYXRobmFtZSArIHNlYXJjaCArIGhhc2g7XG5cbiAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKCFiYXNlbmFtZSB8fCAoMCwgX1BhdGhVdGlscy5oYXNCYXNlbmFtZSkocGF0aCwgYmFzZW5hbWUpLCAnWW91IGFyZSBhdHRlbXB0aW5nIHRvIHVzZSBhIGJhc2VuYW1lIG9uIGEgcGFnZSB3aG9zZSBVUkwgcGF0aCBkb2VzIG5vdCBiZWdpbiAnICsgJ3dpdGggdGhlIGJhc2VuYW1lLiBFeHBlY3RlZCBwYXRoIFwiJyArIHBhdGggKyAnXCIgdG8gYmVnaW4gd2l0aCBcIicgKyBiYXNlbmFtZSArICdcIi4nKTtcblxuICAgIGlmIChiYXNlbmFtZSkgcGF0aCA9ICgwLCBfUGF0aFV0aWxzLnN0cmlwQmFzZW5hbWUpKHBhdGgsIGJhc2VuYW1lKTtcblxuICAgIHJldHVybiAoMCwgX0xvY2F0aW9uVXRpbHMuY3JlYXRlTG9jYXRpb24pKHBhdGgsIHN0YXRlLCBrZXkpO1xuICB9O1xuXG4gIHZhciBjcmVhdGVLZXkgPSBmdW5jdGlvbiBjcmVhdGVLZXkoKSB7XG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCBrZXlMZW5ndGgpO1xuICB9O1xuXG4gIHZhciB0cmFuc2l0aW9uTWFuYWdlciA9ICgwLCBfY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIyLmRlZmF1bHQpKCk7XG5cbiAgdmFyIHNldFN0YXRlID0gZnVuY3Rpb24gc2V0U3RhdGUobmV4dFN0YXRlKSB7XG4gICAgX2V4dGVuZHMoaGlzdG9yeSwgbmV4dFN0YXRlKTtcblxuICAgIGhpc3RvcnkubGVuZ3RoID0gZ2xvYmFsSGlzdG9yeS5sZW5ndGg7XG5cbiAgICB0cmFuc2l0aW9uTWFuYWdlci5ub3RpZnlMaXN0ZW5lcnMoaGlzdG9yeS5sb2NhdGlvbiwgaGlzdG9yeS5hY3Rpb24pO1xuICB9O1xuXG4gIHZhciBoYW5kbGVQb3BTdGF0ZSA9IGZ1bmN0aW9uIGhhbmRsZVBvcFN0YXRlKGV2ZW50KSB7XG4gICAgLy8gSWdub3JlIGV4dHJhbmVvdXMgcG9wc3RhdGUgZXZlbnRzIGluIFdlYktpdC5cbiAgICBpZiAoKDAsIF9ET01VdGlscy5pc0V4dHJhbmVvdXNQb3BzdGF0ZUV2ZW50KShldmVudCkpIHJldHVybjtcblxuICAgIGhhbmRsZVBvcChnZXRET01Mb2NhdGlvbihldmVudC5zdGF0ZSkpO1xuICB9O1xuXG4gIHZhciBoYW5kbGVIYXNoQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlSGFzaENoYW5nZSgpIHtcbiAgICBoYW5kbGVQb3AoZ2V0RE9NTG9jYXRpb24oZ2V0SGlzdG9yeVN0YXRlKCkpKTtcbiAgfTtcblxuICB2YXIgZm9yY2VOZXh0UG9wID0gZmFsc2U7XG5cbiAgdmFyIGhhbmRsZVBvcCA9IGZ1bmN0aW9uIGhhbmRsZVBvcChsb2NhdGlvbikge1xuICAgIGlmIChmb3JjZU5leHRQb3ApIHtcbiAgICAgIGZvcmNlTmV4dFBvcCA9IGZhbHNlO1xuICAgICAgc2V0U3RhdGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFjdGlvbiA9ICdQT1AnO1xuXG4gICAgICB0cmFuc2l0aW9uTWFuYWdlci5jb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGZ1bmN0aW9uIChvaykge1xuICAgICAgICBpZiAob2spIHtcbiAgICAgICAgICBzZXRTdGF0ZSh7IGFjdGlvbjogYWN0aW9uLCBsb2NhdGlvbjogbG9jYXRpb24gfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV2ZXJ0UG9wKGxvY2F0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciByZXZlcnRQb3AgPSBmdW5jdGlvbiByZXZlcnRQb3AoZnJvbUxvY2F0aW9uKSB7XG4gICAgdmFyIHRvTG9jYXRpb24gPSBoaXN0b3J5LmxvY2F0aW9uO1xuXG4gICAgLy8gVE9ETzogV2UgY291bGQgcHJvYmFibHkgbWFrZSB0aGlzIG1vcmUgcmVsaWFibGUgYnlcbiAgICAvLyBrZWVwaW5nIGEgbGlzdCBvZiBrZXlzIHdlJ3ZlIHNlZW4gaW4gc2Vzc2lvblN0b3JhZ2UuXG4gICAgLy8gSW5zdGVhZCwgd2UganVzdCBkZWZhdWx0IHRvIDAgZm9yIGtleXMgd2UgZG9uJ3Qga25vdy5cblxuICAgIHZhciB0b0luZGV4ID0gYWxsS2V5cy5pbmRleE9mKHRvTG9jYXRpb24ua2V5KTtcblxuICAgIGlmICh0b0luZGV4ID09PSAtMSkgdG9JbmRleCA9IDA7XG5cbiAgICB2YXIgZnJvbUluZGV4ID0gYWxsS2V5cy5pbmRleE9mKGZyb21Mb2NhdGlvbi5rZXkpO1xuXG4gICAgaWYgKGZyb21JbmRleCA9PT0gLTEpIGZyb21JbmRleCA9IDA7XG5cbiAgICB2YXIgZGVsdGEgPSB0b0luZGV4IC0gZnJvbUluZGV4O1xuXG4gICAgaWYgKGRlbHRhKSB7XG4gICAgICBmb3JjZU5leHRQb3AgPSB0cnVlO1xuICAgICAgZ28oZGVsdGEpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaW5pdGlhbExvY2F0aW9uID0gZ2V0RE9NTG9jYXRpb24oZ2V0SGlzdG9yeVN0YXRlKCkpO1xuICB2YXIgYWxsS2V5cyA9IFtpbml0aWFsTG9jYXRpb24ua2V5XTtcblxuICAvLyBQdWJsaWMgaW50ZXJmYWNlXG5cbiAgdmFyIGNyZWF0ZUhyZWYgPSBmdW5jdGlvbiBjcmVhdGVIcmVmKGxvY2F0aW9uKSB7XG4gICAgcmV0dXJuIGJhc2VuYW1lICsgKDAsIF9QYXRoVXRpbHMuY3JlYXRlUGF0aCkobG9jYXRpb24pO1xuICB9O1xuXG4gIHZhciBwdXNoID0gZnVuY3Rpb24gcHVzaChwYXRoLCBzdGF0ZSkge1xuICAgICgwLCBfd2FybmluZzIuZGVmYXVsdCkoISgodHlwZW9mIHBhdGggPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHBhdGgpKSA9PT0gJ29iamVjdCcgJiYgcGF0aC5zdGF0ZSAhPT0gdW5kZWZpbmVkICYmIHN0YXRlICE9PSB1bmRlZmluZWQpLCAnWW91IHNob3VsZCBhdm9pZCBwcm92aWRpbmcgYSAybmQgc3RhdGUgYXJndW1lbnQgdG8gcHVzaCB3aGVuIHRoZSAxc3QgJyArICdhcmd1bWVudCBpcyBhIGxvY2F0aW9uLWxpa2Ugb2JqZWN0IHRoYXQgYWxyZWFkeSBoYXMgc3RhdGU7IGl0IGlzIGlnbm9yZWQnKTtcblxuICAgIHZhciBhY3Rpb24gPSAnUFVTSCc7XG4gICAgdmFyIGxvY2F0aW9uID0gKDAsIF9Mb2NhdGlvblV0aWxzLmNyZWF0ZUxvY2F0aW9uKShwYXRoLCBzdGF0ZSwgY3JlYXRlS2V5KCksIGhpc3RvcnkubG9jYXRpb24pO1xuXG4gICAgdHJhbnNpdGlvbk1hbmFnZXIuY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgYWN0aW9uLCBnZXRVc2VyQ29uZmlybWF0aW9uLCBmdW5jdGlvbiAob2spIHtcbiAgICAgIGlmICghb2spIHJldHVybjtcblxuICAgICAgdmFyIGhyZWYgPSBjcmVhdGVIcmVmKGxvY2F0aW9uKTtcbiAgICAgIHZhciBrZXkgPSBsb2NhdGlvbi5rZXksXG4gICAgICAgICAgc3RhdGUgPSBsb2NhdGlvbi5zdGF0ZTtcblxuXG4gICAgICBpZiAoY2FuVXNlSGlzdG9yeSkge1xuICAgICAgICBnbG9iYWxIaXN0b3J5LnB1c2hTdGF0ZSh7IGtleToga2V5LCBzdGF0ZTogc3RhdGUgfSwgbnVsbCwgaHJlZik7XG5cbiAgICAgICAgaWYgKGZvcmNlUmVmcmVzaCkge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gaHJlZjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgcHJldkluZGV4ID0gYWxsS2V5cy5pbmRleE9mKGhpc3RvcnkubG9jYXRpb24ua2V5KTtcbiAgICAgICAgICB2YXIgbmV4dEtleXMgPSBhbGxLZXlzLnNsaWNlKDAsIHByZXZJbmRleCA9PT0gLTEgPyAwIDogcHJldkluZGV4ICsgMSk7XG5cbiAgICAgICAgICBuZXh0S2V5cy5wdXNoKGxvY2F0aW9uLmtleSk7XG4gICAgICAgICAgYWxsS2V5cyA9IG5leHRLZXlzO1xuXG4gICAgICAgICAgc2V0U3RhdGUoeyBhY3Rpb246IGFjdGlvbiwgbG9jYXRpb246IGxvY2F0aW9uIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKHN0YXRlID09PSB1bmRlZmluZWQsICdCcm93c2VyIGhpc3RvcnkgY2Fubm90IHB1c2ggc3RhdGUgaW4gYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBIVE1MNSBoaXN0b3J5Jyk7XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBocmVmO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHZhciByZXBsYWNlID0gZnVuY3Rpb24gcmVwbGFjZShwYXRoLCBzdGF0ZSkge1xuICAgICgwLCBfd2FybmluZzIuZGVmYXVsdCkoISgodHlwZW9mIHBhdGggPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHBhdGgpKSA9PT0gJ29iamVjdCcgJiYgcGF0aC5zdGF0ZSAhPT0gdW5kZWZpbmVkICYmIHN0YXRlICE9PSB1bmRlZmluZWQpLCAnWW91IHNob3VsZCBhdm9pZCBwcm92aWRpbmcgYSAybmQgc3RhdGUgYXJndW1lbnQgdG8gcmVwbGFjZSB3aGVuIHRoZSAxc3QgJyArICdhcmd1bWVudCBpcyBhIGxvY2F0aW9uLWxpa2Ugb2JqZWN0IHRoYXQgYWxyZWFkeSBoYXMgc3RhdGU7IGl0IGlzIGlnbm9yZWQnKTtcblxuICAgIHZhciBhY3Rpb24gPSAnUkVQTEFDRSc7XG4gICAgdmFyIGxvY2F0aW9uID0gKDAsIF9Mb2NhdGlvblV0aWxzLmNyZWF0ZUxvY2F0aW9uKShwYXRoLCBzdGF0ZSwgY3JlYXRlS2V5KCksIGhpc3RvcnkubG9jYXRpb24pO1xuXG4gICAgdHJhbnNpdGlvbk1hbmFnZXIuY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgYWN0aW9uLCBnZXRVc2VyQ29uZmlybWF0aW9uLCBmdW5jdGlvbiAob2spIHtcbiAgICAgIGlmICghb2spIHJldHVybjtcblxuICAgICAgdmFyIGhyZWYgPSBjcmVhdGVIcmVmKGxvY2F0aW9uKTtcbiAgICAgIHZhciBrZXkgPSBsb2NhdGlvbi5rZXksXG4gICAgICAgICAgc3RhdGUgPSBsb2NhdGlvbi5zdGF0ZTtcblxuXG4gICAgICBpZiAoY2FuVXNlSGlzdG9yeSkge1xuICAgICAgICBnbG9iYWxIaXN0b3J5LnJlcGxhY2VTdGF0ZSh7IGtleToga2V5LCBzdGF0ZTogc3RhdGUgfSwgbnVsbCwgaHJlZik7XG5cbiAgICAgICAgaWYgKGZvcmNlUmVmcmVzaCkge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKGhyZWYpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBwcmV2SW5kZXggPSBhbGxLZXlzLmluZGV4T2YoaGlzdG9yeS5sb2NhdGlvbi5rZXkpO1xuXG4gICAgICAgICAgaWYgKHByZXZJbmRleCAhPT0gLTEpIGFsbEtleXNbcHJldkluZGV4XSA9IGxvY2F0aW9uLmtleTtcblxuICAgICAgICAgIHNldFN0YXRlKHsgYWN0aW9uOiBhY3Rpb24sIGxvY2F0aW9uOiBsb2NhdGlvbiB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KShzdGF0ZSA9PT0gdW5kZWZpbmVkLCAnQnJvd3NlciBoaXN0b3J5IGNhbm5vdCByZXBsYWNlIHN0YXRlIGluIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgSFRNTDUgaGlzdG9yeScpO1xuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKGhyZWYpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHZhciBnbyA9IGZ1bmN0aW9uIGdvKG4pIHtcbiAgICBnbG9iYWxIaXN0b3J5LmdvKG4pO1xuICB9O1xuXG4gIHZhciBnb0JhY2sgPSBmdW5jdGlvbiBnb0JhY2soKSB7XG4gICAgcmV0dXJuIGdvKC0xKTtcbiAgfTtcblxuICB2YXIgZ29Gb3J3YXJkID0gZnVuY3Rpb24gZ29Gb3J3YXJkKCkge1xuICAgIHJldHVybiBnbygxKTtcbiAgfTtcblxuICB2YXIgbGlzdGVuZXJDb3VudCA9IDA7XG5cbiAgdmFyIGNoZWNrRE9NTGlzdGVuZXJzID0gZnVuY3Rpb24gY2hlY2tET01MaXN0ZW5lcnMoZGVsdGEpIHtcbiAgICBsaXN0ZW5lckNvdW50ICs9IGRlbHRhO1xuXG4gICAgaWYgKGxpc3RlbmVyQ291bnQgPT09IDEpIHtcbiAgICAgICgwLCBfRE9NVXRpbHMuYWRkRXZlbnRMaXN0ZW5lcikod2luZG93LCBQb3BTdGF0ZUV2ZW50LCBoYW5kbGVQb3BTdGF0ZSk7XG5cbiAgICAgIGlmIChuZWVkc0hhc2hDaGFuZ2VMaXN0ZW5lcikgKDAsIF9ET01VdGlscy5hZGRFdmVudExpc3RlbmVyKSh3aW5kb3csIEhhc2hDaGFuZ2VFdmVudCwgaGFuZGxlSGFzaENoYW5nZSk7XG4gICAgfSBlbHNlIGlmIChsaXN0ZW5lckNvdW50ID09PSAwKSB7XG4gICAgICAoMCwgX0RPTVV0aWxzLnJlbW92ZUV2ZW50TGlzdGVuZXIpKHdpbmRvdywgUG9wU3RhdGVFdmVudCwgaGFuZGxlUG9wU3RhdGUpO1xuXG4gICAgICBpZiAobmVlZHNIYXNoQ2hhbmdlTGlzdGVuZXIpICgwLCBfRE9NVXRpbHMucmVtb3ZlRXZlbnRMaXN0ZW5lcikod2luZG93LCBIYXNoQ2hhbmdlRXZlbnQsIGhhbmRsZUhhc2hDaGFuZ2UpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaXNCbG9ja2VkID0gZmFsc2U7XG5cbiAgdmFyIGJsb2NrID0gZnVuY3Rpb24gYmxvY2soKSB7XG4gICAgdmFyIHByb21wdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZmFsc2U7XG5cbiAgICB2YXIgdW5ibG9jayA9IHRyYW5zaXRpb25NYW5hZ2VyLnNldFByb21wdChwcm9tcHQpO1xuXG4gICAgaWYgKCFpc0Jsb2NrZWQpIHtcbiAgICAgIGNoZWNrRE9NTGlzdGVuZXJzKDEpO1xuICAgICAgaXNCbG9ja2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGlzQmxvY2tlZCkge1xuICAgICAgICBpc0Jsb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgY2hlY2tET01MaXN0ZW5lcnMoLTEpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdW5ibG9jaygpO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIGxpc3RlbiA9IGZ1bmN0aW9uIGxpc3RlbihsaXN0ZW5lcikge1xuICAgIHZhciB1bmxpc3RlbiA9IHRyYW5zaXRpb25NYW5hZ2VyLmFwcGVuZExpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICBjaGVja0RPTUxpc3RlbmVycygxKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBjaGVja0RPTUxpc3RlbmVycygtMSk7XG4gICAgICB1bmxpc3RlbigpO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIGhpc3RvcnkgPSB7XG4gICAgbGVuZ3RoOiBnbG9iYWxIaXN0b3J5Lmxlbmd0aCxcbiAgICBhY3Rpb246ICdQT1AnLFxuICAgIGxvY2F0aW9uOiBpbml0aWFsTG9jYXRpb24sXG4gICAgY3JlYXRlSHJlZjogY3JlYXRlSHJlZixcbiAgICBwdXNoOiBwdXNoLFxuICAgIHJlcGxhY2U6IHJlcGxhY2UsXG4gICAgZ286IGdvLFxuICAgIGdvQmFjazogZ29CYWNrLFxuICAgIGdvRm9yd2FyZDogZ29Gb3J3YXJkLFxuICAgIGJsb2NrOiBibG9jayxcbiAgICBsaXN0ZW46IGxpc3RlblxuICB9O1xuXG4gIHJldHVybiBoaXN0b3J5O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlQnJvd3Nlckhpc3Rvcnk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2hpc3RvcnkvY3JlYXRlQnJvd3Nlckhpc3RvcnkuanMiLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciBpbnZhcmlhbnQgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgICdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICtcbiAgICAgICAgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJ1xuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107IH0pXG4gICAgICApO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2ludmFyaWFudC9icm93c2VyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5sb2NhdGlvbnNBcmVFcXVhbCA9IGV4cG9ydHMuY3JlYXRlTG9jYXRpb24gPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVzb2x2ZVBhdGhuYW1lID0gcmVxdWlyZSgncmVzb2x2ZS1wYXRobmFtZScpO1xuXG52YXIgX3Jlc29sdmVQYXRobmFtZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZXNvbHZlUGF0aG5hbWUpO1xuXG52YXIgX3ZhbHVlRXF1YWwgPSByZXF1aXJlKCd2YWx1ZS1lcXVhbCcpO1xuXG52YXIgX3ZhbHVlRXF1YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmFsdWVFcXVhbCk7XG5cbnZhciBfUGF0aFV0aWxzID0gcmVxdWlyZSgnLi9QYXRoVXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGNyZWF0ZUxvY2F0aW9uID0gZXhwb3J0cy5jcmVhdGVMb2NhdGlvbiA9IGZ1bmN0aW9uIGNyZWF0ZUxvY2F0aW9uKHBhdGgsIHN0YXRlLCBrZXksIGN1cnJlbnRMb2NhdGlvbikge1xuICB2YXIgbG9jYXRpb24gPSB2b2lkIDA7XG4gIGlmICh0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZycpIHtcbiAgICAvLyBUd28tYXJnIGZvcm06IHB1c2gocGF0aCwgc3RhdGUpXG4gICAgbG9jYXRpb24gPSAoMCwgX1BhdGhVdGlscy5wYXJzZVBhdGgpKHBhdGgpO1xuICAgIGxvY2F0aW9uLnN0YXRlID0gc3RhdGU7XG4gIH0gZWxzZSB7XG4gICAgLy8gT25lLWFyZyBmb3JtOiBwdXNoKGxvY2F0aW9uKVxuICAgIGxvY2F0aW9uID0gX2V4dGVuZHMoe30sIHBhdGgpO1xuXG4gICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lID09PSB1bmRlZmluZWQpIGxvY2F0aW9uLnBhdGhuYW1lID0gJyc7XG5cbiAgICBpZiAobG9jYXRpb24uc2VhcmNoKSB7XG4gICAgICBpZiAobG9jYXRpb24uc2VhcmNoLmNoYXJBdCgwKSAhPT0gJz8nKSBsb2NhdGlvbi5zZWFyY2ggPSAnPycgKyBsb2NhdGlvbi5zZWFyY2g7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2F0aW9uLnNlYXJjaCA9ICcnO1xuICAgIH1cblxuICAgIGlmIChsb2NhdGlvbi5oYXNoKSB7XG4gICAgICBpZiAobG9jYXRpb24uaGFzaC5jaGFyQXQoMCkgIT09ICcjJykgbG9jYXRpb24uaGFzaCA9ICcjJyArIGxvY2F0aW9uLmhhc2g7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2F0aW9uLmhhc2ggPSAnJztcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUgIT09IHVuZGVmaW5lZCAmJiBsb2NhdGlvbi5zdGF0ZSA9PT0gdW5kZWZpbmVkKSBsb2NhdGlvbi5zdGF0ZSA9IHN0YXRlO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBsb2NhdGlvbi5wYXRobmFtZSA9IGRlY29kZVVSSShsb2NhdGlvbi5wYXRobmFtZSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAoZSBpbnN0YW5jZW9mIFVSSUVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgVVJJRXJyb3IoJ1BhdGhuYW1lIFwiJyArIGxvY2F0aW9uLnBhdGhuYW1lICsgJ1wiIGNvdWxkIG5vdCBiZSBkZWNvZGVkLiAnICsgJ1RoaXMgaXMgbGlrZWx5IGNhdXNlZCBieSBhbiBpbnZhbGlkIHBlcmNlbnQtZW5jb2RpbmcuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9XG5cbiAgaWYgKGtleSkgbG9jYXRpb24ua2V5ID0ga2V5O1xuXG4gIGlmIChjdXJyZW50TG9jYXRpb24pIHtcbiAgICAvLyBSZXNvbHZlIGluY29tcGxldGUvcmVsYXRpdmUgcGF0aG5hbWUgcmVsYXRpdmUgdG8gY3VycmVudCBsb2NhdGlvbi5cbiAgICBpZiAoIWxvY2F0aW9uLnBhdGhuYW1lKSB7XG4gICAgICBsb2NhdGlvbi5wYXRobmFtZSA9IGN1cnJlbnRMb2NhdGlvbi5wYXRobmFtZTtcbiAgICB9IGVsc2UgaWYgKGxvY2F0aW9uLnBhdGhuYW1lLmNoYXJBdCgwKSAhPT0gJy8nKSB7XG4gICAgICBsb2NhdGlvbi5wYXRobmFtZSA9ICgwLCBfcmVzb2x2ZVBhdGhuYW1lMi5kZWZhdWx0KShsb2NhdGlvbi5wYXRobmFtZSwgY3VycmVudExvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gV2hlbiB0aGVyZSBpcyBubyBwcmlvciBsb2NhdGlvbiBhbmQgcGF0aG5hbWUgaXMgZW1wdHksIHNldCBpdCB0byAvXG4gICAgaWYgKCFsb2NhdGlvbi5wYXRobmFtZSkge1xuICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPSAnLyc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGxvY2F0aW9uO1xufTtcblxudmFyIGxvY2F0aW9uc0FyZUVxdWFsID0gZXhwb3J0cy5sb2NhdGlvbnNBcmVFcXVhbCA9IGZ1bmN0aW9uIGxvY2F0aW9uc0FyZUVxdWFsKGEsIGIpIHtcbiAgcmV0dXJuIGEucGF0aG5hbWUgPT09IGIucGF0aG5hbWUgJiYgYS5zZWFyY2ggPT09IGIuc2VhcmNoICYmIGEuaGFzaCA9PT0gYi5oYXNoICYmIGEua2V5ID09PSBiLmtleSAmJiAoMCwgX3ZhbHVlRXF1YWwyLmRlZmF1bHQpKGEuc3RhdGUsIGIuc3RhdGUpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9Mb2NhdGlvblV0aWxzLmpzIiwiZnVuY3Rpb24gaXNBYnNvbHV0ZShwYXRobmFtZSkge1xuICByZXR1cm4gcGF0aG5hbWUuY2hhckF0KDApID09PSAnLyc7XG59XG5cbi8vIEFib3V0IDEuNXggZmFzdGVyIHRoYW4gdGhlIHR3by1hcmcgdmVyc2lvbiBvZiBBcnJheSNzcGxpY2UoKVxuZnVuY3Rpb24gc3BsaWNlT25lKGxpc3QsIGluZGV4KSB7XG4gIGZvciAodmFyIGkgPSBpbmRleCwgayA9IGkgKyAxLCBuID0gbGlzdC5sZW5ndGg7IGsgPCBuOyBpICs9IDEsIGsgKz0gMSkge1xuICAgIGxpc3RbaV0gPSBsaXN0W2tdO1xuICB9XG5cbiAgbGlzdC5wb3AoKTtcbn1cblxuLy8gVGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBiYXNlZCBoZWF2aWx5IG9uIG5vZGUncyB1cmwucGFyc2VcbmZ1bmN0aW9uIHJlc29sdmVQYXRobmFtZSh0bykge1xuICB2YXIgZnJvbSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogJyc7XG5cbiAgdmFyIHRvUGFydHMgPSB0byAmJiB0by5zcGxpdCgnLycpIHx8IFtdO1xuICB2YXIgZnJvbVBhcnRzID0gZnJvbSAmJiBmcm9tLnNwbGl0KCcvJykgfHwgW107XG5cbiAgdmFyIGlzVG9BYnMgPSB0byAmJiBpc0Fic29sdXRlKHRvKTtcbiAgdmFyIGlzRnJvbUFicyA9IGZyb20gJiYgaXNBYnNvbHV0ZShmcm9tKTtcbiAgdmFyIG11c3RFbmRBYnMgPSBpc1RvQWJzIHx8IGlzRnJvbUFicztcblxuICBpZiAodG8gJiYgaXNBYnNvbHV0ZSh0bykpIHtcbiAgICAvLyB0byBpcyBhYnNvbHV0ZVxuICAgIGZyb21QYXJ0cyA9IHRvUGFydHM7XG4gIH0gZWxzZSBpZiAodG9QYXJ0cy5sZW5ndGgpIHtcbiAgICAvLyB0byBpcyByZWxhdGl2ZSwgZHJvcCB0aGUgZmlsZW5hbWVcbiAgICBmcm9tUGFydHMucG9wKCk7XG4gICAgZnJvbVBhcnRzID0gZnJvbVBhcnRzLmNvbmNhdCh0b1BhcnRzKTtcbiAgfVxuXG4gIGlmICghZnJvbVBhcnRzLmxlbmd0aCkgcmV0dXJuICcvJztcblxuICB2YXIgaGFzVHJhaWxpbmdTbGFzaCA9IHZvaWQgMDtcbiAgaWYgKGZyb21QYXJ0cy5sZW5ndGgpIHtcbiAgICB2YXIgbGFzdCA9IGZyb21QYXJ0c1tmcm9tUGFydHMubGVuZ3RoIC0gMV07XG4gICAgaGFzVHJhaWxpbmdTbGFzaCA9IGxhc3QgPT09ICcuJyB8fCBsYXN0ID09PSAnLi4nIHx8IGxhc3QgPT09ICcnO1xuICB9IGVsc2Uge1xuICAgIGhhc1RyYWlsaW5nU2xhc2ggPSBmYWxzZTtcbiAgfVxuXG4gIHZhciB1cCA9IDA7XG4gIGZvciAodmFyIGkgPSBmcm9tUGFydHMubGVuZ3RoOyBpID49IDA7IGktLSkge1xuICAgIHZhciBwYXJ0ID0gZnJvbVBhcnRzW2ldO1xuXG4gICAgaWYgKHBhcnQgPT09ICcuJykge1xuICAgICAgc3BsaWNlT25lKGZyb21QYXJ0cywgaSk7XG4gICAgfSBlbHNlIGlmIChwYXJ0ID09PSAnLi4nKSB7XG4gICAgICBzcGxpY2VPbmUoZnJvbVBhcnRzLCBpKTtcbiAgICAgIHVwKys7XG4gICAgfSBlbHNlIGlmICh1cCkge1xuICAgICAgc3BsaWNlT25lKGZyb21QYXJ0cywgaSk7XG4gICAgICB1cC0tO1xuICAgIH1cbiAgfVxuXG4gIGlmICghbXVzdEVuZEFicykgZm9yICg7IHVwLS07IHVwKSB7XG4gICAgZnJvbVBhcnRzLnVuc2hpZnQoJy4uJyk7XG4gIH1pZiAobXVzdEVuZEFicyAmJiBmcm9tUGFydHNbMF0gIT09ICcnICYmICghZnJvbVBhcnRzWzBdIHx8ICFpc0Fic29sdXRlKGZyb21QYXJ0c1swXSkpKSBmcm9tUGFydHMudW5zaGlmdCgnJyk7XG5cbiAgdmFyIHJlc3VsdCA9IGZyb21QYXJ0cy5qb2luKCcvJyk7XG5cbiAgaWYgKGhhc1RyYWlsaW5nU2xhc2ggJiYgcmVzdWx0LnN1YnN0cigtMSkgIT09ICcvJykgcmVzdWx0ICs9ICcvJztcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCByZXNvbHZlUGF0aG5hbWU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtcGF0aG5hbWUvaW5kZXguanMiLCJ2YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmZ1bmN0aW9uIHZhbHVlRXF1YWwoYSwgYikge1xuICBpZiAoYSA9PT0gYikgcmV0dXJuIHRydWU7XG5cbiAgaWYgKGEgPT0gbnVsbCB8fCBiID09IG51bGwpIHJldHVybiBmYWxzZTtcblxuICBpZiAoQXJyYXkuaXNBcnJheShhKSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGIpICYmIGEubGVuZ3RoID09PSBiLmxlbmd0aCAmJiBhLmV2ZXJ5KGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgcmV0dXJuIHZhbHVlRXF1YWwoaXRlbSwgYltpbmRleF0pO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIGFUeXBlID0gdHlwZW9mIGEgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGEpO1xuICB2YXIgYlR5cGUgPSB0eXBlb2YgYiA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoYik7XG5cbiAgaWYgKGFUeXBlICE9PSBiVHlwZSkgcmV0dXJuIGZhbHNlO1xuXG4gIGlmIChhVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICB2YXIgYVZhbHVlID0gYS52YWx1ZU9mKCk7XG4gICAgdmFyIGJWYWx1ZSA9IGIudmFsdWVPZigpO1xuXG4gICAgaWYgKGFWYWx1ZSAhPT0gYSB8fCBiVmFsdWUgIT09IGIpIHJldHVybiB2YWx1ZUVxdWFsKGFWYWx1ZSwgYlZhbHVlKTtcblxuICAgIHZhciBhS2V5cyA9IE9iamVjdC5rZXlzKGEpO1xuICAgIHZhciBiS2V5cyA9IE9iamVjdC5rZXlzKGIpO1xuXG4gICAgaWYgKGFLZXlzLmxlbmd0aCAhPT0gYktleXMubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cbiAgICByZXR1cm4gYUtleXMuZXZlcnkoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIHZhbHVlRXF1YWwoYVtrZXldLCBiW2tleV0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWx1ZUVxdWFsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy92YWx1ZS1lcXVhbC9pbmRleC5qcyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBjcmVhdGVUcmFuc2l0aW9uTWFuYWdlciA9IGZ1bmN0aW9uIGNyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyKCkge1xuICB2YXIgcHJvbXB0ID0gbnVsbDtcblxuICB2YXIgc2V0UHJvbXB0ID0gZnVuY3Rpb24gc2V0UHJvbXB0KG5leHRQcm9tcHQpIHtcbiAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKHByb21wdCA9PSBudWxsLCAnQSBoaXN0b3J5IHN1cHBvcnRzIG9ubHkgb25lIHByb21wdCBhdCBhIHRpbWUnKTtcblxuICAgIHByb21wdCA9IG5leHRQcm9tcHQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHByb21wdCA9PT0gbmV4dFByb21wdCkgcHJvbXB0ID0gbnVsbDtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBjb25maXJtVHJhbnNpdGlvblRvID0gZnVuY3Rpb24gY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgYWN0aW9uLCBnZXRVc2VyQ29uZmlybWF0aW9uLCBjYWxsYmFjaykge1xuICAgIC8vIFRPRE86IElmIGFub3RoZXIgdHJhbnNpdGlvbiBzdGFydHMgd2hpbGUgd2UncmUgc3RpbGwgY29uZmlybWluZ1xuICAgIC8vIHRoZSBwcmV2aW91cyBvbmUsIHdlIG1heSBlbmQgdXAgaW4gYSB3ZWlyZCBzdGF0ZS4gRmlndXJlIG91dCB0aGVcbiAgICAvLyBiZXN0IHdheSB0byBoYW5kbGUgdGhpcy5cbiAgICBpZiAocHJvbXB0ICE9IG51bGwpIHtcbiAgICAgIHZhciByZXN1bHQgPSB0eXBlb2YgcHJvbXB0ID09PSAnZnVuY3Rpb24nID8gcHJvbXB0KGxvY2F0aW9uLCBhY3Rpb24pIDogcHJvbXB0O1xuXG4gICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBnZXRVc2VyQ29uZmlybWF0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgZ2V0VXNlckNvbmZpcm1hdGlvbihyZXN1bHQsIGNhbGxiYWNrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKGZhbHNlLCAnQSBoaXN0b3J5IG5lZWRzIGEgZ2V0VXNlckNvbmZpcm1hdGlvbiBmdW5jdGlvbiBpbiBvcmRlciB0byB1c2UgYSBwcm9tcHQgbWVzc2FnZScpO1xuXG4gICAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFJldHVybiBmYWxzZSBmcm9tIGEgdHJhbnNpdGlvbiBob29rIHRvIGNhbmNlbCB0aGUgdHJhbnNpdGlvbi5cbiAgICAgICAgY2FsbGJhY2socmVzdWx0ICE9PSBmYWxzZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxiYWNrKHRydWUpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgbGlzdGVuZXJzID0gW107XG5cbiAgdmFyIGFwcGVuZExpc3RlbmVyID0gZnVuY3Rpb24gYXBwZW5kTGlzdGVuZXIoZm4pIHtcbiAgICB2YXIgaXNBY3RpdmUgPSB0cnVlO1xuXG4gICAgdmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gbGlzdGVuZXIoKSB7XG4gICAgICBpZiAoaXNBY3RpdmUpIGZuLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlzQWN0aXZlID0gZmFsc2U7XG4gICAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtICE9PSBsaXN0ZW5lcjtcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIG5vdGlmeUxpc3RlbmVycyA9IGZ1bmN0aW9uIG5vdGlmeUxpc3RlbmVycygpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBsaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiBsaXN0ZW5lci5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgc2V0UHJvbXB0OiBzZXRQcm9tcHQsXG4gICAgY29uZmlybVRyYW5zaXRpb25UbzogY29uZmlybVRyYW5zaXRpb25UbyxcbiAgICBhcHBlbmRMaXN0ZW5lcjogYXBwZW5kTGlzdGVuZXIsXG4gICAgbm90aWZ5TGlzdGVuZXJzOiBub3RpZnlMaXN0ZW5lcnNcbiAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9oaXN0b3J5L2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIGNhblVzZURPTSA9IGV4cG9ydHMuY2FuVXNlRE9NID0gISEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcblxudmFyIGFkZEV2ZW50TGlzdGVuZXIgPSBleHBvcnRzLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50LCBsaXN0ZW5lcikge1xuICByZXR1cm4gbm9kZS5hZGRFdmVudExpc3RlbmVyID8gbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lciwgZmFsc2UpIDogbm9kZS5hdHRhY2hFdmVudCgnb24nICsgZXZlbnQsIGxpc3RlbmVyKTtcbn07XG5cbnZhciByZW1vdmVFdmVudExpc3RlbmVyID0gZXhwb3J0cy5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudCwgbGlzdGVuZXIpIHtcbiAgcmV0dXJuIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA/IG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIsIGZhbHNlKSA6IG5vZGUuZGV0YWNoRXZlbnQoJ29uJyArIGV2ZW50LCBsaXN0ZW5lcik7XG59O1xuXG52YXIgZ2V0Q29uZmlybWF0aW9uID0gZXhwb3J0cy5nZXRDb25maXJtYXRpb24gPSBmdW5jdGlvbiBnZXRDb25maXJtYXRpb24obWVzc2FnZSwgY2FsbGJhY2spIHtcbiAgcmV0dXJuIGNhbGxiYWNrKHdpbmRvdy5jb25maXJtKG1lc3NhZ2UpKTtcbn07IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tYWxlcnRcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIEhUTUw1IGhpc3RvcnkgQVBJIGlzIHN1cHBvcnRlZC4gVGFrZW4gZnJvbSBNb2Rlcm5penIuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL01vZGVybml6ci9Nb2Rlcm5penIvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICogaHR0cHM6Ly9naXRodWIuY29tL01vZGVybml6ci9Nb2Rlcm5penIvYmxvYi9tYXN0ZXIvZmVhdHVyZS1kZXRlY3RzL2hpc3RvcnkuanNcbiAqIGNoYW5nZWQgdG8gYXZvaWQgZmFsc2UgbmVnYXRpdmVzIGZvciBXaW5kb3dzIFBob25lczogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmVhY3Qtcm91dGVyL2lzc3Vlcy81ODZcbiAqL1xudmFyIHN1cHBvcnRzSGlzdG9yeSA9IGV4cG9ydHMuc3VwcG9ydHNIaXN0b3J5ID0gZnVuY3Rpb24gc3VwcG9ydHNIaXN0b3J5KCkge1xuICB2YXIgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcblxuICBpZiAoKHVhLmluZGV4T2YoJ0FuZHJvaWQgMi4nKSAhPT0gLTEgfHwgdWEuaW5kZXhPZignQW5kcm9pZCA0LjAnKSAhPT0gLTEpICYmIHVhLmluZGV4T2YoJ01vYmlsZSBTYWZhcmknKSAhPT0gLTEgJiYgdWEuaW5kZXhPZignQ2hyb21lJykgPT09IC0xICYmIHVhLmluZGV4T2YoJ1dpbmRvd3MgUGhvbmUnKSA9PT0gLTEpIHJldHVybiBmYWxzZTtcblxuICByZXR1cm4gd2luZG93Lmhpc3RvcnkgJiYgJ3B1c2hTdGF0ZScgaW4gd2luZG93Lmhpc3Rvcnk7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBicm93c2VyIGZpcmVzIHBvcHN0YXRlIG9uIGhhc2ggY2hhbmdlLlxuICogSUUxMCBhbmQgSUUxMSBkbyBub3QuXG4gKi9cbnZhciBzdXBwb3J0c1BvcFN0YXRlT25IYXNoQ2hhbmdlID0gZXhwb3J0cy5zdXBwb3J0c1BvcFN0YXRlT25IYXNoQ2hhbmdlID0gZnVuY3Rpb24gc3VwcG9ydHNQb3BTdGF0ZU9uSGFzaENoYW5nZSgpIHtcbiAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ1RyaWRlbnQnKSA9PT0gLTE7XG59O1xuXG4vKipcbiAqIFJldHVybnMgZmFsc2UgaWYgdXNpbmcgZ28obikgd2l0aCBoYXNoIGhpc3RvcnkgY2F1c2VzIGEgZnVsbCBwYWdlIHJlbG9hZC5cbiAqL1xudmFyIHN1cHBvcnRzR29XaXRob3V0UmVsb2FkVXNpbmdIYXNoID0gZXhwb3J0cy5zdXBwb3J0c0dvV2l0aG91dFJlbG9hZFVzaW5nSGFzaCA9IGZ1bmN0aW9uIHN1cHBvcnRzR29XaXRob3V0UmVsb2FkVXNpbmdIYXNoKCkge1xuICByZXR1cm4gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignRmlyZWZveCcpID09PSAtMTtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGEgZ2l2ZW4gcG9wc3RhdGUgZXZlbnQgaXMgYW4gZXh0cmFuZW91cyBXZWJLaXQgZXZlbnQuXG4gKiBBY2NvdW50cyBmb3IgdGhlIGZhY3QgdGhhdCBDaHJvbWUgb24gaU9TIGZpcmVzIHJlYWwgcG9wc3RhdGUgZXZlbnRzXG4gKiBjb250YWluaW5nIHVuZGVmaW5lZCBzdGF0ZSB3aGVuIHByZXNzaW5nIHRoZSBiYWNrIGJ1dHRvbi5cbiAqL1xudmFyIGlzRXh0cmFuZW91c1BvcHN0YXRlRXZlbnQgPSBleHBvcnRzLmlzRXh0cmFuZW91c1BvcHN0YXRlRXZlbnQgPSBmdW5jdGlvbiBpc0V4dHJhbmVvdXNQb3BzdGF0ZUV2ZW50KGV2ZW50KSB7XG4gIHJldHVybiBldmVudC5zdGF0ZSA9PT0gdW5kZWZpbmVkICYmIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignQ3JpT1MnKSA9PT0gLTE7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9oaXN0b3J5L0RPTVV0aWxzLmpzIiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnXG5pbXBvcnQgY29uZmlnIGZyb20gJ2NvbmZpZydcbmltcG9ydCB7IHRoZW1lU3RvcmUgfSBmcm9tICcjL3N0b3JlcydcblxuY29uc3QgdGhlbWVzID0gY29uZmlnLnRoZW1lc1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgY29uc3QgJHNpZGViYXIgPSAkKCcjSi1zaWRlYmFyLWhlYWRlcicpXG4gIGNvbnN0ICRib2R5ID0gJCgnYm9keScpXG4gIGNvbnN0ICR0aGVtZVNlbGVjdG9yID0gJCgnI0otdGhlbWUtc2VsZWN0b3InKVxuICBjb25zdCAkc2lkZWJhckJvZHkgPSAkKCcjSi1zaWRlLWJhci1ib2R5JylcbiAgbGV0IGlzU2VhcmNoU2hvd2luZyA9IGZhbHNlXG4gIGxldCBpc1NpZGVCb2R5U2hvd2luZyA9IHRydWVcblxuICAkdGhlbWVTZWxlY3RvclxuICAgIC5odG1sKFxuICAgICAgdGhlbWVzXG4gICAgICAgIC5tYXAodGhlbWUgPT4ge1xuICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSB0aGVtZVN0b3JlLnRoZW1lID09PSB0aGVtZSA/ICdzZWxlY3RlZCcgOiAnJ1xuICAgICAgICAgIHJldHVybiBgPG9wdGlvbiB2YWx1ZT1cIiR7dGhlbWV9XCIgJHtpc1NlbGVjdGVkfT4ke3RoZW1lfTwvb3B0aW9uPmBcbiAgICAgICAgfSlcbiAgICAgICAgLmpvaW4oJycpXG4gICAgKVxuICAgIC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCAkdGhpcyA9ICQodGhpcylcbiAgICAgIGNvbnN0IHRoZW1lID0gJHRoaXMudmFsKClcblxuICAgICAgaWYgKHRoZW1lICE9PSB0aGVtZVN0b3JlLnRoZW1lKSB7XG4gICAgICAgICRib2R5LmFkZENsYXNzKCd0aGVtZS0nICsgdGhlbWUpLnJlbW92ZUNsYXNzKCd0aGVtZS0nICsgdGhlbWVTdG9yZS50aGVtZSlcbiAgICAgICAgdGhlbWVTdG9yZS5zZXRUaGVtZSh0aGVtZSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICRib2R5LmFkZENsYXNzKCd0aGVtZS0nICsgdGhlbWVTdG9yZS50aGVtZSlcblxuICAkc2lkZWJhclxuICAgIC5vbignY2xpY2snLCAnLkotc2lkZWJhci1sb2dvJywgZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCAkdGhpcyA9ICQodGhpcylcblxuICAgICAgaWYgKCR0aGlzLmlzKCcuYWN0aXZlJykpIHtcbiAgICAgICAgc2lkZWJhckJvZHlIaWRlKClcbiAgICAgICAgJHRoaXMucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaWRlYmFyQm9keVNob3coKVxuICAgICAgICBlbWl0dGVyLmVtaXQoJ3N3aXRjaC1zaWRlYmFyJywgeyB0YXJnZXQ6ICdsb2dvJyB9KVxuICAgICAgICAkdGhpc1xuICAgICAgICAgIC5hZGRDbGFzcygnYWN0aXZlJylcbiAgICAgICAgICAuc2libGluZ3MoKVxuICAgICAgICAgIC5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAgIH1cbiAgICB9KVxuICAgIC5vbignY2xpY2snLCAnLkotc2lkZWJhci1zZWFyY2gnLCBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKVxuXG4gICAgICBpZiAoJHRoaXMuaXMoJy5hY3RpdmUnKSkge1xuICAgICAgICBzaWRlYmFyQm9keUhpZGUoKVxuICAgICAgICAkdGhpcy5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNpZGViYXJCb2R5U2hvdygpXG5cbiAgICAgICAgJHRoaXNcbiAgICAgICAgICAuYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAgICAgLnNpYmxpbmdzKClcbiAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG5cbiAgICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwic2VhcmNoLWJveFwiICovICdwYXJ0aWFscy9zaWRlLWJhci1ib2R5L3NlYXJjaC1ib3gnKS50aGVuKCgpID0+IHtcbiAgICAgICAgICBlbWl0dGVyLmVtaXQoJ3N3aXRjaC1zaWRlYmFyJywgeyB0YXJnZXQ6ICdzZWFyY2gnIH0pXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICBmdW5jdGlvbiBzaWRlYmFyQm9keVNob3coKSB7XG4gICAgJHNpZGViYXJCb2R5LnJlbW92ZUNsYXNzKCdoaWRkZW4nKVxuICAgIGlzU2lkZUJvZHlTaG93aW5nID0gdHJ1ZVxuICB9XG4gIGZ1bmN0aW9uIHNpZGViYXJCb2R5SGlkZSgpIHtcbiAgICAkc2lkZWJhckJvZHkuYWRkQ2xhc3MoJ2hpZGRlbicpXG4gICAgaXNTaWRlQm9keVNob3dpbmcgPSBmYWxzZVxuICB9XG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFydGlhbHMvc2lkZS1iYXItaGVhZGVyL2luZGV4LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhcnRpYWxzL3NpZGUtYmFyLWhlYWRlci9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgJy4vYmxvZy10cmVlJ1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnXG5cbiQoZnVuY3Rpb24oKSB7XG4gIGNvbnN0ICRzZWFyY2hCb3ggPSAkKCcjSi1zZWFyY2gtYm94JylcbiAgY29uc3QgJGJsb2dUcmVlID0gJCgnI0otYmxvZy10cmVlJylcbiAgY29uc3QgJHNlYXJjaElucHV0ID0gJHNlYXJjaEJveC5maW5kKCcuSi1pbnB1dC1zZWFyY2gnKVxuICBjb25zdCAkdGFnVHJlZSA9ICQoJyNKLWJsb2ctdHJlZScpXG5cbiAgZW1pdHRlci5vbignc3dpdGNoLXNpZGViYXInLCAoeyB0YXJnZXQgfSkgPT4ge1xuICAgIGNvbnN0IGlzU2VhcmNoID0gdGFyZ2V0ID09PSAnc2VhcmNoJ1xuXG4gICAgaWYgKGlzU2VhcmNoKSB7XG4gICAgICAkYmxvZ1RyZWUuaGlkZSgpXG4gICAgICAkc2VhcmNoQm94LnJlbW92ZUNsYXNzKCdoaWRkZW4nKVxuICAgICAgJHNlYXJjaElucHV0LmZvY3VzKClcbiAgICB9IGVsc2Uge1xuICAgICAgJGJsb2dUcmVlLnNob3coKVxuICAgICAgJHNlYXJjaEJveC5hZGRDbGFzcygnaGlkZGVuJylcbiAgICB9XG4gIH0pXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFydGlhbHMvc2lkZS1iYXItYm9keS9pbmRleC5qcyIsImltcG9ydCAnLi9zdHlsZS5zY3NzJ1xuaW1wb3J0IGhpc3RvcnkgZnJvbSAnIy9oaXN0b3J5J1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgY29uc3QgJHRhZ1RyZWUgPSAkKCcjSi1ibG9nLXRyZWUnKVxuICBjb25zdCAkYWxsUG9zdHMgPSAkKCcjSi1wb3N0cy1hbGwtaGlkZGVuJylcbiAgY29uc3QgcGF0aG5hbWUgPSBsb2NhdGlvbi5wYXRobmFtZVxuICBjb25zdCAkYm9keSA9ICQoJ2JvZHknKVxuICBjb25zdCAkdW50YWdlZFBvc3RzID0gJHRhZ1RyZWUuZmluZCgnLkotdW50YWdlZC1wb3N0cycpXG5cbiAgY29uc3QgdGFncyA9IHt9XG4gIGNvbnN0IHVudGFnZWQgPSBbXVxuICAkYWxsUG9zdHMuZmluZCgnLkotcG9zdCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgJHBvc3QgPSAkKHRoaXMpXG4gICAgY29uc3Qgc2x1ZyA9ICRwb3N0LmRhdGEoJ3NsdWcnKVxuICAgIGNvbnN0ICR0YWdzID0gJHBvc3QuZmluZCgnLkotdGFnJylcblxuICAgIGlmIChwYXRobmFtZS5pbmNsdWRlcyhzbHVnKSkge1xuICAgICAgJHBvc3QuYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gICAgfVxuXG4gICAgaWYgKCR0YWdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdW50YWdlZC5wdXNoKCRwb3N0WzBdLm91dGVySFRNTClcbiAgICB9IGVsc2Uge1xuICAgICAgJHRhZ3MuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgdGFnID0gdGhpcy5pbm5lclRleHRcbiAgICAgICAgaWYgKCF0YWdzW3RhZ10pIHtcbiAgICAgICAgICB0YWdzW3RhZ10gPSBbXVxuICAgICAgICB9XG5cbiAgICAgICAgdGFnc1t0YWddLnB1c2goJHBvc3RbMF0ub3V0ZXJIVE1MKVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG5cbiAgLyoqXG4gICAqIGNvcHkgcG9zdHMgdG8gY29ycmVzcG9uZGluZyB0YWdcbiAgICovXG4gICR0YWdUcmVlLmZpbmQoJy5KLWJsb2ctdHJlZS1wb3N0cycpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpXG4gICAgY29uc3QgcG9zdHMgPSB0YWdzWyR0aGlzLmRhdGEoJ3RhZycpXVxuXG4gICAgaWYgKCFwb3N0cykge1xuICAgICAgJHRoaXNcbiAgICAgICAgLmh0bWwoJzx1bD48bGkgY2xhc3M9XCJibG9nLXRyZWUtbm8tcG9zdHMgbGlnaHRlclwiPkNvbWluZyBzb29uLi4uPC9saT48L3VsPicpXG4gICAgICAgIC5wYXJlbnQoKVxuICAgICAgICAuYWRkQ2xhc3MoJ3Bvc3QtaGlkZGVuJylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgICR0aGlzLmh0bWwocG9zdHMuam9pbignJykpLmNzcyh7XG4gICAgICBoZWlnaHQ6IDI2ICogcG9zdHMubGVuZ3RoXG4gICAgfSlcbiAgfSlcblxuICAkdW50YWdlZFBvc3RzLmh0bWwodW50YWdlZC5qb2luKCcnKSlcblxuICBjb25zdCAkcG9zdHMgPSAkKCcuSi1ibG9nLXRyZWUtdGFncyAuSi1wb3N0JylcblxuICAvLyBldmVudCBiaW5kaW5nXG4gICR0YWdUcmVlXG4gICAgLmFkZENsYXNzKCdsb2FkaW5nLWhpZGRlbicpXG4gICAgLm9uKCdjbGljaycsICcuSi1ibG9nLXRyZWUtdGFnbmFtZScsIGZ1bmN0aW9uKCkge1xuICAgICAgJCh0aGlzKVxuICAgICAgICAucGFyZW50KClcbiAgICAgICAgLnRvZ2dsZUNsYXNzKCdwb3N0LWhpZGRlbicpXG4gICAgfSlcbiAgICAub24oJ2NsaWNrJywgJy5KLWdvMnBvc3QnLCBmdW5jdGlvbihlKSB7XG4gICAgICBjb25zdCAkdGhpcyA9ICQodGhpcylcblxuICAgICAgaWYgKCEkYm9keS5pcygnLnBvc3QtdGVtcGxhdGUnKSkgcmV0dXJuXG5cbiAgICAgIGlmICgkdGhpcy5wYXJlbnRzKCcuSi1wb3N0JykuaXMoJy5hY3RpdmUnKSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlkID0gJHRoaXMuZGF0YSgnaWQnKVxuICAgICAgY29uc3QgdXJsID0gJHRoaXMuYXR0cignaHJlZicpXG5cbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgZW1pdHRlci5lbWl0KCdhZGQtcG9zdC10YWInLCB7XG4gICAgICAgIGlkLFxuICAgICAgICB1cmwsXG4gICAgICAgIHRpdGxlOiAkdGhpcy5hdHRyKCd0aXRsZScpLFxuICAgICAgICBzbHVnOiAkdGhpcy5wYXJlbnRzKCcuSi1wb3N0JykuZGF0YSgnc2x1ZycpXG4gICAgICB9KVxuICAgIH0pXG5cbiAgaGlzdG9yeS5saXN0ZW4obG9jYXRpb24gPT4ge1xuICAgIGNvbnN0IG5leHRUYWIgPSBsb2NhdGlvbi5zdGF0ZVxuXG4gICAgJHBvc3RzXG4gICAgICAucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAuZmlsdGVyKChpZHgsIHBvc3QpID0+IHtcbiAgICAgICAgcmV0dXJuICQocG9zdCkuZGF0YSgnc2x1ZycpID09PSBuZXh0VGFiLnNsdWdcbiAgICAgIH0pXG4gICAgICAuYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gIH0pXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFydGlhbHMvc2lkZS1iYXItYm9keS9ibG9nLXRyZWUvaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGFydGlhbHMvc2lkZS1iYXItYm9keS9ibG9nLXRyZWUvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhcnRpYWxzL3NpZGUtYmFyLWJvZHkvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5cbiQoZnVuY3Rpb24oKSB7XG4gIGNvbnN0ICRyZWFkaW5nVGltZSA9ICQoXCIuSi1yZWFkaW5nLXRpbWVcIik7XG5cbiAgZW1pdHRlci5vbihcInJlZnJlc2gtcmVhZGluZy10aW1lXCIsICh7IHRpbWUgfSkgPT4ge1xuICAgICRyZWFkaW5nVGltZS5odG1sKHRpbWUpO1xuICB9KTtcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFydGlhbHMvZm9vdGVyL2luZGV4LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhcnRpYWxzL2Zvb3Rlci9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgJy4vc3R5bGUuc2NzcydcbmltcG9ydCBoaXN0b3J5IGZyb20gJyMvaGlzdG9yeSdcbmltcG9ydCB7IHBvc3RTdG9yZSB9IGZyb20gJyMvc3RvcmVzJ1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gJyMvdXRpbHMnXG5cbiQoZnVuY3Rpb24oKSB7XG4gIGNvbnN0ICRib2R5ID0gJCgnYm9keScpXG4gIGNvbnN0ICRwb3N0ID0gJCgnI0otcG9zdCcpXG4gIGNvbnN0ICRwcmV2TmV4dCA9ICQoJyNKLXByZXYtbmV4dCcpXG4gIGNvbnN0ICRwcmV2ID0gJHByZXZOZXh0LmZpbmQoJy5KLXByZXYtcG9zdCcpXG4gIGNvbnN0ICRuZXh0ID0gJHByZXZOZXh0LmZpbmQoJy5KLW5leHQtcG9zdCcpXG4gIGNvbnN0ICR0aXRsZSA9ICRwb3N0LmZpbmQoJy5KLXBvc3QtdGl0bGUnKVxuICBjb25zdCAkY29udGVudCA9ICRwb3N0LmZpbmQoJy5KLXBvc3QtY29udGVudCcpXG4gIGNvbnN0ICRtZXRhID0gJHBvc3QuZmluZCgnLkotcG9zdC1tZXRhJylcbiAgY29uc3QgJGZlYXR1cmVJbWFnZSA9ICRwb3N0LmZpbmQoJy5KLXBvc3QtZmVhdHVyZS1pbWFnZScpXG4gIGNvbnN0IG9yaWdpbiA9IGxvY2F0aW9uLm9yaWdpblxuXG4gIGlmICgkKCdib2R5JykuaXMoJy5wb3N0LXRlbXBsYXRlJykpIHtcbiAgICBlbWl0dGVyLmVtaXQoJ2FkZC1wb3N0LXRhYicsIHtcbiAgICAgIGlkOiAkcG9zdC5kYXRhKCdpZCcpLFxuICAgICAgdGl0bGU6ICRwb3N0LmRhdGEoJ3RpdGxlJyksXG4gICAgICBzbHVnOiAkcG9zdC5kYXRhKCdzbHVnJyksXG4gICAgICB1cmw6ICRwb3N0LmRhdGEoJ3VybCcpXG4gICAgfSlcblxuICAgIGVtaXR0ZXIuZW1pdCgncmVmcmVzaC1yZWFkaW5nLXRpbWUnLCB7XG4gICAgICB0aW1lOiAkKCcuSi1yZWFkaW5nLXRpbWUtaGlkZGVuJykuaHRtbCgpXG4gICAgfSlcbiAgfVxuXG4gICRwcmV2TmV4dC5vbignY2xpY2snLCAnLkotcHJldi1uZXh0LWl0ZW0nLCBmdW5jdGlvbihlKSB7XG4gICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpXG4gICAgY29uc3QgaWQgPSAkdGhpcy5kYXRhKCdpZCcpXG4gICAgY29uc3QgdXJsID0gJHRoaXMuYXR0cignaHJlZicpXG4gICAgY29uc3Qgc2x1ZyA9ICR0aGlzLmRhdGEoJ3NsdWcnKVxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZW1pdHRlci5lbWl0KCdhZGQtcG9zdC10YWInLCB7XG4gICAgICBpZCxcbiAgICAgIHVybCxcbiAgICAgIHNsdWcsXG4gICAgICB0aXRsZTogJHRoaXMuYXR0cigndGl0bGUnKVxuICAgIH0pXG4gIH0pXG5cbiAgLy8gcmVmcmVzaCBwb3N0IGRhdGFcbiAgaGlzdG9yeS5saXN0ZW4oKGxvY2F0aW9uLCBhY3Rpb24pID0+IHtcbiAgICBjb25zdCBwb3N0SWQgPSBsb2NhdGlvbi5zdGF0ZS5pZFxuXG4gICAgaWYgKCFwb3N0SWQpIHJldHVyblxuXG4gICAgcG9zdFN0b3JlLmZldGNoUG9zdChwb3N0SWQpLmRvbmUoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgY29uc3QgcG9zdCA9IGRhdGEucG9zdHNbMF0gfHwge31cblxuICAgICAgY29uc3QgeyBwdWJsaXNoZWRfYXQsIHRpdGxlLCBodG1sLCBhdXRob3IsIGZlYXR1cmVfaW1hZ2UsIGNvbW1lbnRfaWQsIHVybCwgc2x1ZyB9ID0gcG9zdFxuICAgICAgJHRpdGxlLmh0bWwodGl0bGUpXG4gICAgICAkY29udGVudC5odG1sKGh0bWwpXG4gICAgICAkbWV0YS5odG1sKGBQb3N0ZWQgYnkgPGEgaHJlZj1cIi9hdXRob3IvJHthdXRob3Iuc2x1Z30vXCI+JHthdXRob3IubmFtZX08L2E+IG9uICR7Zm9ybWF0RGF0ZSgnJFkuJE0uJGQnLCBwdWJsaXNoZWRfYXQpfWApXG4gICAgICAkZmVhdHVyZUltYWdlW2ZlYXR1cmVfaW1hZ2UgPyAncmVtb3ZlQ2xhc3MnIDogJ2FkZENsYXNzJ10oJ2hpZGRlbicpXG4gICAgICAgIC5maW5kKCdmaWd1cmUnKVxuICAgICAgICAuY3NzKHtcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtmZWF0dXJlX2ltYWdlfSlgXG4gICAgICAgIH0pXG5cbiAgICAgIGVtaXR0ZXIuZW1pdCgncmVmcmVzaC1yZWFkaW5nLXRpbWUnLCB7XG4gICAgICAgIHRpbWU6ICcnXG4gICAgICB9KVxuXG4gICAgICBkb2N1bWVudC50aXRsZSA9IHRpdGxlXG5cbiAgICAgIC8vIGZldGNoIHByZXYgYW5kIG5leHQgYW5kIHJlZnJlc2hcbiAgICAgIHBvc3RTdG9yZVxuICAgICAgICAuZmV0Y2hQcmV2TmV4dFBvc3Qoe1xuICAgICAgICAgIHB1Ymxpc2hlZF9hdCxcbiAgICAgICAgICBzbHVnLFxuICAgICAgICAgIHR5cGU6ICdib3RoJ1xuICAgICAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbihwcmV2LCBuZXh0KSB7XG4gICAgICAgICAgY29uc3QgcHJldlBvc3QgPSBwcmV2WzBdLnBvc3RzWzBdXG4gICAgICAgICAgY29uc3QgbmV4dFBvc3QgPSBuZXh0WzBdLnBvc3RzWzBdXG5cbiAgICAgICAgICBjb25zb2xlLmxvZyhwdWJsaXNoZWRfYXQsIHByZXZQb3N0LCBuZXh0UG9zdClcblxuICAgICAgICAgIHByZXZQb3N0XG4gICAgICAgICAgICA/ICRwcmV2XG4gICAgICAgICAgICAgICAgLnNob3coKVxuICAgICAgICAgICAgICAgIC5odG1sKGA8YSBocmVmPVwiJHtwcmV2UG9zdC51cmx9XCIgZGF0YS1pZD1cIiR7cHJldlBvc3QuaWR9XCIgdGl0bGU9XCIke3ByZXZQb3N0LnRpdGxlfVwiIGRhdGEtc2x1Zz1cIiR7cHJldlBvc3Quc2x1Z31cIj4ke3ByZXZQb3N0LnRpdGxlfTwvYT5gKVxuICAgICAgICAgICAgOiAkcHJldi5oaWRlKClcblxuICAgICAgICAgIG5leHRQb3N0XG4gICAgICAgICAgICA/ICRuZXh0XG4gICAgICAgICAgICAgICAgLnNob3coKVxuICAgICAgICAgICAgICAgIC5odG1sKGA8YSBocmVmPVwiJHtuZXh0UG9zdC51cmx9XCIgZGF0YS1pZD1cIiR7bmV4dFBvc3QuaWR9XCIgdGl0bGU9XCIke25leHRQb3N0LnRpdGxlfVwiIGRhdGEtc2x1Zz1cIiR7bmV4dFBvc3Quc2x1Z31cIj4ke25leHRQb3N0LnRpdGxlfTwvYT5gKVxuICAgICAgICAgICAgOiAkbmV4dC5oaWRlKClcbiAgICAgICAgfSlcblxuICAgICAgJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIHdpbmRvdy5yZWZyZXNoQ29tbWVudCAmJiB3aW5kb3cucmVmcmVzaENvbW1lbnQoYGdob3N0LSR7Y29tbWVudF9pZH1gLCBvcmlnaW4gKyB1cmwsIHRpdGxlKVxuICAgIH0pXG4gIH0pXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFydGlhbHMvcG9zdC9pbmRleC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYXJ0aWFscy9wb3N0L3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYXJ0aWFscy9wb3N0LW5hdi9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGFydGlhbHMvaG9tZS9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGFydGlhbHMvYXV0aG9yL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=