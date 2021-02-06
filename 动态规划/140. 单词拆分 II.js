/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    var wordDictSet = new Set(wordDict);
    var n = s.length;
    var dp = Array.from(new Array(n + 1), () => []);
    dp[0] = ['']
    for(var i = 1;i<=n;i++){
        for(var j = 0;j<i;j++){
            if(dp[j].length && wordDictSet.has(s.slice(j,i))){
                dp[i] = dp[i].concat(dp[j].map(item=>item+(item?' ':'')+s.slice(j,i)));
            }
        }
    }
    return dp[n];
};