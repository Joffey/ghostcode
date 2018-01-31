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
/******/ 		script.src = __webpack_require__.p + "chunk." + ({}[chunkId]||chunkId) + "." + {"0":"5dc4d"}[chunkId] + ".js";
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
/* harmony export (immutable) */ __webpack_exports__["d"] = onresize;
const $body = $('body');
const $win = $(window);

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


function onresize(callback) {
  const fn = function (e) {
    const width = $win.width();
    return callback.call(this, e, width);
  };

  fn();
  window.addEventListener('resize', fn);
  return () => window.removeEventListener('resize', fn);
}

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(0);




$(document).ready(function () {
  const $sidebar = $('#J-sidebar-header');
  const $body = $('body');
  const $sidebarBody = $('#J-side-bar-body');
  const $sidebarItem = $sidebar.find('.J-sidebar-item');
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
    $sidebarBody.removeClass('hidden').show();
    isSideBodyShowing = true;
  }
  function sidebarBodyHide() {
    $sidebarBody.addClass('hidden').hide();
    isSideBodyShowing = false;
    $sidebarItem.removeClass('active');
  }

  emitter.on('sidebar-hidden', function () {
    sidebarBodyHide();
  });

  Object(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* onresize */])(function (e, width) {
    if (width < 800) {
      sidebarBodyHide();
    }
    if (width >= 800) {
      sidebarBodyShow();
    }
  });
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
  const $win = $(window);

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

    if ($win.width() < 450) {
      emitter.emit('sidebar-hidden');
    }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzk5ZjU5YWRlMzg1MDFlOTRlNTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9oaXN0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy93YXJuaW5nL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9QYXRoVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dob3N0Y29kZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lbWl0dGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9taXR0L2Rpc3QvbWl0dC5lcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvcG9zdC10YWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvcG9zdC10YWIvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmVzL1RhYlN0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZXMvUG9zdFN0b3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oaXN0b3J5L2NyZWF0ZUJyb3dzZXJIaXN0b3J5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbnZhcmlhbnQvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9Mb2NhdGlvblV0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXBhdGhuYW1lL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWx1ZS1lcXVhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9ET01VdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9wYXJ0aWFscy9zaWRlLWJhci1oZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvc2lkZS1iYXItaGVhZGVyL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvc2lkZS1iYXItYm9keS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYXJ0aWFscy9zaWRlLWJhci1ib2R5L2Jsb2ctdHJlZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYXJ0aWFscy9zaWRlLWJhci1ib2R5L2Jsb2ctdHJlZS9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3BhcnRpYWxzL3NpZGUtYmFyLWJvZHkvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9wYXJ0aWFscy9mb290ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvZm9vdGVyL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvcG9zdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYXJ0aWFscy9wb3N0L3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvcG9zdC1uYXYvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9wYXJ0aWFscy9ob21lL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvYXV0aG9yL3N0eWxlLnNjc3MiXSwibmFtZXMiOlsiJGJvZHkiLCIkIiwiJHdpbiIsIndpbmRvdyIsImlzSG9tZVBhZ2UiLCJpcyIsImlzUG9zdFBhZ2UiLCJoU2Nyb2xsIiwiZWwiLCJjb25zb2xlIiwiZXJyb3IiLCJhZGRFdmVudExpc3RlbmVyIiwid2hlZWwiLCJlIiwiZGVsdGEiLCJ3aGVlbERlbHRhIiwiZGVsdGFZIiwic2Nyb2xsTGVmdCIsInByZXZlbnREZWZhdWx0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImZvcm1hdCIsInRlbXBsYXRlIiwidmFycyIsInJlcGxhY2UiLCJfIiwibmFtZSIsInZhbHVlIiwidHJpbSIsInRvTGVuIiwic291cmNlIiwibGVuIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJqb2luIiwiY2FsbCIsImxlbmd0aCIsInNsaWNlIiwiZm9ybWF0RGF0ZSIsImRhdGUiLCJrZXkiLCJEYXRlIiwiREFZIiwiWSIsImdldEZ1bGxZZWFyIiwieSIsIk0iLCJnZXRNb250aCIsImQiLCJnZXREYXRlIiwiRCIsImdldERheSIsIkgiLCJnZXRIb3VycyIsIm0iLCJnZXRNaW51dGVzIiwicyIsImdldFNlY29uZHMiLCJvbnJlc2l6ZSIsImNhbGxiYWNrIiwiZm4iLCJ3aWR0aCIsImNyZWF0ZUhpc3RvcnkiLCJ0YWJTdG9yZSIsInBvc3RTdG9yZSIsInN0b3JlcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJsc1Bvc3RUYWJLZXkiLCJsc1Bvc3RUYWJFeHBpcmF0aW9uIiwibHNUaGVtZUtleSIsImxzUG9zdHNLZXkiLCJsc1Bvc3RzRXhwaXJhdGlvbiIsInRoZW1lIiwid2FybmluZyIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsImNvbmRpdGlvbiIsImFyZ3MiLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJFcnJvciIsInRlc3QiLCJhcmdJbmRleCIsIm1lc3NhZ2UiLCJ4IiwiY2FjaGVkU2V0VGltZW91dCIsImNhY2hlZENsZWFyVGltZW91dCIsImRlZmF1bHRTZXRUaW1vdXQiLCJkZWZhdWx0Q2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsInJ1blRpbWVvdXQiLCJmdW4iLCJydW5DbGVhclRpbWVvdXQiLCJtYXJrZXIiLCJxdWV1ZSIsImRyYWluaW5nIiwiY3VycmVudFF1ZXVlIiwicXVldWVJbmRleCIsImNsZWFuVXBOZXh0VGljayIsImNvbmNhdCIsImRyYWluUXVldWUiLCJ0aW1lb3V0IiwicnVuIiwibmV4dFRpY2siLCJpIiwicHVzaCIsIkl0ZW0iLCJhcnJheSIsImFwcGx5IiwidGl0bGUiLCJicm93c2VyIiwiYXJndiIsInZlcnNpb24iLCJ2ZXJzaW9ucyIsIm5vb3AiLCJvbiIsImFkZExpc3RlbmVyIiwib25jZSIsIm9mZiIsInJlbW92ZUxpc3RlbmVyIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiZW1pdCIsInByZXBlbmRMaXN0ZW5lciIsInByZXBlbmRPbmNlTGlzdGVuZXIiLCJsaXN0ZW5lcnMiLCJiaW5kaW5nIiwiY3dkIiwiY2hkaXIiLCJkaXIiLCJ1bWFzayIsIl9fZXNNb2R1bGUiLCJhZGRMZWFkaW5nU2xhc2giLCJwYXRoIiwiY2hhckF0Iiwic3RyaXBMZWFkaW5nU2xhc2giLCJzdWJzdHIiLCJoYXNCYXNlbmFtZSIsInByZWZpeCIsIlJlZ0V4cCIsInN0cmlwQmFzZW5hbWUiLCJzdHJpcFRyYWlsaW5nU2xhc2giLCJwYXJzZVBhdGgiLCJwYXRobmFtZSIsInNlYXJjaCIsImhhc2giLCJoYXNoSW5kZXgiLCJpbmRleE9mIiwic2VhcmNoSW5kZXgiLCJjcmVhdGVQYXRoIiwibG9jYXRpb24iLCJlbWl0dGVyIiwibWl0dCIsImFsbCIsIk9iamVjdCIsImNyZWF0ZSIsInR5cGUiLCJoYW5kbGVyIiwic3BsaWNlIiwiZXZ0IiwibWFwIiwiJHBvc3RUYWJzIiwiJHNjcm9sbFdyYXAiLCJuZFNjcm9sbFdyYXAiLCJnZXQiLCJwb3N0IiwidGFicyIsImdldFRhYnMiLCJmaWx0ZXIiLCJ0YWIiLCJpZCIsInNldFRhYnMiLCJhY3RpdmUiLCJhY3RpdmVJZCIsImN1cnJlbnRUYWIiLCIkYWN0aXZlIiwiaHRtbCIsInNsdWciLCJmaW5kIiwiaGlzdG9yeSIsInVybCIsInNldEN1cnJlbnRUYWIiLCJzY3JvbGwydmlldyIsInN0b3BQcm9wYWdhdGlvbiIsImRlbGV0ZVRhYkl0ZW0iLCJwYXJlbnQiLCJkYXRhIiwiJHRoaXMiLCJhZGRDbGFzcyIsInNpYmxpbmdzIiwicmVtb3ZlQ2xhc3MiLCJ3cmFwV2lkdGgiLCJ3cmFwU2Nyb2xsTGVmdCIsIndyYXBSaWdodCIsInRocmVzaG9sZCIsIm5kQWN0aXZlIiwiYWN0aXZlV2lkdGgiLCJvdXRlcldpZHRoIiwiYWN0aXZlTGVmdCIsIm9mZnNldExlZnQiLCJhY3RpdmVSaWdodCIsImxzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInRhYnNEYXRhIiwidGltZXN0YW1wIiwic3BsaXQiLCJzZXRJdGVtIiwibmV4dFRhYiIsImlzQ3VycmVudFRhYiIsImRlbGV0ZWRJZHgiLCJmaW5kSW5kZXgiLCJpZHgiLCJocmVmIiwiZmV0Y2hQb3N0IiwiY2FjaGUiLCJmcm9tQ2FjaGUiLCJEZWZlcnJlZCIsInJlc29sdmUiLCJnaG9zdCIsImFwaSIsImluY2x1ZGUiLCJmYWlsIiwiZXJyIiwibG9nIiwic3RhdHVzIiwiZG9uZSIsInBvc3RzIiwiY2FjaGVQb3N0IiwibHNQb3N0cyIsIkpTT04iLCJwYXJzZSIsInVzZWFibGUiLCJpbmZvIiwiYXV0aG9yIiwiZGVsZXRlUG9zdEZyb21DYWNoZSIsInN0cmluZ2lmeSIsImlkcyIsImtleXMiLCJzaG91bGREZWxldGVJZCIsInNvcnQiLCJhIiwiYiIsIml0ZW0iLCJzaGlmdCIsIl90eXBlb2YiLCJTeW1ib2wiLCJpdGVyYXRvciIsIm9iaiIsImNvbnN0cnVjdG9yIiwiX2V4dGVuZHMiLCJhc3NpZ24iLCJ0YXJnZXQiLCJoYXNPd25Qcm9wZXJ0eSIsIl93YXJuaW5nIiwicmVxdWlyZSIsIl93YXJuaW5nMiIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfaW52YXJpYW50IiwiX2ludmFyaWFudDIiLCJfTG9jYXRpb25VdGlscyIsIl9QYXRoVXRpbHMiLCJfY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIiLCJfY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIyIiwiX0RPTVV0aWxzIiwiZGVmYXVsdCIsIlBvcFN0YXRlRXZlbnQiLCJIYXNoQ2hhbmdlRXZlbnQiLCJnZXRIaXN0b3J5U3RhdGUiLCJzdGF0ZSIsImNyZWF0ZUJyb3dzZXJIaXN0b3J5IiwicHJvcHMiLCJjYW5Vc2VET00iLCJnbG9iYWxIaXN0b3J5IiwiY2FuVXNlSGlzdG9yeSIsInN1cHBvcnRzSGlzdG9yeSIsIm5lZWRzSGFzaENoYW5nZUxpc3RlbmVyIiwic3VwcG9ydHNQb3BTdGF0ZU9uSGFzaENoYW5nZSIsIl9wcm9wcyRmb3JjZVJlZnJlc2giLCJmb3JjZVJlZnJlc2giLCJfcHJvcHMkZ2V0VXNlckNvbmZpcm0iLCJnZXRVc2VyQ29uZmlybWF0aW9uIiwiZ2V0Q29uZmlybWF0aW9uIiwiX3Byb3BzJGtleUxlbmd0aCIsImtleUxlbmd0aCIsImJhc2VuYW1lIiwiZ2V0RE9NTG9jYXRpb24iLCJoaXN0b3J5U3RhdGUiLCJfcmVmIiwiX3dpbmRvdyRsb2NhdGlvbiIsImNyZWF0ZUxvY2F0aW9uIiwiY3JlYXRlS2V5IiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwidHJhbnNpdGlvbk1hbmFnZXIiLCJzZXRTdGF0ZSIsIm5leHRTdGF0ZSIsIm5vdGlmeUxpc3RlbmVycyIsImFjdGlvbiIsImhhbmRsZVBvcFN0YXRlIiwiZXZlbnQiLCJpc0V4dHJhbmVvdXNQb3BzdGF0ZUV2ZW50IiwiaGFuZGxlUG9wIiwiaGFuZGxlSGFzaENoYW5nZSIsImZvcmNlTmV4dFBvcCIsImNvbmZpcm1UcmFuc2l0aW9uVG8iLCJvayIsInJldmVydFBvcCIsImZyb21Mb2NhdGlvbiIsInRvTG9jYXRpb24iLCJ0b0luZGV4IiwiYWxsS2V5cyIsImZyb21JbmRleCIsImdvIiwiaW5pdGlhbExvY2F0aW9uIiwiY3JlYXRlSHJlZiIsInB1c2hTdGF0ZSIsInByZXZJbmRleCIsIm5leHRLZXlzIiwicmVwbGFjZVN0YXRlIiwibiIsImdvQmFjayIsImdvRm9yd2FyZCIsImxpc3RlbmVyQ291bnQiLCJjaGVja0RPTUxpc3RlbmVycyIsImlzQmxvY2tlZCIsImJsb2NrIiwicHJvbXB0IiwidW5ibG9jayIsInNldFByb21wdCIsImxpc3RlbiIsImxpc3RlbmVyIiwidW5saXN0ZW4iLCJhcHBlbmRMaXN0ZW5lciIsImludmFyaWFudCIsImMiLCJmIiwiZnJhbWVzVG9Qb3AiLCJsb2NhdGlvbnNBcmVFcXVhbCIsIl9yZXNvbHZlUGF0aG5hbWUiLCJfcmVzb2x2ZVBhdGhuYW1lMiIsIl92YWx1ZUVxdWFsIiwiX3ZhbHVlRXF1YWwyIiwiY3VycmVudExvY2F0aW9uIiwiZGVjb2RlVVJJIiwiVVJJRXJyb3IiLCJpc0Fic29sdXRlIiwic3BsaWNlT25lIiwibGlzdCIsImluZGV4IiwiayIsInBvcCIsInJlc29sdmVQYXRobmFtZSIsInRvIiwiZnJvbSIsInRvUGFydHMiLCJmcm9tUGFydHMiLCJpc1RvQWJzIiwiaXNGcm9tQWJzIiwibXVzdEVuZEFicyIsImhhc1RyYWlsaW5nU2xhc2giLCJsYXN0IiwidXAiLCJwYXJ0IiwidW5zaGlmdCIsInJlc3VsdCIsInZhbHVlRXF1YWwiLCJpc0FycmF5IiwiZXZlcnkiLCJhVHlwZSIsImJUeXBlIiwiYVZhbHVlIiwidmFsdWVPZiIsImJWYWx1ZSIsImFLZXlzIiwiYktleXMiLCJjcmVhdGVUcmFuc2l0aW9uTWFuYWdlciIsIm5leHRQcm9tcHQiLCJpc0FjdGl2ZSIsIl9sZW4iLCJfa2V5IiwiZm9yRWFjaCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIm5vZGUiLCJhdHRhY2hFdmVudCIsImRldGFjaEV2ZW50IiwiY29uZmlybSIsInVhIiwibmF2aWdhdG9yIiwidXNlckFnZW50Iiwic3VwcG9ydHNHb1dpdGhvdXRSZWxvYWRVc2luZ0hhc2giLCJyZWFkeSIsIiRzaWRlYmFyIiwiJHNpZGViYXJCb2R5IiwiJHNpZGViYXJJdGVtIiwiaXNTZWFyY2hTaG93aW5nIiwiaXNTaWRlQm9keVNob3dpbmciLCJzaWRlYmFyQm9keUhpZGUiLCJzaWRlYmFyQm9keVNob3ciLCJ0aGVuIiwic2hvdyIsImhpZGUiLCIkc2VhcmNoQm94IiwiJGJsb2dUcmVlIiwiJHNlYXJjaElucHV0IiwiJHRhZ1RyZWUiLCJpc1NlYXJjaCIsImZvY3VzIiwiJGFsbFBvc3RzIiwiJHVudGFnZWRQb3N0cyIsInRhZ3MiLCJ1bnRhZ2VkIiwiZWFjaCIsIiRwb3N0IiwiJHRhZ3MiLCJpbmNsdWRlcyIsIm91dGVySFRNTCIsInRhZyIsImlubmVyVGV4dCIsImNzcyIsImhlaWdodCIsIiRwb3N0cyIsInRvZ2dsZUNsYXNzIiwicGFyZW50cyIsImF0dHIiLCIkcmVhZGluZ1RpbWUiLCJ0aW1lIiwiJHBvc3RXcmFwIiwiJHRpdGxlIiwiJGNvbnRlbnQiLCIkbWV0YSIsIiRmZWF0dXJlSW1hZ2UiLCJvcmlnaW4iLCJoaWdobGlnaHQiLCJwb3N0SWQiLCJwdWJsaXNoZWRfYXQiLCJmZWF0dXJlX2ltYWdlIiwiY29tbWVudF9pZCIsImJhY2tncm91bmRJbWFnZSIsInJlZnJlc2hDb21tZW50IiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsImhsanMiLCJoaWdobGlnaHRCbG9jayJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxXQUFXLEVBQUU7QUFDdkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhEQUFzRCw2QkFBNkIsWUFBWTtBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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WixJQUFkLENBQW1CLFVBQVNyVCxDQUFULEVBQVk4TixLQUFaLEVBQW1CO0FBQ3BDclUsYUFBTzBiLElBQVAsSUFBZTFiLE9BQU8wYixJQUFQLENBQVlDLGNBQVosQ0FBMkJ0SCxLQUEzQixDQUFmO0FBQ0QsS0FGRDtBQUdEO0FBQ0YsQ0E3REQsRTs7Ozs7O0FDTEEseUM7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7Ozs7O0FDQUEseUMiLCJmaWxlIjoiZ2hvc3Rjb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXTtcbiBcdHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGNodW5rSWRzLCBtb3JlTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMpIHtcbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdLCByZXN1bHQ7XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihjaHVua0lkcywgbW9yZU1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzKTtcbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdH07XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdHMgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0MTogMFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgPT09IDApIHtcbiBcdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkgeyByZXNvbHZlKCk7IH0pO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZENodW5rRGF0YVsyXTtcbiBcdFx0fVxuXG4gXHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcbiBcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcbiBcdFx0fSk7XG4gXHRcdGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2U7XG5cbiBcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHR2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gXHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiBcdFx0c2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiBcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuIFx0XHRzY3JpcHQuYXN5bmMgPSB0cnVlO1xuIFx0XHRzY3JpcHQudGltZW91dCA9IDEyMDAwMDtcblxuIFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuIFx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcbiBcdFx0fVxuIFx0XHRzY3JpcHQuc3JjID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJjaHVuay5cIiArICh7fVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5cIiArIHtcIjBcIjpcIjVkYzRkXCJ9W2NodW5rSWRdICsgXCIuanNcIjtcbiBcdFx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUsIDEyMDAwMCk7XG4gXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGU7XG4gXHRcdGZ1bmN0aW9uIG9uU2NyaXB0Q29tcGxldGUoKSB7XG4gXHRcdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuIFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG4gXHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuIFx0XHRcdHZhciBjaHVuayA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0XHRpZihjaHVuayAhPT0gMCkge1xuIFx0XHRcdFx0aWYoY2h1bmspIHtcbiBcdFx0XHRcdFx0Y2h1bmtbMV0obmV3IEVycm9yKCdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuJykpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuIFx0XHRcdH1cbiBcdFx0fTtcbiBcdFx0aGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuXG4gXHRcdHJldHVybiBwcm9taXNlO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYXNzZXRzL2J1aWx0L1wiO1xuXG4gXHQvLyBvbiBlcnJvciBmdW5jdGlvbiBmb3IgYXN5bmMgbG9hZGluZ1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHRocm93IGVycjsgfTtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3OTlmNTlhZGUzODUwMWU5NGU1NSIsImNvbnN0ICRib2R5ID0gJCgnYm9keScpXG5jb25zdCAkd2luID0gJCh3aW5kb3cpXG5cbmV4cG9ydCBjb25zdCBpc0hvbWVQYWdlID0gKCkgPT4gJGJvZHkuaXMoJy5ob21lLXRlbXBsYXRlJylcbmV4cG9ydCBjb25zdCBpc1Bvc3RQYWdlID0gKCkgPT4gJGJvZHkuaXMoJy5wb3N0LXRlbXBsYXRlJylcblxuLyoqXG4gKiBob3Jpem9udGFsbHkgc2Nyb2xsXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAqXG4gKiBAZXhhbXBsZVxuICogIGNvbnN0IHN0b3BIU2Nyb2xsID0gaFNjcm9sbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjSi1oc2Nyb2xsLWVsJykpXG4gKiAgc3RvcEhTY3JvbGwoKSAvLyByZW1vdmVFdmVudExpc3RlbmVyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoU2Nyb2xsKGVsKSB7XG4gIGlmICghZWwpIHtcbiAgICBjb25zb2xlLmVycm9yKCdNdXN0IHNwZWNpZnkgZWwhJylcbiAgICByZXR1cm5cbiAgfVxuXG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgd2hlZWwpXG5cbiAgZnVuY3Rpb24gd2hlZWwoZSkge1xuICAgIGNvbnN0IGRlbHRhID0gZS53aGVlbERlbHRhID8gZS53aGVlbERlbHRhIDogLTEgKiBlLmRlbHRhWVxuICAgIGVsLnNjcm9sbExlZnQgKz0gLWRlbHRhXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICByZXR1cm4gKCkgPT4gZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2hlZWwnLCB3aGVlbClcbn1cblxuZXhwb3J0IGNvbnN0IGZvcm1hdCA9IGZ1bmN0aW9uKHRlbXBsYXRlLCB2YXJzKSB7XG4gIHJldHVybiB0ZW1wbGF0ZS5yZXBsYWNlKC9cXCRcXHsoW15cXHtcXH1dKilcXH0vZywgZnVuY3Rpb24oXywgbmFtZSkge1xuICAgIHZhciB2YWx1ZSA9IHZhcnNbbmFtZS50cmltKCldXG4gICAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlICsgJydcbiAgfSlcbn1cblxuY29uc3QgdG9MZW4gPSBmdW5jdGlvbihzb3VyY2UsIGxlbikge1xuICByZXR1cm4gKFxuICAgIEFycmF5LnByb3RvdHlwZS5qb2luLmNhbGwoXG4gICAgICB7XG4gICAgICAgIGxlbmd0aDogbGVuICsgMVxuICAgICAgfSxcbiAgICAgICcwJ1xuICAgICkgKyBzb3VyY2VcbiAgKS5zbGljZSgtbGVuKVxufVxuXG5leHBvcnQgY29uc3QgZm9ybWF0RGF0ZSA9IGZ1bmN0aW9uKHRlbXBsYXRlLCBkYXRlKSB7XG4gIGlmICghZGF0ZSkgcmV0dXJuICcnXG4gIHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZSgvXFwkKFthLXpBLVpdKS9nLCBmdW5jdGlvbihfLCBrZXkpIHtcbiAgICByZXR1cm4gJyR7JyArIGtleSArICd9J1xuICB9KVxuICBkYXRlID0gbmV3IERhdGUoZGF0ZSlcbiAgdmFyIERBWSA9IFsn5pelJywgJ+S4gCcsICfkuownLCAn5LiJJywgJ+WbmycsICfkupQnLCAn5YWtJ11cbiAgcmV0dXJuIGZvcm1hdCh0ZW1wbGF0ZSwge1xuICAgIFk6IHRvTGVuKGRhdGUuZ2V0RnVsbFllYXIoKSwgNCksXG4gICAgeTogdG9MZW4oZGF0ZS5nZXRGdWxsWWVhcigpLCAyKSxcbiAgICBNOiB0b0xlbihkYXRlLmdldE1vbnRoKCkgKyAxLCAyKSxcbiAgICBkOiB0b0xlbihkYXRlLmdldERhdGUoKSwgMiksXG4gICAgRDogREFZW2RhdGUuZ2V0RGF5KCldLFxuICAgIEg6IHRvTGVuKGRhdGUuZ2V0SG91cnMoKSwgMiksXG4gICAgbTogdG9MZW4oZGF0ZS5nZXRNaW51dGVzKCksIDIpLFxuICAgIHM6IHRvTGVuKGRhdGUuZ2V0U2Vjb25kcygpLCAyKVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25yZXNpemUoY2FsbGJhY2spIHtcbiAgY29uc3QgZm4gPSBmdW5jdGlvbihlKSB7XG4gICAgY29uc3Qgd2lkdGggPSAkd2luLndpZHRoKClcbiAgICByZXR1cm4gY2FsbGJhY2suY2FsbCh0aGlzLCBlLCB3aWR0aClcbiAgfVxuXG4gIGZuKClcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZuKVxuICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZuKVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzLmpzIiwiaW1wb3J0IGNyZWF0ZUhpc3RvcnkgZnJvbSBcImhpc3RvcnkvY3JlYXRlQnJvd3Nlckhpc3RvcnlcIlxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIaXN0b3J5KClcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGlzdG9yeS5qcyIsImltcG9ydCBUYWJTdG9yZSBmcm9tICcuL1RhYlN0b3JlJ1xuaW1wb3J0IFBvc3RTdG9yZSBmcm9tICcuL1Bvc3RTdG9yZSdcblxuZXhwb3J0IGNvbnN0IHRhYlN0b3JlID0gbmV3IFRhYlN0b3JlKClcbmV4cG9ydCBjb25zdCBwb3N0U3RvcmUgPSBuZXcgUG9zdFN0b3JlKClcblxud2luZG93LnN0b3JlcyA9IHtcbiAgdGFiU3RvcmUsXG4gIHBvc3RTdG9yZVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZXMvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gbG9jYWxzdG9yYWdlIHRhYiBrZXlcbiAgbHNQb3N0VGFiS2V5OiAnZ2hvc3Rjb2RlLXBvc3QtdGFicycsXG4gIC8vIHRhYiBleHBpcmF0aW9uIDFkXG4gIGxzUG9zdFRhYkV4cGlyYXRpb246IDI0ICogNjAgKiA2MCAqIDEwMDAsXG4gIC8vIGxvY2Fsc3RvcmFnZSB0aGVtZSBrZXlcbiAgbHNUaGVtZUtleTogJ2dob3N0Y29kZS10aGVtZScsXG4gIC8vIGxvY2Fsc3RvcmFnZSBwb3N0IGtleVxuICBsc1Bvc3RzS2V5OiAnZ2hvc3Rjb2RlLXBvc3RzJyxcbiAgLy8gcG9zdCBleHBpcmF0aW9uIHRpbWUgMW1pblxuICBsc1Bvc3RzRXhwaXJhdGlvbjogMSAqIDYwICogMTAwMCxcbiAgLy8gdGhlbWUgbmFtZSBmcm9tIC4vdGhlbWVzL3Jlc3VsdC5qc29uXG4gIHRoZW1lOiAnZGFya19kZWZhdWx0Jyxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbmZpZy5qcyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTQtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIHdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB3YXJuaW5nID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGFyZ3MpIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBhcmdzID0gbmV3IEFycmF5KGxlbiA+IDIgPyBsZW4gLSAyIDogMCk7XG4gICAgZm9yICh2YXIga2V5ID0gMjsga2V5IDwgbGVuOyBrZXkrKykge1xuICAgICAgYXJnc1trZXkgLSAyXSA9IGFyZ3VtZW50c1trZXldO1xuICAgIH1cbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgK1xuICAgICAgICAnbWVzc2FnZSBhcmd1bWVudCdcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdC5sZW5ndGggPCAxMCB8fCAoL15bc1xcV10qJC8pLnRlc3QoZm9ybWF0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnVGhlIHdhcm5pbmcgZm9ybWF0IHNob3VsZCBiZSBhYmxlIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgJyArXG4gICAgICAgICd3YXJuaW5nLiBQbGVhc2UsIHVzZSBhIG1vcmUgZGVzY3JpcHRpdmUgZm9ybWF0IHRoYW46ICcgKyBmb3JtYXRcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICtcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgICB9KTtcbiAgICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgfSBjYXRjaCh4KSB7fVxuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3dhcm5pbmcvYnJvd3Nlci5qcyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIGFkZExlYWRpbmdTbGFzaCA9IGV4cG9ydHMuYWRkTGVhZGluZ1NsYXNoID0gZnVuY3Rpb24gYWRkTGVhZGluZ1NsYXNoKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLycgPyBwYXRoIDogJy8nICsgcGF0aDtcbn07XG5cbnZhciBzdHJpcExlYWRpbmdTbGFzaCA9IGV4cG9ydHMuc3RyaXBMZWFkaW5nU2xhc2ggPSBmdW5jdGlvbiBzdHJpcExlYWRpbmdTbGFzaChwYXRoKSB7XG4gIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nID8gcGF0aC5zdWJzdHIoMSkgOiBwYXRoO1xufTtcblxudmFyIGhhc0Jhc2VuYW1lID0gZXhwb3J0cy5oYXNCYXNlbmFtZSA9IGZ1bmN0aW9uIGhhc0Jhc2VuYW1lKHBhdGgsIHByZWZpeCkge1xuICByZXR1cm4gbmV3IFJlZ0V4cCgnXicgKyBwcmVmaXggKyAnKFxcXFwvfFxcXFw/fCN8JCknLCAnaScpLnRlc3QocGF0aCk7XG59O1xuXG52YXIgc3RyaXBCYXNlbmFtZSA9IGV4cG9ydHMuc3RyaXBCYXNlbmFtZSA9IGZ1bmN0aW9uIHN0cmlwQmFzZW5hbWUocGF0aCwgcHJlZml4KSB7XG4gIHJldHVybiBoYXNCYXNlbmFtZShwYXRoLCBwcmVmaXgpID8gcGF0aC5zdWJzdHIocHJlZml4Lmxlbmd0aCkgOiBwYXRoO1xufTtcblxudmFyIHN0cmlwVHJhaWxpbmdTbGFzaCA9IGV4cG9ydHMuc3RyaXBUcmFpbGluZ1NsYXNoID0gZnVuY3Rpb24gc3RyaXBUcmFpbGluZ1NsYXNoKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguY2hhckF0KHBhdGgubGVuZ3RoIC0gMSkgPT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aDtcbn07XG5cbnZhciBwYXJzZVBhdGggPSBleHBvcnRzLnBhcnNlUGF0aCA9IGZ1bmN0aW9uIHBhcnNlUGF0aChwYXRoKSB7XG4gIHZhciBwYXRobmFtZSA9IHBhdGggfHwgJy8nO1xuICB2YXIgc2VhcmNoID0gJyc7XG4gIHZhciBoYXNoID0gJyc7XG5cbiAgdmFyIGhhc2hJbmRleCA9IHBhdGhuYW1lLmluZGV4T2YoJyMnKTtcbiAgaWYgKGhhc2hJbmRleCAhPT0gLTEpIHtcbiAgICBoYXNoID0gcGF0aG5hbWUuc3Vic3RyKGhhc2hJbmRleCk7XG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZS5zdWJzdHIoMCwgaGFzaEluZGV4KTtcbiAgfVxuXG4gIHZhciBzZWFyY2hJbmRleCA9IHBhdGhuYW1lLmluZGV4T2YoJz8nKTtcbiAgaWYgKHNlYXJjaEluZGV4ICE9PSAtMSkge1xuICAgIHNlYXJjaCA9IHBhdGhuYW1lLnN1YnN0cihzZWFyY2hJbmRleCk7XG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZS5zdWJzdHIoMCwgc2VhcmNoSW5kZXgpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZTogcGF0aG5hbWUsXG4gICAgc2VhcmNoOiBzZWFyY2ggPT09ICc/JyA/ICcnIDogc2VhcmNoLFxuICAgIGhhc2g6IGhhc2ggPT09ICcjJyA/ICcnIDogaGFzaFxuICB9O1xufTtcblxudmFyIGNyZWF0ZVBhdGggPSBleHBvcnRzLmNyZWF0ZVBhdGggPSBmdW5jdGlvbiBjcmVhdGVQYXRoKGxvY2F0aW9uKSB7XG4gIHZhciBwYXRobmFtZSA9IGxvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgc2VhcmNoID0gbG9jYXRpb24uc2VhcmNoLFxuICAgICAgaGFzaCA9IGxvY2F0aW9uLmhhc2g7XG5cblxuICB2YXIgcGF0aCA9IHBhdGhuYW1lIHx8ICcvJztcblxuICBpZiAoc2VhcmNoICYmIHNlYXJjaCAhPT0gJz8nKSBwYXRoICs9IHNlYXJjaC5jaGFyQXQoMCkgPT09ICc/JyA/IHNlYXJjaCA6ICc/JyArIHNlYXJjaDtcblxuICBpZiAoaGFzaCAmJiBoYXNoICE9PSAnIycpIHBhdGggKz0gaGFzaC5jaGFyQXQoMCkgPT09ICcjJyA/IGhhc2ggOiAnIycgKyBoYXNoO1xuXG4gIHJldHVybiBwYXRoO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9QYXRoVXRpbHMuanMiLCJpbXBvcnQgJy4vY29tcG9uZW50cy9lbWl0dGVyJ1xuXG5pbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnXG5cbmltcG9ydCAncGFydGlhbHMvcG9zdC10YWInXG5pbXBvcnQgJ3BhcnRpYWxzL3NpZGUtYmFyLWhlYWRlcidcbmltcG9ydCAncGFydGlhbHMvc2lkZS1iYXItYm9keSdcbmltcG9ydCAncGFydGlhbHMvZm9vdGVyJ1xuaW1wb3J0ICdwYXJ0aWFscy9wb3N0J1xuaW1wb3J0ICdwYXJ0aWFscy9wb3N0LW5hdidcbmltcG9ydCAncGFydGlhbHMvaG9tZSdcbmltcG9ydCAncGFydGlhbHMvYXV0aG9yJ1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9naG9zdGNvZGUuanMiLCJpbXBvcnQgbWl0dCBmcm9tICdtaXR0J1xud2luZG93LmVtaXR0ZXIgPSBtaXR0KClcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9lbWl0dGVyL2luZGV4LmpzIiwiLy8gICAgICBcbi8vIEFuIGV2ZW50IGhhbmRsZXIgY2FuIHRha2UgYW4gb3B0aW9uYWwgZXZlbnQgYXJndW1lbnRcbi8vIGFuZCBzaG91bGQgbm90IHJldHVybiBhIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbi8vIEFuIGFycmF5IG9mIGFsbCBjdXJyZW50bHkgcmVnaXN0ZXJlZCBldmVudCBoYW5kbGVycyBmb3IgYSB0eXBlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuLy8gQSBtYXAgb2YgZXZlbnQgdHlwZXMgYW5kIHRoZWlyIGNvcnJlc3BvbmRpbmcgZXZlbnQgaGFuZGxlcnMuXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIFxuXG4vKiogTWl0dDogVGlueSAofjIwMGIpIGZ1bmN0aW9uYWwgZXZlbnQgZW1pdHRlciAvIHB1YnN1Yi5cbiAqICBAbmFtZSBtaXR0XG4gKiAgQHJldHVybnMge01pdHR9XG4gKi9cbmZ1bmN0aW9uIG1pdHQoYWxsICAgICAgICAgICAgICAgICApIHtcblx0YWxsID0gYWxsIHx8IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cblx0cmV0dXJuIHtcblx0XHQvKipcblx0XHQgKiBSZWdpc3RlciBhbiBldmVudCBoYW5kbGVyIGZvciB0aGUgZ2l2ZW4gdHlwZS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSAge1N0cmluZ30gdHlwZVx0VHlwZSBvZiBldmVudCB0byBsaXN0ZW4gZm9yLCBvciBgXCIqXCJgIGZvciBhbGwgZXZlbnRzXG5cdFx0ICogQHBhcmFtICB7RnVuY3Rpb259IGhhbmRsZXIgRnVuY3Rpb24gdG8gY2FsbCBpbiByZXNwb25zZSB0byBnaXZlbiBldmVudFxuXHRcdCAqIEBtZW1iZXJPZiBtaXR0XG5cdFx0ICovXG5cdFx0b246IGZ1bmN0aW9uIG9uKHR5cGUgICAgICAgICwgaGFuZGxlciAgICAgICAgICAgICAgKSB7XG5cdFx0XHQoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcik7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIFJlbW92ZSBhbiBldmVudCBoYW5kbGVyIGZvciB0aGUgZ2l2ZW4gdHlwZS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSAge1N0cmluZ30gdHlwZVx0VHlwZSBvZiBldmVudCB0byB1bnJlZ2lzdGVyIGBoYW5kbGVyYCBmcm9tLCBvciBgXCIqXCJgXG5cdFx0ICogQHBhcmFtICB7RnVuY3Rpb259IGhhbmRsZXIgSGFuZGxlciBmdW5jdGlvbiB0byByZW1vdmVcblx0XHQgKiBAbWVtYmVyT2YgbWl0dFxuXHRcdCAqL1xuXHRcdG9mZjogZnVuY3Rpb24gb2ZmKHR5cGUgICAgICAgICwgaGFuZGxlciAgICAgICAgICAgICAgKSB7XG5cdFx0XHRpZiAoYWxsW3R5cGVdKSB7XG5cdFx0XHRcdGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBJbnZva2UgYWxsIGhhbmRsZXJzIGZvciB0aGUgZ2l2ZW4gdHlwZS5cblx0XHQgKiBJZiBwcmVzZW50LCBgXCIqXCJgIGhhbmRsZXJzIGFyZSBpbnZva2VkIGFmdGVyIHR5cGUtbWF0Y2hlZCBoYW5kbGVycy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlICBUaGUgZXZlbnQgdHlwZSB0byBpbnZva2Vcblx0XHQgKiBAcGFyYW0ge0FueX0gW2V2dF0gIEFueSB2YWx1ZSAob2JqZWN0IGlzIHJlY29tbWVuZGVkIGFuZCBwb3dlcmZ1bCksIHBhc3NlZCB0byBlYWNoIGhhbmRsZXJcblx0XHQgKiBAbWVtYmVyb2YgbWl0dFxuXHRcdCAqL1xuXHRcdGVtaXQ6IGZ1bmN0aW9uIGVtaXQodHlwZSAgICAgICAgLCBldnQgICAgICkge1xuXHRcdFx0KGFsbFt0eXBlXSB8fCBbXSkubWFwKGZ1bmN0aW9uIChoYW5kbGVyKSB7IGhhbmRsZXIoZXZ0KTsgfSk7XG5cdFx0XHQoYWxsWycqJ10gfHwgW10pLm1hcChmdW5jdGlvbiAoaGFuZGxlcikgeyBoYW5kbGVyKHR5cGUsIGV2dCk7IH0pO1xuXHRcdH1cblx0fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWl0dDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1pdHQuZXMuanMubWFwXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvbWl0dC9kaXN0L21pdHQuZXMuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy9pbmRleC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgJy4vc3R5bGUuc2NzcydcbmltcG9ydCB7IHRhYlN0b3JlIH0gZnJvbSAnIy9zdG9yZXMnXG5pbXBvcnQgaGlzdG9yeSBmcm9tICcjL2hpc3RvcnknXG5pbXBvcnQgeyBoU2Nyb2xsLCBpc1Bvc3RQYWdlIH0gZnJvbSAnIy91dGlscydcblxuJChmdW5jdGlvbigpIHtcbiAgaWYgKCFpc1Bvc3RQYWdlKCkpIHJldHVyblxuXG4gIGxldCAkcG9zdFRhYnMgPSAkKCcjSi1wb3N0LXRhYicpXG4gIGNvbnN0ICRzY3JvbGxXcmFwID0gJCgnLkotcG9zdC10YWItc2Nyb2xsZXItd3JhcCcpXG4gIGNvbnN0IG5kU2Nyb2xsV3JhcCA9ICRzY3JvbGxXcmFwLmdldCgwKVxuXG4gIGVtaXR0ZXIub24oJ2FkZC1wb3N0LXRhYicsIHBvc3QgPT4ge1xuICAgIGNvbnN0IHRhYnMgPSB0YWJTdG9yZS5nZXRUYWJzKClcbiAgICBpZiAoIXRhYnMuZmlsdGVyKHRhYiA9PiB0YWIuaWQgPT09IHBvc3QuaWQpLmxlbmd0aCkge1xuICAgICAgdGFicy5wdXNoKHsgLi4ucG9zdCB9KVxuXG4gICAgICB0YWJTdG9yZS5zZXRUYWJzKHRhYnMpXG4gICAgfVxuXG4gICAgZW1pdHRlci5lbWl0KCd0YWItcmVmcmVzaCcsIHsgLi4ucG9zdCB9KVxuICB9KVxuXG4gIGVtaXR0ZXIub24oJ3RhYi1yZWZyZXNoJywgKGFjdGl2ZSA9IHt9KSA9PiB7XG4gICAgY29uc3QgYWN0aXZlSWQgPSBhY3RpdmUuaWRcbiAgICBjb25zdCB0YWJzID0gdGFiU3RvcmUuZ2V0VGFicygpXG4gICAgY29uc3QgY3VycmVudFRhYiA9IHRhYlN0b3JlLmN1cnJlbnRUYWJcblxuICAgIGNvbnN0ICRhY3RpdmUgPSAkKCcjSi1wb3N0LXRhYicpXG4gICAgICAuaHRtbChcbiAgICAgICAgdGFic1xuICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICB0YWIgPT5cbiAgICAgICAgICAgICAgYDxkaXYgdGl0bGU9XCIke3RhYi50aXRsZX1cIiBjbGFzcz1cIkotdGFiLWl0ZW0gbGlnaHQgaG92ZXItb3BhY2l0eTEgZmxleC1pdGVtMCBzaW5nbGUtbGluZSBpdGVtICR7YWN0aXZlSWQgPT09IHRhYi5pZCA/ICdhY3RpdmUnIDogJyd9XCIgZGF0YS1pZD1cIiR7XG4gICAgICAgICAgICAgICAgdGFiLmlkXG4gICAgICAgICAgICAgIH1cIj4ke3RhYi50aXRsZX08aSBjbGFzcz1cImNsb3NlIEotcG9zdC10YWItY2xvc2UgbGlnaHRlciBob3Zlci1vcGFjaXR5MVwiIGRhdGEtc2x1Zz1cIiR7dGFiLnNsdWd9XCI+PC9pPjwvZGl2PmBcbiAgICAgICAgICApXG4gICAgICAgICAgLmpvaW4oJycpXG4gICAgICApXG4gICAgICAuZmluZCgnLmFjdGl2ZScpXG5cbiAgICAvLyBub3QgcmVmZXRjaCBjdXJyZW50IHBvc3RcbiAgICBpZiAoIWN1cnJlbnRUYWIgfHwgY3VycmVudFRhYi5pZCAhPT0gYWN0aXZlSWQpIHtcbiAgICAgIGhpc3RvcnkucHVzaChhY3RpdmUudXJsLCB7IC4uLmFjdGl2ZSB9KVxuICAgICAgdGFiU3RvcmUuc2V0Q3VycmVudFRhYih7IC4uLmFjdGl2ZSB9KVxuICAgIH1cblxuICAgIHNjcm9sbDJ2aWV3KCRhY3RpdmUpXG4gIH0pXG5cbiAgJHBvc3RUYWJzXG4gICAgLm9uKCdjbGljaycsICcuSi1wb3N0LXRhYi1jbG9zZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIHRhYlN0b3JlLmRlbGV0ZVRhYkl0ZW0oXG4gICAgICAgICQodGhpcylcbiAgICAgICAgICAucGFyZW50KCcuSi10YWItaXRlbScpXG4gICAgICAgICAgLmRhdGEoJ2lkJylcbiAgICAgIClcbiAgICB9KVxuICAgIC5vbignY2xpY2snLCAnLkotdGFiLWl0ZW0nLCBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKVxuICAgICAgaWYgKCR0aGlzLmlzKCcuYWN0aXZlJykpIHJldHVyblxuXG4gICAgICBjb25zdCBpZCA9ICR0aGlzLmRhdGEoJ2lkJylcbiAgICAgIGNvbnN0IGN1cnJlbnRUYWIgPSB0YWJTdG9yZS5nZXRUYWJzKCkuZmlsdGVyKHRhYiA9PiB0YWIuaWQgPT09IGlkKVswXSB8fCB7fVxuXG4gICAgICAkdGhpc1xuICAgICAgICAuYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAgIC5zaWJsaW5ncygpXG4gICAgICAgIC5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAgIHRhYlN0b3JlLnNldEN1cnJlbnRUYWIoY3VycmVudFRhYilcbiAgICAgIGhpc3RvcnkucHVzaChjdXJyZW50VGFiLnVybCwgeyAuLi5jdXJyZW50VGFiIH0pXG5cbiAgICAgIHNjcm9sbDJ2aWV3KCR0aGlzKVxuICAgIH0pXG5cbiAgLyoqXG4gICAqIHNjcm9sbCBzZWxlY3RlZCB0YWIgaXRlbSBpbnRvIHZpZXcgaWYgaXQgaXMgb3V0IG9mIHZpZXdcbiAgICovXG4gIGZ1bmN0aW9uIHNjcm9sbDJ2aWV3KCRhY3RpdmUpIHtcbiAgICAvLyB3cmFwIGVsZW1lbnRcbiAgICBjb25zdCB3cmFwV2lkdGggPSAkc2Nyb2xsV3JhcC53aWR0aCgpXG4gICAgY29uc3Qgd3JhcFNjcm9sbExlZnQgPSAkc2Nyb2xsV3JhcC5zY3JvbGxMZWZ0KClcbiAgICBjb25zdCB3cmFwUmlnaHQgPSB3cmFwV2lkdGggKyB3cmFwU2Nyb2xsTGVmdFxuICAgIGNvbnN0IHRocmVzaG9sZCA9IDEwXG5cbiAgICAvLyBhY3RpdmUgZWxlbWVudFxuICAgIGNvbnN0IG5kQWN0aXZlID0gJGFjdGl2ZS5nZXQoMClcbiAgICBjb25zdCBhY3RpdmVXaWR0aCA9ICRhY3RpdmUub3V0ZXJXaWR0aCgpXG4gICAgY29uc3QgYWN0aXZlTGVmdCA9IG5kQWN0aXZlLm9mZnNldExlZnRcbiAgICBjb25zdCBhY3RpdmVSaWdodCA9IGFjdGl2ZUxlZnQgKyBhY3RpdmVXaWR0aFxuICAgIGlmIChhY3RpdmVSaWdodCA+IHdyYXBXaWR0aCArIHdyYXBTY3JvbGxMZWZ0KSB7XG4gICAgICBuZFNjcm9sbFdyYXAuc2Nyb2xsTGVmdCA9IGFjdGl2ZVJpZ2h0IC0gd3JhcFdpZHRoIC0gdGhyZXNob2xkXG4gICAgfVxuICAgIGlmIChhY3RpdmVMZWZ0IDw9IHdyYXBTY3JvbGxMZWZ0KSB7XG4gICAgICBuZFNjcm9sbFdyYXAuc2Nyb2xsTGVmdCA9IGFjdGl2ZUxlZnQgLSB0aHJlc2hvbGRcbiAgICB9XG4gIH1cblxuICBoU2Nyb2xsKCRzY3JvbGxXcmFwLmdldCgwKSlcbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYXJ0aWFscy9wb3N0LXRhYi9pbmRleC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYXJ0aWFscy9wb3N0LXRhYi9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQge2xzUG9zdFRhYktleSwgbHNQb3N0VGFiRXhwaXJhdGlvbn0gZnJvbSAnY29uZmlnJ1xuY29uc3QgbHMgPSBsb2NhbFN0b3JhZ2VcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjdXJyZW50VGFiID0gbnVsbFxuXG4gIGdldFRhYnMoKSB7XG4gICAgbGV0IHRhYnMgPSBscy5nZXRJdGVtKGxzUG9zdFRhYktleSkgfHwgJydcbiAgICBjb25zdCBbdGFic0RhdGEsIHRpbWVzdGFtcF0gPSB0YWJzLnNwbGl0KCdfX18nKVxuICAgIGlmICghdGFicyB8fCAhdGltZXN0YW1wIHx8ICtuZXcgRGF0ZSgpIC0gdGltZXN0YW1wID49IGxzUG9zdFRhYkV4cGlyYXRpb24pIHJldHVybiBbXVxuXG4gICAgcmV0dXJuIHRhYnNEYXRhLnNwbGl0KCcsJykubWFwKHRhYiA9PiB7XG4gICAgICBjb25zdCBbaWQsIHRpdGxlLCB1cmwsIHNsdWddID0gdGFiLnNwbGl0KCc6JylcbiAgICAgIHJldHVybiB7IGlkLCB0aXRsZSwgdXJsLCBzbHVnIH1cbiAgICB9KVxuICB9XG5cbiAgc2V0VGFicyh0YWJzKSB7XG4gICAgbHMuc2V0SXRlbShsc1Bvc3RUYWJLZXksIHRhYnMubGVuZ3RoID8gdGFicy5tYXAodGFiID0+IGAke3RhYi5pZH06JHt0YWIudGl0bGV9OiR7dGFiLnVybH06JHt0YWIuc2x1Z31gKS5qb2luKCcsJykgKyAnX19fJyArICgrbmV3IERhdGUoKSkgOiAnJylcbiAgfVxuXG4gIHNldEN1cnJlbnRUYWIodGFiKSB7XG4gICAgdGhpcy5jdXJyZW50VGFiID0gdGFiXG4gIH1cblxuICBkZWxldGVUYWJJdGVtKGlkKSB7XG4gICAgbGV0IHRhYnMgPSB0aGlzLmdldFRhYnMoKVxuICAgIGxldCBuZXh0VGFiID0gbnVsbFxuICAgIGNvbnN0IGlzQ3VycmVudFRhYiA9IGlkID09PSB0aGlzLmN1cnJlbnRUYWIuaWRcblxuICAgIGNvbnN0IGRlbGV0ZWRJZHggPSB0YWJzLmZpbmRJbmRleCh0YWIgPT4gdGFiLmlkID09PSBpZClcbiAgICB0YWJzID0gdGFicy5maWx0ZXIoKHRhYiwgaWR4KSA9PiB0YWIuaWQgIT09IGlkKVxuXG4gICAgdGhpcy5zZXRUYWJzKHRhYnMpXG5cbiAgICBpZiAodGFicy5sZW5ndGgpIHtcbiAgICAgIGlmIChpc0N1cnJlbnRUYWIpIHtcbiAgICAgICAgbmV4dFRhYiA9IGRlbGV0ZWRJZHggPT09IDAgPyB0YWJzWzBdIDogdGFic1tkZWxldGVkSWR4IC0gMV1cbiAgICAgIH1cblxuICAgICAgZW1pdHRlci5lbWl0KCd0YWItcmVmcmVzaCcsIG5leHRUYWIgfHwgdGhpcy5jdXJyZW50VGFiKVxuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhdGlvbi5ocmVmID0gJy8nXG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmVzL1RhYlN0b3JlLmpzIiwiaW1wb3J0IHtsc1Bvc3RzS2V5LCBsc1Bvc3RzRXhwaXJhdGlvbn0gZnJvbSAnY29uZmlnJ1xuaW1wb3J0IHsgdGFiU3RvcmUgfSBmcm9tICcjL3N0b3JlcydcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tICcjL3V0aWxzJ1xuY29uc3QgbHMgPSBsb2NhbFN0b3JhZ2VcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBmZXRjaFBvc3QoaWQpIHtcbiAgICBjb25zdCBjYWNoZSA9IHRoaXMuZnJvbUNhY2hlKGlkKVxuXG4gICAgcmV0dXJuIGNhY2hlXG4gICAgICA/ICQuRGVmZXJyZWQoKS5yZXNvbHZlKGNhY2hlKVxuICAgICAgOiAkLmdldChnaG9zdC51cmwuYXBpKGBwb3N0cy8ke2lkfWApLCB7XG4gICAgICAgICAgaW5jbHVkZTogJ2F1dGhvcidcbiAgICAgICAgfSlcbiAgICAgICAgICAuZmFpbChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgaWYgKGVyci5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAgICAgICB0YWJTdG9yZS5kZWxldGVUYWJJdGVtKGlkKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmRvbmUoZGF0YSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwb3N0ID0gZGF0YS5wb3N0c1swXSB8fCB7fVxuICAgICAgICAgICAgY29uc29sZS5sb2cocG9zdClcbiAgICAgICAgICAgIHRoaXMuY2FjaGVQb3N0KGlkLCBwb3N0KVxuICAgICAgICAgICAgcmV0dXJuIHBvc3RcbiAgICAgICAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFJlYWQgcG9zdCBmcm9tIGNhY2hlIGZpcnN0XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpZCAtPiBwb3N0IGlkXG4gICAqICAtIG9ubHkgY2FjaGUgNW1pblxuICAgKi9cbiAgZnJvbUNhY2hlKGlkKSB7XG4gICAgbGV0IGxzUG9zdHMgPSBscy5nZXRJdGVtKGxzUG9zdHNLZXkpXG4gICAgbHNQb3N0cyA9IGxzUG9zdHMgPyBKU09OLnBhcnNlKGxzUG9zdHMpIDoge31cblxuICAgIGNvbnN0IHBvc3QgPSBsc1Bvc3RzW2lkXVxuICAgIGNvbnN0IHVzZWFibGUgPSBwb3N0ICYmICtuZXcgRGF0ZSgpIC0gcG9zdC50aW1lc3RhbXAgPD0gbHNQb3N0c0V4cGlyYXRpb25cblxuICAgIGlmICh1c2VhYmxlKSB7XG4gICAgICBjb25zb2xlLmluZm8oJ1tQb3N0IHJlYWRlZCBmcm9tIGNhY2hlXTonLCBwb3N0LnRpdGxlKVxuICAgICAgY29uc3QgYXV0aG9yID0gSlNPTi5wYXJzZShwb3N0LmF1dGhvcilcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBvc3RzOiBbeyAuLi5wb3N0LCBhdXRob3IsIGZyb21DYWNoZTogMSB9XVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBkZWxldGVQb3N0RnJvbUNhY2hlKGlkKSB7XG4gICAgbGV0IGxzUG9zdHMgPSBscy5nZXRJdGVtKGxzUG9zdHNLZXkpXG4gICAgbHNQb3N0cyA9IGxzUG9zdHMgPyBKU09OLnBhcnNlKGxzUG9zdHMpIDoge31cbiAgICBjb25zb2xlLmxvZygnW2RlbGV0ZWQgcG9zdCBzdWNjZXNzXTonLCBsc1Bvc3RzW2lkXS50aXRsZSlcblxuICAgIGRlbGV0ZSBsc1Bvc3RzW2lkXVxuXG4gICAgbHMuc2V0SXRlbShsc1Bvc3RzS2V5LCBKU09OLnN0cmluZ2lmeShsc1Bvc3RzKSlcbiAgfVxuXG4gIGNhY2hlUG9zdChpZCwgcG9zdCkge1xuICAgIGlmIChwb3N0LmZyb21DYWNoZSkgcmV0dXJuXG5cbiAgICBsZXQgbHNQb3N0cyA9IGxzLmdldEl0ZW0obHNQb3N0c0tleSlcbiAgICBsc1Bvc3RzID0gbHNQb3N0cyA/IEpTT04ucGFyc2UobHNQb3N0cykgOiB7fVxuXG4gICAgbHNQb3N0c1tpZF0gPSB7XG4gICAgICAuLi5wb3N0LFxuICAgICAgYXV0aG9yOiBKU09OLnN0cmluZ2lmeShwb3N0LmF1dGhvciksXG4gICAgICB0aW1lc3RhbXA6ICtuZXcgRGF0ZSgpXG4gICAgfVxuXG4gICAgLy8gY2FjaGUgdXAgdG8gNSBwb3N0c1xuICAgIC8vIGRlbGV0ZSB0aGUgb2xkZXN0IG9uZSBpZiBtb3JlIHRoYW4gNVxuICAgIGxldCBpZHMgPSBPYmplY3Qua2V5cyhsc1Bvc3RzKVxuICAgIGlmIChpZHMubGVuZ3RoID4gNSkge1xuICAgICAgY29uc3Qgc2hvdWxkRGVsZXRlSWQgPSBpZHNcbiAgICAgICAgLm1hcChpZCA9PiAoe1xuICAgICAgICAgIHRpbWVzdGFtcDogbHNQb3N0c1tpZF0udGltZXN0YW1wLFxuICAgICAgICAgIGlkXG4gICAgICAgIH0pKVxuICAgICAgICAuc29ydCgoYSwgYikgPT4gYS50aW1lc3RhbXAgLSBiLnRpbWVzdGFtcClcbiAgICAgICAgLm1hcChpdGVtID0+IGl0ZW0uaWQpXG4gICAgICAgIC5zaGlmdCgpXG5cbiAgICAgIGRlbGV0ZSBsc1Bvc3RzW3Nob3VsZERlbGV0ZUlkXVxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKGlkcy5sZW5ndGgpXG4gICAgbHMuc2V0SXRlbShsc1Bvc3RzS2V5LCBKU09OLnN0cmluZ2lmeShsc1Bvc3RzKSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3Jlcy9Qb3N0U3RvcmUuanMiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfTG9jYXRpb25VdGlscyA9IHJlcXVpcmUoJy4vTG9jYXRpb25VdGlscycpO1xuXG52YXIgX1BhdGhVdGlscyA9IHJlcXVpcmUoJy4vUGF0aFV0aWxzJyk7XG5cbnZhciBfY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIgPSByZXF1aXJlKCcuL2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyJyk7XG5cbnZhciBfY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIpO1xuXG52YXIgX0RPTVV0aWxzID0gcmVxdWlyZSgnLi9ET01VdGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgUG9wU3RhdGVFdmVudCA9ICdwb3BzdGF0ZSc7XG52YXIgSGFzaENoYW5nZUV2ZW50ID0gJ2hhc2hjaGFuZ2UnO1xuXG52YXIgZ2V0SGlzdG9yeVN0YXRlID0gZnVuY3Rpb24gZ2V0SGlzdG9yeVN0YXRlKCkge1xuICB0cnkge1xuICAgIHJldHVybiB3aW5kb3cuaGlzdG9yeS5zdGF0ZSB8fCB7fTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIElFIDExIHNvbWV0aW1lcyB0aHJvd3Mgd2hlbiBhY2Nlc3Npbmcgd2luZG93Lmhpc3Rvcnkuc3RhdGVcbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL1JlYWN0VHJhaW5pbmcvaGlzdG9yeS9wdWxsLzI4OVxuICAgIHJldHVybiB7fTtcbiAgfVxufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGlzdG9yeSBvYmplY3QgdGhhdCB1c2VzIHRoZSBIVE1MNSBoaXN0b3J5IEFQSSBpbmNsdWRpbmdcbiAqIHB1c2hTdGF0ZSwgcmVwbGFjZVN0YXRlLCBhbmQgdGhlIHBvcHN0YXRlIGV2ZW50LlxuICovXG52YXIgY3JlYXRlQnJvd3Nlckhpc3RvcnkgPSBmdW5jdGlvbiBjcmVhdGVCcm93c2VySGlzdG9yeSgpIHtcbiAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkoX0RPTVV0aWxzLmNhblVzZURPTSwgJ0Jyb3dzZXIgaGlzdG9yeSBuZWVkcyBhIERPTScpO1xuXG4gIHZhciBnbG9iYWxIaXN0b3J5ID0gd2luZG93Lmhpc3Rvcnk7XG4gIHZhciBjYW5Vc2VIaXN0b3J5ID0gKDAsIF9ET01VdGlscy5zdXBwb3J0c0hpc3RvcnkpKCk7XG4gIHZhciBuZWVkc0hhc2hDaGFuZ2VMaXN0ZW5lciA9ICEoMCwgX0RPTVV0aWxzLnN1cHBvcnRzUG9wU3RhdGVPbkhhc2hDaGFuZ2UpKCk7XG5cbiAgdmFyIF9wcm9wcyRmb3JjZVJlZnJlc2ggPSBwcm9wcy5mb3JjZVJlZnJlc2gsXG4gICAgICBmb3JjZVJlZnJlc2ggPSBfcHJvcHMkZm9yY2VSZWZyZXNoID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IF9wcm9wcyRmb3JjZVJlZnJlc2gsXG4gICAgICBfcHJvcHMkZ2V0VXNlckNvbmZpcm0gPSBwcm9wcy5nZXRVc2VyQ29uZmlybWF0aW9uLFxuICAgICAgZ2V0VXNlckNvbmZpcm1hdGlvbiA9IF9wcm9wcyRnZXRVc2VyQ29uZmlybSA9PT0gdW5kZWZpbmVkID8gX0RPTVV0aWxzLmdldENvbmZpcm1hdGlvbiA6IF9wcm9wcyRnZXRVc2VyQ29uZmlybSxcbiAgICAgIF9wcm9wcyRrZXlMZW5ndGggPSBwcm9wcy5rZXlMZW5ndGgsXG4gICAgICBrZXlMZW5ndGggPSBfcHJvcHMka2V5TGVuZ3RoID09PSB1bmRlZmluZWQgPyA2IDogX3Byb3BzJGtleUxlbmd0aDtcblxuICB2YXIgYmFzZW5hbWUgPSBwcm9wcy5iYXNlbmFtZSA/ICgwLCBfUGF0aFV0aWxzLnN0cmlwVHJhaWxpbmdTbGFzaCkoKDAsIF9QYXRoVXRpbHMuYWRkTGVhZGluZ1NsYXNoKShwcm9wcy5iYXNlbmFtZSkpIDogJyc7XG5cbiAgdmFyIGdldERPTUxvY2F0aW9uID0gZnVuY3Rpb24gZ2V0RE9NTG9jYXRpb24oaGlzdG9yeVN0YXRlKSB7XG4gICAgdmFyIF9yZWYgPSBoaXN0b3J5U3RhdGUgfHwge30sXG4gICAgICAgIGtleSA9IF9yZWYua2V5LFxuICAgICAgICBzdGF0ZSA9IF9yZWYuc3RhdGU7XG5cbiAgICB2YXIgX3dpbmRvdyRsb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbixcbiAgICAgICAgcGF0aG5hbWUgPSBfd2luZG93JGxvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgICBzZWFyY2ggPSBfd2luZG93JGxvY2F0aW9uLnNlYXJjaCxcbiAgICAgICAgaGFzaCA9IF93aW5kb3ckbG9jYXRpb24uaGFzaDtcblxuXG4gICAgdmFyIHBhdGggPSBwYXRobmFtZSArIHNlYXJjaCArIGhhc2g7XG5cbiAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKCFiYXNlbmFtZSB8fCAoMCwgX1BhdGhVdGlscy5oYXNCYXNlbmFtZSkocGF0aCwgYmFzZW5hbWUpLCAnWW91IGFyZSBhdHRlbXB0aW5nIHRvIHVzZSBhIGJhc2VuYW1lIG9uIGEgcGFnZSB3aG9zZSBVUkwgcGF0aCBkb2VzIG5vdCBiZWdpbiAnICsgJ3dpdGggdGhlIGJhc2VuYW1lLiBFeHBlY3RlZCBwYXRoIFwiJyArIHBhdGggKyAnXCIgdG8gYmVnaW4gd2l0aCBcIicgKyBiYXNlbmFtZSArICdcIi4nKTtcblxuICAgIGlmIChiYXNlbmFtZSkgcGF0aCA9ICgwLCBfUGF0aFV0aWxzLnN0cmlwQmFzZW5hbWUpKHBhdGgsIGJhc2VuYW1lKTtcblxuICAgIHJldHVybiAoMCwgX0xvY2F0aW9uVXRpbHMuY3JlYXRlTG9jYXRpb24pKHBhdGgsIHN0YXRlLCBrZXkpO1xuICB9O1xuXG4gIHZhciBjcmVhdGVLZXkgPSBmdW5jdGlvbiBjcmVhdGVLZXkoKSB7XG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCBrZXlMZW5ndGgpO1xuICB9O1xuXG4gIHZhciB0cmFuc2l0aW9uTWFuYWdlciA9ICgwLCBfY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIyLmRlZmF1bHQpKCk7XG5cbiAgdmFyIHNldFN0YXRlID0gZnVuY3Rpb24gc2V0U3RhdGUobmV4dFN0YXRlKSB7XG4gICAgX2V4dGVuZHMoaGlzdG9yeSwgbmV4dFN0YXRlKTtcblxuICAgIGhpc3RvcnkubGVuZ3RoID0gZ2xvYmFsSGlzdG9yeS5sZW5ndGg7XG5cbiAgICB0cmFuc2l0aW9uTWFuYWdlci5ub3RpZnlMaXN0ZW5lcnMoaGlzdG9yeS5sb2NhdGlvbiwgaGlzdG9yeS5hY3Rpb24pO1xuICB9O1xuXG4gIHZhciBoYW5kbGVQb3BTdGF0ZSA9IGZ1bmN0aW9uIGhhbmRsZVBvcFN0YXRlKGV2ZW50KSB7XG4gICAgLy8gSWdub3JlIGV4dHJhbmVvdXMgcG9wc3RhdGUgZXZlbnRzIGluIFdlYktpdC5cbiAgICBpZiAoKDAsIF9ET01VdGlscy5pc0V4dHJhbmVvdXNQb3BzdGF0ZUV2ZW50KShldmVudCkpIHJldHVybjtcblxuICAgIGhhbmRsZVBvcChnZXRET01Mb2NhdGlvbihldmVudC5zdGF0ZSkpO1xuICB9O1xuXG4gIHZhciBoYW5kbGVIYXNoQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlSGFzaENoYW5nZSgpIHtcbiAgICBoYW5kbGVQb3AoZ2V0RE9NTG9jYXRpb24oZ2V0SGlzdG9yeVN0YXRlKCkpKTtcbiAgfTtcblxuICB2YXIgZm9yY2VOZXh0UG9wID0gZmFsc2U7XG5cbiAgdmFyIGhhbmRsZVBvcCA9IGZ1bmN0aW9uIGhhbmRsZVBvcChsb2NhdGlvbikge1xuICAgIGlmIChmb3JjZU5leHRQb3ApIHtcbiAgICAgIGZvcmNlTmV4dFBvcCA9IGZhbHNlO1xuICAgICAgc2V0U3RhdGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFjdGlvbiA9ICdQT1AnO1xuXG4gICAgICB0cmFuc2l0aW9uTWFuYWdlci5jb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGZ1bmN0aW9uIChvaykge1xuICAgICAgICBpZiAob2spIHtcbiAgICAgICAgICBzZXRTdGF0ZSh7IGFjdGlvbjogYWN0aW9uLCBsb2NhdGlvbjogbG9jYXRpb24gfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV2ZXJ0UG9wKGxvY2F0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciByZXZlcnRQb3AgPSBmdW5jdGlvbiByZXZlcnRQb3AoZnJvbUxvY2F0aW9uKSB7XG4gICAgdmFyIHRvTG9jYXRpb24gPSBoaXN0b3J5LmxvY2F0aW9uO1xuXG4gICAgLy8gVE9ETzogV2UgY291bGQgcHJvYmFibHkgbWFrZSB0aGlzIG1vcmUgcmVsaWFibGUgYnlcbiAgICAvLyBrZWVwaW5nIGEgbGlzdCBvZiBrZXlzIHdlJ3ZlIHNlZW4gaW4gc2Vzc2lvblN0b3JhZ2UuXG4gICAgLy8gSW5zdGVhZCwgd2UganVzdCBkZWZhdWx0IHRvIDAgZm9yIGtleXMgd2UgZG9uJ3Qga25vdy5cblxuICAgIHZhciB0b0luZGV4ID0gYWxsS2V5cy5pbmRleE9mKHRvTG9jYXRpb24ua2V5KTtcblxuICAgIGlmICh0b0luZGV4ID09PSAtMSkgdG9JbmRleCA9IDA7XG5cbiAgICB2YXIgZnJvbUluZGV4ID0gYWxsS2V5cy5pbmRleE9mKGZyb21Mb2NhdGlvbi5rZXkpO1xuXG4gICAgaWYgKGZyb21JbmRleCA9PT0gLTEpIGZyb21JbmRleCA9IDA7XG5cbiAgICB2YXIgZGVsdGEgPSB0b0luZGV4IC0gZnJvbUluZGV4O1xuXG4gICAgaWYgKGRlbHRhKSB7XG4gICAgICBmb3JjZU5leHRQb3AgPSB0cnVlO1xuICAgICAgZ28oZGVsdGEpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaW5pdGlhbExvY2F0aW9uID0gZ2V0RE9NTG9jYXRpb24oZ2V0SGlzdG9yeVN0YXRlKCkpO1xuICB2YXIgYWxsS2V5cyA9IFtpbml0aWFsTG9jYXRpb24ua2V5XTtcblxuICAvLyBQdWJsaWMgaW50ZXJmYWNlXG5cbiAgdmFyIGNyZWF0ZUhyZWYgPSBmdW5jdGlvbiBjcmVhdGVIcmVmKGxvY2F0aW9uKSB7XG4gICAgcmV0dXJuIGJhc2VuYW1lICsgKDAsIF9QYXRoVXRpbHMuY3JlYXRlUGF0aCkobG9jYXRpb24pO1xuICB9O1xuXG4gIHZhciBwdXNoID0gZnVuY3Rpb24gcHVzaChwYXRoLCBzdGF0ZSkge1xuICAgICgwLCBfd2FybmluZzIuZGVmYXVsdCkoISgodHlwZW9mIHBhdGggPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHBhdGgpKSA9PT0gJ29iamVjdCcgJiYgcGF0aC5zdGF0ZSAhPT0gdW5kZWZpbmVkICYmIHN0YXRlICE9PSB1bmRlZmluZWQpLCAnWW91IHNob3VsZCBhdm9pZCBwcm92aWRpbmcgYSAybmQgc3RhdGUgYXJndW1lbnQgdG8gcHVzaCB3aGVuIHRoZSAxc3QgJyArICdhcmd1bWVudCBpcyBhIGxvY2F0aW9uLWxpa2Ugb2JqZWN0IHRoYXQgYWxyZWFkeSBoYXMgc3RhdGU7IGl0IGlzIGlnbm9yZWQnKTtcblxuICAgIHZhciBhY3Rpb24gPSAnUFVTSCc7XG4gICAgdmFyIGxvY2F0aW9uID0gKDAsIF9Mb2NhdGlvblV0aWxzLmNyZWF0ZUxvY2F0aW9uKShwYXRoLCBzdGF0ZSwgY3JlYXRlS2V5KCksIGhpc3RvcnkubG9jYXRpb24pO1xuXG4gICAgdHJhbnNpdGlvbk1hbmFnZXIuY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgYWN0aW9uLCBnZXRVc2VyQ29uZmlybWF0aW9uLCBmdW5jdGlvbiAob2spIHtcbiAgICAgIGlmICghb2spIHJldHVybjtcblxuICAgICAgdmFyIGhyZWYgPSBjcmVhdGVIcmVmKGxvY2F0aW9uKTtcbiAgICAgIHZhciBrZXkgPSBsb2NhdGlvbi5rZXksXG4gICAgICAgICAgc3RhdGUgPSBsb2NhdGlvbi5zdGF0ZTtcblxuXG4gICAgICBpZiAoY2FuVXNlSGlzdG9yeSkge1xuICAgICAgICBnbG9iYWxIaXN0b3J5LnB1c2hTdGF0ZSh7IGtleToga2V5LCBzdGF0ZTogc3RhdGUgfSwgbnVsbCwgaHJlZik7XG5cbiAgICAgICAgaWYgKGZvcmNlUmVmcmVzaCkge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gaHJlZjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgcHJldkluZGV4ID0gYWxsS2V5cy5pbmRleE9mKGhpc3RvcnkubG9jYXRpb24ua2V5KTtcbiAgICAgICAgICB2YXIgbmV4dEtleXMgPSBhbGxLZXlzLnNsaWNlKDAsIHByZXZJbmRleCA9PT0gLTEgPyAwIDogcHJldkluZGV4ICsgMSk7XG5cbiAgICAgICAgICBuZXh0S2V5cy5wdXNoKGxvY2F0aW9uLmtleSk7XG4gICAgICAgICAgYWxsS2V5cyA9IG5leHRLZXlzO1xuXG4gICAgICAgICAgc2V0U3RhdGUoeyBhY3Rpb246IGFjdGlvbiwgbG9jYXRpb246IGxvY2F0aW9uIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKHN0YXRlID09PSB1bmRlZmluZWQsICdCcm93c2VyIGhpc3RvcnkgY2Fubm90IHB1c2ggc3RhdGUgaW4gYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBIVE1MNSBoaXN0b3J5Jyk7XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBocmVmO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHZhciByZXBsYWNlID0gZnVuY3Rpb24gcmVwbGFjZShwYXRoLCBzdGF0ZSkge1xuICAgICgwLCBfd2FybmluZzIuZGVmYXVsdCkoISgodHlwZW9mIHBhdGggPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHBhdGgpKSA9PT0gJ29iamVjdCcgJiYgcGF0aC5zdGF0ZSAhPT0gdW5kZWZpbmVkICYmIHN0YXRlICE9PSB1bmRlZmluZWQpLCAnWW91IHNob3VsZCBhdm9pZCBwcm92aWRpbmcgYSAybmQgc3RhdGUgYXJndW1lbnQgdG8gcmVwbGFjZSB3aGVuIHRoZSAxc3QgJyArICdhcmd1bWVudCBpcyBhIGxvY2F0aW9uLWxpa2Ugb2JqZWN0IHRoYXQgYWxyZWFkeSBoYXMgc3RhdGU7IGl0IGlzIGlnbm9yZWQnKTtcblxuICAgIHZhciBhY3Rpb24gPSAnUkVQTEFDRSc7XG4gICAgdmFyIGxvY2F0aW9uID0gKDAsIF9Mb2NhdGlvblV0aWxzLmNyZWF0ZUxvY2F0aW9uKShwYXRoLCBzdGF0ZSwgY3JlYXRlS2V5KCksIGhpc3RvcnkubG9jYXRpb24pO1xuXG4gICAgdHJhbnNpdGlvbk1hbmFnZXIuY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgYWN0aW9uLCBnZXRVc2VyQ29uZmlybWF0aW9uLCBmdW5jdGlvbiAob2spIHtcbiAgICAgIGlmICghb2spIHJldHVybjtcblxuICAgICAgdmFyIGhyZWYgPSBjcmVhdGVIcmVmKGxvY2F0aW9uKTtcbiAgICAgIHZhciBrZXkgPSBsb2NhdGlvbi5rZXksXG4gICAgICAgICAgc3RhdGUgPSBsb2NhdGlvbi5zdGF0ZTtcblxuXG4gICAgICBpZiAoY2FuVXNlSGlzdG9yeSkge1xuICAgICAgICBnbG9iYWxIaXN0b3J5LnJlcGxhY2VTdGF0ZSh7IGtleToga2V5LCBzdGF0ZTogc3RhdGUgfSwgbnVsbCwgaHJlZik7XG5cbiAgICAgICAgaWYgKGZvcmNlUmVmcmVzaCkge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKGhyZWYpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBwcmV2SW5kZXggPSBhbGxLZXlzLmluZGV4T2YoaGlzdG9yeS5sb2NhdGlvbi5rZXkpO1xuXG4gICAgICAgICAgaWYgKHByZXZJbmRleCAhPT0gLTEpIGFsbEtleXNbcHJldkluZGV4XSA9IGxvY2F0aW9uLmtleTtcblxuICAgICAgICAgIHNldFN0YXRlKHsgYWN0aW9uOiBhY3Rpb24sIGxvY2F0aW9uOiBsb2NhdGlvbiB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KShzdGF0ZSA9PT0gdW5kZWZpbmVkLCAnQnJvd3NlciBoaXN0b3J5IGNhbm5vdCByZXBsYWNlIHN0YXRlIGluIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgSFRNTDUgaGlzdG9yeScpO1xuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKGhyZWYpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHZhciBnbyA9IGZ1bmN0aW9uIGdvKG4pIHtcbiAgICBnbG9iYWxIaXN0b3J5LmdvKG4pO1xuICB9O1xuXG4gIHZhciBnb0JhY2sgPSBmdW5jdGlvbiBnb0JhY2soKSB7XG4gICAgcmV0dXJuIGdvKC0xKTtcbiAgfTtcblxuICB2YXIgZ29Gb3J3YXJkID0gZnVuY3Rpb24gZ29Gb3J3YXJkKCkge1xuICAgIHJldHVybiBnbygxKTtcbiAgfTtcblxuICB2YXIgbGlzdGVuZXJDb3VudCA9IDA7XG5cbiAgdmFyIGNoZWNrRE9NTGlzdGVuZXJzID0gZnVuY3Rpb24gY2hlY2tET01MaXN0ZW5lcnMoZGVsdGEpIHtcbiAgICBsaXN0ZW5lckNvdW50ICs9IGRlbHRhO1xuXG4gICAgaWYgKGxpc3RlbmVyQ291bnQgPT09IDEpIHtcbiAgICAgICgwLCBfRE9NVXRpbHMuYWRkRXZlbnRMaXN0ZW5lcikod2luZG93LCBQb3BTdGF0ZUV2ZW50LCBoYW5kbGVQb3BTdGF0ZSk7XG5cbiAgICAgIGlmIChuZWVkc0hhc2hDaGFuZ2VMaXN0ZW5lcikgKDAsIF9ET01VdGlscy5hZGRFdmVudExpc3RlbmVyKSh3aW5kb3csIEhhc2hDaGFuZ2VFdmVudCwgaGFuZGxlSGFzaENoYW5nZSk7XG4gICAgfSBlbHNlIGlmIChsaXN0ZW5lckNvdW50ID09PSAwKSB7XG4gICAgICAoMCwgX0RPTVV0aWxzLnJlbW92ZUV2ZW50TGlzdGVuZXIpKHdpbmRvdywgUG9wU3RhdGVFdmVudCwgaGFuZGxlUG9wU3RhdGUpO1xuXG4gICAgICBpZiAobmVlZHNIYXNoQ2hhbmdlTGlzdGVuZXIpICgwLCBfRE9NVXRpbHMucmVtb3ZlRXZlbnRMaXN0ZW5lcikod2luZG93LCBIYXNoQ2hhbmdlRXZlbnQsIGhhbmRsZUhhc2hDaGFuZ2UpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaXNCbG9ja2VkID0gZmFsc2U7XG5cbiAgdmFyIGJsb2NrID0gZnVuY3Rpb24gYmxvY2soKSB7XG4gICAgdmFyIHByb21wdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZmFsc2U7XG5cbiAgICB2YXIgdW5ibG9jayA9IHRyYW5zaXRpb25NYW5hZ2VyLnNldFByb21wdChwcm9tcHQpO1xuXG4gICAgaWYgKCFpc0Jsb2NrZWQpIHtcbiAgICAgIGNoZWNrRE9NTGlzdGVuZXJzKDEpO1xuICAgICAgaXNCbG9ja2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGlzQmxvY2tlZCkge1xuICAgICAgICBpc0Jsb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgY2hlY2tET01MaXN0ZW5lcnMoLTEpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdW5ibG9jaygpO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIGxpc3RlbiA9IGZ1bmN0aW9uIGxpc3RlbihsaXN0ZW5lcikge1xuICAgIHZhciB1bmxpc3RlbiA9IHRyYW5zaXRpb25NYW5hZ2VyLmFwcGVuZExpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICBjaGVja0RPTUxpc3RlbmVycygxKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBjaGVja0RPTUxpc3RlbmVycygtMSk7XG4gICAgICB1bmxpc3RlbigpO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIGhpc3RvcnkgPSB7XG4gICAgbGVuZ3RoOiBnbG9iYWxIaXN0b3J5Lmxlbmd0aCxcbiAgICBhY3Rpb246ICdQT1AnLFxuICAgIGxvY2F0aW9uOiBpbml0aWFsTG9jYXRpb24sXG4gICAgY3JlYXRlSHJlZjogY3JlYXRlSHJlZixcbiAgICBwdXNoOiBwdXNoLFxuICAgIHJlcGxhY2U6IHJlcGxhY2UsXG4gICAgZ286IGdvLFxuICAgIGdvQmFjazogZ29CYWNrLFxuICAgIGdvRm9yd2FyZDogZ29Gb3J3YXJkLFxuICAgIGJsb2NrOiBibG9jayxcbiAgICBsaXN0ZW46IGxpc3RlblxuICB9O1xuXG4gIHJldHVybiBoaXN0b3J5O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlQnJvd3Nlckhpc3Rvcnk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2hpc3RvcnkvY3JlYXRlQnJvd3Nlckhpc3RvcnkuanMiLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciBpbnZhcmlhbnQgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgICdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICtcbiAgICAgICAgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJ1xuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107IH0pXG4gICAgICApO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2ludmFyaWFudC9icm93c2VyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5sb2NhdGlvbnNBcmVFcXVhbCA9IGV4cG9ydHMuY3JlYXRlTG9jYXRpb24gPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVzb2x2ZVBhdGhuYW1lID0gcmVxdWlyZSgncmVzb2x2ZS1wYXRobmFtZScpO1xuXG52YXIgX3Jlc29sdmVQYXRobmFtZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZXNvbHZlUGF0aG5hbWUpO1xuXG52YXIgX3ZhbHVlRXF1YWwgPSByZXF1aXJlKCd2YWx1ZS1lcXVhbCcpO1xuXG52YXIgX3ZhbHVlRXF1YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmFsdWVFcXVhbCk7XG5cbnZhciBfUGF0aFV0aWxzID0gcmVxdWlyZSgnLi9QYXRoVXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGNyZWF0ZUxvY2F0aW9uID0gZXhwb3J0cy5jcmVhdGVMb2NhdGlvbiA9IGZ1bmN0aW9uIGNyZWF0ZUxvY2F0aW9uKHBhdGgsIHN0YXRlLCBrZXksIGN1cnJlbnRMb2NhdGlvbikge1xuICB2YXIgbG9jYXRpb24gPSB2b2lkIDA7XG4gIGlmICh0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZycpIHtcbiAgICAvLyBUd28tYXJnIGZvcm06IHB1c2gocGF0aCwgc3RhdGUpXG4gICAgbG9jYXRpb24gPSAoMCwgX1BhdGhVdGlscy5wYXJzZVBhdGgpKHBhdGgpO1xuICAgIGxvY2F0aW9uLnN0YXRlID0gc3RhdGU7XG4gIH0gZWxzZSB7XG4gICAgLy8gT25lLWFyZyBmb3JtOiBwdXNoKGxvY2F0aW9uKVxuICAgIGxvY2F0aW9uID0gX2V4dGVuZHMoe30sIHBhdGgpO1xuXG4gICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lID09PSB1bmRlZmluZWQpIGxvY2F0aW9uLnBhdGhuYW1lID0gJyc7XG5cbiAgICBpZiAobG9jYXRpb24uc2VhcmNoKSB7XG4gICAgICBpZiAobG9jYXRpb24uc2VhcmNoLmNoYXJBdCgwKSAhPT0gJz8nKSBsb2NhdGlvbi5zZWFyY2ggPSAnPycgKyBsb2NhdGlvbi5zZWFyY2g7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2F0aW9uLnNlYXJjaCA9ICcnO1xuICAgIH1cblxuICAgIGlmIChsb2NhdGlvbi5oYXNoKSB7XG4gICAgICBpZiAobG9jYXRpb24uaGFzaC5jaGFyQXQoMCkgIT09ICcjJykgbG9jYXRpb24uaGFzaCA9ICcjJyArIGxvY2F0aW9uLmhhc2g7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2F0aW9uLmhhc2ggPSAnJztcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUgIT09IHVuZGVmaW5lZCAmJiBsb2NhdGlvbi5zdGF0ZSA9PT0gdW5kZWZpbmVkKSBsb2NhdGlvbi5zdGF0ZSA9IHN0YXRlO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBsb2NhdGlvbi5wYXRobmFtZSA9IGRlY29kZVVSSShsb2NhdGlvbi5wYXRobmFtZSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAoZSBpbnN0YW5jZW9mIFVSSUVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgVVJJRXJyb3IoJ1BhdGhuYW1lIFwiJyArIGxvY2F0aW9uLnBhdGhuYW1lICsgJ1wiIGNvdWxkIG5vdCBiZSBkZWNvZGVkLiAnICsgJ1RoaXMgaXMgbGlrZWx5IGNhdXNlZCBieSBhbiBpbnZhbGlkIHBlcmNlbnQtZW5jb2RpbmcuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9XG5cbiAgaWYgKGtleSkgbG9jYXRpb24ua2V5ID0ga2V5O1xuXG4gIGlmIChjdXJyZW50TG9jYXRpb24pIHtcbiAgICAvLyBSZXNvbHZlIGluY29tcGxldGUvcmVsYXRpdmUgcGF0aG5hbWUgcmVsYXRpdmUgdG8gY3VycmVudCBsb2NhdGlvbi5cbiAgICBpZiAoIWxvY2F0aW9uLnBhdGhuYW1lKSB7XG4gICAgICBsb2NhdGlvbi5wYXRobmFtZSA9IGN1cnJlbnRMb2NhdGlvbi5wYXRobmFtZTtcbiAgICB9IGVsc2UgaWYgKGxvY2F0aW9uLnBhdGhuYW1lLmNoYXJBdCgwKSAhPT0gJy8nKSB7XG4gICAgICBsb2NhdGlvbi5wYXRobmFtZSA9ICgwLCBfcmVzb2x2ZVBhdGhuYW1lMi5kZWZhdWx0KShsb2NhdGlvbi5wYXRobmFtZSwgY3VycmVudExvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gV2hlbiB0aGVyZSBpcyBubyBwcmlvciBsb2NhdGlvbiBhbmQgcGF0aG5hbWUgaXMgZW1wdHksIHNldCBpdCB0byAvXG4gICAgaWYgKCFsb2NhdGlvbi5wYXRobmFtZSkge1xuICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPSAnLyc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGxvY2F0aW9uO1xufTtcblxudmFyIGxvY2F0aW9uc0FyZUVxdWFsID0gZXhwb3J0cy5sb2NhdGlvbnNBcmVFcXVhbCA9IGZ1bmN0aW9uIGxvY2F0aW9uc0FyZUVxdWFsKGEsIGIpIHtcbiAgcmV0dXJuIGEucGF0aG5hbWUgPT09IGIucGF0aG5hbWUgJiYgYS5zZWFyY2ggPT09IGIuc2VhcmNoICYmIGEuaGFzaCA9PT0gYi5oYXNoICYmIGEua2V5ID09PSBiLmtleSAmJiAoMCwgX3ZhbHVlRXF1YWwyLmRlZmF1bHQpKGEuc3RhdGUsIGIuc3RhdGUpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9Mb2NhdGlvblV0aWxzLmpzIiwiZnVuY3Rpb24gaXNBYnNvbHV0ZShwYXRobmFtZSkge1xuICByZXR1cm4gcGF0aG5hbWUuY2hhckF0KDApID09PSAnLyc7XG59XG5cbi8vIEFib3V0IDEuNXggZmFzdGVyIHRoYW4gdGhlIHR3by1hcmcgdmVyc2lvbiBvZiBBcnJheSNzcGxpY2UoKVxuZnVuY3Rpb24gc3BsaWNlT25lKGxpc3QsIGluZGV4KSB7XG4gIGZvciAodmFyIGkgPSBpbmRleCwgayA9IGkgKyAxLCBuID0gbGlzdC5sZW5ndGg7IGsgPCBuOyBpICs9IDEsIGsgKz0gMSkge1xuICAgIGxpc3RbaV0gPSBsaXN0W2tdO1xuICB9XG5cbiAgbGlzdC5wb3AoKTtcbn1cblxuLy8gVGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBiYXNlZCBoZWF2aWx5IG9uIG5vZGUncyB1cmwucGFyc2VcbmZ1bmN0aW9uIHJlc29sdmVQYXRobmFtZSh0bykge1xuICB2YXIgZnJvbSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogJyc7XG5cbiAgdmFyIHRvUGFydHMgPSB0byAmJiB0by5zcGxpdCgnLycpIHx8IFtdO1xuICB2YXIgZnJvbVBhcnRzID0gZnJvbSAmJiBmcm9tLnNwbGl0KCcvJykgfHwgW107XG5cbiAgdmFyIGlzVG9BYnMgPSB0byAmJiBpc0Fic29sdXRlKHRvKTtcbiAgdmFyIGlzRnJvbUFicyA9IGZyb20gJiYgaXNBYnNvbHV0ZShmcm9tKTtcbiAgdmFyIG11c3RFbmRBYnMgPSBpc1RvQWJzIHx8IGlzRnJvbUFicztcblxuICBpZiAodG8gJiYgaXNBYnNvbHV0ZSh0bykpIHtcbiAgICAvLyB0byBpcyBhYnNvbHV0ZVxuICAgIGZyb21QYXJ0cyA9IHRvUGFydHM7XG4gIH0gZWxzZSBpZiAodG9QYXJ0cy5sZW5ndGgpIHtcbiAgICAvLyB0byBpcyByZWxhdGl2ZSwgZHJvcCB0aGUgZmlsZW5hbWVcbiAgICBmcm9tUGFydHMucG9wKCk7XG4gICAgZnJvbVBhcnRzID0gZnJvbVBhcnRzLmNvbmNhdCh0b1BhcnRzKTtcbiAgfVxuXG4gIGlmICghZnJvbVBhcnRzLmxlbmd0aCkgcmV0dXJuICcvJztcblxuICB2YXIgaGFzVHJhaWxpbmdTbGFzaCA9IHZvaWQgMDtcbiAgaWYgKGZyb21QYXJ0cy5sZW5ndGgpIHtcbiAgICB2YXIgbGFzdCA9IGZyb21QYXJ0c1tmcm9tUGFydHMubGVuZ3RoIC0gMV07XG4gICAgaGFzVHJhaWxpbmdTbGFzaCA9IGxhc3QgPT09ICcuJyB8fCBsYXN0ID09PSAnLi4nIHx8IGxhc3QgPT09ICcnO1xuICB9IGVsc2Uge1xuICAgIGhhc1RyYWlsaW5nU2xhc2ggPSBmYWxzZTtcbiAgfVxuXG4gIHZhciB1cCA9IDA7XG4gIGZvciAodmFyIGkgPSBmcm9tUGFydHMubGVuZ3RoOyBpID49IDA7IGktLSkge1xuICAgIHZhciBwYXJ0ID0gZnJvbVBhcnRzW2ldO1xuXG4gICAgaWYgKHBhcnQgPT09ICcuJykge1xuICAgICAgc3BsaWNlT25lKGZyb21QYXJ0cywgaSk7XG4gICAgfSBlbHNlIGlmIChwYXJ0ID09PSAnLi4nKSB7XG4gICAgICBzcGxpY2VPbmUoZnJvbVBhcnRzLCBpKTtcbiAgICAgIHVwKys7XG4gICAgfSBlbHNlIGlmICh1cCkge1xuICAgICAgc3BsaWNlT25lKGZyb21QYXJ0cywgaSk7XG4gICAgICB1cC0tO1xuICAgIH1cbiAgfVxuXG4gIGlmICghbXVzdEVuZEFicykgZm9yICg7IHVwLS07IHVwKSB7XG4gICAgZnJvbVBhcnRzLnVuc2hpZnQoJy4uJyk7XG4gIH1pZiAobXVzdEVuZEFicyAmJiBmcm9tUGFydHNbMF0gIT09ICcnICYmICghZnJvbVBhcnRzWzBdIHx8ICFpc0Fic29sdXRlKGZyb21QYXJ0c1swXSkpKSBmcm9tUGFydHMudW5zaGlmdCgnJyk7XG5cbiAgdmFyIHJlc3VsdCA9IGZyb21QYXJ0cy5qb2luKCcvJyk7XG5cbiAgaWYgKGhhc1RyYWlsaW5nU2xhc2ggJiYgcmVzdWx0LnN1YnN0cigtMSkgIT09ICcvJykgcmVzdWx0ICs9ICcvJztcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCByZXNvbHZlUGF0aG5hbWU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtcGF0aG5hbWUvaW5kZXguanMiLCJ2YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmZ1bmN0aW9uIHZhbHVlRXF1YWwoYSwgYikge1xuICBpZiAoYSA9PT0gYikgcmV0dXJuIHRydWU7XG5cbiAgaWYgKGEgPT0gbnVsbCB8fCBiID09IG51bGwpIHJldHVybiBmYWxzZTtcblxuICBpZiAoQXJyYXkuaXNBcnJheShhKSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGIpICYmIGEubGVuZ3RoID09PSBiLmxlbmd0aCAmJiBhLmV2ZXJ5KGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgcmV0dXJuIHZhbHVlRXF1YWwoaXRlbSwgYltpbmRleF0pO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIGFUeXBlID0gdHlwZW9mIGEgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGEpO1xuICB2YXIgYlR5cGUgPSB0eXBlb2YgYiA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoYik7XG5cbiAgaWYgKGFUeXBlICE9PSBiVHlwZSkgcmV0dXJuIGZhbHNlO1xuXG4gIGlmIChhVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICB2YXIgYVZhbHVlID0gYS52YWx1ZU9mKCk7XG4gICAgdmFyIGJWYWx1ZSA9IGIudmFsdWVPZigpO1xuXG4gICAgaWYgKGFWYWx1ZSAhPT0gYSB8fCBiVmFsdWUgIT09IGIpIHJldHVybiB2YWx1ZUVxdWFsKGFWYWx1ZSwgYlZhbHVlKTtcblxuICAgIHZhciBhS2V5cyA9IE9iamVjdC5rZXlzKGEpO1xuICAgIHZhciBiS2V5cyA9IE9iamVjdC5rZXlzKGIpO1xuXG4gICAgaWYgKGFLZXlzLmxlbmd0aCAhPT0gYktleXMubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cbiAgICByZXR1cm4gYUtleXMuZXZlcnkoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIHZhbHVlRXF1YWwoYVtrZXldLCBiW2tleV0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWx1ZUVxdWFsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy92YWx1ZS1lcXVhbC9pbmRleC5qcyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBjcmVhdGVUcmFuc2l0aW9uTWFuYWdlciA9IGZ1bmN0aW9uIGNyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyKCkge1xuICB2YXIgcHJvbXB0ID0gbnVsbDtcblxuICB2YXIgc2V0UHJvbXB0ID0gZnVuY3Rpb24gc2V0UHJvbXB0KG5leHRQcm9tcHQpIHtcbiAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKHByb21wdCA9PSBudWxsLCAnQSBoaXN0b3J5IHN1cHBvcnRzIG9ubHkgb25lIHByb21wdCBhdCBhIHRpbWUnKTtcblxuICAgIHByb21wdCA9IG5leHRQcm9tcHQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHByb21wdCA9PT0gbmV4dFByb21wdCkgcHJvbXB0ID0gbnVsbDtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBjb25maXJtVHJhbnNpdGlvblRvID0gZnVuY3Rpb24gY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgYWN0aW9uLCBnZXRVc2VyQ29uZmlybWF0aW9uLCBjYWxsYmFjaykge1xuICAgIC8vIFRPRE86IElmIGFub3RoZXIgdHJhbnNpdGlvbiBzdGFydHMgd2hpbGUgd2UncmUgc3RpbGwgY29uZmlybWluZ1xuICAgIC8vIHRoZSBwcmV2aW91cyBvbmUsIHdlIG1heSBlbmQgdXAgaW4gYSB3ZWlyZCBzdGF0ZS4gRmlndXJlIG91dCB0aGVcbiAgICAvLyBiZXN0IHdheSB0byBoYW5kbGUgdGhpcy5cbiAgICBpZiAocHJvbXB0ICE9IG51bGwpIHtcbiAgICAgIHZhciByZXN1bHQgPSB0eXBlb2YgcHJvbXB0ID09PSAnZnVuY3Rpb24nID8gcHJvbXB0KGxvY2F0aW9uLCBhY3Rpb24pIDogcHJvbXB0O1xuXG4gICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBnZXRVc2VyQ29uZmlybWF0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgZ2V0VXNlckNvbmZpcm1hdGlvbihyZXN1bHQsIGNhbGxiYWNrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKGZhbHNlLCAnQSBoaXN0b3J5IG5lZWRzIGEgZ2V0VXNlckNvbmZpcm1hdGlvbiBmdW5jdGlvbiBpbiBvcmRlciB0byB1c2UgYSBwcm9tcHQgbWVzc2FnZScpO1xuXG4gICAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFJldHVybiBmYWxzZSBmcm9tIGEgdHJhbnNpdGlvbiBob29rIHRvIGNhbmNlbCB0aGUgdHJhbnNpdGlvbi5cbiAgICAgICAgY2FsbGJhY2socmVzdWx0ICE9PSBmYWxzZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxiYWNrKHRydWUpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgbGlzdGVuZXJzID0gW107XG5cbiAgdmFyIGFwcGVuZExpc3RlbmVyID0gZnVuY3Rpb24gYXBwZW5kTGlzdGVuZXIoZm4pIHtcbiAgICB2YXIgaXNBY3RpdmUgPSB0cnVlO1xuXG4gICAgdmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gbGlzdGVuZXIoKSB7XG4gICAgICBpZiAoaXNBY3RpdmUpIGZuLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlzQWN0aXZlID0gZmFsc2U7XG4gICAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtICE9PSBsaXN0ZW5lcjtcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIG5vdGlmeUxpc3RlbmVycyA9IGZ1bmN0aW9uIG5vdGlmeUxpc3RlbmVycygpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBsaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiBsaXN0ZW5lci5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgc2V0UHJvbXB0OiBzZXRQcm9tcHQsXG4gICAgY29uZmlybVRyYW5zaXRpb25UbzogY29uZmlybVRyYW5zaXRpb25UbyxcbiAgICBhcHBlbmRMaXN0ZW5lcjogYXBwZW5kTGlzdGVuZXIsXG4gICAgbm90aWZ5TGlzdGVuZXJzOiBub3RpZnlMaXN0ZW5lcnNcbiAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9oaXN0b3J5L2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIGNhblVzZURPTSA9IGV4cG9ydHMuY2FuVXNlRE9NID0gISEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcblxudmFyIGFkZEV2ZW50TGlzdGVuZXIgPSBleHBvcnRzLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50LCBsaXN0ZW5lcikge1xuICByZXR1cm4gbm9kZS5hZGRFdmVudExpc3RlbmVyID8gbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lciwgZmFsc2UpIDogbm9kZS5hdHRhY2hFdmVudCgnb24nICsgZXZlbnQsIGxpc3RlbmVyKTtcbn07XG5cbnZhciByZW1vdmVFdmVudExpc3RlbmVyID0gZXhwb3J0cy5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudCwgbGlzdGVuZXIpIHtcbiAgcmV0dXJuIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA/IG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIsIGZhbHNlKSA6IG5vZGUuZGV0YWNoRXZlbnQoJ29uJyArIGV2ZW50LCBsaXN0ZW5lcik7XG59O1xuXG52YXIgZ2V0Q29uZmlybWF0aW9uID0gZXhwb3J0cy5nZXRDb25maXJtYXRpb24gPSBmdW5jdGlvbiBnZXRDb25maXJtYXRpb24obWVzc2FnZSwgY2FsbGJhY2spIHtcbiAgcmV0dXJuIGNhbGxiYWNrKHdpbmRvdy5jb25maXJtKG1lc3NhZ2UpKTtcbn07IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tYWxlcnRcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIEhUTUw1IGhpc3RvcnkgQVBJIGlzIHN1cHBvcnRlZC4gVGFrZW4gZnJvbSBNb2Rlcm5penIuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL01vZGVybml6ci9Nb2Rlcm5penIvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICogaHR0cHM6Ly9naXRodWIuY29tL01vZGVybml6ci9Nb2Rlcm5penIvYmxvYi9tYXN0ZXIvZmVhdHVyZS1kZXRlY3RzL2hpc3RvcnkuanNcbiAqIGNoYW5nZWQgdG8gYXZvaWQgZmFsc2UgbmVnYXRpdmVzIGZvciBXaW5kb3dzIFBob25lczogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmVhY3Qtcm91dGVyL2lzc3Vlcy81ODZcbiAqL1xudmFyIHN1cHBvcnRzSGlzdG9yeSA9IGV4cG9ydHMuc3VwcG9ydHNIaXN0b3J5ID0gZnVuY3Rpb24gc3VwcG9ydHNIaXN0b3J5KCkge1xuICB2YXIgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcblxuICBpZiAoKHVhLmluZGV4T2YoJ0FuZHJvaWQgMi4nKSAhPT0gLTEgfHwgdWEuaW5kZXhPZignQW5kcm9pZCA0LjAnKSAhPT0gLTEpICYmIHVhLmluZGV4T2YoJ01vYmlsZSBTYWZhcmknKSAhPT0gLTEgJiYgdWEuaW5kZXhPZignQ2hyb21lJykgPT09IC0xICYmIHVhLmluZGV4T2YoJ1dpbmRvd3MgUGhvbmUnKSA9PT0gLTEpIHJldHVybiBmYWxzZTtcblxuICByZXR1cm4gd2luZG93Lmhpc3RvcnkgJiYgJ3B1c2hTdGF0ZScgaW4gd2luZG93Lmhpc3Rvcnk7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBicm93c2VyIGZpcmVzIHBvcHN0YXRlIG9uIGhhc2ggY2hhbmdlLlxuICogSUUxMCBhbmQgSUUxMSBkbyBub3QuXG4gKi9cbnZhciBzdXBwb3J0c1BvcFN0YXRlT25IYXNoQ2hhbmdlID0gZXhwb3J0cy5zdXBwb3J0c1BvcFN0YXRlT25IYXNoQ2hhbmdlID0gZnVuY3Rpb24gc3VwcG9ydHNQb3BTdGF0ZU9uSGFzaENoYW5nZSgpIHtcbiAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ1RyaWRlbnQnKSA9PT0gLTE7XG59O1xuXG4vKipcbiAqIFJldHVybnMgZmFsc2UgaWYgdXNpbmcgZ28obikgd2l0aCBoYXNoIGhpc3RvcnkgY2F1c2VzIGEgZnVsbCBwYWdlIHJlbG9hZC5cbiAqL1xudmFyIHN1cHBvcnRzR29XaXRob3V0UmVsb2FkVXNpbmdIYXNoID0gZXhwb3J0cy5zdXBwb3J0c0dvV2l0aG91dFJlbG9hZFVzaW5nSGFzaCA9IGZ1bmN0aW9uIHN1cHBvcnRzR29XaXRob3V0UmVsb2FkVXNpbmdIYXNoKCkge1xuICByZXR1cm4gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignRmlyZWZveCcpID09PSAtMTtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGEgZ2l2ZW4gcG9wc3RhdGUgZXZlbnQgaXMgYW4gZXh0cmFuZW91cyBXZWJLaXQgZXZlbnQuXG4gKiBBY2NvdW50cyBmb3IgdGhlIGZhY3QgdGhhdCBDaHJvbWUgb24gaU9TIGZpcmVzIHJlYWwgcG9wc3RhdGUgZXZlbnRzXG4gKiBjb250YWluaW5nIHVuZGVmaW5lZCBzdGF0ZSB3aGVuIHByZXNzaW5nIHRoZSBiYWNrIGJ1dHRvbi5cbiAqL1xudmFyIGlzRXh0cmFuZW91c1BvcHN0YXRlRXZlbnQgPSBleHBvcnRzLmlzRXh0cmFuZW91c1BvcHN0YXRlRXZlbnQgPSBmdW5jdGlvbiBpc0V4dHJhbmVvdXNQb3BzdGF0ZUV2ZW50KGV2ZW50KSB7XG4gIHJldHVybiBldmVudC5zdGF0ZSA9PT0gdW5kZWZpbmVkICYmIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignQ3JpT1MnKSA9PT0gLTE7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9oaXN0b3J5L0RPTVV0aWxzLmpzIiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJ2NvbmZpZydcbmltcG9ydCB7IG9ucmVzaXplIH0gZnJvbSAnIy91dGlscydcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gIGNvbnN0ICRzaWRlYmFyID0gJCgnI0otc2lkZWJhci1oZWFkZXInKVxuICBjb25zdCAkYm9keSA9ICQoJ2JvZHknKVxuICBjb25zdCAkc2lkZWJhckJvZHkgPSAkKCcjSi1zaWRlLWJhci1ib2R5JylcbiAgY29uc3QgJHNpZGViYXJJdGVtID0gJHNpZGViYXIuZmluZCgnLkotc2lkZWJhci1pdGVtJylcbiAgbGV0IGlzU2VhcmNoU2hvd2luZyA9IGZhbHNlXG4gIGxldCBpc1NpZGVCb2R5U2hvd2luZyA9IHRydWVcblxuICAkYm9keS5hZGRDbGFzcygndGhlbWUtJyArIHRoZW1lKVxuXG4gICRzaWRlYmFyXG4gICAgLm9uKCdjbGljaycsICcuSi1zaWRlYmFyLWxvZ28nLCBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKVxuXG4gICAgICBpZiAoJHRoaXMuaXMoJy5hY3RpdmUnKSkge1xuICAgICAgICBzaWRlYmFyQm9keUhpZGUoKVxuICAgICAgICAkdGhpcy5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNpZGViYXJCb2R5U2hvdygpXG4gICAgICAgIGVtaXR0ZXIuZW1pdCgnc3dpdGNoLXNpZGViYXInLCB7IHRhcmdldDogJ2xvZ28nIH0pXG4gICAgICAgICR0aGlzXG4gICAgICAgICAgLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgICAgICAgIC5zaWJsaW5ncygpXG4gICAgICAgICAgLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgICAgfVxuICAgIH0pXG4gICAgLm9uKCdjbGljaycsICcuSi1zaWRlYmFyLXNlYXJjaCcsIGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpXG5cbiAgICAgIGlmICgkdGhpcy5pcygnLmFjdGl2ZScpKSB7XG4gICAgICAgIHNpZGViYXJCb2R5SGlkZSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaWRlYmFyQm9keVNob3coKVxuXG4gICAgICAgICR0aGlzXG4gICAgICAgICAgLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgICAgICAgIC5zaWJsaW5ncygpXG4gICAgICAgICAgLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuXG4gICAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInNlYXJjaC1ib3hcIiAqLyAncGFydGlhbHMvc2lkZS1iYXItYm9keS9zZWFyY2gtYm94JykudGhlbigoKSA9PiB7XG4gICAgICAgICAgZW1pdHRlci5lbWl0KCdzd2l0Y2gtc2lkZWJhcicsIHsgdGFyZ2V0OiAnc2VhcmNoJyB9KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgZnVuY3Rpb24gc2lkZWJhckJvZHlTaG93KCkge1xuICAgICRzaWRlYmFyQm9keS5yZW1vdmVDbGFzcygnaGlkZGVuJykuc2hvdygpXG4gICAgaXNTaWRlQm9keVNob3dpbmcgPSB0cnVlXG4gIH1cbiAgZnVuY3Rpb24gc2lkZWJhckJvZHlIaWRlKCkge1xuICAgICRzaWRlYmFyQm9keS5hZGRDbGFzcygnaGlkZGVuJykuaGlkZSgpXG4gICAgaXNTaWRlQm9keVNob3dpbmcgPSBmYWxzZVxuICAgICRzaWRlYmFySXRlbS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgfVxuXG4gIGVtaXR0ZXIub24oJ3NpZGViYXItaGlkZGVuJywgZnVuY3Rpb24gKCkge1xuICAgIHNpZGViYXJCb2R5SGlkZSgpXG4gIH0pXG5cbiAgb25yZXNpemUoZnVuY3Rpb24oZSwgd2lkdGgpIHtcbiAgICBpZiAod2lkdGggPCA4MDApIHtcbiAgICAgIHNpZGViYXJCb2R5SGlkZSgpXG4gICAgfVxuICAgIGlmKHdpZHRoID49IDgwMCkge1xuICAgICAgc2lkZWJhckJvZHlTaG93KClcbiAgICB9XG4gIH0pXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFydGlhbHMvc2lkZS1iYXItaGVhZGVyL2luZGV4LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhcnRpYWxzL3NpZGUtYmFyLWhlYWRlci9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgJy4vYmxvZy10cmVlJ1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnXG5cbiQoZnVuY3Rpb24oKSB7XG4gIGNvbnN0ICRzZWFyY2hCb3ggPSAkKCcjSi1zZWFyY2gtYm94JylcbiAgY29uc3QgJGJsb2dUcmVlID0gJCgnI0otYmxvZy10cmVlJylcbiAgY29uc3QgJHNlYXJjaElucHV0ID0gJHNlYXJjaEJveC5maW5kKCcuSi1pbnB1dC1zZWFyY2gnKVxuICBjb25zdCAkdGFnVHJlZSA9ICQoJyNKLWJsb2ctdHJlZScpXG5cbiAgZW1pdHRlci5vbignc3dpdGNoLXNpZGViYXInLCAoeyB0YXJnZXQgfSkgPT4ge1xuICAgIGNvbnN0IGlzU2VhcmNoID0gdGFyZ2V0ID09PSAnc2VhcmNoJ1xuXG4gICAgaWYgKGlzU2VhcmNoKSB7XG4gICAgICAkYmxvZ1RyZWUuaGlkZSgpXG4gICAgICAkc2VhcmNoQm94LnJlbW92ZUNsYXNzKCdoaWRkZW4nKVxuICAgICAgJHNlYXJjaElucHV0LmZvY3VzKClcbiAgICB9IGVsc2Uge1xuICAgICAgJGJsb2dUcmVlLnNob3coKVxuICAgICAgJHNlYXJjaEJveC5hZGRDbGFzcygnaGlkZGVuJylcbiAgICB9XG4gIH0pXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFydGlhbHMvc2lkZS1iYXItYm9keS9pbmRleC5qcyIsImltcG9ydCAnLi9zdHlsZS5zY3NzJ1xuaW1wb3J0IGhpc3RvcnkgZnJvbSAnIy9oaXN0b3J5J1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgY29uc3QgJHRhZ1RyZWUgPSAkKCcjSi1ibG9nLXRyZWUnKVxuICBjb25zdCAkYWxsUG9zdHMgPSAkKCcjSi1wb3N0cy1hbGwtaGlkZGVuJylcbiAgY29uc3QgcGF0aG5hbWUgPSBsb2NhdGlvbi5wYXRobmFtZVxuICBjb25zdCAkYm9keSA9ICQoJ2JvZHknKVxuICBjb25zdCAkdW50YWdlZFBvc3RzID0gJHRhZ1RyZWUuZmluZCgnLkotdW50YWdlZC1wb3N0cycpXG4gIGNvbnN0ICR3aW4gPSAkKHdpbmRvdylcblxuICBjb25zdCB0YWdzID0ge31cbiAgY29uc3QgdW50YWdlZCA9IFtdXG4gICRhbGxQb3N0cy5maW5kKCcuSi1wb3N0JykuZWFjaChmdW5jdGlvbigpIHtcbiAgICBjb25zdCAkcG9zdCA9ICQodGhpcylcbiAgICBjb25zdCBzbHVnID0gJHBvc3QuZGF0YSgnc2x1ZycpXG4gICAgY29uc3QgJHRhZ3MgPSAkcG9zdC5maW5kKCcuSi10YWcnKVxuXG4gICAgaWYgKHBhdGhuYW1lLmluY2x1ZGVzKHNsdWcpKSB7XG4gICAgICAkcG9zdC5hZGRDbGFzcygnYWN0aXZlJylcbiAgICB9XG5cbiAgICBpZiAoJHRhZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICB1bnRhZ2VkLnB1c2goJHBvc3RbMF0ub3V0ZXJIVE1MKVxuICAgIH0gZWxzZSB7XG4gICAgICAkdGFncy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCB0YWcgPSB0aGlzLmlubmVyVGV4dFxuICAgICAgICBpZiAoIXRhZ3NbdGFnXSkge1xuICAgICAgICAgIHRhZ3NbdGFnXSA9IFtdXG4gICAgICAgIH1cblxuICAgICAgICB0YWdzW3RhZ10ucHVzaCgkcG9zdFswXS5vdXRlckhUTUwpXG4gICAgICB9KVxuICAgIH1cbiAgfSlcblxuICAvKipcbiAgICogY29weSBwb3N0cyB0byBjb3JyZXNwb25kaW5nIHRhZ1xuICAgKi9cbiAgJHRhZ1RyZWUuZmluZCgnLkotYmxvZy10cmVlLXBvc3RzJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICBjb25zdCAkdGhpcyA9ICQodGhpcylcbiAgICBjb25zdCBwb3N0cyA9IHRhZ3NbJHRoaXMuZGF0YSgndGFnJyldXG5cbiAgICBpZiAoIXBvc3RzKSB7XG4gICAgICAkdGhpc1xuICAgICAgICAuaHRtbCgnPHVsPjxsaSBjbGFzcz1cImJsb2ctdHJlZS1uby1wb3N0cyBsaWdodGVyXCI+Q29taW5nIHNvb24uLi48L2xpPjwvdWw+JylcbiAgICAgICAgLnBhcmVudCgpXG4gICAgICAgIC5hZGRDbGFzcygncG9zdC1oaWRkZW4nKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgJHRoaXMuaHRtbChwb3N0cy5qb2luKCcnKSkuY3NzKHtcbiAgICAgIGhlaWdodDogMjYgKiBwb3N0cy5sZW5ndGhcbiAgICB9KVxuICB9KVxuXG4gICR1bnRhZ2VkUG9zdHMuaHRtbCh1bnRhZ2VkLmpvaW4oJycpKVxuXG4gIGNvbnN0ICRwb3N0cyA9ICQoJy5KLWJsb2ctdHJlZS10YWdzIC5KLXBvc3QnKVxuXG4gIC8vIGV2ZW50IGJpbmRpbmdcbiAgJHRhZ1RyZWVcbiAgICAuYWRkQ2xhc3MoJ2xvYWRpbmctaGlkZGVuJylcbiAgICAub24oJ2NsaWNrJywgJy5KLWJsb2ctdHJlZS10YWduYW1lJywgZnVuY3Rpb24oKSB7XG4gICAgICAkKHRoaXMpXG4gICAgICAgIC5wYXJlbnQoKVxuICAgICAgICAudG9nZ2xlQ2xhc3MoJ3Bvc3QtaGlkZGVuJylcbiAgICB9KVxuICAgIC5vbignY2xpY2snLCAnLkotZ28ycG9zdCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKVxuXG4gICAgICBpZiAoISRib2R5LmlzKCcucG9zdC10ZW1wbGF0ZScpKSByZXR1cm5cblxuICAgICAgaWYgKCR0aGlzLnBhcmVudHMoJy5KLXBvc3QnKS5pcygnLmFjdGl2ZScpKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgaWQgPSAkdGhpcy5kYXRhKCdpZCcpXG4gICAgICBjb25zdCB1cmwgPSAkdGhpcy5hdHRyKCdocmVmJylcblxuICAgICAgaWYgKCR3aW4ud2lkdGgoKSA8IDQ1MCkge1xuICAgICAgICBlbWl0dGVyLmVtaXQoJ3NpZGViYXItaGlkZGVuJylcbiAgICAgIH1cblxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBlbWl0dGVyLmVtaXQoJ2FkZC1wb3N0LXRhYicsIHtcbiAgICAgICAgaWQsXG4gICAgICAgIHVybCxcbiAgICAgICAgdGl0bGU6ICR0aGlzLmF0dHIoJ3RpdGxlJyksXG4gICAgICAgIHNsdWc6ICR0aGlzLnBhcmVudHMoJy5KLXBvc3QnKS5kYXRhKCdzbHVnJylcbiAgICAgIH0pXG4gICAgfSlcblxuICBoaXN0b3J5Lmxpc3Rlbihsb2NhdGlvbiA9PiB7XG4gICAgY29uc3QgbmV4dFRhYiA9IGxvY2F0aW9uLnN0YXRlXG5cbiAgICAkcG9zdHNcbiAgICAgIC5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAgIC5maWx0ZXIoKGlkeCwgcG9zdCkgPT4ge1xuICAgICAgICByZXR1cm4gJChwb3N0KS5kYXRhKCdzbHVnJykgPT09IG5leHRUYWIuc2x1Z1xuICAgICAgfSlcbiAgICAgIC5hZGRDbGFzcygnYWN0aXZlJylcbiAgfSlcbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYXJ0aWFscy9zaWRlLWJhci1ib2R5L2Jsb2ctdHJlZS9pbmRleC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYXJ0aWFscy9zaWRlLWJhci1ib2R5L2Jsb2ctdHJlZS9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGFydGlhbHMvc2lkZS1iYXItYm9keS9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcblxuJChmdW5jdGlvbigpIHtcbiAgY29uc3QgJHJlYWRpbmdUaW1lID0gJChcIi5KLXJlYWRpbmctdGltZVwiKTtcblxuICBlbWl0dGVyLm9uKFwicmVmcmVzaC1yZWFkaW5nLXRpbWVcIiwgKHsgdGltZSB9KSA9PiB7XG4gICAgJHJlYWRpbmdUaW1lLmh0bWwodGltZSk7XG4gIH0pO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYXJ0aWFscy9mb290ZXIvaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGFydGlhbHMvZm9vdGVyL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCAnLi9zdHlsZS5zY3NzJ1xuaW1wb3J0IGhpc3RvcnkgZnJvbSAnIy9oaXN0b3J5J1xuaW1wb3J0IHsgcG9zdFN0b3JlIH0gZnJvbSAnIy9zdG9yZXMnXG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSAnIy91dGlscydcblxuJChmdW5jdGlvbigpIHtcbiAgY29uc3QgJHBvc3RXcmFwID0gJCgnI0otcG9zdC13cmFwJylcbiAgY29uc3QgJHBvc3QgPSAkKCcjSi1wb3N0JylcbiAgY29uc3QgJHRpdGxlID0gJHBvc3QuZmluZCgnLkotcG9zdC10aXRsZScpXG4gIGNvbnN0ICRjb250ZW50ID0gJHBvc3QuZmluZCgnLkotcG9zdC1jb250ZW50JylcbiAgY29uc3QgJG1ldGEgPSAkcG9zdC5maW5kKCcuSi1wb3N0LW1ldGEnKVxuICBjb25zdCAkZmVhdHVyZUltYWdlID0gJHBvc3QuZmluZCgnLkotcG9zdC1mZWF0dXJlLWltYWdlJylcbiAgY29uc3Qgb3JpZ2luID0gbG9jYXRpb24ub3JpZ2luXG5cbiAgaGlnaGxpZ2h0KClcblxuICBpZiAoJCgnYm9keScpLmlzKCcucG9zdC10ZW1wbGF0ZScpKSB7XG4gICAgZW1pdHRlci5lbWl0KCdhZGQtcG9zdC10YWInLCB7XG4gICAgICBpZDogJHBvc3QuZGF0YSgnaWQnKSxcbiAgICAgIHRpdGxlOiAkcG9zdC5kYXRhKCd0aXRsZScpLFxuICAgICAgc2x1ZzogJHBvc3QuZGF0YSgnc2x1ZycpLFxuICAgICAgdXJsOiAkcG9zdC5kYXRhKCd1cmwnKVxuICAgIH0pXG5cbiAgICBlbWl0dGVyLmVtaXQoJ3JlZnJlc2gtcmVhZGluZy10aW1lJywge1xuICAgICAgdGltZTogJCgnLkotcmVhZGluZy10aW1lLWhpZGRlbicpLmh0bWwoKVxuICAgIH0pXG4gIH1cblxuICAvLyByZWZyZXNoIHBvc3QgZGF0YVxuICBoaXN0b3J5Lmxpc3RlbigobG9jYXRpb24sIGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IHBvc3RJZCA9IGxvY2F0aW9uLnN0YXRlLmlkXG5cbiAgICBpZiAoIXBvc3RJZCkgcmV0dXJuXG5cbiAgICBwb3N0U3RvcmUuZmV0Y2hQb3N0KHBvc3RJZCkuZG9uZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICBjb25zdCBwb3N0ID0gZGF0YS5wb3N0c1swXSB8fCB7fVxuICAgICAgY29uc3QgeyBwdWJsaXNoZWRfYXQsIHRpdGxlLCBodG1sLCBhdXRob3IsIGZlYXR1cmVfaW1hZ2UsIGNvbW1lbnRfaWQsIHVybCwgc2x1ZyB9ID0gcG9zdFxuXG4gICAgICAkdGl0bGUuaHRtbCh0aXRsZSlcbiAgICAgICRjb250ZW50Lmh0bWwoaHRtbClcbiAgICAgICRtZXRhLmh0bWwoYFBvc3RlZCBieSA8YSBocmVmPVwiL2F1dGhvci8ke2F1dGhvci5zbHVnfS9cIj4ke2F1dGhvci5uYW1lfTwvYT4gb24gJHtmb3JtYXREYXRlKCckWS4kTS4kZCcsIHB1Ymxpc2hlZF9hdCl9YClcbiAgICAgICRmZWF0dXJlSW1hZ2VbZmVhdHVyZV9pbWFnZSA/ICdyZW1vdmVDbGFzcycgOiAnYWRkQ2xhc3MnXSgnaGlkZGVuJylcbiAgICAgICAgLmZpbmQoJ2ZpZ3VyZScpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2ZlYXR1cmVfaW1hZ2V9KWBcbiAgICAgICAgfSlcblxuICAgICAgZW1pdHRlci5lbWl0KCdyZWZyZXNoLXJlYWRpbmctdGltZScsIHtcbiAgICAgICAgdGltZTogJydcbiAgICAgIH0pXG5cbiAgICAgIGRvY3VtZW50LnRpdGxlID0gdGl0bGVcblxuICAgICAgJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIHdpbmRvdy5yZWZyZXNoQ29tbWVudCAmJiB3aW5kb3cucmVmcmVzaENvbW1lbnQoYGdob3N0LSR7Y29tbWVudF9pZH1gLCBvcmlnaW4gKyB1cmwsIHRpdGxlKVxuXG4gICAgICBoaWdobGlnaHQoKVxuICAgICAgJHBvc3RXcmFwLmFuaW1hdGUoeyBzY3JvbGxUb3A6IDAgfSwgMzAwKVxuICAgIH0pXG4gIH0pXG5cbiAgZnVuY3Rpb24gaGlnaGxpZ2h0KCkge1xuICAgICQoJ3ByZSBjb2RlJykuZWFjaChmdW5jdGlvbihpLCBibG9jaykge1xuICAgICAgd2luZG93LmhsanMgJiYgd2luZG93LmhsanMuaGlnaGxpZ2h0QmxvY2soYmxvY2spXG4gICAgfSlcbiAgfVxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhcnRpYWxzL3Bvc3QvaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGFydGlhbHMvcG9zdC9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGFydGlhbHMvcG9zdC1uYXYvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhcnRpYWxzL2hvbWUvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhcnRpYWxzL2F1dGhvci9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9