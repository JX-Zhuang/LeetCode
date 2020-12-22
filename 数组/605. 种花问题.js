/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    var count = 0, i = 0;
    while (i < flowerbed.length) {
        if (flowerbed[i] == 0 && (i == 0 || flowerbed[i - 1] == 0) && (i == flowerbed.length - 1 || flowerbed[i + 1] == 0)) {
            count++;
            flowerbed[i] = 1;
        }
        i++;
    }
    return count >= n;
};