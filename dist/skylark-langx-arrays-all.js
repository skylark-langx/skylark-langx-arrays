/**
 * skylark-langx-arrays - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(r,n){var t=n.define,e=n.require,o="function"==typeof t&&t.amd,i=!o&&"undefined"!=typeof exports;if(!o&&!t){var a={};t=n.define=function(r,n,t){"function"==typeof t?(a[r]={factory:t,deps:n.map(function(n){return function(r,n){if("."!==r[0])return r;var t=n.split("/"),e=r.split("/");t.pop();for(var o=0;o<e.length;o++)"."!=e[o]&&(".."==e[o]?t.pop():t.push(e[o]));return t.join("/")}(n,r)}),resolved:!1,exports:null},e(r)):a[r]={factory:null,resolved:!0,exports:t}},e=n.require=function(r){if(!a.hasOwnProperty(r))throw new Error("Module "+r+" has not been defined");var t=a[r];if(!t.resolved){var o=[];t.deps.forEach(function(r){o.push(e(r))}),t.exports=t.factory.apply(n,o)||null,t.resolved=!0}return t.exports}}if(!t)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(r,n){r("skylark-langx-ns/_attach",[],function(){return function(r,n,t){"string"==typeof n&&(n=n.split("."));for(var e=n.length,o=r,i=0,a=n[i++];i<e;)o=o[a]=o[a]||{},a=n[i++];return o[a]=t}}),r("skylark-langx-ns/ns",["./_attach"],function(r){var n={attach:function(t,e){return r(n,t,e)}};return n}),r("skylark-langx-ns/main",["./ns"],function(r){return r}),r("skylark-langx-ns",["skylark-langx-ns/main"],function(r){return r}),r("skylark-langx-types/types",["skylark-langx-ns"],function(r){var n,t={}.toString,e=(n={},"Boolean Number String Function Array Date RegExp Object Error Symbol".split(" ").forEach(function(r){n["[object "+r+"]"]=r.toLowerCase()}),function(r){return null==r?String(r):n[t.call(r)]||"object"});function o(r){var n;for(n in r)if(null!==r[n])return!1;return!0}function i(r){return"function"==e(r)}function a(r){return r&&r.nodeType}function u(r){return"number"==typeof r}function l(r){return"object"==e(r)}function f(r){return"string"==typeof r}function c(r){return r&&r==r.window}return r.attach("langx.types",{isArray:function(r){return r&&r.constructor===Array},isArrayLike:function(r){return!f(r)&&!a(r)&&"number"==typeof r.length&&!i(r)},isBoolean:function(r){return"boolean"==typeof r},isDefined:function(r){return void 0!==r},isDocument:function(r){return null!=r&&r.nodeType==r.DOCUMENT_NODE},isEmpty:o,isEmptyObject:o,isFunction:i,isHtmlNode:a,isNull:function(r){return"null"===e(r)},isNumber:u,isNumeric:u,isObject:l,isPlainObject:function(r){return l(r)&&!c(r)&&Object.getPrototypeOf(r)==Object.prototype},isString:f,isSameOrigin:function(r){if(r){var n=location.protocol+"//"+location.hostname;return location.port&&(n+=":"+location.port),r.startsWith(n)}},isSymbol:function(r){return"symbol"==typeof r||isObjectLike(r)&&objectToString.call(r)==symbolTag},isUndefined:function(r){return void 0===r},isWindow:c,type:e})}),r("skylark-langx-types/main",["./types"],function(r){return r}),r("skylark-langx-types",["skylark-langx-types/main"],function(r){return r}),r("skylark-langx-numbers/numbers",["skylark-langx-ns","skylark-langx-types"],function(r,n){var t=n.isObject,e=n.isSymbol,o=1/0,i=1.7976931348623157e308,a=NaN,u=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt;function y(r){if(!r)return 0===r?r:0;if((r=p(r))===o||r===-o){var n=r<0?-1:1;return n*i}return r==r?r:0}function p(r){if("number"==typeof r)return r;if(e(r))return a;if(t(r)){var n="function"==typeof r.valueOf?r.valueOf():r;r=t(n)?n+"":n}if("string"!=typeof r)return 0===r?r:+r;r=r.replace(u,"");var o=f.test(r);return o||c.test(r)?s(r.slice(2),o?2:8):l.test(r)?a:+r}return r.attach("langx.numbers",{toFinite:y,toNumber:p,toInteger:function(r){var n=y(r),t=n%1;return n==n?t?n-t:n:0}})}),r("skylark-langx-numbers/main",["./numbers"],function(r){return r}),r("skylark-langx-numbers",["skylark-langx-numbers/main"],function(r){return r}),r("skylark-langx-objects/objects",["skylark-langx-ns/ns","skylark-langx-ns/_attach","skylark-langx-types","skylark-langx-numbers"],function(r,n,t,e){var o,i,a=Object.prototype.hasOwnProperty,u=Array.prototype.slice,l=t.isBoolean,f=t.isFunction,c=t.isObject,s=t.isPlainObject,y=t.isArray,p=t.isArrayLike,g=t.isString,v=e.toInteger;var h,k,b="undefined"!=typeof Symbol?Symbol.prototype:null;function d(r){if(!c(r))return[];var n=[];for(var t in r)n.push(t);return n}function x(r,n){if(!y(n))return null!=r&&a.call(r,n);for(var t=n.length,e=0;e<t;e++){var o=n[e];if(null==r||!a.call(r,o))return!1;r=r[o]}return!!t}function m(r,n,t,e){for(var o in n)e&&void 0!==r[o]||(t&&(s(n[o])||y(n[o]))?(s(n[o])&&!s(r[o])&&(r[o]={}),y(n[o])&&!y(r[o])&&(r[o]=[]),m(r[o],n[o],t,e)):void 0!==n[o]&&(r[o]=n[o]));return r}function j(r){var n=u.call(arguments,0),t=n.shift(),e=!1;return l(n[n.length-1])&&(e=n.pop()),{target:t,sources:n,deep:e}}function O(){var r=j.apply(this,arguments);return r.sources.forEach(function(n){m(r.target,n,r.deep,!1)}),r.target}function E(r){for(var n=d(r),t=n.length,e=Array(t),o=0;o<t;o++)e[o]=r[n[o]];return e}return o=function(r,n,t,e){if(r===n)return 0!==r||1/r==1/n;if(null==r||null==n)return!1;if(r!=r)return n!=n;var o=typeof r;return("function"===o||"object"===o||"object"==typeof n)&&i(r,n,t,e)},i=function(r,n,t,e){var i=toString.call(r);if(i!==toString.call(n))return!1;switch(i){case"[object RegExp]":case"[object String]":return""+r==""+n;case"[object Number]":return+r!=+r?+n!=+n:0==+r?1/+r==1/n:+r==+n;case"[object Date]":case"[object Boolean]":return+r==+n;case"[object Symbol]":return b.valueOf.call(r)===b.valueOf.call(n)}var a="[object Array]"===i;if(!a){if("object"!=typeof r||"object"!=typeof n)return!1;var u=r.constructor,l=n.constructor;if(u!==l&&!(f(u)&&u instanceof u&&f(l)&&l instanceof l)&&"constructor"in r&&"constructor"in n)return!1}t=t||[],e=e||[];for(var c=t.length;c--;)if(t[c]===r)return e[c]===n;if(t.push(r),e.push(n),a){if((c=r.length)!==n.length)return!1;for(;c--;)if(!o(r[c],n[c],t,e))return!1}else{var s,y=Object.keys(r);if(c=y.length,Object.keys(n).length!==c)return!1;for(;c--;)if(s=y[c],void 0===n[s]||!o(r[s],n[s],t,e))return!1}return t.pop(),e.pop(),!0},r.attach("langx.objects",{allKeys:d,attach:n,clone:function r(n,t){var e;if(void 0===n||null===n)e=n;else if(t&&n.clone)e=n.clone();else if(y(n)){e=[];for(var o=0;o<n.length;o++)e.push(r(n[o]))}else if(s(n))for(var i in e={},n)e[i]=r(n[i]);else e=n;return e},defaults:(h=d,k=!0,function(r){var n=arguments.length;if(k&&(r=Object(r)),n<2||null==r)return r;for(var t=1;t<n;t++)for(var e=arguments[t],o=h(e),i=o.length,a=0;a<i;a++){var u=o[a];k&&void 0!==r[u]||(r[u]=e[u])}return r}),each:function(r,n){var t,e,o,i;if(r)if(void 0===(t=r.length)){for(e in r)if(r.hasOwnProperty(e)&&(i=r[e],!1===n.call(i,e,i)))break}else for(o=0;o<t&&(i=r[o],!1!==n.call(i,o,i));o++);return this},extend:function(r){var n,t=u.call(arguments,1);"boolean"==typeof r&&(n=r,r=t.shift());0==t.length&&(t=[r],r=this);return t.forEach(function(t){O(r,t,n)}),r},has:x,isEqual:function(r,n){return o(r,n)},includes:function(r,n,t,e){r=p(r)?r:E(r),t=t&&!e?v(t):0;var o=r.length;t<0&&(t=nativeMax(o+t,0));return g(r)?t<=o&&r.indexOf(n,t)>-1:!!o&&baseIndexOf(r,n,t)>-1},isMatch:function(r,n){var t=t(n),e=t.length;if(null==r)return!e;for(var o=Object(r),i=0;i<e;i++){var a=t[i];if(n[a]!==o[a]||!(a in o))return!1}return!0},keys:function(r){if(c(r))return[];var n=[];for(var t in r)x(r,t)&&n.push(t);return n},mixin:O,omit:function(r,n,t){if(!r)return null;for(var e=O({},r),o=1;o<arguments.length;o++){var i=arguments[o];i in r&&delete e[i]}return e},pick:function(r,n,t){if(!r)return null;for(var e={},o=1;o<arguments.length;o++){var i=arguments[o];i in r&&(e[i]=r[i])}return e},removeItem:function(r,n){if(y(r)){var t=r.indexOf(n);-1!=t&&r.splice(t,1)}else if(s(r))for(var e in r)if(r[e]==n){delete r[e];break}return this},result:function(r,n,t){y(n)||(n=n.split("."));var e=n.length;if(!e)return f(t)?t.call(r):t;for(var o=0;o<e;o++){var i=null==r?void 0:r[n[o]];void 0===i&&(i=t,o=e),r=f(i)?i.call(r):i}return r},safeMixin:function(){var r=j.apply(this,arguments);return r.sources.forEach(function(n){m(r.target,n,r.deep,!0)}),r.target},values:E})}),r("skylark-langx-objects/main",["./objects"],function(r){return r}),r("skylark-langx-objects",["skylark-langx-objects/main"],function(r){return r}),r("skylark-langx-arrays/arrays",["skylark-langx-ns/ns","skylark-langx-types","skylark-langx-objects"],function(r,n,t){var e=Array.prototype.filter,o=n.isArrayLike;function i(r,n,t,e){for(var o=r.length,i=t+(e?1:-1);e?i--:++i<o;)if(n(r[i],i,r))return i;return-1}function a(r){return r!=r}function u(r){if(o(r)){for(var n=[],t=0;t<r.length;t++){var e=r[t];if(o(e))for(var i=0;i<e.length;i++)n.push(e[i]);else n.push(e)}return n}return r}return r.attach("langx.arrays",{baseFindIndex:i,baseIndexOf:function(r,n,t){if(n!=n)return i(r,a,t);var e=t-1,o=r.length;for(;++e<o;)if(r[e]===n)return e;return-1},compact:function(r){return e.call(r,function(r){return null!=r})},first:function(r,n){return n?r.slice(0,n):r[0]},filter:function(r,n){return e.call(r,n)},flatten:u,grep:function(r,n){var e=[];return t.each(r,function(r,t){n(t,r)&&e.push(t)}),e},inArray:function(r,n){if(!n)return-1;var t;if(n.indexOf)return n.indexOf(r);t=n.length;for(;t--;)if(n[t]===r)return t;return-1},makeArray:function(r,n,t){if(o(r))return(t||[]).concat(Array.prototype.slice.call(r,n||0));return[r]},merge:function(r,n){var t=n.length,e=r.length,o=0;if("number"==typeof t)for(;o<t;o++)r[e++]=n[o];else for(;void 0!==n[o];)r[e++]=n[o++];return r.length=e,r},forEach:function(r,n){if(r.forEach)return r.forEach(n);for(var t=0;t<r.length;t++)n(r[t],t)},map:function(r,n){var t,e,i,a=[];if(o(r))for(e=0;e<r.length;e++)null!=(t=n.call(r[e],r[e],e))&&a.push(t);else for(i in r)null!=(t=n.call(r[i],r[i],i))&&a.push(t);return u(a)},reduce:function(r,n,t){return Array.prototype.reduce.call(r,n,t)},uniq:function(r){return e.call(r,function(n,t){return r.indexOf(n)==t})}})}),r("skylark-langx-arrays/main",["./arrays"],function(r){return r}),r("skylark-langx-arrays",["skylark-langx-arrays/main"],function(r){return r})}(t),!o){var u=e("skylark-langx/skylark");i?module.exports=u:n.skylarkjs=u}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-langx-arrays-all.js.map
