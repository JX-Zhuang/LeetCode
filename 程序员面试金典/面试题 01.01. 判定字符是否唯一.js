/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function (astr) {
    var mark = 0;
    for (var item of astr) {
        var bit = item.charCodeAt() - 'a'.charCodeAt();
        if ((mark & 1 << bit) != 0) return false;
        mark |= 1 << bit;
    }
    return true;
};