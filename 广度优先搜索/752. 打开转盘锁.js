/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var upOne = function (s, i) {
    var arr = s.split('');
    if (arr[i] === '9') {
        arr[i] = '0';
    } else {
        arr[i]++;
    }
    return arr.join('');
};
var downOne = function (s, i) {
    var arr = s.split('');
    if (arr[i] === '0') {
        arr[i] = '9';
    } else {
        arr[i]--;
    }
    return arr.join('');
};
var openLock = function (deadends, target) {
    var q = ['0000'];
    var step = 0;
    var visited = {};
    var deads = {};
    for (var s of deadends) deads[s] = true;
    while (q.length) {
        var l = q.length;
        for (var i = 0; i < l; i++) {
            var s = q.shift();
            if (s === target) return step;
            if (deads[s]) continue;
            for (var j = 0; j < 4; j++) {
                var up = upOne(s, j);
                if (!visited[up]) {
                    q.push(up);
                    visited[up] = true;
                }
                var down = downOne(s, j);
                if (!visited[down]) {
                    q.push(down);
                    visited[down] = true;
                }
            }
        }
        step++;
    }
    return -1;
};