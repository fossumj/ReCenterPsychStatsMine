/** LibLynx COUNTER Release 5 Tracker v1.0.1
 * (c) 2019 LibLynx LLC
 * @preserve
 */
!function(){"use strict";function o(){var a=this;function n(t){var i="consol"+String.fromCharCode(101);window[i].error(t)}function s(t){var i,n,o,r,e,a,s,c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",d="",u=0;for(t=function(t){t=t.replace(/\r\n/g,"\n");var i,n,o="";for(n=0;n<t.length;n+=1)(i=t.charCodeAt(n))<128?o+=String.fromCharCode(i):(127<i&&i<2048?o+=String.fromCharCode(i>>6|192):(o+=String.fromCharCode(i>>12|224),o+=String.fromCharCode(i>>6&63|128)),o+=String.fromCharCode(63&i|128));return o}(t);u<t.length;)r=(i=t.charCodeAt(u++))>>2,e=(3&i)<<4|(n=t.charCodeAt(u++))>>4,a=(15&n)<<2|(o=t.charCodeAt(u++))>>6,s=63&o,isNaN(n)?a=s=64:isNaN(o)&&(s=64),d=d+c.charAt(r)+c.charAt(e)+c.charAt(a)+c.charAt(s);return d}function i(t,i){i.type=t;var n,o,r=JSON.stringify(i),e=new Image(1,1);r=s(r),n=a.endpoint+"?j="+window.escape(r)+"&r="+Math.random(),i.hasOwnProperty("sync")?((o=new XMLHttpRequest).open("GET",n,!1),o.send(null)):e.src=n}function o(t){var i=1;return function(t){var i;for(i in a.defaults)a.defaults.hasOwnProperty(i)&&!t.hasOwnProperty(i)&&(t[i]=a.defaults[i])}(t),void 0===t.pid&&(n("Must use _ll.push('setProviderId', ...) or _ll.push('setDefaults', {pid:'...'}) before tracking activity, or include pid value in metadata"),i=0),void 0!==t.llid?i=1:void 0!==t.aid?(t.sid,t.aname):(n("object passed to tracking API expected to have either aid or llid members"),i=0),void 0===t.url&&(t.url=window.location.href),i}function r(t){var i=o(t);return void 0===t.rid&&(n("Must use _ll.push('setResourceId', ...) or _ll.push('setDefaults', {rid:'...'}) before tracking activity, or include rid value in metadata"),i=0),i}this.option=[],this.endpoint="//connect.liblynx.com/log/counter",this.defaults={},this.exec=function(t){var i=t.shift();a[i]?a[i].apply(a,t):n("Unknown LibLynx Tracker method "+i)},this.setDefaults=function(t){var i,n;for(i in t)t.hasOwnProperty(i)&&("string"!=(n=typeof t[i])&&"number"!=n||(this.defaults[i]=t[i]))},this.setProviderId=function(t){this.defaults.pid=t},this.setResourceId=function(t){this.defaults.rid=t},this.setEndpoint=function(t){this.endpoint=t},this.setOption=function(t,i){i=void 0===i||i,this.option[t]=i},this.verbose=function(t){this.option.verbose},this.warn=function(t){this.option.verbose},this.trackItemRequest=function(t){void 0===t&&(t={}),o(t)&&i("ir",t)},this.trackItemInvestigation=function(t){void 0===t&&(t={}),o(t)&&i("ii",t)},this.trackSearch=function(t){void 0===t&&(t={}),o(t)&&i("se",t)},this.trackDenial=function(t){void 0===t&&(t={}),o(t)&&i("de",t)},this.trackRecordView=function(t){void 0===t&&(t={}),r(t)&&i("rv",t)},this.trackRegularSearch=function(t){void 0===t&&(t={}),r(t)&&i("rs",t)},this.trackResultClick=function(t){void 0===t&&(t={}),r(t)&&i("rc",t)},this.trackBrowseClick=function(t){void 0===t&&(t={}),r(t)&&i("bc",t)},this.trackBrowseSearch=function(t){void 0===t&&(t={}),r(t)&&i("bs",t)},this.trackMultimediaContentUnit=function(t){void 0===t&&(t={}),r(t)&&i("mu",t)},this.trackDatabaseLicenceDenial=function(t){void 0===t&&(t={}),r(t)&&i("ddu",t)},this.trackDatabaseConcurrencyDenial=function(t){void 0===t&&(t={}),r(t)&&i("ddc",t)},this.trackJournalArticle=function(t){void 0===t&&(t={}),function(t){var i=o(t);return void 0===t.jid&&(n("journal tracking missing jid (journal identifier)"),i=0),void 0===t.jname&&(i=0),i}(t)&&i("ja",t)},this.trackBook=function(t){void 0===t&&(t={}),function(t){var i=o(t);return void 0===t.bid&&(n("book tracking missing bid (book identifier)"),i=0),void 0!==t.rid&&(n("book tracking must not be given a rid (resource identifier)"),i=0),void 0===t.bname&&(i=0),i}(t)&&i("bk",t)}}window._ll=new function(t){for(var i,n=new o;t.length;)i=t.shift(),n.exec(i);this.push=function(t){return n.exec(t)}}(window._ll)}();