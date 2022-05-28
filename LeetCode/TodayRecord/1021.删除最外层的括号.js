// @algorithm @lc id=1078 lang=javascript 
// @title remove-outermost-parentheses
import * as a from 'algm'
// @test("(()())(())")="()()()"
// @test("(()())(())(()(()))")="()()()()(())"
// @test("()()")=""
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let res = ''
    let stack = []
    for(let i = 0; i < s.length; ++i) {
        let c = s[i]
        if(c === ')') stack.pop()
        if(stack.length) res += c 
        if(c === '(') stack.push(c)
    }
    return res
};