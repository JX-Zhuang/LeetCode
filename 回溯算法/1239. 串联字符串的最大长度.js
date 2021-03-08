/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {
    var ans = 0;
    var collect = [''];
    for (var s of arr) {
        var add = [];
        for (var c of collect) {
            var t = s + c;
            if (t.length === new Set(t).size) {
                add.push(t);
                ans = Math.max(t.length, ans);
            }
        }
        collect.push(...add);
    }
    return ans;
};