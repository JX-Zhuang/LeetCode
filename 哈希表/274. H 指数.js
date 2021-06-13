/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
    citations.sort((a, b) => a - b);
    var i = 0;
    while (citations.length > i && citations[citations.length - 1 - i] > i) {
        i++;
    }
    return i;
};