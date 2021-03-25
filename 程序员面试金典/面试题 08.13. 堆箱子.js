/**
 * @param {number[][]} box
 * @return {number}
 */
// dp[i] = box[i][2] + max(... dp[j],dp[k],dp[l] ...0)
// 0<=j,k,l<=i-1 && box[j,k,l][0,1,2]<box[i][0,1,2]
var pileBox = function(box) {
	box.sort((a, b) => a[0] - b[0]);
	var dp = new Array(box.length).fill(0);
	dp[0] = box[0][2];
	var ans = dp[0];
	for (var i = 1; i < box.length; i++) {
		var h = 0;
		for (var j = 0; j < i; j++) {
			if (box[j][0] < box[i][0] && box[j][1] < box[i][1] && box[j][2] < box[i][2]) {
				h = Math.max(h, dp[j]);
			}
		}
		dp[i] = box[i][2] + h;
		ans = Math.max(ans, dp[i]);
	}
	return ans;
};
