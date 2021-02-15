/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
	this.cnt = {};
	this.cache = [];
	this.map = new Map();
	this.size = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
	var item = this.map.get(key);
	if (item === undefined) return -1;
	this.cnt[key]++;
	var index = this.cache.indexOf(key);
	if (index !== -1) {
		this.cache.splice(index, 1);
	}
	this.cache.unshift(key);
	return item;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
	if (this.size === 0) return;
	if (!this.map.has(key)) {
		if (this.map.size === this.size) {
			var minCountKey = this.cache[0];
			var index = 0;
			for (var i = 1; i < this.cache.length; i++) {
				if (this.cnt[this.cache[i]] <= this.cnt[minCountKey]) {
					minCountKey = this.cache[i];
					index = i;
				}
			}
			this.cache.splice(index, 1);
			delete this.cnt[minCountKey];
			this.map.delete(minCountKey);
		}
	}
	this.map.set(key, value);
	if (!this.cnt.hasOwnProperty(key)) {
		this.cnt[key] = 0;
	}
	this.cnt[key]++;
	this.cache.unshift(key);
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
