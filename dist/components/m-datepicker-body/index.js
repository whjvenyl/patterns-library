var StyleGuideWebComponent=function(){"use strict";var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}})()&&Object.assign;var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},d=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},p=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},r=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},a=function(e,t){var n={};for(var o in e)0<=t.indexOf(o)||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},h=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},f=function e(t,n,o,r){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,o,r)}else if("value"in i&&i.writable)i.value=o;else{var s=i.set;void 0!==s&&s.call(r,o)}return o},l=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},k=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function o(){}var c,y=(function(e){e.exports=function(){function e(e,t,n,o,r,i){if(i!==s){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=o,n.PropTypes=n}()}(c={exports:{}},c.exports),c.exports),v=0;function b(e,t){var n=e[t];return"function"==typeof n&&(e[t]=function(t){function n(){return t.apply(void 0,arguments)}return 0===v&&(v++,Object.keys(t).map(function(e){return n[e]=t[e],e}).reduce(b,n),v--),n}(n)),e}var g=y;Object.keys(g).reduce(b,g);var m=g.oneOf(["left","center","right"]),C=g.oneOfType([g.string,g.number]),O=g.oneOfType([g.arrayOf(P),g.shape({cells:g.arrayOf(P)})]),w=g.oneOfType([g.arrayOf(D),g.shape({cells:g.arrayOf(D),action:g.bool})]),x=g.oneOfType([g.arrayOf(S),g.shape({cells:g.arrayOf(S)})]),T=(g.oneOf(["row","col","rowgroup","colgroup","auto"]),g.oneOfType([g.arrayOf(P),g.arrayOf(O)]),g.oneOfType([g.arrayOf(D),g.arrayOf(w)]),g.oneOfType([g.arrayOf(S),g.arrayOf(x)]),g.oneOf(["up","down"])),j=g.oneOf(["left","right"]),N=g.oneOf(["ok","pending","error","unknown"]),A={text:C,value:g.any,rowspan:g.number,colspan:g.number,scope:null,align:m,dense:g.bool},E=g.oneOfType([g.string,g.number,g.shape(A)]),P=g.oneOfType([E,g.shape(i({},A,{sort:T,sortActive:g.bool}))]),D=g.oneOfType([E,g.shape(i({},A,{float:j,action:g.bool,strong:g.bool,bold:g.bool,state:N}))]),S=g.oneOfType([E,g.shape(i({},A,{float:j}))]);function R(o){function e(e,t,n){return null==e[t]?null:o(e,t,n)}return e.isRequired=o,e}var I=/^[a-z]{2,4}(-([A-Z][a-z]{3}|[0-9]{3}))?(-([A-Z]{2}|[0-9]{3}))?$/;var M=R(function(e,t,n){if(!I.test(e[t]))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`, expected a valid locale.")});g.oneOf(["top","bottom"]);R(function(e,t,n){try{new window.URL(e[t],function(){if(document.baseURI)return document.baseURI;var e=document.getElementsByName("base");return e.length&&e[0].href?e[0].href:window.location.href}())}catch(e){return new Error("Invalid prop `"+t+"` supplied to `"+n+"`, expected a valid URL. "+e.message)}return null});var L={},U=function(e){return e in L||(L[e]=0),++L[e]},V=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,r=t.cancelable,i=void 0!==r&&r,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,o,i,s);var c=l.preventDefault;return l.preventDefault=function(){c.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function F(e,t,n){var o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},r=new V(t,i({},o,{detail:n}));return e.dispatchEvent(r)}var q=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function Y(e){for(var r=e.className,i=!1,a=!0,t=arguments.length,n=Array(1<t?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var s=n.map(function(e){var t=(n=e,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",o)).test(r);var n,o;t?i=!0:a=!1;return{className:e,hasClass:t}});return!(!a&&!i)&&s}var K=/\s+/,B={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,r=void 0,i=0;i<o;++i)if(void 0!==e[r=n[i]])return t[r];return""}()};function H(n,e,o,r){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},i=t.capture,a=void 0!==i&&i,s=t.passive,l=void 0===s||s;if(B[e]&&(e=B[e]),!n||!e)return null;var c=void 0===o?"undefined":_(o),u=o&&"string"===c;if("function"===c){if(r){var d=r;a=d.capture,l=d.passive}r=o}for(var p=q?{capture:a,passive:l}:a,h=u?function(e){var t=e.target;for(;!Y(t,o)&&t!==n;)t=t.parentNode;if(t!==n)return r(e,t)}:r,f=e.split(K),y=f.length,v=0;v<y;++v)n.addEventListener(f[v],h,p);return function e(){for(var t=0;t<y;++t)n.removeEventListener(f[t],h,p);!function(e,t){if(!e)return;for(var n=Object.keys(e),o=n.length,r=0;r<o;++r){var i=n[r];if(e[i]===t)return delete e[i]}}(this,e)}}function $(o){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,i=void 0!==t&&t,n=e.trailing,a=void 0===n||n,s=e.maxWait,l=void 0!==s&&s,c=void 0,u=void 0,d=void 0,p=void 0,h=!1,f=r!==l,y=!1!==l;function v(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return c=t,f&&(u&&clearTimeout(u),u=setTimeout(_,r)),y&&!d&&(d=setTimeout(b,l)),i&&!h&&(h=!0,p=o.apply(void 0,k(c))),p}return v.flush=function(){(u||d)&&(p=o.apply(void 0,k(c)));return m(),p},v.cancel=m,v;function _(){d&&clearTimeout(d),g()}function b(){u&&clearTimeout(u),g()}function g(){a&&(p=o.apply(void 0,k(c))),d=u=null,h=!1}function m(){u&&(clearTimeout(u),u=null),d&&(clearTimeout(d),d=null),c=void 0,h=!1}}window.__subscriptions=window.__subscriptions||{};var z=window.__subscriptions;function W(e,t){var n=H(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);z[e]||(z[e]={count:0});var o,r=z[e];return r.count++,r.onsubscribe||(r.onsubscribe=$((o=e,function(){F(document,"pubsub/onsubscribe",o),F(document,"pubsub/onsubscribe/"+o,o),z[o]&&delete z[o].unsubscribe}),100)),r.onsubscribe(),function(){r.count--,n.call(this),r.count<=0&&delete z[e]}}H(document,"pubsub/onsubscribe",function(e){var t=e.detail;z[t]||(z[t]={count:0});var n=z[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=l(e,3),n=t[0],o=t[1],r=t[2];F(r,n,o)}),delete n.queue)});var Z,G=function(e,t){return e===t},J=((Z=function(){var e;return(e=console).log.apply(e,arguments)},function(){var r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:G;return function(){for(var e=arguments.length,o=Array(e),t=0;t<e;t++)o[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return r.apply(void 0,[].concat(o,t))?Z.apply(void 0,arguments):void 0}}}})()(!0),/[A-Z]/g);function X(e){return e.replace(J,Q)}function Q(e,t,n){var o=e.toLowerCase(),r=n.charAt(t+1);return 0===t||r.toUpperCase()===r?o:"-"+o}var ee=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function te(t,n,e){var o=t;if(e)return function(t,n,e){var o=t;switch(e){case g.string:case g.string.isRequired:return t;case g.bool:case g.bool.isRequired:if(!t||n===t)return!0;case g.number:case g.number.isRequired:case g.object:case g.object.isRequired:case g.array:case g.array.isRequired:default:if(ee.test(t))try{o=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}return o}(t,n,e);if(t&&n!==t){if(ee.test(t))try{o=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else o=!0;return o}var ne=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,oe=/[-_]+/g;function re(e){return e.replace(ne,ie)}function ie(e,t){return 0==+e||oe.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function ae(e,t,n){var o=1===e.nodeType,r=e.constructor.propTypes,i=n;!n&&o&&(i=(void 0===r?{}:r)[re(t)]);if(o&&!e.hasAttribute(t))return i!==g.bool&&i!==g.bool.isRequired&&void 0;var a=e.value;return t?a=e.getAttribute(t):t=e.name,a=te(a,t,i)}var se=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function le(n,e,o){var t,r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},i=r.capture,a=void 0===i||i,s=r.passive,l=void 0===s||s,c=n.ownerDocument.documentElement,u=H(c,e,function(e){var t=e.target;if(!n.contains(t)&&n!==t)return o(e)},{capture:a,passive:l});return t=c,se&&(t.style.cursor="pointer"),u}var ce=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=t.length,r={},i=0;i<o;++i){var a=t[i];r[a.toUpperCase()]=a}return r}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize"),ue="axa-change",de="data-prevent-default";(function(){function o(e){var i=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};u(this,o),this._handleClick=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var n=!i._lastToggleNode,o=t!==i._lastToggleNode,r=!n&&!o;n?(i._notify(ce.ENTER,t),i._onInteractive()):o&&i._notify(ce.MOVE,t,i._lastToggleNode),i._lastToggleNode=t,r&&i._options.sameClickClose&&i._close()},this._handleClose=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),i._close()},this._handleKeyUp=function(e){(e.key===ce.ESCAPE||e.key===ce.ESC||27===e.keyCode)&&(e.preventDefault(),i._close())},this._init(e,t)}return d(o,[{key:"_init",value:function(e,t){e&&(this._wcNode=e),t&&(this._options=i({},o.DEFAULTS,t));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=H(this._container,ce.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=H(this._container,ce.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=le(this._container,ce.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=H(this._container.ownerDocument,ce.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(de)?ae(e,de):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(ce.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),o}()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var pe=[];var he=1,fe=3,ye=8;function ve(e,t){var n=e.nodeType,o=e.nodeName;n===he&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),o=t.constructor.observedAttributes,r=o&&Array.isArray(o)&&o.length,i=function(e){return n&&r&&-1===o.indexOf(e)},a=t.attributes,s=e.attributes,l=null,c=null,u=null,d=null,p=s.length-1;0<=p;--p)if(d=s[p],u=d.name,l=d.namespaceURI,c=d.value,!i(u))if(l){var h=d.localName;t.getAttributeNS(l,h||u)!==c&&t.setAttributeNS(l,u,c)}else t.hasAttribute(u)?t.getAttribute(u)!==c&&("null"===c||"undefined"===c?t.removeAttribute(u):t.setAttribute(u,c)):t.setAttribute(u,c);for(var f=a.length-1;0<=f;--f)if(!1!==(d=a[f]).specified){if(u=d.name,l=d.namespaceURI,i(u))continue;l?(u=d.localName||u,e.hasAttributeNS(l,u)||t.removeAttributeNS(l,u)):e.hasAttributeNS(null,u)||t.removeAttribute(u)}}(e,t),n!==fe&&n!==ye||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===o?function(e,t){var n=e.value,o=t.value;_e(e,t,"checked"),_e(e,t,"disabled"),n!==o&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===o?_e(e,t,"selected"):"TEXTAREA"===o&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function _e(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var be=3;function ge(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(ve(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,o=void 0,r=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],o=e.childNodes[s-a],n||o;s++)if(o)if(n)if(me(o,n))(r=ge(o,n))!==n&&(t.replaceChild(r,n),a++);else{i=null;for(var l=s;l<t.childNodes.length;l++)if(me(t.childNodes[l],o)){i=t.childNodes[l];break}i?((r=ge(o,i))!==i&&a++,t.insertBefore(r,n)):o.id||n.id?(t.insertBefore(o,n),a++):(r=ge(o,n))!==n&&(t.replaceChild(r,n),a++)}else t.appendChild(o),a++;else t.removeChild(n),s--}(e,t),t):null:e}function me(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===be&&e.nodeValue===t.nodeValue)}var ke=function(e){function s(e){var t;u(this,s);for(var n="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",o=arguments.length,r=Array(1<o?o-1:0),i=1;i<o;i++)r[i-1]=arguments[i];var a=h(this,(t=s.__proto__||Object.getPrototypeOf(s)).call.apply(t,[this,n].concat(r)));return Error.captureStackTrace&&Error.captureStackTrace(a,s),a.name="TemplateNoStringReturnException",a}return r(s,e),s}(Error),Ce=!!document.createDocumentFragment().children;function Oe(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(Oe.prototype,HTMLElement.prototype),Object.setPrototypeOf(Oe,HTMLElement);var we=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(t){return function(e){function a(){var e,t,n;u(this,a);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return(t=n=h(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(r))))._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;n.contextNode&&(clearTimeout(n.timeoutId),n.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode,e)},10)),n.unContextEnabled&&n.unContextEnabled(),n.unContextEnabled=W("context/available",n._makeContextReady)},h(n,t)}return r(a,t),d(a,[{key:"connectedCallback",value:function(){p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this)&&p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this)&&p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;z[e]||(z[e]={count:0,queue:[]});var o=z[e].queue;Array.isArray(o)?o.push([e,t,n]):F(n,e,t)}("context/available",this.__contextName=e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),a}()},function(t){return function(e){function n(){return u(this,n),h(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return r(n,t),d(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):p(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(t){return function(e){function c(e){u(this,c);var l=h(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,e));l._reduceProps=function(e,t){var n=e.props,o=e.shouldUpdate,r=l._hasKeys[t],i="_"+t,a=n[t],s=l[i];return o||l.shouldUpdateCallback(a,s)?(l.props[t]=a,r&&f(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),t,a,l),{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},l._isConnected=!1,l.props={},l.updatedDebounced=$(function(){return l.updated&&l.updated()},50);var t=l.constructor.observedAttributes;return Array.isArray(t)&&t.forEach(function(e){re(e)}),l}return r(c,t),d(c,null,[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(X)}}]),d(c,[{key:"connectedCallback",value:function(){var o=this;if(p(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"connectedCallback",this)&&p(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(e)){var r=this.constructor.propTypes;e.forEach(function(e){var t=re(e);if(o.hasAttribute(e)){var n=ae(o,e,r[t]);o.props[t]=n}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(this.shouldUpdateCallback(n,t)){var o=re(e);if(this.hasAttribute(e)){var r=this.constructor.propTypes;this.props[o]=te(n,e,r[o])}else this.props[o]=null;this.checkPropTypes(),"value"===e&&null!==n&&F(this,ue,n,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t,o=Object.keys(e).filter(function(e){return-1<n.indexOf(X(e))}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),o&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName;t&&g.checkPropTypes(t,this.props,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),c}()},function(t){return function(e){function l(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.template,n=a(e,["template"]);u(this,l);var o=h(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,n));return o._template=t,o._hasTemplate=!!t,o._hasRendered=!1,o.updated=o.render,o}return r(l,t),d(l,[{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var o=document.createDocumentFragment(),r=[];this.firstChild;)r.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=r,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});Ce||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var i=t(this.props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(e){a.appendChild(e)});else if(i){if("string"==typeof i)throw new ke(this);a.appendChild(i)}if(e)p(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"appendChild",this).call(this,a);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":_(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":_(t)))throw new Error("componentMorph: newTree should be an object");ge(t,e)}(this,s),function(){for(var e=void 0;e=pe.pop();)delete e.isSameNode;pe=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),l}()},function(t){return function(e){function i(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,n=void 0===t?"":t,o=a(e,["styles"]);u(this,i);var r=h(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,o));return r._styles=n,r}return r(i,t),d(i,[{key:"connectedCallback",value:function(){p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),i}()})(function(e){function n(e){u(this,n);var t=h(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t._id=U(t.nodeName),t}return r(n,Oe),d(n,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),n}()),xe={},Te=function(e){function a(){var e,t,n;u(this,a);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return(t=n=h(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(r))))._appendStyles=function(){a.appendGlobalStyles(n._styles,n.nodeName)},h(n,t)}return r(a,we),d(a,null,[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:we.uuidv4();if(e&&!xe[t]){var n=document.createElement("style"),o=document.createTextNode(e);xe[t]=!0,n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),a}();var je=".m-datepicker-body {\n  padding-top: 5px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.m-datepicker-body__cell {\n  width: 35.28571px;\n  height: 35.28571px;\n  padding-left: 0;\n  padding-right: 0;\n  background-color: transparent;\n  border-radius: 100px;\n  cursor: pointer;\n  border: none; }\n\n.m-datepicker-body__cell:focus {\n  outline: none; }\n\n.m-datepicker-body__not-current-month {\n  color: #ccc; }\n\n.m-datepicker-body__current-month {\n  color: #333; }\n\n.m-datepicker-body__current-month:hover {\n  -webkit-box-shadow: 0 0 0 3px #00008f inset;\n          box-shadow: 0 0 0 3px #00008f inset;\n  background-color: #fff;\n  color: #333;\n  opacity: 0.5; }\n\n.m-datepicker-body__current-month:hover.m-datepicker-body__selected-day,\n.m-datepicker-body__current-month:hover.m-datepicker-body__today {\n  background-color: #00008f;\n  color: #fff;\n  opacity: 1; }\n\n.m-datepicker-body__selected-day,\n.m-datepicker-body__today {\n  background-color: #00008f;\n  color: #fff; }\n",Ne=/\n[\s]+$/,Ae=/^\n[\s]+/,Ee=/[\s]+$/,Pe=/^[\s]+/,De=/[\n\s]+/g,Se=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],Re=["code","pre","textarea"],Ie=function e(t,n){if(Array.isArray(n))for(var o,r,i=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var c=n[s];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),u=c),s===l-1&&(a=!1,-1===Se.indexOf(i)&&-1===Re.indexOf(i)?""===(o=u.nodeValue.replace(Ae,"").replace(Ee,"").replace(Ne,"").replace(De," "))?t.removeChild(u):u.nodeValue=o:-1===Re.indexOf(i)&&(r=0===s?"":" ",o=u.nodeValue.replace(Ae,r).replace(Pe," ").replace(Ee,"").replace(Ne,"").replace(De," "),u.nodeValue=o));else if(c&&c.nodeType){a&&(a=!1,-1===Se.indexOf(i)&&-1===Re.indexOf(i)?""===(o=u.nodeValue.replace(Ae,"").replace(Ne,"").replace(De," "))?t.removeChild(u):u.nodeValue=o:-1===Re.indexOf(i)&&(o=u.nodeValue.replace(Pe," ").replace(Ae,"").replace(Ne,"").replace(De," "),u.nodeValue=o));var d=c.nodeName;d&&(i=d.toLowerCase()),t.appendChild(c)}}}},Me=function(e,t,n){var o,r;return(o=document.createElement("div")).setAttribute("class","m-datepicker-body js-datepicker-body"),Ie(o,["\n    ",(r=n.datepickerBody.store,r?r.getCells():[]).map(function(e,t){var n;return(n=document.createElement("button")).setAttribute("data-index",""+String(t)),n.setAttribute("class",""+String(e.getClasses())),Ie(n,[e.getText()]),n}),"\n  "]),o},Le=function(){function o(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,n=2<arguments.length&&void 0!==arguments[2]&&arguments[2];u(this,o),this.text=e,this.index=t,this.isToday=n}return d(o,[{key:"getClasses",value:function(){return o.classes}},{key:"getIndex",value:function(){return this.index}},{key:"getText",value:function(){return this.text}},{key:"getIsToday",value:function(){return this.isToday}}]),o}();Le.classes="m-datepicker-body__cell js-datepicker__calender-body__cell";var Ue=function(e){function t(){return u(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,Le),d(t,[{key:"getClasses",value:function(){return p(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"getClasses",this).call(this)+" "+t.classes}}]),t}();Ue.classes="m-datepicker-body__not-current-month";var Ve=function(e){function t(){return u(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,Le),d(t,[{key:"getClasses",value:function(){return p(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"getClasses",this).call(this)+" "+t.classes}}]),t}();Ve.classes="m-datepicker-body__not-current-month";var Fe=function(e){function t(){return u(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,Le),d(t,[{key:"getClasses",value:function(){return p(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"getClasses",this).call(this)+" "+t.classes}}]),t}();Fe.classes="m-datepicker-body__current-month";var qe=function(e){function t(){return u(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,Fe),d(t,[{key:"getClasses",value:function(){return p(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"getClasses",this).call(this)+" "+t.classes}}]),t}();qe.classes="m-datepicker-body__today";var Ye=function(e){function t(){return u(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,Fe),d(t,[{key:"getClasses",value:function(){return p(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"getClasses",this).call(this)+" "+t.classes}}]),t}();Ye.classes="m-datepicker-body__selected-day";var Ke,Be,He=function(){function r(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:(new Date).getFullYear(),n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:(new Date).getMonth(),o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;u(this,r),this.cells=[],this.today=new Date,this.init(e,t,n,o)}return d(r,[{key:"init",value:function(e,i,a,s){var t=new Date(i,a,1),l=new Date(i,a+1,0).getDate(),c=new Date(i,a,0),u=new Date(i,a+1,1),d=function(){for(var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"en-uk",e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:new Date,n=new Date,o=n.getDay(),r=n.getDate(),i=e.toLocaleString(t,{weekday:"long"}),a=null,s=new Date(n.getFullYear(),n.getMonth()+1,0).getDate();1!==o;)r<s?r+=1:(r=1,n.setMonth(n.getMonth()+1)),n.setDate(r),o=n.getDay();return[].concat(k(Array(7).keys())).forEach(function(e){n.setDate(r+e),i===n.toLocaleString(t,{weekday:"long"})&&(a=e)}),a}(e,t),p=this.today.getFullYear(),h=this.today.getMonth(),f=s||this.today.getDate();this.cells=[].concat(k(Array(42).keys())).map(function(e){if(e<d){var t=c.getDate()-(d-1-e);return new Ve(t,e)}var n=new Date(i,a,e+1-d),o=n.getTime(),r=new Date(p,h,f).getTime();return s&&n.getDate()===f&&e-d<l?new qe(e-d+1,e,!0):o===r&&e-d<f?new qe(e-d+1,e,!0):e-d<l?new Fe(e-d+1,e):new Ue(u.getDate()+(e-l-d),e)})}},{key:"setCell",value:function(e,t){this.cells[e]=t}},{key:"getCell",value:function(e){return this.cells[e]}},{key:"getCells",value:function(){return this.cells}}]),r}(),$e=function(){function t(e){var o=this;u(this,t),this.handleClick=function(e){e.preventDefault(),e.stopPropagation(),o.selected=null;var t=+e.target.dataset.index;if(t||0===t){var n=o._store.getCell(t);n instanceof Ue?(o.updateDate(o.date.getMonth()+1),o.cleanupValueIndex()):n instanceof Ve?(o.updateDate(o.date.getMonth()-1),o.cleanupValueIndex()):(o.wcNode.setAttribute("value",n.getText()),o.wcNode.setAttribute("index",t))}},this.wcNode=e,this.selected=null,this.date=new Date}return d(t,[{key:"init",value:function(e,t,n,o,r,i){this._store=new He(t,n,o,r),this.selected=null,this.prepareCells(e),this.listenToCells(),this.index=e,this.allowedYears=i,this.locale=t,(o||0===o)&&this.date.setMonth(o),n&&this.date.setFullYear(n)}},{key:"prepareCells",value:function(e){if(this.selected&&!e){var t=new Ye(this.selected.getText(),this.selected.getIndex(),this.selected.getIsToday());this._store.setCell(this.selected.getIndex(),t)}if(e||0===e){var n=this._store.getCell(e);n instanceof Fe&&this.handleCurrentMonth(e,n)}}},{key:"listenToCells",value:function(){this.offClicks(),this.unClickEnd=H(this.wcNode,ce.CLICK,"js-datepicker-body",this.handleClick,{capture:!0,passive:!1})}},{key:"offClicks",value:function(){this.unClickEnd&&this.unClickEnd()}},{key:"cleanupValueIndex",value:function(){this.wcNode.removeAttribute("index"),this.wcNode.removeAttribute("value")}},{key:"handleCurrentMonth",value:function(e,t){if(null!==this.selected){var n=this.selected.getIndex(),o=this.selected.getIsToday(),r=this.selected.getText(),i=new Fe(r,n,o);this._store.setCell(n,i)}var a=new Ye(t.getText(),t.getIndex(),t.getIsToday());this._store.setCell(e,a),(this.selected=a).isToday||(this._store.cells=this._store.cells.map(function(e){return e instanceof qe?new Fe(e.getText(),e.getIndex(),!0):e}))}},{key:"updateDate",value:function(e){this.date=new Date(this.date.getFullYear(),this.date.getMonth()),this.date.setMonth(e);var t=this.date.getFullYear();this.allowedYears&&!~this.allowedYears.indexOf(t)||(this.wcNode.setAttribute("year",t),this.wcNode.setAttribute("month",this.date.getMonth()))}},{key:"store",get:function(){return this._store}}]),t}(),ze=function(e){function o(){u(this,o);var e=h(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,{styles:je,template:Me}));return e.datepickerBody=new $e(e),e}return r(o,Te),d(o,[{key:"connectedCallback",value:function(){p(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" m-datepicker-body"}},{key:"disconnectedCallback",value:function(){p(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"disconnectedCallback",this).call(this)}},{key:"willRenderCallback",value:function(){var e=ae(this,"month");e=e||0===e?e:void 0;var t=ae(this,"day");t=t||0===t?t:void 0,this.datepickerBody.init(ae(this,"index"),ae(this,"locale"),ae(this,"year")||void 0,e,t,ae(this,"allowed-years"))}},{key:"attributeChangedCallback",value:function(e,t,n){p(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"attributeChangedCallback",this).call(this,e,t,n),"month"!==e&&"year"!==e||!this.shouldUpdateCallback(n,t)||null===n||null===t||F(this,ue,null,{bubbles:!0,cancelable:!0,composed:!0})}}]),o}();return ze.tagName="axa-datepicker-body",ze.propTypes={classes:g.string,locale:M,value:g.string,index:g.number,year:g.number,month:g.number,day:g.number,allowedYears:g.arrayOf(g.number)},Ke=ze.tagName,Be=ze,customElements.get(Ke)||customElements.define(Ke,Be),ze}();
