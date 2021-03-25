/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
    var o = {};
    for(var i = 0;i<s.length;i++){
        var item = s[i];
        if(!o[item]) o[item] = 0;
        o[item]++;
    }
    for(var k in o){
        if(o[k]===1) return k;
    }
    return " ";
};