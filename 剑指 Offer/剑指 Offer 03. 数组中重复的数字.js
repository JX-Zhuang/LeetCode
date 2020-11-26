/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    var o = {};
    for(var item of nums){
        if(o.hasOwnProperty(item)) return item;
        o[item] = true;
    }
};