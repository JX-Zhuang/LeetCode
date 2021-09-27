var increasingTriplet = function (nums) {
    var min = Number.MAX_SAFE_INTEGER, mid = Number.MAX_SAFE_INTEGER;
    for (var num of nums) {
        if (num <= min) {
            min = num;
        } else if (num <= mid) {
            mid = num;
        } else if (num > mid) return true;
    }
    return false;
}