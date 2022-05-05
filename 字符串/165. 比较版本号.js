/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    var v1 = version1.split('.'),
        v2 = version2.split('.');
    for (var i = 0; i < v1.length || i < v2.length; i++) {
        let x = 0; y = 0;
        if (i < v1.length) {
            x = Number(v1[i]);
        }
        if (i < v2.length) {
            y = Number(v2[i]);
        }
        if (x > y) return 1;
        if (x < y) return -1;
    }
    return 0;
};