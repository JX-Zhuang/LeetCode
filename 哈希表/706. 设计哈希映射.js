/**
 * Initialize your data structure here.
 */
var MyHashMap = function () {
    this.base = 769;
    this.map = new Array(this.base).fill(0).map(() => new Array());
};

/**
 * value will always be non-negative. 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
    var h = this.hash(key);
    for (var item of this.map[h]) {
        if (item[0] === key) {
            item[1] = value;
            return;
        }
    }
    this.map[h].push([key, value]);
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
    var h = this.hash(key);
    for (var item of this.map[h]) {
        if (item[0] === key) return item[1];
    }
    return -1;
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
    var h = this.hash(key);
    for (var index in this.map[h]) {
        if (key === this.map[h][index][0]) {
            this.map[h].splice(index, 1);
            return;
        }
    }
};
MyHashMap.prototype.hash = function (key) {
    return key % this.base;
}
/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */