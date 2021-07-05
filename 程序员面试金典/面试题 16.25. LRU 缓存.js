/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.size = capacity;
    this.stack = [];
    this.obj = {};
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (!this.obj.hasOwnProperty(key)) return -1;
    var index = this.stack.findIndex((value) => value === key);
    this.stack.splice(index, 1);
    this.stack.push(key);
    return this.obj[key];
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.obj.hasOwnProperty(key)) {
        var index = this.stack.findIndex((value) => value === key);
        this.stack.splice(index, 1);
        delete this.obj[key];
    }
    this.stack.push(key);
    if (this.stack.length > this.size) {
        const k = this.stack.shift();
        delete this.obj[k];
    }
    this.obj[key] = value;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */