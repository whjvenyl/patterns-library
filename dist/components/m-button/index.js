var StyleGuideWebComponent=function(){"use strict";var n="@-webkit-keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n@keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n.m-button {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  position: relative;\n  padding: 10px 30px;\n  border-width: 2px;\n  border-style: solid;\n  text-decoration: none;\n  text-transform: uppercase;\n  vertical-align: middle;\n  color: #fff;\n  background: #00008f;\n  border-color: #00008f;\n  border-bottom-color: #00005b; }\n  @media (min-width: 576px) {\n    .m-button {\n      font-size: 14px;\n      line-height: 1.21; } }\n  .m-button:hover, .m-button:active, .m-button:focus {\n    cursor: pointer;\n    text-decoration: none;\n    outline: none; }\n  .m-button:disabled, .m-button[disabled] {\n    cursor: default !important; }\n  a.m-button {\n    display: inline-block; }\n  .m-button:hover, .m-button:active, .m-button:focus {\n    background: #00005b;\n    border-color: #00005b;\n    color: #fff; }\n  .m-button:disabled, .m-button[disabled] {\n    background: #999 !important;\n    border-color: #999 !important; }\n\n.m-button__icon {\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin-top: -2px;\n  margin-bottom: 0;\n  height: calc(100% + 2px);\n  padding: 8px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border-left: 2px solid currentColor; }\n\n.m-button__arrow {\n  width: 13px;\n  height: 13px;\n  display: block;\n  fill: currentColor;\n  position: absolute;\n  top: 50%;\n  margin-top: -6.5px;\n  right: 30px; }\n\n.m-button--red {\n  color: #fff;\n  background: #f07662;\n  border-color: #f07662;\n  border-bottom-color: #ec4d33; }\n  .m-button--red:hover, .m-button--red:active, .m-button--red:focus {\n    background: #ec4d33;\n    border-color: #ec4d33;\n    color: #fff; }\n  .m-button--red:disabled, .m-button--red[disabled] {\n    background: #999 !important;\n    border-color: #999 !important; }\n\n.m-button--white {\n  color: #fff;\n  background: #fff;\n  border-color: #fff;\n  border-bottom-color: #00005b; }\n  .m-button--white:hover, .m-button--white:active, .m-button--white:focus {\n    background: #00005b;\n    border-color: #00005b;\n    color: #fff; }\n  .m-button--white:disabled, .m-button--white[disabled] {\n    background: #999 !important;\n    border-color: #999 !important; }\n\n.m-button--ghost {\n  color: #00008f;\n  background: transparent;\n  border-color: #00008f; }\n  .m-button--ghost:hover, .m-button--ghost:active, .m-button--ghost:focus {\n    color: #00005b;\n    background: transparent;\n    border-color: #00005b; }\n  .m-button--ghost.m-button--red {\n    color: #f07662;\n    background: transparent;\n    border-color: #f07662; }\n    .m-button--ghost.m-button--red:hover, .m-button--ghost.m-button--red:active, .m-button--ghost.m-button--red:focus {\n      color: #ec4d33;\n      background: transparent;\n      border-color: #ec4d33; }\n  .m-button--ghost.m-button--white {\n    color: #fff;\n    background: transparent;\n    border-color: #fff; }\n    .m-button--ghost.m-button--white:hover, .m-button--ghost.m-button--white:active, .m-button--ghost.m-button--white:focus {\n      color: #3b3fd8;\n      background: #fff;\n      border-color: #fff; }\n\n.m-button--gpu {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden; }\n\n.m-button--motion {\n  z-index: 0;\n  overflow: hidden;\n  -webkit-transition: color 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s;\n  transition: color 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s; }\n  .m-button--motion::after {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    z-index: -1;\n    display: block;\n    width: 0.001px;\n    height: 550px;\n    content: '';\n    -webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg);\n            transform: translateX(-50%) translateY(-50%) rotate(45deg);\n    -webkit-transition: width 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s;\n    transition: width 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s; }\n  .m-button--motion:hover::after, .m-button--motion:focus::after {\n    width: 110%; }\n  .m-button--motion::after {\n    background: #00005b; }\n  .m-button--motion:hover, .m-button--motion:focus {\n    background: #00008f;\n    color: #fff; }\n    .m-button--motion:hover::after, .m-button--motion:focus::after {\n      background: #00005b; }\n  .m-button--motion.m-button--red::after {\n    background: #ec4d33; }\n  .m-button--motion.m-button--red:hover, .m-button--motion.m-button--red:focus {\n    background: #f07662;\n    color: #fff; }\n    .m-button--motion.m-button--red:hover::after, .m-button--motion.m-button--red:focus::after {\n      background: #ec4d33; }\n  .m-button--motion.m-button--white::after {\n    background: #fff; }\n  .m-button--motion.m-button--white:hover, .m-button--motion.m-button--white:focus {\n    background: #fff;\n    color: #3b3fd8; }\n    .m-button--motion.m-button--white:hover::after, .m-button--motion.m-button--white:focus::after {\n      background: #fff; }\n  .m-button--motion.m-button--ghost {\n    background: transparent !important; }\n  .m-button--motion:hover .m-button__arrow, .m-button--motion:active .m-button__arrow, .m-button--motion:focus .m-button__arrow {\n    -webkit-animation-duration: 0.6s;\n            animation-duration: 0.6s;\n    -webkit-animation-timing-function: ease;\n            animation-timing-function: ease;\n    -webkit-animation-fill-mode: both;\n            animation-fill-mode: both;\n    -webkit-animation-name: fadeOutRightInLeft;\n            animation-name: fadeOutRightInLeft; }\n\n.m-button--generic-icon {\n  padding-right: 70px;\n  overflow: hidden; }\n\n.m-button--arrow {\n  padding-right: 55px; }\n\n.m-button--x-pad-20 {\n  padding-right: 20px;\n  padding-left: 20px; }\n  .m-button--x-pad-20.m-button--arrow {\n    padding-right: 45px; }\n  .m-button--x-pad-20 .m-button__arrow {\n    right: 20px; }\n\n.m-button--x-pad-40 {\n  padding-right: 40px;\n  padding-left: 40px; }\n  .m-button--x-pad-40.m-button--arrow {\n    padding-right: 65px; }\n  .m-button--x-pad-40 .m-button__arrow {\n    right: 40px; }\n\n.m-button--sm {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  padding-top: 5.5px;\n  padding-bottom: 5.5px;\n  border-width: 1px; }\n  @media (min-width: 576px) {\n    .m-button--sm {\n      font-size: 13px;\n      line-height: 1.38; } }\n  .m-button--sm .m-button__icon {\n    width: 30px;\n    height: 30px;\n    height: calc(100% + 1px);\n    padding: 5px;\n    margin-top: -1px;\n    border-left: 1px solid currentColor; }\n  .m-button--sm.m-button--generic-icon {\n    padding-right: 60px;\n    overflow: hidden; }\n\n.m-button--lg {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  padding-top: 11px;\n  padding-bottom: 11px; }\n  @media (min-width: 576px) {\n    .m-button--lg {\n      font-size: 16px; } }\n  .m-button--lg.m-button--arrow {\n    padding-right: 59px; }\n  .m-button--lg .m-button__icon {\n    width: 50px;\n    height: 50px;\n    height: calc(100% + 2px);\n    padding: 11px; }\n  .m-button--lg .m-button__arrow {\n    width: 17px;\n    height: 17px;\n    margin-top: -8.5px; }\n  .m-button--lg.m-button--generic-icon {\n    padding-right: 80px;\n    overflow: hidden; }\n",f=/\n[\s]+$/,p=/^\n[\s]+/,h=/[\s]+$/,b=/^[\s]+/,m=/[\n\s]+/g,v=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],g=["code","pre","textarea"],_=function t(e,n){if(Array.isArray(n))for(var o,r,i=e.nodeName.toLowerCase(),a=!1,u=0,s=n.length;u<s;u++){var d=n[u];if(Array.isArray(d))t(e,d);else{("number"==typeof d||"boolean"==typeof d||"function"==typeof d||d instanceof Date||d instanceof RegExp)&&(d=d.toString());var c=e.childNodes[e.childNodes.length-1];if("string"==typeof d)a=!0,c&&"#text"===c.nodeName?c.nodeValue+=d:(d=document.createTextNode(d),e.appendChild(d),c=d),u===s-1&&(a=!1,-1===v.indexOf(i)&&-1===g.indexOf(i)?""===(o=c.nodeValue.replace(p,"").replace(h,"").replace(f,"").replace(m," "))?e.removeChild(c):c.nodeValue=o:-1===g.indexOf(i)&&(r=0===u?"":" ",o=c.nodeValue.replace(p,r).replace(b," ").replace(h,"").replace(f,"").replace(m," "),c.nodeValue=o));else if(d&&d.nodeType){a&&(a=!1,-1===v.indexOf(i)&&-1===g.indexOf(i)?""===(o=c.nodeValue.replace(p,"").replace(f,"").replace(m," "))?e.removeChild(c):c.nodeValue=o:-1===g.indexOf(i)&&(o=c.nodeValue.replace(b," ").replace(p,"").replace(f,"").replace(m," "),c.nodeValue=o));var l=d.nodeName;l&&(i=l.toLowerCase()),e.appendChild(d)}}}};var w=function(t){var e,n=document.createElement("div");return n.innerHTML=t,e=n.childNodes,Array.isArray(e)?e:[].slice.call(e)};var t,y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},o=function(){function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}}(),k=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},l=function t(e,n,o){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,n);if(void 0===r){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},r=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},x=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},C=function t(e,n,o,r){var i=Object.getOwnPropertyDescriptor(e,n);if(void 0===i){var a=Object.getPrototypeOf(e);null!==a&&t(a,n,o,r)}else if("value"in i&&i.writable)i.value=o;else{var u=i.set;void 0!==u&&u.call(r,o)}return o},a=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],o=!0,r=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(o=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{!o&&u.return&&u.return()}finally{if(r)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},O=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)},A=(function(t){!function(){var i={}.hasOwnProperty;function a(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var o=void 0===n?"undefined":y(n);if("string"===o||"number"===o)t.push(n);else if(Array.isArray(n))t.push(a.apply(null,n));else if("object"===o)for(var r in n)i.call(n,r)&&n[r]&&t.push(r)}}return t.join(" ")}t.exports?t.exports=a:window.classNames=a}()}(t={exports:{}},t.exports),t.exports);function u(t,e){var n,o,r,i=t.tag,a=void 0===i?"button":i,u=t.color,s=t.href,d=void 0===s?"#":s,c=t.size,l=t.ghost,f=t.classes,p=t.motion,h=t.gpu,b=t.arrow,m=t.icon,v=void 0===m?"":m,g=A("m-button","js-button",f,(k(n={},"m-button--"+u,u),k(n,"m-button--"+c,c),k(n,"m-button--ghost",l),k(n,"m-button--motion",p),k(n,"m-button--gpu",h),k(n,"m-button--arrow",b),k(n,"m-button--generic-icon",v&&!b),n)),y=void 0,x=void 0;return b?y=w('<axa-icon icon="arrow" classes="m-button__arrow"></axa-icon>'):v&&(x=w('<axa-icon icon="'+v+'" classes="m-button__icon"></axa-icon>')),"a"===a.toLowerCase()?((r=document.createElement("a")).setAttribute("href",""+String(d)),r.setAttribute("class",""+String(g)),_(r,["\n      ",e,"\n      ",y||x,"\n    "]),r):((o=document.createElement("button")).setAttribute("type","button"),o.setAttribute("class",""+String(g)),_(o,["\n      ",e,"\n      ",y||x,"\n    "]),o)}var s=1,d=3,N=8;function E(t,e){var n=t.nodeType,o=t.nodeName;n===s&&function(t,e){for(var n=e.attributes,o=t.attributes,r=null,i=null,a=null,u=null,s=o.length-1;0<=s;--s)if(u=o[s],a=u.name,r=u.namespaceURI,i=u.value,r){var d=u.localName;e.getAttributeNS(r,d||a)!==i&&e.setAttributeNS(r,a,i)}else e.hasAttribute(a)?e.getAttribute(a)!==i&&("null"===i||"undefined"===i?e.removeAttribute(a):e.setAttribute(a,i)):e.setAttribute(a,i);for(var c=n.length-1;0<=c;--c)!1!==(u=n[c]).specified&&(a=u.name,(r=u.namespaceURI)?(a=u.localName||a,t.hasAttributeNS(r,a)||e.removeAttributeNS(r,a)):t.hasAttributeNS(null,a)||e.removeAttribute(a))}(t,e),n!==d&&n!==N||e.nodeValue===t.nodeValue||(e.nodeValue=t.nodeValue),"INPUT"===o?function(t,e){var n=t.value,o=e.value;T(t,e,"checked"),T(t,e,"disabled"),n!==o&&(e.setAttribute("value",n),e.value=n);"null"===n&&(e.value="",e.removeAttribute("value"));t.hasAttributeNS(null,"value")?"range"===e.type&&(e.value=n):e.removeAttribute("value")}(t,e):"OPTION"===o?T(t,e,"selected"):"TEXTAREA"===o&&function(t,e){var n=t.value;n!==e.value&&(e.value=n);if(e.firstChild&&e.firstChild.nodeValue!==n){if(""===n&&e.firstChild.nodeValue===e.placeholder)return;e.firstChild.nodeValue=n}}(t,e)}function T(t,e,n){t[n]!==e[n]&&(e[n]=t[n],t[n]?e.setAttribute(n,""):e.removeAttribute(n))}var j=3;function S(t,e){return e?t?t.isSameNode&&t.isSameNode(e)?e:t.tagName!==e.tagName?t:(E(t,e),e.skipChildren&&e.skipChildren()||function(t,e){for(var n=void 0,o=void 0,r=void 0,i=void 0,a=0,u=0;n=e.childNodes[u],o=t.childNodes[u-a],n||o;u++)if(o)if(n)if(P(o,n))(r=S(o,n))!==n&&(e.replaceChild(r,n),a++);else{i=null;for(var s=u;s<e.childNodes.length;s++)if(P(e.childNodes[s],o)){i=e.childNodes[s];break}i?((r=S(o,i))!==i&&a++,e.insertBefore(r,n)):o.id||n.id?(e.insertBefore(o,n),a++):(r=S(o,n))!==n&&(e.replaceChild(r,n),a++)}else e.appendChild(o),a++;else e.removeChild(n),u--}(t,e),e):null:t}function P(t,e){return t.id?t.id===e.id:t.isSameNode?t.isSameNode(e):t.tagName===e.tagName&&(t.type===j&&t.nodeValue===e.nodeValue)}var R=[];var L=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function M(e,n){var t=e;if(e&&n!==e){if(L.test(e))try{t=JSON.parse(e)}catch(t){console.error("Attribute "+n+" has an error:\n"+t+"\n",e)}}else t=!0;return t}var z=function(){try{var t=new window.CustomEvent("test",{cancelable:!0});if(t.preventDefault(),!0!==t.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(t){}return e;function e(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=e.bubbles,o=void 0!==n&&n,r=e.cancelable,i=void 0!==r&&r,a=e.detail,u=void 0===a?void 0:a,s=document.createEvent("CustomEvent");s.initCustomEvent(t,o,i,u);var d=s.preventDefault;return s.preventDefault=function(){d.call(s);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(t){this.defaultPrevented=!0}},s}}();function D(t,e,n){var o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},r=new z(e,i({},o,{detail:n}));return t.dispatchEvent(r)}var V=function(){var t=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var e=Object.defineProperty({},"passive",{get:function(){t=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,e),window.removeEventListener("testPassiveEventSupport",n,e)}return t}();function U(t){for(var r=t.className,i=!1,a=!0,e=arguments.length,n=Array(1<e?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];var u=n.map(function(t){var e=(n=t,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",o)).test(r);var n,o;e?i=!0:a=!1;return{className:t,hasClass:e}});return!(!a&&!i)&&u}var F=/\s+/,I={transitionend:function(){for(var t=document.createElement("div").style,e={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(e),o=n.length,r=void 0,i=0;i<o;++i)if(void 0!==t[r=n[i]])return e[r];return""}()};function q(n,t,o,r){var e=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},i=e.capture,a=void 0!==i&&i,u=e.passive,s=void 0===u||u;if(I[t]&&(t=I[t]),!n||!t)return null;var d=void 0===o?"undefined":y(o),c=o&&"string"===d;if("function"===d){if(r){var l=r;a=l.capture,s=l.passive}r=o}for(var f=V?{capture:a,passive:s}:a,p=c?function(t){var e=t.target;for(;!U(e,o)&&e!==n;)e=e.parentNode;if(e!==n)return r(t,e)}:r,h=t.split(F),b=h.length,m=0;m<b;++m)n.addEventListener(h[m],p,f);return function t(){for(var e=0;e<b;++e)n.removeEventListener(h[e],p,f);!function(t,e){if(!t)return;for(var n=Object.keys(t),o=n.length,r=0;r<o;++r){var i=n[r];if(t[i]===e)return delete t[i]}}(this,t)}}function H(o){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},e=t.leading,i=void 0!==e&&e,n=t.trailing,a=void 0===n||n,u=t.maxWait,s=void 0!==u&&u,d=void 0,c=void 0,l=void 0,f=void 0,p=!1,h=r!==s,b=!1!==s;function m(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return d=e,h&&(c&&clearTimeout(c),c=setTimeout(v,r)),b&&!l&&(l=setTimeout(g,s)),i&&!p&&(p=!0,f=o.apply(void 0,O(d))),f}return m.flush=function(){(c||l)&&(f=o.apply(void 0,O(d)));return x(),f},m.cancel=x,m;function v(){l&&clearTimeout(l),y()}function g(){c&&clearTimeout(c),y()}function y(){a&&(f=o.apply(void 0,O(d))),l=c=null,p=!1}function x(){c&&(clearTimeout(c),c=null),l&&(clearTimeout(l),l=null),d=void 0,p=!1}}var W={};function $(t,e){var n=q(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,t,e);W[t]||(W[t]={count:0});var o,r=W[t];return r.count++,r.onsubscribe||(r.onsubscribe=H((o=t,function(){D(document,"pubsub/onsubscribe",o),D(document,"pubsub/onsubscribe/"+o,o),W[o]&&delete W[o].unsubscribe}),100)),r.onsubscribe(),function(){r.count--,n.call(this),r.count<=0&&delete W[t]}}q(document,"pubsub/onsubscribe",function(t){var e=t.detail;W[e]||(W[e]={count:0});var n=W[e],o=n.queue;Array.isArray(o)&&(o.forEach(function(t){var e=a(t,3),n=e[0],o=e[1],r=e[2];D(r,n,o)}),delete n.queue)});var e=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,G=/[-_]+/g;function K(t){return t.replace(e,B)}function B(t,e){return 0==+t||G.test(t)?"":0===e?t.toLowerCase():t.toUpperCase()}var X=/[A-Z]/g;function Y(t,e,n){var o=t.toLowerCase(),r=n.charAt(e+1);return 0===e||r.toUpperCase()===r?o:"-"+o}var Z=function(t,e){return t===e},J=function(t){function s(t,e){var n;c(this,s);for(var o="Property >>>"+t+"<<< exists at "+e.nodeName+"#"+e._id+" and evaluates to -> "+e[t],r=arguments.length,i=Array(2<r?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];var u=x(this,(n=s.__proto__||Object.getPrototypeOf(s)).call.apply(n,[this,o].concat(i)));return Error.captureStackTrace&&Error.captureStackTrace(u,s),u.name="PropertyExistsException",u}return r(s,t),s}(Error);function Q(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(Q.prototype,HTMLElement.prototype),Object.setPrototypeOf(Q,HTMLElement);var tt,et="throwed",nt=["title","checked","disabled"],ot={},rt=function(t){return t in ot||(ot[t]=0),++ot[t]},it=((tt=function(){var t;return(t=console).log.apply(t,arguments)},function(){var r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:Z;return function(){for(var t=arguments.length,o=Array(t),e=0;e<t;e++)o[e]=arguments[e];return function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(){return r.apply(void 0,[].concat(o,e))?tt.apply(void 0,arguments):void 0}}}})()(!0),function(t){function d(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",e=arguments[1];c(this,d);var s=x(this,(d.__proto__||Object.getPrototypeOf(d)).call(this));s._reduceProps=function(t,e){var n=t.props,o=t.shouldUpdate,r=s._hasKeys[e];if(-1===nt.indexOf(e)&&r)throw new J(e,s);var i="_"+e,a=n[e],u=s[i];return o||s.shouldUpdateCallback(a,u)?(s[i]=a,s._props[e]=a,r&&C(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),e,a,s),{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},s._makeContextReady=function(){var t=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;s.contextNode&&(clearTimeout(s.timeoutId),s.timeoutId=setTimeout(function(){s.contextCallback(s.contextNode,t)},10)),s.unContextEnabled&&s.unContextEnabled(),s.unContextEnabled=$("context/enabled",s._makeContextReady)},s._initialise(t,e),s._id=rt(s.nodeName),s._props={},s._hasKeys={},s.reRender=H(function(){return s.render()},50);var n=s.constructor.observedAttributes;return Array.isArray(n)&&n.forEach(function(t){var n,o=K(t),r=o in s;if(-1===nt.indexOf(o)&&r)throw new J(o,s);s._hasKeys[o]=r,Object.defineProperty(s,o,n={get:function(){return this["_"+o]},set:function(t){var e="_"+o;this.shouldUpdateCallback(this[e],t)&&(this[e]=t,this._props[o]=t,r&&C(n.__proto__||Object.getPrototypeOf(n),o,t,this),this._isConnected&&this._hasRendered&&this.reRender())}})}),s}return r(d,Q),o(d,[{key:"_initialise",value:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;this._styles=t,this._template=e,this._hasTemplate=!!e,this._hasRendered=!1,this._isConnected=!1}},{key:"connectedCallback",value:function(){var r=this;if(!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(t)&&t.forEach(function(t){var e=K(t);if(r.hasAttribute(t)){var n=function(t,e){if("function"==typeof t.hasAttribute&&!t.hasAttribute(e))return!1;var n=t.value;return e?n=t.getAttribute(e):e=t.name,n=M(n,e)}(r,t),o=r._hasKeys[e];r["_"+e]=n,r._props[e]=n,o&&C(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),e,n,r)}})}this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"attributeChangedCallback",value:function(t,e,n){this.shouldUpdateCallback(n,e)&&(this[K(t)]=M(n))}},{key:"batchProps",value:function(t){var e=this.constructor.observedAttributes,n=void 0===e?[]:e;Object.keys(t).filter(function(t){return-1<n.indexOf(t.replace(X,Y))}).reduce(this._reduceProps,{props:t,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.render()}},{key:"shouldUpdateCallback",value:function(t,e){return t!==e}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled(),this._isConnected=!1}},{key:"_appendStyles",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var e=document.createElement("style"),n=document.createTextNode(this._styles);e.appendChild(n),t.insertAdjacentElement?t.insertAdjacentElement("afterbegin",e):t.appendChild(e)}}},{key:"render",value:function(){var n=this,t=!this._hasRendered;if(this.willRenderCallback(t),this._hasTemplate){var e=this._template;try{if(t){for(var o=document.createDocumentFragment(),r=[];this.firstChild;)r.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=r,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(t){var e=t.cloneNode(!0);n.childrenFragment.appendChild(e)});var i=e(this._props,this.childrenFragment),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(t){a.appendChild(t)});else if(i){if("string"==typeof i){var u=new Error(et);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c#"+this._id+" does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+u.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),u}a.appendChild(i)}if(t)l(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"appendChild",this).call(this,a);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(a),this._isMorphing=!0,function(t,e){if("object"!==(void 0===t?"undefined":y(t)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===e?"undefined":y(e)))throw new Error("componentMorph: newTree should be an object");S(e,t)}(this,s),function(){for(var t=void 0;t=R.pop();)delete t.isSameNode;R=[]}(),this._isMorphing=!1}}catch(u){u.message!==et&&console.error("\n%cWeb Component %c"+this.nodeName+"%c#"+this._id+" has an error while loading its template:\n"+u+"\n\nStack Trace: "+u.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}this._hasRendered=!0,this.didRenderCallback(t)}},{key:"willRenderCallback",value:function(t){}},{key:"didRenderCallback",value:function(t){}},{key:"appendChild",value:function(t){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(t),this.render()):l(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"appendChild",this).call(this,t)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"enableContext",value:function(){var t=this.nodeName.toLowerCase();this.__isContext=!0,function(t,e){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;W[t]||(W[t]={count:0,queue:[]});var o=W[t].queue;Array.isArray(o)?o.push([t,e,n]):D(n,t,e)}("context/enabled",this.__contextName=t)}},{key:"selectContext",value:function(t){this.__selectedContext=t&&t.toLowerCase()}},{key:"innerText",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createTextNode(t);this._lightDOMRefs=[e],this.render()}else C(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"innerText",t,this)}},{key:"textContent",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createTextNode(t);this._lightDOMRefs=[e],this.render()}else C(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"textContent",t,this)}},{key:"innerHTML",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createElement("div");e.innerHTML=t,this._lightDOMRefs=Array.from(e.children),this.render()}else C(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"innerHTML",t,this)}},{key:"contextNode",get:function(){for(var t=this.__selectedContext,e=this.parentNode;e&&(!e.__isContext||t&&t!==e.__contextName);)e=e.parentNode;return!(!e||!e.__isContext)&&e}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})}}]),d}()),at={},ut=function(t){function e(){return c(this,e),x(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return r(e,it),o(e,[{key:"_appendStyles",value:function(){e.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:it.uuidv4();if(t&&!at[t]){var n=document.createElement("style"),o=document.createTextNode(t);n.appendChild(o),n.setAttribute("data-c-name",e.toLowerCase()),document.querySelector("head").appendChild(n),at[t]=!0}}}]),e}(),st=function(){function n(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};c(this,n),this.wcNode=t,this.options=i({},n.DEFAULTS,e),this.handleClick=this.handleClick.bind(this),this.init()}return o(n,[{key:"init",value:function(){this.button=this.wcNode.querySelector(this.options.button),this.on()}},{key:"on",value:function(){this.off(),this.unClick=q(this.button,"click",this.handleClick,{passive:!1})}},{key:"off",value:function(){this.unClick&&this.unClick()}},{key:"handleClick",value:function(t){D(this.wcNode,"axa-click",null,{bubbles:!0,cancelable:!0,composed:!0})||t.preventDefault()}},{key:"destroy",value:function(){this.off(),this.button&&delete this.button,this.wcNode&&delete this.wcNode,this.options&&delete this.options,delete this.handleClick}}]),n}();st.DEFAULTS={button:".js-button"};var dt,ct,lt,ft=function(t){function e(){return c(this,e),x(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,u))}return r(e,ut),o(e,null,[{key:"observedAttributes",get:function(){return["arrow","classes","color","ghost","motion","size","tag","href","icon"]}}]),o(e,[{key:"didRenderCallback",value:function(){this.button&&this.button.destroy(),this.button=new st(this)}},{key:"disconnectedCallback",value:function(){this.button&&(this.button.destroy(),delete this.button)}}]),e}();return dt=function(){window.customElements.define("axa-button",ft),ut.appendGlobalStyles(n)},ct=0,lt=function(){if(0===ct)try{dt.apply(void 0,arguments),ct+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(t){}},document.addEventListener("DOMContentLoaded",lt,!1),document.addEventListener("WebComponentsReady",lt,!1),ft}();
