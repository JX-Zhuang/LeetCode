/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {
    var queue = [root],node = root;
    while(queue.length){
        node = queue.shift();
        if(node.right){
            queue.push(node.right);
        }
        if(node.left){
            queue.push(node.left);
        }
    }
    return node.val;
};