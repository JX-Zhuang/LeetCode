/**
 * @param {string[]} words
 * @return {number[][]}
 */
var isPalidrome = function (word) {
    var left = 0, right = word.length - 1;
    while (left < right) {
        if (word[left] !== word[right]) return false;
        left++;
        right--;
    }
    return true;
}
var palindromePairs = function (words) {
    var ans = [];
    for (var i = 0; i < words.length; i++) {
        for (var j = 0; j < words.length; j++) {
            if (i !== j && isPalidrome(words[i] + words[j])) {
                ans.push([i, j]);
            }
        }
    }
    return ans;
};



/**
 * @param {string[]} words
 * @return {number[][]}
 */
var isPalidrome = function(word){
    var left = 0,right = word.length-1;
    while(left<right){
        if(word[left]!==word[right]) return false;
        left++;
        right--;
    }
    return true;
}
var palindromePairs = function(words) {
    var ans = [];
    var map = new Map();
    for(var i = 0;i<words.length;i++){
        var word = words[i];
        var k = word.split('').reverse().join('');
        map.set(k,i);
    }
    for(var i = 0;i<words.length;i++){
        var word = words[i];
        if(word!==""&&isPalidrome(word)&&map.has("")){
            ans.push([map.get(""),i]);
        }
        for(var j = 0;j<word.length;j++){
            var left = word.substring(0,j),right = word.substring(j,word.length);
            if(isPalidrome(left)&&map.has(right)&&i!==map.get(right)){
                ans.push([map.get(right),i]);
            }
            if(isPalidrome(right)&&map.has(left)&&i!==map.get(left)){
                ans.push([i,map.get(left)]);
            }
        }
    }
    return ans;
};