(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{119:function(e,t,o){"use strict";var n=o(152);t.a=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent,t=Object(n.a)(/(iPhone)|(iPad)|(iPod)/,e),o=Object(n.a)(/(CriOS)|(Opera)/,e);return!t||o}},152:function(e,t,o){"use strict";t.a=function(e){for(var t,o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:window.navigator.userAgent,n="Array"!==e.constructor.name?[e]:e,a=0;a<n.length&&!1!==(t=Boolean(o.match(n[a])));a++);return t}},347:function(e,t,o){"use strict";var n=o(119),a="https:"===document.location.protocol?"https://sb":"http://b",c='var _comscore=_comscore||[];\n_comscore.push({c1:"2",c2:"6035363"});\nwindow._comscore=_comscore;\n(function(){var s=document.createElement("script");\ns.src="'.concat(a,'.scorecardresearch.com/beacon.js";\ndocument.head.appendChild(s);})();'),r=document.head.querySelector("title"),i={flags:["same-origin"],js:c,sandbox:Object(n.a)(),title:"Comscore Pixel",pageTitle:r?r.innerText:""};t.a=i},969:function(e,t,o){"use strict";o.r(t);var i=o(28),s=o(7);var n=function(){var e=window.location,t=e.protocol,o=e.hostname,n=e.pathname;window.PARSELY={autotrack:!1,onReady:function(){PARSELY.updateDefaults({data:{subscriber:Object(i.default)().subscribed}}),window.location.pathname.includes("/video-embed")||PARSELY.beacon.trackPageView({url:"".concat(t,"//").concat(o).concat(n).concat(mistats.newsletter.utmString)})},video:{autotrack:!1}};var a=document.domain,c=s.a.pageInfo&&window.mi.pageInfo.getConf("parsely.domain")||a.replace("www.",""),r=document.createElement("script");r.id="parsely-cfg",r["data-parsely-site"]=c,r.src="//cdn.parsely.com/keys/".concat(c,"/p.js"),document.body.appendChild(r)},a=o(347),c=o(59);n(),Object(c.default)(a.a)}},[[969,0]]]);