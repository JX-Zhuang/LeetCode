/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    var p = 0;
    for(var i = 0;i<nums.length;i++){
        if(nums[i]%2){
            var t = nums[i];
            nums[i] = nums[p];
            nums[p++] = t;
        }
    }
    return nums;
};