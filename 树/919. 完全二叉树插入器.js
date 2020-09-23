/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var CBTInserter = function (root) {
    this.root = root;
    this.arr = [];
    var queue = [root];
    while (queue.length) {
        var node = queue.shift();
        if (!node.left || !node.right) this.arr.push(node);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
};

/** 
 * @param {number} v
 * @return {number}
 */
CBTInserter.prototype.insert = function (v) {
    var node = this.arr[0];
    var newNode = new TreeNode(v);
    this.arr.push(newNode);
    if (node.left) {
        node.right = newNode;
        this.arr.shift();
    } else {
        node.left = newNode;
    }
    return node.val;
};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function () {
    return this.root;
};

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(v)
 * var param_2 = obj.get_root()
 */