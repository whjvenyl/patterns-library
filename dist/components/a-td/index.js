var StyleGuideWebComponent=function(){"use strict";function t(t,e){return t(e={exports:{}},e.exports),e.exports}var e=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(t){r[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}})()&&Object.assign;var l="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},c=function(){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}}(),p=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},d=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},f=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},a=function(t,e){var n={};for(var r in t)0<=e.indexOf(r)||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},h=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},o=function t(e,n,r,o){var i=Object.getOwnPropertyDescriptor(e,n);if(void 0===i){var a=Object.getPrototypeOf(e);null!==a&&t(a,n,r,o)}else if("value"in i&&i.writable)i.value=r;else{var l=i.set;void 0!==l&&l.call(o,r)}return r},s=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,l=t[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&l.return&&l.return()}finally{if(o)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},x=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)};function g(){}var v,b,_,m,O=t(function(t){t.exports=function(){function t(t,e,n,r,o,i){if(i!==l){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return t}var n={array:t.isRequired=t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e};return n.checkPropTypes=g,n.PropTypes=n}()}),C=t(function(t){!function(){var i={}.hasOwnProperty;function a(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var r=void 0===n?"undefined":y(n);if("string"===r||"number"===r)t.push(n);else if(Array.isArray(n))t.push(a.apply(null,n));else if("object"===r)for(var o in n)i.call(n,o)&&n[o]&&t.push(o)}}return t.join(" ")}t.exports?t.exports=a:window.classNames=a}()}),k=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduceRight(function(t,e){return e(t)},t)}},w={},T=(v=Object,b=v.getPrototypeOf||function(t){return t.__proto__},_=v.setPrototypeOf||function(t,e){return t.__proto__=e,t},m="object"===("undefined"==typeof Reflect?"undefined":y(Reflect))?Reflect.construct:function(t,e,n){var r,o=[null];return o.push.apply(o,e),r=t.bind.apply(t,o),_(new r,n.prototype)},function(t){var e=b(t);return _(t,_(function(){return m(e,arguments,b(this).constructor)},e))}),j=function(n){return T(function(t){function e(){return u(this,e),h(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return f(e,n),c(e,[{key:"init",value:function(){var t;this._id=((t=this.nodeName)in w||(w[t]=0),++w[t]),this._initialised=!0}},{key:"connectedCallback",value:function(){this._initialised||this.init()}},{key:"attributeChangedCallback",value:function(){this._initialised||this.init()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})}}]),e}())},P={},N=function(){try{var t=new window.CustomEvent("test",{cancelable:!0});if(t.preventDefault(),!0!==t.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(t){}return e;function e(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=e.bubbles,r=void 0!==n&&n,o=e.cancelable,i=void 0!==o&&o,a=e.detail,l=void 0===a?void 0:a,s=document.createEvent("CustomEvent");s.initCustomEvent(t,r,i,l);var u=s.preventDefault;return s.preventDefault=function(){u.call(s);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(t){this.defaultPrevented=!0}},s}}();function A(t,e,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},o=new N(e,i({},r,{detail:n}));return t.dispatchEvent(o)}var E=function(){var t=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var e=Object.defineProperty({},"passive",{get:function(){t=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,e),window.removeEventListener("testPassiveEventSupport",n,e)}return t}();function S(t){for(var o=t.className,i=!1,a=!0,e=arguments.length,n=Array(1<e?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var l=n.map(function(t){var e=(n=t,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",r)).test(o);var n,r;e?i=!0:a=!1;return{className:t,hasClass:e}});return!(!a&&!i)&&l}var R=/\s+/,D={transitionend:function(){for(var t=document.createElement("div").style,e={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(e),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==t[o=n[i]])return e[o];return""}()};function L(n,t,r,o){var e=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},i=e.capture,a=void 0!==i&&i,l=e.passive,s=void 0===l||l;if(D[t]&&(t=D[t]),!n||!t)return null;var u=void 0===r?"undefined":y(r),c=r&&"string"===u;if("function"===u){if(o){var p=o;a=p.capture,s=p.passive}o=r}for(var d=E?{capture:a,passive:s}:a,f=c?function(t){var e=t.target;for(;!S(e,r)&&e!==n;)e=e.parentNode;if(e!==n)return o(t,e)}:o,h=t.split(R),g=h.length,v=0;v<g;++v)n.addEventListener(h[v],f,d);return function t(){for(var e=0;e<g;++e)n.removeEventListener(h[e],f,d);!function(t,e){if(!t)return;for(var n=Object.keys(t),r=n.length,o=0;o<r;++o){var i=n[o];if(t[i]===e)return delete t[i]}}(this,t)}}function I(r){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},e=t.leading,i=void 0!==e&&e,n=t.trailing,a=void 0===n||n,l=t.maxWait,s=void 0!==l&&l,u=void 0,c=void 0,p=void 0,d=void 0,f=!1,h=o!==s,g=!1!==s;function v(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return u=e,h&&(c&&clearTimeout(c),c=setTimeout(y,o)),g&&!p&&(p=setTimeout(b,s)),i&&!f&&(f=!0,d=r.apply(void 0,x(u))),d}return v.flush=function(){(c||p)&&(d=r.apply(void 0,x(u)));return m(),d},v.cancel=m,v;function y(){p&&clearTimeout(p),_()}function b(){c&&clearTimeout(c),_()}function _(){a&&(d=r.apply(void 0,x(u))),p=c=null,f=!1}function m(){c&&(clearTimeout(c),c=null),p&&(clearTimeout(p),p=null),u=void 0,f=!1}}window.__subscriptions=window.__subscriptions||{};var U=window.__subscriptions;function M(t,e){var n=L(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,t,e);U[t]||(U[t]={count:0});var r,o=U[t];return o.count++,o.onsubscribe||(o.onsubscribe=I((r=t,function(){A(document,"pubsub/onsubscribe",r),A(document,"pubsub/onsubscribe/"+r,r),U[r]&&delete U[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete U[t]}}L(document,"pubsub/onsubscribe",function(t){var e=t.detail;U[e]||(U[e]={count:0});var n=U[e],r=n.queue;Array.isArray(r)&&(r.forEach(function(t){var e=s(t,3),n=e[0],r=e[1],o=e[2];A(o,n,r)}),delete n.queue)});var q,F=function(t,e){return t===e},V=((q=function(){var t;return(t=console).log.apply(t,arguments)},function(){var o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:F;return function(){for(var t=arguments.length,r=Array(t),e=0;e<t;e++)r[e]=arguments[e];return function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(){return o.apply(void 0,[].concat(r,e))?q.apply(void 0,arguments):void 0}}}})()(!0),[]);var z=1,K=3,H=8;function W(t,e){var n=t.nodeType,r=t.nodeName;n===z&&function(t,e){for(var n=e.skipChildren&&e.skipChildren(),r=e.constructor.observedAttributes,o=r&&Array.isArray(r)&&r.length,i=function(t){return n&&o&&-1===r.indexOf(t)},a=e.attributes,l=t.attributes,s=null,u=null,c=null,p=null,d=l.length-1;0<=d;--d)if(p=l[d],c=p.name,s=p.namespaceURI,u=p.value,!i(c))if(s){var f=p.localName;e.getAttributeNS(s,f||c)!==u&&e.setAttributeNS(s,c,u)}else e.hasAttribute(c)?e.getAttribute(c)!==u&&("null"===u||"undefined"===u?e.removeAttribute(c):e.setAttribute(c,u)):e.setAttribute(c,u);for(var h=a.length-1;0<=h;--h)if(!1!==(p=a[h]).specified){if(c=p.name,s=p.namespaceURI,i(c))continue;s?(c=p.localName||c,t.hasAttributeNS(s,c)||e.removeAttributeNS(s,c)):t.hasAttributeNS(null,c)||e.removeAttribute(c)}}(t,e),n!==K&&n!==H||e.nodeValue===t.nodeValue||(e.nodeValue=t.nodeValue),"INPUT"===r?function(t,e){var n=t.value,r=e.value;B(t,e,"checked"),B(t,e,"disabled"),n!==r&&(e.setAttribute("value",n),e.value=n);"null"===n&&(e.value="",e.removeAttribute("value"));t.hasAttributeNS(null,"value")?"range"===e.type&&(e.value=n):e.removeAttribute("value")}(t,e):"OPTION"===r?B(t,e,"selected"):"TEXTAREA"===r&&function(t,e){var n=t.value;n!==e.value&&(e.value=n);if(e.firstChild&&e.firstChild.nodeValue!==n){if(""===n&&e.firstChild.nodeValue===e.placeholder)return;e.firstChild.nodeValue=n}}(t,e)}function B(t,e,n){t[n]!==e[n]&&(e[n]=t[n],t[n]?e.setAttribute(n,""):e.removeAttribute(n))}var G=3;function $(t,e){return e?t?t.isSameNode&&t.isSameNode(e)?e:t.tagName!==e.tagName?t:(W(t,e),e.skipChildren&&e.skipChildren()||function(t,e){for(var n=void 0,r=void 0,o=void 0,i=void 0,a=0,l=0;n=e.childNodes[l],r=t.childNodes[l-a],n||r;l++)if(r)if(n)if(J(r,n))(o=$(r,n))!==n&&(e.replaceChild(o,n),a++);else{i=null;for(var s=l;s<e.childNodes.length;s++)if(J(e.childNodes[s],r)){i=e.childNodes[s];break}i?((o=$(r,i))!==i&&a++,e.insertBefore(o,n)):r.id||n.id?(e.insertBefore(r,n),a++):(o=$(r,n))!==n&&(e.replaceChild(o,n),a++)}else e.appendChild(r),a++;else e.removeChild(n),l--}(t,e),e):null:t}function J(t,e){return t.id?t.id===e.id:t.isSameNode?t.isSameNode(e):t.tagName===e.tagName&&(t.type===G&&t.nodeValue===e.nodeValue)}var Y,Z,X,Q,tt=(Y=Object,Z=Y.getPrototypeOf||function(t){return t.__proto__},X=Y.setPrototypeOf||function(t,e){return t.__proto__=e,t},Q="object"===("undefined"==typeof Reflect?"undefined":y(Reflect))?Reflect.construct:function(t,e,n){var r,o=[null];return o.push.apply(o,e),r=t.bind.apply(t,o),X(new r,n.prototype)},function(t){var e=Z(t);return X(t,X(function(){return Q(e,arguments,Z(this).constructor)},e))})(function(t){function l(t){var e;u(this,l);for(var n="\n    Web Component "+t.nodeName+"%c#"+t._id+" does not accept string as a return from a template. Maybe use bel?}",r=arguments.length,o=Array(1<r?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];var a=h(this,(e=l.__proto__||Object.getPrototypeOf(l)).call.apply(e,[this,n].concat(o)));return Error.captureStackTrace&&Error.captureStackTrace(a,l),a.name="TemplateNoStringReturnException",a}return f(l,t),l}(Error)),et=!!document.createDocumentFragment().children,nt=0;function rt(t,e){var n=t[e];return"function"==typeof n&&(t[e]=function(e){function n(){return e.apply(void 0,arguments)}return 0===nt&&(nt++,Object.keys(e).map(function(t){return n[t]=e[t],t}).reduce(rt,n),nt--),n}(n)),t}var ot=O;Object.keys(ot).reduce(rt,ot);var it=ot.oneOf(["left","center","right"]),at=ot.oneOf(["left","right"]),lt=(ot.oneOf(["top","bottom"]),ot.oneOf(["up","down"])),st=ot.oneOf(["ok","pending","error","unknown"]),ut=ot.oneOf(["row","col","rowgroup","colgroup","auto"]),ct=ot.oneOfType([ot.string,ot.number]),pt={text:ct,value:ot.any,rowspan:ct,colspan:ct,scope:ut,align:it,dense:ot.bool},dt={float:at,strong:ot.bool,bold:ot.bool},ft=ot.oneOfType([ot.string,ot.number]),ht=ot.oneOfType([ft,ot.shape(i({},pt,{sort:lt,sortActive:ot.bool}))]),gt=ot.oneOfType([ft,ot.shape(i({},pt,dt,{action:ot.bool,state:st}))]),vt=ot.oneOfType([ft,ot.shape(i({},pt,dt))]),yt=ot.oneOfType([ot.arrayOf(ht),ot.shape({cells:ot.arrayOf(ht)})]),bt=ot.oneOfType([ot.arrayOf(gt),ot.shape({cells:ot.arrayOf(gt),action:ot.bool})]),_t=ot.oneOfType([ot.arrayOf(vt),ot.shape({cells:ot.arrayOf(vt)})]),mt=(ot.oneOfType([yt,ot.arrayOf(yt)]),ot.oneOfType([bt,ot.arrayOf(bt)]),ot.oneOfType([_t,ot.arrayOf(_t)]),/[A-Z]/g);function xt(t){return t.replace(mt,Ot)}function Ot(t,e,n){var r=t.toLowerCase(),o=n.charAt(e+1);return 0===e||o.toUpperCase()===o?r:"-"+r}var Ct=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function kt(e,n,t){var r=e;if(t)return function(e,n,t){var r=e;switch(t){case ot.string:case ot.string.isRequired:return e;case ot.bool:case ot.bool.isRequired:if(!e||n===e)return!0;case ot.number:case ot.number.isRequired:case ot.object:case ot.object.isRequired:case ot.array:case ot.array.isRequired:default:if(Ct.test(e))try{r=JSON.parse(e)}catch(t){console.error("Attribute "+n+" has an error:\n"+t+"\n",e)}}return r}(e,n,t);if(e&&n!==e){if(Ct.test(e))try{r=JSON.parse(e)}catch(t){console.error("Attribute "+n+" has an error:\n"+t+"\n",e)}}else r=!0;return r}var wt=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,Tt=/[-_]+/g;function jt(t){return t.replace(wt,Pt)}function Pt(t,e){return 0==+t||Tt.test(t)?"":0===e?t.toLowerCase():t.toUpperCase()}function Nt(t,e,n){var r=1===t.nodeType,o=t.constructor.propTypes,i=n;!n&&r&&(i=(void 0===o?{}:o)[jt(e)]);if(r&&!t.hasAttribute(e))return i!==ot.bool&&i!==ot.bool.isRequired&&void 0;var a=t.value;return e?a=t.getAttribute(e):e=t.name,a=kt(a,e,i)}var At=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function Et(n,t,r){var e,o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},i=o.capture,a=void 0===i||i,l=o.passive,s=void 0===l||l,u=n.ownerDocument.documentElement,c=L(u,t,function(t){var e=t.target;if(!n.contains(e)&&n!==e)return r(t)},{capture:a,passive:s});return e=u,At&&(e.style.cursor="pointer"),c}var St=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];for(var r=e.length,o={},i=0;i<r;++i){var a=e[i];o[a.toUpperCase()]=a}return o}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize"),Rt="axa-change",Dt="data-prevent-default";(function(){function r(t){var i=this,e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};u(this,r),this._handleClick=function(t,e){i.shouldPreventDefault(e||t.currentTarget)&&t.preventDefault();var n=!i._lastToggleNode,r=e!==i._lastToggleNode,o=!n&&!r;n?(i._notify(St.ENTER,e),i._onInteractive()):r&&i._notify(St.MOVE,e,i._lastToggleNode),i._lastToggleNode=e,o&&i._options.sameClickClose&&i._close()},this._handleClose=function(t,e){i.shouldPreventDefault(e||t.currentTarget)&&t.preventDefault(),i._close()},this._handleKeyUp=function(t){(t.key===St.ESCAPE||t.key===St.ESC||27===t.keyCode)&&(t.preventDefault(),i._close())},this._init(t,e)}return c(r,[{key:"_init",value:function(t,e){t&&(this._wcNode=t),e&&(this._options=i({},r.DEFAULTS,e));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=L(this._container,St.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=L(this._container,St.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=Et(this._container,St.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=L(this._container.ownerDocument,St.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(t){return t.hasAttribute(Dt)?Nt(t,Dt):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(St.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(t,e,n){t in this&&"function"==typeof this[t]&&this[t](e,n)}},{key:"enter",value:function(t){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(t,e){}},{key:"leave",value:function(t){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),r}()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var Lt=k(function(n){var t,e;return e=t=function(t){function e(){return u(this,e),h(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return f(e,n),e}(),t.version="2.0.1-beta.223",e},function(e){return function(t){function a(){var t,e,n;u(this,a);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=n=h(this,(t=a.__proto__||Object.getPrototypeOf(a)).call.apply(t,[this].concat(o))))._makeContextReady=function(){var t=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;n.contextNode&&(clearTimeout(n.timeoutId),n.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode,t)},10)),n.unContextEnabled&&n.unContextEnabled(),n.unContextEnabled=M("context/available",n._makeContextReady)},h(n,e)}return f(a,e),c(a,[{key:"connectedCallback",value:function(){d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this)&&d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this)&&d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var t=this.nodeName.toLowerCase();this.__isContext=!0,function(t,e){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;U[t]||(U[t]={count:0,queue:[]});var r=U[t].queue;Array.isArray(r)?r.push([t,e,n]):A(n,t,e)}("context/available",this.__contextName=t)}},{key:"consumeContext",value:function(t){this.__consumedContext=t&&t.toLowerCase()}},{key:"contextNode",get:function(){for(var t=this.__consumedContext,e=this.parentNode;e&&(!e.__isContext||t&&t!==e.__contextName);)e=e.parentNode;return!(!e||!e.__isContext)&&e}}]),a}()},function(e){return function(t){function n(){return u(this,n),h(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return f(n,e),c(n,[{key:"appendChild",value:function(t){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(t),this.render()):d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,t)}},{key:"innerText",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createTextNode(t);this._lightDOMRefs=[e],this.render()}else o(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",t,this)}},{key:"textContent",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createTextNode(t);this._lightDOMRefs=[e],this.render()}else o(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",t,this)}},{key:"innerHTML",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createElement("div");e.innerHTML=t,this._lightDOMRefs=Array.from(e.children),this.render()}else o(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",t,this)}}]),n}()},function(e){return function(t){function i(){var t,e,l;u(this,i);for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=l=h(this,(t=i.__proto__||Object.getPrototypeOf(i)).call.apply(t,[this].concat(r))))._reduceProps=function(t,e){var n=t.props,r=t.shouldUpdate,o="_"+e,i=n[e],a=l[o];return r||l.shouldUpdateCallback(i,a)?(l.props[e]=i,{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},h(l,e)}return f(i,e),c(i,[{key:"init",value:function(t){var e=this;d(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"init",this).call(this,t),this._isConnected=!1,this.props={},this.updatedDebounced=I(function(){return e.updated&&e.updated()},50);var n=this.constructor.observedAttributes;Array.isArray(n)&&n.forEach(function(t){jt(t)})}},{key:"connectedCallback",value:function(){var r=this;if(d(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&d(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(t)){var o=this.constructor.propTypes;t.forEach(function(t){var e=jt(t);if(r.hasAttribute(t)){var n=Nt(r,t,o[e]);r.props[e]=n}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(t,e,n){if(d(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this)&&d(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this).call(this,t,e,n),this.shouldUpdateCallback(n,e)){var r=jt(t);if(this.hasAttribute(t)){var o=this.constructor.propTypes;this.props[r]=kt(n,t,o[r])}else this.props[r]=null;this.checkPropTypes(),"value"===t&&null!==n&&A(this,Rt,n,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(t){var e=this.constructor.observedAttributes,n=void 0===e?[]:e,r=Object.keys(t).filter(function(t){return-1<n.indexOf(xt(t))}).reduce(this._reduceProps,{props:t,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),r&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var t=this.constructor,e=t.propTypes,n=t.tagName;e&&ot.checkPropTypes(e,this.props,"prop",n)}},{key:"shouldUpdateCallback",value:function(t,e){return t!==e}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}],[{key:"observedAttributes",get:function(){var t=this.propTypes;return t&&Object.keys(t).map(xt)}}]),i}()},function(e){return function(t){function s(){return u(this,s),h(this,(s.__proto__||Object.getPrototypeOf(s)).apply(this,arguments))}return f(s,e),c(s,[{key:"init",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.template,n=a(t,["template"]);d(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"init",this).call(this,n),this._template=e,this._hasTemplate=!!e,this._hasRendered=!1,this.updated=this.render}},{key:"render",value:function(){var n=this,t=!this._hasRendered;if(this.willRenderCallback(t),this._hasTemplate){var e=this._template;try{if(t){for(var r=document.createDocumentFragment(),o=[];this.firstChild;)o.push(this.firstChild),r.appendChild(this.firstChild);this._lightDOMRefs=o,this.childrenFragment=r}else this._lightDOMRefs.forEach(function(t){var e=t.cloneNode(!0);n.childrenFragment.appendChild(e)});et||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(t){return 1===t.nodeType}));var i=e(this.props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(t){a.appendChild(t)});else if(i){if("string"==typeof i)throw new tt(this);a.appendChild(i)}if(t)d(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"appendChild",this).call(this,a);else{var l=this.cloneNode(!1);l._isMorphing=!0,l.appendChild(a),this._isMorphing=!0,function(t,e){if("object"!==(void 0===t?"undefined":y(t)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===e?"undefined":y(e)))throw new Error("componentMorph: newTree should be an object");$(e,t)}(this,l),function(){for(var t=void 0;t=V.pop();)delete t.isSameNode;V=[]}(),this._isMorphing=!1}}catch(t){console.error(t)}}this._hasRendered=!0,this.didRenderCallback(t)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(t){}},{key:"didRenderCallback",value:function(t){}}]),s}()},function(e){return function(t){function o(){return u(this,o),h(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))}return f(o,e),c(o,[{key:"init",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.styles,n=void 0===e?"":e,r=a(t,["styles"]);d(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"init",this).call(this,r),this._styles=n}},{key:"connectedCallback",value:function(){d(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this)&&d(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var e=document.createElement("style"),n=document.createTextNode(this._styles);e.appendChild(n),t.insertAdjacentElement?t.insertAdjacentElement("afterbegin",e):t.appendChild(e)}}}]),o}()}),It=(k(Lt,j),k(Lt,function(o){return function(t){function a(){var t,e,n;u(this,a);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=n=h(this,(t=a.__proto__||Object.getPrototypeOf(a)).call.apply(t,[this].concat(o))))._appendStyles=function(){a.appendGlobalStyles(n._styles,n.nodeName)},h(n,e)}return f(a,o),c(a,null,[{key:"appendGlobalStyles",value:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:o.uuidv4();if(t&&!P[e]){var n=document.createElement("style"),r=document.createTextNode(t);P[e]=!0,n.appendChild(r),n.setAttribute("data-c-name",e.toLowerCase()),document.head.appendChild(n)}}}]),a}()},j));var Ut,Mt,qt,Ft=It(HTMLTableCellElement),Vt=function(t){function e(){return u(this,e),h(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return f(e,Ft),c(e,[{key:"init",value:function(){d(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"init",this).call(this,{styles:".a-td {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  padding: 10px 15px;\n  border-top: 1px solid #e5e5e5;\n  color: #7f7f7f; }\n  @media (min-width: 576px) {\n    .a-td {\n      font-size: 16px; } }\n  .a-td:first-child {\n    padding-left: 14px;\n    border-left: 1px solid transparent; }\n  .a-td:last-child {\n    padding-right: 14px;\n    border-right: 1px solid transparent; }\n  @media (max-width: 767px) {\n    .a-td {\n      display: block;\n      padding: 2px 10px;\n      border-top: none; }\n      .a-td:first-child {\n        padding-left: 9px;\n        border-left: 1px solid transparent; }\n      .a-td:last-child {\n        padding-right: 9px;\n        border-right: 1px solid transparent; } }\n\n.a-td--foot {\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  color: #333;\n  background: #f5f5f5; }\n  @media (min-width: 576px) {\n    .a-td--foot {\n      font-size: 16px; } }\n\n.o-table__row--foot:first-child > .a-td--foot {\n  border-top: none; }\n\n.a-td--state-ok::before, .a-td--state-pending::before, .a-td--state-error::before, .a-td--state-unknown::before {\n  width: 8px;\n  height: 8px;\n  display: inline-block;\n  margin-right: 20px;\n  border-radius: 8px;\n  vertical-align: middle;\n  content: ''; }\n  @media (max-width: 767px) {\n    .a-td--state-ok::before, .a-td--state-pending::before, .a-td--state-error::before, .a-td--state-unknown::before {\n      margin-right: 10px; } }\n\n.u-align-left {\n  text-align: left; }\n\n.u-align-center {\n  text-align: center; }\n\n.u-align-right {\n  text-align: right; }\n\n@media (max-width: 575px) {\n  .u-align-left-xs-down {\n    text-align: left; }\n  .u-align-center-xs-down {\n    text-align: center; }\n  .u-align-right-xs-down {\n    text-align: right; } }\n\n.u-align-left-xs-up {\n  text-align: left; }\n\n.u-align-center-xs-up {\n  text-align: center; }\n\n.u-align-right-xs-up {\n  text-align: right; }\n\n@media (max-width: 575px) {\n  .u-align-left-xs {\n    text-align: left; }\n  .u-align-center-xs {\n    text-align: center; }\n  .u-align-right-xs {\n    text-align: right; } }\n\n@media (max-width: 767px) {\n  .u-align-left-sm-down {\n    text-align: left; }\n  .u-align-center-sm-down {\n    text-align: center; }\n  .u-align-right-sm-down {\n    text-align: right; } }\n\n@media (min-width: 576px) {\n  .u-align-left-sm-up {\n    text-align: left; }\n  .u-align-center-sm-up {\n    text-align: center; }\n  .u-align-right-sm-up {\n    text-align: right; } }\n\n@media (min-width: 576px) and (max-width: 767px) {\n  .u-align-left-sm {\n    text-align: left; }\n  .u-align-center-sm {\n    text-align: center; }\n  .u-align-right-sm {\n    text-align: right; } }\n\n@media (max-width: 991px) {\n  .u-align-left-md-down {\n    text-align: left; }\n  .u-align-center-md-down {\n    text-align: center; }\n  .u-align-right-md-down {\n    text-align: right; } }\n\n@media (min-width: 768px) {\n  .u-align-left-md-up {\n    text-align: left; }\n  .u-align-center-md-up {\n    text-align: center; }\n  .u-align-right-md-up {\n    text-align: right; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .u-align-left-md {\n    text-align: left; }\n  .u-align-center-md {\n    text-align: center; }\n  .u-align-right-md {\n    text-align: right; } }\n\n@media (max-width: 1199px) {\n  .u-align-left-lg-down {\n    text-align: left; }\n  .u-align-center-lg-down {\n    text-align: center; }\n  .u-align-right-lg-down {\n    text-align: right; } }\n\n@media (min-width: 992px) {\n  .u-align-left-lg-up {\n    text-align: left; }\n  .u-align-center-lg-up {\n    text-align: center; }\n  .u-align-right-lg-up {\n    text-align: right; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .u-align-left-lg {\n    text-align: left; }\n  .u-align-center-lg {\n    text-align: center; }\n  .u-align-right-lg {\n    text-align: right; } }\n\n@media (max-width: 1439px) {\n  .u-align-left-xl-down {\n    text-align: left; }\n  .u-align-center-xl-down {\n    text-align: center; }\n  .u-align-right-xl-down {\n    text-align: right; } }\n\n@media (min-width: 1200px) {\n  .u-align-left-xl-up {\n    text-align: left; }\n  .u-align-center-xl-up {\n    text-align: center; }\n  .u-align-right-xl-up {\n    text-align: right; } }\n\n@media (min-width: 1200px) and (max-width: 1439px) {\n  .u-align-left-xl {\n    text-align: left; }\n  .u-align-center-xl {\n    text-align: center; }\n  .u-align-right-xl {\n    text-align: right; } }\n\n.u-align-left-xxl-down {\n  text-align: left; }\n\n.u-align-center-xxl-down {\n  text-align: center; }\n\n.u-align-right-xxl-down {\n  text-align: right; }\n\n@media (min-width: 1440px) {\n  .u-align-left-xxl-up {\n    text-align: left; }\n  .u-align-center-xxl-up {\n    text-align: center; }\n  .u-align-right-xxl-up {\n    text-align: right; } }\n\n@media (min-width: 1440px) {\n  .u-align-left-xxl {\n    text-align: left; }\n  .u-align-center-xxl {\n    text-align: center; }\n  .u-align-right-xxl {\n    text-align: right; } }\n\n.a-td--dense {\n  padding-top: 2px;\n  padding-bottom: 2px; }\n\n.a-td--strong {\n  color: #333; }\n\n.a-td--bold {\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  color: #333; }\n  @media (min-width: 576px) {\n    .a-td--bold {\n      font-size: 16px; } }\n\n.a-td--action:hover, .a-td--action:focus {\n  cursor: pointer;\n  color: #00008f; }\n\n.a-td--state-ok {\n  color: #1cc54e !important; }\n  .a-td--state-ok::before {\n    background: #1cc54e; }\n\n.a-td--state-pending {\n  color: #f07662 !important; }\n  .a-td--state-pending::before {\n    background: #f07662; }\n\n.a-td--state-error {\n  color: #c91432 !important; }\n  .a-td--state-error::before {\n    background: #c91432; }\n\n.a-td--state-unknown {\n  color: #ccc !important; }\n  .a-td--state-unknown::before {\n    background: #ccc; }\n"})}},{key:"willRenderCallback",value:function(){var t,e=this.props,n=e.classes,r=e.action,o=e.align,i=e.bold,a=e.dense,l=e.float,s=e.state,u=e.strong;this.className=C("a-td",n,(p(t={"a-td--action":r,"a-td--strong":u,"a-td--bold":i,"a-td--dense":a},"u-align-"+o,o),p(t,"o-table__cell--float-"+l,l),p(t,"a-td--state-"+s,s),t))}}]),e}();return Vt.tagName="axa-td",Vt.builtInTagName="td",Vt.propTypes={classes:O.string,action:O.bool,align:it,bold:O.bool,dense:O.bool,float:at,state:st,strong:O.bool},Ut=Vt.tagName,qt={extends:(Mt=Vt).builtInTagName},customElements.get(Ut)||customElements.define(Ut,Mt,qt),Vt}();
