/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, X) {
	var left = 0,
		right = 0;
	var temp = 0;
	var max = 0;
	var ans = 0;
	while (right < customers.length) {
		temp += grumpy[right] ? customers[right] : 0;
		ans += grumpy[right] ? 0 : customers[right];
		if (right - left + 1 > X) {
			temp -= grumpy[left] ? customers[left] : 0;
			left++;
		}
		max = Math.max(temp, max);
		right++;
	}
	return max + ans;
};
a = maxSatisfied([ 1, 0, 1, 2, 1, 1, 7, 5 ], [ 0, 1, 0, 1, 0, 1, 0, 1 ], 3);
console.log(a);
a = maxSatisfied([ 2, 6, 6, 9 ], [ 0, 0, 1, 1 ], 1);
console.log(a);
console.log(maxSatisfied([ 9, 10, 4, 5 ], [ 1, 0, 1, 1 ], 1));
