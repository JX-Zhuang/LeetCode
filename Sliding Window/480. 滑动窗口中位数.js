/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var remove = function(arr,value){
    var n = arr.length;
    for (var i = 0; i < n; i++) {
        if (arr[i] >= value) {
            arr[i] = arr[i+1];
        } 
    } 
    arr.length--;
}
var insert = function(arr, value) {
	for (var i = arr.length - 1; i >= 0; i--) {
		if (arr[i] > value) {
			arr[i + 1] = arr[i];
		} else {
			break;
		}
	}
	arr[i + 1] = value;
};
class A {
	arr = [];
	window = {}; // index->value
	start = 0;
	getArr() {
		return this.arr;
	}
	removeStart() {
		var value = this.window[this.start];
        remove(this.arr,value);
		this.start++;
	}
	add(index, value) {
		this.window[index] = value;
		insert(this.arr, value);
	}
}
var median = function(arr, left, right) {
	var index = (right + left) >> 1;
	if (arr.length % 2 === 0) {
		return (arr[index] + arr[index-1]) / 2;
	} else {
		return arr[index];
	}
};
var medianSlidingWindow = function(nums, k) {
	var ans = [];
	var a = new A();
	for (var i = 0; i < k; i++) {
		a.add(i, nums[i]);
	}
	ans.push(median(a.getArr(), 0, k));
	for (var i = k; i < nums.length; i++) {
		a.removeStart();
		a.add(i, nums[i]);
		ans.push(median(a.getArr(), 0, k));
	}
	console.log(ans);
	return ans;
};
medianSlidingWindow([ 1, 3, -1, -3, 5, 3, 6, 7 ], 3);
medianSlidingWindow([ 1, 3, 4, 2 ], 2);
