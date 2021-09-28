var Node = function (value) {
    this.next = null;
    this.value = value;
}
/**
 * @param {number[][]} vec
 */
var Vector2D = function (vec) {
    var header = new Node();
    var temp = header;
    for (var item of vec) {
        if (item.length === 0) continue;
        var node = new Node(item);
        temp.next = node;
        temp = node;
    }
    this.header = header.next;
};

/**
 * @return {number}
 */
Vector2D.prototype.next = function () {
    var item = this.header.value.shift();
    if (this.header.value.length === 0) {
        this.header = this.header.next;
    }
    return item;
};

/**
 * @return {boolean}
 */
Vector2D.prototype.hasNext = function () {
    if (!this.header) return false;
    if (this.header.value.length === 0) return false;
    return true;
};

/**
 * Your Vector2D object will be instantiated and called as such:
 * var obj = new Vector2D(vec)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */