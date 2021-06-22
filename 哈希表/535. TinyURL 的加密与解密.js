/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var m = new Map();
var str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var encode = function (longUrl) {
    var url = '';
    for (var i = 0; i < 6; i++) {
        url += str[parseInt(Math.random() * str.length)];
    }
    m.set(url, longUrl);
    return 'http://tinyurl.com/' + url;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
    return m.get(shortUrl.replace('http://tinyurl.com/', ''));
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */