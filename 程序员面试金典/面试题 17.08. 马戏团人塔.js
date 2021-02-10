/**
 * @param {number[]} height
 * @param {number[]} weight
 * @return {number}
 */
// dp[i] = 1 + Math.max(...dp[j],dp[k],dp[l],...0);
// 0<=j,k,l<=i-1 && persons[j,k,l][0,1] < persons[i][0,1]
var bestSeqAtIndex = function(height, weight) {
	var persons = height.map((h, i) => [ h, weight[i] ]);
	persons.sort((a, b) => a[0] - b[0]);
	var dp = new Array(persons.length).fill(0);
	dp[0] = 1;
	var ans = dp[0];
	for (var i = 1; i < persons.length; i++) {
		var count = 0;
		for (var j = 0; j < i; j++) {
			if (persons[i][0] > persons[j][0] && persons[i][1] > persons[j][1]) {
				count = Math.max(count, dp[j]);
			}
		}
		dp[i] = count + 1;
		ans = Math.max(ans, dp[i]);
	}
	return ans;
};
var bestSeqAtIndex = function(height, weight) {
	var persons = height.map((height, i) => ({
		height,
		weight: weight[i]
	}));
	persons.sort((a, b) => (a.height === b.height ? b.weight - a.weight : a.height - b.height));
	var dp = new Array(persons.length).fill(0);
	var ans = 0;
	for (var person of persons) {
		var weight = person.weight;
		var left = 0,
			right = ans;
		while (left < right) {
			var mid = parseInt((left + right) / 2);
			if (dp[mid] < weight) {
				left = mid + 1;
			} else {
				right = mid;
			}
		}
		dp[left] = weight;
		if (right === ans) ans++;
	}
	return ans;
};
