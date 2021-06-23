/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function (paths) {
    var map = new Map();
    for (var i = 0; i < paths.length; i++) {
        var arr = paths[i].split(" ");
        for (var j = 1; j < arr.length; j++) {
            var a = arr[j].split('(');
            var file = arr[0] + '/' + a[0];
            if (!map.has(a[1])) map.set(a[1], []);
            map.set(a[1], map.get(a[1]).concat(file));
        }
    }
    var ans = [];
    for (var [key, value] of map) {
        value.length > 1 && ans.push(value);
    }
    return ans;
};