!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n=window.webpackJsonp;window.webpackJsonp=function(e,r,i){for(var a,s,u=0,c=[];u<e.length;u++)s=e[u],o[s]&&c.push(o[s][0]),o[s]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);for(n&&n(e,r,i);c.length;)c.shift()()};var r={},o={1:0};e.e=function(t){function n(){s.onerror=s.onload=null,clearTimeout(u);var e=o[t];0!==e&&(e&&e[1](new Error("Loading chunk "+t+" failed.")),o[t]=void 0)}var r=o[t];if(0===r)return new Promise(function(t){t()});if(r)return r[2];var i=new Promise(function(e,n){r=o[t]=[e,n]});r[2]=i;var a=document.getElementsByTagName("head")[0],s=document.createElement("script");s.type="text/javascript",s.charset="utf-8",s.async=!0,s.timeout=12e4,e.nc&&s.setAttribute("nonce",e.nc),s.src=e.p+"chunk."+({}[t]||t)+"."+{0:"47184"}[t]+".js";var u=setTimeout(n,12e4);return s.onerror=s.onload=n,a.appendChild(s),i},e.m=t,e.c=r,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/assets/built/",e.oe=function(t){throw console.error(t),t},e(e.s=7)}([function(t,e,n){"use strict";function r(t){function e(e){var n=e.wheelDelta?e.wheelDelta:-1*e.deltaY;t.scrollLeft+=-n,e.preventDefault()}return t?(t.addEventListener("wheel",e),function(){return t.removeEventListener("wheel",e)}):void console.error("Must specify el!")}function o(t){var e=function(e){var n=s.width();return t.call(this,e,n)};return e(),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}function i(t,e,n){var r,o,i;if(0==e)r=o=i=n;else{var a=function(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+(e-t)*(2/3-n)*6:t},s=n<.5?n*(1+e):n+e-n*e,u=2*n-s;r=a(u,s,t+1/3),o=a(u,s,t),i=a(u,s,t-1/3)}return[255*r,255*o,255*i]}Object.defineProperty(e,"__esModule",{value:!0}),e.hScroll=r,e.onresize=o,e.hsl2rgb=i;var a=$("body"),s=$(window),u=(e.isHomePage=function(){return a.is(".home-template")},e.isPostPage=function(){return a.is(".post-template")},e.format=function(t,e){return t.replace(/\$\{([^\{\}]*)\}/g,function(t,n){var r=e[n.trim()];return null==r?"":r+""})}),c=function(t,e){return(Array.prototype.join.call({length:e+1},"0")+t).slice(-e)};e.formatDate=function(t,e){return e?(t=t.replace(/\$([a-zA-Z])/g,function(t,e){return"${"+e+"}"}),e=new Date(e),u(t,{Y:c(e.getFullYear(),4),y:c(e.getFullYear(),2),M:c(e.getMonth()+1,2),d:c(e.getDate(),2),D:e.getDay(),H:c(e.getHours(),2),m:c(e.getMinutes(),2),s:c(e.getSeconds(),2)})):""}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(17),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=(0,o.default)()},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.postStore=e.tabStore=void 0;var o=n(15),i=r(o),a=n(16),s=r(a),u=e.tabStore=new i.default,c=e.postStore=new s.default;window.stores={tabStore:u,postStore:c}},function(t,e,n){"use strict";t.exports={lsPostTabKey:"ghostcode-post-tabs",lsPostTabExpiration:864e5,lsThemeKey:"ghostcode-theme",lsPostsKey:"ghostcode-posts",lsPostsExpiration:6e4,theme:["dark_defaults","vs-dark"]}},function(t,e,n){"use strict";var r=function(){};t.exports=r},function(t,e,n){"use strict";e.__esModule=!0;var r=(e.addLeadingSlash=function(t){return"/"===t.charAt(0)?t:"/"+t},e.stripLeadingSlash=function(t){return"/"===t.charAt(0)?t.substr(1):t},e.hasBasename=function(t,e){return new RegExp("^"+e+"(\\/|\\?|#|$)","i").test(t)});e.stripBasename=function(t,e){return r(t,e)?t.substr(e.length):t},e.stripTrailingSlash=function(t){return"/"===t.charAt(t.length-1)?t.slice(0,-1):t},e.parsePath=function(t){var e=t||"/",n="",r="",o=e.indexOf("#");-1!==o&&(r=e.substr(o),e=e.substr(0,o));var i=e.indexOf("?");return-1!==i&&(n=e.substr(i),e=e.substr(0,i)),{pathname:e,search:"?"===n?"":n,hash:"#"===r?"":r}},e.createPath=function(t){var e=t.pathname,n=t.search,r=t.hash,o=e||"/";return n&&"?"!==n&&(o+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}},,function(t,e,n){"use strict";n(8),n(10),n(11),n(13),n(24),n(26),n(30),n(32),n(34),n(36),n(38),n(40)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(9),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=window.emitter=(0,o.default)()},function(t,e,n){"use strict";function r(t){return t=t||Object.create(null),{on:function(e,n){(t[e]||(t[e]=[])).push(n)},off:function(e,n){t[e]&&t[e].splice(t[e].indexOf(n)>>>0,1)},emit:function(e,n){(t[e]||[]).map(function(t){t(n)}),(t["*"]||[]).map(function(t){t(e,n)})}}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},function(t,e){},function(t,e,n){"use strict";n(12)},function(t,e){},function(t,e,n){"use strict";var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};n(14);var o=n(2),i=n(1),a=function(t){return t&&t.__esModule?t:{default:t}}(i),s=n(0);$(function(){function t(t){var e=i.width(),n=i.scrollLeft(),r=t.get(0);if(r){var o=t.outerWidth(),a=r.offsetLeft,s=a+o;s>e+n&&(u.scrollLeft=s-e-10),a<=n&&(u.scrollLeft=a-10)}}if((0,s.isPostPage)()){var e=$("#J-post-tab"),n=void 0,i=$(".J-post-tab-scroller-wrap"),u=i.get(0),c=i.find(".icon-close")[0].outerHTML;emitter.on("add-post-tab",function(t){var e=o.tabStore.getTabs();e.filter(function(e){return e.id===t.id}).length||(e.push(r({},t)),o.tabStore.setTabs(e)),emitter.emit("tab-refresh",r({},t))}),emitter.on("tab-refresh",function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=i.id,u=o.tabStore.getTabs(),l=o.tabStore.currentTab,f=e.html(u.map(function(t){return'<div title="'+t.title+'" class="J-tab-item light hover-opacity1 flex-item0 single-line item '+(s===t.id?"active":"")+'" data-id="'+t.id+'">'+t.title+'<i class="close J-post-tab-close lighter hover-opacity1" data-slug="'+t.slug+'">'+c+"</i></div>"}).join("")).find(".active");n=e.find(".J-tab-item"),l?(o.tabStore.setCurrentTab(r({},i)),l.id===s||i.dontTouchHistory||a.default.push(i.url,r({},i))):(o.tabStore.setCurrentTab(r({},i)),a.default.replace(i.url,r({},i))),t(f)}),e.on("click",".J-post-tab-close",function(t){t.stopPropagation(),o.tabStore.deleteTabItem($(this).parent(".J-tab-item").data("id"))}).on("click",".J-tab-item",function(){var e=$(this);if(!e.is(".active")){var n=e.data("id"),i=o.tabStore.getTabs().filter(function(t){return t.id===n})[0]||{};e.addClass("active").siblings().removeClass("active"),o.tabStore.setCurrentTab(i),a.default.push(i.url,r({},i)),t(e)}}),(0,s.hScroll)(i.get(0)),a.default.listen(function(e){var o=e.state,i=n.removeClass("active").filter(function(t,e){return $(e).data("id")===o.id}).addClass("active");0===i.length&&emitter.emit("add-post-tab",r({},o,{dontTouchHistory:1})),t(i)})}})},function(t,e){},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=n(3),s=localStorage,u=function(){function t(){r(this,t),this.currentTab=null}return i(t,[{key:"getTabs",value:function(){var t=s.getItem(a.lsPostTabKey)||"",e=t.split("___"),n=o(e,2),r=n[0],i=n[1];return!t||!i||+new Date-i>=a.lsPostTabExpiration?[]:r.split(",").map(function(t){var e=t.split(":"),n=o(e,4);return{id:n[0],title:n[1],url:n[2],slug:n[3]}})}},{key:"setTabs",value:function(t){s.setItem(a.lsPostTabKey,t.length?t.map(function(t){return t.id+":"+t.title+":"+t.url+":"+t.slug}).join(",")+"___"+ +new Date:"")}},{key:"setCurrentTab",value:function(t){this.currentTab=t}},{key:"deleteTabItem",value:function(t){var e=this.getTabs(),n=null,r=t===this.currentTab.id,o=e.findIndex(function(e){return e.id===t});e=e.filter(function(e,n){return e.id!==t}),this.setTabs(e),e.length?(r&&(n=0===o?e[0]:e[o-1]),emitter.emit("tab-refresh",n||this.currentTab)):location.href="/"}}]),t}();e.default=u},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=n(3),s=n(2),u=(n(0),localStorage),c=function(){function t(){r(this,t)}return i(t,[{key:"fetchPost",value:function(t){var e=this,n=this.fromCache(t);return n?$.Deferred().resolve(n):$.get(ghost.url.api("posts/"+t),{include:"author"}).fail(function(e){console.log(e),404===e.status&&s.tabStore.deleteTabItem(t)}).done(function(n){var r=n.posts[0]||{};return e.cachePost(t,r),r})}},{key:"fromCache",value:function(t){var e=u.getItem(a.lsPostsKey);e=e?JSON.parse(e):{};var n=e[t];if(n&&+new Date-n.timestamp<=a.lsPostsExpiration){var r=JSON.parse(n.author);return{posts:[o({},n,{author:r,fromCache:1})]}}return null}},{key:"deletePostFromCache",value:function(t){var e=u.getItem(a.lsPostsKey);e=e?JSON.parse(e):{},delete e[t],u.setItem(a.lsPostsKey,JSON.stringify(e))}},{key:"cachePost",value:function(t,e){if(!e.fromCache){var n=u.getItem(a.lsPostsKey);n=n?JSON.parse(n):{},n[t]=o({},e,{author:JSON.stringify(e.author),timestamp:+new Date});var r=Object.keys(n);if(r.length>5){var i=r.map(function(t){return{timestamp:n[t].timestamp,id:t}}).sort(function(t,e){return t.timestamp-e.timestamp}).map(function(t){return t.id}).shift();delete n[i]}u.setItem(a.lsPostsKey,JSON.stringify(n))}}}]),t}();e.default=c},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.__esModule=!0;var i="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(t){return void 0===t?"undefined":o(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":o(t)},a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},s=n(4),u=r(s),c=n(18),l=r(c),f=n(19),d=n(5),h=n(22),p=r(h),v=n(23),m=function(){try{return window.history.state||{}}catch(t){return{}}},g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,l.default)(v.canUseDOM,"Browser history needs a DOM");var e=window.history,n=(0,v.supportsHistory)(),r=!(0,v.supportsPopStateOnHashChange)(),o=t.forceRefresh,s=void 0!==o&&o,c=t.getUserConfirmation,h=void 0===c?v.getConfirmation:c,g=t.keyLength,b=void 0===g?6:g,y=t.basename?(0,d.stripTrailingSlash)((0,d.addLeadingSlash)(t.basename)):"",w=function(t){var e=t||{},n=e.key,r=e.state,o=window.location,i=o.pathname,a=o.search,s=o.hash,c=i+a+s;return(0,u.default)(!y||(0,d.hasBasename)(c,y),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+c+'" to begin with "'+y+'".'),y&&(c=(0,d.stripBasename)(c,y)),(0,f.createLocation)(c,r,n)},P=function(){return Math.random().toString(36).substr(2,b)},O=(0,p.default)(),S=function(t){a(R,t),R.length=e.length,O.notifyListeners(R.location,R.action)},_=function(t){(0,v.isExtraneousPopstateEvent)(t)||k(w(t.state))},T=function(){k(w(m()))},C=!1,k=function(t){if(C)C=!1,S();else{O.confirmTransitionTo(t,"POP",h,function(e){e?S({action:"POP",location:t}):$(t)})}},$=function(t){var e=R.location,n=E.indexOf(e.key);-1===n&&(n=0);var r=E.indexOf(t.key);-1===r&&(r=0);var o=n-r;o&&(C=!0,x(o))},J=w(m()),E=[J.key],j=function(t){return y+(0,d.createPath)(t)},L=function(t,r){(0,u.default)(!("object"===(void 0===t?"undefined":i(t))&&void 0!==t.state&&void 0!==r),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");var o=(0,f.createLocation)(t,r,P(),R.location);O.confirmTransitionTo(o,"PUSH",h,function(t){if(t){var r=j(o),i=o.key,a=o.state;if(n)if(e.pushState({key:i,state:a},null,r),s)window.location.href=r;else{var c=E.indexOf(R.location.key),l=E.slice(0,-1===c?0:c+1);l.push(o.key),E=l,S({action:"PUSH",location:o})}else(0,u.default)(void 0===a,"Browser history cannot push state in browsers that do not support HTML5 history"),window.location.href=r}})},M=function(t,r){(0,u.default)(!("object"===(void 0===t?"undefined":i(t))&&void 0!==t.state&&void 0!==r),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");var o=(0,f.createLocation)(t,r,P(),R.location);O.confirmTransitionTo(o,"REPLACE",h,function(t){if(t){var r=j(o),i=o.key,a=o.state;if(n)if(e.replaceState({key:i,state:a},null,r),s)window.location.replace(r);else{var c=E.indexOf(R.location.key);-1!==c&&(E[c]=o.key),S({action:"REPLACE",location:o})}else(0,u.default)(void 0===a,"Browser history cannot replace state in browsers that do not support HTML5 history"),window.location.replace(r)}})},x=function(t){e.go(t)},A=function(){return x(-1)},D=function(){return x(1)},H=0,I=function(t){H+=t,1===H?((0,v.addEventListener)(window,"popstate",_),r&&(0,v.addEventListener)(window,"hashchange",T)):0===H&&((0,v.removeEventListener)(window,"popstate",_),r&&(0,v.removeEventListener)(window,"hashchange",T))},U=!1,B=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=O.setPrompt(t);return U||(I(1),U=!0),function(){return U&&(U=!1,I(-1)),e()}},K=function(t){var e=O.appendListener(t);return I(1),function(){I(-1),e()}},R={length:e.length,action:"POP",location:J,createHref:j,push:L,replace:M,go:x,goBack:A,goForward:D,block:B,listen:K};return R};e.default=g},function(t,e,n){"use strict";var r=function(t,e,n,r,o,i,a,s){if(!t){var u;if(void 0===e)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,i,a,s],l=0;u=new Error(e.replace(/%s/g,function(){return c[l++]})),u.name="Invariant Violation"}throw u.framesToPop=1,u}};t.exports=r},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.locationsAreEqual=e.createLocation=void 0;var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=n(20),a=r(i),s=n(21),u=r(s),c=n(5);e.createLocation=function(t,e,n,r){var i=void 0;"string"==typeof t?(i=(0,c.parsePath)(t),i.state=e):(i=o({},t),void 0===i.pathname&&(i.pathname=""),i.search?"?"!==i.search.charAt(0)&&(i.search="?"+i.search):i.search="",i.hash?"#"!==i.hash.charAt(0)&&(i.hash="#"+i.hash):i.hash="",void 0!==e&&void 0===i.state&&(i.state=e));try{i.pathname=decodeURI(i.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+i.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}return n&&(i.key=n),r?i.pathname?"/"!==i.pathname.charAt(0)&&(i.pathname=(0,a.default)(i.pathname,r.pathname)):i.pathname=r.pathname:i.pathname||(i.pathname="/"),i},e.locationsAreEqual=function(t,e){return t.pathname===e.pathname&&t.search===e.search&&t.hash===e.hash&&t.key===e.key&&(0,u.default)(t.state,e.state)}},function(t,e,n){"use strict";function r(t){return"/"===t.charAt(0)}function o(t,e){for(var n=e,r=n+1,o=t.length;r<o;n+=1,r+=1)t[n]=t[r];t.pop()}function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=t&&t.split("/")||[],i=e&&e.split("/")||[],a=t&&r(t),s=e&&r(e),u=a||s;if(t&&r(t)?i=n:n.length&&(i.pop(),i=i.concat(n)),!i.length)return"/";var c=void 0;if(i.length){var l=i[i.length-1];c="."===l||".."===l||""===l}else c=!1;for(var f=0,d=i.length;d>=0;d--){var h=i[d];"."===h?o(i,d):".."===h?(o(i,d),f++):f&&(o(i,d),f--)}if(!u)for(;f--;f)i.unshift("..");!u||""===i[0]||i[0]&&r(i[0])||i.unshift("");var p=i.join("/");return c&&"/"!==p.substr(-1)&&(p+="/"),p}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},function(t,e,n){"use strict";function r(t,e){if(t===e)return!0;if(null==t||null==e)return!1;if(Array.isArray(t))return Array.isArray(e)&&t.length===e.length&&t.every(function(t,n){return r(t,e[n])});var n=void 0===t?"undefined":i(t);if(n!==(void 0===e?"undefined":i(e)))return!1;if("object"===n){var o=t.valueOf(),a=e.valueOf();if(o!==t||a!==e)return r(o,a);var s=Object.keys(t),u=Object.keys(e);return s.length===u.length&&s.every(function(n){return r(t[n],e[n])})}return!1}Object.defineProperty(e,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(t){return void 0===t?"undefined":o(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":o(t)};e.default=r},function(t,e,n){"use strict";e.__esModule=!0;var r=n(4),o=function(t){return t&&t.__esModule?t:{default:t}}(r),i=function(){var t=null,e=function(e){return(0,o.default)(null==t,"A history supports only one prompt at a time"),t=e,function(){t===e&&(t=null)}},n=function(e,n,r,i){if(null!=t){var a="function"==typeof t?t(e,n):t;"string"==typeof a?"function"==typeof r?r(a,i):((0,o.default)(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),i(!0)):i(!1!==a)}else i(!0)},r=[];return{setPrompt:e,confirmTransitionTo:n,appendListener:function(t){var e=!0,n=function(){e&&t.apply(void 0,arguments)};return r.push(n),function(){e=!1,r=r.filter(function(t){return t!==n})}},notifyListeners:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];r.forEach(function(t){return t.apply(void 0,e)})}}};e.default=i},function(t,e,n){"use strict";e.__esModule=!0;e.canUseDOM=!("undefined"==typeof window||!window.document||!window.document.createElement),e.addEventListener=function(t,e,n){return t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent("on"+e,n)},e.removeEventListener=function(t,e,n){return t.removeEventListener?t.removeEventListener(e,n,!1):t.detachEvent("on"+e,n)},e.getConfirmation=function(t,e){return e(window.confirm(t))},e.supportsHistory=function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"pushState"in window.history)},e.supportsPopStateOnHashChange=function(){return-1===window.navigator.userAgent.indexOf("Trident")},e.supportsGoWithoutReloadUsingHash=function(){return-1===window.navigator.userAgent.indexOf("Firefox")},e.isExtraneousPopstateEvent=function(t){return void 0===t.state&&-1===navigator.userAgent.indexOf("CriOS")}},function(t,e,n){"use strict";n(25);n(0);$(document).ready(function(){function t(){emitter.emit("sidebar-body-show")}function e(){emitter.emit("sidebar-body-hide"),i.removeClass("active")}var r=$("#J-sidebar-wrap"),o=$("#J-sidebar-header"),i=o.find(".J-sidebar-item");$(".blog-header");o.on("click",".J-sidebar-logo",function(){var n=$(this);n.is(".active")?(e(),n.removeClass("active")):(t(),emitter.emit("switch-sidebar",{target:"logo"}),n.addClass("active").siblings().removeClass("active"))}).on("click",".J-sidebar-search",function(){var r=$(this);r.is(".active")?e():(t(),r.addClass("active").siblings().removeClass("active"),new Promise(function(t){n.e(0).then(function(e){t(n(6))}.bind(null,n)).catch(n.oe)}).then(function(){emitter.emit("switch-sidebar",{target:"search"})}))}),r.on("click",".J-sidebar-trigger",function(){var t=$(this).data("target");"search"===t?new Promise(function(t){n.e(0).then(function(e){t(n(6))}.bind(null,n)).catch(n.oe)}).then(function(){emitter.emit("switch-sidebar",{target:t,toggle:!0})}):emitter.emit("switch-sidebar",{target:t,toggle:!0})})})},function(t,e){},function(t,e,n){"use strict";n(27),n(29),$(function(){var t=$("#J-side-bar-body"),e=$("#J-search-box"),n=$("#J-blog-tree"),r=e.find(".J-input-search"),o=($("#J-blog-tree"),$("html"));emitter.on("sidebar-body-hide",function(){o.removeClass("noscroll"),t.hide()}),emitter.on("sidebar-body-show",function(){o.addClass("noscroll"),t.show()});var i="blog-tree";emitter.on("switch-sidebar",function(a){var s=a.target,u="search"===s;i===s?(o.toggleClass("noscroll").toggleClass("archive-show"),t.toggleClass("show")):(o.addClass("noscroll").addClass("archive-show"),t.addClass("show")),i=s,u?(n.hide(),e.removeClass("hidden"),r.focus()):(n.show(),e.addClass("hidden"))})})},function(t,e,n){"use strict";n(28);var r=n(1),o=function(t){return t&&t.__esModule?t:{default:t}}(r);$(document).ready(function(){var t=$("#J-blog-tree"),e=$("#J-posts-all-hidden"),n=location.pathname,r=$("body"),i=t.find(".J-untaged-posts"),a=$(window),s={},u=[];e.find(".J-post").each(function(){var t=$(this),e=t.data("slug"),r=t.find(".J-tag");n.includes(e)&&t.addClass("active"),0===r.length?u.push(t[0].outerHTML):r.each(function(){var e=this.innerText;s[e]||(s[e]=[]),s[e].push(t[0].outerHTML)})}),t.find(".J-blog-tree-posts").each(function(){var t=$(this),e=s[t.data("tag")];if(!e)return void t.html('<ul><li class="blog-tree-no-posts lighter">Coming soon...</li></ul>').parent().addClass("post-hidden");t.html(e.join("")).css({height:26*e.length})}),i.html(u.join(""));var c=$(".J-blog-tree-tags .J-post");t.addClass("loading-hidden").on("click",".J-blog-tree-tagname",function(){$(this).parent().toggleClass("post-hidden")}).on("click",".J-go2post",function(t){var e=$(this);if(r.is(".post-template")){if(e.parents(".J-post").is(".active"))return void t.preventDefault();var n=e.data("id"),o=e.attr("href");a.width()<=800&&emitter.emit("switch-sidebar",{target:"blog-tree"}),t.preventDefault(),emitter.emit("add-post-tab",{id:n,url:o,title:e.attr("title"),slug:e.parents(".J-post").data("slug")})}}),o.default.listen(function(t){var e=t.state;c.removeClass("active").filter(function(t,n){return $(n).data("slug")===e.slug}).addClass("active")})})},function(t,e){},function(t,e){},function(t,e,n){"use strict";n(31),$(function(){var t=$(".J-reading-time");emitter.on("refresh-reading-time",function(e){var n=e.time;t.html(n)})})},function(t,e){},function(t,e,n){"use strict";n(33);var r=n(1),o=function(t){return t&&t.__esModule?t:{default:t}}(r),i=n(2),a=n(0);$(function(){function t(){$("pre code").each(function(t,e){window.hljs&&window.hljs.highlightBlock(e)})}var e=$("#J-post-wrap"),n=$("#J-post"),r=n.find(".J-post-title"),s=n.find(".J-post-content"),u=n.find(".J-post-meta"),c=e.find(".J-post-feature-image"),l=location.origin;t(),$("body").is(".post-template")&&(emitter.emit("add-post-tab",{id:n.data("id"),title:n.data("title"),slug:n.data("slug"),url:n.data("url")}),emitter.emit("refresh-reading-time",{time:$(".J-reading-time-hidden").html()})),o.default.listen(function(n,o){var f=n.state.id;f&&i.postStore.fetchPost(f).done(function(n){var o=n.posts[0]||{},i=o.published_at,f=o.title,d=o.html,h=o.author,p=o.feature_image,v=o.comment_id,m=o.url;r.html(f),s.html(d),u.html('Posted by <a href="/author/'+h.slug+'/">'+h.name+"</a> on "+(0,a.formatDate)("$Y.$M.$d",i)),c[p?"removeClass":"addClass"]("hidden").find("figure").css({backgroundImage:"url("+p+")"}),emitter.emit("refresh-reading-time",{time:""}),document.title=f,"function"==typeof window.refreshComment&&window.refreshComment("ghost-"+v,l+m,f),t(),e.animate({scrollTop:0},300)})})})},function(t,e){},function(t,e,n){"use strict";n(35)},function(t,e){},function(t,e,n){"use strict";n(37)},function(t,e){},function(t,e,n){"use strict";n(39)},function(t,e){},function(t,e,n){"use strict";n(41)},function(t,e){}]);