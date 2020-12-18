/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    var ans = [];
    var visited = [];
    var backtrack = function (index, arr) {
        if (index === nums.length) {
            ans.push([...arr]);
            return;
        }
        for (var i = 0; i < nums.length; i++) {
            if (visited[i] || (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1])) continue;
            arr.push(nums[i]);
            visited[i] = true;
            backtrack(index + 1, arr);
            arr.pop();
            visited[i] = false;
        }
    };
    nums.sort((x, y) => x - y);
    backtrack(0, []);
    return ans;
};