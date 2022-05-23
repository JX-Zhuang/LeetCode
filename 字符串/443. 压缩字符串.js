/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    var i = 0, n = chars.length, lastIndex = 0, count;
    while (i < n) {
        count = 1;
        chars[lastIndex++] = chars[i];
        while (i < n - 1 && chars[i] === chars[i + 1]) {
            count++;
            i++;
        }
        if (count > 1) {
            count = count + '';
            for (let j = 0; j < count.length; j++) {
                chars[lastIndex++] = count[j];
            }
        }
        i++;
    }
    return lastIndex;
};