/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var l = 1,r = 1;
    var res = new Array(nums.length).fill(1);
    for(var i = 0;i<nums.length;i++){
        res[i] = l;
        l*=nums[i];
    }
    for(var i = nums.length-1;i>0;i--){
        r*= nums[i];
        res[i-1]*= r;
    }
    return res;
};