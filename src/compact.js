define([
  "./arrays",
  "./filter"
],function(arrays,filter){

    function compact(array) {
        return filter.call(array, function(item) {
            return item != null;
        });
    }

    return arrays.compact = compact;
});