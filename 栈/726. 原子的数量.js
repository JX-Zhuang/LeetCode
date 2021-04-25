/**
 * @param {string} formula
 * @return {string}
 */
var isNumber = function (c) {
    return c.match(/[2-9]/);
};
var isLowerCase = function (c) {
    return c.match(/[a-z]/);
};
var isUpperCase = function (c) {
    return c.match(/[A-Z]/);
};
var updateObj = function (obj, key, count) {
    if (!obj.hasOwnProperty(key)) {
        obj[key] = 0;
    }
    obj[key] += Number(count);
};
var countOfAtoms = function (formula) {
    var obj = {};
    var i = 0;
    var recursion = function (formula) {
        var obj = {};
        var n = formula.length;
        while (i < n && formula[i] !== ')') {
            if (formula[i] === '(') {
                const count = recursion(formula);
                for (var key in count) {
                    updateObj(obj, key, count[key]);
                }
            } else {
                var item = formula[i];
                i++;
                while (isLowerCase(formula[i])) {
                    item += formula[i++];
                }
                var count = 1;
                while (isNumber(formula[i])) {
                    i++;
                    count++;
                }
                updateObj(obj, item, count);
            }
        }
        var count = 1;
        while (isNumber(formula[i])) {
            i++;
            count++;
        }
        for (var key in obj) {
            obj[key] *= count;
        }
        return obj;
    }
};