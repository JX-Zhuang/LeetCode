/**
 * @param {number} n
 * @return {number}
 */
var waysToStep = function (n) {
    if (n < 3) return n
    let cur = 4
    let one = 1
    let two = 2
    let three = 4
    for (let i = 4; i <= n; i++) {
        cur = (one + two + three) % 1000000007
        one = two
        two = three
        three = cur
    }
    return cur
};