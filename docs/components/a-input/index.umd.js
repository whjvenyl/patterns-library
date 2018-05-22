!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";var e,y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},n=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}(),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},c=function e(t,n,i){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var o=Object.getPrototypeOf(t);return null===o?void 0:e(o,n,i)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(i):void 0},i=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},p=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},f=function e(t,n,i,r){var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,i,r)}else if("value"in o&&o.writable)o.value=i;else{var l=o.set;void 0!==l&&l.call(r,i)}return i},a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],i=!0,r=!1,o=void 0;try{for(var a,l=e[Symbol.iterator]();!(i=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(e){r=!0,o=e}finally{try{!i&&l.return&&l.return()}finally{if(r)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},g=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},r=(function(e){!function(){var o={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=void 0===n?"undefined":y(n);if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n))e.push(a.apply(null,n));else if("object"===i)for(var r in n)o.call(n,r)&&n[r]&&e.push(r)}}return e.join(" ")}e.exports?e.exports=a:window.classNames=a}()}(e={exports:{}},e.exports),e.exports),l=1,s=3,u=8;function h(e,t){var n=e.nodeType,i=e.nodeName;n===l&&function(e,t){for(var n=t.attributes,i=e.attributes,r=null,o=null,a=null,l=null,s=i.length-1;0<=s;--s)if(l=i[s],a=l.name,r=l.namespaceURI,o=l.value,r){var u=l.localName;t.getAttributeNS(r,u||a)!==o&&t.setAttributeNS(r,a,o)}else t.hasAttribute(a)?t.getAttribute(a)!==o&&("null"===o||"undefined"===o?t.removeAttribute(a):t.setAttribute(a,o)):t.setAttribute(a,o);for(var d=n.length-1;0<=d;--d)!1!==(l=n[d]).specified&&(a=l.name,(r=l.namespaceURI)?(a=l.localName||a,e.hasAttributeNS(r,a)||t.removeAttributeNS(r,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(e,t),n!==s&&n!==u||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===i?function(e,t){var n=e.value,i=t.value;v(e,t,"checked"),v(e,t,"disabled"),n!==i&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===i?v(e,t,"selected"):"TEXTAREA"===i&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function v(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var b=3;function m(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(h(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,i=void 0,r=void 0,o=void 0,a=0,l=0;n=t.childNodes[l],i=e.childNodes[l-a],n||i;l++)if(i)if(n)if(_(i,n))(r=m(i,n))!==n&&(t.replaceChild(r,n),a++);else{o=null;for(var s=l;s<t.childNodes.length;s++)if(_(t.childNodes[s],i)){o=t.childNodes[s];break}o?((r=m(i,o))!==o&&a++,t.insertBefore(r,n)):i.id||n.id?(t.insertBefore(i,n),a++):(r=m(i,n))!==n&&(t.replaceChild(r,n),a++)}else t.appendChild(i),a++;else t.removeChild(n),l--}(e,t),t):null:e}function _(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===b&&e.nodeValue===t.nodeValue)}var x=[];var C=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function w(t,n){var e=t;if(t&&n!==t){if(C.test(t))try{e=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else e=!0;return e}var k=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,i=void 0!==n&&n,r=t.cancelable,o=void 0!==r&&r,a=t.detail,l=void 0===a?void 0:a,s=document.createEvent("CustomEvent");s.initCustomEvent(e,i,o,l);var u=s.preventDefault;return s.preventDefault=function(){u.call(s);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},s}}();function O(e,t,n){var i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},r=new k(t,o({},i,{detail:n}));return e.dispatchEvent(r)}var A=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function E(e){for(var r=e.className,o=!1,a=!0,t=arguments.length,n=Array(1<t?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];var l=n.map(function(e){var t=(n=e,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",i)).test(r);var n,i;t?o=!0:a=!1;return{className:e,hasClass:t}});return!(!a&&!o)&&l}var N=/\s+/,T={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),i=n.length,r=void 0,o=0;o<i;++o)if(void 0!==e[r=n[o]])return t[r];return""}()};function j(n,e,i,r){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},o=t.capture,a=void 0!==o&&o,l=t.passive,s=void 0===l||l;if(T[e]&&(e=T[e]),!n||!e)return null;var u=void 0===i?"undefined":y(i),d=i&&"string"===u;if("function"===u){if(r){var c=r;a=c.capture,s=c.passive}r=i}for(var p=A?{capture:a,passive:s}:a,f=d?function(e){var t=e.target;for(;!E(t,i)&&t!==n;)t=t.parentNode;if(t!==n)return r(e,t)}:r,h=e.split(N),v=h.length,b=0;b<v;++b)n.addEventListener(h[b],f,p);return function e(){for(var t=0;t<v;++t)n.removeEventListener(h[t],f,p);!function(e,t){if(!e)return;for(var n=Object.keys(e),i=n.length,r=0;r<i;++r){var o=n[r];if(e[o]===t)return delete e[o]}}(this,e)}}function S(i){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,o=void 0!==t&&t,n=e.trailing,a=void 0===n||n,l=e.maxWait,s=void 0!==l&&l,u=void 0,d=void 0,c=void 0,p=void 0,f=!1,h=r!==s,v=!1!==s;function b(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return u=t,h&&(d&&clearTimeout(d),d=setTimeout(y,r)),v&&!c&&(c=setTimeout(m,s)),o&&!f&&(f=!0,p=i.apply(void 0,g(u))),p}return b.flush=function(){(d||c)&&(p=i.apply(void 0,g(u)));return x(),p},b.cancel=x,b;function y(){c&&clearTimeout(c),_()}function m(){d&&clearTimeout(d),_()}function _(){a&&(p=i.apply(void 0,g(u))),c=d=null,f=!1}function x(){d&&(clearTimeout(d),d=null),c&&(clearTimeout(c),c=null),u=void 0,f=!1}}var P={};function R(e,t){var n=j(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);P[e]||(P[e]={count:0});var i,r=P[e];return r.count++,r.onsubscribe||(r.onsubscribe=S((i=e,function(){O(document,"pubsub/onsubscribe",i),O(document,"pubsub/onsubscribe/"+i,i),P[i]&&delete P[i].unsubscribe}),100)),r.onsubscribe(),function(){r.count--,n.call(this),r.count<=0&&delete P[e]}}j(document,"pubsub/onsubscribe",function(e){var t=e.detail;P[t]||(P[t]={count:0});var n=P[t],i=n.queue;Array.isArray(i)&&(i.forEach(function(e){var t=a(e,3),n=t[0],i=t[1],r=t[2];O(r,n,i)}),delete n.queue)});var t=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,L=/[-_]+/g;function M(e){return e.replace(t,V)}function V(e,t){return 0==+e||L.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var D=/[A-Z]/g;function U(e,t,n){var i=e.toLowerCase(),r=n.charAt(t+1);return 0===t||r.toUpperCase()===r?i:"-"+i}var F=function(e,t){return e===t},z=function(e){function s(e,t){var n;d(this,s);for(var i="Property >>>"+e+"<<< exists at "+t.nodeName+"#"+t._id+" and evaluates to -> "+t[e],r=arguments.length,o=Array(2<r?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];var l=p(this,(n=s.__proto__||Object.getPrototypeOf(s)).call.apply(n,[this,i].concat(o)));return Error.captureStackTrace&&Error.captureStackTrace(l,s),l.name="PropertyExistsException",l}return i(s,e),s}(Error);function I(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(I.prototype,HTMLElement.prototype),Object.setPrototypeOf(I,HTMLElement);var W,q="throwed",H=["title","checked","disabled"],$={},K=function(e){return e in $||($[e]=0),++$[e]},G=((W=function(){var e;return(e=console).log.apply(e,arguments)},function(){var r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:F;return function(){for(var e=arguments.length,i=Array(e),t=0;t<e;t++)i[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return r.apply(void 0,[].concat(i,t))?W.apply(void 0,arguments):void 0}}}})()(!0),function(e){function u(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];d(this,u);var s=p(this,(u.__proto__||Object.getPrototypeOf(u)).call(this));s._reduceProps=function(e,t){var n=e.props,i=e.shouldUpdate,r=s._hasKeys[t];if(-1===H.indexOf(t)&&r)throw new z(t,s);var o="_"+t,a=n[t],l=s[o];return i||s.shouldUpdateCallback(a,l)?(s[o]=a,s._props[t]=a,r&&f(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),t,a,s),{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},s._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;s.contextNode&&(clearTimeout(s.timeoutId),s.timeoutId=setTimeout(function(){s.contextCallback(s.contextNode,e)},10)),s.unContextEnabled&&s.unContextEnabled(),s.unContextEnabled=R("context/enabled",s._makeContextReady)},s._initialise(e,t),s._id=K(s.nodeName),s._props={},s._hasKeys={},s.reRender=S(function(){return s.render()},50);var n=s.constructor.observedAttributes;return Array.isArray(n)&&n.forEach(function(e){var n,i=M(e),r=i in s;if(-1===H.indexOf(i)&&r)throw new z(i,s);s._hasKeys[i]=r,Object.defineProperty(s,i,n={get:function(){return this["_"+i]},set:function(e){var t="_"+i;this.shouldUpdateCallback(this[t],e)&&(this[t]=e,this._props[i]=e,r&&f(n.__proto__||Object.getPrototypeOf(n),i,e,this),this._isConnected&&this._hasRendered&&this.reRender())}})}),s}return i(u,I),n(u,[{key:"_initialise",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;this._styles=e,this._template=t,this._hasTemplate=!!t,this._hasRendered=!1,this._isConnected=!1}},{key:"connectedCallback",value:function(){var r=this;if(!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(e)&&e.forEach(function(e){var t=M(e);if(r.hasAttribute(e)){var n=function(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=w(n,t)}(r,e),i=r._hasKeys[t];r["_"+t]=n,r._props[t]=n,i&&f(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),t,n,r)}})}this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"attributeChangedCallback",value:function(e,t,n){this.shouldUpdateCallback(n,t)&&(this[M(e)]=w(n))}},{key:"batchProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t;Object.keys(e).filter(function(e){return-1<n.indexOf(e.replace(D,U))}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.render()}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled(),this._isConnected=!1}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var i=document.createDocumentFragment(),r=[];this.firstChild;)r.push(this.firstChild),i.appendChild(this.firstChild);this._lightDOMRefs=r,this.childrenFragment=i}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});var o=t(this._props,this.childrenFragment),a=document.createDocumentFragment();if(Array.isArray(o))o.forEach(function(e){a.appendChild(e)});else if(o){if("string"==typeof o){var l=new Error(q);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c#"+this._id+" does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+l.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),l}a.appendChild(o)}if(e)c(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"appendChild",this).call(this,a);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":y(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":y(t)))throw new Error("componentMorph: newTree should be an object");m(t,e)}(this,s),function(){for(var e=void 0;e=x.pop();)delete e.isSameNode;x=[]}(),this._isMorphing=!1}}catch(l){l.message!==q&&console.error("\n%cWeb Component %c"+this.nodeName+"%c#"+this._id+" has an error while loading its template:\n"+l+"\n\nStack Trace: "+l.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}},{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):c(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"appendChild",this).call(this,e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;P[e]||(P[e]={count:0,queue:[]});var i=P[e].queue;Array.isArray(i)?i.push([e,t,n]):O(n,e,t)}("context/enabled",this.__contextName=e)}},{key:"selectContext",value:function(e){this.__selectedContext=e&&e.toLowerCase()}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else f(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else f(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else f(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"innerHTML",e,this)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),u}()),B={},Z=function(e){function t(){return d(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,G),n(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:G.uuidv4();if(e&&!B[e]){var n=document.createElement("style"),i=document.createTextNode(e);n.appendChild(i),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),B[e]=!0}}}]),t}(),J='.a-input {\n  display: block;\n  width: 100%; }\n  .a-input:not(:first-child) {\n    margin-top: 5px; }\n    @media (min-width: 768px) {\n      .a-input:not(:first-child) {\n        margin-top: 10px; } }\n\n.a-input__wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%; }\n\n.a-input__input {\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  height: 40px;\n  padding: 0 20px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  color: #333;\n  background: #fff;\n  outline: none;\n  border: 1px solid #ccc;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none; }\n  @media (min-width: 576px) {\n    .a-input__input {\n      font-size: 14px;\n      line-height: 1.21; } }\n  .a-input__input::-webkit-input-placeholder {\n    color: #999; }\n  .a-input__input:-ms-input-placeholder {\n    color: #999; }\n  .a-input__input::-ms-input-placeholder {\n    color: #999; }\n  .a-input__input::placeholder {\n    color: #999; }\n  .a-input__input:hover:not([disabled]):not(:disabled):not(.a-input--error), .a-input__input:active:not([disabled]):not(:disabled):not(.a-input--error), .a-input__input:focus:not([disabled]):not(:disabled):not(.a-input--error) {\n    border-color: #00008f; }\n  .a-input__input[disabled],\n  .a-input__input :disabled {\n    background-color: #f5f5f5; }\n\n.a-input--error .a-input__input {\n  border-color: #c91432; }\n\n.a-input--valid .a-input__valid-icon {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n\n.a-input--inline {\n  display: inline-block;\n  width: auto;\n  vertical-align: middle; }\n  .a-input--inline + .a-input--inline {\n    margin-left: 10px; }\n    @media (min-width: 768px) {\n      .a-input--inline + .a-input--inline {\n        margin-left: 15px; } }\n  .a-input--inline .a-input__wrapper {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle; }\n\n.a-input__valid-icon {\n  display: none;\n  width: 48px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  -ms-flex-negative: 0;\n      flex-shrink: 0; }\n  .a-input__valid-icon::before {\n    display: block;\n    width: 8px;\n    height: 16px;\n    content: "";\n    border: solid #1cc54e;\n    border-width: 0 2px 2px 0;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg); }\n',X=/\n[\s]+$/,Q=/^\n[\s]+/,Y=/[\s]+$/,ee=/^[\s]+/,te=/[\n\s]+/g,ne=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],ie=["code","pre","textarea"],re=function e(t,n){if(Array.isArray(n))for(var i,r,o=t.nodeName.toLowerCase(),a=!1,l=0,s=n.length;l<s;l++){var u=n[l];if(Array.isArray(u))e(t,u);else{("number"==typeof u||"boolean"==typeof u||"function"==typeof u||u instanceof Date||u instanceof RegExp)&&(u=u.toString());var d=t.childNodes[t.childNodes.length-1];if("string"==typeof u)a=!0,d&&"#text"===d.nodeName?d.nodeValue+=u:(u=document.createTextNode(u),t.appendChild(u),d=u),l===s-1&&(a=!1,-1===ne.indexOf(o)&&-1===ie.indexOf(o)?""===(i=d.nodeValue.replace(Q,"").replace(Y,"").replace(X,"").replace(te," "))?t.removeChild(d):d.nodeValue=i:-1===ie.indexOf(o)&&(r=0===l?"":" ",i=d.nodeValue.replace(Q,r).replace(ee," ").replace(Y,"").replace(X,"").replace(te," "),d.nodeValue=i));else if(u&&u.nodeType){a&&(a=!1,-1===ne.indexOf(o)&&-1===ie.indexOf(o)?""===(i=d.nodeValue.replace(Q,"").replace(X,"").replace(te," "))?t.removeChild(d):d.nodeValue=i:-1===ie.indexOf(o)&&(i=d.nodeValue.replace(ee," ").replace(Q,"").replace(X,"").replace(te," "),d.nodeValue=i));var c=u.nodeName;c&&(o=c.toLowerCase()),t.appendChild(u)}}}};function oe(e){var t,n,i,r=e.inputId,o=void 0===r?G.uuidv4():r,a=e.type,l=void 0===a?"text":a,s=e.placeholder,u=void 0===s?"":s,d=e.value,c=void 0===d?"":d,p=e.name,f=e.disabled,h=void 0!==f&&f;return(i=document.createElement("div")).setAttribute("class","a-input__wrapper"),re(i,["\n      ",(t=document.createElement("input"),t.setAttribute("id",""+String(o)),t.setAttribute("name",""+String(p)),t.setAttribute("type",""+String(l)),t.setAttribute("placeholder",""+String(u)),t.setAttribute("value",""+String(c)),h&&t.setAttribute("disabled","disabled"),t.setAttribute("class","a-input__input"),t),"\n          ",(n=document.createElement("span"),n.setAttribute("class","a-input__valid-icon"),n),"\n    "]),i}var ae,le,se,ue=function(e){function t(){return d(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,J,oe))}return i(t,Z),n(t,null,[{key:"observedAttributes",get:function(){return["valid","inline","error","disabled","input-id","type","placeholder","value","name"]}}]),n(t,[{key:"willRenderCallback",value:function(){var e=this.valid,t=this.inline,n=this.error,i=this.disabled;this.className=r("a-input",this.initialClassName,{"a-input--valid":e,"a-input--inline":t,"a-input--error":n,"a-input--disabled":i})}}]),t}();return ae=function(){window.customElements.define("axa-input",ue)},le=0,se=function(){if(0===le)try{ae.apply(void 0,arguments),le+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",se,!1),document.addEventListener("WebComponentsReady",se,!1),ue});
