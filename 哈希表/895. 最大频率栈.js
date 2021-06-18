var FreqStack = function () {
    this.stack = [];
    this.map = new Map();
};

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function (val) {
    this.stack.push(val);
    this.map.set(val, (this.map.get(val) || 0) + 1);
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
    var max = 0;
    for (var [val, count] of this.map) {
        max = Math.max(max, count);
    }
    var set = new Set();
    for (var [val, count] of this.map) {
        if (count === max) set.add(val);
    }
    for (var i = this.stack.length - 1; i >= 0; i--) {
        var val = this.stack[i];
        if (set.has(val)) {
            this.stack.splice(i, 1);
            this.map.set(val, this.map.get(val) - 1);
            if (this.map.get(val) === 0) this.map.delete(val);
            return val;
        }
    }
};

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */