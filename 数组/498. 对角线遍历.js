/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
    var m = mat.length, n = mat[0].length;
    var result = [], flag = -1, temp, j, tempI, tempJ;
    for (var i = 0; i < n; i++) {
        j = 0;
        temp = [];
        tempI = i;
        while (tempI >= 0 && tempI < n && j >= 0 && j < m) {
            temp.push(mat[j][tempI]);
            tempI--;
            j++;
        }
        if (flag === -1) {
            temp.reverse();
        }
        result = result.concat(temp);
        flag = -flag;
    }
    for (var j = 1; j < m; j++) {
        i = n - 1;
        temp = [];
        tempJ = j;
        while (i < n && i >= 0 && tempJ < m && tempJ >= 0) {
            temp.push(mat[tempJ][i]);
            tempJ++;
            i--;
        }
        if (flag === -1) {
            temp.reverse();
        }
        result = result.concat(temp);
        flag = -flag;
    }
    return result;
};