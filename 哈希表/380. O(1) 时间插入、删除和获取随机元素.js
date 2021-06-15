/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
    this.map = new Map();
    this.values = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (this.map.has(val)) return false;
    this.map.set(val, this.values.length);
    this.values.push(val);
    return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (!this.map.has(val)) return false;
    var index = this.map.get(val);
    var last = this.values.pop();
    if (index !== this.map.size - 1) {
        this.values[index] = last;
        this.map.set(last, index);
    }
    this.map.delete(val);
    return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    var index = Math.floor(Math.random() * this.values.length);
    return this.values[index];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */