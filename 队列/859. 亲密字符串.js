/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
    if(s.length !== goal.length) return false;
    var countS = new Array(26).fill(0),countGoal = new Array(26).fill(0),sum = 0;
     for(var i = 0;i<s.length;i++){
        const a = s[i].charCodeAt()-97,b = goal[i].charCodeAt()-97;
        countS[a]++;
        countGoal[b]++;
        if(a!==b) sum++;
    }
    var ok = false;
    for(var i = 0;i<countS.length;i++){
        if(countS[i]!==countGoal[i]) return false;
        if(countS[i]>1) ok = true;
    }
    return sum === 2 || (sum === 0 && ok);
}
