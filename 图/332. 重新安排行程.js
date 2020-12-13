/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
    var res = [];
    var map = {};
    for (var ticket of tickets) {
        var [from, to] = ticket;
        if (!map.hasOwnProperty(from)) {
            map[from] = [];
        }
        map[from].push(to);
    }
    for (var key in map) {
        map[key].sort();
    }
    var dfs = function (node) {
        var cities = map[node];
        while (cities && cities.length) {
            var city = cities.shift();
            dfs(city);
        }
        res.unshift(node);
    };
    dfs('JFK');
    return res;
};