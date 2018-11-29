var StyleGuideWebComponent=function(){"use strict";function e(e,t){return e(t={exports:{}},t.exports),t.exports}var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}})()&&Object.assign;var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},c=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},p=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},d=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},a=function(e,t){var n={};for(var o in e)0<=t.indexOf(o)||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},h=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},r=function e(t,n,o,r){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,o,r)}else if("value"in i&&i.writable)i.value=o;else{var s=i.set;void 0!==s&&s.call(r,o)}return o},l=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},C=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function f(){}var v=e(function(e){e.exports=function(){function e(e,t,n,o,r,i){if(i!==s){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=f,n.PropTypes=n}()}),y=0;function g(e,t){var n=e[t];return"function"==typeof n&&(e[t]=function(t){function n(){return t.apply(void 0,arguments)}return 0===y&&(y++,Object.keys(t).map(function(e){return n[e]=t[e],e}).reduce(g,n),y--),n}(n)),e}var b=v;Object.keys(b).reduce(g,b);var m=b.oneOf(["left","center","right"]),O=b.oneOf(["left","right"]);function w(o){function e(e,t,n){return null==e[t]?null:o(e,t,n)}return e.isRequired=o,e}var k=/^[a-z]{2,4}(-([A-Z][a-z]{3}|[0-9]{3}))?(-([A-Z]{2}|[0-9]{3}))?$/;w(function(e,t,n){if(!k.test(e[t]))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`, expected a valid locale.")});b.oneOf(["top","bottom"]);var x=b.oneOf(["up","down"]),A=b.oneOf(["ok","pending","error","unknown"]),E=b.oneOf(["row","col","rowgroup","colgroup","auto"]),N=b.oneOfType([b.string,b.number]),T={text:N,value:b.any,rowspan:N,colspan:N,scope:E,align:m,dense:b.bool},j={float:O,strong:b.bool,bold:b.bool},P=b.oneOfType([b.string,b.number]),S=b.oneOfType([P,b.shape(i({},T,{sort:x,sortActive:b.bool}))]),R=b.oneOfType([P,b.shape(i({},T,j,{action:b.bool,state:A}))]),D=b.oneOfType([P,b.shape(i({},T,j))]),I=b.oneOfType([b.arrayOf(S),b.shape({cells:b.arrayOf(S)})]),L=b.oneOfType([b.arrayOf(R),b.shape({cells:b.arrayOf(R),action:b.bool})]),U=b.oneOfType([b.arrayOf(D),b.shape({cells:b.arrayOf(D)})]);b.oneOfType([I,b.arrayOf(I)]),b.oneOfType([L,b.arrayOf(L)]),b.oneOfType([U,b.arrayOf(U)]);var M,V,q,F,z=w(function(e,t,n){try{new window.URL(e[t],function(){if(document.baseURI)return document.baseURI;var e=document.getElementsByName("base");return e.length&&e[0].href?e[0].href:window.location.href}())}catch(e){return new Error("Invalid prop `"+t+"` supplied to `"+n+"`, expected a valid URL. "+e.message)}return null}),H=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}},K={},$=(M=Object,V=M.getPrototypeOf||function(e){return e.__proto__},q=M.setPrototypeOf||function(e,t){return e.__proto__=t,e},F="object"===("undefined"==typeof Reflect?"undefined":_(Reflect))?Reflect.construct:function(e,t,n){var o,r=[null];return r.push.apply(r,t),o=e.bind.apply(e,r),q(new o,n.prototype)},function(e){var t=V(e);return q(e,q(function(){return F(t,arguments,V(this).constructor)},t))}),W=function(n){return $(function(e){function t(){return u(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d(t,n),c(t,[{key:"init",value:function(){var e;this._id=((e=this.nodeName)in K||(K[e]=0),++K[e]),this._initialised=!0}},{key:"connectedCallback",value:function(){this._initialised||this.init()}},{key:"attributeChangedCallback",value:function(){this._initialised||this.init()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}())},B={},G=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,r=t.cancelable,i=void 0!==r&&r,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,o,i,s);var u=l.preventDefault;return l.preventDefault=function(){u.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function Z(e,t,n){var o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},r=new G(t,i({},o,{detail:n}));return e.dispatchEvent(r)}var J=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}(),Y=/^\s+|\s{2,}|\s+$/g;function X(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}function Q(e){for(var t=arguments.length,n=Array(1<t?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r=te.apply(void 0,[e].concat(n));if(!0!==r){var i=[].concat(n);Array.isArray(r)&&(i=r.reduce(ee,[])),i&&(e.className+=" "+i.join(" "))}}function ee(e,t){var n=t.className;return t.hasClass||e.push(n),e}function te(e){for(var n=e.className,o=!1,r=!0,t=arguments.length,i=Array(1<t?t-1:0),a=1;a<t;a++)i[a-1]=arguments[a];var s=i.map(function(e){var t=X(e).test(n);t?o=!0:r=!1;return{className:e,hasClass:t}});return!(!r&&!o)&&s}function ne(e){for(var t=arguments.length,n=Array(1<t?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r=te.apply(void 0,[e].concat(n));if(!1!==r){var i=[].concat(n);if(Array.isArray(r)&&(i=r.reduce(oe,[])),i){var a=e.className;e.className=i.reduce(re,a)}}}function oe(e,t){var n=t.className;return t.hasClass&&e.push(n),e}function re(e,t){var n=X(t,"g");return e.replace(n," ").replace(Y," ")}var ie=/\s+/,ae={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,r=void 0,i=0;i<o;++i)if(void 0!==e[r=n[i]])return t[r];return""}()};function se(n,e,o,r){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},i=t.capture,a=void 0!==i&&i,s=t.passive,l=void 0===s||s;if(ae[e]&&(e=ae[e]),!n||!e)return null;var u=void 0===o?"undefined":_(o),c=o&&"string"===u;if("function"===u){if(r){var p=r;a=p.capture,l=p.passive}r=o}for(var d=J?{capture:a,passive:l}:a,h=c?function(e){var t=e.target;for(;!te(t,o)&&t!==n;)t=t.parentNode;if(t!==n)return r(e,t)}:r,f=e.split(ie),v=f.length,y=0;y<v;++y)n.addEventListener(f[y],h,d);return function e(){for(var t=0;t<v;++t)n.removeEventListener(f[t],h,d);!function(e,t){if(!e)return;for(var n=Object.keys(e),o=n.length,r=0;r<o;++r){var i=n[r];if(e[i]===t)return delete e[i]}}(this,e)}}function le(o){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,i=void 0!==t&&t,n=e.trailing,a=void 0===n||n,s=e.maxWait,l=void 0!==s&&s,u=void 0,c=void 0,p=void 0,d=void 0,h=!1,f=r!==l,v=!1!==l;function y(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return u=t,f&&(c&&clearTimeout(c),c=setTimeout(_,r)),v&&!p&&(p=setTimeout(g,l)),i&&!h&&(h=!0,d=o.apply(void 0,C(u))),d}return y.flush=function(){(c||p)&&(d=o.apply(void 0,C(u)));return m(),d},y.cancel=m,y;function _(){p&&clearTimeout(p),b()}function g(){c&&clearTimeout(c),b()}function b(){a&&(d=o.apply(void 0,C(u))),p=c=null,h=!1}function m(){c&&(clearTimeout(c),c=null),p&&(clearTimeout(p),p=null),u=void 0,h=!1}}window.__subscriptions=window.__subscriptions||{};var ue=window.__subscriptions;function ce(e,t){var n=se(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);ue[e]||(ue[e]={count:0});var o,r=ue[e];return r.count++,r.onsubscribe||(r.onsubscribe=le((o=e,function(){Z(document,"pubsub/onsubscribe",o),Z(document,"pubsub/onsubscribe/"+o,o),ue[o]&&delete ue[o].unsubscribe}),100)),r.onsubscribe(),function(){r.count--,n.call(this),r.count<=0&&delete ue[e]}}se(document,"pubsub/onsubscribe",function(e){var t=e.detail;ue[t]||(ue[t]={count:0});var n=ue[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=l(e,3),n=t[0],o=t[1],r=t[2];Z(r,n,o)}),delete n.queue)});var pe,de=function(e,t){return e===t},he=((pe=function(){var e;return(e=console).log.apply(e,arguments)},function(){var r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:de;return function(){for(var e=arguments.length,o=Array(e),t=0;t<e;t++)o[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return r.apply(void 0,[].concat(o,t))?pe.apply(void 0,arguments):void 0}}}})()(!0),[]);var fe=1,ve=3,ye=8;function _e(e,t){var n=e.nodeType,o=e.nodeName;n===fe&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),o=t.constructor.observedAttributes,r=o&&Array.isArray(o)&&o.length,i=function(e){return n&&r&&-1===o.indexOf(e)},a=t.attributes,s=e.attributes,l=null,u=null,c=null,p=null,d=s.length-1;0<=d;--d)if(p=s[d],c=p.name,l=p.namespaceURI,u=p.value,!i(c))if(l){var h=p.localName;t.getAttributeNS(l,h||c)!==u&&t.setAttributeNS(l,c,u)}else t.hasAttribute(c)?t.getAttribute(c)!==u&&("null"===u||"undefined"===u?t.removeAttribute(c):t.setAttribute(c,u)):t.setAttribute(c,u);for(var f=a.length-1;0<=f;--f)if(!1!==(p=a[f]).specified){if(c=p.name,l=p.namespaceURI,i(c))continue;l?(c=p.localName||c,e.hasAttributeNS(l,c)||t.removeAttributeNS(l,c)):e.hasAttributeNS(null,c)||t.removeAttribute(c)}}(e,t),n!==ve&&n!==ye||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===o?function(e,t){var n=e.value,o=t.value;ge(e,t,"checked"),ge(e,t,"disabled"),n!==o&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===o?ge(e,t,"selected"):"TEXTAREA"===o&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function ge(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var be=3;function me(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(_e(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,o=void 0,r=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],o=e.childNodes[s-a],n||o;s++)if(o)if(n)if(Ce(o,n))(r=me(o,n))!==n&&(t.replaceChild(r,n),a++);else{i=null;for(var l=s;l<t.childNodes.length;l++)if(Ce(t.childNodes[l],o)){i=t.childNodes[l];break}i?((r=me(o,i))!==i&&a++,t.insertBefore(r,n)):o.id||n.id?(t.insertBefore(o,n),a++):(r=me(o,n))!==n&&(t.replaceChild(r,n),a++)}else t.appendChild(o),a++;else t.removeChild(n),s--}(e,t),t):null:e}function Ce(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===be&&e.nodeValue===t.nodeValue)}var Oe,we,ke,xe,Ae=(Oe=Object,we=Oe.getPrototypeOf||function(e){return e.__proto__},ke=Oe.setPrototypeOf||function(e,t){return e.__proto__=t,e},xe="object"===("undefined"==typeof Reflect?"undefined":_(Reflect))?Reflect.construct:function(e,t,n){var o,r=[null];return r.push.apply(r,t),o=e.bind.apply(e,r),ke(new o,n.prototype)},function(e){var t=we(e);return ke(e,ke(function(){return xe(t,arguments,we(this).constructor)},t))})(function(e){function s(e){var t;u(this,s);for(var n="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",o=arguments.length,r=Array(1<o?o-1:0),i=1;i<o;i++)r[i-1]=arguments[i];var a=h(this,(t=s.__proto__||Object.getPrototypeOf(s)).call.apply(t,[this,n].concat(r)));return Error.captureStackTrace&&Error.captureStackTrace(a,s),a.name="TemplateNoStringReturnException",a}return d(s,e),s}(Error)),Ee=!!document.createDocumentFragment().children,Ne=/[A-Z]/g;function Te(e){return e.replace(Ne,je)}function je(e,t,n){var o=e.toLowerCase(),r=n.charAt(t+1);return 0===t||r.toUpperCase()===r?o:"-"+o}var Pe=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function Se(t,n,e){var o=t;if(e)return function(t,n,e){var o=t;switch(e){case b.string:case b.string.isRequired:return t;case b.bool:case b.bool.isRequired:if(!t||n===t)return!0;case b.number:case b.number.isRequired:case b.object:case b.object.isRequired:case b.array:case b.array.isRequired:default:if(Pe.test(t))try{o=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}return o}(t,n,e);if(t&&n!==t){if(Pe.test(t))try{o=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else o=!0;return o}var Re=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,De=/[-_]+/g;function Ie(e){return e.replace(Re,Le)}function Le(e,t){return 0==+e||De.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function Ue(e,t,n){var o=1===e.nodeType,r=e.constructor.propTypes,i=n;!n&&o&&(i=(void 0===r?{}:r)[Ie(t)]);if(o&&!e.hasAttribute(t))return i!==b.bool&&i!==b.bool.isRequired&&void 0;var a=e.value;return t?a=e.getAttribute(t):t=e.name,a=Se(a,t,i)}var Me=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function Ve(n,e,o){var t,r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},i=r.capture,a=void 0===i||i,s=r.passive,l=void 0===s||s,u=n.ownerDocument.documentElement,c=se(u,e,function(e){var t=e.target;if(!n.contains(t)&&n!==t)return o(e)},{capture:a,passive:l});return t=u,Me&&(t.style.cursor="pointer"),c}var qe=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=t.length,r={},i=0;i<o;++i){var a=t[i];r[a.toUpperCase()]=a}return r}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize"),Fe="axa-change",ze="data-prevent-default",He=function(){function o(e){var i=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};u(this,o),this._handleClick=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var n=!i._lastToggleNode,o=t!==i._lastToggleNode,r=!n&&!o;n?(i._notify(qe.ENTER,t),i._onInteractive()):o&&i._notify(qe.MOVE,t,i._lastToggleNode),i._lastToggleNode=t,r&&i._options.sameClickClose&&i._close()},this._handleClose=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),i._close()},this._handleKeyUp=function(e){(e.key===qe.ESCAPE||e.key===qe.ESC||27===e.keyCode)&&(e.preventDefault(),i._close())},this._init(e,t)}return c(o,[{key:"_init",value:function(e,t){e&&(this._wcNode=e),t&&(this._options=i({},o.DEFAULTS,t));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=se(this._container,qe.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=se(this._container,qe.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=Ve(this._container,qe.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=se(this._container.ownerDocument,qe.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(ze)?Ue(e,ze):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(qe.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),o}();He.DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var Ke=H(function(n){var e,t;return t=e=function(e){function t(){return u(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d(t,n),t}(),e.version="2.0.1-beta.223",t},function(t){return function(e){function a(){var e,t,n;u(this,a);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return(t=n=h(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(r))))._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;n.contextNode&&(clearTimeout(n.timeoutId),n.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode,e)},10)),n.unContextEnabled&&n.unContextEnabled(),n.unContextEnabled=ce("context/available",n._makeContextReady)},h(n,t)}return d(a,t),c(a,[{key:"connectedCallback",value:function(){p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this)&&p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this)&&p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;ue[e]||(ue[e]={count:0,queue:[]});var o=ue[e].queue;Array.isArray(o)?o.push([e,t,n]):Z(n,e,t)}("context/available",this.__contextName=e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),a}()},function(t){return function(e){function n(){return u(this,n),h(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return d(n,t),c(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):p(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else r(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else r(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else r(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(t){return function(e){function i(){var e,t,s;u(this,i);for(var n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=s=h(this,(e=i.__proto__||Object.getPrototypeOf(i)).call.apply(e,[this].concat(o))))._reduceProps=function(e,t){var n=e.props,o=e.shouldUpdate,r="_"+t,i=n[t],a=s[r];return o||s.shouldUpdateCallback(i,a)?(s.props[t]=i,{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},h(s,t)}return d(i,t),c(i,[{key:"init",value:function(e){var t=this;p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"init",this).call(this,e),this._isConnected=!1,this.props={},this.updatedDebounced=le(function(){return t.updated&&t.updated()},50);var n=this.constructor.observedAttributes;Array.isArray(n)&&n.forEach(function(e){Ie(e)})}},{key:"connectedCallback",value:function(){var o=this;if(p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(e)){var r=this.constructor.propTypes;e.forEach(function(e){var t=Ie(e);if(o.hasAttribute(e)){var n=Ue(o,e,r[t]);o.props[t]=n}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this)&&p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this).call(this,e,t,n),this.shouldUpdateCallback(n,t)){var o=Ie(e);if(this.hasAttribute(e)){var r=this.constructor.propTypes;this.props[o]=Se(n,e,r[o])}else this.props[o]=null;this.checkPropTypes(),"value"===e&&null!==n&&Z(this,Fe,n,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t,o=Object.keys(e).filter(function(e){return-1<n.indexOf(Te(e))}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),o&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName;t&&b.checkPropTypes(t,this.props,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}],[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(Te)}}]),i}()},function(t){return function(e){function l(){return u(this,l),h(this,(l.__proto__||Object.getPrototypeOf(l)).apply(this,arguments))}return d(l,t),c(l,[{key:"init",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.template,n=a(e,["template"]);p(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"init",this).call(this,n),this._template=t,this._hasTemplate=!!t,this._hasRendered=!1,this.updated=this.render}},{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var o=document.createDocumentFragment(),r=[];this.firstChild;)r.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=r,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});Ee||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var i=t(this.props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(e){a.appendChild(e)});else if(i){if("string"==typeof i)throw new Ae(this);a.appendChild(i)}if(e)p(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"appendChild",this).call(this,a);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":_(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":_(t)))throw new Error("componentMorph: newTree should be an object");me(t,e)}(this,s),function(){for(var e=void 0;e=he.pop();)delete e.isSameNode;he=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),l}()},function(t){return function(e){function r(){return u(this,r),h(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return d(r,t),c(r,[{key:"init",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,n=void 0===t?"":t,o=a(e,["styles"]);p(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"init",this).call(this,o),this._styles=n}},{key:"connectedCallback",value:function(){p(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this)&&p(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),r}()}),$e=(H(Ke,W),H(Ke,function(r){return function(e){function a(){var e,t,n;u(this,a);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return(t=n=h(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(r))))._appendStyles=function(){a.appendGlobalStyles(n._styles,n.nodeName)},h(n,t)}return d(a,r),c(a,null,[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:r.uuidv4();if(e&&!B[t]){var n=document.createElement("style"),o=document.createTextNode(e);B[t]=!0,n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),a}()},W)(HTMLElement));var We=/\n[\s]+$/,Be=/^\n[\s]+/,Ge=/[\s]+$/,Ze=/^[\s]+/,Je=/[\n\s]+/g,Ye=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],Xe=["code","pre","textarea"],Qe=function e(t,n){if(Array.isArray(n))for(var o,r,i=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var u=n[s];if(Array.isArray(u))e(t,u);else{("number"==typeof u||"boolean"==typeof u||"function"==typeof u||u instanceof Date||u instanceof RegExp)&&(u=u.toString());var c=t.childNodes[t.childNodes.length-1];if("string"==typeof u)a=!0,c&&"#text"===c.nodeName?c.nodeValue+=u:(u=document.createTextNode(u),t.appendChild(u),c=u),s===l-1&&(a=!1,-1===Ye.indexOf(i)&&-1===Xe.indexOf(i)?""===(o=c.nodeValue.replace(Be,"").replace(Ge,"").replace(We,"").replace(Je," "))?t.removeChild(c):c.nodeValue=o:-1===Xe.indexOf(i)&&(r=0===s?"":" ",o=c.nodeValue.replace(Be,r).replace(Ze," ").replace(Ge,"").replace(We,"").replace(Je," "),c.nodeValue=o));else if(u&&u.nodeType){a&&(a=!1,-1===Ye.indexOf(i)&&-1===Xe.indexOf(i)?""===(o=c.nodeValue.replace(Be,"").replace(We,"").replace(Je," "))?t.removeChild(c):c.nodeValue=o:-1===Xe.indexOf(i)&&(o=c.nodeValue.replace(Ze," ").replace(Be,"").replace(We,"").replace(Je," "),c.nodeValue=o));var p=u.nodeName;p&&(i=p.toLowerCase()),t.appendChild(u)}}}};var et,tt=function(e){var t,n=document.createElement("div");return n.innerHTML=e,t=n.childNodes,Array.isArray(t)?t:[].slice.call(t)},nt=e(function(e){!function(){var i={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=void 0===n?"undefined":_(n);if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n))e.push(a.apply(null,n));else if("object"===o)for(var r in n)i.call(n,r)&&n[r]&&e.push(r)}}return e.join(" ")}e.exports?e.exports=a:window.classNames=a}()}),ot=function(e){var t,n,o,s=e.value,r=e.items;return[(n=document.createElement("button"),n.setAttribute("type","button"),n.setAttribute("class","m-header-languages__drop-down-toggle js-dropdown__toggle"),Qe(n,["\n    ",function(t,e){if(!e||!Array.isArray(e)||!e.length)return"";var n=e.filter(function(e){return e.name===t})[0];return n?n.name:e[0].name}(s,r),"\n    ",(t=document.createElement("axa-icon"),t.setAttribute("icon","angle-bracket-down"),t.setAttribute("classes","m-header-languages__drop-down-icon"),t),"\n  "]),n),(o=document.createElement("ul"),o.setAttribute("class","m-header-languages__list js-dropdown__content"),Qe(o,["\n    ",Array.isArray(r)&&r.map(function(e){var t,n,o=e.url,r=void 0===o?"":o,i=e.name,a=e.isActive;return(n=document.createElement("li")).setAttribute("class","m-header-languages__list-item"),Qe(n,["\n        ",(t=document.createElement("a"),t.setAttribute("data-index",""+String(i)),t.setAttribute("data-selected",""+String(i===s?"true":"false")),t.setAttribute("href",""+String(r)),t.setAttribute("class",""+String(nt("m-header-languages__list-link",{"is-header-languages-active":a}))),Qe(t,["\n          ",tt(i),"\n        "]),t),"\n      "]),n}),"\n  "]),o)]},rt=function(){if(!window.getComputedStyle)return null;var e=window.getComputedStyle(document.documentElement,""),t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return{dom:"WebKit|Moz|MS|O".match(new RegExp("("+t+")","i"))[1],lowercase:t,css:"-"+t+"-",js:t[0].toUpperCase()+t.slice(1)}}().lowercase,it=function(){var e=window.requestAnimationFrame||window[rt+"RequestAnimationFrame"];if(e)e=e.bind(window);else{var r=0;e=function(e){var t=Date.now(),n=Math.max(0,16-(t-r)),o=setTimeout(function(){e(t+n)},n);return r=t+n,o}}return e}(),at=(et=(et=window.cancelAnimationFrame||window[rt+"CancelAnimationFrame"]||window[rt+"CancelRequestAnimationFrame"])?et.bind(window):function(e){clearTimeout(e)},function(e){function o(e,t){u(this,o),t=i({},o.DEFAULTS,t);var n=h(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,e,t));return n.handleTransitionEnd=function(e){"height"===e.propertyName&&(n._removeHeightOnElement(e.target),n.offInteractive(),ne(n.wcNode,n.options.isAnimatingClass))},n.handleClick=function(e){if(e.preventDefault(),n.offClicks(),n.wcNode.getAttribute("value")===e.target.dataset.index)n.leave(n.lastToggleNode),n.deleteLastToggleNode();else{var t=e.target.dataset.index;n.wcNode.setAttribute("value",t)}},n.handleChange=function(e){e.preventDefault(),n.wcNode&&n.wcNode.setAttribute("value",e.target.value)},n.options=t,n.wcNode=e,n.isOpen=!1,n.unInputEnd&&n.unInputEnd(),n.unInputEnd=se(n.wcNode,qe.CHANGE,n.options.nativeSelectClass,n.handleChange,{capture:!0,passive:!1}),n}return d(o,He),c(o,[{key:"onInteractive",value:function(){this.offInteractive(),this.unTransitionEnd=se(this.wcNode,"transitionend",this.handleTransitionEnd)}},{key:"onClicks",value:function(){this.offClicks(),this.unClickEnd=se(this.wcNode,qe.CLICK,this.options.selectClass,this.handleClick,{capture:!0,passive:!1})}},{key:"offInteractive",value:function(){this.unTransitionEnd&&this.unTransitionEnd()}},{key:"offClicks",value:function(){this.unClickEnd&&this.unClickEnd()}},{key:"enter",value:function(e){var t=e.parentNode,n=t.lastElementChild;if(!this.isOpen){this.isOpen=!0,Q(t,this.options.isAnimatingClass),n.style.overflow="scroll";var o=n.scrollHeight;n.style.overflow="",this.onInteractive(),this.onClicks(),n.style.height=o+"px",Q(t,this.options.isOpenClass)}}},{key:"leave",value:function(e){var t=this,n=e.parentNode,o=n.lastElementChild,r=o.scrollHeight;this.isOpen&&(this.isOpen=!1,this.onInteractive(),this.onClicks(),Q(n,this.options.isAnimatingClass),it(function(){o.style.height=r+"px",it(function(){ne(n,t.options.isOpenClass),o.style.height=0})}))}},{key:"_removeHeightOnElement",value:function(e){this.isOpen&&(e.style.height="")}},{key:"reset",value:function(){var e=this.wcNode.querySelector(this.options.containerClass);e&&(e.lastElementChild.style.height="",ne(e,this.options.isOpenClass))}},{key:"destroy",value:function(){p(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"destroy",this).call(this),this.reset(),delete this.wcNode,delete this.options}}]),o}());at.DEFAULTS={containerClass:".js-dropdown",toggleClass:"js-dropdown__toggle",nativeSelectClass:"js-dropdown__native-select",isOpenClass:"is-dropdown-open",isAnimatingClass:"is-dropdown-animating",selectClass:"js-dropdown__content"};var st,lt,ut,ct=function(e){function t(){return u(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d(t,$e),c(t,[{key:"init",value:function(){p(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"init",this).call(this,{styles:".m-header-languages {\n  position: relative;\n  display: block;\n  text-align: left; }\n\n.m-header-languages__drop-down-toggle {\n  background: transparent;\n  border: none;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  cursor: pointer;\n  position: relative;\n  padding: 10.5px 50px 10.5px 20px;\n  color: #7f7f7f;\n  text-transform: uppercase; }\n  .m-header-languages__drop-down-toggle:hover, .m-header-languages__drop-down-toggle:active, .m-header-languages__drop-down-toggle:focus {\n    outline: none;\n    cursor: pointer; }\n  @media (min-width: 576px) {\n    .m-header-languages__drop-down-toggle {\n      font-size: 13px;\n      line-height: 1.38; } }\n  .m-header-languages__drop-down-toggle:hover, .m-header-languages__drop-down-toggle:active, .m-header-languages__drop-down-toggle:focus {\n    cursor: pointer; }\n\n.m-header-languages__drop-down-icon {\n  width: 16px;\n  height: 16px;\n  display: block;\n  fill: currentColor;\n  position: absolute;\n  top: 50%;\n  right: 20px;\n  margin-top: -8px;\n  color: #999;\n  -webkit-transition: -webkit-transform 0.3s ease;\n  transition: -webkit-transform 0.3s ease;\n  transition: transform 0.3s ease;\n  transition: transform 0.3s ease, -webkit-transform 0.3s ease; }\n  .is-dropdown-open .m-header-languages__drop-down-icon {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n\n.m-header-languages__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  position: absolute;\n  top: 100%;\n  z-index: 1070;\n  height: 0;\n  min-width: 100%;\n  overflow: hidden;\n  -webkit-transition: height 0.3s ease;\n  transition: height 0.3s ease;\n  background: #fafafa;\n  -webkit-box-shadow: 0 3px 10px -2px rgba(0, 0, 0, 0.3);\n          box-shadow: 0 3px 10px -2px rgba(0, 0, 0, 0.3); }\n  .is-dropdown-open > .m-header-languages__list {\n    height: auto; }\n\n.m-header-languages__list-item {\n  display: block;\n  border-width: 0 1px;\n  border-color: #e5e5e5;\n  border-style: solid; }\n  .m-header-languages__list-item:first-child {\n    border-top-width: 1px; }\n  .m-header-languages__list-item:last-child {\n    border-bottom-color: #ccc;\n    border-bottom-width: 2px; }\n\n.m-header-languages__list-link {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  display: block;\n  padding: 10px 20px;\n  text-transform: uppercase;\n  color: #7f7f7f; }\n  @media (min-width: 576px) {\n    .m-header-languages__list-link {\n      font-size: 13px;\n      line-height: 1.38; } }\n  .m-header-languages__list-link.is-header-languages-active, .m-header-languages__list-link:hover, .m-header-languages__list-link:active, .m-header-languages__list-link:focus {\n    text-decoration: none;\n    color: #00005b; }\n",template:ot})}},{key:"willRenderCallback",value:function(){this.className=this.initialClassName+" m-header-languages js-dropdown"}},{key:"didRenderCallback",value:function(){this.dropDown&&this.dropDown.destroy(),this.dropDown=new at(this,{containerClass:null})}},{key:"disconnectedCallback",value:function(){p(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"disconnectedCallback",this).call(this),this.dropDown&&(this.dropDown.destroy(),delete this.dropDown)}}]),t}();return ct.tagName="axa-header-languages",ct.propTypes={items:b.arrayOf(b.shape({url:z,name:b.string,isActive:b.bool})),value:N},st=ct.tagName,lt=ct,customElements.get(st)||customElements.define(st,lt,ut),ct}();
