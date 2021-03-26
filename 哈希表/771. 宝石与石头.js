/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    var o = {};
    var ans = 0;
    for (var i of jewels) {
        o[i] = true;
    }
    for (var i of stones) {
        if (o[i]) {
            ans++;
        }
    }
    return ans;
};