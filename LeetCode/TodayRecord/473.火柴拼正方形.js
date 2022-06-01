// @algorithm @lc id=473 lang=javascript 
// @title matchsticks-to-square
import * as a from 'algm'
// @test([1,1,2,2,2])=true
// @test([3,3,3,3,4])=false
/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function(matchsticks) {
    if(matchsticks.length < 4) return false 
    let sum = matchsticks.reduce((a,b)=>a+b,0)
    if(sum % 4 !== 0) return false
    let target = sum / 4
    matchsticks.sort((a,b)=>b-a)
    let edges = new Array(4).fill(0)
    function dfs(idx) {
        if(idx === matchsticks.length) return true
        for(let i = 0; i < 4; i++) {
            edges[i] += matchsticks[idx]
            if(edges[i] <= target && dfs(idx+1)) return true
            edges[i] -= matchsticks[idx]
        }
        return false
    }
    return dfs(0)
};