// @test(2, 4)=3
// @algorithm @lc id=923 lang=javascript 
// @title super-egg-drop
// @test(1,2)=2
// @test(2,6)=3
// @test(3,14)=4
/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var superEggDrop = function(k, n) {
    let check = function(k, f) {    // k个鸡蛋，f次掉落，返回最大的n
        // 1个鸡蛋或1次掉落，最大n为f+1
        return (k === 1 || f === 1)? f+1: check(k-1, f-1) + check(k, f-1)
    }
    let f = 1
    while(check(k, f) <= n) ++f
    return f
};