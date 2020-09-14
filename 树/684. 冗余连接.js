/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    var res;
    var paths = {};
    for(var edge of edges){
        var e1 = edge[0],e2 = edge[1];
        if(!paths.hasOwnProperty(e1)){
            paths[e1] = 0;
        }
        if(!paths.hasOwnProperty(e2)){
            paths[e2] = 0;
        }
        paths[e1]++;
        paths[e2]++;
    }
    console.log(paths)
    for(var edge of edges){
        var e1 = edge[0],e2 = edge[1];
        if(paths[e1]>1&&paths[e2]>1) res = edge;
    }
    return res;
};
//   4
//   | \
// 7-9-10
//      |
//  1-5-8-3
//      |
//    2-6