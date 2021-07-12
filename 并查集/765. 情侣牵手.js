/**
 * @param {number[]} row
 * @return {number}
 */
var minSwapsCouples = function (row) {
    var ans = 0;
    for (var i = 0; i < row.length - 1; i = i + 2) {
        if (row[i] === (row[i + 1] ^ 1)) continue;
        for (var j = i + 1; j < row.length; j++) {
            if (row[i] === (row[j] ^ 1)) {
                var temp = row[i + 1];
                row[i + 1] = row[j];
                row[j] = temp;
            }
        }
        console.log(row)
        ans++;
    }
    return ans;
};