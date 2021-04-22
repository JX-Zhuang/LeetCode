/**
 * @param {string} s
 * @return {string}
 */

var reverseParentheses = function (s) {
    var stack = [];
    for (var c of s) {
        if (c !== ')') {
            stack.push(c);
        } else {
            var temp = [];
            while (stack.length && stack[stack.length - 1] !== '(') temp.push(stack.pop());
            stack.pop();
            stack = stack.concat(temp);
        }
    }
    return stack.join('');
};
// "(ed(et(oc))el)"
// 1.stack = [(,e,d,(,e,t,(,o,c];
// 2.temp = [c,o]
//     stack=[(,e,d,(,e,t,c,o];
// 3.temp = [o,c,t,e]
// stack = [(,e,d,o,c,t,e]
// 4.stack = [(,e,d,o,c,t,e,e,l]
// 5.temp = [l,e,e,t,c,o,d,e]
// statck = [l,e,e,t,c,o,d,e]