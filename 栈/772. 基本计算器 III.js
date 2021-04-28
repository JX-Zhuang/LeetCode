/**
 * @param {string} s
 * @return {number}
 */
var priority = function (o1, o2) {
    if (o1 === '*' || o1 === '/') return true;
    return false;
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
            return Math.floor(n1 / n2);
    }
}
var isNumber = function (n) {
    if (n === undefined) return false;
    return n.match(/[0-9]/);
}
var calculate = function (s) {
    var numberStack = [],
        operatorStack = [];
    for (var i = 0; i < s.length; i++) {
        var item = s[i];
        if (isNumber(item)) {
            while (isNumber(s[i + 1])) {
                item += s[++i];
            }
            numberStack.push(Number(item));
        } else {
            if (operatorStack.length === 0) {
                operatorStack.push(item);
                continue;
            }
            while (priority(operatorStack[operatorStack.length - 1])) {
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