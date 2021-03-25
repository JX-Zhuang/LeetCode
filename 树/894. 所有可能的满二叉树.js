/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} N
 * @return {TreeNode[]}
 */
var allPossibleFBT = function (N) {
    var map = new Map();
    var helper = function (N) {
        if (!map.has(N)) {
            var arr = [];
            if (N == 1) {
                arr.push(new TreeNode(0));
            } else if (N % 2 == 1) {
                for (var x = 0; x < N; x++) {
                    var y = N - 1 - x;
                    for (var left of allPossibleFBT(x)) {
                        for (var right of allPossibleFBT(y)) {
                            var node = new TreeNode(0);
                            node.left = left;
                            node.right = right;
                            arr.push(node);
                        }
                    }
                }
            }
            map.set(N, arr);
        }
        return map.get(N);
    }
    return helper(N);
};