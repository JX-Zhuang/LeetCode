/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    var nums = [], ops = [], temp = -1;
    for (var ch of s) {
        if (ch == ' ') continue;
        if (ch == Number(ch)) {
            if (temp == -1) {
                temp = ch - 0;
            } else {
                temp = temp * 10 + (ch - 0);
            }
        } else {
            if (temp != -1) {
                nums.push(temp);
                temp = -1;
            }
            if (ch == '*' || ch == '/') {
                let o = ops[ops.length - 1];
                if (o == '/' || o == '*') {
                    o = ops.pop();
                    let num1 = nums.pop();
                    let num2 = nums.pop();
                    if (o == '*') {
                        nums.push(num2 * num1);
                    } else if (o == '/') {
                        nums.push(Math.floor(num2 / num1));
                    }
                }
            } else {
                while (ops.length != 0) {
                    let num1 = nums.pop();
                    let num2 = nums.pop();
                    let o = ops.pop();
                    if (o == '+') {
                        nums.push(num2 + num1);
                    } else if (o == '-') {
                        nums.push(num2 - num1);
                    } else if (o == '*') {
                        nums.push(num2 * num1);
                    } else if (o == '/') {
                        nums.push(Math.floor(num2 / num1));
                    }
                }
            }
            ops.push(ch);
        }
    }
    if (temp != -1) {
        nums.push(temp);
    }
    while (ops.length != 0) {
        let num1 = nums.pop();
        let num2 = nums.pop();
        let o = ops.pop();
        if (o == '+') {
            nums.push(num2 + num1);
        } else if (o == '-') {
            nums.push(num2 - num1);
        } else if (o == '*') {
            nums.push(num2 * num1);
        } else if (o == '/') {
            nums.push(Math.floor(num2 / num1));
        }
    }
    return nums.pop();
};
