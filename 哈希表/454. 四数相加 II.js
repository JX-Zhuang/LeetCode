/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
    var ans = 0;
    var m = new Map();
    nums1.forEach(n1 => nums2.forEach(n2 => m.set(n1 + n2, (m.get(n1 + n2) || 0) + 1)));
    for (const n3 of nums3) {
        for (const n4 of nums4) {
            if (m.get(-n3 - n4)) {
                ans += m.get(-n3 - n4);
            }
        }
    }
    return ans;
};