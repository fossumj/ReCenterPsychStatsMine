!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="https://ovp.iris.tv/plugins/",n(n.s=85)}({15:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DEFAULT_GLOBAL="GlobalIrisPlayer",t.DEFAULT_GLOBALS="GlobalIrisPlayers"},16:function(e,t,n){"use strict";var o,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};o=function(){return this}();try{o=o||Function("return this")()||(0,eval)("this")}catch(e){"object"===("undefined"==typeof window?"undefined":r(window))&&(o=window)}e.exports=o},30:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=this.constructor;return this.then(function(n){return t.resolve(e()).then(function(){return n})},function(n){return t.resolve(e()).then(function(){return t.reject(n)})})}},80:function(e,t,n){"use strict";var o,r,i=e.exports={};function u(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function a(e){if(o===setTimeout)return setTimeout(e,0);if((o===u||!o)&&setTimeout)return o=setTimeout,setTimeout(e,0);try{return o(e,0)}catch(t){try{return o.call(null,e,0)}catch(t){return o.call(this,e,0)}}}!function(){try{o="function"==typeof setTimeout?setTimeout:u}catch(e){o=u}try{r="function"==typeof clearTimeout?clearTimeout:c}catch(e){r=c}}();var s,f=[],l=!1,d=-1;function p(){l&&s&&(l=!1,s.length?f=s.concat(f):d=-1,f.length&&m())}function m(){if(!l){var e=a(p);l=!0;for(var t=f.length;t;){for(s=f,f=[];++d<t;)s&&s[d].run();d=-1,t=f.length}s=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===c||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function y(e,t){this.fun=e,this.array=t}function v(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];f.push(new y(e,t)),1!==f.length||l||a(m)},y.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},81:function(e,t,n){"use strict";(function(e,t){!function(e,n){if(!e.setImmediate){var o,r,i,u,c,a=1,s={},f=!1,l=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?o=function(e){t.nextTick(function(){m(e)})}:function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?(u="setImmediate$"+Math.random()+"$",c=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(u)&&m(+t.data.slice(u.length))},e.addEventListener?e.addEventListener("message",c,!1):e.attachEvent("onmessage",c),o=function(t){e.postMessage(u+t,"*")}):e.MessageChannel?((i=new MessageChannel).port1.onmessage=function(e){m(e.data)},o=function(e){i.port2.postMessage(e)}):l&&"onreadystatechange"in l.createElement("script")?(r=l.documentElement,o=function(e){var t=l.createElement("script");t.onreadystatechange=function(){m(e),t.onreadystatechange=null,r.removeChild(t),t=null},r.appendChild(t)}):o=function(e){setTimeout(m,0,e)},d.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var r={callback:e,args:t};return s[a]=r,o(a),a++},d.clearImmediate=p}function p(e){delete s[e]}function m(e){if(f)setTimeout(m,0,e);else{var t=s[e];if(t){f=!0;try{!function(e){var t=e.callback,o=e.args;switch(o.length){case 0:t();break;case 1:t(o[0]);break;case 2:t(o[0],o[1]);break;case 3:t(o[0],o[1],o[2]);break;default:t.apply(n,o)}}(t)}finally{p(e),f=!1}}}}}("undefined"==typeof self?void 0===e?void 0:e:self)}).call(this,n(16),n(80))},82:function(e,t,n){"use strict";(function(e){var o=void 0!==e&&e||"undefined"!=typeof self&&self||window,r=Function.prototype.apply;function i(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new i(r.call(setTimeout,o,arguments),clearTimeout)},t.setInterval=function(){return new i(r.call(setInterval,o,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(o,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(81),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||void 0,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||void 0}).call(this,n(16))},83:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var o,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=(o=n(30))&&o.__esModule?o:{default:o},u=setTimeout;function c(e){return Boolean(e&&void 0!==e.length)}function a(){}function s(e){if(!(this instanceof s))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],m(e,this)}function f(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,s._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var o;try{o=n(e._value)}catch(e){return void d(t.promise,e)}l(t.promise,o)}else(1===e._state?l:d)(t.promise,e._value)})):e._deferreds.push(t)}function l(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"===(void 0===t?"undefined":r(t))||"function"==typeof t)){var n=t.then;if(t instanceof s)return e._state=3,e._value=t,void p(e);if("function"==typeof n)return void m((o=n,i=t,function(){o.apply(i,arguments)}),e)}e._state=1,e._value=t,p(e)}catch(t){d(e,t)}var o,i}function d(e,t){e._state=2,e._value=t,p(e)}function p(e){2===e._state&&0===e._deferreds.length&&s._immediateFn(function(){e._handled||s._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)f(e,e._deferreds[t]);e._deferreds=null}function m(e,t){var n=!1;try{e(function(e){n||(n=!0,l(t,e))},function(e){n||(n=!0,d(t,e))})}catch(e){if(n)return;n=!0,d(t,e)}}s.prototype.catch=function(e){return this.then(null,e)},s.prototype.then=function(e,t){var n=new this.constructor(a);return f(this,new function(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}(e,t,n)),n},s.prototype.finally=i.default,s.all=function(e){return new s(function(t,n){if(!c(e))return n(new TypeError("Promise.all accepts an array"));var o=Array.prototype.slice.call(e);if(0===o.length)return t([]);var i=o.length;function u(e,c){try{if(c&&("object"===(void 0===c?"undefined":r(c))||"function"==typeof c)){var a=c.then;if("function"==typeof a)return void a.call(c,function(t){u(e,t)},n)}o[e]=c,0==--i&&t(o)}catch(e){n(e)}}for(var a=0;a<o.length;a++)u(a,o[a])})},s.resolve=function(e){return e&&"object"===(void 0===e?"undefined":r(e))&&e.constructor===s?e:new s(function(t){t(e)})},s.reject=function(e){return new s(function(t,n){n(e)})},s.race=function(e){return new s(function(t,n){if(!c(e))return n(new TypeError("Promise.race accepts an array"));for(var o=0,r=e.length;o<r;o++)s.resolve(e[o]).then(t,n)})},s._immediateFn="function"==typeof e&&function(t){e(t)}||function(e){u(e,0)},s._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},t.default=s}).call(this,n(82).setImmediate)},84:function(e,t,n){"use strict";(function(e){var t=r(n(83)),o=r(n(30));function r(e){return e&&e.__esModule?e:{default:e}}var i=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw new Error("unable to locate global object")}();"Promise"in i?i.Promise.prototype.finally||(i.Promise.prototype.finally=o.default):i.Promise=t.default}).call(this,n(16))},85:function(e,t,n){"use strict";var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};n(84);var r,i=n(15);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}!function(){if("function"==typeof window.CustomEvent)return!1;window.CustomEvent=function(e,t){var n=t||{bubbles:!1,cancelable:!1,detail:null},o=document.createEvent("CustomEvent");return o.initCustomEvent(e,n.bubbles,n.cancelable,n.detail),o}}(),r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={},n=o({access_token:"1d9f05c8b00daddfbffcf5afa8a0691bf6370c0cd9dfc8bc6fb38e13c4474dab",global:i.DEFAULT_GLOBAL},e);window.IrisContextGlobal={},["client_token","access_token"].forEach(function(e){if(!n||!n[e])throw new Error("[Iris Context] Invalid Settings Error. Missing or Invalid "+e)});var r=Math.random()<.005&&(n.enable_ingestor||-1!==["W491AUI45FTTFWD"].indexOf(e.client_token));document.location.search&&-1!==document.location.search.indexOf("enableIngestor")&&(r=!0);var c=function(){r&&(window.IrisContextGlobal.ingestorPromise?window.IrisContextGlobal.ingestorPromise:(window.IrisContextGlobal.ingestorPromise=new Promise(function(t){var n=document.createElement("script");n.async=!0,n.id="iris-ingestor",n.src="https://ovp.iris.tv/ingestor/"+e.client_token+".min.js",n.onload=function(){t()},document.head.appendChild(n)}),window.IrisContextGlobal.ingestorPromise)).then(function(){void 0!==window.IrisIngestor&&window.IrisIngestor.ingest()})};return t.getVideoInfo=function(e,t,r){return(i=function(e){var t=o({},n,{platform_id:e});return"https://context.iris.tv/video_info?"+Object.keys(t).map(function(e){return e+"="+t[e]}).join("&")}(e),new Promise(function(e){var t=new XMLHttpRequest;t.open("get",i,!0),t.send(),t.onreadystatechange=function(){if(this.readyState===this.DONE)if(200===this.status)e(JSON.parse(t.responseText));else if(204===this.status)try{e({error:!0,status:204,message:"invalid_asset"}),c()}catch(e){}else e({error:!0,status:this.status,message:"unknown"})}})).then(function(n){var o=n.video_info,i=n.error,c=n.status,a=n.message,s={context:o&&(o.context||[])||[],categories:o&&(o.iab||[])||[]};return r&&(s=u({},r,s[r])),o&&(o.iris_id&&(s.iris_id=o.iris_id),o.iris_id_expires_at&&(s.iris_id_expires_at=o.iris_id_expires_at)),s.platform_id=e,i&&(s.error=!0,s.iris_id="",a&&(s.message=a),c&&(s.status=c)),"function"==typeof t&&t(s),new Promise(function(e){return e(s)})}).catch(function(e){console.log("[Iris] Not able to get video info",e)});var i},t.getContext=function(e,n){return t.getVideoInfo(e,n,"context")},t.getCategories=function(e,n){return t.getVideoInfo(e,n,"categories")},t.getRecommendationsInfo=function(e,r){var c=window[n.global];if(e&&(c=window[i.DEFAULT_GLOBALS][e]||c),c){var a=c.getPlaylist(),s=[];return void 0===c.playlist&&(c.playlist=[]),new Promise(function(n){a.forEach(function(n){n.platform_id!==e&&-1===c.playlist.indexOf(n.platform_id)&&(c.playlist.push(n.platform_id),s.push(t.getVideoInfo(n.platform_id)))}),Promise.all(s).then(function(e){if(e&&Array.isArray(e)){var t=o.apply(void 0,[{}].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(e.map(function(e){return u({},e.platform_id,e)}))));"function"==typeof r&&r(t),n(t)}else n({})})})}return[]},t.getVideoInfoByIndex=function(e,o){var r=window[n.global];return r?new Promise(function(n){var i=e||r.getCurrentIndex(),u=r.getPlaylist()[i];t.getVideoInfo(u.platform_id).then(function(e){n(e),"function"==typeof o&&o(e)})}):{}},t},window.IrisContextAPI=function(e){return new r(e)},window.dispatchEvent(new CustomEvent("IrisContextAPI")),console.log("[Iris Context API] v1.0.5")}});