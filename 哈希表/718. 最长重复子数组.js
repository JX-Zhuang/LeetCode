/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
    var dp = [];
    for (var i = 0; i <= nums1.length; i++) {
        dp[i] = [];
        for (var j = 0; j <= nums2.length; j++) {
            dp[i][j] = 0;
        }
    }
    var ans = 0;
    for (var i = nums1.length - 1; i >= 0; i--) {
        for (var j = nums2.length - 1; j >= 0; j--) {
            dp[i][j] = nums1[i] === nums2[j] ? (dp[i + 1][j + 1] + 1) : 0;
            ans = Math.max(dp[i][j], ans);
        }
    }
    return ans;
};