/**
 * @param {number[]} guess
 * @param {number[]} answer
 * @return {number}
 */
var game = function (guess, answer) {
    var ans = 0;
    for (var i = 0; i < guess.length; i++) {
        ans += guess[i] === answer[i] ? 1 : 0;
    }
    return ans;
};