var StyleGuideWebComponent=function(e){"use strict";function t(e,t){return e(t={exports:{}},t.exports),t.exports}var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}})()&&Object.assign;var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},d=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},p=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},h=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},a=function(e,t){var n={};for(var o in e)0<=t.indexOf(o)||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},f=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},v=function e(t,n,o,r){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,o,r)}else if("value"in i&&i.writable)i.value=o;else{var s=i.set;void 0!==s&&s.call(r,o)}return o},c=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},k=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function l(){}var y=t(function(e){e.exports=function(){function e(e,t,n,o,r,i){if(i!==s){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=l,n.PropTypes=n}()}),b=t(function(e){!function(){var i={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=void 0===n?"undefined":_(n);if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n))e.push(a.apply(null,n));else if("object"===o)for(var r in n)i.call(n,r)&&n[r]&&e.push(r)}}return e.join(" ")}e.exports?e.exports=a:window.classNames=a}()}),m={},g=function(e){return e in m||(m[e]=0),++m[e]},C=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,r=t.cancelable,i=void 0!==r&&r,a=t.detail,s=void 0===a?void 0:a,c=document.createEvent("CustomEvent");c.initCustomEvent(e,o,i,s);var l=c.preventDefault;return c.preventDefault=function(){l.call(c);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},c}}();function O(e,t,n){var o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},r=new C(t,i({},o,{detail:n}));return e.dispatchEvent(r)}var x=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}(),w=/^\s+|\s{2,}|\s+$/g;function T(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}function A(e){for(var t=arguments.length,n=Array(1<t?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r=E.apply(void 0,[e].concat(n));if(!0!==r){var i=[].concat(n);Array.isArray(r)&&(i=r.reduce(N,[])),i&&(e.className+=" "+i.join(" "))}}function N(e,t){var n=t.className;return t.hasClass||e.push(n),e}function E(e){for(var n=e.className,o=!1,r=!0,t=arguments.length,i=Array(1<t?t-1:0),a=1;a<t;a++)i[a-1]=arguments[a];var s=i.map(function(e){var t=T(e).test(n);t?o=!0:r=!1;return{className:e,hasClass:t}});return!(!r&&!o)&&s}function S(e){for(var t=arguments.length,n=Array(1<t?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r=E.apply(void 0,[e].concat(n));if(!1!==r){var i=[].concat(n);if(Array.isArray(r)&&(i=r.reduce(j,[])),i){var a=e.className;e.className=i.reduce(P,a)}}}function j(e,t){var n=t.className;return t.hasClass&&e.push(n),e}function P(e,t){var n=T(t,"g");return e.replace(n," ").replace(w," ")}var D=/\s+/,L={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,r=void 0,i=0;i<o;++i)if(void 0!==e[r=n[i]])return t[r];return""}()};function R(n,e,o,r){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},i=t.capture,a=void 0!==i&&i,s=t.passive,c=void 0===s||s;if(L[e]&&(e=L[e]),!n||!e)return null;var l=void 0===o?"undefined":_(o),u=o&&"string"===l;if("function"===l){if(r){var d=r;a=d.capture,c=d.passive}r=o}for(var p=x?{capture:a,passive:c}:a,h=u?function(e){var t=e.target;for(;!E(t,o)&&t!==n;)t=t.parentNode;if(t!==n)return r(e,t)}:r,f=e.split(D),v=f.length,y=0;y<v;++y)n.addEventListener(f[y],h,p);return function e(){for(var t=0;t<v;++t)n.removeEventListener(f[t],h,p);!function(e,t){if(!e)return;for(var n=Object.keys(e),o=n.length,r=0;r<o;++r){var i=n[r];if(e[i]===t)return delete e[i]}}(this,e)}}function I(o){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,i=void 0!==t&&t,n=e.trailing,a=void 0===n||n,s=e.maxWait,c=void 0!==s&&s,l=void 0,u=void 0,d=void 0,p=void 0,h=!1,f=r!==c,v=!1!==c;function y(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return l=t,f&&(u&&clearTimeout(u),u=setTimeout(_,r)),v&&!d&&(d=setTimeout(b,c)),i&&!h&&(h=!0,p=o.apply(void 0,k(l))),p}return y.flush=function(){(u||d)&&(p=o.apply(void 0,k(l)));return g(),p},y.cancel=g,y;function _(){d&&clearTimeout(d),m()}function b(){u&&clearTimeout(u),m()}function m(){a&&(p=o.apply(void 0,k(l))),d=u=null,h=!1}function g(){u&&(clearTimeout(u),u=null),d&&(clearTimeout(d),d=null),l=void 0,h=!1}}window.__subscriptions=window.__subscriptions||{};var U=window.__subscriptions;function F(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;U[e]||(U[e]={count:0,queue:[]});var o=U[e].queue;Array.isArray(o)?o.push([e,t,n]):O(n,e,t)}function M(e,t){var n=R(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);U[e]||(U[e]={count:0});var o,r=U[e];return r.count++,r.onsubscribe||(r.onsubscribe=I((o=e,function(){O(document,"pubsub/onsubscribe",o),O(document,"pubsub/onsubscribe/"+o,o),U[o]&&delete U[o].unsubscribe}),100)),r.onsubscribe(),function(){r.count--,n.call(this),r.count<=0&&delete U[e]}}R(document,"pubsub/onsubscribe",function(e){var t=e.detail;U[t]||(U[t]={count:0});var n=U[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=c(e,3),n=t[0],o=t[1],r=t[2];O(r,n,o)}),delete n.queue)});var V,z=function(e,t){return e===t},q=((V=function(){var e;return(e=console).log.apply(e,arguments)},function(){var r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:z;return function(){for(var e=arguments.length,o=Array(e),t=0;t<e;t++)o[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return r.apply(void 0,[].concat(o,t))?V.apply(void 0,arguments):void 0}}}})()(!0),function(e){function c(e,t){var n;u(this,c);for(var o="\n    Native Property >>>"+e+"<<< exists already at "+t.nodeName+"#"+t._id+" and evaluates to -> "+t[e]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",r=arguments.length,i=Array(2<r?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];var s=f(this,(n=c.__proto__||Object.getPrototypeOf(c)).call.apply(n,[this,o].concat(i)));return Error.captureStackTrace&&Error.captureStackTrace(s,c),s.name="PropertyExistsException",s}return h(c,e),c}(Error)),B=/[A-Z]/g;function K(e){return e.replace(B,W)}function W(e,t,n){var o=e.toLowerCase(),r=n.charAt(t+1);return 0===t||r.toUpperCase()===r?o:"-"+o}var H=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function Y(t,n){var e=t;if(t&&n!==t){if(H.test(t))try{e=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else e=!0;return e}var $=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,G=/[-_]+/g;function X(e){return e.replace($,Z)}function Z(e,t){return 0==+e||G.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function J(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=Y(n,t)}function Q(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=t.length,r={},i=0;i<o;++i){var a=t[i];r[a.toUpperCase()]=a}return r}var ee=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function te(n,e,o){var t,r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},i=r.capture,a=void 0===i||i,s=r.passive,c=void 0===s||s,l=n.ownerDocument.documentElement,u=R(l,e,function(e){var t=e.target;if(!n.contains(t)&&n!==t)return o(e)},{capture:a,passive:c});return t=l,ee&&(t.style.cursor="pointer"),u}var ne=Q("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize"),oe="axa-change",re="data-prevent-default";(function(){function o(e){var i=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};u(this,o),this._handleClick=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var n=!i._lastToggleNode,o=t!==i._lastToggleNode,r=!n&&!o;n?(i._notify(ne.ENTER,t),i._onInteractive()):o&&i._notify(ne.MOVE,t,i._lastToggleNode),i._lastToggleNode=t,r&&i._options.sameClickClose&&i._close()},this._handleClose=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),i._close()},this._handleKeyUp=function(e){(e.key===ne.ESCAPE||e.key===ne.ESC||27===e.keyCode)&&(e.preventDefault(),i._close())},this._init(e,t)}return d(o,[{key:"_init",value:function(e,t){e&&(this._wcNode=e),t&&(this._options=i({},o.DEFAULTS,t));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=R(this._container,ne.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=R(this._container,ne.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=te(this._container,ne.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=R(this._container.ownerDocument,ne.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(re)?J(e,re):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(ne.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),o}()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var ie=["title","checked","disabled"],ae=[];var se=1,ce=3,le=8;function ue(e,t){var n=e.nodeType,o=e.nodeName;n===se&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),o=t.constructor.observedAttributes,r=o&&Array.isArray(o)&&o.length,i=function(e){return n&&r&&-1===o.indexOf(e)},a=t.attributes,s=e.attributes,c=null,l=null,u=null,d=null,p=s.length-1;0<=p;--p)if(d=s[p],u=d.name,c=d.namespaceURI,l=d.value,!i(u))if(c){var h=d.localName;t.getAttributeNS(c,h||u)!==l&&t.setAttributeNS(c,u,l)}else t.hasAttribute(u)?t.getAttribute(u)!==l&&("null"===l||"undefined"===l?t.removeAttribute(u):t.setAttribute(u,l)):t.setAttribute(u,l);for(var f=a.length-1;0<=f;--f)if(!1!==(d=a[f]).specified){if(u=d.name,c=d.namespaceURI,i(u))continue;c?(u=d.localName||u,e.hasAttributeNS(c,u)||t.removeAttributeNS(c,u)):e.hasAttributeNS(null,u)||t.removeAttribute(u)}}(e,t),n!==ce&&n!==le||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===o?function(e,t){var n=e.value,o=t.value;de(e,t,"checked"),de(e,t,"disabled"),n!==o&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===o?de(e,t,"selected"):"TEXTAREA"===o&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function de(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var pe=3;function he(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(ue(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,o=void 0,r=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],o=e.childNodes[s-a],n||o;s++)if(o)if(n)if(fe(o,n))(r=he(o,n))!==n&&(t.replaceChild(r,n),a++);else{i=null;for(var c=s;c<t.childNodes.length;c++)if(fe(t.childNodes[c],o)){i=t.childNodes[c];break}i?((r=he(o,i))!==i&&a++,t.insertBefore(r,n)):o.id||n.id?(t.insertBefore(o,n),a++):(r=he(o,n))!==n&&(t.replaceChild(r,n),a++)}else t.appendChild(o),a++;else t.removeChild(n),s--}(e,t),t):null:e}function fe(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===pe&&e.nodeValue===t.nodeValue)}var ve=function(e){function s(e){var t;u(this,s);for(var n="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",o=arguments.length,r=Array(1<o?o-1:0),i=1;i<o;i++)r[i-1]=arguments[i];var a=f(this,(t=s.__proto__||Object.getPrototypeOf(s)).call.apply(t,[this,n].concat(r)));return Error.captureStackTrace&&Error.captureStackTrace(a,s),a.name="TemplateNoStringReturnException",a}return h(s,e),s}(Error),ye=!!document.createDocumentFragment().children;function _e(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(_e.prototype,HTMLElement.prototype),Object.setPrototypeOf(_e,HTMLElement);var be=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(t){return function(e){function a(){var e,t,n;u(this,a);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return(t=n=f(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(r))))._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;n.contextNode&&(clearTimeout(n.timeoutId),n.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode,e)},10)),n.unContextEnabled&&n.unContextEnabled(),n.unContextEnabled=M("context/available",n._makeContextReady)},f(n,t)}return h(a,t),d(a,[{key:"connectedCallback",value:function(){p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this)&&p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this)&&p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,F("context/available",this.__contextName=e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),a}()},function(t){return function(e){function n(){return u(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return h(n,t),d(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):p(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else v(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else v(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else v(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(t){return function(e){function l(e){u(this,l);var c=f(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,e));c._reduceProps=function(e,t){var n=e.props,o=e.shouldUpdate,r=c._hasKeys[t];if(-1===ie.indexOf(t)&&r)throw new q(t,c);var i="_"+t,a=n[t],s=c[i];return o||c.shouldUpdateCallback(a,s)?(c[i]=a,c._props[t]=a,r&&v(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),t,a,c),{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},c._isConnected=!1,c._props={},c._hasKeys={},c.updatedDebounced=I(function(){return c.updated&&c.updated()},50);var t=c.constructor.observedAttributes;return Array.isArray(t)&&t.forEach(function(e){var t,n=X(e),o=n in c;if(-1===ie.indexOf(n)&&o)throw new q(n,c);c._hasKeys[n]=o,Object.defineProperty(c,n,t={get:function(){return this._props[n]},set:function(e){this.shouldUpdateCallback(this._props[n],e)&&(this._props[n]=e,o&&v(t.__proto__||Object.getPrototypeOf(t),n,e,this),this._isConnected&&this.updatedDebounced())}})}),c}return h(l,t),d(l,null,[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(K)}}]),d(l,[{key:"connectedCallback",value:function(){var r=this;if(p(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"connectedCallback",this)&&p(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(e)&&(e.forEach(function(e){var t=X(e);if(r.hasAttribute(e)){var n=J(r,e),o=r._hasKeys[t];r._props[t]=n,o&&v(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),t,n,r)}}),this.checkPropTypes())}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(this.shouldUpdateCallback(n,t)){var o=X(e);this.hasAttribute(e)?this[o]=Y(n,e):this[o]=null,this.checkPropTypes(),"value"===e&&null!==n&&O(this,oe,n,{bubbles:!0,cancelable:!0,composed:!0})}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t,o=Object.keys(e).filter(function(e){return-1<n.indexOf(K(e))}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),o&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName;t&&y.checkPropTypes(t,this._props,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),l}()},function(t){return function(e){function c(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.template,n=a(e,["template"]);u(this,c);var o=f(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,n));return o._template=t,o._hasTemplate=!!t,o._hasRendered=!1,o.updated=o.render,o}return h(c,t),d(c,[{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var o=document.createDocumentFragment(),r=[];this.firstChild;)r.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=r,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});ye||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var i=t(this._props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(e){a.appendChild(e)});else if(i){if("string"==typeof i)throw new ve(this);a.appendChild(i)}if(e)p(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"appendChild",this).call(this,a);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":_(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":_(t)))throw new Error("componentMorph: newTree should be an object");he(t,e)}(this,s),function(){for(var e=void 0;e=ae.pop();)delete e.isSameNode;ae=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),c}()},function(t){return function(e){function i(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,n=void 0===t?"":t,o=a(e,["styles"]);u(this,i);var r=f(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,o));return r._styles=n,r}return h(i,t),d(i,[{key:"connectedCallback",value:function(){p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),i}()})(function(e){function n(e){u(this,n);var t=f(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t._id=g(t.nodeName),t}return h(n,_e),d(n,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),n}()),me={},ge=function(e){function a(){var e,t,n;u(this,a);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return(t=n=f(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(r))))._appendStyles=function(){a.appendGlobalStyles(n._styles,n.nodeName)},f(n,t)}return h(a,be),d(a,null,[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:be.uuidv4();if(e&&!me[t]){var n=document.createElement("style"),o=document.createTextNode(e);me[t]=!0,n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),a}();var ke=".m-sticky {\n  display: block; }\n\n.m-sticky__placeholder {\n  display: block;\n  height: 0; }\n\n.m-sticky__box {\n  display: block; }\n  .is-sticky-sticky > .m-sticky__box {\n    position: fixed;\n    top: 0;\n    z-index: 1020; }\n  .is-sticky-bottom > .m-sticky__box {\n    position: absolute;\n    bottom: 0;\n    z-index: 1020; }\n  .is-sticky-in-flow > .m-sticky__box {\n    position: static; }\n\n.m-sticky--debug > .m-sticky__box {\n  background: rgba(0, 0, 255, 0.5);\n  color: #fff; }\n  .m-sticky--debug > .m-sticky__box::before, .m-sticky--debug > .m-sticky__box::after {\n    content: '';\n    color: yellow; }\n\n.m-sticky--debug.is-sticky-sticky > .m-sticky__box {\n  background: rgba(255, 0, 0, 0.7); }\n  .m-sticky--debug.is-sticky-sticky > .m-sticky__box::before {\n    content: 'is-sticky'; }\n\n.m-sticky--debug.is-sticky-bottom > .m-sticky__box {\n  background: rgba(255, 165, 0, 0.7); }\n  .m-sticky--debug.is-sticky-bottom > .m-sticky__box::before {\n    content: 'is-bottom'; }\n\n.m-sticky--debug.is-sticky-in-flow > .m-sticky__box::before {\n  content: 'is-in-flow'; }\n\n.m-sticky--debug.is-sticky-scroll-up > .m-sticky__box::after {\n  content: 'is-scroll-up'; }\n\n.m-sticky--debug.is-sticky-scroll-down > .m-sticky__box::after {\n  content: 'is-scroll-down'; }\n",Ce=/\n[\s]+$/,Oe=/^\n[\s]+/,xe=/[\s]+$/,we=/^[\s]+/,Te=/[\n\s]+/g,Ae=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],Ne=["code","pre","textarea"],Ee=function e(t,n){if(Array.isArray(n))for(var o,r,i=t.nodeName.toLowerCase(),a=!1,s=0,c=n.length;s<c;s++){var l=n[s];if(Array.isArray(l))e(t,l);else{("number"==typeof l||"boolean"==typeof l||"function"==typeof l||l instanceof Date||l instanceof RegExp)&&(l=l.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof l)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=l:(l=document.createTextNode(l),t.appendChild(l),u=l),s===c-1&&(a=!1,-1===Ae.indexOf(i)&&-1===Ne.indexOf(i)?""===(o=u.nodeValue.replace(Oe,"").replace(xe,"").replace(Ce,"").replace(Te," "))?t.removeChild(u):u.nodeValue=o:-1===Ne.indexOf(i)&&(r=0===s?"":" ",o=u.nodeValue.replace(Oe,r).replace(we," ").replace(xe,"").replace(Ce,"").replace(Te," "),u.nodeValue=o));else if(l&&l.nodeType){a&&(a=!1,-1===Ae.indexOf(i)&&-1===Ne.indexOf(i)?""===(o=u.nodeValue.replace(Oe,"").replace(Ce,"").replace(Te," "))?t.removeChild(u):u.nodeValue=o:-1===Ne.indexOf(i)&&(o=u.nodeValue.replace(we," ").replace(Oe,"").replace(Ce,"").replace(Te," "),u.nodeValue=o));var d=l.nodeName;d&&(i=d.toLowerCase()),t.appendChild(l)}}}};function Se(e,t){var n,o;return[(n=document.createElement("div"),n.setAttribute("class","m-sticky__placeholder js-sticky__placeholder"),n),(o=document.createElement("div"),o.setAttribute("class","m-sticky__box js-sticky__box"),Ee(o,[t]),o)]}var je="pageYOffset"in window?function(){return window.pageYOffset}:function(){var e=document,t=e.body;return e.documentElement.scrollTop||t.scrollTop||0};var Pe,De=function(){if(!window.getComputedStyle)return null;var e=window.getComputedStyle(document.documentElement,""),t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return{dom:"WebKit|Moz|MS|O".match(new RegExp("("+t+")","i"))[1],lowercase:t,css:"-"+t+"-",js:t[0].toUpperCase()+t.slice(1)}}().lowercase,Le=function(){var e=window.requestAnimationFrame||window[De+"RequestAnimationFrame"];if(e)e=e.bind(window);else{var r=0;e=function(e){var t=Date.now(),n=Math.max(0,16-(t-r)),o=setTimeout(function(){e(t+n)},n);return r=t+n,o}}return e}(),Re=(Pe=(Pe=window.cancelAnimationFrame||window[De+"CancelAnimationFrame"]||window[De+"CancelRequestAnimationFrame"])?Pe.bind(window):function(e){clearTimeout(e)},void 0),Ie=0,Ue=["resize","orientationchange"].join(" "),Fe=[Ue,"scroll","touchstart","touchmove","touchend","pageshow","load"].join(" "),Me=function(){function e(){var f=this;u(this,e),this._change=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).type;0<=Ue.indexOf(e)&&(f.forceRepaint=!0),f.framePending||Le(function(){for(var e=f.containerNodes,t=f.forceRepaint,n=f.lastScrollTop,o=f.isDirectionFrozen,r=f.lastDirection,i=je(),a=i-n,s=o?r:0<a?1:a<0?-1:r,c=0,l=e.length;c<l;c++){var u=e[c],d=u.getBoundingClientRect(),p=d.top,h=d.bottom;F("sticky-container/"+(p<=0&&0<=h?"active":"idle"),{containerTop:p,containerBottom:h,direction:s,forceRepaint:t},u)}f.lastScrollTop=i,f.lastDirection=s,f.framePending=!1,f.forceRepaint=!1})},this._freezeDirection=function(){f.isDirectionFrozen=!0,f.lastDirection=-1},this._thawDirection=function(){f.isDirectionFrozen=!1},this.forceRepaint=!1,this.framePending=!1,this.lastScrollTop=0,this.isDirectionFrozen=!1,this.containerNodes=[],this._on()}return d(e,[{key:"addContainer",value:function(e){this.containerNodes.push(e),this._change()}},{key:"_on",value:function(){this._off(),this._unChange=R(window,Fe,this._change),this._unFreezeDirection=M("sticky-container/freeze-direction",this._freezeDirection),this._unThawDirection=M("sticky-container/thaw-direction",this._thawDirection)}},{key:"_off",value:function(){this._unChange&&this._unChange(),this._unFreezeDirection&&this._unFreezeDirection(),this._unThawDirection&&this._unThawDirection()}},{key:"remove",value:function(e){var t,n,o;e&&(t=this.containerNodes,n=e,-1<(o=t.indexOf(n))&&t.splice(o,1)),--Ie<=0&&Re&&(this._off(),delete this.containerNodes,Re=null)}}]),e}();function Ve(e,t){for(var n=[],o=Object.keys(t),r=o.length,i=0;i<r;++i){var a=o[i];n.push(a+":"+t[a]+";")}e.style.cssText=n.join("")}var ze=Q("IS_IN_FLOW","IS_STICKY","IS_BOTTOM"),qe=function(){function t(e){u(this,t),We.call(this),this.wcNode=e,this.state=ze.IS_IN_FLOW,this.lastDirection=0,this.placeholder=e.querySelector(t.DEFAULTS.placeholderClass),this.box=e.querySelector(t.DEFAULTS.boxClass),this.spy=(Re||(Re=new Me),Ie++,Re)}return d(t,[{key:"_on",value:function(){this._off(),this._unActive=M("sticky-container/active",this._update,this._contextNode),this._unIdle=M("sticky-container/idle",this._update,this._contextNode)}},{key:"_off",value:function(){this._unActive&&this._unActive(),this._unIdle&&this._unIdle()}},{key:"destroy",value:function(){this._off(),this.spy.remove(),delete this.spy,delete this.roodNode,delete this.placeholder,delete this.box,delete this._contextNode}},{key:"contextNode",set:function(e){this._contextNode=e,this._on()}}]),t}();qe.DEFAULTS={placeholderClass:".js-sticky__placeholder",boxClass:".js-sticky__box",isStickyClass:"is-sticky-sticky",isBottomClass:"is-sticky-bottom",isScrollUp:"is-sticky-scroll-up",isScrollDown:"is-sticky-scroll-down"};var Be,Ke,We=function(){var y=this;this._update=function(e){var t=e.detail,n=t.containerBottom,o=t.direction,r=t.forceRepaint,i=y.wcNode,a=y.state,s=o!==y.lastDirection,c=i.offsetHeight,l=i.offsetWidth,u=i.getBoundingClientRect(),d=u.left,p=u.top,h=0<p,f=p<=0&&c<=n,v=p<=0&&n<c;s&&1===o?(A(i,qe.DEFAULTS.isScrollDown),S(i,qe.DEFAULTS.isScrollUp)):s&&-1===o&&(A(i,qe.DEFAULTS.isScrollUp),S(i,qe.DEFAULTS.isScrollDown)),f&&(r||a!==ze.IS_STICKY)&&(y.state=ze.IS_STICKY,A(i,qe.DEFAULTS.isStickyClass),S(i,qe.DEFAULTS.isBottomClass),Ve(y.placeholder,{height:c+"px"}),Ve(y.box,{left:d+"px",width:l+"px"})),v&&(r||a!==ze.IS_BOTTOM)&&(y.state=ze.IS_BOTTOM,S(i,qe.DEFAULTS.isStickyClass),A(i,qe.DEFAULTS.isBottomClass),Ve(y.placeholder,{height:c+"px"}),Ve(y.box,{left:d+"px",width:l+"px"})),h&&(r||a!==ze.IS_IN_FLOW)&&(y.state=ze.IS_IN_FLOW,S(i,qe.DEFAULTS.isStickyClass),S(i,qe.DEFAULTS.isBottomClass),Ve(y.placeholder,{height:""}),Ve(y.box,{left:"",width:""}))}},He=function(e){function t(){u(this,t);var e=f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:ke,template:Se}));return e.consumeContext("axa-sticky-container"),e}return h(t,ge),d(t,[{key:"willRenderCallback",value:function(){var e=this.debug;this.className=b(this.initialClassName,"m-sticky js-sticky",{"m-sticky--debug":e})}},{key:"didRenderCallback",value:function(){this.sticky&&this.sticky.destroy(),this.sticky=new qe(this);var e=this.contextNode;e&&this.contextCallback(e)}},{key:"contextCallback",value:function(e){this.sticky&&(this.sticky.contextNode=e)}},{key:"disconnectedCallback",value:function(){this.sticky&&(this.sticky.destroy(),delete this.sticky)}}]),t}();return He.tagName="axa-sticky",He.propTypes={debug:y.bool},Be=He.tagName,Ke=He,customElements.get(Be)||customElements.define(Be,Ke),e.AXASticky=He,e.default=He,e}({});
