function num2cn(n) {
    // write code here
    var result = '', remainder, flag;
    if (n === 0) return '零';
    if (n < 0) {
        n = -n;
        flag = true;
    };
    var carries = ['', '万', '亿'], carry = 0, length = 0;
    var unites = ['千', '百', '十', ''];
    var nums = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'], tempNums, temp = '';
    while (n) {
        temp = '';
        remainder = String(n % 10000);
        n = Math.floor(n / 10000);
        length = remainder.length;
        tempNums = new Array(4).fill('零');
        var startIndex = 3;
        for (var i = length - 1; i >= 0; i--) {
            tempNums[startIndex--] = nums[remainder[i]];
        }
        for (var i = 4 - length; i < tempNums.length; i++) {
            var item = tempNums[i];
            if (item === '零') {
                if (i === tempNums.length - 1) break;
                if (tempNums[i + 1] === '零') continue;
            }
            if (item === '零') {
                temp += item;
            } else {
                temp += `${item}${unites[i]}`;
            }
        }
        result = `${temp ? temp + carries[carry] : ''}` + result;
        if (n && length < 4 && result && result[0] !== '零') {
            result = '零' + result;
        }
        carry++;
    }
    if (result[0] === '一' && result[1] === '十') {
        result = result.substr(1);
    }
    return flag ? '负' + result : result;
}