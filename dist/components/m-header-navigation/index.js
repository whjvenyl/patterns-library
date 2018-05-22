var StyleGuideWebComponent=function(){"use strict";var e,y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},o=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}(),_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},d=function e(t,n,i){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,i)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(i):void 0},r=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},h=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},p=function e(t,n,i,o){var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,i,o)}else if("value"in r&&r.writable)r.value=i;else{var s=r.set;void 0!==s&&s.call(o,i)}return i},a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],i=!0,o=!1,r=void 0;try{for(var a,s=e[Symbol.iterator]();!(i=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(e){o=!0,r=e}finally{try{!i&&s.return&&s.return()}finally{if(o)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},k=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},m=(function(e){!function(){var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=void 0===n?"undefined":y(n);if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n))e.push(a.apply(null,n));else if("object"===i)for(var o in n)r.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?e.exports=a:window.classNames=a}()}(e={exports:{}},e.exports),e.exports),n="@-webkit-keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n@keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n.a-stroke,\n.m-header-navigation__list-link.is-header-navigation-active::after {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 1px;\n  display: block;\n  width: 0;\n  height: 0;\n  background: #f07662;\n  -webkit-transition: height 0.2s ease;\n  transition: height 0.2s ease; }\n\n.a-stroke.is-stroke-enter {\n  height: 4px; }\n\n.a-stroke.is-stroke-move {\n  -webkit-transition: left 0.2s ease, width 0.2s ease;\n  transition: left 0.2s ease, width 0.2s ease; }\n\n.a-stroke.is-stroke-static {\n  left: 0 !important;\n  bottom: 1px; }\n\n.a-stroke.is-stroke-transition-off {\n  -webkit-transition-property: none !important;\n  transition-property: none !important;\n  -webkit-transition-duration: 0s !important;\n          transition-duration: 0s !important; }\n\n.m-header-navigation__list-link.is-header-navigation-active::after {\n  bottom: 1px;\n  width: 100%;\n  height: 4px;\n  content: ''; }\n  .is-stroke-interactive .m-header-navigation__list-link.is-header-navigation-active::after {\n    height: 0; }\n\n.m-header-navigation__list-link.is-header-navigation-active.is-stroke-active-open::after {\n  -webkit-transition-property: none;\n  transition-property: none;\n  -webkit-transition-duration: 0s;\n          transition-duration: 0s; }\n\n.m-header-navigation__list-link.is-header-navigation-active.is-stroke-active-move::after {\n  height: 4px; }\n\n.m-header-navigation {\n  display: block;\n  margin-left: auto; }\n  @media (max-width: 991px) {\n    .m-header-navigation {\n      display: none; } }\n\n.m-header-navigation__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.m-header-navigation__list-item {\n  display: block;\n  float: left;\n  margin: 0 8px; }\n\n.m-header-navigation__list-link {\n  color: #00008f;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 75px;\n  padding: 0 10px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-align: center;\n  text-transform: uppercase;\n  vertical-align: middle;\n  /* stylelint-disable indentation */\n  /* stylelint-enable indentation */ }\n  @media (min-width: 576px) {\n    .m-header-navigation__list-link {\n      font-size: 13px;\n      line-height: 1.38; } }\n  .m-header-navigation__list-link.is-header-navigation-active, .m-header-navigation__list-link:hover, .m-header-navigation__list-link:active, .m-header-navigation__list-link:focus {\n    color: #00005b;\n    text-decoration: none; }\n  .m-header-navigation__list-link--hyphenate,\n  .m-header-navigation--hyphenate .m-header-navigation__list-link {\n    /* Adds a hyphen where the word breaks, if supported (No Blink) */\n    -webkit-hyphens: auto;\n        -ms-hyphens: auto;\n            hyphens: auto;\n    /* These are technically the same, but use both */\n    overflow-wrap: break-word;\n    word-wrap: break-word; }\n",f=/\n[\s]+$/,v=/^\n[\s]+/,g=/[\s]+$/,b=/^[\s]+/,C=/[\n\s]+/g,x=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],w=["code","pre","textarea"],N=function e(t,n){if(Array.isArray(n))for(var i,o,r=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var c=n[s];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),u=c),s===l-1&&(a=!1,-1===x.indexOf(r)&&-1===w.indexOf(r)?""===(i=u.nodeValue.replace(v,"").replace(g,"").replace(f,"").replace(C," "))?t.removeChild(u):u.nodeValue=i:-1===w.indexOf(r)&&(o=0===s?"":" ",i=u.nodeValue.replace(v,o).replace(b," ").replace(g,"").replace(f,"").replace(C," "),u.nodeValue=i));else if(c&&c.nodeType){a&&(a=!1,-1===x.indexOf(r)&&-1===w.indexOf(r)?""===(i=u.nodeValue.replace(v,"").replace(f,"").replace(C," "))?t.removeChild(u):u.nodeValue=i:-1===w.indexOf(r)&&(i=u.nodeValue.replace(b," ").replace(v,"").replace(f,"").replace(C," "),u.nodeValue=i));var d=c.nodeName;d&&(r=d.toLowerCase()),t.appendChild(c)}}}};var A=function(e){var t,n=document.createElement("div");return n.innerHTML=e,t=n.childNodes,Array.isArray(t)?t:[].slice.call(t)},i=function(e){var t,n=e.items,v=e.simplemenu;return(t=document.createElement("ul")).setAttribute("class","m-header-navigation__list js-header-navigation__list"),N(t,["\n    ",Array.isArray(n)&&n.map(function(e){return t=_({},e,{simplemenu:v}),r=t.url,a=void 0===r?"":r,s=t.name,l=void 0===s?"":s,c=t.items,u=t.classes,d=t.isActive,h=t.simplemenu,p=t.hyphenate,f=void 0!==p&&p,(i=document.createElement("li")).setAttribute("class","m-header-navigation__list-item"),N(i,["\n      ",(n=document.createElement("a"),n.setAttribute("data-prevent-default","data-prevent-default"),n.setAttribute("href",""+String(a)),n.setAttribute("class",""+String(m("m-header-navigation__list-link",u,{"js-header-navigation__list-link":c||!!h,"is-header-navigation-active":d,"m-header-navigation__list-link--hyphenate":f}))),N(n,[A(l)]),n),"\n      ",Array.isArray(c)?(o=document.createElement("axa-header-sub-navigation"),o.setAttribute("index-title",""+String(l)),o.setAttribute("index-url",""+String(a)),o.setAttribute("items",""+String(JSON.stringify(c))),o.setAttribute("flyout","flyout"),N(o,["\n        "]),o):"","\n    "]),i;var t,n,i,o,r,a,s,l,c,u,d,h,p,f}),"\n  "]),t};function s(e,t){for(var n=[],i=Object.keys(t),o=i.length,r=0;r<o;++r){var a=i[r];n.push(a+":"+t[a]+";")}e.style.cssText=n.join("")}var O=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}(),l=/^\s+|\s{2,}|\s+$/g;function c(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}function E(e){for(var t=arguments.length,n=Array(1<t?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];var o=S.apply(void 0,[e].concat(n));if(!0!==o){var r=[].concat(n);Array.isArray(o)&&(r=o.reduce(T,[])),r&&(e.className+=" "+r.join(" "))}}function T(e,t){var n=t.className;return t.hasClass||e.push(n),e}function S(e){for(var n=e.className,i=!1,o=!0,t=arguments.length,r=Array(1<t?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];var s=r.map(function(e){var t=c(e).test(n);t?i=!0:o=!1;return{className:e,hasClass:t}});return!(!o&&!i)&&s}function j(e){for(var t=arguments.length,n=Array(1<t?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];var o=S.apply(void 0,[e].concat(n));if(!1!==o){var r=[].concat(n);if(Array.isArray(o)&&(r=o.reduce(M,[])),r){var a=e.className;e.className=r.reduce(P,a)}}}function M(e,t){var n=t.className;return t.hasClass&&e.push(n),e}function P(e,t){var n=c(t,"g");return e.replace(n," ").replace(l," ")}var D=/\s+/,R={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),i=n.length,o=void 0,r=0;r<i;++r)if(void 0!==e[o=n[r]])return t[o];return""}()};function L(n,e,i,o){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},r=t.capture,a=void 0!==r&&r,s=t.passive,l=void 0===s||s;if(R[e]&&(e=R[e]),!n||!e)return null;var c=void 0===i?"undefined":y(i),u=i&&"string"===c;if("function"===c){if(o){var d=o;a=d.capture,l=d.passive}o=i}for(var h=O?{capture:a,passive:l}:a,p=u?function(e){var t=e.target;for(;!S(t,i)&&t!==n;)t=t.parentNode;if(t!==n)return o(e,t)}:o,f=e.split(D),v=f.length,_=0;_<v;++_)n.addEventListener(f[_],p,h);return function e(){for(var t=0;t<v;++t)n.removeEventListener(f[t],p,h);!function(e,t){if(!e)return;for(var n=Object.keys(e),i=n.length,o=0;o<i;++o){var r=n[o];if(e[r]===t)return delete e[r]}}(this,e)}}var t,U=function(){if(!window.getComputedStyle)return null;var e=window.getComputedStyle(document.documentElement,""),t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return{dom:"WebKit|Moz|MS|O".match(new RegExp("("+t+")","i"))[1],lowercase:t,css:"-"+t+"-",js:t[0].toUpperCase()+t.slice(1)}}().lowercase,F=function(){var e=window.requestAnimationFrame||window[U+"RequestAnimationFrame"];if(e)e=e.bind(window);else{var o=0;e=function(e){var t=Date.now(),n=Math.max(0,16-(t-o)),i=setTimeout(function(){e(t+n)},n);return o=t+n,i}}return e}(),z=t=(t=window.cancelAnimationFrame||window[U+"CancelAnimationFrame"]||window[U+"CancelRequestAnimationFrame"])?t.bind(window):function(e){clearTimeout(e)};var V=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function I(t,n){var e=t;if(t&&n!==t){if(V.test(t))try{e=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else e=!0;return e}function q(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=I(n,t)}var W=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function K(n,e,i){var t,o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},r=o.capture,a=void 0===r||r,s=o.passive,l=void 0===s||s,c=n.ownerDocument.documentElement,u=L(c,e,function(e){var t=e.target;if(!n.contains(t)&&n!==t)return i(e)},{capture:a,passive:l});return t=c,W&&(t.style.cursor="pointer"),u}var H=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var i=t.length,o={},r=0;r<i;++r){var a=t[r];o[a.toUpperCase()]=a}return o}("click","keyup","enter","move","leave","Escape","Esc"),$="data-prevent-default",B=function(){function i(e){var r=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};u(this,i),this._handleClick=function(e,t){r.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var n=!r._lastToggleNode,i=t!==r._lastToggleNode,o=!n&&!i;n?(r._notify(H.ENTER,t),r._onInteractive()):i&&r._notify(H.MOVE,t,r._lastToggleNode),r._lastToggleNode=t,o&&r._options.sameClickClose&&r._close()},this._handleClose=function(e,t){r.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),r._close()},this._handleKeyUp=function(e){(e.key===H.ESCAPE||e.key===H.ESC||27===e.keyCode)&&(e.preventDefault(),r._close())},this._init(e,t)}return o(i,[{key:"_init",value:function(e,t){e&&(this._wcNode=e),t&&(this._options=_({},i.DEFAULTS,t));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=L(this._container,H.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=L(this._container,H.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=K(this._container,H.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=L(this._container.ownerDocument,H.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute($)?q(e,$):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),delete this._lastToggleNode}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(H.LEAVE,this._lastToggleNode),this._offInteractive(),delete this._lastToggleNode)}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}}]),i}();B.DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var G=function(e){function n(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};u(this,n);var i=h(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e,{containerClass:".js-header-navigation__list",toggleClass:n.DEFAULTS.toggleClass,closeClass:"js-header-navigation-close",sameClickClose:!t.simpleMenu,preventDefault:!t.simpleMenu,outerClose:!t.simpleMenu,escapeClose:!t.simpleMenu}));return i._handleResize=function(){i.resizeTimeout&&(z(i.resizeTimeout),i.resizeTimeout=null),i.resizeTimeout=F(function(){var e=i._parentNode,t=e.offsetWidth,n=e.offsetLeft;t&&n&&s(i._stroke,{width:t+"px",left:n+"px"})})},i._handleTransitionEnd=function(e){"left"===e.propertyName&&(i._offMoving(),i._handleStaticState(!0))},i.wcNode=e,i.options=_({},n.DEFAULTS,t),i._isStatic=!1,i}return r(n,B),o(n,[{key:"init",value:function(){this._contextNode.style.position="relative",this._list=this._contextNode.querySelector(this.options.list),this._stroke=document.createElement("div"),this._stroke.className=this.options.strokeClass,this._list.appendChild(this._stroke)}},{key:"onContextEnabled",value:function(){if(this._contextNode){var e=this.options;this._init(this._contextNode,{containerClass:".js-header-navigation__list",toggleClass:n.DEFAULTS.toggleClass,closeClass:"js-header-navigation-close",sameClickClose:!e.simpleMenu,preventDefault:!e.simpleMenu,outerClose:!e.simpleMenu,escapeClose:!e.simpleMenu}),this.init()}}},{key:"enter",value:function(e){var t=this,n=e.parentNode;this._node=e,this._parentNode=n,S(e,this.options.activeClass)&&E(this._activeNode=e,this.options.activeOpenClass,this.options.activeMoveClass),F(function(){t._handleStaticState(!0,!0),E(t._list,t.options.interactiveClass),F(function(){E(t._stroke,t.options.enterClass),s(t._stroke,{width:n.offsetWidth+"px",left:n.offsetLeft+"px"})})})}},{key:"move",value:function(e){var t=this,n=e.parentNode;this._node=e,this._parentNode=n,this._activeNode&&j(this._activeNode,this.options.activeMoveClass),F(function(){t._handleStaticState(!1),F(function(){E(t._stroke,t.options.moveClass),s(t._stroke,{width:n.offsetWidth+"px",left:n.offsetLeft+"px"}),t._onMoving()})})}},{key:"leave",value:function(){var e=this,t=this._node;this._offMoving(),this._activeNode&&(j(this._activeNode,this.options.activeMoveClass,this.options.activeOpenClass),this._activeNode=null),S(t,this.options.activeClass)&&E(t,this.options.activeOpenClass),F(function(){e._handleStaticState(!0),j(e._list,e.options.interactiveClass),F(function(){j(e._stroke,e.options.moveClass,e.options.enterClass),j(t,e.options.activeOpenClass)}),e._parentNode=null,e._node=null})}},{key:"_onMoving",value:function(){var e,t;this._offMoving(),this._unResize=L((e=this.wcNode,(t=e.ownerDocument).defaultView||t.parentWindow),"resize",this._handleResize),this._unTransitionEnd=L(this._stroke,"transitionend",this._handleTransitionEnd)}},{key:"_offMoving",value:function(){this._unResize&&this._unResize(),this._unTransitionEnd&&this._unTransitionEnd()}},{key:"_handleStaticState",value:function(e,t){var n=this;(t||e!==this._isStatic)&&(this._isStatic=e,E(this._stroke,this.options.transitionOffClass),e?(this._node.appendChild(this._stroke),E(this._stroke,this.options.staticClass)):(this._list.appendChild(this._stroke),j(this._stroke,this.options.staticClass)),F(function(){j(n._stroke,n.options.transitionOffClass)}))}},{key:"destroy",value:function(){d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"destroy",this).call(this),this._offMoving(),this._stroke&&(this._stroke.parentNode&&this._stroke.parentNode.removeChild(this._stroke),delete this._stroke),delete this._contextNode,delete this.wcNode,delete this.options}},{key:"contextNode",set:function(e){this._contextNode=e,this.onContextEnabled()}}]),n}();function J(e){e&&(e.style.display="none",e.offsetHeight,e.style.display="")}G.DEFAULTS={strokeClass:"a-stroke",list:".js-header-navigation__list",toggleClass:"js-header-navigation__list-link",enterClass:"is-stroke-enter",moveClass:"is-stroke-move",staticClass:"is-stroke-static",interactiveClass:"is-stroke-interactive",activeClass:"is-header-navigation-active",activeOpenClass:"is-stroke-active-open",activeMoveClass:"is-stroke-active-move",transitionOffClass:"is-stroke-transition-off"};var Z=-1<window.navigator.userAgent.indexOf("Edge"),X=function(e){function i(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};u(this,i);var n=h(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,e,{containerClass:".js-header-navigation__list",toggleClass:i.DEFAULTS.toggleClass,closeClass:"js-header-navigation-close",preventDefault:t.preventDefault||!t.simpleMenu,outerClose:!t.simpleMenu,escapeClose:!t.simpleMenu}));return n.wcNode=e,n.options=_({},i.DEFAULTS,{useDefaultEvent:!!t.useDefaultEvent||!!t.simpleMenu},t),n.init(),n}return r(i,B),o(i,[{key:"init",value:function(){this.list=this.wcNode.querySelector(this.options.list)}},{key:"enter",value:function(e){var t=this,n=e.parentNode;E(n,this.options.openClass),Z&&F(function(){J(n.querySelector(t.options.subNavi)),F(function(){J(n.querySelector(t.options.subNavi))})})}},{key:"move",value:function(e,t){var n=e.parentNode;j(t.parentNode,this.options.openClass),E(n,this.options.openClass),Z&&J(n.querySelector(this.options.subNavi))}},{key:"leave",value:function(e){j(e.parentNode,this.options.openClass)}},{key:"destroy",value:function(){d(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"destroy",this).call(this),delete this.wcNode,delete this.options}}]),i}();X.DEFAULTS={list:".js-header-navigation__list",toggleClass:"js-header-navigation__list-link",subNavi:".js-header-sub-navigation",openClass:"is-header-sub-navigation-open"};var Y=1,Q=3,ee=8;function te(e,t){var n=e.nodeType,i=e.nodeName;n===Y&&function(e,t){for(var n=t.attributes,i=e.attributes,o=null,r=null,a=null,s=null,l=i.length-1;0<=l;--l)if(s=i[l],a=s.name,o=s.namespaceURI,r=s.value,o){var c=s.localName;t.getAttributeNS(o,c||a)!==r&&t.setAttributeNS(o,a,r)}else t.hasAttribute(a)?t.getAttribute(a)!==r&&("null"===r||"undefined"===r?t.removeAttribute(a):t.setAttribute(a,r)):t.setAttribute(a,r);for(var u=n.length-1;0<=u;--u)!1!==(s=n[u]).specified&&(a=s.name,(o=s.namespaceURI)?(a=s.localName||a,e.hasAttributeNS(o,a)||t.removeAttributeNS(o,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(e,t),n!==Q&&n!==ee||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===i?function(e,t){var n=e.value,i=t.value;ne(e,t,"checked"),ne(e,t,"disabled"),n!==i&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===i?ne(e,t,"selected"):"TEXTAREA"===i&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function ne(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var ie=3;function oe(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(te(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,i=void 0,o=void 0,r=void 0,a=0,s=0;n=t.childNodes[s],i=e.childNodes[s-a],n||i;s++)if(i)if(n)if(re(i,n))(o=oe(i,n))!==n&&(t.replaceChild(o,n),a++);else{r=null;for(var l=s;l<t.childNodes.length;l++)if(re(t.childNodes[l],i)){r=t.childNodes[l];break}r?((o=oe(i,r))!==r&&a++,t.insertBefore(o,n)):i.id||n.id?(t.insertBefore(i,n),a++):(o=oe(i,n))!==n&&(t.replaceChild(o,n),a++)}else t.appendChild(i),a++;else t.removeChild(n),s--}(e,t),t):null:e}function re(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===ie&&e.nodeValue===t.nodeValue)}var ae=[];var se=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,i=void 0!==n&&n,o=t.cancelable,r=void 0!==o&&o,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,i,r,s);var c=l.preventDefault;return l.preventDefault=function(){c.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function le(e,t,n){var i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},o=new se(t,_({},i,{detail:n}));return e.dispatchEvent(o)}function ce(i){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,r=void 0!==t&&t,n=e.trailing,a=void 0===n||n,s=e.maxWait,l=void 0!==s&&s,c=void 0,u=void 0,d=void 0,h=void 0,p=!1,f=o!==l,v=!1!==l;function _(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return c=t,f&&(u&&clearTimeout(u),u=setTimeout(y,o)),v&&!d&&(d=setTimeout(m,l)),r&&!p&&(p=!0,h=i.apply(void 0,k(c))),h}return _.flush=function(){(u||d)&&(h=i.apply(void 0,k(c)));return b(),h},_.cancel=b,_;function y(){d&&clearTimeout(d),g()}function m(){u&&clearTimeout(u),g()}function g(){a&&(h=i.apply(void 0,k(c))),d=u=null,p=!1}function b(){u&&(clearTimeout(u),u=null),d&&(clearTimeout(d),d=null),c=void 0,p=!1}}var ue={};function de(e,t){var n=L(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);ue[e]||(ue[e]={count:0});var i,o=ue[e];return o.count++,o.onsubscribe||(o.onsubscribe=ce((i=e,function(){le(document,"pubsub/onsubscribe",i),le(document,"pubsub/onsubscribe/"+i,i),ue[i]&&delete ue[i].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete ue[e]}}L(document,"pubsub/onsubscribe",function(e){var t=e.detail;ue[t]||(ue[t]={count:0});var n=ue[t],i=n.queue;Array.isArray(i)&&(i.forEach(function(e){var t=a(e,3),n=t[0],i=t[1],o=t[2];le(o,n,i)}),delete n.queue)});var he=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,pe=/[-_]+/g;function fe(e){return e.replace(he,ve)}function ve(e,t){return 0==+e||pe.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var _e=/[A-Z]/g;function ye(e,t,n){var i=e.toLowerCase(),o=n.charAt(t+1);return 0===t||o.toUpperCase()===o?i:"-"+i}var me=function(e,t){return e===t},ge=function(e){function l(e,t){var n;u(this,l);for(var i="Property >>>"+e+"<<< exists at "+t.nodeName+"#"+t._id+" and evaluates to -> "+t[e],o=arguments.length,r=Array(2<o?o-2:0),a=2;a<o;a++)r[a-2]=arguments[a];var s=h(this,(n=l.__proto__||Object.getPrototypeOf(l)).call.apply(n,[this,i].concat(r)));return Error.captureStackTrace&&Error.captureStackTrace(s,l),s.name="PropertyExistsException",s}return r(l,e),l}(Error);function be(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(be.prototype,HTMLElement.prototype),Object.setPrototypeOf(be,HTMLElement);var ke,Ce,xe,we,Ne="throwed",Ae=["title","checked","disabled"],Oe={},Ee=function(e){return e in Oe||(Oe[e]=0),++Oe[e]},Te=((ke=function(){var e;return(e=console).log.apply(e,arguments)},function(){var o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:me;return function(){for(var e=arguments.length,i=Array(e),t=0;t<e;t++)i[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return o.apply(void 0,[].concat(i,t))?ke.apply(void 0,arguments):void 0}}}})()(!0),function(e){function c(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];u(this,c);var l=h(this,(c.__proto__||Object.getPrototypeOf(c)).call(this));l._reduceProps=function(e,t){var n=e.props,i=e.shouldUpdate,o=l._hasKeys[t];if(-1===Ae.indexOf(t)&&o)throw new ge(t,l);var r="_"+t,a=n[t],s=l[r];return i||l.shouldUpdateCallback(a,s)?(l[r]=a,l._props[t]=a,o&&p(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),t,a,l),{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},l._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;l.contextNode&&(clearTimeout(l.timeoutId),l.timeoutId=setTimeout(function(){l.contextCallback(l.contextNode,e)},10)),l.unContextEnabled&&l.unContextEnabled(),l.unContextEnabled=de("context/enabled",l._makeContextReady)},l._initialise(e,t),l._id=Ee(l.nodeName),l._props={},l._hasKeys={},l.reRender=ce(function(){return l.render()},50);var n=l.constructor.observedAttributes;return Array.isArray(n)&&n.forEach(function(e){var n,i=fe(e),o=i in l;if(-1===Ae.indexOf(i)&&o)throw new ge(i,l);l._hasKeys[i]=o,Object.defineProperty(l,i,n={get:function(){return this["_"+i]},set:function(e){var t="_"+i;this.shouldUpdateCallback(this[t],e)&&(this[t]=e,this._props[i]=e,o&&p(n.__proto__||Object.getPrototypeOf(n),i,e,this),this._isConnected&&this._hasRendered&&this.reRender())}})}),l}return r(c,be),o(c,[{key:"_initialise",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;this._styles=e,this._template=t,this._hasTemplate=!!t,this._hasRendered=!1,this._isConnected=!1}},{key:"connectedCallback",value:function(){var o=this;if(!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(e)&&e.forEach(function(e){var t=fe(e);if(o.hasAttribute(e)){var n=q(o,e),i=o._hasKeys[t];o["_"+t]=n,o._props[t]=n,i&&p(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),t,n,o)}})}this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"attributeChangedCallback",value:function(e,t,n){this.shouldUpdateCallback(n,t)&&(this[fe(e)]=I(n))}},{key:"batchProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t;Object.keys(e).filter(function(e){return-1<n.indexOf(e.replace(_e,ye))}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.render()}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled(),this._isConnected=!1}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var i=document.createDocumentFragment(),o=[];this.firstChild;)o.push(this.firstChild),i.appendChild(this.firstChild);this._lightDOMRefs=o,this.childrenFragment=i}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});var r=t(this._props,this.childrenFragment),a=document.createDocumentFragment();if(Array.isArray(r))r.forEach(function(e){a.appendChild(e)});else if(r){if("string"==typeof r){var s=new Error(Ne);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c#"+this._id+" does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+s.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),s}a.appendChild(r)}if(e)d(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"appendChild",this).call(this,a);else{var l=this.cloneNode(!1);l._isMorphing=!0,l.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":y(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":y(t)))throw new Error("componentMorph: newTree should be an object");oe(t,e)}(this,l),function(){for(var e=void 0;e=ae.pop();)delete e.isSameNode;ae=[]}(),this._isMorphing=!1}}catch(s){s.message!==Ne&&console.error("\n%cWeb Component %c"+this.nodeName+"%c#"+this._id+" has an error while loading its template:\n"+s+"\n\nStack Trace: "+s.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}},{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):d(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"appendChild",this).call(this,e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;ue[e]||(ue[e]={count:0,queue:[]});var i=ue[e].queue;Array.isArray(i)?i.push([e,t,n]):le(n,e,t)}("context/enabled",this.__contextName=e)}},{key:"selectContext",value:function(e){this.__selectedContext=e&&e.toLowerCase()}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else p(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else p(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else p(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"innerHTML",e,this)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),c}()),Se={},je=function(e){function t(){return u(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,Te),o(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:Te.uuidv4();if(e&&!Se[e]){var n=document.createElement("style"),i=document.createTextNode(e);n.appendChild(i),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),Se[e]=!0}}}]),t}(),Me=function(e){function t(){u(this,t);var e=h(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,i));return e.selectContext("axa-header-main"),e}return r(t,je),o(t,null,[{key:"observedAttributes",get:function(){return["hyphenate","items","simplemenu"]}}]),o(t,[{key:"contextCallback",value:function(e){this.stroke&&(this.stroke.contextNode=e)}},{key:"willRenderCallback",value:function(){var e=this.hyphenate;this.className=m(this.initialClassName,"m-header-navigation",{"m-header-navigation--hyphenate":e})}},{key:"didRenderCallback",value:function(){var e=this.contextNode,t=this.simpleMenu;this.stroke&&this.stroke.destroy(),this.navigation&&this.navigation.destroy(),this.stroke=new G(this,{simpleMenu:t}),e&&this.contextCallback(e),this.navigation=new X(this,{simpleMenu:t})}},{key:"disconnectedCallback",value:function(){d(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"disconnectedCallback",this).call(this),this.stroke&&(this.stroke.destroy(),delete this.stroke),this.navigation&&(this.navigation.destroy(),delete this.navigation)}}]),t}();return Ce=function(){window.customElements.define("axa-header-navigation",Me)},xe=0,we=function(){if(0===xe)try{Ce.apply(void 0,arguments),xe+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",we,!1),document.addEventListener("WebComponentsReady",we,!1),Me}();
