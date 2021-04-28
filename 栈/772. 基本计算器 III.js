/**
 * @param {string} s
 * @return {number}
 */
var operators = {
    '+': 0,
    '-': 0,
    '/': 1,
    '*': 1
}
var priority = function (o1, o2) {
    return operators[o1] - operators[o2];
}
var cal = function (n1, n2, operator) {
    switch (operator) {
        case '-':
            return n1 - n2;
        case '+':
            return n1 + n2;
        case '*':
            return n1 * n2;
        case '/':
            const result = n1 / n2;
            return result > 0 ? Math.floor(n1 / n2) : 0;
    }
}
var isNumber = function (n) {
    if (n === undefined) return false;
    return n.match(/[0-9]/);
}

var calculate = function (s) {
    var i = 0;
    var recursion = function (s) {
        var numberStack = [],
            operatorStack = [];
        while (i < s.length && s[i] !== ')') {
            var item = s[i];
            if (item === '(') {
                i++;
                numberStack.push(recursion(s));
                i++;
            } else if (isNumber(item)) {
                while (isNumber(s[i + 1])) {
                    item += s[++i];
                }
                numberStack.push(Number(item));
                i++;
            } else {
                i++;
                if (operatorStack.length === 0) {
                    operatorStack.push(item);
                    continue;
                }
                while (priority(operatorStack[operatorStack.length - 1], item) >= 0) {
                    const n1 = numberStack.pop(),
                        n2 = numberStack.pop();
                    const n = cal(n2, n1, operatorStack.pop());
                    numberStack.push(n);
                }
                operatorStack.push(item);
            }
        }
        while (operatorStack.length) {
            const n1 = numberStack.pop(),
                n2 = numberStack.pop();
            const n = cal(n2, n1, operatorStack.pop());
            numberStack.push(n);
        }
        return numberStack.pop();
    };
    return recursion(s);
}