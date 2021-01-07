/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
	var n = cardPoints.length;
	var left = 0,
		right = n - k;
	var max = 0;
	for (var i = right; i < n; i++) {
		max += cardPoints[i];
    }
    var last = max;
	while (right < n) {
		var start = cardPoints[left++];
        var end = cardPoints[right++];
        last = last - end + start;
		max = Math.max(max, last);
	}
	return max;
};