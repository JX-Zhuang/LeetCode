/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    var m1 = {}, m2 = {};
    for (var i = 0; i < s.length; i++) {
        if (m1.hasOwnProperty(s[i])) {
            if (m1[s[i]] !== t[i]) return false;
        }
        if (m2.hasOwnProperty(t[i])) {
            if (m2[t[i]] !== s[i]) return false;
        }
        m1[s[i]] = t[i];
        m2[t[i]] = s[i];
    }
    return true;
};