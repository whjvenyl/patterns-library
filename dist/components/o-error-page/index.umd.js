!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";function e(e,t){return e(t={exports:{}},t.exports),t.exports}var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}})()&&Object.assign;var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},u=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},d=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},a=function(e,t){var n={};for(var r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},f=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},o=function e(t,n,r,o){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,r,o)}else if("value"in i&&i.writable)i.value=r;else{var s=i.set;void 0!==s&&s.call(o,r)}return r},c=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},x=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function h(){}var v=e(function(e){e.exports=function(){function e(e,t,n,r,o,i){if(i!==s){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=h,n.PropTypes=n}()}),_=0;function g(e,t){var n=e[t];return"function"==typeof n&&(e[t]=function(t){function n(){return t.apply(void 0,arguments)}return 0===_&&(_++,Object.keys(t).map(function(e){return n[e]=t[e],e}).reduce(g,n),_--),n}(n)),e}var m=v;Object.keys(m).reduce(g,m);var b=m.oneOf(["left","center","right"]),O=m.oneOf(["left","right"]);function C(r){function e(e,t,n){return null==e[t]?null:r(e,t,n)}return e.isRequired=r,e}var w=/^[a-z]{2,4}(-([A-Z][a-z]{3}|[0-9]{3}))?(-([A-Z]{2}|[0-9]{3}))?$/;C(function(e,t,n){if(!w.test(e[t]))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`, expected a valid locale.")});m.oneOf(["top","bottom"]);var k=m.oneOf(["up","down"]),A=m.oneOf(["ok","pending","error","unknown"]),T=m.oneOf(["row","col","rowgroup","colgroup","auto"]),E=m.oneOfType([m.string,m.number]),N={text:E,value:m.any,rowspan:E,colspan:E,scope:T,align:b,dense:m.bool},j={float:O,strong:m.bool,bold:m.bool},P=m.oneOfType([m.string,m.number]),R=m.oneOfType([P,m.shape(i({},N,{sort:k,sortActive:m.bool}))]),S=m.oneOfType([P,m.shape(i({},N,j,{action:m.bool,state:A}))]),D=m.oneOfType([P,m.shape(i({},N,j))]),L=m.oneOfType([m.arrayOf(R),m.shape({cells:m.arrayOf(R)})]),U=m.oneOfType([m.arrayOf(S),m.shape({cells:m.arrayOf(S),action:m.bool})]),I=m.oneOfType([m.arrayOf(D),m.shape({cells:m.arrayOf(D)})]);m.oneOfType([L,m.arrayOf(L)]),m.oneOfType([U,m.arrayOf(U)]),m.oneOfType([I,m.arrayOf(I)]);var M,V,q,z,F=C(function(e,t,n){try{new window.URL(e[t],function(){if(document.baseURI)return document.baseURI;var e=document.getElementsByName("base");return e.length&&e[0].href?e[0].href:window.location.href}())}catch(e){return new Error("Invalid prop `"+t+"` supplied to `"+n+"`, expected a valid URL. "+e.message)}return null}),H=e(function(e){!function(){var i={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=void 0===n?"undefined":y(n);if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n))e.push(a.apply(null,n));else if("object"===r)for(var o in n)i.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?e.exports=a:window.classNames=a}()}),K=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}},$={},W=(M=Object,V=M.getPrototypeOf||function(e){return e.__proto__},q=M.setPrototypeOf||function(e,t){return e.__proto__=t,e},z="object"===("undefined"==typeof Reflect?"undefined":y(Reflect))?Reflect.construct:function(e,t,n){var r,o=[null];return o.push.apply(o,t),r=e.bind.apply(e,o),q(new r,n.prototype)},function(e){var t=V(e);return q(e,q(function(){return z(t,arguments,V(this).constructor)},t))}),B=function(n){return W(function(e){function t(){return l(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d(t,n),u(t,[{key:"init",value:function(){var e;this._id=((e=this.nodeName)in $||($[e]=0),++$[e]),this._initialised=!0}},{key:"connectedCallback",value:function(){this._initialised||this.init()}},{key:"attributeChangedCallback",value:function(){this._initialised||this.init()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}())},G={},Z=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,s=void 0===a?void 0:a,c=document.createEvent("CustomEvent");c.initCustomEvent(e,r,i,s);var l=c.preventDefault;return c.preventDefault=function(){l.call(c);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},c}}();function J(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},o=new Z(t,i({},r,{detail:n}));return e.dispatchEvent(o)}var Y=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function X(e){for(var o=e.className,i=!1,a=!0,t=arguments.length,n=Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var s=n.map(function(e){var t=(n=e,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",r)).test(o);var n,r;t?i=!0:a=!1;return{className:e,hasClass:t}});return!(!a&&!i)&&s}var Q=/\s+/,ee={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return""}()};function te(n,e,r,o){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},i=t.capture,a=void 0!==i&&i,s=t.passive,c=void 0===s||s;if(ee[e]&&(e=ee[e]),!n||!e)return null;var l=void 0===r?"undefined":y(r),u=r&&"string"===l;if("function"===l){if(o){var p=o;a=p.capture,c=p.passive}o=r}for(var d=Y?{capture:a,passive:c}:a,f=u?function(e){var t=e.target;for(;!X(t,r)&&t!==n;)t=t.parentNode;if(t!==n)return o(e,t)}:o,h=e.split(Q),v=h.length,_=0;_<v;++_)n.addEventListener(h[_],f,d);return function e(){for(var t=0;t<v;++t)n.removeEventListener(h[t],f,d);!function(e,t){if(!e)return;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,e)}}function ne(r){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,i=void 0!==t&&t,n=e.trailing,a=void 0===n||n,s=e.maxWait,c=void 0!==s&&s,l=void 0,u=void 0,p=void 0,d=void 0,f=!1,h=o!==c,v=!1!==c;function _(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return l=t,h&&(u&&clearTimeout(u),u=setTimeout(y,o)),v&&!p&&(p=setTimeout(g,c)),i&&!f&&(f=!0,d=r.apply(void 0,x(l))),d}return _.flush=function(){(u||p)&&(d=r.apply(void 0,x(l)));return b(),d},_.cancel=b,_;function y(){p&&clearTimeout(p),m()}function g(){u&&clearTimeout(u),m()}function m(){a&&(d=r.apply(void 0,x(l))),p=u=null,f=!1}function b(){u&&(clearTimeout(u),u=null),p&&(clearTimeout(p),p=null),l=void 0,f=!1}}window.__subscriptions=window.__subscriptions||{};var re=window.__subscriptions;function oe(e,t){var n=te(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);re[e]||(re[e]={count:0});var r,o=re[e];return o.count++,o.onsubscribe||(o.onsubscribe=ne((r=e,function(){J(document,"pubsub/onsubscribe",r),J(document,"pubsub/onsubscribe/"+r,r),re[r]&&delete re[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete re[e]}}te(document,"pubsub/onsubscribe",function(e){var t=e.detail;re[t]||(re[t]={count:0});var n=re[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=c(e,3),n=t[0],r=t[1],o=t[2];J(o,n,r)}),delete n.queue)});var ie,ae=function(e,t){return e===t},se=((ie=function(){var e;return(e=console).log.apply(e,arguments)},function(){var o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:ae;return function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return o.apply(void 0,[].concat(r,t))?ie.apply(void 0,arguments):void 0}}}})()(!0),[]);var ce=1,le=3,ue=8;function pe(e,t){var n=e.nodeType,r=e.nodeName;n===ce&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),r=t.constructor.observedAttributes,o=r&&Array.isArray(r)&&r.length,i=function(e){return n&&o&&-1===r.indexOf(e)},a=t.attributes,s=e.attributes,c=null,l=null,u=null,p=null,d=s.length-1;0<=d;--d)if(p=s[d],u=p.name,c=p.namespaceURI,l=p.value,!i(u))if(c){var f=p.localName;t.getAttributeNS(c,f||u)!==l&&t.setAttributeNS(c,u,l)}else t.hasAttribute(u)?t.getAttribute(u)!==l&&("null"===l||"undefined"===l?t.removeAttribute(u):t.setAttribute(u,l)):t.setAttribute(u,l);for(var h=a.length-1;0<=h;--h)if(!1!==(p=a[h]).specified){if(u=p.name,c=p.namespaceURI,i(u))continue;c?(u=p.localName||u,e.hasAttributeNS(c,u)||t.removeAttributeNS(c,u)):e.hasAttributeNS(null,u)||t.removeAttribute(u)}}(e,t),n!==le&&n!==ue||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===r?function(e,t){var n=e.value,r=t.value;de(e,t,"checked"),de(e,t,"disabled"),n!==r&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===r?de(e,t,"selected"):"TEXTAREA"===r&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function de(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var fe=3;function he(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(pe(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,r=void 0,o=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],r=e.childNodes[s-a],n||r;s++)if(r)if(n)if(ve(r,n))(o=he(r,n))!==n&&(t.replaceChild(o,n),a++);else{i=null;for(var c=s;c<t.childNodes.length;c++)if(ve(t.childNodes[c],r)){i=t.childNodes[c];break}i?((o=he(r,i))!==i&&a++,t.insertBefore(o,n)):r.id||n.id?(t.insertBefore(r,n),a++):(o=he(r,n))!==n&&(t.replaceChild(o,n),a++)}else t.appendChild(r),a++;else t.removeChild(n),s--}(e,t),t):null:e}function ve(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===fe&&e.nodeValue===t.nodeValue)}var _e,ye,ge,me,be=(_e=Object,ye=_e.getPrototypeOf||function(e){return e.__proto__},ge=_e.setPrototypeOf||function(e,t){return e.__proto__=t,e},me="object"===("undefined"==typeof Reflect?"undefined":y(Reflect))?Reflect.construct:function(e,t,n){var r,o=[null];return o.push.apply(o,t),r=e.bind.apply(e,o),ge(new r,n.prototype)},function(e){var t=ye(e);return ge(e,ge(function(){return me(t,arguments,ye(this).constructor)},t))})(function(e){function s(e){var t;l(this,s);for(var n="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",r=arguments.length,o=Array(1<r?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];var a=f(this,(t=s.__proto__||Object.getPrototypeOf(s)).call.apply(t,[this,n].concat(o)));return Error.captureStackTrace&&Error.captureStackTrace(a,s),a.name="TemplateNoStringReturnException",a}return d(s,e),s}(Error)),xe=!!document.createDocumentFragment().children,Oe=/[A-Z]/g;function Ce(e){return e.replace(Oe,we)}function we(e,t,n){var r=e.toLowerCase(),o=n.charAt(t+1);return 0===t||o.toUpperCase()===o?r:"-"+r}var ke=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function Ae(t,n,e){var r=t;if(e)return function(t,n,e){var r=t;switch(e){case m.string:case m.string.isRequired:return t;case m.bool:case m.bool.isRequired:if(!t||n===t)return!0;case m.number:case m.number.isRequired:case m.object:case m.object.isRequired:case m.array:case m.array.isRequired:default:if(ke.test(t))try{r=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}return r}(t,n,e);if(t&&n!==t){if(ke.test(t))try{r=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else r=!0;return r}var Te=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,Ee=/[-_]+/g;function Ne(e){return e.replace(Te,je)}function je(e,t){return 0==+e||Ee.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function Pe(e,t,n){var r=1===e.nodeType,o=e.constructor.propTypes,i=n;!n&&r&&(i=(void 0===o?{}:o)[Ne(t)]);if(r&&!e.hasAttribute(t))return i!==m.bool&&i!==m.bool.isRequired&&void 0;var a=e.value;return t?a=e.getAttribute(t):t=e.name,a=Ae(a,t,i)}var Re=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function Se(n,e,r){var t,o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},i=o.capture,a=void 0===i||i,s=o.passive,c=void 0===s||s,l=n.ownerDocument.documentElement,u=te(l,e,function(e){var t=e.target;if(!n.contains(t)&&n!==t)return r(e)},{capture:a,passive:c});return t=l,Re&&(t.style.cursor="pointer"),u}var De=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r=t.length,o={},i=0;i<r;++i){var a=t[i];o[a.toUpperCase()]=a}return o}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize"),Le="axa-change",Ue="data-prevent-default";(function(){function r(e){var i=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};l(this,r),this._handleClick=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var n=!i._lastToggleNode,r=t!==i._lastToggleNode,o=!n&&!r;n?(i._notify(De.ENTER,t),i._onInteractive()):r&&i._notify(De.MOVE,t,i._lastToggleNode),i._lastToggleNode=t,o&&i._options.sameClickClose&&i._close()},this._handleClose=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),i._close()},this._handleKeyUp=function(e){(e.key===De.ESCAPE||e.key===De.ESC||27===e.keyCode)&&(e.preventDefault(),i._close())},this._init(e,t)}return u(r,[{key:"_init",value:function(e,t){e&&(this._wcNode=e),t&&(this._options=i({},r.DEFAULTS,t));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=te(this._container,De.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=te(this._container,De.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=Se(this._container,De.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=te(this._container.ownerDocument,De.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(Ue)?Pe(e,Ue):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(De.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),r}()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var Ie=K(function(n){var e,t;return t=e=function(e){function t(){return l(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d(t,n),t}(),e.version="2.0.1-beta.228",t},function(t){return function(e){function a(){var e,t,n;l(this,a);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=n=f(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(o))))._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;n.contextNode&&(clearTimeout(n.timeoutId),n.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode,e)},10)),n.unContextEnabled&&n.unContextEnabled(),n.unContextEnabled=oe("context/available",n._makeContextReady)},f(n,t)}return d(a,t),u(a,[{key:"connectedCallback",value:function(){p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this)&&p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this)&&p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;re[e]||(re[e]={count:0,queue:[]});var r=re[e].queue;Array.isArray(r)?r.push([e,t,n]):J(n,e,t)}("context/available",this.__contextName=e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),a}()},function(t){return function(e){function n(){return l(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return d(n,t),u(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):p(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else o(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else o(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else o(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(t){return function(e){function i(){var e,t,s;l(this,i);for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=s=f(this,(e=i.__proto__||Object.getPrototypeOf(i)).call.apply(e,[this].concat(r))))._reduceProps=function(e,t){var n=e.props,r=e.shouldUpdate,o="_"+t,i=n[t],a=s[o];return r||s.shouldUpdateCallback(i,a)?(s.props[t]=i,{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},f(s,t)}return d(i,t),u(i,[{key:"init",value:function(e){var t=this;p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"init",this).call(this,e),this._isConnected=!1,this.props={},this.updatedDebounced=ne(function(){return t.updated&&t.updated()},50);var n=this.constructor.observedAttributes;Array.isArray(n)&&n.forEach(function(e){Ne(e)})}},{key:"connectedCallback",value:function(){var r=this;if(p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(e)){var o=this.constructor.propTypes;e.forEach(function(e){var t=Ne(e);if(r.hasAttribute(e)){var n=Pe(r,e,o[t]);r.props[t]=n}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this)&&p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this).call(this,e,t,n),this.shouldUpdateCallback(n,t)){var r=Ne(e);if(this.hasAttribute(e)){var o=this.constructor.propTypes;this.props[r]=Ae(n,e,o[r])}else this.props[r]=null;this.checkPropTypes(),"value"===e&&null!==n&&J(this,Le,n,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t,r=Object.keys(e).filter(function(e){return-1<n.indexOf(Ce(e))}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),r&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName;t&&m.checkPropTypes(t,this.props,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}],[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(Ce)}}]),i}()},function(t){return function(e){function c(){return l(this,c),f(this,(c.__proto__||Object.getPrototypeOf(c)).apply(this,arguments))}return d(c,t),u(c,[{key:"init",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.template,n=a(e,["template"]);p(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"init",this).call(this,n),this._template=t,this._hasTemplate=!!t,this._hasRendered=!1,this.updated=this.render}},{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var r=document.createDocumentFragment(),o=[];this.firstChild;)o.push(this.firstChild),r.appendChild(this.firstChild);this._lightDOMRefs=o,this.childrenFragment=r}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});xe||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var i=t(this.props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(e){a.appendChild(e)});else if(i){if("string"==typeof i)throw new be(this);a.appendChild(i)}if(e)p(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"appendChild",this).call(this,a);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":y(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":y(t)))throw new Error("componentMorph: newTree should be an object");he(t,e)}(this,s),function(){for(var e=void 0;e=se.pop();)delete e.isSameNode;se=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),c}()},function(t){return function(e){function o(){return l(this,o),f(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))}return d(o,t),u(o,[{key:"init",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,n=void 0===t?"":t,r=a(e,["styles"]);p(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"init",this).call(this,r),this._styles=n}},{key:"connectedCallback",value:function(){p(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this)&&p(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),o}()}),Me=(K(Ie,B),K(Ie,function(o){return function(e){function a(){var e,t,n;l(this,a);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=n=f(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(o))))._appendStyles=function(){a.appendGlobalStyles(n._styles,n.nodeName)},f(n,t)}return d(a,o),u(a,null,[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:o.uuidv4();if(e&&!G[t]){var n=document.createElement("style"),r=document.createTextNode(e);G[t]=!0,n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),a}()},B)(HTMLElement));var Ve=/\n[\s]+$/,qe=/^\n[\s]+/,ze=/[\s]+$/,Fe=/^[\s]+/,He=/[\n\s]+/g,Ke=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],$e=["code","pre","textarea"],We=function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,s=0,c=n.length;s<c;s++){var l=n[s];if(Array.isArray(l))e(t,l);else{("number"==typeof l||"boolean"==typeof l||"function"==typeof l||l instanceof Date||l instanceof RegExp)&&(l=l.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof l)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=l:(l=document.createTextNode(l),t.appendChild(l),u=l),s===c-1&&(a=!1,-1===Ke.indexOf(i)&&-1===$e.indexOf(i)?""===(r=u.nodeValue.replace(qe,"").replace(ze,"").replace(Ve,"").replace(He," "))?t.removeChild(u):u.nodeValue=r:-1===$e.indexOf(i)&&(o=0===s?"":" ",r=u.nodeValue.replace(qe,o).replace(Fe," ").replace(ze,"").replace(Ve,"").replace(He," "),u.nodeValue=r));else if(l&&l.nodeType){a&&(a=!1,-1===Ke.indexOf(i)&&-1===$e.indexOf(i)?""===(r=u.nodeValue.replace(qe,"").replace(Ve,"").replace(He," "))?t.removeChild(u):u.nodeValue=r:-1===$e.indexOf(i)&&(r=u.nodeValue.replace(Fe," ").replace(qe,"").replace(Ve,"").replace(He," "),u.nodeValue=r));var p=l.nodeName;p&&(i=p.toLowerCase()),t.appendChild(l)}}}};var Be,Ge,Ze,Je=function(e){var t,n=document.createElement("div");return n.innerHTML=e,t=n.childNodes,Array.isArray(t)?t:[].slice.call(t)},Ye=function(e,t){e.code;var n,r,o,i,a,s,c,l,u=e.status,p=e.title,d=e.message,f=e.items,h=e.ctaHref,v=e.ctaTitle,_=Array.isArray(f)&&f.length,y=t&&t.childElementCount,g=((i=document.createElement("article")).setAttribute("class","o-error-page__container"),We(i,["\n      ",(n=document.createElement("h4"),n.setAttribute("class","o-error-page__status"),We(n,[u]),n),"\n      ",(r=document.createElement("h1"),r.setAttribute("class","o-error-page__title"),We(r,[p]),r),"\n  \n      ",(o=document.createElement("p"),o.setAttribute("class",""+String(H("o-error-page__message",{"o-error-page__message--semibold":_}))),We(o,[Je(d)]),o),"\n      \n      ",_&&(a=document.createElement("ul"),a.setAttribute("class","o-error-page__list"),We(a,["\n          ",f.map(function(e){var t;return(t=document.createElement("li")).setAttribute("class","o-error-page__list-item"),We(t,[e]),t}),"\n        "]),a)||null,"\n      \n      ",h&&v&&(s=document.createElement("axa-button"),s.setAttribute("href",""+String(h)),s.setAttribute("tag","a"),s.setAttribute("color","white"),s.setAttribute("ghost","ghost"),s.setAttribute("motion","motion"),s.setAttribute("class","o-error-page__cta"),We(s,[v]),s)||null,"\n    "]),i);return y?[g,(l=document.createElement("arcticle"),l.setAttribute("class","o-error-page__discover"),We(l,["\n      ",(c=document.createElement("p"),c.setAttribute("class","o-error-page__discover-text"),We(c,[t]),c),"\n    "]),l)]:g},Xe=function(e){function t(){return l(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d(t,Me),u(t,[{key:"init",value:function(){p(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"init",this).call(this,{styles:'.o-error-page {\n  display: block;\n  color: #fff;\n  background: #3b3fd8;\n  text-align: center; }\n\n.o-error-page--pacific {\n  background: #00adc6; }\n\n.o-error-page--teal {\n  background: #027180; }\n\n.o-error-page__container {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: auto; }\n  @media (min-width: 576px) {\n    .o-error-page__container {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .o-error-page__container {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .o-error-page__container {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .o-error-page__container {\n      max-width: 1140px; } }\n  .o-error-page__container > :first-child {\n    padding-top: 40px; }\n  @media (min-width: 768px) {\n    .o-error-page__container > :first-child {\n      padding-top: 60px; } }\n  @media (min-width: 992px) {\n    .o-error-page__container > :first-child {\n      padding-top: 70px; } }\n  .o-error-page__container > :last-child {\n    padding-bottom: 40px; }\n  @media (min-width: 768px) {\n    .o-error-page__container > :last-child {\n      padding-bottom: 60px; } }\n\n@media (min-width: 768px) {\n  .o-error-page__status,\n  .o-error-page__title,\n  .o-error-page__message {\n    padding-right: 15px;\n    padding-left: 15px;\n    position: relative;\n    width: 100%;\n    min-height: 1px;\n    max-width: 83.33333%;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 83.33333%;\n            flex: 0 0 83.33333%;\n    margin-left: 8.33333%; } }\n\n.o-error-page__status {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .o-error-page__status {\n      font-size: 16px; } }\n\n.o-error-page__title {\n  font-size: 24px;\n  font-weight: 700;\n  line-height: 1.17;\n  letter-spacing: 0.015em;\n  font-family: "Publico Headline", Georgia, serif;\n  margin-top: 5px; }\n  @media (min-width: 576px) {\n    .o-error-page__title {\n      font-size: 36px;\n      line-height: 1.13; } }\n  @media (min-width: 992px) {\n    .o-error-page__title {\n      font-size: 48px; } }\n  @media (min-width: 576px) {\n    .o-error-page__title {\n      margin-top: 0; } }\n\n.o-error-page__message {\n  font-size: 18px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.01em;\n  margin-top: 40px;\n  white-space: pre-line; }\n  @media (min-width: 576px) {\n    .o-error-page__message {\n      font-size: 20px; } }\n  @media (min-width: 576px) {\n    .o-error-page__message {\n      margin-top: 50px; } }\n  @media (min-width: 768px) {\n    .o-error-page__message {\n      margin-top: 40px; } }\n\n.o-error-page__message--semibold {\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .o-error-page__message--semibold {\n      font-size: 20px; } }\n\n.o-error-page__list {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.01em;\n  text-align: left; }\n  @media (min-width: 576px) {\n    .o-error-page__list {\n      font-size: 18px; } }\n  @media (min-width: 768px) {\n    .o-error-page__list {\n      padding-right: 15px;\n      padding-left: 15px;\n      position: relative;\n      width: 100%;\n      min-height: 1px;\n      max-width: 66.66667%;\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 66.66667%;\n              flex: 0 0 66.66667%;\n      margin-left: 16.66667%; } }\n\n.o-error-page__list-item {\n  margin-top: 16px; }\n  .o-error-page__list-item:first-child {\n    margin-top: 0; }\n\n.o-error-page__cta {\n  display: block;\n  margin-top: 30px; }\n  @media (min-width: 576px) {\n    .o-error-page__cta {\n      margin-top: 40px; } }\n  @media (min-width: 768px) {\n    .o-error-page__cta {\n      margin-top: 20px; } }\n  @media (min-width: 992px) {\n    .o-error-page__cta {\n      margin-top: 25px; } }\n\n.o-error-page__discover {\n  display: block;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #333;\n  background: #fff; }\n\n.o-error-page__discover-text {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: auto; }\n  @media (min-width: 576px) {\n    .o-error-page__discover-text {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .o-error-page__discover-text {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .o-error-page__discover-text {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .o-error-page__discover-text {\n      max-width: 1140px; } }\n',template:Ye})}},{key:"willRenderCallback",value:function(){var e,t,n,r=this.props.background;this.className=H(this.initialClassName,"o-error-page",((t="o-error-page--"+(n=r))in(e={})?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e))}}]),t}();return Xe.tagName="axa-error-page",Xe.propTypes={code:m.number,status:m.string,title:m.string,message:m.string,items:m.arrayOf(m.string),ctaHref:F,ctaTitle:m.string,background:m.oneOf(["pacific","teal"])},Be=Xe.tagName,Ge=Xe,customElements.get(Be)||customElements.define(Be,Ge,Ze),Xe});
