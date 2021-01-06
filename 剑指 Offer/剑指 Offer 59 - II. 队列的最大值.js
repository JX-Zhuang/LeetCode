var MaxQueue = function() {
	this.queue = [];
	this.maxValue = Number.MIN_SAFE_INTEGER;
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
	if (this.queue.length === 0) return -1;
	return this.maxValue;
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
	this.maxValue = Math.max(value, this.maxValue);
	this.queue.push(value);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
	if (this.queue.length === 0) return -1;
	var value = this.queue.shift();
	if (value >= this.maxValue) {
		this.maxValue = Math.max(...this.queue);
	}
    return value;
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */
