/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    var p = path.split('/');
    var stack = [];
    for (var item of p) {
        if (item === '..') {
            stack.pop();
        } else if (item === '.' || item === '') {
            continue;
        } else {
            stack.push(item);
        }
    }
    return '/' + stack.join('/');
};