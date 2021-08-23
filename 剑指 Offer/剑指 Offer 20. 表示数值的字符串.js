/**
 * @param {string} s
 * @return {boolean}
 */
/**
 * ' ' =>空格
 * s => 正负号
 * d => 数字
 * . => 小数点
 * e => e E
 */
var n = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var isNumber = function (s) {
    /**
     * 0:空格
     * 1:e之前的s
     * 2:.之前的d
     * 3:.之后的d
     * 4:.为前为' '时，.后的d
     * 5:e
     * 6:e后的s
     * 7:e后的d
     * 8:空格
     */
    var state = [
        {
            ' ': 0,
            s: 1,
            d: 2,
            '.': 4
        },
        {
            d: 2,
            '.': 4
        },
        {
            d: 2,
            '.': 3,
            ' ': 8,
            e: 5
        },
        {
            d: 3,
            e: 5,
            ' ': 8
        },
        {
            d: 3
        },
        {
            d: 7,
            s: 6
        },
        {
            d: 7
        },
        {
            d: 7,
            ' ': 8
        },
        {
            ' ': 8
        }
    ];
    var p = 0, t = '';
    for (var c of s) {
        if (n.includes(c)) t = 'd';
        else if (c === '-' || c === '+') t = 's';
        else if (c === 'e' || c === 'E') t = 'e';
        else if (c === '.' || c === ' ') t = c;
        else t = '?';
        if (!state[p].hasOwnProperty(t)) return false;
        p = state[p][t];
    }
    return p === 2 || p === 3 || p === 7 || p === 8;
};