/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var ans = [];
    for(var i = 0;i<numRows;i++){
        var arr = new Array(i+1).fill(1);
        for(var j = 1;j<arr.length-1;j++){
            arr[j] = ans[i-1][j-1]+ans[i-1][j];
        }
        ans.push(arr);
    }
    return ans;
};