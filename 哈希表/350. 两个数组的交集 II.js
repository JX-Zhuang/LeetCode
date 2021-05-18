/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    var ans = [];
    var m2 = {};
    for (var n of nums2) {
        if (!m2.hasOwnProperty(n)) {
            m2[n] = 0;
        }
        m2[n]++;
    }
    for (var k of nums1) {
        if (m2[k] > 0) {
            ans.push(k);
            m2[k]--;
        }
    }
    return ans;
};