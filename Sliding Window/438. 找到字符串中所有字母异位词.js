/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    var need = {},window = {};
    for(var i of p){
        if(!need.hasOwnProperty(i)) need[i] = 0;
        need[i]++;
    }
    var left = 0,right = 0;
    var valid = 0,ans = [];
    while(right<s.length){
        var c = s[right++];
        if(need.hasOwnProperty(c)){
            if(!window.hasOwnProperty(c)) window[c] = 0;
            window[c]++;
            if(window[c] === need[c]) valid++;
        }
        while(right - left >= p.length){
            if(valid === Object.keys(need).length) ans.push(left);
            var c = s[left++];
            if(need.hasOwnProperty(c)){
                if(window[c] === need[c]) valid--;
                window[c]--;
            }
        }
    }
    return ans;
};