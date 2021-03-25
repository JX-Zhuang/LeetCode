/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var count = 0;
    for(var n of nums){
        if(n === target) count++;
    }
    return count;
};