!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.StyleGuideWebComponent={})}(this,function(e){"use strict";function t(e,t){return e(t={exports:{}},t.exports),t.exports}var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}})()&&Object.assign;var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},u=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},p=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},d=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},a=function(e,t){var n={};for(var o in e)0<=t.indexOf(o)||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},f=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},c=function e(t,n,o,r){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,o,r)}else if("value"in i&&i.writable)i.value=o;else{var s=i.set;void 0!==s&&s.call(r,o)}return o},h=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},k=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function y(){}var v=t(function(e){e.exports=function(){function e(e,t,n,o,r,i){if(i!==s){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=y,n.PropTypes=n}()}),b=0;function m(e,t){var n=e[t];return"function"==typeof n&&(e[t]=function(t){function n(){return t.apply(void 0,arguments)}return 0===b&&(b++,Object.keys(t).map(function(e){return n[e]=t[e],e}).reduce(m,n),b--),n}(n)),e}var g=v;Object.keys(g).reduce(m,g);var C,O,w,x,T=g.oneOf(["left","center","right"]),A=g.oneOf(["left","right"]),N=(g.oneOf(["top","bottom"]),g.oneOf(["up","down"])),j=g.oneOf(["ok","pending","error","unknown"]),E=g.oneOf(["row","col","rowgroup","colgroup","auto"]),S=g.oneOfType([g.string,g.number]),P={text:S,value:g.any,rowspan:S,colspan:S,scope:E,align:T,dense:g.bool},D={float:A,strong:g.bool,bold:g.bool},R=g.oneOfType([g.string,g.number]),L=g.oneOfType([R,g.shape(i({},P,{sort:N,sortActive:g.bool}))]),F=g.oneOfType([R,g.shape(i({},P,D,{action:g.bool,state:j}))]),I=g.oneOfType([R,g.shape(i({},P,D))]),U=g.oneOfType([g.arrayOf(L),g.shape({cells:g.arrayOf(L)})]),M=g.oneOfType([g.arrayOf(F),g.shape({cells:g.arrayOf(F),action:g.bool})]),V=g.oneOfType([g.arrayOf(I),g.shape({cells:g.arrayOf(I)})]),q=(g.oneOfType([U,g.arrayOf(U)]),g.oneOfType([M,g.arrayOf(M)]),g.oneOfType([V,g.arrayOf(V)]),t(function(e){!function(){var i={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=void 0===n?"undefined":_(n);if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n))e.push(a.apply(null,n));else if("object"===o)for(var r in n)i.call(n,r)&&n[r]&&e.push(r)}}return e.join(" ")}e.exports?e.exports=a:window.classNames=a}()})),z=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}},B={},W=(C=Object,O=C.getPrototypeOf||function(e){return e.__proto__},w=C.setPrototypeOf||function(e,t){return e.__proto__=t,e},x="object"===("undefined"==typeof Reflect?"undefined":_(Reflect))?Reflect.construct:function(e,t,n){var o,r=[null];return r.push.apply(r,t),o=e.bind.apply(e,r),w(new o,n.prototype)},function(e){var t=O(e);return w(e,w(function(){return x(t,arguments,O(this).constructor)},t))}),K=function(n){return W(function(e){function t(){return l(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d(t,n),u(t,[{key:"init",value:function(){var e;this._id=((e=this.nodeName)in B||(B[e]=0),++B[e]),this._initialised=!0}},{key:"connectedCallback",value:function(){this._initialised||this.init()}},{key:"attributeChangedCallback",value:function(){this._initialised||this.init()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}())},Y={},H=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,r=t.cancelable,i=void 0!==r&&r,a=t.detail,s=void 0===a?void 0:a,c=document.createEvent("CustomEvent");c.initCustomEvent(e,o,i,s);var l=c.preventDefault;return c.preventDefault=function(){l.call(c);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},c}}();function $(e,t,n){var o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},r=new H(t,i({},o,{detail:n}));return e.dispatchEvent(r)}var G=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}(),J=/^\s+|\s{2,}|\s+$/g;function X(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}function Z(e){for(var t=arguments.length,n=Array(1<t?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r=ee.apply(void 0,[e].concat(n));if(!0!==r){var i=[].concat(n);Array.isArray(r)&&(i=r.reduce(Q,[])),i&&(e.className+=" "+i.join(" "))}}function Q(e,t){var n=t.className;return t.hasClass||e.push(n),e}function ee(e){for(var n=e.className,o=!1,r=!0,t=arguments.length,i=Array(1<t?t-1:0),a=1;a<t;a++)i[a-1]=arguments[a];var s=i.map(function(e){var t=X(e).test(n);t?o=!0:r=!1;return{className:e,hasClass:t}});return!(!r&&!o)&&s}function te(e){for(var t=arguments.length,n=Array(1<t?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r=ee.apply(void 0,[e].concat(n));if(!1!==r){var i=[].concat(n);if(Array.isArray(r)&&(i=r.reduce(ne,[])),i){var a=e.className;e.className=i.reduce(oe,a)}}}function ne(e,t){var n=t.className;return t.hasClass&&e.push(n),e}function oe(e,t){var n=X(t,"g");return e.replace(n," ").replace(J," ")}var re=/\s+/,ie={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,r=void 0,i=0;i<o;++i)if(void 0!==e[r=n[i]])return t[r];return""}()};function ae(n,e,o,r){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},i=t.capture,a=void 0!==i&&i,s=t.passive,c=void 0===s||s;if(ie[e]&&(e=ie[e]),!n||!e)return null;var l=void 0===o?"undefined":_(o),u=o&&"string"===l;if("function"===l){if(r){var p=r;a=p.capture,c=p.passive}r=o}for(var d=G?{capture:a,passive:c}:a,f=u?function(e){var t=e.target;for(;!ee(t,o)&&t!==n;)t=t.parentNode;if(t!==n)return r(e,t)}:r,h=e.split(re),y=h.length,v=0;v<y;++v)n.addEventListener(h[v],f,d);return function e(){for(var t=0;t<y;++t)n.removeEventListener(h[t],f,d);!function(e,t){if(!e)return;for(var n=Object.keys(e),o=n.length,r=0;r<o;++r){var i=n[r];if(e[i]===t)return delete e[i]}}(this,e)}}function se(o){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,i=void 0!==t&&t,n=e.trailing,a=void 0===n||n,s=e.maxWait,c=void 0!==s&&s,l=void 0,u=void 0,p=void 0,d=void 0,f=!1,h=r!==c,y=!1!==c;function v(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return l=t,h&&(u&&clearTimeout(u),u=setTimeout(_,r)),y&&!p&&(p=setTimeout(b,c)),i&&!f&&(f=!0,d=o.apply(void 0,k(l))),d}return v.flush=function(){(u||p)&&(d=o.apply(void 0,k(l)));return g(),d},v.cancel=g,v;function _(){p&&clearTimeout(p),m()}function b(){u&&clearTimeout(u),m()}function m(){a&&(d=o.apply(void 0,k(l))),p=u=null,f=!1}function g(){u&&(clearTimeout(u),u=null),p&&(clearTimeout(p),p=null),l=void 0,f=!1}}window.__subscriptions=window.__subscriptions||{};var ce=window.__subscriptions;function le(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;ce[e]||(ce[e]={count:0,queue:[]});var o=ce[e].queue;Array.isArray(o)?o.push([e,t,n]):$(n,e,t)}function ue(e,t){var n=ae(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);ce[e]||(ce[e]={count:0});var o,r=ce[e];return r.count++,r.onsubscribe||(r.onsubscribe=se((o=e,function(){$(document,"pubsub/onsubscribe",o),$(document,"pubsub/onsubscribe/"+o,o),ce[o]&&delete ce[o].unsubscribe}),100)),r.onsubscribe(),function(){r.count--,n.call(this),r.count<=0&&delete ce[e]}}ae(document,"pubsub/onsubscribe",function(e){var t=e.detail;ce[t]||(ce[t]={count:0});var n=ce[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=h(e,3),n=t[0],o=t[1],r=t[2];$(r,n,o)}),delete n.queue)});var pe,de=function(e,t){return e===t},fe=((pe=function(){var e;return(e=console).log.apply(e,arguments)},function(){var r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:de;return function(){for(var e=arguments.length,o=Array(e),t=0;t<e;t++)o[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return r.apply(void 0,[].concat(o,t))?pe.apply(void 0,arguments):void 0}}}})()(!0),[]);var he=1,ye=3,ve=8;function _e(e,t){var n=e.nodeType,o=e.nodeName;n===he&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),o=t.constructor.observedAttributes,r=o&&Array.isArray(o)&&o.length,i=function(e){return n&&r&&-1===o.indexOf(e)},a=t.attributes,s=e.attributes,c=null,l=null,u=null,p=null,d=s.length-1;0<=d;--d)if(p=s[d],u=p.name,c=p.namespaceURI,l=p.value,!i(u))if(c){var f=p.localName;t.getAttributeNS(c,f||u)!==l&&t.setAttributeNS(c,u,l)}else t.hasAttribute(u)?t.getAttribute(u)!==l&&("null"===l||"undefined"===l?t.removeAttribute(u):t.setAttribute(u,l)):t.setAttribute(u,l);for(var h=a.length-1;0<=h;--h)if(!1!==(p=a[h]).specified){if(u=p.name,c=p.namespaceURI,i(u))continue;c?(u=p.localName||u,e.hasAttributeNS(c,u)||t.removeAttributeNS(c,u)):e.hasAttributeNS(null,u)||t.removeAttribute(u)}}(e,t),n!==ye&&n!==ve||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===o?function(e,t){var n=e.value,o=t.value;be(e,t,"checked"),be(e,t,"disabled"),n!==o&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===o?be(e,t,"selected"):"TEXTAREA"===o&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function be(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var me=3;function ge(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(_e(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,o=void 0,r=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],o=e.childNodes[s-a],n||o;s++)if(o)if(n)if(ke(o,n))(r=ge(o,n))!==n&&(t.replaceChild(r,n),a++);else{i=null;for(var c=s;c<t.childNodes.length;c++)if(ke(t.childNodes[c],o)){i=t.childNodes[c];break}i?((r=ge(o,i))!==i&&a++,t.insertBefore(r,n)):o.id||n.id?(t.insertBefore(o,n),a++):(r=ge(o,n))!==n&&(t.replaceChild(r,n),a++)}else t.appendChild(o),a++;else t.removeChild(n),s--}(e,t),t):null:e}function ke(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===me&&e.nodeValue===t.nodeValue)}var Ce,Oe,we,xe,Te=(Ce=Object,Oe=Ce.getPrototypeOf||function(e){return e.__proto__},we=Ce.setPrototypeOf||function(e,t){return e.__proto__=t,e},xe="object"===("undefined"==typeof Reflect?"undefined":_(Reflect))?Reflect.construct:function(e,t,n){var o,r=[null];return r.push.apply(r,t),o=e.bind.apply(e,r),we(new o,n.prototype)},function(e){var t=Oe(e);return we(e,we(function(){return xe(t,arguments,Oe(this).constructor)},t))})(function(e){function s(e){var t;l(this,s);for(var n="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",o=arguments.length,r=Array(1<o?o-1:0),i=1;i<o;i++)r[i-1]=arguments[i];var a=f(this,(t=s.__proto__||Object.getPrototypeOf(s)).call.apply(t,[this,n].concat(r)));return Error.captureStackTrace&&Error.captureStackTrace(a,s),a.name="TemplateNoStringReturnException",a}return d(s,e),s}(Error)),Ae=!!document.createDocumentFragment().children,Ne=/[A-Z]/g;function je(e){return e.replace(Ne,Ee)}function Ee(e,t,n){var o=e.toLowerCase(),r=n.charAt(t+1);return 0===t||r.toUpperCase()===r?o:"-"+o}var Se=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function Pe(t,n,e){var o=t;if(e)return function(t,n,e){var o=t;switch(e){case g.string:case g.string.isRequired:return t;case g.bool:case g.bool.isRequired:if(!t||n===t)return!0;case g.number:case g.number.isRequired:case g.object:case g.object.isRequired:case g.array:case g.array.isRequired:default:if(Se.test(t))try{o=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}return o}(t,n,e);if(t&&n!==t){if(Se.test(t))try{o=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else o=!0;return o}var De=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,Re=/[-_]+/g;function Le(e){return e.replace(De,Fe)}function Fe(e,t){return 0==+e||Re.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function Ie(e,t,n){var o=1===e.nodeType,r=e.constructor.propTypes,i=n;!n&&o&&(i=(void 0===r?{}:r)[Le(t)]);if(o&&!e.hasAttribute(t))return i!==g.bool&&i!==g.bool.isRequired&&void 0;var a=e.value;return t?a=e.getAttribute(t):t=e.name,a=Pe(a,t,i)}function Ue(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=t.length,r={},i=0;i<o;++i){var a=t[i];r[a.toUpperCase()]=a}return r}var Me=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function Ve(n,e,o){var t,r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},i=r.capture,a=void 0===i||i,s=r.passive,c=void 0===s||s,l=n.ownerDocument.documentElement,u=ae(l,e,function(e){var t=e.target;if(!n.contains(t)&&n!==t)return o(e)},{capture:a,passive:c});return t=l,Me&&(t.style.cursor="pointer"),u}var qe=Ue("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize"),ze="axa-change",Be="data-prevent-default";(function(){function o(e){var i=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};l(this,o),this._handleClick=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var n=!i._lastToggleNode,o=t!==i._lastToggleNode,r=!n&&!o;n?(i._notify(qe.ENTER,t),i._onInteractive()):o&&i._notify(qe.MOVE,t,i._lastToggleNode),i._lastToggleNode=t,r&&i._options.sameClickClose&&i._close()},this._handleClose=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),i._close()},this._handleKeyUp=function(e){(e.key===qe.ESCAPE||e.key===qe.ESC||27===e.keyCode)&&(e.preventDefault(),i._close())},this._init(e,t)}return u(o,[{key:"_init",value:function(e,t){e&&(this._wcNode=e),t&&(this._options=i({},o.DEFAULTS,t));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=ae(this._container,qe.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=ae(this._container,qe.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=Ve(this._container,qe.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=ae(this._container.ownerDocument,qe.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(Be)?Ie(e,Be):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(qe.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),o}()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var We=z(function(n){var e,t;return t=e=function(e){function t(){return l(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d(t,n),t}(),e.version="2.0.1-beta.223",t},function(t){return function(e){function a(){var e,t,n;l(this,a);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return(t=n=f(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(r))))._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;n.contextNode&&(clearTimeout(n.timeoutId),n.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode,e)},10)),n.unContextEnabled&&n.unContextEnabled(),n.unContextEnabled=ue("context/available",n._makeContextReady)},f(n,t)}return d(a,t),u(a,[{key:"connectedCallback",value:function(){p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this)&&p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this)&&p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,le("context/available",this.__contextName=e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),a}()},function(t){return function(e){function n(){return l(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return d(n,t),u(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):p(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(t){return function(e){function i(){var e,t,s;l(this,i);for(var n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=s=f(this,(e=i.__proto__||Object.getPrototypeOf(i)).call.apply(e,[this].concat(o))))._reduceProps=function(e,t){var n=e.props,o=e.shouldUpdate,r="_"+t,i=n[t],a=s[r];return o||s.shouldUpdateCallback(i,a)?(s.props[t]=i,{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},f(s,t)}return d(i,t),u(i,[{key:"init",value:function(e){var t=this;p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"init",this).call(this,e),this._isConnected=!1,this.props={},this.updatedDebounced=se(function(){return t.updated&&t.updated()},50);var n=this.constructor.observedAttributes;Array.isArray(n)&&n.forEach(function(e){Le(e)})}},{key:"connectedCallback",value:function(){var o=this;if(p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(e)){var r=this.constructor.propTypes;e.forEach(function(e){var t=Le(e);if(o.hasAttribute(e)){var n=Ie(o,e,r[t]);o.props[t]=n}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this)&&p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this).call(this,e,t,n),this.shouldUpdateCallback(n,t)){var o=Le(e);if(this.hasAttribute(e)){var r=this.constructor.propTypes;this.props[o]=Pe(n,e,r[o])}else this.props[o]=null;this.checkPropTypes(),"value"===e&&null!==n&&$(this,ze,n,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t,o=Object.keys(e).filter(function(e){return-1<n.indexOf(je(e))}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),o&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName;t&&g.checkPropTypes(t,this.props,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}],[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(je)}}]),i}()},function(t){return function(e){function c(){return l(this,c),f(this,(c.__proto__||Object.getPrototypeOf(c)).apply(this,arguments))}return d(c,t),u(c,[{key:"init",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.template,n=a(e,["template"]);p(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"init",this).call(this,n),this._template=t,this._hasTemplate=!!t,this._hasRendered=!1,this.updated=this.render}},{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var o=document.createDocumentFragment(),r=[];this.firstChild;)r.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=r,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});Ae||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var i=t(this.props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(e){a.appendChild(e)});else if(i){if("string"==typeof i)throw new Te(this);a.appendChild(i)}if(e)p(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"appendChild",this).call(this,a);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":_(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":_(t)))throw new Error("componentMorph: newTree should be an object");ge(t,e)}(this,s),function(){for(var e=void 0;e=fe.pop();)delete e.isSameNode;fe=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),c}()},function(t){return function(e){function r(){return l(this,r),f(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return d(r,t),u(r,[{key:"init",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,n=void 0===t?"":t,o=a(e,["styles"]);p(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"init",this).call(this,o),this._styles=n}},{key:"connectedCallback",value:function(){p(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this)&&p(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),r}()}),Ke=(z(We,K),z(We,function(r){return function(e){function a(){var e,t,n;l(this,a);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return(t=n=f(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(r))))._appendStyles=function(){a.appendGlobalStyles(n._styles,n.nodeName)},f(n,t)}return d(a,r),u(a,null,[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:r.uuidv4();if(e&&!Y[t]){var n=document.createElement("style"),o=document.createTextNode(e);Y[t]=!0,n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),a}()},K)(HTMLElement));var Ye=/\n[\s]+$/,He=/^\n[\s]+/,$e=/[\s]+$/,Ge=/^[\s]+/,Je=/[\n\s]+/g,Xe=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],Ze=["code","pre","textarea"],Qe=function e(t,n){if(Array.isArray(n))for(var o,r,i=t.nodeName.toLowerCase(),a=!1,s=0,c=n.length;s<c;s++){var l=n[s];if(Array.isArray(l))e(t,l);else{("number"==typeof l||"boolean"==typeof l||"function"==typeof l||l instanceof Date||l instanceof RegExp)&&(l=l.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof l)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=l:(l=document.createTextNode(l),t.appendChild(l),u=l),s===c-1&&(a=!1,-1===Xe.indexOf(i)&&-1===Ze.indexOf(i)?""===(o=u.nodeValue.replace(He,"").replace($e,"").replace(Ye,"").replace(Je," "))?t.removeChild(u):u.nodeValue=o:-1===Ze.indexOf(i)&&(r=0===s?"":" ",o=u.nodeValue.replace(He,r).replace(Ge," ").replace($e,"").replace(Ye,"").replace(Je," "),u.nodeValue=o));else if(l&&l.nodeType){a&&(a=!1,-1===Xe.indexOf(i)&&-1===Ze.indexOf(i)?""===(o=u.nodeValue.replace(He,"").replace(Ye,"").replace(Je," "))?t.removeChild(u):u.nodeValue=o:-1===Ze.indexOf(i)&&(o=u.nodeValue.replace(Ge," ").replace(He,"").replace(Ye,"").replace(Je," "),u.nodeValue=o));var p=l.nodeName;p&&(i=p.toLowerCase()),t.appendChild(l)}}}};function et(e,t){var n,o;return[(n=document.createElement("div"),n.setAttribute("class","m-sticky__placeholder js-sticky__placeholder"),n),(o=document.createElement("div"),o.setAttribute("class","m-sticky__box js-sticky__box"),Qe(o,[t]),o)]}var tt="pageYOffset"in window?function(){return window.pageYOffset}:function(){var e=document,t=e.body;return e.documentElement.scrollTop||t.scrollTop||0};var nt,ot=function(){if(!window.getComputedStyle)return null;var e=window.getComputedStyle(document.documentElement,""),t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return{dom:"WebKit|Moz|MS|O".match(new RegExp("("+t+")","i"))[1],lowercase:t,css:"-"+t+"-",js:t[0].toUpperCase()+t.slice(1)}}().lowercase,rt=function(){var e=window.requestAnimationFrame||window[ot+"RequestAnimationFrame"];if(e)e=e.bind(window);else{var r=0;e=function(e){var t=Date.now(),n=Math.max(0,16-(t-r)),o=setTimeout(function(){e(t+n)},n);return r=t+n,o}}return e}(),it=(nt=(nt=window.cancelAnimationFrame||window[ot+"CancelAnimationFrame"]||window[ot+"CancelRequestAnimationFrame"])?nt.bind(window):function(e){clearTimeout(e)},void 0),at=0,st=["resize","orientationchange"].join(" "),ct=[st,"scroll","touchstart","touchmove","touchend","pageshow","load"].join(" "),lt=function(){function e(){var h=this;l(this,e),this._change=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).type;0<=st.indexOf(e)&&(h.forceRepaint=!0),h.framePending||rt(function(){for(var e=h.containerNodes,t=h.forceRepaint,n=h.lastScrollTop,o=h.isDirectionFrozen,r=h.lastDirection,i=tt(),a=i-n,s=o?r:0<a?1:a<0?-1:r,c=0,l=e.length;c<l;c++){var u=e[c],p=u.getBoundingClientRect(),d=p.top,f=p.bottom;le("sticky-container/"+(d<=0&&0<=f?"active":"idle"),{containerTop:d,containerBottom:f,direction:s,forceRepaint:t},u)}h.lastScrollTop=i,h.lastDirection=s,h.framePending=!1,h.forceRepaint=!1})},this._freezeDirection=function(){h.isDirectionFrozen=!0,h.lastDirection=-1},this._thawDirection=function(){h.isDirectionFrozen=!1},this.forceRepaint=!1,this.framePending=!1,this.lastScrollTop=0,this.isDirectionFrozen=!1,this.containerNodes=[],this._on()}return u(e,[{key:"addContainer",value:function(e){this.containerNodes.push(e),this._change()}},{key:"_on",value:function(){this._off(),this._unChange=ae(window,ct,this._change),this._unFreezeDirection=ue("sticky-container/freeze-direction",this._freezeDirection),this._unThawDirection=ue("sticky-container/thaw-direction",this._thawDirection)}},{key:"_off",value:function(){this._unChange&&this._unChange(),this._unFreezeDirection&&this._unFreezeDirection(),this._unThawDirection&&this._unThawDirection()}},{key:"remove",value:function(e){var t,n,o;e&&(t=this.containerNodes,n=e,-1<(o=t.indexOf(n))&&t.splice(o,1)),--at<=0&&it&&(this._off(),delete this.containerNodes,it=null)}}]),e}();function ut(e,t){for(var n=[],o=Object.keys(t),r=o.length,i=0;i<r;++i){var a=o[i];n.push(a+":"+t[a]+";")}e.style.cssText=n.join("")}var pt=Ue("IS_IN_FLOW","IS_STICKY","IS_BOTTOM"),dt=function(){function t(e){l(this,t),vt.call(this),this.wcNode=e,this.state=pt.IS_IN_FLOW,this.lastDirection=0,this.placeholder=e.querySelector(t.DEFAULTS.placeholderClass),this.box=e.querySelector(t.DEFAULTS.boxClass),this.spy=(it||(it=new lt),at++,it)}return u(t,[{key:"_on",value:function(){this._off(),this._unActive=ue("sticky-container/active",this._update,this._contextNode),this._unIdle=ue("sticky-container/idle",this._update,this._contextNode)}},{key:"_off",value:function(){this._unActive&&this._unActive(),this._unIdle&&this._unIdle()}},{key:"destroy",value:function(){this._off(),this.spy.remove(),delete this.spy,delete this.roodNode,delete this.placeholder,delete this.box,delete this._contextNode}},{key:"contextNode",set:function(e){this._contextNode=e,this._on()}}]),t}();dt.DEFAULTS={placeholderClass:".js-sticky__placeholder",boxClass:".js-sticky__box",isStickyClass:"is-sticky-sticky",isBottomClass:"is-sticky-bottom",isScrollUp:"is-sticky-scroll-up",isScrollDown:"is-sticky-scroll-down"};var ft,ht,yt,vt=function(){var v=this;this._update=function(e){var t=e.detail,n=t.containerBottom,o=t.direction,r=t.forceRepaint,i=v.wcNode,a=v.state,s=o!==v.lastDirection,c=i.offsetHeight,l=i.offsetWidth,u=i.getBoundingClientRect(),p=u.left,d=u.top,f=0<d,h=d<=0&&c<=n,y=d<=0&&n<c;s&&1===o?(Z(i,dt.DEFAULTS.isScrollDown),te(i,dt.DEFAULTS.isScrollUp)):s&&-1===o&&(Z(i,dt.DEFAULTS.isScrollUp),te(i,dt.DEFAULTS.isScrollDown)),h&&(r||a!==pt.IS_STICKY)&&(v.state=pt.IS_STICKY,Z(i,dt.DEFAULTS.isStickyClass),te(i,dt.DEFAULTS.isBottomClass),ut(v.placeholder,{height:c+"px"}),ut(v.box,{left:p+"px",width:l+"px"})),y&&(r||a!==pt.IS_BOTTOM)&&(v.state=pt.IS_BOTTOM,te(i,dt.DEFAULTS.isStickyClass),Z(i,dt.DEFAULTS.isBottomClass),ut(v.placeholder,{height:c+"px"}),ut(v.box,{left:p+"px",width:l+"px"})),f&&(r||a!==pt.IS_IN_FLOW)&&(v.state=pt.IS_IN_FLOW,te(i,dt.DEFAULTS.isStickyClass),te(i,dt.DEFAULTS.isBottomClass),ut(v.placeholder,{height:""}),ut(v.box,{left:"",width:""}))}},_t=function(e){function t(){return l(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d(t,Ke),u(t,[{key:"init",value:function(){p(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"init",this).call(this,{styles:".m-sticky {\n  display: block; }\n\n.m-sticky__placeholder {\n  display: block;\n  height: 0; }\n\n.m-sticky__box {\n  display: block; }\n  .is-sticky-sticky > .m-sticky__box {\n    position: fixed;\n    top: 0;\n    z-index: 1020; }\n  .is-sticky-bottom > .m-sticky__box {\n    position: absolute;\n    bottom: 0;\n    z-index: 1020; }\n  .is-sticky-in-flow > .m-sticky__box {\n    position: static; }\n\n.m-sticky--debug > .m-sticky__box {\n  background: rgba(0, 0, 255, 0.5);\n  color: #fff; }\n  .m-sticky--debug > .m-sticky__box::before, .m-sticky--debug > .m-sticky__box::after {\n    content: '';\n    color: yellow; }\n\n.m-sticky--debug.is-sticky-sticky > .m-sticky__box {\n  background: rgba(255, 0, 0, 0.7); }\n  .m-sticky--debug.is-sticky-sticky > .m-sticky__box::before {\n    content: 'is-sticky'; }\n\n.m-sticky--debug.is-sticky-bottom > .m-sticky__box {\n  background: rgba(255, 165, 0, 0.7); }\n  .m-sticky--debug.is-sticky-bottom > .m-sticky__box::before {\n    content: 'is-bottom'; }\n\n.m-sticky--debug.is-sticky-in-flow > .m-sticky__box::before {\n  content: 'is-in-flow'; }\n\n.m-sticky--debug.is-sticky-scroll-up > .m-sticky__box::after {\n  content: 'is-scroll-up'; }\n\n.m-sticky--debug.is-sticky-scroll-down > .m-sticky__box::after {\n  content: 'is-scroll-down'; }\n",template:et}),this.consumeContext("axa-sticky-container")}},{key:"willRenderCallback",value:function(){var e=this.props.debug;this.className=q(this.initialClassName,"m-sticky js-sticky",{"m-sticky--debug":e})}},{key:"didRenderCallback",value:function(){this.sticky&&this.sticky.destroy(),this.sticky=new dt(this);var e=this.contextNode;e&&this.contextCallback(e)}},{key:"contextCallback",value:function(e){this.sticky&&(this.sticky.contextNode=e)}},{key:"disconnectedCallback",value:function(){this.sticky&&(this.sticky.destroy(),delete this.sticky)}}]),t}();_t.tagName="axa-sticky",_t.propTypes={debug:g.bool},ft=_t.tagName,ht=_t,customElements.get(ft)||customElements.define(ft,ht,yt),e.AXASticky=_t,e.default=_t,Object.defineProperty(e,"__esModule",{value:!0})});
