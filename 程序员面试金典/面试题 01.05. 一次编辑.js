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
