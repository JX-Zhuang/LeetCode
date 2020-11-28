/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
    var max='' ;
    for(var i = 0;i<n;i++){
        max+='9';
    }
    return new Array(Number(max)).fill(1).map((i,index)=>index+1);
};