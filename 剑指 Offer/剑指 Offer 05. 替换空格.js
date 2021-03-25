/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
    var arr = [];
    for(var i = 0;i<s.length;i++){
        if(s[i] === ' '){
            arr.push('%20');
        }else{
            arr.push(s[i]);
        }
    }
    return arr.join('');
};