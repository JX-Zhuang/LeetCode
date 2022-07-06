/**
 * @param {string} expression
 * @return {number}
 */
class Scope {
    constructor() {
        this.scope = {};
    }
    setValue(key, value) {
        this.scope[key] = Number(value);
    }
    getValue(key) {
        if (this.scope.hasOwnProperty(key)) return this.scope[key];
        if (this.scope.__parentScope) {
            return this.scope.__parentScope.getValue(key);
        }
        return null;
    }
    setParentScope(parentScope) {
        this.scope.__parentScope = parentScope;
    }
}
var isValName = /[a-z]|[0-9]/;
var isNumber = /-|[0-9]/;
var getExpression = function (expression, startIndex) {
    var i, n = expression.length;
    if (expression[startIndex] === '(') {
        var leftCount = 1;
        i = startIndex + 1;
        while (leftCount !== 0 && i < n) {
            if (expression[i] === '(') {
                leftCount++;
            } else if (expression[i] === ')') {
                leftCount--;
            }
            i++;
        }
    } else {
        i = startIndex;
        while ((expression[i] !== ' ' && expression[i] !== ')') && i < n) {
            i++;
        }
    }
    return expression.substring(startIndex, i);
};
var getValue = function (expression, parentScope) {
    var scope = new Scope();
    scope.setParentScope(parentScope);
    var count = 0, n = expression.length, item = '', value = 0, lastValName, needReturn = false;
    if (expression[0].match(isNumber)) {
        // expression = 123
        return Number(expression);
    }
    if (expression[0] === '(' && expression[1].match(isNumber)) {
        // expression = (123)
        return Number(expression.substring(1, n - 1));
    }
    if (expression.startsWith('(add') || expression.startsWith('(mult')) {
        // expression = (add xxx xxx) 或 expression = (mult xxx xxx)
        needReturn = true;
    }
    while (count < n) {
        item = expression[count];
        if (item === '(' && count !== 0) {
            var newExpression = getExpression(expression, count);
            count += newExpression.length;
            value = evaluate(newExpression, scope);
            if (lastValName) {
                //(let x (add xxx xxx) y 123)
                scope.setValue(lastValName, value);
                lastValName = '';
            } else {
                //(let x 123 (add xxx xxx))
                return value;
            }
            continue;
        }
        if (item === '(' || item === ')') {
            count++;
            continue;
        }
        if (item === ' ') {
            count++;
            continue;
        }
        if (item.match(isNumber)) {
            var temp = item;
            item = '';
            while (count < n && temp.match(isNumber)) {
                item += expression[count];
                temp = expression[++count];
            }
            if (lastValName) {
                scope.setValue(lastValName, item);
                lastValName = '';
            }
            if (expression[count] === ')' && count === n - 1) return Number(item);
            continue;
        }
        if (item.match(isValName)) {
            var temp = item;
            item = '';
            while (count < n && temp.match(isValName)) {
                item += expression[count];
                temp = expression[++count];
            }
            if (item === 'add' || item === 'mult') {
                count++;
                var exp1 = getExpression(expression, count);
                count += exp1.length;
                count++;
                var exp2 = getExpression(expression, count);
                count += exp2.length;
                count++;
                var val1 = evaluate(exp1, scope), val2 = evaluate(exp2, scope);
                if (item === 'add') {
                    value += (val1 + val2);
                } else {
                    value += (val1 * val2);
                }
                if (needReturn) return value;
                scope.setValue(lastValName, value);
                lastValName = '';
            } else if (item === 'let') {
                ////
            } else {
                if (lastValName) {
                    scope.setValue(lastValName, scope.getValue(item));
                }
                lastValName = item;
                if (expression[count] === ')' && count === n - 1) return scope.getValue(item);
                if (!scope.getValue(item)) scope.setValue(item, 0);
            }
            continue;
        }
    }
    return scope.getValue(expression);
};
var evaluate = function (expression, scope = new Scope()) {
    return getValue(expression, scope);
};