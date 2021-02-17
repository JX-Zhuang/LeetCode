class Node {
	constructor(key, value, freq) {
		this.key = key;
		this.value = value;
		this.freq = freq;
		this.prev = null;
		this.next = null;
	}
}
class DoubleList {
	constructor() {
		this.headNode = new Node();
		this.tailNode = new Node();
		this.headNode.next = this.tailNode;
		this.tailNode.prev = this.headNode;
	}
	isEmpty() {
		return this.headNode.next.next === null;
	}
	// 元素添加到头部
	addFirst(node) {
		node.next = this.headNode.next;
		node.prev = this.headNode;
		this.headNode.next.prev = node;
		this.headNode.next = node;
	}
	// 删除某一元素
	remove(node) {
		node.next.prev = node.prev;
		node.prev.next = node.next;
	}
	// 返回尾部元素
	peekLast() {
		return this.tailNode.prev;
	}
}

/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
	this.freqTable = new Map(); // freq->list<Node>  list最左边的元素是最近的
	this.keyTable = new Map(); // key->node
	this.minFreq = 0;
	this.size = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
	if (this.size <= 0 || !this.keyTable.has(key)) return -1;
	const node = this.keyTable.get(key);
	const { freq, value } = node;
	this.freqTable.get(freq).remove(node);
	if (this.freqTable.get(freq).isEmpty()) {
		if (this.minFreq === freq) this.minFreq++;
	}
	const newNode = new Node(key, value, freq + 1);
	if (!this.freqTable.has(newNode.freq)) {
		this.freqTable.set(newNode.freq, new DoubleList());
	}
	this.freqTable.get(newNode.freq).addFirst(newNode);
	this.keyTable.set(key, newNode);
	return value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
	if (this.size <= 0) return;
	if (this.keyTable.has(key)) {
		const node = this.keyTable.get(key);
		const { freq } = node;
		this.freqTable.get(freq).remove(node);
		if (this.freqTable.get(freq).isEmpty()) {
			if (this.minFreq === freq) this.minFreq++;
		}
		const newNode = new Node(key, value, freq + 1);
		if (!this.freqTable.has(newNode.freq)) {
			this.freqTable.set(newNode.freq, new DoubleList());
		}
		this.freqTable.get(newNode.freq).addFirst(newNode);
		this.keyTable.set(key, newNode);
	} else {
		const node = new Node(key, value, 1);
		if (this.size === this.keyTable.size) {
			const freqList = this.freqTable.get(this.minFreq);
			this.keyTable.delete(freqList.peekLast().key);
			freqList.remove(freqList.peekLast());
		}
		if (!this.freqTable.has(node.freq)) {
			this.freqTable.set(node.freq, new DoubleList());
		}
		this.freqTable.get(node.freq).addFirst(node);
		this.minFreq = 1;
		this.keyTable.set(key, node);
	}
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
