/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
    var arr = [];
    var l = 0;
    for (var item of pushed) {
        arr.push(item);
        while (arr.length !== 0 && arr[arr.length - 1] === popped[l]) {
            l++;
            arr.pop();
        }
    }
    return l === popped.length;
};