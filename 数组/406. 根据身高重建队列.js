var reconstructQueue = function (people) {
    people.sort((a, b) => {
        if (a[0] === b[0]) return a[1] - b[1];
        return b[0] - a[0];
    });
    const res = [];
    for (var i = 0; i < people.length; i++) {
        const item = people[i];
        if (res.length <= item[1]) {
            res.push(item);
        } else {
            res.splice(item[1], 0, item);
        }
    }
    return res;
}