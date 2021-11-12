/**
 * skylark-langx-arrays - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(r,n){var a=n.define,require=n.require,t="function"==typeof a&&a.amd,e=!t&&"undefined"!=typeof exports;if(!t&&!a){var u={};a=n.define=function(r,n,a){"function"==typeof a?(u[r]={factory:a,deps:n.map(function(n){return function(r,n){if("."!==r[0])return r;var a=n.split("/"),t=r.split("/");a.pop();for(var e=0;e<t.length;e++)"."!=t[e]&&(".."==t[e]?a.pop():a.push(t[e]));return a.join("/")}(n,r)}),resolved:!1,exports:null},require(r)):u[r]={factory:null,resolved:!0,exports:a}},require=n.require=function(r){if(!u.hasOwnProperty(r))throw new Error("Module "+r+" has not been defined");var module=u[r];if(!module.resolved){var a=[];module.deps.forEach(function(r){a.push(require(r))}),module.exports=module.factory.apply(n,a)||null,module.resolved=!0}return module.exports}}if(!a)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(r,require){r("skylark-langx-arrays/arrays",["skylark-langx-ns"],function(r){return r.attach("langx.arrays")}),r("skylark-langx-arrays/base-find-index",["./arrays"],function(r){return r.baseFindIndex=function(r,n,a,t){var e=r.length,u=a+(t?1:-1);for(;t?u--:++u<e;)if(n(r[u],u,r))return u;return-1}}),r("skylark-langx-arrays/base-indexof",["./arrays","./base-find-index"],function(r,n){function a(r){return r!=r}return r.baseIndexOf=function(r,t,e){if(t!=t)return n(r,a,e);var u=e-1,i=r.length;for(;++u<i;)if(r[u]===t)return u;return-1}}),r("skylark-langx-arrays/filter",["./arrays"],function(r){var n=Array.prototype.filter;return r.filter=function(r,a){return n.call(r,a)}}),r("skylark-langx-arrays/compact",["./arrays","./filter"],function(r,n){return r.compact=function(r){return n.call(r,function(r){return null!=r})}}),r("skylark-langx-arrays/in-array",["./arrays"],function(r){return r.inArray=function(r,n){if(!n)return-1;var a;if(n.indexOf)return n.indexOf(r);a=n.length;for(;a--;)if(n[a]===r)return a;return-1}}),r("skylark-langx-arrays/contains",["./arrays","./in-array"],function(r,n){return r.contains=function(r,a){return n(a,r)}}),r("skylark-langx-arrays/flatten",["skylark-langx-types","./arrays"],function(r,n){return n.flatten=function(n){if(r.isArrayLike(n)){for(var a=[],t=0;t<n.length;t++){var e=n[t];if(r.isArrayLike(e))for(var u=0;u<e.length;u++)a.push(e[u]);else a.push(e)}return a}return n}}),r("skylark-langx-arrays/difference",["skylark-langx-funcs","./arrays","./flatten","./filter","./contains"],function(r,n,a,t,e){var u=r.restArguments(function(r,n){return n=a(n,!0,!0),t(r,function(r){return!e(n,r)})});return n.difference=u}),r("skylark-langx-arrays/find",["./arrays"],function(r){var n=Array.prototype.find;return r.find=function(r,a){return n.call(r,a)}}),r("skylark-langx-arrays/first",["./arrays"],function(r){return r.first=function(r,n){return n?r.slice(0,n):r[0]}}),r("skylark-langx-arrays/for-each",["./arrays"],function(r){return r.forEach=function(r,n){if(r.forEach)return r.forEach(n);for(var a=0;a<r.length;a++)n(r[a],a)}}),r("skylark-langx-arrays/grep",["skylark-langx-objects","./arrays"],function(r,n){return n.grep=function(n,a){var t=[];return r.each(n,function(r,n){a(n,r)&&t.push(n)}),t}}),r("skylark-langx-arrays/indexof",["./arrays"],function(r){return r.indexOf=function(r,n){return r.indexOf(n)}}),r("skylark-langx-arrays/last",["./arrays"],function(r){return r.last=function(r){return r[r.length-1]}}),r("skylark-langx-arrays/make-array",["./arrays"],function(r){return r.makeArray=function(r,n,a){if(isArrayLike(r))return(a||[]).concat(Array.prototype.slice.call(r,n||0));return[r]}}),r("skylark-langx-arrays/map",["skylark-langx-types","./arrays","./flatten"],function(r,n,a){return n.map=function(n,t){var e,u,i,l=[];if(r.isArrayLike(n))for(u=0;u<n.length;u++)null!=(e=t.call(n[u],n[u],u))&&l.push(e);else for(i in n)null!=(e=t.call(n[i],n[i],i))&&l.push(e);return a(l)}}),r("skylark-langx-arrays/merge",["./arrays"],function(r){return r.merge=function(r,n){var a=n.length,t=r.length,e=0;if("number"==typeof a)for(;e<a;e++)r[t++]=n[e];else for(;void 0!==n[e];)r[t++]=n[e++];return r.length=t,r}}),r("skylark-langx-arrays/pull-at",["skylark-langx-types","skylark-langx-objects","./arrays"],function(r,n,a){return a.pullAt=function(r,...a){null==r||r.length;const t=n.baseAt(r,a);a.sort(function(r,n){return r-n});for(let n=a.length-1;n>=0;n--)r.slice(a[n],1);return t}}),r("skylark-langx-arrays/reduce",["./arrays"],function(r){return r.reduce=function(r,n,a){return Array.prototype.reduce.call(r,n,a)}}),r("skylark-langx-arrays/uniq",["./arrays","./filter"],function(r,n){return r.uniq=function(r){return n.call(r,function(n,a){return r.indexOf(n)==a})}}),r("skylark-langx-arrays/without",["skylark-langx-funcs","./arrays","./difference"],function(r,n,a){var t=r.restArguments(function(r,n){return a(r,n)});return n.without=t}),r("skylark-langx-arrays/main",["./arrays","./base-find-index","./base-indexof","./compact","./contains","./difference","./filter","./find","./first","./flatten","./for-each","./grep","./in-array","./indexof","./last","./make-array","./map","./merge","./pull-at","./reduce","./uniq","./without"],function(r){return r}),r("skylark-langx-arrays",["skylark-langx-arrays/main"],function(r){return r})}(a),!t){var i=require("skylark-langx-ns");e?module.exports=i:n.skylarkjs=i}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-langx-arrays.js.map
