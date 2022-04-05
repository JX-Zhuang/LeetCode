/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
    var stack = [];
    var a, b;
    ops.forEach(item => {
        switch (item) {
            case '+': {
                a = stack.pop();
                b = stack.pop();
                stack.push(b, a, ((a ? a : 0) + (b ? b : 0)));
                break;
            }
            case 'D': {
                a = stack.pop();
                stack.push(a, a * 2);
                break;
            }
            case 'C':
                stack.pop();
                break;
            default:
                stack.push(Number(item));
                break;
        }
    });
    return stack.reduce((a, b) => a + b);
};