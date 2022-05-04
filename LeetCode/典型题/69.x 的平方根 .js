// @algorithm @lc id=69 lang=javascript 
// @title sqrtx
// @test(4)=2
// @test(8)=2
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let [l, r] = [0, x]
    while (l <= r) {
        let mid = (l+r)>>1
        if (mid*mid <= x) {
            l = mid+1
        } else r = mid-1
    }
    return r
};