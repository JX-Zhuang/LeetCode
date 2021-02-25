/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    var l = Math.pow(2,n);
    var arr = Array.from(l,(i, index) => index);
    var ans ; 
    var backtrack = function(start,track){
        if(track.length === l){
            ans = track;
            return;
        }
        for(var i = start;i<l;i++){

        }
    };
    backtrack(1,[0]);
    return ans;
};
