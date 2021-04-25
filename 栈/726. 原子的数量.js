/**
 * @param {string} formula
 * @return {string}
 */
var isNumber = function (c) {
    return /[0-9]/.test(c);
};
var isLowerCase = function (c) {
    if (c === undefined) return false;
    return /[a-z]/.test(c);
};
var updateObj = function (obj, key, count) {
    if (!obj.hasOwnProperty(key)) {
        obj[key] = 0;
    }
    obj[key] += Number(count);
};
var countOfAtoms = function (formula) {
    var i = 0;
    var recursion = function (formula) {
        var obj = {};
        var n = formula.length;
        while (i < n && formula[i] !== ')') {
            if (formula[i] === '(') {
                i++;
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
                var count = '';
                while (isNumber(formula[i])) {
                    count += formula[i++];
                }
                updateObj(obj, item, count || 1);
            }
        }
        while (formula[i] === ')') i++;
        var count = '';
        while (isNumber(formula[i])) {
            count += formula[i++];
        }
        for (var key in obj) {
            obj[key] *= count || 1;
        }
        return obj;
    };
    var obj = recursion(formula);
    var arr = Object.keys(obj);
    arr.sort();
    return arr.sort().map(key => obj[key] === 1 ? key : (key + obj[key])).join('');
};