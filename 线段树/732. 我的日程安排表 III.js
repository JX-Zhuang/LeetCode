var max = 1000000000;
var MyCalendarThree = function () {
    this.root = new SNode();
    this.sTree = new STree();
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {number}
 */
MyCalendarThree.prototype.book = function (start, end) {
    this.sTree.update(this.root, 0, max, start, end - 1, 1);
    return this.root.val;
};

/**
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(start,end)
 */
var SNode = function () {
    this.left = null;
    this.right = null;
    this.add = 0;
    this.val = 0;
};
var STree = function () { };
STree.prototype.update = function (node, min, max, left, right, val) {
    if (left <= min && max <= right) {
        node.val += val;
        node.add += val;
        return;
    }
    this.pushdown(node);
    var mid = min + max >> 1;
    if (left <= mid) this.update(node.left, min, mid, left, right, val);
    if (mid < right) this.update(node.right, mid + 1, max, left, right, val);
    this.pushup(node);
}
STree.prototype.pushdown = function (node) {
    if (!node.left) node.left = new SNode();
    if (!node.right) node.right = new SNode();
    if (!node.add) return;
    node.left.val += node.add;
    node.right.val += node.add;
    node.left.add += node.add;
    node.right.add += node.add;
    node.add = 0;
}
STree.prototype.pushup = function (node) {
    node.val = Math.max(node.left.val, node.right.val);
}