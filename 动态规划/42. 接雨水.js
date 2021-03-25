/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
	var n = height.length;
	var ans = 0;
	var i = 0,
		j = n - 1;
	while (j > i) {
		var left = height[i],
			right = height[j];
		if (left < right) {
			while (left > height[i + 1]) {
				ans += left - height[i + 1];
				i++;
			}
			i++;
		} else {
			while (right > height[j - 1]) {
				ans += right - height[j - 1];
				j--;
			}
			j--;
		}
	}
	return ans;
};

var trap = function(height) {
	var l = 0,
		r = height.length - 1,
		lMax = height[0],
		rMax = height[r];
	var ans = 0;
	while (r > l) {
		lMax = Math.max(lMax, height[l]);
		rMax = Math.max(rMax, height[r]);
		if (lMax < rMax) {
			ans += lMax - height[l++];
		} else {
			ans += rMax - height[r--];
		}
	}
	return ans;
};
