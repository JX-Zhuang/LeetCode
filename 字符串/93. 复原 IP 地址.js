/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    var result = [];
    var helper = function (s, length, ip) {
        if (length === 4) {
            if (s.length === 0) {
                result.push(ip);
            }
            return;
        }
        for (var i = 1; i < 4; i++) {
            var n = s.substring(0, i);
            if (!isNum(n) || s.length < i) break;
            helper(s.substring(i), length + 1, ip ? `${ip}.${n}` : n);
        }
    };
    helper(s, 0, '');
    return result;
};
var isNum = function (s) {
    return Number(s).toString() === s && Number(s) <= 255;
}