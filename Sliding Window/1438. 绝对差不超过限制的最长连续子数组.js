/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
class SortObj {
	constructor() {
		this.o = {};
		this.min = Number.MAX_SAFE_INTEGER;
		this.max = Number.MIN_SAFE_INTEGER;
	}
	add(value) {
		if (!this.o.hasOwnProperty(value)) {
			this.o[value] = 0;
			this.max = Math.max(value, this.max);
			this.min = Math.min(value, this.min);
		}
		this.o[value]++;
	}
	minus(value) {
		this.o[value]--;
		if (this.o[value] === 0) {
			delete this.o[value];
			if (value === this.max) {
				this.max = Number.MIN_SAFE_INTEGER;
				for (var key in this.o) {
					this.max = Math.max(this.max, key);
				}
			}
			if (value === this.min) {
				this.min = Number.MAX_SAFE_INTEGER;
				for (var key in this.o) {
					this.min = Math.min(this.min, key);
				}
			}
		}
	}
	getMax() {
		return this.max;
	}
	getMin() {
		return this.min;
	}
}
var longestSubarray = function(nums, limit) {
	var left = 0;
	var res = 0;
	var o = new SortObj();
	for (var i = 0; i < nums.length; i++) {
		var num = nums[i];
		o.add(num);
		while (o.getMax() - o.getMin() > limit) {
			var n = nums[left++];
			o.minus(n);
		}
		res = Math.max(res, i - left + 1);
	}
	return res;
};

var longestSubarray = function(nums, limit) {
	var left = 0;
	var min = [],
		max = [];
	var res = 0;
	for (var i = 0; i < nums.length; i++) {
		while (max.length && nums[max[max.length - 1]] <= nums[i]) max.pop();
		max.push(i);
		while (min.length && num[min[min.length - 1]] >= num[i]) min.pop();
		min.push(i);
		while (max.length && min.length && nums[max[0]] - nums[min[0]] > limit) {
			if (max[0] <= left) max.unshift();
			if (min[0] <= left) min.unshift();
			// left = Math.min(max[0], min[0]) + 1;
			// max[0] < min[0] ? max.shift() : min.shift();
			left++;
		}
		res = Math.max(res, i - left + 1);
	}
	return res;
};
