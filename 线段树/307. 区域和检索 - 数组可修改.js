/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    this.root = new SNode();
    this.sTree = new STree();
    this.N = nums.length;
    for (var i = 0; i < this.N; i++) {
        this.update(i, nums[i]);
    }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (index, val) {
    this.sTree.update(this.root, 0, this.N, index, index, val);
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    return this.sTree.query(this.root, 0, this.N, left, right);
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
var SNode = function () {
    this.left = null;
    this.right = null;
    this.add = false;
    this.val = 0;
}
var STree = function () { };
STree.prototype.update = function (node, min, max, left, right, val) {
    if (left <= min && max <= right) {
        node.val = val;
        node.add = true;
        return;
    }
    this.pushDown(node);
    var mid = min + max >> 1;
    if (left <= mid) this.update(node.left, min, mid, left, right, val);
    if (mid < right) this.update(node.right, mid + 1, max, left, right, val);
    this.pushUp(node);
};
STree.prototype.query = function (node, min, max, left, right) {
    if (left <= min && max <= right) return node.val;
    this.pushDown(node);
    var ans = 0;
    var mid = min + max >> 1;
    if (left <= mid) ans += this.query(node.left, min, mid, left, right);
    if (mid < right) ans += this.query(node.right, mid + 1, max, left, right);
    return ans;
};
STree.prototype.pushUp = function (node) {
    node.val = node.left.val + node.right.val;
};
STree.prototype.pushDown = function (node) {
    if (!node.left) node.left = new SNode();
    if (!node.right) node.right = new SNode();
    if (!node.add) return;
    node.left.val = node.right.val = node.val;
    node.left.add = node.right.add = true;
    node.add = false;
};