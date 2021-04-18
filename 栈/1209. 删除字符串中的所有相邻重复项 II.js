/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
    var counts = [];
    for (var i = 0; i < s.length; i++) {
        if (i === 0 || s[i - 1] !== s[i]) {
            counts.push(1);
        } else if (++counts[counts.length - 1] === k) {
            counts.pop();
            s = s.slice(0, i - k + 1) + s.slice(i + 1);
            i = i - k;
        }
    }
    return s;
};