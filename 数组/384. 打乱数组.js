/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    this.arr = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
    return this.arr;
};
var getIndex = (min, max) => Math.floor(Math.random() * (max - min) + min);
/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
    var copy = [...this.arr];
    for (var i = 0; i < copy.length; i++) {
        const index = getIndex(i, copy.length);
        this.exch(i, index, copy);
    }
    return copy;
};
Solution.prototype.exch = function (a, b, copy) {
    [copy[a], copy[b]] = [copy[b], copy[a]];
}
/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */