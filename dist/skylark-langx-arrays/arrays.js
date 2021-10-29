/**
 * skylark-langx-arrays - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx-ns","skylark-langx-types","skylark-langx-objects","skylark-langx-funcs"],function(r,n,t,e){var u=Array.prototype.filter,f=Array.prototype.find,i=n.isArrayLike;function a(r,n,t,e){for(var u=r.length,f=t+(e?1:-1);e?f--:++f<u;)if(n(r[f],f,r))return f;return-1}function o(r){return r!=r}function c(r,n){return g(n,r)}var l=e.restArguments(function(r,n){return n=h(n),s(r,function(r){return!c(n,r)})});function s(r,n){return u.call(r,n)}function h(r){if(i(r)){for(var n=[],t=0;t<r.length;t++){var e=r[t];if(i(e))for(var u=0;u<e.length;u++)n.push(e[u]);else n.push(e)}return n}return r}function g(r,n){if(!n)return-1;var t;if(n.indexOf)return n.indexOf(r);for(t=n.length;t--;)if(n[t]===r)return t;return-1}function y(r,n,t){return i(r)?(t||[]).concat(Array.prototype.slice.call(r,n||0)):[r]}e.restArguments(function(r,n){return l(r,n)});return r.attach("langx.arrays",{baseFindIndex:a,baseIndexOf:function(r,n,t){if(n!=n)return a(r,o,t);for(var e=t-1,u=r.length;++e<u;)if(r[e]===n)return e;return-1},compact:function(r){return u.call(r,function(r){return null!=r})},contains:c,difference:l,filter:s,find:function(r,n){return f.call(r,n)},first:function(r,n){return n?r.slice(0,n):r[0]},flatten:h,grep:function(r,n){var e=[];return t.each(r,function(r,t){n(t,r)&&e.push(t)}),e},inArray:g,indexOf:function(r,n){return r.indexOf(n)},makeArray:y,toArray:y,last:function(r){return r[r.length-1]},merge:function(r,n){var t=n.length,e=r.length,u=0;if("number"==typeof t)for(;u<t;u++)r[e++]=n[u];else for(;void 0!==n[u];)r[e++]=n[u++];return r.length=e,r},forEach:function(r,n){if(r.forEach)return r.forEach(n);for(var t=0;t<r.length;t++)n(r[t],t)},map:function(r,n){var t,e,u,f=[];if(i(r))for(e=0;e<r.length;e++)null!=(t=n.call(r[e],r[e],e))&&f.push(t);else for(u in r)null!=(t=n.call(r[u],r[u],u))&&f.push(t);return h(f)},reduce:function(r,n,t){return Array.prototype.reduce.call(r,n,t)},uniq:function(r){return u.call(r,function(n,t){return r.indexOf(n)==t})}})});
//# sourceMappingURL=sourcemaps/arrays.js.map
