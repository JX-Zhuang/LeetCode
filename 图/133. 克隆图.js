/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    var visited = {};
    var helper = function(node){
        if(!node) return;
        if(visited[node.val]){
            return visited[node.val];
        }
        var neighbors = [];
        var newNode = new Node(node.val,neighbors);
        visited[node.val] = newNode;
        for(var n of node.neighbors){
            neighbors.push(helper(n));
        }
        return newNode;
    };
    var r = helper(node);
    return r;
};