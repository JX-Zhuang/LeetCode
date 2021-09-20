/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }
    const m = nums1.length, n = nums2.length;
    let m1 = 0, m2 = 0;
    let left = 0, right = m;
    while (left <= right) {
        const i = (left + right) >> 1;
        const j = ((m + n + 1) >> 1) - i;
        const numsIm1 = i === 0 ? Number.MIN_SAFE_INTEGER : nums1[i - 1],
            numsI = i === m ? Number.MAX_SAFE_INTEGER : nums1[i],
            numsJm1 = j === 0 ? Number.MIN_SAFE_INTEGER : nums2[j - 1],
            numsJ = j === n ? Number.MAX_SAFE_INTEGER : nums2[j];
        if (numsIm1 <= numsJ) {
            m1 = Math.max(numsIm1, numsJm1);
            m2 = Math.min(numsI, numsJ);
            left = i + 1;
        } else {
            right = i - 1;
        }
    }
    return (m + n) % 2 === 0 ? (m1 + m2) / 2 : m1;
};