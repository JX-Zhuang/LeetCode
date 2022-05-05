/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    var v1 = version1.split('.').map(i => Number(i)),
        v2 = version2.split('.').map(i => Number(i));
    if (v1.length > v2.length) {
        while (v1.length !== v2.length)
            v2.push(0);
    } else if (v1.length < v2.length) {
        while (v1.length !== v2.length)
            v1.push(0);
    }
    for (var i = 0; i < v1.length; i++) {
        if (v1[i] > v2[i]) return 1;
        if (v1[i] < v2[i]) return -1;
    }
    return 0;
};