/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var getMaxMatrix = function (matrix) {
  var max = Number.MIN_SAFE_INTEGER;
  var n = matrix.length,m = matrix[0].length;
  var ans = [],sum;
  for(var i = 0;i<n;i++){
    sum = Array(m).fill(0);
    for(var j = i;j<n;j++){
      var dp = 0,start = 0;
      for(var k = 0;k<m;k++){
        sum[k]+=matrix[j][k];
        dp+=sum[k];
        if(dp>max){
          max = dp;
          ans = [i,start,j,k];
        }
        if(dp<0){
          dp = 0;
          start = k+1;
        }
      }
    }
  }
  return ans;
};
