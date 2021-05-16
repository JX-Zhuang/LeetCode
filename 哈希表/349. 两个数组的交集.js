/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    var set1 = new Set(nums1),
        set2 = new Set(nums2),
        ans = [];
    for (var n of set1) {
        if (set2.has(n)) ans.push(n);
    }
    return ans;
};