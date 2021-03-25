/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
    return new Array(Math.pow(10,n)-1).fill(1).map((i,index)=>index+1);
};