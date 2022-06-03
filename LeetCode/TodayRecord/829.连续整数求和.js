// @algorithm @lc id=856 lang=javascript 
// @title consecutive-numbers-sum
import * as a from 'algm'
// @test(5)=2
// @test(9)=3
// @test(15)=4
/**
 * @param {number} n
 * @return {number}
 */
var consecutiveNumbersSum = function(n) {
    let res = 0
    n *= 2
    for(let k = 1; k*k < n; ++k) { //项数
        if(n % k != 0) continue
        if((Math.floor(n/k) - (k-1)) % 2 == 0 ) ++res
    }
    return res
};
// 数论 https://leetcode.cn/problems/consecutive-numbers-sum/solution/by-ac_oier-220q/