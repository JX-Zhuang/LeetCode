/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
var oneEditAway = function(first, second) {
	if (first === second) return true;
	var m = first.length;
	var n = second.length;
	if (Math.abs(m - n) > 1) return false;
	if (m === n) {
		var used = false;
		for (var i = 0; i < m; i++) {
			if (first[i] !== second[i]) {
				if (used) {
					return false;
				}
				used = true;
			}
		}
		return true;
	} else {
		if (m === 0 || n === 0) return true;
		var maxStr, minStr;
		if (m > n) {
			maxStr = first;
			minStr = second;
		} else {
			maxStr = second;
			minStr = first;
		}
		var used = false;
		var i = 0,
			j = 0;
		while (i < maxStr.length && j < minStr.length) {
			if (maxStr[i] !== minStr[j]) {
				if (used) return false;
				used = true;
			} else {
				j++;
			}
			i++;
		}
		return true;
	}
};
/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
var oneEditAway = function(first, second) {
	var m = first.length;
	var n = second.length;
	if (first === second) return true;
	if (Math.abs(m - n) > 1) return false;
	var i = 0;
	while (i < m && i < n && first[i] === second[i]) i++;
	var f = m - 1,
		s = n - 1;
	while (f >= 0 && s >= 0 && first[f] === second[s]) {
		f--;
		s--;
	}
	return f - i < 1 && s - i < 1;
};
