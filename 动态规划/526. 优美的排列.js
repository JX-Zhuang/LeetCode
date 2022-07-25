/**
 * @param {number} n
 * @return {number}
 */
var countArrangement = function (n) {
    var ans = 0, index = 0, visited = new Set();
    var helper = function () {
        if (index === n) {
            ans++;
            return true;
        }
        for (var j = 1; j <= n; j++) {
            if (visited.has(j)) continue;
            if ((index + 1) % j === 0 || j % (index + 1) === 0) {
                visited.add(j);
                index++;
                helper();
                index--;
                visited.delete(j);
            }
        }
    }
    helper();
    return ans;
};
// console.log(countArrangement(3));
console.log(countArrangement(4));
// console.log(countArrangement(5));
// console.log(countArrangement(6));
// console.log(countArrangement(7));