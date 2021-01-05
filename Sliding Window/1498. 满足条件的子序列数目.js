/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function mypow(x, n) {
	if (n === 0) return BigInt(1);
	let y = mypow(x, Math.floor(n / 2));
	return n % 2 === 0 ? BigInt(y) * BigInt(y) : BigInt(y) * BigInt(y) * BigInt(x);
}

var numSubseq = function(nums, target) {
	var mod = BigInt(1000000000 + 7);
	nums.sort((a, b) => a - b);
	var ans = BigInt(0);
	var right = nums.length - 1,
		left = 0;
	while (left <= right) {
		var min = nums[left],
			max = nums[right];
		if (max + min > target) {
			right--;
		} else {
			ans = (ans + mypow(2, right - left) % mod) % mod;
			left++;
		}
	}
	return ans;
};
