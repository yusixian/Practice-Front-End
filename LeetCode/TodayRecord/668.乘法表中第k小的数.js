// @algorithm @lc id=668 lang=javascript 
// @title kth-smallest-number-in-multiplication-table
import * as a from 'algm'
// @test(3,3,5)=3
// @test(2,3,6)=6
/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(m, n, k) {
    [m, n] = m <= n ? [m, n] : [n, m]
    let [l, r] = [1, m * n]
    while(l < r) {
        let mid = (l+r) >> 1
        let cnt = 0
        for(let i = 1; i <= n; i++) {
            cnt += (i*m)<= mid ? m : Math.floor(mid/i) 
        }
        if(cnt < k) l = mid + 1
        else r = mid
    }
    return r
};

// 1    2   3   4   5   6   7
// 2    4   6   8   10  12  14
// 3    6   9   12  15  18  21
// 4    8   12  16  20  24  28
// 5    10  15  20  25  30  35
// 6    12  18  24  30  36  42
// 7    14  21  28  35  42  49