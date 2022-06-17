var jobScheduling = function (startTime, endTime, profit) {
    var total = [];
    var l = endTime.length;
    for (var i = 0; i < l; i++) {
        total.push([
            startTime[i],
            endTime[i],
            profit[i]
        ]);
    }
    total.sort((a, b) => a[1] - b[1]);
    var dp = new Array(l).fill(0);
    for (var i = 0; i < l; i++) {
        var left = 0, right = i;
        while (left < right) {
            var mid = (left + right) >> 1;
            if (total[mid][1] <= total[i][0]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        dp[i + 1] = Math.max(dp[i], dp[left] + total[i][2]);
    }
    return dp[l];
};