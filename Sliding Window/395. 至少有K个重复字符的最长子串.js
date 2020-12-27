/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    var res = 0;
    for(var i = 1;i<=26;i++){
        res = Math.max(res,helper(s,k,i));
    }
    return res;
 };
 var helper = function(s,k,i){
     var window = {};
     for(var item of s) window[item] = 0;
     var left = 0,right = 0;
     var numNoLessThanK = 0;
     var res = 0;
     var count = 0;
     while(right<s.length){
         var c = s[right++];
         if(window[c] === 0){
             count++;
         }
         window[c]++;
         if(window[c] === k){
             numNoLessThanK++;
         }
         while(count>i){
             var d = s[left++];
             if(window[d] === k){
                 numNoLessThanK--;
             }
             window[d]--;
             if(window[d] === 0){
                 count--;
             }
         }
         if(count === numNoLessThanK){
             res = Math.max(right-left,res);
         }
     }
     return res;
 };