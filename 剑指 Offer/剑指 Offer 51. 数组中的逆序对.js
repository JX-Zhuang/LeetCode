/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    var count = 0;
    for(var i = 0;i<nums.length-1;i++){
        for(var j = i+1;j<nums.length;j++){
            if(nums[i]>nums[j]) count++;
        }
    }
    return count;
};