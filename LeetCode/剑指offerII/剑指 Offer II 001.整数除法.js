// @algorithm @lc id=1000228 lang=javascript 
// @title xoh6Oh
// import * as a from 'algm'
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var divide = function(a, b) {
    let [minv, maxv] = [-2147483648, 2147483647]
    let flag = 1
    if(a == maxv) { // 尽可能减少特殊情况
        if(b == 1) return maxv
        else if(b == -1) return -maxv
    } else if(a == minv) {
        if(b == 1) return minv
        else if(b == -1) return maxv //  溢出
    }
    if(a > 0) {
        a *= -1
        flag *= -1
    }
    if(b > 0) {
        b *= -1
        flag *= -1
    }
    if(a > b || a == 0) return 0    // 不好除
    let res = 0
    while(a <= b) {
        let [val, q] = [b, 1]
        while(val >= -(1<<30) && a <= val+val) {
            val += val
            q += q
        }
        a -= val
        res += q
    }
    return res*flag
};