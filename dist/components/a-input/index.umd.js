!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";function e(e,t){return e(t={exports:{}},t.exports),t.exports}var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}})()&&Object.assign;var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},c=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},p=function e(t,n,o){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,o)}if("value"in i)return i.value;var a=i.get;return void 0!==a?a.call(o):void 0},d=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},a=function(e,t){var n={};for(var o in e)0<=t.indexOf(o)||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},f=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},i=function e(t,n,o,i){var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,o,i)}else if("value"in r&&r.writable)r.value=o;else{var s=r.set;void 0!==s&&s.call(i,o)}return o},u=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,i=!1,r=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){i=!0,r=e}finally{try{!o&&s.return&&s.return()}finally{if(i)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},O=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function h(){}var v=e(function(e){e.exports=function(){function e(e,t,n,o,i,r){if(r!==s){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=h,n.PropTypes=n}()}),y=0;function b(e,t){var n=e[t];return"function"==typeof n&&(e[t]=function(t){function n(){return t.apply(void 0,arguments)}return 0===y&&(y++,Object.keys(t).map(function(e){return n[e]=t[e],e}).reduce(b,n),y--),n}(n)),e}var g=v;Object.keys(g).reduce(b,g);var m,C,k,x,w=g.oneOf(["left","center","right"]),T=g.oneOf(["left","right"]),A=(g.oneOf(["top","bottom"]),g.oneOf(["up","down"])),E=g.oneOf(["ok","pending","error","unknown"]),j=g.oneOf(["row","col","rowgroup","colgroup","auto"]),N=g.oneOfType([g.string,g.number]),P={text:N,value:g.any,rowspan:N,colspan:N,scope:j,align:w,dense:g.bool},S={float:T,strong:g.bool,bold:g.bool},R=g.oneOfType([g.string,g.number]),L=g.oneOfType([R,g.shape(r({},P,{sort:A,sortActive:g.bool}))]),I=g.oneOfType([R,g.shape(r({},P,S,{action:g.bool,state:E}))]),D=g.oneOfType([R,g.shape(r({},P,S))]),U=g.oneOfType([g.arrayOf(L),g.shape({cells:g.arrayOf(L)})]),M=g.oneOfType([g.arrayOf(I),g.shape({cells:g.arrayOf(I),action:g.bool})]),V=g.oneOfType([g.arrayOf(D),g.shape({cells:g.arrayOf(D)})]),q=(g.oneOfType([U,g.arrayOf(U)]),g.oneOfType([M,g.arrayOf(M)]),g.oneOfType([V,g.arrayOf(V)]),e(function(e){!function(){var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=void 0===n?"undefined":_(n);if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n))e.push(a.apply(null,n));else if("object"===o)for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?e.exports=a:window.classNames=a}()})),B=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}},F={},K=(m=Object,C=m.getPrototypeOf||function(e){return e.__proto__},k=m.setPrototypeOf||function(e,t){return e.__proto__=t,e},x="object"===("undefined"==typeof Reflect?"undefined":_(Reflect))?Reflect.construct:function(e,t,n){var o,i=[null];return i.push.apply(i,t),o=e.bind.apply(e,i),k(new o,n.prototype)},function(e){var t=C(e);return k(e,k(function(){return x(t,arguments,C(this).constructor)},t))}),H=function(n){return K(function(e){function t(){return l(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d(t,n),c(t,[{key:"init",value:function(){var e;this._id=((e=this.nodeName)in F||(F[e]=0),++F[e]),this._initialised=!0}},{key:"connectedCallback",value:function(){this._initialised||this.init()}},{key:"attributeChangedCallback",value:function(){this._initialised||this.init()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}())},z={},W=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,i=t.cancelable,r=void 0!==i&&i,a=t.detail,s=void 0===a?void 0:a,u=document.createEvent("CustomEvent");u.initCustomEvent(e,o,r,s);var l=u.preventDefault;return u.preventDefault=function(){l.call(u);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},u}}();function $(e,t,n){var o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},i=new W(t,r({},o,{detail:n}));return e.dispatchEvent(i)}var G=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function J(e){for(var i=e.className,r=!1,a=!0,t=arguments.length,n=Array(1<t?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var s=n.map(function(e){var t=(n=e,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",o)).test(i);var n,o;t?r=!0:a=!1;return{className:e,hasClass:t}});return!(!a&&!r)&&s}var Y=/\s+/,Z={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,i=void 0,r=0;r<o;++r)if(void 0!==e[i=n[r]])return t[i];return""}()};function X(n,e,o,i){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},r=t.capture,a=void 0!==r&&r,s=t.passive,u=void 0===s||s;if(Z[e]&&(e=Z[e]),!n||!e)return null;var l=void 0===o?"undefined":_(o),c=o&&"string"===l;if("function"===l){if(i){var p=i;a=p.capture,u=p.passive}i=o}for(var d=G?{capture:a,passive:u}:a,f=c?function(e){var t=e.target;for(;!J(t,o)&&t!==n;)t=t.parentNode;if(t!==n)return i(e,t)}:i,h=e.split(Y),v=h.length,y=0;y<v;++y)n.addEventListener(h[y],f,d);return function e(){for(var t=0;t<v;++t)n.removeEventListener(h[t],f,d);!function(e,t){if(!e)return;for(var n=Object.keys(e),o=n.length,i=0;i<o;++i){var r=n[i];if(e[r]===t)return delete e[r]}}(this,e)}}function Q(o){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,r=void 0!==t&&t,n=e.trailing,a=void 0===n||n,s=e.maxWait,u=void 0!==s&&s,l=void 0,c=void 0,p=void 0,d=void 0,f=!1,h=i!==u,v=!1!==u;function y(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return l=t,h&&(c&&clearTimeout(c),c=setTimeout(_,i)),v&&!p&&(p=setTimeout(b,u)),r&&!f&&(f=!0,d=o.apply(void 0,O(l))),d}return y.flush=function(){(c||p)&&(d=o.apply(void 0,O(l)));return m(),d},y.cancel=m,y;function _(){p&&clearTimeout(p),g()}function b(){c&&clearTimeout(c),g()}function g(){a&&(d=o.apply(void 0,O(l))),p=c=null,f=!1}function m(){c&&(clearTimeout(c),c=null),p&&(clearTimeout(p),p=null),l=void 0,f=!1}}window.__subscriptions=window.__subscriptions||{};var ee=window.__subscriptions;function te(e,t){var n=X(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);ee[e]||(ee[e]={count:0});var o,i=ee[e];return i.count++,i.onsubscribe||(i.onsubscribe=Q((o=e,function(){$(document,"pubsub/onsubscribe",o),$(document,"pubsub/onsubscribe/"+o,o),ee[o]&&delete ee[o].unsubscribe}),100)),i.onsubscribe(),function(){i.count--,n.call(this),i.count<=0&&delete ee[e]}}X(document,"pubsub/onsubscribe",function(e){var t=e.detail;ee[t]||(ee[t]={count:0});var n=ee[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=u(e,3),n=t[0],o=t[1],i=t[2];$(i,n,o)}),delete n.queue)});var ne,oe=function(e,t){return e===t},ie=((ne=function(){var e;return(e=console).log.apply(e,arguments)},function(){var i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:oe;return function(){for(var e=arguments.length,o=Array(e),t=0;t<e;t++)o[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return i.apply(void 0,[].concat(o,t))?ne.apply(void 0,arguments):void 0}}}})()(!0),[]);var re=1,ae=3,se=8;function ue(e,t){var n=e.nodeType,o=e.nodeName;n===re&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),o=t.constructor.observedAttributes,i=o&&Array.isArray(o)&&o.length,r=function(e){return n&&i&&-1===o.indexOf(e)},a=t.attributes,s=e.attributes,u=null,l=null,c=null,p=null,d=s.length-1;0<=d;--d)if(p=s[d],c=p.name,u=p.namespaceURI,l=p.value,!r(c))if(u){var f=p.localName;t.getAttributeNS(u,f||c)!==l&&t.setAttributeNS(u,c,l)}else t.hasAttribute(c)?t.getAttribute(c)!==l&&("null"===l||"undefined"===l?t.removeAttribute(c):t.setAttribute(c,l)):t.setAttribute(c,l);for(var h=a.length-1;0<=h;--h)if(!1!==(p=a[h]).specified){if(c=p.name,u=p.namespaceURI,r(c))continue;u?(c=p.localName||c,e.hasAttributeNS(u,c)||t.removeAttributeNS(u,c)):e.hasAttributeNS(null,c)||t.removeAttribute(c)}}(e,t),n!==ae&&n!==se||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===o?function(e,t){var n=e.value,o=t.value;le(e,t,"checked"),le(e,t,"disabled"),n!==o&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===o?le(e,t,"selected"):"TEXTAREA"===o&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function le(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var ce=3;function pe(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(ue(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,o=void 0,i=void 0,r=void 0,a=0,s=0;n=t.childNodes[s],o=e.childNodes[s-a],n||o;s++)if(o)if(n)if(de(o,n))(i=pe(o,n))!==n&&(t.replaceChild(i,n),a++);else{r=null;for(var u=s;u<t.childNodes.length;u++)if(de(t.childNodes[u],o)){r=t.childNodes[u];break}r?((i=pe(o,r))!==r&&a++,t.insertBefore(i,n)):o.id||n.id?(t.insertBefore(o,n),a++):(i=pe(o,n))!==n&&(t.replaceChild(i,n),a++)}else t.appendChild(o),a++;else t.removeChild(n),s--}(e,t),t):null:e}function de(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===ce&&e.nodeValue===t.nodeValue)}var fe,he,ve,ye,_e=(fe=Object,he=fe.getPrototypeOf||function(e){return e.__proto__},ve=fe.setPrototypeOf||function(e,t){return e.__proto__=t,e},ye="object"===("undefined"==typeof Reflect?"undefined":_(Reflect))?Reflect.construct:function(e,t,n){var o,i=[null];return i.push.apply(i,t),o=e.bind.apply(e,i),ve(new o,n.prototype)},function(e){var t=he(e);return ve(e,ve(function(){return ye(t,arguments,he(this).constructor)},t))})(function(e){function s(e){var t;l(this,s);for(var n="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",o=arguments.length,i=Array(1<o?o-1:0),r=1;r<o;r++)i[r-1]=arguments[r];var a=f(this,(t=s.__proto__||Object.getPrototypeOf(s)).call.apply(t,[this,n].concat(i)));return Error.captureStackTrace&&Error.captureStackTrace(a,s),a.name="TemplateNoStringReturnException",a}return d(s,e),s}(Error)),be=!!document.createDocumentFragment().children,ge=/[A-Z]/g;function me(e){return e.replace(ge,Oe)}function Oe(e,t,n){var o=e.toLowerCase(),i=n.charAt(t+1);return 0===t||i.toUpperCase()===i?o:"-"+o}var Ce=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function ke(t,n,e){var o=t;if(e)return function(t,n,e){var o=t;switch(e){case g.string:case g.string.isRequired:return t;case g.bool:case g.bool.isRequired:if(!t||n===t)return!0;case g.number:case g.number.isRequired:case g.object:case g.object.isRequired:case g.array:case g.array.isRequired:default:if(Ce.test(t))try{o=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}return o}(t,n,e);if(t&&n!==t){if(Ce.test(t))try{o=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else o=!0;return o}var xe=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,we=/[-_]+/g;function Te(e){return e.replace(xe,Ae)}function Ae(e,t){return 0==+e||we.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function Ee(e,t,n){var o=1===e.nodeType,i=e.constructor.propTypes,r=n;!n&&o&&(r=(void 0===i?{}:i)[Te(t)]);if(o&&!e.hasAttribute(t))return r!==g.bool&&r!==g.bool.isRequired&&void 0;var a=e.value;return t?a=e.getAttribute(t):t=e.name,a=ke(a,t,r)}var je=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function Ne(n,e,o){var t,i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},r=i.capture,a=void 0===r||r,s=i.passive,u=void 0===s||s,l=n.ownerDocument.documentElement,c=X(l,e,function(e){var t=e.target;if(!n.contains(t)&&n!==t)return o(e)},{capture:a,passive:u});return t=l,je&&(t.style.cursor="pointer"),c}var Pe=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=t.length,i={},r=0;r<o;++r){var a=t[r];i[a.toUpperCase()]=a}return i}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize"),Se="axa-click",Re="axa-load",Le="axa-change",Ie="data-prevent-default";(function(){function o(e){var r=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};l(this,o),this._handleClick=function(e,t){r.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var n=!r._lastToggleNode,o=t!==r._lastToggleNode,i=!n&&!o;n?(r._notify(Pe.ENTER,t),r._onInteractive()):o&&r._notify(Pe.MOVE,t,r._lastToggleNode),r._lastToggleNode=t,i&&r._options.sameClickClose&&r._close()},this._handleClose=function(e,t){r.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),r._close()},this._handleKeyUp=function(e){(e.key===Pe.ESCAPE||e.key===Pe.ESC||27===e.keyCode)&&(e.preventDefault(),r._close())},this._init(e,t)}return c(o,[{key:"_init",value:function(e,t){e&&(this._wcNode=e),t&&(this._options=r({},o.DEFAULTS,t));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=X(this._container,Pe.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=X(this._container,Pe.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=Ne(this._container,Pe.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=X(this._container.ownerDocument,Pe.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(Ie)?Ee(e,Ie):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(Pe.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),o}()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var De=B(function(n){var e,t;return t=e=function(e){function t(){return l(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d(t,n),t}(),e.version="2.0.1-beta.224",t},function(t){return function(e){function a(){var e,t,n;l(this,a);for(var o=arguments.length,i=Array(o),r=0;r<o;r++)i[r]=arguments[r];return(t=n=f(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(i))))._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;n.contextNode&&(clearTimeout(n.timeoutId),n.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode,e)},10)),n.unContextEnabled&&n.unContextEnabled(),n.unContextEnabled=te("context/available",n._makeContextReady)},f(n,t)}return d(a,t),c(a,[{key:"connectedCallback",value:function(){p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this)&&p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this)&&p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;ee[e]||(ee[e]={count:0,queue:[]});var o=ee[e].queue;Array.isArray(o)?o.push([e,t,n]):$(n,e,t)}("context/available",this.__contextName=e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),a}()},function(t){return function(e){function n(){return l(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return d(n,t),c(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):p(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else i(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else i(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else i(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(t){return function(e){function r(){var e,t,s;l(this,r);for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=s=f(this,(e=r.__proto__||Object.getPrototypeOf(r)).call.apply(e,[this].concat(o))))._reduceProps=function(e,t){var n=e.props,o=e.shouldUpdate,i="_"+t,r=n[t],a=s[i];return o||s.shouldUpdateCallback(r,a)?(s.props[t]=r,{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},f(s,t)}return d(r,t),c(r,[{key:"init",value:function(e){var t=this;p(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"init",this).call(this,e),this._isConnected=!1,this.props={},this.updatedDebounced=Q(function(){return t.updated&&t.updated()},50);var n=this.constructor.observedAttributes;Array.isArray(n)&&n.forEach(function(e){Te(e)})}},{key:"connectedCallback",value:function(){var o=this;if(p(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this)&&p(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(e)){var i=this.constructor.propTypes;e.forEach(function(e){var t=Te(e);if(o.hasAttribute(e)){var n=Ee(o,e,i[t]);o.props[t]=n}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(p(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"attributeChangedCallback",this)&&p(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"attributeChangedCallback",this).call(this,e,t,n),this.shouldUpdateCallback(n,t)){var o=Te(e);if(this.hasAttribute(e)){var i=this.constructor.propTypes;this.props[o]=ke(n,e,i[o])}else this.props[o]=null;this.checkPropTypes(),"value"===e&&null!==n&&$(this,Le,n,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t,o=Object.keys(e).filter(function(e){return-1<n.indexOf(me(e))}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),o&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName;t&&g.checkPropTypes(t,this.props,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}],[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(me)}}]),r}()},function(t){return function(e){function u(){return l(this,u),f(this,(u.__proto__||Object.getPrototypeOf(u)).apply(this,arguments))}return d(u,t),c(u,[{key:"init",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.template,n=a(e,["template"]);p(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"init",this).call(this,n),this._template=t,this._hasTemplate=!!t,this._hasRendered=!1,this.updated=this.render}},{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var o=document.createDocumentFragment(),i=[];this.firstChild;)i.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=i,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});be||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var r=t(this.props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(r))r.forEach(function(e){a.appendChild(e)});else if(r){if("string"==typeof r)throw new _e(this);a.appendChild(r)}if(e)p(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"appendChild",this).call(this,a);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":_(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":_(t)))throw new Error("componentMorph: newTree should be an object");pe(t,e)}(this,s),function(){for(var e=void 0;e=ie.pop();)delete e.isSameNode;ie=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),u}()},function(t){return function(e){function i(){return l(this,i),f(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}return d(i,t),c(i,[{key:"init",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,n=void 0===t?"":t,o=a(e,["styles"]);p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"init",this).call(this,o),this._styles=n}},{key:"connectedCallback",value:function(){p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),i}()}),Ue=B(De,H),Me=B(De,function(i){return function(e){function a(){var e,t,n;l(this,a);for(var o=arguments.length,i=Array(o),r=0;r<o;r++)i[r]=arguments[r];return(t=n=f(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(i))))._appendStyles=function(){a.appendGlobalStyles(n._styles,n.nodeName)},f(n,t)}return d(a,i),c(a,null,[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:i.uuidv4();if(e&&!z[t]){var n=document.createElement("style"),o=document.createTextNode(e);z[t]=!0,n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),a}()},H)(HTMLElement);var Ve=/\n[\s]+$/,qe=/^\n[\s]+/,Be=/[\s]+$/,Fe=/^[\s]+/,Ke=/[\n\s]+/g,He=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],ze=["code","pre","textarea"],We=function e(t,n){if(Array.isArray(n))for(var o,i,r=t.nodeName.toLowerCase(),a=!1,s=0,u=n.length;s<u;s++){var l=n[s];if(Array.isArray(l))e(t,l);else{("number"==typeof l||"boolean"==typeof l||"function"==typeof l||l instanceof Date||l instanceof RegExp)&&(l=l.toString());var c=t.childNodes[t.childNodes.length-1];if("string"==typeof l)a=!0,c&&"#text"===c.nodeName?c.nodeValue+=l:(l=document.createTextNode(l),t.appendChild(l),c=l),s===u-1&&(a=!1,-1===He.indexOf(r)&&-1===ze.indexOf(r)?""===(o=c.nodeValue.replace(qe,"").replace(Be,"").replace(Ve,"").replace(Ke," "))?t.removeChild(c):c.nodeValue=o:-1===ze.indexOf(r)&&(i=0===s?"":" ",o=c.nodeValue.replace(qe,i).replace(Fe," ").replace(Be,"").replace(Ve,"").replace(Ke," "),c.nodeValue=o));else if(l&&l.nodeType){a&&(a=!1,-1===He.indexOf(r)&&-1===ze.indexOf(r)?""===(o=c.nodeValue.replace(qe,"").replace(Ve,"").replace(Ke," "))?t.removeChild(c):c.nodeValue=o:-1===ze.indexOf(r)&&(o=c.nodeValue.replace(Fe," ").replace(qe,"").replace(Ve,"").replace(Ke," "),c.nodeValue=o));var p=l.nodeName;p&&(r=p.toLowerCase()),t.appendChild(l)}}}},$e=Ue(HTMLElement);function Ge(e){var t,n,o,i,r,a=e.inputId,s=void 0===a?$e.uuidv4():a,u=e.type,l=void 0===u?"text":u,c=e.placeholder,p=void 0===c?"":c,d=e.value,f=void 0===d?"":d,h=e.name,v=e.disabled,y=void 0!==v&&v,_=e.icon;return(o=document.createElement("div")).setAttribute("class","a-input__wrapper"),We(o,["\n      ",(t=document.createElement("input"),t.setAttribute("id",""+String(s)),t.setAttribute("name",""+String(h)),t.setAttribute("type",""+String(l)),t.setAttribute("placeholder",""+String(p)),t.setAttribute("value",""+String(f)),y&&t.setAttribute("disabled","disabled"),t.setAttribute("class","a-input__input js-input__input"),t),"\n          ",(n=document.createElement("span"),n.setAttribute("class","a-input__valid-icon"),n),"\n          ",_?(r=document.createElement("button"),r.setAttribute("type","button"),r.setAttribute("class","a-input__icon__button js-input__icon__button"),We(r,["\n            ",(i=document.createElement("axa-icon"),i.setAttribute("classes","a-input__icon"),i.setAttribute("icon",""+String(_)),i),"\n          "]),r):"","\n    "]),o}var Je,Ye,Ze,Xe=function(){function t(e){l(this,t),this.wcNode=e}return c(t,[{key:"init",value:function(){this.iconButton=this.wcNode.querySelector(".js-input__icon__button"),this.inputfield=this.wcNode.querySelector(".js-input__input"),this.listenToButtons(),this.listenToInputChange(),$(this.inputfield,Re,this.inputfield.value,{bubbles:!0,cancelable:!0,composed:!0})}},{key:"listenToButtons",value:function(){var e=this;this.offListenToButtons(),this.unIconButtonListenerEnd=X(this.iconButton,Pe.CLICK,function(){$(e.iconButton,Se,e.inputfield.value,{bubbles:!0,cancelable:!0,composed:!0})})}},{key:"offListenToButtons",value:function(){this.unIconButtonListenerEnd&&this.unIconButtonListenerEnd()}},{key:"listenToInputChange",value:function(){var e=this;this.offListenToInputChange(),this.unInputListenerEnd=X(this.inputfield,Pe.INPUT,function(){$(e.inputfield,Le,e.inputfield.value,{bubbles:!0,cancelable:!0,composed:!0})})}},{key:"offListenToInputChange",value:function(){this.unInputListenerEnd&&this.unInputListenerEnd()}},{key:"destroy",value:function(){this.offListenToInputChange(),this.offListenToButtons()}}]),t}(),Qe=function(e){function t(){return l(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d(t,Me),c(t,[{key:"init",value:function(){p(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"init",this).call(this,{styles:'.a-input {\n  display: block;\n  width: 100%; }\n  .a-input:not(:first-child) {\n    margin-top: 5px; }\n    @media (min-width: 768px) {\n      .a-input:not(:first-child) {\n        margin-top: 10px; } }\n\n.a-input__wrapper {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%; }\n\n.a-input__input {\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  height: 40px;\n  padding: 0 20px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  color: #333;\n  background: #fff;\n  outline: none;\n  border: 1px solid #ccc;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none; }\n  @media (min-width: 576px) {\n    .a-input__input {\n      font-size: 14px;\n      line-height: 1.21; } }\n  .a-input__input::-webkit-input-placeholder {\n    color: #999; }\n  .a-input__input:-ms-input-placeholder {\n    color: #999; }\n  .a-input__input::-ms-input-placeholder {\n    color: #999; }\n  .a-input__input::placeholder {\n    color: #999; }\n  .a-input__input:hover:not(:disabled):not(.a-input--error), .a-input__input:active:not(:disabled):not(.a-input--error), .a-input__input:focus:not(:disabled):not(.a-input--error) {\n    border-color: #00008f; }\n  .a-input__input:disabled {\n    background-color: #f5f5f5; }\n\n.a-input--error .a-input__input {\n  border-color: #c91432; }\n\n.a-input--valid .a-input__valid-icon {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n\n.a-input--inline {\n  display: inline-block;\n  width: auto;\n  vertical-align: middle; }\n  .a-input--inline + .a-input--inline {\n    margin-left: 10px; }\n    @media (min-width: 768px) {\n      .a-input--inline + .a-input--inline {\n        margin-left: 15px; } }\n  .a-input--inline .a-input__wrapper {\n    position: relative;\n    display: inline-block;\n    width: auto;\n    vertical-align: middle; }\n\n.a-input__valid-icon {\n  display: none;\n  width: 48px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  -ms-flex-negative: 0;\n      flex-shrink: 0; }\n  .a-input__valid-icon::before {\n    display: block;\n    width: 8px;\n    height: 16px;\n    content: "";\n    border: solid #1cc54e;\n    border-width: 0 2px 2px 0;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg); }\n\n.a-input__icon__button {\n  position: absolute;\n  right: 5px;\n  top: 5px;\n  height: 30px;\n  width: 30px;\n  border: none;\n  outline: none; }\n\n.a-input__icon__button:hover {\n  cursor: pointer; }\n\n.a-input__icon {\n  height: 16px;\n  width: 14px;\n  fill: #00008f; }\n',template:Ge}),this.input=new Xe(this)}},{key:"willRenderCallback",value:function(){var e=this.props,t=e.valid,n=e.inline,o=e.error,i=e.disabled;this.className=q("a-input",this.initialClassName,{"a-input--valid":t,"a-input--inline":n,"a-input--error":o,"a-input--disabled":i})}},{key:"didRenderCallback",value:function(){this.input.init()}},{key:"disconnectedCallback",value:function(){this.input.destroy()}}]),t}();return Qe.tagName="axa-input",Qe.propTypes={valid:g.bool,inline:g.bool,error:g.string,disabled:g.bool,inputId:g.string,type:g.string,placeholder:g.string,value:g.string,name:g.string,icon:g.string},Je=Qe.tagName,Ye=Qe,customElements.get(Je)||customElements.define(Je,Ye,Ze),Qe});
