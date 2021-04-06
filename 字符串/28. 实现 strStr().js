/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle == '') return 0;
    if (haystack.length < needle.length) return -1;
    for (var i = 0; i < haystack.length; i++) {
        let temp = i;
        for (var j = 0; j < needle.length; j++) {
            if (haystack[temp++] != needle[j]) break;
        }
        if (j == needle.length) return i;
    }
    return -1;
};
