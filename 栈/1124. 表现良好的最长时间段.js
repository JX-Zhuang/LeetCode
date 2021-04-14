/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function (hours) {
    var ans = 0;
    var score = hours.map(h => h <= 8 ? 1 : -1);
    var prevsum = score.reduce((a, b) => a + b, 0);
    var stack = [];
    for(var i = 0;i<prevsum.length;i++){
        if(stack.length === 0 && prevsum[i]<prevsum[i-1]){
            stack.push(i);
        }
    }
    for(var i = 0;i<prevsum.length;i++){
        while(stack.length){
            
        }
    }
    return ans;
};