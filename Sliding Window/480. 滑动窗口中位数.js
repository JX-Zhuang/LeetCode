/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var find = function(arr, value) {
	var left = 0,
        right = arr.length;
	while (left < right) {
		var mid = (right + left) >> 1;
		if (arr[mid] > value) {
			right = mid - 1;
		} else if (arr[mid] < value) {
			left = mid + 1;
		} else {
			return mid;
		}
    }
	return left;
};
var medianFun = function(k) {
	var isEven = k % 2 === 0;
	var half = k >> 1;
	return (arr) => {
		if (isEven) {
			return (arr[half] + arr[half - 1]) / 2;
		} else {
			return arr[half];
		}
	};
};
var medianSlidingWindow = function(nums, k) {
	var ans = [];
	var median = medianFun(k);
    // 有序数组arr
	var arr = nums.slice(0, k).sort((a, b) => a - b);
	ans.push(median(arr, 0, k));
	for (var i = k; i < nums.length; i++) {
        //删除第一个元素
        var removeIndex = find(arr, nums[i-k]);
        arr.splice(removeIndex, 1);
        //把当前元素加入到arr里
        var value = nums[i];
        var addIndex = find(arr, value);
        if(arr[addIndex]<value) addIndex++;
		arr.splice(addIndex, 0, value);
		ans.push(median(arr, 0, k));
	}
	return ans;
};