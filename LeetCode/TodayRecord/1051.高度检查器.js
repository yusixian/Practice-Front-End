// @algorithm @lc id=1137 lang=javascript 
// @title height-checker
import * as a from 'algm'
// @test([1,1,4,2,1,3])=3
// @test([5,1,2,3,4])=5
// @test([1,2,3,4,5])=0
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let h2 = [...heights]
    h2.sort((a, b) => a - b)
    let res = 0
    for(let i = 0; i < h2.length; i++) {
        if(h2[i] !== heights[i])
            ++res
    }
    return res
};