// @algorithm @lc id=1000336 lang=javascript 
// @title jJ0w9p
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let [l, r] = [0, x]
    let res = 0
    while(l <= r) {
        let mid = (l+r) >> 1
        const mul = mid*mid
        if(mul <= x) {
            res = mid
            l = mid+1
        } else r = mid-1
    }
    return res
};