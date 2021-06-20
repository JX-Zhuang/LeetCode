
var FreqStack = function () {
    this.freq = new Map();
    this.group = new Map();
    this.maxFreq = 0;
};

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function (val) {
    var freq = (this.freq.get(val) || 0) + 1;
    this.freq.set(val, freq);
    if (freq > this.maxFreq) this.maxFreq = freq;
    var stack = this.group.get(freq) || [];
    stack.push(val);
    this.group.set(freq, stack);
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
    var val = this.group.get(this.maxFreq).pop();
    this.freq.set(val, this.freq.get(val) - 1);
    if (this.group.get(this.maxFreq).length === 0) this.maxFreq--;
    return val;
};

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */