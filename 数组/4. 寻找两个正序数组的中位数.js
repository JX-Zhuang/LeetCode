/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    const arr = nums1.concat(nums2).sort((a,b)=>a-b);
    const mid = (arr.length)/2;
    if(arr.length%2){
        return arr[Math.floor(mid)];
    }
    return (arr[mid-1]+arr[mid])/2;
};