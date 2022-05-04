// @algorithm @lc id=100295 lang=javascript 
// @title shu-zhi-de-zheng-shu-ci-fang-lcof
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    // 快速幂嘛。处理下n为负数的情况
    function qpow(x, n) {
        if(x == 1) return 1
        let res = 1
        while(n) {
            if(n & 1) res *= x
            x *= x
            n >>>= 1
        }
        return res
    }
    return n < 0 ? 1 / qpow(x, -n) : qpow(x, n)
};