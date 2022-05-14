// @algorithm @lc id=691 lang=javascript 
// @title stickers-to-spell-word
import * as a from 'algm'
// @test(["with","example","science"],"thehat")=3
// @test(["notice","possible"],"basicbasic")=-1
/**
 * @param {string[]} stickers
 * @param {string} target
 * @return {number}
 */
var minStickers = function(stickers, target) {
    let f = new Array(1<<20).fill(-1)   // 记忆化
    let n = target.length
    function dfs(state) {
        if(state == (1<<n)-1) return 0
        if(f[state] != -1) return f[state]
        let ans = Number.MAX_VALUE
        for(let s of stickers) {
            let newState = state
            for(let ch of s) {
                for(let i = 0; i < n; i++) {
                    if(target.charAt(i) == ch && ((newState >> i) & 1) == 0)  {
                        newState |= 1 << i
                        break
                    }
                }
            }
            if(newState != state) 
                ans = Math.min(ans, dfs(newState) + 1)
        }
        return f[state] = ans
    }
    let res = dfs(0)
    return res == Number.MAX_VALUE ? -1 : res
};