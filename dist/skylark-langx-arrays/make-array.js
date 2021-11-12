/**
 * skylark-langx-arrays - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./arrays"],function(r){return r.makeArray=function(r,a,e){return isArrayLike(r)?(e||[]).concat(Array.prototype.slice.call(r,a||0)):[r]}});
//# sourceMappingURL=sourcemaps/make-array.js.map
