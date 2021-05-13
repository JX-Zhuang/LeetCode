/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
    var result = 0;
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    nums3.sort((a, b) => a - b);
    nums4.sort((a, b) => a - b);
    for (var i = 0; i < nums1.length; i++) {
        for (var j = 0; j < nums2.length; j++) {
            for (var h = 0; h < nums3.length; h++) {
                for (var k = 0; k < nums4.length; k++) {
                    var sum = nums1[i] + nums2[j] + nums3[h] + nums4[k];
                    if ( sum === 0){
                        result++;
                    }else if(sum>0) break;
                }
            }
        }
    }
    return result;
};