// @algorithm @lc id=464 lang=javascript 
// @title can-i-win
import * as a from 'algm'
// @test(10,11)=false
// @test(10,0)=true
// @test(10,1)=true
/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function(maxChoosableInteger, desiredTotal) {
    let [n, total] = [maxChoosableInteger, desiredTotal]
    let dp = new Array(1<<20).fill(0)
    if(n*(n+1) / 2 < total) return false
    if(total == 0) return true
    function dfs(state, nowsum) {    // 当前被选择的数state 当前累计和sum 轮次k
        if(dp[state] != 0) return dp[state]
        for(let i = 0; i < n; ++i) {
            if(state & (1<<i)) continue
            if(nowsum + i + 1 >= total) 
                return dp[state] = 1
            if(dfs(state | (1<<i), nowsum + i + 1) == -1) 
                return dp[state] = 1
        }
        return dp[state] = -1
    }

    return dfs(0, 0) === 1
};
// 此题是比较经典的博弈论+状压dp+记忆化搜索，值得一做
// state为一个二进制数  表示[1, n] 范围内的被选择的数的情况 选择的数位置上为1否则为0
// https://leetcode.cn/problems/can-i-win/solution/by-ac_oier-0ed9/