/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    var ans = nums.sort((a,b)=>(a.toString()+b.toString()).localeCompare(b.toString()+a.toString())<0?1:-1).join('')
    return ans[0]==0?'0':ans
 };