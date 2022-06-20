var SNode = function () {
    this.left = null;
    this.right = null;
    this.add = false;
    this.val = false;
}
var STree = function () { };
STree.prototype.update = function (node, min, max, left, right, val) {
    if (left <= min && max <= right) {
        node.val = val;
        node.add = true;    //需要懒更新，因为子树不一定正确，在查找时可能出错
        return;
    }
    this.pushDown(node);
    var mid = min + max >> 1;
    if (left <= mid) this.update(node.left, min, mid, left, right, val);
    if (mid < right) this.update(node.right, mid + 1, max, left, right, val);
    //后续遍历，更新完子树后，再更新父节点
    this.pushUp(node);
};
STree.prototype.query = function (node, min, max, left, right) {
    if (left <= min && max <= right) return node.val;
    this.pushDown(node);
    var mid = min + max >> 1;
    var ans = true;
    if (left <= mid) ans = ans && this.query(node.left, min, mid, left, right);
    if (mid < right) ans = ans && this.query(node.right, mid + 1, max, left, right);
    return ans;
};
STree.prototype.pushDown = function (node) {
    if (!node.left) node.left = new SNode();
    if (!node.right) node.right = new SNode();
    if (!node.add) return;   //不需要懒更新
    node.left.add = node.right.add = true;  //把子树标记为懒更新
    node.left.val = node.right.val = node.val;
    node.add = false;
};
STree.prototype.pushUp = function (node) {
    node.val = node.left.val && node.right.val;
};
var max = 1000000000;
var RangeModule = function () {
    this.sTree = new STree();
    this.root = new SNode();
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {void}
 */
RangeModule.prototype.addRange = function (left, right) {
    this.sTree.update(this.root, 1, max, left, right - 1, true);
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {boolean}
 */
RangeModule.prototype.queryRange = function (left, right) {
    return this.sTree.query(this.root, 1, max, left, right - 1);
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {void}
 */
RangeModule.prototype.removeRange = function (left, right) {
    this.sTree.update(this.root, 1, max, left, right - 1, false);
};

/**
 * Your RangeModule object will be instantiated and called as such:
 * var obj = new RangeModule()
 * obj.addRange(left,right)
 * var param_2 = obj.queryRange(left,right)
 * obj.removeRange(left,right)
 */