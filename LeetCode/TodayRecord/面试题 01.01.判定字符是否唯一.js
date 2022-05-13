// @algorithm @lc id=100158 lang=javascript 
// @title is-unique-lcci
import * as a from 'algm'
// @test("leetcode")=false
// @test("abc")=true
/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function(astr) {
    let flag = 0
    for(let i = 0; i < astr.length; i++) {
        let n = astr.charCodeAt(i)-97
        if(flag & (1 << n))
            return false
        flag |= (1 << n)
    }
    return true
};