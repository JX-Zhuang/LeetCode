/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
    var str = '';
    for (var i = 0; i < address.length; i++) {
        if (address[i] === '.') {
            str += '[.]';
        } else {
            str += address[i];
        }
    }
    return str;
    return address.replace(/\./g, '[.]');
};