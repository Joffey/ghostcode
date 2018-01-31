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
/******/ 		script.src = __webpack_require__.p + "chunk." + ({}[chunkId]||chunkId) + "." + {"0":"17cb7"}[chunkId] + ".js";
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
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory__);


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory___default()());

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TabStore__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PostStore__ = __webpack_require__(14);



const tabStore = new __WEBPACK_IMPORTED_MODULE_0__TabStore__["a" /* default */]();
/* harmony export (immutable) */ __webpack_exports__["b"] = tabStore;

const postStore = new __WEBPACK_IMPORTED_MODULE_1__PostStore__["a" /* default */]();
/* harmony export (immutable) */ __webpack_exports__["a"] = postStore;


window.stores = {
  tabStore,
  postStore
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {
  // localstorage tab key
  lsPostTabKey: 'ghostcode-post-tabs',
  // tab expiration 1d
  lsPostTabExpiration: 24 * 60 * 60 * 1000,
  // localstorage theme key
  lsThemeKey: 'ghostcode-theme',
  // localstorage post key
  lsPostsKey: 'ghostcode-posts',
  // post expiration time 1min
  lsPostsExpiration: 1 * 60 * 1000,
  // theme name from ./themes/result.json
  theme: 'dark_default'
};

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_partials_side_bar_header__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_partials_side_bar_body__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_partials_footer__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_partials_post__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_partials_post_nav__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_partials_home__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_partials_author__ = __webpack_require__(36);













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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stores__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(0);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






$(function () {
  if (!Object(__WEBPACK_IMPORTED_MODULE_3__utils__["c" /* isPostPage */])()) return;

  let $postTabs = $('#J-post-tab');
  const $scrollWrap = $('.J-post-tab-scroller-wrap');
  const ndScrollWrap = $scrollWrap.get(0);

  emitter.on('add-post-tab', post => {
    const tabs = __WEBPACK_IMPORTED_MODULE_1__stores__["b" /* tabStore */].getTabs();
    if (!tabs.filter(tab => tab.id === post.id).length) {
      tabs.push(_extends({}, post));

      __WEBPACK_IMPORTED_MODULE_1__stores__["b" /* tabStore */].setTabs(tabs);
    }

    emitter.emit('tab-refresh', _extends({}, post));
  });

  emitter.on('tab-refresh', (active = {}) => {
    const activeId = active.id;
    const tabs = __WEBPACK_IMPORTED_MODULE_1__stores__["b" /* tabStore */].getTabs();
    const currentTab = __WEBPACK_IMPORTED_MODULE_1__stores__["b" /* tabStore */].currentTab;

    const $active = $('#J-post-tab').html(tabs.map(tab => `<div title="${tab.title}" class="J-tab-item light hover-opacity1 flex-item0 single-line item ${activeId === tab.id ? 'active' : ''}" data-id="${tab.id}">${tab.title}<i class="close J-post-tab-close lighter hover-opacity1" data-slug="${tab.slug}"></i></div>`).join('')).find('.active');

    // not refetch current post
    if (!currentTab || currentTab.id !== activeId) {
      __WEBPACK_IMPORTED_MODULE_2__history__["a" /* default */].push(active.url, _extends({}, active));
      __WEBPACK_IMPORTED_MODULE_1__stores__["b" /* tabStore */].setCurrentTab(_extends({}, active));
    }

    scroll2view($active);
  });

  $postTabs.on('click', '.J-post-tab-close', function (e) {
    e.stopPropagation();
    __WEBPACK_IMPORTED_MODULE_1__stores__["b" /* tabStore */].deleteTabItem($(this).parent('.J-tab-item').data('id'));
  }).on('click', '.J-tab-item', function () {
    const $this = $(this);
    if ($this.is('.active')) return;

    const id = $this.data('id');
    const currentTab = __WEBPACK_IMPORTED_MODULE_1__stores__["b" /* tabStore */].getTabs().filter(tab => tab.id === id)[0] || {};

    $this.addClass('active').siblings().removeClass('active');
    __WEBPACK_IMPORTED_MODULE_1__stores__["b" /* tabStore */].setCurrentTab(currentTab);
    __WEBPACK_IMPORTED_MODULE_2__history__["a" /* default */].push(currentTab.url, _extends({}, currentTab));

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

  Object(__WEBPACK_IMPORTED_MODULE_3__utils__["b" /* hScroll */])($scrollWrap.get(0));
});

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_config__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_config__);

const ls = localStorage;

/* harmony default export */ __webpack_exports__["a"] = (class {
  constructor() {
    this.currentTab = null;
  }

  getTabs() {
    let tabs = ls.getItem(__WEBPACK_IMPORTED_MODULE_0_config__["lsPostTabKey"]) || '';
    const [tabsData, timestamp] = tabs.split('___');
    if (!tabs || !timestamp || +new Date() - timestamp >= __WEBPACK_IMPORTED_MODULE_0_config__["lsPostTabExpiration"]) return [];

    return tabsData.split(',').map(tab => {
      const [id, title, url, slug] = tab.split(':');
      return { id, title, url, slug };
    });
  }

  setTabs(tabs) {
    ls.setItem(__WEBPACK_IMPORTED_MODULE_0_config__["lsPostTabKey"], tabs.length ? tabs.map(tab => `${tab.id}:${tab.title}:${tab.url}:${tab.slug}`).join(',') + '___' + +new Date() : '');
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
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_config__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stores__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(0);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




const ls = localStorage;

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
    let lsPosts = ls.getItem(__WEBPACK_IMPORTED_MODULE_0_config__["lsPostsKey"]);
    lsPosts = lsPosts ? JSON.parse(lsPosts) : {};

    const post = lsPosts[id];
    const useable = post && +new Date() - post.timestamp <= __WEBPACK_IMPORTED_MODULE_0_config__["lsPostsExpiration"];

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
    let lsPosts = ls.getItem(__WEBPACK_IMPORTED_MODULE_0_config__["lsPostsKey"]);
    lsPosts = lsPosts ? JSON.parse(lsPosts) : {};
    console.log('[deleted post success]:', lsPosts[id].title);

    delete lsPosts[id];

    ls.setItem(__WEBPACK_IMPORTED_MODULE_0_config__["lsPostsKey"], JSON.stringify(lsPosts));
  }

  cachePost(id, post) {
    if (post.fromCache) return;

    let lsPosts = ls.getItem(__WEBPACK_IMPORTED_MODULE_0_config__["lsPostsKey"]);
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
    ls.setItem(__WEBPACK_IMPORTED_MODULE_0_config__["lsPostsKey"], JSON.stringify(lsPosts));
  }
});

/***/ }),
/* 15 */
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

var _invariant = __webpack_require__(16);

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__(17);

var _PathUtils = __webpack_require__(6);

var _createTransitionManager = __webpack_require__(20);

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _DOMUtils = __webpack_require__(21);

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
/* 16 */
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
/* 17 */
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

var _resolvePathname = __webpack_require__(18);

var _resolvePathname2 = _interopRequireDefault(_resolvePathname);

var _valueEqual = __webpack_require__(19);

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
/* 18 */
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
/* 19 */
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
/* 20 */
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
/* 21 */
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
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_config__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_config__);



$(document).ready(function () {
  const $sidebar = $('#J-sidebar-header');
  const $body = $('body');
  const $sidebarBody = $('#J-side-bar-body');
  let isSearchShowing = false;
  let isSideBodyShowing = true;

  $body.addClass('theme-' + __WEBPACK_IMPORTED_MODULE_1_config__["theme"]);

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
/* 23 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blog_tree__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(27);
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
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(26);
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
/* 26 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);


$(function () {
  const $readingTime = $(".J-reading-time");

  emitter.on("refresh-reading-time", ({ time }) => {
    $readingTime.html(time);
  });
});

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__history__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(0);





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
/* 31 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGZjMGFiZDM0NDJlNjk4ODY1MGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9oaXN0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy93YXJuaW5nL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9QYXRoVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dob3N0Y29kZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lbWl0dGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9taXR0L2Rpc3QvbWl0dC5lcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvcG9zdC10YWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvcG9zdC10YWIvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmVzL1RhYlN0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZXMvUG9zdFN0b3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oaXN0b3J5L2NyZWF0ZUJyb3dzZXJIaXN0b3J5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbnZhcmlhbnQvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9Mb2NhdGlvblV0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXBhdGhuYW1lL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWx1ZS1lcXVhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9ET01VdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9wYXJ0aWFscy9zaWRlLWJhci1oZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvc2lkZS1iYXItaGVhZGVyL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvc2lkZS1iYXItYm9keS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYXJ0aWFscy9zaWRlLWJhci1ib2R5L2Jsb2ctdHJlZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYXJ0aWFscy9zaWRlLWJhci1ib2R5L2Jsb2ctdHJlZS9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3BhcnRpYWxzL3NpZGUtYmFyLWJvZHkvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9wYXJ0aWFscy9mb290ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvZm9vdGVyL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvcG9zdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYXJ0aWFscy9wb3N0L3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvcG9zdC1uYXYvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9wYXJ0aWFscy9ob21lL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvYXV0aG9yL3N0eWxlLnNjc3MiXSwibmFtZXMiOlsiJGJvZHkiLCIkIiwiaXNIb21lUGFnZSIsImlzIiwiaXNQb3N0UGFnZSIsImhTY3JvbGwiLCJlbCIsImNvbnNvbGUiLCJlcnJvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aGVlbCIsImUiLCJkZWx0YSIsIndoZWVsRGVsdGEiLCJkZWx0YVkiLCJzY3JvbGxMZWZ0IiwicHJldmVudERlZmF1bHQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZm9ybWF0IiwidGVtcGxhdGUiLCJ2YXJzIiwicmVwbGFjZSIsIl8iLCJuYW1lIiwidmFsdWUiLCJ0cmltIiwidG9MZW4iLCJzb3VyY2UiLCJsZW4iLCJBcnJheSIsInByb3RvdHlwZSIsImpvaW4iLCJjYWxsIiwibGVuZ3RoIiwic2xpY2UiLCJmb3JtYXREYXRlIiwiZGF0ZSIsImtleSIsIkRhdGUiLCJEQVkiLCJZIiwiZ2V0RnVsbFllYXIiLCJ5IiwiTSIsImdldE1vbnRoIiwiZCIsImdldERhdGUiLCJEIiwiZ2V0RGF5IiwiSCIsImdldEhvdXJzIiwibSIsImdldE1pbnV0ZXMiLCJzIiwiZ2V0U2Vjb25kcyIsImNyZWF0ZUhpc3RvcnkiLCJ0YWJTdG9yZSIsInBvc3RTdG9yZSIsIndpbmRvdyIsInN0b3JlcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJsc1Bvc3RUYWJLZXkiLCJsc1Bvc3RUYWJFeHBpcmF0aW9uIiwibHNUaGVtZUtleSIsImxzUG9zdHNLZXkiLCJsc1Bvc3RzRXhwaXJhdGlvbiIsInRoZW1lIiwid2FybmluZyIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsImNvbmRpdGlvbiIsImFyZ3MiLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJFcnJvciIsInRlc3QiLCJhcmdJbmRleCIsIm1lc3NhZ2UiLCJ4IiwiY2FjaGVkU2V0VGltZW91dCIsImNhY2hlZENsZWFyVGltZW91dCIsImRlZmF1bHRTZXRUaW1vdXQiLCJkZWZhdWx0Q2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsInJ1blRpbWVvdXQiLCJmdW4iLCJydW5DbGVhclRpbWVvdXQiLCJtYXJrZXIiLCJxdWV1ZSIsImRyYWluaW5nIiwiY3VycmVudFF1ZXVlIiwicXVldWVJbmRleCIsImNsZWFuVXBOZXh0VGljayIsImNvbmNhdCIsImRyYWluUXVldWUiLCJ0aW1lb3V0IiwicnVuIiwibmV4dFRpY2siLCJpIiwicHVzaCIsIkl0ZW0iLCJhcnJheSIsImFwcGx5IiwidGl0bGUiLCJicm93c2VyIiwiYXJndiIsInZlcnNpb24iLCJ2ZXJzaW9ucyIsIm5vb3AiLCJvbiIsImFkZExpc3RlbmVyIiwib25jZSIsIm9mZiIsInJlbW92ZUxpc3RlbmVyIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiZW1pdCIsInByZXBlbmRMaXN0ZW5lciIsInByZXBlbmRPbmNlTGlzdGVuZXIiLCJsaXN0ZW5lcnMiLCJiaW5kaW5nIiwiY3dkIiwiY2hkaXIiLCJkaXIiLCJ1bWFzayIsIl9fZXNNb2R1bGUiLCJhZGRMZWFkaW5nU2xhc2giLCJwYXRoIiwiY2hhckF0Iiwic3RyaXBMZWFkaW5nU2xhc2giLCJzdWJzdHIiLCJoYXNCYXNlbmFtZSIsInByZWZpeCIsIlJlZ0V4cCIsInN0cmlwQmFzZW5hbWUiLCJzdHJpcFRyYWlsaW5nU2xhc2giLCJwYXJzZVBhdGgiLCJwYXRobmFtZSIsInNlYXJjaCIsImhhc2giLCJoYXNoSW5kZXgiLCJpbmRleE9mIiwic2VhcmNoSW5kZXgiLCJjcmVhdGVQYXRoIiwibG9jYXRpb24iLCJlbWl0dGVyIiwibWl0dCIsImFsbCIsIk9iamVjdCIsImNyZWF0ZSIsInR5cGUiLCJoYW5kbGVyIiwic3BsaWNlIiwiZXZ0IiwibWFwIiwiJHBvc3RUYWJzIiwiJHNjcm9sbFdyYXAiLCJuZFNjcm9sbFdyYXAiLCJnZXQiLCJwb3N0IiwidGFicyIsImdldFRhYnMiLCJmaWx0ZXIiLCJ0YWIiLCJpZCIsInNldFRhYnMiLCJhY3RpdmUiLCJhY3RpdmVJZCIsImN1cnJlbnRUYWIiLCIkYWN0aXZlIiwiaHRtbCIsInNsdWciLCJmaW5kIiwiaGlzdG9yeSIsInVybCIsInNldEN1cnJlbnRUYWIiLCJzY3JvbGwydmlldyIsInN0b3BQcm9wYWdhdGlvbiIsImRlbGV0ZVRhYkl0ZW0iLCJwYXJlbnQiLCJkYXRhIiwiJHRoaXMiLCJhZGRDbGFzcyIsInNpYmxpbmdzIiwicmVtb3ZlQ2xhc3MiLCJ3cmFwV2lkdGgiLCJ3aWR0aCIsIndyYXBTY3JvbGxMZWZ0Iiwid3JhcFJpZ2h0IiwidGhyZXNob2xkIiwibmRBY3RpdmUiLCJhY3RpdmVXaWR0aCIsIm91dGVyV2lkdGgiLCJhY3RpdmVMZWZ0Iiwib2Zmc2V0TGVmdCIsImFjdGl2ZVJpZ2h0IiwibHMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidGFic0RhdGEiLCJ0aW1lc3RhbXAiLCJzcGxpdCIsInNldEl0ZW0iLCJuZXh0VGFiIiwiaXNDdXJyZW50VGFiIiwiZGVsZXRlZElkeCIsImZpbmRJbmRleCIsImlkeCIsImhyZWYiLCJmZXRjaFBvc3QiLCJjYWNoZSIsImZyb21DYWNoZSIsIkRlZmVycmVkIiwicmVzb2x2ZSIsImdob3N0IiwiYXBpIiwiaW5jbHVkZSIsImZhaWwiLCJlcnIiLCJsb2ciLCJzdGF0dXMiLCJkb25lIiwicG9zdHMiLCJjYWNoZVBvc3QiLCJsc1Bvc3RzIiwiSlNPTiIsInBhcnNlIiwidXNlYWJsZSIsImluZm8iLCJhdXRob3IiLCJkZWxldGVQb3N0RnJvbUNhY2hlIiwic3RyaW5naWZ5IiwiaWRzIiwia2V5cyIsInNob3VsZERlbGV0ZUlkIiwic29ydCIsImEiLCJiIiwiaXRlbSIsInNoaWZ0IiwiX3R5cGVvZiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwib2JqIiwiY29uc3RydWN0b3IiLCJfZXh0ZW5kcyIsImFzc2lnbiIsInRhcmdldCIsImhhc093blByb3BlcnR5IiwiX3dhcm5pbmciLCJyZXF1aXJlIiwiX3dhcm5pbmcyIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl9pbnZhcmlhbnQiLCJfaW52YXJpYW50MiIsIl9Mb2NhdGlvblV0aWxzIiwiX1BhdGhVdGlscyIsIl9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlciIsIl9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlcjIiLCJfRE9NVXRpbHMiLCJkZWZhdWx0IiwiUG9wU3RhdGVFdmVudCIsIkhhc2hDaGFuZ2VFdmVudCIsImdldEhpc3RvcnlTdGF0ZSIsInN0YXRlIiwiY3JlYXRlQnJvd3Nlckhpc3RvcnkiLCJwcm9wcyIsImNhblVzZURPTSIsImdsb2JhbEhpc3RvcnkiLCJjYW5Vc2VIaXN0b3J5Iiwic3VwcG9ydHNIaXN0b3J5IiwibmVlZHNIYXNoQ2hhbmdlTGlzdGVuZXIiLCJzdXBwb3J0c1BvcFN0YXRlT25IYXNoQ2hhbmdlIiwiX3Byb3BzJGZvcmNlUmVmcmVzaCIsImZvcmNlUmVmcmVzaCIsIl9wcm9wcyRnZXRVc2VyQ29uZmlybSIsImdldFVzZXJDb25maXJtYXRpb24iLCJnZXRDb25maXJtYXRpb24iLCJfcHJvcHMka2V5TGVuZ3RoIiwia2V5TGVuZ3RoIiwiYmFzZW5hbWUiLCJnZXRET01Mb2NhdGlvbiIsImhpc3RvcnlTdGF0ZSIsIl9yZWYiLCJfd2luZG93JGxvY2F0aW9uIiwiY3JlYXRlTG9jYXRpb24iLCJjcmVhdGVLZXkiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJ0cmFuc2l0aW9uTWFuYWdlciIsInNldFN0YXRlIiwibmV4dFN0YXRlIiwibm90aWZ5TGlzdGVuZXJzIiwiYWN0aW9uIiwiaGFuZGxlUG9wU3RhdGUiLCJldmVudCIsImlzRXh0cmFuZW91c1BvcHN0YXRlRXZlbnQiLCJoYW5kbGVQb3AiLCJoYW5kbGVIYXNoQ2hhbmdlIiwiZm9yY2VOZXh0UG9wIiwiY29uZmlybVRyYW5zaXRpb25UbyIsIm9rIiwicmV2ZXJ0UG9wIiwiZnJvbUxvY2F0aW9uIiwidG9Mb2NhdGlvbiIsInRvSW5kZXgiLCJhbGxLZXlzIiwiZnJvbUluZGV4IiwiZ28iLCJpbml0aWFsTG9jYXRpb24iLCJjcmVhdGVIcmVmIiwicHVzaFN0YXRlIiwicHJldkluZGV4IiwibmV4dEtleXMiLCJyZXBsYWNlU3RhdGUiLCJuIiwiZ29CYWNrIiwiZ29Gb3J3YXJkIiwibGlzdGVuZXJDb3VudCIsImNoZWNrRE9NTGlzdGVuZXJzIiwiaXNCbG9ja2VkIiwiYmxvY2siLCJwcm9tcHQiLCJ1bmJsb2NrIiwic2V0UHJvbXB0IiwibGlzdGVuIiwibGlzdGVuZXIiLCJ1bmxpc3RlbiIsImFwcGVuZExpc3RlbmVyIiwiaW52YXJpYW50IiwiYyIsImYiLCJmcmFtZXNUb1BvcCIsImxvY2F0aW9uc0FyZUVxdWFsIiwiX3Jlc29sdmVQYXRobmFtZSIsIl9yZXNvbHZlUGF0aG5hbWUyIiwiX3ZhbHVlRXF1YWwiLCJfdmFsdWVFcXVhbDIiLCJjdXJyZW50TG9jYXRpb24iLCJkZWNvZGVVUkkiLCJVUklFcnJvciIsImlzQWJzb2x1dGUiLCJzcGxpY2VPbmUiLCJsaXN0IiwiaW5kZXgiLCJrIiwicG9wIiwicmVzb2x2ZVBhdGhuYW1lIiwidG8iLCJmcm9tIiwidG9QYXJ0cyIsImZyb21QYXJ0cyIsImlzVG9BYnMiLCJpc0Zyb21BYnMiLCJtdXN0RW5kQWJzIiwiaGFzVHJhaWxpbmdTbGFzaCIsImxhc3QiLCJ1cCIsInBhcnQiLCJ1bnNoaWZ0IiwicmVzdWx0IiwidmFsdWVFcXVhbCIsImlzQXJyYXkiLCJldmVyeSIsImFUeXBlIiwiYlR5cGUiLCJhVmFsdWUiLCJ2YWx1ZU9mIiwiYlZhbHVlIiwiYUtleXMiLCJiS2V5cyIsImNyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyIiwibmV4dFByb21wdCIsImNhbGxiYWNrIiwiZm4iLCJpc0FjdGl2ZSIsIl9sZW4iLCJfa2V5IiwiZm9yRWFjaCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIm5vZGUiLCJhdHRhY2hFdmVudCIsImRldGFjaEV2ZW50IiwiY29uZmlybSIsInVhIiwibmF2aWdhdG9yIiwidXNlckFnZW50Iiwic3VwcG9ydHNHb1dpdGhvdXRSZWxvYWRVc2luZ0hhc2giLCJyZWFkeSIsIiRzaWRlYmFyIiwiJHNpZGViYXJCb2R5IiwiaXNTZWFyY2hTaG93aW5nIiwiaXNTaWRlQm9keVNob3dpbmciLCJzaWRlYmFyQm9keUhpZGUiLCJzaWRlYmFyQm9keVNob3ciLCJ0aGVuIiwiJHNlYXJjaEJveCIsIiRibG9nVHJlZSIsIiRzZWFyY2hJbnB1dCIsIiR0YWdUcmVlIiwiaXNTZWFyY2giLCJoaWRlIiwiZm9jdXMiLCJzaG93IiwiJGFsbFBvc3RzIiwiJHVudGFnZWRQb3N0cyIsInRhZ3MiLCJ1bnRhZ2VkIiwiZWFjaCIsIiRwb3N0IiwiJHRhZ3MiLCJpbmNsdWRlcyIsIm91dGVySFRNTCIsInRhZyIsImlubmVyVGV4dCIsImNzcyIsImhlaWdodCIsIiRwb3N0cyIsInRvZ2dsZUNsYXNzIiwicGFyZW50cyIsImF0dHIiLCIkcmVhZGluZ1RpbWUiLCJ0aW1lIiwiJHBvc3RXcmFwIiwiJHRpdGxlIiwiJGNvbnRlbnQiLCIkbWV0YSIsIiRmZWF0dXJlSW1hZ2UiLCJvcmlnaW4iLCJoaWdobGlnaHQiLCJwb3N0SWQiLCJwdWJsaXNoZWRfYXQiLCJmZWF0dXJlX2ltYWdlIiwiY29tbWVudF9pZCIsImJhY2tncm91bmRJbWFnZSIsInJlZnJlc2hDb21tZW50IiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsImhsanMiLCJoaWdobGlnaHRCbG9jayJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxXQUFXLEVBQUU7QUFDdkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhEQUFzRCw2QkFBNkIsWUFBWTtBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7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QkFBVWEsT0FBVixDQUFrQixFQUFFQyxXQUFXLENBQWIsRUFBbEIsRUFBb0MsR0FBcEM7QUFDRCxLQXZCRDtBQXdCRCxHQTdCRDs7QUErQkEsV0FBU1IsU0FBVCxHQUFxQjtBQUNuQmhiLE1BQUUsVUFBRixFQUFjMlosSUFBZCxDQUFtQixVQUFTdlQsQ0FBVCxFQUFZK04sS0FBWixFQUFtQjtBQUNwQzFRLGFBQU9nWSxJQUFQLElBQWVoWSxPQUFPZ1ksSUFBUCxDQUFZQyxjQUFaLENBQTJCdkgsS0FBM0IsQ0FBZjtBQUNELEtBRkQ7QUFHRDtBQUNGLENBN0RELEU7Ozs7OztBQ0xBLHlDOzs7Ozs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLHlDIiwiZmlsZSI6Imdob3N0Y29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl07XG4gXHR3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSBmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhjaHVua0lkcywgbW9yZU1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzKSB7XG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXSwgcmVzdWx0O1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyk7XG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHR9O1xuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3RzIHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdDE6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhID09PSAwKSB7XG4gXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHsgcmVzb2x2ZSgpOyB9KTtcbiBcdFx0fVxuXG4gXHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG4gXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRDaHVua0RhdGFbMl07XG4gXHRcdH1cblxuIFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG4gXHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF07XG4gXHRcdH0pO1xuIFx0XHRpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlO1xuXG4gXHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcbiBcdFx0dmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuIFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gXHRcdHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gXHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04JztcbiBcdFx0c2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiBcdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjAwMDA7XG5cbiBcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcbiBcdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG4gXHRcdH1cbiBcdFx0c2NyaXB0LnNyYyA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiY2h1bmsuXCIgKyAoe31bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuXCIgKyB7XCIwXCI6XCIxN2NiN1wifVtjaHVua0lkXSArIFwiLmpzXCI7XG4gXHRcdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChvblNjcmlwdENvbXBsZXRlLCAxMjAwMDApO1xuIFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlO1xuIFx0XHRmdW5jdGlvbiBvblNjcmlwdENvbXBsZXRlKCkge1xuIFx0XHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cbiBcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuIFx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiBcdFx0XHR2YXIgY2h1bmsgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdFx0aWYoY2h1bmsgIT09IDApIHtcbiBcdFx0XHRcdGlmKGNodW5rKSB7XG4gXHRcdFx0XHRcdGNodW5rWzFdKG5ldyBFcnJvcignTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLicpKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcbiBcdFx0XHR9XG4gXHRcdH07XG4gXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcblxuIFx0XHRyZXR1cm4gcHJvbWlzZTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Fzc2V0cy9idWlsdC9cIjtcblxuIFx0Ly8gb24gZXJyb3IgZnVuY3Rpb24gZm9yIGFzeW5jIGxvYWRpbmdcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyB0aHJvdyBlcnI7IH07XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOGZjMGFiZDM0NDJlNjk4ODY1MGUiLCJjb25zdCAkYm9keSA9ICQoJ2JvZHknKVxuXG5leHBvcnQgY29uc3QgaXNIb21lUGFnZSA9ICgpID0+ICRib2R5LmlzKCcuaG9tZS10ZW1wbGF0ZScpXG5leHBvcnQgY29uc3QgaXNQb3N0UGFnZSA9ICgpID0+ICRib2R5LmlzKCcucG9zdC10ZW1wbGF0ZScpXG5cbi8qKlxuICogaG9yaXpvbnRhbGx5IHNjcm9sbFxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gKlxuICogQGV4YW1wbGVcbiAqICBjb25zdCBzdG9wSFNjcm9sbCA9IGhTY3JvbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0otaHNjcm9sbC1lbCcpKVxuICogIHN0b3BIU2Nyb2xsKCkgLy8gcmVtb3ZlRXZlbnRMaXN0ZW5lclxuICovXG5leHBvcnQgZnVuY3Rpb24gaFNjcm9sbChlbCkge1xuICBpZiAoIWVsKSB7XG4gICAgY29uc29sZS5lcnJvcignTXVzdCBzcGVjaWZ5IGVsIScpXG4gICAgcmV0dXJuXG4gIH1cblxuICBlbC5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIHdoZWVsKVxuXG4gIGZ1bmN0aW9uIHdoZWVsKGUpIHtcbiAgICBjb25zdCBkZWx0YSA9IGUud2hlZWxEZWx0YSA/IGUud2hlZWxEZWx0YSA6IC0xICogZS5kZWx0YVlcbiAgICBlbC5zY3JvbGxMZWZ0ICs9IC1kZWx0YVxuICAgIGUucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgcmV0dXJuICgpID0+IGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3doZWVsJywgd2hlZWwpXG59XG5cbmV4cG9ydCBjb25zdCBmb3JtYXQgPSBmdW5jdGlvbih0ZW1wbGF0ZSwgdmFycykge1xuICByZXR1cm4gdGVtcGxhdGUucmVwbGFjZSgvXFwkXFx7KFteXFx7XFx9XSopXFx9L2csIGZ1bmN0aW9uKF8sIG5hbWUpIHtcbiAgICB2YXIgdmFsdWUgPSB2YXJzW25hbWUudHJpbSgpXVxuICAgIHJldHVybiB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZSArICcnXG4gIH0pXG59XG5cbmNvbnN0IHRvTGVuID0gZnVuY3Rpb24oc291cmNlLCBsZW4pIHtcbiAgcmV0dXJuIChcbiAgICBBcnJheS5wcm90b3R5cGUuam9pbi5jYWxsKFxuICAgICAge1xuICAgICAgICBsZW5ndGg6IGxlbiArIDFcbiAgICAgIH0sXG4gICAgICAnMCdcbiAgICApICsgc291cmNlXG4gICkuc2xpY2UoLWxlbilcbn1cblxuZXhwb3J0IGNvbnN0IGZvcm1hdERhdGUgPSBmdW5jdGlvbih0ZW1wbGF0ZSwgZGF0ZSkge1xuICBpZiAoIWRhdGUpIHJldHVybiAnJ1xuICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UoL1xcJChbYS16QS1aXSkvZywgZnVuY3Rpb24oXywga2V5KSB7XG4gICAgcmV0dXJuICckeycgKyBrZXkgKyAnfSdcbiAgfSlcbiAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpXG4gIHZhciBEQVkgPSBbJ+aXpScsICfkuIAnLCAn5LqMJywgJ+S4iScsICflm5snLCAn5LqUJywgJ+WFrSddXG4gIHJldHVybiBmb3JtYXQodGVtcGxhdGUsIHtcbiAgICBZOiB0b0xlbihkYXRlLmdldEZ1bGxZZWFyKCksIDQpLFxuICAgIHk6IHRvTGVuKGRhdGUuZ2V0RnVsbFllYXIoKSwgMiksXG4gICAgTTogdG9MZW4oZGF0ZS5nZXRNb250aCgpICsgMSwgMiksXG4gICAgZDogdG9MZW4oZGF0ZS5nZXREYXRlKCksIDIpLFxuICAgIEQ6IERBWVtkYXRlLmdldERheSgpXSxcbiAgICBIOiB0b0xlbihkYXRlLmdldEhvdXJzKCksIDIpLFxuICAgIG06IHRvTGVuKGRhdGUuZ2V0TWludXRlcygpLCAyKSxcbiAgICBzOiB0b0xlbihkYXRlLmdldFNlY29uZHMoKSwgMilcbiAgfSlcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy5qcyIsImltcG9ydCBjcmVhdGVIaXN0b3J5IGZyb20gXCJoaXN0b3J5L2NyZWF0ZUJyb3dzZXJIaXN0b3J5XCJcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSGlzdG9yeSgpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hpc3RvcnkuanMiLCJpbXBvcnQgVGFiU3RvcmUgZnJvbSAnLi9UYWJTdG9yZSdcbmltcG9ydCBQb3N0U3RvcmUgZnJvbSAnLi9Qb3N0U3RvcmUnXG5cbmV4cG9ydCBjb25zdCB0YWJTdG9yZSA9IG5ldyBUYWJTdG9yZSgpXG5leHBvcnQgY29uc3QgcG9zdFN0b3JlID0gbmV3IFBvc3RTdG9yZSgpXG5cbndpbmRvdy5zdG9yZXMgPSB7XG4gIHRhYlN0b3JlLFxuICBwb3N0U3RvcmVcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmVzL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGxvY2Fsc3RvcmFnZSB0YWIga2V5XG4gIGxzUG9zdFRhYktleTogJ2dob3N0Y29kZS1wb3N0LXRhYnMnLFxuICAvLyB0YWIgZXhwaXJhdGlvbiAxZFxuICBsc1Bvc3RUYWJFeHBpcmF0aW9uOiAyNCAqIDYwICogNjAgKiAxMDAwLFxuICAvLyBsb2NhbHN0b3JhZ2UgdGhlbWUga2V5XG4gIGxzVGhlbWVLZXk6ICdnaG9zdGNvZGUtdGhlbWUnLFxuICAvLyBsb2NhbHN0b3JhZ2UgcG9zdCBrZXlcbiAgbHNQb3N0c0tleTogJ2dob3N0Y29kZS1wb3N0cycsXG4gIC8vIHBvc3QgZXhwaXJhdGlvbiB0aW1lIDFtaW5cbiAgbHNQb3N0c0V4cGlyYXRpb246IDEgKiA2MCAqIDEwMDAsXG4gIC8vIHRoZW1lIG5hbWUgZnJvbSAuL3RoZW1lcy9yZXN1bHQuanNvblxuICB0aGVtZTogJ2RhcmtfZGVmYXVsdCcsXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb25maWcuanMiLCIvKipcbiAqIENvcHlyaWdodCAyMDE0LTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciB3YXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgd2FybmluZyA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhcmdzKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgYXJncyA9IG5ldyBBcnJheShsZW4gPiAyID8gbGVuIC0gMiA6IDApO1xuICAgIGZvciAodmFyIGtleSA9IDI7IGtleSA8IGxlbjsga2V5KyspIHtcbiAgICAgIGFyZ3Nba2V5IC0gMl0gPSBhcmd1bWVudHNba2V5XTtcbiAgICB9XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICtcbiAgICAgICAgJ21lc3NhZ2UgYXJndW1lbnQnXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChmb3JtYXQubGVuZ3RoIDwgMTAgfHwgKC9eW3NcXFddKiQvKS50ZXN0KGZvcm1hdCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1RoZSB3YXJuaW5nIGZvcm1hdCBzaG91bGQgYmUgYWJsZSB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzICcgK1xuICAgICAgICAnd2FybmluZy4gUGxlYXNlLCB1c2UgYSBtb3JlIGRlc2NyaXB0aXZlIGZvcm1hdCB0aGFuOiAnICsgZm9ybWF0XG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgICAgfSk7XG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgIH0gY2F0Y2goeCkge31cbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2FybmluZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy93YXJuaW5nL2Jyb3dzZXIuanMiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBhZGRMZWFkaW5nU2xhc2ggPSBleHBvcnRzLmFkZExlYWRpbmdTbGFzaCA9IGZ1bmN0aW9uIGFkZExlYWRpbmdTbGFzaChwYXRoKSB7XG4gIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nID8gcGF0aCA6ICcvJyArIHBhdGg7XG59O1xuXG52YXIgc3RyaXBMZWFkaW5nU2xhc2ggPSBleHBvcnRzLnN0cmlwTGVhZGluZ1NsYXNoID0gZnVuY3Rpb24gc3RyaXBMZWFkaW5nU2xhc2gocGF0aCkge1xuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJyA/IHBhdGguc3Vic3RyKDEpIDogcGF0aDtcbn07XG5cbnZhciBoYXNCYXNlbmFtZSA9IGV4cG9ydHMuaGFzQmFzZW5hbWUgPSBmdW5jdGlvbiBoYXNCYXNlbmFtZShwYXRoLCBwcmVmaXgpIHtcbiAgcmV0dXJuIG5ldyBSZWdFeHAoJ14nICsgcHJlZml4ICsgJyhcXFxcL3xcXFxcP3wjfCQpJywgJ2knKS50ZXN0KHBhdGgpO1xufTtcblxudmFyIHN0cmlwQmFzZW5hbWUgPSBleHBvcnRzLnN0cmlwQmFzZW5hbWUgPSBmdW5jdGlvbiBzdHJpcEJhc2VuYW1lKHBhdGgsIHByZWZpeCkge1xuICByZXR1cm4gaGFzQmFzZW5hbWUocGF0aCwgcHJlZml4KSA/IHBhdGguc3Vic3RyKHByZWZpeC5sZW5ndGgpIDogcGF0aDtcbn07XG5cbnZhciBzdHJpcFRyYWlsaW5nU2xhc2ggPSBleHBvcnRzLnN0cmlwVHJhaWxpbmdTbGFzaCA9IGZ1bmN0aW9uIHN0cmlwVHJhaWxpbmdTbGFzaChwYXRoKSB7XG4gIHJldHVybiBwYXRoLmNoYXJBdChwYXRoLmxlbmd0aCAtIDEpID09PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGg7XG59O1xuXG52YXIgcGFyc2VQYXRoID0gZXhwb3J0cy5wYXJzZVBhdGggPSBmdW5jdGlvbiBwYXJzZVBhdGgocGF0aCkge1xuICB2YXIgcGF0aG5hbWUgPSBwYXRoIHx8ICcvJztcbiAgdmFyIHNlYXJjaCA9ICcnO1xuICB2YXIgaGFzaCA9ICcnO1xuXG4gIHZhciBoYXNoSW5kZXggPSBwYXRobmFtZS5pbmRleE9mKCcjJyk7XG4gIGlmIChoYXNoSW5kZXggIT09IC0xKSB7XG4gICAgaGFzaCA9IHBhdGhuYW1lLnN1YnN0cihoYXNoSW5kZXgpO1xuICAgIHBhdGhuYW1lID0gcGF0aG5hbWUuc3Vic3RyKDAsIGhhc2hJbmRleCk7XG4gIH1cblxuICB2YXIgc2VhcmNoSW5kZXggPSBwYXRobmFtZS5pbmRleE9mKCc/Jyk7XG4gIGlmIChzZWFyY2hJbmRleCAhPT0gLTEpIHtcbiAgICBzZWFyY2ggPSBwYXRobmFtZS5zdWJzdHIoc2VhcmNoSW5kZXgpO1xuICAgIHBhdGhuYW1lID0gcGF0aG5hbWUuc3Vic3RyKDAsIHNlYXJjaEluZGV4KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWU6IHBhdGhuYW1lLFxuICAgIHNlYXJjaDogc2VhcmNoID09PSAnPycgPyAnJyA6IHNlYXJjaCxcbiAgICBoYXNoOiBoYXNoID09PSAnIycgPyAnJyA6IGhhc2hcbiAgfTtcbn07XG5cbnZhciBjcmVhdGVQYXRoID0gZXhwb3J0cy5jcmVhdGVQYXRoID0gZnVuY3Rpb24gY3JlYXRlUGF0aChsb2NhdGlvbikge1xuICB2YXIgcGF0aG5hbWUgPSBsb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgIHNlYXJjaCA9IGxvY2F0aW9uLnNlYXJjaCxcbiAgICAgIGhhc2ggPSBsb2NhdGlvbi5oYXNoO1xuXG5cbiAgdmFyIHBhdGggPSBwYXRobmFtZSB8fCAnLyc7XG5cbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2ggIT09ICc/JykgcGF0aCArPSBzZWFyY2guY2hhckF0KDApID09PSAnPycgPyBzZWFyY2ggOiAnPycgKyBzZWFyY2g7XG5cbiAgaWYgKGhhc2ggJiYgaGFzaCAhPT0gJyMnKSBwYXRoICs9IGhhc2guY2hhckF0KDApID09PSAnIycgPyBoYXNoIDogJyMnICsgaGFzaDtcblxuICByZXR1cm4gcGF0aDtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2hpc3RvcnkvUGF0aFV0aWxzLmpzIiwiaW1wb3J0ICcuL2NvbXBvbmVudHMvZW1pdHRlcidcblxuaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJ1xuXG5pbXBvcnQgJ3BhcnRpYWxzL3Bvc3QtdGFiJ1xuaW1wb3J0ICdwYXJ0aWFscy9zaWRlLWJhci1oZWFkZXInXG5pbXBvcnQgJ3BhcnRpYWxzL3NpZGUtYmFyLWJvZHknXG5pbXBvcnQgJ3BhcnRpYWxzL2Zvb3RlcidcbmltcG9ydCAncGFydGlhbHMvcG9zdCdcbmltcG9ydCAncGFydGlhbHMvcG9zdC1uYXYnXG5pbXBvcnQgJ3BhcnRpYWxzL2hvbWUnXG5pbXBvcnQgJ3BhcnRpYWxzL2F1dGhvcidcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2hvc3Rjb2RlLmpzIiwiaW1wb3J0IG1pdHQgZnJvbSAnbWl0dCdcbndpbmRvdy5lbWl0dGVyID0gbWl0dCgpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvZW1pdHRlci9pbmRleC5qcyIsIi8vICAgICAgXG4vLyBBbiBldmVudCBoYW5kbGVyIGNhbiB0YWtlIGFuIG9wdGlvbmFsIGV2ZW50IGFyZ3VtZW50XG4vLyBhbmQgc2hvdWxkIG5vdCByZXR1cm4gYSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4vLyBBbiBhcnJheSBvZiBhbGwgY3VycmVudGx5IHJlZ2lzdGVyZWQgZXZlbnQgaGFuZGxlcnMgZm9yIGEgdHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbi8vIEEgbWFwIG9mIGV2ZW50IHR5cGVzIGFuZCB0aGVpciBjb3JyZXNwb25kaW5nIGV2ZW50IGhhbmRsZXJzLlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBcblxuLyoqIE1pdHQ6IFRpbnkgKH4yMDBiKSBmdW5jdGlvbmFsIGV2ZW50IGVtaXR0ZXIgLyBwdWJzdWIuXG4gKiAgQG5hbWUgbWl0dFxuICogIEByZXR1cm5zIHtNaXR0fVxuICovXG5mdW5jdGlvbiBtaXR0KGFsbCAgICAgICAgICAgICAgICAgKSB7XG5cdGFsbCA9IGFsbCB8fCBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG5cdHJldHVybiB7XG5cdFx0LyoqXG5cdFx0ICogUmVnaXN0ZXIgYW4gZXZlbnQgaGFuZGxlciBmb3IgdGhlIGdpdmVuIHR5cGUuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0gIHtTdHJpbmd9IHR5cGVcdFR5cGUgb2YgZXZlbnQgdG8gbGlzdGVuIGZvciwgb3IgYFwiKlwiYCBmb3IgYWxsIGV2ZW50c1xuXHRcdCAqIEBwYXJhbSAge0Z1bmN0aW9ufSBoYW5kbGVyIEZ1bmN0aW9uIHRvIGNhbGwgaW4gcmVzcG9uc2UgdG8gZ2l2ZW4gZXZlbnRcblx0XHQgKiBAbWVtYmVyT2YgbWl0dFxuXHRcdCAqL1xuXHRcdG9uOiBmdW5jdGlvbiBvbih0eXBlICAgICAgICAsIGhhbmRsZXIgICAgICAgICAgICAgICkge1xuXHRcdFx0KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBSZW1vdmUgYW4gZXZlbnQgaGFuZGxlciBmb3IgdGhlIGdpdmVuIHR5cGUuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0gIHtTdHJpbmd9IHR5cGVcdFR5cGUgb2YgZXZlbnQgdG8gdW5yZWdpc3RlciBgaGFuZGxlcmAgZnJvbSwgb3IgYFwiKlwiYFxuXHRcdCAqIEBwYXJhbSAge0Z1bmN0aW9ufSBoYW5kbGVyIEhhbmRsZXIgZnVuY3Rpb24gdG8gcmVtb3ZlXG5cdFx0ICogQG1lbWJlck9mIG1pdHRcblx0XHQgKi9cblx0XHRvZmY6IGZ1bmN0aW9uIG9mZih0eXBlICAgICAgICAsIGhhbmRsZXIgICAgICAgICAgICAgICkge1xuXHRcdFx0aWYgKGFsbFt0eXBlXSkge1xuXHRcdFx0XHRhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogSW52b2tlIGFsbCBoYW5kbGVycyBmb3IgdGhlIGdpdmVuIHR5cGUuXG5cdFx0ICogSWYgcHJlc2VudCwgYFwiKlwiYCBoYW5kbGVycyBhcmUgaW52b2tlZCBhZnRlciB0eXBlLW1hdGNoZWQgaGFuZGxlcnMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSAgVGhlIGV2ZW50IHR5cGUgdG8gaW52b2tlXG5cdFx0ICogQHBhcmFtIHtBbnl9IFtldnRdICBBbnkgdmFsdWUgKG9iamVjdCBpcyByZWNvbW1lbmRlZCBhbmQgcG93ZXJmdWwpLCBwYXNzZWQgdG8gZWFjaCBoYW5kbGVyXG5cdFx0ICogQG1lbWJlcm9mIG1pdHRcblx0XHQgKi9cblx0XHRlbWl0OiBmdW5jdGlvbiBlbWl0KHR5cGUgICAgICAgICwgZXZ0ICAgICApIHtcblx0XHRcdChhbGxbdHlwZV0gfHwgW10pLm1hcChmdW5jdGlvbiAoaGFuZGxlcikgeyBoYW5kbGVyKGV2dCk7IH0pO1xuXHRcdFx0KGFsbFsnKiddIHx8IFtdKS5tYXAoZnVuY3Rpb24gKGhhbmRsZXIpIHsgaGFuZGxlcih0eXBlLCBldnQpOyB9KTtcblx0XHR9XG5cdH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1pdHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1taXR0LmVzLmpzLm1hcFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL21pdHQvZGlzdC9taXR0LmVzLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvaW5kZXguc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnXG5pbXBvcnQgeyB0YWJTdG9yZSB9IGZyb20gJyMvc3RvcmVzJ1xuaW1wb3J0IGhpc3RvcnkgZnJvbSAnIy9oaXN0b3J5J1xuaW1wb3J0IHsgaFNjcm9sbCwgaXNQb3N0UGFnZSB9IGZyb20gJyMvdXRpbHMnXG5cbiQoZnVuY3Rpb24oKSB7XG4gIGlmICghaXNQb3N0UGFnZSgpKSByZXR1cm5cblxuICBsZXQgJHBvc3RUYWJzID0gJCgnI0otcG9zdC10YWInKVxuICBjb25zdCAkc2Nyb2xsV3JhcCA9ICQoJy5KLXBvc3QtdGFiLXNjcm9sbGVyLXdyYXAnKVxuICBjb25zdCBuZFNjcm9sbFdyYXAgPSAkc2Nyb2xsV3JhcC5nZXQoMClcblxuICBlbWl0dGVyLm9uKCdhZGQtcG9zdC10YWInLCBwb3N0ID0+IHtcbiAgICBjb25zdCB0YWJzID0gdGFiU3RvcmUuZ2V0VGFicygpXG4gICAgaWYgKCF0YWJzLmZpbHRlcih0YWIgPT4gdGFiLmlkID09PSBwb3N0LmlkKS5sZW5ndGgpIHtcbiAgICAgIHRhYnMucHVzaCh7IC4uLnBvc3QgfSlcblxuICAgICAgdGFiU3RvcmUuc2V0VGFicyh0YWJzKVxuICAgIH1cblxuICAgIGVtaXR0ZXIuZW1pdCgndGFiLXJlZnJlc2gnLCB7IC4uLnBvc3QgfSlcbiAgfSlcblxuICBlbWl0dGVyLm9uKCd0YWItcmVmcmVzaCcsIChhY3RpdmUgPSB7fSkgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZUlkID0gYWN0aXZlLmlkXG4gICAgY29uc3QgdGFicyA9IHRhYlN0b3JlLmdldFRhYnMoKVxuICAgIGNvbnN0IGN1cnJlbnRUYWIgPSB0YWJTdG9yZS5jdXJyZW50VGFiXG5cbiAgICBjb25zdCAkYWN0aXZlID0gJCgnI0otcG9zdC10YWInKVxuICAgICAgLmh0bWwoXG4gICAgICAgIHRhYnNcbiAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgdGFiID0+XG4gICAgICAgICAgICAgIGA8ZGl2IHRpdGxlPVwiJHt0YWIudGl0bGV9XCIgY2xhc3M9XCJKLXRhYi1pdGVtIGxpZ2h0IGhvdmVyLW9wYWNpdHkxIGZsZXgtaXRlbTAgc2luZ2xlLWxpbmUgaXRlbSAke2FjdGl2ZUlkID09PSB0YWIuaWQgPyAnYWN0aXZlJyA6ICcnfVwiIGRhdGEtaWQ9XCIke1xuICAgICAgICAgICAgICAgIHRhYi5pZFxuICAgICAgICAgICAgICB9XCI+JHt0YWIudGl0bGV9PGkgY2xhc3M9XCJjbG9zZSBKLXBvc3QtdGFiLWNsb3NlIGxpZ2h0ZXIgaG92ZXItb3BhY2l0eTFcIiBkYXRhLXNsdWc9XCIke3RhYi5zbHVnfVwiPjwvaT48L2Rpdj5gXG4gICAgICAgICAgKVxuICAgICAgICAgIC5qb2luKCcnKVxuICAgICAgKVxuICAgICAgLmZpbmQoJy5hY3RpdmUnKVxuXG4gICAgLy8gbm90IHJlZmV0Y2ggY3VycmVudCBwb3N0XG4gICAgaWYgKCFjdXJyZW50VGFiIHx8IGN1cnJlbnRUYWIuaWQgIT09IGFjdGl2ZUlkKSB7XG4gICAgICBoaXN0b3J5LnB1c2goYWN0aXZlLnVybCwgeyAuLi5hY3RpdmUgfSlcbiAgICAgIHRhYlN0b3JlLnNldEN1cnJlbnRUYWIoeyAuLi5hY3RpdmUgfSlcbiAgICB9XG5cbiAgICBzY3JvbGwydmlldygkYWN0aXZlKVxuICB9KVxuXG4gICRwb3N0VGFic1xuICAgIC5vbignY2xpY2snLCAnLkotcG9zdC10YWItY2xvc2UnLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICB0YWJTdG9yZS5kZWxldGVUYWJJdGVtKFxuICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgLnBhcmVudCgnLkotdGFiLWl0ZW0nKVxuICAgICAgICAgIC5kYXRhKCdpZCcpXG4gICAgICApXG4gICAgfSlcbiAgICAub24oJ2NsaWNrJywgJy5KLXRhYi1pdGVtJywgZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCAkdGhpcyA9ICQodGhpcylcbiAgICAgIGlmICgkdGhpcy5pcygnLmFjdGl2ZScpKSByZXR1cm5cblxuICAgICAgY29uc3QgaWQgPSAkdGhpcy5kYXRhKCdpZCcpXG4gICAgICBjb25zdCBjdXJyZW50VGFiID0gdGFiU3RvcmUuZ2V0VGFicygpLmZpbHRlcih0YWIgPT4gdGFiLmlkID09PSBpZClbMF0gfHwge31cblxuICAgICAgJHRoaXNcbiAgICAgICAgLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgICAgICAuc2libGluZ3MoKVxuICAgICAgICAucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICB0YWJTdG9yZS5zZXRDdXJyZW50VGFiKGN1cnJlbnRUYWIpXG4gICAgICBoaXN0b3J5LnB1c2goY3VycmVudFRhYi51cmwsIHsgLi4uY3VycmVudFRhYiB9KVxuXG4gICAgICBzY3JvbGwydmlldygkdGhpcylcbiAgICB9KVxuXG4gIC8qKlxuICAgKiBzY3JvbGwgc2VsZWN0ZWQgdGFiIGl0ZW0gaW50byB2aWV3IGlmIGl0IGlzIG91dCBvZiB2aWV3XG4gICAqL1xuICBmdW5jdGlvbiBzY3JvbGwydmlldygkYWN0aXZlKSB7XG4gICAgLy8gd3JhcCBlbGVtZW50XG4gICAgY29uc3Qgd3JhcFdpZHRoID0gJHNjcm9sbFdyYXAud2lkdGgoKVxuICAgIGNvbnN0IHdyYXBTY3JvbGxMZWZ0ID0gJHNjcm9sbFdyYXAuc2Nyb2xsTGVmdCgpXG4gICAgY29uc3Qgd3JhcFJpZ2h0ID0gd3JhcFdpZHRoICsgd3JhcFNjcm9sbExlZnRcbiAgICBjb25zdCB0aHJlc2hvbGQgPSAxMFxuXG4gICAgLy8gYWN0aXZlIGVsZW1lbnRcbiAgICBjb25zdCBuZEFjdGl2ZSA9ICRhY3RpdmUuZ2V0KDApXG4gICAgY29uc3QgYWN0aXZlV2lkdGggPSAkYWN0aXZlLm91dGVyV2lkdGgoKVxuICAgIGNvbnN0IGFjdGl2ZUxlZnQgPSBuZEFjdGl2ZS5vZmZzZXRMZWZ0XG4gICAgY29uc3QgYWN0aXZlUmlnaHQgPSBhY3RpdmVMZWZ0ICsgYWN0aXZlV2lkdGhcbiAgICBpZiAoYWN0aXZlUmlnaHQgPiB3cmFwV2lkdGggKyB3cmFwU2Nyb2xsTGVmdCkge1xuICAgICAgbmRTY3JvbGxXcmFwLnNjcm9sbExlZnQgPSBhY3RpdmVSaWdodCAtIHdyYXBXaWR0aCAtIHRocmVzaG9sZFxuICAgIH1cbiAgICBpZiAoYWN0aXZlTGVmdCA8PSB3cmFwU2Nyb2xsTGVmdCkge1xuICAgICAgbmRTY3JvbGxXcmFwLnNjcm9sbExlZnQgPSBhY3RpdmVMZWZ0IC0gdGhyZXNob2xkXG4gICAgfVxuICB9XG5cbiAgaFNjcm9sbCgkc2Nyb2xsV3JhcC5nZXQoMCkpXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFydGlhbHMvcG9zdC10YWIvaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGFydGlhbHMvcG9zdC10YWIvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiaW1wb3J0IHtsc1Bvc3RUYWJLZXksIGxzUG9zdFRhYkV4cGlyYXRpb259IGZyb20gJ2NvbmZpZydcbmNvbnN0IGxzID0gbG9jYWxTdG9yYWdlXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY3VycmVudFRhYiA9IG51bGxcblxuICBnZXRUYWJzKCkge1xuICAgIGxldCB0YWJzID0gbHMuZ2V0SXRlbShsc1Bvc3RUYWJLZXkpIHx8ICcnXG4gICAgY29uc3QgW3RhYnNEYXRhLCB0aW1lc3RhbXBdID0gdGFicy5zcGxpdCgnX19fJylcbiAgICBpZiAoIXRhYnMgfHwgIXRpbWVzdGFtcCB8fCArbmV3IERhdGUoKSAtIHRpbWVzdGFtcCA+PSBsc1Bvc3RUYWJFeHBpcmF0aW9uKSByZXR1cm4gW11cblxuICAgIHJldHVybiB0YWJzRGF0YS5zcGxpdCgnLCcpLm1hcCh0YWIgPT4ge1xuICAgICAgY29uc3QgW2lkLCB0aXRsZSwgdXJsLCBzbHVnXSA9IHRhYi5zcGxpdCgnOicpXG4gICAgICByZXR1cm4geyBpZCwgdGl0bGUsIHVybCwgc2x1ZyB9XG4gICAgfSlcbiAgfVxuXG4gIHNldFRhYnModGFicykge1xuICAgIGxzLnNldEl0ZW0obHNQb3N0VGFiS2V5LCB0YWJzLmxlbmd0aCA/IHRhYnMubWFwKHRhYiA9PiBgJHt0YWIuaWR9OiR7dGFiLnRpdGxlfToke3RhYi51cmx9OiR7dGFiLnNsdWd9YCkuam9pbignLCcpICsgJ19fXycgKyAoK25ldyBEYXRlKCkpIDogJycpXG4gIH1cblxuICBzZXRDdXJyZW50VGFiKHRhYikge1xuICAgIHRoaXMuY3VycmVudFRhYiA9IHRhYlxuICB9XG5cbiAgZGVsZXRlVGFiSXRlbShpZCkge1xuICAgIGxldCB0YWJzID0gdGhpcy5nZXRUYWJzKClcbiAgICBsZXQgbmV4dFRhYiA9IG51bGxcbiAgICBjb25zdCBpc0N1cnJlbnRUYWIgPSBpZCA9PT0gdGhpcy5jdXJyZW50VGFiLmlkXG5cbiAgICBjb25zdCBkZWxldGVkSWR4ID0gdGFicy5maW5kSW5kZXgodGFiID0+IHRhYi5pZCA9PT0gaWQpXG4gICAgdGFicyA9IHRhYnMuZmlsdGVyKCh0YWIsIGlkeCkgPT4gdGFiLmlkICE9PSBpZClcblxuICAgIHRoaXMuc2V0VGFicyh0YWJzKVxuXG4gICAgaWYgKHRhYnMubGVuZ3RoKSB7XG4gICAgICBpZiAoaXNDdXJyZW50VGFiKSB7XG4gICAgICAgIG5leHRUYWIgPSBkZWxldGVkSWR4ID09PSAwID8gdGFic1swXSA6IHRhYnNbZGVsZXRlZElkeCAtIDFdXG4gICAgICB9XG5cbiAgICAgIGVtaXR0ZXIuZW1pdCgndGFiLXJlZnJlc2gnLCBuZXh0VGFiIHx8IHRoaXMuY3VycmVudFRhYilcbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYXRpb24uaHJlZiA9ICcvJ1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3Jlcy9UYWJTdG9yZS5qcyIsImltcG9ydCB7bHNQb3N0c0tleSwgbHNQb3N0c0V4cGlyYXRpb259IGZyb20gJ2NvbmZpZydcbmltcG9ydCB7IHRhYlN0b3JlIH0gZnJvbSAnIy9zdG9yZXMnXG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSAnIy91dGlscydcbmNvbnN0IGxzID0gbG9jYWxTdG9yYWdlXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgZmV0Y2hQb3N0KGlkKSB7XG4gICAgY29uc3QgY2FjaGUgPSB0aGlzLmZyb21DYWNoZShpZClcblxuICAgIHJldHVybiBjYWNoZVxuICAgICAgPyAkLkRlZmVycmVkKCkucmVzb2x2ZShjYWNoZSlcbiAgICAgIDogJC5nZXQoZ2hvc3QudXJsLmFwaShgcG9zdHMvJHtpZH1gKSwge1xuICAgICAgICAgIGluY2x1ZGU6ICdhdXRob3InXG4gICAgICAgIH0pXG4gICAgICAgICAgLmZhaWwoZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgIGlmIChlcnIuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgICAgICAgdGFiU3RvcmUuZGVsZXRlVGFiSXRlbShpZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC5kb25lKGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRhdGEucG9zdHNbMF0gfHwge31cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBvc3QpXG4gICAgICAgICAgICB0aGlzLmNhY2hlUG9zdChpZCwgcG9zdClcbiAgICAgICAgICAgIHJldHVybiBwb3N0XG4gICAgICAgICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFkIHBvc3QgZnJvbSBjYWNoZSBmaXJzdFxuICAgKiBAcGFyYW0ge251bWJlcn0gaWQgLT4gcG9zdCBpZFxuICAgKiAgLSBvbmx5IGNhY2hlIDVtaW5cbiAgICovXG4gIGZyb21DYWNoZShpZCkge1xuICAgIGxldCBsc1Bvc3RzID0gbHMuZ2V0SXRlbShsc1Bvc3RzS2V5KVxuICAgIGxzUG9zdHMgPSBsc1Bvc3RzID8gSlNPTi5wYXJzZShsc1Bvc3RzKSA6IHt9XG5cbiAgICBjb25zdCBwb3N0ID0gbHNQb3N0c1tpZF1cbiAgICBjb25zdCB1c2VhYmxlID0gcG9zdCAmJiArbmV3IERhdGUoKSAtIHBvc3QudGltZXN0YW1wIDw9IGxzUG9zdHNFeHBpcmF0aW9uXG5cbiAgICBpZiAodXNlYWJsZSkge1xuICAgICAgY29uc29sZS5pbmZvKCdbUG9zdCByZWFkZWQgZnJvbSBjYWNoZV06JywgcG9zdC50aXRsZSlcbiAgICAgIGNvbnN0IGF1dGhvciA9IEpTT04ucGFyc2UocG9zdC5hdXRob3IpXG4gICAgICByZXR1cm4ge1xuICAgICAgICBwb3N0czogW3sgLi4ucG9zdCwgYXV0aG9yLCBmcm9tQ2FjaGU6IDEgfV1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgZGVsZXRlUG9zdEZyb21DYWNoZShpZCkge1xuICAgIGxldCBsc1Bvc3RzID0gbHMuZ2V0SXRlbShsc1Bvc3RzS2V5KVxuICAgIGxzUG9zdHMgPSBsc1Bvc3RzID8gSlNPTi5wYXJzZShsc1Bvc3RzKSA6IHt9XG4gICAgY29uc29sZS5sb2coJ1tkZWxldGVkIHBvc3Qgc3VjY2Vzc106JywgbHNQb3N0c1tpZF0udGl0bGUpXG5cbiAgICBkZWxldGUgbHNQb3N0c1tpZF1cblxuICAgIGxzLnNldEl0ZW0obHNQb3N0c0tleSwgSlNPTi5zdHJpbmdpZnkobHNQb3N0cykpXG4gIH1cblxuICBjYWNoZVBvc3QoaWQsIHBvc3QpIHtcbiAgICBpZiAocG9zdC5mcm9tQ2FjaGUpIHJldHVyblxuXG4gICAgbGV0IGxzUG9zdHMgPSBscy5nZXRJdGVtKGxzUG9zdHNLZXkpXG4gICAgbHNQb3N0cyA9IGxzUG9zdHMgPyBKU09OLnBhcnNlKGxzUG9zdHMpIDoge31cblxuICAgIGxzUG9zdHNbaWRdID0ge1xuICAgICAgLi4ucG9zdCxcbiAgICAgIGF1dGhvcjogSlNPTi5zdHJpbmdpZnkocG9zdC5hdXRob3IpLFxuICAgICAgdGltZXN0YW1wOiArbmV3IERhdGUoKVxuICAgIH1cblxuICAgIC8vIGNhY2hlIHVwIHRvIDUgcG9zdHNcbiAgICAvLyBkZWxldGUgdGhlIG9sZGVzdCBvbmUgaWYgbW9yZSB0aGFuIDVcbiAgICBsZXQgaWRzID0gT2JqZWN0LmtleXMobHNQb3N0cylcbiAgICBpZiAoaWRzLmxlbmd0aCA+IDUpIHtcbiAgICAgIGNvbnN0IHNob3VsZERlbGV0ZUlkID0gaWRzXG4gICAgICAgIC5tYXAoaWQgPT4gKHtcbiAgICAgICAgICB0aW1lc3RhbXA6IGxzUG9zdHNbaWRdLnRpbWVzdGFtcCxcbiAgICAgICAgICBpZFxuICAgICAgICB9KSlcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEudGltZXN0YW1wIC0gYi50aW1lc3RhbXApXG4gICAgICAgIC5tYXAoaXRlbSA9PiBpdGVtLmlkKVxuICAgICAgICAuc2hpZnQoKVxuXG4gICAgICBkZWxldGUgbHNQb3N0c1tzaG91bGREZWxldGVJZF1cbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhpZHMubGVuZ3RoKVxuICAgIGxzLnNldEl0ZW0obHNQb3N0c0tleSwgSlNPTi5zdHJpbmdpZnkobHNQb3N0cykpXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZXMvUG9zdFN0b3JlLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX0xvY2F0aW9uVXRpbHMgPSByZXF1aXJlKCcuL0xvY2F0aW9uVXRpbHMnKTtcblxudmFyIF9QYXRoVXRpbHMgPSByZXF1aXJlKCcuL1BhdGhVdGlscycpO1xuXG52YXIgX2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyID0gcmVxdWlyZSgnLi9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlcicpO1xuXG52YXIgX2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyKTtcblxudmFyIF9ET01VdGlscyA9IHJlcXVpcmUoJy4vRE9NVXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFBvcFN0YXRlRXZlbnQgPSAncG9wc3RhdGUnO1xudmFyIEhhc2hDaGFuZ2VFdmVudCA9ICdoYXNoY2hhbmdlJztcblxudmFyIGdldEhpc3RvcnlTdGF0ZSA9IGZ1bmN0aW9uIGdldEhpc3RvcnlTdGF0ZSgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gd2luZG93Lmhpc3Rvcnkuc3RhdGUgfHwge307XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBJRSAxMSBzb21ldGltZXMgdGhyb3dzIHdoZW4gYWNjZXNzaW5nIHdpbmRvdy5oaXN0b3J5LnN0YXRlXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9SZWFjdFRyYWluaW5nL2hpc3RvcnkvcHVsbC8yODlcbiAgICByZXR1cm4ge307XG4gIH1cbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhpc3Rvcnkgb2JqZWN0IHRoYXQgdXNlcyB0aGUgSFRNTDUgaGlzdG9yeSBBUEkgaW5jbHVkaW5nXG4gKiBwdXNoU3RhdGUsIHJlcGxhY2VTdGF0ZSwgYW5kIHRoZSBwb3BzdGF0ZSBldmVudC5cbiAqL1xudmFyIGNyZWF0ZUJyb3dzZXJIaXN0b3J5ID0gZnVuY3Rpb24gY3JlYXRlQnJvd3Nlckhpc3RvcnkoKSB7XG4gIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKF9ET01VdGlscy5jYW5Vc2VET00sICdCcm93c2VyIGhpc3RvcnkgbmVlZHMgYSBET00nKTtcblxuICB2YXIgZ2xvYmFsSGlzdG9yeSA9IHdpbmRvdy5oaXN0b3J5O1xuICB2YXIgY2FuVXNlSGlzdG9yeSA9ICgwLCBfRE9NVXRpbHMuc3VwcG9ydHNIaXN0b3J5KSgpO1xuICB2YXIgbmVlZHNIYXNoQ2hhbmdlTGlzdGVuZXIgPSAhKDAsIF9ET01VdGlscy5zdXBwb3J0c1BvcFN0YXRlT25IYXNoQ2hhbmdlKSgpO1xuXG4gIHZhciBfcHJvcHMkZm9yY2VSZWZyZXNoID0gcHJvcHMuZm9yY2VSZWZyZXNoLFxuICAgICAgZm9yY2VSZWZyZXNoID0gX3Byb3BzJGZvcmNlUmVmcmVzaCA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfcHJvcHMkZm9yY2VSZWZyZXNoLFxuICAgICAgX3Byb3BzJGdldFVzZXJDb25maXJtID0gcHJvcHMuZ2V0VXNlckNvbmZpcm1hdGlvbixcbiAgICAgIGdldFVzZXJDb25maXJtYXRpb24gPSBfcHJvcHMkZ2V0VXNlckNvbmZpcm0gPT09IHVuZGVmaW5lZCA/IF9ET01VdGlscy5nZXRDb25maXJtYXRpb24gOiBfcHJvcHMkZ2V0VXNlckNvbmZpcm0sXG4gICAgICBfcHJvcHMka2V5TGVuZ3RoID0gcHJvcHMua2V5TGVuZ3RoLFxuICAgICAga2V5TGVuZ3RoID0gX3Byb3BzJGtleUxlbmd0aCA9PT0gdW5kZWZpbmVkID8gNiA6IF9wcm9wcyRrZXlMZW5ndGg7XG5cbiAgdmFyIGJhc2VuYW1lID0gcHJvcHMuYmFzZW5hbWUgPyAoMCwgX1BhdGhVdGlscy5zdHJpcFRyYWlsaW5nU2xhc2gpKCgwLCBfUGF0aFV0aWxzLmFkZExlYWRpbmdTbGFzaCkocHJvcHMuYmFzZW5hbWUpKSA6ICcnO1xuXG4gIHZhciBnZXRET01Mb2NhdGlvbiA9IGZ1bmN0aW9uIGdldERPTUxvY2F0aW9uKGhpc3RvcnlTdGF0ZSkge1xuICAgIHZhciBfcmVmID0gaGlzdG9yeVN0YXRlIHx8IHt9LFxuICAgICAgICBrZXkgPSBfcmVmLmtleSxcbiAgICAgICAgc3RhdGUgPSBfcmVmLnN0YXRlO1xuXG4gICAgdmFyIF93aW5kb3ckbG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24sXG4gICAgICAgIHBhdGhuYW1lID0gX3dpbmRvdyRsb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgICAgc2VhcmNoID0gX3dpbmRvdyRsb2NhdGlvbi5zZWFyY2gsXG4gICAgICAgIGhhc2ggPSBfd2luZG93JGxvY2F0aW9uLmhhc2g7XG5cblxuICAgIHZhciBwYXRoID0gcGF0aG5hbWUgKyBzZWFyY2ggKyBoYXNoO1xuXG4gICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KSghYmFzZW5hbWUgfHwgKDAsIF9QYXRoVXRpbHMuaGFzQmFzZW5hbWUpKHBhdGgsIGJhc2VuYW1lKSwgJ1lvdSBhcmUgYXR0ZW1wdGluZyB0byB1c2UgYSBiYXNlbmFtZSBvbiBhIHBhZ2Ugd2hvc2UgVVJMIHBhdGggZG9lcyBub3QgYmVnaW4gJyArICd3aXRoIHRoZSBiYXNlbmFtZS4gRXhwZWN0ZWQgcGF0aCBcIicgKyBwYXRoICsgJ1wiIHRvIGJlZ2luIHdpdGggXCInICsgYmFzZW5hbWUgKyAnXCIuJyk7XG5cbiAgICBpZiAoYmFzZW5hbWUpIHBhdGggPSAoMCwgX1BhdGhVdGlscy5zdHJpcEJhc2VuYW1lKShwYXRoLCBiYXNlbmFtZSk7XG5cbiAgICByZXR1cm4gKDAsIF9Mb2NhdGlvblV0aWxzLmNyZWF0ZUxvY2F0aW9uKShwYXRoLCBzdGF0ZSwga2V5KTtcbiAgfTtcblxuICB2YXIgY3JlYXRlS2V5ID0gZnVuY3Rpb24gY3JlYXRlS2V5KCkge1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwga2V5TGVuZ3RoKTtcbiAgfTtcblxuICB2YXIgdHJhbnNpdGlvbk1hbmFnZXIgPSAoMCwgX2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyMi5kZWZhdWx0KSgpO1xuXG4gIHZhciBzZXRTdGF0ZSA9IGZ1bmN0aW9uIHNldFN0YXRlKG5leHRTdGF0ZSkge1xuICAgIF9leHRlbmRzKGhpc3RvcnksIG5leHRTdGF0ZSk7XG5cbiAgICBoaXN0b3J5Lmxlbmd0aCA9IGdsb2JhbEhpc3RvcnkubGVuZ3RoO1xuXG4gICAgdHJhbnNpdGlvbk1hbmFnZXIubm90aWZ5TGlzdGVuZXJzKGhpc3RvcnkubG9jYXRpb24sIGhpc3RvcnkuYWN0aW9uKTtcbiAgfTtcblxuICB2YXIgaGFuZGxlUG9wU3RhdGUgPSBmdW5jdGlvbiBoYW5kbGVQb3BTdGF0ZShldmVudCkge1xuICAgIC8vIElnbm9yZSBleHRyYW5lb3VzIHBvcHN0YXRlIGV2ZW50cyBpbiBXZWJLaXQuXG4gICAgaWYgKCgwLCBfRE9NVXRpbHMuaXNFeHRyYW5lb3VzUG9wc3RhdGVFdmVudCkoZXZlbnQpKSByZXR1cm47XG5cbiAgICBoYW5kbGVQb3AoZ2V0RE9NTG9jYXRpb24oZXZlbnQuc3RhdGUpKTtcbiAgfTtcblxuICB2YXIgaGFuZGxlSGFzaENoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUhhc2hDaGFuZ2UoKSB7XG4gICAgaGFuZGxlUG9wKGdldERPTUxvY2F0aW9uKGdldEhpc3RvcnlTdGF0ZSgpKSk7XG4gIH07XG5cbiAgdmFyIGZvcmNlTmV4dFBvcCA9IGZhbHNlO1xuXG4gIHZhciBoYW5kbGVQb3AgPSBmdW5jdGlvbiBoYW5kbGVQb3AobG9jYXRpb24pIHtcbiAgICBpZiAoZm9yY2VOZXh0UG9wKSB7XG4gICAgICBmb3JjZU5leHRQb3AgPSBmYWxzZTtcbiAgICAgIHNldFN0YXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhY3Rpb24gPSAnUE9QJztcblxuICAgICAgdHJhbnNpdGlvbk1hbmFnZXIuY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgYWN0aW9uLCBnZXRVc2VyQ29uZmlybWF0aW9uLCBmdW5jdGlvbiAob2spIHtcbiAgICAgICAgaWYgKG9rKSB7XG4gICAgICAgICAgc2V0U3RhdGUoeyBhY3Rpb246IGFjdGlvbiwgbG9jYXRpb246IGxvY2F0aW9uIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldmVydFBvcChsb2NhdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICB2YXIgcmV2ZXJ0UG9wID0gZnVuY3Rpb24gcmV2ZXJ0UG9wKGZyb21Mb2NhdGlvbikge1xuICAgIHZhciB0b0xvY2F0aW9uID0gaGlzdG9yeS5sb2NhdGlvbjtcblxuICAgIC8vIFRPRE86IFdlIGNvdWxkIHByb2JhYmx5IG1ha2UgdGhpcyBtb3JlIHJlbGlhYmxlIGJ5XG4gICAgLy8ga2VlcGluZyBhIGxpc3Qgb2Yga2V5cyB3ZSd2ZSBzZWVuIGluIHNlc3Npb25TdG9yYWdlLlxuICAgIC8vIEluc3RlYWQsIHdlIGp1c3QgZGVmYXVsdCB0byAwIGZvciBrZXlzIHdlIGRvbid0IGtub3cuXG5cbiAgICB2YXIgdG9JbmRleCA9IGFsbEtleXMuaW5kZXhPZih0b0xvY2F0aW9uLmtleSk7XG5cbiAgICBpZiAodG9JbmRleCA9PT0gLTEpIHRvSW5kZXggPSAwO1xuXG4gICAgdmFyIGZyb21JbmRleCA9IGFsbEtleXMuaW5kZXhPZihmcm9tTG9jYXRpb24ua2V5KTtcblxuICAgIGlmIChmcm9tSW5kZXggPT09IC0xKSBmcm9tSW5kZXggPSAwO1xuXG4gICAgdmFyIGRlbHRhID0gdG9JbmRleCAtIGZyb21JbmRleDtcblxuICAgIGlmIChkZWx0YSkge1xuICAgICAgZm9yY2VOZXh0UG9wID0gdHJ1ZTtcbiAgICAgIGdvKGRlbHRhKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGluaXRpYWxMb2NhdGlvbiA9IGdldERPTUxvY2F0aW9uKGdldEhpc3RvcnlTdGF0ZSgpKTtcbiAgdmFyIGFsbEtleXMgPSBbaW5pdGlhbExvY2F0aW9uLmtleV07XG5cbiAgLy8gUHVibGljIGludGVyZmFjZVxuXG4gIHZhciBjcmVhdGVIcmVmID0gZnVuY3Rpb24gY3JlYXRlSHJlZihsb2NhdGlvbikge1xuICAgIHJldHVybiBiYXNlbmFtZSArICgwLCBfUGF0aFV0aWxzLmNyZWF0ZVBhdGgpKGxvY2F0aW9uKTtcbiAgfTtcblxuICB2YXIgcHVzaCA9IGZ1bmN0aW9uIHB1c2gocGF0aCwgc3RhdGUpIHtcbiAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKCEoKHR5cGVvZiBwYXRoID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihwYXRoKSkgPT09ICdvYmplY3QnICYmIHBhdGguc3RhdGUgIT09IHVuZGVmaW5lZCAmJiBzdGF0ZSAhPT0gdW5kZWZpbmVkKSwgJ1lvdSBzaG91bGQgYXZvaWQgcHJvdmlkaW5nIGEgMm5kIHN0YXRlIGFyZ3VtZW50IHRvIHB1c2ggd2hlbiB0aGUgMXN0ICcgKyAnYXJndW1lbnQgaXMgYSBsb2NhdGlvbi1saWtlIG9iamVjdCB0aGF0IGFscmVhZHkgaGFzIHN0YXRlOyBpdCBpcyBpZ25vcmVkJyk7XG5cbiAgICB2YXIgYWN0aW9uID0gJ1BVU0gnO1xuICAgIHZhciBsb2NhdGlvbiA9ICgwLCBfTG9jYXRpb25VdGlscy5jcmVhdGVMb2NhdGlvbikocGF0aCwgc3RhdGUsIGNyZWF0ZUtleSgpLCBoaXN0b3J5LmxvY2F0aW9uKTtcblxuICAgIHRyYW5zaXRpb25NYW5hZ2VyLmNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICBpZiAoIW9rKSByZXR1cm47XG5cbiAgICAgIHZhciBocmVmID0gY3JlYXRlSHJlZihsb2NhdGlvbik7XG4gICAgICB2YXIga2V5ID0gbG9jYXRpb24ua2V5LFxuICAgICAgICAgIHN0YXRlID0gbG9jYXRpb24uc3RhdGU7XG5cblxuICAgICAgaWYgKGNhblVzZUhpc3RvcnkpIHtcbiAgICAgICAgZ2xvYmFsSGlzdG9yeS5wdXNoU3RhdGUoeyBrZXk6IGtleSwgc3RhdGU6IHN0YXRlIH0sIG51bGwsIGhyZWYpO1xuXG4gICAgICAgIGlmIChmb3JjZVJlZnJlc2gpIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGhyZWY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHByZXZJbmRleCA9IGFsbEtleXMuaW5kZXhPZihoaXN0b3J5LmxvY2F0aW9uLmtleSk7XG4gICAgICAgICAgdmFyIG5leHRLZXlzID0gYWxsS2V5cy5zbGljZSgwLCBwcmV2SW5kZXggPT09IC0xID8gMCA6IHByZXZJbmRleCArIDEpO1xuXG4gICAgICAgICAgbmV4dEtleXMucHVzaChsb2NhdGlvbi5rZXkpO1xuICAgICAgICAgIGFsbEtleXMgPSBuZXh0S2V5cztcblxuICAgICAgICAgIHNldFN0YXRlKHsgYWN0aW9uOiBhY3Rpb24sIGxvY2F0aW9uOiBsb2NhdGlvbiB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KShzdGF0ZSA9PT0gdW5kZWZpbmVkLCAnQnJvd3NlciBoaXN0b3J5IGNhbm5vdCBwdXNoIHN0YXRlIGluIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgSFRNTDUgaGlzdG9yeScpO1xuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gaHJlZjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICB2YXIgcmVwbGFjZSA9IGZ1bmN0aW9uIHJlcGxhY2UocGF0aCwgc3RhdGUpIHtcbiAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKCEoKHR5cGVvZiBwYXRoID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihwYXRoKSkgPT09ICdvYmplY3QnICYmIHBhdGguc3RhdGUgIT09IHVuZGVmaW5lZCAmJiBzdGF0ZSAhPT0gdW5kZWZpbmVkKSwgJ1lvdSBzaG91bGQgYXZvaWQgcHJvdmlkaW5nIGEgMm5kIHN0YXRlIGFyZ3VtZW50IHRvIHJlcGxhY2Ugd2hlbiB0aGUgMXN0ICcgKyAnYXJndW1lbnQgaXMgYSBsb2NhdGlvbi1saWtlIG9iamVjdCB0aGF0IGFscmVhZHkgaGFzIHN0YXRlOyBpdCBpcyBpZ25vcmVkJyk7XG5cbiAgICB2YXIgYWN0aW9uID0gJ1JFUExBQ0UnO1xuICAgIHZhciBsb2NhdGlvbiA9ICgwLCBfTG9jYXRpb25VdGlscy5jcmVhdGVMb2NhdGlvbikocGF0aCwgc3RhdGUsIGNyZWF0ZUtleSgpLCBoaXN0b3J5LmxvY2F0aW9uKTtcblxuICAgIHRyYW5zaXRpb25NYW5hZ2VyLmNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICBpZiAoIW9rKSByZXR1cm47XG5cbiAgICAgIHZhciBocmVmID0gY3JlYXRlSHJlZihsb2NhdGlvbik7XG4gICAgICB2YXIga2V5ID0gbG9jYXRpb24ua2V5LFxuICAgICAgICAgIHN0YXRlID0gbG9jYXRpb24uc3RhdGU7XG5cblxuICAgICAgaWYgKGNhblVzZUhpc3RvcnkpIHtcbiAgICAgICAgZ2xvYmFsSGlzdG9yeS5yZXBsYWNlU3RhdGUoeyBrZXk6IGtleSwgc3RhdGU6IHN0YXRlIH0sIG51bGwsIGhyZWYpO1xuXG4gICAgICAgIGlmIChmb3JjZVJlZnJlc2gpIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShocmVmKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgcHJldkluZGV4ID0gYWxsS2V5cy5pbmRleE9mKGhpc3RvcnkubG9jYXRpb24ua2V5KTtcblxuICAgICAgICAgIGlmIChwcmV2SW5kZXggIT09IC0xKSBhbGxLZXlzW3ByZXZJbmRleF0gPSBsb2NhdGlvbi5rZXk7XG5cbiAgICAgICAgICBzZXRTdGF0ZSh7IGFjdGlvbjogYWN0aW9uLCBsb2NhdGlvbjogbG9jYXRpb24gfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICgwLCBfd2FybmluZzIuZGVmYXVsdCkoc3RhdGUgPT09IHVuZGVmaW5lZCwgJ0Jyb3dzZXIgaGlzdG9yeSBjYW5ub3QgcmVwbGFjZSBzdGF0ZSBpbiBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IEhUTUw1IGhpc3RvcnknKTtcblxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShocmVmKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICB2YXIgZ28gPSBmdW5jdGlvbiBnbyhuKSB7XG4gICAgZ2xvYmFsSGlzdG9yeS5nbyhuKTtcbiAgfTtcblxuICB2YXIgZ29CYWNrID0gZnVuY3Rpb24gZ29CYWNrKCkge1xuICAgIHJldHVybiBnbygtMSk7XG4gIH07XG5cbiAgdmFyIGdvRm9yd2FyZCA9IGZ1bmN0aW9uIGdvRm9yd2FyZCgpIHtcbiAgICByZXR1cm4gZ28oMSk7XG4gIH07XG5cbiAgdmFyIGxpc3RlbmVyQ291bnQgPSAwO1xuXG4gIHZhciBjaGVja0RPTUxpc3RlbmVycyA9IGZ1bmN0aW9uIGNoZWNrRE9NTGlzdGVuZXJzKGRlbHRhKSB7XG4gICAgbGlzdGVuZXJDb3VudCArPSBkZWx0YTtcblxuICAgIGlmIChsaXN0ZW5lckNvdW50ID09PSAxKSB7XG4gICAgICAoMCwgX0RPTVV0aWxzLmFkZEV2ZW50TGlzdGVuZXIpKHdpbmRvdywgUG9wU3RhdGVFdmVudCwgaGFuZGxlUG9wU3RhdGUpO1xuXG4gICAgICBpZiAobmVlZHNIYXNoQ2hhbmdlTGlzdGVuZXIpICgwLCBfRE9NVXRpbHMuYWRkRXZlbnRMaXN0ZW5lcikod2luZG93LCBIYXNoQ2hhbmdlRXZlbnQsIGhhbmRsZUhhc2hDaGFuZ2UpO1xuICAgIH0gZWxzZSBpZiAobGlzdGVuZXJDb3VudCA9PT0gMCkge1xuICAgICAgKDAsIF9ET01VdGlscy5yZW1vdmVFdmVudExpc3RlbmVyKSh3aW5kb3csIFBvcFN0YXRlRXZlbnQsIGhhbmRsZVBvcFN0YXRlKTtcblxuICAgICAgaWYgKG5lZWRzSGFzaENoYW5nZUxpc3RlbmVyKSAoMCwgX0RPTVV0aWxzLnJlbW92ZUV2ZW50TGlzdGVuZXIpKHdpbmRvdywgSGFzaENoYW5nZUV2ZW50LCBoYW5kbGVIYXNoQ2hhbmdlKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGlzQmxvY2tlZCA9IGZhbHNlO1xuXG4gIHZhciBibG9jayA9IGZ1bmN0aW9uIGJsb2NrKCkge1xuICAgIHZhciBwcm9tcHQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGZhbHNlO1xuXG4gICAgdmFyIHVuYmxvY2sgPSB0cmFuc2l0aW9uTWFuYWdlci5zZXRQcm9tcHQocHJvbXB0KTtcblxuICAgIGlmICghaXNCbG9ja2VkKSB7XG4gICAgICBjaGVja0RPTUxpc3RlbmVycygxKTtcbiAgICAgIGlzQmxvY2tlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChpc0Jsb2NrZWQpIHtcbiAgICAgICAgaXNCbG9ja2VkID0gZmFsc2U7XG4gICAgICAgIGNoZWNrRE9NTGlzdGVuZXJzKC0xKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHVuYmxvY2soKTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBsaXN0ZW4gPSBmdW5jdGlvbiBsaXN0ZW4obGlzdGVuZXIpIHtcbiAgICB2YXIgdW5saXN0ZW4gPSB0cmFuc2l0aW9uTWFuYWdlci5hcHBlbmRMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgY2hlY2tET01MaXN0ZW5lcnMoMSk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgY2hlY2tET01MaXN0ZW5lcnMoLTEpO1xuICAgICAgdW5saXN0ZW4oKTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBoaXN0b3J5ID0ge1xuICAgIGxlbmd0aDogZ2xvYmFsSGlzdG9yeS5sZW5ndGgsXG4gICAgYWN0aW9uOiAnUE9QJyxcbiAgICBsb2NhdGlvbjogaW5pdGlhbExvY2F0aW9uLFxuICAgIGNyZWF0ZUhyZWY6IGNyZWF0ZUhyZWYsXG4gICAgcHVzaDogcHVzaCxcbiAgICByZXBsYWNlOiByZXBsYWNlLFxuICAgIGdvOiBnbyxcbiAgICBnb0JhY2s6IGdvQmFjayxcbiAgICBnb0ZvcndhcmQ6IGdvRm9yd2FyZCxcbiAgICBibG9jazogYmxvY2ssXG4gICAgbGlzdGVuOiBsaXN0ZW5cbiAgfTtcblxuICByZXR1cm4gaGlzdG9yeTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZUJyb3dzZXJIaXN0b3J5O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9oaXN0b3J5L2NyZWF0ZUJyb3dzZXJIaXN0b3J5LmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgaW52YXJpYW50ID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICAnTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArXG4gICAgICAgICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLidcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSB7IHJldHVybiBhcmdzW2FyZ0luZGV4KytdOyB9KVxuICAgICAgKTtcbiAgICAgIGVycm9yLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9pbnZhcmlhbnQvYnJvd3Nlci5qcyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMubG9jYXRpb25zQXJlRXF1YWwgPSBleHBvcnRzLmNyZWF0ZUxvY2F0aW9uID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3Jlc29sdmVQYXRobmFtZSA9IHJlcXVpcmUoJ3Jlc29sdmUtcGF0aG5hbWUnKTtcblxudmFyIF9yZXNvbHZlUGF0aG5hbWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVzb2x2ZVBhdGhuYW1lKTtcblxudmFyIF92YWx1ZUVxdWFsID0gcmVxdWlyZSgndmFsdWUtZXF1YWwnKTtcblxudmFyIF92YWx1ZUVxdWFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZhbHVlRXF1YWwpO1xuXG52YXIgX1BhdGhVdGlscyA9IHJlcXVpcmUoJy4vUGF0aFV0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBjcmVhdGVMb2NhdGlvbiA9IGV4cG9ydHMuY3JlYXRlTG9jYXRpb24gPSBmdW5jdGlvbiBjcmVhdGVMb2NhdGlvbihwYXRoLCBzdGF0ZSwga2V5LCBjdXJyZW50TG9jYXRpb24pIHtcbiAgdmFyIGxvY2F0aW9uID0gdm9pZCAwO1xuICBpZiAodHlwZW9mIHBhdGggPT09ICdzdHJpbmcnKSB7XG4gICAgLy8gVHdvLWFyZyBmb3JtOiBwdXNoKHBhdGgsIHN0YXRlKVxuICAgIGxvY2F0aW9uID0gKDAsIF9QYXRoVXRpbHMucGFyc2VQYXRoKShwYXRoKTtcbiAgICBsb2NhdGlvbi5zdGF0ZSA9IHN0YXRlO1xuICB9IGVsc2Uge1xuICAgIC8vIE9uZS1hcmcgZm9ybTogcHVzaChsb2NhdGlvbilcbiAgICBsb2NhdGlvbiA9IF9leHRlbmRzKHt9LCBwYXRoKTtcblxuICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZSA9PT0gdW5kZWZpbmVkKSBsb2NhdGlvbi5wYXRobmFtZSA9ICcnO1xuXG4gICAgaWYgKGxvY2F0aW9uLnNlYXJjaCkge1xuICAgICAgaWYgKGxvY2F0aW9uLnNlYXJjaC5jaGFyQXQoMCkgIT09ICc/JykgbG9jYXRpb24uc2VhcmNoID0gJz8nICsgbG9jYXRpb24uc2VhcmNoO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhdGlvbi5zZWFyY2ggPSAnJztcbiAgICB9XG5cbiAgICBpZiAobG9jYXRpb24uaGFzaCkge1xuICAgICAgaWYgKGxvY2F0aW9uLmhhc2guY2hhckF0KDApICE9PSAnIycpIGxvY2F0aW9uLmhhc2ggPSAnIycgKyBsb2NhdGlvbi5oYXNoO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhdGlvbi5oYXNoID0gJyc7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlICE9PSB1bmRlZmluZWQgJiYgbG9jYXRpb24uc3RhdGUgPT09IHVuZGVmaW5lZCkgbG9jYXRpb24uc3RhdGUgPSBzdGF0ZTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgbG9jYXRpb24ucGF0aG5hbWUgPSBkZWNvZGVVUkkobG9jYXRpb24ucGF0aG5hbWUpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaWYgKGUgaW5zdGFuY2VvZiBVUklFcnJvcikge1xuICAgICAgdGhyb3cgbmV3IFVSSUVycm9yKCdQYXRobmFtZSBcIicgKyBsb2NhdGlvbi5wYXRobmFtZSArICdcIiBjb3VsZCBub3QgYmUgZGVjb2RlZC4gJyArICdUaGlzIGlzIGxpa2VseSBjYXVzZWQgYnkgYW4gaW52YWxpZCBwZXJjZW50LWVuY29kaW5nLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChrZXkpIGxvY2F0aW9uLmtleSA9IGtleTtcblxuICBpZiAoY3VycmVudExvY2F0aW9uKSB7XG4gICAgLy8gUmVzb2x2ZSBpbmNvbXBsZXRlL3JlbGF0aXZlIHBhdGhuYW1lIHJlbGF0aXZlIHRvIGN1cnJlbnQgbG9jYXRpb24uXG4gICAgaWYgKCFsb2NhdGlvbi5wYXRobmFtZSkge1xuICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPSBjdXJyZW50TG9jYXRpb24ucGF0aG5hbWU7XG4gICAgfSBlbHNlIGlmIChsb2NhdGlvbi5wYXRobmFtZS5jaGFyQXQoMCkgIT09ICcvJykge1xuICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPSAoMCwgX3Jlc29sdmVQYXRobmFtZTIuZGVmYXVsdCkobG9jYXRpb24ucGF0aG5hbWUsIGN1cnJlbnRMb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIFdoZW4gdGhlcmUgaXMgbm8gcHJpb3IgbG9jYXRpb24gYW5kIHBhdGhuYW1lIGlzIGVtcHR5LCBzZXQgaXQgdG8gL1xuICAgIGlmICghbG9jYXRpb24ucGF0aG5hbWUpIHtcbiAgICAgIGxvY2F0aW9uLnBhdGhuYW1lID0gJy8nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBsb2NhdGlvbjtcbn07XG5cbnZhciBsb2NhdGlvbnNBcmVFcXVhbCA9IGV4cG9ydHMubG9jYXRpb25zQXJlRXF1YWwgPSBmdW5jdGlvbiBsb2NhdGlvbnNBcmVFcXVhbChhLCBiKSB7XG4gIHJldHVybiBhLnBhdGhuYW1lID09PSBiLnBhdGhuYW1lICYmIGEuc2VhcmNoID09PSBiLnNlYXJjaCAmJiBhLmhhc2ggPT09IGIuaGFzaCAmJiBhLmtleSA9PT0gYi5rZXkgJiYgKDAsIF92YWx1ZUVxdWFsMi5kZWZhdWx0KShhLnN0YXRlLCBiLnN0YXRlKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2hpc3RvcnkvTG9jYXRpb25VdGlscy5qcyIsImZ1bmN0aW9uIGlzQWJzb2x1dGUocGF0aG5hbWUpIHtcbiAgcmV0dXJuIHBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nO1xufVxuXG4vLyBBYm91dCAxLjV4IGZhc3RlciB0aGFuIHRoZSB0d28tYXJnIHZlcnNpb24gb2YgQXJyYXkjc3BsaWNlKClcbmZ1bmN0aW9uIHNwbGljZU9uZShsaXN0LCBpbmRleCkge1xuICBmb3IgKHZhciBpID0gaW5kZXgsIGsgPSBpICsgMSwgbiA9IGxpc3QubGVuZ3RoOyBrIDwgbjsgaSArPSAxLCBrICs9IDEpIHtcbiAgICBsaXN0W2ldID0gbGlzdFtrXTtcbiAgfVxuXG4gIGxpc3QucG9wKCk7XG59XG5cbi8vIFRoaXMgaW1wbGVtZW50YXRpb24gaXMgYmFzZWQgaGVhdmlseSBvbiBub2RlJ3MgdXJsLnBhcnNlXG5mdW5jdGlvbiByZXNvbHZlUGF0aG5hbWUodG8pIHtcbiAgdmFyIGZyb20gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICcnO1xuXG4gIHZhciB0b1BhcnRzID0gdG8gJiYgdG8uc3BsaXQoJy8nKSB8fCBbXTtcbiAgdmFyIGZyb21QYXJ0cyA9IGZyb20gJiYgZnJvbS5zcGxpdCgnLycpIHx8IFtdO1xuXG4gIHZhciBpc1RvQWJzID0gdG8gJiYgaXNBYnNvbHV0ZSh0byk7XG4gIHZhciBpc0Zyb21BYnMgPSBmcm9tICYmIGlzQWJzb2x1dGUoZnJvbSk7XG4gIHZhciBtdXN0RW5kQWJzID0gaXNUb0FicyB8fCBpc0Zyb21BYnM7XG5cbiAgaWYgKHRvICYmIGlzQWJzb2x1dGUodG8pKSB7XG4gICAgLy8gdG8gaXMgYWJzb2x1dGVcbiAgICBmcm9tUGFydHMgPSB0b1BhcnRzO1xuICB9IGVsc2UgaWYgKHRvUGFydHMubGVuZ3RoKSB7XG4gICAgLy8gdG8gaXMgcmVsYXRpdmUsIGRyb3AgdGhlIGZpbGVuYW1lXG4gICAgZnJvbVBhcnRzLnBvcCgpO1xuICAgIGZyb21QYXJ0cyA9IGZyb21QYXJ0cy5jb25jYXQodG9QYXJ0cyk7XG4gIH1cblxuICBpZiAoIWZyb21QYXJ0cy5sZW5ndGgpIHJldHVybiAnLyc7XG5cbiAgdmFyIGhhc1RyYWlsaW5nU2xhc2ggPSB2b2lkIDA7XG4gIGlmIChmcm9tUGFydHMubGVuZ3RoKSB7XG4gICAgdmFyIGxhc3QgPSBmcm9tUGFydHNbZnJvbVBhcnRzLmxlbmd0aCAtIDFdO1xuICAgIGhhc1RyYWlsaW5nU2xhc2ggPSBsYXN0ID09PSAnLicgfHwgbGFzdCA9PT0gJy4uJyB8fCBsYXN0ID09PSAnJztcbiAgfSBlbHNlIHtcbiAgICBoYXNUcmFpbGluZ1NsYXNoID0gZmFsc2U7XG4gIH1cblxuICB2YXIgdXAgPSAwO1xuICBmb3IgKHZhciBpID0gZnJvbVBhcnRzLmxlbmd0aDsgaSA+PSAwOyBpLS0pIHtcbiAgICB2YXIgcGFydCA9IGZyb21QYXJ0c1tpXTtcblxuICAgIGlmIChwYXJ0ID09PSAnLicpIHtcbiAgICAgIHNwbGljZU9uZShmcm9tUGFydHMsIGkpO1xuICAgIH0gZWxzZSBpZiAocGFydCA9PT0gJy4uJykge1xuICAgICAgc3BsaWNlT25lKGZyb21QYXJ0cywgaSk7XG4gICAgICB1cCsrO1xuICAgIH0gZWxzZSBpZiAodXApIHtcbiAgICAgIHNwbGljZU9uZShmcm9tUGFydHMsIGkpO1xuICAgICAgdXAtLTtcbiAgICB9XG4gIH1cblxuICBpZiAoIW11c3RFbmRBYnMpIGZvciAoOyB1cC0tOyB1cCkge1xuICAgIGZyb21QYXJ0cy51bnNoaWZ0KCcuLicpO1xuICB9aWYgKG11c3RFbmRBYnMgJiYgZnJvbVBhcnRzWzBdICE9PSAnJyAmJiAoIWZyb21QYXJ0c1swXSB8fCAhaXNBYnNvbHV0ZShmcm9tUGFydHNbMF0pKSkgZnJvbVBhcnRzLnVuc2hpZnQoJycpO1xuXG4gIHZhciByZXN1bHQgPSBmcm9tUGFydHMuam9pbignLycpO1xuXG4gIGlmIChoYXNUcmFpbGluZ1NsYXNoICYmIHJlc3VsdC5zdWJzdHIoLTEpICE9PSAnLycpIHJlc3VsdCArPSAnLyc7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVzb2x2ZVBhdGhuYW1lO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9yZXNvbHZlLXBhdGhuYW1lL2luZGV4LmpzIiwidmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiB2YWx1ZUVxdWFsKGEsIGIpIHtcbiAgaWYgKGEgPT09IGIpIHJldHVybiB0cnVlO1xuXG4gIGlmIChhID09IG51bGwgfHwgYiA9PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoYSkpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShiKSAmJiBhLmxlbmd0aCA9PT0gYi5sZW5ndGggJiYgYS5ldmVyeShmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgIHJldHVybiB2YWx1ZUVxdWFsKGl0ZW0sIGJbaW5kZXhdKTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBhVHlwZSA9IHR5cGVvZiBhID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihhKTtcbiAgdmFyIGJUeXBlID0gdHlwZW9mIGIgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGIpO1xuXG4gIGlmIChhVHlwZSAhPT0gYlR5cGUpIHJldHVybiBmYWxzZTtcblxuICBpZiAoYVR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgdmFyIGFWYWx1ZSA9IGEudmFsdWVPZigpO1xuICAgIHZhciBiVmFsdWUgPSBiLnZhbHVlT2YoKTtcblxuICAgIGlmIChhVmFsdWUgIT09IGEgfHwgYlZhbHVlICE9PSBiKSByZXR1cm4gdmFsdWVFcXVhbChhVmFsdWUsIGJWYWx1ZSk7XG5cbiAgICB2YXIgYUtleXMgPSBPYmplY3Qua2V5cyhhKTtcbiAgICB2YXIgYktleXMgPSBPYmplY3Qua2V5cyhiKTtcblxuICAgIGlmIChhS2V5cy5sZW5ndGggIT09IGJLZXlzLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgcmV0dXJuIGFLZXlzLmV2ZXJ5KGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiB2YWx1ZUVxdWFsKGFba2V5XSwgYltrZXldKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsdWVFcXVhbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdmFsdWUtZXF1YWwvaW5kZXguanMiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIgPSBmdW5jdGlvbiBjcmVhdGVUcmFuc2l0aW9uTWFuYWdlcigpIHtcbiAgdmFyIHByb21wdCA9IG51bGw7XG5cbiAgdmFyIHNldFByb21wdCA9IGZ1bmN0aW9uIHNldFByb21wdChuZXh0UHJvbXB0KSB7XG4gICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KShwcm9tcHQgPT0gbnVsbCwgJ0EgaGlzdG9yeSBzdXBwb3J0cyBvbmx5IG9uZSBwcm9tcHQgYXQgYSB0aW1lJyk7XG5cbiAgICBwcm9tcHQgPSBuZXh0UHJvbXB0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChwcm9tcHQgPT09IG5leHRQcm9tcHQpIHByb21wdCA9IG51bGw7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgY29uZmlybVRyYW5zaXRpb25UbyA9IGZ1bmN0aW9uIGNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgY2FsbGJhY2spIHtcbiAgICAvLyBUT0RPOiBJZiBhbm90aGVyIHRyYW5zaXRpb24gc3RhcnRzIHdoaWxlIHdlJ3JlIHN0aWxsIGNvbmZpcm1pbmdcbiAgICAvLyB0aGUgcHJldmlvdXMgb25lLCB3ZSBtYXkgZW5kIHVwIGluIGEgd2VpcmQgc3RhdGUuIEZpZ3VyZSBvdXQgdGhlXG4gICAgLy8gYmVzdCB3YXkgdG8gaGFuZGxlIHRoaXMuXG4gICAgaWYgKHByb21wdCAhPSBudWxsKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gdHlwZW9mIHByb21wdCA9PT0gJ2Z1bmN0aW9uJyA/IHByb21wdChsb2NhdGlvbiwgYWN0aW9uKSA6IHByb21wdDtcblxuICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZ2V0VXNlckNvbmZpcm1hdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGdldFVzZXJDb25maXJtYXRpb24ocmVzdWx0LCBjYWxsYmFjayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KShmYWxzZSwgJ0EgaGlzdG9yeSBuZWVkcyBhIGdldFVzZXJDb25maXJtYXRpb24gZnVuY3Rpb24gaW4gb3JkZXIgdG8gdXNlIGEgcHJvbXB0IG1lc3NhZ2UnKTtcblxuICAgICAgICAgIGNhbGxiYWNrKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBSZXR1cm4gZmFsc2UgZnJvbSBhIHRyYW5zaXRpb24gaG9vayB0byBjYW5jZWwgdGhlIHRyYW5zaXRpb24uXG4gICAgICAgIGNhbGxiYWNrKHJlc3VsdCAhPT0gZmFsc2UpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjayh0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGxpc3RlbmVycyA9IFtdO1xuXG4gIHZhciBhcHBlbmRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFwcGVuZExpc3RlbmVyKGZuKSB7XG4gICAgdmFyIGlzQWN0aXZlID0gdHJ1ZTtcblxuICAgIHZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIGxpc3RlbmVyKCkge1xuICAgICAgaWYgKGlzQWN0aXZlKSBmbi5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbSAhPT0gbGlzdGVuZXI7XG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBub3RpZnlMaXN0ZW5lcnMgPSBmdW5jdGlvbiBub3RpZnlMaXN0ZW5lcnMoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgbGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gbGlzdGVuZXIuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHNldFByb21wdDogc2V0UHJvbXB0LFxuICAgIGNvbmZpcm1UcmFuc2l0aW9uVG86IGNvbmZpcm1UcmFuc2l0aW9uVG8sXG4gICAgYXBwZW5kTGlzdGVuZXI6IGFwcGVuZExpc3RlbmVyLFxuICAgIG5vdGlmeUxpc3RlbmVyczogbm90aWZ5TGlzdGVuZXJzXG4gIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVUcmFuc2l0aW9uTWFuYWdlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlci5qcyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBjYW5Vc2VET00gPSBleHBvcnRzLmNhblVzZURPTSA9ICEhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbnZhciBhZGRFdmVudExpc3RlbmVyID0gZXhwb3J0cy5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudCwgbGlzdGVuZXIpIHtcbiAgcmV0dXJuIG5vZGUuYWRkRXZlbnRMaXN0ZW5lciA/IG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIsIGZhbHNlKSA6IG5vZGUuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50LCBsaXN0ZW5lcik7XG59O1xuXG52YXIgcmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGV4cG9ydHMucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnQsIGxpc3RlbmVyKSB7XG4gIHJldHVybiBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPyBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyLCBmYWxzZSkgOiBub2RlLmRldGFjaEV2ZW50KCdvbicgKyBldmVudCwgbGlzdGVuZXIpO1xufTtcblxudmFyIGdldENvbmZpcm1hdGlvbiA9IGV4cG9ydHMuZ2V0Q29uZmlybWF0aW9uID0gZnVuY3Rpb24gZ2V0Q29uZmlybWF0aW9uKG1lc3NhZ2UsIGNhbGxiYWNrKSB7XG4gIHJldHVybiBjYWxsYmFjayh3aW5kb3cuY29uZmlybShtZXNzYWdlKSk7XG59OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWFsZXJ0XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBIVE1MNSBoaXN0b3J5IEFQSSBpcyBzdXBwb3J0ZWQuIFRha2VuIGZyb20gTW9kZXJuaXpyLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2Jsb2IvbWFzdGVyL2ZlYXR1cmUtZGV0ZWN0cy9oaXN0b3J5LmpzXG4gKiBjaGFuZ2VkIHRvIGF2b2lkIGZhbHNlIG5lZ2F0aXZlcyBmb3IgV2luZG93cyBQaG9uZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JlYWN0LXJvdXRlci9pc3N1ZXMvNTg2XG4gKi9cbnZhciBzdXBwb3J0c0hpc3RvcnkgPSBleHBvcnRzLnN1cHBvcnRzSGlzdG9yeSA9IGZ1bmN0aW9uIHN1cHBvcnRzSGlzdG9yeSgpIHtcbiAgdmFyIHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XG5cbiAgaWYgKCh1YS5pbmRleE9mKCdBbmRyb2lkIDIuJykgIT09IC0xIHx8IHVhLmluZGV4T2YoJ0FuZHJvaWQgNC4wJykgIT09IC0xKSAmJiB1YS5pbmRleE9mKCdNb2JpbGUgU2FmYXJpJykgIT09IC0xICYmIHVhLmluZGV4T2YoJ0Nocm9tZScpID09PSAtMSAmJiB1YS5pbmRleE9mKCdXaW5kb3dzIFBob25lJykgPT09IC0xKSByZXR1cm4gZmFsc2U7XG5cbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5ICYmICdwdXNoU3RhdGUnIGluIHdpbmRvdy5oaXN0b3J5O1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgYnJvd3NlciBmaXJlcyBwb3BzdGF0ZSBvbiBoYXNoIGNoYW5nZS5cbiAqIElFMTAgYW5kIElFMTEgZG8gbm90LlxuICovXG52YXIgc3VwcG9ydHNQb3BTdGF0ZU9uSGFzaENoYW5nZSA9IGV4cG9ydHMuc3VwcG9ydHNQb3BTdGF0ZU9uSGFzaENoYW5nZSA9IGZ1bmN0aW9uIHN1cHBvcnRzUG9wU3RhdGVPbkhhc2hDaGFuZ2UoKSB7XG4gIHJldHVybiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdUcmlkZW50JykgPT09IC0xO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIGZhbHNlIGlmIHVzaW5nIGdvKG4pIHdpdGggaGFzaCBoaXN0b3J5IGNhdXNlcyBhIGZ1bGwgcGFnZSByZWxvYWQuXG4gKi9cbnZhciBzdXBwb3J0c0dvV2l0aG91dFJlbG9hZFVzaW5nSGFzaCA9IGV4cG9ydHMuc3VwcG9ydHNHb1dpdGhvdXRSZWxvYWRVc2luZ0hhc2ggPSBmdW5jdGlvbiBzdXBwb3J0c0dvV2l0aG91dFJlbG9hZFVzaW5nSGFzaCgpIHtcbiAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0ZpcmVmb3gnKSA9PT0gLTE7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBhIGdpdmVuIHBvcHN0YXRlIGV2ZW50IGlzIGFuIGV4dHJhbmVvdXMgV2ViS2l0IGV2ZW50LlxuICogQWNjb3VudHMgZm9yIHRoZSBmYWN0IHRoYXQgQ2hyb21lIG9uIGlPUyBmaXJlcyByZWFsIHBvcHN0YXRlIGV2ZW50c1xuICogY29udGFpbmluZyB1bmRlZmluZWQgc3RhdGUgd2hlbiBwcmVzc2luZyB0aGUgYmFjayBidXR0b24uXG4gKi9cbnZhciBpc0V4dHJhbmVvdXNQb3BzdGF0ZUV2ZW50ID0gZXhwb3J0cy5pc0V4dHJhbmVvdXNQb3BzdGF0ZUV2ZW50ID0gZnVuY3Rpb24gaXNFeHRyYW5lb3VzUG9wc3RhdGVFdmVudChldmVudCkge1xuICByZXR1cm4gZXZlbnQuc3RhdGUgPT09IHVuZGVmaW5lZCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0NyaU9TJykgPT09IC0xO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9ET01VdGlscy5qcyIsImltcG9ydCAnLi9zdHlsZS5zY3NzJ1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICdjb25maWcnXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICBjb25zdCAkc2lkZWJhciA9ICQoJyNKLXNpZGViYXItaGVhZGVyJylcbiAgY29uc3QgJGJvZHkgPSAkKCdib2R5JylcbiAgY29uc3QgJHNpZGViYXJCb2R5ID0gJCgnI0otc2lkZS1iYXItYm9keScpXG4gIGxldCBpc1NlYXJjaFNob3dpbmcgPSBmYWxzZVxuICBsZXQgaXNTaWRlQm9keVNob3dpbmcgPSB0cnVlXG5cbiAgJGJvZHkuYWRkQ2xhc3MoJ3RoZW1lLScgKyB0aGVtZSlcblxuICAkc2lkZWJhclxuICAgIC5vbignY2xpY2snLCAnLkotc2lkZWJhci1sb2dvJywgZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCAkdGhpcyA9ICQodGhpcylcblxuICAgICAgaWYgKCR0aGlzLmlzKCcuYWN0aXZlJykpIHtcbiAgICAgICAgc2lkZWJhckJvZHlIaWRlKClcbiAgICAgICAgJHRoaXMucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaWRlYmFyQm9keVNob3coKVxuICAgICAgICBlbWl0dGVyLmVtaXQoJ3N3aXRjaC1zaWRlYmFyJywgeyB0YXJnZXQ6ICdsb2dvJyB9KVxuICAgICAgICAkdGhpc1xuICAgICAgICAgIC5hZGRDbGFzcygnYWN0aXZlJylcbiAgICAgICAgICAuc2libGluZ3MoKVxuICAgICAgICAgIC5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAgIH1cbiAgICB9KVxuICAgIC5vbignY2xpY2snLCAnLkotc2lkZWJhci1zZWFyY2gnLCBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKVxuXG4gICAgICBpZiAoJHRoaXMuaXMoJy5hY3RpdmUnKSkge1xuICAgICAgICBzaWRlYmFyQm9keUhpZGUoKVxuICAgICAgICAkdGhpcy5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNpZGViYXJCb2R5U2hvdygpXG5cbiAgICAgICAgJHRoaXNcbiAgICAgICAgICAuYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAgICAgLnNpYmxpbmdzKClcbiAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG5cbiAgICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwic2VhcmNoLWJveFwiICovICdwYXJ0aWFscy9zaWRlLWJhci1ib2R5L3NlYXJjaC1ib3gnKS50aGVuKCgpID0+IHtcbiAgICAgICAgICBlbWl0dGVyLmVtaXQoJ3N3aXRjaC1zaWRlYmFyJywgeyB0YXJnZXQ6ICdzZWFyY2gnIH0pXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICBmdW5jdGlvbiBzaWRlYmFyQm9keVNob3coKSB7XG4gICAgJHNpZGViYXJCb2R5LnJlbW92ZUNsYXNzKCdoaWRkZW4nKVxuICAgIGlzU2lkZUJvZHlTaG93aW5nID0gdHJ1ZVxuICB9XG4gIGZ1bmN0aW9uIHNpZGViYXJCb2R5SGlkZSgpIHtcbiAgICAkc2lkZWJhckJvZHkuYWRkQ2xhc3MoJ2hpZGRlbicpXG4gICAgaXNTaWRlQm9keVNob3dpbmcgPSBmYWxzZVxuICB9XG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFydGlhbHMvc2lkZS1iYXItaGVhZGVyL2luZGV4LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhcnRpYWxzL3NpZGUtYmFyLWhlYWRlci9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgJy4vYmxvZy10cmVlJ1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnXG5cbiQoZnVuY3Rpb24oKSB7XG4gIGNvbnN0ICRzZWFyY2hCb3ggPSAkKCcjSi1zZWFyY2gtYm94JylcbiAgY29uc3QgJGJsb2dUcmVlID0gJCgnI0otYmxvZy10cmVlJylcbiAgY29uc3QgJHNlYXJjaElucHV0ID0gJHNlYXJjaEJveC5maW5kKCcuSi1pbnB1dC1zZWFyY2gnKVxuICBjb25zdCAkdGFnVHJlZSA9ICQoJyNKLWJsb2ctdHJlZScpXG5cbiAgZW1pdHRlci5vbignc3dpdGNoLXNpZGViYXInLCAoeyB0YXJnZXQgfSkgPT4ge1xuICAgIGNvbnN0IGlzU2VhcmNoID0gdGFyZ2V0ID09PSAnc2VhcmNoJ1xuXG4gICAgaWYgKGlzU2VhcmNoKSB7XG4gICAgICAkYmxvZ1RyZWUuaGlkZSgpXG4gICAgICAkc2VhcmNoQm94LnJlbW92ZUNsYXNzKCdoaWRkZW4nKVxuICAgICAgJHNlYXJjaElucHV0LmZvY3VzKClcbiAgICB9IGVsc2Uge1xuICAgICAgJGJsb2dUcmVlLnNob3coKVxuICAgICAgJHNlYXJjaEJveC5hZGRDbGFzcygnaGlkZGVuJylcbiAgICB9XG4gIH0pXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFydGlhbHMvc2lkZS1iYXItYm9keS9pbmRleC5qcyIsImltcG9ydCAnLi9zdHlsZS5zY3NzJ1xuaW1wb3J0IGhpc3RvcnkgZnJvbSAnIy9oaXN0b3J5J1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgY29uc3QgJHRhZ1RyZWUgPSAkKCcjSi1ibG9nLXRyZWUnKVxuICBjb25zdCAkYWxsUG9zdHMgPSAkKCcjSi1wb3N0cy1hbGwtaGlkZGVuJylcbiAgY29uc3QgcGF0aG5hbWUgPSBsb2NhdGlvbi5wYXRobmFtZVxuICBjb25zdCAkYm9keSA9ICQoJ2JvZHknKVxuICBjb25zdCAkdW50YWdlZFBvc3RzID0gJHRhZ1RyZWUuZmluZCgnLkotdW50YWdlZC1wb3N0cycpXG5cbiAgY29uc3QgdGFncyA9IHt9XG4gIGNvbnN0IHVudGFnZWQgPSBbXVxuICAkYWxsUG9zdHMuZmluZCgnLkotcG9zdCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgJHBvc3QgPSAkKHRoaXMpXG4gICAgY29uc3Qgc2x1ZyA9ICRwb3N0LmRhdGEoJ3NsdWcnKVxuICAgIGNvbnN0ICR0YWdzID0gJHBvc3QuZmluZCgnLkotdGFnJylcblxuICAgIGlmIChwYXRobmFtZS5pbmNsdWRlcyhzbHVnKSkge1xuICAgICAgJHBvc3QuYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gICAgfVxuXG4gICAgaWYgKCR0YWdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdW50YWdlZC5wdXNoKCRwb3N0WzBdLm91dGVySFRNTClcbiAgICB9IGVsc2Uge1xuICAgICAgJHRhZ3MuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgdGFnID0gdGhpcy5pbm5lclRleHRcbiAgICAgICAgaWYgKCF0YWdzW3RhZ10pIHtcbiAgICAgICAgICB0YWdzW3RhZ10gPSBbXVxuICAgICAgICB9XG5cbiAgICAgICAgdGFnc1t0YWddLnB1c2goJHBvc3RbMF0ub3V0ZXJIVE1MKVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG5cbiAgLyoqXG4gICAqIGNvcHkgcG9zdHMgdG8gY29ycmVzcG9uZGluZyB0YWdcbiAgICovXG4gICR0YWdUcmVlLmZpbmQoJy5KLWJsb2ctdHJlZS1wb3N0cycpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpXG4gICAgY29uc3QgcG9zdHMgPSB0YWdzWyR0aGlzLmRhdGEoJ3RhZycpXVxuXG4gICAgaWYgKCFwb3N0cykge1xuICAgICAgJHRoaXNcbiAgICAgICAgLmh0bWwoJzx1bD48bGkgY2xhc3M9XCJibG9nLXRyZWUtbm8tcG9zdHMgbGlnaHRlclwiPkNvbWluZyBzb29uLi4uPC9saT48L3VsPicpXG4gICAgICAgIC5wYXJlbnQoKVxuICAgICAgICAuYWRkQ2xhc3MoJ3Bvc3QtaGlkZGVuJylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgICR0aGlzLmh0bWwocG9zdHMuam9pbignJykpLmNzcyh7XG4gICAgICBoZWlnaHQ6IDI2ICogcG9zdHMubGVuZ3RoXG4gICAgfSlcbiAgfSlcblxuICAkdW50YWdlZFBvc3RzLmh0bWwodW50YWdlZC5qb2luKCcnKSlcblxuICBjb25zdCAkcG9zdHMgPSAkKCcuSi1ibG9nLXRyZWUtdGFncyAuSi1wb3N0JylcblxuICAvLyBldmVudCBiaW5kaW5nXG4gICR0YWdUcmVlXG4gICAgLmFkZENsYXNzKCdsb2FkaW5nLWhpZGRlbicpXG4gICAgLm9uKCdjbGljaycsICcuSi1ibG9nLXRyZWUtdGFnbmFtZScsIGZ1bmN0aW9uKCkge1xuICAgICAgJCh0aGlzKVxuICAgICAgICAucGFyZW50KClcbiAgICAgICAgLnRvZ2dsZUNsYXNzKCdwb3N0LWhpZGRlbicpXG4gICAgfSlcbiAgICAub24oJ2NsaWNrJywgJy5KLWdvMnBvc3QnLCBmdW5jdGlvbihlKSB7XG4gICAgICBjb25zdCAkdGhpcyA9ICQodGhpcylcblxuICAgICAgaWYgKCEkYm9keS5pcygnLnBvc3QtdGVtcGxhdGUnKSkgcmV0dXJuXG5cbiAgICAgIGlmICgkdGhpcy5wYXJlbnRzKCcuSi1wb3N0JykuaXMoJy5hY3RpdmUnKSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlkID0gJHRoaXMuZGF0YSgnaWQnKVxuICAgICAgY29uc3QgdXJsID0gJHRoaXMuYXR0cignaHJlZicpXG5cbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgZW1pdHRlci5lbWl0KCdhZGQtcG9zdC10YWInLCB7XG4gICAgICAgIGlkLFxuICAgICAgICB1cmwsXG4gICAgICAgIHRpdGxlOiAkdGhpcy5hdHRyKCd0aXRsZScpLFxuICAgICAgICBzbHVnOiAkdGhpcy5wYXJlbnRzKCcuSi1wb3N0JykuZGF0YSgnc2x1ZycpXG4gICAgICB9KVxuICAgIH0pXG5cbiAgaGlzdG9yeS5saXN0ZW4obG9jYXRpb24gPT4ge1xuICAgIGNvbnN0IG5leHRUYWIgPSBsb2NhdGlvbi5zdGF0ZVxuXG4gICAgJHBvc3RzXG4gICAgICAucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAuZmlsdGVyKChpZHgsIHBvc3QpID0+IHtcbiAgICAgICAgcmV0dXJuICQocG9zdCkuZGF0YSgnc2x1ZycpID09PSBuZXh0VGFiLnNsdWdcbiAgICAgIH0pXG4gICAgICAuYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gIH0pXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFydGlhbHMvc2lkZS1iYXItYm9keS9ibG9nLXRyZWUvaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGFydGlhbHMvc2lkZS1iYXItYm9keS9ibG9nLXRyZWUvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhcnRpYWxzL3NpZGUtYmFyLWJvZHkvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5cbiQoZnVuY3Rpb24oKSB7XG4gIGNvbnN0ICRyZWFkaW5nVGltZSA9ICQoXCIuSi1yZWFkaW5nLXRpbWVcIik7XG5cbiAgZW1pdHRlci5vbihcInJlZnJlc2gtcmVhZGluZy10aW1lXCIsICh7IHRpbWUgfSkgPT4ge1xuICAgICRyZWFkaW5nVGltZS5odG1sKHRpbWUpO1xuICB9KTtcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFydGlhbHMvZm9vdGVyL2luZGV4LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhcnRpYWxzL2Zvb3Rlci9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgJy4vc3R5bGUuc2NzcydcbmltcG9ydCBoaXN0b3J5IGZyb20gJyMvaGlzdG9yeSdcbmltcG9ydCB7IHBvc3RTdG9yZSB9IGZyb20gJyMvc3RvcmVzJ1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gJyMvdXRpbHMnXG5cbiQoZnVuY3Rpb24oKSB7XG4gIGNvbnN0ICRwb3N0V3JhcCA9ICQoJyNKLXBvc3Qtd3JhcCcpXG4gIGNvbnN0ICRwb3N0ID0gJCgnI0otcG9zdCcpXG4gIGNvbnN0ICR0aXRsZSA9ICRwb3N0LmZpbmQoJy5KLXBvc3QtdGl0bGUnKVxuICBjb25zdCAkY29udGVudCA9ICRwb3N0LmZpbmQoJy5KLXBvc3QtY29udGVudCcpXG4gIGNvbnN0ICRtZXRhID0gJHBvc3QuZmluZCgnLkotcG9zdC1tZXRhJylcbiAgY29uc3QgJGZlYXR1cmVJbWFnZSA9ICRwb3N0LmZpbmQoJy5KLXBvc3QtZmVhdHVyZS1pbWFnZScpXG4gIGNvbnN0IG9yaWdpbiA9IGxvY2F0aW9uLm9yaWdpblxuXG4gIGhpZ2hsaWdodCgpXG5cbiAgaWYgKCQoJ2JvZHknKS5pcygnLnBvc3QtdGVtcGxhdGUnKSkge1xuICAgIGVtaXR0ZXIuZW1pdCgnYWRkLXBvc3QtdGFiJywge1xuICAgICAgaWQ6ICRwb3N0LmRhdGEoJ2lkJyksXG4gICAgICB0aXRsZTogJHBvc3QuZGF0YSgndGl0bGUnKSxcbiAgICAgIHNsdWc6ICRwb3N0LmRhdGEoJ3NsdWcnKSxcbiAgICAgIHVybDogJHBvc3QuZGF0YSgndXJsJylcbiAgICB9KVxuXG4gICAgZW1pdHRlci5lbWl0KCdyZWZyZXNoLXJlYWRpbmctdGltZScsIHtcbiAgICAgIHRpbWU6ICQoJy5KLXJlYWRpbmctdGltZS1oaWRkZW4nKS5odG1sKClcbiAgICB9KVxuICB9XG5cbiAgLy8gcmVmcmVzaCBwb3N0IGRhdGFcbiAgaGlzdG9yeS5saXN0ZW4oKGxvY2F0aW9uLCBhY3Rpb24pID0+IHtcbiAgICBjb25zdCBwb3N0SWQgPSBsb2NhdGlvbi5zdGF0ZS5pZFxuXG4gICAgaWYgKCFwb3N0SWQpIHJldHVyblxuXG4gICAgcG9zdFN0b3JlLmZldGNoUG9zdChwb3N0SWQpLmRvbmUoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgY29uc3QgcG9zdCA9IGRhdGEucG9zdHNbMF0gfHwge31cbiAgICAgIGNvbnN0IHsgcHVibGlzaGVkX2F0LCB0aXRsZSwgaHRtbCwgYXV0aG9yLCBmZWF0dXJlX2ltYWdlLCBjb21tZW50X2lkLCB1cmwsIHNsdWcgfSA9IHBvc3RcblxuICAgICAgJHRpdGxlLmh0bWwodGl0bGUpXG4gICAgICAkY29udGVudC5odG1sKGh0bWwpXG4gICAgICAkbWV0YS5odG1sKGBQb3N0ZWQgYnkgPGEgaHJlZj1cIi9hdXRob3IvJHthdXRob3Iuc2x1Z30vXCI+JHthdXRob3IubmFtZX08L2E+IG9uICR7Zm9ybWF0RGF0ZSgnJFkuJE0uJGQnLCBwdWJsaXNoZWRfYXQpfWApXG4gICAgICAkZmVhdHVyZUltYWdlW2ZlYXR1cmVfaW1hZ2UgPyAncmVtb3ZlQ2xhc3MnIDogJ2FkZENsYXNzJ10oJ2hpZGRlbicpXG4gICAgICAgIC5maW5kKCdmaWd1cmUnKVxuICAgICAgICAuY3NzKHtcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtmZWF0dXJlX2ltYWdlfSlgXG4gICAgICAgIH0pXG5cbiAgICAgIGVtaXR0ZXIuZW1pdCgncmVmcmVzaC1yZWFkaW5nLXRpbWUnLCB7XG4gICAgICAgIHRpbWU6ICcnXG4gICAgICB9KVxuXG4gICAgICBkb2N1bWVudC50aXRsZSA9IHRpdGxlXG5cbiAgICAgICdmdW5jdGlvbicgPT09IHR5cGVvZiB3aW5kb3cucmVmcmVzaENvbW1lbnQgJiYgd2luZG93LnJlZnJlc2hDb21tZW50KGBnaG9zdC0ke2NvbW1lbnRfaWR9YCwgb3JpZ2luICsgdXJsLCB0aXRsZSlcblxuICAgICAgaGlnaGxpZ2h0KClcbiAgICAgICRwb3N0V3JhcC5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwIH0sIDMwMClcbiAgICB9KVxuICB9KVxuXG4gIGZ1bmN0aW9uIGhpZ2hsaWdodCgpIHtcbiAgICAkKCdwcmUgY29kZScpLmVhY2goZnVuY3Rpb24oaSwgYmxvY2spIHtcbiAgICAgIHdpbmRvdy5obGpzICYmIHdpbmRvdy5obGpzLmhpZ2hsaWdodEJsb2NrKGJsb2NrKVxuICAgIH0pXG4gIH1cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYXJ0aWFscy9wb3N0L2luZGV4LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhcnRpYWxzL3Bvc3Qvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhcnRpYWxzL3Bvc3QtbmF2L3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYXJ0aWFscy9ob21lL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYXJ0aWFscy9hdXRob3Ivc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==