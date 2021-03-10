/**
 * @param {number[][]} board
 * @return {number}
 */
var swap = function (str, source, target) {
    var arr = str.split('');
    var temp = arr[source];
    arr[source] = arr[target];
    arr[target] = temp;
    return arr.join('');
};
var slidingPuzzle = function (board) {
    var target = '123450';
    var step = 0;
    var neighbors = [[1, 3], [0, 4, 2], [1, 5], [0, 4], [3, 1, 5], [4, 2]];
    var start = board[0].join('') + board[1].join('');
    var q = [start];
    var visited = new Set();
    while (q.length) {
        var length = q.length;
        for (var i = 0; i < length; i++) {
            var item = q.shift();
            if (item === target) return step;
            var j = item.split('').indexOf('0');
            for (var n of neighbors[j]) {
                var str = swap(item, n, j);
                if (!visited.has(str)) {
                    visited.add(str);
                    q.push(str);
                }
            }
        }
        step++;
    }
    return -1;
};