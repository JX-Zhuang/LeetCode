/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
    var i = 1, j = 1;
    var sum = 0;
    var res = [];
    while (i <= target/2) {
        if (sum < target) {
            sum += j;
            j++;
        } else if (sum > target) {
            sum -= i;
            i++;
        } else {
            var arr = [];
            for (var k = i; k < j; k++) {
                arr.push(k);
            }
            res.push(arr);
            sum -= i;
            i++;
        }
    }
    return res;
};