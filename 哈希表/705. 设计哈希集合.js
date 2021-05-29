/**
 * Initialize your data structure here.
 */
var MyHashSet = function () {
    this.base = 769;
    this.set = new Array(this.base).fill(0).map(() => new Array());
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
    var h = this.hash(key);
    for (var element of this.set[h]) {
        if (element === key) return;
    }
    this.set[h].push(key);
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
    var h = this.hash(key);
    for (var index in this.set[h]) {
        if (this.set[h][index] === key) {
            this.set[h].splice(index, 1);
            return;
        }
    }
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
    var h = this.hash(key);
    for (var element of this.set[h]) {
        if (element === key) return true;
    }
    return false;
};
MyHashSet.prototype.hash = function (key) {
    return key % this.base;
}
/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */