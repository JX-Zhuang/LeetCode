/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (N, trust) {
    var persons = {};   //in:信任这个人的人们，out:这个人信任别的人们
    for (var i = 1; i <= N; i++) {
        persons[i] = {
            in: [],
            out: []
        }
    };
    for (var item of trust) {
        var p1 = item[0], p2 = item[1];
        persons[p2].in.push(p1);
        persons[p1].out.push(p2);
    }
    for (var key in persons) {
        var p = persons[key];
        if (p.out.length !== 0) continue;
        if (p.in.length === N - 1) {
            return key;
        }
    }
    return -1;
};