/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var singleNumbers = function (nums) {
    var ret = 0;
    for (var i of nums) {
        ret ^= i;
    }
    var div = 1;
    while ((div & ret) == 0) {
        div <<= 1;
    }
    var a = 0, b = 0;
    for (var i of nums) {
        if ((div & i) === 0) {
            a ^= i;
        } else {
            b ^= i;
        }
    }
    return [a,b];
};