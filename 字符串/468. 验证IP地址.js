/**
 * @param {string} queryIP
 * @return {string}
 */
var isIPv6 = function (queryIP) {
    const arr = queryIP.split(':');
    if (arr.length !== 8) return false;
    for (var item of arr) {
        item = item.toLocaleLowerCase();
        if (item.length < 1 || item.length > 4) return false;
        if (item.match(/[^0-9a-f]/)) return false;
    }
    return true;
}
var isIPv4 = function (queryIP) {
    const arr = queryIP.split('.');
    if (arr.length !== 4) return false;
    for (var item of arr) {
        if (!item || item !== '0' && item.match(/^0/)) return false;
        if (item.match(/\D/)) return false;
        var ip = Number(item);
        if (ip > 255 || ip < 0) return false;
    }
    return true;
}
var validIPAddress = function (queryIP) {
    if (queryIP.includes('.')) {
        return isIPv4(queryIP) ? "IPv4" : "Neither";
    }
    return isIPv6(queryIP) ? "IPv6" : "Neither";
};