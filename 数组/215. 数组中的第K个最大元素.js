/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    k--;
    var quickSelect = function (left, right) {
        var index = partition(left, right);
        if (index === k) return nums[index];
        return index < k ? quickSelect(index + 1, right) : quickSelect(left, index - 1);
    };
    var partition = function (left, right) {
        var item = nums[left], index = left;
        for (var i = left + 1; i <= right; i++) {
            if (nums[i] > item) {
                swap(++index, i);
            }
        }
        swap(index, left);
        return index;
    };
    var swap = function (a, b) {
        var temp = nums[a];
        nums[a] = nums[b];
        nums[b] = temp;
    }
    return quickSelect(0, nums.length - 1);
};