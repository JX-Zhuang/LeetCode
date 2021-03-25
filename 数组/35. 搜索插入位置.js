/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    for (var i = 0; i < nums.length; i++) {
        var item = nums[i];
        if (item >= target) return i;
    }
    return nums.length;
};

var searchInsert = function(nums, target) {
    var left = 0,right = nums.length-1,ans = nums.length;
    while(left<right){
        var index = Math.floor((right-left)/2)+left;
        var item = nums[index];
        if(item>=target){
            ans = index;
            right = index-1;
        }else{
            left = index+1;
        }
    }
    return ans;
};

var searchInsert = function(nums, target) {
    var left = 0,right = nums.length-1,ans = nums.length;
    while(left<=right){
        var index = Math.floor((right-left)/2)+left;
        var item = nums[index];
        if(item>=target){
            ans = index;
            right = index-1;
        }else{
            left = index+1;
        }
    }
    return ans;
};