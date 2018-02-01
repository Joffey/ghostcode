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
/******/ 		script.src = __webpack_require__.p + "chunk." + ({}[chunkId]||chunkId) + "." + {"0":"34fb1"}[chunkId] + ".js";
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hScroll = hScroll;
exports.onresize = onresize;
var $body = $('body');
var $win = $(window);

var isHomePage = exports.isHomePage = function isHomePage() {
  return $body.is('.home-template');
};
var isPostPage = exports.isPostPage = function isPostPage() {
  return $body.is('.post-template');
};

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
    var delta = e.wheelDelta ? e.wheelDelta : -1 * e.deltaY;
    el.scrollLeft += -delta;
    e.preventDefault();
  }

  return function () {
    return el.removeEventListener('wheel', wheel);
  };
}

var format = exports.format = function format(template, vars) {
  return template.replace(/\$\{([^\{\}]*)\}/g, function (_, name) {
    var value = vars[name.trim()];
    return value == null ? '' : value + '';
  });
};

var toLen = function toLen(source, len) {
  return (Array.prototype.join.call({
    length: len + 1
  }, '0') + source).slice(-len);
};

var formatDate = exports.formatDate = function formatDate(template, date) {
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

function onresize(callback) {
  var fn = function fn(e) {
    var width = $win.width();
    return callback.call(this, e, width);
  };

  fn();
  window.addEventListener('resize', fn);
  return function () {
    return window.removeEventListener('resize', fn);
  };
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createBrowserHistory = __webpack_require__(15);

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _createBrowserHistory2.default)();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postStore = exports.tabStore = undefined;

var _TabStore = __webpack_require__(13);

var _TabStore2 = _interopRequireDefault(_TabStore);

var _PostStore = __webpack_require__(14);

var _PostStore2 = _interopRequireDefault(_PostStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tabStore = exports.tabStore = new _TabStore2.default();
var postStore = exports.postStore = new _PostStore2.default();

window.stores = {
  tabStore: tabStore,
  postStore: postStore
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var warning = function warning() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function warning(condition, format, args) {
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(8);

__webpack_require__(10);

__webpack_require__(11);

__webpack_require__(22);

__webpack_require__(24);

__webpack_require__(28);

__webpack_require__(30);

__webpack_require__(32);

__webpack_require__(34);

__webpack_require__(36);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _mitt = __webpack_require__(9);

var _mitt2 = _interopRequireDefault(_mitt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.emitter = (0, _mitt2.default)();

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
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

exports.default = mitt;
//# sourceMappingURL=mitt.es.js.map

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

__webpack_require__(12);

var _stores = __webpack_require__(2);

var _history = __webpack_require__(1);

var _history2 = _interopRequireDefault(_history);

var _utils = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(function () {
  if (!(0, _utils.isPostPage)()) return;

  var $postTabs = $('#J-post-tab');
  var $scrollWrap = $('.J-post-tab-scroller-wrap');
  var ndScrollWrap = $scrollWrap.get(0);

  emitter.on('add-post-tab', function (post) {
    var tabs = _stores.tabStore.getTabs();
    if (!tabs.filter(function (tab) {
      return tab.id === post.id;
    }).length) {
      tabs.push(_extends({}, post));

      _stores.tabStore.setTabs(tabs);
    }

    emitter.emit('tab-refresh', _extends({}, post));
  });

  emitter.on('tab-refresh', function () {
    var active = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var activeId = active.id;
    var tabs = _stores.tabStore.getTabs();
    var currentTab = _stores.tabStore.currentTab;

    var $active = $('#J-post-tab').html(tabs.map(function (tab) {
      return '<div title="' + tab.title + '" class="J-tab-item light hover-opacity1 flex-item0 single-line item ' + (activeId === tab.id ? 'active' : '') + '" data-id="' + tab.id + '">' + tab.title + '<i class="close J-post-tab-close lighter hover-opacity1" data-slug="' + tab.slug + '"></i></div>';
    }).join('')).find('.active');

    // not refetch current post
    if (!currentTab || currentTab.id !== activeId) {
      _history2.default.push(active.url, _extends({}, active));
      _stores.tabStore.setCurrentTab(_extends({}, active));
    }

    scroll2view($active);
  });

  $postTabs.on('click', '.J-post-tab-close', function (e) {
    e.stopPropagation();
    _stores.tabStore.deleteTabItem($(this).parent('.J-tab-item').data('id'));
  }).on('click', '.J-tab-item', function () {
    var $this = $(this);
    if ($this.is('.active')) return;

    var id = $this.data('id');
    var currentTab = _stores.tabStore.getTabs().filter(function (tab) {
      return tab.id === id;
    })[0] || {};

    $this.addClass('active').siblings().removeClass('active');
    _stores.tabStore.setCurrentTab(currentTab);
    _history2.default.push(currentTab.url, _extends({}, currentTab));

    scroll2view($this);
  });

  /**
   * scroll selected tab item into view if it is out of view
   */
  function scroll2view($active) {
    // wrap element
    var wrapWidth = $scrollWrap.width();
    var wrapScrollLeft = $scrollWrap.scrollLeft();
    var wrapRight = wrapWidth + wrapScrollLeft;
    var threshold = 10;

    // active element
    var ndActive = $active.get(0);
    var activeWidth = $active.outerWidth();
    var activeLeft = ndActive.offsetLeft;
    var activeRight = activeLeft + activeWidth;
    if (activeRight > wrapWidth + wrapScrollLeft) {
      ndScrollWrap.scrollLeft = activeRight - wrapWidth - threshold;
    }
    if (activeLeft <= wrapScrollLeft) {
      ndScrollWrap.scrollLeft = activeLeft - threshold;
    }
  }

  (0, _utils.hScroll)($scrollWrap.get(0));
});

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ls = localStorage;

var _class = function () {
  function _class() {
    _classCallCheck(this, _class);

    this.currentTab = null;
  }

  _createClass(_class, [{
    key: 'getTabs',
    value: function getTabs() {
      var tabs = ls.getItem(_config.lsPostTabKey) || '';

      var _tabs$split = tabs.split('___'),
          _tabs$split2 = _slicedToArray(_tabs$split, 2),
          tabsData = _tabs$split2[0],
          timestamp = _tabs$split2[1];

      if (!tabs || !timestamp || +new Date() - timestamp >= _config.lsPostTabExpiration) return [];

      return tabsData.split(',').map(function (tab) {
        var _tab$split = tab.split(':'),
            _tab$split2 = _slicedToArray(_tab$split, 4),
            id = _tab$split2[0],
            title = _tab$split2[1],
            url = _tab$split2[2],
            slug = _tab$split2[3];

        return { id: id, title: title, url: url, slug: slug };
      });
    }
  }, {
    key: 'setTabs',
    value: function setTabs(tabs) {
      ls.setItem(_config.lsPostTabKey, tabs.length ? tabs.map(function (tab) {
        return tab.id + ':' + tab.title + ':' + tab.url + ':' + tab.slug;
      }).join(',') + '___' + +new Date() : '');
    }
  }, {
    key: 'setCurrentTab',
    value: function setCurrentTab(tab) {
      this.currentTab = tab;
    }
  }, {
    key: 'deleteTabItem',
    value: function deleteTabItem(id) {
      var tabs = this.getTabs();
      var nextTab = null;
      var isCurrentTab = id === this.currentTab.id;

      var deletedIdx = tabs.findIndex(function (tab) {
        return tab.id === id;
      });
      tabs = tabs.filter(function (tab, idx) {
        return tab.id !== id;
      });

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
  }]);

  return _class;
}();

exports.default = _class;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = __webpack_require__(3);

var _stores = __webpack_require__(2);

var _utils = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ls = localStorage;

var _class = function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: 'fetchPost',
    value: function fetchPost(id) {
      var _this = this;

      var cache = this.fromCache(id);

      return cache ? $.Deferred().resolve(cache) : $.get(ghost.url.api('posts/' + id), {
        include: 'author'
      }).fail(function (err) {
        console.log(err);
        if (err.status === 404) {
          _stores.tabStore.deleteTabItem(id);
        }
      }).done(function (data) {
        var post = data.posts[0] || {};
        console.log(post);
        _this.cachePost(id, post);
        return post;
      });
    }

    /**
     * Read post from cache first
     * @param {number} id -> post id
     *  - only cache 5min
     */

  }, {
    key: 'fromCache',
    value: function fromCache(id) {
      var lsPosts = ls.getItem(_config.lsPostsKey);
      lsPosts = lsPosts ? JSON.parse(lsPosts) : {};

      var post = lsPosts[id];
      var useable = post && +new Date() - post.timestamp <= _config.lsPostsExpiration;

      if (useable) {
        console.info('[Post readed from cache]:', post.title);
        var author = JSON.parse(post.author);
        return {
          posts: [_extends({}, post, { author: author, fromCache: 1 })]
        };
      }

      return null;
    }
  }, {
    key: 'deletePostFromCache',
    value: function deletePostFromCache(id) {
      var lsPosts = ls.getItem(_config.lsPostsKey);
      lsPosts = lsPosts ? JSON.parse(lsPosts) : {};
      console.log('[deleted post success]:', lsPosts[id].title);

      delete lsPosts[id];

      ls.setItem(_config.lsPostsKey, JSON.stringify(lsPosts));
    }
  }, {
    key: 'cachePost',
    value: function cachePost(id, post) {
      if (post.fromCache) return;

      var lsPosts = ls.getItem(_config.lsPostsKey);
      lsPosts = lsPosts ? JSON.parse(lsPosts) : {};

      lsPosts[id] = _extends({}, post, {
        author: JSON.stringify(post.author),
        timestamp: +new Date()

        // cache up to 5 posts
        // delete the oldest one if more than 5
      });var ids = Object.keys(lsPosts);
      if (ids.length > 5) {
        var shouldDeleteId = ids.map(function (id) {
          return {
            timestamp: lsPosts[id].timestamp,
            id: id
          };
        }).sort(function (a, b) {
          return a.timestamp - b.timestamp;
        }).map(function (item) {
          return item.id;
        }).shift();

        delete lsPosts[shouldDeleteId];
      }

      console.log(ids.length);
      ls.setItem(_config.lsPostsKey, JSON.stringify(lsPosts));
    }
  }]);

  return _class;
}();

exports.default = _class;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
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

var invariant = function invariant(condition, format, a, b, c, d, e, f) {
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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

exports.default = resolvePathname;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
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

exports.default = valueEqual;

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(23);

var _utils = __webpack_require__(0);

$(document).ready(function () {
  var $sidebar = $('#J-sidebar-header');
  var $sidebarBody = $('#J-side-bar-body');
  var $sidebarItem = $sidebar.find('.J-sidebar-item');
  var isSearchShowing = false;
  var isSideBodyShowing = true;

  $sidebar.on('click', '.J-sidebar-logo', function () {
    var $this = $(this);

    if ($this.is('.active')) {
      sidebarBodyHide();
      $this.removeClass('active');
    } else {
      sidebarBodyShow();
      emitter.emit('switch-sidebar', { target: 'logo' });
      $this.addClass('active').siblings().removeClass('active');
    }
  }).on('click', '.J-sidebar-search', function () {
    var $this = $(this);

    if ($this.is('.active')) {
      sidebarBodyHide();
    } else {
      sidebarBodyShow();

      $this.addClass('active').siblings().removeClass('active');

      new Promise(function (resolve) {
        __webpack_require__.e/* require.ensure */(0).then((function (require) {
          resolve(__webpack_require__( /* webpackChunkName: "search-box" */38));
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
      }).then(function () {
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

  (0, _utils.onresize)(function (e, width) {
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(25);

__webpack_require__(27);

$(function () {
  var $searchBox = $('#J-search-box');
  var $blogTree = $('#J-blog-tree');
  var $searchInput = $searchBox.find('.J-input-search');
  var $tagTree = $('#J-blog-tree');

  emitter.on('switch-sidebar', function (_ref) {
    var target = _ref.target;

    var isSearch = target === 'search';

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(26);

var _history = __webpack_require__(1);

var _history2 = _interopRequireDefault(_history);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(document).ready(function () {
  var $tagTree = $('#J-blog-tree');
  var $allPosts = $('#J-posts-all-hidden');
  var pathname = location.pathname;
  var $body = $('body');
  var $untagedPosts = $tagTree.find('.J-untaged-posts');
  var $win = $(window);

  var tags = {};
  var untaged = [];
  $allPosts.find('.J-post').each(function () {
    var $post = $(this);
    var slug = $post.data('slug');
    var $tags = $post.find('.J-tag');

    if (pathname.includes(slug)) {
      $post.addClass('active');
    }

    if ($tags.length === 0) {
      untaged.push($post[0].outerHTML);
    } else {
      $tags.each(function () {
        var tag = this.innerText;
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
    var $this = $(this);
    var posts = tags[$this.data('tag')];

    if (!posts) {
      $this.html('<ul><li class="blog-tree-no-posts lighter">Coming soon...</li></ul>').parent().addClass('post-hidden');
      return;
    }

    $this.html(posts.join('')).css({
      height: 26 * posts.length
    });
  });

  $untagedPosts.html(untaged.join(''));

  var $posts = $('.J-blog-tree-tags .J-post');

  // event binding
  $tagTree.addClass('loading-hidden').on('click', '.J-blog-tree-tagname', function () {
    $(this).parent().toggleClass('post-hidden');
  }).on('click', '.J-go2post', function (e) {
    var $this = $(this);

    if (!$body.is('.post-template')) return;

    if ($this.parents('.J-post').is('.active')) {
      e.preventDefault();
      return;
    }

    var id = $this.data('id');
    var url = $this.attr('href');

    if ($win.width() < 450) {
      emitter.emit('sidebar-hidden');
    }

    e.preventDefault();
    emitter.emit('add-post-tab', {
      id: id,
      url: url,
      title: $this.attr('title'),
      slug: $this.parents('.J-post').data('slug')
    });
  });

  _history2.default.listen(function (location) {
    var nextTab = location.state;

    $posts.removeClass('active').filter(function (idx, post) {
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(29);

$(function () {
  var $readingTime = $(".J-reading-time");

  emitter.on("refresh-reading-time", function (_ref) {
    var time = _ref.time;

    $readingTime.html(time);
  });
});

/***/ }),
/* 29 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(31);

var _history = __webpack_require__(1);

var _history2 = _interopRequireDefault(_history);

var _stores = __webpack_require__(2);

var _utils = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(function () {
  var $postWrap = $('#J-post-wrap');
  var $post = $('#J-post');
  var $title = $post.find('.J-post-title');
  var $content = $post.find('.J-post-content');
  var $meta = $post.find('.J-post-meta');
  var $featureImage = $post.find('.J-post-feature-image');
  var origin = location.origin;

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
  _history2.default.listen(function (location, action) {
    var postId = location.state.id;

    if (!postId) return;

    _stores.postStore.fetchPost(postId).done(function (data) {
      var post = data.posts[0] || {};
      var published_at = post.published_at,
          title = post.title,
          html = post.html,
          author = post.author,
          feature_image = post.feature_image,
          comment_id = post.comment_id,
          url = post.url,
          slug = post.slug;


      $title.html(title);
      $content.html(html);
      $meta.html('Posted by <a href="/author/' + author.slug + '/">' + author.name + '</a> on ' + (0, _utils.formatDate)('$Y.$M.$d', published_at));
      $featureImage[feature_image ? 'removeClass' : 'addClass']('hidden').find('figure').css({
        backgroundImage: 'url(' + feature_image + ')'
      });

      emitter.emit('refresh-reading-time', {
        time: ''
      });

      document.title = title;

      'function' === typeof window.refreshComment && window.refreshComment('ghost-' + comment_id, origin + url, title);

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(33);

/***/ }),
/* 33 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(35);

/***/ }),
/* 35 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(37);

/***/ }),
/* 37 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjU3OTBiMzhjYWFmNDk2NDViZmEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9oaXN0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy93YXJuaW5nL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9QYXRoVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dob3N0Y29kZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lbWl0dGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9taXR0L2Rpc3QvbWl0dC5lcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvcG9zdC10YWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvcG9zdC10YWIvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmVzL1RhYlN0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZXMvUG9zdFN0b3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oaXN0b3J5L2NyZWF0ZUJyb3dzZXJIaXN0b3J5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbnZhcmlhbnQvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9Mb2NhdGlvblV0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXBhdGhuYW1lL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWx1ZS1lcXVhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9ET01VdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9wYXJ0aWFscy9zaWRlLWJhci1oZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvc2lkZS1iYXItaGVhZGVyL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvc2lkZS1iYXItYm9keS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYXJ0aWFscy9zaWRlLWJhci1ib2R5L2Jsb2ctdHJlZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYXJ0aWFscy9zaWRlLWJhci1ib2R5L2Jsb2ctdHJlZS9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3BhcnRpYWxzL3NpZGUtYmFyLWJvZHkvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9wYXJ0aWFscy9mb290ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvZm9vdGVyL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvcG9zdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYXJ0aWFscy9wb3N0L3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvcG9zdC1uYXYvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvcG9zdC1uYXYvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9wYXJ0aWFscy9ob21lL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhcnRpYWxzL2hvbWUvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9wYXJ0aWFscy9hdXRob3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFydGlhbHMvYXV0aG9yL3N0eWxlLnNjc3MiXSwibmFtZXMiOlsiaFNjcm9sbCIsIm9ucmVzaXplIiwiJGJvZHkiLCIkIiwiJHdpbiIsIndpbmRvdyIsImlzSG9tZVBhZ2UiLCJpcyIsImlzUG9zdFBhZ2UiLCJlbCIsImNvbnNvbGUiLCJlcnJvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aGVlbCIsImUiLCJkZWx0YSIsIndoZWVsRGVsdGEiLCJkZWx0YVkiLCJzY3JvbGxMZWZ0IiwicHJldmVudERlZmF1bHQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZm9ybWF0IiwidGVtcGxhdGUiLCJ2YXJzIiwicmVwbGFjZSIsIl8iLCJuYW1lIiwidmFsdWUiLCJ0cmltIiwidG9MZW4iLCJzb3VyY2UiLCJsZW4iLCJBcnJheSIsInByb3RvdHlwZSIsImpvaW4iLCJjYWxsIiwibGVuZ3RoIiwic2xpY2UiLCJmb3JtYXREYXRlIiwiZGF0ZSIsImtleSIsIkRhdGUiLCJEQVkiLCJZIiwiZ2V0RnVsbFllYXIiLCJ5IiwiTSIsImdldE1vbnRoIiwiZCIsImdldERhdGUiLCJEIiwiZ2V0RGF5IiwiSCIsImdldEhvdXJzIiwibSIsImdldE1pbnV0ZXMiLCJzIiwiZ2V0U2Vjb25kcyIsImNhbGxiYWNrIiwiZm4iLCJ3aWR0aCIsInRhYlN0b3JlIiwicG9zdFN0b3JlIiwic3RvcmVzIiwibW9kdWxlIiwiZXhwb3J0cyIsImxzUG9zdFRhYktleSIsImxzUG9zdFRhYkV4cGlyYXRpb24iLCJsc1RoZW1lS2V5IiwibHNQb3N0c0tleSIsImxzUG9zdHNFeHBpcmF0aW9uIiwidGhlbWUiLCJ3YXJuaW5nIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiY29uZGl0aW9uIiwiYXJncyIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsIkVycm9yIiwidGVzdCIsImFyZ0luZGV4IiwibWVzc2FnZSIsIngiLCJjYWNoZWRTZXRUaW1lb3V0IiwiY2FjaGVkQ2xlYXJUaW1lb3V0IiwiZGVmYXVsdFNldFRpbW91dCIsImRlZmF1bHRDbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwicnVuVGltZW91dCIsImZ1biIsInJ1bkNsZWFyVGltZW91dCIsIm1hcmtlciIsInF1ZXVlIiwiZHJhaW5pbmciLCJjdXJyZW50UXVldWUiLCJxdWV1ZUluZGV4IiwiY2xlYW5VcE5leHRUaWNrIiwiY29uY2F0IiwiZHJhaW5RdWV1ZSIsInRpbWVvdXQiLCJydW4iLCJuZXh0VGljayIsImkiLCJwdXNoIiwiSXRlbSIsImFycmF5IiwiYXBwbHkiLCJ0aXRsZSIsImJyb3dzZXIiLCJhcmd2IiwidmVyc2lvbiIsInZlcnNpb25zIiwibm9vcCIsIm9uIiwiYWRkTGlzdGVuZXIiLCJvbmNlIiwib2ZmIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJlbWl0IiwicHJlcGVuZExpc3RlbmVyIiwicHJlcGVuZE9uY2VMaXN0ZW5lciIsImxpc3RlbmVycyIsImJpbmRpbmciLCJjd2QiLCJjaGRpciIsImRpciIsInVtYXNrIiwiX19lc01vZHVsZSIsImFkZExlYWRpbmdTbGFzaCIsInBhdGgiLCJjaGFyQXQiLCJzdHJpcExlYWRpbmdTbGFzaCIsInN1YnN0ciIsImhhc0Jhc2VuYW1lIiwicHJlZml4IiwiUmVnRXhwIiwic3RyaXBCYXNlbmFtZSIsInN0cmlwVHJhaWxpbmdTbGFzaCIsInBhcnNlUGF0aCIsInBhdGhuYW1lIiwic2VhcmNoIiwiaGFzaCIsImhhc2hJbmRleCIsImluZGV4T2YiLCJzZWFyY2hJbmRleCIsImNyZWF0ZVBhdGgiLCJsb2NhdGlvbiIsImVtaXR0ZXIiLCJtaXR0IiwiYWxsIiwiT2JqZWN0IiwiY3JlYXRlIiwidHlwZSIsImhhbmRsZXIiLCJzcGxpY2UiLCJldnQiLCJtYXAiLCIkcG9zdFRhYnMiLCIkc2Nyb2xsV3JhcCIsIm5kU2Nyb2xsV3JhcCIsImdldCIsInRhYnMiLCJnZXRUYWJzIiwiZmlsdGVyIiwidGFiIiwiaWQiLCJwb3N0Iiwic2V0VGFicyIsImFjdGl2ZSIsImFjdGl2ZUlkIiwiY3VycmVudFRhYiIsIiRhY3RpdmUiLCJodG1sIiwic2x1ZyIsImZpbmQiLCJ1cmwiLCJzZXRDdXJyZW50VGFiIiwic2Nyb2xsMnZpZXciLCJzdG9wUHJvcGFnYXRpb24iLCJkZWxldGVUYWJJdGVtIiwicGFyZW50IiwiZGF0YSIsIiR0aGlzIiwiYWRkQ2xhc3MiLCJzaWJsaW5ncyIsInJlbW92ZUNsYXNzIiwid3JhcFdpZHRoIiwid3JhcFNjcm9sbExlZnQiLCJ3cmFwUmlnaHQiLCJ0aHJlc2hvbGQiLCJuZEFjdGl2ZSIsImFjdGl2ZVdpZHRoIiwib3V0ZXJXaWR0aCIsImFjdGl2ZUxlZnQiLCJvZmZzZXRMZWZ0IiwiYWN0aXZlUmlnaHQiLCJscyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzcGxpdCIsInRhYnNEYXRhIiwidGltZXN0YW1wIiwic2V0SXRlbSIsIm5leHRUYWIiLCJpc0N1cnJlbnRUYWIiLCJkZWxldGVkSWR4IiwiZmluZEluZGV4IiwiaWR4IiwiaHJlZiIsImNhY2hlIiwiZnJvbUNhY2hlIiwiRGVmZXJyZWQiLCJyZXNvbHZlIiwiZ2hvc3QiLCJhcGkiLCJpbmNsdWRlIiwiZmFpbCIsImxvZyIsImVyciIsInN0YXR1cyIsImRvbmUiLCJwb3N0cyIsImNhY2hlUG9zdCIsImxzUG9zdHMiLCJKU09OIiwicGFyc2UiLCJ1c2VhYmxlIiwiaW5mbyIsImF1dGhvciIsInN0cmluZ2lmeSIsImlkcyIsImtleXMiLCJzaG91bGREZWxldGVJZCIsInNvcnQiLCJhIiwiYiIsIml0ZW0iLCJzaGlmdCIsIl90eXBlb2YiLCJTeW1ib2wiLCJpdGVyYXRvciIsIm9iaiIsImNvbnN0cnVjdG9yIiwiX2V4dGVuZHMiLCJhc3NpZ24iLCJ0YXJnZXQiLCJoYXNPd25Qcm9wZXJ0eSIsIl93YXJuaW5nIiwicmVxdWlyZSIsIl93YXJuaW5nMiIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfaW52YXJpYW50IiwiX2ludmFyaWFudDIiLCJfTG9jYXRpb25VdGlscyIsIl9QYXRoVXRpbHMiLCJfY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIiLCJfY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIyIiwiX0RPTVV0aWxzIiwiZGVmYXVsdCIsIlBvcFN0YXRlRXZlbnQiLCJIYXNoQ2hhbmdlRXZlbnQiLCJnZXRIaXN0b3J5U3RhdGUiLCJoaXN0b3J5Iiwic3RhdGUiLCJjcmVhdGVCcm93c2VySGlzdG9yeSIsInByb3BzIiwiY2FuVXNlRE9NIiwiZ2xvYmFsSGlzdG9yeSIsImNhblVzZUhpc3RvcnkiLCJzdXBwb3J0c0hpc3RvcnkiLCJuZWVkc0hhc2hDaGFuZ2VMaXN0ZW5lciIsInN1cHBvcnRzUG9wU3RhdGVPbkhhc2hDaGFuZ2UiLCJfcHJvcHMkZm9yY2VSZWZyZXNoIiwiZm9yY2VSZWZyZXNoIiwiX3Byb3BzJGdldFVzZXJDb25maXJtIiwiZ2V0VXNlckNvbmZpcm1hdGlvbiIsImdldENvbmZpcm1hdGlvbiIsIl9wcm9wcyRrZXlMZW5ndGgiLCJrZXlMZW5ndGgiLCJiYXNlbmFtZSIsImdldERPTUxvY2F0aW9uIiwiaGlzdG9yeVN0YXRlIiwiX3JlZiIsIl93aW5kb3ckbG9jYXRpb24iLCJjcmVhdGVMb2NhdGlvbiIsImNyZWF0ZUtleSIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInRyYW5zaXRpb25NYW5hZ2VyIiwic2V0U3RhdGUiLCJuZXh0U3RhdGUiLCJub3RpZnlMaXN0ZW5lcnMiLCJhY3Rpb24iLCJoYW5kbGVQb3BTdGF0ZSIsImV2ZW50IiwiaXNFeHRyYW5lb3VzUG9wc3RhdGVFdmVudCIsImhhbmRsZVBvcCIsImhhbmRsZUhhc2hDaGFuZ2UiLCJmb3JjZU5leHRQb3AiLCJjb25maXJtVHJhbnNpdGlvblRvIiwib2siLCJyZXZlcnRQb3AiLCJmcm9tTG9jYXRpb24iLCJ0b0xvY2F0aW9uIiwidG9JbmRleCIsImFsbEtleXMiLCJmcm9tSW5kZXgiLCJnbyIsImluaXRpYWxMb2NhdGlvbiIsImNyZWF0ZUhyZWYiLCJwdXNoU3RhdGUiLCJwcmV2SW5kZXgiLCJuZXh0S2V5cyIsInJlcGxhY2VTdGF0ZSIsIm4iLCJnb0JhY2siLCJnb0ZvcndhcmQiLCJsaXN0ZW5lckNvdW50IiwiY2hlY2tET01MaXN0ZW5lcnMiLCJpc0Jsb2NrZWQiLCJibG9jayIsInByb21wdCIsInVuYmxvY2siLCJzZXRQcm9tcHQiLCJsaXN0ZW4iLCJsaXN0ZW5lciIsInVubGlzdGVuIiwiYXBwZW5kTGlzdGVuZXIiLCJpbnZhcmlhbnQiLCJjIiwiZiIsImZyYW1lc1RvUG9wIiwibG9jYXRpb25zQXJlRXF1YWwiLCJfcmVzb2x2ZVBhdGhuYW1lIiwiX3Jlc29sdmVQYXRobmFtZTIiLCJfdmFsdWVFcXVhbCIsIl92YWx1ZUVxdWFsMiIsImN1cnJlbnRMb2NhdGlvbiIsImRlY29kZVVSSSIsIlVSSUVycm9yIiwiaXNBYnNvbHV0ZSIsInNwbGljZU9uZSIsImxpc3QiLCJpbmRleCIsImsiLCJwb3AiLCJyZXNvbHZlUGF0aG5hbWUiLCJ0byIsImZyb20iLCJ0b1BhcnRzIiwiZnJvbVBhcnRzIiwiaXNUb0FicyIsImlzRnJvbUFicyIsIm11c3RFbmRBYnMiLCJoYXNUcmFpbGluZ1NsYXNoIiwibGFzdCIsInVwIiwicGFydCIsInVuc2hpZnQiLCJyZXN1bHQiLCJ2YWx1ZUVxdWFsIiwiaXNBcnJheSIsImV2ZXJ5IiwiYVR5cGUiLCJiVHlwZSIsImFWYWx1ZSIsInZhbHVlT2YiLCJiVmFsdWUiLCJhS2V5cyIsImJLZXlzIiwiY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIiLCJuZXh0UHJvbXB0IiwiaXNBY3RpdmUiLCJfbGVuIiwiX2tleSIsImZvckVhY2giLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJub2RlIiwiYXR0YWNoRXZlbnQiLCJkZXRhY2hFdmVudCIsImNvbmZpcm0iLCJ1YSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInN1cHBvcnRzR29XaXRob3V0UmVsb2FkVXNpbmdIYXNoIiwicmVhZHkiLCIkc2lkZWJhciIsIiRzaWRlYmFyQm9keSIsIiRzaWRlYmFySXRlbSIsImlzU2VhcmNoU2hvd2luZyIsImlzU2lkZUJvZHlTaG93aW5nIiwic2lkZWJhckJvZHlIaWRlIiwic2lkZWJhckJvZHlTaG93IiwidGhlbiIsInNob3ciLCJoaWRlIiwiJHNlYXJjaEJveCIsIiRibG9nVHJlZSIsIiRzZWFyY2hJbnB1dCIsIiR0YWdUcmVlIiwiaXNTZWFyY2giLCJmb2N1cyIsIiRhbGxQb3N0cyIsIiR1bnRhZ2VkUG9zdHMiLCJ0YWdzIiwidW50YWdlZCIsImVhY2giLCIkcG9zdCIsIiR0YWdzIiwiaW5jbHVkZXMiLCJvdXRlckhUTUwiLCJ0YWciLCJpbm5lclRleHQiLCJjc3MiLCJoZWlnaHQiLCIkcG9zdHMiLCJ0b2dnbGVDbGFzcyIsInBhcmVudHMiLCJhdHRyIiwiJHJlYWRpbmdUaW1lIiwidGltZSIsIiRwb3N0V3JhcCIsIiR0aXRsZSIsIiRjb250ZW50IiwiJG1ldGEiLCIkZmVhdHVyZUltYWdlIiwib3JpZ2luIiwiaGlnaGxpZ2h0IiwicG9zdElkIiwiZmV0Y2hQb3N0IiwicHVibGlzaGVkX2F0IiwiZmVhdHVyZV9pbWFnZSIsImNvbW1lbnRfaWQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJyZWZyZXNoQ29tbWVudCIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJobGpzIiwiaGlnaGxpZ2h0QmxvY2siXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsV0FBVyxFQUFFO0FBQ3ZEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FB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UzdQLEdBQXRELEVBQTJEckUsS0FBM0QsQ0FBL0M7O0FBRUFtVTtBQUNBTixnQkFBVWMsT0FBVixDQUFrQixFQUFFQyxXQUFXLENBQWIsRUFBbEIsRUFBb0MsR0FBcEM7QUFDRCxLQXZCRDtBQXdCRCxHQTdCRDs7QUErQkEsV0FBU1QsU0FBVCxHQUFxQjtBQUNuQjlhLE1BQUUsVUFBRixFQUFjeVosSUFBZCxDQUFtQixVQUFTblQsQ0FBVCxFQUFZNE4sS0FBWixFQUFtQjtBQUNwQ2hVLGFBQU9zYixJQUFQLElBQWV0YixPQUFPc2IsSUFBUCxDQUFZQyxjQUFaLENBQTJCdkgsS0FBM0IsQ0FBZjtBQUNELEtBRkQ7QUFHRDtBQUNGLENBN0RELEU7Ozs7OztBQ0xBLHlDOzs7Ozs7Ozs7QUNBQSx3Qjs7Ozs7O0FDQUEseUM7Ozs7Ozs7OztBQ0FBLHdCOzs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7O0FDQUEsd0I7Ozs7OztBQ0FBLHlDIiwiZmlsZSI6Imdob3N0Y29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl07XG4gXHR3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSBmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhjaHVua0lkcywgbW9yZU1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzKSB7XG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXSwgcmVzdWx0O1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyk7XG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHR9O1xuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3RzIHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdDE6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhID09PSAwKSB7XG4gXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHsgcmVzb2x2ZSgpOyB9KTtcbiBcdFx0fVxuXG4gXHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG4gXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRDaHVua0RhdGFbMl07XG4gXHRcdH1cblxuIFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG4gXHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF07XG4gXHRcdH0pO1xuIFx0XHRpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlO1xuXG4gXHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcbiBcdFx0dmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuIFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gXHRcdHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gXHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04JztcbiBcdFx0c2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiBcdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjAwMDA7XG5cbiBcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcbiBcdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG4gXHRcdH1cbiBcdFx0c2NyaXB0LnNyYyA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiY2h1bmsuXCIgKyAoe31bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuXCIgKyB7XCIwXCI6XCIzNGZiMVwifVtjaHVua0lkXSArIFwiLmpzXCI7XG4gXHRcdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChvblNjcmlwdENvbXBsZXRlLCAxMjAwMDApO1xuIFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlO1xuIFx0XHRmdW5jdGlvbiBvblNjcmlwdENvbXBsZXRlKCkge1xuIFx0XHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cbiBcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuIFx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiBcdFx0XHR2YXIgY2h1bmsgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdFx0aWYoY2h1bmsgIT09IDApIHtcbiBcdFx0XHRcdGlmKGNodW5rKSB7XG4gXHRcdFx0XHRcdGNodW5rWzFdKG5ldyBFcnJvcignTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLicpKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcbiBcdFx0XHR9XG4gXHRcdH07XG4gXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcblxuIFx0XHRyZXR1cm4gcHJvbWlzZTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Fzc2V0cy9idWlsdC9cIjtcblxuIFx0Ly8gb24gZXJyb3IgZnVuY3Rpb24gZm9yIGFzeW5jIGxvYWRpbmdcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyB0aHJvdyBlcnI7IH07XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYjU3OTBiMzhjYWFmNDk2NDViZmEiLCJjb25zdCAkYm9keSA9ICQoJ2JvZHknKVxuY29uc3QgJHdpbiA9ICQod2luZG93KVxuXG5leHBvcnQgY29uc3QgaXNIb21lUGFnZSA9ICgpID0+ICRib2R5LmlzKCcuaG9tZS10ZW1wbGF0ZScpXG5leHBvcnQgY29uc3QgaXNQb3N0UGFnZSA9ICgpID0+ICRib2R5LmlzKCcucG9zdC10ZW1wbGF0ZScpXG5cbi8qKlxuICogaG9yaXpvbnRhbGx5IHNjcm9sbFxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gKlxuICogQGV4YW1wbGVcbiAqICBjb25zdCBzdG9wSFNjcm9sbCA9IGhTY3JvbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0otaHNjcm9sbC1lbCcpKVxuICogIHN0b3BIU2Nyb2xsKCkgLy8gcmVtb3ZlRXZlbnRMaXN0ZW5lclxuICovXG5leHBvcnQgZnVuY3Rpb24gaFNjcm9sbChlbCkge1xuICBpZiAoIWVsKSB7XG4gICAgY29uc29sZS5lcnJvcignTXVzdCBzcGVjaWZ5IGVsIScpXG4gICAgcmV0dXJuXG4gIH1cblxuICBlbC5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIHdoZWVsKVxuXG4gIGZ1bmN0aW9uIHdoZWVsKGUpIHtcbiAgICBjb25zdCBkZWx0YSA9IGUud2hlZWxEZWx0YSA/IGUud2hlZWxEZWx0YSA6IC0xICogZS5kZWx0YVlcbiAgICBlbC5zY3JvbGxMZWZ0ICs9IC1kZWx0YVxuICAgIGUucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgcmV0dXJuICgpID0+IGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3doZWVsJywgd2hlZWwpXG59XG5cbmV4cG9ydCBjb25zdCBmb3JtYXQgPSBmdW5jdGlvbih0ZW1wbGF0ZSwgdmFycykge1xuICByZXR1cm4gdGVtcGxhdGUucmVwbGFjZSgvXFwkXFx7KFteXFx7XFx9XSopXFx9L2csIGZ1bmN0aW9uKF8sIG5hbWUpIHtcbiAgICB2YXIgdmFsdWUgPSB2YXJzW25hbWUudHJpbSgpXVxuICAgIHJldHVybiB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZSArICcnXG4gIH0pXG59XG5cbmNvbnN0IHRvTGVuID0gZnVuY3Rpb24oc291cmNlLCBsZW4pIHtcbiAgcmV0dXJuIChcbiAgICBBcnJheS5wcm90b3R5cGUuam9pbi5jYWxsKFxuICAgICAge1xuICAgICAgICBsZW5ndGg6IGxlbiArIDFcbiAgICAgIH0sXG4gICAgICAnMCdcbiAgICApICsgc291cmNlXG4gICkuc2xpY2UoLWxlbilcbn1cblxuZXhwb3J0IGNvbnN0IGZvcm1hdERhdGUgPSBmdW5jdGlvbih0ZW1wbGF0ZSwgZGF0ZSkge1xuICBpZiAoIWRhdGUpIHJldHVybiAnJ1xuICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UoL1xcJChbYS16QS1aXSkvZywgZnVuY3Rpb24oXywga2V5KSB7XG4gICAgcmV0dXJuICckeycgKyBrZXkgKyAnfSdcbiAgfSlcbiAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpXG4gIHZhciBEQVkgPSBbJ+aXpScsICfkuIAnLCAn5LqMJywgJ+S4iScsICflm5snLCAn5LqUJywgJ+WFrSddXG4gIHJldHVybiBmb3JtYXQodGVtcGxhdGUsIHtcbiAgICBZOiB0b0xlbihkYXRlLmdldEZ1bGxZZWFyKCksIDQpLFxuICAgIHk6IHRvTGVuKGRhdGUuZ2V0RnVsbFllYXIoKSwgMiksXG4gICAgTTogdG9MZW4oZGF0ZS5nZXRNb250aCgpICsgMSwgMiksXG4gICAgZDogdG9MZW4oZGF0ZS5nZXREYXRlKCksIDIpLFxuICAgIEQ6IERBWVtkYXRlLmdldERheSgpXSxcbiAgICBIOiB0b0xlbihkYXRlLmdldEhvdXJzKCksIDIpLFxuICAgIG06IHRvTGVuKGRhdGUuZ2V0TWludXRlcygpLCAyKSxcbiAgICBzOiB0b0xlbihkYXRlLmdldFNlY29uZHMoKSwgMilcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9ucmVzaXplKGNhbGxiYWNrKSB7XG4gIGNvbnN0IGZuID0gZnVuY3Rpb24oZSkge1xuICAgIGNvbnN0IHdpZHRoID0gJHdpbi53aWR0aCgpXG4gICAgcmV0dXJuIGNhbGxiYWNrLmNhbGwodGhpcywgZSwgd2lkdGgpXG4gIH1cblxuICBmbigpXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmbilcbiAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmbilcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy5qcyIsImltcG9ydCBjcmVhdGVIaXN0b3J5IGZyb20gXCJoaXN0b3J5L2NyZWF0ZUJyb3dzZXJIaXN0b3J5XCJcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSGlzdG9yeSgpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hpc3RvcnkuanMiLCJpbXBvcnQgVGFiU3RvcmUgZnJvbSAnLi9UYWJTdG9yZSdcbmltcG9ydCBQb3N0U3RvcmUgZnJvbSAnLi9Qb3N0U3RvcmUnXG5cbmV4cG9ydCBjb25zdCB0YWJTdG9yZSA9IG5ldyBUYWJTdG9yZSgpXG5leHBvcnQgY29uc3QgcG9zdFN0b3JlID0gbmV3IFBvc3RTdG9yZSgpXG5cbndpbmRvdy5zdG9yZXMgPSB7XG4gIHRhYlN0b3JlLFxuICBwb3N0U3RvcmVcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmVzL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGxvY2Fsc3RvcmFnZSB0YWIga2V5XG4gIGxzUG9zdFRhYktleTogJ2dob3N0Y29kZS1wb3N0LXRhYnMnLFxuICAvLyB0YWIgZXhwaXJhdGlvbiAxZFxuICBsc1Bvc3RUYWJFeHBpcmF0aW9uOiAyNCAqIDYwICogNjAgKiAxMDAwLFxuICAvLyBsb2NhbHN0b3JhZ2UgdGhlbWUga2V5XG4gIGxzVGhlbWVLZXk6ICdnaG9zdGNvZGUtdGhlbWUnLFxuICAvLyBsb2NhbHN0b3JhZ2UgcG9zdCBrZXlcbiAgbHNQb3N0c0tleTogJ2dob3N0Y29kZS1wb3N0cycsXG4gIC8vIHBvc3QgZXhwaXJhdGlvbiB0aW1lIDFtaW5cbiAgbHNQb3N0c0V4cGlyYXRpb246IDEgKiA2MCAqIDEwMDAsXG4gIC8vIHRoZW1lIG5hbWUgZnJvbSAuL3RoZW1lcy9yZXN1bHQuanNvblxuICB0aGVtZTogJ2RhcmtfZGVmYXVsdCcsXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb25maWcuanMiLCIvKipcbiAqIENvcHlyaWdodCAyMDE0LTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciB3YXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgd2FybmluZyA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhcmdzKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgYXJncyA9IG5ldyBBcnJheShsZW4gPiAyID8gbGVuIC0gMiA6IDApO1xuICAgIGZvciAodmFyIGtleSA9IDI7IGtleSA8IGxlbjsga2V5KyspIHtcbiAgICAgIGFyZ3Nba2V5IC0gMl0gPSBhcmd1bWVudHNba2V5XTtcbiAgICB9XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICtcbiAgICAgICAgJ21lc3NhZ2UgYXJndW1lbnQnXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChmb3JtYXQubGVuZ3RoIDwgMTAgfHwgKC9eW3NcXFddKiQvKS50ZXN0KGZvcm1hdCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1RoZSB3YXJuaW5nIGZvcm1hdCBzaG91bGQgYmUgYWJsZSB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzICcgK1xuICAgICAgICAnd2FybmluZy4gUGxlYXNlLCB1c2UgYSBtb3JlIGRlc2NyaXB0aXZlIGZvcm1hdCB0aGFuOiAnICsgZm9ybWF0XG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgICAgfSk7XG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgIH0gY2F0Y2goeCkge31cbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2FybmluZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy93YXJuaW5nL2Jyb3dzZXIuanMiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBhZGRMZWFkaW5nU2xhc2ggPSBleHBvcnRzLmFkZExlYWRpbmdTbGFzaCA9IGZ1bmN0aW9uIGFkZExlYWRpbmdTbGFzaChwYXRoKSB7XG4gIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nID8gcGF0aCA6ICcvJyArIHBhdGg7XG59O1xuXG52YXIgc3RyaXBMZWFkaW5nU2xhc2ggPSBleHBvcnRzLnN0cmlwTGVhZGluZ1NsYXNoID0gZnVuY3Rpb24gc3RyaXBMZWFkaW5nU2xhc2gocGF0aCkge1xuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJyA/IHBhdGguc3Vic3RyKDEpIDogcGF0aDtcbn07XG5cbnZhciBoYXNCYXNlbmFtZSA9IGV4cG9ydHMuaGFzQmFzZW5hbWUgPSBmdW5jdGlvbiBoYXNCYXNlbmFtZShwYXRoLCBwcmVmaXgpIHtcbiAgcmV0dXJuIG5ldyBSZWdFeHAoJ14nICsgcHJlZml4ICsgJyhcXFxcL3xcXFxcP3wjfCQpJywgJ2knKS50ZXN0KHBhdGgpO1xufTtcblxudmFyIHN0cmlwQmFzZW5hbWUgPSBleHBvcnRzLnN0cmlwQmFzZW5hbWUgPSBmdW5jdGlvbiBzdHJpcEJhc2VuYW1lKHBhdGgsIHByZWZpeCkge1xuICByZXR1cm4gaGFzQmFzZW5hbWUocGF0aCwgcHJlZml4KSA/IHBhdGguc3Vic3RyKHByZWZpeC5sZW5ndGgpIDogcGF0aDtcbn07XG5cbnZhciBzdHJpcFRyYWlsaW5nU2xhc2ggPSBleHBvcnRzLnN0cmlwVHJhaWxpbmdTbGFzaCA9IGZ1bmN0aW9uIHN0cmlwVHJhaWxpbmdTbGFzaChwYXRoKSB7XG4gIHJldHVybiBwYXRoLmNoYXJBdChwYXRoLmxlbmd0aCAtIDEpID09PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGg7XG59O1xuXG52YXIgcGFyc2VQYXRoID0gZXhwb3J0cy5wYXJzZVBhdGggPSBmdW5jdGlvbiBwYXJzZVBhdGgocGF0aCkge1xuICB2YXIgcGF0aG5hbWUgPSBwYXRoIHx8ICcvJztcbiAgdmFyIHNlYXJjaCA9ICcnO1xuICB2YXIgaGFzaCA9ICcnO1xuXG4gIHZhciBoYXNoSW5kZXggPSBwYXRobmFtZS5pbmRleE9mKCcjJyk7XG4gIGlmIChoYXNoSW5kZXggIT09IC0xKSB7XG4gICAgaGFzaCA9IHBhdGhuYW1lLnN1YnN0cihoYXNoSW5kZXgpO1xuICAgIHBhdGhuYW1lID0gcGF0aG5hbWUuc3Vic3RyKDAsIGhhc2hJbmRleCk7XG4gIH1cblxuICB2YXIgc2VhcmNoSW5kZXggPSBwYXRobmFtZS5pbmRleE9mKCc/Jyk7XG4gIGlmIChzZWFyY2hJbmRleCAhPT0gLTEpIHtcbiAgICBzZWFyY2ggPSBwYXRobmFtZS5zdWJzdHIoc2VhcmNoSW5kZXgpO1xuICAgIHBhdGhuYW1lID0gcGF0aG5hbWUuc3Vic3RyKDAsIHNlYXJjaEluZGV4KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWU6IHBhdGhuYW1lLFxuICAgIHNlYXJjaDogc2VhcmNoID09PSAnPycgPyAnJyA6IHNlYXJjaCxcbiAgICBoYXNoOiBoYXNoID09PSAnIycgPyAnJyA6IGhhc2hcbiAgfTtcbn07XG5cbnZhciBjcmVhdGVQYXRoID0gZXhwb3J0cy5jcmVhdGVQYXRoID0gZnVuY3Rpb24gY3JlYXRlUGF0aChsb2NhdGlvbikge1xuICB2YXIgcGF0aG5hbWUgPSBsb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgIHNlYXJjaCA9IGxvY2F0aW9uLnNlYXJjaCxcbiAgICAgIGhhc2ggPSBsb2NhdGlvbi5oYXNoO1xuXG5cbiAgdmFyIHBhdGggPSBwYXRobmFtZSB8fCAnLyc7XG5cbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2ggIT09ICc/JykgcGF0aCArPSBzZWFyY2guY2hhckF0KDApID09PSAnPycgPyBzZWFyY2ggOiAnPycgKyBzZWFyY2g7XG5cbiAgaWYgKGhhc2ggJiYgaGFzaCAhPT0gJyMnKSBwYXRoICs9IGhhc2guY2hhckF0KDApID09PSAnIycgPyBoYXNoIDogJyMnICsgaGFzaDtcblxuICByZXR1cm4gcGF0aDtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2hpc3RvcnkvUGF0aFV0aWxzLmpzIiwiaW1wb3J0ICcuL2NvbXBvbmVudHMvZW1pdHRlcidcblxuaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJ1xuXG5pbXBvcnQgJ3BhcnRpYWxzL3Bvc3QtdGFiJ1xuaW1wb3J0ICdwYXJ0aWFscy9zaWRlLWJhci1oZWFkZXInXG5pbXBvcnQgJ3BhcnRpYWxzL3NpZGUtYmFyLWJvZHknXG5pbXBvcnQgJ3BhcnRpYWxzL2Zvb3RlcidcbmltcG9ydCAncGFydGlhbHMvcG9zdCdcbmltcG9ydCAncGFydGlhbHMvcG9zdC1uYXYnXG5pbXBvcnQgJ3BhcnRpYWxzL2hvbWUnXG5pbXBvcnQgJ3BhcnRpYWxzL2F1dGhvcidcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2hvc3Rjb2RlLmpzIiwiaW1wb3J0IG1pdHQgZnJvbSAnbWl0dCdcbndpbmRvdy5lbWl0dGVyID0gbWl0dCgpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvZW1pdHRlci9pbmRleC5qcyIsIi8vICAgICAgXG4vLyBBbiBldmVudCBoYW5kbGVyIGNhbiB0YWtlIGFuIG9wdGlvbmFsIGV2ZW50IGFyZ3VtZW50XG4vLyBhbmQgc2hvdWxkIG5vdCByZXR1cm4gYSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4vLyBBbiBhcnJheSBvZiBhbGwgY3VycmVudGx5IHJlZ2lzdGVyZWQgZXZlbnQgaGFuZGxlcnMgZm9yIGEgdHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbi8vIEEgbWFwIG9mIGV2ZW50IHR5cGVzIGFuZCB0aGVpciBjb3JyZXNwb25kaW5nIGV2ZW50IGhhbmRsZXJzLlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBcblxuLyoqIE1pdHQ6IFRpbnkgKH4yMDBiKSBmdW5jdGlvbmFsIGV2ZW50IGVtaXR0ZXIgLyBwdWJzdWIuXG4gKiAgQG5hbWUgbWl0dFxuICogIEByZXR1cm5zIHtNaXR0fVxuICovXG5mdW5jdGlvbiBtaXR0KGFsbCAgICAgICAgICAgICAgICAgKSB7XG5cdGFsbCA9IGFsbCB8fCBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG5cdHJldHVybiB7XG5cdFx0LyoqXG5cdFx0ICogUmVnaXN0ZXIgYW4gZXZlbnQgaGFuZGxlciBmb3IgdGhlIGdpdmVuIHR5cGUuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0gIHtTdHJpbmd9IHR5cGVcdFR5cGUgb2YgZXZlbnQgdG8gbGlzdGVuIGZvciwgb3IgYFwiKlwiYCBmb3IgYWxsIGV2ZW50c1xuXHRcdCAqIEBwYXJhbSAge0Z1bmN0aW9ufSBoYW5kbGVyIEZ1bmN0aW9uIHRvIGNhbGwgaW4gcmVzcG9uc2UgdG8gZ2l2ZW4gZXZlbnRcblx0XHQgKiBAbWVtYmVyT2YgbWl0dFxuXHRcdCAqL1xuXHRcdG9uOiBmdW5jdGlvbiBvbih0eXBlICAgICAgICAsIGhhbmRsZXIgICAgICAgICAgICAgICkge1xuXHRcdFx0KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBSZW1vdmUgYW4gZXZlbnQgaGFuZGxlciBmb3IgdGhlIGdpdmVuIHR5cGUuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0gIHtTdHJpbmd9IHR5cGVcdFR5cGUgb2YgZXZlbnQgdG8gdW5yZWdpc3RlciBgaGFuZGxlcmAgZnJvbSwgb3IgYFwiKlwiYFxuXHRcdCAqIEBwYXJhbSAge0Z1bmN0aW9ufSBoYW5kbGVyIEhhbmRsZXIgZnVuY3Rpb24gdG8gcmVtb3ZlXG5cdFx0ICogQG1lbWJlck9mIG1pdHRcblx0XHQgKi9cblx0XHRvZmY6IGZ1bmN0aW9uIG9mZih0eXBlICAgICAgICAsIGhhbmRsZXIgICAgICAgICAgICAgICkge1xuXHRcdFx0aWYgKGFsbFt0eXBlXSkge1xuXHRcdFx0XHRhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogSW52b2tlIGFsbCBoYW5kbGVycyBmb3IgdGhlIGdpdmVuIHR5cGUuXG5cdFx0ICogSWYgcHJlc2VudCwgYFwiKlwiYCBoYW5kbGVycyBhcmUgaW52b2tlZCBhZnRlciB0eXBlLW1hdGNoZWQgaGFuZGxlcnMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSAgVGhlIGV2ZW50IHR5cGUgdG8gaW52b2tlXG5cdFx0ICogQHBhcmFtIHtBbnl9IFtldnRdICBBbnkgdmFsdWUgKG9iamVjdCBpcyByZWNvbW1lbmRlZCBhbmQgcG93ZXJmdWwpLCBwYXNzZWQgdG8gZWFjaCBoYW5kbGVyXG5cdFx0ICogQG1lbWJlcm9mIG1pdHRcblx0XHQgKi9cblx0XHRlbWl0OiBmdW5jdGlvbiBlbWl0KHR5cGUgICAgICAgICwgZXZ0ICAgICApIHtcblx0XHRcdChhbGxbdHlwZV0gfHwgW10pLm1hcChmdW5jdGlvbiAoaGFuZGxlcikgeyBoYW5kbGVyKGV2dCk7IH0pO1xuXHRcdFx0KGFsbFsnKiddIHx8IFtdKS5tYXAoZnVuY3Rpb24gKGhhbmRsZXIpIHsgaGFuZGxlcih0eXBlLCBldnQpOyB9KTtcblx0XHR9XG5cdH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1pdHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1taXR0LmVzLmpzLm1hcFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL21pdHQvZGlzdC9taXR0LmVzLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvaW5kZXguc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnXG5pbXBvcnQgeyB0YWJTdG9yZSB9IGZyb20gJyMvc3RvcmVzJ1xuaW1wb3J0IGhpc3RvcnkgZnJvbSAnIy9oaXN0b3J5J1xuaW1wb3J0IHsgaFNjcm9sbCwgaXNQb3N0UGFnZSB9IGZyb20gJyMvdXRpbHMnXG5cbiQoZnVuY3Rpb24oKSB7XG4gIGlmICghaXNQb3N0UGFnZSgpKSByZXR1cm5cblxuICBsZXQgJHBvc3RUYWJzID0gJCgnI0otcG9zdC10YWInKVxuICBjb25zdCAkc2Nyb2xsV3JhcCA9ICQoJy5KLXBvc3QtdGFiLXNjcm9sbGVyLXdyYXAnKVxuICBjb25zdCBuZFNjcm9sbFdyYXAgPSAkc2Nyb2xsV3JhcC5nZXQoMClcblxuICBlbWl0dGVyLm9uKCdhZGQtcG9zdC10YWInLCBwb3N0ID0+IHtcbiAgICBjb25zdCB0YWJzID0gdGFiU3RvcmUuZ2V0VGFicygpXG4gICAgaWYgKCF0YWJzLmZpbHRlcih0YWIgPT4gdGFiLmlkID09PSBwb3N0LmlkKS5sZW5ndGgpIHtcbiAgICAgIHRhYnMucHVzaCh7IC4uLnBvc3QgfSlcblxuICAgICAgdGFiU3RvcmUuc2V0VGFicyh0YWJzKVxuICAgIH1cblxuICAgIGVtaXR0ZXIuZW1pdCgndGFiLXJlZnJlc2gnLCB7IC4uLnBvc3QgfSlcbiAgfSlcblxuICBlbWl0dGVyLm9uKCd0YWItcmVmcmVzaCcsIChhY3RpdmUgPSB7fSkgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZUlkID0gYWN0aXZlLmlkXG4gICAgY29uc3QgdGFicyA9IHRhYlN0b3JlLmdldFRhYnMoKVxuICAgIGNvbnN0IGN1cnJlbnRUYWIgPSB0YWJTdG9yZS5jdXJyZW50VGFiXG5cbiAgICBjb25zdCAkYWN0aXZlID0gJCgnI0otcG9zdC10YWInKVxuICAgICAgLmh0bWwoXG4gICAgICAgIHRhYnNcbiAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgdGFiID0+XG4gICAgICAgICAgICAgIGA8ZGl2IHRpdGxlPVwiJHt0YWIudGl0bGV9XCIgY2xhc3M9XCJKLXRhYi1pdGVtIGxpZ2h0IGhvdmVyLW9wYWNpdHkxIGZsZXgtaXRlbTAgc2luZ2xlLWxpbmUgaXRlbSAke2FjdGl2ZUlkID09PSB0YWIuaWQgPyAnYWN0aXZlJyA6ICcnfVwiIGRhdGEtaWQ9XCIke1xuICAgICAgICAgICAgICAgIHRhYi5pZFxuICAgICAgICAgICAgICB9XCI+JHt0YWIudGl0bGV9PGkgY2xhc3M9XCJjbG9zZSBKLXBvc3QtdGFiLWNsb3NlIGxpZ2h0ZXIgaG92ZXItb3BhY2l0eTFcIiBkYXRhLXNsdWc9XCIke3RhYi5zbHVnfVwiPjwvaT48L2Rpdj5gXG4gICAgICAgICAgKVxuICAgICAgICAgIC5qb2luKCcnKVxuICAgICAgKVxuICAgICAgLmZpbmQoJy5hY3RpdmUnKVxuXG4gICAgLy8gbm90IHJlZmV0Y2ggY3VycmVudCBwb3N0XG4gICAgaWYgKCFjdXJyZW50VGFiIHx8IGN1cnJlbnRUYWIuaWQgIT09IGFjdGl2ZUlkKSB7XG4gICAgICBoaXN0b3J5LnB1c2goYWN0aXZlLnVybCwgeyAuLi5hY3RpdmUgfSlcbiAgICAgIHRhYlN0b3JlLnNldEN1cnJlbnRUYWIoeyAuLi5hY3RpdmUgfSlcbiAgICB9XG5cbiAgICBzY3JvbGwydmlldygkYWN0aXZlKVxuICB9KVxuXG4gICRwb3N0VGFic1xuICAgIC5vbignY2xpY2snLCAnLkotcG9zdC10YWItY2xvc2UnLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICB0YWJTdG9yZS5kZWxldGVUYWJJdGVtKFxuICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgLnBhcmVudCgnLkotdGFiLWl0ZW0nKVxuICAgICAgICAgIC5kYXRhKCdpZCcpXG4gICAgICApXG4gICAgfSlcbiAgICAub24oJ2NsaWNrJywgJy5KLXRhYi1pdGVtJywgZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCAkdGhpcyA9ICQodGhpcylcbiAgICAgIGlmICgkdGhpcy5pcygnLmFjdGl2ZScpKSByZXR1cm5cblxuICAgICAgY29uc3QgaWQgPSAkdGhpcy5kYXRhKCdpZCcpXG4gICAgICBjb25zdCBjdXJyZW50VGFiID0gdGFiU3RvcmUuZ2V0VGFicygpLmZpbHRlcih0YWIgPT4gdGFiLmlkID09PSBpZClbMF0gfHwge31cblxuICAgICAgJHRoaXNcbiAgICAgICAgLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgICAgICAuc2libGluZ3MoKVxuICAgICAgICAucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICB0YWJTdG9yZS5zZXRDdXJyZW50VGFiKGN1cnJlbnRUYWIpXG4gICAgICBoaXN0b3J5LnB1c2goY3VycmVudFRhYi51cmwsIHsgLi4uY3VycmVudFRhYiB9KVxuXG4gICAgICBzY3JvbGwydmlldygkdGhpcylcbiAgICB9KVxuXG4gIC8qKlxuICAgKiBzY3JvbGwgc2VsZWN0ZWQgdGFiIGl0ZW0gaW50byB2aWV3IGlmIGl0IGlzIG91dCBvZiB2aWV3XG4gICAqL1xuICBmdW5jdGlvbiBzY3JvbGwydmlldygkYWN0aXZlKSB7XG4gICAgLy8gd3JhcCBlbGVtZW50XG4gICAgY29uc3Qgd3JhcFdpZHRoID0gJHNjcm9sbFdyYXAud2lkdGgoKVxuICAgIGNvbnN0IHdyYXBTY3JvbGxMZWZ0ID0gJHNjcm9sbFdyYXAuc2Nyb2xsTGVmdCgpXG4gICAgY29uc3Qgd3JhcFJpZ2h0ID0gd3JhcFdpZHRoICsgd3JhcFNjcm9sbExlZnRcbiAgICBjb25zdCB0aHJlc2hvbGQgPSAxMFxuXG4gICAgLy8gYWN0aXZlIGVsZW1lbnRcbiAgICBjb25zdCBuZEFjdGl2ZSA9ICRhY3RpdmUuZ2V0KDApXG4gICAgY29uc3QgYWN0aXZlV2lkdGggPSAkYWN0aXZlLm91dGVyV2lkdGgoKVxuICAgIGNvbnN0IGFjdGl2ZUxlZnQgPSBuZEFjdGl2ZS5vZmZzZXRMZWZ0XG4gICAgY29uc3QgYWN0aXZlUmlnaHQgPSBhY3RpdmVMZWZ0ICsgYWN0aXZlV2lkdGhcbiAgICBpZiAoYWN0aXZlUmlnaHQgPiB3cmFwV2lkdGggKyB3cmFwU2Nyb2xsTGVmdCkge1xuICAgICAgbmRTY3JvbGxXcmFwLnNjcm9sbExlZnQgPSBhY3RpdmVSaWdodCAtIHdyYXBXaWR0aCAtIHRocmVzaG9sZFxuICAgIH1cbiAgICBpZiAoYWN0aXZlTGVmdCA8PSB3cmFwU2Nyb2xsTGVmdCkge1xuICAgICAgbmRTY3JvbGxXcmFwLnNjcm9sbExlZnQgPSBhY3RpdmVMZWZ0IC0gdGhyZXNob2xkXG4gICAgfVxuICB9XG5cbiAgaFNjcm9sbCgkc2Nyb2xsV3JhcC5nZXQoMCkpXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFydGlhbHMvcG9zdC10YWIvaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGFydGlhbHMvcG9zdC10YWIvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiaW1wb3J0IHtsc1Bvc3RUYWJLZXksIGxzUG9zdFRhYkV4cGlyYXRpb259IGZyb20gJ2NvbmZpZydcbmNvbnN0IGxzID0gbG9jYWxTdG9yYWdlXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY3VycmVudFRhYiA9IG51bGxcblxuICBnZXRUYWJzKCkge1xuICAgIGxldCB0YWJzID0gbHMuZ2V0SXRlbShsc1Bvc3RUYWJLZXkpIHx8ICcnXG4gICAgY29uc3QgW3RhYnNEYXRhLCB0aW1lc3RhbXBdID0gdGFicy5zcGxpdCgnX19fJylcbiAgICBpZiAoIXRhYnMgfHwgIXRpbWVzdGFtcCB8fCArbmV3IERhdGUoKSAtIHRpbWVzdGFtcCA+PSBsc1Bvc3RUYWJFeHBpcmF0aW9uKSByZXR1cm4gW11cblxuICAgIHJldHVybiB0YWJzRGF0YS5zcGxpdCgnLCcpLm1hcCh0YWIgPT4ge1xuICAgICAgY29uc3QgW2lkLCB0aXRsZSwgdXJsLCBzbHVnXSA9IHRhYi5zcGxpdCgnOicpXG4gICAgICByZXR1cm4geyBpZCwgdGl0bGUsIHVybCwgc2x1ZyB9XG4gICAgfSlcbiAgfVxuXG4gIHNldFRhYnModGFicykge1xuICAgIGxzLnNldEl0ZW0obHNQb3N0VGFiS2V5LCB0YWJzLmxlbmd0aCA/IHRhYnMubWFwKHRhYiA9PiBgJHt0YWIuaWR9OiR7dGFiLnRpdGxlfToke3RhYi51cmx9OiR7dGFiLnNsdWd9YCkuam9pbignLCcpICsgJ19fXycgKyAoK25ldyBEYXRlKCkpIDogJycpXG4gIH1cblxuICBzZXRDdXJyZW50VGFiKHRhYikge1xuICAgIHRoaXMuY3VycmVudFRhYiA9IHRhYlxuICB9XG5cbiAgZGVsZXRlVGFiSXRlbShpZCkge1xuICAgIGxldCB0YWJzID0gdGhpcy5nZXRUYWJzKClcbiAgICBsZXQgbmV4dFRhYiA9IG51bGxcbiAgICBjb25zdCBpc0N1cnJlbnRUYWIgPSBpZCA9PT0gdGhpcy5jdXJyZW50VGFiLmlkXG5cbiAgICBjb25zdCBkZWxldGVkSWR4ID0gdGFicy5maW5kSW5kZXgodGFiID0+IHRhYi5pZCA9PT0gaWQpXG4gICAgdGFicyA9IHRhYnMuZmlsdGVyKCh0YWIsIGlkeCkgPT4gdGFiLmlkICE9PSBpZClcblxuICAgIHRoaXMuc2V0VGFicyh0YWJzKVxuXG4gICAgaWYgKHRhYnMubGVuZ3RoKSB7XG4gICAgICBpZiAoaXNDdXJyZW50VGFiKSB7XG4gICAgICAgIG5leHRUYWIgPSBkZWxldGVkSWR4ID09PSAwID8gdGFic1swXSA6IHRhYnNbZGVsZXRlZElkeCAtIDFdXG4gICAgICB9XG5cbiAgICAgIGVtaXR0ZXIuZW1pdCgndGFiLXJlZnJlc2gnLCBuZXh0VGFiIHx8IHRoaXMuY3VycmVudFRhYilcbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYXRpb24uaHJlZiA9ICcvJ1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3Jlcy9UYWJTdG9yZS5qcyIsImltcG9ydCB7bHNQb3N0c0tleSwgbHNQb3N0c0V4cGlyYXRpb259IGZyb20gJ2NvbmZpZydcbmltcG9ydCB7IHRhYlN0b3JlIH0gZnJvbSAnIy9zdG9yZXMnXG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSAnIy91dGlscydcbmNvbnN0IGxzID0gbG9jYWxTdG9yYWdlXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgZmV0Y2hQb3N0KGlkKSB7XG4gICAgY29uc3QgY2FjaGUgPSB0aGlzLmZyb21DYWNoZShpZClcblxuICAgIHJldHVybiBjYWNoZVxuICAgICAgPyAkLkRlZmVycmVkKCkucmVzb2x2ZShjYWNoZSlcbiAgICAgIDogJC5nZXQoZ2hvc3QudXJsLmFwaShgcG9zdHMvJHtpZH1gKSwge1xuICAgICAgICAgIGluY2x1ZGU6ICdhdXRob3InXG4gICAgICAgIH0pXG4gICAgICAgICAgLmZhaWwoZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgIGlmIChlcnIuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgICAgICAgdGFiU3RvcmUuZGVsZXRlVGFiSXRlbShpZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC5kb25lKGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRhdGEucG9zdHNbMF0gfHwge31cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBvc3QpXG4gICAgICAgICAgICB0aGlzLmNhY2hlUG9zdChpZCwgcG9zdClcbiAgICAgICAgICAgIHJldHVybiBwb3N0XG4gICAgICAgICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFkIHBvc3QgZnJvbSBjYWNoZSBmaXJzdFxuICAgKiBAcGFyYW0ge251bWJlcn0gaWQgLT4gcG9zdCBpZFxuICAgKiAgLSBvbmx5IGNhY2hlIDVtaW5cbiAgICovXG4gIGZyb21DYWNoZShpZCkge1xuICAgIGxldCBsc1Bvc3RzID0gbHMuZ2V0SXRlbShsc1Bvc3RzS2V5KVxuICAgIGxzUG9zdHMgPSBsc1Bvc3RzID8gSlNPTi5wYXJzZShsc1Bvc3RzKSA6IHt9XG5cbiAgICBjb25zdCBwb3N0ID0gbHNQb3N0c1tpZF1cbiAgICBjb25zdCB1c2VhYmxlID0gcG9zdCAmJiArbmV3IERhdGUoKSAtIHBvc3QudGltZXN0YW1wIDw9IGxzUG9zdHNFeHBpcmF0aW9uXG5cbiAgICBpZiAodXNlYWJsZSkge1xuICAgICAgY29uc29sZS5pbmZvKCdbUG9zdCByZWFkZWQgZnJvbSBjYWNoZV06JywgcG9zdC50aXRsZSlcbiAgICAgIGNvbnN0IGF1dGhvciA9IEpTT04ucGFyc2UocG9zdC5hdXRob3IpXG4gICAgICByZXR1cm4ge1xuICAgICAgICBwb3N0czogW3sgLi4ucG9zdCwgYXV0aG9yLCBmcm9tQ2FjaGU6IDEgfV1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgZGVsZXRlUG9zdEZyb21DYWNoZShpZCkge1xuICAgIGxldCBsc1Bvc3RzID0gbHMuZ2V0SXRlbShsc1Bvc3RzS2V5KVxuICAgIGxzUG9zdHMgPSBsc1Bvc3RzID8gSlNPTi5wYXJzZShsc1Bvc3RzKSA6IHt9XG4gICAgY29uc29sZS5sb2coJ1tkZWxldGVkIHBvc3Qgc3VjY2Vzc106JywgbHNQb3N0c1tpZF0udGl0bGUpXG5cbiAgICBkZWxldGUgbHNQb3N0c1tpZF1cblxuICAgIGxzLnNldEl0ZW0obHNQb3N0c0tleSwgSlNPTi5zdHJpbmdpZnkobHNQb3N0cykpXG4gIH1cblxuICBjYWNoZVBvc3QoaWQsIHBvc3QpIHtcbiAgICBpZiAocG9zdC5mcm9tQ2FjaGUpIHJldHVyblxuXG4gICAgbGV0IGxzUG9zdHMgPSBscy5nZXRJdGVtKGxzUG9zdHNLZXkpXG4gICAgbHNQb3N0cyA9IGxzUG9zdHMgPyBKU09OLnBhcnNlKGxzUG9zdHMpIDoge31cblxuICAgIGxzUG9zdHNbaWRdID0ge1xuICAgICAgLi4ucG9zdCxcbiAgICAgIGF1dGhvcjogSlNPTi5zdHJpbmdpZnkocG9zdC5hdXRob3IpLFxuICAgICAgdGltZXN0YW1wOiArbmV3IERhdGUoKVxuICAgIH1cblxuICAgIC8vIGNhY2hlIHVwIHRvIDUgcG9zdHNcbiAgICAvLyBkZWxldGUgdGhlIG9sZGVzdCBvbmUgaWYgbW9yZSB0aGFuIDVcbiAgICBsZXQgaWRzID0gT2JqZWN0LmtleXMobHNQb3N0cylcbiAgICBpZiAoaWRzLmxlbmd0aCA+IDUpIHtcbiAgICAgIGNvbnN0IHNob3VsZERlbGV0ZUlkID0gaWRzXG4gICAgICAgIC5tYXAoaWQgPT4gKHtcbiAgICAgICAgICB0aW1lc3RhbXA6IGxzUG9zdHNbaWRdLnRpbWVzdGFtcCxcbiAgICAgICAgICBpZFxuICAgICAgICB9KSlcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEudGltZXN0YW1wIC0gYi50aW1lc3RhbXApXG4gICAgICAgIC5tYXAoaXRlbSA9PiBpdGVtLmlkKVxuICAgICAgICAuc2hpZnQoKVxuXG4gICAgICBkZWxldGUgbHNQb3N0c1tzaG91bGREZWxldGVJZF1cbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhpZHMubGVuZ3RoKVxuICAgIGxzLnNldEl0ZW0obHNQb3N0c0tleSwgSlNPTi5zdHJpbmdpZnkobHNQb3N0cykpXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZXMvUG9zdFN0b3JlLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX0xvY2F0aW9uVXRpbHMgPSByZXF1aXJlKCcuL0xvY2F0aW9uVXRpbHMnKTtcblxudmFyIF9QYXRoVXRpbHMgPSByZXF1aXJlKCcuL1BhdGhVdGlscycpO1xuXG52YXIgX2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyID0gcmVxdWlyZSgnLi9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlcicpO1xuXG52YXIgX2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyKTtcblxudmFyIF9ET01VdGlscyA9IHJlcXVpcmUoJy4vRE9NVXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFBvcFN0YXRlRXZlbnQgPSAncG9wc3RhdGUnO1xudmFyIEhhc2hDaGFuZ2VFdmVudCA9ICdoYXNoY2hhbmdlJztcblxudmFyIGdldEhpc3RvcnlTdGF0ZSA9IGZ1bmN0aW9uIGdldEhpc3RvcnlTdGF0ZSgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gd2luZG93Lmhpc3Rvcnkuc3RhdGUgfHwge307XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBJRSAxMSBzb21ldGltZXMgdGhyb3dzIHdoZW4gYWNjZXNzaW5nIHdpbmRvdy5oaXN0b3J5LnN0YXRlXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9SZWFjdFRyYWluaW5nL2hpc3RvcnkvcHVsbC8yODlcbiAgICByZXR1cm4ge307XG4gIH1cbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhpc3Rvcnkgb2JqZWN0IHRoYXQgdXNlcyB0aGUgSFRNTDUgaGlzdG9yeSBBUEkgaW5jbHVkaW5nXG4gKiBwdXNoU3RhdGUsIHJlcGxhY2VTdGF0ZSwgYW5kIHRoZSBwb3BzdGF0ZSBldmVudC5cbiAqL1xudmFyIGNyZWF0ZUJyb3dzZXJIaXN0b3J5ID0gZnVuY3Rpb24gY3JlYXRlQnJvd3Nlckhpc3RvcnkoKSB7XG4gIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKF9ET01VdGlscy5jYW5Vc2VET00sICdCcm93c2VyIGhpc3RvcnkgbmVlZHMgYSBET00nKTtcblxuICB2YXIgZ2xvYmFsSGlzdG9yeSA9IHdpbmRvdy5oaXN0b3J5O1xuICB2YXIgY2FuVXNlSGlzdG9yeSA9ICgwLCBfRE9NVXRpbHMuc3VwcG9ydHNIaXN0b3J5KSgpO1xuICB2YXIgbmVlZHNIYXNoQ2hhbmdlTGlzdGVuZXIgPSAhKDAsIF9ET01VdGlscy5zdXBwb3J0c1BvcFN0YXRlT25IYXNoQ2hhbmdlKSgpO1xuXG4gIHZhciBfcHJvcHMkZm9yY2VSZWZyZXNoID0gcHJvcHMuZm9yY2VSZWZyZXNoLFxuICAgICAgZm9yY2VSZWZyZXNoID0gX3Byb3BzJGZvcmNlUmVmcmVzaCA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfcHJvcHMkZm9yY2VSZWZyZXNoLFxuICAgICAgX3Byb3BzJGdldFVzZXJDb25maXJtID0gcHJvcHMuZ2V0VXNlckNvbmZpcm1hdGlvbixcbiAgICAgIGdldFVzZXJDb25maXJtYXRpb24gPSBfcHJvcHMkZ2V0VXNlckNvbmZpcm0gPT09IHVuZGVmaW5lZCA/IF9ET01VdGlscy5nZXRDb25maXJtYXRpb24gOiBfcHJvcHMkZ2V0VXNlckNvbmZpcm0sXG4gICAgICBfcHJvcHMka2V5TGVuZ3RoID0gcHJvcHMua2V5TGVuZ3RoLFxuICAgICAga2V5TGVuZ3RoID0gX3Byb3BzJGtleUxlbmd0aCA9PT0gdW5kZWZpbmVkID8gNiA6IF9wcm9wcyRrZXlMZW5ndGg7XG5cbiAgdmFyIGJhc2VuYW1lID0gcHJvcHMuYmFzZW5hbWUgPyAoMCwgX1BhdGhVdGlscy5zdHJpcFRyYWlsaW5nU2xhc2gpKCgwLCBfUGF0aFV0aWxzLmFkZExlYWRpbmdTbGFzaCkocHJvcHMuYmFzZW5hbWUpKSA6ICcnO1xuXG4gIHZhciBnZXRET01Mb2NhdGlvbiA9IGZ1bmN0aW9uIGdldERPTUxvY2F0aW9uKGhpc3RvcnlTdGF0ZSkge1xuICAgIHZhciBfcmVmID0gaGlzdG9yeVN0YXRlIHx8IHt9LFxuICAgICAgICBrZXkgPSBfcmVmLmtleSxcbiAgICAgICAgc3RhdGUgPSBfcmVmLnN0YXRlO1xuXG4gICAgdmFyIF93aW5kb3ckbG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24sXG4gICAgICAgIHBhdGhuYW1lID0gX3dpbmRvdyRsb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgICAgc2VhcmNoID0gX3dpbmRvdyRsb2NhdGlvbi5zZWFyY2gsXG4gICAgICAgIGhhc2ggPSBfd2luZG93JGxvY2F0aW9uLmhhc2g7XG5cblxuICAgIHZhciBwYXRoID0gcGF0aG5hbWUgKyBzZWFyY2ggKyBoYXNoO1xuXG4gICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KSghYmFzZW5hbWUgfHwgKDAsIF9QYXRoVXRpbHMuaGFzQmFzZW5hbWUpKHBhdGgsIGJhc2VuYW1lKSwgJ1lvdSBhcmUgYXR0ZW1wdGluZyB0byB1c2UgYSBiYXNlbmFtZSBvbiBhIHBhZ2Ugd2hvc2UgVVJMIHBhdGggZG9lcyBub3QgYmVnaW4gJyArICd3aXRoIHRoZSBiYXNlbmFtZS4gRXhwZWN0ZWQgcGF0aCBcIicgKyBwYXRoICsgJ1wiIHRvIGJlZ2luIHdpdGggXCInICsgYmFzZW5hbWUgKyAnXCIuJyk7XG5cbiAgICBpZiAoYmFzZW5hbWUpIHBhdGggPSAoMCwgX1BhdGhVdGlscy5zdHJpcEJhc2VuYW1lKShwYXRoLCBiYXNlbmFtZSk7XG5cbiAgICByZXR1cm4gKDAsIF9Mb2NhdGlvblV0aWxzLmNyZWF0ZUxvY2F0aW9uKShwYXRoLCBzdGF0ZSwga2V5KTtcbiAgfTtcblxuICB2YXIgY3JlYXRlS2V5ID0gZnVuY3Rpb24gY3JlYXRlS2V5KCkge1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwga2V5TGVuZ3RoKTtcbiAgfTtcblxuICB2YXIgdHJhbnNpdGlvbk1hbmFnZXIgPSAoMCwgX2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyMi5kZWZhdWx0KSgpO1xuXG4gIHZhciBzZXRTdGF0ZSA9IGZ1bmN0aW9uIHNldFN0YXRlKG5leHRTdGF0ZSkge1xuICAgIF9leHRlbmRzKGhpc3RvcnksIG5leHRTdGF0ZSk7XG5cbiAgICBoaXN0b3J5Lmxlbmd0aCA9IGdsb2JhbEhpc3RvcnkubGVuZ3RoO1xuXG4gICAgdHJhbnNpdGlvbk1hbmFnZXIubm90aWZ5TGlzdGVuZXJzKGhpc3RvcnkubG9jYXRpb24sIGhpc3RvcnkuYWN0aW9uKTtcbiAgfTtcblxuICB2YXIgaGFuZGxlUG9wU3RhdGUgPSBmdW5jdGlvbiBoYW5kbGVQb3BTdGF0ZShldmVudCkge1xuICAgIC8vIElnbm9yZSBleHRyYW5lb3VzIHBvcHN0YXRlIGV2ZW50cyBpbiBXZWJLaXQuXG4gICAgaWYgKCgwLCBfRE9NVXRpbHMuaXNFeHRyYW5lb3VzUG9wc3RhdGVFdmVudCkoZXZlbnQpKSByZXR1cm47XG5cbiAgICBoYW5kbGVQb3AoZ2V0RE9NTG9jYXRpb24oZXZlbnQuc3RhdGUpKTtcbiAgfTtcblxuICB2YXIgaGFuZGxlSGFzaENoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUhhc2hDaGFuZ2UoKSB7XG4gICAgaGFuZGxlUG9wKGdldERPTUxvY2F0aW9uKGdldEhpc3RvcnlTdGF0ZSgpKSk7XG4gIH07XG5cbiAgdmFyIGZvcmNlTmV4dFBvcCA9IGZhbHNlO1xuXG4gIHZhciBoYW5kbGVQb3AgPSBmdW5jdGlvbiBoYW5kbGVQb3AobG9jYXRpb24pIHtcbiAgICBpZiAoZm9yY2VOZXh0UG9wKSB7XG4gICAgICBmb3JjZU5leHRQb3AgPSBmYWxzZTtcbiAgICAgIHNldFN0YXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhY3Rpb24gPSAnUE9QJztcblxuICAgICAgdHJhbnNpdGlvbk1hbmFnZXIuY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgYWN0aW9uLCBnZXRVc2VyQ29uZmlybWF0aW9uLCBmdW5jdGlvbiAob2spIHtcbiAgICAgICAgaWYgKG9rKSB7XG4gICAgICAgICAgc2V0U3RhdGUoeyBhY3Rpb246IGFjdGlvbiwgbG9jYXRpb246IGxvY2F0aW9uIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldmVydFBvcChsb2NhdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICB2YXIgcmV2ZXJ0UG9wID0gZnVuY3Rpb24gcmV2ZXJ0UG9wKGZyb21Mb2NhdGlvbikge1xuICAgIHZhciB0b0xvY2F0aW9uID0gaGlzdG9yeS5sb2NhdGlvbjtcblxuICAgIC8vIFRPRE86IFdlIGNvdWxkIHByb2JhYmx5IG1ha2UgdGhpcyBtb3JlIHJlbGlhYmxlIGJ5XG4gICAgLy8ga2VlcGluZyBhIGxpc3Qgb2Yga2V5cyB3ZSd2ZSBzZWVuIGluIHNlc3Npb25TdG9yYWdlLlxuICAgIC8vIEluc3RlYWQsIHdlIGp1c3QgZGVmYXVsdCB0byAwIGZvciBrZXlzIHdlIGRvbid0IGtub3cuXG5cbiAgICB2YXIgdG9JbmRleCA9IGFsbEtleXMuaW5kZXhPZih0b0xvY2F0aW9uLmtleSk7XG5cbiAgICBpZiAodG9JbmRleCA9PT0gLTEpIHRvSW5kZXggPSAwO1xuXG4gICAgdmFyIGZyb21JbmRleCA9IGFsbEtleXMuaW5kZXhPZihmcm9tTG9jYXRpb24ua2V5KTtcblxuICAgIGlmIChmcm9tSW5kZXggPT09IC0xKSBmcm9tSW5kZXggPSAwO1xuXG4gICAgdmFyIGRlbHRhID0gdG9JbmRleCAtIGZyb21JbmRleDtcblxuICAgIGlmIChkZWx0YSkge1xuICAgICAgZm9yY2VOZXh0UG9wID0gdHJ1ZTtcbiAgICAgIGdvKGRlbHRhKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGluaXRpYWxMb2NhdGlvbiA9IGdldERPTUxvY2F0aW9uKGdldEhpc3RvcnlTdGF0ZSgpKTtcbiAgdmFyIGFsbEtleXMgPSBbaW5pdGlhbExvY2F0aW9uLmtleV07XG5cbiAgLy8gUHVibGljIGludGVyZmFjZVxuXG4gIHZhciBjcmVhdGVIcmVmID0gZnVuY3Rpb24gY3JlYXRlSHJlZihsb2NhdGlvbikge1xuICAgIHJldHVybiBiYXNlbmFtZSArICgwLCBfUGF0aFV0aWxzLmNyZWF0ZVBhdGgpKGxvY2F0aW9uKTtcbiAgfTtcblxuICB2YXIgcHVzaCA9IGZ1bmN0aW9uIHB1c2gocGF0aCwgc3RhdGUpIHtcbiAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKCEoKHR5cGVvZiBwYXRoID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihwYXRoKSkgPT09ICdvYmplY3QnICYmIHBhdGguc3RhdGUgIT09IHVuZGVmaW5lZCAmJiBzdGF0ZSAhPT0gdW5kZWZpbmVkKSwgJ1lvdSBzaG91bGQgYXZvaWQgcHJvdmlkaW5nIGEgMm5kIHN0YXRlIGFyZ3VtZW50IHRvIHB1c2ggd2hlbiB0aGUgMXN0ICcgKyAnYXJndW1lbnQgaXMgYSBsb2NhdGlvbi1saWtlIG9iamVjdCB0aGF0IGFscmVhZHkgaGFzIHN0YXRlOyBpdCBpcyBpZ25vcmVkJyk7XG5cbiAgICB2YXIgYWN0aW9uID0gJ1BVU0gnO1xuICAgIHZhciBsb2NhdGlvbiA9ICgwLCBfTG9jYXRpb25VdGlscy5jcmVhdGVMb2NhdGlvbikocGF0aCwgc3RhdGUsIGNyZWF0ZUtleSgpLCBoaXN0b3J5LmxvY2F0aW9uKTtcblxuICAgIHRyYW5zaXRpb25NYW5hZ2VyLmNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICBpZiAoIW9rKSByZXR1cm47XG5cbiAgICAgIHZhciBocmVmID0gY3JlYXRlSHJlZihsb2NhdGlvbik7XG4gICAgICB2YXIga2V5ID0gbG9jYXRpb24ua2V5LFxuICAgICAgICAgIHN0YXRlID0gbG9jYXRpb24uc3RhdGU7XG5cblxuICAgICAgaWYgKGNhblVzZUhpc3RvcnkpIHtcbiAgICAgICAgZ2xvYmFsSGlzdG9yeS5wdXNoU3RhdGUoeyBrZXk6IGtleSwgc3RhdGU6IHN0YXRlIH0sIG51bGwsIGhyZWYpO1xuXG4gICAgICAgIGlmIChmb3JjZVJlZnJlc2gpIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGhyZWY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHByZXZJbmRleCA9IGFsbEtleXMuaW5kZXhPZihoaXN0b3J5LmxvY2F0aW9uLmtleSk7XG4gICAgICAgICAgdmFyIG5leHRLZXlzID0gYWxsS2V5cy5zbGljZSgwLCBwcmV2SW5kZXggPT09IC0xID8gMCA6IHByZXZJbmRleCArIDEpO1xuXG4gICAgICAgICAgbmV4dEtleXMucHVzaChsb2NhdGlvbi5rZXkpO1xuICAgICAgICAgIGFsbEtleXMgPSBuZXh0S2V5cztcblxuICAgICAgICAgIHNldFN0YXRlKHsgYWN0aW9uOiBhY3Rpb24sIGxvY2F0aW9uOiBsb2NhdGlvbiB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KShzdGF0ZSA9PT0gdW5kZWZpbmVkLCAnQnJvd3NlciBoaXN0b3J5IGNhbm5vdCBwdXNoIHN0YXRlIGluIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgSFRNTDUgaGlzdG9yeScpO1xuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gaHJlZjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICB2YXIgcmVwbGFjZSA9IGZ1bmN0aW9uIHJlcGxhY2UocGF0aCwgc3RhdGUpIHtcbiAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKCEoKHR5cGVvZiBwYXRoID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihwYXRoKSkgPT09ICdvYmplY3QnICYmIHBhdGguc3RhdGUgIT09IHVuZGVmaW5lZCAmJiBzdGF0ZSAhPT0gdW5kZWZpbmVkKSwgJ1lvdSBzaG91bGQgYXZvaWQgcHJvdmlkaW5nIGEgMm5kIHN0YXRlIGFyZ3VtZW50IHRvIHJlcGxhY2Ugd2hlbiB0aGUgMXN0ICcgKyAnYXJndW1lbnQgaXMgYSBsb2NhdGlvbi1saWtlIG9iamVjdCB0aGF0IGFscmVhZHkgaGFzIHN0YXRlOyBpdCBpcyBpZ25vcmVkJyk7XG5cbiAgICB2YXIgYWN0aW9uID0gJ1JFUExBQ0UnO1xuICAgIHZhciBsb2NhdGlvbiA9ICgwLCBfTG9jYXRpb25VdGlscy5jcmVhdGVMb2NhdGlvbikocGF0aCwgc3RhdGUsIGNyZWF0ZUtleSgpLCBoaXN0b3J5LmxvY2F0aW9uKTtcblxuICAgIHRyYW5zaXRpb25NYW5hZ2VyLmNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICBpZiAoIW9rKSByZXR1cm47XG5cbiAgICAgIHZhciBocmVmID0gY3JlYXRlSHJlZihsb2NhdGlvbik7XG4gICAgICB2YXIga2V5ID0gbG9jYXRpb24ua2V5LFxuICAgICAgICAgIHN0YXRlID0gbG9jYXRpb24uc3RhdGU7XG5cblxuICAgICAgaWYgKGNhblVzZUhpc3RvcnkpIHtcbiAgICAgICAgZ2xvYmFsSGlzdG9yeS5yZXBsYWNlU3RhdGUoeyBrZXk6IGtleSwgc3RhdGU6IHN0YXRlIH0sIG51bGwsIGhyZWYpO1xuXG4gICAgICAgIGlmIChmb3JjZVJlZnJlc2gpIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShocmVmKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgcHJldkluZGV4ID0gYWxsS2V5cy5pbmRleE9mKGhpc3RvcnkubG9jYXRpb24ua2V5KTtcblxuICAgICAgICAgIGlmIChwcmV2SW5kZXggIT09IC0xKSBhbGxLZXlzW3ByZXZJbmRleF0gPSBsb2NhdGlvbi5rZXk7XG5cbiAgICAgICAgICBzZXRTdGF0ZSh7IGFjdGlvbjogYWN0aW9uLCBsb2NhdGlvbjogbG9jYXRpb24gfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICgwLCBfd2FybmluZzIuZGVmYXVsdCkoc3RhdGUgPT09IHVuZGVmaW5lZCwgJ0Jyb3dzZXIgaGlzdG9yeSBjYW5ub3QgcmVwbGFjZSBzdGF0ZSBpbiBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IEhUTUw1IGhpc3RvcnknKTtcblxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShocmVmKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICB2YXIgZ28gPSBmdW5jdGlvbiBnbyhuKSB7XG4gICAgZ2xvYmFsSGlzdG9yeS5nbyhuKTtcbiAgfTtcblxuICB2YXIgZ29CYWNrID0gZnVuY3Rpb24gZ29CYWNrKCkge1xuICAgIHJldHVybiBnbygtMSk7XG4gIH07XG5cbiAgdmFyIGdvRm9yd2FyZCA9IGZ1bmN0aW9uIGdvRm9yd2FyZCgpIHtcbiAgICByZXR1cm4gZ28oMSk7XG4gIH07XG5cbiAgdmFyIGxpc3RlbmVyQ291bnQgPSAwO1xuXG4gIHZhciBjaGVja0RPTUxpc3RlbmVycyA9IGZ1bmN0aW9uIGNoZWNrRE9NTGlzdGVuZXJzKGRlbHRhKSB7XG4gICAgbGlzdGVuZXJDb3VudCArPSBkZWx0YTtcblxuICAgIGlmIChsaXN0ZW5lckNvdW50ID09PSAxKSB7XG4gICAgICAoMCwgX0RPTVV0aWxzLmFkZEV2ZW50TGlzdGVuZXIpKHdpbmRvdywgUG9wU3RhdGVFdmVudCwgaGFuZGxlUG9wU3RhdGUpO1xuXG4gICAgICBpZiAobmVlZHNIYXNoQ2hhbmdlTGlzdGVuZXIpICgwLCBfRE9NVXRpbHMuYWRkRXZlbnRMaXN0ZW5lcikod2luZG93LCBIYXNoQ2hhbmdlRXZlbnQsIGhhbmRsZUhhc2hDaGFuZ2UpO1xuICAgIH0gZWxzZSBpZiAobGlzdGVuZXJDb3VudCA9PT0gMCkge1xuICAgICAgKDAsIF9ET01VdGlscy5yZW1vdmVFdmVudExpc3RlbmVyKSh3aW5kb3csIFBvcFN0YXRlRXZlbnQsIGhhbmRsZVBvcFN0YXRlKTtcblxuICAgICAgaWYgKG5lZWRzSGFzaENoYW5nZUxpc3RlbmVyKSAoMCwgX0RPTVV0aWxzLnJlbW92ZUV2ZW50TGlzdGVuZXIpKHdpbmRvdywgSGFzaENoYW5nZUV2ZW50LCBoYW5kbGVIYXNoQ2hhbmdlKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGlzQmxvY2tlZCA9IGZhbHNlO1xuXG4gIHZhciBibG9jayA9IGZ1bmN0aW9uIGJsb2NrKCkge1xuICAgIHZhciBwcm9tcHQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGZhbHNlO1xuXG4gICAgdmFyIHVuYmxvY2sgPSB0cmFuc2l0aW9uTWFuYWdlci5zZXRQcm9tcHQocHJvbXB0KTtcblxuICAgIGlmICghaXNCbG9ja2VkKSB7XG4gICAgICBjaGVja0RPTUxpc3RlbmVycygxKTtcbiAgICAgIGlzQmxvY2tlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChpc0Jsb2NrZWQpIHtcbiAgICAgICAgaXNCbG9ja2VkID0gZmFsc2U7XG4gICAgICAgIGNoZWNrRE9NTGlzdGVuZXJzKC0xKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHVuYmxvY2soKTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBsaXN0ZW4gPSBmdW5jdGlvbiBsaXN0ZW4obGlzdGVuZXIpIHtcbiAgICB2YXIgdW5saXN0ZW4gPSB0cmFuc2l0aW9uTWFuYWdlci5hcHBlbmRMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgY2hlY2tET01MaXN0ZW5lcnMoMSk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgY2hlY2tET01MaXN0ZW5lcnMoLTEpO1xuICAgICAgdW5saXN0ZW4oKTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBoaXN0b3J5ID0ge1xuICAgIGxlbmd0aDogZ2xvYmFsSGlzdG9yeS5sZW5ndGgsXG4gICAgYWN0aW9uOiAnUE9QJyxcbiAgICBsb2NhdGlvbjogaW5pdGlhbExvY2F0aW9uLFxuICAgIGNyZWF0ZUhyZWY6IGNyZWF0ZUhyZWYsXG4gICAgcHVzaDogcHVzaCxcbiAgICByZXBsYWNlOiByZXBsYWNlLFxuICAgIGdvOiBnbyxcbiAgICBnb0JhY2s6IGdvQmFjayxcbiAgICBnb0ZvcndhcmQ6IGdvRm9yd2FyZCxcbiAgICBibG9jazogYmxvY2ssXG4gICAgbGlzdGVuOiBsaXN0ZW5cbiAgfTtcblxuICByZXR1cm4gaGlzdG9yeTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZUJyb3dzZXJIaXN0b3J5O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9oaXN0b3J5L2NyZWF0ZUJyb3dzZXJIaXN0b3J5LmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgaW52YXJpYW50ID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICAnTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArXG4gICAgICAgICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLidcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSB7IHJldHVybiBhcmdzW2FyZ0luZGV4KytdOyB9KVxuICAgICAgKTtcbiAgICAgIGVycm9yLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9pbnZhcmlhbnQvYnJvd3Nlci5qcyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMubG9jYXRpb25zQXJlRXF1YWwgPSBleHBvcnRzLmNyZWF0ZUxvY2F0aW9uID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3Jlc29sdmVQYXRobmFtZSA9IHJlcXVpcmUoJ3Jlc29sdmUtcGF0aG5hbWUnKTtcblxudmFyIF9yZXNvbHZlUGF0aG5hbWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVzb2x2ZVBhdGhuYW1lKTtcblxudmFyIF92YWx1ZUVxdWFsID0gcmVxdWlyZSgndmFsdWUtZXF1YWwnKTtcblxudmFyIF92YWx1ZUVxdWFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZhbHVlRXF1YWwpO1xuXG52YXIgX1BhdGhVdGlscyA9IHJlcXVpcmUoJy4vUGF0aFV0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBjcmVhdGVMb2NhdGlvbiA9IGV4cG9ydHMuY3JlYXRlTG9jYXRpb24gPSBmdW5jdGlvbiBjcmVhdGVMb2NhdGlvbihwYXRoLCBzdGF0ZSwga2V5LCBjdXJyZW50TG9jYXRpb24pIHtcbiAgdmFyIGxvY2F0aW9uID0gdm9pZCAwO1xuICBpZiAodHlwZW9mIHBhdGggPT09ICdzdHJpbmcnKSB7XG4gICAgLy8gVHdvLWFyZyBmb3JtOiBwdXNoKHBhdGgsIHN0YXRlKVxuICAgIGxvY2F0aW9uID0gKDAsIF9QYXRoVXRpbHMucGFyc2VQYXRoKShwYXRoKTtcbiAgICBsb2NhdGlvbi5zdGF0ZSA9IHN0YXRlO1xuICB9IGVsc2Uge1xuICAgIC8vIE9uZS1hcmcgZm9ybTogcHVzaChsb2NhdGlvbilcbiAgICBsb2NhdGlvbiA9IF9leHRlbmRzKHt9LCBwYXRoKTtcblxuICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZSA9PT0gdW5kZWZpbmVkKSBsb2NhdGlvbi5wYXRobmFtZSA9ICcnO1xuXG4gICAgaWYgKGxvY2F0aW9uLnNlYXJjaCkge1xuICAgICAgaWYgKGxvY2F0aW9uLnNlYXJjaC5jaGFyQXQoMCkgIT09ICc/JykgbG9jYXRpb24uc2VhcmNoID0gJz8nICsgbG9jYXRpb24uc2VhcmNoO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhdGlvbi5zZWFyY2ggPSAnJztcbiAgICB9XG5cbiAgICBpZiAobG9jYXRpb24uaGFzaCkge1xuICAgICAgaWYgKGxvY2F0aW9uLmhhc2guY2hhckF0KDApICE9PSAnIycpIGxvY2F0aW9uLmhhc2ggPSAnIycgKyBsb2NhdGlvbi5oYXNoO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhdGlvbi5oYXNoID0gJyc7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlICE9PSB1bmRlZmluZWQgJiYgbG9jYXRpb24uc3RhdGUgPT09IHVuZGVmaW5lZCkgbG9jYXRpb24uc3RhdGUgPSBzdGF0ZTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgbG9jYXRpb24ucGF0aG5hbWUgPSBkZWNvZGVVUkkobG9jYXRpb24ucGF0aG5hbWUpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaWYgKGUgaW5zdGFuY2VvZiBVUklFcnJvcikge1xuICAgICAgdGhyb3cgbmV3IFVSSUVycm9yKCdQYXRobmFtZSBcIicgKyBsb2NhdGlvbi5wYXRobmFtZSArICdcIiBjb3VsZCBub3QgYmUgZGVjb2RlZC4gJyArICdUaGlzIGlzIGxpa2VseSBjYXVzZWQgYnkgYW4gaW52YWxpZCBwZXJjZW50LWVuY29kaW5nLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChrZXkpIGxvY2F0aW9uLmtleSA9IGtleTtcblxuICBpZiAoY3VycmVudExvY2F0aW9uKSB7XG4gICAgLy8gUmVzb2x2ZSBpbmNvbXBsZXRlL3JlbGF0aXZlIHBhdGhuYW1lIHJlbGF0aXZlIHRvIGN1cnJlbnQgbG9jYXRpb24uXG4gICAgaWYgKCFsb2NhdGlvbi5wYXRobmFtZSkge1xuICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPSBjdXJyZW50TG9jYXRpb24ucGF0aG5hbWU7XG4gICAgfSBlbHNlIGlmIChsb2NhdGlvbi5wYXRobmFtZS5jaGFyQXQoMCkgIT09ICcvJykge1xuICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPSAoMCwgX3Jlc29sdmVQYXRobmFtZTIuZGVmYXVsdCkobG9jYXRpb24ucGF0aG5hbWUsIGN1cnJlbnRMb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIFdoZW4gdGhlcmUgaXMgbm8gcHJpb3IgbG9jYXRpb24gYW5kIHBhdGhuYW1lIGlzIGVtcHR5LCBzZXQgaXQgdG8gL1xuICAgIGlmICghbG9jYXRpb24ucGF0aG5hbWUpIHtcbiAgICAgIGxvY2F0aW9uLnBhdGhuYW1lID0gJy8nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBsb2NhdGlvbjtcbn07XG5cbnZhciBsb2NhdGlvbnNBcmVFcXVhbCA9IGV4cG9ydHMubG9jYXRpb25zQXJlRXF1YWwgPSBmdW5jdGlvbiBsb2NhdGlvbnNBcmVFcXVhbChhLCBiKSB7XG4gIHJldHVybiBhLnBhdGhuYW1lID09PSBiLnBhdGhuYW1lICYmIGEuc2VhcmNoID09PSBiLnNlYXJjaCAmJiBhLmhhc2ggPT09IGIuaGFzaCAmJiBhLmtleSA9PT0gYi5rZXkgJiYgKDAsIF92YWx1ZUVxdWFsMi5kZWZhdWx0KShhLnN0YXRlLCBiLnN0YXRlKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2hpc3RvcnkvTG9jYXRpb25VdGlscy5qcyIsImZ1bmN0aW9uIGlzQWJzb2x1dGUocGF0aG5hbWUpIHtcbiAgcmV0dXJuIHBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nO1xufVxuXG4vLyBBYm91dCAxLjV4IGZhc3RlciB0aGFuIHRoZSB0d28tYXJnIHZlcnNpb24gb2YgQXJyYXkjc3BsaWNlKClcbmZ1bmN0aW9uIHNwbGljZU9uZShsaXN0LCBpbmRleCkge1xuICBmb3IgKHZhciBpID0gaW5kZXgsIGsgPSBpICsgMSwgbiA9IGxpc3QubGVuZ3RoOyBrIDwgbjsgaSArPSAxLCBrICs9IDEpIHtcbiAgICBsaXN0W2ldID0gbGlzdFtrXTtcbiAgfVxuXG4gIGxpc3QucG9wKCk7XG59XG5cbi8vIFRoaXMgaW1wbGVtZW50YXRpb24gaXMgYmFzZWQgaGVhdmlseSBvbiBub2RlJ3MgdXJsLnBhcnNlXG5mdW5jdGlvbiByZXNvbHZlUGF0aG5hbWUodG8pIHtcbiAgdmFyIGZyb20gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICcnO1xuXG4gIHZhciB0b1BhcnRzID0gdG8gJiYgdG8uc3BsaXQoJy8nKSB8fCBbXTtcbiAgdmFyIGZyb21QYXJ0cyA9IGZyb20gJiYgZnJvbS5zcGxpdCgnLycpIHx8IFtdO1xuXG4gIHZhciBpc1RvQWJzID0gdG8gJiYgaXNBYnNvbHV0ZSh0byk7XG4gIHZhciBpc0Zyb21BYnMgPSBmcm9tICYmIGlzQWJzb2x1dGUoZnJvbSk7XG4gIHZhciBtdXN0RW5kQWJzID0gaXNUb0FicyB8fCBpc0Zyb21BYnM7XG5cbiAgaWYgKHRvICYmIGlzQWJzb2x1dGUodG8pKSB7XG4gICAgLy8gdG8gaXMgYWJzb2x1dGVcbiAgICBmcm9tUGFydHMgPSB0b1BhcnRzO1xuICB9IGVsc2UgaWYgKHRvUGFydHMubGVuZ3RoKSB7XG4gICAgLy8gdG8gaXMgcmVsYXRpdmUsIGRyb3AgdGhlIGZpbGVuYW1lXG4gICAgZnJvbVBhcnRzLnBvcCgpO1xuICAgIGZyb21QYXJ0cyA9IGZyb21QYXJ0cy5jb25jYXQodG9QYXJ0cyk7XG4gIH1cblxuICBpZiAoIWZyb21QYXJ0cy5sZW5ndGgpIHJldHVybiAnLyc7XG5cbiAgdmFyIGhhc1RyYWlsaW5nU2xhc2ggPSB2b2lkIDA7XG4gIGlmIChmcm9tUGFydHMubGVuZ3RoKSB7XG4gICAgdmFyIGxhc3QgPSBmcm9tUGFydHNbZnJvbVBhcnRzLmxlbmd0aCAtIDFdO1xuICAgIGhhc1RyYWlsaW5nU2xhc2ggPSBsYXN0ID09PSAnLicgfHwgbGFzdCA9PT0gJy4uJyB8fCBsYXN0ID09PSAnJztcbiAgfSBlbHNlIHtcbiAgICBoYXNUcmFpbGluZ1NsYXNoID0gZmFsc2U7XG4gIH1cblxuICB2YXIgdXAgPSAwO1xuICBmb3IgKHZhciBpID0gZnJvbVBhcnRzLmxlbmd0aDsgaSA+PSAwOyBpLS0pIHtcbiAgICB2YXIgcGFydCA9IGZyb21QYXJ0c1tpXTtcblxuICAgIGlmIChwYXJ0ID09PSAnLicpIHtcbiAgICAgIHNwbGljZU9uZShmcm9tUGFydHMsIGkpO1xuICAgIH0gZWxzZSBpZiAocGFydCA9PT0gJy4uJykge1xuICAgICAgc3BsaWNlT25lKGZyb21QYXJ0cywgaSk7XG4gICAgICB1cCsrO1xuICAgIH0gZWxzZSBpZiAodXApIHtcbiAgICAgIHNwbGljZU9uZShmcm9tUGFydHMsIGkpO1xuICAgICAgdXAtLTtcbiAgICB9XG4gIH1cblxuICBpZiAoIW11c3RFbmRBYnMpIGZvciAoOyB1cC0tOyB1cCkge1xuICAgIGZyb21QYXJ0cy51bnNoaWZ0KCcuLicpO1xuICB9aWYgKG11c3RFbmRBYnMgJiYgZnJvbVBhcnRzWzBdICE9PSAnJyAmJiAoIWZyb21QYXJ0c1swXSB8fCAhaXNBYnNvbHV0ZShmcm9tUGFydHNbMF0pKSkgZnJvbVBhcnRzLnVuc2hpZnQoJycpO1xuXG4gIHZhciByZXN1bHQgPSBmcm9tUGFydHMuam9pbignLycpO1xuXG4gIGlmIChoYXNUcmFpbGluZ1NsYXNoICYmIHJlc3VsdC5zdWJzdHIoLTEpICE9PSAnLycpIHJlc3VsdCArPSAnLyc7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVzb2x2ZVBhdGhuYW1lO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9yZXNvbHZlLXBhdGhuYW1lL2luZGV4LmpzIiwidmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiB2YWx1ZUVxdWFsKGEsIGIpIHtcbiAgaWYgKGEgPT09IGIpIHJldHVybiB0cnVlO1xuXG4gIGlmIChhID09IG51bGwgfHwgYiA9PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoYSkpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShiKSAmJiBhLmxlbmd0aCA9PT0gYi5sZW5ndGggJiYgYS5ldmVyeShmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgIHJldHVybiB2YWx1ZUVxdWFsKGl0ZW0sIGJbaW5kZXhdKTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBhVHlwZSA9IHR5cGVvZiBhID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihhKTtcbiAgdmFyIGJUeXBlID0gdHlwZW9mIGIgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGIpO1xuXG4gIGlmIChhVHlwZSAhPT0gYlR5cGUpIHJldHVybiBmYWxzZTtcblxuICBpZiAoYVR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgdmFyIGFWYWx1ZSA9IGEudmFsdWVPZigpO1xuICAgIHZhciBiVmFsdWUgPSBiLnZhbHVlT2YoKTtcblxuICAgIGlmIChhVmFsdWUgIT09IGEgfHwgYlZhbHVlICE9PSBiKSByZXR1cm4gdmFsdWVFcXVhbChhVmFsdWUsIGJWYWx1ZSk7XG5cbiAgICB2YXIgYUtleXMgPSBPYmplY3Qua2V5cyhhKTtcbiAgICB2YXIgYktleXMgPSBPYmplY3Qua2V5cyhiKTtcblxuICAgIGlmIChhS2V5cy5sZW5ndGggIT09IGJLZXlzLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgcmV0dXJuIGFLZXlzLmV2ZXJ5KGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiB2YWx1ZUVxdWFsKGFba2V5XSwgYltrZXldKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsdWVFcXVhbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdmFsdWUtZXF1YWwvaW5kZXguanMiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIgPSBmdW5jdGlvbiBjcmVhdGVUcmFuc2l0aW9uTWFuYWdlcigpIHtcbiAgdmFyIHByb21wdCA9IG51bGw7XG5cbiAgdmFyIHNldFByb21wdCA9IGZ1bmN0aW9uIHNldFByb21wdChuZXh0UHJvbXB0KSB7XG4gICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KShwcm9tcHQgPT0gbnVsbCwgJ0EgaGlzdG9yeSBzdXBwb3J0cyBvbmx5IG9uZSBwcm9tcHQgYXQgYSB0aW1lJyk7XG5cbiAgICBwcm9tcHQgPSBuZXh0UHJvbXB0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChwcm9tcHQgPT09IG5leHRQcm9tcHQpIHByb21wdCA9IG51bGw7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgY29uZmlybVRyYW5zaXRpb25UbyA9IGZ1bmN0aW9uIGNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgY2FsbGJhY2spIHtcbiAgICAvLyBUT0RPOiBJZiBhbm90aGVyIHRyYW5zaXRpb24gc3RhcnRzIHdoaWxlIHdlJ3JlIHN0aWxsIGNvbmZpcm1pbmdcbiAgICAvLyB0aGUgcHJldmlvdXMgb25lLCB3ZSBtYXkgZW5kIHVwIGluIGEgd2VpcmQgc3RhdGUuIEZpZ3VyZSBvdXQgdGhlXG4gICAgLy8gYmVzdCB3YXkgdG8gaGFuZGxlIHRoaXMuXG4gICAgaWYgKHByb21wdCAhPSBudWxsKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gdHlwZW9mIHByb21wdCA9PT0gJ2Z1bmN0aW9uJyA/IHByb21wdChsb2NhdGlvbiwgYWN0aW9uKSA6IHByb21wdDtcblxuICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZ2V0VXNlckNvbmZpcm1hdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGdldFVzZXJDb25maXJtYXRpb24ocmVzdWx0LCBjYWxsYmFjayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KShmYWxzZSwgJ0EgaGlzdG9yeSBuZWVkcyBhIGdldFVzZXJDb25maXJtYXRpb24gZnVuY3Rpb24gaW4gb3JkZXIgdG8gdXNlIGEgcHJvbXB0IG1lc3NhZ2UnKTtcblxuICAgICAgICAgIGNhbGxiYWNrKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBSZXR1cm4gZmFsc2UgZnJvbSBhIHRyYW5zaXRpb24gaG9vayB0byBjYW5jZWwgdGhlIHRyYW5zaXRpb24uXG4gICAgICAgIGNhbGxiYWNrKHJlc3VsdCAhPT0gZmFsc2UpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjayh0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGxpc3RlbmVycyA9IFtdO1xuXG4gIHZhciBhcHBlbmRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFwcGVuZExpc3RlbmVyKGZuKSB7XG4gICAgdmFyIGlzQWN0aXZlID0gdHJ1ZTtcblxuICAgIHZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIGxpc3RlbmVyKCkge1xuICAgICAgaWYgKGlzQWN0aXZlKSBmbi5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbSAhPT0gbGlzdGVuZXI7XG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBub3RpZnlMaXN0ZW5lcnMgPSBmdW5jdGlvbiBub3RpZnlMaXN0ZW5lcnMoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgbGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gbGlzdGVuZXIuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHNldFByb21wdDogc2V0UHJvbXB0LFxuICAgIGNvbmZpcm1UcmFuc2l0aW9uVG86IGNvbmZpcm1UcmFuc2l0aW9uVG8sXG4gICAgYXBwZW5kTGlzdGVuZXI6IGFwcGVuZExpc3RlbmVyLFxuICAgIG5vdGlmeUxpc3RlbmVyczogbm90aWZ5TGlzdGVuZXJzXG4gIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVUcmFuc2l0aW9uTWFuYWdlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlci5qcyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBjYW5Vc2VET00gPSBleHBvcnRzLmNhblVzZURPTSA9ICEhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbnZhciBhZGRFdmVudExpc3RlbmVyID0gZXhwb3J0cy5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudCwgbGlzdGVuZXIpIHtcbiAgcmV0dXJuIG5vZGUuYWRkRXZlbnRMaXN0ZW5lciA/IG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIsIGZhbHNlKSA6IG5vZGUuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50LCBsaXN0ZW5lcik7XG59O1xuXG52YXIgcmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGV4cG9ydHMucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnQsIGxpc3RlbmVyKSB7XG4gIHJldHVybiBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPyBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyLCBmYWxzZSkgOiBub2RlLmRldGFjaEV2ZW50KCdvbicgKyBldmVudCwgbGlzdGVuZXIpO1xufTtcblxudmFyIGdldENvbmZpcm1hdGlvbiA9IGV4cG9ydHMuZ2V0Q29uZmlybWF0aW9uID0gZnVuY3Rpb24gZ2V0Q29uZmlybWF0aW9uKG1lc3NhZ2UsIGNhbGxiYWNrKSB7XG4gIHJldHVybiBjYWxsYmFjayh3aW5kb3cuY29uZmlybShtZXNzYWdlKSk7XG59OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWFsZXJ0XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBIVE1MNSBoaXN0b3J5IEFQSSBpcyBzdXBwb3J0ZWQuIFRha2VuIGZyb20gTW9kZXJuaXpyLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2Jsb2IvbWFzdGVyL2ZlYXR1cmUtZGV0ZWN0cy9oaXN0b3J5LmpzXG4gKiBjaGFuZ2VkIHRvIGF2b2lkIGZhbHNlIG5lZ2F0aXZlcyBmb3IgV2luZG93cyBQaG9uZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JlYWN0LXJvdXRlci9pc3N1ZXMvNTg2XG4gKi9cbnZhciBzdXBwb3J0c0hpc3RvcnkgPSBleHBvcnRzLnN1cHBvcnRzSGlzdG9yeSA9IGZ1bmN0aW9uIHN1cHBvcnRzSGlzdG9yeSgpIHtcbiAgdmFyIHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XG5cbiAgaWYgKCh1YS5pbmRleE9mKCdBbmRyb2lkIDIuJykgIT09IC0xIHx8IHVhLmluZGV4T2YoJ0FuZHJvaWQgNC4wJykgIT09IC0xKSAmJiB1YS5pbmRleE9mKCdNb2JpbGUgU2FmYXJpJykgIT09IC0xICYmIHVhLmluZGV4T2YoJ0Nocm9tZScpID09PSAtMSAmJiB1YS5pbmRleE9mKCdXaW5kb3dzIFBob25lJykgPT09IC0xKSByZXR1cm4gZmFsc2U7XG5cbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5ICYmICdwdXNoU3RhdGUnIGluIHdpbmRvdy5oaXN0b3J5O1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgYnJvd3NlciBmaXJlcyBwb3BzdGF0ZSBvbiBoYXNoIGNoYW5nZS5cbiAqIElFMTAgYW5kIElFMTEgZG8gbm90LlxuICovXG52YXIgc3VwcG9ydHNQb3BTdGF0ZU9uSGFzaENoYW5nZSA9IGV4cG9ydHMuc3VwcG9ydHNQb3BTdGF0ZU9uSGFzaENoYW5nZSA9IGZ1bmN0aW9uIHN1cHBvcnRzUG9wU3RhdGVPbkhhc2hDaGFuZ2UoKSB7XG4gIHJldHVybiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdUcmlkZW50JykgPT09IC0xO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIGZhbHNlIGlmIHVzaW5nIGdvKG4pIHdpdGggaGFzaCBoaXN0b3J5IGNhdXNlcyBhIGZ1bGwgcGFnZSByZWxvYWQuXG4gKi9cbnZhciBzdXBwb3J0c0dvV2l0aG91dFJlbG9hZFVzaW5nSGFzaCA9IGV4cG9ydHMuc3VwcG9ydHNHb1dpdGhvdXRSZWxvYWRVc2luZ0hhc2ggPSBmdW5jdGlvbiBzdXBwb3J0c0dvV2l0aG91dFJlbG9hZFVzaW5nSGFzaCgpIHtcbiAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0ZpcmVmb3gnKSA9PT0gLTE7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBhIGdpdmVuIHBvcHN0YXRlIGV2ZW50IGlzIGFuIGV4dHJhbmVvdXMgV2ViS2l0IGV2ZW50LlxuICogQWNjb3VudHMgZm9yIHRoZSBmYWN0IHRoYXQgQ2hyb21lIG9uIGlPUyBmaXJlcyByZWFsIHBvcHN0YXRlIGV2ZW50c1xuICogY29udGFpbmluZyB1bmRlZmluZWQgc3RhdGUgd2hlbiBwcmVzc2luZyB0aGUgYmFjayBidXR0b24uXG4gKi9cbnZhciBpc0V4dHJhbmVvdXNQb3BzdGF0ZUV2ZW50ID0gZXhwb3J0cy5pc0V4dHJhbmVvdXNQb3BzdGF0ZUV2ZW50ID0gZnVuY3Rpb24gaXNFeHRyYW5lb3VzUG9wc3RhdGVFdmVudChldmVudCkge1xuICByZXR1cm4gZXZlbnQuc3RhdGUgPT09IHVuZGVmaW5lZCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0NyaU9TJykgPT09IC0xO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9ET01VdGlscy5qcyIsImltcG9ydCAnLi9zdHlsZS5zY3NzJ1xuaW1wb3J0IHsgb25yZXNpemUgfSBmcm9tICcjL3V0aWxzJ1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgY29uc3QgJHNpZGViYXIgPSAkKCcjSi1zaWRlYmFyLWhlYWRlcicpXG4gIGNvbnN0ICRzaWRlYmFyQm9keSA9ICQoJyNKLXNpZGUtYmFyLWJvZHknKVxuICBjb25zdCAkc2lkZWJhckl0ZW0gPSAkc2lkZWJhci5maW5kKCcuSi1zaWRlYmFyLWl0ZW0nKVxuICBsZXQgaXNTZWFyY2hTaG93aW5nID0gZmFsc2VcbiAgbGV0IGlzU2lkZUJvZHlTaG93aW5nID0gdHJ1ZVxuXG4gICRzaWRlYmFyXG4gICAgLm9uKCdjbGljaycsICcuSi1zaWRlYmFyLWxvZ28nLCBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKVxuXG4gICAgICBpZiAoJHRoaXMuaXMoJy5hY3RpdmUnKSkge1xuICAgICAgICBzaWRlYmFyQm9keUhpZGUoKVxuICAgICAgICAkdGhpcy5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNpZGViYXJCb2R5U2hvdygpXG4gICAgICAgIGVtaXR0ZXIuZW1pdCgnc3dpdGNoLXNpZGViYXInLCB7IHRhcmdldDogJ2xvZ28nIH0pXG4gICAgICAgICR0aGlzXG4gICAgICAgICAgLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgICAgICAgIC5zaWJsaW5ncygpXG4gICAgICAgICAgLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgICAgfVxuICAgIH0pXG4gICAgLm9uKCdjbGljaycsICcuSi1zaWRlYmFyLXNlYXJjaCcsIGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpXG5cbiAgICAgIGlmICgkdGhpcy5pcygnLmFjdGl2ZScpKSB7XG4gICAgICAgIHNpZGViYXJCb2R5SGlkZSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaWRlYmFyQm9keVNob3coKVxuXG4gICAgICAgICR0aGlzXG4gICAgICAgICAgLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgICAgICAgIC5zaWJsaW5ncygpXG4gICAgICAgICAgLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuXG4gICAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInNlYXJjaC1ib3hcIiAqLyAncGFydGlhbHMvc2lkZS1iYXItYm9keS9zZWFyY2gtYm94JykudGhlbigoKSA9PiB7XG4gICAgICAgICAgZW1pdHRlci5lbWl0KCdzd2l0Y2gtc2lkZWJhcicsIHsgdGFyZ2V0OiAnc2VhcmNoJyB9KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgZnVuY3Rpb24gc2lkZWJhckJvZHlTaG93KCkge1xuICAgICRzaWRlYmFyQm9keS5yZW1vdmVDbGFzcygnaGlkZGVuJykuc2hvdygpXG4gICAgaXNTaWRlQm9keVNob3dpbmcgPSB0cnVlXG4gIH1cbiAgZnVuY3Rpb24gc2lkZWJhckJvZHlIaWRlKCkge1xuICAgICRzaWRlYmFyQm9keS5hZGRDbGFzcygnaGlkZGVuJykuaGlkZSgpXG4gICAgaXNTaWRlQm9keVNob3dpbmcgPSBmYWxzZVxuICAgICRzaWRlYmFySXRlbS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgfVxuXG4gIGVtaXR0ZXIub24oJ3NpZGViYXItaGlkZGVuJywgZnVuY3Rpb24gKCkge1xuICAgIHNpZGViYXJCb2R5SGlkZSgpXG4gIH0pXG5cbiAgb25yZXNpemUoZnVuY3Rpb24oZSwgd2lkdGgpIHtcbiAgICBpZiAod2lkdGggPCA4MDApIHtcbiAgICAgIHNpZGViYXJCb2R5SGlkZSgpXG4gICAgfVxuICAgIGlmKHdpZHRoID49IDgwMCkge1xuICAgICAgc2lkZWJhckJvZHlTaG93KClcbiAgICB9XG4gIH0pXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFydGlhbHMvc2lkZS1iYXItaGVhZGVyL2luZGV4LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhcnRpYWxzL3NpZGUtYmFyLWhlYWRlci9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgJy4vYmxvZy10cmVlJ1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnXG5cbiQoZnVuY3Rpb24oKSB7XG4gIGNvbnN0ICRzZWFyY2hCb3ggPSAkKCcjSi1zZWFyY2gtYm94JylcbiAgY29uc3QgJGJsb2dUcmVlID0gJCgnI0otYmxvZy10cmVlJylcbiAgY29uc3QgJHNlYXJjaElucHV0ID0gJHNlYXJjaEJveC5maW5kKCcuSi1pbnB1dC1zZWFyY2gnKVxuICBjb25zdCAkdGFnVHJlZSA9ICQoJyNKLWJsb2ctdHJlZScpXG5cbiAgZW1pdHRlci5vbignc3dpdGNoLXNpZGViYXInLCAoeyB0YXJnZXQgfSkgPT4ge1xuICAgIGNvbnN0IGlzU2VhcmNoID0gdGFyZ2V0ID09PSAnc2VhcmNoJ1xuXG4gICAgaWYgKGlzU2VhcmNoKSB7XG4gICAgICAkYmxvZ1RyZWUuaGlkZSgpXG4gICAgICAkc2VhcmNoQm94LnJlbW92ZUNsYXNzKCdoaWRkZW4nKVxuICAgICAgJHNlYXJjaElucHV0LmZvY3VzKClcbiAgICB9IGVsc2Uge1xuICAgICAgJGJsb2dUcmVlLnNob3coKVxuICAgICAgJHNlYXJjaEJveC5hZGRDbGFzcygnaGlkZGVuJylcbiAgICB9XG4gIH0pXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFydGlhbHMvc2lkZS1iYXItYm9keS9pbmRleC5qcyIsImltcG9ydCAnLi9zdHlsZS5zY3NzJ1xuaW1wb3J0IGhpc3RvcnkgZnJvbSAnIy9oaXN0b3J5J1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgY29uc3QgJHRhZ1RyZWUgPSAkKCcjSi1ibG9nLXRyZWUnKVxuICBjb25zdCAkYWxsUG9zdHMgPSAkKCcjSi1wb3N0cy1hbGwtaGlkZGVuJylcbiAgY29uc3QgcGF0aG5hbWUgPSBsb2NhdGlvbi5wYXRobmFtZVxuICBjb25zdCAkYm9keSA9ICQoJ2JvZHknKVxuICBjb25zdCAkdW50YWdlZFBvc3RzID0gJHRhZ1RyZWUuZmluZCgnLkotdW50YWdlZC1wb3N0cycpXG4gIGNvbnN0ICR3aW4gPSAkKHdpbmRvdylcblxuICBjb25zdCB0YWdzID0ge31cbiAgY29uc3QgdW50YWdlZCA9IFtdXG4gICRhbGxQb3N0cy5maW5kKCcuSi1wb3N0JykuZWFjaChmdW5jdGlvbigpIHtcbiAgICBjb25zdCAkcG9zdCA9ICQodGhpcylcbiAgICBjb25zdCBzbHVnID0gJHBvc3QuZGF0YSgnc2x1ZycpXG4gICAgY29uc3QgJHRhZ3MgPSAkcG9zdC5maW5kKCcuSi10YWcnKVxuXG4gICAgaWYgKHBhdGhuYW1lLmluY2x1ZGVzKHNsdWcpKSB7XG4gICAgICAkcG9zdC5hZGRDbGFzcygnYWN0aXZlJylcbiAgICB9XG5cbiAgICBpZiAoJHRhZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICB1bnRhZ2VkLnB1c2goJHBvc3RbMF0ub3V0ZXJIVE1MKVxuICAgIH0gZWxzZSB7XG4gICAgICAkdGFncy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCB0YWcgPSB0aGlzLmlubmVyVGV4dFxuICAgICAgICBpZiAoIXRhZ3NbdGFnXSkge1xuICAgICAgICAgIHRhZ3NbdGFnXSA9IFtdXG4gICAgICAgIH1cblxuICAgICAgICB0YWdzW3RhZ10ucHVzaCgkcG9zdFswXS5vdXRlckhUTUwpXG4gICAgICB9KVxuICAgIH1cbiAgfSlcblxuICAvKipcbiAgICogY29weSBwb3N0cyB0byBjb3JyZXNwb25kaW5nIHRhZ1xuICAgKi9cbiAgJHRhZ1RyZWUuZmluZCgnLkotYmxvZy10cmVlLXBvc3RzJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICBjb25zdCAkdGhpcyA9ICQodGhpcylcbiAgICBjb25zdCBwb3N0cyA9IHRhZ3NbJHRoaXMuZGF0YSgndGFnJyldXG5cbiAgICBpZiAoIXBvc3RzKSB7XG4gICAgICAkdGhpc1xuICAgICAgICAuaHRtbCgnPHVsPjxsaSBjbGFzcz1cImJsb2ctdHJlZS1uby1wb3N0cyBsaWdodGVyXCI+Q29taW5nIHNvb24uLi48L2xpPjwvdWw+JylcbiAgICAgICAgLnBhcmVudCgpXG4gICAgICAgIC5hZGRDbGFzcygncG9zdC1oaWRkZW4nKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgJHRoaXMuaHRtbChwb3N0cy5qb2luKCcnKSkuY3NzKHtcbiAgICAgIGhlaWdodDogMjYgKiBwb3N0cy5sZW5ndGhcbiAgICB9KVxuICB9KVxuXG4gICR1bnRhZ2VkUG9zdHMuaHRtbCh1bnRhZ2VkLmpvaW4oJycpKVxuXG4gIGNvbnN0ICRwb3N0cyA9ICQoJy5KLWJsb2ctdHJlZS10YWdzIC5KLXBvc3QnKVxuXG4gIC8vIGV2ZW50IGJpbmRpbmdcbiAgJHRhZ1RyZWVcbiAgICAuYWRkQ2xhc3MoJ2xvYWRpbmctaGlkZGVuJylcbiAgICAub24oJ2NsaWNrJywgJy5KLWJsb2ctdHJlZS10YWduYW1lJywgZnVuY3Rpb24oKSB7XG4gICAgICAkKHRoaXMpXG4gICAgICAgIC5wYXJlbnQoKVxuICAgICAgICAudG9nZ2xlQ2xhc3MoJ3Bvc3QtaGlkZGVuJylcbiAgICB9KVxuICAgIC5vbignY2xpY2snLCAnLkotZ28ycG9zdCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKVxuXG4gICAgICBpZiAoISRib2R5LmlzKCcucG9zdC10ZW1wbGF0ZScpKSByZXR1cm5cblxuICAgICAgaWYgKCR0aGlzLnBhcmVudHMoJy5KLXBvc3QnKS5pcygnLmFjdGl2ZScpKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgaWQgPSAkdGhpcy5kYXRhKCdpZCcpXG4gICAgICBjb25zdCB1cmwgPSAkdGhpcy5hdHRyKCdocmVmJylcblxuICAgICAgaWYgKCR3aW4ud2lkdGgoKSA8IDQ1MCkge1xuICAgICAgICBlbWl0dGVyLmVtaXQoJ3NpZGViYXItaGlkZGVuJylcbiAgICAgIH1cblxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBlbWl0dGVyLmVtaXQoJ2FkZC1wb3N0LXRhYicsIHtcbiAgICAgICAgaWQsXG4gICAgICAgIHVybCxcbiAgICAgICAgdGl0bGU6ICR0aGlzLmF0dHIoJ3RpdGxlJyksXG4gICAgICAgIHNsdWc6ICR0aGlzLnBhcmVudHMoJy5KLXBvc3QnKS5kYXRhKCdzbHVnJylcbiAgICAgIH0pXG4gICAgfSlcblxuICBoaXN0b3J5Lmxpc3Rlbihsb2NhdGlvbiA9PiB7XG4gICAgY29uc3QgbmV4dFRhYiA9IGxvY2F0aW9uLnN0YXRlXG5cbiAgICAkcG9zdHNcbiAgICAgIC5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAgIC5maWx0ZXIoKGlkeCwgcG9zdCkgPT4ge1xuICAgICAgICByZXR1cm4gJChwb3N0KS5kYXRhKCdzbHVnJykgPT09IG5leHRUYWIuc2x1Z1xuICAgICAgfSlcbiAgICAgIC5hZGRDbGFzcygnYWN0aXZlJylcbiAgfSlcbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYXJ0aWFscy9zaWRlLWJhci1ib2R5L2Jsb2ctdHJlZS9pbmRleC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYXJ0aWFscy9zaWRlLWJhci1ib2R5L2Jsb2ctdHJlZS9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGFydGlhbHMvc2lkZS1iYXItYm9keS9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcblxuJChmdW5jdGlvbigpIHtcbiAgY29uc3QgJHJlYWRpbmdUaW1lID0gJChcIi5KLXJlYWRpbmctdGltZVwiKTtcblxuICBlbWl0dGVyLm9uKFwicmVmcmVzaC1yZWFkaW5nLXRpbWVcIiwgKHsgdGltZSB9KSA9PiB7XG4gICAgJHJlYWRpbmdUaW1lLmh0bWwodGltZSk7XG4gIH0pO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYXJ0aWFscy9mb290ZXIvaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGFydGlhbHMvZm9vdGVyL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCAnLi9zdHlsZS5zY3NzJ1xuaW1wb3J0IGhpc3RvcnkgZnJvbSAnIy9oaXN0b3J5J1xuaW1wb3J0IHsgcG9zdFN0b3JlIH0gZnJvbSAnIy9zdG9yZXMnXG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSAnIy91dGlscydcblxuJChmdW5jdGlvbigpIHtcbiAgY29uc3QgJHBvc3RXcmFwID0gJCgnI0otcG9zdC13cmFwJylcbiAgY29uc3QgJHBvc3QgPSAkKCcjSi1wb3N0JylcbiAgY29uc3QgJHRpdGxlID0gJHBvc3QuZmluZCgnLkotcG9zdC10aXRsZScpXG4gIGNvbnN0ICRjb250ZW50ID0gJHBvc3QuZmluZCgnLkotcG9zdC1jb250ZW50JylcbiAgY29uc3QgJG1ldGEgPSAkcG9zdC5maW5kKCcuSi1wb3N0LW1ldGEnKVxuICBjb25zdCAkZmVhdHVyZUltYWdlID0gJHBvc3QuZmluZCgnLkotcG9zdC1mZWF0dXJlLWltYWdlJylcbiAgY29uc3Qgb3JpZ2luID0gbG9jYXRpb24ub3JpZ2luXG5cbiAgaGlnaGxpZ2h0KClcblxuICBpZiAoJCgnYm9keScpLmlzKCcucG9zdC10ZW1wbGF0ZScpKSB7XG4gICAgZW1pdHRlci5lbWl0KCdhZGQtcG9zdC10YWInLCB7XG4gICAgICBpZDogJHBvc3QuZGF0YSgnaWQnKSxcbiAgICAgIHRpdGxlOiAkcG9zdC5kYXRhKCd0aXRsZScpLFxuICAgICAgc2x1ZzogJHBvc3QuZGF0YSgnc2x1ZycpLFxuICAgICAgdXJsOiAkcG9zdC5kYXRhKCd1cmwnKVxuICAgIH0pXG5cbiAgICBlbWl0dGVyLmVtaXQoJ3JlZnJlc2gtcmVhZGluZy10aW1lJywge1xuICAgICAgdGltZTogJCgnLkotcmVhZGluZy10aW1lLWhpZGRlbicpLmh0bWwoKVxuICAgIH0pXG4gIH1cblxuICAvLyByZWZyZXNoIHBvc3QgZGF0YVxuICBoaXN0b3J5Lmxpc3RlbigobG9jYXRpb24sIGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IHBvc3RJZCA9IGxvY2F0aW9uLnN0YXRlLmlkXG5cbiAgICBpZiAoIXBvc3RJZCkgcmV0dXJuXG5cbiAgICBwb3N0U3RvcmUuZmV0Y2hQb3N0KHBvc3RJZCkuZG9uZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICBjb25zdCBwb3N0ID0gZGF0YS5wb3N0c1swXSB8fCB7fVxuICAgICAgY29uc3QgeyBwdWJsaXNoZWRfYXQsIHRpdGxlLCBodG1sLCBhdXRob3IsIGZlYXR1cmVfaW1hZ2UsIGNvbW1lbnRfaWQsIHVybCwgc2x1ZyB9ID0gcG9zdFxuXG4gICAgICAkdGl0bGUuaHRtbCh0aXRsZSlcbiAgICAgICRjb250ZW50Lmh0bWwoaHRtbClcbiAgICAgICRtZXRhLmh0bWwoYFBvc3RlZCBieSA8YSBocmVmPVwiL2F1dGhvci8ke2F1dGhvci5zbHVnfS9cIj4ke2F1dGhvci5uYW1lfTwvYT4gb24gJHtmb3JtYXREYXRlKCckWS4kTS4kZCcsIHB1Ymxpc2hlZF9hdCl9YClcbiAgICAgICRmZWF0dXJlSW1hZ2VbZmVhdHVyZV9pbWFnZSA/ICdyZW1vdmVDbGFzcycgOiAnYWRkQ2xhc3MnXSgnaGlkZGVuJylcbiAgICAgICAgLmZpbmQoJ2ZpZ3VyZScpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2ZlYXR1cmVfaW1hZ2V9KWBcbiAgICAgICAgfSlcblxuICAgICAgZW1pdHRlci5lbWl0KCdyZWZyZXNoLXJlYWRpbmctdGltZScsIHtcbiAgICAgICAgdGltZTogJydcbiAgICAgIH0pXG5cbiAgICAgIGRvY3VtZW50LnRpdGxlID0gdGl0bGVcblxuICAgICAgJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIHdpbmRvdy5yZWZyZXNoQ29tbWVudCAmJiB3aW5kb3cucmVmcmVzaENvbW1lbnQoYGdob3N0LSR7Y29tbWVudF9pZH1gLCBvcmlnaW4gKyB1cmwsIHRpdGxlKVxuXG4gICAgICBoaWdobGlnaHQoKVxuICAgICAgJHBvc3RXcmFwLmFuaW1hdGUoeyBzY3JvbGxUb3A6IDAgfSwgMzAwKVxuICAgIH0pXG4gIH0pXG5cbiAgZnVuY3Rpb24gaGlnaGxpZ2h0KCkge1xuICAgICQoJ3ByZSBjb2RlJykuZWFjaChmdW5jdGlvbihpLCBibG9jaykge1xuICAgICAgd2luZG93LmhsanMgJiYgd2luZG93LmhsanMuaGlnaGxpZ2h0QmxvY2soYmxvY2spXG4gICAgfSlcbiAgfVxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhcnRpYWxzL3Bvc3QvaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGFydGlhbHMvcG9zdC9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYXJ0aWFscy9wb3N0LW5hdi9pbmRleC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYXJ0aWFscy9wb3N0LW5hdi9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgJy4vc3R5bGUuc2NzcydcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFydGlhbHMvaG9tZS9pbmRleC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYXJ0aWFscy9ob21lL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCAnLi9zdHlsZS5zY3NzJ1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhcnRpYWxzL2F1dGhvci9pbmRleC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYXJ0aWFscy9hdXRob3Ivc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==