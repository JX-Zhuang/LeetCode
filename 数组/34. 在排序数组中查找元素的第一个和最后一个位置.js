/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var i = 0 , j = nums.length-1;
    while(i<=j){
        var mid = Math.floor((i+j)/2);
        if(nums[mid]<=target) i = mid+1;
        else j = mid-1;
    }
    var right = i-1;
    i = 0 , j = nums.length-1;
    while(i<=j){
        var mid = Math.floor((i+j)/2);
        if(nums[mid]<target) i = mid+1;
        else j = mid-1;
    }
    var left = j+1;
    if(left>right) return [-1,-1];
    return [left,right];
};