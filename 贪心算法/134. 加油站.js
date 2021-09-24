/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    const len = gas.length;
    var minIndex = 0, minSpare = Number.MAX_SAFE_INTEGER, spare = 0;
    for (var i = 0; i < len; i++) {
        spare += gas[i] - cost[i];
        if (spare < minSpare) {
            minSpare = spare;
            minIndex = i;
        }
    }
    if (spare < 0) return -1;
    if (minIndex === 0 && gas[minIndex] >= cost[minIndex]) {
        return minIndex;
    }
    return (minIndex + 1) % len;
};